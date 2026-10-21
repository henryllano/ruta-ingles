module.exports = {
title: "Salud y obligaciones",
lessons: [
{ id:"a2-u5-l1", title:"El cuerpo y la salud", goal:"Decir qué te duele y cómo te sientes.",
 theory:[
  {p:"Para preguntar qué le pasa a alguien: **What's the matter?** / **What's wrong?** / **Are you OK?**"},
  {p:"Para dolores se usa **have + a + ...ache** o **my ... hurts**:"},
  {ex:[["I have a headache.","Tengo dolor de cabeza."],["She has a stomachache.","Tiene dolor de estómago."],["My back hurts.","Me duele la espalda."],["My feet hurt.","Me duelen los pies."]]},
  {p:"Otras dolencias: **a cold** (gripa), **a fever** (fiebre), **a cough** (tos), **a sore throat** (dolor de garganta), **the flu** (influenza)."},
  {ex:[["I feel sick.","Me siento mal / con náuseas."],["I don't feel well.","No me siento bien."],["I feel much better now.","Me siento mucho mejor ahora."]]},
  {tip:"En inglés el dolor 'es de la persona': My head hurts (no 'The head hurts me')."}
 ],
 vocab:[
  ["head","sustantivo","cabeza","My head hurts."],["back","sustantivo","espalda","I have back pain."],
  ["stomach","sustantivo","estómago","My stomach hurts."],["throat","sustantivo","garganta","I have a sore throat."],
  ["tooth / teeth","sustantivo","diente / dientes","I have a toothache."],["arm","sustantivo","brazo","I broke my arm."],
  ["leg","sustantivo","pierna","My leg hurts."],["knee","sustantivo","rodilla","I hurt my knee."],
  ["shoulder","sustantivo","hombro","My shoulder is sore."],["headache","sustantivo","dolor de cabeza","I have a terrible headache."],
  ["stomachache","sustantivo","dolor de estómago","He has a stomachache."],["cold","sustantivo","gripa, resfriado","I have a cold."],
  ["fever","sustantivo","fiebre","The baby has a fever."],["cough","sustantivo / verbo","tos; toser","I have a bad cough."],
  ["sore","adjetivo","adolorido","I have a sore throat."],["hurt","verbo","doler; lastimar","My feet hurt."],
  ["feel sick","expresión","sentirse mal, con náuseas","I feel sick."],["What's the matter?","expresión","¿Qué te pasa?","You look pale. What's the matter?"],
  ["get better","expresión","mejorarse","Get better soon!"],["pain","sustantivo","dolor","I have a lot of pain."]
 ],
 dialogue:{title:"Llamando para avisar que está enfermo", scene:"Sebastián llama a su jefa, Ms. Clark, para decirle que no puede ir a trabajar.", a:"Ms. Clark", b:"Sebastián", lines:[
  ["A","Hello, Sebastián. Is everything OK?","Hola, Sebastián. ¿Todo bien?"],
  ["B","Good morning, Ms. Clark. I'm sorry, but I don't feel well today.","Buenos días, señora Clark. Lo siento, pero hoy no me siento bien."],
  ["A","Oh no. What's the matter?","Oh no. ¿Qué te pasa?"],
  ["B","I have a fever and a terrible headache. My throat is very sore too.","Tengo fiebre y un dolor de cabeza terrible. También me duele mucho la garganta."],
  ["A","That sounds like the flu. Have you been to the doctor?","Suena a influenza. ¿Has ido al médico?"],
  ["B","Not yet. I have an appointment at eleven.","Todavía no. Tengo cita a las once."],
  ["A","Good. Do you have a cough?","Bien. ¿Tienes tos?"],
  ["B","Yes, a little. And my whole body hurts.","Sí, un poco. Y me duele todo el cuerpo."],
  ["A","Stay at home today and tomorrow. Don't worry about the report.","Quédate en casa hoy y mañana. No te preocupes por el informe."],
  ["B","Thank you. I'll send it as soon as I feel better.","Gracias. Lo envío apenas me sienta mejor."],
  ["A","Drink lots of water and rest. Get better soon!","Toma mucha agua y descansa. ¡Que te mejores!"],
  ["B","Thank you very much. I'll call you tomorrow.","Muchas gracias. La llamo mañana."]
 ]},
 practice:[
  {t:"mc",q:"I have a ___. My head hurts.",o:["stomachache","headache","backache","toothache"],a:1},
  {t:"mc",q:"—___? —I have a cold.",o:["What's the matter?","How are you old?","What's your matter?","What do you have hurt?"],a:0},
  {t:"mc",q:"My feet ___ after the walk.",o:["hurts","hurt","is hurting me","hurted"],a:1},
  {t:"fill",q:"I have a ___ throat. I can't talk. (adolorida)",ans:["sore"]},
  {t:"listen",say:"I'm not going to the gym today. My knee hurts and I have a cold.",q:"¿Qué le duele?",o:["La espalda","La rodilla","El hombro","La cabeza"],a:1},
  {t:"oral",text:"I don't feel well. I have a fever and a sore throat."}
 ],
 more:[
  {t:"order",words:["My","back","hurts","a","lot."],es:"Me duele mucho la espalda."},
  {t:"order",words:["I","feel","much","better","now."],es:"Me siento mucho mejor ahora."},
  {t:"dict",say:"The baby has a high fever."},
  {t:"dict",say:"Get better soon!"},
  {t:"mc",q:"'Gripa' en inglés es:",o:["a cold","a cool","a fever","a hot"],a:0},
  {t:"mc",q:"¿Cuál está bien?",o:["The head hurts me.","My head hurts.","I hurt the head.","Me hurts the head."],a:1},
  {t:"listen",say:"My son had a stomachache last night, but this morning he feels much better.",q:"¿Cómo está el hijo hoy?",o:["Peor","Mucho mejor","Igual","En el hospital"],a:1},
  {t:"write",q:"Escribe un mensaje a tu jefe o profesor explicando que estás enfermo (mínimo 30 palabras).",min:30,keys:[["i don't feel well","i feel sick","i'm sick","i have"],["headache","fever","cold","cough","sore","hurts","flu"],["sorry"],["doctor","home","rest"]]}
 ],
 exam:{t:"mc",q:"I ate too much. I have a ___.",o:["headache","stomachache","sore throat","cough"],a:1},
 exam2:{t:"mc",q:"Le deseas a alguien que se mejore:",o:["Get better soon!","Be better now!","Make better!","Feel good soon you!"],a:0}
},
{ id:"a2-u5-l2", title:"Should: dar consejos", goal:"Dar y pedir consejos con should y shouldn't.",
 theory:[
  {p:"**should + verbo** = debería (consejo). **shouldn't** = no debería. Es igual para todas las personas."},
  {ex:[["You should see a doctor.","Deberías ver a un médico."],["You shouldn't eat so much sugar.","No deberías comer tanta azúcar."],["What should I do?","¿Qué debería hacer?"],["Should I call him?","¿Debería llamarlo?"]]},
  {p:"Otras formas de aconsejar: **Why don't you...?** (¿Por qué no...?), **If I were you, I'd...** (Yo en tu lugar...), **It's a good idea to...**"},
  {ex:[["Why don't you take a break?","¿Por qué no tomas un descanso?"],["If I were you, I'd go to bed early.","Yo en tu lugar me acostaría temprano."]]},
  {tip:"Después de should el verbo va sin to: You should rest (no 'should to rest')."}
 ],
 vocab:[
  ["should","verbo modal","debería","You should drink more water."],["shouldn't","verbo modal","no debería","You shouldn't smoke."],
  ["advice","sustantivo","consejo (incontable)","Can you give me some advice?"],["advise","verbo","aconsejar","The doctor advised me to rest."],
  ["rest","verbo / sustantivo","descansar; descanso","You should rest."],["take medicine","expresión","tomar medicina","Take this medicine twice a day."],
  ["see a doctor","expresión","ir al médico","You should see a doctor."],["stay in bed","expresión","quedarse en cama","Stay in bed today."],
  ["drink plenty of water","expresión","tomar mucha agua","Drink plenty of water."],["get some sleep","expresión","dormir un poco","You should get some sleep."],
  ["exercise","verbo / sustantivo","hacer ejercicio","You should exercise more."],["healthy diet","sustantivo","dieta saludable","Eat a healthy diet."],
  ["stress","sustantivo","estrés","I have a lot of stress."],["stressed","adjetivo","estresado","I feel stressed."],
  ["relax","verbo","relajarse","You should relax."],["take a break","expresión","tomar un descanso","Take a break from work."],
  ["Why don't you...?","expresión","¿Por qué no...?","Why don't you call her?"],["If I were you...","expresión","Yo en tu lugar...","If I were you, I'd stay."],
  ["It's a good idea to...","expresión","Es buena idea...","It's a good idea to walk."],["habit","sustantivo","hábito","Smoking is a bad habit."]
 ],
 dialogue:{title:"Consejos para dormir mejor", scene:"Tomás le cuenta a su amiga Elena que no duerme bien. Ella le da consejos.", a:"Tomás", b:"Elena", lines:[
  ["A","I'm so tired. I haven't slept well for weeks.","Estoy muy cansado. Llevo semanas sin dormir bien."],
  ["B","Oh no. What time do you go to bed?","Oh no. ¿A qué hora te acuestas?"],
  ["A","Around one or two a.m. I watch series on my phone in bed.","Como a la una o dos de la mañana. Veo series en el celular en la cama."],
  ["B","You shouldn't use your phone in bed. The light keeps you awake.","No deberías usar el celular en la cama. La luz te mantiene despierto."],
  ["A","Really? What should I do?","¿En serio? ¿Qué debería hacer?"],
  ["B","You should read a book instead. And you should go to bed at the same time every night.","Deberías leer un libro en lugar de eso. Y deberías acostarte a la misma hora todas las noches."],
  ["A","OK. I also drink a lot of coffee. Is that a problem?","Bueno. También tomo mucho café. ¿Es un problema?"],
  ["B","Yes! You shouldn't drink coffee after three p.m.","¡Sí! No deberías tomar café después de las tres de la tarde."],
  ["A","Hmm, that's hard. I love coffee.","Mmm, eso es difícil. Me encanta el café."],
  ["B","Why don't you try herbal tea at night? And it's a good idea to exercise during the day.","¿Por qué no pruebas una aromática en la noche? Y es buena idea hacer ejercicio en el día."],
  ["A","If I do all that, will I sleep better?","Si hago todo eso, ¿dormiré mejor?"],
  ["B","I'm sure you will. And if I were you, I'd talk to a doctor if it doesn't improve.","Seguro que sí. Y yo en tu lugar hablaría con un médico si no mejora."]
 ]},
 practice:[
  {t:"mc",q:"You look tired. You ___ go to bed early.",o:["should","shouldn't","should to","must to"],a:0},
  {t:"mc",q:"You ___ eat so much fast food.",o:["should","shouldn't","should not to","don't should"],a:1},
  {t:"mc",q:"—I have a toothache. —___",o:["You should see a dentist.","You should to see a dentist.","You see should a dentist.","Should you dentist."],a:0},
  {t:"fill",q:"If I ___ you, I'd take a break.",ans:["were"]},
  {t:"listen",say:"You're very stressed. Why don't you take a few days off and go to the beach?",q:"¿Qué le recomienda?",o:["Trabajar más","Tomar unos días libres e ir a la playa","Ir al médico","Dormir más"],a:1},
  {t:"oral",text:"You should drink more water and get some sleep."}
 ],
 more:[
  {t:"order",words:["What","should","I","do?"],es:"¿Qué debería hacer?"},
  {t:"order",words:["You","shouldn't","drink","coffee","at","night."],es:"No deberías tomar café en la noche."},
  {t:"dict",say:"Can you give me some advice?"},
  {t:"dict",say:"Why don't you take a break?"},
  {t:"mc",q:"Advice es incontable. ¿Cuál está bien?",o:["an advice","some advice","two advices","a advices"],a:1},
  {t:"fill",q:"It's a good idea ___ walk every day.",ans:["to"]},
  {t:"listen",say:"My doctor said I should eat more vegetables and I shouldn't eat so much salt.",q:"¿Qué no debería comer tanto?",o:["Verduras","Sal","Azúcar","Carne"],a:1},
  {t:"write",q:"Un amigo está muy estresado por el trabajo. Escríbele un mensaje con 4 consejos (mínimo 35 palabras).",min:35,keys:[["you should"],["you shouldn't","you should not"],["why don't you","if i were you","it's a good idea"],["relax","rest","sleep","exercise","break","walk"]]}
 ],
 exam:{t:"mc",q:"You ___ smoke. It's bad for your health.",o:["should","shouldn't","must to","don't should"],a:1},
 exam2:{t:"mc",q:"Can I give you some ___?",o:["advices","advice","advise","an advice"],a:1}
},
{ id:"a2-u5-l3", title:"Have to y don't have to", goal:"Hablar de obligaciones y de lo que no es necesario.",
 theory:[
  {p:"**have to / has to + verbo** = tener que (obligación, a menudo por reglas o circunstancias)."},
  {ex:[["I have to work on Saturdays.","Tengo que trabajar los sábados."],["She has to wear a uniform.","Ella tiene que usar uniforme."],["Do you have to get up early?","¿Tienes que levantarte temprano?"]]},
  {p:"**don't have to** = **no es necesario** (no es prohibición). En pasado: **had to** / **didn't have to**."},
  {ex:[["You don't have to pay. It's free.","No tienes que pagar. Es gratis."],["We didn't have to wait.","No tuvimos que esperar."],["I had to call the police.","Tuve que llamar a la policía."]]},
  {tip:"'Don't have to' no significa 'no debes'. Significa que no es necesario: You don't have to come (puedes venir si quieres)."}
 ],
 vocab:[
  ["have to","verbo","tener que","I have to finish this today."],["has to","verbo","tiene que","He has to work late."],
  ["don't have to","verbo","no tener que (no es necesario)","You don't have to bring anything."],["had to","verbo","tuve / tuvo que","I had to wait an hour."],
  ["rule","sustantivo","regla","Those are the rules."],["uniform","sustantivo","uniforme","Nurses have to wear a uniform."],
  ["shift","sustantivo","turno","I work the night shift."],["overtime","sustantivo","horas extra","I had to work overtime."],
  ["deadline","sustantivo","fecha límite","We have to meet the deadline."],["free of charge","expresión","gratis","Parking is free of charge."],
  ["necessary","adjetivo","necesario","It isn't necessary."],["obligatory","adjetivo","obligatorio","Is it obligatory?"],
  ["permission","sustantivo","permiso","You have to ask for permission."],["form","sustantivo","formulario","You have to fill in this form."],
  ["fill in","verbo","llenar (un formulario)","Please fill in the form."],["sign","verbo","firmar","You have to sign here."],
  ["ID","sustantivo","documento de identidad","You have to show your ID."],["chores","sustantivo","oficios de la casa","I have to do the chores."],
  ["commute","verbo / sustantivo","desplazarse al trabajo; trayecto","I have a long commute."],["work from home","expresión","trabajar desde casa","I don't have to commute. I work from home."]
 ],
 dialogue:{title:"El primer día en el trabajo nuevo", scene:"La supervisora, Andrea, le explica las reglas a Iván, un nuevo empleado de un supermercado.", a:"Andrea", b:"Iván", lines:[
  ["A","Welcome, Iván! Let me explain the rules. You have to arrive at seven thirty.","¡Bienvenido, Iván! Déjame explicarte las reglas. Tienes que llegar a las siete y media."],
  ["B","OK. Do I have to wear a uniform?","Bueno. ¿Tengo que usar uniforme?"],
  ["A","Yes, you do. You have to wear the green shirt and the cap.","Sí. Tienes que usar la camisa verde y la gorra."],
  ["B","Do I have to buy them?","¿Tengo que comprarlos?"],
  ["A","No, you don't have to buy anything. The company gives them to you.","No, no tienes que comprar nada. La empresa te los da."],
  ["B","Great. Do I have to work on weekends?","Genial. ¿Tengo que trabajar los fines de semana?"],
  ["A","You have to work every other Saturday, but you don't have to work on Sundays.","Tienes que trabajar un sábado sí y otro no, pero no tienes que trabajar los domingos."],
  ["B","Perfect. What about lunch?","Perfecto. ¿Y el almuerzo?"],
  ["A","You have a one-hour break. You don't have to bring food. There's a cafeteria.","Tienes una hora de descanso. No tienes que traer comida. Hay cafetería."],
  ["B","And if I'm sick?","¿Y si estoy enfermo?"],
  ["A","Then you have to call me before seven and bring a doctor's note.","Entonces tienes que llamarme antes de las siete y traer una incapacidad."],
  ["B","Understood. Thank you, Andrea. I think I'm going to like it here.","Entendido. Gracias, Andrea. Creo que me va a gustar trabajar aquí."]
 ]},
 practice:[
  {t:"mc",q:"My brother ___ work on Saturdays.",o:["have to","has to","have","must to"],a:1},
  {t:"mc",q:"You ___ pay. The concert is free.",o:["have to","don't have to","has to","mustn't to"],a:1},
  {t:"mc",q:"Yesterday I ___ wait two hours at the bank.",o:["have to","had to","has to","must"],a:1},
  {t:"fill",q:"___ you have to wear a uniform at work?",ans:["do"]},
  {t:"listen",say:"I don't have to commute anymore because I work from home three days a week.",q:"¿Por qué ya no tiene que desplazarse?",o:["Perdió el trabajo","Trabaja desde casa","Compró un carro","Vive cerca"],a:1},
  {t:"oral",text:"I have to get up at six, but I don't have to work on Sundays."}
 ],
 more:[
  {t:"order",words:["You","have","to","fill","in","this","form."],es:"Tiene que llenar este formulario."},
  {t:"order",words:["We","didn't","have","to","wait."],es:"No tuvimos que esperar."},
  {t:"dict",say:"You have to show your ID."},
  {t:"dict",say:"She has to work the night shift."},
  {t:"mc",q:"'You don't have to come' significa:",o:["No debes venir.","No es necesario que vengas.","Está prohibido venir.","Tienes que venir."],a:1},
  {t:"fill",q:"Last week I ___ to work overtime. (tuve que)",ans:["had"]},
  {t:"listen",say:"At my school, students have to wear a uniform, but they don't have to wear a tie.",q:"¿Qué no tienen que usar?",o:["Uniforme","Corbata","Zapatos negros","Chaqueta"],a:1},
  {t:"write",q:"Describe las obligaciones de tu trabajo o de tu casa (mínimo 35 palabras). Usa have to, has to y don't have to.",min:35,keys:[["have to","has to"],["don't have to","doesn't have to"],["every","on","at"]]}
 ],
 exam:{t:"mc",q:"It's Sunday tomorrow. I ___ get up early.",o:["have to","don't have to","must","has to"],a:1},
 exam2:{t:"mc",q:"She ___ go to the hospital last night.",o:["has to","had to","have to","must"],a:1}
},
{ id:"a2-u5-l4", title:"Must y mustn't: reglas y prohibiciones", goal:"Entender y explicar reglas y prohibiciones.",
 theory:[
  {p:"**must + verbo** = deber (obligación fuerte, a menudo una regla o algo que el hablante considera necesario). **mustn't** = **prohibido**."},
  {ex:[["You must wear a seatbelt.","Debe usar el cinturón de seguridad."],["Passengers must show their tickets.","Los pasajeros deben mostrar su tiquete."],["You mustn't smoke here.","Está prohibido fumar aquí."],["You mustn't use your phone while driving.","No debes usar el celular mientras manejas."]]},
  {p:"Compara: **mustn't** = está prohibido. **don't have to** = no es necesario."},
  {ex:[["You mustn't park here. (prohibido)","No puede parquear aquí."],["You don't have to park here. There's another parking lot. (no es necesario)","No tiene que parquear aquí. Hay otro parqueadero."]]},
  {tip:"En avisos se usa mucho: No smoking, Do not enter, Keep off the grass (no pisar el césped)."}
 ],
 vocab:[
  ["must","verbo modal","deber (obligación)","You must be 18 to enter."],["mustn't","verbo modal","prohibido, no debes","You mustn't touch the paintings."],
  ["allowed","adjetivo","permitido","Dogs aren't allowed."],["forbidden","adjetivo","prohibido","Smoking is forbidden."],
  ["seatbelt","sustantivo","cinturón de seguridad","Fasten your seatbelt."],["helmet","sustantivo","casco","You must wear a helmet."],
  ["speed limit","sustantivo","límite de velocidad","The speed limit is 60."],["park","verbo","parquear","You mustn't park here."],
  ["fine","sustantivo","multa","I got a fine for speeding."],["sign","sustantivo","aviso, letrero","Read the sign."],
  ["touch","verbo","tocar","Don't touch the paintings."],["take photos","expresión","tomar fotos","You mustn't take photos."],
  ["feed","verbo","alimentar","Don't feed the animals."],["littering","sustantivo","botar basura","No littering."],
  ["enter","verbo","entrar","Do not enter."],["keep off","verbo","no pisar, mantenerse alejado","Keep off the grass."],
  ["silent mode","sustantivo","modo silencio","Phones must be on silent mode."],["passenger","sustantivo","pasajero","Passengers must stay seated."],
  ["museum","sustantivo","museo","Food isn't allowed in the museum."],["safety","sustantivo","seguridad","Safety is the most important thing."]
 ],
 dialogue:{title:"Reglas en el museo", scene:"Un guía del museo le explica las reglas a un grupo de turistas. Habla con una visitante, Laura.", a:"Guía", b:"Laura", lines:[
  ["A","Welcome to the National Museum. Before we start, there are some rules.","Bienvenidos al Museo Nacional. Antes de empezar, hay algunas reglas."],
  ["B","OK. Can we take photos?","Bueno. ¿Podemos tomar fotos?"],
  ["A","You can take photos, but you mustn't use the flash. It damages the paintings.","Pueden tomar fotos, pero no deben usar el flash. Daña las pinturas."],
  ["B","Understood. Do we have to leave our bags somewhere?","Entendido. ¿Tenemos que dejar los bolsos en algún lugar?"],
  ["A","Yes, you must leave big bags in the lockers. Small bags are allowed.","Sí, deben dejar los bolsos grandes en los casilleros. Los pequeños están permitidos."],
  ["B","Is food allowed?","¿Se permite comida?"],
  ["A","No, you mustn't eat or drink in the rooms. There's a café on the first floor.","No, no deben comer ni beber en las salas. Hay un café en el primer piso."],
  ["B","And our phones?","¿Y los celulares?"],
  ["A","Phones must be on silent mode, please. And you mustn't touch the sculptures.","Los celulares deben estar en silencio, por favor. Y no deben tocar las esculturas."],
  ["B","Do we have to stay with the group?","¿Tenemos que quedarnos con el grupo?"],
  ["A","You don't have to, but it's a good idea. The museum is very big!","No es necesario, pero es buena idea. ¡El museo es muy grande!"],
  ["B","Ha ha, OK. We'll stay with you. Let's go!","Ja, ja, bueno. Nos quedamos con usted. ¡Vamos!"]
 ]},
 practice:[
  {t:"mc",q:"You ___ smoke in the hospital.",o:["must","mustn't","don't have to","should to"],a:1},
  {t:"mc",q:"Drivers ___ wear a seatbelt.",o:["must","mustn't","don't must","must to"],a:0},
  {t:"mc",q:"You ___ bring food. Lunch is included.",o:["mustn't","don't have to","must","has to"],a:1,x:"No es necesario → don't have to."},
  {t:"fill",q:"Dogs aren't ___ in the restaurant. (permitidos)",ans:["allowed"]},
  {t:"listen",say:"Passengers must keep their seatbelts on and mustn't use the toilets during landing.",q:"¿Qué está prohibido durante el aterrizaje?",o:["Usar el cinturón","Usar los baños","Hablar","Leer"],a:1},
  {t:"oral",text:"You must wear a helmet, and you mustn't use your phone while driving."}
 ],
 more:[
  {t:"order",words:["You","mustn't","touch","the","paintings."],es:"No debe tocar las pinturas."},
  {t:"order",words:["Phones","must","be","on","silent","mode."],es:"Los celulares deben estar en silencio."},
  {t:"dict",say:"Smoking is not allowed here."},
  {t:"dict",say:"I got a fine for parking here."},
  {t:"mc",q:"Un aviso dice 'Keep off the grass'. Significa:",o:["Corte el césped","No pise el césped","Riegue el césped","Siéntese en el césped"],a:1},
  {t:"mc",q:"Diferencia: 'You mustn't go' vs 'You don't have to go':",o:["Prohibido / no es necesario","No es necesario / prohibido","Las dos son iguales","Las dos significan obligación"],a:0},
  {t:"listen",say:"In this park you mustn't feed the animals, but you can take photos.",q:"¿Qué está prohibido en el parque?",o:["Tomar fotos","Alimentar a los animales","Caminar","Hablar"],a:1},
  {t:"write",q:"Escribe 5 reglas de tu casa, tu trabajo o tu edificio (mínimo 30 palabras). Usa must, mustn't y don't have to.",min:30,keys:[["must"],["mustn't","must not"],["don't have to","allowed"]]}
 ],
 exam:{t:"mc",q:"Sign: 'No photos'. You ___ take photos.",o:["must","mustn't","don't have to","have to"],a:1},
 exam2:{t:"mc",q:"You ___ be 18 to drive in Colombia.",o:["must","mustn't","don't have to","shouldn't"],a:0}
},
{ id:"a2-u5-l5", title:"En la farmacia y en el médico", goal:"Pedir ayuda en la farmacia y entender las instrucciones del médico.",
 theory:[
  {p:"En el **médico** te preguntan y te dan instrucciones:"},
  {ex:[["What are your symptoms?","¿Cuáles son sus síntomas?"],["How long have you had this pain?","¿Hace cuánto tiene este dolor?"],["Are you allergic to anything?","¿Es alérgico a algo?"],["I'll give you a prescription.","Le voy a dar una fórmula."]]},
  {p:"En la **farmacia**:"},
  {ex:[["I need something for a headache.","Necesito algo para el dolor de cabeza."],["Do I need a prescription?","¿Necesito fórmula médica?"],["How often should I take it?","¿Cada cuánto debo tomarlo?"],["Take two tablets every eight hours.","Tome dos pastillas cada ocho horas."],["Take it after meals.","Tómelo después de las comidas."]]},
  {tip:"Prescription = fórmula médica (no 'prescripción'). Pharmacy (EE. UU.: drugstore) = droguería."}
 ],
 vocab:[
  ["pharmacy / drugstore","sustantivo","farmacia, droguería","Is there a pharmacy near here?"],["pharmacist","sustantivo","farmaceuta","Ask the pharmacist."],
  ["prescription","sustantivo","fórmula médica","Do I need a prescription?"],["symptoms","sustantivo","síntomas","What are your symptoms?"],
  ["tablet / pill","sustantivo","pastilla","Take one tablet a day."],["syrup","sustantivo","jarabe","Cough syrup for children."],
  ["painkiller","sustantivo","analgésico","I need a painkiller."],["antibiotics","sustantivo","antibióticos","The doctor gave me antibiotics."],
  ["allergic to","expresión","alérgico a","I'm allergic to penicillin."],["side effects","sustantivo","efectos secundarios","Are there any side effects?"],
  ["every eight hours","expresión","cada ocho horas","Take it every eight hours."],["after meals","expresión","después de las comidas","Take it after meals."],
  ["on an empty stomach","expresión","en ayunas","Don't take it on an empty stomach."],["dose","sustantivo","dosis","Don't take more than the dose."],
  ["check-up","sustantivo","chequeo","I have a check-up on Monday."],["blood test","sustantivo","examen de sangre","You need a blood test."],
  ["temperature","sustantivo","temperatura","Let me take your temperature."],["examine","verbo","examinar","The doctor examined me."],
  ["insurance","sustantivo","seguro (médico)","Do you have health insurance?"],["recover","verbo","recuperarse","You'll recover in a week."]
 ],
 dialogue:{title:"En la farmacia", scene:"Mónica entra a una farmacia en Nueva York porque su hijo tiene tos.", a:"Farmaceuta", b:"Mónica", lines:[
  ["A","Hi there. How can I help you?","Hola. ¿En qué le puedo ayudar?"],
  ["B","Hi. My son has a bad cough and a sore throat. Do you have something for him?","Hola. Mi hijo tiene mucha tos y dolor de garganta. ¿Tiene algo para él?"],
  ["A","How old is he?","¿Cuántos años tiene?"],
  ["B","He's eight.","Tiene ocho."],
  ["A","Does he have a fever?","¿Tiene fiebre?"],
  ["B","A little. It was 38 degrees this morning.","Un poco. Tenía 38 grados esta mañana."],
  ["A","OK. This cough syrup is for children. You don't need a prescription.","Bueno. Este jarabe para la tos es para niños. No necesita fórmula."],
  ["B","How often should he take it?","¿Cada cuánto debe tomarlo?"],
  ["A","Ten milliliters every eight hours, after meals. He mustn't take more than three doses a day.","Diez mililitros cada ocho horas, después de las comidas. No debe tomar más de tres dosis al día."],
  ["B","Are there any side effects?","¿Tiene efectos secundarios?"],
  ["A","It can make him a bit sleepy. If the fever doesn't go down in two days, he should see a doctor.","Le puede dar un poco de sueño. Si la fiebre no baja en dos días, debe ver a un médico."],
  ["B","Thank you so much. How much is it?","Muchas gracias. ¿Cuánto cuesta?"]
 ]},
 practice:[
  {t:"mc",q:"'Fórmula médica' en inglés es:",o:["formula","prescription","recipe","receipt"],a:1},
  {t:"mc",q:"Take one tablet ___ eight hours.",o:["each","every","all","for"],a:1},
  {t:"mc",q:"I'm allergic ___ penicillin.",o:["of","to","with","for"],a:1},
  {t:"fill",q:"How often ___ I take this medicine?",ans:["should"]},
  {t:"listen",say:"Take these antibiotics twice a day for seven days. Don't take them on an empty stomach.",q:"¿Por cuántos días debe tomar los antibióticos?",o:["2","5","7","10"],a:2},
  {t:"oral",text:"I need something for a headache. Do I need a prescription?"}
 ],
 more:[
  {t:"order",words:["Are","you","allergic","to","anything?"],es:"¿Es alérgico a algo?"},
  {t:"order",words:["Take","it","after","meals."],es:"Tómelo después de las comidas."},
  {t:"dict",say:"What are your symptoms?"},
  {t:"dict",say:"You'll recover in a few days."},
  {t:"mc",q:"Analgésico en inglés:",o:["painkiller","killpain","antipain","sickkiller"],a:0},
  {t:"fill",q:"Are there any side ___? (efectos)",ans:["effects"]},
  {t:"listen",say:"The doctor examined me and said I need a blood test and a lot of rest.",q:"¿Qué examen necesita?",o:["De orina","De sangre","Rayos X","Ninguno"],a:1},
  {t:"oral",text:"How often should I take these tablets?"}
 ],
 exam:{t:"mc",q:"—How often should I take it? —___",o:["Every six hours.","For six hours.","Six hours ago.","Since six hours."],a:0},
 exam2:{t:"listen",say:"Don't take more than four tablets a day, and don't drink alcohol with this medicine.",q:"¿Cuál es el máximo de pastillas al día?",o:["2","3","4","6"],a:2}
}
],
quiz:[
 {t:"mc",q:"I have a ___ throat and a cough.",o:["sore","sour","hurt","pain"],a:0},
 {t:"mc",q:"You ___ go to bed late. You have an exam tomorrow.",o:["should","shouldn't","must to","have"],a:1},
 {t:"mc",q:"You ___ bring anything. We have everything.",o:["mustn't","don't have to","must","have to"],a:1},
 {t:"mc",q:"You ___ use your phone during the exam. It's forbidden.",o:["don't have to","mustn't","shouldn't to","must"],a:1},
 {t:"mc",q:"Take this medicine ___ meals.",o:["after","later","since","for"],a:0},
 {t:"fill",q:"Yesterday I ___ to go to the hospital. (tuve que)",ans:["had"]},
 {t:"listen",say:"My back hurts a lot. I think I should stop working and see a physiotherapist.",q:"¿A quién cree que debe ver?",o:["Un dentista","Un fisioterapeuta","Un psicólogo","Un farmaceuta"],a:1},
 {t:"listen",say:"Employees must wear an ID card, but they don't have to wear a suit.",q:"¿Qué no es obligatorio?",o:["El carné","El traje","Los zapatos","La corbata y el carné"],a:1},
 {t:"write",q:"Un amigo no se siente bien. Escríbele qué debe hacer y qué no, y qué reglas hay en el hospital (mínimo 40 palabras). Usa should, shouldn't, have to y mustn't.",min:40,keys:[["should"],["shouldn't","should not"],["have to","has to","must"],["mustn't","must not","don't have to"]]},
 {t:"oral",text:"What's the matter? You should see a doctor."},
 {t:"oral",text:"I have to work tomorrow, but I don't have to get up early."}
],
pool:[
 {t:"mc",q:"—What's the matter? —___",o:["My stomach hurts.","I'm matter.","I matter my head.","It hurts me the head."],a:0},
 {t:"mc",q:"She ___ wear a uniform at school.",o:["have to","has to","must to","have"],a:1},
 {t:"mc",q:"You look stressed. ___ you take a break?",o:["Why don't","Why not","Should not","Do"],a:0},
 {t:"mc",q:"Passengers ___ stay seated during takeoff.",o:["must","mustn't","don't have to","should to"],a:0},
 {t:"mc",q:"I'm allergic ___ cats.",o:["of","with","to","for"],a:2},
 {t:"mc",q:"Dosis en inglés es:",o:["dose","doses only","dosage time","dosis"],a:0},
 {t:"fill",q:"If I ___ you, I'd see a dentist.",ans:["were"]},
 {t:"fill",q:"You don't have ___ pay. It's free.",ans:["to"]},
 {t:"listen",say:"The doctor said I mustn't play football for six weeks because of my knee.",q:"¿Por cuánto tiempo no puede jugar fútbol?",o:["6 días","6 semanas","6 meses","2 semanas"],a:1},
 {t:"listen",say:"Take one tablet in the morning and one at night. Don't take it with milk.",q:"¿Con qué no debe tomarla?",o:["Agua","Leche","Jugo","Comida"],a:1},
 {t:"listen",say:"I had to cancel my trip because I broke my leg.",q:"¿Por qué canceló el viaje?",o:["Por trabajo","Se rompió la pierna","Por el clima","Perdió el pasaporte"],a:1},
 {t:"write",q:"Escribe las instrucciones que te dio un médico la última vez que estuviste enfermo (mínimo 35 palabras).",min:35,keys:[["take","every","times a day"],["should","must","have to"],["shouldn't","mustn't","don't"]]},
 {t:"oral",text:"I don't feel well. My head hurts and I have a fever."},
 {t:"oral",text:"You mustn't smoke here, but you can smoke outside."},
 {t:"oral",text:"Take two tablets every eight hours after meals."}
]
};
