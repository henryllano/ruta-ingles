/* A1 · Unidad 8 · Mi pasado y mis planes (Días 36–40). Se agrega con: node tools/add-units.js 0 content/a1/u8.js */
const M = (q, o, a, x) => ({ t: "mc", q, o, a, ...(x ? { x } : {}) }), F = (q, ans) => ({ t: "fill", q, ans }),
  L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), O = text => ({ t: "oral", text }), D = say => ({ t: "dict", say }),
  W = (q, min, keys) => ({ t: "write", q, min, keys }), R = (s, es) => ({ t: "order", words: s.split(" "), es });

module.exports = {
n: 8,
title: "Mi pasado y mis planes",
lessons: [
/* ───────── Día 36 ───────── */
{
 id: "a1-contables-e-incontables",
 title: "Contables e incontables: how much y how many",
 goal: "Hablar de cantidades de comida y cosas con how much, how many y a lot of.",
 theory: [
  { p: "Los sustantivos **contables** se pueden contar y tienen plural: **an apple, two apples, three eggs, five bananas**. Los **incontables** no tienen plural y no llevan **a/an**: **water, milk, rice, bread, sugar, coffee, cheese, money, time**." },
  { p: "Para preguntar cantidad: **How many** + contable en plural (**How many eggs do we need?**) y **How much** + incontable (**How much milk is there?**). **How much is it?** también sirve para preguntar el precio." },
  { ex: [["How many eggs do we need?", "¿Cuántos huevos necesitamos?"], ["How much rice is there?", "¿Cuánto arroz hay?"], ["There's a lot of milk.", "Hay mucha leche."], ["We have a lot of bananas.", "Tenemos muchos bananos."], ["There isn't much sugar.", "No hay mucha azúcar."]] },
  { p: "Para contar algo incontable usa un recipiente o una medida: **a bottle of water**, **a cup of coffee**, **a glass of juice**, **a kilo of rice**, **a piece of cake**, **a loaf of bread**. **A lot of** sirve para los dos tipos." },
  { tip: "**Money** es incontable: **How much money do you have?** (no «how many money»). Lo mismo con **information** y **advice**." }
 ],
 words: ["water", "rice", "egg", "bottle", "kilo"],
 vocab: [
  ["countable", "adjetivo", "contable", "Apple is a countable noun."],
  ["uncountable", "adjetivo", "incontable", "Milk is uncountable."],
  ["How many…?", "expresión", "¿Cuántos…? (contables)", "How many apples do you want?"],
  ["How much…?", "expresión", "¿Cuánto…? (incontables)", "How much water do you drink?"],
  ["a lot of", "expresión", "mucho, muchos", "I drink a lot of coffee."],
  ["not much", "expresión", "no mucho (incontable)", "There isn't much time."],
  ["not many", "expresión", "no muchos (contable)", "There aren't many people."],
  ["egg", "sustantivo", "huevo", "I eat two eggs for breakfast."],
  ["rice", "sustantivo", "arroz", "We need a kilo of rice."],
  ["flour", "sustantivo", "harina", "Arepas are made with corn flour."],
  ["sugar", "sustantivo", "azúcar", "No sugar, please."],
  ["salt", "sustantivo", "sal", "Can you pass the salt?"],
  ["oil", "sustantivo", "aceite", "We need a bottle of oil."],
  ["butter", "sustantivo", "mantequilla", "Bread and butter."],
  ["potato", "sustantivo", "papa", "Ajiaco has three kinds of potatoes."],
  ["onion", "sustantivo", "cebolla", "I need two onions."],
  ["bottle", "sustantivo", "botella", "A bottle of water, please."],
  ["cup", "sustantivo", "taza", "A cup of coffee."],
  ["glass", "sustantivo", "vaso", "A glass of orange juice."],
  ["kilo", "sustantivo", "kilo", "A kilo of tomatoes."],
  ["piece", "sustantivo", "pedazo, porción", "A piece of cake."],
  ["loaf of bread", "expresión", "pan entero (molde)", "Buy a loaf of bread."],
  ["money", "sustantivo (incontable)", "dinero, plata", "How much money do you need?"],
  ["shopping list", "expresión", "lista de mercado", "Let's write a shopping list."]
 ],
 dialogue: {
  title: "La lista del mercado",
  scene: "Camilo y su esposa Diana preparan la lista del mercado para hacer ajiaco el domingo.",
  a: "Diana", b: "Camilo",
  lines: [
   ["A", "Let's make ajiaco on Sunday. Let's write a shopping list.", "Hagamos ajiaco el domingo. Escribamos la lista del mercado."],
   ["B", "Good idea. How many potatoes do we need?", "Buena idea. ¿Cuántas papas necesitamos?"],
   ["A", "A lot! About two kilos. We need three kinds of potatoes.", "¡Muchas! Unos dos kilos. Necesitamos tres clases de papa."],
   ["B", "OK. And chicken? How much chicken is there in the fridge?", "Bien. ¿Y pollo? ¿Cuánto pollo hay en la nevera?"],
   ["A", "There isn't much. Only one piece. Let's buy a kilo.", "No hay mucho. Solo una presa. Compremos un kilo."],
   ["B", "How many ears of corn?", "¿Cuántas mazorcas?"],
   ["A", "Four, please. And two onions.", "Cuatro, por favor. Y dos cebollas."],
   ["B", "Do we have cream?", "¿Tenemos crema de leche?"],
   ["A", "No, we don't. Write 'a small bottle of cream'.", "No. Escribe «una botella pequeña de crema»."],
   ["B", "And rice? Is there any rice?", "¿Y arroz? ¿Hay arroz?"],
   ["A", "Yes, there's a lot of rice. We don't need rice.", "Sí, hay mucho arroz. No necesitamos arroz."],
   ["B", "What about avocados? How many?", "¿Y aguacates? ¿Cuántos?"],
   ["A", "Two big avocados. How much money do you have?", "Dos aguacates grandes. ¿Cuánta plata tienes?"],
   ["B", "Not much! Only fifty thousand pesos.", "¡No mucha! Solo cincuenta mil pesos."],
   ["A", "That's OK. I have a card.", "No importa. Yo tengo tarjeta."]
  ]
 },
 practice: [
  M("How ___ eggs do you want?", ["many", "much", "lot", "any many"], 0, "Eggs es contable en plural → how many."),
  M("How ___ milk is there?", ["much", "many", "lot of", "a lot"], 0, "Milk es incontable → how much."),
  M("¿Cuál es incontable?", ["water", "apple", "egg", "banana"], 0),
  F("I'd like a ___ of water, please. (botella)", ["bottle"]),
  L("We need a kilo of rice, six eggs and a bottle of oil.", "¿Cuántos huevos necesitan?", ["Seis", "Uno", "Dos", "Diez"], 0),
  O("How much money do you need?")
 ],
 more: [
  R("How many people are there?", "¿Cuántas personas hay?"),
  R("There isn't much sugar.", "No hay mucha azúcar."),
  D("A cup of coffee and a piece of cake, please."),
  D("How much water do you drink every day?"),
  M("I drink ___ coffee. Four cups a day!", ["a lot of", "many", "a", "how much"], 0),
  M("There aren't ___ students today. Only five.", ["many", "much", "a lot", "lot of"], 0),
  L("How much is the cheese? It's twelve thousand pesos. And how many oranges do you want? Ten, please.", "¿Cuántas naranjas quiere?", ["Diez", "Doce", "Dos", "Una"], 0),
  W("Escribe tu lista del mercado para una receta que te guste (mínimo 25 palabras). Usa a kilo of, a bottle of, how much / how many y a lot of.", 25, [["kilo", "bottle", "cup", "piece", "glass"], ["how much", "how many"], ["a lot of", "need"]])
 ],
 exam: M("How ___ sugar do you want in your coffee?", ["much", "many", "lot", "a lot"], 0),
 exam2: F("How ___ brothers and sisters do you have?", ["many"])
},
/* ───────── Día 37 ───────── */
{
 id: "a1-simple-o-continuo",
 title: "Presente simple o presente continuo",
 goal: "Distinguir lo que haces normalmente de lo que estás haciendo ahora.",
 theory: [
  { p: "**Presente simple** = hábitos y cosas que son siempre así: **I work in an office. I usually take the bus.** Palabras típicas: **every day, usually, always, never, on Mondays**." },
  { p: "**Presente continuo** = lo que pasa **ahora** o en estos días: **I'm working from home today. She's studying for an exam this week.** Palabras típicas: **now, right now, at the moment, today, this week**." },
  { ex: [["I usually drink coffee, but today I'm drinking tea.", "Normalmente tomo café, pero hoy estoy tomando té."], ["He works in a bank. Right now he's having lunch.", "Él trabaja en un banco. En este momento está almorzando."], ["Do you play soccer?", "¿Juegas fútbol? (en general)"], ["Are you playing now?", "¿Estás jugando ahora?"], ["It rains a lot in April, but it isn't raining now.", "Llueve mucho en abril, pero ahora no está lloviendo."]] },
  { p: "Algunos verbos casi nunca van en continuo porque no son acciones: **like, love, want, need, know, understand, have** (tener). Se dice **I want a coffee** (no «I'm wanting») e **I know the answer**." },
  { tip: "Pregúntate: ¿es una costumbre o está pasando ahora? Costumbre → **I work**. Ahora → **I'm working**." }
 ],
 words: ["usually", "now", "today", "work", "right now"],
 vocab: [
  ["now", "adverbio", "ahora", "I'm busy now."],
  ["right now", "expresión", "en este momento", "She's cooking right now."],
  ["at the moment", "expresión", "en este momento", "He's in a meeting at the moment."],
  ["today", "adverbio", "hoy", "I'm working from home today."],
  ["this week", "expresión", "esta semana", "We're painting the house this week."],
  ["every day", "expresión", "todos los días", "I walk my dog every day."],
  ["usually", "adverbio", "normalmente", "I usually get up at six."],
  ["on Mondays", "expresión", "los lunes", "I go to the gym on Mondays."],
  ["work from home", "expresión", "trabajar desde la casa", "I work from home on Fridays."],
  ["office", "sustantivo", "oficina", "She works in an office."],
  ["meeting", "sustantivo", "reunión", "I'm in a meeting."],
  ["wear", "verbo", "llevar puesto, usar (ropa)", "I'm wearing a jacket today."],
  ["rain", "verbo", "llover", "It's raining now."],
  ["cook", "verbo", "cocinar", "My husband is cooking dinner."],
  ["wait", "verbo", "esperar", "I'm waiting for the bus."],
  ["want", "verbo", "querer", "I want a coffee."],
  ["need", "verbo", "necesitar", "I need help."],
  ["know", "verbo", "saber, conocer", "I know the answer."],
  ["understand", "verbo", "entender", "Do you understand?"],
  ["habit", "sustantivo", "hábito, costumbre", "Running is a good habit."],
  ["at home", "expresión", "en casa", "The kids are at home."],
  ["What are you doing?", "expresión", "¿Qué estás haciendo?", "Hi! What are you doing?"]
 ],
 dialogue: {
  title: "¿Qué estás haciendo?",
  scene: "Laura llama a su amigo Sebastián un martes por la mañana.",
  a: "Laura", b: "Sebastián",
  lines: [
   ["A", "Hi, Sebastián! What are you doing?", "¡Hola, Sebastián! ¿Qué estás haciendo?"],
   ["B", "Hi, Laura! I'm working from home today.", "¡Hola, Laura! Hoy estoy trabajando desde la casa."],
   ["A", "From home? You usually work in the office on Tuesdays.", "¿Desde la casa? Normalmente trabajas en la oficina los martes."],
   ["B", "Yes, but my son is sick, so I'm taking care of him.", "Sí, pero mi hijo está enfermo, entonces lo estoy cuidando."],
   ["A", "Oh no! Is he OK?", "¡Ay no! ¿Está bien?"],
   ["B", "He's fine. He's sleeping right now.", "Está bien. En este momento está durmiendo."],
   ["A", "Good. And what's that noise?", "Qué bien. ¿Y qué es ese ruido?"],
   ["B", "It's raining a lot here. It usually rains in the afternoon, but today it's raining in the morning!", "Está lloviendo mucho aquí. Normalmente llueve por la tarde, ¡pero hoy está lloviendo por la mañana!"],
   ["A", "Here too. I'm waiting for the bus and I don't have an umbrella.", "Aquí también. Estoy esperando el bus y no tengo paraguas."],
   ["B", "Do you usually take the bus?", "¿Normalmente tomas el bus?"],
   ["A", "No, I usually go by bike, but not in the rain!", "No, normalmente voy en bici, ¡pero no con lluvia!"],
   ["B", "Ha ha. Do you want to have lunch on Friday?", "Jaja. ¿Quieres almorzar el viernes?"],
   ["A", "Yes, I want to! Oh, here's my bus. Bye!", "¡Sí, claro! Ay, aquí viene mi bus. ¡Chao!"]
  ]
 },
 practice: [
  M("I usually ___ coffee in the morning.", ["drink", "am drinking", "drinking", "drinks"], 0, "Costumbre (usually) → presente simple."),
  M("Look! It ___.", ["is raining", "rains", "rain", "raining"], 0, "Está pasando ahora → presente continuo."),
  M("She can't talk now. She ___ lunch with a client.", ["is having", "has", "have", "having"], 0),
  F("I ___ the answer. It's Paris. (saber)", ["know"]),
  L("I usually go to work by car, but this week I'm taking the bus because my car is at the mechanic.", "¿Cómo va al trabajo esta semana?", ["En bus", "En carro", "A pie", "En bicicleta"], 0),
  O("I usually work in an office, but today I'm working from home.")
 ],
 more: [
  R("What are you doing right now?", "¿Qué estás haciendo en este momento?"),
  R("He usually gets up at six.", "Él normalmente se levanta a las seis."),
  D("We're having dinner at the moment."),
  D("I don't understand this word."),
  M("My father ___ in a hospital. He's a nurse.", ["works", "is working", "work", "working"], 0),
  M("I ___ a new phone. Mine is very old.", ["want", "am wanting", "wanting", "wants"], 0, "Want casi nunca va en continuo."),
  L("Hi, Mom. I'm in the supermarket. I'm buying milk and bread. Do you need anything?", "¿Dónde está?", ["En el supermercado", "En la casa", "En el trabajo", "En el bus"], 0),
  W("Escribe sobre un día normal tuyo y sobre lo que está pasando hoy diferente (mínimo 30 palabras). Usa usually y today / now.", 30, [["usually", "every day", "always"], ["today", "now", "right now", "at the moment"], ["i'm", "i am"]])
 ],
 exam: M("Shh! The baby ___.", ["is sleeping", "sleeps", "sleep", "sleeping"], 0),
 exam2: M("We ___ to the beach every December.", ["go", "are going now", "going", "goes"], 0)
},
/* ───────── Día 38 ───────── */
{
 id: "a1-pasado-simple-regulares",
 title: "Pasado simple: verbos regulares y did",
 goal: "Contar acciones terminadas con verbos regulares y hacer preguntas con did.",
 theory: [
  { p: "Para el pasado de casi todos los verbos se agrega **-ed**, igual para todas las personas: **work → worked**, **play → played**, **watch → watched**, **visit → visited**. Si termina en **-e**, solo **-d** (**like → liked**). Consonante + **y** → **-ied** (**study → studied**). Algunos duplican la consonante (**stop → stopped**)." },
  { ex: [["I worked until seven yesterday.", "Ayer trabajé hasta las siete."], ["We watched a movie last night.", "Anoche vimos una película."], ["She studied English for two hours.", "Ella estudió inglés dos horas."], ["They visited their grandparents last weekend.", "Visitaron a sus abuelos el fin de semana pasado."], ["The bus stopped in front of my house.", "El bus paró frente a mi casa."]] },
  { p: "Negativo: **didn't** + verbo **sin -ed**: **I didn't work on Sunday.** Pregunta: **Did** + sujeto + verbo **sin -ed**: **Did you watch the game?** — **Yes, I did.** / **No, I didn't.**" },
  { ex: [["I didn't call her.", "No la llamé."], ["Did you like the food?", "¿Te gustó la comida?"], ["Yes, I did. It was delicious.", "Sí. Estaba deliciosa."], ["What did you watch?", "¿Qué viste?"], ["He didn't play soccer last Saturday.", "Él no jugó fútbol el sábado pasado."]] },
  { tip: "La **-ed** suena de tres formas: /t/ en **worked, watched**; /d/ en **played, called**; y /ɪd/ (sílaba extra) solo después de t o d: **visited, wanted, needed**. No digas «work-ed»." }
 ],
 words: ["worked", "played", "watched", "did", "didn't"],
 vocab: [
  ["worked", "verbo (pasado)", "trabajé, trabajó", "I worked a lot yesterday."],
  ["played", "verbo (pasado)", "jugué, jugó; toqué (música)", "We played soccer on Sunday."],
  ["watched", "verbo (pasado)", "vi, vio (TV, película)", "She watched a series."],
  ["visited", "verbo (pasado)", "visité, visitó", "They visited Cartagena."],
  ["cooked", "verbo (pasado)", "cociné, cocinó", "My mom cooked rice and beans."],
  ["cleaned", "verbo (pasado)", "limpié, limpió", "I cleaned the house."],
  ["studied", "verbo (pasado)", "estudié, estudió", "He studied for the test."],
  ["walked", "verbo (pasado)", "caminé, caminó", "We walked in the park."],
  ["listened", "verbo (pasado)", "escuché, escuchó", "I listened to music."],
  ["called", "verbo (pasado)", "llamé, llamó", "I called my sister."],
  ["stayed", "verbo (pasado)", "me quedé, se quedó", "We stayed at home."],
  ["liked", "verbo (pasado)", "me gustó, le gustó", "I liked the movie."],
  ["wanted", "verbo (pasado)", "quise, quería", "She wanted a new phone."],
  ["danced", "verbo (pasado)", "bailé, bailó", "We danced all night."],
  ["stopped", "verbo (pasado)", "paré, paró; dejó de", "It stopped raining."],
  ["did", "auxiliar", "(auxiliar de pasado en preguntas)", "Did you work yesterday?"],
  ["didn't", "contracción", "no (en pasado)", "I didn't watch TV."],
  ["yesterday", "adverbio", "ayer", "I called you yesterday."],
  ["last night", "expresión", "anoche", "Did you sleep well last night?"],
  ["last weekend", "expresión", "el fin de semana pasado", "We stayed home last weekend."],
  ["ago", "adverbio", "hace (tiempo)", "I started three months ago."],
  ["game", "sustantivo", "partido, juego", "Did you watch the game?"],
  ["series", "sustantivo", "serie (de TV)", "We watched a new series."]
 ],
 dialogue: {
  title: "¿Viste el partido?",
  scene: "Es lunes en la oficina. Jorge y su compañera Milena hablan del fin de semana.",
  a: "Jorge", b: "Milena",
  lines: [
   ["A", "Good morning, Milena! Did you watch the game on Saturday?", "¡Buenos días, Milena! ¿Viste el partido el sábado?"],
   ["B", "No, I didn't. I worked on Saturday.", "No. El sábado trabajé."],
   ["A", "Oh no! Colombia played very well. We watched it at my brother's house.", "¡Ay no! Colombia jugó muy bien. Lo vimos en la casa de mi hermano."],
   ["B", "Great! Did you cook something?", "¡Qué bien! ¿Cocinaron algo?"],
   ["A", "Yes, we cooked a barbecue. And what did you do on Sunday?", "Sí, hicimos un asado. ¿Y qué hiciste el domingo?"],
   ["B", "I stayed at home. I cleaned the apartment and I studied English.", "Me quedé en la casa. Limpié el apartamento y estudié inglés."],
   ["A", "Wow, very good! Did you call your mom? It was her birthday, right?", "¡Uy, muy bien! ¿Llamaste a tu mamá? Era su cumpleaños, ¿cierto?"],
   ["B", "Yes, I did. I called her in the morning and we talked for an hour.", "Sí. La llamé por la mañana y hablamos una hora."],
   ["A", "Did you visit her?", "¿La visitaste?"],
   ["B", "No, I didn't. She lives in Bucaramanga. I visited her two months ago.", "No. Ella vive en Bucaramanga. La visité hace dos meses."],
   ["A", "I see. In the evening I walked in the park with my dog.", "Ya veo. Por la tarde caminé en el parque con mi perro."],
   ["B", "Did it rain?", "¿Llovió?"],
   ["A", "Yes, but only a little. It stopped at six.", "Sí, pero solo un poco. Paró a las seis."]
  ]
 },
 practice: [
  M("We ___ a movie last night.", ["watched", "watch", "watching", "watches"], 0),
  M("I ___ work last Sunday. I stayed at home.", ["didn't", "don't", "wasn't", "not"], 0),
  M("___ you call your mother yesterday?", ["Did", "Do", "Were", "Are"], 0),
  F("She ___ English for two hours last night. (study)", ["studied"]),
  L("Last weekend I visited my grandparents. We cooked lunch together and we walked in the park.", "¿A quién visitó?", ["A sus abuelos", "A sus padres", "A su hermana", "A sus amigos"], 0),
  O("I worked a lot yesterday, and in the evening I watched a movie.")
 ],
 more: [
  R("Did you like the food?", "¿Te gustó la comida?"),
  R("We didn't play soccer last Saturday.", "No jugamos fútbol el sábado pasado."),
  D("I called my sister last night."),
  D("Did you study for the exam?"),
  M("Did you watch the game? Yes, I ___.", ["did", "watched", "do", "was"], 0),
  M("He didn't ___ the dishes.", ["wash", "washed", "washing", "washes"], 0, "Después de didn't el verbo va sin -ed."),
  L("Did you clean the kitchen? No, I didn't. I cleaned the bathroom.", "¿Qué limpió?", ["El baño", "La cocina", "La sala", "El cuarto"], 0),
  W("Cuenta qué hiciste ayer (mínimo 30 palabras) usando al menos seis verbos regulares en pasado y una frase con didn't.", 30, [["worked", "played", "watched", "cooked", "cleaned", "studied", "walked", "called", "listened", "stayed", "visited"], ["didn't"], ["yesterday", "in the morning", "in the evening", "last night"]])
 ],
 exam: M("I ___ my homework yesterday.", ["finished", "finish", "finishing", "am finish"], 0),
 exam2: F("___ you visit your parents last weekend?", ["did"])
},
/* ───────── Día 39 ───────── */
{
 id: "a1-pasado-simple-irregulares",
 reading: 20,
 title: "Pasado simple: verbos irregulares y tu fin de semana",
 goal: "Usar los verbos irregulares más comunes para contar qué hiciste.",
 theory: [
  { p: "Muchos verbos muy usados son **irregulares**: no llevan -ed y hay que aprenderlos. Los más importantes: **go → went**, **have → had**, **eat → ate**, **drink → drank**, **see → saw**, **buy → bought**, **get → got**, **make → made**, **take → took**, **come → came**, **meet → met**, **do → did**, **sleep → slept**, **leave → left**." },
  { ex: [["I went to Villa de Leyva last weekend.", "Fui a Villa de Leyva el fin de semana pasado."], ["We had lunch in a nice restaurant.", "Almorzamos en un restaurante bonito."], ["She bought a new jacket.", "Ella compró una chaqueta nueva."], ["I saw my cousin at the mall.", "Vi a mi primo en el centro comercial."], ["They got home at midnight.", "Llegaron a la casa a medianoche."]] },
  { p: "En preguntas y negativas, el verbo vuelve a su forma base (la irregularidad la lleva **did**): **Where did you go?** (no «where did you went») · **What did you eat?** · **I didn't see the email.**" },
  { ex: [["Where did you go on vacation?", "¿A dónde fuiste de vacaciones?"], ["What did you do on Saturday?", "¿Qué hiciste el sábado?"], ["Did you have a good time?", "¿La pasaste bien?"], ["I didn't sleep well.", "No dormí bien."], ["What time did you leave?", "¿A qué hora saliste?"]] },
  { tip: "Aprende los irregulares en grupos que suenan parecido: **bought, brought, thought** · **ate, made, came, took** · **slept, left, met**. Repítelos en voz alta con la forma base: **go–went, eat–ate**." }
 ],
 words: ["went", "had", "saw", "ate", "bought"],
 vocab: [
  ["went", "verbo (pasado de go)", "fui, fue", "I went to the beach."],
  ["had", "verbo (pasado de have)", "tuve, tuvo; comí", "We had a great time."],
  ["ate", "verbo (pasado de eat)", "comí, comió", "She ate a big pizza."],
  ["drank", "verbo (pasado de drink)", "tomé, tomó (bebida)", "He drank a lot of water."],
  ["saw", "verbo (pasado de see)", "vi, vio", "I saw a great movie."],
  ["bought", "verbo (pasado de buy)", "compré, compró", "They bought a new car."],
  ["got", "verbo (pasado de get)", "recibí; llegué; conseguí", "I got home at ten."],
  ["made", "verbo (pasado de make)", "hice, hizo (preparar, fabricar)", "My dad made breakfast."],
  ["took", "verbo (pasado de take)", "tomé, tomó; llevé", "We took a taxi."],
  ["came", "verbo (pasado de come)", "vine, vino", "My friends came to my house."],
  ["met", "verbo (pasado de meet)", "conocí; me encontré con", "I met my wife in 2010."],
  ["did", "verbo (pasado de do)", "hice, hizo", "I did my homework."],
  ["slept", "verbo (pasado de sleep)", "dormí, durmió", "I slept nine hours."],
  ["left", "verbo (pasado de leave)", "salí, salió; dejé", "We left at six."],
  ["gave", "verbo (pasado de give)", "di, dio; regalé", "She gave me a book."],
  ["wrote", "verbo (pasado de write)", "escribí, escribió", "I wrote an email."],
  ["vacation", "sustantivo", "vacaciones", "We went on vacation in July."],
  ["have a good time", "expresión", "pasarla bien", "Did you have a good time?"],
  ["souvenir", "sustantivo", "recuerdo (de un viaje)", "I bought a souvenir."],
  ["mall", "sustantivo", "centro comercial", "We went to the mall."],
  ["midnight", "sustantivo", "medianoche", "We got home at midnight."],
  ["then", "adverbio", "luego, después", "Then we had dinner."],
  ["after that", "expresión", "después de eso", "After that, we went home."]
 ],
 dialogue: {
  title: "Un fin de semana en Villa de Leyva",
  scene: "Carolina le cuenta a su compañero Iván sobre su viaje del fin de semana.",
  a: "Iván", b: "Carolina",
  lines: [
   ["A", "Hi, Carolina! What did you do last weekend?", "¡Hola, Carolina! ¿Qué hiciste el fin de semana pasado?"],
   ["B", "I went to Villa de Leyva with my husband.", "Fui a Villa de Leyva con mi esposo."],
   ["A", "Nice! How did you get there?", "¡Qué bien! ¿Cómo llegaron?"],
   ["B", "We took a bus from Bogotá. We left at seven and got there at eleven.", "Tomamos un bus desde Bogotá. Salimos a las siete y llegamos a las once."],
   ["A", "What did you do there?", "¿Qué hicieron allá?"],
   ["B", "We walked around the main square and we saw the fossil museum.", "Caminamos por la plaza principal y vimos el museo del fósil."],
   ["A", "Did you eat anything special?", "¿Comieron algo especial?"],
   ["B", "Yes! We had lunch in a small restaurant. I ate trout and my husband ate a big steak.", "¡Sí! Almorzamos en un restaurante pequeño. Yo comí trucha y mi esposo un bistec grande."],
   ["A", "Did you buy any souvenirs?", "¿Compraron recuerdos?"],
   ["B", "I bought a beautiful ruana for my mother.", "Le compré una ruana hermosa a mi mamá."],
   ["A", "Where did you sleep?", "¿Dónde durmieron?"],
   ["B", "In a little hotel. It was very quiet. I slept ten hours!", "En un hotel pequeño. Era muy tranquilo. ¡Dormí diez horas!"],
   ["A", "Ha ha! So you had a good time.", "¡Jaja! Entonces la pasaron bien."],
   ["B", "Yes, we did. We came back on Sunday night, very happy.", "Sí. Regresamos el domingo por la noche, muy contentos."]
  ]
 },
 practice: [
  M("Last Saturday we ___ to the beach.", ["went", "goed", "go", "gone"], 0),
  M("Where did you ___ last weekend?", ["go", "went", "going", "goes"], 0, "Después de did el verbo va en forma base."),
  M("I ___ a new phone yesterday. It was expensive.", ["bought", "buyed", "buy", "brought"], 0, "Bought = compré; brought = traje."),
  F("We ___ dinner at a Mexican restaurant last night. (have)", ["had"]),
  L("On Sunday I got up late, I made pancakes for my kids and then we saw a movie at the mall.", "¿Qué preparó para sus hijos?", ["Pancakes", "Arepas", "Huevos", "Sándwiches"], 0),
  O("Last weekend I went to my grandmother's house and we ate ajiaco.")
 ],
 more: [
  R("What did you do on Saturday?", "¿Qué hiciste el sábado?"),
  R("I didn't sleep well last night.", "Anoche no dormí bien."),
  D("We took a taxi to the airport."),
  D("Did you have a good time?"),
  M("She ___ her husband at the university.", ["met", "meeted", "meet", "meets"], 0),
  M("I didn't ___ the email. Can you send it again?", ["see", "saw", "seen", "seeing"], 0),
  L("I went to Cali on vacation. I visited my cousins, I ate a lot of empanadas and I danced salsa every night.", "¿Qué hizo cada noche?", ["Bailó salsa", "Comió empanadas", "Visitó a sus primos", "Durmió temprano"], 0),
  W("Cuenta qué hiciste el fin de semana pasado (mínimo 40 palabras): a dónde fuiste, con quién, qué comiste y qué compraste. Usa al menos cinco verbos irregulares y then o after that.", 40, [["went", "had", "ate", "saw", "bought", "got", "made", "took", "came", "met", "slept", "left"], ["then", "after that"], ["last weekend", "on saturday", "on sunday"], ["with"]])
 ],
 exam: M("We ___ a lot of photos in Cartagena.", ["took", "taked", "take", "takes"], 0),
 exam2: F("What did you ___ for breakfast? (comer)", ["eat", "have"])
},
/* ───────── Día 40 ───────── */
{
 id: "a1-going-to-planes-e-invitaciones",
 reading: 21,
 title: "Planes con going to, invitar y sugerir",
 goal: "Contar tus planes, invitar a alguien y aceptar o rechazar con cortesía.",
 theory: [
  { p: "Para planes que ya decidiste usa **be going to** + verbo: **I'm going to visit my parents next weekend.** · **She's going to start a course.** · **We aren't going to travel this year.** Pregunta: **What are you going to do on Saturday?**" },
  { ex: [["I'm going to study English every day.", "Voy a estudiar inglés todos los días."], ["We're going to paint the house next month.", "Vamos a pintar la casa el próximo mes."], ["He isn't going to work tomorrow.", "Él no va a trabajar mañana."], ["Are you going to watch the game tonight?", "¿Vas a ver el partido esta noche?"], ["What are you going to do this weekend?", "¿Qué vas a hacer este fin de semana?"]] },
  { p: "Para invitar: **Would you like to come to dinner on Saturday?** Aceptar: **I'd love to! / Sure, sounds great.** Rechazar con cortesía: **Sorry, I can't. I'm going to…** Para sugerir: **Let's go to the cinema.** · **Why don't we have lunch together?** · **What about Friday?** — **Good idea!**" },
  { ex: [["Would you like to have coffee tomorrow?", "¿Te gustaría tomar un café mañana?"], ["I'd love to! What time?", "¡Me encantaría! ¿A qué hora?"], ["Sorry, I can't. I'm going to work late.", "Lo siento, no puedo. Voy a trabajar hasta tarde."], ["Let's meet at the mall at six.", "Encontrémonos en el centro comercial a las seis."], ["Why don't we go on Sunday? Good idea!", "¿Por qué no vamos el domingo? ¡Buena idea!"]] },
  { tip: "Después de **Would you like to** y **Let's** el verbo va en forma base: **Would you like to come?** · **Let's go!** (no «let's to go»)." }
 ],
 words: ["going to", "tomorrow", "next", "would like", "let's"],
 vocab: [
  ["be going to", "expresión", "ir a (plan)", "I'm going to call her."],
  ["tomorrow", "adverbio", "mañana", "I'm going to work tomorrow."],
  ["tonight", "adverbio", "esta noche", "What are you doing tonight?"],
  ["this weekend", "expresión", "este fin de semana", "We're going to rest this weekend."],
  ["next week", "expresión", "la próxima semana", "She's going to travel next week."],
  ["next year", "expresión", "el próximo año", "I'm going to learn to drive next year."],
  ["plan", "sustantivo", "plan", "Do you have plans for Saturday?"],
  ["Would you like to…?", "expresión", "¿Te gustaría…?", "Would you like to come?"],
  ["I'd love to.", "expresión", "Me encantaría.", "—Dinner on Friday? —I'd love to!"],
  ["Sorry, I can't.", "expresión", "Lo siento, no puedo.", "Sorry, I can't. I'm busy."],
  ["Let's…", "expresión", "Hagamos… / Vamos a…", "Let's go to the park."],
  ["Why don't we…?", "expresión", "¿Por qué no…?", "Why don't we eat out?"],
  ["What about…?", "expresión", "¿Qué tal…?", "What about Sunday?"],
  ["Good idea!", "expresión", "¡Buena idea!", "Let's take a taxi. —Good idea!"],
  ["Sounds great.", "expresión", "Suena genial.", "A picnic? Sounds great."],
  ["invite", "verbo", "invitar", "I want to invite you to my party."],
  ["party", "sustantivo", "fiesta", "There's a party on Saturday."],
  ["meet", "verbo", "encontrarse con, verse", "Let's meet at seven."],
  ["eat out", "verbo", "comer afuera", "Let's eat out tonight."],
  ["rest", "verbo", "descansar", "I'm going to rest on Sunday."],
  ["travel", "verbo", "viajar", "We're going to travel in December."],
  ["learn", "verbo", "aprender", "I'm going to learn English."],
  ["free", "adjetivo", "libre, desocupado", "Are you free on Friday?"]
 ],
 dialogue: {
  title: "Planes para el sábado",
  scene: "Valentina llama a su amiga Natalia para invitarla a su cumpleaños.",
  a: "Valentina", b: "Natalia",
  lines: [
   ["A", "Hi, Natalia! Are you free on Saturday?", "¡Hola, Natalia! ¿Estás libre el sábado?"],
   ["B", "In the morning, no. I'm going to take my son to his swimming class. Why?", "Por la mañana no. Voy a llevar a mi hijo a la clase de natación. ¿Por qué?"],
   ["A", "It's my birthday. Would you like to come to dinner on Saturday night?", "Es mi cumpleaños. ¿Te gustaría venir a cenar el sábado por la noche?"],
   ["B", "I'd love to! Happy birthday! Where are you going to have dinner?", "¡Me encantaría! ¡Feliz cumpleaños! ¿Dónde van a cenar?"],
   ["A", "We're going to eat at a Peruvian restaurant in Usaquén.", "Vamos a comer en un restaurante peruano en Usaquén."],
   ["B", "Sounds great. What time?", "Suena genial. ¿A qué hora?"],
   ["A", "At eight. Why don't we meet at my house at seven thirty and take a taxi together?", "A las ocho. ¿Por qué no nos vemos en mi casa a las siete y media y tomamos un taxi juntas?"],
   ["B", "Good idea! Is Andrés going to come too?", "¡Buena idea! ¿Andrés también va a ir?"],
   ["A", "No, he isn't. He's going to travel to Cali for work.", "No. Va a viajar a Cali por trabajo."],
   ["B", "Oh, what a pity. And on Sunday? Let's go for a walk in the park.", "Ay, qué lástima. ¿Y el domingo? Vamos a caminar al parque."],
   ["A", "Sorry, I can't. I'm going to rest all day!", "Lo siento, no puedo. ¡Voy a descansar todo el día!"],
   ["B", "Ha ha, I understand. What about next Sunday?", "Jaja, te entiendo. ¿Qué tal el otro domingo?"],
   ["A", "Perfect. See you on Saturday!", "Perfecto. ¡Nos vemos el sábado!"]
  ]
 },
 practice: [
  M("I'm ___ visit my parents next weekend.", ["going to", "go to", "going", "go"], 0),
  M("What ___ you going to do tomorrow?", ["are", "do", "is", "will"], 0),
  M("—Would you like to come to my party? —___", ["I'd love to!", "Yes, I like.", "I'm liking.", "Let's."], 0),
  F("___ go to the cinema tonight! (hagamos / vamos)", ["let's", "lets"]),
  L("Would you like to have lunch tomorrow? Sorry, I can't. I'm going to see the dentist. What about Friday?", "¿Qué va a hacer mañana?", ["Ir al dentista", "Almorzar con su amiga", "Trabajar hasta tarde", "Viajar"], 0),
  O("Sorry, I can't. I'm going to work late tonight.")
 ],
 more: [
  R("What are you going to do this weekend?", "¿Qué vas a hacer este fin de semana?"),
  R("Would you like to come to dinner?", "¿Te gustaría venir a cenar?"),
  D("We're going to travel in December."),
  D("Why don't we meet at seven?"),
  M("She ___ going to buy a car. She doesn't have money.", ["isn't", "doesn't", "don't", "aren't"], 0),
  M("Let's ___ a pizza tonight.", ["order", "to order", "ordering", "ordered"], 0),
  L("Next year I'm going to learn to drive, and my wife is going to start a cooking course.", "¿Qué va a hacer la esposa?", ["Un curso de cocina", "Aprender a manejar", "Viajar", "Cambiar de trabajo"], 0),
  W("Escribe un mensaje invitando a un amigo a un plan (mínimo 30 palabras): di qué van a hacer, cuándo y dónde. Usa would you like to, going to y let's o why don't we.", 30, [["would you like to"], ["going to"], ["let's", "why don't we", "what about"], ["saturday", "sunday", "friday", "tomorrow", "tonight", "weekend", "monday", "tuesday", "wednesday", "thursday"]])
 ],
 exam: M("Look at the clouds! It's ___ rain.", ["going to", "go to", "going", "goes to"], 0),
 exam2: M("—Let's have a coffee. —___", ["Good idea!", "You're welcome.", "Nice to meet you.", "I'm sorry I'm late."], 0)
}
],
/* ───────── Quiz de la unidad 8 ───────── */
quiz: [
 M("How ___ water do you drink every day?", ["much", "many", "lot", "a lot"], 0),
 M("I usually walk to work, but today I ___ the bus because it's raining.", ["am taking", "take", "takes", "taking"], 0),
 M("We ___ a great movie last night.", ["watched", "watch", "watching", "are watching"], 0),
 M("Where did you ___ on vacation?", ["go", "went", "going", "goes"], 0),
 M("—Would you like to have dinner with us? —___", ["I'd love to!", "Yes, I would like.", "Yes, I like it.", "No, I'm not."], 0),
 F("I ___ a new jacket at the mall yesterday. (buy)", ["bought"]),
 L("Last weekend I went to Medellín. I saw my old friends, we ate bandeja paisa and I bought a souvenir for my wife.", "¿Qué comieron?", ["Bandeja paisa", "Ajiaco", "Empanadas", "Arepas"], 0),
 L("Next month I'm going to start a new job, so this weekend I'm going to buy some clothes.", "¿Qué va a hacer el próximo mes?", ["Empezar un trabajo nuevo", "Comprar ropa", "Viajar", "Mudarse"], 0),
 W("Escribe sobre tu semana (mínimo 50 palabras): qué hiciste el fin de semana pasado (verbos en pasado), qué estás haciendo estos días y qué vas a hacer el próximo fin de semana (going to).", 50, [["went", "had", "ate", "saw", "bought", "watched", "visited", "played", "cooked", "stayed", "worked", "got", "made", "took"], ["i'm", "i am"], ["going to"], ["last", "yesterday", "ago"]]),
 O("Last Saturday I went to the mall and I bought a new phone."),
 O("Would you like to come to my house on Sunday? Let's make a barbecue.")
],
pool: [
 M("How ___ apples do we need?", ["many", "much", "lot of", "any much"], 0),
 M("There isn't ___ milk. Let's buy a bottle.", ["much", "many", "a lot", "lot"], 0),
 M("Right now my husband ___ dinner.", ["is cooking", "cooks", "cook", "cooked"], 0),
 M("I ___ the answer. It's number three.", ["know", "am knowing", "knowing", "knows"], 0),
 M("He didn't ___ to the party.", ["come", "came", "comes", "coming"], 0),
 M("—Did you sleep well? —No, I ___.", ["didn't", "don't", "wasn't", "not"], 0),
 F("They ___ to Cartagena by plane last year. (go)", ["went"]),
 F("What are you ___ to do tomorrow?", ["going"]),
 L("I studied for three hours yesterday, but I didn't finish the project. I'm going to finish it tomorrow.", "¿Cuándo va a terminar el proyecto?", ["Mañana", "Ayer", "Hoy", "El fin de semana"], 0),
 L("A kilo of rice, a bottle of oil and two loaves of bread, please. How much is it? Twenty-five thousand pesos.", "¿Cuánto paga?", ["25.000 pesos", "35.000 pesos", "52.000 pesos", "20.000 pesos"], 0),
 L("Why don't we go to the beach on Sunday? Good idea! Let's take the bus at eight.", "¿A qué hora van a tomar el bus?", ["A las 8", "A las 7", "A las 9", "A las 6"], 0),
 W("Escribe un correo corto a un amigo (mínimo 40 palabras): cuéntale qué hiciste en tus últimas vacaciones e invítalo a un plan para el próximo mes.", 40, [["went", "had", "ate", "saw", "bought", "visited", "stayed", "took"], ["would you like to", "let's", "why don't we"], ["going to"]]),
 O("I didn't watch the game. What happened?"),
 O("How many people are going to come to the party?"),
 O("Yesterday I worked from home, and today I'm working in the office.")
]
};
