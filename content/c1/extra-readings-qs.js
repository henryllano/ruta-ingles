/* Preguntas de comprensión de las lecturas extra C1 (mismo orden que extra-readings.js) */
const M = (q, o, a) => ({ t: "mc", q, o, a }), L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), T = (q, min, keys, model) => ({ t: "talk", q, min, keys, model });
module.exports = [
[ /* The Attention Economy */
 M("¿De dónde vienen los ingresos de las plataformas gratuitas?", ["De los anunciantes", "De los usuarios", "Del gobierno", "De donaciones"], 0),
 M("¿Con qué se comparan los 'likes' impredecibles?", ["Con una máquina tragamonedas", "Con un libro", "Con un reloj", "Con una carta"], 0),
 M("¿Qué proponen los defensores de la 'tecnología humana'?", ["Regular el diseño manipulador y desactivar notificaciones", "Prohibir internet", "Usar más redes sociales", "Pagar por cada clic"], 0),
 L("Algorithms that prioritise engagement tend to amplify content that provokes strong emotions, and outrage, it turns out, is extraordinarily engaging.", "¿Qué tipo de contenido amplifican los algoritmos?", ["El que provoca emociones fuertes, como la indignación", "El más educativo", "El más reciente", "El más corto"], 0),
 T("How much control do you really have over the time you spend on your phone? What strategies could help you?", 40, [["notifications", "screen time", "phone"], ["could", "should", "might"]], "Honestly, I don't have much control. I check my phone without thinking. I could disable notifications and leave my phone in another room while I work, which might help me concentrate.")
],
[ /* In Defence of Boredom */
 M("Según una línea de investigación, ¿qué función cumple el aburrimiento?", ["Una señal de que la actividad no satisface nuestras necesidades", "Un síntoma de enfermedad", "Una pérdida total de tiempo", "Un tipo de pereza"], 0),
 M("¿Qué pasó en el experimento de los vasos de plástico?", ["Quienes hicieron la tarea aburrida fueron más creativos", "Nadie tuvo ideas", "El grupo de control ganó", "Todos se durmieron"], 0),
 M("¿Qué recomienda el autor?", ["Resistir el impulso de llenar cada silencio", "Buscar el tedio a propósito", "Usar más el celular", "Trabajar sin descanso"], 0),
 L("Many artists and scientists have long described their best insights arriving not at their desks but in the shower, on long walks or while staring out of train windows.", "¿Dónde surgen muchas buenas ideas según el texto?", ["En la ducha, caminando o mirando por la ventana", "En el escritorio", "En reuniones", "Leyendo noticias"], 0),
 T("When was the last time you were bored? What did you do, and do you agree that boredom can be useful?", 40, [["agree", "disagree"], ["because"]], "The last time I was bored was in a long queue at the bank. I took out my phone immediately. I partly agree that boredom can be useful, because my best ideas come when I'm walking without music.")
],
[ /* Editing the Code of Life */
 M("¿Con qué se compara la técnica CRISPR?", ["Con unas tijeras moleculares guiadas por GPS", "Con un microscopio", "Con una vacuna", "Con un computador"], 0),
 M("¿Qué se aprobó en 2023?", ["La primera terapia con CRISPR para la anemia falciforme", "La edición de embriones humanos", "Mosquitos modificados en todo el mundo", "La prohibición total de CRISPR"], 0),
 M("¿Qué preocupa a los críticos?", ["Que la línea entre terapia y mejora sea difícil de trazar", "Que sea demasiado barato", "Que no funcione nunca", "Que sea muy lento"], 0),
 L("Changes made to embryos are heritable, meaning they would be passed on to future generations.", "¿Por qué es delicado editar embriones?", ["Los cambios se heredan a futuras generaciones", "Es muy caro", "No tiene efecto", "Es ilegal en todo el mundo"], 0),
 T("Should parents be allowed to edit their children's genes? Where would you draw the line?", 45, [["draw the line", "should", "shouldn't"], ["however", "although", "on the other hand"]], "I think gene editing should be allowed to prevent serious diseases. However, I would draw the line at choosing height or intelligence, because that would increase inequality between rich and poor families.")
],
[ /* When the Sea Comes Home */
 M("¿Qué problema enfrenta Kiribati?", ["El aumento del nivel del mar", "Un terremoto", "La sobrepoblación", "Una guerra"], 0),
 M("¿Por qué los 'refugiados climáticos' no tienen estatus legal?", ["La Convención de 1951 no menciona desastres ambientales", "Nadie los reconoce como personas", "Son muy pocos", "Kiribati no lo pidió"], 0),
 M("¿Qué significa 'migración con dignidad'?", ["Preparar a los ciudadanos para emigrar como trabajadores calificados", "Quedarse en la isla", "Pedir asilo en masa", "Construir muros"], 0),
 L("You can move people. You cannot move a culture.", "¿Qué quiere decir el isleño?", ["Que la cultura está ligada al lugar y se pierde al emigrar", "Que la gente no quiere irse", "Que la cultura es fácil de trasladar", "Que no hay problema"], 0),
 T("Should rich countries accept people displaced by climate change? Explain your position.", 45, [["should"], ["because", "since"], ["however", "although", "on the other hand"]], "I believe rich countries should accept climate migrants, since they have produced most of the emissions. However, this needs international cooperation, because no single country can receive everyone.")
],
[ /* The Lighthouse Keeper */
 M("¿Qué decía la carta que recibió Tomás?", ["Que el faro sería automatizado y su puesto desaparecería", "Que lo ascendían", "Que su hijo volvía", "Que el faro se demolería"], 0),
 M("¿Qué le confesó la ingeniera?", ["Que de niña miraba su luz e imaginaba quién estaba allí", "Que no le gustaban los faros", "Que era su sobrina", "Que el faro nuevo fallaría"], 0),
 M("Según Tomás, ¿cuál era la otra mitad de lo que es un faro?", ["Saber que alguien estaba despierto", "La luz más brillante", "El edificio", "El sueldo"], 0),
 L("I used to imagine who was up there. I thought it must be someone very wise.", "¿Qué imaginaba la ingeniera de niña?", ["Que quien estaba en el faro era alguien muy sabio", "Que el faro estaba vacío", "Que era un fantasma", "Que era su padre"], 0),
 T("How do you think Tomás feels at the end of the story? Use evidence from the text.", 40, [["feels", "felt"], ["because", "since"]], "I think he feels sad but also proud. He admits the new light is good, but he feels something is lost, because nobody is awake anymore. He has given his life to the lighthouse.")
],
[ /* The Strategic Power of Silence */
 M("¿Por qué funciona el silencio en una negociación?", ["La gente se siente incómoda y llena el vacío ofreciendo más", "Asusta a la otra parte", "Es una regla legal", "Hace perder tiempo"], 0),
 M("¿En qué culturas el silencio no genera la misma presión?", ["Partes de Asia oriental y Escandinavia", "América Latina", "El sur de Europa", "Estados Unidos"], 0),
 M("¿Con qué recomiendan combinar el silencio?", ["Con escucha activa", "Con amenazas", "Con chistes", "Con regalos"], 0),
 L("If you were to commit to a larger order, we could probably be a little more flexible.", "¿Qué ofrece el proveedor tras el silencio?", ["Más flexibilidad si el pedido es más grande", "Cancelar el pedido", "Subir el precio", "Nada"], 0),
 T("Describe a time you negotiated something (a price, a salary, a plan with family). What worked and what didn't?", 45, [["negotiated", "offered", "asked"], ["worked", "didn't work"]], "Last year I negotiated the price of a used car. I asked for a discount and then stayed silent. It worked: the seller offered me five hundred dollars less. What didn't work was showing that I really loved the car.")
],
[ /* The Myth of Multitasking */
 M("¿Qué hace realmente el cerebro al 'hacer dos cosas a la vez'?", ["Cambia rápidamente de una tarea a otra", "Divide la atención en partes iguales", "Se apaga", "Trabaja el doble"], 0),
 M("¿Qué descubrió el estudio de Stanford?", ["Los que hacen mucha multitarea rinden peor", "La multitarea mejora la memoria", "No hay diferencias", "Solo los jóvenes pueden hacerla"], 0),
 M("¿Qué es el 'deep work'?", ["Bloques largos de tiempo sin interrupciones en una tarea", "Trabajar de noche", "Trabajar en equipo", "Responder correos constantemente"], 0),
 L("Talking on the phone, even hands-free, impairs driving performance far more than listening to the radio.", "¿Qué afecta más la conducción?", ["Hablar por teléfono, incluso con manos libres", "Escuchar radio", "Escuchar música", "Manejar de día"], 0),
 T("Do you multitask? Describe your typical work or study day and how you could organise it better.", 45, [["usually", "often"], ["could", "should", "instead"]], "I usually answer messages while I'm working, so I lose concentration. Instead, I could check my messages only three times a day and work in blocks of one hour without my phone.")
],
[ /* Universal Basic Income */
 M("¿Qué es la renta básica universal?", ["Una suma fija mensual del Estado para todos, sin condiciones", "Un salario mínimo", "Un subsidio para desempleados", "Un préstamo bancario"], 0),
 M("¿Cuál es la principal objeción?", ["El costo enorme", "Que es demasiado simple", "Que nadie la quiere", "Que ya existe en todo el mundo"], 0),
 M("¿Qué encontró la prueba en Finlandia?", ["Más bienestar y menos estrés, con poco efecto en el empleo", "Que todos dejaron de trabajar", "Que aumentó el desempleo", "Que no hubo ningún efecto"], 0),
 L("A person who accepts a low-paid job may lose more in benefits than they gain in wages.", "¿Qué problema de los sistemas actuales describe la frase?", ["Aceptar un trabajo mal pagado puede hacer perder más subsidios de lo que se gana", "Los salarios son muy altos", "No hay subsidios", "Los subsidios son iguales para todos"], 0),
 T("Would a universal basic income work in your country? Give arguments for and against.", 50, [["would"], ["on the one hand", "however", "on the other hand", "although"]], "On the one hand, a basic income would reduce poverty and help people in informal jobs. On the other hand, it would be very expensive, and I'm not sure the government could finance it without raising taxes a lot.")
],
[ /* When a Language Dies */
 M("¿Qué porcentaje de lenguas están en peligro, aproximadamente?", ["Al menos el 40 %", "El 5 %", "El 90 %", "Ninguno"], 0),
 M("¿Por qué muchos padres no transmiten su lengua?", ["Creen que sus hijos tendrán mejores oportunidades con la lengua nacional", "Porque está prohibida hoy", "Porque no la recuerdan", "Porque es muy difícil"], 0),
 M("¿Qué lengua se revivió como lengua cotidiana?", ["El hebreo", "El latín", "El sánscrito", "El griego antiguo"], 0),
 L("A language survives, ultimately, only when people choose to speak it.", "¿Qué hace que una lengua sobreviva?", ["Que la gente decida hablarla", "Que se grabe", "Que haya diccionarios", "Que haya apps"], 0),
 T("Do you know any indigenous language or dialect in your country? Why is it important to protect it?", 40, [["important"], ["because"]], "In Colombia there are more than sixty indigenous languages, like Wayuunaiki. It's important to protect them because they contain knowledge about nature and they are part of people's identity.")
],
[ /* Why Do People Believe Conspiracy Theories? */
 M("¿Qué ofrece una teoría conspirativa frente a la explicación oficial?", ["Una narrativa clara donde nada pasa por accidente", "Más datos científicos", "Una explicación más compleja", "Menos certeza"], 0),
 M("¿Qué es el sesgo de confirmación?", ["Buscar información que apoya lo que ya creemos", "Confirmar todo con expertos", "Dudar de todo", "Olvidar lo que leemos"], 0),
 M("¿Qué es el 'prebunking'?", ["Advertir de antemano sobre técnicas de desinformación", "Ridiculizar a los creyentes", "Borrar publicaciones", "Creer en todo"], 0),
 L("Ridiculing believers tends to backfire, reinforcing their sense of persecution.", "¿Qué pasa si se ridiculiza a quienes creen en conspiraciones?", ["Se refuerza su sensación de persecución", "Cambian de opinión", "Dejan de usar internet", "Nada"], 0),
 T("How would you talk to a friend who believes a conspiracy theory? What would you say and avoid?", 45, [["would"], ["avoid", "wouldn't"]], "I would listen to my friend first and ask why he believes it. I would avoid laughing at him, because that would make him defensive. Then I would show him reliable sources and explain how fake news spreads.")
],
[ /* Proposal: A Four-Day Working Week */
 M("¿Qué problema motiva la propuesta?", ["Alta rotación de personal por agotamiento", "Bajas ventas", "Demasiados empleados", "Un cambio de ley"], 0),
 M("¿Qué pasó en la prueba del Reino Unido?", ["La mayoría de empresas decidió continuar", "Todas las empresas quebraron", "Los ingresos cayeron mucho", "Nadie participó"], 0),
 M("¿Cómo funcionaría Servicio al Cliente?", ["Con horarios escalonados para abrir cinco días", "Cerraría los viernes", "Trabajaría siete días", "No participaría"], 0),
 L("Replacing an employee costs, on average, the equivalent of six months' salary.", "¿Cuánto cuesta reemplazar a un empleado?", ["Unos seis meses de salario", "Un mes de salario", "Un año de salario", "Nada"], 0),
 T("Would you like to work four days a week? Present the idea to your boss with at least two arguments.", 45, [["would", "could"], ["firstly", "first", "secondly", "moreover", "also"]], "I'd like to propose a four-day week. Firstly, people would be less tired and more productive. Moreover, it would help the company keep good employees, because replacing them is very expensive.")
],
[ /* Why We Are Wired for Stories */
 M("¿Qué pasa en el cerebro cuando oímos una historia?", ["Se activan muchas áreas, como si viviéramos la experiencia", "Solo se activa el área del lenguaje", "Se apaga", "Se duerme"], 0),
 M("¿Qué hormona aumentó en el experimento de Paul Zak?", ["La oxitocina", "La adrenalina", "La melatonina", "La insulina"], 0),
 M("¿Por qué las historias ayudaron a nuestros antepasados?", ["Aprendían de experiencias sin correr los riesgos", "Los entretenían solamente", "Les hacían dormir", "Les daban comida"], 0),
 L("The same mechanisms that allow a novel to cultivate empathy for people unlike ourselves can be exploited to spread propaganda.", "¿Qué advierte el texto sobre las historias?", ["Que también pueden usarse para la propaganda", "Que siempre son buenas", "Que no influyen", "Que solo sirven para niños"], 0),
 T("Tell a short story from your life that taught you something important. End with the lesson.", 50, [["when", "once", "one day"], ["learned", "taught"]], "One day, when I was fifteen, I lied to my father about my grades. He found out and, instead of shouting, he told me he was disappointed. That taught me that honesty is more important than looking perfect.")
]
];
