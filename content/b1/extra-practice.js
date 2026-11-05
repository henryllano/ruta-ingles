/* Práctica extra B1 por unidad: escucha larga, habla libre (talk), pronunciación (oral) y algo de escritura. */
const L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), M = (q, o, a, x) => ({ t: "mc", q, o, a, x }), F = (q, ans, x) => ({ t: "fill", q, ans, x }),
  O = text => ({ t: "oral", text }), T = (q, min, keys, model, say) => ({ t: "talk", q, min, keys, model, ...(say ? { say } : {}) });
module.exports = [
/* Unidad 1 · Contar historias */
[
 L("I'd never been so nervous. I had studied for weeks, but when I sat down and saw the first question, my mind went completely blank. Luckily, after a few minutes I calmed down and started writing.", "¿Qué le pasó al ver la primera pregunta?", ["Se quedó en blanco", "Salió del salón", "Supo todo de inmediato", "Se quedó dormido"], 0),
 L("We used to spend every Christmas at my grandparents' farm. My grandfather would tell us stories by the fire, and we would fall asleep listening to him.", "¿Qué hacía el abuelo?", ["Contaba historias junto al fuego", "Cocinaba la cena", "Tocaba guitarra", "Trabajaba toda la noche"], 0),
 L("By the time the firefighters arrived, the neighbours had already put out the fire. Fortunately, nobody was hurt, although the kitchen was completely destroyed.", "¿Quién apagó el fuego?", ["Los vecinos", "Los bomberos", "La policía", "El dueño de la casa"], 0),
 L("Suddenly, the lights went out. We heard a strange noise upstairs, and my brother, who is usually very brave, hid under the table. It turned out to be the cat.", "¿Qué causó el ruido?", ["El gato", "Un ladrón", "El viento", "El hermano"], 0),
 M("When I got to the station, the train ___.", ["had already left", "already left", "has already left", "was already leave"], 0, "Pasado anterior a otro pasado: past perfect."),
 M("When I was young, I ___ play in the street every day.", ["used to", "use to", "was used to", "am used to"], 0, "Hábitos pasados: used to."),
 F("I ___ (not / see) him for years when we met again.", ["hadn't seen", "had not seen"], "Past perfect negativo."),
 O("By the time we arrived, the film had already started."),
 O("When I was a child, I used to spend my summers at the beach."),
 T("Tell a story about a time when something went wrong. Use the past simple, past continuous and past perfect.", 35, [["was", "were"], ["had"], ["suddenly", "then", "after that", "in the end"]], "Last year I was travelling to Cartagena when my bag disappeared. I had left it on the seat for a minute. Suddenly, a man ran away with it. In the end, the police found it the next day."),
 T("What did you use to do when you were a child that you don't do now?", 25, [["used to"]], "When I was a child, I used to play football every afternoon and I used to eat a lot of sweets. Now I don't have time to play, and I try to eat healthy food."),
 T("Listen and continue the story with your own ideas.", 30, [["then", "suddenly", "after that", "finally"]], "Then I heard footsteps behind me. I turned around and saw an old man with a lamp. He smiled and showed me the way back to the village. Finally, I arrived home safely.", "It was midnight and I was walking alone through the forest. My phone had no battery and I was completely lost...")
],
/* Unidad 2 · Experiencias y cambios */
[
 L("I've been learning to play the piano for six months. At first it was really frustrating, but now I can play a few simple songs. My goal is to play at my sister's wedding next year.", "¿Cuál es su meta?", ["Tocar en la boda de su hermana", "Ser pianista profesional", "Dar clases", "Comprar un piano"], 0),
 L("Since I moved to the city, my life has changed completely. I've had to get used to the noise and the traffic, but I've also made lots of new friends.", "¿A qué ha tenido que acostumbrarse?", ["Al ruido y al tráfico", "Al frío", "A trabajar de noche", "A vivir solo en el campo"], 0),
 L("How long have you been waiting? About twenty minutes. The doctor is running late because there was an emergency this morning.", "¿Por qué va tarde el médico?", ["Hubo una emergencia en la mañana", "Se quedó dormido", "Hay mucho tráfico", "Está enfermo"], 0),
 L("I'm not used to getting up so early. In my old job I started at ten, but now I have to be at the office at seven thirty.", "¿A qué hora empieza ahora?", ["A las 7:30", "A las 10:00", "A las 7:00", "A las 8:30"], 0),
 M("I've been studying English ___ two years.", ["for", "since", "ago", "during"], 0, "Duración: for."),
 M("She isn't used to ___ in a big city.", ["living", "live", "lived", "lives"], 0, "Be used to + -ing."),
 F("How long have you ___ (work) here?", ["been working", "worked"], "Presente perfecto continuo: have been working."),
 O("I've been living in this city since I finished university."),
 O("It took me a long time to get used to the cold weather."),
 T("Talk about a big change in your life. What was difficult and what did you have to get used to?", 35, [["since", "for"], ["get used to", "got used to", "used to"]], "Three years ago I started working in a call centre. At first it was difficult because I wasn't used to speaking on the phone all day. Since then, I have got used to it and I feel more confident."),
 T("What have you been doing recently to improve your English or your health?", 25, [["have been", "i've been"]], "Recently I've been studying English every night with this course, and I've been walking to work instead of taking the bus. I've been feeling much better."),
 T("Listen and answer.", 20, [["i have", "i've", "since", "for"]], "I've lived in Medellín for twelve years. I moved here because of my job, and I love the weather.", "How long have you lived in your city, and why did you move there?")
],
/* Unidad 3 · Planes e hipótesis */
[
 L("If I won the lottery, I'd buy a house for my parents and travel around the world. But to be honest, I'd probably keep working, because I'd get bored at home.", "¿Por qué seguiría trabajando?", ["Porque se aburriría en casa", "Porque necesita el dinero", "Porque ama a su jefe", "Porque no ganaría mucho"], 0),
 L("I'm thinking of changing jobs. I might apply for a position in a bank, but I haven't decided yet. It depends on the salary.", "¿De qué depende su decisión?", ["Del salario", "De su familia", "Del horario", "De la ciudad"], 0),
 L("If you had told me about the problem earlier, I could have helped you. Next time, please call me as soon as something happens.", "¿Qué le pide para la próxima vez?", ["Que llame en cuanto pase algo", "Que no llame", "Que resuelva solo", "Que escriba un correo"], 0),
 L("This time next year, I'll be living in Canada. I'll be studying at a university in Toronto and working part-time in a café.", "¿Dónde trabajará?", ["En un café, medio tiempo", "En la universidad", "En un banco", "No trabajará"], 0),
 M("If I ___ more time, I would learn to dance.", ["had", "have", "will have", "would have"], 0, "Segundo condicional: if + pasado."),
 M("We ___ go to the beach, but it depends on the weather.", ["might", "must", "have to", "should to"], 0, "Posibilidad: might."),
 F("If it ___ (rain) tomorrow, we'll stay at home.", ["rains"], "Primer condicional: if + presente."),
 O("If I had more free time, I would join a language club."),
 O("I might go to the party, but I'm not sure yet."),
 T("What would you do if you could live in any country in the world? Explain why.", 30, [["if i could", "if i"], ["would"]], "If I could live in any country, I would choose Canada, because it's safe and the people are friendly. I would study English and I would work in a technology company."),
 T("What are your plans for the next five years? Use going to, will and might.", 30, [["going to"], ["will", "'ll"], ["might", "may"]], "In the next five years I'm going to finish my degree. I will look for a better job, and I might move to another city if I get a good offer."),
 T("Listen and answer the question.", 20, [["if", "would"]], "If I found a wallet in the street, I would take it to the police or try to call the owner.", "What would you do if you found a wallet in the street?")
],
/* Unidad 4 · Describir y explicar */
[
 L("The museum, which was built in 1920, is one of the oldest buildings in the city. It's famous for its gold collection, which attracts thousands of tourists every year.", "¿Por qué es famoso el museo?", ["Por su colección de oro", "Por ser moderno", "Por su restaurante", "Por su jardín"], 0),
 L("The woman who lives next door is a doctor. She's the one who helped my son when he broke his arm last year.", "¿Qué hizo la vecina?", ["Ayudó al hijo cuando se rompió el brazo", "Le vendió una casa", "Cuidó al perro", "Le dio clases"], 0),
 L("To make arepas, first you mix the corn flour with warm water and a little salt. Then you make small balls and flatten them. Finally, you cook them on a hot pan for about ten minutes.", "¿Qué se hace después de hacer bolitas?", ["Aplastarlas", "Mezclar la harina", "Agregar sal", "Servirlas"], 0),
 L("The new phone is made of glass and metal. It's lighter than the old model and the battery lasts two days, which is really convenient when you travel.", "¿Cuánto dura la batería?", ["Dos días", "Un día", "Una semana", "Diez horas"], 0),
 M("This is the restaurant ___ we had our first date.", ["where", "which", "who", "what"], 0, "Para lugares: where."),
 M("The cathedral ___ in the 16th century.", ["was built", "built", "is building", "has build"], 0, "Pasiva en pasado: was built."),
 F("The man ___ called you is my uncle. (pronombre relativo)", ["who", "that"], "Para personas: who/that."),
 O("The woman who lives next door is a doctor at the hospital."),
 O("Coffee is grown in the mountains and exported all over the world."),
 T("Explain how to cook a typical dish from your country, step by step.", 35, [["first"], ["then", "after that", "next"], ["finally"]], "To make a good soup, first you cut potatoes, chicken and corn. Then you put everything in a big pot with water. After that, you add salt and herbs. Finally, you cook it for one hour."),
 T("Describe a place in your city that tourists should visit. Use relative clauses (which, who, where).", 30, [["which", "where", "who", "that"]], "Tourists should visit the old town, which has beautiful colonial houses. There is a square where musicians play every night, and there are guides who explain the history."),
 T("Listen and describe the object in your own words.", 20, [["it's", "it is", "used", "made of"]], "It's a small electronic device which is used to make calls, send messages and take photos. It's made of glass and metal.", "What is a smartphone? Describe it as if to someone from 1950.")
],
/* Unidad 5 · Lo que dijo la gente */
[
 L("My boss told me that the meeting had been cancelled and that we would have it next Tuesday instead. She also asked me to send the report before Friday.", "¿Qué le pidió la jefa?", ["Enviar el informe antes del viernes", "Cancelar la reunión", "Llegar temprano el martes", "Llamar a un cliente"], 0),
 L("The doctor said I should rest for a week and that I mustn't lift anything heavy. He told me to come back if the pain got worse.", "¿Cuándo debe volver al médico?", ["Si el dolor empeora", "En un mes", "Mañana", "Nunca"], 0),
 L("Ana asked me if I wanted to go to the concert with her. I said I would love to, but I had to work that night. She said she would ask her brother instead.", "¿A quién invitará Ana?", ["A su hermano", "A su jefe", "A nadie", "A su mamá"], 0),
 L("According to the news, the government is going to build a new metro line. The mayor said it would be ready in five years, but many people don't believe it.", "¿Qué dijo el alcalde?", ["Que estaría lista en cinco años", "Que no habría metro", "Que costaría poco", "Que empezaría mañana"], 0),
 M("She said she ___ tired.", ["was", "is being", "has", "were"], 0, "Estilo indirecto: is → was."),
 M("He asked me where I ___.", ["lived", "do live", "did live", "living"], 0, "Pregunta indirecta: orden afirmativo y retroceso de tiempo."),
 F("My mother told me ___ (llevar) an umbrella.", ["to take", "to bring"], "Tell someone to + verbo."),
 O("She told me that she would call me the next day."),
 O("He asked me if I had ever been to London."),
 T("Report a conversation you had recently. What did the other person say and ask?", 30, [["said", "told"], ["asked"]], "Yesterday my friend called me. She said that she had a new job and she told me she was very happy. She asked me if I wanted to have dinner with her on Saturday."),
 T("Tell some news you heard this week using reported speech.", 25, [["said that", "according to", "reported"]], "According to the news, prices are going to rise next month. The minister said that the government would help poor families, but experts said it would not be enough."),
 T("Listen to the message and report it to another person.", 20, [["said", "told", "asked"]], "Carlos called. He said that he would be late for the meeting and he asked us to start without him.", "Hi, it's Carlos. I'm going to be late for the meeting. Please start without me.")
],
/* Unidad 6 · Trabajo y vida práctica */
[
 L("We're looking for a customer service agent with good communication skills and at least one year of experience. The job is full-time, Monday to Friday, and English is essential.", "¿Qué es esencial para el puesto?", ["El inglés", "Tener carro", "Trabajar fines de semana", "Un título universitario"], 0),
 L("Hello, this is Martha from Green Bank. I'm calling to confirm your appointment tomorrow at ten. If you can't come, please call us back on 555 0192.", "¿Para qué llama Martha?", ["Para confirmar una cita", "Para vender un seguro", "Para cobrar una deuda", "Para cancelar una cuenta"], 0),
 L("I'm sorry, but the item you ordered is out of stock. We can send you a similar model today, or you can wait two weeks for the original one.", "¿Qué opciones le dan?", ["Un modelo similar hoy o esperar dos semanas", "Solo el reembolso", "Cancelar el pedido", "Recoger en tienda"], 0),
 L("In my job I have to deal with a lot of complaints. The secret is to listen carefully, stay calm and offer a solution as quickly as possible.", "¿Cuál es el secreto según el hablante?", ["Escuchar, mantener la calma y dar una solución rápida", "Colgar rápido", "Pasar la llamada al jefe", "No responder"], 0),
 M("I'm writing to apply ___ the position of sales assistant.", ["for", "to", "at", "on"], 0, "Apply for a job."),
 M("Could you ___ me back later, please?", ["call", "calling", "to call", "called"], 0, "Could you + verbo base."),
 F("I look forward to ___ (hear) from you.", ["hearing"], "Look forward to + -ing."),
 O("I'm calling to ask about the job advertised on your website."),
 O("I'm sorry for the inconvenience. I'll solve the problem right away."),
 T("You are in a job interview. Talk about your experience and your strengths.", 35, [["i have", "i've"], ["experience"], ["good at", "strength", "skills"]], "I have three years of experience in customer service. I'm good at solving problems and I have good communication skills. I'm also organised and I like working in a team."),
 T("A customer is angry because their order arrived broken. Apologise and offer a solution.", 25, [["sorry", "apologise", "apologize"], ["we will", "we'll", "i will", "i'll"]], "I'm really sorry about that. We will send you a new one today at no extra cost, and I'll give you a discount for your next order."),
 T("Listen to the interviewer and answer.", 20, [["because", "i want", "i would like", "i'd like"]], "I want to work here because it's a big international company and I would like to use my English every day.", "Why do you want to work for our company?")
],
/* Unidad 7 · Lo que pudo haber sido */
[
 L("If we had booked the hotel in January, we would have paid much less. Now everything is more expensive.", "¿De qué se arrepienten?", ["De no reservar en enero", "De escoger ese hotel", "De viajar en enero", "De pagar con tarjeta"], 0),
 L("You shouldn't have lent him your car. He crashed it last year too!", "¿Qué critica?", ["Que le prestó el carro", "Que compró un carro", "Que manejó mal", "Que no le prestó el carro"], 0),
 L("The door was locked and nothing is missing. The burglar can't have come in through the door; he must have used the window.", "¿Por dónde entró el ladrón?", ["Por la ventana", "Por la puerta", "Por el techo", "No entró"], 0),
 L("I'm having my car serviced on Friday, so I'll be able to drive to the coast on Saturday.", "¿Qué va a hacer el viernes?", ["Le van a hacer mantenimiento al carro", "Va a viajar a la costa", "Va a comprar un carro", "Va a lavar el carro"], 0),
 M("If I had known you were sick, I ___ you some soup.", ["would have brought", "would bring", "had brought", "will bring"], 0, "Tercer condicional: would have + participio."),
 M("Her eyes are red. She ___ crying.", ["must have been", "can't have been", "should have been", "must be been"], 0, "Deducción segura en pasado: must have been."),
 F("I need to get my phone ___. The screen is broken. (arreglar)", ["fixed", "repaired"], "Get + objeto + participio."),
 O("If I had left earlier, I wouldn't have missed the train."),
 O("We managed to fix the washing machine ourselves."),
 T("Talk about something you should have done differently last year.", 20, [["should have", "shouldn't have"], ["if i had", "would have", "could have"]], "Last year I should have saved more money. I spent too much on clothes. If I had saved, I would have travelled to Mexico in December."),
 T("Talk about the services you pay for: what do you have done and how often?", 20, [["have my", "get my", "had my", "got my"]], "I have my hair cut every month and I get my car washed every two weeks. Last month I had my eyes tested because I needed new glasses."),
 T("Listen and answer.", 15, [["must have", "might have", "may have", "can't have", "could have"]], "He might have missed the bus, or he must have forgotten about the meeting.", "Your colleague didn't come to the meeting. What do you think happened?")
],
/* Unidad 8 · Conectar ideas y el mundo de hoy */
[
 L("Although the new park is beautiful, there is too much rubbish. As a result, the city is putting more bins and recycling points.", "¿Qué está haciendo la ciudad?", ["Poniendo más canecas y puntos de reciclaje", "Cerrando el parque", "Cobrando la entrada", "Plantando árboles"], 0),
 L("Neither of the laptops has a good battery, but the grey one is much lighter and slightly cheaper.", "¿Qué ventaja tiene el gris?", ["Es más liviano y un poco más barato", "Tiene mejor batería", "Es más grande", "Es más rápido"], 0),
 L("Two teenagers were arrested for vandalism after they painted graffiti on a historic church. A witness called the police.", "¿Por qué los arrestaron?", ["Por pintar grafitis en una iglesia histórica", "Por robar en una tienda", "Por pelear", "Por manejar sin licencia"], 0),
 L("I'm afraid there's a problem with my order. The shirt is damaged. Could I exchange it? Of course, and we apologize for the inconvenience.", "¿Qué pide el cliente?", ["Cambiar la camisa", "Un reembolso", "Hablar con el gerente", "Un descuento"], 0),
 M("___ it was raining, we went for a walk.", ["Although", "Despite", "However", "In spite of"], 0, "Although + oración."),
 M("The opposite of 'legal' is:", ["illegal", "unlegal", "dislegal", "inlegal"], 0, "Antes de l → il-."),
 F("I'm leaving early so ___ I can avoid the traffic.", ["that"], "So that + sujeto + can."),
 O("The more you recycle, the less waste goes to the landfill."),
 O("Excuse me, I'm afraid this isn't what I ordered."),
 T("Give your opinion: should cities ban cars from the city centre? Use although, however or despite.", 20, [["although", "however", "despite", "in spite of", "whereas"]], "I think cities should ban cars from the centre. Although some people need their cars, the air would be much cleaner. However, public transport must improve first."),
 T("Compare two places where you have lived or worked. Use both, neither or much + comparative.", 20, [["both", "neither", "either"], ["much", "far", "slightly", "a lot"]], "Both cities are beautiful, but Medellín is much warmer than Bogotá. Neither of them is cheap, but Medellín has a far better metro."),
 T("Listen and answer.", 15, [["sorry", "apologize", "apologise", "refund", "exchange", "fix"]], "I'm really sorry about that. Let me change it for you, or we can give you a refund.", "Your soup is cold and it's the wrong one. You are the waiter. What do you say?")
]
];
