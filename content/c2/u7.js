/* C2 · Unidad 7 · Naturalidad y matices (Días 31–35). Se arma con: node tools/build-level.js 5 content/c2 */
const M = (q, o, a, x) => ({ t: "mc", q, o, a, ...(x ? { x } : {}) }), F = (q, ans) => ({ t: "fill", q, ans }),
  L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), O = text => ({ t: "oral", text }), D = say => ({ t: "dict", say }),
  W = (q, min, keys) => ({ t: "write", q, min, keys }), R = (s, es) => ({ t: "order", words: s.split(" "), es });

module.exports = {
n: 7,
title: "Naturalidad y matices",
lessons: [
/* ───────── Día 31 ───────── */
{
 id: "c2-u7-l1",
 title: "Matices de tiempo y aspecto: cortesía, presente histórico y progresivo expresivo",
 goal: "Usar los tiempos verbales para suavizar, dramatizar o mostrar actitud, como lo hace un nativo culto.",
 theory: [
  { p: "Los tiempos no solo indican **cuándo**: también **distancia** y **actitud**. El **pasado de cortesía** suaviza peticiones: **I was wondering if you could…** · **I was hoping we might…** · **We were thinking of…** Cuanto más «atrás» va el verbo, más distancia (y más cortesía): **I wonder → I'm wondering → I was wondering**." },
  { ex: [["I was wondering if you might have a moment.", "Me preguntaba si tendría un momento."], ["We were hoping you could join us.", "Esperábamos que pudiera acompañarnos."], ["Did you want to see the manager?", "¿Quería ver al gerente? (más suave que «Do you want…?»)"], ["I just wanted to check one thing.", "Solo quería confirmar una cosa."], ["I was going to ask you a favour.", "Te iba a pedir un favor."]] },
  { p: "El **presente histórico** da viveza a anécdotas y chistes: **So I walk into the office, and my boss is standing there with a cake…** El **progresivo con always / forever / constantly** expresa irritación: **He's always borrowing my charger!** Y los verbos de estado en progresivo marcan algo temporal o enfático: **You're being ridiculous** (te estás comportando así ahora) · **I'm loving this weather** (coloquial)." },
  { ex: [["So this guy comes up to me and says…", "Entonces este tipo se me acerca y me dice…"], ["She's forever complaining about her neighbours.", "Se la pasa quejándose de sus vecinos."], ["You're being very unfair.", "Estás siendo muy injusto (ahora)."], ["I'm thinking of moving to Lisbon.", "Estoy pensando en irme a vivir a Lisboa."], ["We're having a great time.", "La estamos pasando muy bien (have = disfrutar sí admite progresivo)."]] },
  { tip: "**You are ridiculous** describe tu carácter; **You're being ridiculous** describe lo que estás haciendo en este momento. Esa diferencia, tan sutil, es exactamente lo que distingue a un hablante C2." }
 ],
 vocab: [
  ["I was wondering if", "expresión", "me preguntaba si (petición cortés)", "I was wondering if you could help me."],
  ["I was hoping", "expresión", "esperaba (petición suave)", "I was hoping to speak to you."],
  ["I just wanted to", "expresión", "solo quería", "I just wanted to say thank you."],
  ["historic present", "expresión", "presente histórico", "Comedians use the historic present."],
  ["forever + -ing", "expresión", "pasársela + gerundio (queja)", "He's forever losing his keys."],
  ["constantly", "adverbio", "constantemente", "She's constantly checking her phone."],
  ["be being + adjetivo", "estructura", "estar comportándose de cierta forma", "You're being silly."],
  ["tentative", "adjetivo", "tentativo, vacilante", "A tentative request."],
  ["distancing", "sustantivo", "distanciamiento", "The past tense creates distancing."],
  ["vivid", "adjetivo", "vívido", "The historic present makes stories vivid."],
  ["anecdote", "sustantivo", "anécdota", "He told a funny anecdote."],
  ["punchline", "sustantivo", "remate (de un chiste)", "He forgot the punchline."],
  ["irritation", "sustantivo", "irritación, fastidio", "The progressive can show irritation."],
  ["resemble", "verbo", "parecerse a", "She resembles her mother."],
  ["unfair", "adjetivo", "injusto", "You're being unfair."],
  ["stubborn", "adjetivo", "terco", "Stop being so stubborn."],
  ["a favour", "expresión", "un favor", "Could I ask you a favour?"],
  ["drop in", "verbo", "pasar de visita", "I was thinking of dropping in later."],
  ["bump into", "verbo", "encontrarse por casualidad", "So I bump into my ex at the supermarket…"],
  ["out of the blue", "expresión", "de la nada, sin aviso", "He called me out of the blue."],
  ["so there I am", "expresión", "y ahí estoy yo (al narrar)", "So there I am, in my pyjamas…"],
  ["get on someone's nerves", "expresión", "sacar de quicio", "He's always interrupting; it gets on my nerves."]
 ],
 dialogue: {
  title: "La anécdota del ascensor",
  scene: "Durante una cena, Santiago le cuenta a su amiga británica Emily lo que le pasó en una entrevista de trabajo en Londres.",
  a: "Emily", b: "Santiago",
  lines: [
   ["A", "So, how did the interview go? I was hoping you'd tell me everything.", "Bueno, ¿cómo te fue en la entrevista? Esperaba que me contaras todo."],
   ["B", "Oh, you won't believe it. So I arrive at the building twenty minutes early, feeling very proud of myself.", "Ay, no me vas a creer. Entonces llego al edificio veinte minutos antes, sintiéndome muy orgulloso de mí mismo."],
   ["A", "Good start.", "Buen comienzo."],
   ["B", "I get into the lift, and this man gets in after me. He's carrying three coffees and he's constantly checking his phone.", "Me subo al ascensor y un hombre entra detrás de mí. Lleva tres cafés y está todo el tiempo mirando el celular."],
   ["A", "Uh-oh. I can see where this is going.", "Uy. Ya veo para dónde va esto."],
   ["B", "The lift stops suddenly, he loses his balance, and one of the coffees lands all over my white shirt.", "El ascensor frena de golpe, él pierde el equilibrio y uno de los cafés me cae encima de la camisa blanca."],
   ["A", "No! What did you do?", "¡No! ¿Y qué hiciste?"],
   ["B", "I was going to say something rude, but I just smiled and said, 'Don't worry, these things happen.'", "Iba a decirle algo grosero, pero solo sonreí y le dije: «Tranquilo, son cosas que pasan»."],
   ["A", "Very diplomatic. And then?", "Muy diplomático. ¿Y luego?"],
   ["B", "So there I am, in the waiting room, with a huge brown stain. And who walks in to interview me? The coffee man.", "Y ahí estoy yo, en la sala de espera, con una mancha café enorme. ¿Y quién entra a entrevistarme? El hombre del café."],
   ["A", "You're joking! Seriously?", "¡Me estás molestando! ¿En serio?"],
   ["B", "Completely. He was so embarrassed that he spent the first five minutes apologising. And I got the job.", "Totalmente. Estaba tan avergonzado que pasó los primeros cinco minutos disculpándose. Y me dieron el trabajo."],
   ["A", "That's brilliant. I was wondering why you were smiling so much tonight!", "¡Qué maravilla! ¡Me preguntaba por qué estabas sonriendo tanto esta noche!"]
  ]
 },
 practice: [
  M("La petición más cortés es:", ["I was wondering if you could send me the file.", "Send me the file.", "I want the file.", "You will send me the file."], 0),
  M("He's ___ borrowing my charger without asking! (queja)", ["always", "usually", "sometimes", "ever"], 0),
  M("«You're being rude» significa que la persona:", ["se está comportando de forma grosera ahora", "es grosera por naturaleza", "fue grosera ayer", "va a ser grosera"], 0),
  F("I was ___ if you might have time for a quick chat. (preguntándome)", ["wondering"]),
  L("So I'm sitting on the bus, minding my own business, and this woman sits next to me and starts telling me her whole life story.", "¿Qué tiempo verbal usa para narrar y por qué?", ["Presente histórico, para dar viveza", "Futuro, para predecir", "Pasado perfecto, para el orden", "Condicional, para hipótesis"], 0),
  O("I was wondering if you could possibly help me with this report.")
 ],
 more: [
  R("She's forever complaining about the weather.", "Se la pasa quejándose del clima."),
  R("I was hoping we might meet next week.", "Esperaba que pudiéramos vernos la próxima semana."),
  D("So there I am, standing in the rain without an umbrella."),
  D("You're being very stubborn about this."),
  M("¿Cuál orden va de MENOS a MÁS cortés?", ["I want to ask → I wonder if → I was wondering if", "I was wondering if → I wonder if → I want to ask", "I wonder if → I want to ask → I was wondering if", "I want to ask → I was wondering if → I wonder if"], 0),
  M("I'm ___ of moving to Spain next year. (considerando)", ["thinking", "think", "thought", "to think"], 0),
  L("He's constantly interrupting people in meetings. It's not that he's rude; he's just being very impatient at the moment because of the deadline.", "¿Qué opina quien habla de su colega?", ["Que su impaciencia es temporal, por el plazo", "Que es grosero por naturaleza", "Que no habla en las reuniones", "Que es muy paciente"], 0),
  W("Cuenta una anécdota divertida o vergonzosa usando el presente histórico (mínimo 150 palabras). Incluye al menos una queja con always / forever + -ing, un verbo de estado en progresivo (be being…) y una petición cortés en pasado (I was wondering…).", 150, [["so i", "so there i am", "and then he", "and then she", "comes up", "walks in"], ["always", "forever", "constantly"], ["being"], ["i was wondering", "i was hoping", "i just wanted"]])
 ],
 exam: M("«___ you could give me some advice.» (petición muy cortés)", ["I was wondering if", "I wonder that", "I wondered that", "I'm wondering that"], 0),
 exam2: F("My neighbour is ___ playing loud music at midnight! (siempre, queja)", ["always", "forever", "constantly"])
},
/* ───────── Día 32 ───────── */
{
 id: "c2-u7-l2",
 title: "Conversación natural: muletillas, turnos y reformular",
 goal: "Sonar natural en una conversación: ganar tiempo, tomar y ceder el turno, y aclarar malentendidos.",
 theory: [
  { p: "Los nativos usan **muletillas** para ganar tiempo y suavizar: **well, I mean, you know, sort of, kind of, like, let me think, how can I put it?** Usadas con moderación, suenan naturales; en exceso, suenan inseguras. También existen las **señales de escucha** (backchannelling): **Right. · Exactly. · Mm-hm. · Really? · I see. · Fair enough.**" },
  { ex: [["Well, it's sort of complicated.", "Bueno, es como complicado."], ["I mean, it's not that I don't like him.", "O sea, no es que no me caiga bien."], ["How can I put it? It wasn't exactly a success.", "¿Cómo te lo digo? No fue precisamente un éxito."], ["Let me think… probably Thursday.", "Déjame pensar… probablemente el jueves."], ["—It took us six hours. —Really? Wow.", "—Nos tomó seis horas. —¿En serio? Uy."]] },
  { p: "Para **tomar el turno**: **Sorry to jump in, but… · If I can just come in here… · Can I add something?** Para **ceder** o **retomar**: **Go on. · Sorry, you were saying? · Anyway, as I was saying…** Para **reformular y aclarar**: **What I meant was… · Let me put it another way. · I didn't mean it like that. · So what you're saying is…?**" },
  { ex: [["Sorry to jump in, but that's not quite right.", "Perdón por interrumpir, pero eso no es del todo correcto."], ["Sorry, you were saying?", "Perdón, ¿qué decías?"], ["What I meant was that we need more time.", "Lo que quise decir es que necesitamos más tiempo."], ["Let me put it another way.", "Déjame decirlo de otra forma."], ["So what you're saying is that we should wait?", "¿O sea que lo que dices es que deberíamos esperar?"]] },
  { tip: "En español «o sea» y «pues» se usan muchísimo. En inglés, el exceso de **like** o **you know** suena juvenil o poco profesional. En una entrevista o en el examen C2, prefiere **I mean**, **well** y **let me think**." }
 ],
 vocab: [
  ["filler", "sustantivo", "muletilla", "'Well' is a common filler."],
  ["backchannelling", "sustantivo", "señales de escucha", "Backchannelling shows you're listening."],
  ["I mean", "expresión", "o sea, quiero decir", "I mean, it's not a disaster."],
  ["sort of / kind of", "expresión", "como, algo así (atenuador)", "It's sort of expensive."],
  ["how can I put it?", "expresión", "¿cómo te lo digo?", "How can I put it? He's not very reliable."],
  ["let me think", "expresión", "déjame pensar", "Let me think… yes, Friday."],
  ["sorry to jump in", "expresión", "perdón por interrumpir", "Sorry to jump in, but I disagree."],
  ["if I can just come in here", "expresión", "si me permiten intervenir", "If I can just come in here…"],
  ["go on", "expresión", "sigue, continúa", "Sorry, go on."],
  ["as I was saying", "expresión", "como iba diciendo", "Anyway, as I was saying…"],
  ["what I meant was", "expresión", "lo que quise decir fue", "What I meant was something different."],
  ["let me put it another way", "expresión", "déjame decirlo de otra forma", "Let me put it another way."],
  ["I didn't mean it like that", "expresión", "no lo dije en ese sentido", "Sorry, I didn't mean it like that."],
  ["so what you're saying is", "expresión", "o sea que lo que dices es", "So what you're saying is no?"],
  ["fair enough", "expresión", "es justo, vale", "Fair enough, you're right."],
  ["get the wrong end of the stick", "expresión", "entender mal", "I think you got the wrong end of the stick."],
  ["misunderstanding", "sustantivo", "malentendido", "It was just a misunderstanding."],
  ["clarify", "verbo", "aclarar", "Let me clarify."],
  ["turn-taking", "sustantivo", "toma de turnos", "Turn-taking is a speaking skill."],
  ["hesitate", "verbo", "titubear, dudar", "Don't hesitate to ask."],
  ["ramble", "verbo", "divagar", "Sorry, I'm rambling."],
  ["lose your train of thought", "expresión", "perder el hilo", "Sorry, I've lost my train of thought."]
 ],
 dialogue: {
  title: "Un malentendido en la reunión",
  scene: "En una videollamada, Paola (Bogotá) y su colega inglés Tom discuten una fecha de entrega. Hay un malentendido.",
  a: "Tom", b: "Paola",
  lines: [
   ["A", "So, the report is going to be late again?", "¿Entonces el informe va a llegar tarde otra vez?"],
   ["B", "Well, sort of. I mean, the data is ready, but the design team needs a few more days.", "Bueno, más o menos. O sea, los datos están listos, pero el equipo de diseño necesita unos días más."],
   ["A", "Right. It's just that this is the third time this month.", "Ya. Es que es la tercera vez este mes."],
   ["B", "Sorry to jump in, but that's not quite right. The first delay was the client's fault.", "Perdón por interrumpir, pero eso no es del todo correcto. El primer retraso fue culpa del cliente."],
   ["A", "Fair enough. I didn't mean it like that. I wasn't blaming you.", "Es justo. No lo dije en ese sentido. No te estaba culpando."],
   ["B", "OK, sorry. I think I got the wrong end of the stick.", "Bueno, perdón. Creo que te entendí mal."],
   ["A", "No worries. Sorry, you were saying about the design team?", "Tranquila. Perdón, ¿qué decías del equipo de diseño?"],
   ["B", "Yes, as I was saying, they need until Thursday. How can I put it? The charts were… not exactly professional.", "Sí, como iba diciendo, necesitan hasta el jueves. ¿Cómo te lo digo? Las gráficas eran… no precisamente profesionales."],
   ["A", "Ha ha, I see. So what you're saying is it's better to wait than to send something bad?", "Jaja, ya veo. ¿O sea que lo que dices es que es mejor esperar que mandar algo malo?"],
   ["B", "Exactly. Let me put it another way: would you rather have it on Monday and ugly, or on Thursday and perfect?", "Exacto. Déjame decirlo de otra forma: ¿prefieres tenerlo el lunes y feo, o el jueves y perfecto?"],
   ["A", "Thursday and perfect, obviously. I'll let the client know.", "El jueves y perfecto, obvio. Le aviso al cliente."],
   ["B", "Thanks, Tom. And sorry, I was rambling a bit.", "Gracias, Tom. Y perdón, estaba divagando un poco."],
   ["A", "Not at all. It was a useful clarification.", "Para nada. Fue una aclaración útil."]
  ]
 },
 practice: [
  M("Para interrumpir con cortesía dices:", ["Sorry to jump in, but…", "Shut up, please.", "Stop, I talk now.", "Wait, wait, me!"], 0),
  M("Si alguien te entendió mal, aclaras con:", ["What I meant was…", "You're stupid.", "Whatever.", "Next question."], 0),
  M("«I think you got the wrong end of the ___.» (entendiste mal)", ["stick", "rope", "story", "line"], 0),
  F("Sorry, I've lost my train of ___. (perdí el hilo)", ["thought"]),
  L("If I can just come in here, I think we're forgetting the budget. Sorry, go on, you were saying?", "¿Qué hace quien habla?", ["Interviene y luego le devuelve el turno al otro", "Termina la reunión", "Se niega a hablar", "Cambia de tema sin permiso"], 0),
  O("Let me put it another way: we need more time, not more people.")
 ],
 more: [
  R("Sorry, you were saying?", "Perdón, ¿qué decías?"),
  R("So what you're saying is that we should wait?", "¿O sea que lo que dices es que deberíamos esperar?"),
  D("I didn't mean it like that."),
  D("Anyway, as I was saying, the results were positive."),
  M("¿Qué muletilla es más apropiada en una entrevista de trabajo?", ["Well, let me think…", "Like, you know, like…", "Dude, honestly…", "Whatever, I guess…"], 0),
  M("«Mm-hm. Right. I see.» son ejemplos de:", ["backchannelling", "rambling", "turn-taking errors", "fillers to avoid"], 0),
  L("Sorry, I'm rambling. What I meant was that the new system is good, but people need training before we switch.", "¿Qué quiso decir?", ["Que el sistema es bueno, pero se necesita capacitación antes", "Que el sistema es malo", "Que no hace falta capacitación", "Que hay que cambiar ya"], 0),
  W("Escribe el diálogo de una reunión en la que hay un malentendido y se aclara (mínimo 150 palabras). Usa muletillas naturales, al menos dos formas de tomar o ceder el turno y al menos dos de reformular.", 150, [["well", "i mean", "sort of", "kind of", "let me think", "how can i put it"], ["sorry to jump in", "if i can just come in", "go on", "you were saying", "as i was saying"], ["what i meant was", "let me put it another way", "i didn't mean it like that", "so what you're saying is"]])
 ],
 exam: M("To politely ask someone to continue after you interrupted: «Sorry, ___»", ["go on.", "stop.", "be quiet.", "next."], 0),
 exam2: F("Let me put it another ___: we can't afford it. (de otra forma)", ["way"])
},
/* ───────── Día 33 ───────── */
{
 id: "c2-u7-l3",
 title: "Binomios y fórmulas fijas: by and large, sick and tired, be that as it may",
 goal: "Usar expresiones fijas que dan fluidez y naturalidad al nivel más alto.",
 theory: [
  { p: "Los **binomios** son pares fijos de palabras unidos por **and** u **or**, con un orden que **no se puede cambiar**: **by and large** (en general), **pros and cons**, **ups and downs**, **sick and tired** (harto), **odds and ends** (cosas sueltas), **first and foremost** (ante todo), **loud and clear**, **safe and sound** (sano y salvo), **trial and error** (ensayo y error), **give and take** (tira y afloja), **wear and tear** (desgaste), **time and again** (una y otra vez), **neck and neck** (parejos), **sooner or later**, **more or less**, **null and void** (nulo)." },
  { ex: [["By and large, the project was a success.", "En general, el proyecto fue un éxito."], ["I'm sick and tired of waiting.", "Estoy harto de esperar."], ["They arrived safe and sound.", "Llegaron sanos y salvos."], ["We learnt it by trial and error.", "Lo aprendimos por ensayo y error."], ["The candidates are neck and neck.", "Los candidatos están parejos."]] },
  { p: "**Fórmulas fijas** formales o literarias (restos del subjuntivo): **be that as it may** (sea como sea), **come what may** (pase lo que pase), **so be it** (que así sea), **far be it from me to…** (lejos de mí…), **suffice it to say** (baste decir), **as it were** (por así decirlo), **heaven forbid** (Dios no lo quiera), **long live…** (¡viva…!)." },
  { ex: [["Be that as it may, we still have to pay.", "Sea como sea, igual tenemos que pagar."], ["Come what may, I'll be there.", "Pase lo que pase, estaré ahí."], ["Far be it from me to criticise, but…", "Lejos de mí criticar, pero…"], ["Suffice it to say, he wasn't invited again.", "Baste decir que no lo volvieron a invitar."], ["If they want to leave, so be it.", "Si se quieren ir, que así sea."]] },
  { tip: "El orden de los binomios es fijo: se dice **pros and cons**, nunca «cons and pros»; **safe and sound**, nunca «sound and safe». Cambiar el orden delata enseguida a un hablante no nativo." }
 ],
 vocab: [
  ["by and large", "expresión", "en general", "By and large, I agree."],
  ["pros and cons", "expresión", "ventajas y desventajas", "Weigh up the pros and cons."],
  ["ups and downs", "expresión", "altibajos", "Every marriage has its ups and downs."],
  ["sick and tired", "expresión", "harto", "I'm sick and tired of the traffic."],
  ["odds and ends", "expresión", "cosas sueltas, chécheres", "A drawer full of odds and ends."],
  ["first and foremost", "expresión", "ante todo", "First and foremost, thank you."],
  ["loud and clear", "expresión", "fuerte y claro", "I hear you loud and clear."],
  ["safe and sound", "expresión", "sano y salvo", "They're home safe and sound."],
  ["trial and error", "expresión", "ensayo y error", "We learnt by trial and error."],
  ["give and take", "expresión", "tira y afloja, concesiones mutuas", "Relationships need give and take."],
  ["wear and tear", "expresión", "desgaste por uso", "Normal wear and tear."],
  ["time and again", "expresión", "una y otra vez", "I've told you time and again."],
  ["neck and neck", "expresión", "parejos, empatados", "The race was neck and neck."],
  ["null and void", "expresión", "nulo y sin efecto", "The contract is null and void."],
  ["be that as it may", "expresión", "sea como sea", "Be that as it may, rules are rules."],
  ["come what may", "expresión", "pase lo que pase", "Come what may, we'll finish."],
  ["so be it", "expresión", "que así sea", "If that's your decision, so be it."],
  ["far be it from me", "expresión", "lejos de mí", "Far be it from me to judge."],
  ["suffice it to say", "expresión", "baste decir", "Suffice it to say, it was a disaster."],
  ["as it were", "expresión", "por así decirlo", "He's the king of the office, as it were."],
  ["heaven forbid", "expresión", "Dios no lo quiera", "Heaven forbid anything should happen."],
  ["fixed expression", "expresión", "expresión fija", "Learn fixed expressions as a whole."]
 ],
 dialogue: {
  title: "Después de la mudanza",
  scene: "Clara y su hermano Julián acaban de mudar a sus papás de Bogotá a Girardot. Hacen un balance al final del día.",
  a: "Clara", b: "Julián",
  lines: [
   ["A", "Well, Mum and Dad are in the new house, safe and sound. By and large, it went well, didn't it?", "Bueno, mi mamá y mi papá ya están en la casa nueva, sanos y salvos. En general salió bien, ¿no?"],
   ["B", "More or less. The movers broke a lamp, and the sofa has seen better days.", "Más o menos. Los de la mudanza rompieron una lámpara y el sofá ha visto mejores días."],
   ["A", "That's just wear and tear. It's thirty years old.", "Eso es desgaste por uso. Tiene treinta años."],
   ["B", "True. And I'm sick and tired of carrying boxes full of odds and ends. Why does Dad keep everything?", "Cierto. Y estoy harto de cargar cajas llenas de chécheres. ¿Por qué mi papá guarda todo?"],
   ["A", "I've told him time and again to throw things away. Far be it from me to criticise, but he has forty-two screwdrivers.", "Le he dicho una y otra vez que bote cosas. Lejos de mí criticar, pero tiene cuarenta y dos destornilladores."],
   ["B", "Ha ha! Suffice it to say, the garage is full.", "¡Jaja! Baste decir que el garaje está lleno."],
   ["A", "Be that as it may, they seem happy. Mum says the warm weather is good for her knees.", "Sea como sea, se ven felices. Mi mamá dice que el clima caliente le hace bien a las rodillas."],
   ["B", "We weighed up the pros and cons for months. I think it was the right decision.", "Sopesamos las ventajas y desventajas durante meses. Creo que fue la decisión correcta."],
   ["A", "First and foremost, they'll be less stressed. Bogotá's traffic was killing them.", "Ante todo, van a estar menos estresados. El tráfico de Bogotá los estaba matando."],
   ["B", "And if Dad wants to spend his retirement fixing things with forty-two screwdrivers, so be it.", "Y si mi papá quiere pasar su jubilación arreglando cosas con cuarenta y dos destornilladores, que así sea."],
   ["A", "Exactly. Every family has its ups and downs, but come what may, we'll visit every month.", "Exacto. Toda familia tiene sus altibajos, pero pase lo que pase, los vamos a visitar cada mes."],
   ["B", "Agreed. Message received, loud and clear.", "De acuerdo. Mensaje recibido, fuerte y claro."]
  ]
 },
 practice: [
  M("I'm ___ of people who talk during films.", ["sick and tired", "tired and sick", "sick and bored", "safe and sound"], 0),
  M("Before deciding, weigh up the ___.", ["pros and cons", "cons and pros", "ups and downs", "odds and ends"], 0),
  M("«Sea como sea» en inglés formal es:", ["Be that as it may", "Be it as may", "Whatever it may be that", "As it may be"], 0),
  F("The children arrived home safe and ___. (sanos y salvos)", ["sound"]),
  L("Far be it from me to tell you what to do, but you've changed jobs four times this year. Suffice it to say, employers notice that.", "¿Qué insinúa quien habla?", ["Que cambiar tanto de trabajo da mala impresión", "Que debería cambiar otra vez", "Que los empleadores no se fijan", "Que está orgulloso de él"], 0),
  O("By and large, the meeting went well, but there were a few ups and downs.")
 ],
 more: [
  R("We learnt to cook by trial and error.", "Aprendimos a cocinar por ensayo y error."),
  R("Come what may, I'll be there for you.", "Pase lo que pase, estaré ahí para ti."),
  D("The two candidates are neck and neck in the polls."),
  D("If that's what you want, so be it."),
  M("A contract that is no longer valid is ___.", ["null and void", "void and null", "odds and ends", "wear and tear"], 0),
  M("I've told you ___ not to leave the door open!", ["time and again", "again and time", "now and then", "by and large"], 0),
  L("First and foremost, I want to thank everyone. It's been a year of ups and downs, but by and large, we've achieved our goals.", "¿Cómo describe el año?", ["Con altibajos, pero en general exitoso", "Un desastre total", "Perfecto, sin problemas", "Aburrido"], 0),
  W("Escribe un discurso corto de despedida o de balance de un año (mínimo 150 palabras) usando al menos seis binomios y dos fórmulas fijas (be that as it may, come what may, far be it from me, suffice it to say, so be it…).", 150, [["by and large", "pros and cons", "ups and downs", "first and foremost", "time and again", "trial and error", "give and take", "safe and sound", "sick and tired", "loud and clear", "more or less", "sooner or later"], ["be that as it may", "come what may", "far be it from me", "suffice it to say", "so be it", "as it were"]])
 ],
 exam: M("___, we still need to finish the project by Friday.", ["Be that as it may", "Be it as that may", "As be it may", "May it be that"], 0),
 exam2: F("Every relationship needs a bit of give and ___. (tira y afloja)", ["take"])
},
/* ───────── Día 34 ───────── */
{
 id: "c2-u7-l4",
 title: "El monólogo de dos minutos: ¿la tecnología nos hace menos pacientes?",
 goal: "Hablar dos minutos de forma organizada sobre una pregunta abstracta, como en el C2 Proficiency.",
 theory: [
  { p: "En la **parte 3 del speaking del C2 Proficiency** recibes una tarjeta con una **pregunta** y tres ideas de apoyo, y hablas **dos minutos sin interrupción**. Lo que se evalúa: organización, rango de vocabulario y gramática, y desarrollo de las ideas. Estructura sugerida: **introducción (10 s) → dos o tres puntos desarrollados con ejemplos → contrapunto → conclusión que vuelve a la pregunta**." },
  { ex: [["The question I've been given is whether technology has made us less patient.", "La pregunta que me tocó es si la tecnología nos ha vuelto menos pacientes."], ["I'd like to approach this from two angles.", "Quisiera abordarlo desde dos ángulos."], ["Take, for instance, the way we watch series.", "Tomemos, por ejemplo, la forma en que vemos series."], ["That said, it would be simplistic to blame technology alone.", "Dicho esto, sería simplista culpar solo a la tecnología."], ["So, to come back to the question, I'd say yes, but only partly.", "Entonces, volviendo a la pregunta, diría que sí, pero solo en parte."]] },
  { p: "Recursos para **desarrollar** sin repetir: ejemplificar (**Take…, for instance · A case in point is…**), profundizar (**What's more, … · Beyond that, …**), contrastar (**That said, … · Then again, …**), especular (**One could argue that…**), y **cerrar** (**To sum up my main points… · That brings me back to the question… · All in all, …**)." },
  { ex: [["A case in point is online shopping.", "Un ejemplo claro son las compras en línea."], ["What's more, notifications constantly interrupt us.", "Además, las notificaciones nos interrumpen constantemente."], ["Then again, technology has also made us more efficient.", "Por otro lado, la tecnología también nos ha hecho más eficientes."], ["One could argue that patience is simply being redefined.", "Se podría argumentar que la paciencia simplemente se está redefiniendo."], ["All in all, I think the answer depends on how we use it.", "En resumen, creo que la respuesta depende de cómo la usemos."]] },
  { tip: "No memorices un discurso: memoriza **estructuras**. Si te quedas en blanco, usa una frase puente (**Let me give you an example from my own experience…**) mientras organizas la siguiente idea." }
 ],
 vocab: [
  ["long turn", "expresión", "turno largo, monólogo", "The long turn lasts two minutes."],
  ["prompt card", "expresión", "tarjeta con la pregunta e ideas", "Look at the prompt card."],
  ["the question I've been given", "expresión", "la pregunta que me tocó", "The question I've been given is…"],
  ["approach", "verbo / sustantivo", "abordar; enfoque", "I'd like to approach this from two angles."],
  ["a case in point", "expresión", "un ejemplo claro", "A case in point is social media."],
  ["take, for instance,", "expresión", "tomemos, por ejemplo,", "Take, for instance, streaming."],
  ["what's more", "expresión", "además", "What's more, it's cheaper."],
  ["then again", "expresión", "por otro lado", "Then again, it's not that simple."],
  ["simplistic", "adjetivo", "simplista", "That view is simplistic."],
  ["all in all", "expresión", "en resumen, en general", "All in all, it's positive."],
  ["attention span", "expresión", "capacidad de atención", "Our attention span is shrinking."],
  ["instant", "adjetivo", "instantáneo", "We expect instant answers."],
  ["notifications", "sustantivo", "notificaciones", "Turn off notifications."],
  ["binge-watch", "verbo", "ver series en maratón", "We binge-watch instead of waiting."],
  ["delayed gratification", "expresión", "gratificación diferida", "Children struggle with delayed gratification."],
  ["redefine", "verbo", "redefinir", "Technology has redefined patience."],
  ["scroll", "verbo", "deslizar, desplazarse (pantalla)", "We scroll for hours."],
  ["on demand", "expresión", "a la carta, bajo demanda", "Films on demand."],
  ["dwindle", "verbo", "menguar, disminuir", "Our patience is dwindling."],
  ["coherent", "adjetivo", "coherente", "Give a coherent answer."],
  ["go blank", "expresión", "quedarse en blanco", "My mind went blank."],
  ["wrap up", "verbo", "concluir, cerrar", "Let me wrap up."]
 ],
 dialogue: {
  title: "Dos minutos frente al examinador",
  scene: "Andrea presenta el speaking del C2 Proficiency. Recibe una tarjeta: «¿Ha hecho la tecnología a las personas menos pacientes?». Al final, el examinador hace una pregunta de seguimiento.",
  a: "Examinador", b: "Andrea",
  lines: [
   ["A", "Andrea, here is your card. Please talk for about two minutes. You may begin.", "Andrea, aquí está su tarjeta. Por favor hable unos dos minutos. Puede empezar."],
   ["B", "Thank you. The question I've been given is whether technology has made people less patient. I'd like to approach it from two angles.", "Gracias. La pregunta que me tocó es si la tecnología ha vuelto menos pacientes a las personas. Quisiera abordarla desde dos ángulos."],
   ["B", "First, our expectations. Take, for instance, the way we watch series. A generation ago, you waited a week for the next episode. Now we binge-watch an entire season in a weekend.", "Primero, nuestras expectativas. Tomemos, por ejemplo, la forma en que vemos series. Hace una generación esperabas una semana por el siguiente capítulo. Ahora vemos una temporada entera en un fin de semana."],
   ["B", "What's more, constant notifications have arguably shortened our attention span. A case in point is the way many of us check our phones within seconds of waking up.", "Además, las notificaciones constantes posiblemente han reducido nuestra capacidad de atención. Un ejemplo claro es que muchos miramos el celular a los pocos segundos de despertar."],
   ["B", "That said, it would be simplistic to blame technology alone. Then again, technology has made many processes faster, so perhaps our patience is simply being redefined rather than dwindling.", "Dicho esto, sería simplista culpar solo a la tecnología. Por otro lado, la tecnología ha hecho más rápidos muchos procesos, así que quizás nuestra paciencia simplemente se está redefiniendo en lugar de menguar."],
   ["B", "Secondly, there's the question of delayed gratification. Research suggests that children who grow up with everything on demand find it harder to wait for rewards.", "En segundo lugar está el tema de la gratificación diferida. Las investigaciones sugieren que los niños que crecen con todo a la carta tienen más dificultad para esperar recompensas."],
   ["B", "So, to come back to the question: all in all, I'd say yes, technology has made us less patient, but only partly, and the solution lies in how consciously we use it.", "Entonces, volviendo a la pregunta: en resumen, diría que sí, la tecnología nos ha hecho menos pacientes, pero solo en parte, y la solución está en qué tan conscientemente la usamos."],
   ["A", "Thank you. Do you think schools should teach children how to be patient?", "Gracias. ¿Cree que los colegios deberían enseñarles a los niños a ser pacientes?"],
   ["B", "That's an interesting point. I mean, patience isn't usually taught as a subject, but I think schools could build it into activities, like long-term projects.", "Es un punto interesante. O sea, la paciencia normalmente no se enseña como materia, pero creo que los colegios podrían incluirla en actividades, como los proyectos de largo plazo."],
   ["A", "And would that work for teenagers as well?", "¿Y eso funcionaría también con adolescentes?"],
   ["B", "Possibly, although with teenagers I suspect it's more about modelling. If adults are constantly scrolling, it's hard to expect patience from young people.", "Posiblemente, aunque con los adolescentes sospecho que se trata más de dar ejemplo. Si los adultos están todo el tiempo pegados al celular, es difícil esperar paciencia de los jóvenes."],
   ["A", "Thank you. That's the end of the test.", "Gracias. Ese es el final de la prueba."],
   ["B", "Thank you very much.", "Muchas gracias."]
  ]
 },
 practice: [
  M("¿Cuál es la mejor forma de empezar el monólogo?", ["The question I've been given is whether…", "Um, I don't know, maybe yes.", "Technology. It's good and bad.", "I will now read the card."], 0),
  M("Para dar un ejemplo claro dices:", ["A case in point is…", "In point of case…", "A point in case is…", "The case of point is…"], 0),
  M("Para introducir un contrapunto dices:", ["That said, …", "What's more, …", "Take, for instance, …", "First of all, …"], 0),
  F("All in ___, I think the answer depends on how we use it. (en resumen)", ["all"]),
  L("Then again, one could argue that our patience isn't disappearing; it's simply being redirected towards different things.", "¿Qué argumenta quien habla?", ["Que la paciencia se redirige, no desaparece", "Que la paciencia desapareció", "Que la tecnología es mala", "Que nadie es paciente"], 0),
  O("That said, it would be simplistic to blame technology alone.")
 ],
 more: [
  R("I'd like to approach this from two angles.", "Quisiera abordar esto desde dos ángulos."),
  R("That brings me back to the question.", "Eso me lleva de vuelta a la pregunta."),
  D("Our attention span seems to be getting shorter."),
  D("To sum up my main points, technology is a double-edged sword."),
  M("Si te quedas en blanco, una buena frase puente es:", ["Let me give you an example from my own experience…", "Sorry, I can't continue.", "That's all.", "I forgot everything."], 0),
  M("Children who can wait for a bigger reward show good ___.", ["delayed gratification", "instant gratification", "attention span", "on demand"], 0),
  L("What's more, the way we communicate has changed. We expect instant replies, and if someone takes an hour to answer a message, we assume something is wrong.", "¿Qué cambio menciona?", ["Esperamos respuestas inmediatas a los mensajes", "Ya no usamos mensajes", "Respondemos más despacio", "Preferimos las cartas"], 0),
  W("Escribe el guion de un monólogo de dos minutos (mínimo 170 palabras) sobre la pregunta «¿La tecnología nos ha hecho menos pacientes?» o «¿Las redes sociales nos acercan o nos alejan?». Incluye introducción, dos puntos con ejemplos, un contrapunto y una conclusión que vuelva a la pregunta.", 170, [["the question i've been given", "the question is", "i'd like to approach"], ["take, for instance", "a case in point", "for example", "for instance"], ["that said", "then again", "on the other hand", "one could argue"], ["all in all", "to sum up", "that brings me back", "to come back to the question"]])
 ],
 exam: M("«___, one could argue that technology has made us more efficient.» (contrapunto)", ["Then again", "What's more", "First and foremost", "Take for instance"], 0),
 exam2: F("Let me ___ up: technology is neither good nor bad in itself. (concluir)", ["wrap", "sum"])
},
/* ───────── Día 35 ───────── */
{
 id: "c2-u7-l5",
 title: "Medicina y salud: comunicar riesgo e incertidumbre",
 goal: "Entender y explicar información médica con precisión, sin alarmar ni exagerar.",
 theory: [
  { p: "Vocabulario médico de nivel alto: **diagnosis** (diagnóstico), **prognosis** (pronóstico), **symptoms**, **chronic / acute** (crónico / agudo), **side effects** (efectos secundarios), **clinical trial** (ensayo clínico), **placebo**, **dosage** (dosis), **contagious**, **immune system**, **antibiotic resistance**, **preventive medicine**, **underlying condition** (enfermedad de base), **to be referred to a specialist** (ser remitido)." },
  { ex: [["He was diagnosed with a chronic condition.", "Le diagnosticaron una enfermedad crónica."], ["The prognosis is good if it's treated early.", "El pronóstico es bueno si se trata a tiempo."], ["Drowsiness is a common side effect.", "La somnolencia es un efecto secundario común."], ["Patients with underlying conditions are at higher risk.", "Los pacientes con enfermedades de base tienen más riesgo."], ["She was referred to a cardiologist.", "La remitieron a un cardiólogo."]] },
  { p: "Comunicar **riesgo** con precisión: **relative vs. absolute risk** («duplica el riesgo» puede significar pasar de 1 en 10 000 a 2 en 10 000). Frases útiles: **There's a slight / significant increase in…** · **The risk is relatively low.** · **The evidence is still inconclusive.** · **It's too early to say.** · **Correlation does not imply causation.** · **The benefits outweigh the risks.**" },
  { ex: [["The risk is low in absolute terms.", "El riesgo es bajo en términos absolutos."], ["The evidence is still inconclusive.", "La evidencia todavía no es concluyente."], ["It's too early to draw firm conclusions.", "Es muy pronto para sacar conclusiones firmes."], ["The benefits clearly outweigh the risks.", "Los beneficios claramente superan los riesgos."], ["The trial involved over ten thousand volunteers.", "El ensayo incluyó a más de diez mil voluntarios."]] },
  { tip: "Falsos amigos médicos: **constipated** es «estreñido» (no «resfriado», que es **have a cold**); **intoxicated** suele ser «ebrio» (la intoxicación por comida es **food poisoning**); **sensible** es «sensato» (sensible es **sensitive**)." }
 ],
 vocab: [
  ["diagnosis", "sustantivo", "diagnóstico", "An early diagnosis saves lives."],
  ["prognosis", "sustantivo", "pronóstico", "The prognosis is excellent."],
  ["chronic", "adjetivo", "crónico", "A chronic illness."],
  ["acute", "adjetivo", "agudo", "Acute pain."],
  ["side effects", "expresión", "efectos secundarios", "Are there any side effects?"],
  ["clinical trial", "expresión", "ensayo clínico", "The drug is in clinical trials."],
  ["placebo", "sustantivo", "placebo", "Half the group received a placebo."],
  ["dosage", "sustantivo", "dosis", "Follow the recommended dosage."],
  ["contagious", "adjetivo", "contagioso", "Is it contagious?"],
  ["immune system", "expresión", "sistema inmunitario", "Sleep strengthens the immune system."],
  ["antibiotic resistance", "expresión", "resistencia a los antibióticos", "Antibiotic resistance is a global threat."],
  ["underlying condition", "expresión", "enfermedad de base", "People with underlying conditions."],
  ["be referred to", "expresión", "ser remitido a", "I was referred to a specialist."],
  ["relative risk", "expresión", "riesgo relativo", "The relative risk doubled."],
  ["absolute risk", "expresión", "riesgo absoluto", "The absolute risk is tiny."],
  ["inconclusive", "adjetivo", "no concluyente", "The results are inconclusive."],
  ["outweigh", "verbo", "superar, pesar más que", "The benefits outweigh the risks."],
  ["food poisoning", "expresión", "intoxicación alimentaria", "I got food poisoning."],
  ["constipated", "adjetivo", "estreñido", "Constipated means estreñido, not resfriado."],
  ["vaccine", "sustantivo", "vacuna", "The vaccine is safe and effective."],
  ["scare", "sustantivo", "alarma, susto", "A health scare."],
  ["recovery", "sustantivo", "recuperación", "She made a full recovery."]
 ],
 dialogue: {
  title: "¿Duplica el riesgo?",
  scene: "Mónica leyó un titular alarmante sobre un medicamento que toma. Habla con su médico, el doctor Restrepo.",
  a: "Mónica", b: "Dr. Restrepo",
  lines: [
   ["A", "Doctor, I read that this medication doubles the risk of a stroke. I'm terrified.", "Doctor, leí que este medicamento duplica el riesgo de un derrame. Estoy aterrada."],
   ["B", "I understand. Headlines like that cause a lot of scares. Let me explain what it actually means.", "Lo entiendo. Titulares así causan muchos sustos. Déjeme explicarle qué significa en realidad."],
   ["A", "Please.", "Por favor."],
   ["B", "In the study, the risk went from about one in ten thousand to two in ten thousand. So yes, it doubled, but in absolute terms it's still very low.", "En el estudio, el riesgo pasó de más o menos uno en diez mil a dos en diez mil. Entonces sí, se duplicó, pero en términos absolutos sigue siendo muy bajo."],
   ["A", "Oh. That sounds very different.", "Ah. Eso suena muy distinto."],
   ["B", "It is. That's the difference between relative and absolute risk. The media often report the relative one because it's more dramatic.", "Lo es. Esa es la diferencia entre el riesgo relativo y el absoluto. Los medios suelen informar el relativo porque es más dramático."],
   ["A", "And in my case? I have high blood pressure.", "¿Y en mi caso? Tengo la presión alta."],
   ["B", "That's an underlying condition, so we have to be careful. But for you, the benefits clearly outweigh the risks. Without the medication, your heart is under much more strain.", "Esa es una enfermedad de base, así que hay que tener cuidado. Pero en su caso, los beneficios claramente superan los riesgos. Sin el medicamento, su corazón está mucho más exigido."],
   ["A", "Are there any side effects I should watch out for?", "¿Hay efectos secundarios a los que deba estar atenta?"],
   ["B", "Some patients feel dizzy at first. If you notice severe headaches, call me immediately, and I'll refer you to a cardiologist.", "Algunos pacientes sienten mareo al principio. Si nota dolores de cabeza fuertes, llámeme de inmediato y la remito a un cardiólogo."],
   ["A", "Should I reduce the dosage?", "¿Debería bajar la dosis?"],
   ["B", "No, please don't change it on your own. The evidence on lower doses is still inconclusive.", "No, por favor no la cambie por su cuenta. La evidencia sobre dosis más bajas todavía no es concluyente."],
   ["A", "Thank you, doctor. I feel much calmer now.", "Gracias, doctor. Me siento mucho más tranquila."]
  ]
 },
 practice: [
  M("A long-lasting illness, like diabetes, is ___.", ["chronic", "acute", "contagious", "inconclusive"], 0),
  M("«The risk went from 1 in 10,000 to 2 in 10,000.» This is a doubling in ___ risk, but the ___ risk remains low.", ["relative / absolute", "absolute / relative", "chronic / acute", "acute / chronic"], 0),
  M("«Estoy estreñido» en inglés es:", ["I'm constipated.", "I have a cold.", "I'm intoxicated.", "I'm sensitive."], 0),
  F("The benefits of the vaccine clearly ___ the risks. (superan)", ["outweigh"]),
  L("Half of the volunteers received the new drug and half received a placebo. After a year, the results were promising, but researchers say it's too early to draw firm conclusions.", "¿Qué dicen los investigadores?", ["Que es muy pronto para conclusiones firmes", "Que el medicamento no sirve", "Que el placebo funcionó mejor", "Que ya está aprobado"], 0),
  O("The evidence is still inconclusive, so it's too early to say.")
 ],
 more: [
  R("She was referred to a specialist.", "La remitieron a un especialista."),
  R("Are there any side effects?", "¿Hay efectos secundarios?"),
  D("Patients with underlying conditions are at higher risk."),
  D("Antibiotic resistance is a growing global threat."),
  M("Food that makes you sick causes ___.", ["food poisoning", "intoxication", "constipation", "a placebo"], 0),
  M("The doctor's prediction about how an illness will develop is the ___.", ["prognosis", "diagnosis", "dosage", "trial"], 0),
  L("Correlation does not imply causation. People who drink coffee may live longer, but that doesn't prove coffee is the reason; they may simply have healthier habits.", "¿Qué advierte quien habla?", ["Que una correlación no prueba causa", "Que el café alarga la vida", "Que el café es peligroso", "Que no hay estudios"], 0),
  W("Escribe un artículo para una revista de salud (mínimo 150 palabras) que explique a lectores no expertos un titular alarmante sobre un medicamento o alimento. Explica la diferencia entre riesgo relativo y absoluto, menciona el tipo de estudio y da una conclusión equilibrada.", 150, [["relative risk", "absolute risk", "doubles", "increase"], ["clinical trial", "study", "placebo", "volunteers", "evidence", "researchers"], ["inconclusive", "too early", "correlation", "outweigh", "side effects"]])
 ],
 exam: M("Many illnesses are easier to treat with an early ___.", ["diagnosis", "prognosis", "placebo", "dosage"], 0),
 exam2: F("Older people and those with underlying ___ are more vulnerable. (enfermedades de base)", ["conditions"])
}
],
/* ───────── Quiz de la unidad 7 ───────── */
quiz: [
 M("«___ you could possibly lend me your notes.» (muy cortés)", ["I was wondering if", "I wonder that", "I'm wondering that", "I wondered that"], 0),
 M("Para retomar lo que decías después de una interrupción:", ["Anyway, as I was saying…", "Stop, it's my turn.", "Whatever.", "Shut up, please."], 0),
 M("I'm ___ of waiting for the bus every morning.", ["sick and tired", "tired and sick", "safe and sound", "odds and ends"], 0),
 M("Para dar un ejemplo claro en un monólogo dices:", ["A case in point is…", "A point in case is…", "In case of point…", "The point of case is…"], 0),
 M("The benefits of the treatment clearly ___ the risks.", ["outweigh", "overweigh", "outrun", "overcome by"], 0),
 F("Be that as it ___, we still have to meet the deadline.", ["may"]),
 L("So I'm standing at the bus stop, and out of the blue, my old school teacher walks up and says she still has my essay from 1998.", "¿Cómo narra quien habla?", ["Con presente histórico para dar viveza", "Con futuro", "En pasado perfecto", "Con condicionales"], 0),
 L("Doubling the risk sounds frightening, but in absolute terms we're talking about two cases in ten thousand instead of one. That said, patients with underlying conditions should consult their doctor.", "¿Qué deben hacer los pacientes con enfermedades de base?", ["Consultar a su médico", "Dejar el tratamiento", "No preocuparse", "Duplicar la dosis"], 0),
 W("Escribe el guion de un monólogo de dos minutos (mínimo 180 palabras) sobre «¿Confiamos demasiado en internet para informarnos sobre la salud?». Usa una estructura clara (introducción, ejemplos, contrapunto, conclusión), vocabulario médico preciso, al menos dos binomios o fórmulas fijas y lenguaje natural para reformular.", 180, [["the question", "i'd like to approach", "a case in point", "take, for instance"], ["diagnosis", "symptoms", "side effects", "evidence", "risk", "clinical", "treatment"], ["by and large", "pros and cons", "first and foremost", "be that as it may", "time and again", "more or less"], ["that said", "then again", "all in all", "what i mean is", "let me put it another way"]]),
 O("Sorry to jump in, but I think there's a misunderstanding."),
 O("Far be it from me to criticise, but the evidence is still inconclusive.")
],
pool: [
 M("She's ___ losing her keys. It drives me crazy! (queja)", ["forever", "ever", "never", "sometimes"], 0),
 M("«You're being so unfair.» describe:", ["un comportamiento en este momento", "el carácter permanente", "una acción del pasado", "un plan futuro"], 0),
 M("«Entendiste mal» en inglés coloquial:", ["You've got the wrong end of the stick.", "You've got the wrong stick of the end.", "You've got the end wrong of the stick.", "You've got the bad end of the stick."], 0),
 M("They came back from the trip ___.", ["safe and sound", "sound and safe", "sick and tired", "wear and tear"], 0),
 M("To close a long turn, you might say:", ["All in all, …", "Take, for instance, …", "What's more, …", "First and foremost, …"], 0),
 M("A short, intense illness is ___.", ["acute", "chronic", "underlying", "inconclusive"], 0),
 F("What I ___ was that we need more time, not more money. (quise decir)", ["meant"]),
 F("Pros and ___ (ventajas y desventajas)", ["cons"]),
 L("Sorry, I've lost my train of thought. What was I saying? Oh yes, the budget.", "¿Qué le pasó a quien habla?", ["Perdió el hilo", "Lo interrumpieron", "Se enojó", "Terminó la reunión"], 0),
 L("Come what may, I'm finishing this marathon. I've trained by trial and error for two years.", "¿Cómo entrenó?", ["Por ensayo y error", "Con un entrenador profesional", "Muy poco", "Con una aplicación"], 0),
 L("The trial results were promising, but the side effects were more common than expected, so the evidence is, by and large, inconclusive.", "¿Cómo son los resultados en general?", ["No concluyentes", "Totalmente negativos", "Perfectos", "Desconocidos"], 0),
 W("Escribe una anécdota (mínimo 180 palabras) sobre una visita al médico o una situación de salud, contada en presente histórico, con un malentendido que se aclara, vocabulario médico preciso y al menos dos binomios.", 180, [["so i", "so there i am", "walks in", "comes in", "says"], ["what i meant", "i didn't mean", "misunderstanding", "wrong end of the stick", "let me put it"], ["diagnosis", "symptoms", "prescription", "side effects", "specialist", "referred", "dosage"], ["safe and sound", "by and large", "sick and tired", "more or less", "time and again", "ups and downs"]]),
 O("I was hoping we might discuss this face to face."),
 O("By and large, the benefits outweigh the risks."),
 O("Let me put it another way: we can't afford to wait.")
]
};
