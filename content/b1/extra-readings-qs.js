/* Preguntas de comprensión de las lecturas extra B1 (mismo orden que extra-readings.js) */
const M = (q, o, a) => ({ t: "mc", q, o, a }), L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), T = (q, min, keys, model) => ({ t: "talk", q, min, keys, model });
module.exports = [
[ /* The Power of Small Habits */
 M("Según los expertos, ¿cuál es el secreto del cambio real?", ["Los pequeños hábitos", "La motivación", "Los grandes planes", "El dinero"], 0),
 M("¿Qué porcentaje de lo que hacemos es hábito, según los científicos?", ["Alrededor del 40 %", "El 10 %", "El 90 %", "El 100 %"], 0),
 M("¿Qué hacer si fallas un día?", ["No preocuparte, pero no fallar dos días seguidos", "Empezar de cero", "Rendirte", "Hacer el doble al otro día"], 0),
 L("If you want to eat more fruit, put a bowl of fruit on the kitchen table.", "¿Qué ejemplo da para comer más fruta?", ["Poner un plato de fruta en la mesa", "Comprar fruta cara", "Comer fruta de noche", "No comprar dulces"], 0),
 T("Describe a good habit you have and a bad habit you would like to change.", 25, [["habit"], ["would like", "i'd like", "want to"]], "A good habit I have is walking every morning before work. A bad habit I would like to change is checking my phone in bed, because I sleep badly.")
],
[ /* Working from Home */
 M("¿Qué ventaja tiene Lucía al trabajar desde casa?", ["Ya no pierde casi tres horas en el tráfico", "Gana más dinero", "Tiene más reuniones", "Trabaja menos horas"], 0),
 M("¿Por qué Martín prefiere la oficina?", ["Vive solo y extraña a sus colegas", "Su casa es muy pequeña", "Su jefe lo obliga", "No tiene internet"], 0),
 M("¿Qué modelo recomiendan los expertos?", ["Uno híbrido", "Solo oficina", "Solo casa", "Trabajar de noche"], 0),
 L("My only problem is that it's hard to switch off. Sometimes I'm still answering emails at ten o'clock at night.", "¿Qué problema tiene Lucía?", ["Le cuesta desconectarse", "No tiene computador", "Sus hijos hacen ruido", "Se aburre"], 0),
 T("Would you prefer to work from home or in an office? Give reasons.", 25, [["prefer", "would rather"], ["because"]], "I would prefer to work from home three days a week, because I save time and money on transport. But I also need the office to see my colleagues.")
],
[ /* Two Weeks in the Amazon */
 M("¿Dónde dormían?", ["En hamacas con mosquitero", "En un hotel", "En carpas", "En camas"], 0),
 M("¿Qué les enseñaron los niños a los voluntarios?", ["Palabras de su idioma y plantas medicinales", "A pescar", "A cocinar", "A nadar"], 0),
 M("¿Qué aprendió el narrador de la experiencia?", ["Cuánto desperdicia en casa", "Que no le gusta la selva", "Que el Amazonas es peligroso", "Que no quiere viajar más"], 0),
 L("Our guide took us in a canoe to see pink river dolphins.", "¿Qué vieron desde la canoa?", ["Delfines rosados", "Cocodrilos", "Monos", "Peces de colores"], 0),
 T("Would you like to be a volunteer? Where, and what would you do?", 25, [["would like", "i'd like", "would"]], "I would like to volunteer in a school in a small village. I would teach children English and help them with their homework.")
],
[ /* The Story of Coffee */
 M("Según la leyenda, ¿quién descubrió el café?", ["Un pastor de cabras en Etiopía", "Un sacerdote en Colombia", "Un rey de Europa", "Un científico"], 0),
 M("¿Qué eran las casas de café?", ["Lugares para hablar, escuchar música y discutir política", "Fábricas de café", "Tiendas de granos", "Fincas"], 0),
 M("¿Cuántas familias colombianas dependen del café?", ["Alrededor de medio millón", "Diez mil", "Un millón y medio", "Cien"], 0),
 L("Coffee arrived in Colombia in the eighteenth century, probably brought by Jesuit priests.", "¿Quién trajo probablemente el café a Colombia?", ["Sacerdotes jesuitas", "Comerciantes ingleses", "Pastores etíopes", "Soldados"], 0),
 T("Explain how coffee or another product from your country is made, step by step.", 25, [["first"], ["then", "after that"], ["finally"]], "First, farmers pick the red coffee beans by hand. Then they wash and dry them in the sun. After that, the beans are roasted. Finally, they are ground and packed.")
],
[ /* Living with Flatmates */
 M("¿Por qué el narrador vivió con compañeros?", ["No podía pagar vivir solo", "Le gusta la gente", "Era obligatorio", "Sus papás lo pidieron"], 0),
 M("¿Cuál era el problema con Camilo?", ["Nunca lavaba sus platos", "Ponía música fuerte", "Comía la comida de otros", "No pagaba el arriendo"], 0),
 M("¿Cómo resolvieron los problemas?", ["Con una reunión y una lista de reglas", "Uno se mudó", "Llamaron al dueño", "No los resolvieron"], 0),
 L("It's about communication, respect and being willing to compromise.", "¿Qué aprendió el narrador sobre vivir con otros?", ["Que se trata de comunicación, respeto y ceder", "Que es mejor vivir solo", "Que hay que tener reglas estrictas", "Que es muy caro"], 0),
 T("What rules would you make if you shared an apartment with friends?", 25, [["would", "should", "must"]], "I would make a cleaning rota so everybody cleans once a week. People should wash their dishes the same day, and nobody should play loud music after eleven.")
],
[ /* The Phone Call */
 M("¿Cómo era la semana de Andrea?", ["Terrible: perdió el trabajo y se dañó su portátil", "Muy buena", "Normal", "Estaba de vacaciones"], 0),
 M("¿Por qué llamó Helen Ward?", ["Quería publicar el cuento de Andrea", "Para ofrecerle un trabajo en Londres", "Para venderle algo", "Para cobrar una deuda"], 0),
 M("¿A qué se dedica Andrea hoy?", ["Ha publicado dos novelas y enseña escritura creativa", "Trabaja en publicidad", "Vive en Londres", "Es periodista"], 0),
 L("First, finish what you write. Second, send it to someone.", "¿Qué les aconseja Andrea a sus estudiantes?", ["Terminar lo que escriben y enviarlo a alguien", "Escribir solo de noche", "No mostrar sus textos", "Estudiar en Londres"], 0),
 T("Talk about a moment when something unexpected changed your plans.", 25, [["was", "were", "had"], ["suddenly", "then", "when"]], "Last year I was planning to travel to the coast when my boss called me. Suddenly, I had to go to Bogotá for a training. It was a surprise, but I met great people there.")
],
[ /* Teenagers and Social Media */
 M("¿Cuántas horas al día pasan en línea la mayoría de adolescentes?", ["Entre tres y siete", "Una", "Diez o más", "Ninguna"], 0),
 M("¿Por qué el ciberacoso es peor que el acoso tradicional?", ["Puede continuar las 24 horas", "Es menos visible", "Solo pasa en el colegio", "No deja huella"], 0),
 M("¿Qué recomiendan los expertos?", ["Enseñar a usar las redes de forma sana", "Prohibir las redes sociales", "Quitarles el teléfono", "No hacer nada"], 0),
 L("It is difficult to ask a teenager to put down their phone if their parents never put down theirs.", "¿Qué deben hacer los padres?", ["Dar el ejemplo usando menos el teléfono", "Prohibir el teléfono", "Comprar otro teléfono", "Revisar los mensajes"], 0),
 T("Do you think social media is good or bad for young people? Give your opinion.", 25, [["i think", "in my opinion", "i believe"], ["but", "however", "on the other hand"]], "In my opinion, social media can be useful to learn and stay in contact. However, it can also cause anxiety, so teenagers should use it with limits.")
],
[ /* Street Food Around the World */
 M("¿Quiénes crearon los tacos al pastor?", ["Inmigrantes libaneses en México", "Cocineros españoles", "Chefs franceses", "Indígenas peruanos"], 0),
 M("¿Cómo se servía tradicionalmente el fish and chips?", ["En papel periódico", "En platos de cerámica", "En cajas de cartón", "En hojas de plátano"], 0),
 M("¿Qué consejo da el texto para elegir un puesto?", ["Elegir puestos concurridos donde come la gente local", "Buscar el más barato", "Comer solo en hoteles", "Evitar las filas"], 0),
 L("These small balls of fried chickpeas are popular from Egypt to Lebanon.", "¿De qué está hecho el falafel?", ["De garbanzos fritos", "De carne", "De maíz", "De arroz"], 0),
 T("Describe a typical street food from your country and recommend it to a tourist.", 25, [["it's made", "made with", "it is"], ["recommend", "should try", "you should"]], "In Colombia you should try empanadas. They're made with corn dough and filled with potatoes and meat. I recommend eating them with spicy sauce.")
],
[ /* The Night of the Blackout */
 M("¿Por qué se fue la luz?", ["Hubo un problema en una central eléctrica", "Por una tormenta", "Por un terremoto", "No pagaron la factura"], 0),
 M("¿Qué hicieron los vecinos?", ["Salieron a los balcones, cantaron y compartieron bebidas", "Llamaron a la policía", "Se fueron a dormir", "Se quejaron"], 0),
 M("¿Qué vieron gracias al apagón?", ["Las estrellas", "Un incendio", "Fuegos artificiales", "La luna llena"], 0),
 L("Sometimes it takes a blackout to remind us to look up and talk to the people around us.", "¿Qué reflexión hace el narrador?", ["A veces necesitamos un apagón para conectar con los demás", "Los apagones son peligrosos", "Hay que comprar velas", "La ciudad necesita más luz"], 0),
 T("Imagine there is no electricity for a whole day. What would you do?", 25, [["would"]], "If there was no electricity for a day, I would go to the park with my family. We would play games, read books and cook on a small gas cooker.")
],
[ /* Five Simple Ways to Save Money */
 M("¿Qué significa 'págate a ti mismo primero'?", ["Ahorrar una cantidad fija apenas recibes el salario", "Gastar en ti mismo", "Pagar las deudas primero", "Pedir un aumento"], 0),
 M("¿Qué es la 'regla de las 48 horas'?", ["Esperar dos días antes de comprar algo no esencial", "Pagar en 48 horas", "Devolver lo comprado", "Ahorrar 48 pesos al día"], 0),
 M("¿Qué hay que revisar en el extracto bancario?", ["Suscripciones que no usas", "Los intereses", "El saldo de otros", "Las tarifas del banco"], 0),
 L("Cooking a bigger amount and taking leftovers to work for lunch can save you a lot of money.", "¿Qué consejo da sobre la comida?", ["Cocinar más y llevar las sobras al trabajo", "Comer en restaurantes baratos", "Pedir domicilios", "Saltarse el almuerzo"], 0),
 T("Give a friend three tips to save money. Use 'should' and 'try to'.", 25, [["should"], ["try to"]], "You should write down everything you spend. Try to cook at home instead of ordering food. And you should cancel the subscriptions you don't use.")
],
[ /* Gabriel García Márquez */
 M("¿Con quién vivió Gabo de niño?", ["Con sus abuelos", "Con sus padres", "En un internado", "Con un tío"], 0),
 M("¿Qué estudió y no terminó?", ["Derecho", "Medicina", "Periodismo", "Literatura"], 0),
 M("¿Qué es el realismo mágico?", ["Un estilo que mezcla la realidad con hechos fantásticos como si fueran normales", "Un tipo de magia", "Una novela de ciencia ficción", "Un género periodístico"], 0),
 L("In 1982, García Márquez received the Nobel Prize in Literature.", "¿Qué pasó en 1982?", ["Recibió el Premio Nobel de Literatura", "Publicó Cien años de soledad", "Nació", "Se mudó a México"], 0),
 T("Talk about a writer, singer or artist you admire. What do you know about their life?", 25, [["was born", "is from", "born"], ["admire", "like", "love"]], "I admire Shakira. She was born in Barranquilla in 1977. She started singing when she was a child, and now she is famous all over the world.")
],
[ /* Ask Sandra */
 M("¿Cuál es el problema de la persona que escribe?", ["Sus vecinos de arriba hacen mucho ruido", "Su jefe es estricto", "No tiene trabajo", "Su perro ladra"], 0),
 M("¿Qué le aconseja Sandra primero?", ["Hablar directamente con los vecinos", "Llamar a la policía", "Mudarse", "Poner música más fuerte"], 0),
 M("¿Qué puede hacer si está muy nervioso para hablar?", ["Escribirles una nota educada", "No decir nada", "Gritar", "Quejarse en redes sociales"], 0),
 L("Choose a good moment, not at midnight when you're angry, but maybe on a weekend afternoon.", "¿Cuándo es buen momento para hablar?", ["Una tarde de fin de semana", "A medianoche", "En la madrugada", "Durante la fiesta"], 0),
 T("Give advice to a friend who has a problem with a colleague at work.", 25, [["you should", "i think you should", "why don't you"], ["if"]], "I think you should talk to your colleague calmly. Why don't you invite her for a coffee? If nothing changes, you should speak to your manager.")
],
[ /* The Day I Missed the Plane */
 M("¿Por qué se quedó dormido?", ["Debió apagar la alarma dormido", "No puso alarma", "Se le dañó el celular", "Se acostó temprano"], 0),
 M("¿Qué habría pasado si hubiera salido media hora antes?", ["Habría alcanzado el avión", "Habría conseguido el trabajo seguro", "Habría conocido a Andrea", "Nada diferente"], 0),
 M("¿Qué pasó dos semanas después?", ["Conoció a su esposa en un café", "Consiguió otro trabajo en Lima", "Volvió a perder un vuelo", "Se mudó a Perú"], 0),
 L("If I had caught that plane, I would never have met her.", "¿A quién no habría conocido?", ["A su esposa Andrea", "A su jefe", "A su prima", "A su hija"], 0),
 T("Talk about a mistake or a missed opportunity that changed your life. What would have happened if things had been different?", 25, [["if i had", "if i hadn't", "if i'd"], ["would have", "wouldn't have", "might have", "could have"]], "Ten years ago I didn't accept a job in Bogotá. If I had accepted it, I would have moved there, and I wouldn't have started my own business here in Cali.")
],
[ /* The Missing Necklace */
 M("¿Por qué sospechaban de Valeria?", ["Había estado en el cuarto antes", "Le gustaba el collar", "No vino a la fiesta", "Se fue temprano"], 0),
 M("¿Quién resolvió el misterio?", ["El hermanito de siete años", "El tío Óscar", "La señora que ayudó con la comida", "La mamá"], 0),
 M("¿Dónde estaba el collar?", ["Junto al lavamanos del baño", "En el carro", "En la iglesia", "En la cocina"], 0),
 L("At my age, the only thief in this house is my memory.", "¿Qué quiere decir la abuela?", ["Que el problema fue que se le olvidó", "Que alguien le robó", "Que no le importa el collar", "Que la casa no es segura"], 0),
 T("Something has disappeared from your house. Make deductions about what happened.", 25, [["must have"], ["might have", "may have", "could have", "can't have"]], "My keys have disappeared. I must have left them in the car, or my son might have taken them by mistake. They can't have been stolen, because the door was locked.")
],
[ /* Colombia's Disappearing Glaciers */
 M("¿Cuántos glaciares quedan en Colombia según el texto?", ["Seis", "Catorce", "Ninguno", "Veinte"], 0),
 M("¿Por qué son importantes los glaciares?", ["Son parte de ecosistemas que dan agua a millones de personas", "Atraen turistas", "Producen electricidad", "Enfrían las ciudades"], 0),
 M("¿Qué se está haciendo con los páramos?", ["Protegerlos para que sigan guardando agua", "Construir hoteles", "Talarlos", "Convertirlos en fincas"], 0),
 L("Experts say that we cannot save every glacier. However, if we act now, we can protect the water sources that depend on them.", "¿Qué se puede hacer todavía?", ["Proteger las fuentes de agua", "Salvar todos los glaciares", "Crear nuevos glaciares", "Nada"], 0),
 T("What environmental problem worries you most in your region, and what can people do about it?", 25, [["pollution", "deforestation", "waste", "drought", "flood", "climate", "plastic", "water", "traffic"], ["can", "should", "in order to", "so that"]], "The problem that worries me most is water pollution. Factories throw waste into the river. People can recycle more and the government should control the factories in order to protect the water.")
],
[ /* Five Stars? Not Quite */
 M("¿Cuál fue el primer problema?", ["No les dieron la habitación con vista al mar", "La comida era mala", "El personal era grosero", "La piscina estaba sucia"], 0),
 M("¿Qué hizo el gerente?", ["Los cambió de habitación y les dio un descuento", "No hizo nada", "Les devolvió todo el dinero", "Les regaló una noche más"], 0),
 M("¿Qué consejo da la autora?", ["Confirmar el tipo de habitación y quejarse con cortesía", "No ir a ese hotel", "Llevar comida", "Ir en diciembre"], 0),
 L("He listened carefully, apologized for the inconvenience and moved us to a sea-view room for the last two nights.", "¿Cuántas noches estuvieron en la habitación con vista al mar?", ["Las últimas dos", "Todas", "Una", "Ninguna"], 0),
 T("Tell a story about a time you complained in a shop, restaurant or hotel. What happened and how did they solve it?", 25, [["complained", "problem", "wrong", "faulty"], ["apologized", "apologised", "refund", "exchange", "discount", "sorry"]], "Last year I bought a laptop that didn't work. I went back to the shop and complained politely. The manager apologized and gave me a new one, and I left a good review.")
]
];
