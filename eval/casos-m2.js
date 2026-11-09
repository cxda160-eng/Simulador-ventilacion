/* Módulo 2 · Ventilación convencional */
(function(){
const E=window.EVAL=window.EVAL||{refs:{},casos:[],glos:[],modos:[]};
E.casos.push(
{
id:'elgan26',mod:2,mods:[2,4,5,6],nivel:'avanzado',sim:'emh',
titulo:'Prematuro extremo de 26 semanas: AC-VG desde la intubación hasta la extubación',
sub:'Caso integrador: modo, parámetros, surfactante, gases, complicaciones y destete',
pres:{
 'Edad gestacional':'26 + 0 semanas',
 'Edad postnatal':'40 minutos',
 'Peso al nacer / actual':'800 g / 800 g',
 'Antecedentes perinatales':'Parto vaginal precipitado. Una dosis de betametasona; sulfato de magnesio. Apgar 4 y 7. Bradicardia con esfuerzo respiratorio pobre pese a CPAP y ventilación con pieza en T: intubado en sala de partos.',
 'Diagnóstico':'SDR grave en prematuro extremo.',
 'Motivo de ingreso':'Ventilación invasiva desde sala de partos.',
 'Hemodinamia':'FC 165 lpm, PA media 28 mmHg, relleno capilar 3 s, lactato 3,2 mmol/L.',
 'Estado respiratorio':'Intubado con tubo 2,5 a 6,0 cm en el labio; ventilado con pieza en T (PIP 25, PEEP 6).',
 'Examen físico':'Expansión torácica escasa, entrada de aire disminuida y simétrica.',
 'Radiografía de tórax':'Hipoaireación grave (6 espacios), vidrio esmerilado con broncograma. Punta del tubo en T2.',
 'Gases (arterial umbilical)':'pH 7,18 · pCO₂ 64 · PaO₂ 48 · HCO₃⁻ 23 · EB −5',
 'Oxigenación':'SpO₂ 86 % con FiO₂ 0,60',
 'Soporte actual':'Ventilación manual con pieza en T'},
inicial:'Llega a la UCIN intubado. Hay que conectarlo al respirador, dar surfactante y planificar la ventilación de los próximos días.',
obj:['Justificar la ventilación con volumen objetivo como modo inicial.','Programar el VT inicial según el peso y el espacio muerto.','Anticipar los cambios de mecánica durante y después del surfactante en AC-VG.','Corregir la hipocapnia y la hiperoxia tras la mejoría de la compliance.','Aplicar un enfoque sistemático (DOPE) ante una desaturación aguda.','Elegir el método de aspiración y conocer sus efectos.','Ajustar la PEEP ante edema pulmonar por ductus.','Destetar en AC-VG sin aumentar el trabajo respiratorio.','Usar la cafeína y el soporte no invasivo para la extubación.','Clasificar la displasia con la definición actual.'],
etapas:[
{t:'Etapa 1 · Elección del modo',d:{'Peso':'800 g','Tubo':'2,5 a 6,0 cm','FiO₂':'0,60','Gases':'pH 7,18 · pCO₂ 64'},
q:[
{id:'q1',tema:'Ventilación con volumen objetivo',p:'¿Qué modo de ventilación invasiva inicial tiene mejor respaldo en este bebé?',
o:['IMV no sincronizada con presión limitada','Ventilación sincronizada con volumen objetivo (por ejemplo AC con volumen garantizado)','VAFO electiva, porque reduce la mortalidad frente a la convencional','PSV sin frecuencia de respaldo'],ok:1,
exp:'La revisión Cochrane de Klingenberg (2017) mostró que la ventilación con volumen objetivo, frente a la limitada por presión, reduce el resultado combinado de muerte o displasia, el neumotórax, la hipocapnia, la hemorragia intraventricular grave o la leucomalacia y los días de ventilación. El volumen, no la presión, es lo que lesiona el pulmón; con VG la presión baja sola cuando mejora la compliance.',
no:['La ventilación no sincronizada aumenta la asincronía y la variabilidad del volumen; la presión fija no se adapta a los cambios de compliance.',null,'La revisión Cochrane de Cools (2015) no mostró diferencias en mortalidad con la VAFO electiva; la reducción de displasia fue pequeña e inconsistente entre ensayos.','Sin frecuencia de respaldo, un prematuro extremo con esfuerzo irregular queda expuesto a apneas.'],
base:'Volutrauma: la sobredistensión por exceso de volumen lesiona más que la presión en sí. El VG ajusta la PIP respiración a respiración para entregar el VT programado.',ev:'F',refs:['klingenberg2017','cools2015']},
{id:'q2',tema:'VT inicial en el prematuro extremo',p:'¿Qué volumen corriente inicial programa?',
o:['8–10 mL/kg para reclutar rápido','Alrededor de 4–6 mL/kg (unos 4–5 mL en 800 g), ajustado luego por la pCO₂ y la mecánica','2–3 mL/kg para minimizar el volutrauma','No se programa VT: se fija una PIP de 25'],ok:1,
exp:'Para el SDR se usan volúmenes de 4–6 mL/kg. En los bebés más pequeños hace falta un VT por kilo algo mayor, porque el espacio muerto del sensor de flujo y del tubo representa una proporción mayor. Luego se ajusta según la pCO₂, el trabajo respiratorio y la radiografía.',
no:['Volúmenes tan altos provocan volutrauma y aumentan el riesgo de neumotórax y displasia.',null,'Por debajo de ~4 mL/kg aumenta la proporción de espacio muerto, el trabajo respiratorio y la necesidad de presión para la misma ventilación alveolar.','Fijar la presión deja que el volumen cambie con la compliance: es justamente lo que el volumen objetivo evita.'],
base:'Ventilación alveolar = (VT − espacio muerto) × FR. Si el VT se acerca al espacio muerto, la ventilación alveolar cae aunque aumente la FR.',ev:'E',refs:['goldsmith2022','klingenberg2017']}
]},
{t:'Etapa 2 · Surfactante (poractant 200 mg/kg) en AC-VG',d:{'Modo':'AC-VG, VT 4,5 mL/kg','PEEP':'6 cmH₂O','PIP de trabajo antes':'22 cmH₂O','Pmax':'25 cmH₂O','FR de respaldo':'50 rpm','FiO₂':'0,55'},
q:[
{id:'q3',tema:'Surfactante en volumen garantizado',p:'Durante y justo después del surfactante, ¿qué es lo más esperable en AC-VG y cómo debe estar programada la Pmax?',
o:['La PIP baja enseguida; conviene poner la Pmax igual a la PIP previa','Es frecuente la obstrucción transitoria del flujo con aumento de la PIP durante 30–60 minutos; la Pmax debe tener margen suficiente para no limitar el VT','El VG compensa todo; la Pmax no importa','Hay que pasar a presión limitada mientras dura el surfactante'],ok:1,
exp:'En el estudio de Wheeler (22 prematuros en AC-VG), 21 tuvieron obstrucción completa del flujo en el tubo al dar el surfactante; la PIP subió una mediana de 8 cmH₂O y tardó 30–60 minutos en volver a la basal. Cuando la Pmax estaba cerca de la PIP previa, la mayoría recibió volúmenes por debajo del objetivo. Después, con la mejoría de la compliance, la FiO₂ suele poder bajarse rápido.',
no:['La mejoría de la compliance llega después; al principio el surfactante líquido aumenta la resistencia.',null,'El VG solo puede subir la PIP hasta la Pmax: si el límite está muy cerca, el VT queda corto.','No hace falta cambiar de modo; sí programar bien la Pmax y vigilar.'],
base:'El surfactante líquido en la vía aérea aumenta la resistencia de forma transitoria; luego, al distribuirse en los alvéolos, mejora la compliance.',ev:'E',refs:['wheeler2009']},
{id:'q4',tema:'Hipocapnia e hiperoxia después del surfactante',p:'Una hora después: VT 4,5 mL/kg con PIP de 11, FiO₂ 0,25, SpO₂ 98 %. Gases: pH 7,42 · pCO₂ 33. ¿Qué ajusta?',
o:['Nada: la pCO₂ de 33 es ideal','Bajar la FiO₂ hasta SpO₂ 90–94 % y reducir el VT objetivo ~0,5 mL/kg (sin bajar de ~4 mL/kg), dejando que el VG baje la presión','Subir la PEEP a 8 para proteger el pulmón','Subir la FR de respaldo para estabilizar la pCO₂'],ok:1,
exp:'Con la mejor compliance hay hiperoxia (SpO₂ 98 %) e hipocapnia (pCO₂ 33). La hipocapnia reduce el flujo sanguíneo cerebral y se asocia a leucomalacia periventricular y displasia. La FiO₂ se titula a la meta y la ventilación minuto se reduce bajando un poco el VT; el VG baja la PIP solo. Si el bebé dispara por encima del respaldo, bajar la FR de respaldo no cambia la ventilación.',
no:['Una pCO₂ de 33 en un prematuro extremo es hipocapnia, que se asocia a lesión cerebral.',null,'Subir la PEEP con una compliance que mejora puede sobredistender y empeorar el retorno venoso.','Más frecuencia aumenta la ventilación minuto y empeora la hipocapnia.'],
base:'pCO₂ ≈ VCO₂ / ventilación alveolar. Bajar la ventilación alveolar sube la pCO₂.',ev:'E',refs:['sweet2023','klingenberg2017']}
]},
{t:'Etapa 3 · Día 2: desaturación súbita',d:{'SpO₂':'70 %','FC':'90 lpm','VT espirado':'1,5 mL/kg','PIP':'En la Pmax (25)','Fuga':'2 %','Auscultación':'Entrada de aire disminuida bilateral y simétrica'},
q:[
{id:'q5',tema:'Desaturación aguda: enfoque DOPE',p:'¿Qué hace primero?',
o:['Subir la FiO₂ a 1,0 y la Pmax a 40 y esperar','Enfoque sistemático: desplazamiento del tubo, obstrucción, neumotórax y falla del equipo; ventilar a mano y confirmar el tubo (CO₂ espirado) mientras se evalúa','Sedar porque está «peleando» con el respirador','Pedir un ecocardiograma'],ok:1,
exp:'El VT espirado muy bajo con la PIP en el límite y sin fuga indica que no entra el gas: obstrucción del tubo (secreciones, acodamiento), extubación o un problema mecánico grave. El enfoque DOPE (Displacement, Obstruction, Pneumothorax, Equipment) ordena la evaluación. Para el desplazamiento, conviene conocer la profundidad esperada según la edad gestacional (a 26 semanas, alrededor de 6,0 cm en el labio) y compararla con la marca del tubo. Ventilar a mano con pieza en T o bolsa y comprobar el CO₂ espirado separa el problema del equipo del problema del paciente.',
no:['Subir la presión sin saber la causa puede producir un neumotórax si el tubo está en un bronquio, y no resuelve una obstrucción.',null,'La sedación no corrige un tubo obstruido o desplazado y retrasa el diagnóstico.','El ecocardiograma no está indicado como primer paso en una desaturación con VT casi nulo.'],
base:'Si la presión llega al límite y el volumen no entra, la resistencia (obstrucción) o la compliance (neumotórax, intubación selectiva) cambiaron bruscamente.',ev:'E',refs:['goldsmith2022','aha2025','kempley2008']},
{id:'q6',tema:'Aspiración abierta frente a cerrada',p:'La causa fue un tapón de secreciones. Al planificar las próximas aspiraciones, ¿qué afirmación es correcta?',
o:['La aspiración abierta no altera el volumen pulmonar','En un ensayo cruzado aleatorizado la pérdida de volumen fue similar con ambos métodos, pero la recuperación fue más lenta tras la aspiración abierta; la cerrada evita desconectar','Hay que aspirar cada hora de rutina','Durante la aspiración cerrada en VG el respirador siempre compensa el volumen'],ok:1,
exp:'Hoellering y col. compararon aspiración abierta y cerrada en recién nacidos ventilados: la caída de volumen pulmonar fue de magnitud similar, pero el tiempo de recuperación fue mayor con la aspiración abierta. La desconexión del circuito, además, interrumpe la PEEP. La aspiración se hace por necesidad (secreciones visibles, cambios en la curva de flujo, caída del VT), no de rutina.',
no:['Toda aspiración genera presión negativa en la vía aérea y puede quitar volumen; desconectar además anula la PEEP.',null,'La aspiración rutinaria sin indicación expone a derreclutamiento, bradicardia e infección.','La aspiración cerrada también puede comprometer la ventilación en VG: el catéter ocupa la luz del tubo y la succión altera el volumen medido.'],
base:'Tras perder volumen, el pulmón necesita más presión para volver a abrirse (histéresis); por eso la recuperación lleva tiempo.',ev:'E',refs:['hoellering2008','goldsmith2022']}
]},
{t:'Etapa 4 · Día 5: más oxígeno y más presión',d:{'FiO₂':'0,40 (antes 0,25)','PIP de trabajo':'20 (antes 13) para VT 5 mL/kg','Rx':'Opacidad difusa bilateral nueva','Ecocardiograma':'Ductus de 2,2 mm con cortocircuito de izquierda a derecha y sobrecarga de cavidades izquierdas','PA':'Diastólica baja, pulsos saltones'},
q:[
{id:'q7',tema:'Ductus, edema pulmonar y PEEP',p:'¿Qué ajuste ventilatorio es razonable mientras se decide el manejo del ductus?',
o:['Bajar la PEEP a 3 para mejorar el retorno venoso','Subir la PEEP 1–2 cmH₂O para contrarrestar el edema alveolar y mejorar la compliance, vigilando la hemodinamia','Subir la FiO₂ a 1,0 para cerrar el ductus','Hiperventilar para bajar la pCO₂ a 30'],ok:1,
exp:'El cortocircuito de izquierda a derecha aumenta el flujo pulmonar y el líquido intersticial y alveolar: baja la compliance y suben la FiO₂ y la PIP. Aumentar la PEEP ayuda a mantener los alvéolos abiertos frente al edema. En un estudio fisiológico (Fajardo 2014), subir la PEEP de 5 a 8 cmH₂O no modificó de forma significativa el cortocircuito ductal ni el flujo sistémico: es una medida de soporte pulmonar, no un tratamiento del ductus.',
no:['Bajar la PEEP con edema empeora el colapso alveolar y la oxigenación.',null,'La FiO₂ alta no es un tratamiento del ductus y expone a hiperoxia; además baja la resistencia pulmonar y puede aumentar el cortocircuito.','La hipocapnia reduce el flujo cerebral y también baja la resistencia vascular pulmonar, lo que puede aumentar el flujo ductal.'],
base:'Más flujo pulmonar → más líquido intersticial → menor compliance. La PEEP contrarresta el colapso por edema.',ev:'E',refs:['fajardo2014','goldsmith2022']}
]},
{t:'Etapa 5 · Día 8: destete',d:{'Modo':'AC-VG, VT 5 mL/kg','PIP de trabajo':'12–14 cmH₂O','PEEP':'6','FR de respaldo / total':'40 / 55','FiO₂':'0,25','Gases':'pH 7,32 · pCO₂ 52'},
q:[
{id:'q8',tema:'Destete en AC-VG',p:'¿Cómo se desteta en este modo?',
o:['Pasar a SIMV con FR 10 para que «entrene» los músculos','El VG baja la PIP solo a medida que mejoran la compliance y el esfuerzo; no bajar el VT por debajo de ~4 mL/kg y evaluar la extubación cuando la presión de trabajo se mantiene baja con FiO₂ baja','Bajar la FR de respaldo a 10 y esperar que baje la pCO₂','Bajar la PEEP a 3 para facilitar la extubación'],ok:1,
exp:'En AC cada respiración disparada recibe el VT completo, así que bajar la FR de respaldo casi no reduce el soporte si el bebé dispara por encima. En VG el destete es automático: la PIP baja cuando el pulmón y el esfuerzo mejoran. Reducir el VT por debajo de ~4 mL/kg aumenta el trabajo respiratorio por el espacio muerto. Los umbrales concretos de PIP para extubar varían entre unidades.',
no:['En SIMV con frecuencia baja, las respiraciones espontáneas por un tubo de 2,5 mm sin soporte tienen alta resistencia y espacio muerto: el bebé se fatiga.',null,'Si dispara a 55, bajar la FR de respaldo no cambia la ventilación; y bajarla demasiado lo expone a apneas.','Una PEEP de 3 en un prematuro extremo con SDR suele llevar a pérdida de volumen y atelectasias.'],
base:'El trabajo respiratorio a través de un tubo es inversamente proporcional a la cuarta potencia del radio: los tubos finos suman mucha resistencia.',ev:'E',refs:['goldsmith2022','klingenberg2017']},
{id:'q9',tema:'Cafeína y extubación',p:'Antes de extubar, ¿qué medida con evidencia de ensayo clínico aumenta las chances de éxito?',
o:['Asegurar la cafeína (carga si no la recibió)','Dexametasona de rutina a todos','Suspender la alimentación 24 h','Hacer una prueba de respiración espontánea de 2 horas en CPAP endotraqueal'],ok:0,
exp:'En el ensayo CAP, la cafeína permitió retirar antes la ventilación con presión positiva y redujo la displasia. El consenso europeo la recomienda para facilitar el destete. La prueba de respiración espontánea en CPAP endotraqueal es breve (pocos minutos) en los protocolos que la usan, porque respirar por el tubo sin soporte es agotador.',
no:[null,'Los corticoides no se dan de rutina; se reservan para bebés que siguen ventilados después de 1–2 semanas.','El ayuno no mejora la extubación y perjudica la nutrición.','Respirar por un tubo de 2,5 mm sin soporte durante horas agota al bebé y puede llevar a un falso fracaso.'],
base:'La cafeína aumenta el impulso respiratorio y la contractilidad diafragmática.',ev:'F',refs:['schmidt2006','sweet2023']}
]},
{t:'Etapa 6 · 36 semanas de edad posmenstrual',d:{'Soporte':'Cánula nasal 1 L/min','FiO₂':'0,25','Situación':'Extubado el día 10 a NIPPV; destetado a CPAP y luego a cánula'},
q:[
{id:'q10',tema:'Definición de displasia (Jensen 2019)',p:'¿Cómo se clasifica la displasia broncopulmonar según la definición de Jensen y col.?',
o:['No tiene displasia porque ya no recibe presión positiva','Grado 1: cánula nasal ≤ 2 L/min a las 36 semanas','Grado 2: porque recibe oxígeno','Grado 3'],ok:1,
exp:'La definición de Jensen (NICHD, 2019) clasifica la displasia según el modo de soporte a las 36 semanas, independientemente del oxígeno: grado 1, cánula ≤ 2 L/min; grado 2, cánula > 2 L/min o presión positiva no invasiva; grado 3, ventilación invasiva. Esta clasificación predijo mejor la muerte o la morbilidad respiratoria grave a los 18–26 meses.',
no:['La cánula nasal a las 36 semanas ya define displasia en esta clasificación.',null,'El grado no depende de la FiO₂ sino del modo de soporte.','El grado 3 corresponde a ventilación invasiva.'],
base:'El modo de soporte necesario es un marcador más estable de la gravedad que la FiO₂ puntual.',ev:'F',refs:['jensen2019']}
]}
],
cierre:'La ventilación con volumen objetivo protege el pulmón y se ajusta sola a los cambios de compliance, pero exige programar bien la Pmax y el VT. Tras el surfactante, el riesgo cambia de la hipoxemia a la hiperoxia y la hipocapnia. Ante una desaturación aguda, DOPE. El destete en AC-VG se hace dejando que el VG baje la presión, sin quitarle al bebé el soporte de cada respiración.'
},

{
id:'asinc',mod:2,mods:[2,4],nivel:'intermedio',sim:'autoc',
titulo:'Asincronías y fugas: cuando el respirador no escucha al bebé',
sub:'Autociclado, PSV que no termina, SIMV con fatiga y disparos fallidos',
pres:{
 'Edad gestacional':'29 semanas',
 'Edad postnatal':'10 días',
 'Peso al nacer / actual':'1150 g / 1100 g',
 'Antecedentes perinatales':'SDR tratado con surfactante; ventilación prolongada por apneas y atelectasias.',
 'Diagnóstico':'SDR en resolución, en destete.',
 'Motivo':'Alarmas repetidas y frecuencia respiratoria alta en el monitor.',
 'Hemodinamia':'Estable. FC 155, PA media 40.',
 'Estado respiratorio':'Tubo 3,0 sin balón. AC-VG, VT objetivo 5 mL/kg, trigger por flujo.',
 'Examen físico':'Sin tiraje. Se escucha un soplido de aire en la boca.',
 'Radiografía de tórax':'Sin cambios: leve opacidad residual.',
 'Gases':'pH 7,38 · pCO₂ 42 · HCO₃⁻ 24',
 'Oxigenación':'SpO₂ 93 % con FiO₂ 0,25',
 'Soporte actual':'AC-VG'},
inicial:'El respirador muestra 95 ciclos por minuto, pero el bebé está quieto y no se le ven esfuerzos. La curva de flujo no vuelve a cero al final de la espiración.',
obj:['Calcular el porcentaje de fuga.','Reconocer el autociclado y corregirlo.','Comprender cómo la fuga afecta al VG.','Explicar por qué la PSV no termina con fuga.','Identificar la fatiga en SIMV con frecuencia baja.','Reconocer los disparos fallidos.'],
etapas:[
{t:'Etapa 1 · Ciclado de 95 por minuto',d:{'VT inspirado':'7,0 mL','VT espirado':'3,9 mL','FR total':'95 rpm (respaldo 40)','Esfuerzos visibles':'No','Curva de flujo':'No vuelve a la línea de base'},
q:[
{id:'q1',tema:'Cálculo de la fuga',p:'¿Cuál es el porcentaje de fuga?',
o:['18 %','44 %','56 %','79 %'],ok:1,
exp:'Fuga = (VTi − VTe) / VTi = (7,0 − 3,9) / 7,0 = 0,44, es decir, 44 %. Es una fuga grande alrededor de un tubo sin balón.',
no:['No corresponde a la fórmula.',null,'56 % es la relación VTe/VTi, no la fuga.','No corresponde a la fórmula.'],
base:'El gas que entra y no vuelve se perdió alrededor del tubo.',ev:'E',refs:['goldsmith2022']},
{id:'q2',tema:'Autociclado por fuga',p:'¿Qué explica los 95 ciclos sin esfuerzos visibles y qué hace?',
o:['Taquipnea por dolor: dar analgesia','Autociclado: el flujo de la fuga en la espiración supera el umbral del trigger y el respirador lo interpreta como esfuerzo. Activar la compensación de fuga o hacer menos sensible el trigger, y evaluar el tubo','Hipoxemia: subir la FiO₂','Sepsis: pedir hemocultivos'],ok:1,
exp:'Con trigger por flujo, el respirador dispara cuando detecta un flujo inspiratorio por encima del umbral. Una fuga continua durante la espiración se parece a un esfuerzo y genera ciclos «falsos» (autociclado): hiperventilación y riesgo de atrapamiento. Se corrige compensando la fuga, subiendo el umbral del trigger y, si la fuga es persistente y grande, considerando un tubo mayor o reposicionarlo.',
no:['Sin esfuerzos visibles, los ciclos no son del bebé.',null,'La SpO₂ es adecuada; la hipoxemia no explica ciclos sin esfuerzo.','No hay datos de infección; la explicación es mecánica.'],
base:'El trigger por flujo no distingue el flujo del paciente del flujo de la fuga si no hay compensación.',ev:'E',refs:['goldsmith2022']},
{id:'q3',tema:'Volumen garantizado con fuga grande',p:'Con 44 % de fuga, ¿qué pasa con el VG?',
o:['Funciona igual que sin fuga','El VG regula sobre el VT espirado, que subestima lo entregado; con fugas grandes la regulación se vuelve poco confiable y el pulmón puede recibir más volumen del que se muestra','El VG apaga la fuga automáticamente','El VG aumenta la PEEP para cerrar la fuga'],ok:1,
exp:'Los respiradores neonatales suelen usar el VT espirado para regular el VG, porque se ve menos afectado por la fuga inspiratoria. Pero parte del gas inspirado escapa y parte del espirado también: el valor medido deja de representar lo que llega al pulmón. Con fugas grandes, el VG pierde precisión y puede sobrestimar la necesidad de presión.',
no:['La fuga cambia la medición del volumen: no puede funcionar igual.',null,'El respirador no puede cerrar una fuga alrededor del tubo.','El VG ajusta la PIP, no la PEEP.'],
base:'Lo que el respirador no mide, no lo puede controlar.',ev:'E',refs:['goldsmith2022','klingenberg2017']}
]},
{t:'Etapa 2 · Prueba en PSV',d:{'Modo':'PSV, presión de soporte 10 sobre PEEP 5','Terminación':'Al 10 % del flujo pico','Ti máximo':'0,6 s','Fuga':'40 %','Problema':'Todas las respiraciones duran 0,6 s'},
q:[
{id:'q4',tema:'PSV que no termina por flujo',p:'¿Por qué todas las respiraciones llegan al Ti máximo?',
o:['El bebé tiene esfuerzos muy prolongados','La fuga mantiene el flujo por encima del 10 % del pico y la inspiración no termina por flujo; subir el criterio de terminación (por ejemplo 15–25 %) o ajustar el Ti máximo','La presión de soporte es baja','El trigger es demasiado sensible'],ok:1,
exp:'En PSV la inspiración termina cuando el flujo cae a un porcentaje del pico. Con una fuga grande, el flujo que escapa mantiene el flujo medido por encima del umbral y la respiración se prolonga hasta el Ti máximo («hang-up»), con asincronía espiratoria. Se corrige con un criterio de terminación más alto, un Ti máximo razonable, compensación de fuga y, si es posible, reduciendo la fuga.',
no:['Todas las respiraciones duran exactamente el Ti máximo: es un límite del respirador, no el patrón del bebé.',null,'Más presión aumenta el flujo de fuga y empeora el problema.','La sensibilidad del trigger afecta el inicio, no la terminación.'],
base:'La PSV es ciclada por flujo: cualquier flujo ajeno al paciente altera el ciclado.',ev:'E',refs:['goldsmith2022']}
]},
{t:'Etapa 3 · SIMV con frecuencia baja',d:{'Modo':'SIMV 20 rpm sin presión de soporte, PIP 16, PEEP 5','FR total':'80 rpm','VT espontáneo':'2,5 mL/kg','Tiraje':'Intenso','Gases':'pH 7,25 · pCO₂ 62'},
q:[
{id:'q5',tema:'SIMV con frecuencia baja y fatiga',p:'¿Por qué empeoró en SIMV 20 y qué conviene?',
o:['Necesita más FiO₂','Las respiraciones espontáneas por el tubo no tienen soporte: VT bajo cerca del espacio muerto y alto trabajo resistivo; volver a AC (o agregar presión de soporte a las espontáneas)','Hay que bajar la PEEP para que exhale mejor','Es el destete normal: esperar'],ok:1,
exp:'En SIMV solo las respiraciones mandatorias reciben la PIP; las espontáneas pasan por un tubo de 3,0 mm sin ayuda. El VT espontáneo de 2,5 mL/kg se acerca al espacio muerto, la ventilación alveolar cae, sube la pCO₂ y aumenta el trabajo respiratorio. Volver a AC o agregar presión de soporte a las espontáneas reduce el trabajo.',
no:['La SpO₂ no es el problema principal; hay hipoventilación y fatiga.',null,'La PEEP baja aumenta el colapso alveolar y el trabajo respiratorio.','Taquipnea, tiraje y acidosis respiratoria no son un destete normal sino un fracaso.'],
base:'Respiraciones rápidas y superficiales = mucha ventilación del espacio muerto y poca alveolar.',ev:'E',refs:['goldsmith2022']}
]},
{t:'Etapa 4 · De vuelta en AC, curvas a revisar',d:{'Curva de presión':'Pequeñas deflexiones negativas sin respiración entregada','Disparos':'Muchos esfuerzos sin ciclo','Trigger':'Por flujo, 1,5 L/min'},
q:[
{id:'q6',tema:'Disparos fallidos',p:'¿Qué indican las deflexiones sin respiración entregada?',
o:['Autociclado','Disparos fallidos (esfuerzos que no alcanzan el umbral): bajar el umbral del trigger, evaluar fuga y agua en el circuito','Hipo','Atrapamiento aéreo sin relación con el trigger'],ok:1,
exp:'Un esfuerzo que mueve la curva pero no gatilla una respiración indica que el umbral es demasiado alto para la fuerza del bebé (o que algo amortigua la señal). En prematuros pequeños se usan umbrales bajos de flujo. Los esfuerzos perdidos aumentan el trabajo respiratorio y la asincronía.',
no:['El autociclado es lo opuesto: ciclos sin esfuerzo.',null,'El hipo tiene un patrón brusco y rítmico; aquí la clave es la relación esfuerzo-disparo.','El atrapamiento puede dificultar el disparo, pero el patrón descrito apunta al umbral del trigger.'],
base:'El trigger debe ser lo bastante sensible para detectar al bebé y lo bastante específico para no confundir la fuga con un esfuerzo.',ev:'E',refs:['goldsmith2022']}
]}
],
cierre:'Las fugas alrededor de tubos sin balón alteran el trigger (autociclado), el ciclado en PSV y la regulación del VG. La SIMV con frecuencia baja deja sin soporte las respiraciones espontáneas a través de un tubo fino. Leer las curvas permite distinguir autociclado de disparos fallidos.'
}
);
})();
