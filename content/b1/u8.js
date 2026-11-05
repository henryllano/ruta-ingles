/* B1 · Unidad 8 · Conectar ideas y el mundo de hoy (Días 36–40). Se arma con: node tools/build-level.js 2 content/b1 */
const M = (q, o, a, x) => ({ t: "mc", q, o, a, ...(x ? { x } : {}) }), F = (q, ans) => ({ t: "fill", q, ans }),
  L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), O = text => ({ t: "oral", text }), D = say => ({ t: "dict", say }),
  W = (q, min, keys) => ({ t: "write", q, min, keys }), R = (s, es) => ({ t: "order", words: s.split(" "), es });

module.exports = {
n: 8,
title: "Conectar ideas y el mundo de hoy",
lessons: [
/* ───────── Día 36 ───────── */
{
 id: "b1-u8-l1",
 title: "Conectores para argumentar: although, despite, however, so that",
 goal: "Unir ideas que contrastan y explicar para qué se hace algo.",
 theory: [
  { p: "Para el **contraste** cada conector tiene su gramática: **although / even though** + oración (**Although it was raining, we went out**). **Despite / in spite of** + sustantivo o **-ing** (**Despite the rain…** · **Despite feeling tired…**). **However** va al inicio de una nueva oración, con coma (**It was expensive. However, it was worth it.**). **Whereas** compara dos cosas opuestas (**I love coffee, whereas my wife prefers tea**)." },
  { ex: [["Although he's rich, he lives in a small flat.", "Aunque es rico, vive en un apartamento pequeño."], ["Despite the traffic, we arrived on time.", "A pesar del tráfico, llegamos a tiempo."], ["In spite of having a cold, she went to work.", "A pesar de tener gripa, fue a trabajar."], ["The hotel was nice. However, the food was terrible.", "El hotel era bonito. Sin embargo, la comida era terrible."], ["Bogotá is cold, whereas Cali is hot.", "Bogotá es fría, mientras que Cali es caliente."]] },
  { p: "Para el **propósito**: **to / in order to** + verbo (**I'm saving in order to buy a house**) y **so that** + sujeto + **can / could / will / would** (**I'm leaving early so that I can avoid the traffic**). Para el **resultado**: **so**, **as a result**, **therefore** (formal)." },
  { ex: [["I study every night in order to pass the exam.", "Estudio todas las noches para pasar el examen."], ["She spoke slowly so that everyone could understand.", "Habló despacio para que todos entendieran."], ["It rained a lot. As a result, the road was closed.", "Llovió mucho. Como resultado, cerraron la carretera."], ["Prices went up; therefore, sales fell.", "Los precios subieron; por lo tanto, las ventas bajaron."], ["I took a taxi so I wouldn't be late.", "Tomé un taxi para no llegar tarde."]] },
  { tip: "Nunca digas «despite of» ni «although of». Es **despite** (sin of) o **in spite of** (con of). Y después de despite no va una oración completa: **despite the rain**, no «despite it was raining»." }
 ],
 vocab: [
  ["although", "conjunción", "aunque", "Although it was late, we stayed."],
  ["even though", "conjunción", "aun cuando, aunque (más fuerte)", "Even though I studied, I failed."],
  ["despite", "preposición", "a pesar de", "Despite the cold, we swam."],
  ["in spite of", "expresión", "a pesar de", "In spite of the noise, I slept."],
  ["however", "adverbio", "sin embargo", "However, it was too expensive."],
  ["whereas", "conjunción", "mientras que (contraste)", "I'm tall, whereas my brother is short."],
  ["on the other hand", "expresión", "por otro lado", "On the other hand, it's very safe."],
  ["in order to", "expresión", "para, con el fin de", "I called in order to complain."],
  ["so that", "conjunción", "para que", "Speak louder so that we can hear you."],
  ["as a result", "expresión", "como resultado", "As a result, many people lost their jobs."],
  ["therefore", "adverbio", "por lo tanto", "It's late; therefore, we should go."],
  ["advantage", "sustantivo", "ventaja", "One advantage is the price."],
  ["disadvantage", "sustantivo", "desventaja", "The main disadvantage is the noise."],
  ["argument", "sustantivo", "argumento; discusión", "That's a good argument."],
  ["point of view", "expresión", "punto de vista", "From my point of view, it's fair."],
  ["benefit", "sustantivo", "beneficio", "There are many benefits."],
  ["drawback", "sustantivo", "inconveniente", "The only drawback is the cost."],
  ["commute", "sustantivo / verbo", "trayecto al trabajo; viajar al trabajo", "My commute is an hour."],
  ["work from home", "expresión", "trabajar desde casa", "I work from home twice a week."],
  ["productive", "adjetivo", "productivo", "I'm more productive at home."],
  ["isolated", "adjetivo", "aislado", "Some people feel isolated."],
  ["flexible", "adjetivo", "flexible", "My hours are flexible."]
 ],
 dialogue: {
  title: "¿Oficina o casa?",
  scene: "En una reunión, Carolina y su jefe Rodrigo discuten si el equipo debe volver a la oficina todos los días.",
  a: "Rodrigo", b: "Carolina",
  lines: [
   ["A", "I think everyone should come back to the office every day. We work better together.", "Creo que todos deberían volver a la oficina todos los días. Trabajamos mejor juntos."],
   ["B", "I see your point. However, many people are more productive at home.", "Entiendo. Sin embargo, mucha gente es más productiva en casa."],
   ["A", "Maybe, but although people say they're productive, some reports arrive late.", "Puede ser, pero aunque la gente dice que es productiva, algunos informes llegan tarde."],
   ["B", "That's true in a few cases. Despite that, our results this year were excellent.", "Es cierto en algunos casos. A pesar de eso, nuestros resultados este año fueron excelentes."],
   ["A", "Fair enough. But new employees feel isolated. They need to learn from others.", "Es justo. Pero los empleados nuevos se sienten aislados. Necesitan aprender de los demás."],
   ["B", "I agree. What if new people came three days a week so that they could learn faster?", "Estoy de acuerdo. ¿Y si los nuevos vinieran tres días a la semana para que puedan aprender más rápido?"],
   ["A", "Interesting. And the others?", "Interesante. ¿Y los demás?"],
   ["B", "Two days. Some colleagues live two hours away, whereas others live five minutes from here.", "Dos días. Algunos compañeros viven a dos horas, mientras que otros viven a cinco minutos."],
   ["A", "Hmm. Long commutes are tiring. As a result, people arrive stressed.", "Mmm. Los trayectos largos cansan. Como resultado, la gente llega estresada."],
   ["B", "Exactly. And in order to save money, we could rent a smaller office.", "Exacto. Y para ahorrar plata, podríamos alquilar una oficina más pequeña."],
   ["A", "That's a big advantage. On the other hand, we'd need a good booking system for desks.", "Esa es una gran ventaja. Por otro lado, necesitaríamos un buen sistema para reservar puestos."],
   ["B", "I can organize that. In spite of the challenges, I think it will work.", "Yo puedo organizar eso. A pesar de los retos, creo que va a funcionar."],
   ["A", "OK. Let's try it for three months and then decide.", "Bueno. Probémoslo tres meses y luego decidimos."]
  ]
 },
 practice: [
  M("___ the heavy rain, the match wasn't cancelled.", ["Despite", "Although", "However", "Even though"], 0, "Despite + sustantivo."),
  M("___ he had a good salary, he was always short of money.", ["Even though", "Despite", "In spite of", "However"], 0, "Even though + oración."),
  M("The phone has a great camera. ___, the battery is terrible.", ["However", "Although", "Despite", "Whereas"], 0),
  F("I'm writing everything down ___ that I don't forget it. (para que)", ["so"]),
  L("Although the new metro line was expensive, it has reduced traffic in the south of the city. As a result, people spend less time commuting.", "¿Qué resultado tuvo la línea de metro?", ["La gente se demora menos en sus trayectos", "Subieron los precios", "Hay más tráfico en el sur", "Cerraron la línea"], 0),
  O("Despite the traffic, we managed to arrive on time.")
 ],
 more: [
  R("Although it was late, we kept working.", "Aunque era tarde, seguimos trabajando."),
  R("I study in order to get a better job.", "Estudio para conseguir un mejor trabajo."),
  D("In spite of feeling tired, she went to the gym."),
  D("My brother loves the city, whereas I prefer the countryside."),
  M("¿Cuál es correcta?", ["Despite the cold, we went swimming.", "Despite of the cold, we went swimming.", "Despite it was cold, we went swimming.", "Although the cold, we went swimming."], 0),
  M("Prices went up. ___, many people stopped buying.", ["As a result", "In order to", "So that", "Despite"], 0),
  L("Working from home has many benefits, for example, you don't have to commute. On the other hand, some people feel isolated.", "¿Qué desventaja menciona?", ["Algunas personas se sienten aisladas", "Se trabaja más horas", "Se gasta más plata", "No hay internet"], 0),
  W("Escribe un párrafo de opinión (mínimo 80 palabras): ¿es mejor trabajar desde casa o en la oficina? Usa although, despite / in spite of, however, whereas y so that / in order to.", 80, [["although", "even though"], ["despite", "in spite of"], ["however", "on the other hand"], ["so that", "in order to", "as a result", "whereas"]])
 ],
 exam: M("___ feeling nervous, she gave an excellent presentation.", ["In spite of", "Despite of", "However", "Even though"], 0),
 exam2: F("She spoke slowly ___ that everybody could understand.", ["so"])
},
/* ───────── Día 37 ───────── */
{
 id: "b1-u8-l2",
 title: "Comparar y elegir: both, either, neither y comparativos avanzados",
 goal: "Comparar dos opciones con precisión y explicar tu elección.",
 theory: [
  { p: "Para hablar de **dos** cosas o personas: **both** (los dos: **Both hotels are near the beach**), **either** (cualquiera de los dos: **Either day is fine for me**), **neither** (ninguno de los dos: **Neither option is cheap**). Con **of**: **both of them, either of the apartments, neither of my brothers**. Estructuras: **both … and…**, **either … or…**, **neither … nor…**." },
  { ex: [["Both my parents are teachers.", "Mis dos papás son profesores."], ["You can pay either in cash or by card.", "Puede pagar en efectivo o con tarjeta."], ["Neither of the jobs was interesting.", "Ninguno de los dos trabajos era interesante."], ["She speaks both English and French.", "Habla tanto inglés como francés."], ["Neither Juan nor Pedro came.", "Ni Juan ni Pedro vinieron."]] },
  { p: "**Comparativos avanzados**: para decir **cuánto** más usa **much / far / a lot** (mucho) o **a bit / slightly** (un poco) + comparativo: **This flat is much bigger** · **It's slightly cheaper**. **The + comparativo, the + comparativo** = cuanto más…, más…: **The more you practise, the better you speak.** Y **not as … as** = no tan… como: **It's not as expensive as I thought.**" },
  { ex: [["The new phone is far better than the old one.", "El celular nuevo es muchísimo mejor que el viejo."], ["The blue jacket is slightly cheaper.", "La chaqueta azul es un poco más barata."], ["The sooner we leave, the better.", "Cuanto antes salgamos, mejor."], ["The more I read, the more I learn.", "Cuanto más leo, más aprendo."], ["The test wasn't as difficult as I expected.", "El examen no fue tan difícil como esperaba."]] },
  { tip: "Con **neither** el verbo va en afirmativo, porque neither ya es negativo: **Neither of them likes coffee** (no «neither of them doesn't like»). Y nunca digas «more better»: es **much better**." }
 ],
 vocab: [
  ["both", "determinante / pronombre", "ambos, los dos", "Both options are good."],
  ["either", "determinante / pronombre", "cualquiera de los dos; (negativo) tampoco", "Either is fine."],
  ["neither", "determinante / pronombre", "ninguno de los dos", "Neither of them called."],
  ["both … and", "expresión", "tanto … como", "Both Ana and Luis came."],
  ["either … or", "expresión", "o … o", "Either you come or you stay."],
  ["neither … nor", "expresión", "ni … ni", "Neither he nor she knew."],
  ["much / far + comparativo", "expresión", "mucho más…", "It's far cheaper."],
  ["slightly", "adverbio", "ligeramente, un poco", "It's slightly bigger."],
  ["the more…, the more…", "expresión", "cuanto más…, más…", "The more you train, the stronger you get."],
  ["not as … as", "expresión", "no tan … como", "It's not as big as ours."],
  ["option", "sustantivo", "opción", "We have two options."],
  ["choice", "sustantivo", "elección, opción", "It's a difficult choice."],
  ["compare", "verbo", "comparar", "Let's compare the prices."],
  ["rent", "sustantivo / verbo", "arriendo; arrendar", "The rent is too high."],
  ["deposit", "sustantivo", "depósito, cuota inicial", "We paid a deposit."],
  ["spacious", "adjetivo", "amplio, espacioso", "The flat is very spacious."],
  ["noisy", "adjetivo", "ruidoso", "The street is noisy."],
  ["convenient", "adjetivo", "práctico, conveniente", "The location is very convenient."],
  ["neighbourhood", "sustantivo", "barrio", "It's a safe neighbourhood."],
  ["landlord", "sustantivo", "arrendador, dueño", "The landlord is very nice."],
  ["furnished", "adjetivo", "amoblado", "Is it furnished?"],
  ["it's worth", "expresión", "vale la pena", "It's worth paying a bit more."]
 ],
 dialogue: {
  title: "Dos apartamentos",
  scene: "Laura y Esteban buscan apartamento en Medellín. Visitaron dos y ahora tienen que decidir.",
  a: "Laura", b: "Esteban",
  lines: [
   ["A", "OK, let's compare. Both apartments have two bedrooms and a balcony.", "Bueno, comparemos. Los dos apartamentos tienen dos cuartos y balcón."],
   ["B", "Yes, but the one in Envigado is much bigger. The living room is huge.", "Sí, pero el de Envigado es mucho más grande. La sala es enorme."],
   ["A", "True. But it's also far more expensive. The rent is four hundred thousand pesos more.", "Cierto. Pero también es muchísimo más caro. El arriendo es cuatrocientos mil pesos más."],
   ["B", "And the one in Laureles is slightly smaller, but it's furnished.", "Y el de Laureles es un poco más pequeño, pero está amoblado."],
   ["A", "Neither of them has parking, right?", "Ninguno de los dos tiene parqueadero, ¿cierto?"],
   ["B", "Right. Neither of them. But the Laureles one is near the metro.", "Cierto. Ninguno. Pero el de Laureles está cerca del metro."],
   ["A", "That's very convenient. The closer we live to the metro, the less we spend on taxis.", "Eso es muy práctico. Cuanto más cerca vivamos del metro, menos gastamos en taxis."],
   ["B", "Good point. Was the street noisy, though?", "Buen punto. ¿Pero la calle era ruidosa?"],
   ["A", "Not as noisy as I expected. And the landlord was really nice.", "No tan ruidosa como esperaba. Y el dueño fue muy amable."],
   ["B", "I liked both landlords. Either of them would be fine.", "Me cayeron bien los dos dueños. Cualquiera de los dos estaría bien."],
   ["A", "So… we either pay more for space, or we choose location and furniture.", "Entonces… o pagamos más por espacio, o escogemos ubicación y muebles."],
   ["B", "Honestly, the more I think about it, the more I prefer Laureles.", "Honestamente, cuanto más lo pienso, más prefiero Laureles."],
   ["A", "Me too. Let's call the landlord before someone else rents it. The sooner, the better!", "Yo también. Llamemos al dueño antes de que otro lo arriende. ¡Cuanto antes, mejor!"]
  ]
 },
 practice: [
  M("___ my sisters live abroad. One is in Spain and the other in Chile.", ["Both", "Either", "Neither", "All of"], 0),
  M("We tried two restaurants, but ___ of them was open, so we ate at home.", ["neither", "both", "either", "any"], 0, "Ninguno de los dos → neither."),
  M("This laptop is ___ faster than my old one.", ["much", "very", "more", "too"], 0, "Very no va con comparativos; usa much / far / a lot."),
  F("The ___ you practise, the better you get. (más)", ["more"]),
  L("Neither of the hotels has a pool, but the first one is much closer to the beach and slightly cheaper.", "¿Qué ventajas tiene el primer hotel?", ["Está más cerca de la playa y es un poco más barato", "Tiene piscina", "Es más grande", "Incluye el desayuno"], 0),
  O("The more I think about it, the more I like the idea.")
 ],
 more: [
  R("Both options are good for me.", "Las dos opciones me sirven."),
  R("The sooner we leave, the better.", "Cuanto antes salgamos, mejor."),
  D("Neither of my brothers likes football."),
  D("The test wasn't as difficult as I thought."),
  M("You can come ___ on Friday or on Saturday.", ["either", "both", "neither", "or"], 0),
  M("¿Cuál es correcta?", ["My new car is much better than my old one.", "My new car is more better than my old one.", "My new car is very better than my old one.", "My new car is much more good than my old one."], 0),
  L("Both jobs pay well. The first one is in Bogotá, whereas the second one is online. The more I compare them, the more I like the online job.", "¿Qué trabajo prefiere?", ["El trabajo en línea", "El de Bogotá", "Ninguno", "Los dos"], 0),
  W("Compara dos opciones que tuviste que elegir (dos trabajos, dos carros, dos ciudades, dos apartamentos…) (mínimo 80 palabras). Usa both, either / neither, un comparativo con much / far / slightly y la estructura the more…, the more…", 80, [["both"], ["either", "neither"], ["much", "far", "slightly", "a lot", "a bit"], ["the more", "the better", "the less", "the sooner"]])
 ],
 exam: M("___ of my parents speaks English. They only speak Spanish.", ["Neither", "Both", "Either", "Any"], 0),
 exam2: F("The new metro is ___ faster than the bus. It takes half the time. (mucho)", ["much", "far", "a lot"])
},
/* ───────── Día 38 ───────── */
{
 id: "b1-u8-l3",
 title: "El planeta y las noticias: medio ambiente y uso de the",
 goal: "Entender y comentar noticias sobre el medio ambiente y usar bien los artículos.",
 theory: [
  { p: "Vocabulario del **medio ambiente**: **climate change** (cambio climático), **global warming**, **pollution** (contaminación), **deforestation**, **recycle** (reciclar), **waste** (basura, desperdicio), **plastic**, **renewable energy** (energía renovable), **carbon footprint** (huella de carbono), **endangered species** (especies en peligro), **drought** (sequía), **flood** (inundación)." },
  { ex: [["Deforestation in the Amazon is a serious problem.", "La deforestación en la Amazonía es un problema serio."], ["We should recycle more plastic.", "Deberíamos reciclar más plástico."], ["The drought affected thousands of farmers.", "La sequía afectó a miles de campesinos."], ["Solar energy is a renewable source.", "La energía solar es una fuente renovable."], ["Floods destroyed many houses in La Mojana.", "Las inundaciones destruyeron muchas casas en La Mojana."]] },
  { p: "**Uso de los artículos**: para hablar **en general** de algo, en inglés **no** se usa artículo: **Pollution is a big problem** · **People love nature** · **Plastic takes years to disappear**. Se usa **the** con algo específico o único (**the environment, the planet, the government**), con mares, ríos, cordilleras y países plurales (**the Pacific, the Magdalena, the Andes, the United States**). Sin artículo: países, ciudades y lagos (**Colombia, Bogotá, Lake Tota**) y **go to school / work / bed / hospital**." },
  { ex: [["Life is hard for many farmers.", "La vida es difícil para muchos campesinos."], ["The Magdalena is the longest river in Colombia.", "El Magdalena es el río más largo de Colombia."], ["Coffee is grown in the Andes.", "El café se cultiva en los Andes."], ["The government has a new plan to protect the environment.", "El gobierno tiene un nuevo plan para proteger el medio ambiente."], ["Children go to school at six.", "Los niños van al colegio a las seis."]] },
  { tip: "En español decimos «**La** contaminación es un problema» o «Me encanta **la** naturaleza», pero en inglés, cuando hablas en general, va **sin the**: **Pollution is a problem** · **I love nature**." }
 ],
 vocab: [
  ["environment", "sustantivo", "medio ambiente", "We must protect the environment."],
  ["climate change", "expresión", "cambio climático", "Climate change affects everyone."],
  ["global warming", "expresión", "calentamiento global", "Global warming is melting glaciers."],
  ["pollution", "sustantivo", "contaminación", "Air pollution is bad in big cities."],
  ["deforestation", "sustantivo", "deforestación", "Deforestation is destroying forests."],
  ["recycle", "verbo", "reciclar", "We recycle glass and paper."],
  ["waste", "sustantivo", "basura, residuos; desperdicio", "Too much waste goes to the ocean."],
  ["renewable energy", "expresión", "energía renovable", "Wind is a renewable energy."],
  ["carbon footprint", "expresión", "huella de carbono", "Flying increases your carbon footprint."],
  ["endangered species", "expresión", "especie en peligro de extinción", "The jaguar is an endangered species."],
  ["drought", "sustantivo", "sequía", "The drought lasted months."],
  ["flood", "sustantivo / verbo", "inundación; inundar", "The river flooded the town."],
  ["glacier", "sustantivo", "glaciar", "Colombia's glaciers are disappearing."],
  ["melt", "verbo", "derretirse", "The ice is melting."],
  ["protect", "verbo", "proteger", "We need to protect the forests."],
  ["reduce", "verbo", "reducir", "Reduce, reuse, recycle."],
  ["single-use plastic", "expresión", "plástico de un solo uso", "Bogotá banned single-use plastic bags."],
  ["headline", "sustantivo", "titular", "Did you read the headline?"],
  ["report", "verbo / sustantivo", "informar; informe", "The news reported a big fire."],
  ["according to", "expresión", "según", "According to scientists, it's getting worse."],
  ["scientist", "sustantivo", "científico", "Scientists are worried."],
  ["fake news", "expresión", "noticias falsas", "Don't share fake news."]
 ],
 dialogue: {
  title: "La noticia del glaciar",
  scene: "Durante el desayuno, Natalia lee las noticias en el celular y comenta con su papá, Jaime.",
  a: "Natalia", b: "Jaime",
  lines: [
   ["A", "Dad, look at this headline: 'Colombia could lose its last glaciers in twenty years.'", "Papá, mira este titular: «Colombia podría perder sus últimos glaciares en veinte años»."],
   ["B", "Twenty years? I remember the snow on the Nevado del Ruiz when I was a boy.", "¿Veinte años? Yo me acuerdo de la nieve en el Nevado del Ruiz cuando era niño."],
   ["A", "According to the article, the ice is melting because of global warming.", "Según el artículo, el hielo se está derritiendo por el calentamiento global."],
   ["B", "It's sad. And the drought last year was terrible for the farmers in the Andes.", "Es triste. Y la sequía del año pasado fue terrible para los campesinos de los Andes."],
   ["A", "Yes, but at the same time there were floods on the coast. Climate change is making everything more extreme.", "Sí, pero al mismo tiempo hubo inundaciones en la costa. El cambio climático está volviendo todo más extremo."],
   ["B", "Is this real news, or is it fake news from social media?", "¿Esa noticia es real o es una noticia falsa de redes sociales?"],
   ["A", "It's real. The report was written by scientists from the national university.", "Es real. El informe lo escribieron científicos de la Universidad Nacional."],
   ["B", "OK. What can people like us do? We're not the government.", "Bueno. ¿Qué puede hacer gente como nosotros? No somos el gobierno."],
   ["A", "Lots of things. We can recycle more, use less plastic and take the bus instead of the car.", "Muchas cosas. Podemos reciclar más, usar menos plástico y tomar el bus en vez del carro."],
   ["B", "The car? But I need it to go to work!", "¿El carro? ¡Pero lo necesito para ir a trabajar!"],
   ["A", "Twice a week, then. It reduces your carbon footprint, and you'll save money.", "Dos veces por semana, entonces. Reduce tu huella de carbono y vas a ahorrar plata."],
   ["B", "Hmm. You sound like your mother.", "Mmm. Hablas igualito a tu mamá."],
   ["A", "Because Mom is right! Nature is our home, Dad.", "¡Porque mi mamá tiene razón! La naturaleza es nuestra casa, papá."]
  ]
 },
 practice: [
  M("___ is one of the biggest problems in big cities.", ["Pollution", "The pollution of", "A pollution", "Pollutions"], 0, "En general → sin artículo."),
  M("Coffee is grown in ___ Andes.", ["the", "—", "a", "an"], 0, "Cordilleras → the."),
  M("A long period without rain is a ___.", ["drought", "flood", "glacier", "waste"], 0),
  F("We should ___ glass, paper and plastic. (reciclar)", ["recycle"]),
  L("According to a new report, more than half of the waste in the city could be recycled, but only ten percent is recycled at the moment.", "¿Cuánto se recicla hoy?", ["El diez por ciento", "Más de la mitad", "Nada", "El cincuenta por ciento"], 0),
  O("Climate change is making droughts and floods more extreme.")
 ],
 more: [
  R("We need to protect the environment.", "Tenemos que proteger el medio ambiente."),
  R("The jaguar is an endangered species.", "El jaguar es una especie en peligro."),
  D("Deforestation is destroying the Amazon rainforest."),
  D("According to scientists, the glaciers are melting."),
  M("I love ___. I go hiking every weekend.", ["nature", "the nature", "a nature", "natures"], 0),
  M("¿Cuál es correcta?", ["The Magdalena flows into the Caribbean Sea.", "Magdalena flows into Caribbean Sea.", "The Magdalena flows into Caribbean Sea.", "A Magdalena flows into the Caribbean Sea."], 0),
  L("The city has banned single-use plastic bags in supermarkets. Now customers have to bring their own bags or pay for paper ones.", "¿Qué tienen que hacer ahora los clientes?", ["Llevar sus bolsas o pagar las de papel", "Pagar las de plástico", "Comprar solo en línea", "Nada"], 0),
  W("Escribe un artículo corto para una revista (mínimo 90 palabras) sobre un problema ambiental de tu región: qué pasa, por qué, según quién, y qué pueden hacer el gobierno y las personas. Cuida el uso de the y de las generalizaciones sin artículo.", 90, [["pollution", "deforestation", "waste", "drought", "flood", "climate change", "global warming", "plastic", "recycle"], ["according to", "scientists", "report"], ["the government", "people", "we can", "we should"], ["because", "as a result", "so that", "in order to"]])
 ],
 exam: M("___ is getting worse in Bogotá because of the traffic.", ["Air pollution", "The air pollution of", "An air pollution", "Air pollutions"], 0),
 exam2: F("The jaguar is an ___ species. (en peligro)", ["endangered"])
},
/* ───────── Día 39 ───────── */
{
 id: "b1-u8-l4",
 title: "Crimen y justicia: prefijos y sufijos",
 goal: "Contar un delito, entender una noticia policial y formar palabras con prefijos y sufijos.",
 theory: [
  { p: "Vocabulario del **crimen**: los delitos (**robbery** robo, **burglary** robo en una casa, **theft** hurto, **fraud** estafa, **vandalism**), las personas (**thief / thieves**, **burglar**, **pickpocket** carterista, **witness** testigo, **victim** víctima, **suspect** sospechoso, **judge** juez) y las acciones (**steal** robar algo, **rob** robar a alguien o un lugar, **arrest**, **report a crime**, **be sentenced to**)." },
  { ex: [["Someone stole my phone on the bus.", "Alguien me robó el celular en el bus."], ["Two men robbed a bank in the city centre.", "Dos hombres robaron un banco en el centro."], ["The police arrested the suspect.", "La policía arrestó al sospechoso."], ["A witness saw the burglar.", "Un testigo vio al ladrón."], ["He was sentenced to five years in prison.", "Lo condenaron a cinco años de cárcel."]] },
  { p: "**Prefijos** que dan el significado contrario: **un-** (unfair, unlucky), **dis-** (dishonest, disagree), **il-** antes de l (illegal), **im-** antes de m / p (impossible, impatient), **ir-** antes de r (irresponsible), **in-** (incorrect). **Sufijos** que cambian la clase de palabra: **-ery / -ty** (robbery, honesty), **-ment** (punishment), **-ness** (kindness), **-ful** (con: careful, helpful), **-less** (sin: careless, useless)." },
  { ex: [["It's illegal to drive without a licence.", "Es ilegal manejar sin licencia."], ["The thief was very dishonest.", "El ladrón era muy deshonesto."], ["It was careless to leave the door open.", "Fue un descuido dejar la puerta abierta."], ["Be careful with your bag in the metro.", "Ten cuidado con tu bolso en el metro."], ["The punishment was too light.", "El castigo fue muy leve."]] },
  { tip: "**Steal** se usa con la cosa (**They stole my wallet**) y **rob** con la persona o el lugar (**They robbed me / They robbed the bank**). Decir «they robbed my wallet» es un error muy común." }
 ],
 vocab: [
  ["crime", "sustantivo", "delito, crimen", "Crime has gone down this year."],
  ["robbery", "sustantivo", "robo, atraco", "There was a robbery at the bank."],
  ["burglary", "sustantivo", "robo (a una casa)", "Burglaries happen at night."],
  ["theft", "sustantivo", "hurto", "Phone theft is common."],
  ["fraud", "sustantivo", "fraude, estafa", "It was an online fraud."],
  ["thief", "sustantivo", "ladrón (plural thieves)", "The thief ran away."],
  ["pickpocket", "sustantivo", "carterista, raponero", "Watch out for pickpockets."],
  ["witness", "sustantivo", "testigo", "Were there any witnesses?"],
  ["victim", "sustantivo", "víctima", "The victim reported the crime."],
  ["suspect", "sustantivo", "sospechoso", "The suspect was arrested."],
  ["steal", "verbo", "robar (algo) (stole, stolen)", "He stole a car."],
  ["rob", "verbo", "robar (a alguien / un lugar)", "They robbed a shop."],
  ["arrest", "verbo", "arrestar, capturar", "The police arrested him."],
  ["report", "verbo", "denunciar, reportar", "I reported the theft."],
  ["sentence", "verbo / sustantivo", "condenar; condena", "He was sentenced to ten years."],
  ["illegal", "adjetivo", "ilegal", "It's illegal to sell that."],
  ["dishonest", "adjetivo", "deshonesto", "A dishonest seller."],
  ["careless", "adjetivo", "descuidado", "Don't be careless with your phone."],
  ["careful", "adjetivo", "cuidadoso", "Be careful in crowded places."],
  ["punishment", "sustantivo", "castigo", "The punishment should be fair."],
  ["unfair", "adjetivo", "injusto", "The sentence was unfair."],
  ["scam", "sustantivo", "estafa, timo", "That message is a scam."]
 ],
 dialogue: {
  title: "Me robaron el celular",
  scene: "A Mauricio le robaron el celular en TransMilenio. Va a poner la denuncia y habla con un policía.",
  a: "Policía", b: "Mauricio",
  lines: [
   ["A", "Good afternoon. How can I help you?", "Buenas tardes. ¿En qué le puedo ayudar?"],
   ["B", "I'd like to report a theft. Someone stole my phone on the TransMilenio.", "Quiero denunciar un hurto. Alguien me robó el celular en TransMilenio."],
   ["A", "I'm sorry to hear that. When did it happen?", "Lamento oír eso. ¿Cuándo pasó?"],
   ["B", "About an hour ago, at the Calle 72 station. It was very crowded.", "Hace como una hora, en la estación de la Calle 72. Estaba muy lleno."],
   ["A", "Did you see the thief?", "¿Vio al ladrón?"],
   ["B", "Not really. A man pushed me, and when I looked in my pocket, the phone wasn't there.", "No mucho. Un hombre me empujó y cuando busqué en el bolsillo, el celular ya no estaba."],
   ["A", "That's a common trick. Pickpockets usually work in pairs. One pushes you and the other steals.", "Es un truco común. Los carteristas suelen trabajar en pareja. Uno lo empuja y el otro roba."],
   ["B", "I feel so careless. I should have kept it in my backpack.", "Me siento tan descuidado. Debí guardarlo en la maleta."],
   ["A", "Don't blame yourself. Were there any witnesses?", "No se culpe. ¿Hubo testigos?"],
   ["B", "A woman said she saw a tall man in a red cap running away.", "Una señora dijo que vio a un hombre alto con gorra roja salir corriendo."],
   ["A", "That's useful. Last week we arrested a suspect who matches that description.", "Eso sirve. La semana pasada arrestamos a un sospechoso que coincide con esa descripción."],
   ["B", "Really? Could I get my phone back?", "¿En serio? ¿Podría recuperar el celular?"],
   ["A", "It's possible, but unlikely. Call your phone company to block it, and be careful with scam messages asking for your passwords.", "Es posible, pero poco probable. Llame a la empresa de telefonía para bloquearlo y tenga cuidado con mensajes de estafa que le pidan sus claves."],
   ["B", "Thank you, officer. You've been very helpful.", "Gracias, agente. Ha sido muy amable."]
  ]
 },
 practice: [
  M("Someone ___ my bike last night.", ["stole", "robbed", "stolen", "robbered"], 0, "Steal + la cosa."),
  M("Two men ___ the jewellery shop.", ["robbed", "stole", "stealed", "rob"], 0, "Rob + el lugar o la persona."),
  M("It's ___ to park here. You'll get a fine.", ["illegal", "unlegal", "dislegal", "inlegal"], 0),
  F("A person who sees a crime is a ___. (testigo)", ["witness"]),
  L("The police arrested two suspects after a robbery at a supermarket. A witness recorded the thieves with her phone.", "¿Cómo ayudó la testigo?", ["Grabó a los ladrones con el celular", "Llamó a la policía", "Persiguió a los ladrones", "Cerró la puerta"], 0),
  O("I'd like to report a theft. Someone stole my wallet.")
 ],
 more: [
  R("The police arrested the suspect yesterday.", "La policía arrestó al sospechoso ayer."),
  R("Be careful with pickpockets in the metro.", "Ten cuidado con los carteristas en el metro."),
  D("He was sentenced to five years in prison."),
  D("Don't open that message. It's a scam."),
  M("Leaving your car open was very ___.", ["careless", "careful", "uncareful", "carelessness"], 0),
  M("¿Cuál es el contrario de «honest»?", ["dishonest", "unhonest", "inhonest", "imhonest"], 0),
  L("Phone theft has gone down by fifteen percent this year, according to the police, but online fraud has increased.", "¿Qué delito ha aumentado?", ["El fraude en línea", "El robo de celulares", "Los atracos a bancos", "El vandalismo"], 0),
  W("Escribe una noticia corta (mínimo 80 palabras) sobre un delito, real o inventado: qué pasó, dónde, quién fue la víctima, qué dijeron los testigos y qué hizo la policía. Usa al menos cuatro palabras con prefijo o sufijo (illegal, dishonest, careless, robbery, punishment…).", 80, [["stole", "robbed", "theft", "robbery", "burglary", "fraud", "scam"], ["witness", "victim", "suspect", "police", "arrested"], ["illegal", "dishonest", "careless", "careful", "unfair", "punishment", "impossible", "irresponsible"]])
 ],
 exam: M("They ___ my wallet while I was sleeping on the bus.", ["stole", "robbed", "stealed", "robbed of"], 0),
 exam2: F("It was ___ of you to leave the door open. (descuidado)", ["careless"])
},
/* ───────── Día 40 ───────── */
{
 id: "b1-u8-l5",
 title: "Resolver problemas: quejarse, disculparse y escribir una reseña",
 goal: "Quejarte en persona con cortesía, pedir una solución, disculparte y escribir una reseña.",
 theory: [
  { p: "Para **quejarte** en persona sin sonar agresivo: **Excuse me, I'm afraid there's a problem with…** · **I'd like to make a complaint.** · **This isn't what I ordered.** · **It doesn't work.** Para pedir una solución: **Could I have a refund / an exchange?** · **I'd like to speak to the manager, please.** · **What can you do about it?**" },
  { ex: [["Excuse me, I'm afraid there's a problem with my room.", "Disculpe, me temo que hay un problema con mi habitación."], ["This isn't what I ordered. I asked for chicken.", "Esto no es lo que pedí. Pedí pollo."], ["I bought these headphones yesterday, and they don't work.", "Compré estos audífonos ayer y no funcionan."], ["Could I have a refund, please?", "¿Me podrían devolver el dinero, por favor?"], ["I'd like to speak to the manager.", "Quisiera hablar con el gerente."]] },
  { p: "Para **disculparte** y responder: **I'm really sorry about that.** · **I apologize for the inconvenience.** · **It won't happen again.** · **Let me fix that for you.** · **I didn't mean to…** Y para aceptar una disculpa: **That's OK. No harm done.** · **Don't worry about it.**" },
  { ex: [["I'm really sorry. Let me change it for you.", "Lo siento mucho. Déjeme cambiárselo."], ["We apologize for the delay.", "Pedimos disculpas por la demora."], ["I didn't mean to be rude.", "No quise ser grosero."], ["It won't happen again.", "No volverá a pasar."], ["Don't worry about it. No harm done.", "No te preocupes. No pasó nada."]] },
  { p: "Una **reseña** en internet: título, qué compraste o dónde fuiste, lo bueno, lo malo, cómo resolvieron el problema y una recomendación con estrellas: **I would / wouldn't recommend it.** · **Overall,…** · **4 out of 5.**" },
  { tip: "**Refund** = te devuelven el dinero. **Exchange** = te cambian el producto. Y **I'm afraid…** al empezar suaviza mucho una queja o una mala noticia." }
 ],
 vocab: [
  ["complaint", "sustantivo", "queja, reclamo", "I'd like to make a complaint."],
  ["complain", "verbo", "quejarse", "She complained about the noise."],
  ["I'm afraid…", "expresión", "me temo que…", "I'm afraid there's a mistake."],
  ["refund", "sustantivo", "reembolso", "Can I have a refund?"],
  ["exchange", "sustantivo / verbo", "cambio; cambiar", "I'd like to exchange this shirt."],
  ["receipt", "sustantivo", "recibo, tiquete de compra", "Do you have the receipt?"],
  ["faulty", "adjetivo", "defectuoso", "The charger is faulty."],
  ["damaged", "adjetivo", "dañado", "The box was damaged."],
  ["manager", "sustantivo", "gerente, encargado", "Can I speak to the manager?"],
  ["apologize", "verbo", "disculparse", "We apologize for the delay."],
  ["inconvenience", "sustantivo", "molestia, inconveniente", "Sorry for the inconvenience."],
  ["It won't happen again.", "expresión", "No volverá a pasar.", "I'm sorry. It won't happen again."],
  ["No harm done.", "expresión", "No pasó nada.", "Don't worry. No harm done."],
  ["I didn't mean to…", "expresión", "No fue mi intención…", "I didn't mean to hurt you."],
  ["discount", "sustantivo", "descuento", "They gave us a discount."],
  ["compensation", "sustantivo", "compensación", "We received compensation."],
  ["overall", "adverbio", "en general, en resumen", "Overall, it was a good experience."],
  ["reliable", "adjetivo", "confiable", "The service is reliable."],
  ["rude", "adjetivo", "grosero", "The waiter was rude."],
  ["polite", "adjetivo", "educado, amable", "The staff were polite."],
  ["out of", "expresión", "de (en una calificación)", "Four out of five."],
  ["solve", "verbo", "resolver", "They solved the problem quickly."]
 ],
 dialogue: {
  title: "Problema en el restaurante",
  scene: "Alejandro celebra el cumpleaños de su esposa en un restaurante, pero le traen el plato equivocado y frío.",
  a: "Alejandro", b: "Mesera",
  lines: [
   ["A", "Excuse me, I'm afraid there's a problem with our order.", "Disculpe, me temo que hay un problema con nuestro pedido."],
   ["B", "Oh, I'm sorry. What's wrong?", "Ay, lo siento. ¿Qué pasó?"],
   ["A", "This isn't what I ordered. I asked for the grilled salmon, and this is chicken.", "Esto no es lo que pedí. Pedí el salmón a la parrilla y esto es pollo."],
   ["B", "I'm really sorry about that. It must have been a mistake in the kitchen.", "Lo siento mucho. Debió ser un error en la cocina."],
   ["A", "Also, my wife's soup is cold.", "Además, la sopa de mi esposa está fría."],
   ["B", "I apologize. Let me take both dishes back and bring you the right ones.", "Le pido disculpas. Déjeme llevarme los dos platos y traerles los correctos."],
   ["A", "Thank you. How long will it take? It's her birthday, and we have tickets for a show at nine.", "Gracias. ¿Cuánto se demora? Es su cumpleaños y tenemos boletas para un show a las nueve."],
   ["B", "About ten minutes. I'll ask the chef to prepare it first.", "Unos diez minutos. Le voy a pedir al chef que lo prepare primero."],
   ["A", "OK. I didn't mean to sound rude, but we're in a bit of a hurry.", "Bueno. No quise sonar grosero, pero estamos un poco de afán."],
   ["B", "Don't worry about it. You weren't rude at all.", "No se preocupe. No fue grosero para nada."],
   ["B", "Here you are: the salmon and a hot soup. And the dessert is on the house, for the birthday.", "Aquí tiene: el salmón y una sopa caliente. Y el postre va por cuenta de la casa, por el cumpleaños."],
   ["A", "That's very kind of you. Thank you for solving it so quickly.", "Muy amable de su parte. Gracias por resolverlo tan rápido."],
   ["B", "It won't happen again. Enjoy your meal, and happy birthday!", "No volverá a pasar. ¡Disfruten la comida y feliz cumpleaños!"]
  ]
 },
 practice: [
  M("Para empezar una queja con cortesía dices:", ["Excuse me, I'm afraid there's a problem.", "Hey, this is terrible!", "You made a mistake, fix it.", "I want my money now."], 0),
  M("These shoes are too small. Could I ___ them for a bigger size?", ["exchange", "refund", "receipt", "complain"], 0),
  M("—I'm so sorry I broke your glass. —Don't worry. ___", ["No harm done.", "It won't happen again.", "I apologize.", "I'm afraid so."], 0),
  F("We ___ for the inconvenience. (pedimos disculpas)", ["apologize", "apologise"]),
  L("I bought this charger last week, but it's faulty. It doesn't charge my phone. Do you have the receipt? Yes, here it is. Then we can give you a refund or an exchange.", "¿Qué le ofrecen?", ["Reembolso o cambio", "Solo reembolso", "Un descuento", "Nada, porque no tiene recibo"], 0),
  O("I'd like to make a complaint. This isn't what I ordered.")
 ],
 more: [
  R("Could I have a refund, please?", "¿Me podrían hacer un reembolso, por favor?"),
  R("I didn't mean to be rude.", "No fue mi intención ser grosero."),
  D("I'm afraid the box was damaged when it arrived."),
  D("Overall, I would recommend this hotel."),
  M("Si quieres que te devuelvan el dinero, pides:", ["a refund", "an exchange", "a receipt", "a complaint"], 0),
  M("I'd like to speak to the ___, please. The waiter was very rude.", ["manager", "receipt", "customer", "witness"], 0),
  L("The flight was delayed for five hours. The airline apologized and gave every passenger a meal and a discount on their next trip.", "¿Qué recibieron los pasajeros?", ["Comida y un descuento", "Un reembolso completo", "Una noche de hotel", "Nada"], 0),
  W("Escribe una reseña en internet (mínimo 90 palabras) de un restaurante, hotel o tienda donde tuviste un problema: qué pasó, cómo te quejaste, cómo te respondieron y si lo recomiendas (con estrellas).", 90, [["problem", "complaint", "complained", "faulty", "damaged", "wrong", "cold", "late"], ["apologized", "apologised", "sorry", "refund", "exchange", "discount"], ["recommend", "overall", "out of", "stars"]])
 ],
 exam: M("The TV I bought is ___. It doesn't turn on.", ["faulty", "rude", "reliable", "overall"], 0),
 exam2: F("—I'm sorry I'm late again. —OK, but please make sure it won't ___ again. (vuelva a pasar)", ["happen"])
}
],
/* ───────── Quiz de la unidad 8 ───────── */
quiz: [
 M("___ the bad weather, the concert was a success.", ["Despite", "Although", "However", "Even though"], 0),
 M("I have two brothers. ___ of them lives in Bogotá. They both live in Cali.", ["Neither", "Both", "Either", "Any"], 0),
 M("___ is a serious problem in many rivers of the country.", ["Pollution", "The pollution of", "A pollution", "Pollutions"], 0),
 M("Someone ___ my laptop from the car.", ["stole", "robbed", "stolen", "robbered"], 0),
 M("Excuse me, ___ there's a problem with my bill.", ["I'm afraid", "I'm sorry that", "I'm afraid of", "I apologize"], 0),
 F("The ___ you study, the better your English will be. (más)", ["more"]),
 L("Although the hotel was beautiful, the room was dirty. I complained, and the manager apologized and gave us a better room. Overall, I'd give it four out of five.", "¿Qué hizo el gerente?", ["Se disculpó y les dio una mejor habitación", "Les hizo un reembolso", "No hizo nada", "Les dio un descuento"], 0),
 L("According to the report, deforestation has gone down by twenty percent. However, scientists say the forests are still in danger.", "¿Qué dicen los científicos?", ["Que los bosques siguen en peligro", "Que el problema ya se resolvió", "Que la deforestación subió", "Que no hay datos"], 0),
 W("Escribe un artículo de opinión (mínimo 90 palabras) sobre si tu ciudad es un buen lugar para vivir. Compara dos barrios o dos ciudades (both, neither, much better…), usa conectores de contraste (although, despite, however) y menciona un problema del medio ambiente o de seguridad.", 90, [["although", "despite", "in spite of", "however", "whereas"], ["both", "neither", "either", "much", "far", "slightly"], ["pollution", "crime", "theft", "traffic", "waste", "safe", "dangerous", "environment"]]),
 O("I'd like to exchange these shoes. They're too small."),
 O("Although it was expensive, it was worth it.")
],
pool: [
 M("___ he's very rich, he takes the bus every day.", ["Although", "Despite", "However", "In spite of"], 0),
 M("I'm saving money ___ buy a new car.", ["in order to", "so that", "despite", "whereas"], 0),
 M("You can pay ___ in cash or by card.", ["either", "both", "neither", "or"], 0),
 M("This phone is ___ better than the old one.", ["far", "very", "more", "too"], 0),
 M("Two men ___ the bank and escaped in a car.", ["robbed", "stole", "stealed", "robbed of"], 0),
 M("The opposite of 'fair' is:", ["unfair", "disfair", "infair", "imfair"], 0),
 F("Could I have a ___, please? I don't want the product any more. (reembolso)", ["refund"]),
 F("Coffee is grown in ___ Andes.", ["the"]),
 L("Both apartments are near the metro, but the second one is slightly cheaper and much quieter.", "¿Qué ventajas tiene el segundo apartamento?", ["Es un poco más barato y mucho más tranquilo", "Está más cerca del metro", "Es más grande", "Tiene parqueadero"], 0),
 L("I didn't mean to be rude. I'm really sorry. Don't worry about it. No harm done.", "¿Qué responde la otra persona?", ["Que no se preocupe, no pasó nada", "Que está muy enojada", "Que llame al gerente", "Que no lo perdona"], 0),
 L("A pickpocket stole a tourist's wallet in the old city. Luckily, a witness saw him and the police arrested him ten minutes later.", "¿Cuándo arrestaron al carterista?", ["Diez minutos después", "Al día siguiente", "Una hora después", "No lo arrestaron"], 0),
 W("Escribe un correo de queja a una tienda en línea (mínimo 90 palabras): el producto llegó dañado o defectuoso, explica el problema, pide un reembolso o un cambio y usa conectores (although, however, so that).", 90, [["damaged", "faulty", "broken", "doesn't work", "wrong"], ["refund", "exchange", "replacement"], ["although", "however", "so that", "in order to", "despite"]]),
 L("Although I exercise three times a week, my diet isn't very healthy. I eat too much junk food, and I don't sleep enough because of stress at work.", "¿Qué problema tiene?", ["Come mucha comida chatarra y duerme poco por el estrés", "No hace ejercicio", "Duerme demasiado", "Trabaja muy poco"], 0),
 M("I've started going to the gym ___ reduce stress and sleep better.", ["in order to", "so that", "despite", "although"], 0),
 O("Neither of the hotels has a pool."),
 O("Pollution is getting worse because of the traffic."),
 O("I'm really sorry. It won't happen again.")
]
};
