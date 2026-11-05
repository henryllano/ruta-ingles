/* Preguntas de comprensión de las lecturas extra A2 (mismo orden que extra-readings.js) */
const M = (q, o, a) => ({ t: "mc", q, o, a }), L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), T = (q, min, keys, model) => ({ t: "talk", q, min, keys, model });
module.exports = [
[ /* My First Job */
 M("¿Dónde fue su primer trabajo?", ["En un restaurante de comida rápida", "En un banco", "En una tienda de ropa", "En un hospital"], 0),
 M("¿Qué pasó un día con la bandeja?", ["Se le cayó con seis bebidas", "La perdió", "Se la robaron", "La rompió un cliente"], 0),
 M("¿Qué compró con el dinero que ahorró?", ["Su primera bicicleta", "Un celular", "Ropa", "Un carro"], 0),
 L("Don't worry. It happens to everybody.", "¿Cómo reaccionó Patricia?", ["Le dijo que no se preocupara", "Se enojó", "Lo despidió", "Llamó a sus papás"], 0),
 T("Talk about your first job or your first day at school or work. How did you feel?", 18, [["was", "felt"], ["first"]], "My first job was in a shoe shop when I was eighteen. On my first day I felt very nervous, but my boss was kind and I learned a lot.")
],
[ /* A Trip to the Coffee Region */
 M("¿Cómo llegaron a Salento?", ["En avión a Pereira y luego en bus", "En carro desde Bogotá", "En tren", "En bicicleta"], 0),
 M("¿Por qué es famoso el Valle del Cocora?", ["Por las palmas de cera", "Por sus playas", "Por sus museos", "Por su nieve"], 0),
 M("¿Qué compró para su hermana?", ["Un bolso hecho a mano", "Café", "Un sombrero", "Una camiseta"], 0),
 L("I was terrible at it, but it was really fun.", "¿Qué dice sobre el tejo?", ["Era muy mala jugando, pero fue divertido", "Ganó todos los juegos", "No le gustó", "No lo jugó"], 0),
 T("Talk about a trip you took. Where did you go and what did you do?", 20, [["went", "visited"], ["was", "were"]], "Last year I went to Santa Marta with my friends. We visited Tayrona Park and swam in the sea. The beaches were beautiful.")
],
[ /* A New Restaurant in Town */
 M("¿Cómo es el restaurante?", ["Una casa vieja con jardín y mesas de madera", "Un lugar moderno y ruidoso", "Un restaurante en un centro comercial", "Un puesto en la calle"], 0),
 M("¿Qué fue lo mejor de la comida?", ["El cheesecake de maracuyá", "El pescado", "El bistec", "El pollo"], 0),
 M("¿Qué recomienda hacer si vas?", ["Reservar mesa primero", "Ir sin reservar", "Ir solo entre semana", "Pedir domicilio"], 0),
 L("They said it was a bit too salty, but they enjoyed it.", "¿Qué problema tenía el pollo?", ["Estaba un poco salado", "Estaba frío", "Estaba crudo", "Era muy pequeño"], 0),
 T("Describe your favourite restaurant. What do you usually order?", 18, [["usually", "i order", "i like"], ["is", "are"]], "My favourite restaurant is a small Italian place near my house. The food is delicious and the waiters are friendly. I usually order lasagne.")
],
[ /* Moving to a New City */
 M("¿Por qué se mudaron a Bogotá?", ["La esposa consiguió un trabajo nuevo", "Por los colegios", "Por el clima", "Por los abuelos"], 0),
 M("¿Qué tuvieron que comprar la primera semana?", ["Chaquetas, suéteres, bufandas y guantes", "Muebles nuevos", "Un carro", "Bicicletas"], 0),
 M("¿Qué extraña todavía el narrador?", ["El mar y la música de la costa", "Su trabajo", "La comida de Bogotá", "El frío"], 0),
 L("On Sundays, some main streets close to cars, and we ride our bikes there.", "¿Qué hacen los domingos?", ["Montan bicicleta en calles cerradas a carros", "Van al cine", "Visitan a los abuelos", "Van al museo"], 0),
 T("Compare your city with another city you know.", 18, [["than"], ["more", "bigger", "smaller", "colder", "hotter"]], "Bogotá is colder and bigger than Cartagena. Cartagena is more beautiful and the food is better, but it's more expensive for tourists.")
],
[ /* The Worst Holiday Ever */
 M("¿Por qué se retrasó el vuelo?", ["Por una tormenta", "Por un problema técnico", "Por una huelga", "Porque llegaron tarde"], 0),
 M("¿Qué le pasó a la narradora en la playa?", ["Se quemó la espalda por no usar bloqueador", "Se perdió", "Le robaron", "Se cortó un pie"], 0),
 M("¿Qué le pasó a Tomás el último día?", ["Se intoxicó con mariscos", "Perdió el pasaporte", "Se quemó", "Perdió el vuelo"], 0),
 L("When we got home, we were tired, sunburnt and broke.", "¿Cómo llegaron a casa?", ["Cansados, quemados y sin dinero", "Felices y descansados", "Con regalos", "Enfermos"], 0),
 T("Tell about a time when something went wrong on a trip or at a party.", 20, [["was", "were", "went"], ["then", "when", "but"]], "Once I went to a wedding and it started to rain very hard. Then the lights went out. But we danced in the dark and it was really fun.")
],
[ /* How My Parents Met */
 M("¿Dónde se conocieron los padres?", ["Esperando el bus bajo la lluvia", "En la universidad", "En una fiesta", "En el trabajo"], 0),
 M("¿Qué le pasó al papá en el bus?", ["Estaba tan nervioso que se pasó de parada", "Se quedó dormido", "Perdió la sombrilla", "Se bajó con ella"], 0),
 M("¿Qué guardan todavía?", ["La sombrilla negra", "El tiquete del bus", "Una carta", "Una foto"], 0),
 L("For two weeks, he went to the same bus stop every afternoon, hoping to see her again.", "¿Qué hizo durante dos semanas?", ["Fue a la misma parada esperando verla", "La llamó todos los días", "Le escribió cartas", "La buscó en la universidad"], 0),
 T("How did you meet your best friend or your partner?", 18, [["met", "was", "were"]], "I met my wife at a friend's birthday party ten years ago. We were sitting at the same table and we talked all night about music.")
],
[ /* A Complaint Email */
 M("¿Qué pidió Mariana?", ["Zapatos para correr y una chaqueta deportiva", "Un celular", "Un vestido", "Libros"], 0),
 M("¿Cuál fue un problema con los zapatos?", ["Eran de la talla equivocada", "Estaban sucios", "Eran de otro color", "No llegaron"], 0),
 M("¿Qué solución pide Mariana?", ["Los artículos correctos o un reembolso completo", "Un descuento pequeño", "Hablar con el gerente", "Nada"], 0),
 L("I tried to call your customer service number four times, but nobody answered.", "¿Qué pasó cuando llamó?", ["Nadie contestó", "La atendieron mal", "La colgaron", "Le dieron un descuento"], 0),
 T("Call a shop to complain: the product you bought is broken. Explain the problem and what you want.", 20, [["i bought", "i ordered"], ["i would like", "i'd like", "i want"]], "Hello, I bought a blender last week, but it doesn't work. I would like a new one or a full refund, please.")
],
[ /* Learning to Swim at Forty */
 M("¿Por qué no aprendió a nadar de niño?", ["Vivía lejos del mar y no había piscina", "Le daba miedo el agua", "Sus papás no querían", "Estaba enfermo"], 0),
 M("¿Quién le regaló las clases?", ["Su hija", "Su esposo", "Su jefe", "Su profesor"], 0),
 M("¿Qué pasó después de tres meses?", ["Nadó una piscina completa sin parar", "Dejó las clases", "Ganó una competencia", "Se hizo profesor"], 0),
 L("It's never too late to learn something new.", "¿Cuál es el mensaje?", ["Nunca es tarde para aprender algo nuevo", "Hay que aprender de niño", "Nadar es difícil", "Hay que tener paciencia con los niños"], 0),
 T("Is there something you would like to learn? Why haven't you learned it yet?", 18, [["would like", "i'd like", "want"], ["because"]], "I would like to learn to play the guitar. I haven't learned it yet because I don't have much free time, but I want to start next year.")
],
[ /* The Carnival of Barranquilla */
 M("¿Cuándo es el Carnaval de Barranquilla?", ["En febrero o marzo", "En diciembre", "En julio", "En octubre"], 0),
 M("¿Qué es la Batalla de Flores?", ["El desfile más famoso, el sábado", "Una pelea", "Un concurso de comida", "Un concierto"], 0),
 M("¿Qué representa el entierro de Joselito?", ["El final del carnaval", "El inicio del carnaval", "Una fiesta religiosa", "Un partido de fútbol"], 0),
 L("People throw flowers, foam and cornflour at each other, so everybody gets very dirty, but nobody cares!", "¿Qué se lanza la gente?", ["Flores, espuma y maicena", "Agua y huevos", "Dulces", "Papeles"], 0),
 T("Describe a festival or celebration in your city or country.", 20, [["every year", "people", "there is", "there are"]], "Every year in my city there is a flower festival in August. People dance in the streets, there are parades and families eat traditional food together.")
],
[ /* A Letter to an Old Friend */
 M("¿Dónde trabaja ahora Andrés?", ["En una pequeña agencia de viajes", "En un banco", "En un colegio", "En un hospital"], 0),
 M("¿Qué tiene la casa nueva?", ["Un jardín", "Una piscina", "Tres pisos", "Un garaje grande"], 0),
 M("¿Qué invita Andrés a hacer a Sam?", ["Visitarlos el próximo verano", "Trabajar juntos", "Viajar a Perú", "Llamarlo"], 0),
 L("He's learning to read and he's very proud of himself.", "¿Qué está aprendiendo Martín?", ["A leer", "A nadar", "A escribir cartas", "A cocinar"], 0),
 T("Tell a friend your news: what has changed in your life recently?", 20, [["i have", "i've"], ["recently", "just", "already", "this year"]], "I have some news! I've just started a new job in a bank, and I've moved to a bigger apartment. This year I've also started learning English.")
],
[ /* The Honest Taxi Driver */
 M("¿Por qué tomó Elena un taxi?", ["Iba tarde a una entrevista de trabajo", "Llovía mucho", "Estaba enferma", "Perdió el bus"], 0),
 M("¿Cómo encontró el taxista el número de Elena?", ["En una tarjeta de presentación dentro de la billetera", "En internet", "Se lo dio la policía", "Lo recordaba"], 0),
 M("¿Por qué el taxista no aceptó la recompensa?", ["Tiene una hija de su edad", "Era muy rico", "Estaba apurado", "No le gustaba el dinero"], 0),
 L("I hope someone would do the same for her.", "¿Qué espera el taxista?", ["Que alguien haga lo mismo por su hija", "Que Elena le pague", "Que lo contraten", "Que Elena lo llame"], 0),
 T("Have you ever lost something important? What happened?", 20, [["lost", "found", "was"], ["i have", "i've", "once"]], "Yes, I've lost my phone once. I left it in a restaurant. When I went back, the waiter had kept it for me. I was very lucky.")
],
[ /* Technology: Then and Now */
 M("¿Qué tenían que hacer para llamar en el pueblo de la abuela?", ["Ir a la oficina de correos o a un teléfono público", "Usar el celular", "Escribir un correo", "Ir a otra ciudad"], 0),
 M("¿Cómo eran los programas de televisión?", ["En blanco y negro, solo dos canales", "A color, muchos canales", "Por internet", "Solo noticias"], 0),
 M("¿Qué le enseñó el nieto a la abuela?", ["Hacer videollamadas", "Usar redes sociales", "Ver series", "Escribir correos"], 0),
 L("We talked more. Today, families eat together, but everybody is looking at a screen.", "¿Qué critica la abuela?", ["Que hoy todos miran una pantalla en la mesa", "Que la comida es mala", "Que hay mucho ruido", "Que la gente no come junta"], 0),
 T("How was life different for your grandparents? Compare it with your life today.", 20, [["used to", "didn't have", "there wasn't", "there weren't"], ["now", "today"]], "My grandparents didn't have a phone or a car. They used to walk to work and write letters. Today I can call anyone in seconds, but we are always busy.")
],
[ /* When I Was a Child */
 M("¿Dónde estaba el único teléfono del pueblo?", ["En la oficina de correo", "En la casa de Gloria", "En el colegio", "En la iglesia"], 0),
 M("¿Qué hacían después del colegio?", ["Ayudaban en la finca", "Veían televisión", "Iban a Bogotá", "Jugaban videojuegos"], 0),
 M("¿Qué responde Gloria cuando le preguntan si se aburría?", ["Que nunca, porque inventaban sus juegos", "Que sí, mucho", "Que a veces", "Que no se acuerda"], 0),
 L("We didn't have many toys, but we used to play in the river and climb trees.", "¿Qué hacían para jugar?", ["Jugaban en el río y se subían a los árboles", "Jugaban con muchos juguetes", "Veían televisión", "Escuchaban la radio"], 0),
 T("How was your childhood different from children's lives today?", 20, [["used to", "didn't use to"], ["now", "today", "nowadays"]], "When I was a child, I used to play in the street with my neighbours. Children today use tablets and phones, and they don't play outside very much.")
],
[ /* Made in Colombia */
 M("¿Cómo se recoge el café?", ["A mano", "Con máquinas", "Con avión", "No se dice"], 0),
 M("¿Cuándo se envían miles de cajas de flores a Estados Unidos?", ["Antes de San Valentín, en febrero", "En diciembre", "En junio", "Todo el año igual"], 0),
 M("¿Con qué se teje el sombrero vueltiao?", ["Con caña flecha", "Con algodón", "Con lana", "Con plástico"], 0),
 L("In 2004 it was declared a cultural symbol of the country.", "¿Qué pasó en 2004?", ["Se declaró símbolo cultural", "Se inventó el sombrero", "Se exportó por primera vez", "Se abrió una fábrica"], 0),
 T("Talk about a product from your region: where it's made and how.", 20, [["is made", "are made", "is grown", "are grown", "is produced", "are produced"]], "In my region, arequipe is made in small factories. Milk and sugar are cooked for many hours, and it's sold in supermarkets all over the country.")
],
[ /* A Review of La Casa Verde */
 M("¿Qué fue lo mejor de la noche?", ["El cheesecake de maracuyá", "El risotto", "El pescado", "El vino"], 0),
 M("¿Cuál fue un problema?", ["Esperaron veinticinco minutos aunque tenían reserva", "La comida estaba fría", "El mesero fue grosero", "No había música"], 0),
 M("¿En qué no están de acuerdo los esposos?", ["En si vale la pena el precio", "En si la comida era buena", "En el ambiente", "En el mesero"], 0),
 L("I'd give it four stars out of five. He'd give it five!", "¿Cuántas estrellas le da ella?", ["Cuatro", "Cinco", "Tres", "Dos"], 0),
 T("Give your opinion of a restaurant or café you know. Would you recommend it?", 20, [["i think", "in my opinion", "for me"], ["recommend", "worth"]], "In my opinion, the café near my office is great. The coffee is delicious and the staff are friendly, but it's a bit small. I'd definitely recommend it.")
],
[ /* A Day Without a Map */
 M("¿Por qué Kevin no pudo usar el mapa?", ["Se le acabó la batería del celular", "Lo perdió", "No tenía internet", "No entendía el mapa"], 0),
 M("¿Dónde queda la plaza, según la vendedora?", ["Enfrente del museo", "Al lado de la iglesia", "Detrás de la estación", "En la avenida"], 0),
 M("¿Quién le ayudó en la estación?", ["Un estudiante", "La vendedora", "El policía", "Un taxista"], 0),
 L("Go down these stairs, go through the station and take the train to Acevedo.", "¿Qué tiene que atravesar?", ["La estación", "El parque", "La plaza", "El puente"], 0),
 T("Explain how to get from your home to a supermarket or a park near you.", 20, [["go along", "go past", "cross", "turn", "go through", "go down", "go up"], ["opposite", "next to", "on the corner", "between", "on the left", "on the right"]], "Go along my street for two blocks and turn right at the traffic lights. Go past the bank, and the supermarket is on the corner, next to a pharmacy.")
]
];
