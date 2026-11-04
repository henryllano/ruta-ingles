/* Preguntas de comprensión de las lecturas extra A1 (mismo orden que extra-readings.js) */
const M = (q, o, a) => ({ t: "mc", q, o, a }), L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), T = (q, min, keys, model) => ({ t: "talk", q, min, keys, model });
module.exports = [
[ /* My Best Friend */
 M("¿Qué hace Camila?", ["Es dentista", "Es profesora", "Es enfermera", "Es estudiante"], 0),
 M("¿Cuándo se encuentran Paula y Camila?", ["Todos los viernes después del trabajo", "Los domingos", "Todos los días", "Los lunes"], 0),
 M("¿Qué estudia Laura?", ["Música", "Medicina", "Inglés", "Arte"], 0),
 L("I always drink hot chocolate and Camila drinks black coffee.", "¿Qué toma Camila?", ["Café negro", "Chocolate caliente", "Té", "Jugo"], 0),
 T("Describe your best friend: name, age, job and what you do together.", 15, [["my best friend", "he is", "she is"]], "My best friend is Diana. She is thirty-two and she is a lawyer. We go to the cinema and we eat pizza together on Saturdays.")
],
[ /* At the Supermarket */
 M("¿Quién tiene la lista?", ["La señora Rojas", "El señor Rojas", "El hijo", "El cajero"], 0),
 M("¿Por qué compran una torta de chocolate?", ["Mañana es el cumpleaños de su hijo", "Es Navidad", "Al señor le gusta", "Estaba en descuento"], 0),
 M("¿Qué quiere el señor Rojas que no está en la lista?", ["Helado", "Pan", "Leche", "Arroz"], 0),
 L("That's eighty-five thousand pesos, please.", "¿Cuánto pagan?", ["85.000 pesos", "58.000 pesos", "15.000 pesos", "80.000 pesos"], 0),
 T("What do you usually buy at the supermarket?", 12, [["i buy", "i usually buy"]], "I usually buy rice, eggs, milk, bread and a lot of fruit. Sometimes I buy ice cream for my children.")
],
[ /* Our New Apartment */
 M("¿En qué piso está el apartamento?", ["En el quinto", "En el primero", "En el décimo", "En el tercero"], 0),
 M("¿Qué ve desde la ventana de su cuarto?", ["Las montañas", "El mar", "Un parque", "Otro edificio"], 0),
 M("¿Qué hacen en el balcón por la noche?", ["Miran las luces de la ciudad", "Cocinan", "Ven televisión", "Duermen"], 0),
 L("There is a supermarket and a pharmacy near the building, and the bus stop is on the corner.", "¿Dónde está la parada del bus?", ["En la esquina", "Frente al edificio", "Lejos", "Al lado de la farmacia"], 0),
 T("Describe your bedroom.", 12, [["there is", "there are", "my bedroom"]], "My bedroom is small but nice. There is a bed, a desk and a big window. There are many books on the shelf.")
],
[ /* The Weather in My Country */
 M("¿Por qué Colombia no tiene cuatro estaciones?", ["Porque está cerca de la línea del ecuador", "Porque es muy grande", "Porque tiene mar", "Porque llueve mucho"], 0),
 M("¿Cómo es Bogotá?", ["Fresca, a veces nublada y lluviosa", "Muy caliente", "Seca todo el año", "Con nieve"], 0),
 M("¿Qué no le gusta a Julián de Cartagena?", ["El calor", "La playa", "Sus abuelos", "La comida"], 0),
 L("The temperature is usually thirty-two degrees.", "¿Qué temperatura hace en Cartagena?", ["32 grados", "22 grados", "12 grados", "23 grados"], 0),
 T("What's the weather like in your city? What do you wear?", 12, [["it's", "it is"], ["i wear"]], "In my city it's usually hot and sunny. I wear shorts, T-shirts and sandals. Sometimes it rains in the afternoon.")
],
[ /* A Day at the Beach */
 M("¿Qué está haciendo el señor Martínez?", ["Leyendo el periódico y tomando limonada", "Nadando", "Jugando en la arena", "Cocinando"], 0),
 M("¿Qué construyen los niños?", ["Un castillo de arena", "Una casa", "Un barco", "Nada"], 0),
 M("¿Qué van a hacer en la tarde?", ["Caminar y tomar fotos del atardecer", "Volver a casa", "Dormir", "Ir al cine"], 0),
 L("They are eating fish, rice and salad at a small restaurant near the beach.", "¿Qué están comiendo?", ["Pescado, arroz y ensalada", "Pizza", "Pollo y papas", "Hamburguesas"], 0),
 T("Describe what people are doing at a park or a beach right now. Use the present continuous.", 15, [["is", "are"]], "A man is running in the park. Two children are playing football and a woman is reading a book under a tree.")
],
[ /* A Bus Driver's Day */
 M("¿A qué hora se levanta Hernán?", ["A las 4:30", "A las 5:30", "A las 6:00", "A las 2:00"], 0),
 M("¿A qué hora termina de trabajar?", ["A las 2 de la tarde", "A las 5 de la tarde", "A las 12", "A las 8 de la noche"], 0),
 M("¿Por qué le gusta su trabajo?", ["Conoce a mucha gente", "Gana mucho dinero", "Trabaja poco", "Viaja a otras ciudades"], 0),
 L("I have lunch at twelve o'clock. I usually eat rice, beans and chicken.", "¿Qué almuerza normalmente?", ["Arroz, frijoles y pollo", "Sopa", "Un sándwich", "Pescado"], 0),
 T("Describe your job or your daily routine.", 15, [["i get up", "i start", "i work"], ["at"]], "I'm a nurse. I get up at five and I start work at seven. I finish at three and in the evening I cook dinner.")
],
[ /* My Cat Luna */
 M("¿De qué color es Luna?", ["Blanca y negra", "Gris", "Café", "Naranja"], 0),
 M("¿Por qué despierta a su dueño a las seis?", ["Porque tiene hambre", "Porque quiere jugar", "Porque hay ruido", "Porque es tarde"], 0),
 M("¿Qué NO le gusta a Luna?", ["Los perros y el agua", "Los pájaros", "La pelota", "Dormir"], 0),
 L("When I come home from work, Luna is always at the door.", "¿Dónde está Luna cuando llega su dueño?", ["En la puerta", "En la cama", "En la ventana", "En el jardín"], 0),
 T("Do you have a pet, or would you like one? Describe it.", 12, [["i have", "i would like", "i'd like"]], "I have a dog. His name is Rocky. He is brown and very big. He likes running in the park.")
],
[ /* Sunday at My Grandparents' House */
 M("¿Cómo viajan a la casa de los abuelos?", ["En carro", "En bus", "En avión", "Caminando"], 0),
 M("¿Qué le gusta hacer al abuelo?", ["Trabajar en el jardín", "Cocinar", "Ver televisión", "Bailar"], 0),
 M("¿Cuántas personas hay en la mesa?", ["Quince", "Cinco", "Diez", "Veinte"], 0),
 L("At six o'clock, we say goodbye and go back to the city.", "¿A qué hora se van?", ["A las seis", "A las cinco", "A las ocho", "A las tres"], 0),
 T("What do you usually do on Sundays?", 12, [["on sundays", "on sunday", "usually"]], "On Sundays I usually visit my parents. We have lunch together and in the afternoon we watch a film.")
],
[ /* At the Doctor's */
 M("¿Qué síntomas tiene Ana?", ["Dolor de cabeza, de garganta y cansancio", "Dolor de estómago", "Dolor de espalda", "Tos"], 0),
 M("¿Qué tiene Ana, según el médico?", ["Un resfriado", "Algo grave", "Una alergia", "Nada"], 0),
 M("¿Cuántos días debe quedarse en casa?", ["Dos", "Uno", "Cinco", "Una semana"], 0),
 L("Take this medicine three times a day, after meals.", "¿Cuándo debe tomar el medicamento?", ["Tres veces al día, después de comer", "Una vez al día", "Antes de dormir", "Cuando le duela"], 0),
 T("You are sick. Tell the doctor how you feel.", 12, [["i have", "i feel", "my"]], "Good morning, doctor. I have a headache and a sore throat. I feel very tired and I think I have a temperature.")
],
[ /* My Favourite Food */
 M("¿Qué es la bandeja paisa?", ["Un plato típico de Antioquia", "Un postre", "Una bebida", "Un plato italiano"], 0),
 M("¿Qué desayuna Diego normalmente?", ["Huevos, arepa con queso y chocolate", "Pizza", "Solo café", "Fruta"], 0),
 M("¿Qué verdura odia Diego?", ["La cebolla", "La zanahoria", "El tomate", "La papa"], 0),
 L("On Fridays, we often go to an Italian restaurant near our house.", "¿Cuándo van al restaurante italiano?", ["Los viernes", "Los domingos", "Los lunes", "Nunca"], 0),
 T("What is your favourite food? Describe it.", 12, [["my favourite", "i love", "i like"]], "My favourite food is ajiaco. It's a soup with chicken, potatoes and corn. I love it with rice and avocado.")
],
[ /* A Birthday Party */
 M("¿Cuántos años cumple Sara?", ["Diez", "Ocho", "Doce", "Cinco"], 0),
 M("¿Qué hace el papá de Sara?", ["Pone globos en las paredes", "Hace la torta", "Compra regalos", "Canta"], 0),
 M("¿A qué hora llega la torta?", ["A las cinco", "A las tres", "A las seis", "A las cuatro"], 0),
 L("Sara closes her eyes, makes a wish and blows out the candles.", "¿Qué hace Sara antes de soplar las velas?", ["Cierra los ojos y pide un deseo", "Abre los regalos", "Canta", "Baila"], 0),
 T("How do you usually celebrate your birthday?", 12, [["usually", "i celebrate", "we"]], "I usually celebrate my birthday with my family. We eat a big cake and my friends come to my house in the evening.")
],
[ /* My Online English Class */
 M("¿Cuántas veces por semana estudia Gloria?", ["Tres", "Una", "Cinco", "Dos"], 0),
 M("¿Dónde vive el profesor Mark?", ["En Londres", "En Bogotá", "En Canadá", "En Japón"], 0),
 M("¿Quién ayuda a Gloria con el inglés?", ["Sus hijos", "Su esposo", "Su jefe", "Nadie"], 0),
 L("I'm a little nervous when I speak, but Mark is very patient.", "¿Cómo es Mark?", ["Muy paciente", "Muy serio", "Muy estricto", "Impaciente"], 0),
 T("Why are you learning English, and how do you study?", 15, [["because"], ["i study", "i listen", "i practise", "i practice"]], "I'm learning English because I want a better job. I study every night with this course and I listen to songs in English.")
],
[ /* A Weekend in Cartagena */
 M("¿Cómo viajaron a Cartagena?", ["En avión", "En bus", "En carro", "En barco"], 0),
 M("¿Qué problema tuvieron la primera noche?", ["No funcionaba el aire acondicionado", "No había agua", "La habitación estaba sucia", "Perdieron la llave"], 0),
 M("¿Qué comieron?", ["Pescado frito y arroz con coco", "Ajiaco", "Bandeja paisa", "Pizza"], 0),
 L("Let's come back next year, she said. Good idea!", "¿Qué propone Marcela?", ["Volver el próximo año", "Quedarse más días", "Cambiar de hotel", "Ir a la playa"], 0),
 T("Talk about a trip you took: where you went, how you travelled and where you stayed.", 15, [["went", "travelled", "traveled", "stayed"], ["by", "hotel", "house"]], "Last year I went to Santa Marta by bus. I stayed in a small hotel near the beach and I ate a lot of fish.")
],
[ /* A Bad Day */
 M("¿Qué le pasaba a Ricardo?", ["Tenía dolor de cabeza, de garganta y fiebre", "Le dolía la espalda", "Tenía dolor de muela", "Se cayó"], 0),
 M("¿Qué le pidió el jefe?", ["Enviar el informe mañana", "Ir a la oficina", "Llamar a un cliente", "Ir al médico"], 0),
 M("¿Cada cuánto debe tomar las pastillas?", ["Cada ocho horas", "Cada hora", "Una vez al día", "Cada doce horas"], 0),
 L("Sorry, can you repeat that, please? She repeated it slowly.", "¿Qué hizo la farmaceuta?", ["Repitió despacio", "Llamó al médico", "Le dio más pastillas", "Escribió una nota"], 0),
 T("Talk about the last time you were sick: what was the matter and what did you do?", 15, [["i had", "i was"], ["headache", "cold", "fever", "sore throat", "stomachache", "sick"]], "Last month I had a cold and a fever. I stayed in bed, I drank a lot of water and I took some medicine.")
],
[ /* Last Saturday */
 M("¿Qué hizo la señora Moreno de desayuno?", ["Huevos, arepas y chocolate", "Pancakes", "Pan con mantequilla", "Fruta"], 0),
 M("¿Por qué trajeron una torta los abuelos?", ["Era el cumpleaños del abuelo", "Era Navidad", "Era el cumpleaños de un nieto", "Era un aniversario"], 0),
 M("¿A qué hora se fueron los abuelos?", ["A las diez", "A las cuatro", "A las seis", "A medianoche"], 0),
 L("I met your grandmother at a party like this one. We danced all night.", "¿Dónde conoció el abuelo a la abuela?", ["En una fiesta", "En el trabajo", "En la universidad", "En el mercado"], 0),
 T("What did you do last Saturday? Say at least four things.", 15, [["went", "had", "ate", "saw", "visited", "watched", "cooked", "played", "cleaned", "got up", "made", "bought"]], "Last Saturday I got up at eight, I cleaned the house, I went to the supermarket and in the evening I watched a movie with my wife.")
],
[ /* Plans for the Holidays */
 M("¿Cómo va a viajar Daniela a Manizales?", ["En bus", "En avión", "En carro", "En moto"], 0),
 M("¿Qué van a hacer en Santa Marta?", ["Alquilar una casa cerca de la playa", "Quedarse en un hotel", "Cocinar todas las noches", "Visitar a sus papás"], 0),
 M("¿Por qué va a estudiar inglés?", ["Porque quiere un mejor trabajo", "Porque va a viajar", "Porque su hermano estudia", "Porque es fácil"], 0),
 L("Would you like to study with me? I'd love to, he said. But not in the holidays!", "¿Qué responde el hermano?", ["Que sí, pero no en vacaciones", "Que no quiere", "Que ya estudia", "Que mañana"], 0),
 T("What are you going to do in your next holidays?", 15, [["going to"]], "In my next holidays I'm going to visit my parents. We're going to cook together and I'm going to rest a lot.")
]
];
