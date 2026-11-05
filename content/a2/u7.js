/* A2 · Unidad 7 · Antes y ahora (Días 31–35). Se arma con: node tools/build-level.js 1 content/a2 */
const M = (q, o, a, x) => ({ t: "mc", q, o, a, ...(x ? { x } : {}) }), F = (q, ans) => ({ t: "fill", q, ans }),
  L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), O = text => ({ t: "oral", text }), D = say => ({ t: "dict", say }),
  W = (q, min, keys) => ({ t: "write", q, min, keys }), R = (s, es) => ({ t: "order", words: s.split(" "), es });

module.exports = {
n: 7,
title: "Antes y ahora",
lessons: [
/* ───────── Día 31 ───────── */
{
 id: "a2-u7-l1",
 title: "Used to: cómo era tu vida antes",
 goal: "Hablar de costumbres y situaciones del pasado que ya no son así.",
 theory: [
  { p: "**Used to** + verbo base expresa algo que hacías **antes, de forma repetida**, y que ya no haces, o algo que era así y cambió: **I used to play soccer every weekend** (antes jugaba; ya no). Es igual para todas las personas: I / you / she / they **used to**." },
  { ex: [["I used to live in Cali.", "Antes vivía en Cali."], ["My dad used to smoke, but he stopped.", "Mi papá fumaba, pero lo dejó."], ["There used to be a cinema here.", "Aquí había un cine."], ["We used to walk to school.", "Íbamos al colegio a pie."], ["She used to have long hair.", "Ella tenía el pelo largo."]] },
  { p: "Negativo: **didn't use to** (sin **-d**): **I didn't use to like vegetables.** Pregunta: **Did you use to…?** — **Yes, I did. / No, I didn't.** Para decir cómo es ahora usa el presente: **Now I usually…** · **These days…** · **I don't … any more**." },
  { ex: [["I didn't use to drink coffee.", "Antes no tomaba café."], ["Did you use to play an instrument?", "¿Tocabas algún instrumento?"], ["Now I drink three cups a day.", "Ahora tomo tres tazas al día."], ["I don't play the guitar any more.", "Ya no toco la guitarra."], ["What did you use to do after school?", "¿Qué hacías después del colegio?"]] },
  { tip: "Para una acción que pasó **una sola vez** no uses used to: **I went to Spain in 2015** (no «I used to go to Spain in 2015»). Used to es para costumbres o estados que duraron un tiempo." }
 ],
 vocab: [
  ["used to", "expresión", "solía, antes (costumbre del pasado)", "I used to live with my parents."],
  ["didn't use to", "expresión", "antes no (solía no)", "I didn't use to like tea."],
  ["any more", "expresión", "ya no (al final de la frase)", "I don't smoke any more."],
  ["these days", "expresión", "hoy en día, últimamente", "These days I work from home."],
  ["childhood", "sustantivo", "infancia, niñez", "I had a happy childhood."],
  ["grow up", "verbo", "crecer, criarse", "I grew up in a small town."],
  ["neighbourhood", "sustantivo", "barrio", "My old neighbourhood was quiet."],
  ["toy", "sustantivo", "juguete", "My favourite toy was a red bike."],
  ["landline", "sustantivo", "teléfono fijo", "We used to have a landline."],
  ["letter", "sustantivo", "carta", "People used to write letters."],
  ["record player", "expresión", "tocadiscos", "My grandfather used to have a record player."],
  ["typewriter", "sustantivo", "máquina de escribir", "My mother used to work with a typewriter."],
  ["shy", "adjetivo", "tímido", "I used to be very shy."],
  ["chubby", "adjetivo", "gordito, rellenito", "He used to be a chubby baby."],
  ["change", "verbo", "cambiar", "The city has changed a lot."],
  ["habit", "sustantivo", "hábito, costumbre", "Smoking was a bad habit."],
  ["stop", "verbo", "dejar de (+ -ing)", "She stopped eating meat."],
  ["quiet", "adjetivo", "tranquilo, silencioso", "The street used to be quiet."],
  ["crowded", "adjetivo", "lleno de gente", "Now it's very crowded."],
  ["in the past", "expresión", "en el pasado, antes", "In the past, few people had cars."],
  ["nowadays", "adverbio", "hoy en día", "Nowadays everybody has a phone."],
  ["farm", "sustantivo", "finca, granja", "We used to spend holidays on a farm."]
 ],
 dialogue: {
  title: "Fotos viejas",
  scene: "Mariana mira un álbum de fotos con su abuelo Gustavo, que creció en Bogotá en los años sesenta.",
  a: "Mariana", b: "Abuelo",
  lines: [
   ["A", "Grandpa, is this you? You used to have so much hair!", "Abuelo, ¿este eres tú? ¡Tenías muchísimo pelo!"],
   ["B", "Ha ha, yes! I was twenty in that photo. I used to wear my hair long.", "¡Jaja, sí! Tenía veinte en esa foto. Me dejaba el pelo largo."],
   ["A", "Where did you use to live?", "¿Dónde vivías?"],
   ["B", "In La Candelaria. The neighbourhood used to be very quiet. There weren't many cars.", "En La Candelaria. El barrio era muy tranquilo. No había muchos carros."],
   ["A", "How did you use to get to school?", "¿Cómo ibas al colegio?"],
   ["B", "We used to walk. Or sometimes we took the tram. There used to be a tram in Bogotá.", "Caminábamos. O a veces tomábamos el tranvía. En Bogotá había tranvía."],
   ["A", "Really? I didn't know that! Did you use to have a TV?", "¿En serio? ¡No sabía! ¿Tenían televisor?"],
   ["B", "No, we didn't. We used to listen to the radio every night with the whole family.", "No. Escuchábamos la radio todas las noches con toda la familia."],
   ["A", "And did you use to call your friends?", "¿Y llamabas a tus amigos?"],
   ["B", "Not often. Only rich families used to have a phone. We used to write letters!", "No mucho. Solo las familias ricas tenían teléfono. ¡Escribíamos cartas!"],
   ["A", "Wow. Now I send fifty messages a day.", "Uy. Yo ahora mando cincuenta mensajes al día."],
   ["B", "I know! Life used to be slower, but it was very happy.", "¡Ya sé! La vida era más lenta, pero era muy feliz."],
   ["A", "Do you miss those days?", "¿Extrañas esa época?"],
   ["B", "Sometimes. But I don't miss writing letters. I love video calls with you!", "A veces. Pero no extraño escribir cartas. ¡Me encantan las videollamadas contigo!"]
  ]
 },
 practice: [
  M("When I was a child, I ___ play in the street with my friends.", ["used to", "use to", "was used", "am used to"], 0),
  M("I ___ like vegetables, but now I love them.", ["didn't use to", "didn't used to", "don't used to", "wasn't use to"], 0, "En negativo: didn't use to (sin -d)."),
  M("___ you use to have a pet when you were young?", ["Did", "Do", "Were", "Used"], 0),
  F("There ___ ___ be a cinema on this street. Now it's a supermarket. (antes había)", ["used to"]),
  L("When I was a teenager, I used to play the guitar in a band, but I don't play any more.", "¿Qué hacía de adolescente?", ["Tocaba la guitarra en una banda", "Cantaba en un coro", "Jugaba fútbol", "Bailaba salsa"], 0),
  O("When I was a child, I used to spend my holidays on my grandparents' farm.")
 ],
 more: [
  R("Did you use to live here?", "¿Antes vivías aquí?"),
  R("My mother used to work in a bank.", "Mi mamá trabajaba en un banco."),
  D("I don't play soccer any more."),
  D("We used to write letters to our friends."),
  M("I ___ to Mexico in 2019. It was a great trip.", ["went", "used to go", "use to go", "was used to go"], 0, "Una sola vez en el pasado → pasado simple."),
  M("My brother used to be shy, but ___ he's very sociable.", ["now", "used", "before", "ago"], 0),
  L("In the past, people used to pay with cash. Nowadays most people pay with their phones.", "¿Cómo paga la mayoría hoy?", ["Con el celular", "En efectivo", "Con cheque", "Con tarjeta de crédito"], 0),
  W("Escribe cómo era tu vida hace diez o veinte años y cómo es ahora (mínimo 50 palabras). Usa used to, didn't use to y now / these days.", 50, [["used to"], ["didn't use to", "did you use to"], ["now", "these days", "nowadays", "any more"]])
 ],
 exam: M("She ___ have long hair, but now it's very short.", ["used to", "use to", "is used to", "was used"], 0),
 exam2: F("I didn't ___ to like coffee, but now I drink it every day.", ["use"])
},
/* ───────── Día 32 ───────── */
{
 id: "a2-u7-l2",
 title: "Might y may: lo que puede pasar",
 goal: "Decir que algo es posible pero no seguro.",
 theory: [
  { p: "**Might** y **may** + verbo base = **es posible, puede que**: **It might rain this afternoon** (puede que llueva). **I may be late** (puede que llegue tarde). **May** suena un poco más formal. Son iguales para todas las personas: nunca llevan -s." },
  { ex: [["Take an umbrella. It might rain.", "Lleva paraguas. Puede que llueva."], ["I may go to the party, but I'm not sure.", "Puede que vaya a la fiesta, pero no estoy seguro."], ["She might be at home.", "Puede que esté en la casa."], ["We might not have time.", "Puede que no tengamos tiempo."], ["They may move to Canada next year.", "Puede que se muden a Canadá el próximo año."]] },
  { p: "Compara la seguridad: **will** = estoy seguro (**It will be sunny tomorrow**) · **might / may** = es posible (**It might be sunny**) · **won't** = seguro que no. Negativo: **might not / may not** (no se contraen normalmente). Para preguntar se usa más **Do you think…?**: **Do you think it will rain?**" },
  { ex: [["I'll be there at six.", "Estaré allá a las seis (seguro)."], ["I might be there at six.", "Puede que esté allá a las seis."], ["Do you think he'll come?", "¿Crees que venga?"], ["He might not come. He's very busy.", "Puede que no venga. Está muy ocupado."], ["Maybe I'll stay at home.", "Tal vez me quede en la casa."]] },
  { tip: "**Maybe** (una palabra) es un adverbio y va al principio: **Maybe it will rain**. **May be** (dos palabras) es el verbo: **It may be cold**. Las dos significan casi lo mismo, pero se escriben distinto." }
 ],
 vocab: [
  ["might", "verbo modal", "puede que, podría (posibilidad)", "It might rain later."],
  ["may", "verbo modal", "puede que (más formal); poder (permiso)", "I may be late tonight."],
  ["might not", "expresión", "puede que no", "She might not come."],
  ["maybe", "adverbio", "tal vez, quizás", "Maybe we'll go tomorrow."],
  ["perhaps", "adverbio", "quizás (más formal)", "Perhaps he's right."],
  ["probably", "adverbio", "probablemente", "I'll probably stay home."],
  ["definitely", "adverbio", "definitivamente, seguro", "I'll definitely call you."],
  ["sure", "adjetivo", "seguro", "I'm not sure."],
  ["possible", "adjetivo", "posible", "It's possible."],
  ["forecast", "sustantivo", "pronóstico del tiempo", "The forecast says it might rain."],
  ["storm", "sustantivo", "tormenta", "There might be a storm tonight."],
  ["cloudy", "adjetivo", "nublado", "It's cloudy. It might rain."],
  ["picnic", "sustantivo", "pícnic, paseo de olla", "Let's have a picnic."],
  ["umbrella", "sustantivo", "paraguas, sombrilla", "Take an umbrella."],
  ["cancel", "verbo", "cancelar", "They might cancel the game."],
  ["traffic jam", "expresión", "trancón", "There may be a traffic jam."],
  ["decide", "verbo", "decidir", "I haven't decided yet."],
  ["depend on", "verbo", "depender de", "It depends on the weather."],
  ["plan B", "expresión", "plan B, alternativa", "We need a plan B."],
  ["instead", "adverbio", "en cambio, en su lugar", "We might go to the cinema instead."],
  ["I'm not sure yet.", "expresión", "Todavía no estoy seguro.", "—Are you coming? —I'm not sure yet."],
  ["It depends.", "expresión", "Depende.", "—Will you travel? —It depends."]
 ],
 dialogue: {
  title: "Paseo con lluvia",
  scene: "Felipe y Daniela planean un paseo al embalse de Guatavita el sábado, pero el pronóstico no es claro.",
  a: "Felipe", b: "Daniela",
  lines: [
   ["A", "So, are we going to Guatavita on Saturday?", "Bueno, ¿sí vamos a Guatavita el sábado?"],
   ["B", "I'm not sure yet. The forecast says it might rain.", "Todavía no estoy segura. El pronóstico dice que puede llover."],
   ["A", "Might rain or will rain?", "¿Puede llover o va a llover?"],
   ["B", "It says sixty percent. So it may rain in the afternoon.", "Dice sesenta por ciento. Entonces puede que llueva por la tarde."],
   ["A", "Then let's leave early. We might come back before the rain.", "Entonces salgamos temprano. Puede que volvamos antes de la lluvia."],
   ["B", "Good idea. Is Camilo coming with us?", "Buena idea. ¿Camilo viene con nosotros?"],
   ["A", "He might come. He has to work on Saturday morning, but he may finish early.", "Puede que venga. Tiene que trabajar el sábado por la mañana, pero puede que salga temprano."],
   ["B", "OK. And what about lunch?", "Bien. ¿Y el almuerzo?"],
   ["A", "Maybe we can have a picnic. I'll make sandwiches.", "Tal vez podemos hacer un pícnic. Yo hago sándwiches."],
   ["B", "But if it rains, the picnic might be a disaster!", "¡Pero si llueve, el pícnic puede ser un desastre!"],
   ["A", "You're right. We need a plan B. There's a restaurant near the lake.", "Tienes razón. Necesitamos un plan B. Hay un restaurante cerca de la laguna."],
   ["B", "Perfect. And the traffic? There might be a traffic jam on the highway.", "Perfecto. ¿Y el tráfico? Puede que haya trancón en la autopista."],
   ["A", "That's why we're leaving at six!", "¡Por eso vamos a salir a las seis!"],
   ["B", "At six? Then I definitely need to go to bed early on Friday.", "¿A las seis? Entonces definitivamente me tengo que acostar temprano el viernes."]
  ]
 },
 practice: [
  M("Take your jacket. It ___ be cold tonight.", ["might", "mights", "might to", "is might"], 0),
  M("I'm not sure, but I ___ visit my parents this weekend.", ["may", "will definitely", "am", "must"], 0, "No estoy seguro → may / might."),
  M("She ___ come to the meeting. She's sick.", ["might not", "doesn't might", "mightn't to", "not might"], 0),
  F("___ we'll go to the beach. It depends on the weather. (tal vez)", ["maybe", "perhaps"]),
  L("I might change jobs next year. My company may close the office in Cali.", "¿Qué puede pasar con la oficina?", ["Puede que la cierren", "La van a ampliar", "Se va a mudar a Bogotá", "Van a contratar más gente"], 0),
  O("I'm not sure yet. I might stay at home, or I may go to the cinema.")
 ],
 more: [
  R("It might rain this afternoon.", "Puede que llueva esta tarde."),
  R("We may not have enough time.", "Puede que no tengamos suficiente tiempo."),
  D("Maybe I'll call you later."),
  D("The game might be cancelled."),
  M("¿Cuál frase expresa SEGURIDAD?", ["I'll be there at eight.", "I might be there at eight.", "I may be there at eight.", "Maybe I'll be there at eight."], 0),
  M("—Are you coming to the party? —___", ["I might.", "I might to.", "I'm might.", "I mights."], 0),
  L("The forecast says there might be a storm tonight, so the concert in the park may be cancelled.", "¿Qué puede pasar con el concierto?", ["Puede que lo cancelen", "Lo van a cambiar de hora", "Va a ser gratis", "Va a ser en otro parque"], 0),
  W("Escribe sobre tus planes para el próximo año (mínimo 50 palabras): qué es seguro (will / going to) y qué es solo posible (might / may / maybe).", 50, [["might", "may"], ["maybe", "perhaps", "probably"], ["will", "going to", "'ll"]])
 ],
 exam: M("Don't wait for me. I ___ be late.", ["might", "might to", "mights", "am might"], 0),
 exam2: F("He ___ not come today. He has a cold. (puede que no)", ["might", "may"])
},
/* ───────── Día 33 ───────── */
{
 id: "a2-u7-l3",
 title: "Describir con who, which, that y where",
 goal: "Dar información sobre personas, cosas y lugares en una sola frase.",
 theory: [
  { p: "Las oraciones de relativo dicen **de quién o de qué** hablas: **who** para personas, **which** para cosas y animales, **that** para personas o cosas (es muy común al hablar) y **where** para lugares." },
  { ex: [["The woman who lives next door is a doctor.", "La mujer que vive al lado es médica."], ["I have a phone which takes amazing photos.", "Tengo un celular que toma fotos increíbles."], ["This is the man that helped me.", "Este es el hombre que me ayudó."], ["That's the restaurant where we had our first date.", "Ese es el restaurante donde tuvimos nuestra primera cita."], ["A dentist is a person who takes care of your teeth.", "Un dentista es una persona que cuida tus dientes."]] },
  { p: "Son muy útiles para **definir** y para explicar una palabra que no sabes: **It's a thing which you use to open bottles** (un destapador). **It's a place where you can buy medicine** (una droguería). **It's someone who works in a hotel**." },
  { ex: [["It's a machine which washes clothes.", "Es una máquina que lava ropa."], ["It's a place where people watch movies.", "Es un lugar donde la gente ve películas."], ["He's the actor who won the Oscar.", "Es el actor que ganó el Óscar."], ["The book that you lent me was great.", "El libro que me prestaste estaba genial."], ["Do you know a shop where I can fix my phone?", "¿Conoces un sitio donde pueda arreglar mi celular?"]] },
  { tip: "No repitas el sujeto después de who / which: **The man who works here** (no «the man who he works here»). Y nunca uses **what** como relativo: **the car that I bought** (no «the car what I bought»)." }
 ],
 vocab: [
  ["who", "pronombre relativo", "que, quien (personas)", "The girl who sings is my sister."],
  ["which", "pronombre relativo", "que, el cual (cosas)", "The car which is red is mine."],
  ["that", "pronombre relativo", "que (personas o cosas)", "The cake that you made was delicious."],
  ["where", "pronombre relativo", "donde", "The town where I grew up is small."],
  ["someone", "pronombre", "alguien", "I need someone who speaks English."],
  ["something", "pronombre", "algo", "It's something which you use in the kitchen."],
  ["a place where", "expresión", "un lugar donde", "It's a place where you can swim."],
  ["a person who", "expresión", "una persona que", "A pilot is a person who flies planes."],
  ["a thing which", "expresión", "una cosa que", "It's a thing which keeps food cold."],
  ["next door", "expresión", "al lado (vecino)", "The man who lives next door is friendly."],
  ["lend", "verbo", "prestar (dar)", "Can you lend me your pen?"],
  ["borrow", "verbo", "pedir prestado", "Can I borrow your car?"],
  ["fix", "verbo", "arreglar", "Do you know someone who can fix my laptop?"],
  ["bottle opener", "expresión", "destapador", "A bottle opener is a thing which opens bottles."],
  ["fridge", "sustantivo", "nevera", "The fridge is a machine which keeps food cold."],
  ["guess", "verbo", "adivinar", "Guess the word!"],
  ["describe", "verbo", "describir", "Describe the person."],
  ["colleague", "sustantivo", "compañero de trabajo", "She's the colleague who helped me."],
  ["actor", "sustantivo", "actor", "He's the actor who played Batman."],
  ["win", "verbo", "ganar (won en pasado)", "The team that won the cup is from Cali."],
  ["mean", "verbo", "querer decir", "Do you mean the woman who wears glasses?"],
  ["the one", "expresión", "el que, la que", "Which one? The one that's on the table."]
 ],
 dialogue: {
  title: "Adivina la palabra",
  scene: "En una reunión familiar, Sara y su tío Hernán juegan a adivinar palabras sin decirlas.",
  a: "Sara", b: "Tío Hernán",
  lines: [
   ["A", "OK, my turn. It's a person who works in a hospital and helps the doctors.", "Bueno, me toca. Es una persona que trabaja en un hospital y ayuda a los médicos."],
   ["B", "A nurse!", "¡Una enfermera!"],
   ["A", "Yes! Your turn.", "¡Sí! Te toca."],
   ["B", "It's a thing which you use when it rains.", "Es una cosa que usas cuando llueve."],
   ["A", "An umbrella! Easy. Now, it's a place where you can see animals from all over the world.", "¡Un paraguas! Fácil. Ahora, es un lugar donde puedes ver animales de todo el mundo."],
   ["B", "A farm?", "¿Una finca?"],
   ["A", "No. It's a place where the animals live in a big park and people pay to see them.", "No. Es un lugar donde los animales viven en un parque grande y la gente paga para verlos."],
   ["B", "Ah, a zoo! OK. He's the singer who sings 'Hips Don't Lie'… no, sorry, she!", "¡Ah, un zoológico! Bueno. Es el cantante que canta «Hips Don't Lie»… no, perdón, ¡la cantante!"],
   ["A", "Ha ha, Shakira! That's not fair, you said the song.", "¡Jaja, Shakira! Eso no vale, dijiste la canción."],
   ["B", "OK, OK. It's an object that keeps food and drinks cold.", "Bueno, bueno. Es un objeto que mantiene fríos la comida y las bebidas."],
   ["A", "The fridge! Hmm… it's the city where you and Grandma met.", "¡La nevera! Mmm… es la ciudad donde tú y la abuela se conocieron."],
   ["B", "Popayán! That's the place where I fell in love.", "¡Popayán! Ese es el lugar donde me enamoré."],
   ["A", "Aww. OK, last one. It's the person who always wins this game…", "Ay, qué lindo. Bueno, la última. Es la persona que siempre gana este juego…"],
   ["B", "Me!", "¡Yo!"]
  ]
 },
 practice: [
  M("A chef is a person ___ cooks in a restaurant.", ["who", "which", "where", "what"], 0),
  M("This is the town ___ I was born.", ["where", "which", "who", "that it"], 0),
  M("I lost the bag ___ my mother gave me.", ["that", "who", "where", "what"], 0),
  F("A key is a thing ___ opens a door. (que, cosa)", ["which", "that"]),
  L("The woman who lives next door is a nurse, and the man who lives upstairs is a taxi driver.", "¿Qué hace la vecina de al lado?", ["Es enfermera", "Es taxista", "Es profesora", "Es médica"], 0),
  O("It's a place where you can buy bread and cakes.")
 ],
 more: [
  R("That's the restaurant where we met.", "Ese es el restaurante donde nos conocimos."),
  R("I have a friend who speaks Japanese.", "Tengo un amigo que habla japonés."),
  D("The book that you lent me was very good."),
  D("It's a machine which washes the dishes."),
  M("¿Cuál frase es correcta?", ["The man who works here is very nice.", "The man who he works here is very nice.", "The man what works here is very nice.", "The man which works here is very nice."], 0),
  M("Do you know a shop ___ I can fix my phone?", ["where", "who", "which", "what"], 0),
  L("I need a phone which has a good camera and a battery that lasts all day.", "¿Qué necesita?", ["Un celular con buena cámara y buena batería", "Un computador portátil", "Una cámara profesional", "Un cargador"], 0),
  W("Describe a cinco personas, cosas o lugares importantes de tu vida usando who, which, that y where (mínimo 50 palabras). Ejemplo: «My sister is the person who…».", 50, [["who"], ["which", "that"], ["where"]])
 ],
 exam: M("A pharmacy is a place ___ you can buy medicine.", ["where", "which", "who", "what"], 0),
 exam2: F("The man ___ fixed my car was very honest. (que, persona)", ["who", "that"])
},
/* ───────── Día 34 ───────── */
{
 id: "a2-u7-l4",
 title: "La pasiva sencilla: cómo se hacen las cosas",
 goal: "Explicar dónde y cómo se hace algo, y quién hizo algo famoso.",
 theory: [
  { p: "La **voz pasiva** pone el foco en la cosa, no en quién la hace. Se forma con **be + participio**. Presente: **is / are + participio** → **Coffee is grown in Colombia.** Pasado: **was / were + participio** → **The house was built in 1950.**" },
  { ex: [["Coffee is grown in the mountains.", "El café se cultiva en las montañas."], ["These shoes are made in Bucaramanga.", "Estos zapatos se hacen en Bucaramanga."], ["Spanish is spoken in twenty countries.", "El español se habla en veinte países."], ["The bridge was built in 1920.", "El puente fue construido en 1920."], ["The windows were cleaned yesterday.", "Las ventanas se limpiaron ayer."]] },
  { p: "Si quieres decir **quién** lo hizo, usa **by**: **One Hundred Years of Solitude was written by Gabriel García Márquez.** Pero muchas veces no se dice, porque no importa o no se sabe: **My bike was stolen.** (Me robaron la bicicleta.)" },
  { ex: [["The song was written by Carlos Vives.", "La canción fue escrita por Carlos Vives."], ["The telephone was invented by Bell.", "El teléfono fue inventado por Bell."], ["My phone was stolen on the bus.", "Me robaron el celular en el bus."], ["Is breakfast included?", "¿El desayuno está incluido?"], ["The meeting was cancelled.", "La reunión fue cancelada."]] },
  { tip: "En español es muy común **se** + verbo (**se habla, se vende, se cultiva**). En inglés eso casi siempre se dice con la pasiva: **English is spoken here**, **Houses are sold here**." }
 ],
 vocab: [
  ["be made", "expresión", "ser hecho, fabricarse", "It's made in China."],
  ["be grown", "expresión", "cultivarse", "Bananas are grown in Urabá."],
  ["be built", "expresión", "ser construido", "The church was built in 1700."],
  ["be written", "expresión", "ser escrito", "The book was written in 1967."],
  ["be invented", "expresión", "ser inventado", "The radio was invented in the 1890s."],
  ["be spoken", "expresión", "hablarse", "English is spoken all over the world."],
  ["be sold", "expresión", "venderse", "Tickets are sold online."],
  ["be stolen", "expresión", "ser robado", "My wallet was stolen."],
  ["be produced", "expresión", "producirse", "Flowers are produced near Bogotá."],
  ["be painted", "expresión", "ser pintado", "This picture was painted by Botero."],
  ["by", "preposición", "por (quién hace la acción)", "It was written by García Márquez."],
  ["grow", "verbo", "cultivar; crecer (grown)", "They grow coffee and plantain."],
  ["pick", "verbo", "recoger (cosecha)", "The coffee is picked by hand."],
  ["dry", "verbo", "secar", "The beans are dried in the sun."],
  ["roast", "verbo", "tostar (café)", "The coffee is roasted in Medellín."],
  ["export", "verbo", "exportar", "Colombian coffee is exported to Japan."],
  ["factory", "sustantivo", "fábrica", "The shoes are made in a factory."],
  ["by hand", "expresión", "a mano", "These hats are made by hand."],
  ["bean", "sustantivo", "grano (café); frijol", "Coffee beans are red when they're ready."],
  ["harvest", "sustantivo", "cosecha", "The harvest is in October."],
  ["famous", "adjetivo", "famoso", "It's a famous painting."],
  ["century", "sustantivo", "siglo", "It was built in the 16th century."]
 ],
 dialogue: {
  title: "En una finca cafetera",
  scene: "Un grupo de turistas visita una finca cafetera en Salento. Tom, un turista inglés, habla con Lucía, la guía.",
  a: "Lucía", b: "Tom",
  lines: [
   ["A", "Welcome to La Esperanza farm. This farm was started by my grandfather in 1955.", "Bienvenidos a la finca La Esperanza. Esta finca la fundó mi abuelo en 1955."],
   ["B", "Wow. Is all the coffee grown here?", "Uy. ¿Todo el café se cultiva aquí?"],
   ["A", "Yes. It's grown on these mountains, about one thousand six hundred metres high.", "Sí. Se cultiva en estas montañas, a unos mil seiscientos metros de altura."],
   ["B", "How is the coffee picked? With machines?", "¿Cómo se recoge el café? ¿Con máquinas?"],
   ["A", "No, it's picked by hand. Only the red beans are picked.", "No, se recoge a mano. Solo se recogen los granos rojos."],
   ["B", "And then what happens?", "¿Y luego qué pasa?"],
   ["A", "The beans are washed and then they're dried in the sun for about a week.", "Los granos se lavan y luego se secan al sol más o menos una semana."],
   ["B", "Is the coffee roasted here too?", "¿El café también se tuesta aquí?"],
   ["A", "A little. Most of it is sold to a cooperative and it's exported to the United States and Japan.", "Un poco. La mayoría se le vende a una cooperativa y se exporta a Estados Unidos y Japón."],
   ["B", "Interesting. Who are those people in the photo?", "Interesante. ¿Quiénes son esas personas de la foto?"],
   ["A", "That photo was taken in 1960. That's my grandfather with the first harvest.", "Esa foto se tomó en 1960. Ese es mi abuelo con la primera cosecha."],
   ["B", "Can we try the coffee?", "¿Podemos probar el café?"],
   ["A", "Of course! A cup of coffee is included in the tour.", "¡Claro! Una taza de café está incluida en el recorrido."],
   ["B", "Perfect. This is the best part of the tour!", "Perfecto. ¡Esta es la mejor parte del recorrido!"]
  ]
 },
 practice: [
  M("Coffee ___ in many regions of Colombia.", ["is grown", "grows by", "is grow", "are grown"], 0, "Coffee es singular → is + grown."),
  M("The Eiffel Tower ___ in 1889.", ["was built", "is built", "built", "was build"], 0),
  M("Cien años de soledad was written ___ García Márquez.", ["by", "for", "from", "of"], 0),
  F("These sombreros ___ made by hand in Córdoba. (son)", ["are"]),
  L("This church was built in the seventeenth century, and the paintings inside were painted by local artists.", "¿Quién pintó los cuadros?", ["Artistas locales", "Un pintor español", "Botero", "No se sabe"], 0),
  O("My phone was stolen on the bus yesterday.")
 ],
 more: [
  R("Spanish is spoken in many countries.", "El español se habla en muchos países."),
  R("The meeting was cancelled this morning.", "La reunión se canceló esta mañana."),
  D("Bananas are grown in Urabá."),
  D("This painting was painted by Botero."),
  M("Our car ___ last night. We called the police.", ["was stolen", "stole", "is stolen", "was steal"], 0),
  M("The bananas ___ in boxes and sent to Europe.", ["are packed", "pack", "are pack", "packing"], 0),
  L("Our flowers are grown near Bogotá and they are exported to the United States, Japan and Europe.", "¿Dónde se cultivan las flores?", ["Cerca de Bogotá", "En Japón", "En Europa", "En Estados Unidos"], 0),
  W("Escribe sobre un producto típico de tu región (mínimo 50 palabras): dónde se produce, cómo se hace y a dónde se vende. Usa la pasiva al menos cinco veces (is made, are grown, is sold…).", 50, [["is made", "are made", "is grown", "are grown", "is produced", "are produced"], ["is sold", "are sold", "is exported", "are exported"], ["by", "in"]])
 ],
 exam: M("This bridge ___ in 1950.", ["was built", "built", "is build", "was building"], 0),
 exam2: F("English ___ spoken in this hotel. (se habla)", ["is"])
},
/* ───────── Día 35 ───────── */
{
 id: "a2-u7-l5",
 title: "Tecnología y redes sociales: to para decir para qué",
 goal: "Hablar de cómo usas la tecnología y decir para qué haces las cosas.",
 theory: [
  { p: "Para decir **para qué** haces algo, en inglés se usa **to** + verbo base (no «for» + verbo): **I use my phone to pay my bills.** · **I went to the bank to open an account.** · **She's saving money to buy a car.**" },
  { ex: [["I use WhatsApp to talk to my family.", "Uso WhatsApp para hablar con mi familia."], ["I went to the mall to buy a charger.", "Fui al centro comercial a comprar un cargador."], ["He called the bank to change his password.", "Llamó al banco para cambiar su clave."], ["We need Wi-Fi to watch the series.", "Necesitamos wifi para ver la serie."], ["I'm learning English to get a better job.", "Estoy aprendiendo inglés para conseguir un mejor trabajo."]] },
  { p: "Verbos de tecnología: **download** (descargar), **upload** (subir), **post** (publicar), **share** (compartir), **follow** (seguir), **log in / log out** (entrar / salir de una cuenta), **update** (actualizar), **delete** (borrar), **charge** (cargar), **scroll** (deslizar la pantalla)." },
  { ex: [["Download the app to see your bill.", "Descarga la aplicación para ver tu factura."], ["She posted a photo on Instagram.", "Ella publicó una foto en Instagram."], ["Log in with your email and password.", "Entra con tu correo y tu clave."], ["My battery is dead. I need to charge my phone.", "Se me acabó la batería. Necesito cargar el celular."], ["Don't share your password with anyone.", "No compartas tu clave con nadie."]] },
  { tip: "«Fui a la tienda **para** comprar pan» es **I went to the shop to buy bread**. Decir «for buy» o «for to buy» es un error muy común de los hispanohablantes." }
 ],
 vocab: [
  ["download", "verbo", "descargar", "Download the app for free."],
  ["upload", "verbo", "subir (a internet)", "I uploaded the photos."],
  ["post", "verbo", "publicar", "She posts videos every day."],
  ["share", "verbo", "compartir", "Share the link with me."],
  ["follow", "verbo", "seguir (en redes)", "I follow a lot of chefs on Instagram."],
  ["log in", "verbo", "iniciar sesión, entrar", "I can't log in."],
  ["log out", "verbo", "cerrar sesión", "Always log out on public computers."],
  ["update", "verbo", "actualizar", "Update your phone tonight."],
  ["delete", "verbo", "borrar, eliminar", "I deleted the message."],
  ["charge", "verbo", "cargar (batería)", "I need to charge my laptop."],
  ["charger", "sustantivo", "cargador", "Can I borrow your charger?"],
  ["battery", "sustantivo", "batería, pila", "My battery is low."],
  ["screen", "sustantivo", "pantalla", "The screen is broken."],
  ["account", "sustantivo", "cuenta", "Create an account."],
  ["password", "sustantivo", "contraseña, clave", "Change your password."],
  ["link", "sustantivo", "enlace, link", "Send me the link."],
  ["video call", "expresión", "videollamada", "Let's make a video call."],
  ["social media", "expresión", "redes sociales", "She spends hours on social media."],
  ["online", "adjetivo / adverbio", "en línea, por internet", "I buy everything online."],
  ["to (+ verbo)", "preposición", "para (propósito)", "I use my laptop to work."],
  ["save", "verbo", "ahorrar; guardar", "I'm saving money to buy a car."],
  ["mute", "verbo", "silenciar", "Please mute your microphone."]
 ],
 dialogue: {
  title: "La abuela aprende a hacer videollamadas",
  scene: "Doña Rosa quiere hablar por video con su nieto, que vive en Madrid. Su nieta Valeria le ayuda con el celular.",
  a: "Doña Rosa", b: "Valeria",
  lines: [
   ["A", "Valeria, I want to use this phone to see your cousin in Madrid.", "Valeria, quiero usar este celular para ver a tu primo en Madrid."],
   ["B", "Easy, Grandma. First, we need to download WhatsApp.", "Fácil, abuela. Primero tenemos que descargar WhatsApp."],
   ["A", "Download? Do I have to pay to download it?", "¿Descargar? ¿Tengo que pagar para descargarlo?"],
   ["B", "No, it's free. Look, I'm downloading it now. Now we need your phone number to create an account.", "No, es gratis. Mira, ya lo estoy descargando. Ahora necesitamos tu número para crear una cuenta."],
   ["A", "OK. And what's this message?", "Bueno. ¿Y qué es este mensaje?"],
   ["B", "It's a code. They send it to check that it's your phone.", "Es un código. Lo mandan para comprobar que es tu celular."],
   ["A", "How clever! Now, how do I call Sebastián?", "¡Qué inteligente! Ahora, ¿cómo llamo a Sebastián?"],
   ["B", "Touch his name and then this little camera to make a video call.", "Toca su nombre y luego esta camarita para hacer la videollamada."],
   ["A", "Oh, I can see him! But he can't hear me.", "¡Ay, lo veo! Pero él no me oye."],
   ["B", "You muted the microphone. Touch here to turn it on.", "Silenciaste el micrófono. Toca aquí para activarlo."],
   ["A", "Sebastián, my love! … Valeria, the screen is black now!", "¡Sebastián, mi amor! … Valeria, ¡ahora la pantalla está negra!"],
   ["B", "The battery is dead, Grandma. You need to charge it. Here's the charger.", "Se acabó la batería, abuela. Tienes que cargarlo. Aquí está el cargador."],
   ["A", "Technology! Can you write the steps on a paper to remember them?", "¡La tecnología! ¿Me escribes los pasos en un papel para acordarme?"],
   ["B", "Of course. And I'm going to post a photo of you to show everybody. You're famous!", "Claro. Y voy a publicar una foto tuya para mostrársela a todos. ¡Eres famosa!"]
  ]
 },
 practice: [
  M("I went to the supermarket ___ some milk.", ["to buy", "for buy", "for to buy", "buying for"], 0, "Propósito → to + verbo."),
  M("Can you send me the ___ to the meeting?", ["link", "screen", "battery", "charger"], 0),
  M("My phone is at 2%. I need to ___ it.", ["charge", "load", "download", "delete"], 0),
  F("She ___ a photo of her new car on Instagram. (publicó)", ["posted", "uploaded", "shared"]),
  L("I use my laptop to work, my tablet to read books and my phone to pay for everything.", "¿Para qué usa la tableta?", ["Para leer libros", "Para trabajar", "Para pagar", "Para ver series"], 0),
  O("I'm learning English to get a better job.")
 ],
 more: [
  R("I use my phone to pay my bills.", "Uso el celular para pagar mis cuentas."),
  R("Don't share your password with anyone.", "No compartas tu clave con nadie."),
  D("Download the app and create an account."),
  D("I can't log in. I forgot my password."),
  M("Before you leave the café, ___ of your email.", ["log out", "log in", "upload", "follow"], 0),
  M("I called the bank ___ my card.", ["to cancel", "for cancel", "for canceling to", "cancel for"], 0),
  L("Please update the app to see the new features. You can download it for free from the store.", "¿Qué hay que hacer para ver las novedades?", ["Actualizar la aplicación", "Borrar la aplicación", "Comprar la aplicación", "Llamar al banco"], 0),
  W("Escribe cómo usas la tecnología en un día normal (mínimo 50 palabras): qué aparatos y aplicaciones usas y para qué. Usa to + verbo al menos cuatro veces.", 50, [["to pay", "to talk", "to work", "to watch", "to read", "to study", "to listen", "to call", "to buy", "to send", "to see", "to check", "to learn"], ["phone", "laptop", "computer", "tablet", "app"], ["download", "post", "share", "follow", "charge", "update", "online", "social media"]])
 ],
 exam: M("I'm saving money ___ a new laptop.", ["to buy", "for buy", "for buying to", "buy"], 0),
 exam2: F("You need a password to ___ in. (entrar a tu cuenta)", ["log"])
}
],
/* ───────── Quiz de la unidad 7 ───────── */
quiz: [
 M("When I was young, I ___ swim in the river every weekend.", ["used to", "use to", "am used to", "was used"], 0),
 M("Take an umbrella. It ___ rain later.", ["might", "might to", "mights", "is might"], 0),
 M("The man ___ fixed my computer was very kind.", ["who", "which", "where", "what"], 0),
 M("This church ___ in 1750.", ["was built", "built", "is build", "was building"], 0),
 M("I went to the bank ___ some money.", ["to get", "for get", "for to get", "getting for"], 0),
 F("Did you ___ to live in the countryside? (use)", ["use"]),
 L("I used to work in an office in Bogotá, but now I work from home and I use my laptop to teach online classes.", "¿Cómo trabaja ahora?", ["Desde la casa, dando clases en línea", "En una oficina en Bogotá", "En una escuela", "En un banco"], 0),
 L("This chocolate is made in Bucaramanga. The cocoa is grown in Santander and it's sold all over the country.", "¿Dónde se cultiva el cacao?", ["En Santander", "En Bogotá", "En el Valle", "En Antioquia"], 0),
 W("Escribe sobre cómo ha cambiado tu ciudad o tu vida (mínimo 60 palabras): cómo era antes (used to), qué cosas famosas se hicieron allí (pasiva), qué puede pasar en el futuro (might / may) y describe un lugar o una persona importante con who / which / where.", 60, [["used to"], ["was built", "is made", "was made", "is grown", "was founded", "were built", "is produced", "was opened"], ["might", "may"], ["who", "which", "where", "that"]]),
 O("There used to be a park where we played every afternoon."),
 O("I might go to Cartagena next month to visit my cousin.")
],
pool: [
 M("I ___ like spicy food, but now I love it.", ["didn't use to", "didn't used to", "don't use to", "used not like"], 0),
 M("—Are you coming tomorrow? —I'm not sure. I ___.", ["might", "might to", "might come to", "am might"], 0),
 M("Is there a shop ___ I can buy a charger?", ["where", "who", "which", "what"], 0),
 M("The Mona Lisa ___ by Leonardo da Vinci.", ["was painted", "painted", "is painting", "was paint"], 0),
 M("I use my phone ___ photos of my food.", ["to take", "for take", "for to take", "taking for"], 0),
 M("Always ___ when you use a public computer.", ["log out", "log in", "download", "upload"], 0),
 F("It's a machine ___ washes clothes. (que, cosa)", ["which", "that"]),
 F("Rice ___ grown in Tolima. (se cultiva)", ["is"]),
 L("My grandmother used to make arepas every morning. Now we buy them at the supermarket.", "¿Qué hacía la abuela cada mañana?", ["Arepas", "Pan", "Café", "Chocolate"], 0),
 L("I might not go to the gym today. I may go tomorrow morning instead.", "¿Cuándo puede que vaya al gimnasio?", ["Mañana por la mañana", "Hoy", "Esta noche", "El fin de semana"], 0),
 L("The museum which opened last year is in the building where my father used to work.", "¿Qué hay en el edificio donde trabajaba el papá?", ["El museo", "Un banco", "Un hospital", "Una escuela"], 0),
 W("Escribe un mensaje a un amigo que no ves hace años (mínimo 50 palabras): recuerda qué hacían juntos (used to), cuéntale qué estás haciendo ahora y qué podrías hacer el próximo año (might).", 50, [["used to"], ["now", "these days", "nowadays"], ["might", "may", "maybe"]]),
 O("My bike was stolen last week."),
 O("She's the woman who teaches English at my son's school."),
 O("I use social media to share photos with my family.")
]
};
