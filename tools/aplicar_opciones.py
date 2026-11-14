#!/usr/bin/env python3
"""Reemplaza o[], ok y no[] (y opcionalmente refs) de preguntas existentes.
Uso: python3 tools/aplicar_opciones.py tools/opciones_mX.json eval/casos-mX.js
JSON: {"caso": {"qid": {"o": [...], "ok": n, "no": [... null ...], "refs": [...]?}}}"""
import json, re, sys

def js(s):
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"

def arr(a):
    return "[" + ",".join("null" if x is None else js(x) for x in a) + "]"

patch = json.load(open(sys.argv[1]))
path = sys.argv[2]
src = open(path).read()
n = 0
for caso, qs in patch.items():
    ci = src.index("id:'" + caso + "'")
    nxt = src.find("\n{\nid:'", ci + 5)
    cend = len(src) if nxt < 0 else nxt
    for qid, d in qs.items():
        seg = src[ci:cend]
        qi = seg.index("{id:'" + qid + "',")
        qe = seg.find("\n{id:'", qi + 5)
        qe2 = seg.find("\n]}", qi + 5)
        ends = [x for x in (qe, qe2) if x > 0]
        qend = min(ends) if ends else len(seg)
        q = seg[qi:qend]
        assert d["no"][d["ok"]] is None, (caso, qid)
        assert len(d["o"]) == len(d["no"]), (caso, qid)
        q2, k1 = re.subn(r"\no:\[.*?\],ok:\d+,", "\no:" + arr(d["o"]) + ",ok:" + str(d["ok"]) + ",", q, count=1, flags=re.S)
        q2, k2 = re.subn(r"\nno:\[.*?\],\nbase:", "\nno:" + arr(d["no"]) + ",\nbase:", q2, count=1, flags=re.S)
        assert k1 == 1 and k2 == 1, (caso, qid, k1, k2)
        if "refs" in d:
            q2, k3 = re.subn(r"refs:\[[^\]]*\]\}", "refs:" + json.dumps(d["refs"]).replace('"', "'").replace(", ", ",") + "}", q2, count=1)
            assert k3 == 1, (caso, qid, "refs")
        seg = seg[:qi] + q2 + seg[qend:]
        delta = len(seg) - (cend - ci)
        src = src[:ci] + seg + src[cend:]
        cend += delta
        n += 1
open(path, "w").write(src)
print(path, n, "preguntas actualizadas")
