/* A1 · Unidad 7 · Viajes, salud y el día a día (Días 31–35). Se agrega con: node tools/add-units.js 0 content/a1/u7.js */
const M = (q, o, a, x) => ({ t: "mc", q, o, a, ...(x ? { x } : {}) }), F = (q, ans) => ({ t: "fill", q, ans }),
  L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), O = text => ({ t: "oral", text }), D = say => ({ t: "dict", say }),
  W = (q, min, keys) => ({ t: "write", q, min, keys }), R = (s, es) => ({ t: "order", words: s.split(" "), es });

module.exports = {
n: 7,
title: "Viajes, salud y el día a día",
lessons: [
/* ───────── Día 31 ───────── */
{
 id: "a1-transporte-y-tiquetes",
 title: "Transporte y comprar un tiquete",
 goal: "Decir cómo te mueves, comprar un tiquete y preguntar horarios.",
 theory: [
  { p: "Para decir **cómo** vas a un lugar usa **by** + transporte, sin artículo: **by bus**, **by car**, **by train**, **by plane**, **by bike**, **by taxi**. A pie es **on foot**." },
  { ex: [["How do you get to work?", "¿Cómo llegas al trabajo?"], ["I go to work by bus.", "Voy al trabajo en bus."], ["My wife goes on foot.", "Mi esposa va a pie."], ["It takes about forty minutes.", "Se demora unos cuarenta minutos."], ["I take the subway at seven.", "Tomo el metro a las siete."]] },
  { p: "En la terminal o en el aeropuerto: **A one-way ticket to Medellín, please** (solo ida) o **a round-trip ticket** (ida y regreso). Para los horarios: **What time does the bus leave?** — **It leaves at 9:15.** · **What time does it arrive?** — **It arrives at 6 p.m.**" },
  { ex: [["A round-trip ticket to Cali, please.", "Un tiquete de ida y regreso a Cali, por favor."], ["What time does the next bus leave?", "¿A qué hora sale el próximo bus?"], ["Which gate is it?", "¿Qué puerta es?"], ["The train is late.", "El tren está retrasado."], ["The plane is on time.", "El avión está a tiempo."]] },
  { tip: "Nunca digas «by the bus» ni «by foot». Lo correcto es **by bus** y **on foot**. Con **take** sí va el artículo: **I take the bus**." }
 ],
 words: ["bus", "ticket", "leave", "arrive", "airport"],
 vocab: [
  ["bus", "sustantivo", "bus", "I go to work by bus."],
  ["train", "sustantivo", "tren", "The train leaves at eight."],
  ["plane", "sustantivo", "avión", "We go to Cartagena by plane."],
  ["subway", "sustantivo", "metro (en EE. UU.)", "I take the subway every day."],
  ["taxi", "sustantivo", "taxi", "Let's take a taxi."],
  ["bike", "sustantivo", "bicicleta", "My son goes to school by bike."],
  ["motorcycle", "sustantivo", "moto", "He has a red motorcycle."],
  ["on foot", "expresión", "a pie", "I go to the gym on foot."],
  ["ticket", "sustantivo", "tiquete, boleto", "How much is the ticket?"],
  ["one-way ticket", "expresión", "tiquete de solo ida", "A one-way ticket to Cali, please."],
  ["round-trip ticket", "expresión", "tiquete de ida y regreso", "I need a round-trip ticket."],
  ["bus station", "sustantivo", "terminal de buses", "The bus station is very big."],
  ["bus stop", "sustantivo", "paradero", "The bus stop is near my house."],
  ["airport", "sustantivo", "aeropuerto", "The airport is far from the city."],
  ["gate", "sustantivo", "puerta (de embarque o de salida)", "The bus leaves from gate four."],
  ["leave", "verbo", "salir, partir", "The bus leaves at nine."],
  ["arrive", "verbo", "llegar", "We arrive in Medellín at six."],
  ["take", "verbo", "tomar (un bus, un taxi); demorarse", "It takes two hours."],
  ["get to", "verbo", "llegar a", "How do I get to the airport?"],
  ["late", "adjetivo", "tarde, retrasado", "The plane is late."],
  ["on time", "expresión", "a tiempo, puntual", "The train is on time."],
  ["next", "adjetivo", "próximo, siguiente", "The next bus is at ten."],
  ["seat", "sustantivo", "puesto, asiento", "Window seat, please."],
  ["luggage", "sustantivo", "equipaje", "I have a lot of luggage."]
 ],
 dialogue: {
  title: "En la terminal de buses",
  scene: "Mauricio está en la terminal de Bogotá y quiere viajar a Medellín para visitar a su hermana.",
  a: "Mauricio", b: "Vendedora",
  lines: [
   ["A", "Good morning. I need a ticket to Medellín, please.", "Buenos días. Necesito un tiquete a Medellín, por favor."],
   ["B", "One-way or round-trip?", "¿Solo ida o ida y regreso?"],
   ["A", "Round-trip, please. I'm coming back on Sunday.", "Ida y regreso, por favor. Regreso el domingo."],
   ["B", "OK. What time do you want to leave?", "Bien. ¿A qué hora quiere salir?"],
   ["A", "What time does the next bus leave?", "¿A qué hora sale el próximo bus?"],
   ["B", "The next bus leaves at ten fifteen.", "El próximo bus sale a las diez y cuarto."],
   ["A", "Perfect. What time does it arrive in Medellín?", "Perfecto. ¿A qué hora llega a Medellín?"],
   ["B", "It arrives at about six in the evening. It takes eight hours.", "Llega a eso de las seis de la tarde. Se demora ocho horas."],
   ["A", "How much is the ticket?", "¿Cuánto cuesta el tiquete?"],
   ["B", "It's one hundred and forty thousand pesos.", "Son ciento cuarenta mil pesos."],
   ["A", "Can I have a window seat?", "¿Me puede dar un puesto en la ventana?"],
   ["B", "Sure. Seat number twelve. The bus leaves from gate five.", "Claro. Puesto número doce. El bus sale por la puerta cinco."],
   ["A", "Thank you very much!", "¡Muchas gracias!"],
   ["B", "You're welcome. Have a good trip!", "Con gusto. ¡Buen viaje!"]
  ]
 },
 practice: [
  M("I go to work ___ bus.", ["by", "in", "with", "on"], 0, "Transporte: by + medio, sin artículo."),
  M("—What time does the bus ___? —At 7:30.", ["leave", "leaves", "leaving", "to leave"], 0, "Después de does, el verbo va sin -s."),
  M("A ___ ticket is for going and coming back.", ["round-trip", "one-way", "late", "next"], 0),
  F("How do I ___ to the airport? (llegar)", ["get"]),
  L("The bus to Cali leaves at ten fifteen from gate number four.", "¿De qué puerta sale el bus?", ["4", "5", "14", "10"], 0),
  O("A round-trip ticket to Medellín, please.")
 ],
 more: [
  R("How do you get to work?", "¿Cómo llegas al trabajo?"),
  R("The train leaves at eight o'clock.", "El tren sale a las ocho."),
  D("A one-way ticket to Cali, please."),
  D("Where is the bus stop?"),
  M("I don't have a car. I go to work ___.", ["on foot", "by foot", "in foot", "with foot"], 0),
  M("The plane ___ in Bogotá at 6 p.m.", ["arrives", "arrive", "arriving", "is arrive"], 0),
  L("Excuse me, is this the bus to the airport? No, it isn't. You need bus number twelve.", "¿Qué bus necesita?", ["El 12", "El 2", "El 20", "El 21"], 0),
  W("Cuenta cómo vas al trabajo o a estudiar: qué transporte usas, cuánto te demoras y a qué hora sales (mínimo 25 palabras).", 25, [["by", "on foot"], ["bus", "car", "bike", "train", "taxi", "subway", "metro", "motorcycle", "foot"], ["leave", "go", "take"], ["minutes", "hour"]])
 ],
 exam: M("I go to the university ___ subway.", ["by", "in the", "with", "on"], 0),
 exam2: F("A ___ ticket to Cartagena, please. (solo ida)", ["one-way", "one way"])
},
/* ───────── Día 32 ───────── */
{
 id: "a1-en-el-hotel",
 reading: 18,
 title: "En el hotel",
 goal: "Registrarte en un hotel, pedir cosas y resolver un problema sencillo.",
 theory: [
  { p: "Al llegar a la recepción (**reception**) dices **I have a reservation** (tengo una reserva). Te van a pedir **your name** y **your passport**. Una habitación para una persona es **a single room**; para dos, **a double room**." },
  { ex: [["Hello, I have a reservation for two nights.", "Hola, tengo una reserva para dos noches."], ["Can I have your passport, please?", "¿Me permite su pasaporte, por favor?"], ["Your room is on the third floor.", "Su habitación está en el tercer piso."], ["Here is your key.", "Aquí está su llave."], ["Breakfast is included.", "El desayuno está incluido."]] },
  { p: "Para pedir algo con cortesía usa **Can I have…?** o **Could I have…?**: **Could I have an extra towel, please?** Para preguntar: **What time is breakfast?** · **What time is check-out?** · **What's the Wi-Fi password?** Si algo falla: **The air conditioning doesn't work.**" },
  { ex: [["What time is breakfast?", "¿A qué hora es el desayuno?"], ["What's the Wi-Fi password?", "¿Cuál es la clave del wifi?"], ["Could I have an extra towel, please?", "¿Me podría dar una toalla extra, por favor?"], ["The shower doesn't work.", "La ducha no funciona."], ["Check-out is at noon.", "La salida es a mediodía."]] },
  { tip: "**I want a towel** suena brusco en inglés. Pide siempre con **Can I have…?** o **Could I have…, please?**" }
 ],
 words: ["hotel", "reservation", "room", "key", "breakfast"],
 vocab: [
  ["hotel", "sustantivo", "hotel", "The hotel is near the beach."],
  ["reservation", "sustantivo", "reserva", "I have a reservation."],
  ["reception", "sustantivo", "recepción", "Ask at reception."],
  ["receptionist", "sustantivo", "recepcionista", "The receptionist is very friendly."],
  ["single room", "expresión", "habitación sencilla", "I need a single room."],
  ["double room", "expresión", "habitación doble", "We have a double room."],
  ["night", "sustantivo", "noche", "Two nights, please."],
  ["key", "sustantivo", "llave", "Here is your key."],
  ["floor", "sustantivo", "piso (de un edificio)", "My room is on the fifth floor."],
  ["elevator", "sustantivo", "ascensor", "The elevator is on the left."],
  ["stairs", "sustantivo", "escaleras", "Take the stairs."],
  ["towel", "sustantivo", "toalla", "Could I have a towel?"],
  ["shower", "sustantivo", "ducha", "The shower is very small."],
  ["air conditioning", "sustantivo", "aire acondicionado", "The air conditioning doesn't work."],
  ["passport", "sustantivo", "pasaporte", "Can I see your passport?"],
  ["check in", "verbo", "registrarse (al llegar)", "We check in at three."],
  ["check out", "verbo", "entregar la habitación (al salir)", "What time do we check out?"],
  ["included", "adjetivo", "incluido", "Breakfast is included."],
  ["Wi-Fi password", "expresión", "clave del wifi", "What's the Wi-Fi password?"],
  ["noon", "sustantivo", "mediodía", "Check-out is at noon."],
  ["Could I have…?", "expresión", "¿Me podría dar…?", "Could I have the key, please?"],
  ["work", "verbo", "funcionar (una máquina)", "The TV doesn't work."],
  ["pool", "sustantivo", "piscina", "Is there a pool?"]
 ],
 dialogue: {
  title: "Llegada al hotel en Cartagena",
  scene: "Patricia llega con su esposo a un hotel en Cartagena. Habla con el recepcionista.",
  a: "Patricia", b: "Recepcionista",
  lines: [
   ["B", "Good afternoon. Welcome to Hotel Las Palmas.", "Buenas tardes. Bienvenidos al Hotel Las Palmas."],
   ["A", "Good afternoon. I have a reservation. My name is Patricia Vargas.", "Buenas tardes. Tengo una reserva. Me llamo Patricia Vargas."],
   ["B", "Yes, Mrs. Vargas. A double room for three nights. Can I have your passport, please?", "Sí, señora Vargas. Una habitación doble por tres noches. ¿Me permite su pasaporte?"],
   ["A", "Here you are.", "Aquí tiene."],
   ["B", "Thank you. Your room is 405, on the fourth floor. Here is your key.", "Gracias. Su habitación es la 405, en el cuarto piso. Aquí está su llave."],
   ["A", "Thanks. Is breakfast included?", "Gracias. ¿El desayuno está incluido?"],
   ["B", "Yes, it is. Breakfast is from six thirty to ten in the restaurant.", "Sí. El desayuno es de seis y media a diez en el restaurante."],
   ["A", "Great. And what's the Wi-Fi password?", "Genial. ¿Y cuál es la clave del wifi?"],
   ["B", "It's 'palmas2024', all in small letters.", "Es «palmas2024», todo en minúscula."],
   ["A", "What time is check-out?", "¿A qué hora es la salida?"],
   ["B", "Check-out is at noon. The elevator is on the right.", "La salida es a mediodía. El ascensor está a la derecha."],
   ["A", "Thank you. Oh, could I have two extra towels for the pool?", "Gracias. Ah, ¿me podría dar dos toallas extra para la piscina?"],
   ["B", "Of course. Here you are. Enjoy your stay!", "Claro. Aquí tiene. ¡Disfrute su estadía!"]
  ]
 },
 practice: [
  M("Hello, I ___ a reservation for two nights.", ["have", "am", "do", "make"], 0),
  M("A room for one person is a ___ room.", ["single", "double", "one", "alone"], 0),
  M("___ I have an extra towel, please?", ["Could", "Do", "Am", "Want"], 0, "Para pedir con cortesía: Could I have…?"),
  F("What's the Wi-Fi ___? (clave)", ["password"]),
  L("Your room is 308, on the third floor. Breakfast is from seven to ten.", "¿En qué piso está la habitación?", ["En el tercero", "En el octavo", "En el segundo", "En el primero"], 0),
  O("Hello, I have a reservation. My name is Carlos Ruiz.")
 ],
 more: [
  R("What time is breakfast?", "¿A qué hora es el desayuno?"),
  R("The air conditioning doesn't work.", "El aire acondicionado no funciona."),
  D("Could I have the key, please?"),
  D("Check-out is at noon."),
  M("—Is breakfast included? —Yes, it ___.", ["is", "does", "has", "are"], 0),
  M("The shower ___ work. Can you help me?", ["doesn't", "don't", "isn't", "not"], 0),
  L("Excuse me, the TV in my room doesn't work. It's room two oh six.", "¿Cuál es el problema?", ["El televisor no funciona", "La ducha no funciona", "No hay toallas", "La llave no sirve"], 0),
  W("Escribe un mensaje corto a un hotel (mínimo 25 palabras): di que quieres una habitación, para cuántas personas y noches, y pregunta por el desayuno o el wifi.", 25, [["room"], ["night", "nights"], ["breakfast", "wi-fi", "wifi", "pool"], ["could", "can", "please", "would like", "i'd like"]])
 ],
 exam: M("What time is ___? I want to leave the hotel early.", ["check-out", "check-in", "reception", "reservation"], 0),
 exam2: F("___ I have an extra pillow, please? (podría)", ["could", "can"])
},
/* ───────── Día 33 ───────── */
{
 id: "a1-el-cuerpo-y-la-salud",
 reading: 19,
 title: "El cuerpo y la salud",
 goal: "Nombrar partes del cuerpo, decir qué te duele y pedir algo en la droguería.",
 theory: [
  { p: "Partes del cuerpo: **head** (cabeza), **eyes** (ojos), **ears** (orejas), **nose** (nariz), **mouth** (boca), **teeth** (dientes), **neck** (cuello), **back** (espalda), **arm** (brazo), **hand** (mano), **leg** (pierna), **foot** (pie; plural **feet**), **stomach** (estómago)." },
  { p: "Para decir qué te duele hay dos formas: **I have a headache / a stomachache / a toothache / a sore throat / a cold / a fever** o **My back hurts / My feet hurt**. La pregunta típica es **What's the matter?** (¿Qué te pasa?)." },
  { ex: [["What's the matter?", "¿Qué te pasa?"], ["I have a headache.", "Me duele la cabeza."], ["My back hurts.", "Me duele la espalda."], ["I have a cold and a sore throat.", "Tengo gripa y dolor de garganta."], ["I feel sick.", "Me siento mal / tengo náuseas."]] },
  { p: "Consejos sencillos con imperativo: **Take this medicine** (tómate esta medicina), **Drink a lot of water**, **Stay in bed**, **Go to the doctor**. En la droguería: **Do you have something for a headache?**" },
  { tip: "En inglés el dolor se dice con **my**: **My head hurts** (no «the head hurts me»). Y **I have a cold** es «tengo gripa», no «tengo frío» (eso es **I'm cold**)." }
 ],
 words: ["head", "back", "headache", "doctor", "medicine"],
 vocab: [
  ["head", "sustantivo", "cabeza", "My head hurts."],
  ["eye", "sustantivo", "ojo", "She has blue eyes."],
  ["ear", "sustantivo", "oreja, oído", "I have a pain in my ear."],
  ["nose", "sustantivo", "nariz", "My nose is red."],
  ["mouth", "sustantivo", "boca", "Open your mouth, please."],
  ["tooth / teeth", "sustantivo", "diente / dientes", "Brush your teeth."],
  ["neck", "sustantivo", "cuello", "My neck hurts."],
  ["back", "sustantivo", "espalda", "I have a bad back."],
  ["arm", "sustantivo", "brazo", "He broke his arm."],
  ["hand", "sustantivo", "mano", "Wash your hands."],
  ["leg", "sustantivo", "pierna", "My legs are tired."],
  ["foot / feet", "sustantivo", "pie / pies", "My feet hurt."],
  ["stomach", "sustantivo", "estómago", "My stomach hurts."],
  ["headache", "sustantivo", "dolor de cabeza", "I have a headache."],
  ["stomachache", "sustantivo", "dolor de estómago", "She has a stomachache."],
  ["toothache", "sustantivo", "dolor de muela", "I have a toothache."],
  ["sore throat", "expresión", "dolor de garganta", "I have a sore throat."],
  ["a cold", "expresión", "gripa, resfriado", "I have a cold."],
  ["fever", "sustantivo", "fiebre", "He has a fever."],
  ["hurt", "verbo", "doler", "My back hurts."],
  ["What's the matter?", "expresión", "¿Qué te pasa?", "You look tired. What's the matter?"],
  ["medicine", "sustantivo", "medicina, medicamento", "Take this medicine twice a day."],
  ["pharmacy", "sustantivo", "droguería, farmacia", "Is there a pharmacy near here?"],
  ["sick", "adjetivo", "enfermo; con náuseas", "I feel sick."]
 ],
 dialogue: {
  title: "En la droguería",
  scene: "Andrés está de viaje en Miami y se siente mal. Entra a una farmacia.",
  a: "Andrés", b: "Farmaceuta",
  lines: [
   ["B", "Hi. Can I help you?", "Hola. ¿Le puedo ayudar?"],
   ["A", "Yes, please. I don't feel very well.", "Sí, por favor. No me siento muy bien."],
   ["B", "What's the matter?", "¿Qué le pasa?"],
   ["A", "I have a headache and a sore throat.", "Me duele la cabeza y la garganta."],
   ["B", "Do you have a fever?", "¿Tiene fiebre?"],
   ["A", "I don't know. I feel hot, and my back hurts too.", "No sé. Me siento caliente y también me duele la espalda."],
   ["B", "Maybe you have a cold. Take these tablets. Take one every eight hours.", "Tal vez tiene gripa. Tómese estas pastillas. Una cada ocho horas."],
   ["A", "Every eight hours. OK. Do you have something for my throat?", "Cada ocho horas. Bien. ¿Tiene algo para la garganta?"],
   ["B", "Yes. This syrup is very good. Take one spoon after meals.", "Sí. Este jarabe es muy bueno. Una cucharada después de las comidas."],
   ["A", "Thank you. How much is it?", "Gracias. ¿Cuánto es?"],
   ["B", "That's fourteen dollars and fifty cents.", "Son catorce dólares con cincuenta centavos."],
   ["B", "And drink a lot of water and stay in bed today.", "Y tome mucha agua y quédese en cama hoy."],
   ["A", "Thanks a lot. Have a nice day!", "Muchas gracias. ¡Que tenga un buen día!"],
   ["B", "You too. I hope you feel better soon.", "Igualmente. Ojalá se mejore pronto."]
  ]
 },
 practice: [
  M("—What's the ___? —I have a headache.", ["matter", "problem you", "pain", "sick"], 0),
  M("My feet ___ after the long walk.", ["hurt", "hurts", "are hurt", "pain"], 0, "Feet es plural: My feet hurt."),
  M("I have a ___. My throat hurts.", ["sore throat", "headache", "stomachache", "toothache"], 0),
  F("I can't eat. I have a ___. (dolor de muela)", ["toothache"]),
  L("I have a fever and my stomach hurts. I think I need a doctor.", "¿Qué le duele?", ["El estómago", "La cabeza", "La espalda", "Los pies"], 0),
  O("I have a cold and a sore throat.")
 ],
 more: [
  R("My back hurts a lot.", "Me duele mucho la espalda."),
  R("Do you have something for a headache?", "¿Tiene algo para el dolor de cabeza?"),
  D("Take this medicine every eight hours."),
  D("I feel sick."),
  M("One foot, two ___.", ["feet", "foots", "feets", "foot"], 0),
  M("You have a fever. ___ in bed today.", ["Stay", "Stays", "Staying", "You stay to"], 0),
  L("Drink a lot of water, take this medicine after breakfast and go to the doctor if you feel worse.", "¿Cuándo debe tomar la medicina?", ["Después del desayuno", "Antes de dormir", "Cada hora", "Antes del almuerzo"], 0),
  W("Imagina que estás enfermo. Escribe un mensaje a tu jefe o profesor (mínimo 25 palabras): di qué te duele, cómo te sientes y que no puedes ir hoy.", 25, [["i have", "hurts", "hurt"], ["headache", "fever", "cold", "sore throat", "stomachache", "back", "head", "stomach"], ["can't", "cannot"], ["today", "tomorrow"]])
 ],
 exam: M("I can't work today. My head ___.", ["hurts", "hurt", "is hurt", "pains"], 0),
 exam2: F("I have a ___ and a fever. I need to stay in bed. (gripa)", ["cold"])
},
/* ───────── Día 34 ───────── */
{
 id: "a1-sentimientos-y-disculpas",
 title: "Cómo te sientes y pedir disculpas",
 goal: "Decir cómo te sientes, preguntar a otros y disculparte con naturalidad.",
 theory: [
  { p: "Los estados y sentimientos se dicen con **be** + adjetivo: **I'm hungry** (tengo hambre), **I'm thirsty** (tengo sed), **I'm tired** (estoy cansado), **I'm sleepy** (tengo sueño), **I'm cold / hot** (tengo frío / calor), **I'm happy, sad, bored, nervous, worried, angry**." },
  { ex: [["How do you feel today?", "¿Cómo te sientes hoy?"], ["I'm a bit tired.", "Estoy un poco cansado."], ["Are you hungry?", "¿Tienes hambre?"], ["She's nervous because she has an exam.", "Ella está nerviosa porque tiene un examen."], ["We're bored. Let's go out!", "Estamos aburridos. ¡Salgamos!"]] },
  { p: "Disculparse: **Sorry I'm late** (perdón por llegar tarde), **I'm so sorry**, **Sorry about that**. Responder: **No problem**, **That's OK**, **Don't worry**. Para llamar la atención o pasar entre la gente se usa **Excuse me**." },
  { ex: [["Sorry I'm late. The traffic was terrible.", "Perdón por la demora. El tráfico estaba terrible."], ["Don't worry. We have time.", "Tranquilo. Tenemos tiempo."], ["I'm so sorry! Are you OK?", "¡Lo siento mucho! ¿Estás bien?"], ["Excuse me, is this seat free?", "Disculpe, ¿este puesto está libre?"], ["That's OK. No problem.", "Está bien. No hay problema."]] },
  { tip: "En español «tengo hambre, frío, sueño», pero en inglés es **be**: **I'm hungry, I'm cold, I'm sleepy**. Decir «I have hunger» o «I have cold» es un error típico." }
 ],
 words: ["hungry", "tired", "sorry", "nervous", "worry"],
 vocab: [
  ["hungry", "adjetivo", "con hambre", "I'm hungry. Let's eat."],
  ["thirsty", "adjetivo", "con sed", "Are you thirsty?"],
  ["tired", "adjetivo", "cansado", "I'm tired after work."],
  ["sleepy", "adjetivo", "con sueño", "The baby is sleepy."],
  ["cold", "adjetivo", "con frío; frío", "I'm cold. Close the window."],
  ["hot", "adjetivo", "con calor; caliente", "I'm hot. Open the window."],
  ["happy", "adjetivo", "feliz, contento", "She's very happy today."],
  ["sad", "adjetivo", "triste", "Why are you sad?"],
  ["bored", "adjetivo", "aburrido (que siente aburrimiento)", "The kids are bored."],
  ["nervous", "adjetivo", "nervioso", "I'm nervous about the interview."],
  ["worried", "adjetivo", "preocupado", "My mom is worried."],
  ["angry", "adjetivo", "enojado, bravo", "My boss is angry."],
  ["excited", "adjetivo", "emocionado", "We're excited about the trip."],
  ["a bit", "expresión", "un poco", "I'm a bit tired."],
  ["How do you feel?", "expresión", "¿Cómo te sientes?", "How do you feel today?"],
  ["Sorry I'm late.", "expresión", "Perdón por llegar tarde.", "Sorry I'm late. The bus was slow."],
  ["I'm so sorry.", "expresión", "Lo siento mucho.", "I'm so sorry about your phone."],
  ["No problem.", "expresión", "No hay problema.", "—Sorry! —No problem."],
  ["That's OK.", "expresión", "Está bien, tranquilo.", "That's OK, don't worry."],
  ["Don't worry.", "expresión", "No te preocupes.", "Don't worry, it's fine."],
  ["Excuse me.", "expresión", "Disculpe / con permiso.", "Excuse me, where is the bank?"],
  ["traffic", "sustantivo", "tráfico, trancón", "The traffic is terrible today."],
  ["because", "conector", "porque", "I'm happy because it's Friday."]
 ],
 dialogue: {
  title: "Perdón por la demora",
  scene: "Juliana espera a su amigo Felipe en un café. Felipe llega veinte minutos tarde.",
  a: "Felipe", b: "Juliana",
  lines: [
   ["A", "Hi, Juliana! Sorry I'm late. The traffic was terrible.", "¡Hola, Juliana! Perdón por la demora. El tráfico estaba terrible."],
   ["B", "Don't worry. That's OK. How are you?", "Tranquilo. No pasa nada. ¿Cómo estás?"],
   ["A", "I'm a bit tired. I have a lot of work this week.", "Un poco cansado. Tengo mucho trabajo esta semana."],
   ["B", "Oh, I'm sorry. Are you hungry?", "Ay, lo siento. ¿Tienes hambre?"],
   ["A", "Yes, very! And I'm thirsty too.", "¡Sí, mucha! Y también tengo sed."],
   ["B", "Let's order. The sandwiches here are very good.", "Pidamos. Los sándwiches aquí son muy buenos."],
   ["A", "Great. And you? How do you feel?", "Genial. ¿Y tú? ¿Cómo te sientes?"],
   ["B", "I'm happy, but I'm a bit nervous.", "Estoy feliz, pero un poco nerviosa."],
   ["A", "Nervous? Why?", "¿Nerviosa? ¿Por qué?"],
   ["B", "Because I have a job interview tomorrow.", "Porque tengo una entrevista de trabajo mañana."],
   ["A", "Don't worry. You're very good at your job.", "No te preocupes. Eres muy buena en tu trabajo."],
   ["B", "Thanks, Felipe. Oh! I'm so sorry, my coffee is on your phone!", "Gracias, Felipe. ¡Ay! ¡Lo siento mucho, se me cayó el café en tu celular!"],
   ["A", "No problem. It's OK. It's only a little coffee.", "No hay problema. Está bien. Es solo un poquito de café."]
  ]
 },
 practice: [
  M("I'm ___. Can I have a glass of water?", ["thirsty", "hungry", "sleepy", "bored"], 0),
  M("En español «tengo frío». En inglés:", ["I'm cold.", "I have cold.", "I have a cold.", "I'm a cold."], 0, "I have a cold es «tengo gripa»."),
  M("—Sorry I'm late. —___", ["Don't worry.", "You're welcome.", "Excuse me.", "Nice to meet you."], 0),
  F("She's ___ because her son is sick. (preocupada)", ["worried"]),
  L("I'm very excited because tomorrow we're going to the beach.", "¿Cómo se siente?", ["Emocionada", "Aburrida", "Triste", "Enojada"], 0),
  O("Sorry I'm late. The traffic was terrible.")
 ],
 more: [
  R("I'm a bit tired today.", "Hoy estoy un poco cansado."),
  R("Why are you so nervous?", "¿Por qué estás tan nervioso?"),
  D("Don't worry, that's OK."),
  D("We're hungry. Let's eat."),
  M("The movie is very long. The children are ___.", ["bored", "boring", "bore", "boredom"], 0, "Bored = cómo te sientes; boring = cómo es algo."),
  M("___, is this seat free?", ["Excuse me", "Sorry I'm late", "No problem", "I'm sorry"], 0),
  L("Excuse me, I'm so sorry. I think this is my seat. Oh, no problem.", "¿Qué pasa?", ["Alguien está en el puesto de otra persona", "Alguien llega tarde", "Alguien tiene hambre", "Alguien está enfermo"], 0),
  W("Escribe cómo te sientes hoy y por qué (mínimo 25 palabras). Usa al menos tres adjetivos y because.", 25, [["i'm", "i am"], ["because"], ["tired", "happy", "sad", "hungry", "thirsty", "nervous", "worried", "bored", "excited", "angry", "sleepy", "cold", "hot"]])
 ],
 exam: M("It's very late and I want to go to bed. I'm ___.", ["sleepy", "hungry", "thirsty", "excited"], 0),
 exam2: M("En inglés, «tengo hambre» es:", ["I'm hungry.", "I have hungry.", "I have hunger.", "I'm hunger."], 0)
},
/* ───────── Día 35 ───────── */
{
 id: "a1-telefono-y-no-entiendo",
 title: "Hablar por teléfono y cuando no entiendes",
 goal: "Hacer una llamada sencilla y pedir que te repitan o te expliquen.",
 theory: [
  { p: "Cuando no entiendes algo, no te quedes callado. Usa estas frases: **Sorry, I don't understand.** · **Can you repeat that, please?** · **Can you speak more slowly, please?** · **How do you spell that?** · **What does 'busy' mean?** · **How do you say 'cuchara' in English?**" },
  { ex: [["Sorry, can you repeat that, please?", "Perdón, ¿puede repetir, por favor?"], ["Can you speak more slowly, please?", "¿Puede hablar más despacio, por favor?"], ["How do you say 'cuchara' in English?", "¿Cómo se dice «cuchara» en inglés?"], ["What does 'appointment' mean?", "¿Qué significa «appointment»?"], ["How do you spell your last name?", "¿Cómo se escribe su apellido?"]] },
  { p: "Al teléfono: para presentarte dices **Hello, this is Laura** (no «I am Laura»). Para pedir a alguien: **Can I speak to Mr. Díaz, please?** Respuestas típicas: **Just a moment, please.** · **He isn't here right now.** · **Can I take a message?** · **Can you call me back?**" },
  { ex: [["Hello, this is Laura Gómez.", "Hola, habla Laura Gómez."], ["Can I speak to Dr. Ríos, please?", "¿Puedo hablar con la doctora Ríos, por favor?"], ["Just a moment, please.", "Un momento, por favor."], ["She isn't here right now. Can I take a message?", "No está en este momento. ¿Quiere dejarle un mensaje?"], ["My number is 310 555 2468.", "Mi número es 310 555 2468."]] },
  { tip: "Pedir que te repitan es normal y educado. Hasta los nativos dicen **Sorry?** o **Pardon?** cuando no escuchan bien." }
 ],
 words: ["repeat", "slowly", "call", "message", "understand"],
 vocab: [
  ["understand", "verbo", "entender", "Sorry, I don't understand."],
  ["repeat", "verbo", "repetir", "Can you repeat that, please?"],
  ["slowly", "adverbio", "despacio", "Please speak slowly."],
  ["more slowly", "expresión", "más despacio", "Can you speak more slowly?"],
  ["spell", "verbo", "deletrear", "How do you spell that?"],
  ["mean", "verbo", "significar", "What does 'busy' mean?"],
  ["How do you say…?", "expresión", "¿Cómo se dice…?", "How do you say 'mesa' in English?"],
  ["Pardon?", "expresión", "¿Perdón? ¿Cómo dijo?", "Pardon? I can't hear you."],
  ["call", "verbo", "llamar (por teléfono)", "I call my mother every day."],
  ["call back", "verbo", "devolver la llamada", "Can you call me back later?"],
  ["This is…", "expresión", "Habla… (al teléfono)", "Hello, this is Carlos."],
  ["Can I speak to…?", "expresión", "¿Puedo hablar con…?", "Can I speak to Ana, please?"],
  ["Just a moment.", "expresión", "Un momento.", "Just a moment, please."],
  ["message", "sustantivo", "mensaje", "Can I take a message?"],
  ["take a message", "expresión", "tomar un recado", "She isn't here. Can I take a message?"],
  ["right now", "expresión", "en este momento", "He isn't here right now."],
  ["busy", "adjetivo", "ocupado", "Sorry, I'm busy right now."],
  ["appointment", "sustantivo", "cita (médica, de trabajo)", "I have an appointment at three."],
  ["available", "adjetivo", "disponible", "Is the doctor available on Monday?"],
  ["phone number", "expresión", "número de teléfono", "What's your phone number?"],
  ["hear", "verbo", "oír", "I can't hear you."],
  ["word", "sustantivo", "palabra", "What does this word mean?"]
 ],
 dialogue: {
  title: "Pedir una cita por teléfono",
  scene: "Gloria llama a un consultorio odontológico en Miami para pedir una cita. La recepcionista habla rápido.",
  a: "Gloria", b: "Recepcionista",
  lines: [
   ["B", "Good morning, Smile Dental Clinic. How can I help you?", "Buenos días, Clínica Dental Smile. ¿En qué le puedo ayudar?"],
   ["A", "Hello, this is Gloria Pineda. Can I speak to Dr. Miller, please?", "Hola, habla Gloria Pineda. ¿Puedo hablar con el doctor Miller, por favor?"],
   ["B", "I'm sorry, he's busy right now. Can I take a message?", "Lo siento, está ocupado en este momento. ¿Le dejo un mensaje?"],
   ["A", "Sorry, I don't understand. Can you speak more slowly, please?", "Perdón, no entiendo. ¿Puede hablar más despacio, por favor?"],
   ["B", "Of course. The doctor is busy. Do you want an appointment?", "Claro. El doctor está ocupado. ¿Quiere una cita?"],
   ["A", "Yes, please. I have a toothache. What does 'appointment' mean?", "Sí, por favor. Me duele una muela. ¿Qué significa «appointment»?"],
   ["B", "An appointment is a time to see the doctor. Is Thursday at ten OK?", "Una cita es una hora para ver al doctor. ¿El jueves a las diez le sirve?"],
   ["A", "Thursday at ten is perfect.", "El jueves a las diez es perfecto."],
   ["B", "Great. How do you spell your last name?", "Muy bien. ¿Cómo se escribe su apellido?"],
   ["A", "P-I-N-E-D-A.", "P-I-N-E-D-A."],
   ["B", "And what's your phone number?", "¿Y cuál es su número de teléfono?"],
   ["A", "It's 305 555 0198.", "Es 305 555 0198."],
   ["B", "Sorry, can you repeat that, please?", "Perdón, ¿puede repetirlo, por favor?"],
   ["A", "Sure. Three oh five, five five five, oh one nine eight.", "Claro. Tres cero cinco, cinco cinco cinco, cero uno nueve ocho."],
   ["B", "Thank you, Ms. Pineda. See you on Thursday.", "Gracias, señora Pineda. Nos vemos el jueves."]
  ]
 },
 practice: [
  M("Al teléfono, para presentarte dices: «Hello, ___ Laura.»", ["this is", "I am", "here is", "my name"], 0),
  M("Can you speak more ___, please? I don't understand.", ["slowly", "slow", "slower more", "slowing"], 0),
  M("How do you ___ 'cuchara' in English?", ["say", "tell", "speak", "talk"], 0),
  F("What does 'busy' ___? (significa)", ["mean"]),
  L("Hello, can I speak to Mr. Torres, please? I'm sorry, he isn't here right now. Can I take a message?", "¿Dónde está el señor Torres?", ["No está en este momento", "Está en una reunión larga", "Está de vacaciones", "Está enfermo"], 0),
  O("Sorry, can you repeat that, please?")
 ],
 more: [
  R("Can I speak to Andrea, please?", "¿Puedo hablar con Andrea, por favor?"),
  R("How do you spell your name?", "¿Cómo se escribe tu nombre?"),
  D("Can you call me back later?"),
  D("Sorry, I don't understand."),
  M("She isn't here right now. Can I take a ___?", ["message", "call", "phone", "number"], 0),
  M("—Can I speak to Dr. Ríos? —Just a ___, please.", ["moment", "minute time", "second time", "little"], 0),
  L("Hi, this is Mario. I'm calling about the meeting. Please call me back at three one five, two two four, seven seven zero one.", "¿Qué pide Mario?", ["Que le devuelvan la llamada", "Que cancelen la reunión", "Que le manden un correo", "Que lo esperen"], 0),
  W("Escribe un diálogo corto de una llamada (mínimo 30 palabras): llamas a una oficina, preguntas por alguien, no entiendes algo y pides que te repitan.", 30, [["this is"], ["can i speak to", "can i talk to"], ["repeat", "slowly", "don't understand"], ["message", "call back", "thank you", "thanks"]])
 ],
 exam: M("I don't understand. Can you ___ that, please?", ["repeat", "spell me", "mean", "hear"], 0),
 exam2: F("Hello, ___ is Marta Ruiz. Can I speak to the manager? (habla)", ["this"])
}
],
/* ───────── Quiz de la unidad 7 ───────── */
quiz: [
 M("My husband goes to work ___ car.", ["by", "in", "with", "on"], 0),
 M("—What time does the plane ___? —At 4:45.", ["arrive", "arrives", "arriving", "to arrive"], 0),
 M("___ I have the Wi-Fi password, please?", ["Could", "Do", "Am", "Does"], 0),
 M("My feet ___. I walked a lot today.", ["hurt", "hurts", "are hurt", "pain"], 0),
 M("—Sorry I'm late. —___ We have time.", ["Don't worry.", "You're welcome.", "Excuse me.", "Me too."], 0),
 F("Hello, ___ is Daniel. Can I speak to Paula, please?", ["this"]),
 L("A round-trip ticket to Santa Marta, please. The bus leaves at eleven thirty from gate two.", "¿A qué hora sale el bus?", ["11:30", "12:30", "11:00", "2:00"], 0),
 L("I have a headache and a fever. I think I have a cold. I need to stay in bed today.", "¿Qué va a hacer?", ["Quedarse en cama", "Ir al trabajo", "Ir a la playa", "Ir a la droguería"], 0),
 W("Imagina que estás de viaje (mínimo 40 palabras): cuenta cómo llegaste (transporte), cómo es tu hotel, cómo te sientes hoy y algo que no entendiste y cómo lo resolviste.", 40, [["by", "on foot"], ["hotel", "room"], ["i'm", "i feel", "i am"], ["repeat", "slowly", "understand", "how do you say", "what does"]]),
 O("Could I have an extra towel, please? The shower doesn't work."),
 O("Sorry, I don't understand. Can you speak more slowly, please?")
],
pool: [
 M("I don't have a car. I go to the office ___.", ["on foot", "by foot", "in foot", "with my feet"], 0),
 M("A ticket only to go (not back) is a ___ ticket.", ["one-way", "round-trip", "double", "single room"], 0),
 M("A room for two people is a ___ room.", ["double", "single", "two", "twin people"], 0),
 M("I have a ___. I need to go to the dentist.", ["toothache", "headache", "sore throat", "fever"], 0),
 M("En inglés, «tengo sueño» es:", ["I'm sleepy.", "I have sleep.", "I'm sleep.", "I have sleepy."], 0),
 M("—Can I speak to Mr. Gómez? —Sorry, he isn't here. Can I take a ___?", ["message", "call", "number", "moment"], 0),
 F("How do you ___ your last name? (deletrear)", ["spell"]),
 F("The bus is ___. It's 9:30 and it leaves at 9:30. (a tiempo)", ["on time"]),
 L("Excuse me, what time is breakfast? Breakfast is from seven to ten in the restaurant on the first floor.", "¿Dónde es el desayuno?", ["En el restaurante del primer piso", "En la habitación", "En la piscina", "En el segundo piso"], 0),
 L("Sorry I'm late. I'm so tired. The train was forty minutes late.", "¿Por qué llegó tarde?", ["El tren se retrasó", "Se quedó dormido", "Estaba enfermo", "Había tráfico"], 0),
 L("How do you say 'almohada' in English? Pillow. P-I-L-L-O-W.", "¿Cómo se dice «almohada»?", ["Pillow", "Towel", "Blanket", "Sheet"], 0),
 W("Escribe un mensaje a un amigo (mínimo 30 palabras): dile que llegas tarde, pide disculpas, explica por qué y dile cómo te sientes.", 30, [["sorry"], ["late"], ["because"], ["i'm", "i feel", "i am"]]),
 O("A one-way ticket to Pereira, please. What time does the bus leave?"),
 O("I have a sore throat. Do you have something for it?"),
 O("Hello, this is Sandra. Can I speak to the manager, please?")
]
};
