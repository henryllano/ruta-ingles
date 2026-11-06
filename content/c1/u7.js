/* C1 · Unidad 7 · Matices del significado (Días 31–35). Se arma con: node tools/build-level.js 4 content/c1 */
const M = (q, o, a, x) => ({ t: "mc", q, o, a, ...(x ? { x } : {}) }), F = (q, ans) => ({ t: "fill", q, ans }),
  L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), O = text => ({ t: "oral", text }), D = say => ({ t: "dict", say }),
  W = (q, min, keys) => ({ t: "write", q, min, keys }), R = (s, es) => ({ t: "order", words: s.split(" "), es });

module.exports = {
n: 7,
title: "Matices del significado",
lessons: [
/* ───────── Día 31 ───────── */
{
 id: "c1-u7-l1",
 title: "Pasados irreales: as if, it's high time, I'd rather you did",
 goal: "Usar el pasado para hablar de situaciones irreales, deseos y críticas en el presente.",
 theory: [
  { p: "En inglés, el **pasado** sirve para marcar **distancia de la realidad**, aunque hablemos del presente. Después de **as if / as though** (como si), el pasado indica que algo no es cierto: **He talks as if he owned the company** (no es el dueño). Si puede ser cierto, se usa el presente: **It looks as if it's going to rain**." },
  { ex: [["She acts as though she were the boss.", "Actúa como si fuera la jefa."], ["He spends money as if there were no tomorrow.", "Gasta plata como si no hubiera mañana."], ["You look as if you've seen a ghost.", "Parece que hubieras visto un fantasma."], ["It's high time we changed this system.", "Ya va siendo hora de que cambiemos este sistema."], ["It's about time you apologised.", "Ya era hora de que pidieras disculpas."]] },
  { p: "**It's (high / about) time + sujeto + pasado** = ya debería estar pasando (crítica): **It's high time the government did something.** **I'd rather + otra persona + pasado** = preferiría que: **I'd rather you didn't smoke here.** Para el pasado se usa el pasado perfecto: **I'd rather you hadn't told her.** **Wish + would** = queja sobre lo que otro hace y te molesta: **I wish you would stop interrupting me.**" },
  { ex: [["I'd rather you didn't mention it to anyone.", "Preferiría que no se lo mencionaras a nadie."], ["I'd rather you had asked me first.", "Habría preferido que me preguntaras primero."], ["I wish my neighbours would turn the music down.", "Ojalá mis vecinos bajaran la música."], ["Suppose you lost your job tomorrow, what would you do?", "Supón que perdieras el trabajo mañana, ¿qué harías?"], ["If only I were a bit taller!", "¡Si tan solo fuera un poco más alto!"]] },
  { tip: "En registro formal se prefiere **were** para todas las personas en estas estructuras: **as if he were**, **if only I were**. En la conversación **was** también se oye y se acepta." }
 ],
 vocab: [
  ["as if / as though", "conjunción", "como si", "He behaves as if he were a celebrity."],
  ["it's high time", "expresión", "ya va siendo hora de que", "It's high time we left."],
  ["it's about time", "expresión", "ya era hora de que", "It's about time you called."],
  ["I'd rather you…", "expresión", "preferiría que tú…", "I'd rather you stayed."],
  ["wish … would", "expresión", "ojalá … (queja sobre otro)", "I wish he would listen."],
  ["suppose / supposing", "conjunción", "supón que, suponiendo que", "Suppose it rained, what then?"],
  ["if only", "expresión", "si tan solo, ojalá", "If only I had more time."],
  ["behave", "verbo", "comportarse", "He behaves badly at meetings."],
  ["pretend", "verbo", "fingir", "She pretended she hadn't heard."],
  ["show off", "verbo", "presumir, alardear", "Stop showing off!"],
  ["bossy", "adjetivo", "mandón", "He's so bossy."],
  ["arrogant", "adjetivo", "arrogante", "She talks in an arrogant way."],
  ["condescending", "adjetivo", "condescendiente", "His tone was condescending."],
  ["get on someone's nerves", "expresión", "sacar de quicio", "His jokes get on my nerves."],
  ["take for granted", "expresión", "dar por sentado", "He takes his team for granted."],
  ["overdue", "adjetivo", "atrasado, que ya debió ocurrir", "This change is long overdue."],
  ["face up to", "verbo", "afrontar", "It's time we faced up to the problem."],
  ["brush aside", "verbo", "hacer a un lado, desestimar", "He brushed aside our concerns."],
  ["hypothetical", "adjetivo", "hipotético", "It's a hypothetical situation."],
  ["unreal", "adjetivo", "irreal", "We use the past for unreal situations."],
  ["frankly", "adverbio", "francamente", "Frankly, I'd rather you didn't."],
  ["keep someone waiting", "expresión", "hacer esperar a alguien", "I wish he wouldn't keep us waiting."]
 ],
 dialogue: {
  title: "El compañero que se cree el jefe",
  scene: "Lucía y Felipe, dos analistas de una empresa en Bogotá, hablan de un colega nuevo después de una reunión.",
  a: "Lucía", b: "Felipe",
  lines: [
   ["A", "Did you see Andrés in the meeting? He talks as if he owned the company.", "¿Viste a Andrés en la reunión? Habla como si fuera el dueño de la empresa."],
   ["B", "I know. He's been here three weeks and he behaves as though he were the director.", "Ya sé. Lleva tres semanas y se comporta como si fuera el director."],
   ["A", "And he brushed aside everything you said about the budget. Frankly, it was condescending.", "Y desestimó todo lo que dijiste del presupuesto. Francamente, fue condescendiente."],
   ["B", "It really gets on my nerves. I wish he would let other people finish their sentences.", "De verdad me saca de quicio. Ojalá dejara que los demás terminen sus frases."],
   ["A", "Someone should talk to him. It's high time somebody told him how things work here.", "Alguien debería hablar con él. Ya va siendo hora de que alguien le explique cómo funcionan las cosas aquí."],
   ["B", "Not me. I'd rather you did it. You're much more diplomatic.", "Yo no. Preferiría que lo hicieras tú. Eres mucho más diplomática."],
   ["A", "Ha ha, thanks. But I'd rather Marta handled it. She's his manager, after all.", "Jaja, gracias. Pero preferiría que Marta se encargara. Al fin y al cabo, es su jefa."],
   ["B", "True. Although Marta seems to take everyone for granted lately.", "Cierto. Aunque Marta parece dar a todos por sentado últimamente."],
   ["A", "Suppose we sent her an email, just explaining the problem politely?", "¿Y si le mandamos un correo, solo explicando el problema con cortesía?"],
   ["B", "Hmm. I'd rather we spoke to her in person. Emails can sound like complaints.", "Mmm. Preferiría que habláramos con ella en persona. Los correos pueden sonar a queja."],
   ["A", "Fair point. And to be honest, he's not a bad person. He just looks as if he's nervous.", "Buen punto. Y para ser sincera, no es mala persona. Solo parece que está nervioso."],
   ["B", "Maybe. If only he'd relax a bit and stop showing off.", "Puede ser. Si tan solo se relajara un poco y dejara de presumir."],
   ["A", "Let's give him a chance. But it's about time someone gave him some feedback.", "Démosle una oportunidad. Pero ya era hora de que alguien le diera retroalimentación."]
  ]
 },
 practice: [
  M("He spends money as if he ___ a millionaire. (pero no lo es)", ["were", "is", "will be", "has been"], 0, "Situación irreal después de as if → pasado."),
  M("It's high time we ___ a decision.", ["made", "make", "will make", "are making"], 0),
  M("I'd rather you ___ my phone without asking.", ["didn't use", "don't use", "won't use", "not use"], 0),
  F("I wish my brother ___ stop borrowing my car without asking. (queja)", ["would"]),
  L("I'd rather you hadn't told my parents about the accident. Now they're worried, and it wasn't serious at all.", "¿Qué habría preferido quien habla?", ["Que no les hubiera contado a sus papás", "Que lo hubieran llevado al hospital", "Que no hubiera habido accidente", "Que le hubieran contado antes"], 0),
  O("It's high time the city did something about the traffic.")
 ],
 more: [
  R("She acts as though she were the boss.", "Actúa como si fuera la jefa."),
  R("I'd rather you didn't mention it.", "Preferiría que no lo mencionaras."),
  D("It's about time you apologised to her."),
  D("I wish you would stop interrupting me."),
  M("It looks as if it ___ to rain. Take an umbrella. (es posible)", ["is going", "were going", "had gone", "would go"], 0, "Si puede ser cierto, se usa presente."),
  M("I'd rather you ___ me before you sold the car. (pasado)", ["had asked", "asked", "would ask", "have asked"], 0),
  L("Suppose you were offered a job in another country tomorrow. Would you take it, or would you rather stay close to your family?", "¿Qué situación plantea?", ["Una oferta de trabajo en otro país", "Perder el trabajo", "Mudarse con la familia", "Cambiar de carrera"], 0),
  W("Escribe un correo diplomático a un colega o vecino sobre un comportamiento que te molesta (mínimo 130 palabras). Usa as if / as though, it's (high) time, I'd rather you…, wish … would y suppose.", 130, [["as if", "as though"], ["it's high time", "it's about time", "it is high time", "it's time"], ["i'd rather you", "i would rather you"], ["wish", "would"], ["suppose", "supposing", "if only"]])
 ],
 exam: M("It's about time you ___ your room. It's a mess.", ["tidied", "tidy", "will tidy", "are tidying"], 0),
 exam2: F("He talks as ___ he knew everything, but he doesn't. (como si)", ["if", "though"])
},
/* ───────── Día 32 ───────── */
{
 id: "c1-u7-l2",
 title: "Infinitivos y gerundios perfectos y pasivos",
 goal: "Expresar tiempo anterior y voz pasiva con infinitivos y gerundios.",
 theory: [
  { p: "El **infinitivo perfecto** (**to have + participio**) mira hacia una acción **anterior**: **She seems to have left** (parece que ya se fue). **He claims to have met the president.** **I'm sorry to have kept you waiting.** El **infinitivo pasivo** (**to be + participio**): **I expect to be paid on Friday.** · **This form needs to be signed.** Y combinado: **The thief is believed to have been caught.**" },
  { ex: [["He seems to have forgotten our meeting.", "Parece que olvidó nuestra reunión."], ["She claims to have been a professional dancer.", "Afirma haber sido bailarina profesional."], ["I'm glad to have met you.", "Me alegra haberte conocido."], ["Everyone wants to be listened to.", "Todos quieren ser escuchados."], ["The paintings are thought to have been stolen in 1990.", "Se cree que los cuadros fueron robados en 1990."]] },
  { p: "El **gerundio perfecto** (**having + participio**) también marca anterioridad: **He denied having taken the money.** · **Having finished the report, she went home.** El **gerundio pasivo** (**being + participio**): **I hate being interrupted.** · **She's used to being ignored.** Y **having been + participio**: **He resented having been left out.**" },
  { ex: [["She regrets having sold the house.", "Se arrepiente de haber vendido la casa."], ["Having lived in London, he speaks with a British accent.", "Habiendo vivido en Londres, habla con acento británico."], ["I can't stand being told what to do.", "No soporto que me digan qué hacer."], ["He was proud of being chosen for the team.", "Estaba orgulloso de haber sido escogido para el equipo."], ["After having been rejected twice, she finally got the job.", "Después de haber sido rechazada dos veces, por fin consiguió el trabajo."]] },
  { tip: "Después de **deny, admit, regret, remember** el gerundio simple ya implica pasado (**He denied taking it**); el perfecto (**having taken**) lo enfatiza. Las dos formas son correctas." }
 ],
 vocab: [
  ["to have done", "estructura", "haber hecho (infinitivo perfecto)", "He seems to have left."],
  ["to be done", "estructura", "ser hecho (infinitivo pasivo)", "It needs to be fixed."],
  ["having done", "estructura", "haber hecho (gerundio perfecto)", "Having eaten, we left."],
  ["being done", "estructura", "ser hecho (gerundio pasivo)", "I hate being watched."],
  ["claim", "verbo", "afirmar, asegurar", "He claims to have seen a UFO."],
  ["appear", "verbo", "parecer", "She appears to have forgotten."],
  ["pretend", "verbo", "fingir", "He pretended to have read the book."],
  ["deny", "verbo", "negar", "She denied having lied."],
  ["admit", "verbo", "admitir", "He admitted having made a mistake."],
  ["regret", "verbo", "arrepentirse de", "I regret having said that."],
  ["resent", "verbo", "resentir, molestarse por", "She resented being ignored."],
  ["be entitled to", "expresión", "tener derecho a", "You're entitled to be paid."],
  ["be keen to", "expresión", "tener ganas de", "He's keen to be promoted."],
  ["be reported to", "expresión", "según informes", "He is reported to have resigned."],
  ["take part", "verbo", "participar", "I'm proud to have taken part."],
  ["left out", "expresión", "excluido, dejado de lado", "He felt left out."],
  ["overlook", "verbo", "pasar por alto", "She hated being overlooked."],
  ["shortlist", "verbo", "preseleccionar", "I was delighted to be shortlisted."],
  ["acknowledge", "verbo", "reconocer", "He wants to be acknowledged."],
  ["undervalued", "adjetivo", "subvalorado", "Teachers often feel undervalued."],
  ["appreciated", "adjetivo", "valorado, apreciado", "Everyone likes being appreciated."],
  ["put on the spot", "expresión", "poner en aprietos", "I hate being put on the spot."]
 ],
 dialogue: {
  title: "La entrevista para el premio",
  scene: "Daniela, ingeniera ambiental, fue preseleccionada para un premio de innovación. Una periodista de radio la entrevista.",
  a: "Periodista", b: "Daniela",
  lines: [
   ["A", "Congratulations on being shortlisted for the award. How do you feel?", "Felicitaciones por ser preseleccionada para el premio. ¿Cómo se siente?"],
   ["B", "Thank you. I'm delighted to have been chosen, especially because so many good projects were presented.", "Gracias. Estoy encantada de haber sido escogida, sobre todo porque se presentaron muchos proyectos buenos."],
   ["A", "Your water filter is said to have helped more than ten thousand families in La Guajira.", "Se dice que su filtro de agua ha ayudado a más de diez mil familias en La Guajira."],
   ["B", "That's right. Having worked there for five years, I saw the problem with my own eyes.", "Así es. Habiendo trabajado allá cinco años, vi el problema con mis propios ojos."],
   ["A", "Some critics claim to have found a similar design in Kenya. What do you say?", "Algunos críticos aseguran haber encontrado un diseño parecido en Kenia. ¿Qué dice?"],
   ["B", "I've never denied having been inspired by other projects. Every invention builds on previous work.", "Nunca he negado haberme inspirado en otros proyectos. Todo invento se basa en trabajos anteriores."],
   ["A", "Was it difficult to be taken seriously as a young woman in engineering?", "¿Fue difícil que la tomaran en serio siendo una mujer joven en la ingeniería?"],
   ["B", "At first, yes. I resented being overlooked in meetings, and I hated being asked if my boss had designed it.", "Al principio sí. Me molestaba que me pasaran por alto en las reuniones, y odiaba que me preguntaran si mi jefe lo había diseñado."],
   ["A", "That must have been frustrating.", "Eso debió ser frustrante."],
   ["B", "It was. But now I'm proud to have proved them wrong. And I want other girls to be encouraged to study science.", "Lo fue. Pero ahora estoy orgullosa de haberles demostrado que estaban equivocados. Y quiero que se anime a otras niñas a estudiar ciencias."],
   ["A", "If you win, what will you do with the prize money?", "Si gana, ¿qué hará con el dinero del premio?"],
   ["B", "I'd like the filter to be produced locally, so that it can be repaired by the communities themselves.", "Me gustaría que el filtro se produjera localmente, para que las mismas comunidades puedan repararlo."],
   ["A", "Thank you, Daniela, and good luck on Friday.", "Gracias, Daniela, y buena suerte el viernes."],
   ["B", "Thank you. Whatever happens, I'm glad to have taken part.", "Gracias. Pase lo que pase, me alegra haber participado."]
  ]
 },
 practice: [
  M("He seems ___ the keys. He can't find them anywhere.", ["to have lost", "to lose", "having lost", "to be lost"], 0, "Acción anterior → infinitivo perfecto."),
  M("I can't stand ___ what to do by people I don't know.", ["being told", "to tell", "telling", "having told"], 0),
  M("The suspect denied ___ the victim before.", ["having met", "to have met", "to meet", "being met"], 0),
  F("This contract needs to ___ signed by both parties. (ser)", ["be"]),
  L("Having lived in Japan for ten years, she is said to speak the language perfectly, although she claims to have forgotten a lot.", "¿Qué dice ella misma?", ["Que ha olvidado mucho", "Que lo habla perfecto", "Que nunca lo aprendió", "Que va a volver a Japón"], 0),
  O("I'm delighted to have been chosen for the project.")
 ],
 more: [
  R("She regrets having sold her old house.", "Se arrepiente de haber vendido su casa vieja."),
  R("Everyone likes being appreciated at work.", "A todos les gusta ser valorados en el trabajo."),
  D("He claims to have met the president."),
  D("The painting is thought to have been stolen."),
  M("___ the report, she sent it to her manager.", ["Having finished", "To have finished", "Being finished", "Having been finished"], 0),
  M("Children love ___ stories before bed.", ["being read", "reading to", "to have read", "having read to"], 0),
  L("I was really upset at being left out of the meeting. I'd like to be told about decisions before they're made.", "¿Por qué está molesto?", ["Lo dejaron por fuera de la reunión", "Lo criticaron", "No le pagaron", "Lo cambiaron de oficina"], 0),
  W("Escribe un texto de presentación para un premio o una beca (mínimo 130 palabras): tus logros, lo que te enorgullece haber hecho y lo que esperas que se reconozca. Usa al menos tres infinitivos o gerundios perfectos (to have done, having done) y dos pasivos (to be done, being done).", 130, [["to have"], ["having"], ["to be", "being"], ["proud", "delighted", "glad", "honoured", "honored"]])
 ],
 exam: M("She is believed ___ the country last week.", ["to have left", "to leave", "having left", "to be leaving"], 0),
 exam2: F("I hate ___ interrupted when I'm speaking. (ser)", ["being"])
},
/* ───────── Día 33 ───────── */
{
 id: "c1-u7-l3",
 title: "Hablar de datos con precisión: cuantificadores avanzados",
 goal: "Describir cifras, proporciones y tendencias con cuantificadores precisos y adverbios de actitud.",
 theory: [
  { p: "Para proporciones: **the vast majority of** (la inmensa mayoría), **a significant proportion of**, **roughly half / just under a third / well over 60%**, **a small minority**, **a handful of** (un puñado), **hardly any / next to no** (casi nada), **not a single** (ni uno solo). Con incontables: **a great deal of**, **a fraction of**, **the bulk of** (la mayor parte)." },
  { ex: [["The vast majority of respondents agreed.", "La inmensa mayoría de los encuestados estuvo de acuerdo."], ["Just under a third of students use the library.", "Un poco menos de un tercio de los estudiantes usa la biblioteca."], ["Only a handful of companies replied.", "Solo un puñado de empresas respondió."], ["There's hardly any evidence for that claim.", "Casi no hay evidencia para esa afirmación."], ["The bulk of the budget goes on salaries.", "La mayor parte del presupuesto se va en salarios."]] },
  { p: "Para tendencias: **rise / increase / grow sharply, steadily, slightly**; **fall / drop / decline dramatically, gradually**; **level off, peak at, fluctuate, double, halve**. Los **adverbios de actitud** muestran tu interpretación: **Surprisingly, … · Predictably, … · Interestingly, … · Worryingly, … · Not surprisingly, …**" },
  { ex: [["Unemployment rose sharply in 2020 before levelling off.", "El desempleo subió bruscamente en 2020 y luego se estabilizó."], ["The number of cyclists has doubled since 2015.", "El número de ciclistas se ha duplicado desde 2015."], ["Interestingly, older users spend more time online.", "Curiosamente, los usuarios mayores pasan más tiempo en línea."], ["Worryingly, reading levels have declined.", "Preocupantemente, los niveles de lectura han bajado."], ["Prices fluctuated throughout the year.", "Los precios fluctuaron durante todo el año."]] },
  { tip: "Con **majority / minority** el verbo suele ir en plural cuando hablas de personas: **The majority of people are…** Y **a number of** (varios) va con plural, mientras que **the number of** (la cantidad) va con singular: **The number of tourists has grown.**" }
 ],
 vocab: [
  ["the vast majority", "expresión", "la inmensa mayoría", "The vast majority voted yes."],
  ["a significant proportion", "expresión", "una proporción considerable", "A significant proportion are under 30."],
  ["a handful of", "expresión", "un puñado de", "A handful of people came."],
  ["hardly any", "expresión", "casi nada, casi ninguno", "There's hardly any milk left."],
  ["next to no", "expresión", "casi nada de", "They received next to no help."],
  ["the bulk of", "expresión", "la mayor parte de", "The bulk of the work is done."],
  ["a fraction of", "expresión", "una fracción de", "It costs a fraction of the price."],
  ["roughly", "adverbio", "aproximadamente", "Roughly half agreed."],
  ["just under / well over", "expresión", "un poco menos de / bastante más de", "Well over 60% said no."],
  ["respondents", "sustantivo", "encuestados", "Most respondents were women."],
  ["sharply", "adverbio", "bruscamente, marcadamente", "Prices rose sharply."],
  ["steadily", "adverbio", "de manera constante", "Sales grew steadily."],
  ["level off", "verbo", "estabilizarse", "Inflation has levelled off."],
  ["peak at", "verbo", "alcanzar el máximo en", "It peaked at 12%."],
  ["fluctuate", "verbo", "fluctuar", "Demand fluctuates."],
  ["double / halve", "verbo", "duplicarse / reducirse a la mitad", "The price has halved."],
  ["decline", "verbo / sustantivo", "disminuir; descenso", "A steady decline."],
  ["surprisingly", "adverbio", "sorprendentemente", "Surprisingly, few people complained."],
  ["predictably", "adverbio", "como era de esperar", "Predictably, prices went up."],
  ["worryingly", "adverbio", "de forma preocupante", "Worryingly, crime has increased."],
  ["trend", "sustantivo", "tendencia", "It's a worrying trend."],
  ["figures", "sustantivo", "cifras", "The latest figures are positive."]
 ],
 dialogue: {
  title: "Los resultados de la encuesta de lectura",
  scene: "Andrea y Mauricio, de una fundación educativa en Medellín, preparan una presentación con los datos de una encuesta sobre hábitos de lectura.",
  a: "Andrea", b: "Mauricio",
  lines: [
   ["A", "OK, let's look at the figures. We surveyed roughly two thousand teenagers.", "Bueno, miremos las cifras. Encuestamos a unos dos mil adolescentes."],
   ["B", "And predictably, the vast majority read on their phones rather than on paper.", "Y como era de esperar, la inmensa mayoría lee en el celular y no en papel."],
   ["A", "Yes, well over seventy percent. But interestingly, just under a third still prefer printed books.", "Sí, bastante más del setenta por ciento. Pero curiosamente, un poco menos de un tercio todavía prefiere libros impresos."],
   ["B", "That's more than I expected. What about the time they spend reading?", "Es más de lo que esperaba. ¿Y el tiempo que pasan leyendo?"],
   ["A", "Worryingly, it has declined steadily since 2018. It peaked at about forty minutes a day and now it's under twenty.", "Preocupantemente, ha bajado de manera constante desde 2018. Llegó a un máximo de unos cuarenta minutos al día y ahora está por debajo de veinte."],
   ["B", "So it's halved in six years. That's a sharp drop.", "O sea que se redujo a la mitad en seis años. Es una caída fuerte."],
   ["A", "Exactly. And hardly any of them read newspapers. Only a handful said they do.", "Exacto. Y casi ninguno lee periódicos. Solo un puñado dijo que sí."],
   ["B", "What about libraries? Did a significant proportion use them?", "¿Y las bibliotecas? ¿Las usa una proporción considerable?"],
   ["A", "Surprisingly, yes. The number of library visits has risen in the last two years, mostly because of the free Wi-Fi.", "Sorprendentemente, sí. La cantidad de visitas a bibliotecas ha subido en los últimos dos años, sobre todo por el wifi gratis."],
   ["B", "Ha ha. So they go for the Wi-Fi, not the books.", "Jaja. O sea que van por el wifi, no por los libros."],
   ["A", "Partly. But a number of students said they borrowed books once they were there.", "En parte. Pero varios estudiantes dijeron que prestaban libros una vez estaban allá."],
   ["B", "That's a good point for the presentation. The bulk of our budget should go to libraries, then.", "Ese es un buen punto para la presentación. Entonces la mayor parte de nuestro presupuesto debería ir a las bibliotecas."],
   ["A", "Agreed. Let's put that in the conclusion.", "De acuerdo. Pongámoslo en la conclusión."]
  ]
 },
 practice: [
  M("___ of respondents agreed: 92% said yes.", ["The vast majority", "A handful", "Hardly any", "A fraction"], 0),
  M("Only ___ of people came to the meeting: five or six at most.", ["a handful", "the bulk", "the vast majority", "a significant proportion"], 0),
  M("The number of tourists ___ grown steadily.", ["has", "have", "are", "were"], 0, "The number of + verbo en singular."),
  F("Sales rose sharply and then levelled ___. (se estabilizaron)", ["off"]),
  L("Worryingly, the number of students who drop out of university has doubled in the last ten years, although it has levelled off recently.", "¿Qué ha pasado recientemente?", ["Se ha estabilizado", "Ha seguido subiendo", "Ha bajado mucho", "Se ha duplicado otra vez"], 0),
  O("Interestingly, just under a third of the respondents still prefer printed books.")
 ],
 more: [
  R("There is hardly any evidence for that claim.", "Casi no hay evidencia para esa afirmación."),
  R("The price has halved since last year.", "El precio se ha reducido a la mitad desde el año pasado."),
  D("The bulk of the budget goes on salaries."),
  D("Unemployment peaked at twelve percent."),
  M("Inflation went up and down all year. It ___.", ["fluctuated", "levelled off", "peaked", "halved"], 0),
  M("A number of employees ___ complained about the new policy.", ["have", "has", "is", "was"], 0, "A number of (varios) + plural."),
  L("Predictably, the vast majority of users chose the free plan. Surprisingly, though, a significant proportion upgraded after the first month.", "¿Qué fue lo sorprendente?", ["Que muchos pasaron al plan pago después del primer mes", "Que todos escogieron el plan gratis", "Que nadie usó la aplicación", "Que el plan gratis se canceló"], 0),
  W("Describe los resultados de una encuesta o unas estadísticas reales o imaginarias (mínimo 130 palabras), por ejemplo sobre el uso del transporte en tu ciudad. Usa al menos cuatro cuantificadores precisos, tres verbos o adverbios de tendencia y dos adverbios de actitud.", 130, [["vast majority", "handful", "hardly any", "proportion", "bulk", "fraction", "roughly", "just under", "well over", "minority"], ["rose", "risen", "fell", "fallen", "declined", "doubled", "halved", "levelled off", "leveled off", "peaked", "fluctuated", "increased", "decreased"], ["surprisingly", "predictably", "interestingly", "worryingly", "not surprisingly", "unsurprisingly"]])
 ],
 exam: M("There was ___ traffic on Sunday, so we arrived in twenty minutes.", ["hardly any", "a handful of", "the bulk of", "a number of"], 0),
 exam2: F("The ___ majority of Colombians drink coffee every day. (inmensa)", ["vast"])
},
/* ───────── Día 34 ───────── */
{
 id: "c1-u7-l4",
 title: "Parafrasear: transformar frases sin cambiar el sentido",
 goal: "Decir lo mismo con otras estructuras, como en las transformaciones del examen C1 Advanced.",
 theory: [
  { p: "En la parte de **Use of English** del C1 Advanced debes reescribir una frase con una **palabra clave** sin cambiar el significado. Lo que se evalúa: estructuras gramaticales equivalentes y expresiones fijas. Ejemplo: **I haven't seen him for years. (LAST)** → **It's years since I last saw him.**" },
  { ex: [["It wasn't necessary for you to bring food. → You needn't have brought food.", "No era necesario que trajeras comida."], ["People say he is very rich. → He is said to be very rich.", "Se dice que es muy rico."], ["I regret not studying harder. → I wish I had studied harder.", "Ojalá hubiera estudiado más."], ["She didn't arrive until ten. → It wasn't until ten that she arrived.", "No llegó sino hasta las diez."], ["He's likely to win. → There's a good chance (that) he'll win.", "Es probable que gane."]] },
  { p: "Transformaciones frecuentes: **despite + -ing ↔ although** · **too … to ↔ so … that** · **as soon as ↔ no sooner … than** · **it's not worth + -ing ↔ there's no point (in) + -ing** · **I'd prefer ↔ I'd rather** · **must have ↔ I'm sure** · **succeed in + -ing ↔ manage to** · **take into account ↔ consider** · **have difficulty + -ing ↔ find it hard to**." },
  { ex: [["Although it rained, we went out. → Despite the rain, we went out.", "Aunque llovió, salimos."], ["As soon as I arrived, it started. → No sooner had I arrived than it started.", "Apenas llegué, empezó."], ["It's pointless arguing. → There's no point in arguing.", "No tiene sentido discutir."], ["I'm sure he forgot. → He must have forgotten.", "Seguro se le olvidó."], ["She found it hard to sleep. → She had difficulty sleeping.", "Le costó dormir."]] },
  { tip: "Estrategia: identifica qué estructura pide la palabra clave, **nunca la cambies de forma** (si dice LAST, no escribas «lastly»), copia la información completa y revisa que el tiempo verbal coincida. En el examen se usan entre tres y seis palabras." }
 ],
 vocab: [
  ["paraphrase", "verbo / sustantivo", "parafrasear; paráfrasis", "Paraphrase this sentence."],
  ["rephrase", "verbo", "reformular", "Can you rephrase that?"],
  ["key word", "expresión", "palabra clave", "Use the key word given."],
  ["in other words", "expresión", "en otras palabras", "In other words, we failed."],
  ["same meaning", "expresión", "mismo significado", "Keep the same meaning."],
  ["there's no point in", "expresión", "no tiene sentido", "There's no point in waiting."],
  ["it's not worth", "expresión", "no vale la pena", "It's not worth repairing."],
  ["have difficulty", "expresión", "tener dificultad para", "I had difficulty finding it."],
  ["succeed in", "expresión", "lograr", "She succeeded in passing."],
  ["take into account", "expresión", "tener en cuenta", "Take the cost into account."],
  ["it's years since", "expresión", "hace años que no", "It's years since I saw her."],
  ["not until", "expresión", "no sino hasta", "It wasn't until midnight that he called."],
  ["on the verge of", "expresión", "al borde de", "He was on the verge of tears."],
  ["come as no surprise", "expresión", "no sorprender", "It came as no surprise."],
  ["make up your mind", "expresión", "decidirse", "I can't make up my mind."],
  ["get round to", "verbo", "sacar tiempo para (por fin)", "I never got round to it."],
  ["be on the point of", "expresión", "estar a punto de", "I was on the point of leaving."],
  ["by no means", "expresión", "de ninguna manera, para nada", "It's by no means easy."],
  ["in spite of", "expresión", "a pesar de", "In spite of the cost, we went."],
  ["as long as", "expresión", "siempre y cuando", "As long as you're careful."],
  ["equivalent", "adjetivo / sustantivo", "equivalente", "Find an equivalent structure."],
  ["word for word", "expresión", "palabra por palabra", "Don't translate word for word."]
 ],
 dialogue: {
  title: "Preparando el C1 Advanced",
  scene: "Juliana prepara el examen C1 Advanced con su tutor, Mr. Hughes, en una clase virtual. Practican transformaciones.",
  a: "Mr. Hughes", b: "Juliana",
  lines: [
   ["A", "First sentence: 'I haven't been to the cinema for months.' The key word is LAST.", "Primera frase: «No voy al cine hace meses». La palabra clave es LAST."],
   ["B", "'It's months since I last went to the cinema.'", "«Hace meses que no voy al cine»."],
   ["A", "Perfect. Next: 'It's pointless complaining to the manager.' Key word: POINT.", "Perfecto. Siguiente: «Es inútil quejarse con el gerente». Palabra clave: POINT."],
   ["B", "'There's no point in complaining to the manager.'", "«No tiene sentido quejarse con el gerente»."],
   ["A", "Good. Now a harder one: 'I'm sure she didn't receive my message.' Key word: CAN'T.", "Bien. Ahora una más difícil: «Estoy seguro de que no recibió mi mensaje». Palabra clave: CAN'T."],
   ["B", "Hmm… 'She can't have received my message.'", "Mmm… «No puede haber recibido mi mensaje»."],
   ["A", "Excellent. Next: 'As soon as we sat down, the lights went out.' Key word: SOONER.", "Excelente. Siguiente: «Apenas nos sentamos, se fue la luz». Palabra clave: SOONER."],
   ["B", "'No sooner did we sit down…' No, wait. 'No sooner had we sat down than the lights went out.'", "«No sooner did we sit down…». No, espere. «No sooner had we sat down than the lights went out»."],
   ["A", "Well corrected. Remember: no sooner goes with the past perfect. Last one: 'She found it hard to accept the criticism.' Key word: DIFFICULTY.", "Bien corregido. Recuerda: no sooner va con el pasado perfecto. Última: «Le costó aceptar la crítica». Palabra clave: DIFFICULTY."],
   ["B", "'She had difficulty to accept…' Is that right?", "«She had difficulty to accept…». ¿Está bien?"],
   ["A", "Not quite. Difficulty is followed by -ing.", "No del todo. Después de difficulty va -ing."],
   ["B", "Of course: 'She had difficulty accepting the criticism.'", "Claro: «She had difficulty accepting the criticism»."],
   ["A", "Exactly. In other words, the key is knowing which structure goes with each word.", "Exacto. En otras palabras, la clave es saber qué estructura va con cada palabra."],
   ["B", "I'll make a list. There's no point in memorising them without examples.", "Voy a hacer una lista. No tiene sentido memorizarlas sin ejemplos."]
  ]
 },
 practice: [
  M("«I haven't seen her for ages.» (LAST) → It's ages ___ her.", ["since I last saw", "that I last see", "since I have last seen", "from I last saw"], 0),
  M("«It's pointless waiting.» (POINT) → There's no ___.", ["point in waiting", "point to waiting", "point waiting for", "pointing waiting"], 0),
  M("«I'm sure he forgot.» (MUST) → He ___.", ["must have forgotten", "must forget", "must have forgot it", "must be forgetting"], 0),
  F("«She found it hard to sleep.» (DIFFICULTY) → She had difficulty ___.", ["sleeping"]),
  L("It wasn't until she moved to London that she realised how much she missed Colombian food.", "¿Cuándo se dio cuenta?", ["Cuando se mudó a Londres", "Antes de mudarse", "Cuando volvió a Colombia", "Nunca"], 0),
  O("It's years since I last went on holiday.")
 ],
 more: [
  R("There's no point in arguing about it.", "No tiene sentido discutir sobre eso."),
  R("No sooner had we arrived than it started raining.", "Apenas llegamos, empezó a llover."),
  D("It wasn't until midnight that he called."),
  D("She succeeded in passing the exam."),
  M("«Although it was expensive, we bought it.» (DESPITE) → Despite ___, we bought it.", ["it being expensive", "it was expensive", "of being expensive", "being it expensive"], 0),
  M("«It wasn't necessary to book.» (NEEDN'T) → We ___.", ["needn't have booked", "needn't book", "needn't to book", "didn't need have booked"], 0),
  L("I kept meaning to call my old teacher, but I never got round to it. In other words, I left it too late.", "¿Qué quiere decir?", ["Nunca sacó tiempo para llamarlo", "Lo llamó muy tarde en la noche", "El profesor no contestó", "No tenía el número"], 0),
  W("Reescribe estas ideas de otra forma y luego escribe un párrafo sobre un hábito que quieres cambiar (mínimo 130 palabras) usando al menos cinco de estas estructuras: it's years since, there's no point in, have difficulty + -ing, succeed in, not until, no sooner … than, must / can't have.", 130, [["it's years since", "it's ages since", "it's months since"], ["there's no point", "it's not worth"], ["difficulty", "succeeded in", "succeed in"], ["not until", "no sooner", "must have", "can't have"]])
 ],
 exam: M("«As soon as I got home, the phone rang.» (SOONER) → No sooner ___ home than the phone rang.", ["had I got", "I had got", "did I get", "I got"], 0),
 exam2: F("«People think she is a genius.» (THOUGHT) → She is thought to ___ a genius.", ["be"])
},
/* ───────── Día 35 ───────── */
{
 id: "c1-u7-l5",
 title: "Inferir actitud y tono: lo que se dice sin decirlo",
 goal: "Reconocer la actitud, la intención y el tono de quien habla o escribe.",
 theory: [
  { p: "En el **listening** y el **reading** del C1 muchas preguntas no son sobre datos, sino sobre **actitud**: ¿quien habla está **sceptical** (escéptico), **enthusiastic**, **ambivalent** (con sentimientos encontrados), **dismissive** (despectivo), **reluctant** (reacio), **sarcastic**, **apologetic**, **defensive**, **nostalgic**? La respuesta casi nunca está en una sola palabra: depende del conjunto." },
  { ex: [["Well, it's certainly an interesting idea… (= no me convence)", "Bueno, sin duda es una idea interesante… (escéptico)"], ["Oh great, another meeting. Just what I needed.", "Uy qué bien, otra reunión. Justo lo que necesitaba. (sarcástico)"], ["I suppose I could help, if nobody else can.", "Supongo que podría ayudar, si nadie más puede. (reacio)"], ["Part of me loves the city, part of me can't stand it.", "Una parte de mí ama la ciudad y otra no la soporta. (ambivalente)"], ["That's not really my problem, is it?", "Ese no es mi problema, ¿o sí? (despectivo)"]] },
  { p: "Pistas: **adverbios** (admittedly, supposedly, apparently), **verbos de reporte** (he *claimed*, she *admitted*), **modales y hedging** (it could be argued), **comparaciones y contrastes** (*but*, *although*), **repeticiones** y la **entonación** (una subida al final puede indicar sorpresa o duda). **Supposedly** y **so-called** suelen mostrar escepticismo." },
  { ex: [["The so-called experts got it wrong again.", "Los supuestos expertos se equivocaron otra vez."], ["The app is supposedly very easy to use.", "Supuestamente la aplicación es muy fácil de usar."], ["Admittedly, the service was slow, but the food was superb.", "Hay que reconocer que el servicio fue lento, pero la comida estuvo excelente."], ["Apparently, nobody had told him.", "Al parecer, nadie le había dicho."], ["I'm not saying it's wrong. I'm just saying it's risky.", "No digo que esté mal. Solo digo que es arriesgado."]] },
  { tip: "En las preguntas de actitud, descarta las opciones demasiado extremas. Un hablante que dice **It's not the best plan I've ever heard** no está **furious**; es más bien **unconvinced**." }
 ],
 vocab: [
  ["attitude", "sustantivo", "actitud", "What is the speaker's attitude?"],
  ["tone", "sustantivo", "tono", "Her tone was ironic."],
  ["sceptical", "adjetivo", "escéptico", "He's sceptical about the plan."],
  ["enthusiastic", "adjetivo", "entusiasta", "She was enthusiastic about it."],
  ["ambivalent", "adjetivo", "ambivalente, con sentimientos encontrados", "I'm ambivalent about moving."],
  ["dismissive", "adjetivo", "despectivo, que desestima", "He was dismissive of my idea."],
  ["reluctant", "adjetivo", "reacio", "She was reluctant to help."],
  ["sarcastic", "adjetivo", "sarcástico", "Don't be sarcastic."],
  ["apologetic", "adjetivo", "arrepentido, que se disculpa", "He sounded apologetic."],
  ["defensive", "adjetivo", "a la defensiva", "Why are you so defensive?"],
  ["nostalgic", "adjetivo", "nostálgico", "She felt nostalgic about her childhood."],
  ["unconvinced", "adjetivo", "no convencido", "I remain unconvinced."],
  ["supposedly", "adverbio", "supuestamente", "It's supposedly the best in town."],
  ["so-called", "adjetivo", "supuesto, llamado (con duda)", "The so-called experts."],
  ["admittedly", "adverbio", "hay que reconocer que", "Admittedly, it was expensive."],
  ["apparently", "adverbio", "al parecer", "Apparently, he's leaving."],
  ["imply", "verbo", "insinuar, implicar", "What are you implying?"],
  ["infer", "verbo", "inferir, deducir", "I inferred that he was upset."],
  ["read between the lines", "expresión", "leer entre líneas", "You have to read between the lines."],
  ["tongue-in-cheek", "adjetivo", "en broma, irónico", "It was a tongue-in-cheek comment."],
  ["understatement", "sustantivo", "eufemismo, atenuación", "'A bit tired' is an understatement."],
  ["mixed feelings", "expresión", "sentimientos encontrados", "I have mixed feelings about it."]
 ],
 dialogue: {
  title: "¿Qué quiso decir el jefe?",
  scene: "Después de presentar un proyecto, Camilo le pregunta a su colega Sara qué opina de la reacción del director.",
  a: "Camilo", b: "Sara",
  lines: [
   ["A", "So, what did you make of the director's reaction? He said it was 'certainly an interesting idea'.", "Bueno, ¿qué te pareció la reacción del director? Dijo que era «sin duda una idea interesante»."],
   ["B", "Honestly? I think he was sceptical. When he says 'interesting', he usually means 'I'm not convinced'.", "¿Sinceramente? Creo que estaba escéptico. Cuando dice «interesante», normalmente quiere decir «no me convence»."],
   ["A", "Really? I thought he sounded quite enthusiastic.", "¿En serio? Yo pensé que sonaba bastante entusiasmado."],
   ["B", "Not really. Did you notice he asked three times about the cost? You have to read between the lines.", "No mucho. ¿Notaste que preguntó tres veces por el costo? Hay que leer entre líneas."],
   ["A", "Hmm. And when Laura said 'the so-called savings', was she being sarcastic?", "Mmm. ¿Y cuando Laura dijo «los supuestos ahorros», estaba siendo sarcástica?"],
   ["B", "Definitely. She's been dismissive of the project from the start.", "Totalmente. Ha desestimado el proyecto desde el principio."],
   ["A", "Great. Just what I needed.", "Genial. Justo lo que necesitaba."],
   ["B", "Ha ha, now you're the sarcastic one. But it's not all bad. Admittedly, the budget is high, but he liked the timeline.", "Jaja, ahora eres tú el sarcástico. Pero no todo es malo. Hay que reconocer que el presupuesto es alto, pero le gustó el cronograma."],
   ["A", "How do you know?", "¿Cómo sabes?"],
   ["B", "He said, 'I'm not saying no.' That usually means 'convince me'.", "Dijo: «No estoy diciendo que no». Eso normalmente quiere decir «convénceme»."],
   ["A", "So he's ambivalent rather than against it.", "O sea que está indeciso, más que en contra."],
   ["B", "Exactly. Mixed feelings. If you reduce the cost by ten percent, I think he'll agree.", "Exacto. Sentimientos encontrados. Si reduces el costo un diez por ciento, creo que va a aceptar."],
   ["A", "OK. I was a bit defensive in the meeting, wasn't I?", "Bueno. Estuve un poco a la defensiva en la reunión, ¿cierto?"],
   ["B", "A bit. But that's an understatement for how I'd have reacted!", "Un poco. ¡Pero eso se queda corto frente a cómo habría reaccionado yo!"]
  ]
 },
 practice: [
  M("«Oh, wonderful. Another traffic jam.» El tono es:", ["sarcástico", "entusiasta", "nostálgico", "arrepentido"], 0),
  M("«I suppose I could do it, if I really have to.» La actitud es:", ["reluctant", "enthusiastic", "furious", "dismissive"], 0),
  M("«The so-called experts were wrong again.» Quien habla se muestra:", ["sceptical", "grateful", "apologetic", "nostalgic"], 0),
  F("If you have mixed feelings about something, you are ___. (ambivalente)", ["ambivalent"]),
  L("I mean, it's not the worst film I've ever seen. The photography was nice, I suppose. But I wouldn't pay to see it again.", "¿Cuál es la actitud de quien habla sobre la película?", ["Poco entusiasta, más bien negativa", "Muy entusiasta", "Furiosa", "Nostálgica"], 0),
  O("Admittedly, the service was slow, but the food was superb.")
 ],
 more: [
  R("You have to read between the lines.", "Hay que leer entre líneas."),
  R("I have mixed feelings about moving abroad.", "Tengo sentimientos encontrados sobre irme a vivir afuera."),
  D("Apparently, nobody had told him about the changes."),
  D("He was dismissive of everything I said."),
  M("«I'm so sorry, it was completely my fault, it won't happen again.» El tono es:", ["apologetic", "defensive", "sarcastic", "dismissive"], 0),
  M("«Why are you blaming me? I did everything I was told!» El tono es:", ["defensive", "nostalgic", "enthusiastic", "apologetic"], 0),
  L("Ah, the old neighbourhood. We used to play football in the street until it got dark. Everything seemed simpler back then.", "¿Cómo se siente quien habla?", ["Nostálgico", "Enojado", "Sarcástico", "Escéptico"], 0),
  W("Escribe una reseña o un correo en el que tu actitud se note sin decirla directamente (mínimo 130 palabras), por ejemplo un hotel que «supuestamente» era de lujo. Usa al menos cuatro de estas herramientas: supposedly, so-called, admittedly, apparently, I suppose, it could be argued, an understatement.", 130, [["supposedly", "so-called", "apparently"], ["admittedly", "i suppose", "it could be argued", "to be fair"], ["but", "however", "although"], ["understatement", "to put it mildly", "not exactly", "hardly"]])
 ],
 exam: M("«Well, it's certainly an interesting proposal…» (dicho con duda). Quien habla probablemente está:", ["unconvinced", "enthusiastic", "furious", "grateful"], 0),
 exam2: F("If you understand something that isn't said directly, you read between the ___. (líneas)", ["lines"])
}
],
/* ───────── Quiz de la unidad 7 ───────── */
quiz: [
 M("She talks as if she ___ everything, but she's often wrong.", ["knew", "is knowing", "will know", "has known"], 0),
 M("It's high time the government ___ something about pollution.", ["did", "does", "will do", "has done"], 0),
 M("He claims ___ the president when he was a student.", ["to have met", "to meet", "having met", "to be meeting"], 0),
 M("Only ___ of people turned up: there were about six of us.", ["a handful", "the bulk", "the vast majority", "a significant proportion"], 0),
 M("«I'm sure she didn't see us.» (CAN'T) → She ___ us.", ["can't have seen", "can't see", "can't have saw", "couldn't see"], 0),
 F("I hate ___ told what to do. (ser)", ["being"]),
 L("I'd rather you hadn't invited him. Admittedly, he's very clever, but he spends the whole evening talking as if he were the only person in the room.", "¿Qué critica quien habla?", ["Que habla como si fuera el único en la sala", "Que no es inteligente", "Que llegó tarde", "Que no habla nada"], 0),
 L("Surprisingly, the number of people cycling to work has doubled since the new bike lanes opened, although it has levelled off this year.", "¿Qué ha pasado este año?", ["Se ha estabilizado", "Ha seguido duplicándose", "Ha caído", "Cerraron las ciclovías"], 0),
 W("Escribe un artículo de opinión (mínimo 150 palabras) sobre un cambio que tu ciudad o tu país necesita con urgencia. Usa it's high time / I'd rather, al menos dos infinitivos o gerundios perfectos o pasivos, cuantificadores precisos con datos y deja ver tu actitud con adverbios (admittedly, supposedly, worryingly…).", 150, [["it's high time", "it's about time", "i'd rather", "as if", "as though"], ["to have", "having", "being", "to be"], ["majority", "handful", "hardly any", "proportion", "bulk", "roughly", "just under", "well over"], ["admittedly", "supposedly", "worryingly", "surprisingly", "apparently", "so-called", "predictably"]]),
 O("It's about time we faced up to the problem."),
 O("Having lived abroad for years, I have mixed feelings about coming back.")
],
pool: [
 M("I'd rather you ___ anyone about this.", ["didn't tell", "don't tell", "won't tell", "not tell"], 0),
 M("I wish you ___ leaving your clothes on the floor!", ["would stop", "stop", "had stopped", "will stop"], 0),
 M("The paintings are believed ___ in 1985.", ["to have been stolen", "to be stealing", "having been stolen", "to steal"], 0),
 M("The number of complaints ___ fallen sharply.", ["has", "have", "are", "were"], 0),
 M("«It's pointless arguing.» (POINT) → There's no ___.", ["point in arguing", "point to argue", "pointing arguing", "point arguing for"], 0),
 M("«It's supposedly the best restaurant in town.» Quien habla se muestra:", ["sceptical", "enthusiastic", "apologetic", "nostalgic"], 0),
 F("She regrets ___ sold her apartment. (haber)", ["having"]),
 F("It wasn't ___ midnight that he finally called. (no sino hasta)", ["until"]),
 L("He looks as if he hasn't slept for days. Apparently, the baby cries all night.", "¿Por qué parece cansado?", ["El bebé llora toda la noche", "Trabaja de noche", "Está enfermo", "Viajó mucho"], 0),
 L("Hardly any students used the old library, but since it reopened with longer hours, the vast majority study there at least once a week.", "¿Qué cambió?", ["Ahora la mayoría estudia allí cada semana", "Ahora casi nadie va", "La cerraron", "Redujeron el horario"], 0),
 L("I'm not saying it's a bad idea. I'm just saying we haven't thought about the risks. Part of me loves it, part of me is worried.", "¿Cuál es la actitud?", ["Ambivalente", "Muy entusiasta", "Totalmente en contra", "Sarcástica"], 0),
 W("Escribe un correo a un colega con datos de un informe (mínimo 150 palabras): cifras con cuantificadores precisos, una tendencia, tu actitud con adverbios y una sugerencia diplomática con I'd rather we… o it's time we…", 150, [["majority", "handful", "proportion", "hardly any", "roughly", "just under", "well over", "bulk"], ["rose", "fell", "doubled", "halved", "levelled off", "leveled off", "peaked", "declined", "increased"], ["surprisingly", "worryingly", "interestingly", "predictably", "admittedly"], ["i'd rather we", "it's time we", "it's high time", "it's about time"]]),
 O("He spends money as if there were no tomorrow."),
 O("The vast majority of respondents agreed with the proposal."),
 O("Admittedly, the plan is risky, but it's worth trying.")
]
};
