module.exports = {
title: "Historias del pasado",
lessons: [
{ id:"a2-u1-l1", title:"Pasado simple: verbos regulares", goal:"Contar lo que hiciste ayer con verbos regulares (-ed).",
 theory:[
  {p:"El **pasado simple** se usa para acciones terminadas en el pasado. Con los verbos **regulares** se agrega **-ed**, y es igual para todas las personas."},
  {ex:[["I worked yesterday.","Trabajé ayer."],["She cooked dinner.","Ella cocinó la cena."],["We watched a movie.","Vimos una película."],["They visited their parents.","Visitaron a sus padres."]]},
  {p:"Reglas de escritura: si termina en **e**, solo se agrega **-d** (live → lived). Consonante + **y** → **-ied** (study → studied). Una vocal + una consonante → se dobla (stop → stopped)."},
  {p:"La pronunciación de -ed cambia: **/t/** en worked, watched; **/d/** en played, lived; **/id/** en wanted, needed, visited."},
  {tip:"La -ed solo suena como sílaba extra (id) después de t o d: wanted, needed. En los demás casos no se agrega sílaba: worked suena 'workt'."}
 ],
 vocab:[
  ["worked","verbo (pasado)","trabajé, trabajó","I worked late yesterday."],["played","verbo (pasado)","jugué, jugó","We played football."],
  ["watched","verbo (pasado)","vi, vio (TV)","She watched a series."],["cooked","verbo (pasado)","cociné, cocinó","He cooked pasta."],
  ["cleaned","verbo (pasado)","limpié, limpió","I cleaned the kitchen."],["visited","verbo (pasado)","visité, visitó","We visited my aunt."],
  ["studied","verbo (pasado)","estudié, estudió","She studied all night."],["walked","verbo (pasado)","caminé, caminó","I walked to work."],
  ["listened","verbo (pasado)","escuché, escuchó","They listened to music."],["called","verbo (pasado)","llamé, llamó","I called my mom."],
  ["stayed","verbo (pasado)","me quedé, se quedó","We stayed at home."],["arrived","verbo (pasado)","llegué, llegó","The bus arrived late."],
  ["started","verbo (pasado)","empecé, empezó","The class started at nine."],["finished","verbo (pasado)","terminé, terminó","I finished my report."],
  ["opened","verbo (pasado)","abrí, abrió","She opened the window."],["helped","verbo (pasado)","ayudé, ayudó","He helped me a lot."],
  ["yesterday morning","expresión","ayer por la mañana","I studied yesterday morning."],["last night","expresión","anoche","We watched a movie last night."],
  ["the day before yesterday","expresión","antier","I called her the day before yesterday."],["at the weekend","expresión","el fin de semana","I relaxed at the weekend."]
 ],
 dialogue:{title:"El lunes en la oficina", scene:"Dos compañeros, Paula y Rick, hablan del fin de semana.", a:"Paula", b:"Rick", lines:[
  ["A","Hi, Rick! How was your weekend?","¡Hola, Rick! ¿Cómo estuvo tu fin de semana?"],
  ["B","It was quiet. I stayed at home and cleaned the apartment.","Tranquilo. Me quedé en casa y limpié el apartamento."],
  ["A","Oh, that's boring! Did you do anything fun?","¡Uy, qué aburrido! ¿Hiciste algo divertido?"],
  ["B","Yes, on Saturday night I cooked dinner for my girlfriend.","Sí, el sábado en la noche le cociné la cena a mi novia."],
  ["A","Nice! What did you cook?","¡Qué bien! ¿Qué cocinaste?"],
  ["B","I cooked chicken with vegetables. She loved it. And you?","Cociné pollo con verduras. Le encantó. ¿Y tú?"],
  ["A","I visited my grandparents in the country.","Visité a mis abuelos en el campo."],
  ["B","That sounds lovely. How did you travel?","Suena muy bien. ¿Cómo viajaste?"],
  ["A","We traveled by bus. It arrived very late!","Viajamos en bus. ¡Llegó muy tarde!"],
  ["B","Oh no. What did you do there?","Oh no. ¿Qué hicieron allá?"],
  ["A","We walked a lot, played cards and talked for hours.","Caminamos mucho, jugamos cartas y hablamos por horas."],
  ["B","Perfect weekend! Well, let's start work. The meeting started five minutes ago!","¡Fin de semana perfecto! Bueno, empecemos a trabajar. ¡La reunión empezó hace cinco minutos!"]
 ]},
 practice:[
  {t:"mc",q:"Yesterday I ___ my grandmother.",o:["visit","visited","visiting","visits"],a:1,x:"Pasado simple regular: visit → visited."},
  {t:"mc",q:"El pasado de study es:",o:["studyed","studied","studed","studdied"],a:1,x:"Consonante + y → ied."},
  {t:"mc",q:"El pasado de stop es:",o:["stoped","stopped","stopt","stopping"],a:1,x:"Vocal + consonante → se dobla: stopped."},
  {t:"fill",q:"We ___ (watch) a great movie last night.",ans:["watched"]},
  {t:"listen",say:"Last Saturday I cleaned my house in the morning and visited my friends in the afternoon.",q:"¿Qué hizo en la tarde?",o:["Limpió la casa","Visitó a sus amigos","Cocinó","Trabajó"],a:1},
  {t:"oral",text:"Yesterday I worked, cooked dinner and watched TV."}
 ],
 more:[
  {t:"order",words:["She","called","her","mother","last","night."],es:"Ella llamó a su mamá anoche."},
  {t:"order",words:["We","stayed","at","home","at","the","weekend."],es:"Nos quedamos en casa el fin de semana."},
  {t:"dict",say:"I finished my report yesterday."},
  {t:"dict",say:"The bus arrived very late."},
  {t:"mc",q:"¿Cuál -ed suena como sílaba extra (id)?",o:["worked","played","wanted","cleaned"],a:2,x:"Después de t/d suena id: wanted."},
  {t:"fill",q:"The class ___ (start) at nine.",ans:["started"]},
  {t:"listen",say:"My brother studied medicine, but now he works in a bank.",q:"¿Qué estudió el hermano?",o:["Derecho","Medicina","Economía","Ingeniería"],a:1},
  {t:"write",q:"Escribe 5 cosas que hiciste ayer usando verbos regulares en pasado (mínimo 25 palabras).",min:25,keys:[["yesterday","last night","in the morning"],["ed"],["and","then","after"]]}
 ],
 exam:{t:"mc",q:"Last year we ___ in Spain.",o:["live","lived","living","lives"],a:1},
 exam2:{t:"fill",q:"They ___ (play) tennis yesterday.",ans:["played"]}
},
{ id:"a2-u1-l2", title:"Pasado simple: verbos irregulares", goal:"Usar los verbos irregulares más comunes en pasado.",
 theory:[
  {p:"Muchos verbos muy usados son **irregulares**: no llevan -ed y hay que aprenderlos de memoria. Igual que los regulares, son iguales para todas las personas."},
  {ex:[["go → went","ir → fui"],["have → had","tener → tuve"],["get → got","conseguir, llegar → conseguí, llegué"],["see → saw","ver → vi"],["eat → ate","comer → comí"],["buy → bought","comprar → compré"],["take → took","tomar → tomé"],["make → made","hacer → hice"]]},
  {ex:[["We went to the beach.","Fuimos a la playa."],["I bought a new phone.","Compré un teléfono nuevo."],["She had a great time.","La pasó muy bien."]]},
  {tip:"Truco: aprende los irregulares en grupos que suenan parecido: buy–bought, bring–brought, think–thought, teach–taught."}
 ],
 vocab:[
  ["went","verbo (pasado de go)","fui, fue","We went to Cartagena."],["had","verbo (pasado de have)","tuve, tuvo","I had a sandwich."],
  ["got","verbo (pasado de get)","conseguí; llegué","I got home at ten."],["saw","verbo (pasado de see)","vi, vio","I saw a great movie."],
  ["ate","verbo (pasado de eat)","comí, comió","We ate fish."],["drank","verbo (pasado de drink)","bebí, bebió","She drank a coffee."],
  ["bought","verbo (pasado de buy)","compré, compró","He bought a car."],["took","verbo (pasado de take)","tomé, tomó","I took a taxi."],
  ["made","verbo (pasado de make)","hice, hizo","She made a cake."],["came","verbo (pasado de come)","vine, vino","They came to the party."],
  ["gave","verbo (pasado de give)","di, dio","He gave me a gift."],["met","verbo (pasado de meet)","conocí; me encontré con","I met my wife in 2010."],
  ["left","verbo (pasado de leave)","salí, dejé","She left at six."],["slept","verbo (pasado de sleep)","dormí, durmió","I slept very well."],
  ["wrote","verbo (pasado de write)","escribí, escribió","I wrote an email."],["read","verbo (pasado de read, se pronuncia 'red')","leí, leyó","I read a good book."],
  ["felt","verbo (pasado de feel)","me sentí","I felt tired."],["thought","verbo (pasado de think)","pensé","I thought about you."],
  ["brought","verbo (pasado de bring)","traje, trajo","She brought a cake."],["found","verbo (pasado de find)","encontré, encontró","I found my keys."]
 ],
 dialogue:{title:"Vacaciones en Cartagena", scene:"Lina le cuenta a su amigo Steve cómo le fue en sus vacaciones.", a:"Steve", b:"Lina", lines:[
  ["A","Welcome back, Lina! Where did you go on vacation?","¡Bienvenida, Lina! ¿A dónde fuiste de vacaciones?"],
  ["B","I went to Cartagena with my sister.","Fui a Cartagena con mi hermana."],
  ["A","Lucky you! Did you have a good time?","¡Qué suerte! ¿La pasaste bien?"],
  ["B","We had an amazing time. We took a boat to the islands.","La pasamos increíble. Tomamos un bote a las islas."],
  ["A","Wow. What did you eat there?","Wow. ¿Qué comieron allá?"],
  ["B","We ate fried fish and coconut rice every day!","¡Comimos pescado frito y arroz con coco todos los días!"],
  ["A","Delicious. Did you buy anything?","Delicioso. ¿Compraste algo?"],
  ["B","Yes, I bought a hat and some sunglasses. And I brought you a gift!","Sí, compré un sombrero y unas gafas de sol. ¡Y te traje un regalo!"],
  ["A","Really? Thank you! What is it?","¿En serio? ¡Gracias! ¿Qué es?"],
  ["B","It's a bracelet. I found it in a little shop in the old city.","Es una manilla. La encontré en una tiendita en la ciudad vieja."],
  ["A","I love it! Did you meet anyone interesting?","¡Me encanta! ¿Conociste a alguien interesante?"],
  ["B","We met a couple from Italy. They made us pasta one night!","Conocimos a una pareja de Italia. ¡Una noche nos hicieron pasta!"]
 ]},
 practice:[
  {t:"mc",q:"Yesterday I ___ a new jacket.",o:["buyed","bought","buy","brought"],a:1},
  {t:"mc",q:"We ___ to the cinema on Friday.",o:["goed","went","gone","go"],a:1},
  {t:"mc",q:"El pasado de see es:",o:["seed","saw","seen","sew"],a:1},
  {t:"fill",q:"She ___ (have) breakfast at seven.",ans:["had"]},
  {t:"listen",say:"Last night I slept only four hours because I wrote a long report.",q:"¿Cuántas horas durmió?",o:["4","8","6","2"],a:0},
  {t:"oral",text:"Last summer I went to the beach and ate a lot of fish."}
 ],
 more:[
  {t:"order",words:["I","met","my","husband","in","2015."],es:"Conocí a mi esposo en 2015."},
  {t:"order",words:["She","brought","a","cake","to","the","party."],es:"Ella trajo una torta a la fiesta."},
  {t:"dict",say:"I found my keys under the sofa."},
  {t:"dict",say:"We took a taxi to the airport."},
  {t:"mc",q:"El pasado de think es:",o:["thinked","thought","taught","thank"],a:1},
  {t:"fill",q:"He ___ (give) me a beautiful gift.",ans:["gave"]},
  {t:"listen",say:"My parents came to visit and they brought a lot of food from the farm.",q:"¿Qué trajeron los padres?",o:["Regalos","Mucha comida de la finca","Flores","Nada"],a:1},
  {t:"oral",text:"I bought a new phone and I found a great job."}
 ],
 exam:{t:"mc",q:"I ___ a very interesting book last month.",o:["readed","read","red","reading"],a:1},
 exam2:{t:"fill",q:"We ___ (eat) Italian food last night.",ans:["ate"]}
},
{ id:"a2-u1-l3", title:"Pasado: negativas y preguntas", goal:"Preguntar y negar en pasado con did y didn't.",
 theory:[
  {p:"Para **negar** en pasado se usa **didn't** (did not) + verbo en **forma base** (sin -ed y sin forma irregular)."},
  {ex:[["I didn't work yesterday.","No trabajé ayer."],["She didn't go to the party.","Ella no fue a la fiesta."],["We didn't buy anything.","No compramos nada."]]},
  {p:"Para **preguntar** se pone **Did** al principio, y el verbo también va en forma base:"},
  {ex:[["Did you see the game?","¿Viste el partido?"],["Yes, I did. / No, I didn't.","Sí. / No."],["Where did you go?","¿A dónde fuiste?"],["What did she buy?","¿Qué compró ella?"],["Why didn't you call me?","¿Por qué no me llamaste?"]]},
  {tip:"Error muy común: 'Did you went?' o 'I didn't went'. Después de did / didn't el verbo vuelve a la base: Did you go? I didn't go."},
  {p:"Con el verbo **be** no se usa did: Were you tired? I wasn't at home."}
 ],
 vocab:[
  ["did","verbo auxiliar","(auxiliar del pasado)","Did you like it?"],["didn't","contracción","no (en pasado)","I didn't sleep well."],
  ["Did you...?","expresión","¿(Tú) ...? (en pasado)","Did you have fun?"],["Where did you go?","expresión","¿A dónde fuiste?","Where did you go last weekend?"],
  ["What did you do?","expresión","¿Qué hiciste?","What did you do yesterday?"],["When did...?","expresión","¿Cuándo...?","When did you arrive?"],
  ["Who did...?","expresión","¿A quién...?","Who did you see?"],["How was...?","expresión","¿Cómo estuvo...?","How was the trip?"],
  ["anything","pronombre","nada (en negativas), algo (en preguntas)","I didn't buy anything."],["anybody","pronombre","nadie / alguien","Did you see anybody?"],
  ["forget / forgot","verbo","olvidar / olvidé","I forgot my wallet."],["lose / lost","verbo","perder / perdí","He lost his phone."],
  ["miss","verbo","perder (un bus, una clase)","I missed the bus."],["happen","verbo","pasar, suceder","What happened?"],
  ["wake up / woke up","verbo","despertarse / me desperté","I woke up late."],["on time","expresión","a tiempo","I didn't arrive on time."],
  ["excuse","sustantivo","excusa","That's not a good excuse."],["alarm","sustantivo","alarma, despertador","My alarm didn't ring."],
  ["ring / rang","verbo","sonar / sonó","The phone rang."],["What a pity!","expresión","¡Qué pena!","You missed the party? What a pity!"]
 ],
 dialogue:{title:"¿Por qué llegaste tarde?", scene:"El jefe, Mr. Hill, le pregunta a Carlos por qué llegó tarde.", a:"Mr. Hill", b:"Carlos", lines:[
  ["A","Carlos, the meeting started at eight. Why didn't you arrive on time?","Carlos, la reunión empezó a las ocho. ¿Por qué no llegaste a tiempo?"],
  ["B","I'm very sorry, Mr. Hill. My alarm didn't ring.","Lo siento mucho, señor Hill. Mi alarma no sonó."],
  ["A","Did you forget to set it?","¿Se te olvidó programarla?"],
  ["B","No, I didn't. My phone died during the night.","No. Mi celular se descargó en la noche."],
  ["A","I see. What time did you wake up?","Entiendo. ¿A qué hora te despertaste?"],
  ["B","I woke up at seven thirty. Then I missed the bus.","Me desperté a las siete y media. Luego perdí el bus."],
  ["A","Did you take a taxi?","¿Tomaste un taxi?"],
  ["B","Yes, I did, but there was a lot of traffic.","Sí, pero había mucho tráfico."],
  ["A","OK. Did you bring the sales report?","Bueno. ¿Trajiste el informe de ventas?"],
  ["B","Yes, I did. Here it is. I finished it last night.","Sí. Aquí está. Lo terminé anoche."],
  ["A","Good. Did you send it to the client too?","Bien. ¿También se lo enviaste al cliente?"],
  ["B","No, I didn't. I'll send it right now.","No. Lo envío ahora mismo."]
 ]},
 practice:[
  {t:"mc",q:"___ you see the game last night?",o:["Do","Did","Were","Was"],a:1},
  {t:"mc",q:"She didn't ___ to work yesterday.",o:["went","go","goes","going"],a:1,x:"Después de didn't, verbo en forma base."},
  {t:"mc",q:"Where ___ you go on vacation?",o:["did","were","do","was"],a:0},
  {t:"fill",q:"I ___ buy anything. (no compré)",ans:["didn't","did not"]},
  {t:"listen",say:"I didn't go to the party because I had a terrible headache.",q:"¿Por qué no fue a la fiesta?",o:["Tenía trabajo","Tenía dolor de cabeza","No lo invitaron","Estaba de viaje"],a:1},
  {t:"oral",text:"Did you have a good weekend? What did you do?"}
 ],
 more:[
  {t:"order",words:["What","did","you","do","yesterday?"],es:"¿Qué hiciste ayer?"},
  {t:"order",words:["I","didn't","sleep","well","last","night."],es:"No dormí bien anoche."},
  {t:"dict",say:"Why didn't you call me?"},
  {t:"dict",say:"My alarm didn't ring this morning."},
  {t:"mc",q:"—Did they win? —No, they ___.",o:["don't","didn't","weren't","not"],a:1},
  {t:"mc",q:"¿Cuál está bien?",o:["Did you went?","Did you go?","Do you went?","You did go?"],a:1},
  {t:"listen",say:"Did you lock the door? No, I forgot! I didn't lock it.",q:"¿Cerró la puerta con llave?",o:["Sí","No, se le olvidó","No tiene llave","No lo dice"],a:1},
  {t:"write",q:"Escribe un mensaje explicando por qué no fuiste a una reunión o fiesta (mínimo 25 palabras). Usa didn't.",min:25,keys:[["didn't","did not"],["because"],["sorry"]]}
 ],
 exam:{t:"mc",q:"What time ___ the train leave?",o:["did","was","were","do"],a:0},
 exam2:{t:"mc",q:"I ___ the bus this morning, so I was late.",o:["lost","missed","lose","forgot"],a:1}
},
{ id:"a2-u1-l4", title:"Contar una historia", goal:"Narrar algo que pasó, en orden, con expresiones de tiempo.",
 theory:[
  {p:"Para contar una historia en orden se usan **secuenciadores**:"},
  {ex:[["First, ...","Primero, ..."],["Then, ... / Next, ...","Luego, ..."],["After that, ...","Después de eso, ..."],["Later, ...","Más tarde, ..."],["Finally, ... / In the end, ...","Finalmente, ... / Al final, ..."]]},
  {p:"Expresiones de tiempo pasado: **ago** va después del período (two days ago = hace dos días); **last** sin the (last Monday, last year); **in** con años y meses (in 2019, in May)."},
  {ex:[["I moved to Bogotá five years ago.","Me mudé a Bogotá hace cinco años."],["When I was a child, I lived on a farm.","Cuando era niño, vivía en una finca."],["Suddenly, the lights went out.","De repente, se fue la luz."]]},
  {tip:"No se dice 'the last week'. Se dice 'last week' (la semana pasada)."}
 ],
 vocab:[
  ["first","adverbio","primero","First, we bought the tickets."],["then","adverbio","luego","Then we took a taxi."],
  ["next","adverbio","después, a continuación","Next, we checked in."],["after that","expresión","después de eso","After that, we had lunch."],
  ["later","adverbio","más tarde","Later, it started to rain."],["finally","adverbio","finalmente","Finally, we got home."],
  ["in the end","expresión","al final","In the end, everything was OK."],["suddenly","adverbio","de repente","Suddenly, I heard a noise."],
  ["ago","adverbio","hace (tiempo)","I met him ten years ago."],["when I was a child","expresión","cuando era niño","When I was a child, I played outside."],
  ["move","verbo","mudarse","We moved to Cali in 2018."],["grow up / grew up","verbo","crecer / crecí","I grew up in a small town."],
  ["born","adjetivo","nacido","I was born in Manizales."],["get married","expresión","casarse","They got married in 2012."],
  ["happen / happened","verbo","pasar / pasó","What happened next?"],["story","sustantivo","historia","Tell me a story."],
  ["funny","adjetivo","chistoso","It was a funny story."],["scary","adjetivo","de miedo","It was a scary night."],
  ["lucky","adjetivo","afortunado, con suerte","We were very lucky."],["unfortunately","adverbio","desafortunadamente","Unfortunately, it rained."]
 ],
 dialogue:{title:"Cómo nos conocimos", scene:"En una cena, Ana le cuenta a su nueva amiga Rachel cómo conoció a su esposo.", a:"Rachel", b:"Ana", lines:[
  ["A","So, how did you and Felipe meet?","Entonces, ¿cómo se conocieron tú y Felipe?"],
  ["B","It's a funny story! We met twelve years ago, at a bus stop.","¡Es una historia chistosa! Nos conocimos hace doce años, en una parada de bus."],
  ["A","At a bus stop? Really?","¿En una parada de bus? ¿En serio?"],
  ["B","Yes. First, it started to rain very hard, and I didn't have an umbrella.","Sí. Primero empezó a llover muy fuerte, y yo no tenía paraguas."],
  ["A","Oh no! What happened next?","¡Oh no! ¿Qué pasó después?"],
  ["B","Then, Felipe arrived and he shared his umbrella with me.","Luego llegó Felipe y compartió su paraguas conmigo."],
  ["A","How romantic! Did you talk?","¡Qué romántico! ¿Hablaron?"],
  ["B","Yes, we talked for twenty minutes. Unfortunately, my bus came.","Sí, hablamos veinte minutos. Desafortunadamente, llegó mi bus."],
  ["A","And after that?","¿Y después?"],
  ["B","After that, I didn't see him for a month. Then suddenly, I saw him at my friend's birthday party!","Después no lo vi por un mes. ¡Y de repente lo vi en el cumpleaños de mi amiga!"],
  ["A","No way! That was lucky!","¡No puede ser! ¡Qué suerte!"],
  ["B","Very lucky. Finally, we started dating, and we got married three years later.","Mucha suerte. Al final empezamos a salir y nos casamos tres años después."]
 ]},
 practice:[
  {t:"mc",q:"I moved to Medellín ten years ___.",o:["before","ago","last","later"],a:1},
  {t:"mc",q:"We met ___ week.",o:["the last","last","ago","in last"],a:1},
  {t:"mc",q:"'De repente' es:",o:["finally","suddenly","later","then"],a:1},
  {t:"fill",q:"I was ___ in 1985. (nací)",ans:["born"]},
  {t:"listen",say:"First we went to the museum, then we had lunch, and finally we walked in the park.",q:"¿Qué hicieron al final?",o:["Fueron al museo","Almorzaron","Caminaron en el parque","Fueron a casa"],a:2},
  {t:"oral",text:"First I got up, then I had breakfast, and after that I went to work."}
 ],
 more:[
  {t:"order",words:["I","grew","up","in","a","small","town."],es:"Crecí en un pueblo pequeño."},
  {t:"order",words:["They","got","married","five","years","ago."],es:"Se casaron hace cinco años."},
  {t:"dict",say:"Suddenly, I heard a strange noise."},
  {t:"dict",say:"In the end, everything was fine."},
  {t:"mc",q:"When I ___ a child, I lived on a farm.",o:["am","was","were","did"],a:1},
  {t:"fill",q:"What ___ next? (pasó)",ans:["happened"]},
  {t:"listen",say:"Unfortunately, our flight was cancelled, so we stayed one more night in the hotel.",q:"¿Qué pasó con el vuelo?",o:["Llegó tarde","Lo cancelaron","Salió temprano","Lo perdieron"],a:1},
  {t:"write",q:"Cuenta una historia corta de algo que te pasó (mínimo 40 palabras). Usa first, then, after that y finally.",min:40,keys:[["first"],["then","next"],["after that","later"],["finally","in the end"]]}
 ],
 exam:{t:"mc",q:"I moved to this city ___ 2015.",o:["ago","in","on","last"],a:1},
 exam2:{t:"mc",q:"Ordena la historia: '___, I woke up. Then I had a shower.'",o:["Finally","First","After that","Later"],a:1}
},
{ id:"a2-u1-l5", title:"Pasado continuo", goal:"Describir lo que estaba pasando cuando algo ocurrió.",
 theory:[
  {p:"El **pasado continuo** (was/were + verbo-ing) describe una acción **en progreso** en un momento del pasado."},
  {ex:[["At eight o'clock I was having dinner.","A las ocho estaba cenando."],["They were watching TV.","Estaban viendo TV."],["It was raining all day.","Estuvo lloviendo todo el día."]]},
  {p:"Se combina con el pasado simple: la acción larga va en pasado continuo y la que la **interrumpe** en pasado simple. Se usan **when** y **while**:"},
  {ex:[["I was cooking when the phone rang.","Estaba cocinando cuando sonó el teléfono."],["While we were walking, it started to rain.","Mientras caminábamos, empezó a llover."],["What were you doing at 10 p.m.?","¿Qué estabas haciendo a las 10 p.m.?"]]},
  {tip:"While va con la acción larga (pasado continuo); when suele ir con la acción corta (pasado simple)."}
 ],
 vocab:[
  ["was / were + -ing","expresión","estaba / estaban + -ando, -iendo","I was sleeping."],["while","conjunción","mientras","While I was cooking, he called."],
  ["when","conjunción","cuando","I was driving when it happened."],["at that moment","expresión","en ese momento","At that moment, the lights went out."],
  ["ring / rang","verbo","sonar / sonó","The phone rang."],["fall / fell","verbo","caer / cayó","I fell off my bike."],
  ["break / broke","verbo","romper / rompió","I broke a glass."],["hurt","verbo","lastimar(se), doler","I hurt my leg."],
  ["accident","sustantivo","accidente","I saw an accident."],["crash","verbo / sustantivo","chocar; choque","Two cars crashed."],
  ["power cut","sustantivo","corte de luz","There was a power cut."],["noise","sustantivo","ruido","I heard a noise."],
  ["shout","verbo","gritar","Somebody shouted."],["run away","verbo","salir corriendo","The thief ran away."],
  ["thief","sustantivo","ladrón","The police caught the thief."],["police","sustantivo","policía","I called the police."],
  ["witness","sustantivo","testigo","Were you a witness?"],["drive past","verbo","pasar (en carro)","I was driving past the bank."],
  ["wait for","verbo","esperar a","I was waiting for the bus."],["luckily","adverbio","por suerte","Luckily, nobody was hurt."]
 ],
 dialogue:{title:"Testigo de un accidente", scene:"Un policía le hace preguntas a Daniela, que vio un accidente en la calle.", a:"Policía", b:"Daniela", lines:[
  ["A","Good afternoon. Did you see the accident?","Buenas tardes. ¿Vio el accidente?"],
  ["B","Yes, I did. I was waiting for the bus at the corner.","Sí. Estaba esperando el bus en la esquina."],
  ["A","What time was it?","¿Qué hora era?"],
  ["B","It was about three o'clock. It was raining a lot.","Eran como las tres. Estaba lloviendo mucho."],
  ["A","What happened exactly?","¿Qué pasó exactamente?"],
  ["B","A blue car was driving very fast when the traffic light changed to red.","Un carro azul iba muy rápido cuando el semáforo cambió a rojo."],
  ["A","And the other car?","¿Y el otro carro?"],
  ["B","A white taxi was crossing the street. The blue car crashed into it.","Un taxi blanco estaba cruzando la calle. El carro azul se estrelló contra él."],
  ["A","Was the driver of the blue car talking on the phone?","¿El conductor del carro azul iba hablando por celular?"],
  ["B","I think so. He was holding his phone when he got out of the car.","Creo que sí. Tenía el celular en la mano cuando se bajó del carro."],
  ["A","Was anybody hurt?","¿Alguien salió herido?"],
  ["B","Luckily, no. The taxi driver hurt his arm a little, but he was OK.","Por suerte, no. El taxista se lastimó un poco el brazo, pero estaba bien."]
 ]},
 practice:[
  {t:"mc",q:"I ___ dinner when you called.",o:["had","was having","have","am having"],a:1},
  {t:"mc",q:"While they ___ TV, the lights went out.",o:["watched","were watching","was watching","watch"],a:1},
  {t:"mc",q:"She was driving when the phone ___.",o:["was ringing","rang","rings","ring"],a:1},
  {t:"fill",q:"What ___ you doing at 9 p.m. yesterday?",ans:["were"]},
  {t:"listen",say:"I was walking home when I saw my old teacher. She was shopping.",q:"¿Qué estaba haciendo la profesora?",o:["Caminando","Comprando","Manejando","Esperando el bus"],a:1},
  {t:"oral",text:"I was cooking when my phone rang."}
 ],
 more:[
  {t:"order",words:["It","was","raining","when","we","left."],es:"Estaba lloviendo cuando salimos."},
  {t:"order",words:["While","I","was","sleeping,","the","phone","rang."],es:"Mientras dormía, sonó el teléfono."},
  {t:"dict",say:"I was waiting for the bus when it happened."},
  {t:"dict",say:"Luckily, nobody was hurt."},
  {t:"mc",q:"They ___ playing football when it started to rain.",o:["was","were","did","are"],a:1},
  {t:"fill",q:"I ___ (fall) while I was running.",ans:["fell"]},
  {t:"listen",say:"While I was cooking, my son was doing his homework and my husband was sleeping.",q:"¿Qué hacía el esposo?",o:["Cocinando","Haciendo tarea","Durmiendo","Viendo TV"],a:2},
  {t:"oral",text:"While I was walking in the park, it started to rain."}
 ],
 exam:{t:"mc",q:"At 7 a.m. yesterday I ___ a shower.",o:["took","was taking","take","were taking"],a:1},
 exam2:{t:"mc",q:"I broke my leg while I ___.",o:["skied","was skiing","ski","were skiing"],a:1}
}
],
quiz:[
 {t:"mc",q:"We ___ a great time at the party.",o:["have","had","has","haved"],a:1},
 {t:"mc",q:"Did you ___ the email?",o:["sent","send","sended","sending"],a:1},
 {t:"mc",q:"I met my best friend twenty years ___.",o:["ago","before","last","later"],a:0},
 {t:"mc",q:"She ___ when I arrived.",o:["slept","was sleeping","sleeps","were sleeping"],a:1},
 {t:"mc",q:"El pasado de buy es:",o:["buyed","bought","brought","bougth"],a:1},
 {t:"fill",q:"They ___ (not / go) to work yesterday.",ans:["didn't go","did not go"]},
 {t:"listen",say:"Last weekend we went camping. On Saturday it rained, but on Sunday it was sunny.",q:"¿Cómo estuvo el domingo?",o:["Lluvioso","Soleado","Frío","Nublado"],a:1},
 {t:"listen",say:"I was reading in the living room when I heard a strange noise in the kitchen.",q:"¿Dónde escuchó el ruido?",o:["En la sala","En la cocina","En el baño","Afuera"],a:1},
 {t:"write",q:"Cuenta qué hiciste el fin de semana pasado (mínimo 40 palabras). Usa verbos irregulares y al menos un pasado continuo.",min:40,keys:[["went","had","saw","ate","bought","took","made","met"],["was","were"],["ing"],["then","after that","first","finally"]]},
 {t:"oral",text:"Last weekend I visited my parents and we had lunch together."},
 {t:"oral",text:"What were you doing at eight o'clock last night?"}
],
pool:[
 {t:"mc",q:"I ___ my keys yesterday, but then I found them.",o:["lose","lost","losed","was losing"],a:1},
 {t:"mc",q:"Where ___ you born?",o:["did","were","was","are"],a:1},
 {t:"mc",q:"He didn't ___ the answer.",o:["knew","know","known","knows"],a:1},
 {t:"mc",q:"While she was cooking, the baby ___.",o:["was crying","cried","cries","cry"],a:1},
 {t:"mc",q:"'Antier' en inglés es:",o:["the day before yesterday","two days later","last two days","yesterday ago"],a:0},
 {t:"mc",q:"First we had lunch, ___ we went to the cinema.",o:["finally","then","suddenly","ago"],a:1},
 {t:"fill",q:"I ___ (write) three emails this morning.",ans:["wrote"]},
 {t:"fill",q:"___ you enjoy the concert?",ans:["did"]},
 {t:"listen",say:"I grew up in Pasto, but I moved to Bogotá when I was eighteen.",q:"¿A qué edad se mudó a Bogotá?",o:["8","18","28","Nunca"],a:1},
 {t:"listen",say:"We didn't see the beginning of the movie because we arrived late.",q:"¿Por qué no vieron el comienzo?",o:["Se durmieron","Llegaron tarde","No había boletas","Se fue la luz"],a:1},
 {t:"listen",say:"At midnight everybody was dancing, but my grandmother was sleeping on the sofa.",q:"¿Qué hacía la abuela?",o:["Bailando","Durmiendo","Cocinando","Cantando"],a:1},
 {t:"write",q:"Escribe sobre un día de tu infancia que recuerdes (mínimo 40 palabras). Usa when I was a child y verbos en pasado.",min:40,keys:[["when i was"],["ed","went","had","was","were"],["first","then","after that","finally","suddenly"]]},
 {t:"oral",text:"I grew up in a small town and I moved to the city ten years ago."},
 {t:"oral",text:"I didn't go to work yesterday because I was sick."},
 {t:"oral",text:"While I was driving, it started to rain."}
]
};
