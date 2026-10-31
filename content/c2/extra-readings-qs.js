/* Preguntas de comprensión de las lecturas extra C2 (mismo orden que extra-readings.js) */
const M = (q, o, a) => ({ t: "mc", q, o, a }), L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), T = (q, min, keys, model) => ({ t: "talk", q, min, keys, model });
module.exports = [
[ /* The Untranslatable */
 M("¿Qué opinan los traductores sobre la 'intraducibilidad'?", ["Casi todo se puede transmitir, pero con un costo", "Muchas palabras no se pueden traducir jamás", "Es un problema inexistente", "Solo afecta a la poesía"], 0),
 M("¿Por qué Nabokov fue criticado?", ["Su traducción literal de Onegin resultó ilegible para muchos", "Inventó chistes nuevos", "No tradujo el libro completo", "Rimó todo el poema"], 0),
 M("¿Por qué las traducciones de Astérix son un triunfo?", ["Preservaron el espíritu inventando chistes nuevos", "Fueron totalmente literales", "No cambiaron ningún nombre", "Usaron notas al pie"], 0),
 L("To read a work in translation is to read it through another mind.", "¿Qué implica leer una traducción, según el autor?", ["Leer a través de la mente de otra persona", "Leer exactamente el original", "Perder todo el sentido", "Leer más rápido"], 0),
 T("Think of a word or expression in Spanish that is hard to translate into English. How would you explain it?", 40, [["means", "refers to"], ["there isn't", "there is no", "closest"]], "In Colombia we say 'echar los perros', which means to flirt with someone. There isn't an exact equivalent, but the closest expression in English would be 'to hit on someone' or 'to make a move'.")
],
[ /* The Tyranny of Metrics */
 M("¿Qué dice la ley de Goodhart?", ["Cuando una medida se vuelve meta, deja de ser una buena medida", "Lo que se mide se mejora siempre", "Los números nunca mienten", "Hay que medir todo"], 0),
 M("¿Qué hacen algunos cirujanos evaluados por mortalidad?", ["Evitan operar a los pacientes más riesgosos", "Operan más rápido", "Contratan más enfermeras", "Publican más"], 0),
 M("¿Cuándo son más valiosas las métricas, según el texto?", ["Cuando se usan para diagnosticar y se desarrollan con los evaluados", "Cuando se imponen desde arriba", "Cuando se ligan a castigos", "Cuando reemplazan el juicio profesional"], 0),
 L("Not everything that counts can be counted, and not everything that can be counted counts.", "¿Qué expresa la frase?", ["No todo lo importante se puede medir, ni todo lo medible importa", "Todo debe contarse", "Contar es inútil", "Solo cuentan los números grandes"], 0),
 T("Are you measured by numbers at work or school? Do those metrics reflect what really matters?", 45, [["measured", "metrics", "targets", "kpis"], ["however", "but", "although"]], "In my call centre we are measured by average handling time. It's useful, but it doesn't reflect quality: sometimes the best agents take longer because they really solve the customer's problem.")
],
[ /* On Nostalgia */
 M("¿Cómo se consideraba la nostalgia en el siglo XVII?", ["Una enfermedad potencialmente mortal", "Un sentimiento positivo", "Un tipo de música", "Una virtud"], 0),
 M("¿Qué efectos encontraron los estudios psicológicos recientes?", ["Más conexión social, autoestima y sentido de la vida", "Depresión y aislamiento", "Pérdida de memoria", "Ningún efecto"], 0),
 M("¿Qué diferencia hay entre nostalgia restauradora y reflexiva?", ["La restauradora quiere reconstruir el pasado; la reflexiva acepta que no vuelve", "Son lo mismo", "La reflexiva es más peligrosa", "La restauradora es solo personal"], 0),
 L("Nostalgia is less a longing to return to the past than a means of extracting meaning from it.", "¿Qué es la nostalgia, según la frase?", ["Una forma de sacar sentido del pasado", "Un deseo de volver al pasado", "Una enfermedad", "Un error de memoria"], 0),
 T("Describe a memory you feel nostalgic about. Why is it meaningful to you now?", 45, [["remember", "used to"], ["because", "meaningful"]], "I remember the Sundays at my grandparents' farm, when we used to eat together for hours. It's meaningful now because it reminds me that I was loved, and I try to do the same with my own children.")
],
[ /* The Cartographer's Daughter */
 M("¿Qué dibujaba el padre?", ["Mapas de la ciudad tal como planeaban que sería", "Mapas antiguos", "Retratos", "Planos de casas privadas"], 0),
 M("¿Qué contenía la carpeta 'Unrealised'?", ["Mapas de proyectos abandonados con sus fechas", "Cartas de amor", "Fotos de familia", "Su testamento"], 0),
 M("¿Por qué el último mapa no tenía fecha de abandono?", ["Era un regalo para su hija que ella podía cumplir", "Lo olvidó", "Era de otro cartógrafo", "Era un error"], 0),
 L("A map of what exists tells you where you are. A map of what might exist tells you what you're for.", "¿Qué quiere decir el padre?", ["Imaginar lo posible da propósito", "Los mapas reales son inútiles", "Hay que dejar de planear", "Solo importa el presente"], 0),
 T("What does 'keeping your nerve' mean in the story, and why does the narrator say it at the end?", 45, [["means"], ["because", "since"]], "Keeping your nerve means not giving up when things are uncertain. The narrator says it at the end because she plants the tree even though it may never give fruit, so she continues her father's hope.")
],
[ /* Reading the Small Print */
 M("¿Qué es un NDA unilateral?", ["Solo una parte revela información y la otra se obliga", "Ambas partes intercambian información", "Un contrato sin firma", "Un contrato laboral"], 0),
 M("¿Qué información suele excluirse de la confidencialidad?", ["La que ya es pública o se desarrolló de forma independiente", "Toda la información técnica", "Los secretos comerciales", "Los nombres de los empleados"], 0),
 M("¿Qué es una 'injunction'?", ["Una orden judicial para que cese la conducta", "Una multa", "Un tipo de contrato", "Un abogado"], 0),
 L("Confidentiality agreements cannot lawfully be used to conceal criminal conduct.", "¿Qué no puede hacer un acuerdo de confidencialidad?", ["Ocultar conductas criminales", "Proteger secretos comerciales", "Durar varios años", "Incluir sanciones"], 0),
 T("Explain to a friend, in simple words, what they should check before signing a confidentiality agreement.", 45, [["should", "check", "make sure"], ["how long", "duration", "definition", "what happens"]], "Before you sign, you should check how the agreement defines confidential information, how long the obligations last and what happens if you break it. If it's important, make sure you get legal advice.")
],
[ /* The Paradox of Choice */
 M("¿Qué pasó en el experimento de las mermeladas?", ["Con 6 opciones se vendió mucho más que con 24", "Con 24 opciones se vendió más", "No se vendió nada", "Vendieron igual"], 0),
 M("¿Qué son los 'satisficers'?", ["Personas que eligen la primera opción que cumple sus criterios", "Personas que buscan siempre lo mejor", "Compradores compulsivos", "Vendedores"], 0),
 M("¿Qué les pasa a los 'maximisers'?", ["Logran mejores resultados objetivos pero se sienten menos satisfechos", "Son más felices", "Nunca eligen", "Ganan menos dinero"], 0),
 L("When there were only two kinds of jeans available, an ill-fitting pair could be blamed on the world; when there are two hundred, the fault must surely be one's own.", "¿Qué efecto tiene tener muchas opciones?", ["La culpa de una mala elección recae en uno mismo", "Siempre eliges bien", "Culpas a la tienda", "Compras más jeans"], 0),
 T("Are you a maximiser or a satisficer? Give an example from your own life.", 40, [["maximiser", "satisficer"], ["for example", "for instance"]], "I'm definitely a maximiser. For example, when I bought my phone I compared models for three weeks, and even after buying it I kept wondering if another one would have been better.")
],
[ /* Review: The Salt Archive */
 M("¿Qué descubre Amalia en los archivos?", ["Cartas de un minero a una mujer cuyo nombre fue borrado", "Un tesoro de sal", "El diario de su madre", "Un mapa"], 0),
 M("¿Qué critica el reseñista?", ["La subtrama del hijo y el exceso de metáforas", "La traducción", "La trama principal", "El final valiente"], 0),
 M("¿Cuál es la opinión general del reseñista?", ["Es un gran logro, con defectos menores", "Es un fracaso", "Es aburrido", "Es solo para premios"], 0),
 L("Carvajal is less interested in solving her mystery than in interrogating the impulse to solve it.", "¿Qué le interesa a la autora?", ["Cuestionar el impulso de resolver el misterio", "Resolver el misterio", "Escribir un thriller", "Ganar premios"], 0),
 T("Review a book, film or series you liked. Mention its strengths, one weakness and your recommendation.", 50, [["strength", "best", "brilliant", "impressive"], ["however", "although", "weakness", "flaw"], ["recommend"]], "I recently watched a Colombian series about a family business. Its greatest strength is the acting, which is brilliant. However, the last episodes felt rushed. Even so, I would definitely recommend it.")
],
[ /* In Praise of Failure */
 M("¿Por qué el orador se siente autorizado a hablar del fracaso?", ["Porque ha fracasado muchas veces", "Porque nunca ha fracasado", "Porque es psicólogo", "Porque es el rector"], 0),
 M("¿Qué critica sobre las narrativas fáciles del fracaso?", ["Que no todos los fracasos llevan al éxito", "Que son muy tristes", "Que son muy largas", "Que nadie las cree"], 0),
 M("¿Qué consejo da al final?", ["Intentar cosas inciertas y ser generoso con uno mismo al fallar", "Evitar todo riesgo", "Estudiar más", "Buscar trabajos seguros"], 0),
 L("Now go and get something gloriously wrong.", "¿Qué tono tiene la última frase?", ["Humorístico y motivador", "Triste", "Enojado", "Amenazante"], 0),
 T("Talk about a failure that taught you something. What happened and what did you learn?", 50, [["failed", "failure", "went wrong"], ["learned", "taught"]], "Two years ago I started a small food business and it failed after eight months. It was painful, but it taught me to plan my finances better and to ask for help early. I don't regret trying.")
],
[ /* Science's Replication Problem */
 M("¿Cuántos de los 100 estudios de psicología se replicaron con éxito?", ["Alrededor de un tercio", "Casi todos", "Ninguno", "La mitad exacta"], 0),
 M("¿Qué es el 'problema del cajón'?", ["Los estudios sin resultados quedan sin publicar", "Se pierden los datos", "Se roban los estudios", "Hay demasiados estudios"], 0),
 M("¿Qué son los 'registered reports'?", ["Estudios aceptados por su diseño antes de conocer resultados", "Informes de policía", "Estudios ya replicados", "Reportes de errores"], 0),
 L("Science, after all, is distinguished not by the infallibility of its practitioners but by its capacity for self-correction.", "¿Qué distingue a la ciencia, según el texto?", ["Su capacidad de corregirse", "Que nunca se equivoca", "Su prestigio", "Su velocidad"], 0),
 T("Why is it important that scientific results can be replicated? Explain with your own example.", 45, [["important", "because"], ["for example", "for instance", "if"]], "It's important because one study can be wrong by chance. For example, if a medicine works in one small study but not in others, doctors shouldn't prescribe it until the results are confirmed.")
],
[ /* Talking About Risk */
 M("¿Qué diferencia hay entre riesgo relativo y absoluto?", ["El relativo es una proporción; el absoluto, la diferencia real", "Son lo mismo", "El absoluto siempre parece mayor", "El relativo no existe"], 0),
 M("¿Qué ayudas visuales mejoran la comprensión?", ["Cuadrículas de iconos", "Fórmulas matemáticas", "Textos largos", "Gráficos 3D"], 0),
 M("¿Qué es la toma de decisiones compartida?", ["El médico aporta la evidencia y el paciente sus valores", "El médico decide solo", "El paciente decide solo", "Decide la familia"], 0),
 L("Patients are more inclined to opt for surgery when told that it has a ninety percent survival rate than when told it has a ten percent mortality rate.", "¿Qué muestra este ejemplo?", ["Que la forma de presentar el riesgo influye en la decisión", "Que la cirugía es peligrosa", "Que los pacientes no entienden números", "Que la mortalidad es alta"], 0),
 T("Explain to an elderly relative, in simple terms, the difference between 'reduces your risk by half' and 'from 2 in 100 to 1 in 100'.", 45, [["means", "in other words"], ["out of", "in 100", "percent"]], "'Reduces your risk by half' sounds big, but in other words it means that instead of two people out of a hundred having a heart attack, only one will. So the real difference is just one person in a hundred.")
],
[ /* How to Sound Clever in Meetings */
 M("¿Qué tono tiene el texto?", ["Irónico y satírico", "Serio e instructivo", "Triste", "Neutral"], 0),
 M("¿Para qué sirve, irónicamente, decir que algo hay que 'tratarlo aparte'?", ["Para que nada cambie antes de la próxima reunión", "Para tomar decisiones rápidas", "Para ahorrar dinero", "Para incluir a todos"], 0),
 M("¿Cuál es el verdadero consejo final del autor?", ["Di lo que piensas, reconoce a los demás y no hables si no tienes nada que aportar", "Llega tarde a las reuniones", "Repite las ideas de otros", "Pregunta si todo es escalable"], 0),
 L("I think what we're really saying here is...", "¿Para qué usa el autor esta frase en el texto?", ["Para apropiarse de la idea de un colega", "Para resumir con honestidad", "Para terminar la reunión", "Para pedir la palabra"], 0),
 T("Describe a typical meeting at your work or school. What would you change to make it more useful?", 45, [["usually", "typically"], ["would", "should", "could"]], "Our meetings usually last an hour and half the people don't speak. I would make them shorter, send the agenda before, and finish every meeting with clear decisions and who is responsible for each task.")
],
[ /* The Right to Be Forgotten */
 M("¿Qué decidió el tribunal europeo en 2014?", ["Que se puede pedir a los buscadores eliminar enlaces irrelevantes u obsoletos", "Que hay que borrar todos los periódicos", "Que internet no tiene reglas", "Que los buscadores son ilegales"], 0),
 M("¿Qué critican en Estados Unidos?", ["Que las empresas privadas decidan qué información es accesible", "Que el fallo es muy suave", "Que no se aplica a Europa", "Que protege a los periodistas"], 0),
 M("¿Qué información es más probable que se retire?", ["El historial médico de una persona privada", "La conducta de un funcionario público", "Noticias de política", "Información de empresas"], 0),
 L("In an age when machines remember everything, the capacity to forget, and to forgive, may turn out to be one of the more distinctively human things we have left to defend.", "¿Qué valora el autor al final?", ["La capacidad humana de olvidar y perdonar", "La memoria de las máquinas", "Los buscadores", "Los archivos"], 0),
 T("Should people have the right to delete old information about themselves from the internet? Argue your position.", 50, [["should"], ["because", "since"], ["however", "on the other hand", "although"]], "I believe people should have the right to remove old information, because everyone deserves a second chance. However, this shouldn't apply to politicians or public officials, since citizens need to know how they have acted.")
]
];
