/* Práctica extra A2 por unidad: escucha, habla libre (talk), pronunciación (oral) y algo de escritura. */
const L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), M = (q, o, a, x) => ({ t: "mc", q, o, a, x }), F = (q, ans, x) => ({ t: "fill", q, ans, x }),
  O = text => ({ t: "oral", text }), T = (q, min, keys, model, say) => ({ t: "talk", q, min, keys, model, ...(say ? { say } : {}) });
module.exports = [
/* Unidad 1 · Historias del pasado */
[
 L("When I was a child, I lived in a small town near the sea. Every summer, my father took us fishing, and my mother made delicious fish soup.", "¿Qué hacía la mamá?", ["Una sopa de pescado deliciosa", "Pescaba con el papá", "Trabajaba en el mar", "Vendía pescado"], 0),
 L("I was walking home when it started to rain. I didn't have an umbrella, so I ran into a café and waited there for an hour.", "¿Qué hizo cuando empezó a llover?", ["Entró a un café y esperó", "Compró una sombrilla", "Tomó un taxi", "Siguió caminando"], 0),
 L("Last year we went to Cartagena for a week. We stayed in a hotel in the old city and visited the castle. The weather was really hot.", "¿Cuánto tiempo estuvieron en Cartagena?", ["Una semana", "Un mes", "Un fin de semana", "Dos semanas"], 0),
 L("While I was cooking dinner, the phone rang. It was my brother. He was in Spain and he wanted to say happy birthday.", "¿Por qué llamó el hermano?", ["Para decir feliz cumpleaños", "Para pedir dinero", "Porque estaba enfermo", "Para invitarlo a España"], 0),
 M("I ___ TV when you called me.", ["was watching", "watched", "am watching", "watch"], 0, "Acción en progreso interrumpida: pasado continuo."),
 M("We ___ to the beach last summer.", ["went", "go", "have gone", "were go"], 0, "Pasado simple con last summer."),
 F("Where ___ you go on holiday last year?", ["did"], "Pregunta en pasado: did."),
 O("When I was a child, I lived in a small town near the mountains."),
 O("I was sleeping when the phone rang."),
 T("Tell a story about a holiday or a special day in the past. Where did you go and what did you do?", 25, [["went", "visited", "was", "were"], ["last", "ago", "when"]], "Two years ago I went to San Andrés with my family. We swam in the sea every day and we ate a lot of fish. The weather was perfect and we were very happy."),
 T("What were you doing yesterday at eight in the evening?", 12, [["i was", "were"]], "Yesterday at eight I was cooking dinner and my children were doing their homework."),
 T("Listen and answer: what was your life like as a child?", 18, [["when i was", "i lived", "i used to"]], "When I was a child, I lived in Cali. I used to play in the street with my cousins every afternoon.", "Tell me about your childhood. Where did you live?")
],
/* Unidad 2 · Comparar y describir */
[
 L("Bogotá is bigger than Medellín, but Medellín is warmer. For me, Medellín is the most beautiful city in Colombia.", "¿Qué ciudad es más cálida?", ["Medellín", "Bogotá", "Las dos igual", "No dice"], 0),
 L("This phone is more expensive than that one, but the camera is much better and the battery lasts longer.", "¿Qué ventaja tiene el teléfono caro?", ["Mejor cámara y batería", "Es más pequeño", "Es más barato", "Tiene más colores"], 0),
 L("My brother is tall and thin, with curly hair. He's very funny, but he's a bit lazy.", "¿Cómo es el hermano?", ["Alto, delgado, gracioso y algo perezoso", "Bajo y serio", "Gordo y trabajador", "Alto y tímido"], 0),
 L("The hotel was cheaper than we expected, but the room was very small and the bed wasn't very comfortable.", "¿Qué problema tenía el hotel?", ["La habitación era pequeña y la cama incómoda", "Era muy caro", "No tenía baño", "Estaba lejos"], 0),
 M("Today is ___ than yesterday.", ["hotter", "more hot", "hottest", "most hot"], 0, "Comparativo de hot: hotter."),
 M("It's the ___ restaurant in town.", ["best", "better", "good", "most good"], 0, "Superlativo de good: the best."),
 F("My sister is ___ (old) than me.", ["older"], "Comparativo: older."),
 O("My city is smaller than Bogotá, but it's more beautiful."),
 O("This is the best coffee I have ever had."),
 T("Compare two cities you know. Which one do you prefer and why?", 20, [["than"], ["because"]], "Medellín is warmer than Bogotá and it's cleaner. Bogotá is bigger and has more museums. I prefer Medellín because the weather is better."),
 T("Describe a person you love: appearance and personality.", 18, [["he is", "she is", "he's", "she's"], ["has"]], "My mother is short and she has long black hair. She's very kind and patient, and she's the funniest person in my family."),
 T("Listen and answer.", 12, [["than", "the most", "the best"]], "I think dogs are better than cats because they are more friendly.", "Which is better: dogs or cats? Why?")
],
/* Unidad 3 · Planes y futuro */
[
 L("Next weekend I'm going to visit my parents in Pereira. We're going to have a big lunch on Sunday because it's my father's birthday.", "¿Por qué habrá un almuerzo grande?", ["Es el cumpleaños del papá", "Es Navidad", "Llega un primo", "Es día festivo"], 0),
 L("I'm meeting Laura at six tomorrow. We're going to the cinema and then we'll probably have dinner somewhere.", "¿Qué van a hacer después del cine?", ["Probablemente cenar", "Ir a bailar", "Ir a casa", "Ir de compras"], 0),
 L("I think it will rain this afternoon, so I'm going to take my umbrella.", "¿Por qué lleva sombrilla?", ["Cree que va a llover", "Hace mucho sol", "Se la prestó a alguien", "Va a la playa"], 0),
 L("Don't worry, I'll help you with your homework after dinner. I promise.", "¿Qué promete?", ["Ayudar con la tarea después de la cena", "Cocinar la cena", "Ir al colegio", "Llamar mañana"], 0),
 M("Look at those clouds! It ___ rain.", ["is going to", "will to", "goes", "is raining to"], 0, "Predicción con evidencia: be going to."),
 M("I'm tired. I think I ___ go to bed early.", ["'ll", "am going", "going", "would"], 0, "Decisión espontánea: will."),
 F("What ___ you doing tomorrow evening?", ["are"], "Planes fijos: presente continuo."),
 O("Next year I'm going to study English in Canada."),
 O("I'll call you as soon as I arrive."),
 T("What are your plans for next weekend?", 18, [["going to", "i'm", "i will", "i'll"]], "Next weekend I'm going to visit my grandparents. On Saturday I'm going to clean my house, and on Sunday I'll probably go to the park."),
 T("How do you imagine your life in ten years?", 18, [["will"]], "In ten years I will have my own house. I will speak English very well and I think I will work in an international company."),
 T("Listen and answer.", 12, [["going to", "i'm", "i'll"]], "On my next holiday I'm going to travel to the beach with my family.", "What are you going to do on your next holiday?")
],
/* Unidad 4 · Experiencias */
[
 L("Have you ever been to Mexico? I've been there twice. The food is amazing, but I've never tried the spiciest dishes.", "¿Cuántas veces ha ido a México?", ["Dos veces", "Nunca", "Una vez", "Tres veces"], 0),
 L("I've just finished my report, but I haven't sent it yet. I'll send it after lunch.", "¿Qué no ha hecho todavía?", ["Enviar el informe", "Terminar el informe", "Almorzar", "Empezar el informe"], 0),
 L("I've lived in this apartment since 2019. Before that, I lived with my parents for thirty years.", "¿Desde cuándo vive en el apartamento?", ["Desde 2019", "Hace treinta años", "Desde 2009", "Desde el año pasado"], 0),
 L("My sister has already visited six countries, but she has never been to Asia. She wants to go to Japan next year.", "¿Adónde quiere ir la hermana?", ["A Japón", "A México", "A España", "A Brasil"], 0),
 M("Have you ever ___ sushi?", ["eaten", "ate", "eat", "eating"], 0, "Presente perfecto: have + participio (eaten)."),
 M("I've worked here ___ five years.", ["for", "since", "ago", "during"], 0, "Duración: for."),
 F("She has ___ (be) to Spain three times.", ["been"], "Participio de be: been."),
 O("I have never been on a plane, but I'd love to fly one day."),
 O("We have lived in this city for ten years."),
 T("Talk about an interesting experience you have had. Have you ever done something unusual?", 20, [["i have", "i've"], ["ever", "never", "once", "twice"]], "I have done many interesting things. I've swum with dolphins once in Santa Marta, and I've climbed a mountain. But I have never jumped from a plane."),
 T("What have you done this week?", 15, [["i have", "i've"], ["this week", "already", "just"]], "This week I've worked a lot. I've already finished two projects and I've just started a new English course."),
 T("Listen and answer.", 12, [["i have", "i've", "never"]], "No, I've never been to another country, but I'd like to visit Spain.", "Have you ever travelled to another country?")
],
/* Unidad 5 · Salud y obligaciones */
[
 L("You look tired. You should go to bed earlier and you shouldn't drink so much coffee in the afternoon.", "¿Qué le aconseja?", ["Acostarse más temprano y tomar menos café", "Tomar más café", "Hacer ejercicio de noche", "Trabajar menos"], 0),
 L("At my new job, I have to wear a uniform, but I don't have to work on weekends.", "¿Qué NO tiene que hacer?", ["Trabajar los fines de semana", "Usar uniforme", "Llegar temprano", "Hablar inglés"], 0),
 L("I've had a terrible headache since yesterday, and now I have a temperature too. I think I'll call the doctor.", "¿Qué va a hacer?", ["Llamar al médico", "Ir a trabajar", "Tomar café", "Hacer ejercicio"], 0),
 L("You mustn't use your phone while you're driving. It's very dangerous and it's against the law.", "¿Qué está prohibido?", ["Usar el teléfono mientras maneja", "Manejar de noche", "Escuchar música", "Manejar rápido"], 0),
 M("You ___ smoke here. It's not allowed.", ["mustn't", "don't have to", "should", "can"], 0, "Prohibición: mustn't."),
 M("I have a cold. What ___ I do?", ["should", "must to", "have", "am"], 0, "Pedir consejo: should."),
 F("You don't ___ to bring food. There's a restaurant. (necesidad)", ["have"], "Don't have to = no es necesario."),
 O("You should drink more water and do some exercise."),
 O("I have to get up early tomorrow because I have an exam."),
 T("A friend is always tired. Give them three pieces of advice.", 18, [["you should"], ["you shouldn't", "you should not"]], "You should go to bed earlier. You should eat more fruit and vegetables. And you shouldn't use your phone in bed at night."),
 T("What do you have to do at work or at home every day?", 15, [["i have to", "i must"]], "Every day I have to take my children to school. At work I have to answer a lot of emails and I have to attend meetings."),
 T("Listen and answer as if you were the patient.", 12, [["i have", "i've got", "my"]], "I have a sore throat and a terrible headache. I also feel very tired.", "Good morning. What's the problem? How do you feel?")
],
/* Unidad 6 · Cantidades, condiciones y servicios */
[
 L("How much sugar do you want in your coffee? Just a little, please. And not too much milk.", "¿Cómo quiere el café?", ["Con poco azúcar y no mucha leche", "Sin nada", "Con mucha azúcar", "Solo con leche"], 0),
 L("If it's sunny tomorrow, we'll go to the beach. If it rains, we'll stay at home and watch films.", "¿Qué harán si llueve?", ["Quedarse en casa viendo películas", "Ir a la playa", "Ir de compras", "Visitar amigos"], 0),
 L("Good afternoon, I'd like to open a savings account. What documents do I need? Just your ID card and a recent bill.", "¿Qué documentos necesita?", ["Cédula y un recibo reciente", "Pasaporte y contrato", "Solo dinero", "Una carta del jefe"], 0),
 L("I'm calling because my internet isn't working. I've tried turning the router off and on, but it still doesn't work.", "¿Qué intentó la persona?", ["Apagar y prender el router", "Comprar otro router", "Llamar a un amigo", "Nada"], 0),
 M("How ___ people came to the party?", ["many", "much", "lot", "few of"], 0, "Contables: how many."),
 M("If you heat ice, it ___.", ["melts", "will melting", "melted", "is melt"], 0, "Condicional cero: if + presente, presente."),
 F("If I have time, I ___ call you. (will)", ["will", "'ll"], "Primer condicional: will + verbo."),
 O("If it rains tomorrow, we'll stay at home."),
 O("Could you tell me how much this costs, please?"),
 T("Call a company: your phone or internet doesn't work. Explain the problem.", 20, [["i'm calling", "i am calling"], ["doesn't work", "isn't working", "problem"]], "Hello, I'm calling because my internet isn't working since yesterday. I've turned the router off and on, but it still doesn't work. Can you send a technician?"),
 T("What will you do if you have free time this weekend?", 15, [["if"], ["will", "'ll"]], "If I have free time this weekend, I'll go to the cinema with my friends. If it's sunny, we'll walk in the park."),
 T("Listen and answer the bank employee.", 12, [["i'd like", "i would like", "i want"]], "I'd like to open a savings account, please.", "Good morning. How can I help you today?")
],
/* Unidad 7 · Antes y ahora */
[
 L("My dad used to work in a factory, but now he has a small shop where he sells phones and chargers.", "¿Qué vende el papá ahora?", ["Celulares y cargadores", "Ropa", "Comida", "Libros"], 0),
 L("The forecast says it might snow in the mountains, so the road may be closed tomorrow.", "¿Qué puede pasar mañana?", ["Que cierren la carretera", "Que haga calor", "Que abran un túnel", "Nada"], 0),
 L("This is the hospital where I was born, and that's the doctor who helped my mother.", "¿Quién es el médico?", ["El que ayudó a su mamá", "Su papá", "Su tío", "Un amigo"], 0),
 L("These bags are made by hand in Guatemala and they are sold in many countries.", "¿Cómo se hacen los bolsos?", ["A mano", "En una fábrica", "Con máquinas", "No se dice"], 0),
 M("I ___ have a car, but I sold it.", ["used to", "use to", "am used to", "was use to"], 0, "Used to: algo que era así y cambió."),
 M("I use this app ___ new words in English.", ["to learn", "for learn", "for to learn", "learning to"], 0, "Propósito: to + verbo."),
 F("The church ___ built in 1650. (fue)", ["was"], "Pasiva en pasado: was + participio."),
 O("I might visit my grandparents this weekend."),
 O("The woman who lives upstairs used to be a famous singer."),
 T("Talk about something you used to do and don't do any more.", 15, [["used to"], ["any more", "now", "these days"]], "I used to play basketball every Saturday, but I don't play any more because I work on weekends."),
 T("What might happen in your life next year? Say three possible things.", 15, [["might", "may", "maybe"]], "Next year I might change jobs. I may move to a new apartment, and maybe I'll travel to Peru."),
 T("Listen and answer.", 10, [["to"]], "I use my phone to talk to my family and to pay my bills.", "What do you use your phone for?")
],
/* Unidad 8 · Opinar y convivir */
[
 L("I don't think the new shopping centre is a good idea. I agree. We need more parks, not more shops.", "¿Qué creen que necesita la ciudad?", ["Más parques", "Más tiendas", "Más centros comerciales", "Más carros"], 0),
 L("I usually prefer tea to coffee, but this morning I'd rather have a strong coffee. I'm so tired!", "¿Qué quiere tomar esta mañana?", ["Un café cargado", "Té", "Jugo", "Agua"], 0),
 L("Who did you talk to at the party? I talked to Mateo. He told me that he's getting married!", "¿Qué le contó Mateo?", ["Que se va a casar", "Que se va de viaje", "Que cambió de trabajo", "Que tiene un bebé"], 0),
 L("Go along the river, cross the second bridge and the restaurant is on the corner, opposite a small park.", "¿Qué hay enfrente del restaurante?", ["Un parque pequeño", "Un puente", "Un río", "Una iglesia"], 0),
 M("—I loved the concert. —Me ___!", ["too", "neither", "either", "also"], 0, "Respuesta a una frase afirmativa: me too."),
 M("I'd rather ___ the dishes than vacuum.", ["do", "to do", "doing", "make"], 0, "Would rather + verbo base; do the dishes."),
 F("What ___ to your phone? The screen is broken! (pasó)", ["happened"], "Pregunta de sujeto: sin did."),
 O("In my opinion, it's worth the money."),
 O("Go past the bank and take the second street on the left."),
 T("Give your opinion about social media. Is it good or bad for people?", 15, [["i think", "in my opinion", "for me"], ["but", "because"]], "In my opinion, social media is good to keep in touch with family, but I think people spend too much time on it."),
 T("Explain a simple recipe in four steps.", 15, [["first"], ["then", "next", "after that"], ["finally"]], "First, boil some water. Then add the pasta and cook it for ten minutes. Next, fry some garlic in oil. Finally, mix everything and add cheese."),
 T("Listen and answer.", 10, [["prefer", "i'd rather", "would rather"]], "I prefer the beach. I'd rather relax in the sun than walk in the mountains.", "Do you prefer the beach or the mountains? Why?")
]
];
