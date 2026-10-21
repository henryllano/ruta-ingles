module.exports = {
title: "Contar historias",
lessons: [
{ id:"b1-u1-l1", title:"Pasado simple y pasado continuo en historias", goal:"Combinar los dos pasados para dar contexto y acción a una historia.",
 theory:[
  {p:"En una narración, el **pasado continuo** pinta el **escenario** (lo que estaba pasando) y el **pasado simple** cuenta los **hechos** principales."},
  {ex:[["It was raining and people were hurrying home when I saw her.","Llovía y la gente se apuraba a casa cuando la vi."],["I was reading when the lights went out.","Estaba leyendo cuando se fue la luz."],["While she was cooking, he set the table.","Mientras ella cocinaba, él puso la mesa."]]},
  {p:"Dos acciones en **pasado continuo** con while = pasaban **al mismo tiempo**. Varias en **pasado simple** = pasaron **una tras otra**."},
  {ex:[["When the phone rang, I answered it. (primero sonó, luego contesté)","Cuando sonó el teléfono, contesté."],["When the phone rang, I was having a shower. (ya me estaba bañando)","Cuando sonó el teléfono, me estaba bañando."]]},
  {tip:"Los verbos de estado (know, want, like, believe) casi nunca van en continuo: I didn't know (no 'I wasn't knowing')."}
 ],
 vocab:[
  ["set the scene","expresión","describir el escenario","Start by setting the scene."],["hurry","verbo","apurarse","Everyone was hurrying home."],
  ["notice","verbo","notar, fijarse en","I noticed a man in a black coat."],["realize","verbo","darse cuenta","I realized I was lost."],
  ["recognize","verbo","reconocer","I didn't recognize her at first."],["drop","verbo","dejar caer","She dropped her keys."],
  ["pick up","verbo","recoger (del suelo)","He picked up the wallet."],["run after","verbo","correr detrás de","I ran after the thief."],
  ["shout","verbo","gritar","Someone shouted my name."],["stare at","verbo","mirar fijamente","Everyone was staring at us."],
  ["whisper","verbo","susurrar","She whispered something."],["gloomy","adjetivo","sombrío, triste","It was a gloomy afternoon."],
  ["crowded","adjetivo","lleno de gente","The square was crowded."],["empty","adjetivo","vacío","The street was empty."],
  ["at first","expresión","al principio","At first, I didn't understand."],["all of a sudden","expresión","de repente","All of a sudden, the music stopped."],
  ["meanwhile","adverbio","mientras tanto","Meanwhile, the police arrived."],["at that moment","expresión","en ese momento","At that moment, I saw him."],
  ["by chance","expresión","por casualidad","We met by chance."],["coincidence","sustantivo","coincidencia","What a coincidence!"]
 ],
 dialogue:{title:"Un encuentro inesperado", scene:"Valeria le cuenta a su compañero Owen algo que le pasó en el metro.", a:"Owen", b:"Valeria", lines:[
  ["A","You look surprised. What happened?","Te ves sorprendida. ¿Qué pasó?"],
  ["B","You won't believe it. I was going home on the metro yesterday, and it was really crowded.","No me lo vas a creer. Ayer iba para la casa en el metro, y estaba lleno."],
  ["A","OK...","Ajá..."],
  ["B","I was standing near the door and reading on my phone when a man dropped his wallet.","Estaba parada cerca de la puerta leyendo en el celular cuando un señor dejó caer su billetera."],
  ["A","Did you pick it up?","¿La recogiste?"],
  ["B","Yes. While I was picking it up, the doors opened and he got off.","Sí. Mientras la recogía, se abrieron las puertas y él se bajó."],
  ["A","Oh no! What did you do?","¡Ay no! ¿Qué hiciste?"],
  ["B","I ran after him and shouted, 'Sir, your wallet!' Everyone was staring at me.","Corrí detrás de él y grité: '¡Señor, su billetera!'. Todos me miraban."],
  ["A","Ha ha! Did he hear you?","¡Ja, ja! ¿Te escuchó?"],
  ["B","He turned around, and at that moment I recognized him. It was my old English teacher from school!","Se dio vuelta, y en ese momento lo reconocí. ¡Era mi antiguo profesor de inglés del colegio!"],
  ["A","No way! What a coincidence!","¡No puede ser! ¡Qué coincidencia!"],
  ["B","At first he didn't recognize me, but then he laughed and invited me for a coffee. We talked for two hours!","Al principio no me reconoció, pero luego se rió y me invitó a un café. ¡Hablamos dos horas!"]
 ]},
 practice:[
  {t:"mc",q:"I ___ TV when I heard a strange noise.",o:["watched","was watching","have watched","watch"],a:1},
  {t:"mc",q:"When the alarm rang, everyone ___ the building.",o:["was leaving","left","leaves","had leave"],a:1,x:"Primero sonó, luego salieron → pasado simple."},
  {t:"mc",q:"While I ___ dinner, my husband was helping the kids.",o:["cooked","was cooking","cook","have cooked"],a:1},
  {t:"fill",q:"At first I didn't ___ her because she had short hair. (reconocí)",ans:["recognize","recognise"]},
  {t:"listen",say:"It was a gloomy afternoon. The street was empty, and I was walking home when all of a sudden someone called my name.",q:"¿Cómo estaba la calle?",o:["Llena de gente","Vacía","Con mucho tráfico","Mojada"],a:1},
  {t:"oral",text:"I was reading on the metro when a man dropped his wallet."}
 ],
 more:[
  {t:"order",words:["While","we","were","talking,","the","lights","went","out."],es:"Mientras hablábamos, se fue la luz."},
  {t:"order",words:["We","met","by","chance","at","the","airport."],es:"Nos encontramos por casualidad en el aeropuerto."},
  {t:"dict",say:"Everyone was staring at us."},
  {t:"dict",say:"All of a sudden, the music stopped."},
  {t:"mc",q:"¿Cuál está bien?",o:["I wasn't knowing the answer.","I didn't know the answer.","I wasn't know the answer.","I not knew the answer."],a:1},
  {t:"mc",q:"'Mientras tanto' es:",o:["meanwhile","at first","by chance","suddenly"],a:0},
  {t:"listen",say:"When I got to the party, my friends were dancing and my sister was singing karaoke.",q:"¿Qué hacía la hermana?",o:["Bailando","Cantando karaoke","Cocinando","Hablando"],a:1},
  {t:"write",q:"Cuenta una historia corta de algo inesperado que te pasó (mínimo 60 palabras). Describe el escenario con pasado continuo y los hechos con pasado simple.",min:60,keys:[["was","were"],["ing"],["when","while"],["suddenly","all of a sudden","at that moment","at first"]]}
 ],
 exam:{t:"mc",q:"I ___ in the park when I saw an old friend.",o:["walked","was walking","have walked","had walk"],a:1},
 exam2:{t:"mc",q:"While she was driving, she ___ a strange noise.",o:["was hearing","heard","hears","has heard"],a:1}
},
{ id:"b1-u1-l2", title:"Used to y would: hábitos del pasado", goal:"Hablar de cómo era tu vida antes y qué ha cambiado.",
 theory:[
  {p:"**used to + verbo** describe **hábitos o estados** del pasado que ya no existen."},
  {ex:[["I used to play football every weekend.","Antes jugaba fútbol todos los fines de semana."],["She used to have long hair.","Ella antes tenía el pelo largo."],["We didn't use to have a car.","Antes no teníamos carro."],["Did you use to live here?","¿Antes vivías aquí?"]]},
  {p:"**would + verbo** también describe **acciones repetidas** del pasado (no estados), muy usado en recuerdos:"},
  {ex:[["Every summer, we would go to my grandparents' farm.","Cada verano íbamos a la finca de mis abuelos."],["My grandmother would tell us stories.","Mi abuela nos contaba historias."]]},
  {tip:"En negativas y preguntas se escribe use to (sin d): Did you use to...? / I didn't use to... Con estados (be, have, live, like) usa used to, no would."}
 ],
 vocab:[
  ["used to","expresión","solía, antes (+ verbo)","I used to smoke."],["didn't use to","expresión","antes no","I didn't use to like coffee."],
  ["would","verbo modal","(hábito del pasado) solía","We would play outside all day."],["childhood","sustantivo","infancia","I had a happy childhood."],
  ["nowadays","adverbio","hoy en día","Nowadays, kids play video games."],["these days","expresión","estos días, hoy en día","These days I work from home."],
  ["any more / anymore","adverbio","ya no","I don't smoke anymore."],["no longer","expresión","ya no","He no longer lives here."],
  ["grow up","verbo","crecer, criarse","I grew up on a farm."],["neighborhood","sustantivo","barrio","Our neighborhood was safe."],
  ["play outside","expresión","jugar afuera","We used to play outside."],["climb trees","expresión","trepar árboles","I used to climb trees."],
  ["landline","sustantivo","teléfono fijo","We used to have a landline."],["cassette","sustantivo","casete","I used to listen to cassettes."],
  ["strict","adjetivo","estricto","My father was very strict."],["spoil","verbo","consentir, malcriar","My grandma used to spoil me."],
  ["miss","verbo","extrañar","I miss those days."],["memories","sustantivo","recuerdos","I have great memories."],
  ["remember","verbo","recordar","Do you remember our school?"],["change","verbo / sustantivo","cambiar; cambio","Things have changed a lot."]
 ],
 dialogue:{title:"¿Cómo era la vida antes?", scene:"Lina entrevista a su abuelo Hernán para una tarea del colegio sobre cómo era la vida antes.", a:"Lina", b:"Abuelo", lines:[
  ["A","Grandpa, what did you use to do when you were my age?","Abuelo, ¿qué hacías cuando tenías mi edad?"],
  ["B","Well, we didn't use to have TV at home, so we would play outside all day.","Bueno, no teníamos televisor en la casa, así que jugábamos afuera todo el día."],
  ["A","All day? Didn't you use to do homework?","¿Todo el día? ¿No hacían tareas?"],
  ["B","Of course! My mother was very strict. We would do homework first and then go out.","¡Claro! Mi mamá era muy estricta. Hacíamos tareas primero y luego salíamos."],
  ["A","What games did you use to play?","¿A qué jugaban?"],
  ["B","We used to play football in the street and climb trees. Nowadays kids only play video games.","Jugábamos fútbol en la calle y trepábamos árboles. Hoy en día los niños solo juegan videojuegos."],
  ["A","Hey, I play outside too! How did you use to talk to your friends?","¡Oye, yo también juego afuera! ¿Cómo hablabas con tus amigos?"],
  ["B","We used to have a landline, but we would usually just knock on their door.","Teníamos teléfono fijo, pero normalmente íbamos y les tocábamos la puerta."],
  ["A","Did you use to listen to music?","¿Escuchabas música?"],
  ["B","Yes, on the radio. On Sundays, my father would dance with my mother in the kitchen.","Sí, en la radio. Los domingos mi papá bailaba con mi mamá en la cocina."],
  ["A","That's so sweet. Do you miss those days?","¡Qué lindo! ¿Extrañas esa época?"],
  ["B","Sometimes. I have wonderful memories, but I don't miss washing clothes by hand!","A veces. Tengo recuerdos maravillosos, ¡pero no extraño lavar la ropa a mano!"]
 ]},
 practice:[
  {t:"mc",q:"I ___ smoke, but I quit five years ago.",o:["use to","used to","was used to","would to"],a:1},
  {t:"mc",q:"Did you ___ live in Cali?",o:["used to","use to","using to","used"],a:1},
  {t:"mc",q:"Con estados (be, have) se usa:",o:["would","used to","los dos","ninguno"],a:1},
  {t:"fill",q:"I don't eat meat ___. (ya no, al final)",ans:["anymore","any more"]},
  {t:"listen",say:"When I was a child, my grandmother would make arepas every morning, and we would eat them with hot chocolate.",q:"¿Qué tomaban con las arepas?",o:["Café","Chocolate caliente","Jugo","Leche"],a:1},
  {t:"oral",text:"I used to play football every weekend, but now I don't have time."}
 ],
 more:[
  {t:"order",words:["We","didn't","use","to","have","a","car."],es:"Antes no teníamos carro."},
  {t:"order",words:["He","no","longer","lives","here."],es:"Él ya no vive aquí."},
  {t:"dict",say:"My grandmother used to spoil me."},
  {t:"dict",say:"I have wonderful memories of my childhood."},
  {t:"mc",q:"'Hoy en día' es:",o:["nowadays","no longer","used to","any more"],a:0},
  {t:"fill",q:"Every Sunday we ___ visit my aunt. (would, hábito)",ans:["would"]},
  {t:"listen",say:"I used to be very shy, but since I started working in sales, I've become much more confident.",q:"¿Cómo era antes?",o:["Muy extrovertido","Muy tímido","Muy estricto","Muy perezoso"],a:1},
  {t:"write",q:"Compara tu vida de niño con tu vida de ahora (mínimo 60 palabras). Usa used to, didn't use to, would y nowadays.",min:60,keys:[["used to"],["didn't use to","did not use to"],["would"],["nowadays","now","these days","anymore","no longer"]]}
 ],
 exam:{t:"mc",q:"My father ___ have a beard, but he shaved it off.",o:["would","used to","use to","was used"],a:1},
 exam2:{t:"mc",q:"I ___ to like vegetables, but now I love them.",o:["didn't use","didn't used","wasn't use","not used"],a:0}
},
{ id:"b1-u1-l3", title:"Pasado perfecto", goal:"Decir qué había pasado antes de otro momento del pasado.",
 theory:[
  {p:"El **pasado perfecto** (**had + participio**) indica que algo pasó **antes** de otra acción pasada."},
  {ex:[["When I arrived, the train had left.","Cuando llegué, el tren ya se había ido."],["She was nervous because she had never flown before.","Estaba nerviosa porque nunca había volado."],["I realized I had forgotten my passport.","Me di cuenta de que había olvidado el pasaporte."]]},
  {p:"Compara: **When I arrived, the film started.** (llegué y luego empezó) / **When I arrived, the film had started.** (ya había empezado cuando llegué)."},
  {p:"Se usa mucho con **already, just, never, before, by the time** y **after**."},
  {ex:[["By the time we got there, everyone had gone home.","Para cuando llegamos, todos se habían ido."],["After she had finished, she went to bed.","Después de terminar, se fue a dormir."]]},
  {tip:"La contracción de had es 'd: I'd forgotten. No la confundas con would: I'd like."}
 ],
 vocab:[
  ["had + participio","expresión","había + participio","I had finished."],["by the time","expresión","para cuando","By the time I arrived, she had left."],
  ["already","adverbio","ya","The film had already started."],["before","adverbio","antes","I had never been there before."],
  ["forget / forgot / forgotten","verbo","olvidar","I'd forgotten my keys."],["leave / left / left","verbo","irse; dejar","The bus had left."],
  ["sell out","verbo","agotarse","The tickets had sold out."],["break down","verbo","dañarse (máquina)","The car had broken down."],
  ["lock","verbo","cerrar con llave","I had locked the door."],["shut","verbo","cerrar","The shop had shut."],
  ["boarding gate","sustantivo","puerta de embarque","The gate had closed."],["missed","verbo (pasado)","perdí, perdió","I missed the flight."],
  ["fortunately","adverbio","afortunadamente","Fortunately, someone had found it."],["unfortunately","adverbio","desafortunadamente","Unfortunately, it had closed."],
  ["disaster","sustantivo","desastre","The trip was a disaster."],["mess","sustantivo","desorden, lío","The house was a mess."],
  ["burgle","verbo","robar (una casa)","Our house had been burgled."],["previous","adjetivo","anterior","The previous day it had rained."],
  ["realize","verbo","darse cuenta","I realized what had happened."],["explain","verbo","explicar","He explained what had happened."]
 ],
 dialogue:{title:"Un viaje desastroso", scene:"Andrés le cuenta a su amiga Kim cómo le fue en su viaje a Nueva York.", a:"Kim", b:"Andrés", lines:[
  ["A","How was your trip to New York?","¿Cómo te fue en tu viaje a Nueva York?"],
  ["B","It started as a disaster! When we got to the airport, we realized we had forgotten our passports.","¡Empezó como un desastre! Cuando llegamos al aeropuerto, nos dimos cuenta de que habíamos olvidado los pasaportes."],
  ["A","Oh no! What did you do?","¡Ay no! ¿Qué hicieron?"],
  ["B","We took a taxi home, but by the time we came back, the boarding gate had closed.","Tomamos un taxi a la casa, pero para cuando volvimos, la puerta de embarque había cerrado."],
  ["A","So you missed the flight?","¿Entonces perdieron el vuelo?"],
  ["B","Yes. Fortunately, the airline put us on the next flight. But when we arrived, our hotel had given our room to someone else.","Sí. Afortunadamente, la aerolínea nos puso en el siguiente vuelo. Pero cuando llegamos, el hotel le había dado nuestra habitación a otra persona."],
  ["A","Seriously? Hadn't you paid for it?","¿En serio? ¿No la habían pagado?"],
  ["B","We had paid for it, but they said we hadn't confirmed the late arrival.","La habíamos pagado, pero dijeron que no habíamos confirmado la llegada tarde."],
  ["A","What a nightmare. Where did you sleep?","Qué pesadilla. ¿Dónde durmieron?"],
  ["B","They found us another room in a hotel nearby. It was even better than the one we had booked!","Nos encontraron otra habitación en un hotel cercano. ¡Era incluso mejor que la que habíamos reservado!"],
  ["A","So it had a happy ending!","¡Entonces tuvo un final feliz!"],
  ["B","Yes. I had never been so stressed, but the rest of the trip was perfect.","Sí. Nunca había estado tan estresado, pero el resto del viaje fue perfecto."]
 ]},
 practice:[
  {t:"mc",q:"When I got to the cinema, the film ___.",o:["already started","had already started","has already started","was already start"],a:1},
  {t:"mc",q:"She was nervous because she ___ never given a presentation before.",o:["has","had","was","did"],a:1},
  {t:"mc",q:"By the time we arrived, everyone ___ home.",o:["went","had gone","has gone","goes"],a:1},
  {t:"fill",q:"I realized I had ___ (forget) my keys.",ans:["forgotten"]},
  {t:"listen",say:"When the police arrived, the thieves had already escaped through the back door.",q:"¿Qué había pasado cuando llegó la policía?",o:["Atraparon a los ladrones","Los ladrones ya habían escapado","Los ladrones seguían adentro","No había nadie en la casa"],a:1},
  {t:"oral",text:"When I arrived at the station, the train had already left."}
 ],
 more:[
  {t:"order",words:["I","had","never","seen","snow","before."],es:"Nunca había visto nieve antes."},
  {t:"order",words:["The","tickets","had","sold","out."],es:"Las boletas se habían agotado."},
  {t:"dict",say:"By the time I got there, the shop had shut."},
  {t:"dict",say:"Our car had broken down on the highway."},
  {t:"mc",q:"En 'I'd forgotten', 'd significa:",o:["would","had","did","could"],a:1},
  {t:"fill",q:"After she ___ finished her work, she went home.",ans:["had"]},
  {t:"listen",say:"I didn't eat at the party because I had already had dinner at home.",q:"¿Por qué no comió en la fiesta?",o:["No le gustó la comida","Ya había cenado","Estaba enfermo","Llegó tarde"],a:1},
  {t:"write",q:"Cuenta un viaje o un día que salió mal (mínimo 60 palabras). Usa el pasado perfecto al menos tres veces.",min:60,keys:[["had"],["already","never","by the time","before","after"],["when","because"],["realized","found","discovered","noticed"]]}
 ],
 exam:{t:"mc",q:"I couldn't get in because I ___ my keys.",o:["lost","had lost","have lost","was losing"],a:1},
 exam2:{t:"mc",q:"By the time the ambulance arrived, the man ___ up.",o:["already got","had already got","has already got","already gets"],a:1}
},
{ id:"b1-u1-l4", title:"Conectores para narrar", goal:"Hacer tus historias más fluidas con conectores de tiempo y secuencia.",
 theory:[
  {p:"Los **conectores** organizan la historia y la hacen más natural:"},
  {ex:[["as soon as","tan pronto como: As soon as I saw him, I knew something was wrong."],["while / as","mientras: As I was leaving, the phone rang."],["during + sustantivo","durante: During the meeting, she fell asleep."],["eventually","al final, con el tiempo: Eventually, we found the hotel."],["until","hasta (que): We waited until the rain stopped."],["once","una vez que: Once we had paid, we left."]]},
  {p:"Para el **principio** y el **final** de una historia: **It all started when...**, **To cut a long story short...** (en pocas palabras), **In the end...**, **Looking back...** (en retrospectiva)."},
  {tip:"During va con un sustantivo (during the trip); while va con una frase (while we were travelling)."}
 ],
 vocab:[
  ["as soon as","expresión","tan pronto como","Call me as soon as you arrive."],["as","conjunción","mientras; como","As I was walking, I saw her."],
  ["during","preposición","durante","During the flight, I slept."],["eventually","adverbio","al final, finalmente","Eventually, he agreed."],
  ["until","conjunción","hasta (que)","Wait until I come back."],["once","conjunción","una vez que","Once you finish, call me."],
  ["afterwards","adverbio","después, luego","Afterwards, we had dinner."],["beforehand","adverbio","de antemano","I had prepared beforehand."],
  ["in the meantime","expresión","mientras tanto","In the meantime, relax."],["it all started when","expresión","todo empezó cuando","It all started when I lost my job."],
  ["to cut a long story short","expresión","en resumidas cuentas","To cut a long story short, we got married."],["looking back","expresión","en retrospectiva","Looking back, it was a good decision."],
  ["turn out","verbo","resultar","It turned out to be a great day."],["in the end","expresión","al final","In the end, everything was fine."],
  ["just in time","expresión","justo a tiempo","We arrived just in time."],["at last","expresión","por fin","At last, we were home."],
  ["get stuck","expresión","quedarse atrapado","We got stuck in traffic."],["run out of","verbo","quedarse sin","We ran out of gas."],
  ["set off","verbo","salir (de viaje)","We set off at dawn."],["dawn","sustantivo","amanecer","We left at dawn."]
 ],
 dialogue:{title:"El viaje en carro a la costa", scene:"Camilo le cuenta a su compañera Ruth sobre un viaje en carretera con su familia.", a:"Ruth", b:"Camilo", lines:[
  ["A","How was the road trip to Santa Marta?","¿Cómo estuvo el viaje en carro a Santa Marta?"],
  ["B","An adventure! It all started when we set off at dawn on Friday.","¡Una aventura! Todo empezó cuando salimos al amanecer el viernes."],
  ["A","Early start! Was there much traffic?","¡Qué madrugada! ¿Había mucho tráfico?"],
  ["B","Not at first. But during the second hour, we got stuck behind an accident for three hours.","Al principio no. Pero durante la segunda hora, quedamos atrapados detrás de un accidente por tres horas."],
  ["A","Three hours! What did you do in the meantime?","¡Tres horas! ¿Qué hicieron mientras tanto?"],
  ["B","The kids played games, and I slept. As soon as the road opened, we continued.","Los niños jugaron y yo dormí. Tan pronto abrieron la vía, seguimos."],
  ["A","And did you arrive on time?","¿Y llegaron a tiempo?"],
  ["B","No! As we were driving through the mountains, we ran out of gas.","¡No! Mientras atravesábamos las montañas, nos quedamos sin gasolina."],
  ["A","Oh no! In the middle of nowhere?","¡Ay no! ¿En la mitad de la nada?"],
  ["B","Yes. We waited until a truck driver stopped and helped us. Eventually, we found a gas station.","Sí. Esperamos hasta que un camionero paró y nos ayudó. Al final encontramos una bomba."],
  ["A","So, to cut a long story short...","Entonces, en resumidas cuentas..."],
  ["B","To cut a long story short, we arrived at midnight. But looking back, it turned out to be a funny story!","En resumidas cuentas, llegamos a medianoche. ¡Pero en retrospectiva, resultó ser una historia chistosa!"]
 ]},
 practice:[
  {t:"mc",q:"___ the flight, I watched two movies.",o:["While","During","As soon as","Until"],a:1},
  {t:"mc",q:"I'll call you ___ I land.",o:["during","as soon as","until","eventually"],a:1},
  {t:"mc",q:"We waited ___ the rain stopped.",o:["during","until","as","once"],a:1},
  {t:"fill",q:"We ran out ___ gas in the mountains.",ans:["of"]},
  {t:"listen",say:"We looked for the hotel for two hours. Eventually, a kind woman showed us the way.",q:"¿Qué pasó al final?",o:["Durmieron en el carro","Una señora les mostró el camino","Llamaron a la policía","Encontraron otro hotel"],a:1},
  {t:"oral",text:"To cut a long story short, we arrived just in time."}
 ],
 more:[
  {t:"order",words:["It","turned","out","to","be","a","great","day."],es:"Resultó ser un gran día."},
  {t:"order",words:["As","soon","as","I","saw","him,","I","knew."],es:"Tan pronto lo vi, supe."},
  {t:"dict",say:"We got stuck in traffic for three hours."},
  {t:"dict",say:"Looking back, it was the right decision."},
  {t:"mc",q:"¿Cuál está bien?",o:["During we were travelling...","While the trip...","During the trip...","While of the trip..."],a:2},
  {t:"fill",q:"At ___, we were home! (por fin)",ans:["last"]},
  {t:"listen",say:"Once we had checked in, we went straight to the beach and stayed there until sunset.",q:"¿Hasta cuándo se quedaron en la playa?",o:["Mediodía","El atardecer","La medianoche","El amanecer"],a:1},
  {t:"write",q:"Cuenta un viaje o un día complicado usando al menos 5 conectores de esta lección (mínimo 70 palabras).",min:70,keys:[["it all started","at first","first"],["as soon as","while","as","during"],["until","eventually","in the meantime","afterwards"],["to cut a long story short","in the end","looking back","at last"]]}
 ],
 exam:{t:"mc",q:"Please wait here ___ I come back.",o:["during","until","as soon","once that"],a:1},
 exam2:{t:"mc",q:"We searched for hours and ___ we found the keys.",o:["eventually","during","until","as soon as"],a:0}
},
{ id:"b1-u1-l5", title:"Contar anécdotas y reaccionar", goal:"Contar una anécdota con emoción y reaccionar a la de otros.",
 theory:[
  {p:"Al escuchar una historia, en inglés se **reacciona** mucho para mostrar interés:"},
  {ex:[["Really? / No way!","¿En serio? / ¡No puede ser!"],["You're kidding!","¡Me estás tomando del pelo!"],["Oh no! That's awful!","¡Ay no! ¡Qué horror!"],["That's amazing! / Lucky you!","¡Increíble! / ¡Qué suerte!"],["And then what happened?","¿Y luego qué pasó?"],["I can't believe it!","¡No lo puedo creer!"]]},
  {p:"Para **contar** con más emoción usa **adjetivos fuertes** e intensificadores: absolutely terrified, really exhausted, so embarrassing, such a nice day."},
  {ex:[["I was absolutely terrified!","¡Estaba aterrorizado!"],["It was so embarrassing!","¡Fue tan vergonzoso!"],["It was such a funny night!","¡Fue una noche tan divertida!"]]},
  {tip:"so + adjetivo (so funny); such + a + adjetivo + sustantivo (such a funny story). Con adjetivos fuertes (terrified, amazing, awful) se usa absolutely, no very."}
 ],
 vocab:[
  ["anecdote","sustantivo","anécdota","He told a funny anecdote."],["No way!","interjección","¡No puede ser!","No way! Really?"],
  ["You're kidding!","expresión","¡No me digas! ¡Bromeas!","You won the lottery? You're kidding!"],["awful","adjetivo","horrible","That's awful!"],
  ["terrified","adjetivo","aterrorizado","I was terrified."],["exhausted","adjetivo","agotado","We were exhausted."],
  ["furious","adjetivo","furioso","My boss was furious."],["delighted","adjetivo","encantado, feliz","She was delighted."],
  ["embarrassing","adjetivo","vergonzoso","It was so embarrassing."],["hilarious","adjetivo","comiquísimo","The movie was hilarious."],
  ["absolutely","adverbio","totalmente (con adjetivos fuertes)","It was absolutely amazing."],["such","determinante","tan, tal","Such a nice day!"],
  ["blush","verbo","sonrojarse","I blushed."],["burst out laughing","expresión","echarse a reír","Everyone burst out laughing."],
  ["trip over","verbo","tropezarse con","I tripped over a cable."],["spill","verbo","derramar","I spilled coffee on my boss."],
  ["get the wrong idea","expresión","malinterpretar","She got the wrong idea."],["What happened next?","expresión","¿Qué pasó después?","And what happened next?"],
  ["I can't believe it!","expresión","¡No lo puedo creer!","I can't believe it!"],["Lucky you!","expresión","¡Qué suerte tienes!","You got the job? Lucky you!"]
 ],
 dialogue:{title:"La entrevista más vergonzosa", scene:"En una reunión, Sebastián le cuenta a su amiga Holly una anécdota vergonzosa.", a:"Holly", b:"Sebastián", lines:[
  ["A","What's the most embarrassing thing that's ever happened to you?","¿Qué es lo más vergonzoso que te ha pasado?"],
  ["B","Oh, I have the perfect story. It was during a job interview.","Uy, tengo la historia perfecta. Fue en una entrevista de trabajo."],
  ["A","Oh no. What happened?","Ay no. ¿Qué pasó?"],
  ["B","I was so nervous. As I was walking into the office, I tripped over a cable.","Estaba muy nervioso. Mientras entraba a la oficina, me tropecé con un cable."],
  ["A","No way! Did you fall?","¡No puede ser! ¿Te caíste?"],
  ["B","Worse. I fell onto the table and spilled coffee all over the manager's papers.","Peor. Me caí sobre la mesa y le regué café a todos los papeles del gerente."],
  ["A","You're kidding! That's awful!","¡No me digas! ¡Qué horror!"],
  ["B","I was absolutely terrified. My face was completely red.","Estaba aterrorizado. Tenía la cara completamente roja."],
  ["A","And then what happened?","¿Y luego qué pasó?"],
  ["B","There was a long silence, and then the manager burst out laughing. He said it was such a great way to break the ice.","Hubo un silencio largo y luego el gerente se echó a reír. Dijo que era una forma genial de romper el hielo."],
  ["A","Ha ha! So did you get the job?","¡Ja, ja! ¿Y te dieron el trabajo?"],
  ["B","I did! I've worked there for five years now. He still tells everyone the story!","¡Sí! Ya llevo cinco años trabajando ahí. ¡Todavía le cuenta la historia a todo el mundo!"]
 ]},
 practice:[
  {t:"mc",q:"It was ___ a funny night!",o:["so","such","very","too"],a:1},
  {t:"mc",q:"The film was ___ amazing.",o:["very","absolutely","a bit","such"],a:1,x:"Con adjetivos fuertes se usa absolutely."},
  {t:"mc",q:"Reaccionas a una buena noticia:",o:["That's awful!","Lucky you!","Oh no!","What a pity!"],a:1},
  {t:"fill",q:"I tripped ___ a cable and fell. (con)",ans:["over"]},
  {t:"listen",say:"I spilled red wine on my mother-in-law's white dress at her birthday party. It was so embarrassing!",q:"¿Qué le pasó?",o:["Rompió un vaso","Le regó vino a su suegra","Llegó tarde","Olvidó el regalo"],a:1},
  {t:"oral",text:"No way! You're kidding! And then what happened?"}
 ],
 more:[
  {t:"order",words:["Everyone","burst","out","laughing."],es:"Todos se echaron a reír."},
  {t:"order",words:["It","was","such","an","embarrassing","day."],es:"Fue un día tan vergonzoso."},
  {t:"dict",say:"I was absolutely terrified."},
  {t:"dict",say:"That's awful! I can't believe it!"},
  {t:"mc",q:"'Comiquísimo' es:",o:["hilarious","furious","awful","delighted"],a:0},
  {t:"mc",q:"Cuando alguien te cuenta una mala noticia:",o:["Lucky you!","Oh no, that's awful!","How funny!","Great!"],a:1},
  {t:"listen",say:"My boss was furious because I forgot to send the report, but in the end he said it wasn't a big problem.",q:"¿Cómo estaba el jefe al principio?",o:["Feliz","Furioso","Preocupado","Cansado"],a:1},
  {t:"oral",text:"It was the most embarrassing day of my life."}
 ],
 exam:{t:"mc",q:"—I won a trip to Paris! —___",o:["That's awful!","Lucky you!","What a pity!","Oh no!"],a:1},
 exam2:{t:"mc",q:"It was ___ cold that we stayed at home.",o:["such","so","such a","very so"],a:1}
}
],
quiz:[
 {t:"mc",q:"I ___ a shower when the doorbell rang.",o:["had","was having","have had","had had"],a:1},
 {t:"mc",q:"We ___ go to the beach every summer when I was a kid.",o:["would","were","had","use"],a:0},
 {t:"mc",q:"When I got to the office, the meeting ___.",o:["already finished","had already finished","has already finished","already finishing"],a:1},
 {t:"mc",q:"___ the concert, my phone rang three times.",o:["While","During","As soon as","Until"],a:1},
 {t:"mc",q:"It was ___ embarrassing!",o:["such","so","such an","very so"],a:1},
 {t:"fill",q:"I didn't ___ to like spicy food. (use)",ans:["use"]},
 {t:"listen",say:"When I opened the door, I realized someone had taken my bicycle.",q:"¿Qué había pasado?",o:["Le robaron la bicicleta","Le dañaron la puerta","Le regalaron una bicicleta","Perdió las llaves"],a:0},
 {t:"listen",say:"As soon as the teacher left the room, the students started talking.",q:"¿Cuándo empezaron a hablar los estudiantes?",o:["Al llegar la profesora","Apenas salió la profesora","Durante el examen","Al final del día"],a:1},
 {t:"write",q:"Cuenta una anécdota de tu infancia (mínimo 70 palabras). Usa used to o would, pasado continuo, pasado perfecto y al menos dos conectores.",min:70,keys:[["used to","would"],["was","were"],["had"],["as soon as","while","during","eventually","until","in the end"]]},
 {t:"oral",text:"I used to be very shy, but now I'm more confident."},
 {t:"oral",text:"When we arrived, the party had already started."}
],
pool:[
 {t:"mc",q:"While I ___, I met an old friend.",o:["shopped","was shopping","had shopped","have shopped"],a:1},
 {t:"mc",q:"My grandparents ___ live on a farm.",o:["would","used to","use to","were used"],a:1},
 {t:"mc",q:"She had never ___ a horse before that day.",o:["rode","ridden","ride","riding"],a:1},
 {t:"mc",q:"We arrived just ___ time for the wedding.",o:["on","in","at","for"],a:1},
 {t:"mc",q:"—I lost my wallet and my phone. —___",o:["Lucky you!","Oh no, that's awful!","How hilarious!","No problem!"],a:1},
 {t:"mc",q:"He no ___ works here.",o:["more","longer","any","never"],a:1},
 {t:"fill",q:"By the ___ I arrived, everyone had left.",ans:["time"]},
 {t:"fill",q:"We waited ___ the store opened.",ans:["until","till"]},
 {t:"listen",say:"I used to work in a bank, but I quit because I wanted to travel the world.",q:"¿Por qué renunció al banco?",o:["Lo despidieron","Quería viajar","Ganaba poco","Se mudó"],a:1},
 {t:"listen",say:"When we got to the restaurant, it had closed, so we ate pizza at home.",q:"¿Qué cenaron?",o:["Comida del restaurante","Pizza en casa","Nada","Hamburguesas"],a:1},
 {t:"listen",say:"While my husband was sleeping, I was watching a horror movie. I was absolutely terrified!",q:"¿Cómo se sentía?",o:["Aburrida","Aterrorizada","Cansada","Feliz"],a:1},
 {t:"write",q:"Cuenta qué hacías los domingos cuando eras niño y qué haces ahora (mínimo 60 palabras).",min:60,keys:[["used to","would"],["nowadays","now","these days"],["anymore","no longer","didn't use to"]]},
 {t:"oral",text:"It all started when I lost my job."},
 {t:"oral",text:"While I was walking home, it started to rain."},
 {t:"oral",text:"I realized I had left my passport at home."}
]
};
