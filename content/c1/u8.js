/* C1 · Unidad 8 · Habilidades C1 Advanced (Días 36–40). Se arma con: node tools/build-level.js 4 content/c1 */
const M = (q, o, a, x) => ({ t: "mc", q, o, a, ...(x ? { x } : {}) }), F = (q, ans) => ({ t: "fill", q, ans }),
  L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), O = text => ({ t: "oral", text }), D = say => ({ t: "dict", say }),
  W = (q, min, keys) => ({ t: "write", q, min, keys }), R = (s, es) => ({ t: "order", words: s.split(" "), es });

module.exports = {
n: 8,
title: "Habilidades C1 Advanced",
lessons: [
/* ───────── Día 36 ───────── */
{
 id: "c1-u8-l1",
 title: "Comparar tres imágenes: motivación y comportamiento",
 goal: "Elegir dos de tres imágenes, especular sobre motivos y sentimientos y relacionarlos con la psicología.",
 theory: [
  { p: "En el **speaking del C1 Advanced (parte 2)** te dan **tres imágenes** y dos preguntas; eliges **dos** y hablas un minuto. No describas: **especula** sobre motivos, sentimientos y consecuencias. **I'll talk about these two pictures… · What might have led these people to… · They could well be feeling… · Whereas in this one…, here… · I suspect that…**" },
  { ex: [["I'm going to compare the first and the third pictures.", "Voy a comparar la primera y la tercera imagen."], ["What might have prompted her to start running?", "¿Qué pudo haberla llevado a empezar a correr?"], ["He could well be feeling under a lot of pressure.", "Muy posiblemente se siente bajo mucha presión."], ["I suspect she's doing it for her own satisfaction.", "Sospecho que lo hace por su propia satisfacción."], ["Whereas he seems driven by money, she's motivated by passion.", "Mientras que a él parece moverlo el dinero, a ella la motiva la pasión."]] },
  { p: "Vocabulario de **psicología y comportamiento**: **motivation** (intrinsic / extrinsic), **willpower** (fuerza de voluntad), **resilience** (resiliencia), **self-esteem**, **peer pressure** (presión social), **procrastinate**, **cognitive bias** (sesgo cognitivo), **mindset** (growth / fixed), **reward**, **burnout**, **instant gratification**, **habit-forming**." },
  { ex: [["Intrinsic motivation tends to last longer than rewards.", "La motivación intrínseca suele durar más que las recompensas."], ["Teenagers are particularly vulnerable to peer pressure.", "Los adolescentes son especialmente vulnerables a la presión social."], ["Building resilience takes time.", "Construir resiliencia toma tiempo."], ["I always procrastinate when a task feels overwhelming.", "Siempre aplazo cuando una tarea me abruma."], ["Social media is designed to be habit-forming.", "Las redes sociales están diseñadas para crear hábito."]] },
  { tip: "Para sonar C1, varía la especulación: no repitas **maybe**. Alterna **could well**, **I'd imagine**, **presumably**, **it's likely that**, **there's a chance that**, **I get the impression that**." }
 ],
 vocab: [
  ["motivation", "sustantivo", "motivación", "Her motivation is personal growth."],
  ["intrinsic", "adjetivo", "intrínseco", "Intrinsic motivation comes from within."],
  ["extrinsic", "adjetivo", "extrínseco", "Money is an extrinsic reward."],
  ["willpower", "sustantivo", "fuerza de voluntad", "It takes willpower to quit sugar."],
  ["resilience", "sustantivo", "resiliencia", "She showed great resilience."],
  ["self-esteem", "sustantivo", "autoestima", "Exercise can boost self-esteem."],
  ["peer pressure", "expresión", "presión de grupo", "He smoked because of peer pressure."],
  ["procrastinate", "verbo", "aplazar, procrastinar", "Stop procrastinating!"],
  ["cognitive bias", "expresión", "sesgo cognitivo", "Confirmation bias is a cognitive bias."],
  ["mindset", "sustantivo", "mentalidad", "A growth mindset helps you learn."],
  ["reward", "sustantivo / verbo", "recompensa; recompensar", "Rewards don't always work."],
  ["instant gratification", "expresión", "gratificación inmediata", "We live in an age of instant gratification."],
  ["habit-forming", "adjetivo", "que crea hábito, adictivo", "Games are habit-forming."],
  ["driven", "adjetivo", "ambicioso, motivado", "She's very driven."],
  ["prompt", "verbo", "llevar a, motivar", "What prompted the decision?"],
  ["under pressure", "expresión", "bajo presión", "He works well under pressure."],
  ["presumably", "adverbio", "presumiblemente", "Presumably they're training for a race."],
  ["could well", "expresión", "muy posiblemente", "They could well be colleagues."],
  ["I get the impression", "expresión", "me da la impresión", "I get the impression she's nervous."],
  ["overwhelming", "adjetivo", "abrumador", "The workload is overwhelming."],
  ["sense of achievement", "expresión", "sensación de logro", "Finishing gives you a sense of achievement."],
  ["setback", "sustantivo", "contratiempo, revés", "Resilience means recovering from setbacks."]
 ],
 dialogue: {
  title: "Simulacro del speaking",
  scene: "Mateo practica la parte 2 del speaking con su profesora, Ms. Clarke. Las imágenes muestran: un hombre de traje trabajando de noche, una mujer mayor terminando una maratón y un adolescente jugando videojuegos.",
  a: "Ms. Clarke", b: "Mateo",
  lines: [
   ["A", "Here are your pictures. They show people doing activities that require effort. Why might they be doing them, and how might they be feeling?", "Aquí están tus imágenes. Muestran personas haciendo actividades que exigen esfuerzo. ¿Por qué podrían estar haciéndolas y cómo podrían sentirse?"],
   ["B", "I'll talk about the first and the second pictures. In the first one, a man is working late in an office, presumably to meet a deadline.", "Voy a hablar de la primera y la segunda imagen. En la primera, un hombre trabaja hasta tarde en una oficina, presumiblemente para cumplir un plazo."],
   ["B", "I get the impression he's driven by extrinsic motivation: a promotion, a bonus, or perhaps fear of losing his job.", "Me da la impresión de que lo mueve una motivación extrínseca: un ascenso, una bonificación o tal vez el miedo a perder el trabajo."],
   ["B", "He could well be feeling exhausted and under a lot of pressure. If he does this every night, he's at risk of burnout.", "Muy posiblemente se siente agotado y bajo mucha presión. Si hace esto todas las noches, está en riesgo de agotamiento."],
   ["B", "Whereas in the second picture, the elderly woman finishing the marathon seems to be motivated by something more intrinsic.", "Mientras que en la segunda imagen, la señora mayor que termina la maratón parece motivada por algo más intrínseco."],
   ["B", "What might have prompted her to start running? Perhaps a health scare, or simply a desire to prove that age is no barrier.", "¿Qué pudo haberla llevado a empezar a correr? Quizás un susto de salud, o simplemente el deseo de demostrar que la edad no es un obstáculo."],
   ["B", "She must be feeling a huge sense of achievement. That kind of resilience is really inspiring.", "Debe sentir una enorme sensación de logro. Ese tipo de resiliencia es muy inspirador."],
   ["A", "Thank you. That was very well organised. One suggestion: you could link the two pictures more at the end.", "Gracias. Estuvo muy bien organizado. Una sugerencia: podrías relacionar más las dos imágenes al final."],
   ["B", "Like: 'Both require willpower, but only one seems to bring real satisfaction'?", "¿Como: «Las dos exigen fuerza de voluntad, pero solo una parece traer verdadera satisfacción»?"],
   ["A", "Exactly. That's a perfect conclusion. And your speculative language was varied: 'presumably', 'could well', 'I get the impression'.", "Exacto. Es una conclusión perfecta. Y tu lenguaje para especular fue variado: «presumably», «could well», «I get the impression»."],
   ["B", "I used to say 'maybe' every five seconds. I've been practising!", "Antes decía «maybe» cada cinco segundos. ¡He estado practicando!"],
   ["A", "It shows. Now, the teenager playing video games: what do you think motivates him?", "Se nota. Ahora, el adolescente que juega videojuegos: ¿qué crees que lo motiva?"],
   ["B", "Instant gratification, probably. Games are designed to be habit-forming, with constant small rewards.", "La gratificación inmediata, probablemente. Los juegos están diseñados para crear hábito, con pequeñas recompensas constantes."]
  ]
 },
 practice: [
  M("Para empezar la parte 2 del C1 dices:", ["I'll talk about the first and the third pictures.", "In picture one there is a man. He has a suit.", "All the pictures are nice.", "I don't know these people."], 0),
  M("What might have ___ him to change careers?", ["prompted", "pushed up", "made", "caused to"], 0),
  M("Motivation that comes from within is ___.", ["intrinsic", "extrinsic", "habit-forming", "driven"], 0),
  F("He smoked his first cigarette because of peer ___. (presión)", ["pressure"]),
  L("I get the impression she's not doing it for the money. She could well be volunteering because it gives her a sense of purpose.", "¿Por qué cree quien habla que ella lo hace?", ["Porque le da un sentido de propósito", "Por el dinero", "Porque la obligan", "Por presión social"], 0),
  O("She must be feeling a huge sense of achievement.")
 ],
 more: [
  R("Building resilience takes time and practice.", "Construir resiliencia toma tiempo y práctica."),
  R("I always procrastinate when I feel overwhelmed.", "Siempre aplazo cuando me siento abrumado."),
  D("Social media apps are designed to be habit-forming."),
  D("He could well be feeling under a lot of pressure."),
  M("¿Qué expresión NO sirve para especular?", ["It is a fact that", "Presumably", "I'd imagine", "There's a chance that"], 0),
  M("A ___ mindset believes that abilities can be developed.", ["growth", "fixed", "driven", "biased"], 0),
  L("Whereas the man seems driven by fear of failure, the student looks as if she's genuinely enjoying the challenge. Presumably, she'll last longer.", "¿Qué parece mover al hombre?", ["El miedo al fracaso", "El disfrute", "El dinero", "La presión social"], 0),
  W("Imagina tres imágenes: una persona estudiando de madrugada, un grupo de voluntarios limpiando una playa y un atleta entrenando bajo la lluvia. Escoge dos y escribe lo que dirías (mínimo 140 palabras): qué los motiva, cómo se sienten y qué consecuencias puede tener. Usa lenguaje variado para especular y vocabulario de psicología.", 140, [["presumably", "could well", "i'd imagine", "i get the impression", "i suspect", "there's a chance"], ["motivation", "motivated", "willpower", "resilience", "pressure", "reward", "driven", "self-esteem", "burnout"], ["whereas", "while", "on the other hand", "both"], ["might have", "must be", "must have", "could be"]])
 ],
 exam: M("He's been working twelve hours a day. He ___ be feeling exhausted.", ["must", "can't", "mustn't", "needn't"], 0),
 exam2: F("It takes a lot of will___ to give up sugar. (fuerza de voluntad)", ["power"])
},
/* ───────── Día 37 ───────── */
{
 id: "c1-u8-l2",
 title: "El ensayo C1: educación y aprendizaje",
 goal: "Escribir un ensayo que compare dos opciones y defienda cuál es la más importante.",
 theory: [
  { p: "En el **ensayo del C1 Advanced** (parte 1 del writing) recibes unas notas de un debate con **tres** aspectos y debes discutir **dos**, explicar cuál es más importante y dar razones (220–260 palabras). Estructura: **introducción** que plantea el tema · un párrafo por cada aspecto con argumentos y ejemplos · **conclusión** que decide: **On balance, … is the more effective of the two, since…**" },
  { ex: [["Few would dispute that education shapes society.", "Pocos discutirían que la educación moldea a la sociedad."], ["One way of improving outcomes would be to reform the curriculum.", "Una forma de mejorar los resultados sería reformar el currículo."], ["A further consideration is the way students are assessed.", "Otro aspecto a considerar es la forma en que se evalúa a los estudiantes."], ["This approach, however, is not without its drawbacks.", "Este enfoque, sin embargo, no está libre de inconvenientes."], ["On balance, teacher training is the more effective of the two.", "En general, la formación docente es la más eficaz de las dos."]] },
  { p: "Vocabulario de **educación**: **curriculum** (currículo), **assessment** (evaluación), **rote learning** (aprender de memoria), **critical thinking**, **lifelong learning** (aprendizaje a lo largo de la vida), **literacy / numeracy** (lectoescritura / matemáticas básicas), **tuition fees** (matrícula), **dropout rate** (tasa de deserción), **vocational training** (formación técnica), **standardised tests**." },
  { ex: [["Rote learning does little to develop critical thinking.", "Aprender de memoria hace poco por desarrollar el pensamiento crítico."], ["The dropout rate is higher in rural areas.", "La tasa de deserción es más alta en zonas rurales."], ["Vocational training is often undervalued.", "La formación técnica suele estar subvalorada."], ["Standardised tests measure only a narrow range of skills.", "Las pruebas estandarizadas miden solo un rango estrecho de habilidades."], ["Lifelong learning has become essential.", "El aprendizaje a lo largo de la vida se ha vuelto esencial."]] },
  { tip: "El error más común en este ensayo es **no decidir**. El enunciado pide explicar cuál de los dos aspectos es **más importante**: tu conclusión tiene que elegir uno y justificarlo." }
 ],
 vocab: [
  ["curriculum", "sustantivo", "currículo, plan de estudios", "The curriculum needs updating."],
  ["assessment", "sustantivo", "evaluación", "Continuous assessment reduces stress."],
  ["rote learning", "expresión", "aprendizaje de memoria", "Rote learning is still common."],
  ["critical thinking", "expresión", "pensamiento crítico", "Schools should teach critical thinking."],
  ["lifelong learning", "expresión", "aprendizaje a lo largo de la vida", "Lifelong learning keeps the mind active."],
  ["literacy", "sustantivo", "alfabetización, lectoescritura", "Literacy rates have improved."],
  ["numeracy", "sustantivo", "habilidad numérica básica", "Numeracy is a basic skill."],
  ["tuition fees", "expresión", "matrícula, costo de estudios", "Tuition fees are too high."],
  ["dropout rate", "expresión", "tasa de deserción", "The dropout rate fell."],
  ["vocational training", "expresión", "formación técnica o profesional", "The SENA offers vocational training."],
  ["standardised test", "expresión", "prueba estandarizada", "The Saber 11 is a standardised test."],
  ["outcome", "sustantivo", "resultado", "Learning outcomes improved."],
  ["on balance", "expresión", "en general, sopesándolo todo", "On balance, I disagree."],
  ["few would dispute", "expresión", "pocos discutirían", "Few would dispute its value."],
  ["a further consideration", "expresión", "otro aspecto a considerar", "A further consideration is cost."],
  ["not without its drawbacks", "expresión", "no exento de inconvenientes", "The plan is not without its drawbacks."],
  ["the more effective of the two", "expresión", "el más eficaz de los dos", "This is the more effective of the two."],
  ["address", "verbo", "abordar", "We must address inequality."],
  ["equip", "verbo", "preparar, dotar", "Schools should equip students for life."],
  ["undervalued", "adjetivo", "subvalorado", "Teachers are undervalued."],
  ["foster", "verbo", "fomentar", "Debate fosters critical thinking."],
  ["access", "sustantivo", "acceso", "Access to education is unequal."]
 ],
 dialogue: {
  title: "¿Qué cambiarías del colegio?",
  scene: "En un foro universitario en Bogotá, dos estudiantes de pedagogía, Natalia y Esteban, discuten qué reforma educativa tendría más impacto.",
  a: "Natalia", b: "Esteban",
  lines: [
   ["A", "If you could change just one thing about schools in Colombia, what would it be?", "Si pudieras cambiar una sola cosa de los colegios en Colombia, ¿qué sería?"],
   ["B", "The curriculum. It's overloaded, and it still relies far too much on rote learning.", "El currículo. Está sobrecargado y todavía depende demasiado de aprender de memoria."],
   ["A", "Few would dispute that. But I'd argue that assessment is the real problem. As long as everything is about the Saber 11, teachers will teach to the test.", "Pocos lo discutirían. Pero yo diría que el problema real es la evaluación. Mientras todo gire alrededor del Saber 11, los profesores van a enseñar para la prueba."],
   ["B", "That's a fair point. Standardised tests only measure a narrow range of skills.", "Es un punto justo. Las pruebas estandarizadas solo miden un rango estrecho de habilidades."],
   ["A", "Exactly. Critical thinking, creativity, teamwork… none of that appears in the results.", "Exacto. El pensamiento crítico, la creatividad, el trabajo en equipo… nada de eso aparece en los resultados."],
   ["B", "Then again, without some kind of national test, how would we compare schools or detect inequality?", "Por otro lado, sin algún tipo de prueba nacional, ¿cómo compararíamos colegios o detectaríamos la desigualdad?"],
   ["A", "I'm not saying we should abolish it. Just that it shouldn't be the only measure.", "No digo que debamos eliminarla. Solo que no debería ser la única medida."],
   ["B", "What about teacher training? Even the best curriculum fails if teachers are undervalued and underpaid.", "¿Y la formación docente? Hasta el mejor currículo fracasa si los profesores están subvalorados y mal pagados."],
   ["A", "That's the third option, and honestly, it might be the most important of all.", "Esa es la tercera opción y, sinceramente, puede que sea la más importante de todas."],
   ["B", "So, on balance, which would you choose between curriculum and assessment?", "Entonces, sopesándolo todo, ¿cuál escogerías entre currículo y evaluación?"],
   ["A", "Assessment. Change the way we assess, and the curriculum and teaching will follow.", "La evaluación. Si cambias la forma de evaluar, el currículo y la enseñanza vendrán detrás."],
   ["B", "Interesting. I'd still say the curriculum is the more urgent of the two, but you've made me think.", "Interesante. Yo seguiría diciendo que el currículo es el más urgente de los dos, pero me hiciste pensar."],
   ["A", "That's what debate is for: fostering critical thinking!", "¡Para eso es el debate: para fomentar el pensamiento crítico!"]
  ]
 },
 practice: [
  M("En el ensayo del C1 Advanced debes:", ["discutir dos de los tres aspectos y decidir cuál es más importante", "discutir los tres aspectos por igual", "contar una historia personal", "escribir una carta al rector"], 0),
  M("Learning by repeating facts without understanding them is ___.", ["rote learning", "lifelong learning", "critical thinking", "vocational training"], 0),
  M("___, investing in teachers is the more effective of the two.", ["On balance", "On the contrary", "In balance", "At balance"], 0),
  F("The ___ rate is much higher in rural schools. (deserción)", ["dropout"]),
  L("Few would dispute that literacy is essential. However, a further consideration is whether schools are equipping students for jobs that don't exist yet.", "¿Cuál es el otro aspecto a considerar?", ["Si los colegios preparan para trabajos que aún no existen", "Si la lectura es importante", "Cuánto cuesta la matrícula", "Cuántos profesores hay"], 0),
  O("On balance, teacher training is the more effective of the two options.")
 ],
 more: [
  R("Schools should foster critical thinking.", "Los colegios deberían fomentar el pensamiento crítico."),
  R("This approach is not without its drawbacks.", "Este enfoque no está exento de inconvenientes."),
  D("Vocational training is often undervalued in our society."),
  D("Few would dispute the importance of lifelong learning."),
  M("¿Cuál es la mejor conclusión para el ensayo C1?", ["On balance, reforming assessment would have the greater impact, since it would change how teachers teach.", "Both ideas are good and I like them.", "In conclusion, education is important.", "I don't know which one is better."], 0),
  M("Training for a specific trade, such as electrician or chef, is ___.", ["vocational training", "tuition fees", "numeracy", "rote learning"], 0),
  L("Rather than abolishing standardised tests, the government should complement them with continuous assessment, which gives a fuller picture of each student's progress.", "¿Qué propone quien habla?", ["Complementar las pruebas con evaluación continua", "Eliminar las pruebas", "Hacer más pruebas", "Bajar la matrícula"], 0),
  W("Escribe un ensayo (mínimo 150 palabras) a partir de este debate: «¿Qué mejoraría más la educación en tu país: (1) reformar el currículo, (2) cambiar la evaluación o (3) invertir en los profesores?». Discute DOS de los tres, explica cuál es más importante y justifica tu decisión.", 150, [["curriculum", "assessment", "teachers", "teacher training"], ["few would dispute", "one way", "a further consideration", "however", "not without"], ["on balance", "the more effective", "the more important", "more urgent", "in conclusion", "all things considered"], ["since", "because", "as a result", "therefore"]])
 ],
 exam: M("Training people throughout their lives is called ___.", ["lifelong learning", "rote learning", "vocational assessment", "literacy"], 0),
 exam2: F("On ___, I believe assessment is the more urgent issue. (sopesándolo todo)", ["balance"])
},
/* ───────── Día 38 ───────── */
{
 id: "c1-u8-l3",
 title: "La propuesta: participación ciudadana y sociedad",
 goal: "Escribir una propuesta formal a una autoridad con justificación, recomendaciones y beneficios.",
 theory: [
  { p: "La **propuesta** (proposal) es uno de los textos de la parte 2 del writing del C1 Advanced. Se dirige a un superior o a una entidad (un concejo, un comité) y **propone acciones concretas**. Estructura con títulos: **Introduction** (**The purpose of this proposal is to…**) · **Current situation** · **Recommendations** (**I would propose that… · It is proposed that…**) · **Benefits / Conclusion** (**Were these measures adopted, …**)." },
  { ex: [["The purpose of this proposal is to suggest ways of increasing youth participation.", "El propósito de esta propuesta es sugerir formas de aumentar la participación juvenil."], ["At present, turnout among young voters is worryingly low.", "Actualmente, la participación de los votantes jóvenes es preocupantemente baja."], ["I would propose that the council hold monthly open forums.", "Propondría que el concejo realice foros abiertos mensuales."], ["It is proposed that a youth council be created.", "Se propone que se cree un consejo juvenil."], ["Were these measures adopted, trust in local government would improve.", "Si se adoptaran estas medidas, la confianza en el gobierno local mejoraría."]] },
  { p: "Vocabulario de **política y sociedad**: **policy** (política pública), **legislation**, **turnout** (participación electoral), **electorate**, **grassroots** (de base, comunitario), **inequality**, **polarisation**, **accountability** (rendición de cuentas), **transparency**, **civic engagement**, **local council**, **lobby**, **corruption**, **public consultation**." },
  { ex: [["Grassroots movements can influence national policy.", "Los movimientos de base pueden influir en la política nacional."], ["Transparency and accountability build trust.", "La transparencia y la rendición de cuentas generan confianza."], ["Political polarisation makes dialogue difficult.", "La polarización política dificulta el diálogo."], ["The new legislation was passed after a public consultation.", "La nueva ley se aprobó después de una consulta pública."], ["Inequality remains the country's greatest challenge.", "La desigualdad sigue siendo el mayor reto del país."]] },
  { tip: "Una propuesta es más **persuasiva** que un informe: además de datos, presenta **beneficios** concretos y usa el condicional invertido para sonar formal: **Should the council approve this plan, …** · **Were these measures adopted, …**" }
 ],
 vocab: [
  ["proposal", "sustantivo", "propuesta", "Submit a proposal to the council."],
  ["the purpose of this proposal", "expresión", "el propósito de esta propuesta", "The purpose of this proposal is to…"],
  ["it is proposed that", "expresión", "se propone que", "It is proposed that fees be reduced."],
  ["policy", "sustantivo", "política (pública)", "A new housing policy."],
  ["legislation", "sustantivo", "legislación", "New legislation on plastics."],
  ["turnout", "sustantivo", "participación (electoral)", "Turnout was only 40%."],
  ["electorate", "sustantivo", "electorado", "The young electorate is growing."],
  ["grassroots", "adjetivo / sustantivo", "de base, comunitario", "A grassroots campaign."],
  ["inequality", "sustantivo", "desigualdad", "Inequality has increased."],
  ["polarisation", "sustantivo", "polarización", "Polarisation divides families."],
  ["accountability", "sustantivo", "rendición de cuentas", "We demand accountability."],
  ["transparency", "sustantivo", "transparencia", "Transparency reduces corruption."],
  ["civic engagement", "expresión", "participación ciudadana", "Civic engagement starts at school."],
  ["local council", "expresión", "concejo municipal", "Write to the local council."],
  ["public consultation", "expresión", "consulta pública", "There was a public consultation."],
  ["corruption", "sustantivo", "corrupción", "Corruption undermines trust."],
  ["undermine", "verbo", "socavar, minar", "Fake news undermines democracy."],
  ["implement", "verbo", "implementar", "Implement the plan next year."],
  ["allocate", "verbo", "asignar (recursos)", "Allocate funds to youth projects."],
  ["stakeholders", "sustantivo", "partes interesadas", "Consult all stakeholders."],
  ["feasible", "adjetivo", "viable, factible", "The plan is feasible."],
  ["in the long run", "expresión", "a la larga", "In the long run, it will save money."]
 ],
 dialogue: {
  title: "Preparando la propuesta al concejo",
  scene: "Valeria y Andrés, miembros de un colectivo juvenil en Cali, preparan una propuesta para el concejo municipal.",
  a: "Valeria", b: "Andrés",
  lines: [
   ["A", "OK, let's start. The purpose of this proposal is to increase civic engagement among young people in Cali.", "Bueno, empecemos. El propósito de esta propuesta es aumentar la participación ciudadana de los jóvenes en Cali."],
   ["B", "Good. We need data for the current situation. Turnout among voters under twenty-five was just over thirty percent.", "Bien. Necesitamos datos para la situación actual. La participación de los votantes menores de veinticinco fue apenas de un poco más del treinta por ciento."],
   ["A", "And according to our survey, the vast majority don't trust local politicians. They mention corruption and a lack of transparency.", "Y según nuestra encuesta, la inmensa mayoría no confía en los políticos locales. Mencionan la corrupción y la falta de transparencia."],
   ["B", "So our first recommendation should address accountability. I would propose that the council publish its budget online in plain language.", "Entonces nuestra primera recomendación debería abordar la rendición de cuentas. Propondría que el concejo publique su presupuesto en internet en lenguaje sencillo."],
   ["A", "Great idea. Second, it is proposed that a youth council be created, with real influence on policy.", "Gran idea. Segundo, se propone que se cree un consejo juvenil, con influencia real en las políticas."],
   ["B", "Real influence, not just a photo opportunity. Otherwise it'll undermine trust even more.", "Influencia real, no solo una oportunidad para la foto. Si no, va a minar todavía más la confianza."],
   ["A", "Agreed. And third, public consultations in schools and universities before any major legislation.", "De acuerdo. Y tercero, consultas públicas en colegios y universidades antes de cualquier ley importante."],
   ["B", "Is that feasible? It sounds expensive.", "¿Eso es viable? Suena caro."],
   ["A", "Not really. They could be online. The council would only need to allocate a small budget.", "No mucho. Podrían ser en línea. El concejo solo tendría que asignar un presupuesto pequeño."],
   ["B", "OK. What about the benefits section?", "Bueno. ¿Y la sección de beneficios?"],
   ["A", "Something like: 'Were these measures adopted, young people would feel heard, polarisation would decrease, and in the long run, turnout would rise.'", "Algo como: «Si se adoptaran estas medidas, los jóvenes se sentirían escuchados, la polarización disminuiría y, a la larga, la participación aumentaría»."],
   ["B", "Perfect. Formal, but persuasive. Should we mention the grassroots projects that already exist?", "Perfecto. Formal, pero persuasivo. ¿Mencionamos los proyectos de base que ya existen?"],
   ["A", "Yes, as evidence that young people are willing to participate when they're given the chance.", "Sí, como prueba de que los jóvenes están dispuestos a participar cuando se les da la oportunidad."]
  ]
 },
 practice: [
  M("¿Cuál es el mejor comienzo para una propuesta?", ["The purpose of this proposal is to suggest ways of improving public transport.", "Hello! I have some ideas.", "Once upon a time, there was a city.", "I think transport is bad, you know."], 0),
  M("It is proposed that a youth council ___ created.", ["be", "being", "will be", "to be"], 0, "It is proposed that + subjuntivo (verbo base)."),
  M("The percentage of people who vote in an election is the ___.", ["turnout", "electorate", "legislation", "grassroots"], 0),
  F("___ these measures adopted, trust would improve. (si se adoptaran, inversión)", ["were"]),
  L("At present, the council's budget is not published, which undermines trust. I would propose that it be made available online so that citizens can see how their money is spent.", "¿Qué se propone?", ["Publicar el presupuesto en internet", "Subir los impuestos", "Cambiar al alcalde", "Hacer más elecciones"], 0),
  O("Transparency and accountability are essential to rebuild trust.")
 ],
 more: [
  R("It is proposed that fees be reduced.", "Se propone que se reduzcan las tarifas."),
  R("Grassroots movements can influence national policy.", "Los movimientos de base pueden influir en la política nacional."),
  D("Corruption undermines trust in democracy."),
  D("The council should allocate funds to youth projects."),
  M("A plan that can realistically be carried out is ___.", ["feasible", "accountable", "polarised", "transparent"], 0),
  M("Should the council ___ this plan, the benefits would be immediate.", ["approve", "approves", "approved", "to approve"], 0),
  L("Political polarisation has made dialogue almost impossible. In the long run, only education and civic engagement can reduce it.", "Según quien habla, ¿qué puede reducir la polarización?", ["La educación y la participación ciudadana", "Más leyes", "Las redes sociales", "Elecciones más frecuentes"], 0),
  W("Escribe una propuesta al concejo de tu ciudad (mínimo 150 palabras) para mejorar la participación de los jóvenes o la transparencia del gobierno local. Usa títulos (Introduction, Current situation, Recommendations, Benefits), al menos dos fórmulas de propuesta y una condicional invertida.", 150, [["the purpose of this proposal", "this proposal"], ["i would propose", "it is proposed", "i would recommend", "i suggest"], ["were these", "should the council", "should these", "were the council"], ["transparency", "accountability", "turnout", "civic engagement", "policy", "corruption", "inequality", "grassroots"]])
 ],
 exam: M("It is essential that the council ___ its decisions public.", ["make", "making", "will make", "to make"], 0),
 exam2: F("The new law was approved after a public ___. (consulta)", ["consultation"])
},
/* ───────── Día 39 ───────── */
{
 id: "c1-u8-l4",
 title: "Lengua, identidad y globalización",
 goal: "Debatir sobre el idioma, la identidad cultural y la globalización con argumentos matizados.",
 theory: [
  { p: "Vocabulario de **lengua e identidad**: **mother tongue** (lengua materna), **bilingual**, **lingua franca** (lengua común), **accent** vs. **dialect**, **code-switching** (cambiar de idioma en una misma conversación), **heritage** (herencia), **indigenous languages**, **endangered language**, **linguistic diversity**, **cultural identity**, **assimilation**, **multicultural**." },
  { ex: [["English has become the lingua franca of business.", "El inglés se ha vuelto la lengua común de los negocios."], ["Many bilingual families code-switch without noticing.", "Muchas familias bilingües cambian de idioma sin darse cuenta."], ["Colombia has over sixty indigenous languages.", "Colombia tiene más de sesenta lenguas indígenas."], ["Several of them are endangered.", "Varias de ellas están en peligro."], ["Language is a key part of cultural identity.", "La lengua es una parte clave de la identidad cultural."]] },
  { p: "Para **debatir con matices** sobre globalización: reconocer el otro lado (**While it's true that…, it's equally true that…** · **Granted, …, but…**), señalar complejidad (**It's not as simple as…** · **There's a fine line between… and…**) y concluir con equilibrio (**The challenge is to… without…**)." },
  { ex: [["While it's true that English opens doors, it's equally true that it can push other languages aside.", "Si bien es cierto que el inglés abre puertas, también lo es que puede desplazar otras lenguas."], ["Granted, globalisation has reduced poverty, but at a cultural cost.", "Es cierto que la globalización ha reducido la pobreza, pero con un costo cultural."], ["It's not as simple as choosing one language or the other.", "No es tan simple como escoger una lengua o la otra."], ["There's a fine line between adapting and losing your identity.", "Hay una línea muy delgada entre adaptarse y perder tu identidad."], ["The challenge is to learn English without forgetting where you come from.", "El reto es aprender inglés sin olvidar de dónde vienes."]] },
  { tip: "**Accent** es cómo suena tu pronunciación; **dialect** incluye además vocabulario y gramática propios de una región. Tener acento colombiano en inglés no es un error: lo importante es la **inteligibilidad** (que te entiendan)." }
 ],
 vocab: [
  ["mother tongue", "expresión", "lengua materna", "Spanish is my mother tongue."],
  ["bilingual", "adjetivo", "bilingüe", "She grew up bilingual."],
  ["lingua franca", "expresión", "lengua franca, lengua común", "English is a global lingua franca."],
  ["accent", "sustantivo", "acento", "He has a strong accent."],
  ["dialect", "sustantivo", "dialecto", "Each region has its own dialect."],
  ["code-switching", "sustantivo", "alternancia de idiomas", "Code-switching is natural for bilinguals."],
  ["heritage", "sustantivo", "herencia, patrimonio", "Our cultural heritage."],
  ["indigenous", "adjetivo", "indígena", "Indigenous languages."],
  ["endangered language", "expresión", "lengua en peligro", "Many endangered languages have few speakers."],
  ["linguistic diversity", "expresión", "diversidad lingüística", "Colombia has great linguistic diversity."],
  ["cultural identity", "expresión", "identidad cultural", "Music shapes cultural identity."],
  ["assimilation", "sustantivo", "asimilación", "Assimilation can mean losing traditions."],
  ["globalisation", "sustantivo", "globalización", "Globalisation affects every country."],
  ["intelligibility", "sustantivo", "inteligibilidad", "Intelligibility matters more than accent."],
  ["Spanglish", "sustantivo", "spanglish", "Spanglish is common in Miami."],
  ["loanword", "sustantivo", "préstamo lingüístico", "'Email' is a loanword in Spanish."],
  ["fluent", "adjetivo", "fluido", "She's fluent in three languages."],
  ["native speaker", "expresión", "hablante nativo", "You don't need to sound like a native speaker."],
  ["granted", "conector", "es cierto que, concedido", "Granted, it's useful, but…"],
  ["a fine line", "expresión", "una línea delgada", "There's a fine line between pride and arrogance."],
  ["push aside", "verbo", "desplazar, hacer a un lado", "English can push other languages aside."],
  ["revitalise", "verbo", "revitalizar", "Projects to revitalise indigenous languages."]
 ],
 dialogue: {
  title: "¿Inglés para todos?",
  scene: "En un pódcast sobre educación, la lingüista Catalina Ríos conversa con el presentador, Simón, sobre el bilingüismo en Colombia.",
  a: "Simón", b: "Catalina",
  lines: [
   ["A", "The government wants every school to be bilingual. Is that a good idea?", "El gobierno quiere que todos los colegios sean bilingües. ¿Es buena idea?"],
   ["B", "While it's true that English opens doors, it's equally true that we already are a multilingual country.", "Si bien es cierto que el inglés abre puertas, también lo es que ya somos un país multilingüe."],
   ["A", "What do you mean?", "¿A qué se refiere?"],
   ["B", "Colombia has more than sixty indigenous languages, plus creoles like the one spoken in San Andrés. Several are endangered.", "Colombia tiene más de sesenta lenguas indígenas, más lenguas criollas como la que se habla en San Andrés. Varias están en peligro."],
   ["A", "So you think English might push them aside?", "¿Entonces cree que el inglés podría desplazarlas?"],
   ["B", "Not necessarily. It's not as simple as choosing one or the other. A child can learn Wayuunaiki, Spanish and English.", "No necesariamente. No es tan simple como escoger una u otra. Un niño puede aprender wayuunaiki, español e inglés."],
   ["A", "Granted, but schools have limited time and money.", "Concedido, pero los colegios tienen tiempo y dinero limitados."],
   ["B", "Exactly, and that's where policy matters. The challenge is to promote English without undervaluing our heritage.", "Exacto, y ahí es donde importan las políticas. El reto es promover el inglés sin subvalorar nuestra herencia."],
   ["A", "Many listeners say they feel embarrassed about their Colombian accent in English.", "Muchos oyentes dicen que les da vergüenza su acento colombiano en inglés."],
   ["B", "They shouldn't. What matters is intelligibility, not sounding like a native speaker. Most English speakers in the world aren't native.", "No debería. Lo que importa es que te entiendan, no sonar como un nativo. La mayoría de los hablantes de inglés en el mundo no son nativos."],
   ["A", "And what about code-switching, mixing Spanish and English? Some people see it as lazy.", "¿Y la alternancia, mezclar español e inglés? Algunos la ven como pereza."],
   ["B", "Research shows the opposite: it's a sophisticated skill. There's a fine line, though, between mixing languages naturally and forgetting your own.", "La investigación muestra lo contrario: es una habilidad sofisticada. Aunque hay una línea delgada entre mezclar idiomas con naturalidad y olvidar el propio."],
   ["A", "A great note to end on. Catalina, thank you.", "Una gran nota para terminar. Catalina, gracias."]
  ]
 },
 practice: [
  M("A common language used by people with different mother tongues is a ___.", ["lingua franca", "dialect", "loanword", "heritage"], 0),
  M("Changing from one language to another in the same conversation is ___.", ["code-switching", "assimilation", "intelligibility", "revitalising"], 0),
  M("___, English is useful, but it shouldn't replace our own languages.", ["Granted", "Granting", "Grant", "To grant"], 0),
  F("There's a fine ___ between adapting and losing your identity. (línea)", ["line"]),
  L("Most English speakers in the world are not native speakers, so what really matters is intelligibility, not having a perfect accent.", "¿Qué es lo que realmente importa, según quien habla?", ["Que te entiendan", "Tener acento perfecto", "Ser nativo", "Hablar rápido"], 0),
  O("While it's true that English opens doors, it's equally true that we shouldn't forget our own languages.")
 ],
 more: [
  R("Language is a key part of cultural identity.", "La lengua es una parte clave de la identidad cultural."),
  R("It's not as simple as choosing one language.", "No es tan simple como escoger un solo idioma."),
  D("Several indigenous languages in Colombia are endangered."),
  D("She grew up bilingual in Miami."),
  M("The way your pronunciation sounds is your ___.", ["accent", "dialect", "mother tongue", "loanword"], 0),
  M("A word taken from another language, like 'email' in Spanish, is a ___.", ["loanword", "lingua franca", "dialect", "heritage"], 0),
  L("Granted, globalisation has made products cheaper. But many small towns have lost their traditional crafts, and with them, part of their identity.", "¿Qué costo menciona?", ["La pérdida de artesanías tradicionales e identidad", "Productos más caros", "Menos turismo", "Más desempleo"], 0),
  W("Escribe un artículo (mínimo 150 palabras) sobre si aprender inglés amenaza o enriquece la identidad cultural de los colombianos. Usa vocabulario de lengua e identidad y al menos tres expresiones para matizar (while it's true that…, granted, it's not as simple as, there's a fine line between, the challenge is to…).", 150, [["identity", "heritage", "mother tongue", "bilingual", "lingua franca", "indigenous", "accent", "culture"], ["while it's true", "granted", "it's not as simple", "a fine line", "the challenge is"], ["however", "although", "on the other hand", "nevertheless"]])
 ],
 exam: M("Colombia has great linguistic ___: more than sixty languages.", ["diversity", "identity", "heritage", "assimilation"], 0),
 exam2: F("Spanish is my mother ___. (lengua)", ["tongue"])
},
/* ───────── Día 40 ───────── */
{
 id: "c1-u8-l5",
 title: "Justicia y medios: el juicio en las redes sociales",
 goal: "Hablar de procesos judiciales y del papel de los medios con vocabulario jurídico preciso.",
 theory: [
  { p: "Vocabulario del **proceso judicial**: **the defendant** (el acusado), **the prosecution / the defence** (la fiscalía / la defensa), **the plaintiff** (el demandante, en casos civiles), **a witness** y **testimony** (testimonio), **evidence**, **the jury**, **the verdict** (veredicto), **be convicted / be acquitted** (ser condenado / absuelto), **sentence**, **appeal** (apelar), **presumption of innocence**." },
  { ex: [["The defendant pleaded not guilty.", "El acusado se declaró inocente."], ["The prosecution presented new evidence.", "La fiscalía presentó nuevas pruebas."], ["She was acquitted due to lack of evidence.", "Fue absuelta por falta de pruebas."], ["He was convicted of fraud and sentenced to six years.", "Fue condenado por fraude y sentenciado a seis años."], ["His lawyers are going to appeal the verdict.", "Sus abogados van a apelar el veredicto."]] },
  { p: "**Medios y justicia**: el **trial by media** (juicio mediático) ocurre cuando la opinión pública condena antes que el juez. Vocabulario: **press coverage**, **allegations** (acusaciones), **alleged** (presunto), **sensationalism**, **leak** (filtración), **misinformation**, **echo chamber**, **fact-checking**, **defamation** (difamación), **the right to privacy**." },
  { ex: [["The alleged fraud was widely reported.", "El presunto fraude tuvo amplia cobertura."], ["Social media had already found him guilty.", "Las redes sociales ya lo habían declarado culpable."], ["The leak damaged the investigation.", "La filtración perjudicó la investigación."], ["Sensationalism sells, but it can ruin reputations.", "El sensacionalismo vende, pero puede arruinar reputaciones."], ["She sued the newspaper for defamation.", "Demandó al periódico por difamación."]] },
  { tip: "Los periodistas usan **alleged / allegedly** (presunto, presuntamente) precisamente para respetar la **presunción de inocencia** y evitar demandas por difamación. Es una forma de distanciamiento, como la pasiva impersonal." }
 ],
 vocab: [
  ["defendant", "sustantivo", "acusado, demandado", "The defendant denied everything."],
  ["prosecution", "sustantivo", "fiscalía, acusación", "The prosecution has strong evidence."],
  ["defence", "sustantivo", "defensa", "The defence called three witnesses."],
  ["plaintiff", "sustantivo", "demandante", "The plaintiff asked for compensation."],
  ["testimony", "sustantivo", "testimonio", "Her testimony was crucial."],
  ["verdict", "sustantivo", "veredicto", "The jury reached a verdict."],
  ["convicted", "adjetivo / participio", "condenado", "He was convicted of bribery."],
  ["acquitted", "adjetivo / participio", "absuelto", "She was acquitted of all charges."],
  ["appeal", "verbo / sustantivo", "apelar; apelación", "They will appeal the decision."],
  ["presumption of innocence", "expresión", "presunción de inocencia", "Everyone has the presumption of innocence."],
  ["plead guilty", "expresión", "declararse culpable", "He pleaded guilty."],
  ["trial by media", "expresión", "juicio mediático", "It was a trial by media."],
  ["allegations", "sustantivo", "acusaciones, señalamientos", "He denies the allegations."],
  ["alleged", "adjetivo", "presunto", "The alleged thief was arrested."],
  ["sensationalism", "sustantivo", "sensacionalismo", "Sensationalism damages journalism."],
  ["leak", "sustantivo / verbo", "filtración; filtrar", "The documents were leaked."],
  ["defamation", "sustantivo", "difamación", "She sued for defamation."],
  ["echo chamber", "expresión", "cámara de eco", "Social media creates echo chambers."],
  ["fact-checking", "sustantivo", "verificación de datos", "Fact-checking takes time."],
  ["press coverage", "expresión", "cobertura de prensa", "The case got huge press coverage."],
  ["right to privacy", "expresión", "derecho a la privacidad", "Celebrities also have a right to privacy."],
  ["miscarriage of justice", "expresión", "error judicial", "It was a miscarriage of justice."]
 ],
 dialogue: {
  title: "Culpable en Twitter, inocente en el juzgado",
  scene: "En un programa de radio, la periodista Marcela Duque y el abogado penalista Jorge Lozano comentan un caso que fue tendencia en redes sociales.",
  a: "Marcela", b: "Jorge",
  lines: [
   ["A", "Doctor Lozano, last week a judge acquitted the businessman who had been accused of fraud. Yet on social media, he had been found guilty months ago.", "Doctor Lozano, la semana pasada un juez absolvió al empresario que había sido acusado de fraude. Sin embargo, en redes sociales lo habían declarado culpable hace meses."],
   ["B", "That's a classic case of trial by media. The verdict on Twitter came long before the verdict in court.", "Es un caso clásico de juicio mediático. El veredicto en Twitter llegó mucho antes que el del juzgado."],
   ["A", "Why was he acquitted?", "¿Por qué lo absolvieron?"],
   ["B", "Basically, lack of evidence. The prosecution relied on the testimony of a witness who later contradicted herself.", "Básicamente, por falta de pruebas. La fiscalía se apoyó en el testimonio de una testigo que después se contradijo."],
   ["A", "But some people say he's guilty and simply had good lawyers.", "Pero algunos dicen que es culpable y que simplemente tuvo buenos abogados."],
   ["B", "That's the problem. In a democracy, there's the presumption of innocence. If the evidence isn't there, you can't convict someone.", "Ese es el problema. En una democracia existe la presunción de inocencia. Si no hay pruebas, no se puede condenar a alguien."],
   ["A", "What role did the media play?", "¿Qué papel jugaron los medios?"],
   ["B", "A significant one. There was a leak of private messages, and some outlets published them without fact-checking. Sensationalism sells.", "Uno importante. Se filtraron mensajes privados y algunos medios los publicaron sin verificarlos. El sensacionalismo vende."],
   ["A", "In fairness, many journalists used the word 'alleged' throughout.", "Para ser justos, muchos periodistas usaron la palabra «presunto» todo el tiempo."],
   ["B", "True, and that's good practice. But social media doesn't follow those rules. People live in echo chambers where everyone already agrees.", "Cierto, y es una buena práctica. Pero las redes sociales no siguen esas reglas. La gente vive en cámaras de eco donde todos ya están de acuerdo."],
   ["A", "Will he take legal action?", "¿Va a emprender acciones legales?"],
   ["B", "His lawyers say he'll sue two websites for defamation. And the prosecution may well appeal the verdict.", "Sus abogados dicen que va a demandar a dos portales por difamación. Y es muy posible que la fiscalía apele el veredicto."],
   ["A", "So this story is far from over.", "O sea que esta historia está lejos de terminar."],
   ["B", "Far from it. And whatever the final outcome, his reputation has been damaged for good.", "Muy lejos. Y sea cual sea el resultado final, su reputación quedó dañada para siempre."]
  ]
 },
 practice: [
  M("The person accused of a crime in court is the ___.", ["defendant", "plaintiff", "witness", "jury"], 0),
  M("She was ___ because there wasn't enough evidence.", ["acquitted", "convicted", "sentenced", "appealed"], 0),
  M("Journalists use the word ___ to respect the presumption of innocence.", ["alleged", "guilty", "convicted", "leaked"], 0),
  F("His lawyers will ___ the verdict in a higher court. (apelar)", ["appeal"]),
  L("Months before the trial, social media had already decided he was guilty. The judge, however, acquitted him for lack of evidence.", "¿Qué decidió el juez?", ["Absolverlo por falta de pruebas", "Condenarlo", "Aplazar el juicio", "Pedir más testigos"], 0),
  O("Everyone has the right to the presumption of innocence.")
 ],
 more: [
  R("The prosecution presented new evidence.", "La fiscalía presentó nuevas pruebas."),
  R("She sued the newspaper for defamation.", "Demandó al periódico por difamación."),
  D("The defendant pleaded not guilty to all charges."),
  D("Social media can create echo chambers."),
  M("When private documents are given to journalists secretly, there is a ___.", ["leak", "verdict", "plea", "sentence"], 0),
  M("He ___ guilty to avoid a longer sentence.", ["pleaded", "appealed", "acquitted", "testified"], 0),
  L("The case received huge press coverage, but some outlets published the leaked messages without fact-checking them. Now they could face defamation lawsuits.", "¿Qué hicieron mal algunos medios?", ["Publicar los mensajes filtrados sin verificarlos", "No cubrir el caso", "Usar la palabra presunto", "Entrevistar al juez"], 0),
  W("Escribe un artículo de opinión (mínimo 150 palabras): ¿deberían los medios y las redes sociales informar sobre casos judiciales antes del veredicto? Usa vocabulario jurídico (defendant, evidence, verdict, acquitted, presumption of innocence) y de medios (alleged, leak, sensationalism, echo chamber), y matiza tu postura.", 150, [["defendant", "evidence", "verdict", "acquitted", "convicted", "presumption of innocence", "trial", "prosecution"], ["alleged", "allegedly", "leak", "sensationalism", "echo chamber", "fact-checking", "press coverage", "defamation"], ["while it's true", "granted", "however", "on the other hand", "admittedly"]])
 ],
 exam: M("The jury took three days to reach a ___.", ["verdict", "testimony", "plaintiff", "leak"], 0),
 exam2: F("Newspapers called him the ___ thief because nothing had been proven. (presunto)", ["alleged"])
}
],
/* ───────── Quiz de la unidad 8 ───────── */
quiz: [
 M("What might have ___ her to quit her job?", ["prompted", "pushed up", "made", "caused to"], 0),
 M("___, investing in teachers is the more effective of the two options.", ["On balance", "In balance", "On the contrary", "At balance"], 0),
 M("It is proposed that the council ___ its budget online.", ["publish", "publishing", "will publish", "to publish"], 0),
 M("A common language between speakers of different languages is a ___.", ["lingua franca", "dialect", "mother tongue", "loanword"], 0),
 M("She was ___ of all charges and left the court a free woman.", ["acquitted", "convicted", "sentenced", "pleaded"], 0),
 F("___ these measures adopted, turnout would rise. (inversión condicional)", ["were"]),
 L("I get the impression he's driven by fear rather than ambition. He could well be under pressure from his family.", "Según quien habla, ¿qué lo mueve?", ["El miedo", "La ambición", "El dinero", "La pasión"], 0),
 L("While it's true that English is the lingua franca of business, it's equally true that Colombia's indigenous languages are part of our heritage and deserve protection.", "¿Qué defiende quien habla?", ["Proteger también las lenguas indígenas", "Solo aprender inglés", "Prohibir el inglés", "Unificar todas las lenguas"], 0),
 W("Escribe una propuesta o un ensayo (mínimo 160 palabras) sobre cómo los colegios podrían formar ciudadanos más críticos frente a la desinformación. Discute dos medidas, decide cuál es más importante, usa vocabulario de educación, sociedad y medios, y al menos una estructura formal (it is proposed that / were… adopted / on balance).", 160, [["critical thinking", "curriculum", "assessment", "literacy", "teachers"], ["misinformation", "fact-checking", "echo chamber", "alleged", "sensationalism", "media"], ["it is proposed", "i would propose", "were these", "should the", "on balance", "the more effective"]]),
 O("While it's true that globalisation has benefits, it's equally true that it can threaten cultural identity."),
 O("It is proposed that a youth council be created.")
],
pool: [
 M("Rewards like money or prizes provide ___ motivation.", ["extrinsic", "intrinsic", "cognitive", "habit-forming"], 0),
 M("Learning facts by repetition without understanding is ___.", ["rote learning", "lifelong learning", "critical thinking", "assessment"], 0),
 M("The percentage of people who vote is the ___.", ["turnout", "electorate", "policy", "legislation"], 0),
 M("___, English opens doors, but it shouldn't replace our heritage.", ["Granted", "Granting", "To grant", "Grant"], 0),
 M("The person who brings a civil case to court is the ___.", ["plaintiff", "defendant", "witness", "judge"], 0),
 M("A plan that is realistic and possible is ___.", ["feasible", "alleged", "overwhelming", "endangered"], 0),
 F("Social media can trap people in echo ___. (cámaras)", ["chambers"]),
 F("The ___ rate is higher in rural areas. (deserción)", ["dropout"]),
 L("Presumably, she started running after a health scare. Whatever the reason, she must be feeling an enormous sense of achievement.", "¿Qué debe sentir ella?", ["Una enorme sensación de logro", "Agotamiento", "Miedo", "Presión"], 0),
 L("Should the council approve this proposal, young people would have a real voice in local policy, and in the long run, trust in institutions would improve.", "¿Qué pasaría a la larga?", ["Mejoraría la confianza en las instituciones", "Bajaría la participación", "Subirían los impuestos", "Habría más elecciones"], 0),
 L("The documents were leaked to the press before the trial. The defence argues that this violated the defendant's right to a fair trial.", "¿Qué argumenta la defensa?", ["Que se violó el derecho a un juicio justo", "Que el acusado es culpable", "Que no hubo filtración", "Que la prensa hizo bien"], 0),
 W("Escribe un ensayo (mínimo 160 palabras): ¿qué es más importante para conservar la identidad cultural en un mundo globalizado: (1) la educación en lenguas indígenas, (2) el apoyo a las artes locales o (3) limitar los medios extranjeros? Discute dos y decide.", 160, [["identity", "heritage", "indigenous", "culture", "globalisation", "globalization", "languages"], ["granted", "while it's true", "however", "on the other hand", "a further consideration"], ["on balance", "the more", "in conclusion", "all things considered"]]),
 O("She could well be feeling under a lot of pressure."),
 O("The defendant was acquitted due to lack of evidence."),
 O("Rote learning does little to develop critical thinking.")
]
};
