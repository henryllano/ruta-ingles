/* B2 · Unidad 7 · Precisión y énfasis (Días 31–35). Se arma con: node tools/build-level.js 3 content/b2 */
const M = (q, o, a, x) => ({ t: "mc", q, o, a, ...(x ? { x } : {}) }), F = (q, ans) => ({ t: "fill", q, ans }),
  L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), O = text => ({ t: "oral", text }), D = say => ({ t: "dict", say }),
  W = (q, min, keys) => ({ t: "write", q, min, keys }), R = (s, es) => ({ t: "order", words: s.split(" "), es });

module.exports = {
n: 7,
title: "Precisión y énfasis",
lessons: [
/* ───────── Día 31 ───────── */
{
 id: "b2-u7-l1",
 title: "Futuro en el pasado: was going to, was about to, was supposed to",
 goal: "Hablar de planes, expectativas y cosas que estaban a punto de pasar pero no pasaron.",
 theory: [
  { p: "El **futuro en el pasado** mira hacia adelante desde un momento pasado. **Was / were going to** = tenía la intención (y muchas veces no se cumplió): **I was going to call you, but my phone died.** **Was / were about to** = estaba a punto de: **We were about to leave when it started to pour.** **Was / were supposed to** = se suponía que, lo que estaba previsto u obligado: **The report was supposed to be ready on Friday.**" },
  { ex: [["I was going to study medicine, but I changed my mind.", "Iba a estudiar medicina, pero cambié de opinión."], ["She was about to resign when they offered her a promotion.", "Estaba a punto de renunciar cuando le ofrecieron un ascenso."], ["The flight was supposed to land at six.", "Se suponía que el vuelo aterrizaba a las seis."], ["You were supposed to tell me first!", "¡Se suponía que me ibas a decir primero!"], ["I knew it would be a long day.", "Sabía que sería un día largo."]] },
  { p: "Otras formas: **would** para predicciones vistas desde el pasado (**I never imagined I would live abroad**), **was due to** (horario oficial: **The train was due to arrive at 8**), **was on the point of** (formal: a punto de) y **was to have + participio** (plan formal que no se cumplió: **The ceremony was to have taken place in June**)." },
  { ex: [["Nobody thought the team would win the league.", "Nadie pensó que el equipo ganaría la liga."], ["The meeting was due to start at nine.", "La reunión estaba programada para las nueve."], ["He was on the point of giving up.", "Estaba a punto de rendirse."], ["The bridge was to have opened in 2022.", "El puente iba a inaugurarse en 2022 (y no se hizo)."], ["We were going to buy a house, but prices went up.", "Íbamos a comprar casa, pero los precios subieron."]] },
  { tip: "Para disculparte por algo que no hiciste suena muy natural **I was going to…, but…**: **I was going to text you, but I fell asleep.** Y **be supposed to** en presente sirve para quejarse con suavidad: **This app is supposed to save me time!**" }
 ],
 vocab: [
  ["was going to", "expresión", "iba a (intención pasada)", "I was going to call you."],
  ["was about to", "expresión", "estaba a punto de", "I was about to leave."],
  ["was supposed to", "expresión", "se suponía que", "It was supposed to be easy."],
  ["was due to", "expresión", "estaba programado para", "The plane was due to land at noon."],
  ["on the point of", "expresión", "a punto de (formal)", "She was on the point of crying."],
  ["was to have", "expresión", "iba a haber (plan no cumplido, formal)", "The match was to have been played on Sunday."],
  ["change your mind", "expresión", "cambiar de opinión", "I was going to go, but I changed my mind."],
  ["fall through", "verbo", "fracasar, venirse abajo (un plan)", "The deal fell through."],
  ["call off", "verbo", "cancelar", "They called off the wedding."],
  ["postpone", "verbo", "aplazar", "The launch was postponed."],
  ["last-minute", "adjetivo", "de último minuto", "A last-minute change."],
  ["intend", "verbo", "tener la intención de", "I intended to finish it yesterday."],
  ["expect", "verbo", "esperar (que algo pase)", "I didn't expect it to rain."],
  ["turn out", "verbo", "resultar", "It turned out to be a great idea."],
  ["in the end", "expresión", "al final", "In the end, we stayed at home."],
  ["at the last minute", "expresión", "a última hora", "She cancelled at the last minute."],
  ["delay", "sustantivo / verbo", "retraso; retrasar", "There was a two-hour delay."],
  ["schedule", "sustantivo", "horario, cronograma", "We're behind schedule."],
  ["unexpected", "adjetivo", "inesperado", "An unexpected problem."],
  ["plan B", "expresión", "plan alternativo", "Luckily, we had a plan B."],
  ["set off", "verbo", "salir (de viaje), emprender", "We were about to set off."],
  ["make it", "expresión", "llegar a tiempo; lograrlo", "We didn't make it to the concert."]
 ],
 dialogue: {
  title: "La boda que no fue en junio",
  scene: "Sofía le cuenta a su compañera Lina por qué su boda en una finca de Villa de Leyva se aplazó.",
  a: "Lina", b: "Sofía",
  lines: [
   ["A", "Weren't you supposed to get married in June?", "¿No te ibas a casar en junio?"],
   ["B", "Yes, the wedding was to have taken place on the fifteenth, at a farm in Villa de Leyva.", "Sí, la boda iba a ser el quince, en una finca en Villa de Leyva."],
   ["A", "So what happened?", "¿Y qué pasó?"],
   ["B", "Two weeks before, the owner called. The farm was going to be sold, and the new owners didn't want events.", "Dos semanas antes llamó el dueño. Iban a vender la finca y los nuevos dueños no querían eventos."],
   ["A", "No way! At the last minute?", "¡No puede ser! ¿A última hora?"],
   ["B", "Exactly. I was about to send the invitations when he told me.", "Exacto. Estaba a punto de mandar las invitaciones cuando me dijo."],
   ["A", "Thank goodness you hadn't sent them. And the catering?", "Menos mal que no las habías mandado. ¿Y la comida?"],
   ["B", "The caterer was supposed to give us a refund, but at first he refused.", "Se suponía que el de la comida nos devolvía la plata, pero al principio se negó."],
   ["A", "Typical. Did you have a plan B?", "Típico. ¿Tenían un plan B?"],
   ["B", "We were going to have it in my parents' garden, but it was far too small for 150 guests.", "Íbamos a hacerla en el jardín de mis papás, pero era demasiado pequeño para 150 invitados."],
   ["A", "I would have panicked. So when is it now?", "Yo habría entrado en pánico. ¿Y ahora cuándo es?"],
   ["B", "In September, at a hotel in Paipa. In the end, it turned out to be a better place.", "En septiembre, en un hotel en Paipa. Al final resultó ser un mejor lugar."],
   ["A", "I never thought you'd stay so calm.", "Nunca pensé que te quedarías tan tranquila."],
   ["B", "Calm? I was on the point of calling off the whole thing! But Andrés kept saying it would work out.", "¿Tranquila? ¡Estuve a punto de cancelar todo! Pero Andrés no paraba de decir que todo saldría bien."]
  ]
 },
 practice: [
  M("I ___ call you last night, but I fell asleep on the sofa.", ["was going to", "am going to", "will", "was about"], 0),
  M("We ___ leave when the phone rang.", ["were about to", "are about to", "were about", "would about to"], 0),
  M("The new metro ___ open in 2020, but it's still under construction.", ["was supposed to", "is supposed", "supposed to", "was supposing to"], 0),
  F("I never imagined that I ___ end up living in Canada. (llegaría a)", ["would", "'d"]),
  L("We were going to drive to the coast, but the road was closed because of a landslide, so in the end we took a plane.", "¿Por qué cambiaron de plan?", ["La carretera estaba cerrada por un derrumbe", "Se les dañó el carro", "Los tiquetes eran baratos", "Cambiaron de destino"], 0),
  O("I was about to give up when I finally found the solution.")
 ],
 more: [
  R("You were supposed to tell me first.", "Se suponía que me ibas a decir primero."),
  R("The ceremony was to have taken place in June.", "La ceremonia iba a ser en junio."),
  D("I was going to text you, but my battery died."),
  D("The train was due to arrive at eight."),
  M("—Why didn't you come? —Sorry, I ___ come, but something came up at work.", ["was going to", "was about", "am going to", "would"], 0),
  M("She was on the point ___ resigning.", ["of", "to", "for", "in"], 0),
  L("The concert was due to start at eight, but the singer arrived two hours late. Some fans were about to leave when the lights finally went off.", "¿Qué estaba a punto de hacer parte del público?", ["Irse", "Entrar", "Pedir un reembolso", "Subirse al escenario"], 0),
  W("Cuenta un plan importante que no salió como esperabas (mínimo 100 palabras): qué ibas a hacer, qué se suponía que pasaría, qué estuvo a punto de pasar y cómo terminó. Usa was going to, was about to, was supposed to y would.", 100, [["was going to", "were going to"], ["was about to", "were about to", "on the point of"], ["was supposed to", "were supposed to", "was due to"], ["in the end", "turned out", "would"]])
 ],
 exam: M("The match ___ be played on Sunday, but it was postponed.", ["was supposed to", "is supposed", "supposed", "was supposing"], 0),
 exam2: F("I was ___ to leave when it started to rain. (a punto de)", ["about"])
},
/* ───────── Día 32 ───────── */
{
 id: "b2-u7-l2",
 title: "Needn't have, be supposed to, be allowed to y make / let",
 goal: "Expresar necesidad, permiso y obligación en el pasado con precisión.",
 theory: [
  { p: "**Needn't have + participio** = lo hiciste, pero no era necesario: **I needn't have cooked; they had already eaten** (cociné sin necesidad). **Didn't need to + verbo** = no era necesario, y normalmente **no** lo hiciste: **I didn't need to cook, so I watched a film.**" },
  { ex: [["We needn't have hurried. The meeting started late.", "No teníamos que habernos apurado. La reunión empezó tarde."], ["You needn't have bought me a present!", "¡No tenías que haberme comprado un regalo!"], ["I didn't need to take a taxi. My friend drove me.", "No necesité tomar taxi. Mi amigo me llevó."], ["She didn't need to study; she already knew everything.", "Ella no necesitaba estudiar; ya sabía todo."], ["They needn't have worried. Everything went well.", "No tenían por qué preocuparse. Todo salió bien."]] },
  { p: "**Be allowed to** = tener permiso (**We weren't allowed to use our phones in class**). **Be supposed to** = lo que se espera o es la norma, aunque no siempre se cumpla (**You're supposed to wear a helmet**). **Make + persona + verbo** (obligar) y **let + persona + verbo** (dejar) van **sin to**: **My parents made me study** · **They let me go out**. **Allow / force + persona + to**: **They didn't allow us to take photos**." },
  { ex: [["At my school we weren't allowed to wear trainers.", "En mi colegio no nos dejaban usar tenis."], ["You're supposed to check in two hours before.", "Se supone que hay que hacer el check-in dos horas antes."], ["My boss made me stay until nine.", "Mi jefe me hizo quedar hasta las nueve."], ["My parents let me travel alone at sixteen.", "Mis papás me dejaron viajar solo a los dieciséis."], ["The rain forced us to cancel the trip.", "La lluvia nos obligó a cancelar el viaje."]] },
  { tip: "En pasiva **make** recupera el **to**: **My boss made me work late** → **I was made to work late**. Y **let** no tiene pasiva: se usa **be allowed to** (**I was allowed to leave early**)." }
 ],
 vocab: [
  ["needn't have", "expresión", "no tenía que haber (pero lo hice)", "You needn't have waited."],
  ["didn't need to", "expresión", "no necesité, no hacía falta", "I didn't need to pay."],
  ["be allowed to", "expresión", "tener permiso para", "We're not allowed to smoke here."],
  ["be supposed to", "expresión", "se supone que (norma o expectativa)", "You're supposed to knock first."],
  ["make (someone) do", "expresión", "obligar, hacer que alguien haga", "She made me apologize."],
  ["let (someone) do", "expresión", "dejar, permitir", "Let me help you."],
  ["force", "verbo", "obligar, forzar", "The strike forced them to close."],
  ["permission", "sustantivo", "permiso", "You need permission to film here."],
  ["forbidden", "adjetivo", "prohibido", "Photos are forbidden."],
  ["compulsory", "adjetivo", "obligatorio", "Uniforms are compulsory."],
  ["optional", "adjetivo", "opcional", "The tour is optional."],
  ["strict", "adjetivo", "estricto", "My father was very strict."],
  ["curfew", "sustantivo", "toque de queda, hora de llegada", "I had a curfew at ten."],
  ["uniform", "sustantivo", "uniforme", "We had to wear a uniform."],
  ["rule", "sustantivo", "regla, norma", "Rules are rules."],
  ["break the rules", "expresión", "romper las reglas", "He always broke the rules."],
  ["get away with", "verbo", "salirse con la suya", "She got away with it."],
  ["in vain", "expresión", "en vano", "We worried in vain."],
  ["unnecessarily", "adverbio", "innecesariamente", "We left unnecessarily early."],
  ["telling-off", "sustantivo", "regaño", "I got a telling-off from my mum."],
  ["ground (someone)", "verbo", "castigar sin salir", "My parents grounded me for a week."],
  ["pocket money", "expresión", "mesada", "I got pocket money every Friday."]
 ],
 dialogue: {
  title: "Así eran las reglas",
  scene: "Óscar y su hija adolescente, Mariana, discuten sobre la hora de llegada a una fiesta. Él le cuenta cómo era cuando era joven.",
  a: "Mariana", b: "Óscar",
  lines: [
   ["A", "Dad, why do I have to be home by eleven? Everybody else is allowed to stay until one.", "Papá, ¿por qué tengo que estar en la casa a las once? A todos los demás los dejan quedarse hasta la una."],
   ["B", "When I was sixteen, I wasn't even allowed to go to parties.", "Cuando yo tenía dieciséis, ni siquiera me dejaban ir a fiestas."],
   ["A", "Seriously? Grandma was that strict?", "¿En serio? ¿La abuela era tan estricta?"],
   ["B", "Very. She made me do my homework before dinner, and she didn't let me use the phone after nine.", "Mucho. Me obligaba a hacer las tareas antes de la comida y no me dejaba usar el teléfono después de las nueve."],
   ["A", "That's crazy. Did you ever break the rules?", "Qué locura. ¿Alguna vez rompiste las reglas?"],
   ["B", "Once. I was supposed to be at a friend's house studying, but we went to a concert.", "Una vez. Se suponía que estaba donde un amigo estudiando, pero nos fuimos a un concierto."],
   ["A", "Ha ha! Did you get away with it?", "¡Jaja! ¿Te saliste con la tuya?"],
   ["B", "No. Somebody saw me and told her. I was grounded for a month and I was made to wash the car every Sunday.", "No. Alguien me vio y le contó. Me castigaron un mes sin salir y me pusieron a lavar el carro todos los domingos."],
   ["A", "OK, I promise I won't lie. But please let me stay until twelve.", "Bueno, prometo no mentir. Pero déjame quedarme hasta las doce, por favor."],
   ["B", "Twelve, and I'll pick you up. You needn't have asked your mother first, by the way. I knew it was you who convinced her!", "Doce, y yo te recojo. Por cierto, no tenías que haberle preguntado a tu mamá primero. ¡Sabía que fuiste tú quien la convenció!"],
   ["A", "Ha ha. So I didn't need to make that cake for you either?", "Jaja. ¿Entonces tampoco tenía que hacerte esa torta?"],
   ["B", "Well… the cake definitely helped.", "Bueno… la torta definitivamente ayudó."],
   ["A", "You're the best, Dad!", "¡Eres el mejor, papá!"]
  ]
 },
 practice: [
  M("We ___ booked a table. The restaurant was empty.", ["needn't have", "didn't need", "mustn't have", "couldn't have"], 0, "Lo hicimos, pero no era necesario."),
  M("I ___ take a taxi because my brother picked me up.", ["didn't need to", "needn't have", "mustn't", "wasn't allowed"], 0, "No era necesario, y no lo hice."),
  M("My parents never let me ___ out on school nights.", ["go", "to go", "going", "went"], 0, "Let + persona + verbo sin to."),
  F("We weren't ___ to use our phones during the exam. (permitido)", ["allowed"]),
  L("At my first job I was made to work every Saturday, and we weren't allowed to take holidays in December.", "¿Qué no les permitían?", ["Tomar vacaciones en diciembre", "Trabajar los sábados", "Usar el celular", "Salir temprano"], 0),
  O("You needn't have bought me a present, but thank you so much.")
 ],
 more: [
  R("My boss made me stay until nine.", "Mi jefe me hizo quedar hasta las nueve."),
  R("You're supposed to check in online.", "Se supone que hay que hacer el check-in en línea."),
  D("We needn't have hurried. The meeting started late."),
  D("Photos are forbidden inside the museum."),
  M("In pasiva: «They made him apologize» → He was made ___ apologize.", ["to", "—", "for", "that"], 0),
  M("¿Cuál es correcta?", ["My father didn't let me drive his car.", "My father didn't let me to drive his car.", "My father didn't allow me drive his car.", "My father didn't let me driving his car."], 0),
  L("You're supposed to wear a helmet on a motorbike, but many people don't. In some cities the police now force drivers to pay a big fine.", "¿Qué hace ahora la policía?", ["Obliga a pagar una multa grande", "Regala cascos", "Prohíbe las motos", "Nada"], 0),
  W("Compara las reglas que tenías de niño o adolescente con las de los jóvenes de hoy (mínimo 100 palabras). Usa was / wasn't allowed to, made me, let me, was supposed to y una frase con needn't have o didn't need to.", 100, [["allowed to"], ["made me", "make me", "was made to"], ["let me", "let us", "lets"], ["supposed to"], ["needn't have", "didn't need to"]])
 ],
 exam: M("You ___ cooked so much food. Only four people came.", ["needn't have", "didn't need", "mustn't have", "shouldn't"], 0),
 exam2: F("My parents didn't ___ me go to the concert. (dejar)", ["let"])
},
/* ───────── Día 33 ───────── */
{
 id: "b2-u7-l3",
 title: "Probabilidad y certeza: bound to, likely to, there's a good chance",
 goal: "Expresar qué tan probable es algo con estructuras variadas y precisas.",
 theory: [
  { p: "Escala de certeza, de más a menos: **be bound to** / **be certain to** (seguro que: **It's bound to rain**) → **be likely to** / **will probably** (es probable) → **may well** / **there's a good chance (that)** (es bastante posible) → **might** / **could** (puede ser) → **be unlikely to** / **probably won't** (poco probable) → **there's no way** (imposible)." },
  { ex: [["With this traffic, we're bound to be late.", "Con este tráfico, seguro llegamos tarde."], ["Prices are likely to rise again next year.", "Es probable que los precios vuelvan a subir el próximo año."], ["She may well win the election.", "Es muy posible que ella gane las elecciones."], ["There's a good chance that it'll be sunny.", "Hay buenas probabilidades de que haga sol."], ["He's unlikely to accept the offer.", "Es poco probable que acepte la oferta."]] },
  { p: "Fíjate en el orden: con **will** el adverbio va **después** en afirmativo (**It will probably rain**) y **antes** en negativo (**It probably won't rain**). Otras expresiones útiles: **in all likelihood** (con toda probabilidad), **the odds are that…** (lo más probable es que…), **I wouldn't be surprised if…** (no me sorprendería que…) y **I doubt (that)…** (dudo que…)." },
  { ex: [["It will probably take two weeks.", "Probablemente tome dos semanas."], ["They probably won't come.", "Probablemente no vengan."], ["The odds are that he'll be promoted.", "Lo más probable es que lo asciendan."], ["I wouldn't be surprised if they got married.", "No me sorprendería que se casaran."], ["I doubt she'll remember.", "Dudo que se acuerde."]] },
  { tip: "**Likely** en inglés es adjetivo: se dice **He is likely to win** o **It's likely that he'll win**, no «he will likely win» en registro formal (aunque en EE. UU. se oye mucho). **Probable** existe, pero se usa menos que **likely**." }
 ],
 vocab: [
  ["be bound to", "expresión", "ser seguro que, estar destinado a", "He's bound to find out."],
  ["be certain to", "expresión", "ser seguro que", "It's certain to be a success."],
  ["be likely to", "expresión", "ser probable que", "Prices are likely to rise."],
  ["be unlikely to", "expresión", "ser poco probable que", "She's unlikely to agree."],
  ["may well", "expresión", "es muy posible que", "You may well be right."],
  ["there's a good chance", "expresión", "hay buenas probabilidades", "There's a good chance we'll win."],
  ["the odds are", "expresión", "lo más probable es", "The odds are he'll be late."],
  ["in all likelihood", "expresión", "con toda probabilidad", "In all likelihood, it'll be cancelled."],
  ["I doubt", "expresión", "dudo (que)", "I doubt it'll work."],
  ["I wouldn't be surprised if", "expresión", "no me sorprendería que", "I wouldn't be surprised if it rained."],
  ["there's no way", "expresión", "es imposible, ni de riesgos", "There's no way he'll pay."],
  ["prediction", "sustantivo", "predicción", "My prediction is that they'll lose."],
  ["forecast", "verbo / sustantivo", "pronosticar; pronóstico", "Economists forecast slow growth."],
  ["chance", "sustantivo", "probabilidad, posibilidad", "What are the chances?"],
  ["guarantee", "verbo / sustantivo", "garantizar; garantía", "I can't guarantee it."],
  ["outcome", "sustantivo", "resultado", "The outcome is uncertain."],
  ["favourite", "sustantivo", "favorito (en una competencia)", "They're the favourites to win."],
  ["underdog", "sustantivo", "el que tiene menos opciones", "Everybody loves the underdog."],
  ["bet", "verbo / sustantivo", "apostar; apuesta", "I bet you'll love it."],
  ["predictable", "adjetivo", "predecible", "The ending was predictable."],
  ["slim chance", "expresión", "posibilidad remota", "There's only a slim chance."],
  ["sooner or later", "expresión", "tarde o temprano", "Sooner or later, they'll find out."]
 ],
 dialogue: {
  title: "¿Quién gana la final?",
  scene: "Antes de la final del fútbol colombiano, Camilo y su compañero Esteban hacen predicciones en la oficina.",
  a: "Camilo", b: "Esteban",
  lines: [
   ["A", "So, who's going to win the final tonight?", "Bueno, ¿quién gana la final esta noche?"],
   ["B", "Nacional, obviously. They're bound to win. They've got the best squad in the country.", "Nacional, obvio. Seguro ganan. Tienen la mejor nómina del país."],
   ["A", "I'm not so sure. Junior are playing at home, and they're unlikely to lose in front of their fans.", "No estoy tan seguro. Junior juega de local y es poco probable que pierda frente a su hinchada."],
   ["B", "That's true, but their best striker is injured. He probably won't play.", "Es cierto, pero su mejor delantero está lesionado. Probablemente no juegue."],
   ["A", "Actually, there's a good chance he'll play. The coach said he trained yesterday.", "De hecho, hay buenas probabilidades de que juegue. El técnico dijo que entrenó ayer."],
   ["B", "Even so, the odds are that Nacional will score first.", "Aun así, lo más probable es que Nacional anote primero."],
   ["A", "Maybe. It may well go to penalties. Both defences are very strong.", "Puede ser. Es muy posible que se vaya a penaltis. Las dos defensas son muy fuertes."],
   ["B", "Penalties? I doubt it. Nacional usually win in normal time.", "¿Penaltis? Lo dudo. Nacional normalmente gana en el tiempo reglamentario."],
   ["A", "Want to bet? If Junior win, you buy lunch for the whole team.", "¿Apostamos? Si gana Junior, tú invitas al almuerzo a todo el equipo."],
   ["B", "Deal. And if Nacional win, you wear my Nacional shirt to the meeting on Monday.", "Trato hecho. Y si gana Nacional, tú vas a la reunión del lunes con mi camiseta de Nacional."],
   ["A", "There's no way I'm wearing that shirt!", "¡Ni de riesgos me pongo esa camiseta!"],
   ["B", "Then you'd better hope Junior win. I wouldn't be surprised if you were wearing green on Monday.", "Entonces más te vale que gane Junior. No me sorprendería que el lunes estuvieras de verde."],
   ["A", "We'll see. Sooner or later, the underdog always wins.", "Ya veremos. Tarde o temprano, el que tiene menos opciones siempre gana."]
  ]
 },
 practice: [
  M("Look at those clouds. It's ___ rain.", ["bound to", "bound", "likely", "certain"], 0),
  M("Prices are ___ to go up again next year.", ["likely", "probable", "probably", "possibly"], 0, "Likely es adjetivo: be likely to."),
  M("¿Cuál está bien ordenada?", ["It probably won't rain.", "It won't probably rain.", "It probably will not to rain.", "Probably it won't to rain."], 0),
  F("She's very tired. I ___ she'll come to the party. (dudo)", ["doubt"]),
  L("Economists say inflation is unlikely to fall this year, but there's a good chance it will start to go down next spring.", "¿Qué podría pasar la próxima primavera?", ["Que la inflación empiece a bajar", "Que la inflación suba", "Que no cambie nada", "Que caiga este año"], 0),
  O("There's a good chance that we'll finish the project on time.")
 ],
 more: [
  R("He's bound to find out sooner or later.", "Tarde o temprano se va a enterar."),
  R("I wouldn't be surprised if they got married.", "No me sorprendería que se casaran."),
  D("The odds are that she'll get the job."),
  D("In all likelihood, the event will be cancelled."),
  M("Ordena de más seguro a menos seguro:", ["bound to → likely to → might → unlikely to", "might → bound to → unlikely to → likely to", "likely to → unlikely to → bound to → might", "unlikely to → might → likely to → bound to"], 0),
  M("—Will they lower the price? —There's ___ way. They never give discounts.", ["no", "not", "any", "none"], 0),
  L("The company is likely to announce job cuts next week, and I wouldn't be surprised if the CEO resigned.", "¿Qué no le sorprendería?", ["Que el gerente renunciara", "Que contrataran gente", "Que subieran los salarios", "Que cerraran la empresa"], 0),
  W("Haz predicciones sobre el futuro de tu ciudad o tu profesión en los próximos diez años (mínimo 100 palabras). Usa al menos cinco expresiones de probabilidad distintas (bound to, likely to, may well, there's a good chance, unlikely to, I doubt…).", 100, [["bound to", "certain to"], ["likely to", "unlikely to"], ["may well", "there's a good chance", "the odds are", "in all likelihood"], ["i doubt", "i wouldn't be surprised", "there's no way", "probably won't"]])
 ],
 exam: M("With all this traffic, we're ___ to miss the flight.", ["bound", "likely that", "probable", "sure that"], 0),
 exam2: F("She's ___ to accept the job. The salary is too low. (poco probable)", ["unlikely"])
},
/* ───────── Día 34 ───────── */
{
 id: "b2-u7-l4",
 title: "Enfatizar: oraciones hendidas e inversión básica",
 goal: "Destacar la información más importante de una frase al hablar y al escribir.",
 theory: [
  { p: "Las **oraciones hendidas** (cleft sentences) ponen el foco en una parte de la frase. Con **What…**: **What I need is a holiday** · **What annoys me is the noise** · **What we did was call the police**. Con **It is / was… that / who…**: **It was my sister who told me** · **It's the price that worries me**. Y con **All**: **All I want is some peace** (lo único que quiero)." },
  { ex: [["What I love about Medellín is the weather.", "Lo que me encanta de Medellín es el clima."], ["What surprised me was how friendly people were.", "Lo que me sorprendió fue lo amable que era la gente."], ["It was Carlos who broke the printer, not me.", "Fue Carlos quien dañó la impresora, no yo."], ["It's not the money that matters; it's the time.", "No es la plata lo que importa; es el tiempo."], ["All I asked for was a little respect.", "Lo único que pedí fue un poco de respeto."]] },
  { p: "La **inversión** (auxiliar antes del sujeto) da un tono enfático o formal después de expresiones negativas: **Never have I seen such a mess** · **Not only did he lie, but he also blamed me** · **Rarely do we get such good weather** · **Hardly had we arrived when it started to rain** · **Under no circumstances should you open this door**." },
  { ex: [["Never have I eaten such a delicious ajiaco.", "Nunca he comido un ajiaco tan delicioso."], ["Not only is it cheap, but it's also very good.", "No solo es barato, sino que además es muy bueno."], ["Rarely do you see a sunset like this.", "Rara vez se ve un atardecer así."], ["Under no circumstances should you share your password.", "Bajo ninguna circunstancia debes compartir tu clave."], ["Only then did I realize my mistake.", "Solo entonces me di cuenta de mi error."]] },
  { tip: "En **What we did was…** el verbo que sigue va en forma base o con to: **What we did was (to) call the police.** Y la inversión solo ocurre cuando la expresión negativa va **al principio**: **I have never seen…** (normal) / **Never have I seen…** (enfático)." }
 ],
 vocab: [
  ["What I need is…", "expresión", "Lo que necesito es…", "What I need is a coffee."],
  ["It was … who…", "expresión", "Fue … quien…", "It was Ana who called."],
  ["All I want is…", "expresión", "Lo único que quiero es…", "All I want is to sleep."],
  ["The thing is…", "expresión", "El asunto es que…", "The thing is, I can't afford it."],
  ["The reason why… is that…", "expresión", "La razón por la que… es que…", "The reason why I left is that I was tired."],
  ["never have I", "expresión", "nunca he (enfático)", "Never have I been so happy."],
  ["not only… but also", "expresión", "no solo… sino también", "Not only is she smart, but she's also kind."],
  ["rarely", "adverbio", "rara vez", "Rarely do I eat meat."],
  ["hardly … when", "expresión", "apenas … cuando", "Hardly had I sat down when the phone rang."],
  ["under no circumstances", "expresión", "bajo ninguna circunstancia", "Under no circumstances should you leave."],
  ["only then", "expresión", "solo entonces", "Only then did I understand."],
  ["emphasis", "sustantivo", "énfasis", "Put the emphasis on the result."],
  ["highlight", "verbo", "destacar, resaltar", "I'd like to highlight two points."],
  ["annoy", "verbo", "molestar, fastidiar", "What annoys me is the noise."],
  ["impress", "verbo", "impresionar", "What impressed me was the service."],
  ["mess", "sustantivo", "desorden, lío", "Never have I seen such a mess."],
  ["breathtaking", "adjetivo", "impresionante, que quita el aliento", "The view was breathtaking."],
  ["outstanding", "adjetivo", "sobresaliente, excepcional", "The service was outstanding."],
  ["rude", "adjetivo", "grosero", "What I can't stand is rude people."],
  ["stand", "verbo", "soportar (can't stand)", "I can't stand waiting."],
  ["matter", "verbo", "importar", "It's the effort that matters."],
  ["realize", "verbo", "darse cuenta", "Only then did I realize."]
 ],
 dialogue: {
  title: "La peor reunión del año",
  scene: "Después de una reunión desastrosa con un cliente, Valeria se desahoga con su colega Tomás en la cafetería.",
  a: "Tomás", b: "Valeria",
  lines: [
   ["A", "You look exhausted. What happened in the meeting?", "Te ves agotada. ¿Qué pasó en la reunión?"],
   ["B", "Never have I had such a terrible meeting. Not only was the client late, but he also forgot the documents.", "Nunca había tenido una reunión tan terrible. No solo llegó tarde el cliente, sino que además olvidó los documentos."],
   ["A", "Oh no. And the presentation?", "Ay no. ¿Y la presentación?"],
   ["B", "What really annoyed me was that the projector didn't work. It was the third time this month!", "Lo que más me molestó fue que el proyector no funcionó. ¡Era la tercera vez este mes!"],
   ["A", "It's the IT department that should fix that, not you.", "Es el departamento de sistemas el que debería arreglar eso, no tú."],
   ["B", "I know. What I did was show the slides on my laptop. But the screen was tiny.", "Ya sé. Lo que hice fue mostrar las diapositivas en mi portátil. Pero la pantalla era diminuta."],
   ["A", "Did he like the proposal at least?", "¿Al menos le gustó la propuesta?"],
   ["B", "Hardly had I started when he interrupted me and asked about the price.", "Apenas había empezado cuando me interrumpió y preguntó por el precio."],
   ["A", "Typical. All they care about is money.", "Típico. Lo único que les importa es la plata."],
   ["B", "Exactly. But then something strange happened. It was his assistant who saved the meeting.", "Exacto. Pero luego pasó algo raro. Fue su asistente quien salvó la reunión."],
   ["A", "Really? How?", "¿En serio? ¿Cómo?"],
   ["B", "She said: 'What we need is exactly this.' Only then did he listen properly.", "Dijo: «Lo que necesitamos es exactamente esto». Solo entonces él escuchó bien."],
   ["A", "So, did you get the contract?", "¿Y entonces, conseguiste el contrato?"],
   ["B", "We did! What I need now is a very big coffee.", "¡Sí! Lo que necesito ahora es un café bien grande."]
  ]
 },
 practice: [
  M("___ I need right now is a long holiday.", ["What", "That", "Which", "It"], 0),
  M("It was my brother ___ told me the news.", ["who", "what", "which", "whom he"], 0),
  M("Never ___ such a beautiful place.", ["have I seen", "I have seen", "I saw", "did I saw"], 0, "Never al inicio → auxiliar + sujeto."),
  F("Not only ___ he late, but he also forgot the keys. (fue / llegó)", ["was"]),
  L("What surprised me most about the trip was not the beaches, but the food. Never have I eaten so much fresh fish.", "¿Qué fue lo que más le sorprendió?", ["La comida", "Las playas", "El clima", "La gente"], 0),
  O("What I love about my job is the people I work with.")
 ],
 more: [
  R("All I want is a quiet weekend.", "Lo único que quiero es un fin de semana tranquilo."),
  R("It was the price that worried us.", "Fue el precio lo que nos preocupó."),
  D("Under no circumstances should you open this door."),
  D("Rarely do we see such dedication."),
  M("Transforma: «The noise annoys me.» →", ["What annoys me is the noise.", "What annoy me is the noise.", "It annoys me what the noise.", "That annoys me is the noise."], 0),
  M("Hardly had we arrived ___ it started to rain.", ["when", "than", "that", "then"], 0, "Hardly … when; No sooner … than."),
  L("It wasn't the long hours that made me quit. What I couldn't stand was my boss shouting at everybody.", "¿Por qué renunció?", ["Porque su jefe le gritaba a todos", "Por las jornadas largas", "Por el salario", "Por el transporte"], 0),
  W("Escribe una reseña enfática de un lugar, un servicio o una experiencia muy buena o muy mala (mínimo 100 palabras). Usa al menos dos oraciones con What… is / was, una con It was… who / that y dos inversiones (Never have I…, Not only…, Rarely…).", 100, [["what i", "what we", "what really", "what surprised", "what annoyed", "what impressed"], ["it was", "it's", "it is"], ["never have i", "not only", "rarely do", "rarely have", "hardly had", "only then", "under no circumstances"]])
 ],
 exam: M("___ annoys me most is people who talk during films.", ["What", "That", "It", "Which"], 0),
 exam2: F("Not only ___ she speak four languages, but she also plays the piano. (auxiliar)", ["does"])
},
/* ───────── Día 35 ───────── */
{
 id: "b2-u7-l5",
 title: "Adjetivos compuestos y usos de get",
 goal: "Describir con adjetivos compuestos y usar get con sus significados más frecuentes.",
 theory: [
  { p: "Los **adjetivos compuestos** unen dos palabras con guion. Con números y medidas, el sustantivo va en **singular**: **a two-hour drive** (no «two-hours»), **a five-star hotel**, **a ten-year-old girl**, **a 20-minute walk**. Otros muy comunes describen personas o cosas: **well-known, good-looking, hard-working, open-minded, self-confident, last-minute, old-fashioned, short-term, world-famous, user-friendly**." },
  { ex: [["It's a three-hour flight to Mexico City.", "Es un vuelo de tres horas a Ciudad de México."], ["We stayed in a five-star hotel.", "Nos quedamos en un hotel de cinco estrellas."], ["She's a hard-working, open-minded manager.", "Es una gerente trabajadora y de mente abierta."], ["The app is very user-friendly.", "La aplicación es muy fácil de usar."], ["He's a world-famous chef from Cartagena.", "Es un chef de Cartagena famoso en todo el mundo."]] },
  { p: "**Get** tiene muchos usos: **get + adjetivo** = volverse, ponerse (**get tired, get angry, get better, get dark**); **get + participio** = como una pasiva informal o un cambio (**get married, get lost, get fired, get promoted, get stuck, get dressed**); **get + lugar** = llegar (**get home**); **get someone to do** = conseguir que alguien haga (**I got him to help me**); y **get** = recibir, conseguir, entender (**I get it**)." },
  { ex: [["It's getting late. Let's go.", "Se está haciendo tarde. Vámonos."], ["They got married in Cartagena.", "Se casaron en Cartagena."], ["He got fired for being late every day.", "Lo echaron por llegar tarde todos los días."], ["We got stuck in traffic for two hours.", "Nos quedamos atascados en el tráfico dos horas."], ["I finally got my landlord to fix the shower.", "Por fin logré que el arrendador arreglara la ducha."]] },
  { tip: "Error típico: «a two-weeks holiday». En el adjetivo compuesto el número no hace plural: **a two-week holiday**. Pero sin guion sí: **The holiday lasted two weeks.**" }
 ],
 vocab: [
  ["well-known", "adjetivo", "conocido, famoso", "A well-known writer."],
  ["good-looking", "adjetivo", "atractivo, guapo", "A good-looking actor."],
  ["hard-working", "adjetivo", "trabajador", "She's very hard-working."],
  ["open-minded", "adjetivo", "de mente abierta", "My grandparents are open-minded."],
  ["self-confident", "adjetivo", "seguro de sí mismo", "He's very self-confident."],
  ["old-fashioned", "adjetivo", "anticuado, pasado de moda", "His ideas are old-fashioned."],
  ["short-term", "adjetivo", "a corto plazo", "A short-term solution."],
  ["long-term", "adjetivo", "a largo plazo", "A long-term plan."],
  ["user-friendly", "adjetivo", "fácil de usar", "The website is user-friendly."],
  ["world-famous", "adjetivo", "famoso en todo el mundo", "A world-famous singer."],
  ["two-hour", "adjetivo", "de dos horas", "A two-hour meeting."],
  ["five-star", "adjetivo", "de cinco estrellas", "A five-star restaurant."],
  ["get tired", "expresión", "cansarse", "I get tired easily."],
  ["get better", "expresión", "mejorar", "Your English is getting better."],
  ["get married", "expresión", "casarse", "They got married last year."],
  ["get lost", "expresión", "perderse", "We got lost in the old city."],
  ["get fired", "expresión", "ser despedido", "He got fired yesterday."],
  ["get promoted", "expresión", "ser ascendido", "She got promoted to manager."],
  ["get stuck", "expresión", "quedarse atascado", "We got stuck in the lift."],
  ["get someone to do", "expresión", "conseguir que alguien haga", "I got my son to clean his room."],
  ["get it", "expresión", "entender", "Now I get it!"],
  ["get on with", "verbo", "llevarse bien con", "I get on well with my boss."]
 ],
 dialogue: {
  title: "El nuevo jefe",
  scene: "Juliana y su amigo Daniel hablan del nuevo gerente que llegó a la empresa de Juliana.",
  a: "Daniel", b: "Juliana",
  lines: [
   ["A", "So, what's your new boss like?", "Bueno, ¿cómo es tu nuevo jefe?"],
   ["B", "He's a well-known engineer from Bogotá, very hard-working and quite open-minded.", "Es un ingeniero conocido de Bogotá, muy trabajador y bastante abierto de mente."],
   ["A", "Sounds good. What happened to the old one?", "Suena bien. ¿Qué pasó con el anterior?"],
   ["B", "He got promoted to the head office in Miami. He's really self-confident, so it's perfect for him.", "Lo ascendieron a la sede principal en Miami. Es muy seguro de sí mismo, así que le queda perfecto."],
   ["A", "And do you get on with the new guy?", "¿Y te la llevas bien con el nuevo?"],
   ["B", "So far, yes. On his first day we had a five-hour meeting, and he didn't get tired at all!", "Hasta ahora sí. El primer día tuvimos una reunión de cinco horas ¡y no se cansó para nada!"],
   ["A", "Five hours? I would have got bored after twenty minutes.", "¿Cinco horas? Yo me habría aburrido a los veinte minutos."],
   ["B", "Ha ha. But he has some good ideas. He wants a long-term plan, not short-term solutions.", "Jaja. Pero tiene buenas ideas. Quiere un plan a largo plazo, no soluciones a corto plazo."],
   ["A", "Is he changing anything?", "¿Está cambiando algo?"],
   ["B", "He got the company to buy a new system. The old one was so old-fashioned that we always got stuck.", "Logró que la empresa comprara un sistema nuevo. El viejo era tan anticuado que siempre nos quedábamos atascados."],
   ["A", "Is the new system better?", "¿Y el nuevo sistema es mejor?"],
   ["B", "Much better. It's really user-friendly. Even my colleague Hernán, who always gets lost with technology, gets it.", "Mucho mejor. Es muy fácil de usar. Hasta mi compañero Hernán, que siempre se pierde con la tecnología, lo entiende."],
   ["A", "Sounds like things are getting better.", "Parece que las cosas están mejorando."],
   ["B", "Definitely. Now I just need to get him to give me a two-week holiday!", "Definitivamente. ¡Ahora solo tengo que lograr que me dé dos semanas de vacaciones!"]
  ]
 },
 practice: [
  M("It's a ___ drive from Bogotá to Medellín.", ["nine-hour", "nine-hours", "nines-hour", "nine-hour's"], 0, "En el adjetivo compuesto el sustantivo va en singular."),
  M("She's very ___. She works twelve hours a day.", ["hard-working", "hard-worked", "working-hard", "hardly working"], 0),
  M("It's getting ___. Let's turn on the lights.", ["dark", "darkness", "darkly", "darken"], 0),
  F("They got ___ in a small church in Barichara. (casarse)", ["married"]),
  L("We got lost on the way to the hotel and got stuck in traffic for two hours. When we finally got there, we were exhausted.", "¿Qué les pasó en el camino?", ["Se perdieron y se quedaron atascados en el tráfico", "Se les dañó el carro", "Perdieron el vuelo", "Se les olvidó la reserva"], 0),
  O("I finally got my landlord to fix the shower.")
 ],
 more: [
  R("We stayed in a five-star hotel.", "Nos quedamos en un hotel de cinco estrellas."),
  R("I don't get on with my neighbour.", "No me la llevo bien con mi vecino."),
  D("He got promoted after only six months."),
  D("The new app is very user-friendly."),
  M("¿Cuál es correcta?", ["We had a two-week holiday.", "We had a two-weeks holiday.", "We had a two week's holiday.", "We had a holiday of two-week."], 0),
  M("I explained it three times, and finally he ___ it.", ["got", "became", "made", "did"], 0),
  L("My grandfather is very open-minded for a ninety-year-old man. He uses social media and he isn't old-fashioned at all.", "¿Cómo es el abuelo?", ["De mente abierta y nada anticuado", "Muy anticuado", "Muy tímido", "Muy estricto"], 0),
  W("Describe a una persona importante en tu vida y un viaje o experiencia que compartieron (mínimo 100 palabras). Usa al menos cuatro adjetivos compuestos y cuatro usos distintos de get.", 100, [["well-known", "good-looking", "hard-working", "open-minded", "self-confident", "old-fashioned", "short-term", "long-term", "user-friendly", "world-famous", "-hour", "-day", "-year-old", "-star", "-week", "-minute"], ["get", "got", "getting", "gets"]])
 ],
 exam: M("The airport is a ___ ride from the hotel.", ["twenty-minute", "twenty-minutes", "twenties-minute", "twenty-minute's"], 0),
 exam2: F("He got ___ because he was always late. (despedido)", ["fired", "sacked"])
}
],
/* ───────── Quiz de la unidad 7 ───────── */
quiz: [
 M("I ___ call you, but I didn't have your number.", ["was going to", "am going to", "would have", "was about"], 0),
 M("You ___ brought food. We had already ordered pizza.", ["needn't have", "didn't need", "mustn't have", "couldn't"], 0),
 M("With so many fans, the concert is ___ sell out.", ["bound to", "likely that", "probable to", "sure that"], 0),
 M("___ I can't stand is people who are always late.", ["What", "That", "It", "Which"], 0),
 M("It was a ___ journey, so we stopped twice.", ["six-hour", "six-hours", "sixes-hour", "six-hour's"], 0),
 F("Never ___ I seen so many people in one place. (auxiliar)", ["have"]),
 L("We were supposed to land at eight, but there was a storm. In the end we landed at midnight, and I got home at two.", "¿A qué hora llegó a la casa?", ["A las dos", "A las ocho", "A medianoche", "A las diez"], 0),
 L("It wasn't the salary that made me accept the job. What convinced me was the chance to work from home.", "¿Qué lo convenció?", ["La posibilidad de trabajar desde casa", "El salario", "El jefe", "La oficina"], 0),
 W("Escribe un correo a un amigo contándole un cambio importante en tu trabajo o en tu vida (mínimo 120 palabras): qué ibas a hacer y qué pasó (was going to, was supposed to), qué te obligaron o te dejaron hacer (made me, let me, allowed to), qué es probable que pase ahora (bound to, likely to, may well) y lo que más te sorprendió (What surprised me was…).", 120, [["was going to", "was supposed to", "was about to"], ["made me", "let me", "allowed to", "needn't have", "didn't need to"], ["bound to", "likely to", "may well", "there's a good chance", "unlikely to"], ["what surprised me", "what i", "it was", "never have i", "not only"]]),
 O("I was about to leave when my boss called me into his office."),
 O("What I need is a long weekend in a five-star hotel.")
],
pool: [
 M("The bridge ___ opened last year, but it still isn't finished.", ["was to have", "was about to", "is supposed", "would have"], 0),
 M("At my school we weren't ___ to wear jewellery.", ["allowed", "let", "made", "supposed"], 0),
 M("My mother made me ___ my room every Saturday.", ["clean", "to clean", "cleaning", "cleaned"], 0),
 M("He's very lazy. He's ___ to finish on time.", ["unlikely", "likely not", "improbable", "bound not"], 0),
 M("It was my colleague ___ found the mistake.", ["who", "what", "which", "whom he"], 0),
 M("I explained it twice, but he still didn't ___ it.", ["get", "make", "do", "become"], 0),
 F("Hardly had I sat down ___ the phone rang.", ["when"]),
 F("There's a good ___ that it'll rain tomorrow. (probabilidad)", ["chance"]),
 L("I didn't need to buy a ticket because my friend works at the theatre, so he got me in for free.", "¿Por qué no compró boleta?", ["Su amigo trabaja en el teatro y lo hizo entrar gratis", "Ya tenía boleta", "Era gratis para todos", "No fue al teatro"], 0),
 L("Not only did they arrive late, but they also brought three uninvited friends.", "¿Qué hicieron, además de llegar tarde?", ["Llevaron tres amigos sin invitación", "Olvidaron el regalo", "Se fueron temprano", "No saludaron"], 0),
 L("He's a well-known, hard-working doctor who got promoted to director of the hospital last month.", "¿Qué pasó el mes pasado?", ["Lo ascendieron a director del hospital", "Lo despidieron", "Se casó", "Se pensionó"], 0),
 W("Escribe un artículo corto (mínimo 120 palabras) sobre cómo han cambiado las reglas para los jóvenes desde tu infancia. Usa allowed to, made / let, supposed to, una oración hendida (What… is) y al menos una expresión de probabilidad sobre el futuro.", 120, [["allowed to"], ["made", "let"], ["supposed to"], ["what"], ["likely to", "bound to", "may well", "unlikely to", "there's a good chance"]]),
 O("You needn't have waited for me."),
 O("It's bound to rain this afternoon."),
 O("Not only is it cheap, but it's also delicious.")
]
};
