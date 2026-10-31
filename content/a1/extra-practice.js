/* Práctica extra A1 por unidad: escucha, habla libre (talk), pronunciación (oral) y algo de escritura. */
const L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), M = (q, o, a, x) => ({ t: "mc", q, o, a, x }), F = (q, ans, x) => ({ t: "fill", q, ans, x }),
  O = text => ({ t: "oral", text }), T = (q, min, keys, model, say) => ({ t: "talk", q, min, keys, model, ...(say ? { say } : {}) });
module.exports = [
/* Unidad 1 · Hola, ¿quién eres? */
[
 L("Hi! My name is Carlos. I'm twenty-eight years old and I'm from Medellín. I'm an engineer.", "¿Cuántos años tiene Carlos?", ["28", "18", "38", "82"], 0),
 L("Good morning. I'm Sofía. I'm a teacher. I'm not from Colombia, I'm from Peru.", "¿De dónde es Sofía?", ["De Perú", "De Colombia", "De México", "De Chile"], 0),
 L("This is my friend Tom. He's from Canada. He's a doctor and he's very friendly.", "¿Qué hace Tom?", ["Es médico", "Es profesor", "Es ingeniero", "Es estudiante"], 0),
 L("My phone number is three one zero, five five two, eight four nine one.", "¿Cuál es el número?", ["310 552 8491", "310 525 8491", "301 552 8491", "310 552 4891"], 0),
 M("___ name is Laura.", ["My", "I", "Me", "Mine"], 0, "Para decir de quién es algo: my name."),
 M("They ___ from Brazil.", ["are", "is", "am", "be"], 0, "Con they se usa are."),
 F("What ___ your name?", ["is", "'s"], "What is your name?"),
 O("Hello, my name is Ana and I'm from Colombia."),
 O("Nice to meet you. Where are you from?"),
 T("Introduce yourself: your name, age, city and job.", 12, [["my name is", "i'm", "i am"], ["years old"]], "Hello, my name is Paula. I'm thirty years old. I'm from Bogotá and I'm a nurse."),
 T("Describe a friend: name, age, city and job.", 12, [["he is", "she is", "he's", "she's"]], "This is my friend Mario. He is forty years old. He is from Cali and he is a taxi driver."),
 T("Listen to the question and answer it.", 6, [["i'm", "i am", "my"]], "I'm from Colombia. I live in Medellín.", "Where are you from?")
],
/* Unidad 2 · Mi familia y mis cosas */
[
 L("I have two brothers and one sister. My sister is a nurse. My brothers are students.", "¿Cuántos hermanos tiene en total?", ["Tres", "Dos", "Uno", "Cuatro"], 0),
 L("This is my bag. My keys and my phone are in my bag. My wallet is in my car.", "¿Dónde está la billetera?", ["En el carro", "En el bolso", "En la casa", "En el bolsillo"], 0),
 L("My grandmother is seventy years old. She has short white hair and blue eyes.", "¿Cómo es el pelo de la abuela?", ["Corto y blanco", "Largo y negro", "Corto y negro", "Largo y blanco"], 0),
 L("Is this your pen? No, it isn't. It's Daniel's pen.", "¿De quién es el lapicero?", ["De Daniel", "Del que habla", "De la profesora", "De nadie"], 0),
 M("This is ___ mother. She is a teacher.", ["my", "I", "me", "mine is"], 0, "Posesivo: my mother."),
 M("I ___ two sisters.", ["have", "has", "am", "is"], 0, "Con I se usa have."),
 F("She ___ (have) a big family.", ["has"], "Con she se usa has."),
 O("I have one brother and two sisters."),
 O("My father is tall and he has short black hair."),
 T("Talk about your family: how many people, names and jobs.", 15, [["i have", "there are"], ["my"]], "I have a small family. My mother is Rosa and she is a teacher. My father is Juan and he is a driver. I have one sister."),
 T("Describe things in your bag or on your desk.", 12, [["there is", "there are", "i have"]], "In my bag there is a phone, a wallet and my keys. I have a pen and a notebook too."),
 T("Listen and answer the question.", 6, [["i have", "i don't have"]], "I have two brothers. They are students.", "Do you have brothers or sisters?")
],
/* Unidad 3 · Mi día */
[
 L("I get up at six o'clock. I have a shower, I have breakfast and I go to work at seven thirty.", "¿A qué hora va al trabajo?", ["A las 7:30", "A las 6:00", "A las 7:00", "A las 8:30"], 0),
 L("On Saturdays, I don't work. I play football in the morning and I visit my mother in the afternoon.", "¿Qué hace los sábados por la tarde?", ["Visita a su mamá", "Juega fútbol", "Trabaja", "Duerme"], 0),
 L("My sister never drinks coffee. She always drinks tea with lemon.", "¿Qué toma siempre la hermana?", ["Té con limón", "Café", "Jugo", "Agua"], 0),
 L("The class starts at a quarter past eight and finishes at ten o'clock.", "¿A qué hora empieza la clase?", ["8:15", "8:45", "10:00", "8:00"], 0),
 M("He ___ to work by bus.", ["goes", "go", "going", "is go"], 0, "Con he, el verbo lleva -s o -es: goes."),
 M("I ___ like coffee.", ["don't", "doesn't", "not", "am not"], 0, "Negativo con I: don't."),
 F("What time ___ you get up?", ["do"], "Pregunta en presente simple con you: do."),
 O("I usually get up at six and I go to work by bus."),
 O("She never watches TV in the morning."),
 T("Describe your typical day: what time you get up, eat and work.", 18, [["get up", "wake up"], ["at"]], "I get up at six. I have breakfast at half past six. I go to work at seven and I finish at five. In the evening I watch TV."),
 T("What do you do on weekends?", 12, [["on saturday", "on sunday", "at the weekend", "on weekends"]], "On Saturdays I go to the park with my children. On Sundays I visit my parents and we have lunch together."),
 T("Listen and answer.", 6, [["i get up", "at"]], "I get up at half past five.", "What time do you get up?")
],
/* Unidad 4 · Comida y compras */
[
 L("Can I have a coffee and a cheese sandwich, please? And a glass of water too.", "¿Qué pide la persona?", ["Café, sándwich de queso y agua", "Té y torta", "Jugo y sándwich", "Café y pizza"], 0),
 L("These shoes are forty-five dollars. The T-shirt is twelve dollars.", "¿Cuánto cuestan los zapatos?", ["45 dólares", "12 dólares", "54 dólares", "40 dólares"], 0),
 L("There isn't any milk in the fridge, but there are some eggs and there is some cheese.", "¿Qué NO hay en la nevera?", ["Leche", "Huevos", "Queso", "Nada falta"], 0),
 L("I'd like a chicken salad, please. I don't eat meat, but I eat chicken and fish.", "¿Qué no come la persona?", ["Carne de res", "Pollo", "Pescado", "Ensalada"], 0),
 M("How ___ is this jacket?", ["much", "many", "old", "long"], 0, "Para preguntar precios: How much...?"),
 M("There aren't ___ apples.", ["any", "some", "a", "an"], 0, "En negativo: any."),
 F("I'd ___ a coffee, please.", ["like"], "I'd like = quisiera."),
 O("Can I have the bill, please?"),
 O("How much are these shoes?"),
 T("What do you usually eat for breakfast, lunch and dinner?", 15, [["for breakfast"], ["for lunch", "for dinner"]], "For breakfast I eat eggs and an arepa. For lunch I have rice, chicken and salad. For dinner I eat a sandwich."),
 T("You are in a restaurant. Order your food and a drink.", 10, [["i'd like", "can i have", "i would like"]], "Hello. I'd like a fish with rice and salad, please. And can I have an orange juice?"),
 T("Listen to the waiter and answer.", 6, [["i'd like", "can i have", "please"]], "I'd like a coffee and a piece of cake, please.", "Good afternoon. What would you like?")
],
/* Unidad 5 · Mi ciudad, mi casa y el clima */
[
 L("The bank is next to the supermarket, and the pharmacy is opposite the park.", "¿Dónde está la farmacia?", ["Frente al parque", "Al lado del supermercado", "Detrás del banco", "En el parque"], 0),
 L("My house has three bedrooms and two bathrooms. There's a small garden behind the house.", "¿Dónde está el jardín?", ["Detrás de la casa", "Delante de la casa", "En el techo", "No hay jardín"], 0),
 L("Today it's cold and rainy in Bogotá, but in Cartagena it's hot and sunny.", "¿Cómo está el clima en Cartagena?", ["Caliente y soleado", "Frío y lluvioso", "Nublado", "Con viento"], 0),
 L("Go straight on and turn left. The museum is on your right, next to the church.", "¿Dónde está el museo?", ["A la derecha, al lado de la iglesia", "A la izquierda", "Detrás de la iglesia", "Al final de la calle"], 0),
 M("There ___ two parks in my neighbourhood.", ["are", "is", "be", "has"], 0, "Plural: there are."),
 M("The cat is ___ the bed.", ["under", "at", "to", "from"], 0, "Under = debajo de."),
 F("It's very ___ today. Take an umbrella! (lluvioso)", ["rainy"], "Rainy = lluvioso."),
 O("Excuse me, where is the nearest bank?"),
 O("There is a big park near my house."),
 T("Describe your house or apartment: rooms and furniture.", 15, [["there is", "there are"], ["bedroom", "kitchen", "living room", "bathroom"]], "I live in an apartment. There are two bedrooms, a kitchen, a living room and a bathroom. There is a big sofa in the living room."),
 T("Describe your neighbourhood: what places are near your house?", 15, [["near", "next to", "opposite"]], "My neighbourhood is quiet. There is a supermarket near my house and a park opposite the school. The bus stop is next to the bank."),
 T("Listen and answer.", 8, [["it's", "it is"]], "Today it's sunny and hot.", "What's the weather like today in your city?")
],
/* Unidad 6 · Tiempo libre y el pasado */
[
 L("Yesterday I went to the cinema with my friends. We watched a comedy and then we had pizza.", "¿Qué hicieron después del cine?", ["Comieron pizza", "Fueron al parque", "Vieron otra película", "Fueron a casa"], 0),
 L("I can swim and I can ride a bike, but I can't play the guitar.", "¿Qué NO puede hacer?", ["Tocar la guitarra", "Nadar", "Montar bicicleta", "Bailar"], 0),
 L("Last weekend I was at my grandmother's house. It was her birthday and we had a big party.", "¿Por qué hubo fiesta?", ["Era el cumpleaños de la abuela", "Era Navidad", "Era su boda", "Era fin de año"], 0),
 L("I love playing basketball, but my sister prefers reading books and listening to music.", "¿Qué prefiere la hermana?", ["Leer y escuchar música", "Jugar baloncesto", "Nadar", "Bailar"], 0),
 M("Yesterday I ___ to the park.", ["went", "go", "goes", "going"], 0, "Pasado de go: went."),
 M("___ you swim?", ["Can", "Do can", "Are", "Does"], 0, "Pregunta con can: Can you...?"),
 F("Last Sunday I ___ (visit) my parents.", ["visited"], "Pasado regular: visit → visited."),
 O("Last weekend I visited my grandparents and we cooked together."),
 O("I can play football, but I can't play the piano."),
 T("What did you do last weekend?", 15, [["last weekend", "on saturday", "on sunday"], ["went", "visited", "watched", "played", "was"]], "Last weekend I went to the park with my family. On Sunday I visited my mother and we watched a film."),
 T("Talk about your hobbies: what you like doing and what you can do.", 15, [["i like", "i love"], ["i can"]], "I like reading and listening to music. I love dancing. I can cook very well, but I can't swim."),
 T("Listen and answer.", 8, [["i went", "i visited", "i was", "i watched", "i played"]], "Yesterday I went to work and in the evening I watched TV.", "What did you do yesterday?")
]
];
