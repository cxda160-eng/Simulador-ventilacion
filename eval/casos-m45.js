/* Módulo 4 · Mecánica respiratoria y Módulo 5 · Gases en sangre */
(function(){
const E=window.EVAL=window.EVAL||{refs:{},casos:[],glos:[],modos:[]};
E.casos.push(
{
id:'mecanica',mod:4,mods:[4,2],nivel:'basico',sim:'ev_mec_1',
titulo:'Leer la pantalla: la mecánica respiratoria con números',
sub:'MAP, I:E, constante de tiempo, volumen minuto, compliance y atrapamiento',
pres:{
 'Edad gestacional':'31 semanas',
 'Edad postnatal':'12 horas',
 'Peso al nacer / actual':'1500 g / 1500 g',
 'Antecedentes perinatales':'Corticoides completos. Intubado por apneas y SDR moderado.',
 'Diagnóstico':'SDR moderado.',
 'Motivo':'Revisión de parámetros en la recorrida.',
 'Hemodinamia':'Estable.',
 'Estado respiratorio':'AC limitada por presión: PIP 18, PEEP 5, Ti 0,35 s, FR 50 (no dispara por encima).',
 'Examen físico':'Buena expansión.',
 'Radiografía de tórax':'Opacidad reticulogranular leve.',
 'Gases':'pH 7,38 · pCO₂ 42',
 'Oxigenación':'SpO₂ 93 % con FiO₂ 0,30',
 'Mecánica medida':'VTe 7,5 mL · Resistencia 150 cmH₂O/L/s'},
inicial:'En la recorrida se pide calcular a mano los valores que el respirador muestra, para entender de dónde salen.',
obj:['Calcular la MAP con onda rectangular.','Calcular la relación I:E.','Calcular la compliance dinámica y la constante de tiempo.','Calcular el volumen minuto.','Predecir el atrapamiento aéreo a partir de la constante de tiempo.','Reconocer la sobredistensión en el bucle presión-volumen.'],
etapas:[
{sim:'ev_mec_1',t:'Etapa 1 · Presiones y tiempos',d:{'PIP':'18','PEEP':'5','Ti':'0,35 s','FR':'50 rpm'},
q:[
{id:'q1',tema:'Cálculo de la MAP',p:'Con onda de presión aproximadamente rectangular, ¿cuál es la MAP estimada?',
o:['6,2 cmH₂O','8,8 cmH₂O','11,5 cmH₂O','13,0 cmH₂O'],ok:1,
exp:'MAP ≈ PEEP + (PIP − PEEP) × Ti / Ttotal. Ttotal = 60/50 = 1,2 s. Ti/Ttotal = 0,35/1,2 = 0,29. MAP = 5 + 13 × 0,29 = 8,8 cmH₂O. El valor real es algo menor porque la presión tarda en subir.',
no:['Subestima la fracción inspiratoria.',null,'Resulta de usar la mitad del ciclo como Ti.','Es la presión media entre PIP y PEEP, que solo vale si Ti ocupa todo el ciclo.'],
base:'La MAP es el área bajo la curva de presión dividida por la duración del ciclo; es el principal determinante de la oxigenación.',ev:'E',refs:['goldsmith2022']},
{id:'q2',tema:'Relación I:E',p:'¿Cuál es la relación I:E?',
o:['1:1','1:1,5','1:2,4','1:3,4'],ok:2,
exp:'Te = 1,2 − 0,35 = 0,85 s. I:E = 0,35 : 0,85 = 1 : 2,4.',
no:['Correspondería a Ti = Te = 0,6 s.','Correspondería a Ti 0,48 s.',null,'Correspondería a un ciclo más largo.'],
base:'Ttotal = 60 / FR; Te = Ttotal − Ti.',ev:'E',refs:['goldsmith2022']}
]},
{sim:'ev_mec_1',t:'Etapa 2 · Mecánica',d:{'VTe':'7,5 mL (5 mL/kg)','ΔP':'13 cmH₂O','Resistencia':'150 cmH₂O/L/s'},
q:[
{id:'q3',tema:'Compliance dinámica',p:'¿Cuál es la compliance dinámica?',
o:['0,38 mL/cmH₂O','0,58 mL/cmH₂O','1,7 mL/cmH₂O','97 mL/cmH₂O'],ok:1,
exp:'C = VT / ΔP = 7,5 / 13 = 0,58 mL/cmH₂O (0,38 mL/cmH₂O/kg). Es baja, como se espera en el SDR.',
no:['0,38 es el valor por kilo, no el total.',null,'Es el inverso (ΔP/VT).','Sale de multiplicar en lugar de dividir.'],
base:'Compliance = cambio de volumen / cambio de presión.',ev:'E',refs:['goldsmith2022']},
{id:'q4',tema:'Constante de tiempo',p:'Con esa compliance y una resistencia de 150 cmH₂O/L/s, ¿cuál es la constante de tiempo y es suficiente el Ti de 0,35 s?',
o:['0,9 s; el Ti es insuficiente','≈ 0,09 s; 3 τ ≈ 0,26 s, así que con Ti 0,35 s la insuflación se completa casi totalmente','0,009 s; cualquier Ti sirve','No se puede calcular sin la FR'],ok:1,
exp:'τ = C × R = 0,00058 L/cmH₂O × 150 cmH₂O/L/s = 0,087 s. En 3 τ el pulmón alcanza ~95 % del equilibrio y en 5 τ ~99 %. Con Ti 0,35 s (≈ 4 τ) la insuflación es casi completa; con Te 0,85 s (≈ 10 τ) la espiración también.',
no:['Error de unidades (mL en lugar de L).',null,'Error de unidades en el otro sentido.','La constante de tiempo depende solo de C y R.'],
base:'τ = C × R. Los pulmones con SDR (compliance baja) tienen τ cortas; los obstructivos (R alta), largas.',ev:'E',refs:['goldsmith2022']},
{id:'q5',tema:'Volumen minuto',p:'¿Cuál es el volumen minuto?',
o:['150 mL/kg/min','250 mL/kg/min','375 mL/kg/min','750 mL/kg/min'],ok:1,
exp:'VM = VT × FR = 7,5 mL × 50 = 375 mL/min; por kilo: 375 / 1,5 = 250 mL/kg/min.',
no:['No corresponde.',null,'375 es el valor total, no por kilo.','Duplica el VT.'],
base:'La pCO₂ depende de la ventilación alveolar, que es el volumen minuto menos la ventilación del espacio muerto.',ev:'E',refs:['goldsmith2022']}
]},
{sim:'ev_mec_3',t:'Etapa 3 · Si cambia la mecánica',d:{'Escenario':'Si la resistencia subiera a 450 cmH₂O/L/s (secreciones, broncoespasmo) y la FR a 80 con Ti 0,35'},
q:[
{id:'q6',tema:'Atrapamiento aéreo y auto-PEEP',p:'¿Qué pasaría en la espiración?',
o:['Nada: la espiración es pasiva y siempre se completa','τ ≈ 0,26 s; 3 τ ≈ 0,78 s pero el Te sería 0,40 s: espiración incompleta, atrapamiento y auto-PEEP','La compliance aumentaría','La MAP bajaría'],ok:1,
exp:'τ = 0,00058 × 450 = 0,26 s. Con FR 80, Ttotal = 0,75 s y Te = 0,40 s ≈ 1,5 τ: solo sale ~78 % del volumen. El gas restante se acumula (auto-PEEP), sube el volumen al final de la espiración y se ve en la curva de flujo que no vuelve a cero antes de la siguiente insuflación. Hay que alargar el Te (bajar la FR o el Ti) y tratar la causa de la resistencia.',
no:['Que sea pasiva no garantiza que se complete: depende del tiempo disponible frente a la τ.',null,'La compliance no cambia por la resistencia; puede empeorar la dinámica por sobredistensión.','El atrapamiento aumenta la presión alveolar media.'],
base:'Fracción vaciada = 1 − e^(−Te/τ).',ev:'E',refs:['goldsmith2022']},
{id:'q7',tema:'Sobredistensión en el bucle presión-volumen',p:'Después del surfactante, con la misma PIP, el VT sube a 11 mL y el bucle P-V muestra un aplanamiento al final de la inspiración («pico de pato»). ¿Qué significa?',
o:['Mejor reclutamiento: subir la PIP','Sobredistensión: la presión sigue subiendo sin ganar volumen; bajar la PIP o pasar a volumen objetivo','Fuga alrededor del tubo','Disparo fallido'],ok:1,
exp:'La compliance mejoró (11/13 = 0,85 mL/cmH₂O) y ahora la misma PIP entrega 7,3 mL/kg. El aplanamiento final indica que el pulmón llegó a su zona de baja compliance: más presión ya no da volumen y sobredistiende. Hay que bajar la PIP o usar volumen objetivo.',
no:['Sería un error: aumentaría la sobredistensión.',null,'La fuga se ve como un bucle que no cierra en volumen.','El disparo fallido no cambia la forma del bucle.'],
base:'En la parte alta de la curva P-V, la compliance cae: cada cmH₂O extra da poco volumen.',ev:'E',refs:['goldsmith2022','klingenberg2017']}
]}
],
cierre:'Con cuatro fórmulas se lee la pantalla: MAP ≈ PEEP + ΔP × Ti/Ttot, C = VT/ΔP, τ = C × R y VM = VT × FR. Comparar el Te con 3–5 τ permite anticipar el atrapamiento; el bucle P-V muestra la sobredistensión.'
},

{
id:'gases-ehi',mod:5,mods:[5,6],nivel:'intermedio',sim:'ev_ehi_2',
titulo:'Gases en la asfixia perinatal y la hipotermia terapéutica',
sub:'Acidosis mixta, hipocapnia, corrección por temperatura y alcalosis metabólica',
pres:{
 'Edad gestacional':'39 + 2 semanas',
 'Edad postnatal':'45 minutos',
 'Peso al nacer / actual':'3400 g / 3400 g',
 'Antecedentes perinatales':'Desprendimiento de placenta; cesárea de urgencia. Apgar 1, 4 y 6. Ventilación con presión positiva 6 minutos; intubado.',
 'Diagnóstico':'Encefalopatía hipóxico-isquémica moderada; candidato a hipotermia.',
 'Motivo':'Ingreso para hipotermia terapéutica.',
 'Hemodinamia':'FC 105, PA media 42, relleno 3 s, lactato 13 mmol/L.',
 'Estado respiratorio':'AC-VG: VT 5 mL/kg, FR de respaldo 60 (total 62), PEEP 5, FiO₂ 0,30.',
 'Examen físico':'Hipotonía, reflejos débiles.',
 'Radiografía de tórax':'Normal.',
 'Gases (cordón)':'pH 6,92 · pCO₂ 78 · HCO₃⁻ 15,8 · EB −18',
 'Oxigenación':'SpO₂ 97 %',
 'Soporte actual':'AC-VG'},
inicial:'El bebé ingresa a la UCIN para iniciar hipotermia. Hay que interpretar los gases seriados y ajustar el respirador.',
obj:['Interpretar una acidosis mixta.','Reconocer y corregir la hipocapnia iatrogénica en la encefalopatía.','Entender el efecto de la hipotermia sobre la pCO₂ medida y la producción de CO₂.','Interpretar una alcalosis metabólica con compensación respiratoria.','Calcular la diferencia alvéolo-arterial de O₂.'],
etapas:[
{t:'Etapa 1 · Gases de cordón',d:{'pH':'6,92','pCO₂':'78','HCO₃⁻':'15,8','EB':'−18','Lactato':'13'},
q:[
{id:'q1',tema:'Acidosis mixta',p:'¿Cómo se interpreta?',
o:['Acidosis respiratoria pura','Acidosis mixta: respiratoria (pCO₂ alta) y metabólica (HCO₃⁻ bajo, EB −18, lactato alto)','Acidosis metabólica compensada','Alcalosis metabólica'],ok:1,
exp:'Ambos componentes están alterados en el mismo sentido: la pCO₂ alta acidifica y el bicarbonato bajo también. En la asfixia, la interrupción del intercambio placentario retiene CO₂ y el metabolismo anaerobio genera ácido láctico.',
no:['El HCO₃⁻ bajo y el EB −18 indican componente metabólico.',null,'No hay compensación: la pCO₂ está alta en lugar de baja.','El pH es muy ácido.'],
base:'Si pCO₂ y HCO₃⁻ se mueven en direcciones que acidifican ambas, es un trastorno mixto.',ev:'E',refs:['goldsmith2022']}
]},
{sim:'ev_ehi_2',t:'Etapa 2 · Una hora después, en la UCIN',d:{'Gases':'pH 7,20 · pCO₂ 33 · HCO₃⁻ 12,6 · EB −14','Lactato':'8','Respirador':'AC-VG VT 5 mL/kg, FR 60 (total 62)'},
q:[
{id:'q2',tema:'Hipocapnia en la encefalopatía',p:'¿Qué ajuste corresponde?',
o:['Ninguno: la hipocapnia compensa la acidosis metabólica','Bajar la ventilación (FR de respaldo y/o VT) para normalizar la pCO₂: la hipocapnia se asocia a peor evolución en la encefalopatía','Dar bicarbonato para corregir el pH','Subir la FR para llevar el pH a 7,40'],ok:1,
exp:'Casi no dispara por encima del respaldo: la pCO₂ de 33 la fija el respirador. En el análisis secundario del ensayo NICHD de hipotermia (Pappas 2011), la hipocapnia se asoció a muerte o discapacidad. La hipocapnia reduce el flujo sanguíneo cerebral. Se baja la ventilación para llevar la pCO₂ a rangos normales y se trata la causa de la acidosis metabólica (perfusión).',
no:['Aunque la pCO₂ baja «compense» el pH, la hipocapnia en sí misma se asocia a daño cerebral.',null,'El bicarbonato no se recomienda en la reanimación ni para corregir la acidosis láctica; genera CO₂ y no trata la causa.','Más ventilación agravaría la hipocapnia.'],
base:'La pCO₂ es el principal regulador del tono vascular cerebral.',ev:'E',refs:['pappas2011','aha2025']}
]},
{sim:'ev_ehi_3',t:'Etapa 3 · En hipotermia a 33,5 °C',d:{'Gasómetro':'Informa a 37 °C: pH 7,36 · pCO₂ 45','Temperatura del paciente':'33,5 °C','Respirador':'Mismos parámetros que antes de enfriar'},
q:[
{id:'q3',tema:'Gases y temperatura',p:'¿Qué ocurre con la pCO₂ real del paciente a 33,5 °C?',
o:['Es igual a la medida a 37 °C','Es menor (≈ 38 mmHg) porque el CO₂ es más soluble a menor temperatura; si se corrige o no a la temperatura del paciente (alfa-stat o pH-stat) es motivo de debate','Es mayor (≈ 52 mmHg)','No puede estimarse'],ok:1,
exp:'Al enfriar la sangre, el CO₂ se disuelve más y su presión parcial baja (alrededor de 4–5 % por grado). A 33,5 °C la pCO₂ real ronda 38 mmHg y el pH real es más alcalino. Con alfa-stat se usan los valores a 37 °C; con pH-stat, los corregidos. No hay consenso sobre cuál usar en la hipotermia neonatal.',
no:['La temperatura cambia la solubilidad de los gases.',null,'Es al revés: baja.','Se puede estimar con las fórmulas de corrección que tienen los gasómetros.'],
base:'Ley de Henry: la solubilidad de un gas en un líquido aumenta al bajar la temperatura.',ev:'C',refs:['goldsmith2022']},
{id:'q4',tema:'Producción de CO₂ en hipotermia',p:'Con los mismos parámetros del respirador, la pCO₂ bajó al enfriar. ¿Por qué?',
o:['Porque mejoró la compliance','Porque la hipotermia reduce el metabolismo y la producción de CO₂: con la misma ventilación, la pCO₂ baja','Porque aumentó la fuga','Porque el bebé dispara más'],ok:1,
exp:'La producción de CO₂ cae con la temperatura. Si la ventilación minuto no cambia, la pCO₂ baja y aparece una hipocapnia evitable. Al iniciar la hipotermia hay que revisar la ventilación con gases frecuentes.',
no:['La compliance no explica el cambio.',null,'Más fuga reduciría el volumen entregado y subiría la pCO₂.','El dato dice que casi no dispara.'],
base:'pCO₂ ≈ VCO₂ / ventilación alveolar.',ev:'E',refs:['goldsmith2022','pappas2011']}
]},
{sim:'ev_ehi_4',t:'Etapa 4 · Día 3',d:{'Gases':'pH 7,48 · pCO₂ 50 · HCO₃⁻ 37','Cl⁻':'92 mmol/L','Contexto':'Furosemida por sobrecarga hídrica; sonda gástrica abierta con débito alto'},
q:[
{id:'q5',tema:'Alcalosis metabólica',p:'¿Cómo se interpretan?',
o:['Acidosis respiratoria crónica','Alcalosis metabólica primaria (pérdida de cloro por diurético y sonda) con hipoventilación compensadora','Alcalosis respiratoria','Gases normales'],ok:1,
exp:'El pH alcalino con HCO₃⁻ alto define la alcalosis metabólica. La pCO₂ sube como compensación (la esperada es ≈ 0,7 × HCO₃⁻ + 20 ≈ 46 ± 5). Es frecuente por diuréticos y pérdidas gástricas con hipocloremia. La compensación respiratoria puede dificultar el destete del respirador.',
no:['En la acidosis respiratoria el pH es ácido.',null,'La pCO₂ está alta, no baja.','pH y HCO₃⁻ están fuera de rango.'],
base:'La hipocloremia mantiene la reabsorción renal de bicarbonato.',ev:'E',refs:['goldsmith2022']},
{id:'q6',tema:'Diferencia alvéolo-arterial',p:'Con FiO₂ 0,40, PaO₂ 60 y PaCO₂ 40 a nivel del mar, ¿cuál es la diferencia A-a?',
o:['≈ 50 mmHg','≈ 175 mmHg','≈ 225 mmHg','≈ 285 mmHg'],ok:1,
exp:'PAO₂ = FiO₂ × (760 − 47) − PaCO₂/0,8 = 0,40 × 713 − 50 = 285 − 50 = 235 mmHg. A-a = 235 − 60 = 175 mmHg. Una diferencia elevada indica alteración de la relación ventilación/perfusión o cortocircuito.',
no:['Corresponde al término PaCO₂/0,8.',null,'No resta la PaO₂ correctamente.','Es la PAO₂ sin restar la PaCO₂/0,8.'],
base:'Ecuación del gas alveolar: PAO₂ = FiO₂ × (Patm − PH₂O) − PaCO₂/R.',ev:'E',refs:['goldsmith2022']}
]}
],
cierre:'En la asfixia, primero se reconoce la acidosis mixta; después, el riesgo pasa a ser la hipocapnia iatrogénica, que empeora con la hipotermia porque cae la producción de CO₂. La corrección por temperatura cambia los valores informados. Más tarde, los diuréticos y las pérdidas gástricas llevan a alcalosis metabólica con hipoventilación compensadora.'
}
);
})();
