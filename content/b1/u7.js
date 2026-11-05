/* B1 · Unidad 7 · Lo que pudo haber sido (Días 31–35). Se arma con: node tools/build-level.js 2 content/b1 */
const M = (q, o, a, x) => ({ t: "mc", q, o, a, ...(x ? { x } : {}) }), F = (q, ans) => ({ t: "fill", q, ans }),
  L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), O = text => ({ t: "oral", text }), D = say => ({ t: "dict", say }),
  W = (q, min, keys) => ({ t: "write", q, min, keys }), R = (s, es) => ({ t: "order", words: s.split(" "), es });

module.exports = {
n: 7,
title: "Lo que pudo haber sido",
lessons: [
/* ───────── Día 31 ───────── */
{
 id: "b1-u7-l1",
 title: "Tercer condicional: si hubiera…, habría…",
 goal: "Imaginar cómo habría sido el pasado si algo hubiera pasado de otra manera.",
 theory: [
  { p: "El **tercer condicional** habla de un pasado que **no ocurrió**: imaginas otra versión de los hechos. Estructura: **If + had + participio, … would have + participio.** **If I had left earlier, I would have caught the train** (si hubiera salido antes, habría alcanzado el tren; pero no salí antes y lo perdí)." },
  { ex: [["If I had studied more, I would have passed the exam.", "Si hubiera estudiado más, habría pasado el examen."], ["If she hadn't missed the bus, she wouldn't have been late.", "Si no hubiera perdido el bus, no habría llegado tarde."], ["We would have called you if we had known.", "Te habríamos llamado si hubiéramos sabido."], ["If it hadn't rained, we would have gone to the beach.", "Si no hubiera llovido, habríamos ido a la playa."], ["What would you have done if you had lost your passport?", "¿Qué habrías hecho si hubieras perdido el pasaporte?"]] },
  { p: "También puedes usar **could have** (habría podido) o **might have** (tal vez habría): **If you had told me, I could have helped you.** · **If we had taken a taxi, we might have arrived on time.** En la conversación se contrae mucho: **If I'd known, I'd have come** (/aɪd əv/)." },
  { ex: [["If you had asked me, I could have lent you the money.", "Si me hubieras pedido, te habría podido prestar la plata."], ["If he had trained harder, he might have won.", "Si hubiera entrenado más, tal vez habría ganado."], ["If I'd known, I'd have come.", "Si hubiera sabido, habría venido."], ["She wouldn't have met her husband if she hadn't moved to Cali.", "No habría conocido a su esposo si no se hubiera mudado a Cali."], ["If they hadn't helped us, we couldn't have finished.", "Si no nos hubieran ayudado, no habríamos podido terminar."]] },
  { tip: "Nunca pongas **would** en la parte del **if**: **If I had known** (no «if I would have known»). Ojo con **'d**: en **If I'd known** es **had**; en **I'd have come** es **would**." }
 ],
 vocab: [
  ["if I had known", "expresión", "si hubiera sabido", "If I had known, I would have helped you."],
  ["would have", "expresión", "habría", "I would have called you."],
  ["could have", "expresión", "habría podido", "We could have won."],
  ["might have", "expresión", "tal vez habría", "It might have been worse."],
  ["miss", "verbo", "perder (bus, vuelo); extrañar", "I missed the flight."],
  ["catch", "verbo", "alcanzar (un bus, un vuelo)", "We ran to catch the last train."],
  ["on time", "expresión", "a tiempo", "If I had left earlier, I would have arrived on time."],
  ["by chance", "expresión", "por casualidad", "We met by chance."],
  ["turning point", "expresión", "punto de quiebre, momento decisivo", "That trip was a turning point in my life."],
  ["luckily", "adverbio", "por suerte", "Luckily, nobody was hurt."],
  ["unfortunately", "adverbio", "desafortunadamente", "Unfortunately, it was too late."],
  ["decision", "sustantivo", "decisión", "It was the best decision of my life."],
  ["opportunity", "sustantivo", "oportunidad", "I missed a great opportunity."],
  ["accept", "verbo", "aceptar", "If I had accepted the job, I would have moved."],
  ["turn down", "verbo", "rechazar (una oferta)", "I turned down the offer."],
  ["scholarship", "sustantivo", "beca", "She got a scholarship to study in Spain."],
  ["alarm clock", "expresión", "despertador", "My alarm clock didn't go off."],
  ["go off", "verbo", "sonar (alarma); estallar", "The alarm didn't go off."],
  ["oversleep", "verbo", "quedarse dormido (overslept)", "I overslept and missed the meeting."],
  ["traffic jam", "expresión", "trancón", "We were stuck in a traffic jam."],
  ["consequence", "sustantivo", "consecuencia", "Every decision has consequences."],
  ["regret", "sustantivo / verbo", "arrepentimiento; arrepentirse", "I have no regrets."]
 ],
 dialogue: {
  title: "El vuelo perdido",
  scene: "Juan Camilo le cuenta a su compañera Alejandra por qué no llegó a la reunión con un cliente en Panamá.",
  a: "Alejandra", b: "Juan Camilo",
  lines: [
   ["A", "What happened? The client was waiting for you in Panama!", "¿Qué pasó? ¡El cliente te estaba esperando en Panamá!"],
   ["B", "I missed the flight. My alarm didn't go off and I overslept.", "Perdí el vuelo. El despertador no sonó y me quedé dormido."],
   ["A", "Oh no. If you had set two alarms, you wouldn't have overslept.", "Ay no. Si hubieras puesto dos alarmas, no te habrías quedado dormido."],
   ["B", "I know. And then there was a terrible traffic jam on the way to the airport.", "Ya sé. Y luego había un trancón terrible camino al aeropuerto."],
   ["A", "If you had taken the TransMilenio, you might have arrived on time.", "Si hubieras tomado TransMilenio, tal vez habrías llegado a tiempo."],
   ["B", "Maybe. But with my suitcase? Anyway, I arrived ten minutes after they closed the gate.", "Tal vez. ¿Pero con la maleta? En fin, llegué diez minutos después de que cerraron la puerta."],
   ["A", "Ten minutes! If you had checked in online, could you have gone straight to the gate?", "¡Diez minutos! Si hubieras hecho el check-in en línea, ¿habrías podido ir directo a la puerta?"],
   ["B", "Probably. If I had done that, I would have caught the flight.", "Probablemente. Si lo hubiera hecho, habría alcanzado el vuelo."],
   ["A", "Did you call the client?", "¿Llamaste al cliente?"],
   ["B", "Yes. Luckily, he was very understanding. We had a video call instead.", "Sí. Por suerte fue muy comprensivo. Hicimos una videollamada en cambio."],
   ["A", "That's good. If he had been angry, we could have lost the contract.", "Qué bueno. Si se hubiera enojado, habríamos podido perder el contrato."],
   ["B", "I know. But the meeting went well, and he signed it anyway.", "Ya sé. Pero la reunión salió bien y lo firmó de todos modos."],
   ["A", "So if you hadn't missed the flight, the company wouldn't have saved the money for your hotel!", "¡O sea que si no hubieras perdido el vuelo, la empresa no se habría ahorrado lo de tu hotel!"],
   ["B", "Exactly. Maybe I should miss more flights!", "Exacto. ¡Tal vez debería perder más vuelos!"]
  ]
 },
 practice: [
  M("If I ___ about the party, I would have gone.", ["had known", "would have known", "knew", "have known"], 0, "En la parte del if: had + participio."),
  M("If she had accepted the job in Madrid, she ___ to Spain in 2020.", ["would have moved", "will move", "had moved", "will have moved"], 0),
  M("We ___ the match if our best player hadn't been injured.", ["might have won", "might win", "had won", "won"], 0),
  F("If you had told me, I ___ have helped you. (habría podido)", ["could"]),
  L("If I hadn't gone to that concert, I wouldn't have met my wife. It was the best decision of my life.", "¿Qué pasó en el concierto?", ["Conoció a su esposa", "Perdió su billetera", "Se encontró con un amigo", "Ganó un premio"], 0),
  O("If I had known about the traffic, I would have left earlier.")
 ],
 more: [
  R("If I had studied more, I would have passed.", "Si hubiera estudiado más, habría pasado."),
  R("What would you have done in my situation?", "¿Qué habrías hecho en mi situación?"),
  D("If it hadn't rained, we would have gone to the beach."),
  D("If I'd known, I'd have called you."),
  M("¿Cuál es correcta?", ["If I had seen him, I would have said hello.", "If I would have seen him, I would have said hello.", "If I saw him, I would have said hello yesterday.", "If I had seen him, I would say hello yesterday."], 0),
  M("En «If I'd known, I'd have come», la primera 'd significa ___ y la segunda ___.", ["had / would", "would / had", "had / had", "would / would"], 0),
  L("Unfortunately, I turned down a scholarship to study in Germany. If I had accepted it, I might have had a very different career.", "¿Qué rechazó?", ["Una beca para estudiar en Alemania", "Un trabajo en Alemania", "Un viaje a Alemania", "Un ascenso"], 0),
  W("Piensa en un momento decisivo de tu vida (mínimo 70 palabras): cuenta qué pasó y cómo habría sido tu vida si hubieras tomado otra decisión. Usa el tercer condicional al menos tres veces.", 70, [["if i had", "if i hadn't", "if i'd"], ["would have", "wouldn't have", "would've"], ["could have", "might have", "would have"]])
 ],
 exam: M("If we ___ a map, we wouldn't have got lost.", ["had taken", "took", "would have taken", "have taken"], 0),
 exam2: F("If she had left earlier, she wouldn't ___ missed the train.", ["have"])
},
/* ───────── Día 32 ───────── */
{
 id: "b1-u7-l2",
 title: "Should have y could have: arrepentimientos y críticas",
 goal: "Decir qué deberías haber hecho, criticar con tacto y hablar de oportunidades perdidas.",
 theory: [
  { p: "**Should have + participio** = deberías / debí haber… (lo correcto era otra cosa, pero no lo hiciste): **I should have saved more money.** **Shouldn't have** = no debiste: **You shouldn't have said that.** Sirve para arrepentirte o para criticar." },
  { ex: [["I should have listened to my mother.", "Debí haberle hecho caso a mi mamá."], ["You shouldn't have shouted at him.", "No debiste haberle gritado."], ["We should have booked the hotel earlier.", "Debimos reservar el hotel antes."], ["He should have told the truth.", "Él debió decir la verdad."], ["They shouldn't have spent so much.", "No debieron gastar tanto."]] },
  { p: "**Could have + participio** = habría podido, tenía la posibilidad pero no lo hice: **I could have gone to university, but I started working.** También para criticar con suavidad: **You could have called me!** (¡Me hubieras podido llamar!). Y **wish + had + participio** para un arrepentimiento fuerte: **I wish I had learned English when I was young.**" },
  { ex: [["You could have asked for help.", "Hubieras podido pedir ayuda."], ["I could have been a professional dancer.", "Habría podido ser bailarín profesional."], ["You could have told me before!", "¡Me hubieras podido decir antes!"], ["I wish I had studied medicine.", "Ojalá hubiera estudiado medicina."], ["I wish I hadn't sold my old car.", "Ojalá no hubiera vendido mi carro viejo."]] },
  { tip: "En inglés hablado **should have** suena /ʃʊdəv/, y por eso muchos nativos escriben mal «should of». Lo correcto siempre es **should have** o **should've**." }
 ],
 vocab: [
  ["should have", "expresión", "debí / debiste haber", "I should have called you."],
  ["shouldn't have", "expresión", "no debí / no debiste haber", "You shouldn't have paid."],
  ["could have", "expresión", "habría podido, hubieras podido", "You could have told me."],
  ["I wish I had…", "expresión", "ojalá hubiera…", "I wish I had studied more."],
  ["regret", "verbo", "arrepentirse de, lamentar", "I regret selling my house."],
  ["mistake", "sustantivo", "error", "It was a big mistake."],
  ["blame", "verbo", "culpar", "Don't blame yourself."],
  ["fault", "sustantivo", "culpa", "It's not your fault."],
  ["advice", "sustantivo (incontable)", "consejo(s)", "I should have followed your advice."],
  ["warn", "verbo", "advertir", "I warned you!"],
  ["waste", "verbo / sustantivo", "desperdiciar; desperdicio", "I wasted so much time."],
  ["save", "verbo", "ahorrar", "I should have saved more."],
  ["spend", "verbo", "gastar (spent)", "We spent too much money."],
  ["book", "verbo", "reservar", "We should have booked earlier."],
  ["apologize", "verbo", "disculparse", "You should have apologized."],
  ["rude", "adjetivo", "grosero", "That was very rude."],
  ["careless", "adjetivo", "descuidado", "It was a careless mistake."],
  ["learn the hard way", "expresión", "aprender por las malas", "I learned the hard way."],
  ["too late", "expresión", "demasiado tarde", "It's too late now."],
  ["hindsight", "sustantivo", "visión en retrospectiva", "With hindsight, I should have stayed."],
  ["second chance", "expresión", "segunda oportunidad", "Everybody deserves a second chance."],
  ["sold out", "expresión", "agotado (boletas)", "The tickets were sold out."]
 ],
 dialogue: {
  title: "Las boletas del concierto",
  scene: "Sergio y su novia Catalina querían ir al concierto de su banda favorita en el Movistar Arena, pero las boletas se agotaron.",
  a: "Catalina", b: "Sergio",
  lines: [
   ["A", "I can't believe it. The tickets are sold out!", "No lo puedo creer. ¡Las boletas se agotaron!"],
   ["B", "I know. We should have bought them on the first day.", "Ya sé. Debimos comprarlas el primer día."],
   ["A", "I told you! You said, 'Don't worry, there's plenty of time.'", "¡Te dije! Tú dijiste: «Tranquila, hay mucho tiempo»."],
   ["B", "You're right. I shouldn't have waited. It's my fault.", "Tienes razón. No debí esperar. Es culpa mía."],
   ["A", "And you could have used your credit card. You had the money.", "Y hubieras podido usar tu tarjeta de crédito. Tenías la plata."],
   ["B", "I know, but I didn't want to pay interest. I should have thought about it more.", "Ya sé, pero no quería pagar intereses. Debí pensarlo mejor."],
   ["A", "My sister bought hers in five minutes. I wish I had asked her to buy ours too.", "Mi hermana compró las suyas en cinco minutos. Ojalá le hubiera pedido que comprara las nuestras."],
   ["B", "Could we buy them from someone online?", "¿Podríamos comprárselas a alguien por internet?"],
   ["A", "No way. My friend tried that last year and they were fake. She shouldn't have trusted that website.", "Ni loca. Una amiga intentó eso el año pasado y eran falsas. No debió confiar en esa página."],
   ["B", "OK, OK. Well, I've learned the hard way.", "Bueno, bueno. Aprendí por las malas."],
   ["A", "Don't blame yourself too much. We can watch the live stream.", "No te culpes tanto. Podemos ver la transmisión en vivo."],
   ["B", "Or… they're playing in Medellín in March. Let's buy those tickets right now!", "O… tocan en Medellín en marzo. ¡Compremos esas boletas ya mismo!"],
   ["A", "Now you're talking! This time we won't wait.", "¡Así se habla! Esta vez no vamos a esperar."]
  ]
 },
 practice: [
  M("I failed the exam. I ___ more.", ["should have studied", "should study", "should studied", "must have studied"], 0),
  M("You ___ that to your boss. Now he's angry.", ["shouldn't have said", "shouldn't say", "couldn't have said", "mustn't have said"], 0, "Crítica de algo pasado → shouldn't have."),
  M("I ___ a doctor, but I decided to study music.", ["could have been", "should be", "could be", "must have been"], 0, "Una posibilidad que no se realizó → could have."),
  F("I wish I ___ learned English when I was a child. (ojalá hubiera)", ["had"]),
  L("I should have taken an umbrella. The forecast said it might rain, but I didn't listen.", "¿De qué se arrepiente?", ["De no llevar paraguas", "De salir tarde", "De no ver el pronóstico", "De no tomar un taxi"], 0),
  O("You could have told me before. I would have helped you.")
 ],
 more: [
  R("We should have booked the hotel earlier.", "Debimos reservar el hotel antes."),
  R("You shouldn't have spent so much money.", "No debiste gastar tanta plata."),
  D("I wish I hadn't sold my car."),
  D("It's not your fault. Don't blame yourself."),
  M("¿Cuál está bien escrita?", ["You should have called me.", "You should of called me.", "You should called me.", "You should had called me."], 0),
  M("—I lost my wallet on the bus. —You ___ it in your back pocket.", ["shouldn't have put", "couldn't have put", "mustn't put", "shouldn't put"], 0),
  L("I could have bought a house ten years ago when prices were low, but I didn't. Now I wish I had done it.", "¿Qué pasó hace diez años?", ["Pudo comprar casa pero no lo hizo", "Compró una casa", "Vendió su casa", "Se mudó a otra ciudad"], 0),
  W("Escribe sobre un error que cometiste y lo que aprendiste (mínimo 70 palabras). Usa should have, shouldn't have, could have y wish + had.", 70, [["should have", "should've"], ["shouldn't have"], ["could have", "could've"], ["i wish i had", "i wish i hadn't"]])
 ],
 exam: M("It's very late. You ___ me. I was worried!", ["should have called", "should call", "must have called", "should called"], 0),
 exam2: F("I ___ have eaten so much. Now I feel sick. (no debí)", ["shouldn't", "should not"])
},
/* ───────── Día 33 ───────── */
{
 id: "b1-u7-l3",
 title: "Deducción en pasado: must have, might have, can't have",
 goal: "Hacer suposiciones lógicas sobre lo que pasó.",
 theory: [
  { p: "Para deducir algo del **pasado** se usa **modal + have + participio**, según qué tan seguro estés: **must have** (seguro que sí: **She must have forgotten**), **might / may / could have** (es posible: **He might have missed the bus**), **can't / couldn't have** (seguro que no: **They can't have left; their car is still here**)." },
  { ex: [["The ground is wet. It must have rained last night.", "El suelo está mojado. Debió llover anoche."], ["He isn't answering. He might have gone to bed.", "No contesta. Puede que se haya acostado."], ["She can't have taken the money. She was with me.", "Ella no pudo haber cogido la plata. Estaba conmigo."], ["You must have been very tired after the trip.", "Debiste quedar muy cansado después del viaje."], ["They could have got lost.", "Pudieron haberse perdido."]] },
  { p: "Compara con el presente: **He must be at home** (ahora) · **He must have been at home** (antes). Para la forma continua: **She must have been sleeping when I called** (seguro estaba durmiendo)." },
  { ex: [["He must be tired. / He must have been tired.", "Debe estar cansado. / Debió estar cansado."], ["She might be at work. / She might have been at work.", "Puede que esté en el trabajo. / Puede que haya estado en el trabajo."], ["You can't be serious! / You can't have been serious!", "¡No puedes estar hablando en serio! / ¡No pudiste haberlo dicho en serio!"], ["She must have been sleeping.", "Seguro estaba durmiendo."], ["The thief must have come in through the window.", "El ladrón debió entrar por la ventana."]] },
  { tip: "Lo contrario de **must have** (seguro que sí) es **can't have** (seguro que no), no «mustn't have». **Mustn't** significa prohibición." }
 ],
 vocab: [
  ["must have", "expresión", "debió de, seguro que (pasado)", "She must have forgotten."],
  ["might have", "expresión", "puede que haya", "He might have missed the bus."],
  ["may have", "expresión", "puede que haya (formal)", "They may have left already."],
  ["could have", "expresión", "pudo haber (posibilidad)", "It could have been an accident."],
  ["can't have", "expresión", "no pudo haber (imposible)", "She can't have seen us."],
  ["couldn't have", "expresión", "no pudo haber", "He couldn't have done it alone."],
  ["clue", "sustantivo", "pista", "The police found a clue."],
  ["evidence", "sustantivo (incontable)", "pruebas, evidencia", "There's no evidence."],
  ["suspect", "sustantivo / verbo", "sospechoso; sospechar", "The main suspect is the neighbour."],
  ["footprint", "sustantivo", "huella (de pie)", "There were footprints in the garden."],
  ["fingerprint", "sustantivo", "huella digital", "They found fingerprints on the glass."],
  ["break in", "verbo", "entrar a robar, forzar la entrada", "Someone broke in last night."],
  ["disappear", "verbo", "desaparecer", "The ring disappeared."],
  ["mystery", "sustantivo", "misterio", "It's a real mystery."],
  ["solve", "verbo", "resolver", "Let's solve the mystery."],
  ["explanation", "sustantivo", "explicación", "There must be an explanation."],
  ["obviously", "adverbio", "obviamente", "Obviously, someone opened the door."],
  ["probably", "adverbio", "probablemente", "He probably forgot."],
  ["lock", "verbo / sustantivo", "cerrar con llave; cerradura", "Did you lock the door?"],
  ["broken", "adjetivo", "roto", "The window was broken."],
  ["crumbs", "sustantivo", "migajas, boronas", "There were crumbs on the floor."],
  ["guilty", "adjetivo", "culpable", "The dog looks guilty."]
 ],
 dialogue: {
  title: "El misterio de la torta",
  scene: "Diana dejó una torta de cumpleaños en la cocina. Cuando vuelve, falta la mitad. Habla con su esposo Ricardo.",
  a: "Diana", b: "Ricardo",
  lines: [
   ["A", "Ricardo! Half of the birthday cake is gone! Somebody must have eaten it.", "¡Ricardo! ¡Falta la mitad de la torta de cumpleaños! Alguien debió comérsela."],
   ["B", "Don't look at me. It can't have been me. I've been in the garden all morning.", "No me mires a mí. No pude haber sido yo. He estado en el jardín toda la mañana."],
   ["A", "Hmm. Then the kids must have taken it.", "Mmm. Entonces los niños debieron cogerla."],
   ["B", "They can't have done it. They left for school at seven, and you made the cake at nine.", "No pudieron ser ellos. Salieron para el colegio a las siete y tú hiciste la torta a las nueve."],
   ["A", "That's true. What about your brother? He came this morning, didn't he?", "Es cierto. ¿Y tu hermano? Vino esta mañana, ¿no?"],
   ["B", "He might have eaten a piece, but not half a cake!", "Puede que se haya comido un pedazo, ¡pero no media torta!"],
   ["A", "Look, there are crumbs on the floor, near the door to the patio.", "Mira, hay boronas en el piso, cerca de la puerta del patio."],
   ["B", "And the door is open. Someone must have come in from the garden.", "Y la puerta está abierta. Alguien debió entrar por el jardín."],
   ["A", "From the garden? But you were there. You must have seen something!", "¿Por el jardín? Pero tú estabas ahí. ¡Algo debiste ver!"],
   ["B", "I was listening to music with my headphones. I might not have heard anything.", "Estaba oyendo música con audífonos. Puede que no haya oído nada."],
   ["A", "Wait… why is Max hiding under the sofa? And why is there chocolate on his nose?", "Espera… ¿por qué Max está escondido debajo del sofá? ¿Y por qué tiene chocolate en la nariz?"],
   ["B", "Ha ha! The dog! He must have jumped on the table when nobody was looking.", "¡Jaja! ¡El perro! Debió subirse a la mesa cuando nadie estaba mirando."],
   ["A", "Max! He looks so guilty. Mystery solved.", "¡Max! Se ve tan culpable. Misterio resuelto."],
   ["B", "But chocolate is bad for dogs. We should call the vet.", "Pero el chocolate es malo para los perros. Deberíamos llamar al veterinario."]
  ]
 },
 practice: [
  M("The streets are wet. It ___ last night.", ["must have rained", "must rain", "can't have rained", "should have rained"], 0),
  M("She ___ the email. I sent it to the wrong address.", ["can't have received", "must have received", "should have received", "mustn't have received"], 0, "Imposible → can't have."),
  M("I don't know where Pedro is. He ___ stuck in traffic.", ["might have got", "must get", "can't have got", "should get"], 0),
  F("You must ___ been exhausted after the marathon. (haber)", ["have"]),
  L("The window was broken from the inside, and there were no footprints outside. The thief must have been someone inside the house.", "¿Qué concluye la persona?", ["Fue alguien que estaba dentro de la casa", "Entró por el jardín", "Fue un vecino", "No hubo robo"], 0),
  O("She must have forgotten about the meeting. She's never late.")
 ],
 more: [
  R("They can't have gone far without a car.", "No pueden haber ido lejos sin carro."),
  R("He must have been sleeping when I called.", "Seguro estaba durmiendo cuando lo llamé."),
  D("Someone must have broken in through the window."),
  D("He might have missed the bus."),
  M("Lo contrario de «He must have known» (seguro que sabía) es:", ["He can't have known.", "He mustn't have known.", "He shouldn't have known.", "He might have known."], 0),
  M("—Laura didn't come to the party. —She ___ sick. She had a cold on Friday.", ["might have been", "must be", "can't have been", "should have been"], 0),
  L("Ana's car isn't in the garage and her keys aren't here. She must have gone to the supermarket, or she may have taken the kids to the park.", "¿Qué posibilidades menciona?", ["Que fue al supermercado o llevó a los niños al parque", "Que está durmiendo", "Que le robaron el carro", "Que está en el trabajo"], 0),
  W("Imagina que llegas a tu casa y encuentras la puerta abierta, la sala desordenada y tu perro asustado (mínimo 70 palabras). Haz deducciones sobre lo que pasó con must have, might have, could have y can't have.", 70, [["must have"], ["might have", "may have", "could have"], ["can't have", "couldn't have"]])
 ],
 exam: M("He ___ the money. He was in Miami that week.", ["can't have stolen", "must have stolen", "should have stolen", "mustn't have stolen"], 0),
 exam2: F("Her eyes are red. She ___ have been crying. (seguro que)", ["must"])
},
/* ───────── Día 34 ───────── */
{
 id: "b1-u7-l4",
 title: "Causativo: have y get something done",
 goal: "Decir que alguien te hace un servicio: arreglar, cortar, limpiar o revisar algo.",
 theory: [
  { p: "Cuando **otra persona** hace algo por ti (normalmente porque le pagas), se usa **have + objeto + participio**: **I have my hair cut every month** (me hago cortar el pelo). Compara: **I cut my hair** = yo mismo me lo corto." },
  { ex: [["I had my car repaired last week.", "Me arreglaron el carro la semana pasada."], ["We're having the kitchen painted.", "Nos están pintando la cocina."], ["She has her nails done every Friday.", "Ella se hace las uñas todos los viernes."], ["You should have your eyes tested.", "Deberías hacerte examinar la vista."], ["I'm going to have my teeth cleaned.", "Me voy a hacer una limpieza de dientes."]] },
  { p: "**Get something done** significa lo mismo y es más informal: **I need to get my phone fixed.** También se usa para cosas malas que te pasan: **I had my wallet stolen on the bus** (me robaron la billetera). Y **get / have someone do something** = conseguir que alguien haga algo: **I got the mechanic to check the brakes.**" },
  { ex: [["I need to get my phone fixed.", "Tengo que hacer arreglar el celular."], ["Where did you get your hair cut?", "¿Dónde te cortaste el pelo?"], ["He had his passport stolen in Rome.", "Le robaron el pasaporte en Roma."], ["I'll get my brother to help us.", "Voy a hacer que mi hermano nos ayude."], ["We had the plumber look at the shower.", "Hicimos que el plomero revisara la ducha."]] },
  { tip: "El orden es clave: **have + cosa + participio**: **I had my hair cut** (me cortaron el pelo). Si dices **I had cut my hair**, es pasado perfecto: yo mismo me lo había cortado." }
 ],
 vocab: [
  ["have something done", "expresión", "mandar a hacer algo", "I had the roof repaired."],
  ["get something done", "expresión", "hacer que te hagan algo (informal)", "I got my car washed."],
  ["haircut", "sustantivo", "corte de pelo", "I need a haircut."],
  ["hairdresser", "sustantivo", "peluquero, peluquería", "I go to the hairdresser every month."],
  ["barber", "sustantivo", "barbero", "My barber is from Cartagena."],
  ["mechanic", "sustantivo", "mecánico", "The mechanic checked the brakes."],
  ["plumber", "sustantivo", "plomero", "We called a plumber."],
  ["electrician", "sustantivo", "electricista", "The electrician fixed the lights."],
  ["repair", "verbo", "reparar", "I had my laptop repaired."],
  ["fix", "verbo", "arreglar", "Can you fix it?"],
  ["service", "verbo", "hacer mantenimiento (carro)", "I have my car serviced every year."],
  ["deliver", "verbo", "entregar, llevar a domicilio", "We had the sofa delivered."],
  ["install", "verbo", "instalar", "We had solar panels installed."],
  ["test", "verbo", "examinar, probar", "Have your eyes tested."],
  ["brakes", "sustantivo", "frenos", "The brakes need checking."],
  ["leak", "sustantivo", "fuga, gotera", "There's a leak in the bathroom."],
  ["estimate", "sustantivo", "cotización, presupuesto", "Can you give me an estimate?"],
  ["appointment", "sustantivo", "cita", "I have an appointment at the hairdresser's."],
  ["under warranty", "expresión", "en garantía", "The phone is still under warranty."],
  ["dry-clean", "verbo", "lavar en seco", "I had my suit dry-cleaned."],
  ["tailor", "sustantivo", "sastre", "The tailor shortened my trousers."],
  ["shorten", "verbo", "acortar", "I had the trousers shortened."]
 ],
 dialogue: {
  title: "Una semana de arreglos",
  scene: "Mónica se va a casar el sábado. Le cuenta a su amiga Isabel todo lo que tiene que mandar a hacer esta semana.",
  a: "Isabel", b: "Mónica",
  lines: [
   ["A", "Only five days to the wedding! Are you ready?", "¡Solo cinco días para la boda! ¿Estás lista?"],
   ["B", "Almost. I'm having my dress shortened today. It's too long.", "Casi. Hoy me están acortando el vestido. Está muy largo."],
   ["A", "And your hair?", "¿Y el pelo?"],
   ["B", "I'm having it done on Saturday morning, and I'm getting my nails done on Friday.", "Me lo hacen el sábado por la mañana, y el viernes me hago las uñas."],
   ["A", "What about Pablo? Is he ready?", "¿Y Pablo? ¿Está listo?"],
   ["B", "Not really. He has to get his suit dry-cleaned and have his hair cut.", "No mucho. Tiene que mandar a lavar en seco el traje y cortarse el pelo."],
   ["A", "Ha ha. Men always leave everything to the last minute!", "¡Jaja! ¡Los hombres siempre lo dejan todo para el último minuto!"],
   ["B", "And there's another problem. We had the apartment painted last week, but now there's a leak in the bathroom.", "Y hay otro problema. La semana pasada nos pintaron el apartamento, pero ahora hay una gotera en el baño."],
   ["A", "Oh no! Did you call a plumber?", "¡Ay no! ¿Llamaste a un plomero?"],
   ["B", "Yes. I got my uncle to recommend one. He's coming tomorrow to give us an estimate.", "Sí. Hice que mi tío me recomendara uno. Viene mañana a darnos una cotización."],
   ["A", "And the car for the wedding?", "¿Y el carro para la boda?"],
   ["B", "We're having it washed and decorated with flowers on Friday afternoon.", "El viernes por la tarde lo van a lavar y decorar con flores."],
   ["A", "You've organized everything. You don't need my help!", "Lo organizaste todo. ¡No necesitas mi ayuda!"],
   ["B", "Yes, I do! Can you take Pablo to the barber? I don't trust him!", "¡Claro que sí! ¿Puedes llevar a Pablo a la barbería? ¡No le tengo confianza!"]
  ]
 },
 practice: [
  M("I don't cut my own hair. I ___ every month.", ["have it cut", "cut it", "have cut it", "am cut it"], 0),
  M("We ___ the roof repaired after the storm.", ["had", "made", "did", "let"], 0),
  M("I got the mechanic ___ the brakes.", ["to check", "check", "checked", "checking"], 0, "Get + persona + to + verbo."),
  F("She had her passport ___ at the airport. (robaron: steal)", ["stolen"]),
  L("We're having the kitchen renovated, so for the next two weeks we're going to eat out or order food.", "¿Por qué van a comer afuera?", ["Les están remodelando la cocina", "No les gusta cocinar", "Se van de viaje", "Están de cumpleaños"], 0),
  O("I need to get my phone fixed before Monday.")
 ],
 more: [
  R("I had my car serviced last month.", "Le hice el mantenimiento al carro el mes pasado."),
  R("Where do you get your hair cut?", "¿Dónde te cortas el pelo?"),
  D("We had solar panels installed last year."),
  D("You should have your eyes tested."),
  M("«I had cut my hair» significa:", ["Yo mismo me había cortado el pelo.", "Me hice cortar el pelo.", "Me van a cortar el pelo.", "Me cortan el pelo siempre."], 0),
  M("My eyesight is getting worse. I need to ___.", ["have my eyes tested", "test my eyes by me", "have tested my eyes", "have my eyes test"], 0),
  L("I had my laptop repaired, but it broke again after two days. Luckily it's still under warranty, so they'll fix it for free.", "¿Por qué no paga el arreglo?", ["Porque está en garantía", "Porque el técnico es su amigo", "Porque no funcionó", "Porque lo compró ayer"], 0),
  W("Escribe un correo a un amigo (mínimo 70 palabras) contándole todo lo que tienes que mandar a hacer este mes (casa, carro, salud, ropa, tecnología) y algo que te robaron o te dañaron alguna vez. Usa have / get something done al menos cinco veces.", 70, [["have my", "had my", "having my", "having the", "had the"], ["get my", "got my", "getting my"], ["cut", "fixed", "repaired", "cleaned", "painted", "checked", "serviced", "done", "stolen", "tested", "installed"]])
 ],
 exam: M("I'm going to ___ before the wedding.", ["have my suit cleaned", "have cleaned my suit", "clean have my suit", "have my suit clean"], 0),
 exam2: F("We had a new door ___ last week. (instalar)", ["installed", "put in"])
},
/* ───────── Día 35 ───────── */
{
 id: "b1-u7-l5",
 title: "Could, was able to, managed to y myself / each other",
 goal: "Decir lo que lograste o no lograste hacer y si lo hiciste solo o con otros.",
 theory: [
  { p: "**Could** = podía, sabía hacer algo **en general** en el pasado: **I could swim when I was five.** Para un logro **concreto** en un momento específico se usa **was / were able to** o **managed to** (logré, a pesar de una dificultad): **The road was closed, but we managed to get home.**" },
  { ex: [["When I was young, I could run very fast.", "De joven podía correr muy rápido."], ["We were able to see the whole city from the top.", "Pudimos ver toda la ciudad desde arriba."], ["After three hours, he managed to fix the car.", "Después de tres horas, logró arreglar el carro."], ["I couldn't sleep last night.", "No pude dormir anoche."], ["She wasn't able to come because she was sick.", "No pudo venir porque estaba enferma."]] },
  { p: "**Pronombres reflexivos**: **myself, yourself, himself, herself, itself, ourselves, yourselves, themselves**. Se usan cuando el sujeto y el objeto son la misma persona (**I cut myself**), para enfatizar que lo hiciste **tú solo** (**I painted the house myself**), y en **by myself** (solo, sin ayuda). **Each other** = el uno al otro: **They love each other.**" },
  { ex: [["I fixed the sink myself.", "Arreglé el lavaplatos yo mismo."], ["Be careful! Don't burn yourself.", "¡Cuidado! No te vayas a quemar."], ["She lives by herself.", "Ella vive sola."], ["Help yourselves to some cake.", "Sírvanse torta."], ["We've known each other for twenty years.", "Nos conocemos hace veinte años."]] },
  { tip: "En español «se miraron» puede ser a sí mismos o el uno al otro. En inglés se distingue: **They looked at themselves** (cada uno a sí mismo, en el espejo) / **They looked at each other** (el uno al otro)." }
 ],
 vocab: [
  ["could", "verbo modal", "podía, sabía (habilidad general en el pasado)", "I could read at four."],
  ["couldn't", "verbo modal", "no podía, no pude", "I couldn't find my keys."],
  ["be able to", "expresión", "poder, ser capaz de", "We were able to finish on time."],
  ["manage to", "expresión", "lograr, alcanzar a", "I managed to catch the bus."],
  ["succeed in", "expresión", "lograr, tener éxito en", "She succeeded in passing the exam."],
  ["myself", "pronombre", "yo mismo, me", "I made it myself."],
  ["yourself", "pronombre", "tú mismo, te", "Look after yourself."],
  ["himself / herself", "pronombre", "él mismo / ella misma", "He hurt himself."],
  ["ourselves", "pronombre", "nosotros mismos", "We built it ourselves."],
  ["themselves", "pronombre", "ellos mismos", "They enjoyed themselves."],
  ["by myself", "expresión", "solo, sin ayuda", "I live by myself."],
  ["each other", "expresión", "el uno al otro", "They help each other."],
  ["enjoy yourself", "expresión", "divertirse, pasarla bien", "Enjoy yourselves!"],
  ["hurt yourself", "expresión", "hacerse daño", "Did you hurt yourself?"],
  ["help yourself", "expresión", "servirse", "Help yourself to coffee."],
  ["DIY", "sustantivo", "hágalo usted mismo, bricolaje", "I love DIY projects."],
  ["tool", "sustantivo", "herramienta", "I need the right tools."],
  ["tutorial", "sustantivo", "tutorial", "I watched a tutorial online."],
  ["climb", "verbo", "escalar, subir", "We managed to climb to the top."],
  ["give up", "verbo", "rendirse, dejar de", "Don't give up!"],
  ["finally", "adverbio", "por fin, finalmente", "Finally, it worked!"],
  ["proud of", "expresión", "orgulloso de", "I'm proud of myself."]
 ],
 dialogue: {
  title: "Lo hice yo mismo",
  scene: "Fernando le cuenta a su compañero Hugo cómo arregló solo la lavadora el fin de semana.",
  a: "Hugo", b: "Fernando",
  lines: [
   ["A", "How was your weekend?", "¿Qué tal tu fin de semana?"],
   ["B", "Busy! The washing machine broke on Saturday, and I couldn't find a technician.", "¡Ocupado! El sábado se dañó la lavadora y no pude conseguir técnico."],
   ["A", "Oh no. So what did you do?", "Ay no. ¿Y qué hiciste?"],
   ["B", "I fixed it myself! I watched a tutorial on YouTube.", "¡La arreglé yo mismo! Vi un tutorial en YouTube."],
   ["A", "You? You can't even change a light bulb!", "¿Tú? ¡Si no eres capaz ni de cambiar un bombillo!"],
   ["B", "Ha ha, I know. At first, I couldn't open it. I didn't have the right tools.", "Jaja, ya sé. Al principio no pude abrirla. No tenía las herramientas adecuadas."],
   ["A", "And then?", "¿Y luego?"],
   ["B", "My neighbour lent me some. After two hours, I managed to take out the filter. It was full of coins and a sock!", "Mi vecino me prestó unas. Después de dos horas, logré sacar el filtro. ¡Estaba lleno de monedas y una media!"],
   ["A", "Ha ha! And were you able to make it work?", "¡Jaja! ¿Y lograste que funcionara?"],
   ["B", "Yes! I cleaned the filter, put everything back and it worked perfectly.", "¡Sí! Limpié el filtro, armé todo otra vez y funcionó perfecto."],
   ["A", "Did you hurt yourself?", "¿Te hiciste daño?"],
   ["B", "Only a little. I cut myself on the finger. But I was very proud of myself.", "Solo un poquito. Me corté el dedo. Pero estaba muy orgulloso de mí mismo."],
   ["A", "What did your wife say?", "¿Qué dijo tu esposa?"],
   ["B", "We looked at each other and laughed. She said, 'Who are you, and where's my husband?'", "Nos miramos y nos reímos. Me dijo: «¿Quién eres tú y dónde está mi esposo?»."]
  ]
 },
 practice: [
  M("When I was a child, I ___ speak three languages.", ["could", "managed to", "was able", "can"], 0, "Habilidad general en el pasado → could."),
  M("The traffic was terrible, but we ___ arrive on time.", ["managed to", "could", "can", "succeeded"], 0, "Logro concreto con dificultad → managed to."),
  M("She lives by ___. She doesn't have a roommate.", ["herself", "her", "she", "hers"], 0),
  F("They have known ___ other since they were children. (el uno al otro)", ["each"]),
  L("I couldn't open the jar, so I asked my son. He wasn't able to open it either, but my daughter managed to do it in one second.", "¿Quién logró abrir el frasco?", ["La hija", "El hijo", "Quien habla", "Nadie"], 0),
  O("After three hours, I finally managed to fix it myself.")
 ],
 more: [
  R("We were able to see the volcano.", "Pudimos ver el volcán."),
  R("Help yourselves to some coffee.", "Sírvanse café."),
  D("I couldn't sleep last night because of the noise."),
  D("They looked at each other and smiled."),
  M("Be careful with the knife! You'll cut ___.", ["yourself", "you", "your", "yourselves of"], 0),
  M("The exam was very difficult, but I ___ pass it.", ["managed to", "could", "can", "might"], 0),
  L("We wanted to climb to the top of the mountain, but the weather was bad and we weren't able to finish. We enjoyed ourselves anyway.", "¿Por qué no llegaron a la cima?", ["Por el mal tiempo", "Porque se cansaron", "Porque se perdieron", "Porque se hicieron daño"], 0),
  W("Cuenta algo difícil que lograste hacer tú solo o con otras personas (mínimo 70 palabras). Usa could / couldn't, was able to o managed to, y al menos dos pronombres reflexivos o each other.", 70, [["managed to", "was able to", "were able to"], ["could", "couldn't"], ["myself", "ourselves", "themselves", "himself", "herself", "yourself", "each other"]])
 ],
 exam: M("The road was blocked, but the ambulance ___ reach the village.", ["managed to", "could", "can", "succeeded to"], 0),
 exam2: F("I didn't have help. I painted the whole house ___. (yo mismo)", ["myself", "by myself"])
}
],
/* ───────── Quiz de la unidad 7 ───────── */
quiz: [
 M("If I ___ the instructions, I wouldn't have broken it.", ["had read", "read", "would have read", "have read"], 0),
 M("You ___ me. I was waiting for two hours!", ["should have called", "should call", "must have called", "should called"], 0),
 M("The lights are off. They ___ to bed.", ["must have gone", "must go", "can't have gone", "should have gone"], 0),
 M("I'm going to ___ before the trip.", ["have the car serviced", "have serviced the car", "service have the car", "have the car service"], 0),
 M("It was very difficult, but she ___ finish the marathon.", ["managed to", "could", "can", "succeeded to"], 0),
 F("They love each ___. (el uno al otro)", ["other"]),
 L("If I hadn't taken that wrong bus, I wouldn't have met my best friend. We sat next to each other and started talking.", "¿Cómo conoció a su mejor amigo?", ["En un bus equivocado", "En el colegio", "En el trabajo", "En una fiesta"], 0),
 L("My phone was stolen on the metro. I should have kept it in my bag. Now I have to get a new SIM card.", "¿De qué se arrepiente?", ["De no guardar el celular en el bolso", "De no tomar un taxi", "De comprar ese celular", "De no denunciar el robo"], 0),
 W("Escribe sobre un día en que todo salió mal (mínimo 80 palabras): qué pasó, qué deberías haber hecho (should have), cómo habría sido distinto (tercer condicional), qué supones que causó el problema (must have / might have) y qué lograste hacer al final (managed to).", 80, [["if i had", "if i hadn't", "if i'd"], ["should have", "shouldn't have"], ["must have", "might have", "can't have", "could have"], ["managed to", "was able to"]]),
 O("If I had known about the traffic, I would have taken the metro."),
 O("I had my hair cut, and I think the barber must have been in a hurry.")
],
pool: [
 M("We would have arrived on time if we ___ the wrong road.", ["hadn't taken", "didn't take", "wouldn't have taken", "haven't taken"], 0),
 M("I ___ a professional footballer, but I hurt my knee.", ["could have been", "should have been", "must have been", "can have been"], 0),
 M("He ___ the answer. He's never studied chemistry.", ["can't have known", "must have known", "should have known", "mustn't have known"], 0),
 M("She had her bag ___ on the bus.", ["stolen", "steal", "stole", "stealing"], 0),
 M("Don't help him. He can do it ___.", ["himself", "him", "his", "he"], 0),
 M("When I was young, I ___ dance salsa all night.", ["could", "managed to", "was able", "can"], 0),
 F("If you had asked me, I would ___ helped you.", ["have"]),
 F("I ___ have eaten that fish. I feel terrible. (no debí)", ["shouldn't", "should not"]),
 L("The burglar must have come in through the kitchen window. The neighbours can't have heard anything, because they were on holiday.", "¿Por qué los vecinos no oyeron nada?", ["Estaban de vacaciones", "Estaban dormidos", "No había ruido", "Estaban en el trabajo"], 0),
 L("We had the house painted and the windows cleaned, but we fixed the garden ourselves.", "¿Qué hicieron ellos mismos?", ["Arreglaron el jardín", "Pintaron la casa", "Limpiaron las ventanas", "Nada"], 0),
 L("If it hadn't rained, we would have finished the walk. We managed to get to the waterfall, but we couldn't go further.", "¿Hasta dónde llegaron?", ["Hasta la cascada", "Hasta la cima", "No salieron", "Hasta el pueblo"], 0),
 W("Escribe una historia corta de misterio (mínimo 80 palabras): algo desapareció o pasó algo extraño. Usa deducciones en pasado (must have, might have, can't have) y termina con qué debió hacer alguien distinto (should have).", 80, [["must have"], ["might have", "may have", "could have"], ["can't have", "couldn't have"], ["should have", "shouldn't have"]]),
 O("You should have told me the truth."),
 O("We managed to get the last two tickets."),
 O("They must have forgotten about the meeting.")
]
};
