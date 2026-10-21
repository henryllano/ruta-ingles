module.exports = {
title: "Comparar y describir",
lessons: [
{ id:"a2-u2-l1", title:"Comparativos", goal:"Comparar dos personas, cosas o lugares.",
 theory:[
  {p:"Para comparar dos cosas se usa el **comparativo + than**."},
  {p:"Adjetivos cortos (una sílaba): se agrega **-er**: cheap → cheaper, tall → taller. Si terminan en -y: **-ier** (easy → easier). Consonante final después de una vocal se dobla: big → bigger, hot → hotter."},
  {p:"Adjetivos largos (dos sílabas o más): **more** + adjetivo: expensive → more expensive, interesting → more interesting."},
  {ex:[["Bogotá is bigger than Cali.","Bogotá es más grande que Cali."],["This phone is cheaper than that one.","Este celular es más barato que ese."],["English is easier than Chinese.","El inglés es más fácil que el chino."],["The new car is more comfortable.","El carro nuevo es más cómodo."]]},
  {p:"Irregulares: **good → better**, **bad → worse**, **far → farther/further**."},
  {tip:"No mezcles las dos formas: no se dice 'more bigger'. Se dice 'bigger'."}
 ],
 vocab:[
  ["cheaper","adjetivo comparativo","más barato","The bus is cheaper than the taxi."],["more expensive","adjetivo comparativo","más caro","Taxis are more expensive."],
  ["bigger","adjetivo comparativo","más grande","My room is bigger than yours."],["smaller","adjetivo comparativo","más pequeño","This apartment is smaller."],
  ["older","adjetivo comparativo","mayor, más viejo","My brother is older than me."],["younger","adjetivo comparativo","menor, más joven","She is younger than her husband."],
  ["taller","adjetivo comparativo","más alto","He's taller than his father."],["faster","adjetivo comparativo","más rápido","The metro is faster than the bus."],
  ["slower","adjetivo comparativo","más lento","The old computer is slower."],["easier","adjetivo comparativo","más fácil","This exercise is easier."],
  ["harder","adjetivo comparativo","más difícil, más duro","Math is harder than English for me."],["better","adjetivo comparativo","mejor","This restaurant is better."],
  ["worse","adjetivo comparativo","peor","The traffic is worse today."],["more comfortable","adjetivo comparativo","más cómodo","This sofa is more comfortable."],
  ["more interesting","adjetivo comparativo","más interesante","The book is more interesting than the film."],["hotter","adjetivo comparativo","más caliente","Cartagena is hotter than Bogotá."],
  ["than","conjunción","que (en comparaciones)","She's taller than me."],["much / a lot (+ comparativo)","adverbio","mucho (más)","It's much cheaper."],
  ["a bit (+ comparativo)","expresión","un poco (más)","It's a bit bigger."],["one / ones","pronombre","uno / unos (para no repetir)","I prefer the red one."]
 ],
 dialogue:{title:"¿Cuál apartamento escogemos?", scene:"Mario y su esposa Luisa comparan dos apartamentos para arrendar.", a:"Mario", b:"Luisa", lines:[
  ["A","So, which apartment do you prefer, the one downtown or the one in the north?","Entonces, ¿cuál apartamento prefieres, el del centro o el del norte?"],
  ["B","The one in the north is bigger. It has three bedrooms.","El del norte es más grande. Tiene tres habitaciones."],
  ["A","Yes, but it's more expensive. The rent is much higher.","Sí, pero es más caro. El arriendo es mucho más alto."],
  ["B","That's true. But the neighborhood is quieter and safer.","Es verdad. Pero el barrio es más tranquilo y más seguro."],
  ["A","The one downtown is closer to my office. My trip would be shorter.","El del centro está más cerca de mi oficina. Mi trayecto sería más corto."],
  ["B","And the kitchen? I think the kitchen in the north is better.","¿Y la cocina? Creo que la cocina del norte es mejor."],
  ["A","Yes, it's newer and more modern.","Sí, es más nueva y más moderna."],
  ["B","The one downtown is older, and the traffic there is worse.","El del centro es más viejo, y el tráfico allá es peor."],
  ["A","Hmm. But it's a lot cheaper. We can save money.","Mmm. Pero es mucho más barato. Podemos ahorrar."],
  ["B","Money is important, but I want a more comfortable home for the kids.","El dinero es importante, pero quiero un hogar más cómodo para los niños."],
  ["A","OK, you're right. The north one is a better option for the family.","Bueno, tienes razón. El del norte es mejor opción para la familia."],
  ["B","Great! Let's call the owner this afternoon.","¡Genial! Llamemos al dueño esta tarde."]
 ]},
 practice:[
  {t:"mc",q:"My sister is ___ than me.",o:["tall","taller","more tall","tallest"],a:1},
  {t:"mc",q:"This hotel is ___ than the other one.",o:["expensiver","more expensive","most expensive","expensive"],a:1},
  {t:"mc",q:"The weather today is ___ than yesterday. (peor)",o:["badder","worse","more bad","worst"],a:1},
  {t:"fill",q:"English is ___ (easy) than German.",ans:["easier"]},
  {t:"listen",say:"The red dress is cheaper, but the blue one is more beautiful.",q:"¿Cuál vestido es más bonito?",o:["El rojo","El azul","Los dos","Ninguno"],a:1},
  {t:"oral",text:"Bogotá is bigger than Medellín, but Medellín is warmer."}
 ],
 more:[
  {t:"order",words:["The","metro","is","faster","than","the","bus."],es:"El metro es más rápido que el bus."},
  {t:"order",words:["This","book","is","more","interesting","than","the","film."],es:"Este libro es más interesante que la película."},
  {t:"dict",say:"My brother is two years older than me."},
  {t:"dict",say:"This sofa is much more comfortable."},
  {t:"mc",q:"Cartagena is ___ than Bogotá.",o:["hoter","hotter","more hot","hottest"],a:1},
  {t:"fill",q:"I prefer the black shoes. They're ___ (good) than the brown ones.",ans:["better"]},
  {t:"listen",say:"My new job is harder than my old job, but the salary is a lot better.",q:"¿Qué es mejor en el nuevo trabajo?",o:["El horario","El salario","Los compañeros","La oficina"],a:1},
  {t:"write",q:"Compara dos ciudades que conozcas (mínimo 30 palabras). Usa al menos 4 comparativos.",min:30,keys:[["than"],["er than","ier than"],["more"],["better","worse","bigger","cheaper","hotter","colder"]]}
 ],
 exam:{t:"mc",q:"A car is ___ than a bike.",o:["fast","faster","more fast","fastest"],a:1},
 exam2:{t:"mc",q:"This exam was ___ than the last one.",o:["more difficult","difficulter","most difficult","more difficulter"],a:0}
},
{ id:"a2-u2-l2", title:"Superlativos", goal:"Decir cuál es el más grande, el mejor o el peor de un grupo.",
 theory:[
  {p:"El **superlativo** compara una cosa con todo un grupo. Siempre lleva **the**."},
  {p:"Adjetivos cortos: **the + -est** (the cheapest, the biggest, the easiest). Adjetivos largos: **the most** + adjetivo (the most expensive)."},
  {ex:[["Everest is the highest mountain in the world.","El Everest es la montaña más alta del mundo."],["This is the most beautiful beach in Colombia.","Esta es la playa más hermosa de Colombia."],["She's the youngest in her family.","Ella es la menor de su familia."]]},
  {p:"Irregulares: **good → the best**, **bad → the worst**."},
  {ex:[["It was the best day of my life.","Fue el mejor día de mi vida."],["That was the worst movie I've ever seen.","Fue la peor película que he visto."]]},
  {tip:"Después del superlativo, para lugares se usa in (the tallest building in the city) y para grupos of (the best of all)."}
 ],
 vocab:[
  ["the biggest","adjetivo superlativo","el más grande","It's the biggest city in the country."],["the smallest","adjetivo superlativo","el más pequeño","This is the smallest room."],
  ["the best","adjetivo superlativo","el mejor","She's the best student."],["the worst","adjetivo superlativo","el peor","It was the worst day."],
  ["the most beautiful","adjetivo superlativo","el más hermoso","The most beautiful beach."],["the most expensive","adjetivo superlativo","el más caro","The most expensive hotel."],
  ["the cheapest","adjetivo superlativo","el más barato","The cheapest flight."],["the oldest","adjetivo superlativo","el más viejo, el mayor","My grandfather is the oldest."],
  ["the youngest","adjetivo superlativo","el menor","I'm the youngest in my family."],["the highest","adjetivo superlativo","el más alto (montaña, edificio)","The highest mountain."],
  ["the longest","adjetivo superlativo","el más largo","The longest river."],["the most popular","adjetivo superlativo","el más popular","The most popular dish."],
  ["the most dangerous","adjetivo superlativo","el más peligroso","The most dangerous animal."],["the funniest","adjetivo superlativo","el más chistoso","He's the funniest person I know."],
  ["in the world","expresión","del mundo","The biggest country in the world."],["of all","expresión","de todos","The best of all."],
  ["ever","adverbio","alguna vez, jamás","The best movie ever."],["river","sustantivo","río","The Amazon is a long river."],
  ["mountain","sustantivo","montaña","We climbed a mountain."],["building","sustantivo","edificio","The tallest building."]
 ],
 dialogue:{title:"Un concurso de preguntas", scene:"En un programa de radio, la presentadora le hace preguntas a Julián, un concursante.", a:"Presentadora", b:"Julián", lines:[
  ["A","Welcome, Julián! First question: what is the longest river in South America?","¡Bienvenido, Julián! Primera pregunta: ¿cuál es el río más largo de Suramérica?"],
  ["B","I think it's the Amazon.","Creo que es el Amazonas."],
  ["A","Correct! Second: what is the highest mountain in Colombia?","¡Correcto! Segunda: ¿cuál es la montaña más alta de Colombia?"],
  ["B","Hmm, that's harder. Is it Pico Cristóbal Colón?","Mmm, esa es más difícil. ¿Es el Pico Cristóbal Colón?"],
  ["A","Yes! Very good. Third: what is the most popular sport in Brazil?","¡Sí! Muy bien. Tercera: ¿cuál es el deporte más popular de Brasil?"],
  ["B","That's the easiest question! Football, of course.","¡Esa es la pregunta más fácil! El fútbol, claro."],
  ["A","Ha ha, correct. Now, a personal question: what was the best day of your life?","Ja, ja, correcto. Ahora una pregunta personal: ¿cuál fue el mejor día de tu vida?"],
  ["B","The day my daughter was born. It was the happiest day ever.","El día que nació mi hija. Fue el día más feliz de todos."],
  ["A","How beautiful! And the worst day?","¡Qué lindo! ¿Y el peor día?"],
  ["B","The day I lost my job. But then I found a better one!","El día que perdí mi trabajo. ¡Pero luego encontré uno mejor!"],
  ["A","Last question: who is the funniest person in your family?","Última pregunta: ¿quién es la persona más chistosa de tu familia?"],
  ["B","My uncle Pedro, definitely. He's the funniest man in the world!","Mi tío Pedro, definitivamente. ¡Es el hombre más chistoso del mundo!"]
 ]},
 practice:[
  {t:"mc",q:"It's the ___ city in the country.",o:["bigger","biggest","most big","more big"],a:1},
  {t:"mc",q:"That was the ___ movie I've ever seen.",o:["bad","worse","worst","baddest"],a:2},
  {t:"mc",q:"This is the ___ restaurant in town.",o:["more expensive","most expensive","expensivest","expensive"],a:1},
  {t:"fill",q:"She's the ___ (young) person in the office.",ans:["youngest"]},
  {t:"listen",say:"Of all my cousins, Laura is the most intelligent and Tomás is the funniest.",q:"¿Quién es el más chistoso?",o:["Laura","Tomás","Los dos","Nadie"],a:1},
  {t:"oral",text:"It was the best trip of my life."}
 ],
 more:[
  {t:"order",words:["It's","the","longest","river","in","the","world."],es:"Es el río más largo del mundo."},
  {t:"order",words:["She","is","the","best","student","in","the","class."],es:"Ella es la mejor estudiante de la clase."},
  {t:"dict",say:"This is the cheapest flight."},
  {t:"dict",say:"He's the funniest person I know."},
  {t:"mc",q:"Mount Everest is the highest mountain ___ the world.",o:["of","in","at","on"],a:1},
  {t:"fill",q:"It was the ___ (happy) day of my life.",ans:["happiest"]},
  {t:"listen",say:"The most popular dish in this restaurant is the fish soup, but the cheapest is the chicken.",q:"¿Cuál es el plato más popular?",o:["El pollo","La sopa de pescado","La carne","La ensalada"],a:1},
  {t:"oral",text:"My mother is the best cook in the world."}
 ],
 exam:{t:"mc",q:"Who is the ___ person in your family?",o:["older","oldest","most old","more old"],a:1},
 exam2:{t:"fill",q:"This is the ___ (good) pizza in the city.",ans:["best"]}
},
{ id:"a2-u2-l3", title:"as...as, too y enough", goal:"Decir que dos cosas son iguales, o que algo es demasiado o suficiente.",
 theory:[
  {p:"**as + adjetivo + as** = tan ... como (igualdad). En negativo: **not as ... as** = no tan ... como."},
  {ex:[["My brother is as tall as my father.","Mi hermano es tan alto como mi papá."],["The bus isn't as fast as the metro.","El bus no es tan rápido como el metro."]]},
  {p:"**too + adjetivo** = demasiado (es un problema). **adjetivo + enough** = suficiente. **not + adjetivo + enough** = no lo suficiente."},
  {ex:[["This coffee is too hot.","Este café está demasiado caliente."],["I'm too tired to go out.","Estoy demasiado cansado para salir."],["The room isn't big enough.","La habitación no es lo suficientemente grande."],["Are you old enough to drive?","¿Tienes edad suficiente para manejar?"],["We have enough money.","Tenemos suficiente dinero."]]},
  {tip:"Enough va DESPUÉS del adjetivo (big enough) pero ANTES del sustantivo (enough money). Too no es lo mismo que very: very = muy; too = demasiado."}
 ],
 vocab:[
  ["as ... as","expresión","tan ... como","She's as smart as her mother."],["not as ... as","expresión","no tan ... como","It's not as cold as yesterday."],
  ["too","adverbio","demasiado","It's too expensive."],["enough","adverbio / determinante","suficiente","Is it big enough?"],
  ["the same as","expresión","igual que","My phone is the same as yours."],["different from","expresión","diferente de","It's different from my car."],
  ["similar to","expresión","parecido a","Your bag is similar to mine."],["salty","adjetivo","salado","The soup is too salty."],
  ["sweet","adjetivo","dulce","The cake is too sweet."],["loud","adjetivo","fuerte, ruidoso","The music is too loud."],
  ["tight","adjetivo","apretado","These jeans are too tight."],["loose","adjetivo","suelto, flojo","The shirt is a bit loose."],
  ["strong","adjetivo","fuerte","This coffee is too strong."],["weak","adjetivo","débil, suave","The tea is too weak."],
  ["crowded","adjetivo","lleno de gente","The metro is too crowded."],["spacious","adjetivo","amplio","The car is spacious enough."],
  ["safe","adjetivo","seguro","Is it safe enough?"],["old enough","expresión","con edad suficiente","He isn't old enough to vote."],
  ["complain","verbo","quejarse","I want to complain about the room."],["fix","verbo","arreglar","Can you fix it?"]
 ],
 dialogue:{title:"Quejas en el hotel", scene:"La señora Ortiz llama a la recepción del hotel porque no está contenta con su habitación.", a:"Recepción", b:"Sra. Ortiz", lines:[
  ["A","Reception, good evening. How can I help you?","Recepción, buenas noches. ¿En qué le ayudo?"],
  ["B","Hello. I'm in room 305 and I'm not happy with it.","Hola. Estoy en la habitación 305 y no estoy contenta."],
  ["A","I'm sorry to hear that. What's the problem?","Lamento oír eso. ¿Cuál es el problema?"],
  ["B","First, the room is too small for three people.","Primero, la habitación es demasiado pequeña para tres personas."],
  ["A","I see. Is the bed big enough?","Entiendo. ¿La cama es suficientemente grande?"],
  ["B","No, it isn't. And the air conditioning is too loud. We can't sleep.","No. Y el aire acondicionado es demasiado ruidoso. No podemos dormir."],
  ["A","I'm very sorry. Anything else?","Lo siento mucho. ¿Algo más?"],
  ["B","Yes. The room isn't as clean as the photos on your website.","Sí. La habitación no está tan limpia como las fotos de su página web."],
  ["A","I apologize. We have a bigger room on the eighth floor. It's as quiet as a library.","Le pido disculpas. Tenemos una habitación más grande en el octavo piso. Es tan tranquila como una biblioteca."],
  ["B","Is it more expensive?","¿Es más cara?"],
  ["A","Normally yes, but tonight it's the same price for you.","Normalmente sí, pero esta noche es el mismo precio para usted."],
  ["B","Perfect, thank you. That's very kind.","Perfecto, gracias. Muy amable."]
 ]},
 practice:[
  {t:"mc",q:"I can't drink this coffee. It's ___ hot.",o:["very","too","enough","as"],a:1},
  {t:"mc",q:"Is the room big ___ for four people?",o:["too","enough","as","than"],a:1},
  {t:"mc",q:"My car is ___ fast ___ yours.",o:["as / as","so / than","more / as","too / as"],a:0},
  {t:"fill",q:"We don't have ___ money for a new car. (suficiente)",ans:["enough"]},
  {t:"listen",say:"The jeans are perfect, but the shirt is too tight. Do you have a bigger size?",q:"¿Qué problema tiene la camisa?",o:["Es muy grande","Es muy apretada","Es muy cara","Es fea"],a:1},
  {t:"oral",text:"This soup is too salty and the music is too loud."}
 ],
 more:[
  {t:"order",words:["The","bus","isn't","as","fast","as","the","metro."],es:"El bus no es tan rápido como el metro."},
  {t:"order",words:["He","isn't","old","enough","to","drive."],es:"No tiene edad suficiente para manejar."},
  {t:"dict",say:"This coffee is too strong for me."},
  {t:"dict",say:"Your bag is similar to mine."},
  {t:"mc",q:"Ordena bien: 'The room is ___.'",o:["enough big","big enough","enough bigger","too enough"],a:1},
  {t:"mc",q:"My opinion is different ___ yours.",o:["than","from","as","of"],a:1},
  {t:"listen",say:"Today it's not as hot as yesterday, so let's walk to the beach.",q:"¿Cómo está hoy el clima comparado con ayer?",o:["Más caliente","Menos caliente","Igual","Lluvioso"],a:1},
  {t:"write",q:"Escribe una queja corta sobre un hotel, restaurante o producto (mínimo 30 palabras). Usa too, enough y not as ... as.",min:30,keys:[["too"],["enough"],["as"],["sorry","problem","not happy","complain"]]}
 ],
 exam:{t:"mc",q:"I'm ___ tired to go to the party.",o:["enough","too","so","as"],a:1},
 exam2:{t:"mc",q:"Cali is not ___ big ___ Bogotá.",o:["so / than","as / as","more / than","too / as"],a:1}
},
{ id:"a2-u2-l4", title:"Describir lugares y ciudades", goal:"Describir tu ciudad, un pueblo o un lugar que visitaste.",
 theory:[
  {p:"Para describir un lugar combinamos **there is/are**, **adjetivos** y, en pasado, **there was/were**."},
  {ex:[["There's a lot to do in the city.","Hay mucho que hacer en la ciudad."],["There are many old churches.","Hay muchas iglesias antiguas."],["There was a big market in the square.","Había un mercado grande en la plaza."],["There weren't many tourists.","No había muchos turistas."]]},
  {p:"Preguntas útiles: **What's it like?** (¿Cómo es?), **Is it worth visiting?** (¿Vale la pena visitarlo?), **What is it famous for?** (¿Por qué es famoso?)."},
  {ex:[["What's Villa de Leyva like? It's small, quiet and very charming.","¿Cómo es Villa de Leyva? Es pequeño, tranquilo y muy encantador."],["It's famous for its huge square.","Es famoso por su plaza enorme."]]},
  {tip:"'What's it like?' pregunta cómo es algo (descripción), no si te gusta. Para gustos: 'Do you like it?'."}
 ],
 vocab:[
  ["town","sustantivo","pueblo, ciudad pequeña","I grew up in a small town."],["village","sustantivo","aldea, pueblito","A quiet village in the mountains."],
  ["square","sustantivo","plaza","The main square is beautiful."],["market","sustantivo","mercado","There's a market on Sundays."],
  ["coast","sustantivo","costa","They live on the coast."],["countryside","sustantivo","campo","I love the countryside."],
  ["view","sustantivo","vista","The view is amazing."],["sights","sustantivo","lugares de interés","We saw all the sights."],
  ["tourists","sustantivo","turistas","There are a lot of tourists."],["charming","adjetivo","encantador","A charming little town."],
  ["lively","adjetivo","animado, con vida","The city is very lively at night."],["peaceful","adjetivo","tranquilo, pacífico","The village is peaceful."],
  ["modern","adjetivo","moderno","Medellín has a modern metro."],["historic","adjetivo","histórico","The historic center."],
  ["polluted","adjetivo","contaminado","The air is polluted."],["famous for","expresión","famoso por","It's famous for its coffee."],
  ["What's it like?","expresión","¿Cómo es?","What's your city like?"],["worth visiting","expresión","vale la pena visitarlo","Salento is worth visiting."],
  ["there was / there were","expresión","había","There were a lot of people."],["nightlife","sustantivo","vida nocturna","The nightlife is great."]
 ],
 dialogue:{title:"Recomendando un destino", scene:"Emily, una turista inglesa, le pide a Andrés recomendaciones para viajar en Colombia.", a:"Emily", b:"Andrés", lines:[
  ["A","I have five days free. Where should I go?","Tengo cinco días libres. ¿A dónde debería ir?"],
  ["B","Do you prefer the city or the countryside?","¿Prefieres la ciudad o el campo?"],
  ["A","The countryside. Bogotá is too big and crowded for me.","El campo. Bogotá es demasiado grande y llena de gente para mí."],
  ["B","Then go to Salento, in the coffee region. It's definitely worth visiting.","Entonces ve a Salento, en el eje cafetero. Definitivamente vale la pena."],
  ["A","What's it like?","¿Cómo es?"],
  ["B","It's a small, charming town with colorful houses and a lovely square.","Es un pueblo pequeño y encantador, con casas de colores y una plaza preciosa."],
  ["A","What is it famous for?","¿Por qué es famoso?"],
  ["B","It's famous for its coffee farms and the Cocora Valley, with the tallest palm trees in the world.","Por sus fincas cafeteras y el Valle de Cocora, con las palmas más altas del mundo."],
  ["A","Wow! Is it lively at night?","¡Wow! ¿Es animado en la noche?"],
  ["B","Not really. It's peaceful. But there are some nice bars and restaurants.","No mucho. Es tranquilo. Pero hay algunos bares y restaurantes bonitos."],
  ["A","Perfect. I need a peaceful place. Are there many tourists?","Perfecto. Necesito un lugar tranquilo. ¿Hay muchos turistas?"],
  ["B","On weekends, yes. Go during the week. The views are amazing!","Los fines de semana, sí. Ve entre semana. ¡Las vistas son increíbles!"]
 ]},
 practice:[
  {t:"mc",q:"—What's Cartagena ___? —It's hot and beautiful.",o:["as","like","how","for"],a:1},
  {t:"mc",q:"There ___ a lot of people at the concert yesterday.",o:["was","were","is","are"],a:1},
  {t:"mc",q:"Colombia is famous ___ its coffee.",o:["of","for","by","with"],a:1},
  {t:"fill",q:"The air in big cities is often ___. (contaminado)",ans:["polluted"]},
  {t:"listen",say:"My hometown is a peaceful village in the mountains. There isn't much nightlife, but the views are wonderful.",q:"¿Qué es maravilloso en su pueblo?",o:["La vida nocturna","Las vistas","Los restaurantes","El clima"],a:1},
  {t:"oral",text:"My city is lively and modern, and it's famous for its flowers."}
 ],
 more:[
  {t:"order",words:["Is","the","museum","worth","visiting?"],es:"¿Vale la pena visitar el museo?"},
  {t:"order",words:["There","were","a","lot","of","tourists","in","the","square."],es:"Había muchos turistas en la plaza."},
  {t:"dict",say:"It's a charming little town."},
  {t:"dict",say:"The view from the hotel was amazing."},
  {t:"mc",q:"'Animado' (con mucha vida) es:",o:["peaceful","lively","polluted","quiet"],a:1},
  {t:"fill",q:"We saw all the ___ in one day. (lugares de interés)",ans:["sights"]},
  {t:"listen",say:"Twenty years ago there wasn't a metro in my city, but now there are two lines.",q:"¿Cuántas líneas de metro hay ahora?",o:["Ninguna","Una","Dos","Tres"],a:2},
  {t:"write",q:"Describe tu ciudad o un pueblo que te guste (mínimo 40 palabras): cómo es, qué hay y por qué es famoso.",min:40,keys:[["there is","there are","there's"],["famous for"],["beautiful","charming","lively","peaceful","modern","historic","big","small"],["but","and","because"]]}
 ],
 exam:{t:"mc",q:"—What's your town like? —___",o:["I like it very much.","It's small and quiet.","It's in Boyacá.","Yes, it is."],a:1},
 exam2:{t:"mc",q:"There ___ any tourists in the village last winter.",o:["wasn't","weren't","isn't","aren't"],a:1}
},
{ id:"a2-u2-l5", title:"Describir la personalidad", goal:"Describir cómo es alguien de carácter.",
 theory:[
  {p:"Para la **personalidad** se pregunta **What's he/she like?** (¿Cómo es él/ella?). Para lo **físico**: What does he/she look like?"},
  {ex:[["What's your boss like? She's friendly and very organized.","¿Cómo es tu jefa? Es amable y muy organizada."],["My brother is lazy but generous.","Mi hermano es perezoso pero generoso."]]},
  {p:"Para suavizar una crítica se usa **a bit** o **not very**: He's a bit lazy. She isn't very patient."},
  {p:"Opuestos útiles: **patient / impatient**, **polite / rude**, **hard-working / lazy**, **shy / outgoing**, **generous / stingy**."},
  {tip:"'Sensible' en inglés significa sensato, no sensible. Sensible (emocional) es sensitive."}
 ],
 vocab:[
  ["friendly","adjetivo","amable, amigable","My neighbors are very friendly."],["shy","adjetivo","tímido","He's shy with new people."],
  ["outgoing","adjetivo","extrovertido","She's outgoing and talks to everyone."],["funny","adjetivo","chistoso, gracioso","My dad is very funny."],
  ["serious","adjetivo","serio","Our teacher is a bit serious."],["hard-working","adjetivo","trabajador","She's very hard-working."],
  ["lazy","adjetivo","perezoso","My cat is lazy."],["generous","adjetivo","generoso","He's generous with his friends."],
  ["stingy","adjetivo","tacaño","Don't be stingy!"],["patient","adjetivo","paciente","Teachers need to be patient."],
  ["impatient","adjetivo","impaciente","I'm impatient in traffic."],["polite","adjetivo","educado, cortés","The kids are very polite."],
  ["rude","adjetivo","grosero","The waiter was rude."],["honest","adjetivo","honesto","He's an honest man."],
  ["organized","adjetivo","organizado","She's very organized."],["messy","adjetivo","desordenado","My son is messy."],
  ["sensitive","adjetivo","sensible (emocionalmente)","She's very sensitive."],["sensible","adjetivo","sensato","That's a sensible decision."],
  ["What's he like?","expresión","¿Cómo es él (de carácter)?","What's your new boss like?"],["get on well with","verbo","llevarse bien con","I get on well with my sister."]
 ],
 dialogue:{title:"El nuevo jefe", scene:"Dos compañeras, Diana y Kate, hablan del nuevo gerente de la empresa.", a:"Kate", b:"Diana", lines:[
  ["A","Did you meet the new manager yesterday?","¿Conociste al nuevo gerente ayer?"],
  ["B","Yes, I did. His name is Mr. Turner.","Sí. Se llama Turner."],
  ["A","What's he like?","¿Cómo es?"],
  ["B","He seems friendly and very polite. He said hello to everyone.","Parece amable y muy educado. Saludó a todo el mundo."],
  ["A","That's good. Our old manager was a bit rude.","Qué bien. El gerente anterior era un poco grosero."],
  ["B","I know! And he was really impatient with new people.","¡Ya sé! Y era muy impaciente con la gente nueva."],
  ["A","Is Mr. Turner serious or funny?","¿El señor Turner es serio o chistoso?"],
  ["B","He's quite serious in meetings, but he told a funny joke at lunch.","Es bastante serio en las reuniones, pero contó un chiste en el almuerzo."],
  ["A","Ha ha. Is he hard-working?","Ja, ja. ¿Es trabajador?"],
  ["B","Very. He arrived at seven and left at eight. And he's very organized.","Mucho. Llegó a las siete y se fue a las ocho. Y es muy organizado."],
  ["A","Oh no, I'm a bit messy. I hope we get on well!","¡Oh no, yo soy un poco desordenada! ¡Espero que nos llevemos bien!"],
  ["B","Don't worry. He seems patient and generous. He bought coffee for the whole team!","No te preocupes. Parece paciente y generoso. ¡Compró café para todo el equipo!"]
 ]},
 practice:[
  {t:"mc",q:"—What's your sister ___? —She's very outgoing.",o:["look","like","likes","as"],a:1},
  {t:"mc",q:"Lo contrario de lazy es:",o:["messy","hard-working","shy","rude"],a:1},
  {t:"mc",q:"'Sensato' en inglés es:",o:["sensitive","sensible","sensational","sense"],a:1},
  {t:"fill",q:"He never shares anything. He's very ___. (tacaño)",ans:["stingy"]},
  {t:"listen",say:"My grandmother is the most patient person I know. She never gets angry.",q:"¿Cómo es la abuela?",o:["Impaciente","Muy paciente","Grosera","Tímida"],a:1},
  {t:"oral",text:"My best friend is funny, generous and very honest."}
 ],
 more:[
  {t:"order",words:["I","get","on","well","with","my","brother."],es:"Me llevo bien con mi hermano."},
  {t:"order",words:["She's","a","bit","shy","with","new","people."],es:"Ella es un poco tímida con gente nueva."},
  {t:"dict",say:"The waiter was very rude."},
  {t:"dict",say:"What's your new boss like?"},
  {t:"mc",q:"Para suavizar 'He's lazy' dices:",o:["He's too lazy.","He's a bit lazy.","He's lazy enough.","He's the laziest."],a:1},
  {t:"mc",q:"Lo contrario de polite:",o:["friendly","rude","shy","patient"],a:1},
  {t:"listen",say:"My son is very messy. His room is a disaster, but he's very generous and kind.",q:"¿Cuál es el defecto del hijo?",o:["Es tacaño","Es desordenado","Es grosero","Es perezoso"],a:1},
  {t:"write",q:"Describe la personalidad de dos personas importantes para ti (mínimo 40 palabras). Usa adjetivos y a bit / very.",min:40,keys:[["is","she's","he's"],["very","a bit","quite","really"],["friendly","funny","generous","patient","honest","hard-working","shy","outgoing","serious","organized","polite"],["but","and","because"]]}
 ],
 exam:{t:"mc",q:"—What does he look like? —___",o:["He's very friendly.","He's tall with dark hair.","He likes football.","He's fine."],a:1},
 exam2:{t:"mc",q:"She talks to everybody at parties. She's very ___.",o:["shy","outgoing","lazy","stingy"],a:1}
}
],
quiz:[
 {t:"mc",q:"My new phone is ___ than my old one.",o:["more good","better","best","gooder"],a:1},
 {t:"mc",q:"It's the ___ restaurant in the city.",o:["more popular","most popular","popularest","popular"],a:1},
 {t:"mc",q:"This box is too heavy. I'm not strong ___.",o:["too","enough","as","than"],a:1},
 {t:"mc",q:"—What's Leticia like? —___",o:["She's in the Amazon.","It's hot and green.","I like it.","Yes, it is."],a:1},
 {t:"mc",q:"He never says 'please' or 'thank you'. He's ___.",o:["polite","rude","patient","shy"],a:1},
 {t:"fill",q:"My brother is as ___ (tall) as my father.",ans:["tall"]},
 {t:"listen",say:"The black jacket is nicer, but it's more expensive than the grey one.",q:"¿Cuál chaqueta es más cara?",o:["La gris","La negra","Las dos iguales","Ninguna"],a:1},
 {t:"listen",say:"My sister is very hard-working, but she's a bit impatient with her kids.",q:"¿Cuál es el defecto de la hermana?",o:["Es perezosa","Es un poco impaciente","Es grosera","Es tímida"],a:1},
 {t:"write",q:"Compara tu ciudad con otra ciudad y describe a una persona que vive allí (mínimo 40 palabras). Usa comparativos, un superlativo y adjetivos de personalidad.",min:40,keys:[["than"],["the most","the best","est"],["friendly","funny","generous","patient","honest","hard-working","shy","outgoing","serious"],["but","and","because"]]},
 {t:"oral",text:"Medellín is warmer than Bogotá, and it's the most beautiful city I know."},
 {t:"oral",text:"My boss is very organized, but he's a bit serious."}
],
pool:[
 {t:"mc",q:"Today is ___ than yesterday. (más frío)",o:["more cold","colder","coldest","as cold"],a:1},
 {t:"mc",q:"She's the ___ person I know.",o:["kinder","kindest","most kind","more kind"],a:1},
 {t:"mc",q:"These shoes are ___ small. I need a bigger size.",o:["enough","too","as","very enough"],a:1},
 {t:"mc",q:"My car isn't as big ___ yours.",o:["than","as","like","that"],a:1},
 {t:"mc",q:"There ___ a beautiful park near my old house.",o:["were","was","are","be"],a:1},
 {t:"mc",q:"'Llevarse bien con' es:",o:["get on well with","get up with","look like","take care"],a:0},
 {t:"fill",q:"That was the ___ (bad) day of my life.",ans:["worst"]},
 {t:"fill",q:"Barichara is famous ___ its stone streets.",ans:["for"]},
 {t:"listen",say:"The village was peaceful, but there wasn't enough public transport.",q:"¿Qué no había suficiente?",o:["Restaurantes","Transporte público","Hoteles","Turistas"],a:1},
 {t:"listen",say:"Of the three hotels, the Plaza is the cheapest and the Royal is the most comfortable.",q:"¿Cuál hotel es el más cómodo?",o:["Plaza","Royal","Los dos","Ninguno"],a:1},
 {t:"listen",say:"My new neighbor is very friendly and polite, but his dog is too loud.",q:"¿Qué problema hay con el perro?",o:["Es muy grande","Hace mucho ruido","Es agresivo","Está sucio"],a:1},
 {t:"write",q:"Recomienda un lugar para visitar a un amigo extranjero (mínimo 40 palabras): cómo es, por qué es famoso y por qué es mejor que otros lugares.",min:40,keys:[["famous for","worth visiting"],["than","the most","the best"],["there is","there are"],["because"]]},
 {t:"oral",text:"The metro is faster than the bus, but it's too crowded."},
 {t:"oral",text:"What's your town like? Is it worth visiting?"},
 {t:"oral",text:"My father is the most patient person in my family."}
]
};
