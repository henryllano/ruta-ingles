/* Preguntas de comprensión de las lecturas extra B2 (mismo orden que extra-readings.js) */
const M = (q, o, a) => ({ t: "mc", q, o, a }), L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), T = (q, min, keys, model) => ({ t: "talk", q, min, keys, model });
module.exports = [
[ /* Why We Need Sleep */
 M("¿Qué pasa en la fase REM?", ["El cerebro procesa emociones y consolida la memoria", "El cuerpo deja de funcionar", "Se reparan solo los músculos", "No se sueña"], 0),
 M("¿Por qué las pantallas afectan el sueño?", ["La luz azul reduce la melatonina", "Hacen ruido", "Aumentan la temperatura", "Consumen mucha energía"], 0),
 M("¿Con qué se compara manejar tras 18 horas despierto?", ["Con manejar bajo los efectos del alcohol", "Con manejar de noche", "Con manejar sin licencia", "Con manejar muy despacio"], 0),
 L("Bedrooms should be dark, quiet and cool, and screens should be switched off at least an hour before bedtime.", "¿Cuándo hay que apagar las pantallas?", ["Al menos una hora antes de dormir", "Justo antes de dormir", "Después de la cena", "A medianoche"], 0),
 T("How many hours do you usually sleep, and what could you do to sleep better?", 30, [["usually"], ["should", "could"]], "I usually sleep about six hours, which is not enough. I should stop using my phone in bed and go to sleep at the same time every day.")
],
[ /* The Hidden Cost of Fast Fashion */
 M("¿Cuánto más ropa compra hoy una persona promedio que en el año 2000?", ["Un 60 % más", "El doble", "Un 10 % más", "Lo mismo"], 0),
 M("¿Qué ocurrió en Rana Plaza en 2013?", ["Se derrumbó un edificio de fábricas y murieron más de mil trabajadores", "Se inauguró una fábrica ecológica", "Hubo una huelga exitosa", "Se cerró por contaminación"], 0),
 M("Según los expertos, ¿cuál es la prenda más sostenible?", ["La que ya tienes en tu armario", "La de algodón orgánico", "La más barata", "La que se alquila"], 0),
 L("In the Atacama Desert in Chile, mountains of discarded clothing can even be seen from space.", "¿Qué se puede ver desde el espacio?", ["Montañas de ropa desechada en el desierto de Atacama", "Fábricas de ropa en Chile", "Ríos contaminados", "Tiendas de moda"], 0),
 T("How often do you buy clothes? What could you do to reduce your impact?", 30, [["could", "should"]], "I buy clothes maybe once a month, which is probably too often. I could buy second-hand clothes and repair the ones I already have.")
],
[ /* Should Zoos Still Exist? */
 M("¿Qué argumento usan los defensores de los zoológicos?", ["Ayudan a salvar especies en peligro", "Son más baratos que los parques", "Los animales viven más felices", "Generan mucho empleo"], 0),
 M("¿Qué problema mencionan los críticos sobre los elefantes?", ["En cautiverio sufren estrés, obesidad y problemas articulares", "Comen demasiado", "Son peligrosos para los visitantes", "No se reproducen nunca"], 0),
 M("¿Cuál es la conclusión del autor?", ["Los zoológicos del futuro deberían parecerse a santuarios", "Hay que cerrar todos los zoológicos", "Los zoológicos están perfectos así", "Solo deberían tener elefantes"], 0),
 L("Breeding programmes have saved several animals from extinction, including the Arabian oryx and the California condor.", "¿Qué han logrado los programas de cría?", ["Salvar animales de la extinción", "Aumentar las visitas", "Bajar los precios", "Crear nuevas especies"], 0),
 T("Do you think zoos should exist? Give your opinion with at least one argument for each side.", 40, [["on the one hand", "however", "although"], ["in my opinion", "i think", "i believe"]], "In my opinion, zoos can be useful for conservation. On the one hand, they protect endangered species. However, large animals suffer in captivity, so I think zoos should only keep animals that need protection.")
],
[ /* Will a Robot Take Your Job? */
 M("¿Quiénes eran los luditas?", ["Trabajadores textiles que destruían máquinas", "Inventores de máquinas", "Economistas modernos", "Programadores de IA"], 0),
 M("¿Qué pasó con los cajeros de banco cuando llegaron los cajeros automáticos?", ["Su número aumentó durante décadas", "Desaparecieron de inmediato", "Bajaron sus salarios a la mitad", "Se volvieron programadores"], 0),
 M("¿Qué habilidades serán más importantes, según el texto?", ["Creatividad, pensamiento crítico e inteligencia emocional", "Memorizar información", "Escribir rápido", "Hacer cálculos mentales"], 0),
 L("AI will not replace you. A person using AI will.", "¿Qué quiere decir la frase?", ["Quien use IA tendrá ventaja sobre quien no", "La IA reemplazará a todos", "Nadie usará la IA", "La IA no sirve para nada"], 0),
 T("How could artificial intelligence change your job or your studies? Is it a threat or an opportunity?", 40, [["could", "might", "will"], ["threat", "opportunity"]], "AI could change my job a lot, because it can answer simple customer questions. I think it is both a threat and an opportunity: some tasks will disappear, but I could use AI to work faster.")
],
[ /* The Inheritance */
 M("¿Cómo era la tía Inés?", ["Excéntrica, viajera y rodeada de libros y gatos", "Rica y presumida", "Una abogada famosa", "Muy cercana a Gustavo"], 0),
 M("¿Qué hizo Marta durante el mes?", ["Alimentó a los gatos, arregló la reja y leyó los libros de la tía", "Contrató a un cerrajero", "Leyó los diarios buscando un amor perdido", "No volvió a la casa"], 0),
 M("¿Qué decía el sobre?", ["Quien se quede a alimentar a los gatos", "El tesoro está en la caja fuerte", "Un hombre misterioso de 1974", "Nada, estaba vacío"], 0),
 L("I spent my life looking for a place where I didn't have to pretend.", "¿Qué buscaba la tía?", ["Un lugar donde no tuviera que fingir", "Un tesoro escondido", "Un amor perdido", "Dinero"], 0),
 T("What do you think the story is really about? Explain the message in your own words.", 35, [["about", "message"], ["because"]], "I think the story is about loyalty and real love. The message is that people who care without expecting anything in return are the ones who deserve the most, because they understood the aunt.")
],
[ /* Cities That Grow Their Own Food */
 M("¿Por qué la producción de comida salió de las ciudades?", ["Las ciudades crecieron y el transporte se abarató", "Se prohibió por ley", "La tierra urbana se contaminó", "La gente dejó de comer verduras"], 0),
 M("¿Qué beneficio social tienen los huertos comunitarios?", ["Unen a personas de distintas edades y orígenes", "Producen toda la comida de la ciudad", "Eliminan el desempleo", "Reducen los impuestos"], 0),
 M("¿Qué problema tienen las granjas verticales?", ["Consumen mucha energía y son costosas", "Producen muy poco", "Contaminan el suelo", "Solo cultivan flores"], 0),
 L("Even a few tomato plants on a balcony can change the way we think about where our food comes from.", "¿Qué dice la última frase del texto?", ["Unas pocas plantas en un balcón cambian cómo pensamos sobre la comida", "Hay que tener una granja grande", "Los tomates son difíciles de cultivar", "Los balcones son peligrosos"], 0),
 T("Would you like to grow your own food? What would you grow and where?", 30, [["would"]], "I would love to grow my own food. I would grow tomatoes, herbs and lettuce on my balcony, because they are easy and I use them every day.")
],
[ /* So, Tell Me About Yourself */
 M("¿Cuánto debería durar la respuesta?", ["Entre uno y dos minutos", "Diez minutos", "Diez segundos", "Lo que sea necesario"], 0),
 M("¿Cuál es la fórmula recomendada?", ["Presente, pasado, futuro", "Familia, estudios, aficiones", "Pasado, presente, preguntas", "Salario, horario, vacaciones"], 0),
 M("¿Cuál de estos es un error a evitar?", ["Criticar a tu empleador anterior", "Mencionar logros", "Explicar por qué te interesa el puesto", "Practicar en voz alta"], 0),
 L("Don't simply repeat your CV word for word; the interviewer has already read it.", "¿Por qué no repetir la hoja de vida?", ["Porque el entrevistador ya la leyó", "Porque es muy larga", "Porque es confidencial", "Porque está en español"], 0),
 T("Answer the question: 'So, tell me about yourself.' Use the present, past and future formula.", 50, [["currently", "i'm", "i work"], ["before", "previously"], ["looking for", "would like", "i'd like"]], "I'm currently working as a team leader in a call centre, where I manage ten agents. Previously, I worked in sales for three years. Now I'm looking for a position where I can use my English and grow professionally.")
],
[ /* The Power of the Placebo */
 M("¿Qué significa 'placebo' en latín?", ["Complaceré", "Pastilla", "Engaño", "Curaré"], 0),
 M("¿Qué ocurrió con el soldado al que inyectaron agua con sal?", ["Su dolor disminuyó mucho", "Empeoró", "No sintió nada", "Se durmió"], 0),
 M("¿Qué descubrió el estudio de Harvard?", ["Los placebos funcionan aunque el paciente sepa que lo son", "Los placebos no funcionan", "Solo funcionan las inyecciones", "El color no importa"], 0),
 L("When patients expect negative side effects from a treatment, they are more likely to experience them.", "¿Qué es el efecto nocebo?", ["Sentir efectos negativos porque se esperan", "Curarse sin medicina", "Una medicina nueva", "Un tipo de inyección"], 0),
 T("Do you think the mind can really influence the body? Give an example from your life or someone you know.", 35, [["i think", "i believe"], ["for example", "for instance"]], "I believe the mind has a big influence on the body. For example, when I'm stressed before an exam, I get a headache, and when I relax, it disappears.")
],
[ /* When Tourists Become a Problem */
 M("¿Cuántos turistas recibe Venecia al año?", ["Más de veinte millones", "Cincuenta mil", "Dos millones", "Cien mil"], 0),
 M("¿Por qué suben los arriendos en ciudades turísticas?", ["Los dueños ganan más alquilando a turistas", "Hay más habitantes locales", "Los gobiernos suben impuestos", "Se construyen menos hoteles"], 0),
 M("¿Qué hizo Machu Picchu para controlar visitantes?", ["Vender entradas por franjas horarias", "Cerrar los domingos", "Prohibir extranjeros", "Subir el precio al doble"], 0),
 L("After all, the aim of travelling should be to discover a place, not to consume it.", "¿Cuál debería ser el objetivo de viajar, según el autor?", ["Descubrir un lugar, no consumirlo", "Visitar el mayor número de sitios", "Gastar poco dinero", "Tomar muchas fotos"], 0),
 T("Is tourism good or bad for your city or a place you know? Explain.", 40, [["on the one hand", "however", "although"], ["because"]], "Tourism is mostly good for Cartagena because it creates jobs. However, rents in the old city have increased so much that many local families have had to leave.")
],
[ /* Report: Customer Satisfaction Survey */
 M("¿Cuál fue la queja más frecuente?", ["Los tiempos de espera", "Los precios", "La mala educación de los agentes", "La página web"], 0),
 M("¿En qué recibieron buenas calificaciones los agentes?", ["Cortesía y conocimiento del producto", "Rapidez", "Precios", "Horarios"], 0),
 M("¿Cuál es una de las recomendaciones?", ["Ofrecer una opción de devolución de llamada", "Cerrar el chat", "Reducir el personal", "Eliminar la encuesta"], 0),
 L("Only 35% of respondents aged 18 to 30 were aware that our chat service exists.", "¿Qué no sabían muchos jóvenes?", ["Que existe el servicio de chat", "El número de teléfono", "El horario", "El nombre de la empresa"], 0),
 T("You are the manager. Explain the main problem in the report and what you will do about it.", 40, [["the main problem", "the biggest problem"], ["we will", "we'll", "we are going to"]], "The main problem is that customers wait too long before speaking to an agent. We will hire more staff for Monday mornings and we are going to introduce a call-back option.")
],
[ /* The Bilingual Brain */
 M("¿Qué se creía antes sobre los niños bilingües?", ["Que se confundirían y se atrasarían", "Que serían más inteligentes", "Que hablarían mejor", "Que aprenderían más rápido"], 0),
 M("¿Qué es el 'code-switching'?", ["Mezclar palabras de dos idiomas en una frase", "Olvidar un idioma", "Hablar muy rápido", "Traducir textos"], 0),
 M("¿Qué relación con la demencia sugieren algunos estudios?", ["Los bilingües muestran síntomas varios años más tarde", "Los bilingües no la sufren nunca", "Los bilingües la sufren antes", "No hay ninguna relación"], 0),
 L("Although people who learn a language later in life may never sound exactly like native speakers, the effort of learning itself appears to benefit the brain.", "¿Qué beneficio tiene aprender un idioma de adulto?", ["El esfuerzo beneficia al cerebro", "Sonarás exactamente como un nativo", "Ninguno", "Olvidarás tu idioma materno"], 0),
 T("Why are you learning English, and how do you think it is changing you?", 35, [["because"], ["i have", "i've", "has"]], "I'm learning English because I want a better job and I love travelling. I think it has made me more confident, and I've started to understand films and songs that I couldn't before.")
],
[ /* The Mystery of the Mary Celeste */
 M("¿Qué encontraron los marineros en el Mary Celeste?", ["Comida, agua y carga intactas, pero ninguna persona", "El barco hundido", "Piratas a bordo", "Al capitán dormido"], 0),
 M("¿Qué faltaba en el barco?", ["El único bote salvavidas", "La comida", "La carga de alcohol", "La ropa de la tripulación"], 0),
 M("¿Qué explicación propone una teoría moderna?", ["Temieron una explosión por vapores de alcohol y subieron al bote", "Los atacó un monstruo marino", "Hubo un motín", "Los raptaron piratas"], 0),
 L("Arthur Conan Doyle published a fictional account in 1884, which included several invented details that many people mistakenly believed to be true.", "¿Qué hizo Arthur Conan Doyle?", ["Publicó un relato de ficción que la gente creyó real", "Encontró el barco", "Resolvió el misterio", "Era el capitán"], 0),
 T("What do you think happened to the crew of the Mary Celeste? Speculate using might have, must have or could have.", 40, [["might have", "must have", "could have", "may have"]], "I think the captain might have panicked because of the alcohol fumes. They must have left in the lifeboat in a hurry, and the rope could have broken in a storm, so they never came back.")
]
];
