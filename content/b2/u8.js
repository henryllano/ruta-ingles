/* B2 · Unidad 8 · Habilidades B2 First (Días 36–40). Se arma con: node tools/build-level.js 3 content/b2 */
const M = (q, o, a, x) => ({ t: "mc", q, o, a, ...(x ? { x } : {}) }), F = (q, ans) => ({ t: "fill", q, ans }),
  L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), O = text => ({ t: "oral", text }), D = say => ({ t: "dict", say }),
  W = (q, min, keys) => ({ t: "write", q, min, keys }), R = (s, es) => ({ t: "order", words: s.split(" "), es });

module.exports = {
n: 8,
title: "Habilidades B2 First",
lessons: [
/* ───────── Día 36 ───────── */
{
 id: "b2-u8-l1",
 title: "Comparar fotos y especular: relaciones y personalidad",
 goal: "Comparar dos imágenes, especular sobre las personas y dar tu opinión durante un minuto.",
 theory: [
  { p: "En el examen **B2 First (speaking, parte 2)** tienes un minuto para **comparar** dos fotos y responder una pregunta. No describas todo: compara y especula. Estructura: **Both photos show… · In the first picture… , whereas in the second… · One difference is that… · The main similarity is…**" },
  { ex: [["Both photos show families spending time together.", "Las dos fotos muestran familias pasando tiempo juntas."], ["In the first picture they're at home, whereas in the second they're outdoors.", "En la primera están en casa, mientras que en la segunda están al aire libre."], ["One big difference is the atmosphere.", "Una gran diferencia es el ambiente."], ["The people in the second photo seem much more relaxed.", "La gente de la segunda foto parece mucho más relajada."], ["Personally, I'd prefer to be in the first situation.", "Personalmente, preferiría estar en la primera situación."]] },
  { p: "Para **especular**: **They might be celebrating something.** · **She looks as if she's tired.** · **It seems as though they've just had an argument.** · **I'd say they're probably colleagues.** · **They can't be strangers; they look too comfortable.** Vocabulario de **relaciones**: **get on well with, fall out (with), make up, break up, rely on, trustworthy, supportive, stubborn, selfish, sensitive**." },
  { ex: [["They look as if they're having a great time.", "Parece que la están pasando muy bien."], ["It seems as though they've fallen out.", "Parece que se pelearon."], ["She must be his grandmother.", "Debe ser su abuela."], ["They might be planning a trip.", "Puede que estén planeando un viaje."], ["He seems quite supportive.", "Él parece bastante solidario."]] },
  { tip: "Si no sabes una palabra, no te quedes callado: **It's a kind of…** · **It's something you use to…** · **I'm not sure what it's called, but…** Los examinadores valoran que mantengas la conversación." }
 ],
 vocab: [
  ["both photos show", "expresión", "las dos fotos muestran", "Both photos show people working."],
  ["whereas", "conjunción", "mientras que", "Here it's sunny, whereas there it's raining."],
  ["look as if", "expresión", "parecer que", "They look as if they're lost."],
  ["it seems as though", "expresión", "parece que", "It seems as though they're arguing."],
  ["I'd say", "expresión", "diría que", "I'd say she's about forty."],
  ["get on well with", "expresión", "llevarse bien con", "She gets on well with her sister."],
  ["fall out", "verbo", "pelearse, distanciarse", "They fell out over money."],
  ["make up", "verbo", "reconciliarse", "They argued but made up later."],
  ["break up", "verbo", "terminar (una relación)", "They broke up last year."],
  ["rely on", "verbo", "contar con, confiar en", "You can always rely on me."],
  ["trustworthy", "adjetivo", "confiable, digno de confianza", "He's very trustworthy."],
  ["supportive", "adjetivo", "solidario, que apoya", "My family is very supportive."],
  ["stubborn", "adjetivo", "terco", "She's too stubborn to apologize."],
  ["selfish", "adjetivo", "egoísta", "That was a selfish decision."],
  ["sensitive", "adjetivo", "sensible", "He's very sensitive to criticism."],
  ["outgoing", "adjetivo", "extrovertido", "She's outgoing and funny."],
  ["reserved", "adjetivo", "reservado", "He's a bit reserved at first."],
  ["generation gap", "expresión", "brecha generacional", "There's a big generation gap."],
  ["bond", "sustantivo", "vínculo", "They have a strong bond."],
  ["atmosphere", "sustantivo", "ambiente", "The atmosphere seems tense."],
  ["in the background", "expresión", "al fondo", "In the background, there's a lake."],
  ["candid", "adjetivo", "espontáneo, natural (foto)", "It looks like a candid photo."]
 ],
 dialogue: {
  title: "Práctica para el speaking",
  scene: "Laura se prepara para el examen B2 First con su profesor Mr. Evans. Él le muestra dos fotos: una abuela cocinando con su nieto y dos amigos jóvenes mirando el celular en un café.",
  a: "Mr. Evans", b: "Laura",
  lines: [
   ["A", "Here are your photos. They show people spending time together. Compare them and say which relationship seems closer.", "Aquí están tus fotos. Muestran personas pasando tiempo juntas. Compáralas y di qué relación parece más cercana."],
   ["B", "OK. Both photos show two people spending time together, but the situations are very different.", "Bien. Las dos fotos muestran a dos personas pasando tiempo juntas, pero las situaciones son muy diferentes."],
   ["B", "In the first picture, an elderly woman is cooking with a boy. I'd say she's probably his grandmother.", "En la primera foto, una señora mayor está cocinando con un niño. Diría que probablemente es su abuela."],
   ["B", "They look as if they're having a great time. The boy seems to be learning a family recipe.", "Parece que la están pasando muy bien. El niño parece estar aprendiendo una receta familiar."],
   ["B", "In the second picture, two young people are sitting in a café, whereas they aren't really talking. They're both looking at their phones.", "En la segunda foto, dos jóvenes están sentados en un café, aunque en realidad no están hablando. Los dos miran el celular."],
   ["B", "It seems as though they're friends, but the atmosphere is much colder.", "Parece que son amigos, pero el ambiente es mucho más frío."],
   ["B", "One big difference is the generation gap. In the first photo, two generations are sharing an activity.", "Una gran diferencia es la brecha generacional. En la primera foto, dos generaciones comparten una actividad."],
   ["B", "So in my opinion, the relationship in the first picture seems closer. They must have a strong bond.", "Así que, en mi opinión, la relación de la primera foto parece más cercana. Deben tener un vínculo fuerte."],
   ["A", "Good. Time's up. That was clear and well organized. One small thing: you used 'whereas' when you meant 'but'.", "Bien. Se acabó el tiempo. Fue claro y bien organizado. Un detalle: usaste «whereas» cuando querías decir «but»."],
   ["B", "Oh, right. 'Whereas' compares two different things, doesn't it?", "Ah, cierto. «Whereas» compara dos cosas diferentes, ¿no?"],
   ["A", "Exactly. And try to speculate a bit more: 'they might be…', 'they can't be…'.", "Exacto. Y trata de especular un poco más: «puede que sean…», «no pueden ser…»."],
   ["B", "Got it. They can't be strangers; they're sitting too close.", "Entendido. No pueden ser desconocidos; están sentados muy cerca."],
   ["A", "Perfect. That's exactly the kind of language the examiners want to hear.", "Perfecto. Ese es exactamente el tipo de lenguaje que los examinadores quieren oír."]
  ]
 },
 practice: [
  M("Para empezar la comparación dices:", ["Both photos show people at work.", "In this photo I see a man. He has a shirt.", "The photo one is a man and two is a woman.", "I don't know what to say."], 0),
  M("They look ___ they've just won the lottery.", ["as if", "like as", "that", "so"], 0),
  M("She's so ___. She never changes her mind, even when she's wrong.", ["stubborn", "supportive", "outgoing", "trustworthy"], 0),
  F("They had a big argument, but they made ___ the next day. (se reconciliaron)", ["up"]),
  L("In the first picture the colleagues seem relaxed, whereas in the second one the atmosphere looks quite tense. They might be discussing a problem.", "¿Cómo es el ambiente en la segunda foto?", ["Tenso", "Relajado", "Festivo", "Aburrido"], 0),
  O("It seems as though they've known each other for a long time.")
 ],
 more: [
  R("They might be celebrating something special.", "Puede que estén celebrando algo especial."),
  R("I get on well with my colleagues.", "Me la llevo bien con mis compañeros."),
  D("In the first picture they're indoors, whereas in the second they're outside."),
  D("You can always rely on your real friends."),
  M("Si no sabes cómo se llama un objeto en la foto, dices:", ["It's a kind of tool you use to cut wood.", "I don't know. Next.", "That thing.", "Sorry, no English."], 0),
  M("Lo contrario de selfish es:", ["generous", "stubborn", "sensitive", "reserved"], 0),
  L("They can't be a couple. They look too formal with each other. I'd say they're probably business partners meeting for the first time.", "¿Qué cree quien habla que son?", ["Socios de negocios que se conocen por primera vez", "Una pareja", "Hermanos", "Viejos amigos"], 0),
  W("Imagina dos fotos: en una, una familia grande almuerza junta un domingo; en la otra, una persona come sola frente al computador en la oficina. Compáralas y di qué estilo de vida es más sano (mínimo 120 palabras). Usa both, whereas, look as if / seem, al menos dos especulaciones (might, must, can't) y vocabulario de relaciones.", 120, [["both"], ["whereas", "while", "on the other hand"], ["looks as if", "look as if", "seems", "it seems as though", "look like"], ["might", "must", "can't", "could"]])
 ],
 exam: M("In the first photo they're at home, ___ in the second they're at a restaurant.", ["whereas", "despite", "however", "although of"], 0),
 exam2: F("They look as ___ they're lost. (como si)", ["if", "though"])
},
/* ───────── Día 37 ───────── */
{
 id: "b2-u8-l2",
 title: "Persuadir y recomendar: el artículo para un blog",
 goal: "Convencer a otros de visitar un lugar o probar algo, y escribir un artículo atractivo.",
 theory: [
  { p: "Para **persuadir** combina entusiasmo y razones: **I'd strongly recommend…** · **You really should…** · **It's well worth visiting** · **If you only do one thing, make it…** · **You won't regret it** · **Trust me, …** · **What makes it special is…** · **Whatever you do, don't miss…**" },
  { ex: [["I'd strongly recommend taking the cable car at sunset.", "Les recomiendo mucho tomar el teleférico al atardecer."], ["Salento is well worth a visit.", "Salento vale mucho la pena."], ["If you only do one thing, make it the Cocora Valley.", "Si solo hacen una cosa, que sea el Valle de Cocora."], ["Whatever you do, don't miss the local coffee.", "Hagan lo que hagan, no se pierdan el café local."], ["Trust me, you won't regret it.", "Créanme, no se van a arrepentir."]] },
  { p: "Un **artículo para un blog o revista** (B2 First, writing parte 2) necesita: un **título** llamativo, una **introducción** que hable directo al lector (**Have you ever wondered…? · Imagine…**), párrafos con un tema cada uno, un **tono** cercano (preguntas retóricas, **you**), y un **cierre** que invite a actuar (**So why not…? · So next time you…**)." },
  { ex: [["Have you ever wondered what it's like to sleep in the jungle?", "¿Alguna vez te has preguntado cómo es dormir en la selva?"], ["Imagine waking up to the sound of the sea.", "Imagínate despertar con el sonido del mar."], ["But that's not all.", "Pero eso no es todo."], ["So why not swap the beach for the mountains this year?", "¿Entonces por qué no cambias la playa por la montaña este año?"], ["So next time you visit Bogotá, skip the mall and explore La Candelaria.", "Así que la próxima vez que vayas a Bogotá, olvídate del centro comercial y recorre La Candelaria."]] },
  { tip: "En un artículo, **it's worth** va con **-ing** o sustantivo: **It's worth visiting** / **It's worth a visit** (no «it's worth to visit»)." }
 ],
 vocab: [
  ["I'd strongly recommend", "expresión", "recomiendo mucho", "I'd strongly recommend this tour."],
  ["it's well worth", "expresión", "vale mucho la pena", "It's well worth the trip."],
  ["you won't regret it", "expresión", "no te vas a arrepentir", "Go! You won't regret it."],
  ["whatever you do", "expresión", "hagas lo que hagas", "Whatever you do, don't miss the market."],
  ["must-see", "sustantivo / adjetivo", "imperdible", "The museum is a must-see."],
  ["off the beaten track", "expresión", "fuera de las rutas turísticas", "A village off the beaten track."],
  ["hidden gem", "expresión", "joya escondida", "This beach is a hidden gem."],
  ["breathtaking", "adjetivo", "impresionante", "The views are breathtaking."],
  ["unspoilt", "adjetivo", "virgen, sin explotar", "An unspoilt beach."],
  ["crowded", "adjetivo", "lleno de gente", "It gets crowded at weekends."],
  ["tourist trap", "expresión", "trampa para turistas", "That restaurant is a tourist trap."],
  ["itinerary", "sustantivo", "itinerario", "Plan your itinerary carefully."],
  ["accommodation", "sustantivo (incontable)", "alojamiento", "The accommodation was basic."],
  ["sightseeing", "sustantivo", "turismo, recorrer lugares", "We went sightseeing all day."],
  ["backpacking", "sustantivo", "viajar de mochilero", "I went backpacking in Peru."],
  ["destination", "sustantivo", "destino", "A popular destination."],
  ["local", "adjetivo / sustantivo", "local; persona del lugar", "Ask the locals."],
  ["sustainable tourism", "expresión", "turismo sostenible", "Sustainable tourism protects nature."],
  ["swap", "verbo", "cambiar, intercambiar", "Swap the city for the countryside."],
  ["skip", "verbo", "saltarse, omitir", "Skip the tourist shops."],
  ["head for", "verbo", "dirigirse a", "Head for the old town."],
  ["catch a glimpse", "expresión", "alcanzar a ver", "You might catch a glimpse of a toucan."]
 ],
 dialogue: {
  title: "¿A dónde llevo a mis amigos?",
  scene: "Sam, un amigo inglés, visita Colombia por primera vez con dos amigos. Le pide consejos a Ana, que es de Armenia.",
  a: "Sam", b: "Ana",
  lines: [
   ["A", "We've got five days in the coffee region. Where should we go?", "Tenemos cinco días en el Eje Cafetero. ¿A dónde deberíamos ir?"],
   ["B", "Whatever you do, don't miss the Cocora Valley. The wax palms are breathtaking.", "Hagan lo que hagan, no se pierdan el Valle de Cocora. Las palmas de cera son impresionantes."],
   ["A", "I've seen photos. Is it worth staying in Salento, or is it too touristy?", "He visto fotos. ¿Vale la pena quedarse en Salento o es demasiado turístico?"],
   ["B", "It gets crowded at weekends, but it's well worth it. I'd strongly recommend going on a weekday.", "Se llena los fines de semana, pero vale mucho la pena. Les recomiendo mucho ir entre semana."],
   ["A", "Good tip. What about coffee farms? There seem to be hundreds.", "Buen consejo. ¿Y las fincas cafeteras? Parece que hay cientos."],
   ["B", "Skip the big commercial ones. There's a small family farm near Filandia. It's a real hidden gem.", "Sáltense las grandes y comerciales. Hay una finca familiar pequeña cerca de Filandia. Es una verdadera joya escondida."],
   ["A", "Off the beaten track. I love that.", "Fuera de las rutas turísticas. Eso me encanta."],
   ["B", "Exactly. The owner, Don Arturo, shows you the whole process, and you can stay the night. You won't regret it.", "Exacto. El dueño, don Arturo, les muestra todo el proceso y pueden quedarse a dormir. No se van a arrepentir."],
   ["A", "Any places we should avoid?", "¿Algún lugar que debamos evitar?"],
   ["B", "Some of the theme parks are a bit of a tourist trap. If you only do one, make it the Coffee Park. It's fun with friends.", "Algunos parques temáticos son un poco trampa para turistas. Si solo van a uno, que sea el Parque del Café. Es divertido con amigos."],
   ["A", "And the food?", "¿Y la comida?"],
   ["B", "Trust me: try the trout in Salento and the patacones. And drink coffee from local farms, not the supermarket stuff.", "Créanme: prueben la trucha en Salento y los patacones. Y tomen café de fincas locales, no el del supermercado."],
   ["A", "You should write a blog. I'm totally convinced!", "Deberías escribir un blog. ¡Me convenciste por completo!"],
   ["B", "Ha ha. Maybe I will: 'Five Days in the Coffee Region: A Local's Guide'.", "Jaja. Tal vez lo haga: «Cinco días en el Eje Cafetero: guía de una local»."]
  ]
 },
 practice: [
  M("The old town is well worth ___.", ["visiting", "to visit", "visit", "visited"], 0, "It's worth + -ing."),
  M("___ you do, don't miss the sunset from the city wall.", ["Whatever", "However", "Whenever", "Whoever"], 0),
  M("A place that few tourists know is ___.", ["off the beaten track", "a tourist trap", "crowded", "a must-see"], 0),
  F("I'd strongly ___ booking your accommodation in advance. (recomendar)", ["recommend"]),
  L("Have you ever wondered what it's like to sleep in a treehouse? In Minca, you can do exactly that, and you might catch a glimpse of a toucan in the morning.", "¿Qué se podría ver por la mañana?", ["Un tucán", "Un mono", "El mar", "Una cascada"], 0),
  O("Trust me, it's well worth the trip. You won't regret it.")
 ],
 more: [
  R("If you only do one thing, make it the museum.", "Si solo haces una cosa, que sea el museo."),
  R("So why not swap the beach for the mountains?", "¿Entonces por qué no cambiar la playa por la montaña?"),
  D("Whatever you do, don't miss the local market."),
  D("This beach is a real hidden gem."),
  M("¿Cuál es el mejor comienzo para un artículo de blog?", ["Imagine waking up to the sound of the sea.", "In this article I will write about a beach.", "The beach. It is good.", "Dear Sir or Madam, I am writing about a beach."], 0),
  M("A restaurant that is overpriced and only for tourists is a ___.", ["tourist trap", "hidden gem", "must-see", "destination"], 0),
  L("If you only have one day in Bogotá, skip the mall and head for La Candelaria. It's full of history, street art and amazing food.", "¿Qué recomienda saltarse?", ["El centro comercial", "La Candelaria", "El arte callejero", "La comida"], 0),
  W("Escribe un artículo para un blog de viajes (mínimo 140 palabras) titulado «A hidden gem in my country». Incluye un título, una pregunta para el lector, al menos tres expresiones para persuadir y un cierre que invite a ir.", 140, [["have you ever", "imagine"], ["i'd strongly recommend", "well worth", "you won't regret", "whatever you do", "you really should", "must-see"], ["hidden gem", "off the beaten track", "breathtaking", "unspoilt", "locals"], ["so why not", "so next time", "trust me"]])
 ],
 exam: M("The museum is ___ a visit, even if you don't like art.", ["well worth", "well worthy", "worth to", "worth of"], 0),
 exam2: F("Go to Barichara. Trust me, you won't ___ it. (arrepentirte)", ["regret"])
},
/* ───────── Día 38 ───────── */
{
 id: "b2-u8-l3",
 title: "Reseñas críticas: películas, series y libros",
 goal: "Escribir y comentar una reseña equilibrada con vocabulario preciso de cine y literatura.",
 theory: [
  { p: "Una **reseña B2** tiene cuatro partes: **1)** presentación (qué es, de qué trata, sin contar el final: **Set in Cartagena in the 1990s, the series follows…**); **2)** lo positivo; **3)** lo negativo; **4)** una recomendación clara (**I'd recommend it to anyone who…** · **Give it a miss unless…**)." },
  { ex: [["Set in Medellín, the film follows a young boxer.", "Ambientada en Medellín, la película sigue a un joven boxeador."], ["The plot is gripping from start to finish.", "La trama atrapa de principio a fin."], ["The acting is outstanding, especially the lead actress.", "La actuación es sobresaliente, en especial la protagonista."], ["However, the ending felt rushed and predictable.", "Sin embargo, el final se sintió apresurado y predecible."], ["I'd recommend it to anyone who enjoys crime dramas.", "Se la recomendaría a cualquiera que disfrute los dramas policiacos."]] },
  { p: "Vocabulario preciso: **the plot** (la trama), **the cast** (el reparto), **the lead / main character**, **the soundtrack**, **the script** (el guion), **the director**, **the twist** (giro), **spoiler**. Adjetivos: positivos **gripping, moving, hilarious, thought-provoking, stunning, must-see**; negativos **predictable, slow-paced, far-fetched** (poco creíble), **overrated, disappointing**." },
  { ex: [["The soundtrack is absolutely stunning.", "La banda sonora es absolutamente espectacular."], ["The twist at the end took me by surprise.", "El giro del final me tomó por sorpresa."], ["The second season was slow-paced and a bit far-fetched.", "La segunda temporada fue lenta y un poco inverosímil."], ["It's a moving story about friendship.", "Es una historia conmovedora sobre la amistad."], ["Without giving away any spoilers, the ending is unforgettable.", "Sin hacer spoilers, el final es inolvidable."]] },
  { tip: "En inglés se dice **The film is set in…** (está ambientada en), no «is situated in». Y para no revelar el final: **I won't give away the ending.**" }
 ],
 vocab: [
  ["review", "sustantivo", "reseña, crítica", "I read a review of the film."],
  ["plot", "sustantivo", "trama, argumento", "The plot is very original."],
  ["cast", "sustantivo", "reparto", "The cast is excellent."],
  ["lead", "sustantivo / adjetivo", "protagonista; principal", "The lead actor is brilliant."],
  ["script", "sustantivo", "guion", "The script is clever."],
  ["soundtrack", "sustantivo", "banda sonora", "I loved the soundtrack."],
  ["twist", "sustantivo", "giro (en la historia)", "What a twist!"],
  ["spoiler", "sustantivo", "spoiler, revelación", "No spoilers, please."],
  ["be set in", "expresión", "estar ambientado en", "It's set in Cali."],
  ["follow", "verbo", "seguir (la historia de)", "The series follows three sisters."],
  ["gripping", "adjetivo", "que atrapa, apasionante", "A gripping thriller."],
  ["moving", "adjetivo", "conmovedor", "A moving story."],
  ["hilarious", "adjetivo", "comiquísimo", "The dialogue is hilarious."],
  ["thought-provoking", "adjetivo", "que hace pensar", "A thought-provoking documentary."],
  ["stunning", "adjetivo", "espectacular", "The photography is stunning."],
  ["predictable", "adjetivo", "predecible", "The ending was predictable."],
  ["slow-paced", "adjetivo", "de ritmo lento", "The first episode is slow-paced."],
  ["far-fetched", "adjetivo", "inverosímil, poco creíble", "The plot is a bit far-fetched."],
  ["overrated", "adjetivo", "sobrevalorado", "I think it's overrated."],
  ["give away", "verbo", "revelar", "Don't give away the ending."],
  ["binge-watch", "verbo", "ver muchos capítulos seguidos", "We binge-watched the whole series."],
  ["give it a miss", "expresión", "no verla, saltársela", "If you hate violence, give it a miss."]
 ],
 dialogue: {
  title: "La serie de la que todos hablan",
  scene: "Paula y Nicolás hablan de una serie colombiana de suspenso que acaban de ver en una plataforma.",
  a: "Nicolás", b: "Paula",
  lines: [
   ["A", "Did you finish the series? I binge-watched the whole thing on Saturday.", "¿Terminaste la serie? Yo la vi entera el sábado."],
   ["B", "Yes! It's set in Cartagena in the nineties, right? The photography is stunning.", "¡Sí! Está ambientada en Cartagena en los noventa, ¿cierto? La fotografía es espectacular."],
   ["A", "Absolutely. And the plot is gripping. I couldn't stop watching.", "Totalmente. Y la trama atrapa. No podía parar de verla."],
   ["B", "The cast is excellent too. The lead actress is going to win awards.", "El reparto también es excelente. La protagonista va a ganar premios."],
   ["A", "Agreed. What did you think of the soundtrack?", "De acuerdo. ¿Qué te pareció la banda sonora?"],
   ["B", "Brilliant. All those old vallenatos. But I have to say the last two episodes were a bit far-fetched.", "Buenísima. Todos esos vallenatos viejos. Pero tengo que decir que los dos últimos capítulos fueron un poco inverosímiles."],
   ["A", "Really? I loved the twist at the end.", "¿En serio? A mí me encantó el giro del final."],
   ["B", "Don't give away anything! My sister hasn't seen it yet.", "¡No reveles nada! Mi hermana todavía no la ha visto."],
   ["A", "Ha ha, no spoilers. But was it predictable for you?", "Jaja, sin spoilers. ¿Pero te pareció predecible?"],
   ["B", "Not predictable, but slow-paced in the middle. Episodes four and five were too long.", "Predecible no, pero lenta en la mitad. Los capítulos cuatro y cinco fueron muy largos."],
   ["A", "Fair point. So, would you recommend it?", "Buen punto. Entonces, ¿la recomendarías?"],
   ["B", "Definitely, to anyone who enjoys crime dramas. If you hate violence, though, give it a miss.", "Definitivamente, a cualquiera que disfrute los dramas policiacos. Pero si odias la violencia, mejor no la veas."],
   ["A", "Four stars out of five, then?", "¿Cuatro estrellas de cinco, entonces?"],
   ["B", "Four and a half. It's the best Colombian series I've seen in years.", "Cuatro y media. Es la mejor serie colombiana que he visto en años."]
  ]
 },
 practice: [
  M("The film is ___ in Bogotá during the 1980s.", ["set", "situated", "placed", "located on"], 0),
  M("I knew how it would end from the first scene. It was very ___.", ["predictable", "gripping", "moving", "thought-provoking"], 0),
  M("Please don't ___ the ending. I haven't seen it yet.", ["give away", "give up", "give in", "give back"], 0),
  F("The ___ is excellent: every actor is perfect for their role. (reparto)", ["cast"]),
  L("Without giving away any spoilers, the twist in the last episode completely changes the story. It's thought-provoking and very moving.", "¿Qué cambia por completo la historia?", ["El giro del último capítulo", "El primer capítulo", "La banda sonora", "El reparto"], 0),
  O("I'd recommend it to anyone who enjoys a gripping thriller.")
 ],
 more: [
  R("The series follows three sisters in Cali.", "La serie sigue a tres hermanas en Cali."),
  R("The plot was a bit far-fetched.", "La trama fue un poco inverosímil."),
  D("The soundtrack is absolutely stunning."),
  D("If you hate horror films, give it a miss."),
  M("A story that makes you cry is ___.", ["moving", "hilarious", "far-fetched", "slow-paced"], 0),
  M("¿Qué parte NO debería tener una reseña?", ["El final completo de la historia", "Una recomendación", "Lo positivo", "Lo negativo"], 0),
  L("Everybody told me it was a masterpiece, but honestly I found it overrated. The acting was good, but the script was weak.", "¿Qué le pareció débil?", ["El guion", "La actuación", "La música", "La fotografía"], 0),
  W("Escribe una reseña para la revista de tu ciudad (mínimo 140 palabras) de una película, serie o libro. Incluye dónde está ambientada y de qué trata (sin spoilers), lo positivo, lo negativo y una recomendación clara.", 140, [["set in", "follows", "is about", "tells the story"], ["plot", "cast", "acting", "script", "soundtrack", "characters", "ending"], ["however", "although", "on the other hand", "but"], ["recommend", "give it a miss", "must-see", "out of"]])
 ],
 exam: M("The ___ at the end took everyone by surprise.", ["twist", "cast", "script", "spoiler"], 0),
 exam2: F("If you don't like slow films, give it a ___. (sáltatela)", ["miss"])
},
/* ───────── Día 39 ───────── */
{
 id: "b2-u8-l4",
 title: "Escribir un informe: bienestar y salud mental en el trabajo",
 goal: "Presentar resultados de una encuesta y hacer recomendaciones en un informe formal.",
 theory: [
  { p: "Un **informe** (report, B2 First writing parte 2) es formal e impersonal y se organiza con **títulos**: **Introduction · Findings · Recommendations · Conclusion**. Empieza con el propósito: **The aim of this report is to…** · **This report outlines…** Presenta datos: **According to the survey,…** · **The majority of staff (65%)…** · **Only a minority…** · **It was found that…**" },
  { ex: [["The aim of this report is to assess staff well-being.", "El objetivo de este informe es evaluar el bienestar del personal."], ["According to the survey, 60% of employees feel stressed.", "Según la encuesta, el 60 % de los empleados se siente estresado."], ["The majority of staff would like flexible hours.", "La mayoría del personal quisiera horario flexible."], ["Only a small minority use the gym.", "Solo una pequeña minoría usa el gimnasio."], ["It was found that long meetings reduce productivity.", "Se encontró que las reuniones largas reducen la productividad."]] },
  { p: "Para **recomendar** con formalidad: **It is recommended that the company (should) introduce…** · **I would suggest + -ing** · **It would be advisable to…** · **The company should consider…** Vocabulario de **bienestar**: **well-being, mental health, burnout** (agotamiento), **workload** (carga de trabajo), **work-life balance**, **anxiety, counselling, take a break, sick leave, flexible hours**." },
  { ex: [["It is recommended that the company introduce flexible hours.", "Se recomienda que la empresa implemente horario flexible."], ["I would suggest offering free counselling sessions.", "Sugeriría ofrecer sesiones gratuitas de apoyo psicológico."], ["It would be advisable to reduce the workload.", "Sería aconsejable reducir la carga de trabajo."], ["Many employees are at risk of burnout.", "Muchos empleados están en riesgo de agotamiento."], ["A better work-life balance would improve morale.", "Un mejor equilibrio entre vida y trabajo mejoraría el ánimo."]] },
  { tip: "En un informe evita **I think** y las contracciones (**don't, it's**). Usa formas impersonales: **It was found that… · It appears that… · It is clear that…**" }
 ],
 vocab: [
  ["report", "sustantivo", "informe", "Write a report for your manager."],
  ["the aim of this report", "expresión", "el objetivo de este informe", "The aim of this report is to…"],
  ["findings", "sustantivo", "hallazgos, resultados", "The findings are worrying."],
  ["survey", "sustantivo", "encuesta", "We carried out a survey."],
  ["the majority of", "expresión", "la mayoría de", "The majority of staff agree."],
  ["a minority of", "expresión", "una minoría de", "Only a minority complained."],
  ["it was found that", "expresión", "se encontró que", "It was found that people work late."],
  ["it is recommended that", "expresión", "se recomienda que", "It is recommended that we act now."],
  ["advisable", "adjetivo", "aconsejable", "It would be advisable to wait."],
  ["well-being", "sustantivo", "bienestar", "Staff well-being is important."],
  ["mental health", "expresión", "salud mental", "Mental health matters."],
  ["burnout", "sustantivo", "agotamiento, desgaste laboral", "Burnout is a serious problem."],
  ["workload", "sustantivo", "carga de trabajo", "My workload is too heavy."],
  ["work-life balance", "expresión", "equilibrio vida-trabajo", "I need a better work-life balance."],
  ["anxiety", "sustantivo", "ansiedad", "Anxiety affects many young people."],
  ["counselling", "sustantivo", "apoyo psicológico, asesoría", "The company offers counselling."],
  ["sick leave", "expresión", "incapacidad, licencia por enfermedad", "She's on sick leave."],
  ["morale", "sustantivo", "moral, ánimo (de un grupo)", "Team morale is low."],
  ["outline", "verbo", "describir a grandes rasgos", "This report outlines the main problems."],
  ["assess", "verbo", "evaluar", "We need to assess the situation."],
  ["measure", "sustantivo", "medida", "We need urgent measures."],
  ["take a break", "expresión", "tomar un descanso", "Take a break every two hours."]
 ],
 dialogue: {
  title: "Los resultados de la encuesta",
  scene: "Natalia, de recursos humanos, revisa con su jefe Germán los resultados de una encuesta de bienestar antes de escribir el informe para la gerencia.",
  a: "Germán", b: "Natalia",
  lines: [
   ["A", "So, what did the well-being survey show?", "Bueno, ¿qué mostró la encuesta de bienestar?"],
   ["B", "The findings are quite worrying. The majority of staff, about sixty-five percent, say their workload is too heavy.", "Los resultados son bastante preocupantes. La mayoría del personal, como el sesenta y cinco por ciento, dice que tiene demasiada carga de trabajo."],
   ["A", "That's high. Anything about mental health?", "Es alto. ¿Algo sobre salud mental?"],
   ["B", "Yes. Almost forty percent said they had felt anxiety or symptoms of burnout in the last six months.", "Sí. Casi el cuarenta por ciento dijo que había sentido ansiedad o síntomas de agotamiento en los últimos seis meses."],
   ["A", "Hmm. And how many people took sick leave?", "Mmm. ¿Y cuánta gente tomó incapacidad?"],
   ["B", "Fewer than you'd think, only a minority. It seems people keep working even when they're unwell.", "Menos de lo que uno pensaría, solo una minoría. Parece que la gente sigue trabajando aunque se sienta mal."],
   ["A", "That's not good for anyone. What do they want?", "Eso no es bueno para nadie. ¿Qué quieren?"],
   ["B", "Flexible hours, mostly. And fewer meetings. It was found that people spend twelve hours a week in meetings.", "Sobre todo horario flexible. Y menos reuniones. Se encontró que la gente pasa doce horas a la semana en reuniones."],
   ["A", "Twelve hours! OK. What will you recommend in the report?", "¡Doce horas! Bueno. ¿Qué vas a recomendar en el informe?"],
   ["B", "First, it is recommended that the company introduce flexible hours for everyone. Second, I would suggest limiting meetings to thirty minutes.", "Primero, se recomienda que la empresa implemente horario flexible para todos. Segundo, sugeriría limitar las reuniones a treinta minutos."],
   ["A", "And counselling?", "¿Y apoyo psicológico?"],
   ["B", "Yes, it would be advisable to offer free counselling sessions. Several companies in Medellín already do it, and morale has improved.", "Sí, sería aconsejable ofrecer sesiones gratuitas. Varias empresas en Medellín ya lo hacen y la moral ha mejorado."],
   ["A", "Excellent. Make sure the report is clear and short. The directors don't read long documents.", "Excelente. Asegúrate de que el informe sea claro y corto. Los directores no leen documentos largos."],
   ["B", "Don't worry. Four sections, clear headings and the key numbers in the first paragraph.", "Tranquilo. Cuatro secciones, títulos claros y las cifras clave en el primer párrafo."]
  ]
 },
 practice: [
  M("¿Cuál es el mejor comienzo para un informe?", ["The aim of this report is to assess staff satisfaction.", "Hi! I want to tell you about the survey.", "I think the staff are not very happy, you know.", "Once upon a time, there was a company."], 0),
  M("It is recommended that the company ___ more breaks.", ["introduce", "introduces will", "to introduce", "introducing"], 0, "It is recommended that + verbo base (subjuntivo)."),
  M("I would suggest ___ free counselling sessions.", ["offering", "to offer", "offer", "that offering"], 0),
  F("Too much work and stress can lead to ___. (agotamiento laboral)", ["burnout"]),
  L("According to the survey, the majority of employees would prefer to work from home two days a week, while only a minority want to stay in the office every day.", "¿Qué prefiere la mayoría?", ["Trabajar desde casa dos días a la semana", "Ir a la oficina todos los días", "Trabajar desde casa siempre", "Trabajar menos horas"], 0),
  O("It would be advisable to reduce the workload of the sales team.")
 ],
 more: [
  R("The aim of this report is to outline the main problems.", "El objetivo de este informe es describir los principales problemas."),
  R("It was found that meetings were too long.", "Se encontró que las reuniones eran muy largas."),
  D("The majority of staff feel stressed at work."),
  D("A better work-life balance would improve morale."),
  M("En un informe formal NO debes usar:", ["contracciones como don't y it's", "títulos para cada sección", "datos de la encuesta", "recomendaciones"], 0),
  M("Your ___ is the amount of work you have to do.", ["workload", "well-being", "burnout", "morale"], 0),
  L("It appears that staff who take regular breaks are more productive. Therefore, it is recommended that managers encourage short breaks every two hours.", "¿Qué se recomienda?", ["Que los jefes promuevan pausas cortas cada dos horas", "Eliminar los descansos", "Trabajar más horas", "Hacer más reuniones"], 0),
  W("Escribe un informe para el director de tu empresa o colegio sobre el bienestar de las personas (mínimo 140 palabras). Usa títulos (Introduction, Findings, Recommendations, Conclusion), datos de una encuesta imaginaria y al menos dos recomendaciones formales.", 140, [["introduction", "the aim of this report", "this report"], ["findings", "according to", "the majority", "minority", "it was found"], ["recommendations", "it is recommended", "i would suggest", "advisable", "should consider"], ["conclusion", "to conclude", "in conclusion"]])
 ],
 exam: M("___ of this report is to assess the new working hours.", ["The aim", "The aims for", "My idea", "The finish"], 0),
 exam2: F("It is ___ that the company introduce flexible hours. (se recomienda)", ["recommended"])
},
/* ───────── Día 40 ───────── */
{
 id: "b2-u8-l5",
 title: "Sostenibilidad: debatir soluciones y proponer cambios",
 goal: "Discutir problemas ambientales con argumentos y matices, y proponer soluciones realistas.",
 theory: [
  { p: "Vocabulario de **sostenibilidad**: **sustainable** (sostenible), **carbon emissions**, **fossil fuels** (combustibles fósiles), **renewable energy**, **carbon footprint**, **single-use plastics**, **landfill** (relleno sanitario), **biodiversity**, **deforestation**, **offset** (compensar), **greenwashing** (publicidad «verde» engañosa), **tipping point** (punto de no retorno), **circular economy**." },
  { ex: [["Fossil fuels are still our main source of energy.", "Los combustibles fósiles siguen siendo nuestra principal fuente de energía."], ["Most of our rubbish ends up in landfill.", "La mayoría de nuestra basura termina en el relleno sanitario."], ["Deforestation threatens biodiversity in the Amazon.", "La deforestación amenaza la biodiversidad en la Amazonía."], ["Some companies are accused of greenwashing.", "A algunas empresas las acusan de publicidad verde engañosa."], ["We may be close to a tipping point.", "Puede que estemos cerca de un punto de no retorno."]] },
  { p: "Para **debatir soluciones** como en la parte 3 del speaking: proponer (**One solution would be to… · What if we…?**), evaluar (**That would be effective, but… · The problem with that is… · It might be more realistic to…**), dar prioridad (**The most urgent thing is… · In the long term,…**) y llegar a un acuerdo (**So we agree that… · Shall we go for…?**)." },
  { ex: [["One solution would be to tax single-use plastics.", "Una solución sería ponerle impuestos al plástico de un solo uso."], ["That would be effective, but it might be unpopular.", "Eso sería efectivo, pero podría ser impopular."], ["The problem with electric cars is the price.", "El problema con los carros eléctricos es el precio."], ["In the long term, education is the key.", "A largo plazo, la educación es la clave."], ["So we agree that public transport is the priority.", "Entonces estamos de acuerdo en que el transporte público es la prioridad."]] },
  { tip: "No exageres: en un debate B2 suena más convincente matizar (**This could significantly reduce…**) que decir **This will solve everything**. Usa **could, might, tend to, to some extent**." }
 ],
 vocab: [
  ["sustainable", "adjetivo", "sostenible", "A sustainable lifestyle."],
  ["carbon emissions", "expresión", "emisiones de carbono", "We must cut carbon emissions."],
  ["fossil fuels", "expresión", "combustibles fósiles", "Coal and oil are fossil fuels."],
  ["renewable energy", "expresión", "energía renovable", "Colombia is investing in renewable energy."],
  ["carbon footprint", "expresión", "huella de carbono", "Flying increases your carbon footprint."],
  ["landfill", "sustantivo", "relleno sanitario", "The landfill is almost full."],
  ["biodiversity", "sustantivo", "biodiversidad", "Colombia has amazing biodiversity."],
  ["threaten", "verbo", "amenazar", "Mining threatens the páramos."],
  ["offset", "verbo", "compensar", "Plant trees to offset emissions."],
  ["greenwashing", "sustantivo", "lavado verde, publicidad ecológica engañosa", "That ad is pure greenwashing."],
  ["tipping point", "expresión", "punto de no retorno", "We are near a tipping point."],
  ["circular economy", "expresión", "economía circular", "A circular economy reduces waste."],
  ["single-use", "adjetivo", "de un solo uso", "Ban single-use plastics."],
  ["phase out", "verbo", "eliminar gradualmente", "Phase out coal by 2040."],
  ["tax", "verbo / sustantivo", "gravar; impuesto", "Tax plastic bags."],
  ["incentive", "sustantivo", "incentivo", "Incentives for electric cars."],
  ["effective", "adjetivo", "eficaz, efectivo", "An effective solution."],
  ["unpopular", "adjetivo", "impopular", "The measure was unpopular."],
  ["realistic", "adjetivo", "realista", "A more realistic goal."],
  ["priority", "sustantivo", "prioridad", "Water is the main priority."],
  ["in the long term", "expresión", "a largo plazo", "In the long term, it saves money."],
  ["urgent", "adjetivo", "urgente", "The most urgent problem is water."]
 ],
 dialogue: {
  title: "El debate del colegio",
  scene: "En un concurso de debate escolar en Bucaramanga, Sara y Miguel deben decidir qué medida ambiental proponer al alcalde.",
  a: "Sara", b: "Miguel",
  lines: [
   ["A", "OK, we have to choose one measure for the city. Shall we start with transport?", "Bueno, tenemos que escoger una medida para la ciudad. ¿Empezamos con el transporte?"],
   ["B", "Sure. One solution would be to ban cars from the city centre on weekdays.", "Claro. Una solución sería prohibir los carros en el centro entre semana."],
   ["A", "That would be effective, but it might be very unpopular. Many people depend on their cars.", "Sería efectivo, pero podría ser muy impopular. Mucha gente depende del carro."],
   ["B", "True. What if we offered incentives instead, like cheaper electric buses?", "Cierto. ¿Y si ofrecemos incentivos en cambio, como buses eléctricos más baratos?"],
   ["A", "I like that. It could significantly reduce carbon emissions without punishing anyone.", "Me gusta. Podría reducir mucho las emisiones de carbono sin castigar a nadie."],
   ["B", "The problem is that electric buses are expensive at first.", "El problema es que los buses eléctricos son caros al principio."],
   ["A", "Yes, but in the long term they save money on fuel. And the air would be much cleaner.", "Sí, pero a largo plazo ahorran en combustible. Y el aire estaría mucho más limpio."],
   ["B", "What about waste? The landfill is almost full, and most plastic isn't recycled.", "¿Y la basura? El relleno sanitario está casi lleno y la mayoría del plástico no se recicla."],
   ["A", "That's urgent too. We could propose taxing single-use plastics and moving towards a circular economy.", "Eso también es urgente. Podríamos proponer gravar los plásticos de un solo uso y avanzar hacia una economía circular."],
   ["B", "But we can only choose one. Which is the priority?", "Pero solo podemos escoger una. ¿Cuál es la prioridad?"],
   ["A", "To some extent, both are important. However, transport affects everyone's health every day.", "Hasta cierto punto, las dos son importantes. Sin embargo, el transporte afecta la salud de todos todos los días."],
   ["B", "Fair point. So we agree that cheaper electric buses are our main proposal?", "Buen punto. ¿Entonces estamos de acuerdo en que los buses eléctricos más baratos son nuestra propuesta principal?"],
   ["A", "Agreed. And we'll mention plastic as a second step.", "De acuerdo. Y mencionamos el plástico como segundo paso."],
   ["B", "Perfect. Let's go and convince the judges.", "Perfecto. Vamos a convencer a los jurados."]
  ]
 },
 practice: [
  M("Coal, oil and gas are ___.", ["fossil fuels", "renewable energy", "landfill", "biodiversity"], 0),
  M("When a company pretends to be eco-friendly but isn't, it's called ___.", ["greenwashing", "offsetting", "recycling", "phasing out"], 0),
  M("One solution would be ___ single-use plastics.", ["to ban", "ban", "banning to", "that ban"], 0),
  F("The government plans to phase ___ coal power stations by 2040. (eliminar gradualmente)", ["out"]),
  L("Banning cars completely would be effective, but it might be too unpopular. It might be more realistic to improve public transport first.", "¿Qué parece más realista?", ["Mejorar primero el transporte público", "Prohibir todos los carros", "No hacer nada", "Subir el precio de la gasolina"], 0),
  O("In the long term, renewable energy is cheaper and cleaner.")
 ],
 more: [
  R("Deforestation threatens biodiversity in the Amazon.", "La deforestación amenaza la biodiversidad en la Amazonía."),
  R("So we agree that transport is the priority.", "Entonces estamos de acuerdo en que el transporte es la prioridad."),
  D("Most of our rubbish ends up in landfill."),
  D("We need to reduce our carbon footprint."),
  M("¿Cuál frase está mejor matizada para un debate?", ["This measure could significantly reduce emissions.", "This measure will solve all our problems.", "This is the only possible solution.", "Everybody agrees with this."], 0),
  M("—What if we taxed plastic bags? —That would be effective, ___ some people might complain.", ["but", "so", "because", "unless"], 0),
  L("Colombia is one of the most biodiverse countries in the world, but mining and deforestation threaten many species. Some experts warn that we may be close to a tipping point.", "¿Qué advierten algunos expertos?", ["Que podríamos estar cerca de un punto de no retorno", "Que el problema está resuelto", "Que la minería ayuda", "Que no hay especies en peligro"], 0),
  W("Escribe una propuesta al alcalde de tu ciudad (mínimo 140 palabras) con dos medidas para hacerla más sostenible. Explica el problema, evalúa ventajas y desventajas de cada medida (that would be effective, but…; the problem with…) y di cuál es la prioridad.", 140, [["sustainable", "emissions", "renewable", "recycling", "waste", "landfill", "plastic", "pollution", "carbon"], ["one solution would be", "what if", "we could", "it might be more realistic"], ["would be effective", "the problem with", "but", "however"], ["priority", "in the long term", "the most urgent"]])
 ],
 exam: M("Many companies plant trees to ___ their carbon emissions.", ["offset", "threaten", "phase", "tax"], 0),
 exam2: F("Colombia has one of the highest levels of ___ in the world. (biodiversidad)", ["biodiversity"])
}
],
/* ───────── Quiz de la unidad 8 ───────── */
quiz: [
 M("In the first photo they're relaxed, ___ in the second they look stressed.", ["whereas", "despite", "however", "in spite"], 0),
 M("The cathedral is well worth ___.", ["visiting", "to visit", "visit", "for visiting"], 0),
 M("The film is ___ in Barranquilla during the Carnival.", ["set", "situated", "placed", "based on"], 0),
 M("It is recommended that every employee ___ a break every two hours.", ["take", "takes will", "to take", "taking"], 0),
 M("Coal and oil are examples of ___.", ["fossil fuels", "renewable energy", "carbon offsets", "landfills"], 0),
 F("They look as ___ they've been arguing. (si)", ["if", "though"]),
 L("Without giving away the ending, I'd say the plot is gripping but a bit far-fetched. Still, I'd recommend it to anyone who loves thrillers.", "¿Qué defecto menciona?", ["Que es un poco inverosímil", "Que es lenta", "Que el reparto es malo", "Que es muy corta"], 0),
 L("According to the survey, the majority of staff feel their workload is too heavy, and almost a third have experienced symptoms of burnout.", "¿Cuántos han tenido síntomas de agotamiento?", ["Casi un tercio", "La mayoría", "Nadie", "La mitad"], 0),
 W("Escribe un artículo para la revista de tu empresa o universidad (mínimo 140 palabras) titulado «How to look after yourself and the planet». Da consejos de bienestar y de sostenibilidad, persuade al lector (I'd strongly recommend, it's well worth…) y matiza tus afirmaciones.", 140, [["well-being", "mental health", "stress", "burnout", "work-life balance", "take a break"], ["sustainable", "recycle", "plastic", "carbon footprint", "renewable", "waste"], ["i'd strongly recommend", "well worth", "you won't regret", "why not", "you really should"], ["could", "might", "tend to", "to some extent"]]),
 O("Both photos show people spending time with their families."),
 O("It would be advisable to reduce the number of meetings.")
],
pool: [
 M("She never helps anyone. She's very ___.", ["selfish", "supportive", "sensitive", "trustworthy"], 0),
 M("___ you do, don't miss the street food in Cartagena.", ["Whatever", "However", "Whenever", "Wherever"], 0),
 M("Please don't ___ the ending!", ["give away", "give up", "give in", "give out"], 0),
 M("I would suggest ___ the meetings to thirty minutes.", ["limiting", "to limit", "limit", "that limiting"], 0),
 M("One solution would be ___ public transport cheaper.", ["to make", "make", "making to", "that make"], 0),
 M("A place few tourists know is ___.", ["off the beaten track", "a tourist trap", "overrated", "crowded"], 0),
 F("The majority ___ staff would like flexible hours. (de)", ["of"]),
 F("I binge-___ the whole series in one weekend. (ver seguido, pasado)", ["watched"]),
 L("They can't be tourists. They're speaking to the waiter like old friends. I'd say they're probably locals.", "¿Qué cree quien habla?", ["Que son personas del lugar", "Que son turistas", "Que son meseros", "Que son actores"], 0),
 L("If you only have one day in Medellín, make it Comuna 13. The street art is breathtaking, and the local guides tell amazing stories.", "¿Qué recomienda?", ["Visitar la Comuna 13", "Ir al centro comercial", "Quedarse en el hotel", "Ir a la playa"], 0),
 L("Some companies say their products are green, but it's just greenwashing. Real change means cutting emissions, not just changing the packaging.", "¿Qué significa un cambio real, según quien habla?", ["Reducir las emisiones", "Cambiar el empaque", "Hacer más publicidad", "Subir los precios"], 0),
 W("Escribe una reseña (mínimo 140 palabras) de un lugar turístico de Colombia que conozcas, como si fuera para una página de viajes: dónde está, qué lo hace especial, lo negativo, si es sostenible y tu recomendación.", 140, [["breathtaking", "stunning", "hidden gem", "must-see", "crowded", "tourist trap", "unspoilt"], ["however", "although", "on the other hand", "but"], ["recommend", "well worth", "give it a miss", "out of"], ["sustainable", "local", "nature", "plastic", "environment"]]),
 O("They look as if they're having a wonderful time."),
 O("The plot is gripping from start to finish."),
 O("One solution would be to tax single-use plastics.")
]
};
