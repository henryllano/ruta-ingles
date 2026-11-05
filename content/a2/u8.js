/* A2 · Unidad 8 · Opinar y convivir (Días 36–40). Se arma con: node tools/build-level.js 1 content/a2 */
const M = (q, o, a, x) => ({ t: "mc", q, o, a, ...(x ? { x } : {}) }), F = (q, ans) => ({ t: "fill", q, ans }),
  L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), O = text => ({ t: "oral", text }), D = say => ({ t: "dict", say }),
  W = (q, min, keys) => ({ t: "write", q, min, keys }), R = (s, es) => ({ t: "order", words: s.split(" "), es });

module.exports = {
n: 8,
title: "Opinar y convivir",
lessons: [
/* ───────── Día 36 ───────── */
{
 id: "a2-u8-l1",
 title: "Dar tu opinión y escribir una reseña",
 goal: "Opinar, estar de acuerdo o en desacuerdo con cortesía y escribir una reseña corta.",
 theory: [
  { p: "Para opinar: **I think…** · **I don't think…** · **In my opinion,…** · **For me,…** · **I feel that…** Ojo: en negativo se dice **I don't think it's a good idea** (no «I think it isn't»), que suena más natural." },
  { ex: [["I think the movie was too long.", "Creo que la película fue muy larga."], ["In my opinion, the food is better here.", "En mi opinión, la comida es mejor aquí."], ["I don't think it's expensive.", "No creo que sea caro."], ["For me, the best part was the music.", "Para mí, lo mejor fue la música."], ["What do you think?", "¿Qué opinas?"]] },
  { p: "Estar de acuerdo: **I agree.** · **You're right.** · **Me too.** / **Me neither.** · **Exactly!** Estar en desacuerdo con cortesía: **I don't agree.** · **I'm not sure about that.** · **That's true, but…** · **I see your point, but…**" },
  { ex: [["I agree with you.", "Estoy de acuerdo contigo."], ["You're right. It was boring.", "Tienes razón. Fue aburrida."], ["That's true, but the actors were great.", "Es cierto, pero los actores eran geniales."], ["I'm not sure about that.", "No estoy tan seguro de eso."], ["—I didn't like it. —Me neither.", "—No me gustó. —A mí tampoco."]] },
  { p: "Una **reseña** corta tiene: qué es y dónde (**Last weekend I went to…**), qué te gustó (**The best thing was…**), qué no (**The only problem was…**) y tu recomendación (**I'd recommend it to… / I wouldn't recommend it**)." },
  { tip: "En inglés se dice **I agree** (no «I am agree»). Y **Me neither** es para responder a una frase negativa: —I don't like coffee. —**Me neither.**" }
 ],
 vocab: [
  ["I think", "expresión", "creo, pienso", "I think it's a good idea."],
  ["I don't think", "expresión", "no creo", "I don't think he's coming."],
  ["in my opinion", "expresión", "en mi opinión", "In my opinion, it's too expensive."],
  ["agree", "verbo", "estar de acuerdo", "I agree with you."],
  ["disagree", "verbo", "no estar de acuerdo", "I disagree with that."],
  ["You're right.", "expresión", "Tienes razón.", "You're right, it's late."],
  ["That's true, but…", "expresión", "Es cierto, pero…", "That's true, but it's cheap."],
  ["I see your point.", "expresión", "Entiendo lo que dices.", "I see your point, but I don't agree."],
  ["Me too.", "expresión", "Yo también.", "—I loved it. —Me too."],
  ["Me neither.", "expresión", "Yo tampoco.", "—I don't eat meat. —Me neither."],
  ["review", "sustantivo", "reseña, opinión escrita", "I read the reviews before I book."],
  ["recommend", "verbo", "recomendar", "I'd recommend this restaurant."],
  ["worth it", "expresión", "vale la pena", "It's expensive but worth it."],
  ["service", "sustantivo", "servicio, atención", "The service was slow."],
  ["staff", "sustantivo", "personal, empleados", "The staff were very friendly."],
  ["delicious", "adjetivo", "delicioso", "The ceviche was delicious."],
  ["disappointing", "adjetivo", "decepcionante", "The ending was disappointing."],
  ["overrated", "adjetivo", "sobrevalorado", "I think that place is overrated."],
  ["plot", "sustantivo", "argumento, trama", "The plot was very original."],
  ["boring", "adjetivo", "aburrido (que aburre)", "The first part was boring."],
  ["atmosphere", "sustantivo", "ambiente", "The restaurant has a nice atmosphere."],
  ["stars", "sustantivo", "estrellas (calificación)", "I give it four stars."]
 ],
 dialogue: {
  title: "Después del cine",
  scene: "Andrés y su esposa Paula salen de ver una película colombiana muy famosa y hablan de lo que les pareció.",
  a: "Paula", b: "Andrés",
  lines: [
   ["A", "So, what did you think of the movie?", "Bueno, ¿qué te pareció la película?"],
   ["B", "I think it was very good. The actors were amazing.", "Creo que fue muy buena. Los actores eran increíbles."],
   ["A", "I agree. The main actress was fantastic. But I think it was too long.", "Estoy de acuerdo. La actriz principal era fantástica. Pero creo que fue muy larga."],
   ["B", "That's true, but the story needed time.", "Es cierto, pero la historia necesitaba tiempo."],
   ["A", "I'm not sure about that. The middle part was a bit boring.", "No estoy tan segura. La parte del medio fue un poco aburrida."],
   ["B", "I see your point. And what about the music? I loved it.", "Entiendo. ¿Y la música? A mí me encantó."],
   ["A", "Me too! It was the best thing in the film.", "¡A mí también! Fue lo mejor de la película."],
   ["B", "In my opinion, the ending was perfect.", "En mi opinión, el final fue perfecto."],
   ["A", "Really? I don't think so. It was very sad, and I didn't understand it.", "¿En serio? Yo no creo. Fue muy triste y no lo entendí."],
   ["B", "Ha ha, you're right, it was a bit confusing.", "Jaja, tienes razón, fue un poco confuso."],
   ["A", "Would you recommend it?", "¿La recomendarías?"],
   ["B", "Yes, definitely. I'd give it four stars out of five.", "Sí, definitivamente. Le daría cuatro estrellas de cinco."],
   ["A", "Three for me. But the popcorn was worth it!", "Tres para mí. ¡Pero las crispetas sí valieron la pena!"]
  ]
 },
 practice: [
  M("—I think this restaurant is too expensive. —I ___. The prices are crazy.", ["agree", "am agree", "agreed with", "agreeing"], 0),
  M("En inglés natural, «creo que no es buena idea» es:", ["I don't think it's a good idea.", "I think it's not good idea.", "I not think it's a good idea.", "I think no it's a good idea."], 0),
  M("—I don't like horror movies. —Me ___.", ["neither", "too", "either no", "also not"], 0),
  F("In my ___, the service was very slow. (opinión)", ["opinion"]),
  L("The food was delicious and the staff were friendly, but the music was too loud. I'd recommend it for lunch, not for a romantic dinner.", "¿Para qué recomienda el restaurante?", ["Para almorzar", "Para una cena romántica", "Para una fiesta", "Para desayunar"], 0),
  O("That's true, but I don't think it's worth the money.")
 ],
 more: [
  R("What do you think of the new mall?", "¿Qué opinas del nuevo centro comercial?"),
  R("I see your point, but I don't agree.", "Entiendo lo que dices, pero no estoy de acuerdo."),
  D("In my opinion, the book is better than the movie."),
  D("I'd recommend this hotel to families."),
  M("Para estar en desacuerdo con cortesía dices:", ["I'm not sure about that.", "You're wrong, stop.", "That's stupid.", "No, never."], 0),
  M("The ending was very ___. I expected something better.", ["disappointing", "disappointed", "disappoint", "disappoints"], 0, "-ing describe la cosa; -ed describe cómo te sientes."),
  L("In my opinion, public transport in this city is getting better. I agree, but the buses are still too crowded.", "¿Qué problema menciona la segunda persona?", ["Los buses van muy llenos", "Los buses son caros", "No hay buses", "Los buses son lentos"], 0),
  W("Escribe una reseña de un restaurante, una película o un lugar que conozcas (mínimo 60 palabras): qué es, qué te gustó, qué no y si lo recomiendas.", 60, [["i think", "in my opinion", "for me"], ["but", "however"], ["recommend", "worth it", "stars"], ["was", "were"]])
 ],
 exam: M("—This series is amazing. —I ___. I watched all of it in two days.", ["agree", "am agree", "agreeing", "am agreed"], 0),
 exam2: F("I'd ___ this restaurant to my friends. The food is great. (recomendar)", ["recommend"])
},
/* ───────── Día 37 ───────── */
{
 id: "a2-u8-l2",
 title: "Preferencias: prefer y would rather",
 goal: "Decir qué prefieres en general y qué preferirías en una situación concreta.",
 theory: [
  { p: "**Prefer** para gustos generales: **I prefer tea to coffee.** · **I prefer walking to driving.** Fíjate que se compara con **to**. También: **I prefer to stay at home on Fridays.**" },
  { ex: [["I prefer the beach to the mountains.", "Prefiero la playa que la montaña."], ["She prefers reading to watching TV.", "Ella prefiere leer que ver televisión."], ["Do you prefer cats or dogs?", "¿Prefieres los gatos o los perros?"], ["We prefer to travel in January.", "Preferimos viajar en enero."], ["My son prefers pasta.", "Mi hijo prefiere la pasta."]] },
  { p: "**Would rather** ('d rather) + verbo base para una preferencia **en este momento o situación**: **I'd rather stay at home tonight.** Para comparar se usa **than**: **I'd rather walk than take a taxi.** Negativo: **I'd rather not.** Pregunta: **Would you rather go to the cinema or the theatre?** También **I'd prefer to…** (más formal)." },
  { ex: [["I'd rather stay at home tonight.", "Esta noche prefiero quedarme en casa."], ["I'd rather walk than take a taxi.", "Prefiero caminar que tomar taxi."], ["Would you rather eat in or eat out?", "¿Prefieres comer en casa o afuera?"], ["—Do you want to dance? —I'd rather not.", "—¿Quieres bailar? —Prefiero no hacerlo."], ["I'd prefer to sit by the window.", "Preferiría sentarme junto a la ventana."]] },
  { tip: "Después de **would rather** el verbo va **sin to**: **I'd rather go** (no «I'd rather to go»). Después de **prefer** el verbo va con **to** o **-ing**: **I prefer to go / I prefer going**." }
 ],
 vocab: [
  ["prefer", "verbo", "preferir", "I prefer tea to coffee."],
  ["would rather", "expresión", "preferiría (ahora / en esta situación)", "I'd rather stay here."],
  ["I'd rather not.", "expresión", "Prefiero no.", "—Do you want to sing? —I'd rather not."],
  ["I'd prefer to", "expresión", "preferiría (formal)", "I'd prefer to pay by card."],
  ["than", "conjunción", "que (en comparaciones)", "I'd rather walk than drive."],
  ["to", "preposición", "que (con prefer)", "I prefer summer to winter."],
  ["choose", "verbo", "escoger, elegir", "It's hard to choose."],
  ["option", "sustantivo", "opción", "There are two options."],
  ["either", "pronombre", "cualquiera de los dos", "Either is fine for me."],
  ["I don't mind.", "expresión", "Me da igual.", "—Beach or mountains? —I don't mind."],
  ["It's up to you.", "expresión", "Como tú quieras / tú decides.", "Pizza or sushi? It's up to you."],
  ["eat in", "verbo", "comer en casa", "Let's eat in tonight."],
  ["eat out", "verbo", "comer afuera", "We eat out on Fridays."],
  ["the countryside", "expresión", "el campo", "I prefer the countryside to the city."],
  ["crowds", "sustantivo", "multitudes, tumultos", "I don't like crowds."],
  ["relaxing", "adjetivo", "relajante", "The beach is very relaxing."],
  ["adventure", "sustantivo", "aventura", "I prefer adventure holidays."],
  ["hiking", "sustantivo", "caminata, senderismo", "We'd rather go hiking."],
  ["budget", "sustantivo", "presupuesto", "We have a small budget."],
  ["all-inclusive", "adjetivo", "todo incluido", "An all-inclusive hotel."],
  ["window seat", "expresión", "puesto de ventana", "I'd prefer a window seat."],
  ["aisle seat", "expresión", "puesto de pasillo", "I'd rather have an aisle seat."]
 ],
 dialogue: {
  title: "¿Playa o montaña?",
  scene: "Óscar y su esposa Liliana planean las vacaciones de diciembre con un presupuesto pequeño.",
  a: "Liliana", b: "Óscar",
  lines: [
   ["A", "So, where do you want to go in December? San Andrés or the coffee region?", "Bueno, ¿a dónde quieres ir en diciembre? ¿San Andrés o el Eje Cafetero?"],
   ["B", "You know me. I prefer the beach to the mountains.", "Ya me conoces. Prefiero la playa que la montaña."],
   ["A", "I know, but San Andrés is very expensive in December. I'd rather go somewhere cheaper.", "Ya sé, pero San Andrés es muy caro en diciembre. Yo preferiría ir a algún lugar más barato."],
   ["B", "That's true. What about Santa Marta? We can go by bus.", "Es cierto. ¿Y Santa Marta? Podemos ir en bus."],
   ["A", "Twenty hours on a bus? I'd rather not! I'd rather fly.", "¿Veinte horas en bus? ¡Prefiero que no! Prefiero ir en avión."],
   ["B", "OK, OK. Would you rather stay in a hotel or rent an apartment?", "Bueno, bueno. ¿Prefieres quedarte en un hotel o alquilar un apartamento?"],
   ["A", "An apartment. I prefer cooking my own breakfast.", "Un apartamento. Prefiero hacer mi propio desayuno."],
   ["B", "And the kids? They prefer hotels with a pool.", "¿Y los niños? Ellos prefieren hoteles con piscina."],
   ["A", "There are apartments with a pool too. Look at this one.", "También hay apartamentos con piscina. Mira este."],
   ["B", "Nice! But it's far from the beach. I'd rather be near the sea.", "¡Bonito! Pero queda lejos de la playa. Yo preferiría estar cerca del mar."],
   ["A", "This other one is near the beach, but it doesn't have a pool.", "Este otro queda cerca de la playa, pero no tiene piscina."],
   ["B", "Hmm… It's up to you. I don't mind.", "Mmm… Tú decides. A mí me da igual."],
   ["A", "Then the one with the pool. The kids will be happy, and I'll be happy.", "Entonces el de la piscina. Los niños van a estar felices, y yo también."]
  ]
 },
 practice: [
  M("I prefer coffee ___ tea.", ["to", "than", "that", "of"], 0, "Prefer A to B."),
  M("I'd rather ___ at home tonight. I'm tired.", ["stay", "to stay", "staying", "stayed"], 0, "Would rather + verbo base."),
  M("I'd rather walk ___ take the bus.", ["than", "to", "that", "from"], 0),
  F("—Do you want to sing karaoke? —I'd rather ___. I can't sing! (prefiero no)", ["not"]),
  L("I usually prefer the mountains, but this weekend I'd rather go to the beach because it's very cold in Bogotá.", "¿A dónde quiere ir este fin de semana?", ["A la playa", "A la montaña", "A ningún lado", "A Bogotá"], 0),
  O("I'd rather eat at home than go to an expensive restaurant.")
 ],
 more: [
  R("Would you rather go out or stay in?", "¿Prefieres salir o quedarte en casa?"),
  R("She prefers reading to watching TV.", "Ella prefiere leer que ver televisión."),
  D("It's up to you. I don't mind."),
  D("I'd prefer an aisle seat, please."),
  M("—Pizza or hamburgers? —I don't ___. Both are fine.", ["mind", "care of", "prefer", "rather"], 0),
  M("My kids ___ sweets to vegetables.", ["prefer", "would rather", "rather", "prefers"], 0),
  L("Would you rather have a window seat or an aisle seat? An aisle seat, please. I'd rather not climb over people.", "¿Qué puesto prefiere?", ["Pasillo", "Ventana", "Cualquiera", "En la primera fila"], 0),
  W("Escribe sobre tus preferencias (mínimo 50 palabras): qué prefieres en general (comida, vacaciones, tiempo libre) con prefer…to y qué preferirías hacer este fin de semana con would rather…than.", 50, [["prefer"], ["to", "than"], ["would rather", "i'd rather"]])
 ],
 exam: M("I'm not hungry. I'd rather ___ dinner later.", ["have", "to have", "having", "had"], 0),
 exam2: F("I prefer the countryside ___ the city. (que)", ["to"])
},
/* ───────── Día 38 ───────── */
{
 id: "a2-u8-l3",
 title: "Conversación social y preguntas: Who called you?",
 goal: "Conversar con alguien nuevo, mostrar interés y hacer preguntas de sujeto y de objeto.",
 theory: [
  { p: "Para mantener una conversación: haz preguntas (**What do you do? How long have you lived here?**), **muestra interés** (**Really? · That's great! · How interesting! · Oh no, what a shame!**) y devuelve la pregunta (**What about you? · And you?**)." },
  { ex: [["How do you know the bride?", "¿De dónde conoces a la novia?"], ["Really? That's amazing!", "¿En serio? ¡Qué increíble!"], ["Oh no, what a shame!", "¡Ay no, qué lástima!"], ["What about you?", "¿Y tú?"], ["It was nice talking to you.", "Fue un gusto hablar contigo."]] },
  { p: "**Preguntas de sujeto** (la respuesta es quien hace la acción): no usan **do / did**: **Who called you?** — **My mom called me.** · **What happened?** · **Who won the game?** **Preguntas de objeto** (la respuesta recibe la acción): sí usan **do / did**: **Who did you call?** — **I called my mom.**" },
  { ex: [["Who called you?", "¿Quién te llamó?"], ["Who did you call?", "¿A quién llamaste?"], ["What happened at the party?", "¿Qué pasó en la fiesta?"], ["Who made this cake?", "¿Quién hizo esta torta?"], ["What did you make for dinner?", "¿Qué hiciste de comida?"]] },
  { p: "**Correo informal o nota a un amigo:** saludo (**Hi Laura,**), pregunta cómo está (**How are you?**), la noticia o el motivo, una pregunta o propuesta, y despedida (**Take care, · See you soon, · Love, · Best wishes,**) con tu nombre. Para una nota corta basta con dos o tres frases." },
  { ex: [["Hi Laura, how are you? I'm writing to tell you about the wedding.", "Hola, Laura, ¿cómo estás? Te escribo para contarte de la boda."], ["Guess what happened! I met an old friend from school.", "¡Adivina qué pasó! Me encontré a un viejo amigo del colegio."], ["Write soon and tell me your news. Take care, Natalia", "Escríbeme pronto y cuéntame qué hay de nuevo. Cuídate, Natalia."], ["Note: Sorry I can't come tonight. I have a meeting. See you at the office tomorrow!", "Nota: Perdón, no puedo ir esta noche. Tengo una reunión. ¡Nos vemos mañana en la oficina!"], ["Message: Hi Pedro, see you at the café at six. Don't be late!", "Mensaje: Hola, Pedro, nos vemos en el café a las seis. ¡No llegues tarde!"]] },
  { tip: "«¿Qué pasó?» es **What happened?** (no «What did happen?»). Como **what** es el sujeto, no lleva **did**." }
 ],
 vocab: [
  ["Really?", "expresión", "¿En serio?", "Really? I didn't know that."],
  ["That's great!", "expresión", "¡Qué bien!", "You got the job? That's great!"],
  ["How interesting!", "expresión", "¡Qué interesante!", "You lived in Japan? How interesting!"],
  ["What a shame!", "expresión", "¡Qué lástima!", "It's raining? What a shame!"],
  ["What about you?", "expresión", "¿Y tú?", "I'm a teacher. What about you?"],
  ["Nice to meet you.", "expresión", "Mucho gusto.", "I'm Laura. Nice to meet you."],
  ["It was nice talking to you.", "expresión", "Fue un gusto hablar contigo.", "I have to go. It was nice talking to you."],
  ["Keep in touch.", "expresión", "Estemos en contacto.", "Keep in touch!"],
  ["small talk", "expresión", "charla informal, conversación ligera", "I'm not good at small talk."],
  ["happen", "verbo", "pasar, ocurrir", "What happened?"],
  ["win", "verbo", "ganar (won)", "Who won the game?"],
  ["bride", "sustantivo", "novia (en la boda)", "The bride looks beautiful."],
  ["groom", "sustantivo", "novio (en la boda)", "The groom is my cousin."],
  ["wedding", "sustantivo", "boda, matrimonio", "We met at a wedding."],
  ["guest", "sustantivo", "invitado", "There are two hundred guests."],
  ["get to know", "verbo", "llegar a conocer", "I'd like to get to know you."],
  ["by the way", "expresión", "a propósito, por cierto", "By the way, where are you from?"],
  ["anyway", "adverbio", "en fin, bueno", "Anyway, how's your family?"],
  ["catch up", "verbo", "ponerse al día", "Let's meet and catch up."],
  ["How do you know…?", "expresión", "¿De dónde conoces a…?", "How do you know Andrea?"],
  ["exchange numbers", "expresión", "intercambiar números", "Let's exchange numbers."],
  ["introduce", "verbo", "presentar (a alguien)", "Let me introduce my husband."]
 ],
 dialogue: {
  title: "Conversación en una boda",
  scene: "En la boda de su prima en Cali, Natalia conversa con un invitado que no conoce.",
  a: "Natalia", b: "Martín",
  lines: [
   ["B", "Hi! I don't think we've met. I'm Martín.", "¡Hola! Creo que no nos conocemos. Soy Martín."],
   ["A", "Nice to meet you, Martín. I'm Natalia. How do you know the bride?", "Mucho gusto, Martín. Soy Natalia. ¿De dónde conoces a la novia?"],
   ["B", "We work together at a bank. What about you?", "Trabajamos juntos en un banco. ¿Y tú?"],
   ["A", "I'm her cousin. We grew up together.", "Soy su prima. Crecimos juntas."],
   ["B", "Really? How nice! Do you live in Cali too?", "¿En serio? ¡Qué bien! ¿Tú también vives en Cali?"],
   ["A", "No, I live in Bogotá. I came this morning by plane.", "No, vivo en Bogotá. Llegué esta mañana en avión."],
   ["B", "Oh, and what happened to your arm?", "Ah, ¿y qué te pasó en el brazo?"],
   ["A", "Ha ha, I fell when I was riding my bike last week.", "Jaja, me caí montando en bici la semana pasada."],
   ["B", "Oh no, what a shame! Does it hurt?", "¡Ay no, qué lástima! ¿Te duele?"],
   ["A", "Not much. By the way, who made the cake? It's delicious.", "No mucho. Por cierto, ¿quién hizo la torta? Está deliciosa."],
   ["B", "My sister made it! She has a small bakery.", "¡La hizo mi hermana! Tiene una pequeña pastelería."],
   ["A", "That's great! Who did she make it for? The bride's parents?", "¡Qué bien! ¿Para quién la hizo? ¿Para los papás de la novia?"],
   ["B", "No, it was her wedding gift. Anyway, would you like to dance?", "No, fue su regalo de bodas. En fin, ¿te gustaría bailar?"],
   ["A", "I'd love to! But be careful with my arm.", "¡Me encantaría! Pero cuidado con mi brazo."]
  ]
 },
 practice: [
  M("—I got a new job! —___", ["That's great!", "What a shame!", "Me neither.", "I'd rather not."], 0),
  M("¿Qué pregunta busca a la persona que LLAMÓ?", ["Who called you?", "Who did you call?", "Who did call you?", "Who you called?"], 0),
  M("What ___ at the meeting yesterday?", ["happened", "was happen", "did it happen", "happens did"], 0),
  F("I'm an engineer. What ___ you? (¿y tú?)", ["about"]),
  L("Who broke the window? Nobody knows. But who did you see near the window? I saw the neighbour's kids.", "¿A quién vio cerca de la ventana?", ["A los niños del vecino", "Al vecino", "A nadie", "A su hermano"], 0),
  O("Really? How interesting! How long did you live there?")
 ],
 more: [
  R("How do you know the bride?", "¿De dónde conoces a la novia?"),
  R("Who did you meet at the party?", "¿A quién conociste en la fiesta?"),
  D("It was nice talking to you. Keep in touch!"),
  D("Who won the game last night?"),
  M("___ made this delicious soup?", ["Who", "Who did", "Whom did", "Who does"], 0),
  M("—My dog is sick. —Oh no, ___", ["what a shame!", "that's great!", "me too!", "you're right!"], 0),
  L("Anyway, I have to go now. It was nice talking to you. Let's exchange numbers and catch up next week.", "¿Qué proponen?", ["Intercambiar números y verse la otra semana", "Bailar", "Ir a comer ya", "Llamar a un taxi"], 0),
  W("Escribe un correo informal a un amigo (mínimo 60 palabras): cuéntale de una fiesta o reunión a la que fuiste, a quién conociste, qué pasó y pregúntale cómo está. Empieza con «Hi…,» y termina con una despedida.", 60, [["hi", "hello", "dear"], ["met", "happened", "who"], ["how are you", "what about you", "how's"], ["see you", "take care", "write soon", "best wishes", "love", "bye", "keep in touch"]])
 ],
 exam: M("Who ___ the World Cup in 2022?", ["won", "did win", "did won", "wins did"], 0),
 exam2: F("What ___ to your car? It's very dirty! (pasó)", ["happened"])
},
/* ───────── Día 39 ───────── */
{
 id: "a2-u8-l4",
 title: "En la cocina y en la casa: recetas y oficios",
 goal: "Explicar una receta paso a paso y repartir las tareas de la casa.",
 theory: [
  { p: "Las recetas se escriben con **imperativo** y **conectores de orden**: **First, … Then, … Next, … After that, … Finally, …** Verbos de cocina: **chop** (picar), **slice** (tajar), **peel** (pelar), **mix** (mezclar), **add** (agregar), **boil** (hervir), **fry** (freír), **bake** (hornear), **heat** (calentar), **stir** (revolver), **pour** (verter)." },
  { ex: [["First, peel and chop the onions.", "Primero, pela y pica las cebollas."], ["Then, heat the oil in a pan.", "Luego, calienta el aceite en una sartén."], ["Add the tomatoes and stir for five minutes.", "Agrega los tomates y revuelve cinco minutos."], ["Next, boil the potatoes for twenty minutes.", "Después, hierve las papas veinte minutos."], ["Finally, add a little salt.", "Por último, agrega un poco de sal."]] },
  { p: "Tareas de la casa: muchas usan **do**: **do the dishes, do the laundry, do the shopping, do the ironing**. Otras usan **make**: **make the bed, make lunch**. Y otras tienen su propio verbo: **vacuum** (aspirar), **sweep** (barrer), **mop** (trapear), **take out the trash** (sacar la basura), **tidy up** (ordenar), **water the plants** (regar las plantas)." },
  { ex: [["Can you do the dishes tonight?", "¿Puedes lavar la loza esta noche?"], ["I always make my bed in the morning.", "Siempre tiendo la cama por la mañana."], ["Whose turn is it to take out the trash?", "¿A quién le toca sacar la basura?"], ["I'll vacuum the living room.", "Yo aspiro la sala."], ["Don't forget to water the plants.", "No olvides regar las plantas."]] },
  { tip: "**Hacer la cama** es **make the bed** y **hacer el mercado** es **do the shopping**. Aunque en español todo es «hacer», en inglés hay que aprender si va con **make** o con **do**." }
 ],
 vocab: [
  ["chop", "verbo", "picar", "Chop the onion."],
  ["slice", "verbo", "tajar, cortar en rodajas", "Slice the bread."],
  ["peel", "verbo", "pelar", "Peel the potatoes."],
  ["mix", "verbo", "mezclar", "Mix the flour and the water."],
  ["add", "verbo", "agregar, añadir", "Add some salt."],
  ["boil", "verbo", "hervir", "Boil the eggs for ten minutes."],
  ["fry", "verbo", "freír", "Fry the plantain."],
  ["bake", "verbo", "hornear", "Bake the cake for forty minutes."],
  ["heat", "verbo", "calentar", "Heat the pan."],
  ["stir", "verbo", "revolver", "Stir the soup."],
  ["pan", "sustantivo", "sartén", "Put the oil in the pan."],
  ["pot", "sustantivo", "olla", "Put the water in a big pot."],
  ["oven", "sustantivo", "horno", "Heat the oven to 180 degrees."],
  ["do the dishes", "expresión", "lavar la loza", "I do the dishes after dinner."],
  ["do the laundry", "expresión", "lavar la ropa", "We do the laundry on Sundays."],
  ["make the bed", "expresión", "tender la cama", "Make your bed!"],
  ["vacuum", "verbo", "aspirar", "I vacuum the carpet."],
  ["sweep", "verbo", "barrer", "Sweep the kitchen floor."],
  ["mop", "verbo", "trapear", "Mop the bathroom."],
  ["take out the trash", "expresión", "sacar la basura", "It's your turn to take out the trash."],
  ["tidy up", "verbo", "ordenar, organizar", "Tidy up your room."],
  ["turn", "sustantivo", "turno", "Whose turn is it?"]
 ],
 dialogue: {
  title: "Arepas y oficios",
  scene: "Simón y Juliana comparten apartamento. El sábado por la mañana deciden qué hacer de desayuno y cómo repartir los oficios.",
  a: "Juliana", b: "Simón",
  lines: [
   ["A", "Good morning! Shall we make arepas with eggs for breakfast?", "¡Buenos días! ¿Hacemos arepas con huevo de desayuno?"],
   ["B", "Yes! But I don't know how to make arepas.", "¡Sí! Pero no sé hacer arepas."],
   ["A", "It's easy. First, mix the corn flour with warm water and a little salt.", "Es fácil. Primero, mezcla la harina de maíz con agua tibia y un poco de sal."],
   ["B", "How much water?", "¿Cuánta agua?"],
   ["A", "About two cups. Then make small balls and press them with your hands.", "Unas dos tazas. Luego haz bolitas y apláncalas con las manos."],
   ["B", "OK. And then?", "Bueno. ¿Y luego?"],
   ["A", "Next, heat the pan and cook them for five minutes on each side. I'll fry the eggs.", "Después, calienta la sartén y ásalas cinco minutos por cada lado. Yo frío los huevos."],
   ["B", "Mmm, they smell great. After breakfast, we need to clean. The apartment is a mess.", "Mmm, huelen delicioso. Después del desayuno tenemos que hacer aseo. El apartamento está hecho un desorden."],
   ["A", "You're right. I'll vacuum the living room and mop the kitchen.", "Tienes razón. Yo aspiro la sala y trapeo la cocina."],
   ["B", "Then I'll do the dishes and take out the trash.", "Entonces yo lavo la loza y saco la basura."],
   ["A", "And the laundry? Whose turn is it?", "¿Y la ropa? ¿A quién le toca?"],
   ["B", "Hmm… I did the laundry last week, so it's your turn.", "Mmm… Yo lavé la ropa la semana pasada, así que te toca a ti."],
   ["A", "OK, fair. But you have to water the plants. They look very sad!", "Bueno, es justo. Pero tú tienes que regar las plantas. ¡Se ven muy tristes!"],
   ["B", "Deal. Finally, let's eat these arepas before they get cold!", "Trato hecho. Por último, ¡comámonos estas arepas antes de que se enfríen!"]
  ]
 },
 practice: [
  M("___ the potatoes, then boil them for twenty minutes.", ["First, peel", "First, peeling", "First you peeled", "Firstly to peel"], 0),
  M("I always ___ the bed before breakfast.", ["make", "do", "have", "put"], 0),
  M("Can you ___ the dishes tonight? I'm very tired.", ["do", "make", "take", "clean up of"], 0),
  F("Heat the oil and ___ the plantain for five minutes. (freír)", ["fry"]),
  L("First, chop the onions and the tomatoes. Then fry them in a little oil. Finally, add the eggs and stir.", "¿Qué se agrega al final?", ["Los huevos", "Las cebollas", "Los tomates", "El aceite"], 0),
  O("It's your turn to take out the trash and do the laundry.")
 ],
 more: [
  R("Mix the flour with the water.", "Mezcla la harina con el agua."),
  R("Whose turn is it to do the dishes?", "¿A quién le toca lavar la loza?"),
  D("Bake the cake for forty minutes."),
  D("Please tidy up your room."),
  M("Heat the oven and ___ the bread for fifteen minutes.", ["bake", "boil", "fry", "peel"], 0),
  M("We ___ the shopping on Saturday mornings.", ["do", "make", "take", "have"], 0),
  L("I'll sweep and mop the kitchen. Can you vacuum the bedrooms and water the plants?", "¿Qué le pide al otro?", ["Aspirar los cuartos y regar las plantas", "Barrer y trapear la cocina", "Lavar la loza", "Sacar la basura"], 0),
  W("Escribe la receta de un plato que sepas preparar (mínimo 60 palabras): ingredientes y pasos con first, then, next, after that y finally. Luego di qué oficios de la casa haces tú.", 60, [["first"], ["then", "next", "after that"], ["finally"], ["chop", "mix", "add", "boil", "fry", "bake", "heat", "peel", "slice", "stir", "cook"]])
 ],
 exam: M("I hate ___ the laundry. I prefer cooking.", ["doing", "making", "having", "taking"], 0),
 exam2: F("Boil the water in a big ___. (olla)", ["pot"])
},
/* ───────── Día 40 ───────── */
{
 id: "a2-u8-l5",
 title: "Por la ciudad: indicaciones con más detalle",
 goal: "Dar y entender indicaciones completas con preposiciones de movimiento.",
 theory: [
  { p: "Preposiciones de **movimiento**: **go along** (seguir por), **go past** (pasar por delante de), **cross** (cruzar), **go through** (atravesar), **go up / down** (subir / bajar), **go into / out of** (entrar a / salir de), **go around** (rodear), **go over** (pasar por encima: el puente)." },
  { ex: [["Go along this street for two blocks.", "Siga por esta calle dos cuadras."], ["Go past the church.", "Pase por delante de la iglesia."], ["Cross the bridge.", "Cruce el puente."], ["Go through the park.", "Atraviese el parque."], ["Go up the stairs and turn right.", "Suba las escaleras y gire a la derecha."]] },
  { p: "Para ubicar: **It's opposite the bank** (enfrente del banco) · **next to** (al lado de) · **between** (entre) · **on the corner** (en la esquina) · **at the traffic lights** (en el semáforo) · **at the end of the street** (al final de la calle). Y para guiar: **Take the second street on the left.** · **You can't miss it.** (No tiene pérdida.)" },
  { ex: [["Turn left at the traffic lights.", "Gire a la izquierda en el semáforo."], ["Take the second street on the right.", "Tome la segunda calle a la derecha."], ["The museum is opposite the cathedral.", "El museo está enfrente de la catedral."], ["It's on the corner, next to a pharmacy.", "Queda en la esquina, al lado de una droguería."], ["It's about ten minutes on foot. You can't miss it.", "Queda a unos diez minutos a pie. No tiene pérdida."]] },
  { tip: "**Opposite** = enfrente (al otro lado de la calle). **In front of** = delante de, justo frente a la entrada. Y nunca digas «in the corner» para una calle: es **on the corner**." }
 ],
 vocab: [
  ["go along", "verbo", "seguir por", "Go along the avenue."],
  ["go past", "verbo", "pasar por delante de", "Go past the supermarket."],
  ["cross", "verbo", "cruzar", "Cross the street carefully."],
  ["go through", "verbo", "atravesar, pasar por", "Go through the square."],
  ["go up", "verbo", "subir", "Go up the hill."],
  ["go down", "verbo", "bajar", "Go down the stairs."],
  ["go over", "verbo", "pasar por encima", "Go over the bridge."],
  ["around", "preposición", "alrededor de", "Walk around the lake."],
  ["opposite", "preposición", "enfrente de", "The bank is opposite the park."],
  ["in front of", "expresión", "delante de", "Wait in front of the church."],
  ["between", "preposición", "entre", "It's between the bank and the café."],
  ["on the corner", "expresión", "en la esquina", "There's a shop on the corner."],
  ["traffic lights", "sustantivo", "semáforo", "Turn right at the traffic lights."],
  ["block", "sustantivo", "cuadra", "Walk three blocks."],
  ["bridge", "sustantivo", "puente", "Cross the bridge."],
  ["square", "sustantivo", "plaza", "The square is very old."],
  ["wall", "sustantivo", "muralla, muro", "Walk along the city wall."],
  ["roundabout", "sustantivo", "glorieta", "Go around the roundabout."],
  ["You can't miss it.", "expresión", "No tiene pérdida.", "It's a big yellow building. You can't miss it."],
  ["get lost", "verbo", "perderse", "I always get lost in this city."],
  ["far", "adjetivo", "lejos", "Is it far from here?"],
  ["on foot", "expresión", "a pie", "It's five minutes on foot."]
 ],
 dialogue: {
  title: "Perdidos en Cartagena",
  scene: "Dos turistas mexicanos, Rocío y su esposo, buscan la Torre del Reloj en Cartagena y le preguntan a un guía local.",
  a: "Rocío", b: "Guía",
  lines: [
   ["A", "Excuse me, we're lost. How do we get to the Clock Tower?", "Disculpe, estamos perdidos. ¿Cómo llegamos a la Torre del Reloj?"],
   ["B", "No problem. It's not far. Are you walking?", "No hay problema. No queda lejos. ¿Van caminando?"],
   ["A", "Yes, we are.", "Sí."],
   ["B", "OK. Go along this street until the end. Then turn left.", "Bueno. Sigan por esta calle hasta el final. Luego giren a la izquierda."],
   ["A", "Until the end, then left. OK.", "Hasta el final y luego a la izquierda. Bien."],
   ["B", "You'll see a small square with a church. Go through the square and go past the church.", "Van a ver una plaza pequeña con una iglesia. Atraviesen la plaza y pasen por delante de la iglesia."],
   ["A", "Through the square and past the church.", "Por la plaza y por delante de la iglesia."],
   ["B", "Exactly. Then cross the street at the traffic lights and take the second street on the right.", "Exacto. Luego crucen la calle en el semáforo y tomen la segunda calle a la derecha."],
   ["A", "Sorry, can you repeat that last part, please?", "Perdón, ¿puede repetir la última parte, por favor?"],
   ["B", "Sure. Cross at the traffic lights, and then the second street on the right.", "Claro. Crucen en el semáforo y luego la segunda calle a la derecha."],
   ["A", "Got it. And is the tower on that street?", "Entendido. ¿Y la torre está en esa calle?"],
   ["B", "Yes, at the end of the street. It's opposite a big square with a lot of restaurants. You can't miss it.", "Sí, al final de la calle. Queda enfrente de una plaza grande con muchos restaurantes. No tiene pérdida."],
   ["A", "How long does it take on foot?", "¿Cuánto se demora a pie?"],
   ["B", "About ten minutes. Enjoy Cartagena!", "Unos diez minutos. ¡Disfruten Cartagena!"]
  ]
 },
 practice: [
  M("Go ___ the bridge and then turn right.", ["over", "into", "between", "opposite"], 0),
  M("The bank is ___ the park, on the other side of the street.", ["opposite", "between", "through", "along"], 0),
  M("There's a pharmacy ___ the corner.", ["on", "in", "at the", "by"], 0),
  F("___ the street at the traffic lights. (cruce)", ["cross"]),
  L("Go along Seventh Avenue, go past the cathedral and the museum is on your left, between a bank and a café.", "¿Dónde está el museo?", ["Entre un banco y un café", "Enfrente de la catedral", "En la esquina", "Al lado de un hotel"], 0),
  O("Go through the park and turn left at the traffic lights.")
 ],
 more: [
  R("Take the second street on the left.", "Tome la segunda calle a la izquierda."),
  R("It's opposite the old cathedral.", "Queda enfrente de la catedral antigua."),
  D("Go past the church and cross the bridge."),
  D("It's about five minutes on foot. You can't miss it."),
  M("Go ___ the stairs to the second floor.", ["up", "through", "along", "past"], 0),
  M("The café is ___ the bookshop and the bank.", ["between", "opposite of", "along", "through"], 0),
  L("Excuse me, is the station far? No, it's very close. Go down this street, go around the roundabout and it's on the right.", "¿Qué tiene que rodear?", ["Una glorieta", "Un parque", "Una iglesia", "Un puente"], 0),
  W("Explica cómo llegar desde tu casa a un lugar que te guste del barrio (mínimo 50 palabras). Usa al menos cuatro expresiones de movimiento (go along, go past, cross, go through, turn…) y una de ubicación (opposite, next to, between, on the corner).", 50, [["go along", "go past", "go through", "cross", "go up", "go down", "go over", "go around"], ["turn left", "turn right", "take the"], ["opposite", "next to", "between", "on the corner", "in front of"]])
 ],
 exam: M("Go ___ the park and you'll see the station.", ["through", "between", "opposite", "on"], 0),
 exam2: F("The hotel is ___ the museum, on the other side of the street. (enfrente de)", ["opposite"])
}
],
/* ───────── Quiz de la unidad 8 ───────── */
quiz: [
 M("—I think the new bus system is great. —I ___. It's much faster.", ["agree", "am agree", "agreeing", "agreed to"], 0),
 M("I'd rather ___ a taxi than walk in the rain.", ["take", "to take", "taking", "took"], 0),
 M("___ broke the vase? Nobody knows.", ["Who", "Who did", "Whom did", "Who does"], 0),
 M("Can you ___ the dishes? I'll vacuum.", ["do", "make", "take", "have"], 0),
 M("The library is ___ the school, on the other side of the street.", ["opposite", "between", "through", "along"], 0),
 F("I prefer swimming ___ running. (que)", ["to"]),
 L("In my opinion, the hotel was too expensive. The room was small, but the breakfast was delicious. I wouldn't recommend it.", "¿Qué fue lo bueno del hotel?", ["El desayuno", "La habitación", "El precio", "La ubicación"], 0),
 L("First, boil the pasta for ten minutes. Then heat the oil and fry the garlic. Finally, mix everything and add cheese.", "¿Qué se hace con el ajo?", ["Se fríe", "Se hierve", "Se mezcla con el queso", "Se pela al final"], 0),
 W("Escribe un correo a un amigo que te va a visitar (mínimo 60 palabras): dile qué restaurante prefieres y por qué (opinión y would rather), explícale cómo llegar desde la estación con indicaciones y cuéntale qué pasó en tu última reunión familiar.", 60, [["i think", "in my opinion", "prefer", "would rather", "i'd rather"], ["go along", "go past", "cross", "turn", "opposite", "next to", "go through"], ["happened", "who"], ["hi", "see you", "take care", "love", "bye"]]),
 O("I see your point, but I don't agree with you."),
 O("Go along this street, go past the bank and cross the bridge.")
],
pool: [
 M("—I don't like reggaeton. —Me ___.", ["neither", "too", "also", "no"], 0),
 M("What ___ at the concert? Why did it stop?", ["happened", "was happened", "happens did", "did it happen"], 0),
 M("Would you rather ___ in or eat out tonight?", ["eat", "to eat", "eating", "ate"], 0),
 M("Who ___ you invite to the party?", ["did", "do", "were", "are"], 0),
 M("Heat the oven and ___ the cake for forty minutes.", ["bake", "fry", "boil", "peel"], 0),
 M("There's a bakery ___ the corner.", ["on", "in", "between", "through"], 0),
 F("—Beach or mountains? —I don't ___. It's up to you. (me da igual)", ["mind"]),
 F("I always ___ my bed in the morning. (tender)", ["make"]),
 L("I'd rather not go to the party. I prefer quiet places to crowded ones.", "¿Qué prefiere?", ["Lugares tranquilos", "Lugares llenos de gente", "Ir a la fiesta", "Bailar"], 0),
 L("Who called you last night? My sister called me. She's going to have a baby! Really? That's great!", "¿Por qué llamó la hermana?", ["Va a tener un bebé", "Se va a casar", "Consiguió trabajo", "Está enferma"], 0),
 L("Go up the hill, go past the school and take the first street on the left. The church is at the end.", "¿Por dónde tiene que pasar?", ["Por delante del colegio", "Por el puente", "Por el parque", "Por la glorieta"], 0),
 W("Escribe una reseña de un lugar de tu ciudad (mínimo 60 palabras) para un turista: tu opinión, qué prefieres de ese lugar y cómo llegar desde el centro.", 60, [["i think", "in my opinion", "recommend"], ["prefer", "would rather", "i'd rather"], ["go along", "go past", "cross", "turn", "opposite", "next to", "go through"]]),
 O("—I didn't like the movie. —Me neither. It was boring."),
 O("First, chop the onions. Then fry them with a little oil."),
 O("Excuse me, how do I get to the cathedral?")
]
};
