/* C2 · Unidad 8 · Proficiency: escritura y cultura (Días 36–40). Se arma con: node tools/build-level.js 5 content/c2 */
const M = (q, o, a, x) => ({ t: "mc", q, o, a, ...(x ? { x } : {}) }), F = (q, ans) => ({ t: "fill", q, ans }),
  L = (say, q, o, a) => ({ t: "listen", say, q, o, a }), O = text => ({ t: "oral", text }), D = say => ({ t: "dict", say }),
  W = (q, min, keys) => ({ t: "write", q, min, keys }), R = (s, es) => ({ t: "order", words: s.split(" "), es });

module.exports = {
n: 8,
title: "Proficiency: escritura y cultura",
lessons: [
/* ───────── Día 36 ───────── */
{
 id: "c2-u8-l1",
 title: "Resumir y evaluar dos textos: el turismo y la ciudad",
 goal: "Escribir un ensayo que sintetice las ideas principales de dos textos y las evalúe con tu propia postura.",
 theory: [
  { p: "La **parte 1 del writing del C2 Proficiency** presenta **dos textos cortos** con posturas distintas sobre un tema. Debes **resumir** y **evaluar** las ideas principales de ambos, integrándolas con tu opinión, en 240–280 palabras y **con tus propias palabras** (copiar frases del texto penaliza). Estructura: introducción del tema · síntesis y evaluación del texto 1 · del texto 2 (o comparación por ideas) · tu postura." },
  { ex: [["Both texts address the impact of mass tourism on historic cities.", "Ambos textos abordan el impacto del turismo masivo en las ciudades históricas."], ["The first writer contends that tourism revitalises local economies.", "El primer autor sostiene que el turismo revitaliza las economías locales."], ["The second, by contrast, maintains that it displaces residents.", "El segundo, en cambio, afirma que desplaza a los residentes."], ["While the former focuses on economic benefits, the latter highlights social costs.", "Mientras el primero se centra en los beneficios económicos, el segundo resalta los costos sociales."], ["Neither writer, however, considers the role of local government.", "Ninguno de los dos autores, sin embargo, considera el papel del gobierno local."]] },
  { p: "Verbos de reporte precisos: **contends, maintains, asserts, acknowledges, concedes, dismisses, overlooks, underestimates, rightly / convincingly points out, fails to take into account**. Para evaluar: **This argument is persuasive insofar as… · The writer's claim is somewhat undermined by… · A more convincing point is… · I am inclined to agree with…**" },
  { ex: [["The writer rightly points out that rents have soared.", "El autor señala con razón que los arriendos se han disparado."], ["This argument is persuasive insofar as it is supported by data.", "Este argumento es persuasivo en la medida en que está respaldado por datos."], ["The claim is somewhat undermined by the lack of evidence.", "La afirmación se debilita un poco por la falta de evidencia."], ["The author fails to take into account seasonal workers.", "El autor no tiene en cuenta a los trabajadores temporales."], ["I am inclined to agree with the second writer.", "Me inclino a estar de acuerdo con el segundo autor."]] },
  { tip: "Paráfrasis, no copia: si el texto dice **tourism brings money to the city**, escribe **tourism provides an economic boost**. Cambia vocabulario **y** estructura. El evaluador busca síntesis, no un resumen texto por texto." }
 ],
 vocab: [
  ["contend", "verbo", "sostener, argumentar", "She contends that the policy has failed."],
  ["maintain", "verbo", "afirmar, mantener (una postura)", "He maintains that rents are fair."],
  ["assert", "verbo", "aseverar", "The author asserts that tourism is essential."],
  ["acknowledge", "verbo", "reconocer", "She acknowledges the problem."],
  ["concede", "verbo", "conceder, admitir", "He concedes that prices have risen."],
  ["dismiss", "verbo", "desestimar", "The writer dismisses these concerns."],
  ["overlook", "verbo", "pasar por alto", "Both writers overlook the environment."],
  ["insofar as", "conjunción", "en la medida en que", "It's valid insofar as it goes."],
  ["be inclined to", "expresión", "inclinarse a", "I'm inclined to agree."],
  ["the former / the latter", "expresión", "el primero / el segundo", "The former is optimistic; the latter is not."],
  ["mass tourism", "expresión", "turismo masivo", "Mass tourism affects Cartagena."],
  ["gentrification", "sustantivo", "gentrificación", "Gentrification pushes locals out."],
  ["displace", "verbo", "desplazar", "Residents are being displaced."],
  ["short-term rentals", "expresión", "alquileres de corta estancia", "Short-term rentals raise prices."],
  ["soar", "verbo", "dispararse", "Rents have soared."],
  ["revitalise", "verbo", "revitalizar", "Tourism revitalised the old town."],
  ["overcrowding", "sustantivo", "hacinamiento, exceso de gente", "Overcrowding in the old city."],
  ["livelihood", "sustantivo", "sustento, medio de vida", "Tourism is their livelihood."],
  ["cap", "verbo / sustantivo", "limitar; tope", "Cap the number of visitors."],
  ["synthesise", "verbo", "sintetizar", "Synthesise both texts."],
  ["in your own words", "expresión", "con tus propias palabras", "Write it in your own words."],
  ["persuasive", "adjetivo", "persuasivo, convincente", "A persuasive argument."]
 ],
 dialogue: {
  title: "Corrigiendo el ensayo",
  scene: "Felipe le muestra su ensayo de práctica del C2 a su tutora, Dr. Harris. El tema: el turismo en Cartagena.",
  a: "Dr. Harris", b: "Felipe",
  lines: [
   ["A", "I've read your essay. The content is strong, but there's a problem with the structure.", "Leí tu ensayo. El contenido es sólido, pero hay un problema con la estructura."],
   ["B", "Oh no. What's wrong?", "Ay no. ¿Qué está mal?"],
   ["A", "You summarise the first text, then the second, and only then give your opinion. It reads like three separate summaries.", "Resumes el primer texto, luego el segundo y solo al final das tu opinión. Se lee como tres resúmenes separados."],
   ["B", "I thought that was what they wanted.", "Pensé que eso era lo que querían."],
   ["A", "Not quite. They want you to synthesise and evaluate. For example: 'While the first writer contends that tourism revitalises the old city, the second rightly points out that it displaces residents.'", "No exactamente. Quieren que sintetices y evalúes. Por ejemplo: «Mientras el primer autor sostiene que el turismo revitaliza la ciudad antigua, el segundo señala con razón que desplaza a los residentes»."],
   ["B", "I see. So I compare the ideas directly, not text by text.", "Ya veo. Entonces comparo las ideas directamente, no texto por texto."],
   ["A", "Exactly. And there's another issue: in the second paragraph you copied a whole sentence from the text.", "Exacto. Y hay otro problema: en el segundo párrafo copiaste una frase completa del texto."],
   ["B", "Which one?", "¿Cuál?"],
   ["A", "'Short-term rentals have pushed up prices beyond the reach of local families.' You need to put it in your own words.", "«Los alquileres de corta estancia han subido los precios más allá del alcance de las familias locales». Tienes que decirlo con tus propias palabras."],
   ["B", "Something like: 'The second writer attributes the soaring cost of housing to the boom in holiday lets'?", "¿Algo como: «El segundo autor atribuye el alza del costo de la vivienda al auge de los alquileres vacacionales»?"],
   ["A", "Much better. Now, your evaluation is a little weak. Which argument do you find more persuasive, and why?", "Mucho mejor. Ahora, tu evaluación está un poco débil. ¿Qué argumento te parece más persuasivo y por qué?"],
   ["B", "I'm inclined to agree with the second writer, but only partly. Both of them overlook the role of local government, which could cap the number of rentals.", "Me inclino por el segundo autor, pero solo en parte. Ambos pasan por alto el papel del gobierno local, que podría limitar el número de alquileres."],
   ["A", "That's a C2-level point. Put it in the conclusion, and you've got a very good essay.", "Ese es un punto de nivel C2. Ponlo en la conclusión y tendrás un ensayo muy bueno."]
  ]
 },
 practice: [
  M("En la parte 1 del writing del C2 debes:", ["resumir y evaluar ideas de dos textos con tus propias palabras", "copiar las mejores frases de los textos", "resumir solo un texto", "contar una historia personal"], 0),
  M("The first writer ___ that tourism benefits the local economy.", ["contends", "contents", "contains", "contends to"], 0),
  M("While the former focuses on benefits, ___ highlights the costs.", ["the latter", "the later", "the last", "the after"], 0),
  F("This argument is persuasive ___ as it is supported by data. (en la medida en que)", ["insofar"]),
  L("Neither writer, however, takes into account the role of local government, which could regulate short-term rentals.", "¿Qué critica quien habla?", ["Que ningún autor considera el papel del gobierno local", "Que los dos autores están de acuerdo", "Que no hay datos", "Que los alquileres son baratos"], 0),
  O("I am inclined to agree with the second writer, but only partly.")
 ],
 more: [
  R("Both texts address the impact of mass tourism.", "Ambos textos abordan el impacto del turismo masivo."),
  R("The writer rightly points out that rents have soared.", "El autor señala con razón que los arriendos se dispararon."),
  D("The author fails to take into account seasonal workers."),
  D("The claim is somewhat undermined by the lack of evidence."),
  M("Si un autor «pasa por alto» algo, en inglés:", ["overlooks it", "overviews it", "looks over it", "overtakes it"], 0),
  M("«Rents have gone up a lot» parafraseado a nivel C2:", ["Rents have soared.", "Rents have gone up a lot.", "Rents are more.", "Rents have upped."], 0),
  L("The first writer concedes that tourism creates jobs, but dismisses the idea that it benefits residents, arguing that most profits leave the city.", "¿Qué desestima el primer autor?", ["Que el turismo beneficie a los residentes", "Que el turismo cree empleo", "Que haya turistas", "Que los precios suban"], 0),
  W("Escribe un ensayo (mínimo 180 palabras) que resuma y evalúe estas dos posturas: TEXTO 1: «Tourism has revitalised Cartagena's old city, creating jobs and funding the restoration of colonial buildings.» TEXTO 2: «Holiday rentals have driven local families out of the historic centre, turning it into a theme park for visitors.» Usa tus propias palabras, verbos de reporte precisos y da tu postura.", 180, [["the first writer", "the first text", "the former", "the second writer", "the latter"], ["contends", "maintains", "argues", "asserts", "acknowledges", "concedes", "points out", "dismisses", "overlooks"], ["persuasive", "convincing", "insofar as", "undermined", "fails to"], ["i am inclined", "in my view", "on balance", "i would argue"]])
 ],
 exam: M("Both writers ___ the environmental impact of tourism. (pasan por alto)", ["overlook", "overview", "overtake", "look over"], 0),
 exam2: F("The ___ argues for growth, while the latter warns of its costs. (el primero)", ["former"])
},
/* ───────── Día 37 ───────── */
{
 id: "c2-u8-l2",
 title: "La carta al editor: defender el patrimonio de tu ciudad",
 goal: "Escribir una carta a un periódico con un tono firme, argumentado y cortés.",
 theory: [
  { p: "La **carta al editor** (letter to the editor) responde a un artículo o a una noticia. Tiene un tono **formal pero apasionado**. Apertura: **Sir / Madam,** o **Dear Editor,** · **I read with dismay / great interest your recent article on…** · **I am writing in response to…** Cuerpo: tu postura con argumentos, concesión al otro lado y una propuesta. Cierre: **I urge the council to reconsider… · Yours faithfully,**" },
  { ex: [["I read with dismay your article on the planned demolition of the old market.", "Leí con consternación su artículo sobre la demolición prevista de la antigua plaza de mercado."], ["I am writing in response to the council's recent decision.", "Escribo en respuesta a la reciente decisión del concejo."], ["Granted, the building is in poor condition, but…", "Es cierto que el edificio está en mal estado, pero…"], ["It would be a tragedy if this landmark were lost.", "Sería una tragedia que se perdiera este hito."], ["I urge the council to reconsider its decision.", "Insto al concejo a reconsiderar su decisión."]] },
  { p: "Recursos para un tono **firme pero cortés**: preguntas retóricas (**Must we sacrifice our history for another car park?**), ironía moderada (**One can only assume that…**), concesión (**While I appreciate that…, I cannot accept that…**), y una propuesta concreta (**Surely a compromise could be reached, such as…**)." },
  { ex: [["Must we really sacrifice our history for another car park?", "¿De verdad debemos sacrificar nuestra historia por otro parqueadero?"], ["One can only assume that nobody consulted the residents.", "Uno solo puede suponer que nadie consultó a los residentes."], ["While I appreciate the need for parking, I cannot accept this plan.", "Aunque entiendo la necesidad de parqueaderos, no puedo aceptar este plan."], ["Surely a compromise could be reached.", "Seguramente se podría llegar a un acuerdo."], ["Future generations will not forgive us.", "Las generaciones futuras no nos lo perdonarán."]] },
  { tip: "Con **Sir / Madam** o **Dear Editor** se cierra con **Yours faithfully**. Muchos periódicos publican las cartas sin saludo, empezando directamente con la idea principal: **Your article on… (12 May) overlooks a crucial point.**" }
 ],
 vocab: [
  ["letter to the editor", "expresión", "carta al editor", "She wrote a letter to the editor."],
  ["read with dismay", "expresión", "leer con consternación", "I read with dismay your article."],
  ["in response to", "expresión", "en respuesta a", "I am writing in response to…"],
  ["demolition", "sustantivo", "demolición", "The demolition of the market."],
  ["landmark", "sustantivo", "hito, lugar emblemático", "The cathedral is a landmark."],
  ["heritage", "sustantivo", "patrimonio", "Our architectural heritage."],
  ["listed building", "expresión", "edificio protegido (patrimonio)", "It's a listed building."],
  ["urge", "verbo", "instar, exhortar", "I urge you to reconsider."],
  ["reconsider", "verbo", "reconsiderar", "Please reconsider the decision."],
  ["one can only assume", "expresión", "uno solo puede suponer", "One can only assume they didn't care."],
  ["surely", "adverbio", "seguramente, sin duda (retórico)", "Surely there's another option."],
  ["compromise", "sustantivo", "acuerdo intermedio", "A compromise could be reached."],
  ["sacrifice", "verbo", "sacrificar", "Don't sacrifice our history."],
  ["consult", "verbo", "consultar", "Residents were not consulted."],
  ["short-sighted", "adjetivo", "miope, cortoplacista", "A short-sighted decision."],
  ["irreplaceable", "adjetivo", "irremplazable", "The building is irreplaceable."],
  ["in disrepair", "expresión", "en mal estado, deteriorado", "The market has fallen into disrepair."],
  ["restore", "verbo", "restaurar", "Restore it instead of demolishing it."],
  ["developer", "sustantivo", "constructora, urbanizador", "The developer wants to build flats."],
  ["council", "sustantivo", "concejo, alcaldía", "The council approved the plan."],
  ["outcry", "sustantivo", "protesta, clamor", "There was a public outcry."],
  ["Yours faithfully", "expresión", "Atentamente (sin nombre del destinatario)", "Yours faithfully, Ana Gómez"]
 ],
 dialogue: {
  title: "¿Qué le escribimos al periódico?",
  scene: "La alcaldía anunció que demolerá una antigua estación de tren en Bucaramanga para hacer un parqueadero. Lucía y su vecino Germán, arquitecto, redactan una carta al periódico local.",
  a: "Lucía", b: "Germán",
  lines: [
   ["A", "How should we start? 'Dear Editor, we are very angry'?", "¿Cómo empezamos? «Querido editor, estamos muy bravos»?"],
   ["B", "Too emotional. Let's try: 'Sir, I read with dismay your article on the planned demolition of the old railway station.'", "Muy emocional. Probemos: «Señor, leí con consternación su artículo sobre la demolición prevista de la antigua estación del tren»."],
   ["A", "Much better. Then we explain why it matters.", "Mucho mejor. Luego explicamos por qué importa."],
   ["B", "Yes. It's one of the city's few remaining examples of early twentieth-century architecture. It's irreplaceable.", "Sí. Es uno de los pocos ejemplos que quedan en la ciudad de arquitectura de principios del siglo veinte. Es irremplazable."],
   ["A", "But we should be fair. The building has fallen into disrepair.", "Pero debemos ser justos. El edificio está muy deteriorado."],
   ["B", "Agreed. 'Granted, the station is in poor condition, but that is an argument for restoring it, not demolishing it.'", "De acuerdo. «Es cierto que la estación está en mal estado, pero eso es un argumento para restaurarla, no para demolerla»."],
   ["A", "I love that. Can we add a rhetorical question?", "Me encanta. ¿Podemos agregar una pregunta retórica?"],
   ["B", "'Must we really sacrifice our history for yet another car park?'", "«¿De verdad debemos sacrificar nuestra historia por otro parqueadero más?»"],
   ["A", "Perfect. And the council didn't consult anyone.", "Perfecto. Y la alcaldía no consultó a nadie."],
   ["B", "'One can only assume that residents' views were considered irrelevant.' A little irony doesn't hurt.", "«Uno solo puede suponer que la opinión de los residentes se consideró irrelevante». Un poco de ironía no sobra."],
   ["A", "And we finish with a proposal.", "Y terminamos con una propuesta."],
   ["B", "'Surely a compromise could be reached: restore the station as a cultural centre and build the car park underground. I urge the council to reconsider. Yours faithfully.'", "«Seguramente se puede llegar a un acuerdo: restaurar la estación como centro cultural y construir el parqueadero subterráneo. Insto a la alcaldía a reconsiderar. Atentamente»."],
   ["A", "Firm, but polite. Let's send it today.", "Firme, pero cortés. Mandémosla hoy."]
  ]
 },
 practice: [
  M("¿Cuál es la mejor apertura para una carta al editor?", ["I read with dismay your article on the demolition of the market.", "Hey editor, your article was bad.", "I am very angry!!!", "Hello, how are you?"], 0),
  M("A building that cannot be replaced is ___.", ["irreplaceable", "unreplaced", "disreplaceable", "replaceless"], 0),
  M("I ___ the council to reconsider its decision.", ["urge", "urgent", "urging to", "am urge"], 0),
  F("The old market has fallen into ___. (mal estado)", ["disrepair"]),
  L("While I appreciate the need for more parking, I cannot accept that the only solution is to destroy one of the city's last colonial houses.", "¿Qué concede quien escribe?", ["Que se necesitan más parqueaderos", "Que la casa no es importante", "Que la demolición es necesaria", "Que la alcaldía tiene razón"], 0),
  O("Must we really sacrifice our history for yet another car park?")
 ],
 more: [
  R("I am writing in response to your recent article.", "Escribo en respuesta a su artículo reciente."),
  R("Surely a compromise could be reached.", "Seguramente se podría llegar a un acuerdo."),
  D("The decision is short-sighted and irreversible."),
  D("One can only assume that nobody consulted the residents."),
  M("Si empiezas con «Sir» o «Dear Editor», cierras con:", ["Yours faithfully,", "Yours sincerely, love,", "Cheers,", "See you,"], 0),
  M("A decision that ignores long-term consequences is ___.", ["short-sighted", "far-sighted", "long-sighted", "sight-short"], 0),
  L("There was a public outcry when the developer announced plans to build a shopping centre on the site of the old theatre.", "¿Qué pasó cuando se anunció el plan?", ["Hubo una protesta pública", "Todos lo aplaudieron", "El teatro se restauró", "No pasó nada"], 0),
  W("Escribe una carta al editor de un periódico (mínimo 180 palabras) sobre un edificio o lugar histórico de tu ciudad que está en riesgo. Usa una apertura formal, una concesión, una pregunta retórica, un toque de ironía moderada y una propuesta concreta.", 180, [["sir", "madam", "dear editor", "i read with", "i am writing in response"], ["granted", "while i appreciate", "admittedly"], ["must we", "surely", "how can", "?"], ["one can only assume", "i urge", "a compromise", "reconsider", "yours faithfully"]])
 ],
 exam: M("I read with ___ your report on the closure of the library.", ["dismay", "dismiss", "dismal", "disarray"], 0),
 exam2: F("I ___ the mayor to reconsider this short-sighted decision. (insto)", ["urge"])
},
/* ───────── Día 38 ───────── */
{
 id: "c2-u8-l3",
 title: "Arte, arquitectura y patrimonio: describir y debatir",
 goal: "Describir edificios y obras con vocabulario preciso y debatir sobre restauración y patrimonio.",
 theory: [
  { p: "Para **describir arquitectura**: **façade** (fachada), **courtyard** (patio interior), **balcony**, **arch** (arco), **column**, **dome** (cúpula), **cobbled streets** (calles empedradas), **whitewashed walls** (paredes encaladas), **colonial / Republican / brutalist / Art Deco**, **ornate** (recargado) vs. **austere** (sobrio), **dilapidated** (ruinoso), **to blend in with the surroundings** (armonizar con el entorno)." },
  { ex: [["The house has a whitewashed façade and wooden balconies.", "La casa tiene una fachada encalada y balcones de madera."], ["The cloister is built around a shaded courtyard.", "El claustro está construido alrededor de un patio sombreado."], ["The cathedral's dome dominates the skyline.", "La cúpula de la catedral domina el horizonte."], ["Brutalist buildings divide opinion.", "Los edificios brutalistas dividen opiniones."], ["The new museum blends in beautifully with its surroundings.", "El nuevo museo armoniza muy bien con su entorno."]] },
  { p: "Para **debatir sobre patrimonio**: **restoration vs. renovation** (restaurar respetando el original / renovar modernizando), **authenticity**, **to preserve**, **to repurpose** (dar un nuevo uso), **adaptive reuse**, **a listed / protected building**, **public art**, **mural**, **curator**, **to commission** (encargar una obra). La pregunta clásica: **¿conservar tal cual, restaurar o modernizar?**" },
  { ex: [["The convent was repurposed as a hotel.", "El convento se convirtió en hotel."], ["Adaptive reuse can save old buildings.", "La reutilización adaptativa puede salvar edificios antiguos."], ["Critics argued that the restoration lacked authenticity.", "Los críticos dijeron que a la restauración le faltó autenticidad."], ["The city commissioned a series of murals.", "La ciudad encargó una serie de murales."], ["The curator chose the works for the exhibition.", "El curador escogió las obras para la exposición."]] },
  { tip: "**Renovation** no es «renovación» en el sentido de cambiar todo: en arquitectura implica modernizar. **Restoration** busca devolver el aspecto original. En un debate de patrimonio, confundirlos cambia por completo tu argumento." }
 ],
 vocab: [
  ["façade", "sustantivo", "fachada", "A colonial façade."],
  ["courtyard", "sustantivo", "patio interior", "A courtyard full of plants."],
  ["arch", "sustantivo", "arco", "Stone arches."],
  ["dome", "sustantivo", "cúpula", "A golden dome."],
  ["cobbled streets", "expresión", "calles empedradas", "The cobbled streets of Barichara."],
  ["whitewashed", "adjetivo", "encalado, blanqueado", "Whitewashed walls."],
  ["ornate", "adjetivo", "recargado, ornamentado", "An ornate altar."],
  ["austere", "adjetivo", "sobrio, austero", "An austere design."],
  ["dilapidated", "adjetivo", "ruinoso, deteriorado", "A dilapidated mansion."],
  ["blend in", "verbo", "armonizar, integrarse", "It blends in with the landscape."],
  ["skyline", "sustantivo", "horizonte, perfil de la ciudad", "Medellín's skyline."],
  ["brutalist", "adjetivo", "brutalista", "A brutalist library."],
  ["restoration", "sustantivo", "restauración", "The restoration took ten years."],
  ["renovation", "sustantivo", "renovación, remodelación", "A modern renovation."],
  ["authenticity", "sustantivo", "autenticidad", "It lost its authenticity."],
  ["repurpose", "verbo", "dar un nuevo uso", "Repurpose old factories."],
  ["adaptive reuse", "expresión", "reutilización adaptativa", "Adaptive reuse saves resources."],
  ["preserve", "verbo", "conservar, preservar", "Preserve the historic centre."],
  ["mural", "sustantivo", "mural", "Colourful murals in Comuna 13."],
  ["curator", "sustantivo", "curador", "The curator explained the exhibition."],
  ["commission", "verbo", "encargar (una obra)", "The city commissioned a statue."],
  ["eyesore", "sustantivo", "adefesio, algo feo", "Some call the building an eyesore."]
 ],
 dialogue: {
  title: "¿Restaurar o renovar el claustro?",
  scene: "En un foro público en Popayán, la arquitecta Mariana Velasco y el historiador Andrés Paz debaten qué hacer con un claustro colonial deteriorado.",
  a: "Moderador", b: "Mariana",
  lines: [
   ["A", "The cloister has been empty for twenty years and is visibly dilapidated. Mariana, what would you do?", "El claustro lleva veinte años vacío y está visiblemente deteriorado. Mariana, ¿qué haría usted?"],
   ["B", "I'd propose adaptive reuse. We restore the façade, the arches and the courtyard exactly as they were, but repurpose the interior as a public library.", "Propondría una reutilización adaptativa. Restauramos la fachada, los arcos y el patio tal como eran, pero le damos al interior un nuevo uso como biblioteca pública."],
   ["A", "Andrés, as a historian, you've criticised similar projects for lacking authenticity.", "Andrés, como historiador, usted ha criticado proyectos parecidos por falta de autenticidad."],
   ["B", "If I may answer that too: authenticity doesn't mean freezing a building in time. A monument nobody uses ends up an empty shell.", "Si me permite responder también a eso: autenticidad no significa congelar un edificio en el tiempo. Un monumento que nadie usa termina siendo un cascarón vacío."],
   ["A", "But wouldn't modern furniture and lighting clash with a colonial building?", "¿Pero no chocarían los muebles y la iluminación modernos con un edificio colonial?"],
   ["B", "Not if they're designed to blend in. Austere, reversible additions that could be removed in the future without damaging the original.", "No si están diseñados para armonizar. Añadidos sobrios y reversibles que se puedan retirar en el futuro sin dañar el original."],
   ["A", "Some residents would rather see a five-star hotel there. It would bring money.", "Algunos residentes preferirían ver un hotel cinco estrellas allí. Traería dinero."],
   ["B", "Granted, but a luxury hotel would make the building inaccessible to the very community whose heritage it is.", "Es cierto, pero un hotel de lujo haría el edificio inaccesible para la misma comunidad a la que pertenece ese patrimonio."],
   ["A", "And the cost?", "¿Y el costo?"],
   ["B", "Considerable, but less than letting it collapse. Every year of delay makes the restoration more expensive.", "Considerable, pero menor que dejarlo derrumbarse. Cada año de retraso hace más cara la restauración."],
   ["A", "Would you include contemporary art?", "¿Incluiría arte contemporáneo?"],
   ["B", "Yes. I'd commission local artists for a mural in the new reading room, so the building tells the story of the city both then and now.", "Sí. Encargaría a artistas locales un mural para la nueva sala de lectura, para que el edificio cuente la historia de la ciudad de antes y de ahora."],
   ["A", "A compelling vision. Thank you, Mariana.", "Una visión convincente. Gracias, Mariana."]
  ]
 },
 practice: [
  M("The front of a building is its ___.", ["façade", "courtyard", "dome", "skyline"], 0),
  M("Giving an old building a completely new use is called ___.", ["repurposing", "restoring", "demolishing", "commissioning"], 0),
  M("A building in very bad condition is ___.", ["dilapidated", "ornate", "austere", "listed"], 0),
  F("The new museum blends ___ beautifully with the colonial houses. (armoniza)", ["in"]),
  L("Restoration aims to return a building to its original state, whereas renovation usually modernises it. Confusing the two can completely change your argument.", "¿Qué busca la restauración?", ["Devolver el edificio a su estado original", "Modernizarlo", "Demolerlo", "Venderlo"], 0),
  O("The cathedral's dome dominates the city's skyline.")
 ],
 more: [
  R("The convent was repurposed as a hotel.", "El convento se convirtió en hotel."),
  R("The house has a whitewashed façade.", "La casa tiene una fachada encalada."),
  D("Barichara is famous for its cobbled streets."),
  D("The city commissioned a series of murals."),
  M("A building many people find ugly might be called an ___.", ["eyesore", "eyelid", "eyewitness", "eyeful"], 0),
  M("The person who chooses works for an exhibition is the ___.", ["curator", "commissioner", "architect", "developer"], 0),
  L("The old textile factory has been converted into a cultural centre with studios, a café and a gallery. It's a great example of adaptive reuse.", "¿En qué se convirtió la fábrica?", ["En un centro cultural", "En un hotel", "En un parqueadero", "En apartamentos"], 0),
  W("Describe un edificio o lugar histórico que conozcas bien (mínimo 170 palabras) con vocabulario arquitectónico preciso, y argumenta qué se debería hacer con él: conservarlo, restaurarlo, renovarlo o darle un nuevo uso.", 170, [["façade", "facade", "courtyard", "arch", "dome", "balcon", "cobbled", "whitewashed", "column"], ["ornate", "austere", "dilapidated", "colonial", "brutalist", "blend in"], ["restoration", "restore", "renovation", "repurpose", "adaptive reuse", "preserve"], ["granted", "while", "however", "on balance", "i would argue", "i'd propose"]])
 ],
 exam: M("Restoring the original and changing the use inside is called ___.", ["adaptive reuse", "demolition", "renovation only", "commission"], 0),
 exam2: F("The cloister is built around a shaded ___. (patio interior)", ["courtyard"])
},
/* ───────── Día 39 ───────── */
{
 id: "c2-u8-l4",
 title: "Inteligencia artificial: ética, privacidad y vigilancia",
 goal: "Discutir con precisión los dilemas éticos de la inteligencia artificial y los datos.",
 theory: [
  { p: "Vocabulario de **IA y datos**: **algorithm**, **machine learning**, **training data** (datos de entrenamiento), **algorithmic bias** (sesgo algorítmico), **facial recognition**, **surveillance** (vigilancia), **data privacy**, **consent** (consentimiento), **deepfake**, **automation**, **to be replaced by machines**, **transparency**, **accountability**, **to opt out** (darse de baja), **black box** (sistema opaco)." },
  { ex: [["The algorithm was trained on biased data.", "El algoritmo se entrenó con datos sesgados."], ["Facial recognition raises serious privacy concerns.", "El reconocimiento facial genera serias preocupaciones de privacidad."], ["Users should be able to opt out easily.", "Los usuarios deberían poder darse de baja fácilmente."], ["Deepfakes make it harder to trust what we see.", "Los deepfakes hacen más difícil confiar en lo que vemos."], ["Who is accountable when an AI makes a mistake?", "¿Quién responde cuando una IA comete un error?"]] },
  { p: "Para **matizar** en un tema polémico a nivel C2: evitar absolutos (**AI will not so much replace workers as transform their roles**), estructuras de contraste fino (**It is not that…; rather, …**), concesiones (**Much as I welcome…, I remain wary of…**) y énfasis (**What concerns me most is not… but…**)." },
  { ex: [["AI will not so much replace teachers as change what they do.", "La IA no reemplazará a los profesores sino que cambiará lo que hacen."], ["It is not that the technology is evil; rather, it is unregulated.", "No es que la tecnología sea mala; más bien, no está regulada."], ["Much as I welcome innovation, I remain wary of surveillance.", "Por mucho que celebre la innovación, sigo desconfiando de la vigilancia."], ["What concerns me most is not the technology but who controls it.", "Lo que más me preocupa no es la tecnología sino quién la controla."], ["The real question is one of accountability.", "La verdadera pregunta es de rendición de cuentas."]] },
  { tip: "**Not so much A as B** (no tanto A sino B) es una estructura muy C2 para corregir una idea simplista sin negarla del todo. También **less A than B**: **It's less a technical problem than a political one.**" }
 ],
 vocab: [
  ["algorithm", "sustantivo", "algoritmo", "The algorithm decides what you see."],
  ["machine learning", "expresión", "aprendizaje automático", "Machine learning needs data."],
  ["training data", "expresión", "datos de entrenamiento", "The training data was incomplete."],
  ["algorithmic bias", "expresión", "sesgo algorítmico", "Algorithmic bias can discriminate."],
  ["facial recognition", "expresión", "reconocimiento facial", "Facial recognition in airports."],
  ["surveillance", "sustantivo", "vigilancia", "Mass surveillance threatens freedom."],
  ["data privacy", "expresión", "privacidad de los datos", "Protect your data privacy."],
  ["consent", "sustantivo", "consentimiento", "They used my data without consent."],
  ["deepfake", "sustantivo", "deepfake, video falso hecho con IA", "The video was a deepfake."],
  ["automation", "sustantivo", "automatización", "Automation affects many jobs."],
  ["opt out", "verbo", "darse de baja, excluirse", "You can opt out of tracking."],
  ["black box", "expresión", "caja negra (sistema opaco)", "The model is a black box."],
  ["accountable", "adjetivo", "responsable, que rinde cuentas", "Who is accountable?"],
  ["wary of", "expresión", "receloso de", "I'm wary of free apps."],
  ["not so much … as", "expresión", "no tanto … sino", "It's not so much the cost as the time."],
  ["less … than", "expresión", "menos … que (más bien)", "It's less a problem than an opportunity."],
  ["much as", "conjunción", "por mucho que", "Much as I like it, I can't afford it."],
  ["unregulated", "adjetivo", "no regulado", "An unregulated market."],
  ["safeguard", "sustantivo / verbo", "salvaguarda; proteger", "We need safeguards."],
  ["ethical", "adjetivo", "ético", "An ethical dilemma."],
  ["dystopian", "adjetivo", "distópico", "A dystopian future."],
  ["chatbot", "sustantivo", "chatbot, asistente conversacional", "The chatbot answered in seconds."]
 ],
 dialogue: {
  title: "¿Cámaras con reconocimiento facial en el metro?",
  scene: "En un programa de televisión, la ingeniera de datos Laura Gil y el concejal Rafael Ortiz debaten la propuesta de instalar reconocimiento facial en el metro de Medellín.",
  a: "Rafael", b: "Laura",
  lines: [
   ["A", "Facial recognition would make the metro much safer. Criminals would be identified in seconds.", "El reconocimiento facial haría el metro mucho más seguro. Los delincuentes serían identificados en segundos."],
   ["B", "Much as I welcome efforts to reduce crime, I remain wary of this proposal.", "Por mucho que celebre los esfuerzos para reducir el crimen, sigo desconfiando de esta propuesta."],
   ["A", "Why? If you have nothing to hide, you have nothing to fear.", "¿Por qué? Si uno no tiene nada que esconder, no tiene nada que temer."],
   ["B", "That argument is not so much wrong as incomplete. Privacy isn't about hiding things; it's about consent and control over our own data.", "Ese argumento no es tanto equivocado como incompleto. La privacidad no se trata de esconder cosas; se trata del consentimiento y del control sobre nuestros propios datos."],
   ["A", "But the system would only look for people with arrest warrants.", "Pero el sistema solo buscaría personas con orden de captura."],
   ["B", "In theory. In practice, these algorithms are trained on data that is often biased. Studies have shown higher error rates for women and people with darker skin.", "En teoría. En la práctica, estos algoritmos se entrenan con datos que a menudo están sesgados. Los estudios han mostrado tasas de error más altas en mujeres y en personas de piel más oscura."],
   ["A", "Then we improve the technology.", "Entonces mejoramos la tecnología."],
   ["B", "It's not that the technology can't improve; rather, the problem is one of accountability. If someone is wrongly arrested, who is responsible: the company, the police, or the algorithm?", "No es que la tecnología no pueda mejorar; más bien, el problema es de rendición de cuentas. Si alguien es arrestado por error, ¿quién responde: la empresa, la policía o el algoritmo?"],
   ["A", "So you're against technology?", "¿Entonces usted está en contra de la tecnología?"],
   ["B", "Not at all. What concerns me is not the technology itself but the lack of safeguards. It's a black box: citizens don't know how decisions are made.", "Para nada. Lo que me preocupa no es la tecnología en sí sino la falta de salvaguardas. Es una caja negra: los ciudadanos no saben cómo se toman las decisiones."],
   ["A", "What would you propose, then?", "¿Qué propondría entonces?"],
   ["B", "An independent audit, a public consultation, and the right to opt out wherever possible. Security and privacy are not opposites; they need to be balanced.", "Una auditoría independiente, una consulta pública y el derecho a excluirse donde sea posible. La seguridad y la privacidad no son opuestas; hay que equilibrarlas."],
   ["A", "I can see the case for an audit. Perhaps we're less far apart than I thought.", "Le veo sentido a una auditoría. Quizás estamos menos lejos de lo que pensaba."]
  ]
 },
 practice: [
  M("When an AI system discriminates because of the data it learnt from, it's called ___.", ["algorithmic bias", "facial recognition", "data privacy", "automation"], 0),
  M("A video created with AI to make someone appear to say something false is a ___.", ["deepfake", "chatbot", "black box", "safeguard"], 0),
  M("AI will not ___ replace doctors as change how they work.", ["so much", "so many", "as much", "much so"], 0),
  F("___ as I welcome innovation, I remain wary of surveillance. (por mucho que)", ["much"]),
  L("It's less a technical problem than a political one. The question is who controls the data and who is accountable when things go wrong.", "¿Qué tipo de problema es, según quien habla?", ["Más político que técnico", "Puramente técnico", "Económico", "No hay problema"], 0),
  O("What concerns me most is not the technology but who controls it.")
 ],
 more: [
  R("Users should be able to opt out easily.", "Los usuarios deberían poder excluirse fácilmente."),
  R("The algorithm was trained on biased data.", "El algoritmo se entrenó con datos sesgados."),
  D("Facial recognition raises serious privacy concerns."),
  D("Who is accountable when an algorithm makes a mistake?"),
  M("A system whose decisions nobody can explain is a ___.", ["black box", "deepfake", "safeguard", "consent"], 0),
  M("«It is not that the technology is bad; ___, it is unregulated.»", ["rather", "instead of", "better", "otherwise"], 0),
  L("The company used customers' photos to train its AI without asking for consent. Several users are now taking legal action.", "¿Por qué hay demandas?", ["Usaron fotos sin consentimiento", "La IA no funcionaba", "Subieron los precios", "Despidieron trabajadores"], 0),
  W("Escribe un artículo de opinión (mínimo 180 palabras) sobre si tu ciudad debería usar reconocimiento facial en espacios públicos. Usa vocabulario de IA y datos y al menos tres estructuras de matiz C2 (not so much … as, less … than, it is not that … rather, much as, what concerns me is…).", 180, [["algorithm", "facial recognition", "surveillance", "data", "privacy", "bias", "consent", "accountab"], ["not so much", "less", "rather", "much as", "what concerns me"], ["safeguard", "audit", "opt out", "transparency", "regulat"]])
 ],
 exam: M("It's ___ a lack of technology than a lack of political will.", ["less", "least", "fewer", "lesser"], 0),
 exam2: F("They used my personal data without my ___. (consentimiento)", ["consent"])
},
/* ───────── Día 40 ───────── */
{
 id: "c2-u8-l5",
 title: "Use of English C2: transformaciones idiomáticas y formación de palabras",
 goal: "Dominar las transformaciones y la formación de palabras del C2 Proficiency, donde se evalúa el inglés idiomático.",
 theory: [
  { p: "En el **C2 Proficiency**, las **transformaciones** suelen exigir **expresiones idiomáticas**, no solo gramática. Ejemplos: **He didn't intend to offend you. (MEAN)** → **He didn't mean to offend you.** · **I'll never forget that day. (MEMORY)** → **That day will stay in my memory forever.** · **She was very close to winning. (NARROWLY)** → **She narrowly missed winning.** · **It's not worth arguing. (POINT)** → **There's no point (in) arguing.**" },
  { ex: [["Nobody expected her to win. → Her victory came as a complete surprise.", "Nadie esperaba que ganara. → Su victoria fue una sorpresa total."], ["I don't mind what we do. → It makes no difference to me what we do.", "Me da igual lo que hagamos."], ["He's bound to find out. → It's only a matter of time before he finds out.", "Es solo cuestión de tiempo antes de que se entere."], ["They postponed the meeting. → The meeting was put off.", "Aplazaron la reunión."], ["She has no intention of resigning. → Resigning is the last thing on her mind.", "Renunciar es lo último que tiene en mente."]] },
  { p: "En **formación de palabras** del C2 aparecen prefijos y sufijos poco frecuentes y cambios internos: **mis-** (misconception, misleading), **counter-** (counterproductive, counterpart), **under- / over-** (underestimate, overrated), **-ness / -ity / -ism / -ment** (awareness, scarcity, scepticism, entitlement), **-ise / -en** (prioritise, broaden), y negativos raros (**inexplicable, irreversible, unprecedented, disproportionate**)." },
  { ex: [["It's a common misconception that bulls hate red.", "Es un concepto erróneo común que los toros odian el rojo."], ["The measure proved counterproductive.", "La medida resultó contraproducente."], ["The scarcity of water is alarming.", "La escasez de agua es alarmante."], ["The damage is irreversible.", "El daño es irreversible."], ["The crisis was unprecedented.", "La crisis no tenía precedentes."]] },
  { tip: "En las transformaciones del C2, piensa primero en **colocaciones y expresiones**: **come as a surprise, a matter of time, make no difference, the last thing on someone's mind, take something for granted, give someone the benefit of the doubt**. Un buen cuaderno de expresiones vale más que memorizar reglas." }
 ],
 vocab: [
  ["come as a surprise", "expresión", "ser una sorpresa", "The news came as a surprise."],
  ["a matter of time", "expresión", "cuestión de tiempo", "It's only a matter of time."],
  ["make no difference", "expresión", "dar igual, no importar", "It makes no difference to me."],
  ["the last thing on someone's mind", "expresión", "lo último en lo que alguien piensa", "Money is the last thing on her mind."],
  ["stay in someone's memory", "expresión", "quedarse en la memoria", "That trip will stay in my memory."],
  ["narrowly", "adverbio", "por muy poco", "She narrowly missed the bus."],
  ["give someone the benefit of the doubt", "expresión", "darle a alguien el beneficio de la duda", "Let's give him the benefit of the doubt."],
  ["take for granted", "expresión", "dar por sentado", "Don't take your health for granted."],
  ["misconception", "sustantivo", "idea errónea", "A common misconception."],
  ["misleading", "adjetivo", "engañoso", "Misleading information."],
  ["counterproductive", "adjetivo", "contraproducente", "Shouting is counterproductive."],
  ["counterpart", "sustantivo", "homólogo", "She met her Brazilian counterpart."],
  ["underestimate", "verbo", "subestimar", "Never underestimate her."],
  ["overrated", "adjetivo", "sobrevalorado", "That film is overrated."],
  ["scarcity", "sustantivo", "escasez", "The scarcity of water."],
  ["scepticism", "sustantivo", "escepticismo", "The plan was met with scepticism."],
  ["entitlement", "sustantivo", "derecho; sentido de merecimiento", "A sense of entitlement."],
  ["prioritise", "verbo", "priorizar", "Prioritise your health."],
  ["broaden", "verbo", "ampliar", "Travel broadens the mind."],
  ["irreversible", "adjetivo", "irreversible", "Irreversible damage."],
  ["unprecedented", "adjetivo", "sin precedentes", "An unprecedented crisis."],
  ["disproportionate", "adjetivo", "desproporcionado", "A disproportionate response."]
 ],
 dialogue: {
  title: "Última clase antes del Proficiency",
  scene: "Camila presenta el C2 Proficiency la próxima semana. En su última clase, su profesor Mr. Bennett repasa con ella transformaciones y formación de palabras.",
  a: "Mr. Bennett", b: "Camila",
  lines: [
   ["A", "Let's start with a transformation. 'Nobody expected the team to win.' Key word: SURPRISE.", "Empecemos con una transformación. «Nadie esperaba que el equipo ganara». Palabra clave: SURPRISE."],
   ["B", "'The team's victory came as a complete surprise.'", "«La victoria del equipo fue una sorpresa total»."],
   ["A", "Excellent. 'He is bound to discover the truth.' Key word: MATTER.", "Excelente. «Seguro va a descubrir la verdad». Palabra clave: MATTER."],
   ["B", "'It's only a matter of time before he discovers the truth.'", "«Es solo cuestión de tiempo antes de que descubra la verdad»."],
   ["A", "Perfect. A harder one: 'Getting married is not something she's thinking about at all.' Key word: LAST.", "Perfecto. Una más difícil: «Casarse no es algo en lo que esté pensando para nada». Palabra clave: LAST."],
   ["B", "Hmm… 'Getting married is the last thing on her mind.'", "Mmm… «Casarse es lo último en lo que piensa»."],
   ["A", "Spot on. Now word formation. The word is CONCEIVE, and the sentence is: 'It's a common ___ that Spanish is easy to master.'", "Exacto. Ahora formación de palabras. La palabra es CONCEIVE y la frase es: «Es un ___ común que el español es fácil de dominar»."],
   ["B", "Misconception. A common misconception.", "Misconception. Una idea errónea común."],
   ["A", "Good. PRECEDENT: 'The floods caused ___ damage.'", "Bien. PRECEDENT: «Las inundaciones causaron daños ___»."],
   ["B", "Unprecedented. Two prefixes and a suffix in one word!", "Unprecedented. ¡Dos prefijos y un sufijo en una sola palabra!"],
   ["A", "Only one prefix, actually, but well spotted. Last one: PRODUCE. 'Punishing staff for mistakes is often ___.'", "En realidad solo un prefijo, pero bien visto. Última: PRODUCE. «Castigar al personal por sus errores suele ser ___»."],
   ["B", "Counterproductive.", "Contraproducente."],
   ["A", "Brilliant. Honestly, Camila, don't underestimate yourself. You're ready.", "Brillante. Sinceramente, Camila, no te subestimes. Estás lista."],
   ["B", "Thank you. Whatever happens, this course will stay in my memory.", "Gracias. Pase lo que pase, este curso se quedará en mi memoria."]
  ]
 },
 practice: [
  M("«Nobody expected him to resign.» (SURPRISE) → His resignation came ___.", ["as a complete surprise", "to a complete surprise", "in a complete surprise", "for a complete surprise"], 0),
  M("«I don't mind which restaurant we choose.» (DIFFERENCE) → It makes ___ which restaurant we choose.", ["no difference to me", "no different to me", "any difference for me", "no difference at me"], 0),
  M("PRODUCE → Punishing mistakes is often ___.", ["counterproductive", "unproductive", "misproductive", "overproductive"], 0),
  F("PRECEDENT → The storm caused ___ damage. (sin precedentes)", ["unprecedented"]),
  L("It's a common misconception that learning a language as an adult is impossible. In fact, adults often learn grammar faster than children.", "¿Qué idea corrige quien habla?", ["Que es imposible aprender un idioma de adulto", "Que los niños aprenden más rápido la gramática", "Que la gramática no importa", "Que todos aprenden igual"], 0),
  O("It's only a matter of time before they find out.")
 ],
 more: [
  R("Getting married is the last thing on her mind.", "Casarse es lo último en lo que piensa."),
  R("Don't take your health for granted.", "No des tu salud por sentada."),
  D("The measure proved completely counterproductive."),
  D("The scarcity of water in La Guajira is alarming."),
  M("SCEPTIC → The proposal was met with considerable ___.", ["scepticism", "sceptically", "scepticality", "scepticness"], 0),
  M("«She almost won the race.» (NARROWLY) → She ___ winning the race.", ["narrowly missed", "narrowly lost to", "narrowly won", "narrowly almost"], 0),
  L("Let's give him the benefit of the doubt. It may well be a misunderstanding rather than a deliberate lie.", "¿Qué propone quien habla?", ["Darle el beneficio de la duda", "Despedirlo", "Denunciarlo", "Ignorarlo"], 0),
  W("Escribe un texto de reflexión sobre tu proceso de aprendizaje del inglés (mínimo 180 palabras) usando al menos cinco expresiones idiomáticas del día (a matter of time, came as a surprise, take for granted, the last thing on my mind, stay in my memory…) y cuatro palabras con prefijos o sufijos de nivel C2.", 180, [["matter of time", "came as a surprise", "come as a surprise", "take for granted", "last thing on", "stay in my memory", "benefit of the doubt", "makes no difference"], ["misconception", "counterproductive", "underestimate", "overrated", "unprecedented", "irreversible", "scepticism", "prioritise", "broaden", "misleading"]])
 ],
 exam: M("«He's sure to find out eventually.» (TIME) → It's only a matter ___ he finds out.", ["of time before", "of time until that", "in time before", "for time before"], 0),
 exam2: F("CONCEIVE → It's a common ___ that Spanish is easy. (idea errónea)", ["misconception"])
}
],
/* ───────── Quiz de la unidad 8 ───────── */
quiz: [
 M("While the former focuses on economic benefits, ___ highlights the social costs.", ["the latter", "the later", "the last", "the after"], 0),
 M("I read with ___ your article on the closure of the theatre.", ["dismay", "dismiss", "dismal", "disarray"], 0),
 M("The old factory was ___ as a cultural centre.", ["repurposed", "repurposing", "purposed again", "re-purposely"], 0),
 M("AI will not so much replace journalists ___ change the way they work.", ["as", "than", "but", "that"], 0),
 M("PRECEDENT → The pandemic caused ___ disruption.", ["unprecedented", "precedential", "unprecedently", "misprecedented"], 0),
 F("Both writers ___ the role of local government. (pasan por alto)", ["overlook"]),
 L("The first writer rightly points out that mass tourism creates jobs, but the second convincingly argues that it has displaced families from the historic centre.", "¿Qué argumenta el segundo autor?", ["Que ha desplazado familias del centro histórico", "Que crea empleo", "Que los turistas no gastan", "Que el centro está vacío"], 0),
 L("Much as I welcome the new metro cameras, what concerns me is not the technology itself but the lack of safeguards and accountability.", "¿Qué le preocupa a quien habla?", ["La falta de salvaguardas y rendición de cuentas", "La tecnología en sí", "El precio del metro", "Que haya pocas cámaras"], 0),
 W("Escribe una carta al editor (mínimo 200 palabras) respondiendo a un artículo que propone convertir un edificio histórico de tu ciudad en un centro comercial vigilado con reconocimiento facial. Usa vocabulario de arquitectura e IA, una concesión, una pregunta retórica, al menos dos estructuras de matiz C2 y una propuesta concreta.", 200, [["sir", "dear editor", "i read with", "i am writing in response"], ["façade", "facade", "heritage", "restoration", "repurpose", "colonial", "landmark", "courtyard"], ["facial recognition", "surveillance", "privacy", "consent", "algorithm", "data"], ["not so much", "much as", "it is not that", "what concerns me", "granted", "one can only assume", "i urge"]]),
 O("Granted, the building is in poor condition, but that is an argument for restoring it."),
 O("It's not that the technology is evil; rather, it is unregulated.")
],
pool: [
 M("The author ___ that the policy has failed. (sostiene)", ["contends", "contents", "contains", "contests to"], 0),
 M("A decision that ignores long-term consequences is ___.", ["short-sighted", "long-sighted", "far-sighted", "sight-short"], 0),
 M("A very old building in terrible condition is ___.", ["dilapidated", "ornate", "austere", "listed"], 0),
 M("Users must be able to ___ of data collection.", ["opt out", "opt off", "opt down", "opt away"], 0),
 M("SCARCE → The ___ of water is a growing problem.", ["scarcity", "scarceness of", "scarcely", "scarcement"], 0),
 M("«I'll never forget that summer.» (MEMORY) → That summer will ___.", ["stay in my memory forever", "be my memory forever", "remain my memory", "keep in memory forever"], 0),
 F("It's less a technical problem ___ a political one.", ["than"]),
 F("I ___ the council to reconsider. (insto)", ["urge"]),
 L("The restoration was criticised for lacking authenticity: the new windows and lighting clash with the colonial façade.", "¿Por qué criticaron la restauración?", ["Por falta de autenticidad", "Porque fue muy barata", "Porque tardó poco", "Porque conservó todo"], 0),
 L("The algorithm was trained on data from only one city, so its predictions for rural areas are misleading.", "¿Por qué las predicciones rurales son engañosas?", ["Porque los datos eran de una sola ciudad", "Porque no había internet", "Porque el algoritmo es nuevo", "Porque los datos eran falsos"], 0),
 L("Getting rich is the last thing on her mind. She cares far more about leaving a legacy for her community.", "¿Qué le importa más?", ["Dejar un legado para su comunidad", "Hacerse rica", "Viajar", "Tener fama"], 0),
 W("Escribe un ensayo (mínimo 200 palabras) que resuma y evalúe estas dos posturas: TEXTO 1: «Artificial intelligence will free workers from repetitive tasks and create new, more creative jobs.» TEXTO 2: «Automation is already destroying jobs faster than new ones appear, and the gains go to a small elite.» Usa tus propias palabras y da tu postura matizada.", 200, [["the first writer", "the former", "the second writer", "the latter", "both writers"], ["contends", "maintains", "argues", "acknowledges", "concedes", "points out", "overlooks", "dismisses"], ["automation", "artificial intelligence", "jobs", "workers", "algorithm"], ["not so much", "less", "rather", "much as", "i am inclined", "on balance"]]),
 O("I read with dismay your article on the demolition of the old station."),
 O("Much as I welcome innovation, I remain wary of surveillance."),
 O("It's a common misconception that adults can't learn languages.")
]
};
