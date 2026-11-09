/* Módulo 6 · Patologías */
(function(){
const E=window.EVAL=window.EVAL||{refs:{},casos:[],glos:[],modos:[]};
E.casos.push(
{
id:'sam',mod:6,mods:[6,3,5],nivel:'avanzado',sim:'samhfo',
titulo:'Síndrome de aspiración meconial con hipertensión pulmonar persistente',
sub:'Cortocircuito ductal, índice de oxigenación, surfactante y óxido nítrico',
pres:{
 'Edad gestacional':'41 + 1 semanas',
 'Edad postnatal':'2 horas',
 'Peso al nacer / actual':'3600 g / 3600 g',
 'Antecedentes perinatales':'Líquido amniótico meconial espeso, monitoreo fetal patológico. Apgar 3, 6 y 8; ventilación con presión positiva en sala de partos.',
 'Diagnóstico':'Síndrome de aspiración meconial; sospecha de hipertensión pulmonar persistente.',
 'Motivo':'Hipoxemia refractaria.',
 'Hemodinamia':'FC 160, PA media 42, relleno 3 s.',
 'Estado respiratorio':'AC: PIP 28, PEEP 5, FR 50, Ti 0,4 s. MAP 13.',
 'Examen físico':'Tórax en tonel, crepitantes difusos.',
 'Radiografía de tórax':'Infiltrados gruesos parcheados, hiperinsuflación (10 espacios), sin neumotórax.',
 'Gases (arteriales, radial derecha)':'pH 7,22 · pCO₂ 58 · PaO₂ 45',
 'Oxigenación':'SpO₂ preductal 88 % · posductal 76 % con FiO₂ 1,0',
 'Soporte actual':'Tubo 3,5 · AC'},
inicial:'Pese a FiO₂ 1,0 la PaO₂ es de 45 y hay una diferencia de 12 puntos entre la saturación pre y posductal.',
obj:['Reconocer el cortocircuito de derecha a izquierda por la diferencia pre/posductal.','Calcular e interpretar el índice de oxigenación.','Ajustar la ventilación con atrapamiento aéreo.','Conocer la evidencia del surfactante en el SAM.','Conocer la evidencia del óxido nítrico inhalado.','Evitar la hiperventilación como tratamiento de la HTPP.','Reconocer cuándo pensar en ECMO.'],
etapas:[
{t:'Etapa 1 · Hipoxemia',d:{'SpO₂ pre / pos':'88 % / 76 %','FiO₂':'1,0','PaO₂':'45','MAP':'13'},
q:[
{id:'q1',tema:'Diferencia pre/posductal',p:'¿Qué indica la diferencia de 12 puntos entre la SpO₂ pre y posductal?',
o:['Error del oxímetro','Cortocircuito de derecha a izquierda por el ductus: la presión pulmonar supera a la sistémica','Cardiopatía con flujo pulmonar aumentado','Anemia'],ok:1,
exp:'Cuando la resistencia vascular pulmonar es suprasistémica, la sangre desoxigenada pasa por el ductus a la aorta descendente: la mano derecha (preductal) satura más que los pies (posductal). Una diferencia mayor de 3–5 puntos sugiere este cortocircuito. Si también hay cortocircuito por el foramen oval, la diferencia puede desaparecer aunque la HTPP sea grave.',
no:['Una diferencia constante pre/posductal es un signo clínico, no un artefacto.',null,'El flujo pulmonar aumentado no produce este patrón.','La anemia no produce diferencias entre territorios.'],
base:'La hipertensión pulmonar persistente mantiene la circulación fetal: cortocircuitos de derecha a izquierda por el ductus y el foramen oval.',ev:'E',refs:['abman2015','goldsmith2022']},
{id:'q2',tema:'Índice de oxigenación',p:'¿Cuál es el índice de oxigenación (IO)?',
o:['≈ 13','≈ 29','≈ 45','≈ 58'],ok:1,
exp:'IO = MAP × FiO₂ × 100 / PaO₂ = 13 × 1,0 × 100 / 45 = 28,9. Valores de 25 o más indican insuficiencia respiratoria hipoxémica grave. El umbral exacto para iniciar óxido nítrico varía según el protocolo.',
no:['Es la MAP.',null,'Es la PaO₂.','Es la pCO₂.'],
base:'El IO integra la presión necesaria y el oxígeno necesario para lograr una PaO₂.',ev:'E',refs:['barrington2017','goldsmith2022']}
]},
{t:'Etapa 2 · Ventilación y surfactante',d:{'Rx':'10 espacios, diafragmas aplanados','Curva de flujo':'No vuelve a cero al final de la espiración','FR':'50, Ti 0,4 → Te 0,8 s'},
q:[
{id:'q3',tema:'Ventilación en el SAM con atrapamiento',p:'¿Qué ajuste es más adecuado?',
o:['Subir la FR a 70 para bajar la pCO₂','Alargar el tiempo espiratorio (bajar la FR o el Ti) y usar una PEEP moderada, evitando la sobredistensión','Subir la PEEP a 10','Subir la PIP a 35'],ok:1,
exp:'El meconio obstruye parcialmente las vías aéreas (efecto de válvula): entra aire que después no sale. Las constantes de tiempo son largas y el atrapamiento genera hiperinsuflación y riesgo de neumotórax. Más tiempo espiratorio permite vaciar; una PEEP moderada puede mantener abiertas las vías aéreas pequeñas sin sumar sobredistensión.',
no:['Más FR acorta el Te y empeora el atrapamiento.',null,'Una PEEP alta sobre un pulmón ya hiperinsuflado aumenta el riesgo de fuga aérea.','Más presión agrava la hiperinsuflación y el riesgo de neumotórax.'],
base:'Con resistencia alta, la τ se alarga y el vaciado incompleto genera auto-PEEP.',ev:'E',refs:['goldsmith2022']},
{id:'q4',tema:'Surfactante en el SAM',p:'¿Qué muestra la revisión Cochrane sobre el surfactante en bolo en el SAM?',
o:['Aumenta la mortalidad','Puede reducir la gravedad de la insuficiencia respiratoria y la necesidad de ECMO; no demostró efecto claro sobre la mortalidad','Está contraindicado por el meconio','Es igual al lavado broncoalveolar con surfactante diluido, que es el estándar'],ok:1,
exp:'El meconio inactiva el surfactante. La revisión de El Shahed (4 ensayos, 326 bebés) mostró que el surfactante puede reducir la progresión a insuficiencia respiratoria que requiere ECMO, sin efecto claro en la mortalidad. El lavado con surfactante diluido se estudió aparte y no es el estándar.',
no:['No se observó aumento de la mortalidad.',null,'Justamente se usa porque el meconio lo inactiva.','El lavado no está incluido en esa revisión ni es el estándar.'],
base:'Los ácidos grasos y las proteínas del meconio desplazan e inactivan el surfactante.',ev:'F',refs:['elshahed2014']}
]},
{t:'Etapa 3 · Vasodilatación pulmonar',d:{'Modo':'VAFO, MAP 16 tras reclutar','Rx':'9 espacios','IO':'26','Ecocardiograma':'Cortocircuito ductal de derecha a izquierda, función del VI conservada'},
q:[
{id:'q5',tema:'Óxido nítrico inhalado en la HTPP',p:'¿Qué afirmación sobre el óxido nítrico inhalado es correcta?',
o:['Reduce la mortalidad en todos los recién nacidos hipoxémicos','En recién nacidos de término y casi término (sin hernia diafragmática) reduce la necesidad de ECMO; mejora la oxigenación en ~50 %; se usa a 20 ppm y funciona mejor con el pulmón reclutado','Se inicia a 80 ppm','Mejora los resultados en la hernia diafragmática'],ok:1,
exp:'La revisión Cochrane de Barrington (2017) mostró que el óxido nítrico, en recién nacidos de término y casi término con insuficiencia respiratoria hipoxémica, reduce el resultado combinado de muerte o ECMO, a expensas de menos ECMO, sin cambio en la mortalidad. La oxigenación mejora en alrededor de la mitad. Es eficaz a 20 ppm. Necesita alvéolos abiertos para llegar a los vasos: por eso se combina con reclutamiento o VAFO.',
no:['No cambió la mortalidad: el beneficio fue en la necesidad de ECMO.',null,'La dosis eficaz de inicio es 20 ppm; dosis mayores aumentan la metahemoglobina y el dióxido de nitrógeno.','En la hernia diafragmática no mejoró los resultados, incluso fueron algo peores.'],
base:'El óxido nítrico inhalado relaja el músculo liso vascular solo en las zonas ventiladas: es un vasodilatador pulmonar selectivo.',ev:'F',refs:['barrington2017']},
{id:'q6',tema:'Hiperventilación en la HTPP',p:'Un colega propone hiperventilar hasta una pCO₂ de 25 para dilatar los vasos pulmonares. ¿Qué responde?',
o:['Es el tratamiento de primera línea','Era una práctica previa al óxido nítrico; se abandonó porque la hipocapnia reduce el flujo cerebral y la ventilación agresiva lesiona el pulmón','Es correcto si se combina con bicarbonato','Solo es eficaz en VAFO'],ok:1,
exp:'Antes del óxido nítrico, la terapia incluía hiperventilación y alcalosis inducida. La hipocapnia reduce el flujo sanguíneo cerebral y la ventilación con presiones altas agrava la lesión pulmonar. Hoy se busca normocapnia y evitar la acidosis, con vasodilatadores pulmonares y soporte hemodinámico.',
no:['No es primera línea.',null,'La alcalinización con bicarbonato tampoco se recomienda.','El problema es la hipocapnia en sí, no el modo.'],
base:'La alcalosis baja la resistencia pulmonar, pero el precio cerebral y pulmonar es alto.',ev:'E',refs:['barrington2017','abman2015']},
{id:'q7',tema:'Criterios de ECMO',p:'Pese al óxido nítrico y la VAFO, el IO se mantiene en 42 durante varias horas. ¿Qué corresponde?',
o:['Subir el óxido nítrico a 80 ppm','Contactar a un centro con ECMO: un IO > 40 sostenido es un criterio clásico de derivación','Esperar 24 horas más','Suspender el óxido nítrico'],ok:1,
exp:'Un IO mayor de 40 sostenido pese al tratamiento máximo es un criterio clásico para considerar ECMO. La derivación debe planificarse antes de que el bebé esté demasiado inestable para el traslado. Los criterios exactos varían entre centros.',
no:['Aumentar la dosis no mejora la eficacia y suma toxicidad.',null,'Esperar con IO > 40 aumenta el riesgo de muerte o daño.','Suspenderlo bruscamente puede causar hipertensión pulmonar de rebote.'],
base:'Con IO muy alto, el daño por la ventilación y la hipoxemia supera lo que el soporte convencional puede ofrecer.',ev:'I',refs:['goldsmith2022','barrington2017']}
]}
],
cierre:'En el SAM con HTPP, la diferencia pre/posductal y el IO definen la gravedad. La ventilación debe respetar las constantes de tiempo largas. El surfactante y el óxido nítrico (con el pulmón reclutado) reducen la necesidad de ECMO. La hiperventilación es una práctica abandonada.'
},

{
id:'hdc',mod:6,mods:[6,3],nivel:'avanzado',sim:'hdc',
titulo:'Hernia diafragmática congénita: ventilación gentil',
sub:'Manejo en sala de partos, metas de gases, modo inicial, óxido nítrico y ECMO',
pres:{
 'Edad gestacional':'38 + 4 semanas',
 'Edad postnatal':'1 hora',
 'Peso al nacer / actual':'3000 g / 3000 g',
 'Antecedentes perinatales':'Diagnóstico prenatal de hernia diafragmática izquierda con hígado en el abdomen. Nacimiento planificado en centro de referencia.',
 'Diagnóstico':'Hernia diafragmática congénita izquierda con hipoplasia pulmonar.',
 'Motivo':'Estabilización posnatal.',
 'Hemodinamia':'FC 150, PA media 40, lactato 2,5.',
 'Estado respiratorio':'Intubado al nacer. AC: PIP 26, PEEP 4, FR 50, FiO₂ 1,0.',
 'Examen físico':'Abdomen excavado, latido desplazado a la derecha.',
 'Radiografía de tórax':'Asas intestinales en el hemitórax izquierdo; mediastino desplazado.',
 'Gases (preductales)':'pH 7,21 · pCO₂ 68 · PaO₂ 52',
 'Oxigenación':'SpO₂ preductal 82 % · posductal 64 %',
 'Soporte actual':'AC con sonda gástrica a aspiración'},
inicial:'Llega a la UCIN desde la sala de partos. Hay que definir metas y estrategia de ventilación.',
obj:['Conocer el manejo de la HDC en sala de partos.','Aplicar las metas del consenso CDH EURO.','Ajustar la ventilación a esas metas.','Elegir el modo inicial y el de rescate.','Conocer la evidencia del óxido nítrico en la HDC.','Reconocer los criterios de ECMO.'],
etapas:[
{t:'Etapa 1 · Sala de partos (retrospectiva)',d:{'Diagnóstico':'Prenatal','Situación':'Recién nacido con HDC izquierda'},
q:[
{id:'q1',tema:'HDC en sala de partos',p:'¿Cuál es el manejo recomendado al nacer?',
o:['Ventilar con bolsa y máscara hasta que mejore la saturación','Intubar de inmediato sin ventilar con bolsa y máscara, y colocar una sonda gástrica para descomprimir','CPAP nasal de 6','Oxígeno a flujo libre y observar'],ok:1,
exp:'El consenso CDH EURO recomienda intubar de inmediato y evitar la ventilación con bolsa y máscara, que llena de aire el estómago y las asas en el tórax y comprime aún más el pulmón. La sonda gástrica con aspiración descomprime el intestino.',
no:['Insufla el intestino herniado y empeora la compresión pulmonar.',null,'La CPAP nasal también insufla el tubo digestivo.','Es un soporte insuficiente para un pulmón hipoplásico.'],
base:'Cada mililitro de aire en el intestino intratorácico es espacio que pierde el pulmón.',ev:'E',refs:['snoek2016']},
{id:'q2',tema:'Metas de gases en la HDC',p:'¿Qué metas recomienda el consenso CDH EURO?',
o:['SpO₂ preductal > 95 % y pCO₂ 35–45','SpO₂ preductal 80–95 %, posductal > 70 %, pCO₂ 50–70 mmHg, con PIP ≤ 25 y PEEP 2–5 cmH₂O','SpO₂ posductal > 95 % y pCO₂ < 40','Cualquier saturación con tal de que el pH sea normal'],ok:1,
exp:'La estrategia de «ventilación gentil» acepta hipercapnia y saturaciones preductales bajas para no lesionar un pulmón hipoplásico con presiones altas. El consenso CDH EURO propone SpO₂ preductal 80–95 %, posductal > 70 % y pCO₂ 50–70, con PIP ≤ 25 y PEEP 2–5.',
no:['Buscar valores normales exige presiones que lesionan el pulmón hipoplásico.',null,'La saturación posductal refleja el cortocircuito ductal; perseguirla lleva a presiones excesivas.','El pH no es la única meta; también se limita la presión.'],
base:'El pulmón hipoplásico tiene pocos alvéolos: presiones normales para otro bebé son excesivas para él.',ev:'E',refs:['snoek2016']}
]},
{t:'Etapa 2 · Primera hora en la UCIN',d:{'PIP':'26','SpO₂ pre / pos':'82 % / 64 %','pCO₂':'68','pH':'7,21'},
q:[
{id:'q3',tema:'Ajuste a las metas de ventilación gentil',p:'Con estos valores, ¿qué hace?',
o:['Subir la PIP a 30 para mejorar la posductal','Bajar la PIP a ≤ 25: la preductal y la pCO₂ están dentro de las metas; la posductal baja no se persigue con presión','Subir la FR a 70 para llevar la pCO₂ a 40','Dar bicarbonato'],ok:1,
exp:'La SpO₂ preductal (82 %) y la pCO₂ (68) están en rango. La PIP de 26 supera el límite de 25 y aumenta el riesgo de neumotórax y lesión. La posductal baja refleja el cortocircuito ductal por hipertensión pulmonar, no un fallo de ventilación.',
no:['Más presión sobre un pulmón hipoplásico aumenta el riesgo de neumotórax contralateral.',null,'Buscar normocapnia con más ventilación lesiona el pulmón.','El bicarbonato no está indicado y genera CO₂.'],
base:'La meta preductal refleja la oxigenación cerebral y coronaria; la posductal, el cortocircuito.',ev:'E',refs:['snoek2016']},
{id:'q4',tema:'Modo inicial y rescate en la HDC',p:'¿Qué modo recomienda el consenso como inicial?',
o:['VAFO de entrada en todos','Ventilación convencional como modo inicial; VAFO como rescate si no se alcanzan las metas con presiones aceptables','Ventilación jet de entrada','CPAP'],ok:1,
exp:'El consenso CDH EURO recomienda la ventilación convencional como estrategia inicial y reserva la VAFO para el rescate.',
no:['No se recomienda como modo inicial de rutina.',null,'No es el modo inicial recomendado.','No es suficiente para un pulmón hipoplásico.'],
base:'La elección del modo en la HDC se basa en el consenso y en la experiencia de los centros de referencia.',ev:'E',refs:['snoek2016']}
]},
{t:'Etapa 3 · Día 1: hipoxemia progresiva',d:{'Modo':'VAFO, MAP 16','FiO₂':'1,0','SpO₂ preductal':'78 %','Ecocardiograma':'Hipertensión pulmonar suprasistémica, función del VI disminuida','Lactato':'5,5'},
q:[
{id:'q5',tema:'Óxido nítrico en la HDC',p:'¿Qué dice la evidencia sobre el óxido nítrico en la HDC?',
o:['Reduce la mortalidad y la necesidad de ECMO','En la revisión Cochrane no mejoró los resultados, incluso fueron algo peores; su uso es selectivo y con un ventrículo izquierdo disfuncionante puede empeorar el edema pulmonar','Está indicado siempre a 40 ppm','Reemplaza a la ECMO'],ok:1,
exp:'En la revisión de Barrington, los resultados de los bebés con HDC no mejoraron con el óxido nítrico (fueron algo peores, sin significación). En la HDC suele haber disfunción del ventrículo izquierdo: dilatar los vasos pulmonares aumenta el retorno a un ventrículo que no puede manejarlo y puede empeorar el edema pulmonar. Su uso es individual y basado en la ecocardiografía.',
no:['No mostró ese beneficio en la HDC.',null,'No hay indicación sistemática ni a esa dosis.','No reemplaza la ECMO cuando hay criterios.'],
base:'Vasodilatar el lecho pulmonar con un VI disfuncionante sube la presión en la aurícula izquierda.',ev:'C',refs:['barrington2017','snoek2016']},
{id:'q6',tema:'Criterios de ECMO en la HDC',p:'¿Qué hallazgos son criterios de ECMO según el consenso?',
o:['pCO₂ de 60','Imposibilidad de mantener la SpO₂ preductal > 85 % o la posductal > 70 %, acidosis respiratoria grave pese a optimizar, necesidad de PIP > 28 o MAP > 17 en VAFO, lactato ≥ 5 o IO ≥ 40 sostenido','SpO₂ posductal de 75 %','Cualquier necesidad de VAFO'],ok:1,
exp:'El consenso CDH EURO lista como criterios la imposibilidad de mantener las metas de saturación, la acidosis respiratoria grave pese a optimizar, la necesidad de presiones altas (PIP > 28 o MAP > 17), la hipoperfusión con lactato ≥ 5 y el IO ≥ 40 sostenido. Este bebé cumple varios.',
no:['Está dentro de las metas.',null,'Está dentro de las metas.','La VAFO de rescate no es por sí sola criterio de ECMO.'],
base:'La ECMO da tiempo al pulmón y a la circulación pulmonar sin presiones lesivas.',ev:'E',refs:['snoek2016']}
]}
],
cierre:'En la HDC el pulmón es hipoplásico: se intuba sin ventilar con bolsa, se aceptan metas preductales de 80–95 % y pCO₂ de 50–70, y se limita la PIP a 25. La VAFO es de rescate, el óxido nítrico no mejora los resultados en forma sistemática y los criterios de ECMO deben conocerse antes de necesitarlos.'
},

{
id:'termino',mod:6,mods:[6,1],nivel:'basico',sim:'ttn',
titulo:'Recién nacido de término con taquipnea: TTN, neumotórax o neumonía',
sub:'Diagnóstico diferencial y su evolución en 24 horas',
pres:{
 'Edad gestacional':'38 + 0 semanas',
 'Edad postnatal':'2 horas',
 'Peso al nacer / actual':'3300 g / 3300 g',
 'Antecedentes perinatales':'Cesárea programada sin trabajo de parto. Estado de colonización por estreptococo B desconocido. Sin fiebre materna.',
 'Diagnóstico presuntivo':'Taquipnea transitoria del recién nacido.',
 'Motivo':'Taquipnea y quejido.',
 'Hemodinamia':'FC 150, buena perfusión.',
 'Estado respiratorio':'FR 90, quejido, tiraje leve.',
 'Examen físico':'Entrada de aire simétrica.',
 'Radiografía de tórax':'Pulmones hiperinsuflados, trazos perihiliares, líquido en la cisura.',
 'Gases (capilar)':'pH 7,33 · pCO₂ 46',
 'Oxigenación':'SpO₂ 93 % con FiO₂ 0,35',
 'Soporte actual':'Oxígeno por cánula'},
inicial:'Recién nacido de término con taquipnea desde el nacimiento por cesárea sin trabajo de parto.',
obj:['Reconocer la taquipnea transitoria y su fisiopatología.','Indicar el soporte adecuado y evitar tratamientos sin evidencia.','Reconocer y tratar el neumotórax.','Identificar signos que orientan a neumonía.'],
etapas:[
{t:'Etapa 1 · Primeras horas',d:{'FR':'90','FiO₂':'0,35','Rx':'Hiperinsuflación, líquido en la cisura'},
q:[
{id:'q1',tema:'Fisiopatología de la TTN',p:'¿Cuál es el mecanismo principal?',
o:['Déficit de surfactante','Retraso en la reabsorción del líquido pulmonar fetal (menor activación de los canales de sodio epiteliales sin trabajo de parto)','Aspiración de meconio','Hipoplasia pulmonar'],ok:1,
exp:'El trabajo de parto activa la reabsorción del líquido pulmonar mediante canales de sodio epiteliales (ENaC). Sin trabajo de parto, el líquido se reabsorbe más lento y queda en el intersticio y los linfáticos: taquipnea, quejido e hipoxemia leve.',
no:['Es el mecanismo del SDR del prematuro.',null,'No hay meconio.','No hay hernia ni otra causa de hipoplasia.'],
base:'El líquido pulmonar retenido reduce la compliance y altera la ventilación/perfusión.',ev:'E',refs:['hagen2017']},
{id:'q2',tema:'Manejo de la TTN',p:'¿Qué manejo es adecuado si la dificultad aumenta?',
o:['Furosemida para eliminar el líquido','CPAP si hace falta, oxígeno según metas y soporte; diuréticos y broncodilatadores no se recomiendan de rutina','Intubación y surfactante','Restricción hídrica extrema'],ok:1,
exp:'La TTN es autolimitada. La CPAP ayuda a mantener el volumen pulmonar y empuja el líquido al intersticio. Los diuréticos, el salbutamol o la adrenalina inhalada no se recomiendan como tratamiento estándar. Si los síntomas persisten más allá de 72 horas, hay que buscar otro diagnóstico.',
no:['No hay evidencia que respalde su uso en la TTN.',null,'No hay déficit de surfactante que justifique esa estrategia.','No es parte del manejo estándar.'],
base:'La presión de distensión mantiene la capacidad residual mientras se reabsorbe el líquido.',ev:'E',refs:['hagen2017']}
]},
{t:'Etapa 2 · Cuatro horas: deterioro brusco',d:{'Soporte':'CPAP 6','SpO₂':'80 % con FiO₂ 0,60','Auscultación':'Disminuida a la derecha','Transiluminación':'Hemitórax derecho brillante','PA':'Estable'},
q:[
{id:'q3',tema:'Neumotórax',p:'¿Diagnóstico y conducta?',
o:['Empeoramiento de la TTN: subir la CPAP','Neumotórax derecho: si está estable, confirmar con radiografía y vigilar; si hay inestabilidad, punción con aguja y drenaje','Neumonía: antibióticos solamente','Cardiopatía: prostaglandinas'],ok:1,
exp:'El deterioro brusco con asimetría auscultatoria y transiluminación positiva indica neumotórax. Si está estable, puede manejarse de forma conservadora con vigilancia; si hay compromiso hemodinámico o respiratorio importante, se descomprime con aguja y se coloca un drenaje.',
no:['Subir la CPAP puede agrandar el neumotórax.',null,'Los signos son de fuga aérea.','La asimetría y la transiluminación apuntan al pulmón.'],
base:'La CPAP y las presiones transpulmonares altas en recién nacidos de término que respiran vigorosamente aumentan el riesgo de fuga aérea.',ev:'E',refs:['goldsmith2022','aha2025']}
]},
{t:'Etapa 3 · 24 horas',d:{'FiO₂':'0,50 y en aumento','Temperatura':'38,1 °C','Neutrófilos':'1500/mm³','PCR':'45 mg/L','Rx':'Opacidades bilaterales que no se aclaran'},
q:[
{id:'q4',tema:'TTN frente a neumonía',p:'¿Qué orienta a neumonía o sepsis en lugar de TTN?',
o:['Taquipnea en las primeras horas','Empeoramiento después de las primeras horas, fiebre, neutropenia, PCR alta y opacidades que persisten','Líquido en la cisura','Cesárea sin trabajo de parto'],ok:1,
exp:'La TTN mejora en horas o pocos días. El empeoramiento progresivo, la inestabilidad térmica, la neutropenia y la PCR elevada sugieren neumonía o sepsis (por ejemplo por estreptococo B), que además puede causar hipertensión pulmonar. Hay que tomar hemocultivo e iniciar antibióticos.',
no:['Es común a ambas.',null,'Es típico de la TTN.','Es un factor de riesgo de TTN.'],
base:'La evolución en el tiempo es la mejor herramienta para diferenciar la TTN de otros cuadros.',ev:'E',refs:['hagen2017','goldsmith2022']}
]}
],
cierre:'La TTN es la causa más frecuente de taquipnea en el recién nacido de término nacido por cesárea; se trata con soporte. El deterioro brusco obliga a buscar un neumotórax, y el empeoramiento progresivo con signos de infección, una neumonía o sepsis.'
},

{
id:'dbp',mod:6,mods:[6,2,5],nivel:'avanzado',sim:'dbp',
titulo:'Displasia broncopulmonar establecida: otra fisiología, otro respirador',
sub:'Clasificación, estrategia ventilatoria, gases crónicos e hipertensión pulmonar',
pres:{
 'Edad gestacional':'24 + 3 semanas al nacer (hoy 36 + 0 de edad posmenstrual)',
 'Edad postnatal':'81 días',
 'Peso al nacer / actual':'640 g / 1600 g',
 'Antecedentes perinatales':'SDR grave, sepsis tardía, dos intentos fallidos de extubación.',
 'Diagnóstico':'Displasia broncopulmonar grave.',
 'Motivo':'Episodios de desaturación y agitación frecuentes.',
 'Hemodinamia':'FC 170, PA normal.',
 'Estado respiratorio':'AC-VG: VT 5 mL/kg, FR 40, Ti 0,35 s, PEEP 6, FiO₂ 0,45.',
 'Examen físico':'Tórax hiperinsuflado, sibilancias, tiraje.',
 'Radiografía de tórax':'Áreas heterogéneas: zonas quísticas hiperinsufladas alternando con bandas fibrosas.',
 'Gases':'pH 7,36 · pCO₂ 68 · HCO₃⁻ 38',
 'Oxigenación':'SpO₂ 90 % con FiO₂ 0,45; desaturaciones a 70 % con el llanto',
 'Soporte actual':'Tubo 3,0 · AC-VG'},
inicial:'Sigue ventilado a las 36 semanas, con la misma estrategia que se usaba en la fase aguda del SDR.',
obj:['Clasificar la displasia según la definición de Jensen.','Entender por qué la estrategia de la fase aguda no sirve en la displasia establecida.','Interpretar una acidosis respiratoria crónica compensada.','Indicar la búsqueda de hipertensión pulmonar y las metas de saturación.'],
etapas:[
{t:'Etapa 1 · Diagnóstico',d:{'Soporte a las 36 semanas':'Ventilación invasiva'},
q:[
{id:'q1',tema:'Grado de displasia',p:'¿Qué grado de displasia tiene según Jensen y col.?',
o:['Grado 1','Grado 2','Grado 3','No se puede clasificar sin la FiO₂ exacta'],ok:2,
exp:'En la definición de Jensen, la ventilación invasiva a las 36 semanas es grado 3, el de mayor riesgo de muerte o morbilidad respiratoria grave.',
no:['Corresponde a cánula ≤ 2 L/min.','Corresponde a cánula > 2 L/min o presión positiva no invasiva.',null,'La clasificación no depende de la FiO₂.'],
base:'El soporte necesario a las 36 semanas refleja la gravedad.',ev:'F',refs:['jensen2019']}
]},
{t:'Etapa 2 · Estrategia ventilatoria',d:{'Curva de flujo':'No vuelve a cero','Bucle flujo-volumen':'Limitación espiratoria','Episodios':'Desaturación con agitación y tórax rígido'},
q:[
{id:'q2',tema:'Ventilación en la displasia establecida',p:'¿Qué estrategia se adapta mejor a esta fisiología?',
o:['Mantener VT 5 mL/kg, FR 40 y Ti 0,35 como en el SDR','VT mayores, FR más bajas, Ti más largos y PEEP más alta para sostener vías aéreas malácicas, aceptando hipercapnia compensada','VAFO a 15 Hz','Bajar la PEEP a 4 para reducir la hiperinsuflación'],ok:1,
exp:'La displasia establecida es una enfermedad heterogénea con resistencia alta y constantes de tiempo largas, espacio muerto aumentado y frecuentemente traqueobroncomalacia. Las FR altas con Ti cortos dejan zonas sin ventilar y atrapan gas. Se recomiendan VT más altos, FR bajas, Ti largos y PEEP más alta para mantener abiertas las vías aéreas que colapsan; los valores concretos se individualizan y la evidencia es sobre todo de expertos.',
no:['Es la estrategia del pulmón agudo homogéneo con τ cortas, no la de la displasia.',null,'La VAFO a frecuencias altas no se adapta a constantes de tiempo largas.','Con malacia, menos PEEP aumenta el colapso espiratorio y los episodios de desaturación.'],
base:'Las regiones con τ largas necesitan tiempo para llenarse y vaciarse.',ev:'C',refs:['goldsmith2022']},
{id:'q3',tema:'Acidosis respiratoria crónica compensada',p:'pH 7,36 · pCO₂ 68 · HCO₃⁻ 38. ¿Qué hace?',
o:['Subir la FR a 60 para normalizar la pCO₂','Es una acidosis respiratoria crónica compensada: no perseguir una pCO₂ normal; ajustar según el pH, el trabajo respiratorio y el crecimiento','Dar acetazolamida','Bajar el VT'],ok:1,
exp:'El riñón retuvo bicarbonato y el pH es casi normal. Bajar la pCO₂ rápido produciría una alcalosis metabólica y exigiría una ventilación lesiva. Lo importante es que el pH sea aceptable, el bebé no trabaje en exceso y crezca.',
no:['Más FR empeora el atrapamiento y la lesión.',null,'No está indicada como tratamiento de rutina.','Bajar el VT aumenta la proporción de espacio muerto.'],
base:'En los trastornos crónicos, la compensación renal lleva el pH cerca de lo normal.',ev:'E',refs:['goldsmith2022']}
]},
{t:'Etapa 3 · Circulación pulmonar',d:{'Ecocardiograma':'Pendiente','Desaturaciones':'Frecuentes'},
q:[
{id:'q4',tema:'Hipertensión pulmonar en la displasia',p:'¿Qué recomienda la guía AHA/ATS?',
o:['No buscar hipertensión pulmonar hasta el alta','Buscar hipertensión pulmonar con ecocardiograma en la displasia establecida y, si existe, mantener la SpO₂ en 92–95 % evitando la hipoxemia intermitente','Mantener la SpO₂ en 85–89 %','Usar óxido nítrico de rutina'],ok:1,
exp:'La guía AHA/ATS de hipertensión pulmonar pediátrica recomienda el cribado con ecocardiograma en los prematuros con displasia establecida y, cuando hay hipertensión pulmonar, mantener saturaciones de 92–95 %. La hipoxemia, incluso intermitente, sube la resistencia vascular pulmonar.',
no:['La hipertensión pulmonar en la displasia aumenta la mortalidad: hay que buscarla.',null,'Una saturación baja empeora la vasoconstricción pulmonar.','No hay indicación de óxido nítrico de rutina.'],
base:'La vasoconstricción hipóxica es el mecanismo principal que se puede modificar.',ev:'E',refs:['abman2015']}
]}
],
cierre:'La displasia grave es otra enfermedad: heterogénea, con constantes de tiempo largas y malacia. Exige VT más altos, FR más bajas, Ti más largos y PEEP más alta, aceptar la hipercapnia compensada y buscar hipertensión pulmonar.'
},

{
id:'shci',mod:6,mods:[6,5],nivel:'avanzado',sim:'shci',
titulo:'Ventrículo único: cuando más oxígeno es peor',
sub:'Síndrome de corazón izquierdo hipoplásico antes de la cirugía',
pres:{
 'Edad gestacional':'39 semanas',
 'Edad postnatal':'2 días',
 'Peso al nacer / actual':'3200 g / 3150 g',
 'Antecedentes perinatales':'Diagnóstico prenatal de síndrome de corazón izquierdo hipoplásico. Prostaglandina E1 desde el nacimiento.',
 'Diagnóstico':'SHCI con circulación sistémica dependiente del ductus.',
 'Motivo':'Intubado por apneas atribuidas a la prostaglandina.',
 'Hemodinamia':'FC 165, PA 62/25 (diastólica baja), relleno 3 s, diuresis en descenso, lactato 3,5.',
 'Estado respiratorio':'AC: VT 6 mL/kg, FR 40, PEEP 5, FiO₂ 0,21.',
 'Examen físico':'Pulsos saltones, hígado a 3 cm.',
 'Radiografía de tórax':'Cardiomegalia, aumento de la trama vascular pulmonar.',
 'Gases':'pH 7,42 · pCO₂ 35 · PaO₂ 62',
 'Oxigenación':'SpO₂ 92 % · saturación venosa en la cava superior 52 %',
 'Soporte actual':'AC'},
inicial:'Satura 92 % en aire ambiente, pero la perfusión empeora.',
obj:['Estimar la relación Qp:Qs en la circulación de ventrículo único.','Comprender por qué el oxígeno y la hipocapnia pueden empeorar la perfusión sistémica.','Conocer la evidencia sobre hipercapnia frente a hipoxia inspirada.','Ajustar el respirador para equilibrar las circulaciones.'],
etapas:[
{t:'Etapa 1 · Equilibrio de circulaciones',d:{'SaO₂':'92 %','SvO₂ (cava superior)':'52 %','SpvO₂ supuesta':'98 %'},
q:[
{id:'q1',tema:'Cálculo de Qp:Qs',p:'¿Cuál es la relación Qp:Qs estimada?',
o:['≈ 1','≈ 2','≈ 6,7','≈ 0,5'],ok:2,
exp:'En la circulación de ventrículo único, la sangre aórtica y la pulmonar tienen la misma saturación. Qp:Qs = (SaO₂ − SvO₂) / (SpvO₂ − SpaO₂) = (92 − 52) / (98 − 92) = 40/6 ≈ 6,7. El flujo pulmonar es casi 7 veces el sistémico: hay hiperflujo pulmonar y «robo» de la circulación sistémica.',
no:['Correspondería a un equilibrio que no hay aquí.','Subestima el resultado.',null,'Indicaría más flujo sistémico que pulmonar.'],
base:'Principio de Fick: el flujo es inversamente proporcional a la diferencia de contenido de O₂ en cada circuito.',ev:'E',refs:['goldsmith2022']},
{id:'q2',tema:'Oxígeno e hiperventilación en el ventrículo único',p:'¿Qué conducta es correcta?',
o:['Subir la FiO₂ para llevar la saturación a 100 %','Evitar el oxígeno suplementario y la hipocapnia, que bajan la resistencia pulmonar y aumentan el robo sistémico; aceptar saturaciones más bajas que en un corazón normal','Hiperventilar para bajar la pCO₂ a 30','Subir la PEEP a 10'],ok:1,
exp:'El oxígeno y la hipocapnia dilatan los vasos pulmonares: más sangre va a los pulmones y menos al cuerpo, con baja diastólica, acidosis láctica y oliguria. Por eso se evitan el oxígeno suplementario y la hiperventilación y se aceptan saturaciones más bajas que en un bebé con corazón normal; el rango concreto lo define el equipo de cardiología.',
no:['Empeora el hiperflujo pulmonar.',null,'La hipocapnia baja la resistencia pulmonar y empeora el robo.','Una PEEP alta puede afectar el retorno venoso sin equilibrar las circulaciones de forma controlada.'],
base:'El ventrículo único reparte su gasto según la relación entre la resistencia pulmonar y la sistémica.',ev:'E',refs:['tabbutt2001','goldsmith2022']}
]},
{t:'Etapa 2 · Gases inspirados',d:{'Propuesta del equipo':'Aumentar la resistencia pulmonar con hipercapnia controlada'},
q:[
{id:'q3',tema:'Hipercapnia frente a hipoxia inspirada',p:'¿Qué mostró el estudio de Tabbutt (2001) en el SHCI ventilado?',
o:['Que la hipoxia inspirada (FiO₂ 0,17) mejoró la oxigenación cerebral más que la hipercapnia','Que ambas bajaron la Qp:Qs, pero solo la hipercapnia mejoró la saturación cerebral y la presión arterial','Que ninguna cambió la Qp:Qs','Que el oxígeno al 100 % fue lo mejor'],ok:1,
exp:'En ese estudio cruzado pequeño, tanto la FiO₂ baja como el CO₂ inspirado redujeron la Qp:Qs, pero solo la hipercapnia aumentó la saturación cerebral y la presión arterial; la hipoxia no mejoró la oferta de oxígeno al cerebro. Es evidencia fisiológica de pocos pacientes y su aplicación varía entre centros.',
no:['Es al revés.',null,'Ambas bajaron la Qp:Qs.','No se estudió y no tendría sentido fisiológico.'],
base:'La hipercapnia aumenta la resistencia pulmonar y además dilata los vasos cerebrales.',ev:'C',refs:['tabbutt2001']},
{id:'q4',tema:'Ajuste del respirador en el ventrículo único',p:'¿Qué ajuste del respirador tiene lógica fisiológica en este bebé?',
o:['Subir la FR a 60 para mejorar la ventilación','Bajar la ventilación minuto (FR o VT) para llevar la pCO₂ a valores normales-altos, mantener la FiO₂ en 0,21 y vigilar la perfusión, la saturación venosa y el lactato','Subir la FiO₂ a 0,50','Pasar a VAFO'],ok:1,
exp:'Con pCO₂ de 35, la hipocapnia relativa favorece el hiperflujo pulmonar. Reducir la ventilación minuto sube la pCO₂ y la resistencia pulmonar, lo que redirige flujo al cuerpo. Se evalúa con la presión diastólica, la saturación venosa, el lactato y la diuresis.',
no:['Bajaría más la pCO₂.',null,'Empeoraría el hiperflujo pulmonar.','No hay una indicación pulmonar para VAFO.'],
base:'La pCO₂ es una herramienta para modificar la resistencia vascular pulmonar.',ev:'E',refs:['tabbutt2001','goldsmith2022']}
]}
],
cierre:'En la circulación de ventrículo único, la saturación alta no es buena noticia: puede indicar hiperflujo pulmonar y robo sistémico. El respirador se usa para equilibrar las circulaciones: aire ambiente, evitar la hipocapnia y vigilar los marcadores de perfusión.'
}
);
})();
