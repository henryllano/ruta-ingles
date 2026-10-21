/* Temario por nivel. Cada unidad tiene lecciones (un día de estudio cada una) y un quiz de unidad.
   Bloques de teoría: {p:"texto"} párrafo (**negrita**), {ex:[["inglés","español"],...]} ejemplos con audio, {tip:"..."} consejo.
   Práctica: mc (opción múltiple), fill (completar), listen (escuchar), oral (decir en voz alta), write (redacción). */
window.SYLLABUS = {
0: {
  intro: "En 24 lecciones vas a aprender a presentarte, hablar de tu familia, tu rutina, la comida, tu ciudad y tu tiempo libre. Estudia una lección por día (unos 40 minutos), presenta el quiz al terminar cada unidad y al final el examen de A1.",
  units: [
  /* ---------------- Unidad 1 ---------------- */
  { title: "Hola, ¿quién eres?", lessons: [
    { title: "Saludos y despedidas", goal: "Saludar, despedirte y preguntar cómo está alguien.",
      theory: [
        {p:"En inglés el saludo cambia según la hora y qué tan formal es la situación. **Hello** sirve siempre; **Hi** es más informal, entre amigos."},
        {ex:[["Hello! / Hi!","¡Hola!"],["Good morning.","Buenos días."],["Good afternoon.","Buenas tardes."],["Good evening.","Buenas noches (al llegar)."],["Good night.","Buenas noches (al despedirte o ir a dormir)."]]},
        {p:"Para preguntar cómo está alguien y responder:"},
        {ex:[["How are you?","¿Cómo estás?"],["I'm fine, thanks. And you?","Bien, gracias. ¿Y tú?"],["I'm very well.","Estoy muy bien."],["Not bad.","No muy mal."]]},
        {p:"Para despedirte:"},
        {ex:[["Goodbye. / Bye!","Adiós. / ¡Chao!"],["See you later.","Nos vemos."],["See you tomorrow.","Hasta mañana."]]},
        {tip:"Good night NO se usa para saludar al llegar. Al llegar de noche se dice Good evening."}
      ],
      words: ["Hello / Hi","Good morning","Goodbye / Bye","How are you?","I'm fine, thanks","See you later","Please","Thank you / Thanks"],
      practice: [
        {t:"mc",q:"Son las 9 de la mañana. Saludas a tu jefe:",o:["Good night","Good morning","Good evening","See you later"],a:1,x:"Por la mañana se dice Good morning."},
        {t:"mc",q:"—How are you? —___",o:["I'm fine, thanks.","I'm Laura.","I'm from Colombia.","Goodbye."],a:0,x:"A How are you? se responde cómo estás: I'm fine."},
        {t:"mc",q:"Te vas a dormir. Le dices a tu familia:",o:["Good evening","Good afternoon","Good night","Hello"],a:2,x:"Good night es para despedirse en la noche."},
        {t:"fill",q:"See you ___. (mañana)",ans:["tomorrow"],x:"Tomorrow = mañana."},
        {t:"listen",say:"Good afternoon! How are you today?",q:"¿Qué escuchaste?",o:["Un saludo de la tarde","Una despedida","Un saludo de la noche","Una presentación"],a:0},
        {t:"oral",text:"Good morning! How are you?"}
      ]},
    { title: "El verbo to be y presentarte", goal: "Decir tu nombre y usar I am, you are, he is, she is.",
      theory: [
        {p:"El verbo **to be** significa **ser** o **estar**. Es el verbo más importante del inglés y cambia según la persona:"},
        {ex:[["I am (I'm)","yo soy / estoy"],["You are (you're)","tú eres / estás"],["He is (he's)","él es / está"],["She is (she's)","ella es / está"],["It is (it's)","eso es / está"],["We are (we're)","nosotros somos / estamos"],["They are (they're)","ellos son / están"]]},
        {p:"Para presentarte:"},
        {ex:[["My name is Henry.","Mi nombre es Henry."],["I'm Henry.","Soy Henry."],["What's your name?","¿Cuál es tu nombre?"],["Nice to meet you.","Mucho gusto."]]},
        {tip:"En inglés siempre se dice el sujeto: no se dice 'Am Henry', se dice 'I am Henry'."}
      ],
      words: ["I","you","he","she","it","we","they","be","name","Nice to meet you"],
      practice: [
        {t:"mc",q:"She ___ my sister.",o:["am","is","are","be"],a:1,x:"Con she se usa is."},
        {t:"mc",q:"We ___ friends.",o:["is","am","are","be"],a:2,x:"Con we se usa are."},
        {t:"mc",q:"___ name is Carlos.",o:["I","Me","My","Am"],a:2,x:"Para decir 'mi nombre' se usa my."},
        {t:"fill",q:"I ___ a student. (soy)",ans:["am","'m"],x:"Con I se usa am."},
        {t:"listen",say:"Hi, I'm Daniel. Nice to meet you.",q:"¿Cómo se llama la persona?",o:["David","Daniel","Diana","Danny"],a:1},
        {t:"oral",text:"Hello, my name is Ana. Nice to meet you."}
      ]},
    { title: "Países y nacionalidades", goal: "Decir de dónde eres y preguntar de dónde es alguien.",
      theory: [
        {p:"Para hablar de origen se usa **be from** (ser de):"},
        {ex:[["Where are you from?","¿De dónde eres?"],["I'm from Colombia.","Soy de Colombia."],["She is from Mexico.","Ella es de México."],["They are from Spain.","Ellos son de España."]]},
        {p:"Las nacionalidades se escriben **siempre con mayúscula** en inglés:"},
        {ex:[["Colombia → Colombian","colombiano"],["Mexico → Mexican","mexicano"],["Spain → Spanish","español"],["the United States → American","estadounidense"],["England → English","inglés"]]},
        {p:"Para negar se agrega **not**: I'm not from Peru. He isn't (is not) American."},
        {tip:"Spanish es tanto 'español' (nacionalidad) como el idioma español."}
      ],
      words: ["Where are you from?","from","city","speak"],
      practice: [
        {t:"mc",q:"Where ___ you from?",o:["is","am","are","do"],a:2,x:"Con you se usa are."},
        {t:"mc",q:"I'm from Colombia. I'm ___.",o:["colombian","Colombian","Colombia","Columbian"],a:1,x:"Las nacionalidades van con mayúscula: Colombian."},
        {t:"mc",q:"He ___ from Peru. He's from Chile.",o:["is","isn't","aren't","not"],a:1,x:"Negativo con he: isn't (is not)."},
        {t:"fill",q:"She is ___ Mexico.",ans:["from"],x:"be from = ser de."},
        {t:"listen",say:"My name is Paolo. I'm from Italy, but I live in Bogotá.",q:"¿De dónde es Paolo?",o:["Colombia","Italia","España","México"],a:1},
        {t:"oral",text:"I'm from Colombia. Where are you from?"}
      ]},
    { title: "Números del 0 al 20 y la edad", goal: "Contar hasta 20 y decir cuántos años tienes.",
      theory: [
        {ex:[["zero, one, two, three, four, five","0, 1, 2, 3, 4, 5"],["six, seven, eight, nine, ten","6, 7, 8, 9, 10"],["eleven, twelve, thirteen, fourteen, fifteen","11, 12, 13, 14, 15"],["sixteen, seventeen, eighteen, nineteen, twenty","16, 17, 18, 19, 20"]]},
        {p:"Para la edad en inglés se usa **be**, no 'tener':"},
        {ex:[["How old are you?","¿Cuántos años tienes?"],["I'm thirty-five (years old).","Tengo treinta y cinco años."],["My son is ten.","Mi hijo tiene diez años."]]},
        {tip:"Error muy común: decir 'I have 35 years'. Lo correcto es 'I am 35'."},
        {p:"Las decenas: twenty (20), thirty (30), forty (40), fifty (50). Se combinan con guion: thirty-five (35), forty-two (42)."}
      ],
      reading: 0,
      words: ["one, two, three, four, five","six, seven, eight, nine, ten","eleven, twelve, twenty, thirty","how old","year"],
      practice: [
        {t:"mc",q:"¿Cómo dices 'Tengo 30 años'?",o:["I have 30 years.","I am 30 years old.","I have 30 old.","I'm 30 years."],a:1,x:"La edad va con be: I am 30 years old."},
        {t:"mc",q:"How old ___ your daughter?",o:["are","am","is","has"],a:2,x:"Your daughter = she → is."},
        {t:"mc",q:"'Fifteen' es:",o:["50","15","5","16"],a:1,x:"Fifteen = 15; fifty = 50."},
        {t:"fill",q:"12 se escribe: ___",ans:["twelve"],x:"12 = twelve."},
        {t:"listen",say:"My grandmother is seventy-eight years old.",q:"¿Cuántos años tiene la abuela?",o:["68","87","78","18"],a:2},
        {t:"oral",text:"I am thirty-five years old."}
      ]}
  ],
  quiz: [
    {t:"mc",q:"Por la tarde saludas así:",o:["Good night","Good afternoon","Goodbye","Good morning"],a:1},
    {t:"mc",q:"They ___ from Brazil.",o:["is","am","are","be"],a:2},
    {t:"mc",q:"—What's your name? —___",o:["I'm fine.","My name is Pedro.","I'm 20.","I'm from Cali."],a:1},
    {t:"mc",q:"She is from Spain. She is ___.",o:["Spain","Spanish","spanish","Spainish"],a:1},
    {t:"mc",q:"¿Cómo preguntas la edad?",o:["How are you?","How old are you?","How many years have you?","What is your old?"],a:1},
    {t:"fill",q:"He ___ from Chile. (es)",ans:["is","'s"]},
    {t:"listen",say:"Hi! I'm Sofia. I'm twenty-four and I'm from Argentina.",q:"¿Cuántos años tiene Sofia?",o:["14","24","42","20"],a:1},
    {t:"listen",say:"Good evening. My name is Mr. Brown. I'm your new teacher.",q:"¿Quién es Mr. Brown?",o:["Un estudiante","El nuevo profesor","Un doctor","Un amigo"],a:1},
    {t:"oral",text:"Hello! My name is Henry and I'm from Colombia."},
    {t:"oral",text:"How old are you?"}
  ]},
  /* ---------------- Unidad 2 ---------------- */
  { title: "Mi familia y mis cosas", lessons: [
    { title: "La familia y los posesivos", goal: "Presentar a tu familia usando my, your, his, her, our, their.",
      theory: [
        {p:"Los **posesivos** van antes del sustantivo y no cambian en plural:"},
        {ex:[["my mother","mi mamá"],["your father","tu papá"],["his wife","la esposa de él"],["her husband","el esposo de ella"],["our children","nuestros hijos"],["their house","la casa de ellos"]]},
        {p:"Para decir 'el carro de Carlos' se usa **'s**: **Carlos's car**, **my sister's name**."},
        {tip:"His es de él y her es de ella, sin importar si la cosa es masculina o femenina: his mother (la mamá de él)."}
      ],
      reading: 1,
      words: ["mother","father","brother","sister","son","daughter","husband","wife","children","my","your","his","her","our","their"],
      practice: [
        {t:"mc",q:"Ana is married. ___ husband is Carlos.",o:["His","Her","Their","Our"],a:1,x:"Ana es mujer → her husband."},
        {t:"mc",q:"Pedro and Lucía have a son. ___ son is five.",o:["Their","His","Her","Your"],a:0,x:"De ellos → their."},
        {t:"mc",q:"La hermana de mi mamá se escribe:",o:["my mother sister","my mother's sister","my mothers sister","my sister's mother"],a:1,x:"Posesión con 's: my mother's sister."},
        {t:"fill",q:"My father's son is my ___.",ans:["brother"],x:"El hijo de tu papá es tu hermano."},
        {t:"listen",say:"This is my family. My wife is Marta and our daughter is Sara.",q:"¿Cómo se llama la hija?",o:["Marta","Sara","Laura","Ana"],a:1},
        {t:"oral",text:"This is my family. My wife is Laura."}
      ]},
    { title: "Artículos a / an y plurales", goal: "Usar a, an, the y formar plurales.",
      theory: [
        {p:"**a** y **an** significan 'un / una'. Se usa **an** antes de sonido de vocal:"},
        {ex:[["a book, a car, a house","un libro, un carro, una casa"],["an apple, an egg, an hour","una manzana, un huevo, una hora"]]},
        {p:"**the** es 'el, la, los, las' y es igual para todo."},
        {p:"Plural: casi siempre se agrega **-s**. Si termina en s, sh, ch, x se agrega **-es**. Hay irregulares:"},
        {ex:[["book → books","libro → libros"],["bus → buses","bus → buses"],["child → children","niño → niños"],["man → men / woman → women","hombre → hombres / mujer → mujeres"],["person → people","persona → personas"]]},
        {tip:"Hour empieza con h muda (suena 'aur'), por eso es an hour."}
      ],
      words: ["a","an","the","book","car","house","egg"],
      practice: [
        {t:"mc",q:"I have ___ apple.",o:["a","an","the","—"],a:1,x:"Apple empieza con sonido de vocal → an."},
        {t:"mc",q:"She has ___ new car.",o:["an","a","—","two"],a:1,x:"New empieza con consonante → a."},
        {t:"mc",q:"El plural de child es:",o:["childs","childes","children","childrens"],a:2,x:"Child → children (irregular)."},
        {t:"fill",q:"one bus, two ___",ans:["buses"],x:"Termina en s → se agrega -es."},
        {t:"listen",say:"There are three women and two men in the office.",q:"¿Cuántas mujeres hay?",o:["2","3","5","1"],a:1},
        {t:"oral",text:"I have a car and two books."}
      ]},
    { title: "This, that, these, those", goal: "Señalar cosas cerca y lejos.",
      theory: [
        {ex:[["this","este, esta, esto (cerca, singular)"],["these","estos, estas (cerca, plural)"],["that","ese, esa, aquel (lejos, singular)"],["those","esos, esas, aquellos (lejos, plural)"]]},
        {ex:[["This is my phone.","Este es mi teléfono."],["These are my keys.","Estas son mis llaves."],["Is that your bag?","¿Esa es tu bolsa?"],["Those shoes are nice.","Esos zapatos son lindos."]]},
        {tip:"Con these y those el verbo va en plural: These ARE..., Those ARE..."}
      ],
      words: ["this","that","phone","shoes","table","chair"],
      practice: [
        {t:"mc",q:"___ are my children. (aquí, cerca)",o:["This","That","These","Those"],a:2,x:"Cerca y plural → these."},
        {t:"mc",q:"Look at ___ house over there!",o:["these","that","those","this"],a:1,x:"Lejos y singular → that."},
        {t:"mc",q:"Those ___ my shoes.",o:["is","are","am","be"],a:1,x:"Those es plural → are."},
        {t:"fill",q:"___ is my wife, Laura. (esta, cerca)",ans:["this"],x:"Cerca y singular → this."},
        {t:"listen",say:"Excuse me, are those your keys on the table?",q:"¿Qué pregunta la persona?",o:["Si las llaves son suyas","Dónde está la mesa","Qué hora es","Si quiere café"],a:0},
        {t:"oral",text:"This is my phone and these are my keys."}
      ]},
    { title: "Have: lo que tienes", goal: "Decir qué tienes y preguntar con Do you have...?",
      theory: [
        {p:"**have** significa 'tener'. Con he, she, it cambia a **has**:"},
        {ex:[["I have a dog.","Tengo un perro."],["She has two children.","Ella tiene dos hijos."],["We have a big house.","Tenemos una casa grande."]]},
        {p:"Para preguntar y negar se usa **do / does**:"},
        {ex:[["Do you have a car?","¿Tienes carro?"],["Yes, I do. / No, I don't.","Sí. / No."],["Does he have a brother?","¿Él tiene un hermano?"],["She doesn't have a phone.","Ella no tiene teléfono."]]},
        {tip:"Después de does / doesn't el verbo vuelve a have: Does she have? (no 'Does she has')."}
      ],
      words: ["have","dog","cat","money","job"],
      practice: [
        {t:"mc",q:"My brother ___ a red car.",o:["have","has","haves","having"],a:1,x:"He → has."},
        {t:"mc",q:"___ you have a pet?",o:["Are","Does","Do","Have"],a:2,x:"Con you → Do you have...?"},
        {t:"mc",q:"She ___ have a job.",o:["don't","doesn't","isn't","hasn't"],a:1,x:"Negativo con she → doesn't have."},
        {t:"fill",q:"—Do you have children? —Yes, I ___.",ans:["do"],x:"Respuesta corta: Yes, I do."},
        {t:"listen",say:"I don't have a car, but my wife has a motorcycle.",q:"¿Quién tiene moto?",o:["El que habla","La esposa","Nadie","Los dos"],a:1},
        {t:"oral",text:"I have two sisters and one brother."}
      ]}
  ],
  quiz: [
    {t:"mc",q:"Laura's husband is Carlos. Carlos is ___ husband.",o:["his","her","their","its"],a:1},
    {t:"mc",q:"I'd like ___ egg, please.",o:["a","an","the","some"],a:1},
    {t:"mc",q:"Plural de woman:",o:["womans","women","womens","woman"],a:1},
    {t:"mc",q:"___ are my parents over there.",o:["This","That","These","Those"],a:3},
    {t:"mc",q:"Does your sister ___ a car?",o:["has","have","haves","is"],a:1},
    {t:"fill",q:"My mother's mother is my ___.",ans:["grandmother","grandma"]},
    {t:"listen",say:"We have three children: two boys and a girl.",q:"¿Cuántas hijas tienen?",o:["1","2","3","0"],a:0},
    {t:"listen",say:"Is this your bag? No, my bag is that one, the black one.",q:"¿De qué color es su bolsa?",o:["Blanca","Negra","Roja","Azul"],a:1},
    {t:"oral",text:"This is my brother. His name is David."},
    {t:"oral",text:"Do you have any children?"}
  ]},
  /* ---------------- Unidad 3 ---------------- */
  { title: "Mi día", lessons: [
    { title: "Presente simple: lo que haces siempre", goal: "Hablar de tu rutina con el presente simple.",
      theory: [
        {p:"El **presente simple** se usa para hábitos y cosas que son verdad siempre. Es el verbo normal, pero con **he, she, it** se agrega **-s**:"},
        {ex:[["I work in an office.","Trabajo en una oficina."],["You live in Cali.","Vives en Cali."],["She works in a hospital.","Ella trabaja en un hospital."],["He watches TV at night.","Él ve TV en la noche."],["My son studies English.","Mi hijo estudia inglés."]]},
        {p:"Reglas de la -s: verbos que terminan en s, sh, ch, x, o agregan **-es** (watches, goes). Si terminan en consonante + y, cambian a **-ies** (study → studies). **have → has**."},
        {tip:"La -s es solo para he, she, it. 'They works' es un error: es 'they work'."}
      ],
      words: ["work","live","study","watch","go","eat","drink"],
      practice: [
        {t:"mc",q:"My wife ___ in a bank.",o:["work","works","working","is work"],a:1,x:"She → works."},
        {t:"mc",q:"They ___ in Medellín.",o:["lives","live","living","is live"],a:1,x:"They → live (sin -s)."},
        {t:"mc",q:"He ___ TV every night.",o:["watchs","watches","watch","watching"],a:1,x:"Termina en ch → watches."},
        {t:"fill",q:"She ___ (study) English on Mondays.",ans:["studies"],x:"Consonante + y → ies: studies."},
        {t:"listen",say:"My husband gets up early. He goes to the gym before work.",q:"¿Qué hace el esposo antes del trabajo?",o:["Desayuna","Va al gimnasio","Lee","Duerme"],a:1},
        {t:"oral",text:"I work in an office and my wife works in a school."}
      ]},
    { title: "La hora y la rutina diaria", goal: "Decir la hora y contar tu día.",
      theory: [
        {ex:[["What time is it?","¿Qué hora es?"],["It's seven o'clock.","Son las siete en punto."],["It's half past seven.","Son las siete y media."],["It's quarter past eight.","Son las ocho y cuarto."],["It's quarter to nine.","Son las nueve menos cuarto."]]},
        {p:"Para decir a qué hora haces algo se usa **at**:"},
        {ex:[["I get up at six.","Me levanto a las seis."],["I have breakfast at seven.","Desayuno a las siete."],["I go to bed at ten.","Me acuesto a las diez."]]},
        {tip:"Para 'desayunar, almorzar, cenar' se usa have: have breakfast, have lunch, have dinner."}
      ],
      reading: 2,
      words: ["time","get up","breakfast","lunch","dinner","morning","afternoon","night"],
      practice: [
        {t:"mc",q:"7:30 en inglés es:",o:["half past seven","seven half","half to seven","thirty seven"],a:0,x:"Y media = half past."},
        {t:"mc",q:"I get up ___ six o'clock.",o:["in","on","at","to"],a:2,x:"Con la hora → at."},
        {t:"mc",q:"¿Cómo dices 'almorzamos a la una'?",o:["We eat lunch in one.","We have lunch at one.","We lunch at one hour.","We have lunch on one."],a:1,x:"have lunch at one."},
        {t:"fill",q:"What ___ is it? It's five o'clock.",ans:["time"],x:"What time is it? = ¿Qué hora es?"},
        {t:"listen",say:"The meeting is at quarter past ten.",q:"¿A qué hora es la reunión?",o:["10:15","10:45","9:45","10:30"],a:0},
        {t:"oral",text:"I get up at six and I have breakfast at seven."}
      ]},
    { title: "Negativas y preguntas en presente", goal: "Decir lo que no haces y hacer preguntas.",
      theory: [
        {p:"Para negar se usa **don't** (I, you, we, they) o **doesn't** (he, she, it) + verbo sin -s:"},
        {ex:[["I don't smoke.","No fumo."],["She doesn't eat meat.","Ella no come carne."],["They don't work on Sundays.","No trabajan los domingos."]]},
        {p:"Para preguntar se pone **Do** o **Does** al inicio:"},
        {ex:[["Do you like coffee?","¿Te gusta el café?"],["Does he speak English?","¿Él habla inglés?"],["Where do you work?","¿Dónde trabajas?"],["What time does the class start?","¿A qué hora empieza la clase?"]]},
        {tip:"Con doesn't y does el verbo pierde la -s: She doesn't work (no 'doesn't works')."}
      ],
      words: ["do","like","speak","understand","know"],
      practice: [
        {t:"mc",q:"He ___ like vegetables.",o:["don't","doesn't","isn't","not"],a:1,x:"He → doesn't."},
        {t:"mc",q:"___ your children go to school by bus?",o:["Does","Do","Are","Is"],a:1,x:"Your children = they → Do."},
        {t:"mc",q:"Where ___ she live?",o:["do","is","does","are"],a:2,x:"She → does."},
        {t:"fill",q:"I ___ understand. Can you repeat? (no)",ans:["don't","do not"],x:"Negativo con I → don't."},
        {t:"listen",say:"Does your wife work on Saturdays? No, she doesn't. She works from Monday to Friday.",q:"¿Cuándo trabaja la esposa?",o:["Los sábados","De lunes a viernes","Todos los días","Los domingos"],a:1},
        {t:"oral",text:"Do you speak English? Yes, I do."}
      ]},
    { title: "¿Qué tan seguido? Adverbios de frecuencia", goal: "Decir con qué frecuencia haces las cosas.",
      theory: [
        {ex:[["always","siempre (100 %)"],["usually","normalmente (80 %)"],["often","a menudo (60 %)"],["sometimes","a veces (40 %)"],["never","nunca (0 %)"]]},
        {p:"Van **antes del verbo**, pero **después de be**:"},
        {ex:[["I always drink coffee in the morning.","Siempre tomo café en la mañana."],["She sometimes cooks dinner.","Ella a veces cocina la cena."],["He is never late.","Él nunca llega tarde."]]},
        {p:"Para preguntar: **How often do you...?** (¿Con qué frecuencia...?)"},
        {tip:"Never ya es negativo: 'I never smoke' (no 'I don't never smoke')."}
      ],
      words: ["always","usually","often","sometimes","never"],
      practice: [
        {t:"mc",q:"Ordena: (always / I / walk) to work.",o:["I walk always to work.","Always I walk to work.","I always walk to work.","I walk to work always."],a:2,x:"El adverbio va antes del verbo."},
        {t:"mc",q:"He ___ late.",o:["never is","is never","never be","don't never"],a:1,x:"Con be el adverbio va después: is never."},
        {t:"mc",q:"'A veces' en inglés es:",o:["always","often","sometimes","never"],a:2},
        {t:"fill",q:"How ___ do you go to the gym?",ans:["often"],x:"How often = con qué frecuencia."},
        {t:"listen",say:"I usually take the bus, but sometimes I walk.",q:"¿Cómo va normalmente?",o:["Camina","En bus","En carro","En bicicleta"],a:1},
        {t:"oral",text:"I usually get up at six, but on Sundays I get up at nine."}
      ]}
  ],
  quiz: [
    {t:"mc",q:"My father ___ in a hospital.",o:["work","works","is work","working"],a:1},
    {t:"mc",q:"She ___ coffee. She prefers tea.",o:["don't drink","doesn't drinks","doesn't drink","not drink"],a:2},
    {t:"mc",q:"___ they live near here?",o:["Does","Do","Are","Is"],a:1},
    {t:"mc",q:"8:15 es:",o:["quarter to eight","quarter past eight","eight and fifteen","half past eight"],a:1},
    {t:"mc",q:"Ordena: She (late / is / never).",o:["She never is late.","She is never late.","She is late never.","Never she is late."],a:1},
    {t:"fill",q:"He ___ (go) to bed at eleven.",ans:["goes"]},
    {t:"listen",say:"I start work at nine and I finish at six. I have lunch at one.",q:"¿A qué hora termina de trabajar?",o:["A las 9","A la 1","A las 6","A las 5"],a:2},
    {t:"listen",say:"My son never eats vegetables, but he always eats fruit.",q:"¿Qué come siempre el hijo?",o:["Verduras","Fruta","Carne","Pan"],a:1},
    {t:"oral",text:"I usually have lunch at one o'clock."},
    {t:"oral",text:"Does your wife speak English?"}
  ]},
  /* ---------------- Unidad 4 ---------------- */
  { title: "Comida y compras", lessons: [
    { title: "Comida y gustos", goal: "Decir qué te gusta y qué no te gusta comer.",
      theory: [
        {ex:[["I like chicken.","Me gusta el pollo."],["I love fruit.","Me encanta la fruta."],["I don't like fish.","No me gusta el pescado."],["She likes coffee.","A ella le gusta el café."],["Do you like rice?","¿Te gusta el arroz?"]]},
        {p:"En inglés el que 'gusta' es la persona: **I like** = me gusta. No se dice 'me like'."},
        {tip:"Con comida en general no se usa the: I like chicken (no 'I like the chicken')."}
      ],
      words: ["food","water","coffee","milk","bread","rice","chicken","fruit","like","love"],
      practice: [
        {t:"mc",q:"'Me gusta el té' es:",o:["Me like tea.","I like tea.","I like the tea.","I likes tea."],a:1,x:"I like tea, sin the."},
        {t:"mc",q:"My son ___ pizza.",o:["love","loves","is love","loving"],a:1,x:"He → loves."},
        {t:"mc",q:"___ you like fish?",o:["Are","Does","Do","Is"],a:2},
        {t:"fill",q:"I don't like milk, but I ___ cheese. (amo)",ans:["love"],x:"love = amar, encantar."},
        {t:"listen",say:"I love Mexican food, but I don't like very spicy things.",q:"¿Qué no le gusta?",o:["La comida mexicana","Lo muy picante","El arroz","El pollo"],a:1},
        {t:"oral",text:"I love fruit, but I don't like fish."}
      ]},
    { title: "There is / there are, some / any", goal: "Decir qué hay y usar some y any.",
      theory: [
        {ex:[["There is a supermarket near my house.","Hay un supermercado cerca de mi casa."],["There are two banks on this street.","Hay dos bancos en esta calle."],["Is there any milk?","¿Hay leche?"],["There isn't any bread.","No hay pan."]]},
        {p:"**some** se usa en frases afirmativas; **any** en negativas y preguntas:"},
        {ex:[["There are some eggs.","Hay unos huevos."],["Are there any apples?","¿Hay manzanas?"],["We don't have any rice.","No tenemos arroz."]]},
        {tip:"There is + singular; there are + plural."}
      ],
      words: ["egg","bread","milk","supermarket"],
      practice: [
        {t:"mc",q:"There ___ three eggs in the fridge.",o:["is","are","be","has"],a:1,x:"Plural → there are."},
        {t:"mc",q:"Is there ___ coffee?",o:["some","any","a","an"],a:1,x:"Pregunta → any."},
        {t:"mc",q:"I'd like ___ water, please.",o:["any","some","an","a"],a:1,x:"Afirmativo / al pedir → some."},
        {t:"fill",q:"There ___ a park near my house.",ans:["is","'s"],x:"Singular → there is."},
        {t:"listen",say:"There isn't any milk, but there are some eggs and some bread.",q:"¿Qué NO hay?",o:["Huevos","Pan","Leche","Nada falta"],a:2},
        {t:"oral",text:"There is a supermarket near my house."}
      ]},
    { title: "En el restaurante", goal: "Pedir comida y la cuenta con cortesía.",
      theory: [
        {ex:[["Can I see the menu, please?","¿Puedo ver la carta, por favor?"],["I'd like a coffee, please.","Quisiera un café, por favor."],["Can I have the chicken, please?","¿Me trae el pollo, por favor?"],["For me, a salad.","Para mí, una ensalada."],["Can we have the bill, please?","¿Nos trae la cuenta, por favor?"]]},
        {p:"**I'd like** (I would like) es la forma amable de decir 'quiero'. 'I want' puede sonar brusco."},
        {tip:"En Estados Unidos la cuenta se dice check; en Reino Unido, bill."}
      ],
      reading: 3,
      words: ["I'd like…","Please","Thank you / Thanks","restaurant","How much is it?"],
      practice: [
        {t:"mc",q:"La forma más amable de pedir es:",o:["I want a coffee.","Give me a coffee.","I'd like a coffee, please.","Coffee now."],a:2},
        {t:"mc",q:"Para pedir la cuenta dices:",o:["Can we have the bill, please?","Where is the bill?","I want pay.","Bill me."],a:0},
        {t:"mc",q:"—Anything to drink? —___",o:["Yes, a lemonade, please.","I'm fine.","Nice to meet you.","Goodbye."],a:0},
        {t:"fill",q:"I'd ___ the soup, please.",ans:["like"],x:"I'd like = quisiera."},
        {t:"listen",say:"Hi, can I have a large coffee and a chocolate cake, please?",q:"¿Qué pidió?",o:["Té y torta","Café grande y torta de chocolate","Café pequeño","Jugo y pan"],a:1},
        {t:"oral",text:"I'd like a coffee with milk, please."}
      ]},
    { title: "Precios y números grandes", goal: "Preguntar precios y entender cantidades.",
      theory: [
        {ex:[["How much is this shirt?","¿Cuánto cuesta esta camisa?"],["How much are these shoes?","¿Cuánto cuestan estos zapatos?"],["It's twenty dollars.","Cuesta veinte dólares."],["That's expensive! / That's cheap!","¡Qué caro! / ¡Qué barato!"]]},
        {ex:[["one hundred","100"],["two hundred and fifty","250"],["one thousand","1.000"],["five thousand","5.000"]]},
        {tip:"Para precios en inglés se usa punto para decimales: $4.50 se dice 'four fifty' o 'four dollars fifty'."}
      ],
      words: ["How much is it?","one hundred","money","expensive","cheap","price"],
      practice: [
        {t:"mc",q:"How much ___ these jeans?",o:["is","are","be","does"],a:1,x:"Jeans es plural → are."},
        {t:"mc",q:"350 es:",o:["three hundred fifty-five","three hundred and fifty","thirty-five hundred","three and fifty"],a:1},
        {t:"mc",q:"'¡Qué caro!' es:",o:["That's cheap!","That's expensive!","That's nice!","That's good!"],a:1},
        {t:"fill",q:"How ___ is this book?",ans:["much"],x:"How much = cuánto (precio)."},
        {t:"listen",say:"The jacket is eighty-five dollars, but today it's on sale for sixty.",q:"¿Cuánto cuesta hoy la chaqueta?",o:["$85","$60","$65","$80"],a:1},
        {t:"oral",text:"Excuse me, how much is this shirt?"}
      ]}
  ],
  quiz: [
    {t:"mc",q:"My wife ___ chocolate.",o:["love","loves","is love","lovs"],a:1},
    {t:"mc",q:"There ___ some apples on the table.",o:["is","are","am","be"],a:1},
    {t:"mc",q:"We don't have ___ bread.",o:["some","any","a","an"],a:1},
    {t:"mc",q:"Pides amablemente:",o:["I want the fish.","I'd like the fish, please.","Give fish.","Fish me."],a:1},
    {t:"mc",q:"How much ___ the tickets?",o:["is","are","does","do"],a:1},
    {t:"fill",q:"Can we have the ___, please? (la cuenta)",ans:["bill","check"]},
    {t:"listen",say:"I'd like two coffees and one orange juice, please.",q:"¿Cuántos cafés pide?",o:["1","2","3","Ninguno"],a:1},
    {t:"listen",say:"This phone costs four hundred and fifty dollars.",q:"¿Cuánto cuesta el teléfono?",o:["$415","$540","$450","$4.50"],a:2},
    {t:"oral",text:"Can I have the menu, please?"},
    {t:"oral",text:"There isn't any milk in the fridge."}
  ]},
  /* ---------------- Unidad 5 ---------------- */
  { title: "Mi ciudad y mi casa", lessons: [
    { title: "La casa y los lugares de la ciudad", goal: "Describir tu casa y tu barrio.",
      theory: [
        {ex:[["My house has three bedrooms.","Mi casa tiene tres habitaciones."],["The kitchen is small.","La cocina es pequeña."],["There's a park near my house.","Hay un parque cerca de mi casa."],["There are two restaurants on my street.","Hay dos restaurantes en mi calle."]]},
        {p:"Lugares útiles: **bank** (banco), **hospital**, **supermarket**, **park**, **restaurant**, **school**, **store** (tienda), **pharmacy** (droguería)."},
        {tip:"Con have/has describes lo que tiene la casa; con there is/are describes lo que hay en un lugar."}
      ],
      words: ["house","apartment","room","kitchen","bathroom","bedroom","street","bank","hospital","park"],
      practice: [
        {t:"mc",q:"Donde cocinas es la:",o:["bedroom","kitchen","bathroom","office"],a:1},
        {t:"mc",q:"My apartment ___ two bathrooms.",o:["have","has","there is","is"],a:1,x:"It (my apartment) → has."},
        {t:"mc",q:"Donde sacas dinero:",o:["park","bank","school","hospital"],a:1},
        {t:"fill",q:"There ___ two schools in my neighbourhood.",ans:["are"],x:"Plural → there are."},
        {t:"listen",say:"I live in an apartment. It has two bedrooms, a small kitchen and a big living room.",q:"¿Qué es grande?",o:["La cocina","La sala","El baño","La habitación"],a:1},
        {t:"oral",text:"My house has three bedrooms and a small kitchen."}
      ]},
    { title: "Preposiciones de lugar", goal: "Decir dónde están las cosas.",
      theory: [
        {ex:[["in","en, dentro de: The keys are in my bag."],["on","sobre: The phone is on the table."],["under","debajo de: The cat is under the bed."],["next to","al lado de: The bank is next to the park."],["near","cerca de: I live near the school."],["between","entre: The pharmacy is between the bank and the café."],["opposite","al frente de: The school is opposite the church."]]},
        {tip:"Para preguntar dónde está algo: Where is...? / Where are...?"}
      ],
      words: ["in","on","under","next to","near","table","bed"],
      practice: [
        {t:"mc",q:"The cat is ___ the bed. (debajo)",o:["on","in","under","next"],a:2},
        {t:"mc",q:"The bank is ___ the supermarket. (al lado)",o:["next to","near to","in","between"],a:0},
        {t:"mc",q:"Where ___ my glasses?",o:["is","are","am","be"],a:1,x:"Glasses es plural → are."},
        {t:"fill",q:"The book is ___ the table. (sobre)",ans:["on"]},
        {t:"listen",say:"The pharmacy is between the bank and the café, opposite the park.",q:"¿Qué está al frente de la droguería?",o:["El banco","El café","El parque","La escuela"],a:2},
        {t:"oral",text:"My phone is on the table next to the keys."}
      ]},
    { title: "Pedir y dar direcciones", goal: "Preguntar cómo llegar y entender indicaciones simples.",
      theory: [
        {ex:[["Excuse me, where is the station?","Disculpe, ¿dónde está la estación?"],["Is there a bank near here?","¿Hay un banco cerca?"],["Go straight.","Siga derecho."],["Turn left / Turn right.","Gire a la izquierda / derecha."],["It's on the left / on the right.","Está a la izquierda / derecha."],["It's on the corner.","Está en la esquina."]]},
        {tip:"Empieza siempre con Excuse me para sonar amable."}
      ],
      reading: 4,
      words: ["Excuse me","Where are you from?","street","city","near"],
      practice: [
        {t:"mc",q:"'Gire a la derecha' es:",o:["Turn left","Go straight","Turn right","Stop right"],a:2},
        {t:"mc",q:"Para preguntar amablemente empiezas con:",o:["Hey you!","Excuse me,","Listen,","Give me"],a:1},
        {t:"mc",q:"'Siga derecho' es:",o:["Go right","Go straight","Turn straight","Go left"],a:1},
        {t:"fill",q:"The bank is ___ the left.",ans:["on"],x:"on the left / on the right."},
        {t:"listen",say:"Go straight and turn left at the church. The hotel is on the right.",q:"¿Dónde gira?",o:["En el banco","En la iglesia","En el parque","En el hotel"],a:1},
        {t:"oral",text:"Excuse me, is there a pharmacy near here?"}
      ]},
    { title: "Can y can't", goal: "Hablar de habilidades y pedir permiso.",
      theory: [
        {p:"**can** = poder / saber hacer algo. Es igual para todas las personas y el verbo va sin to:"},
        {ex:[["I can swim.","Sé nadar."],["She can speak three languages.","Ella habla tres idiomas."],["I can't (cannot) drive.","No sé manejar."],["Can you help me?","¿Me puedes ayudar?"],["Can I open the window?","¿Puedo abrir la ventana?"]]},
        {tip:"No se dice 'She cans' ni 'I can to swim'. Es: She can swim."}
      ],
      words: ["can","help","open","close","speak"],
      practice: [
        {t:"mc",q:"My daughter ___ play the piano.",o:["cans","can","can to","is can"],a:1},
        {t:"mc",q:"___ I use your phone?",o:["Do","Can","Am","Does"],a:1},
        {t:"mc",q:"He can't ___.",o:["swims","to swim","swim","swimming"],a:2},
        {t:"fill",q:"I ___ cook. I always burn the food. (no puedo)",ans:["can't","cannot"]},
        {t:"listen",say:"I can speak English and French, but I can't speak German.",q:"¿Qué idioma NO habla?",o:["Inglés","Francés","Alemán","Español"],a:2},
        {t:"oral",text:"Can you help me, please?"}
      ]}
  ],
  quiz: [
    {t:"mc",q:"The keys are ___ my bag. (dentro)",o:["on","in","under","at"],a:1},
    {t:"mc",q:"Donde duermes es el:",o:["kitchen","bathroom","bedroom","office"],a:2},
    {t:"mc",q:"'Gire a la izquierda':",o:["Turn right","Turn left","Go left straight","Go straight"],a:1},
    {t:"mc",q:"She ___ drive.",o:["can","cans","can to","is can"],a:0},
    {t:"mc",q:"The café is ___ the bank and the school.",o:["between","next","opposite to","under"],a:0},
    {t:"fill",q:"___ I open the window? (puedo)",ans:["can"]},
    {t:"listen",say:"My apartment is small: one bedroom, one bathroom and a kitchen.",q:"¿Cuántas habitaciones tiene?",o:["1","2","3","0"],a:0},
    {t:"listen",say:"Excuse me, the station is on the corner, next to the post office.",q:"¿Al lado de qué está la estación?",o:["El banco","La oficina de correos","La iglesia","El parque"],a:1},
    {t:"oral",text:"Excuse me, where is the bank?"},
    {t:"oral",text:"I can speak Spanish and a little English."}
  ]},
  /* ---------------- Unidad 6 ---------------- */
  { title: "Tiempo libre y el pasado", lessons: [
    { title: "Días, meses y fechas", goal: "Decir cuándo pasan las cosas con on, in y at.",
      theory: [
        {ex:[["on Monday, on Sunday","el lunes, el domingo"],["on May 5th","el 5 de mayo"],["in March, in 2025","en marzo, en 2025"],["in the morning / afternoon / evening","en la mañana / tarde / noche"],["at 7 o'clock, at night","a las 7, en la noche"]]},
        {p:"Los días y los meses se escriben **con mayúscula** en inglés: Monday, January."},
        {ex:[["When is your birthday?","¿Cuándo es tu cumpleaños?"],["It's on July 20th.","Es el 20 de julio."]]},
        {tip:"Regla rápida: at para horas, on para días y fechas, in para meses, años y partes del día."}
      ],
      words: ["Monday, Tuesday, Wednesday","Thursday, Friday","Saturday, Sunday","January, February, March, April","birthday","week","month"],
      practice: [
        {t:"mc",q:"I have English class ___ Tuesday.",o:["in","at","on","the"],a:2},
        {t:"mc",q:"My birthday is ___ October.",o:["on","in","at","to"],a:1},
        {t:"mc",q:"The movie starts ___ 8 p.m.",o:["in","on","at","for"],a:2},
        {t:"fill",q:"I go to the gym ___ the morning.",ans:["in"]},
        {t:"listen",say:"My birthday is on the twelfth of August.",q:"¿Cuándo es el cumpleaños?",o:["12 de abril","12 de agosto","20 de agosto","2 de agosto"],a:1},
        {t:"oral",text:"My birthday is in March."}
      ]},
    { title: "Presente continuo: lo que pasa ahora", goal: "Decir lo que estás haciendo en este momento.",
      theory: [
        {p:"Para acciones que pasan **ahora mismo** se usa **be + verbo con -ing**:"},
        {ex:[["I'm studying English now.","Estoy estudiando inglés ahora."],["She's cooking dinner.","Ella está cocinando la cena."],["They're watching TV.","Están viendo TV."],["What are you doing?","¿Qué estás haciendo?"],["I'm not working today.","Hoy no estoy trabajando."]]},
        {p:"Ortografía: make → making (se quita la e), run → running, swim → swimming (se dobla la consonante)."},
        {tip:"Compara: I work every day (rutina) / I'm working now (en este momento)."}
      ],
      words: ["now","today","watch","cook","read","play"],
      practice: [
        {t:"mc",q:"Shh! The baby ___.",o:["sleeps","is sleeping","sleep","sleeping"],a:1,x:"Ahora mismo → is sleeping."},
        {t:"mc",q:"What ___ you doing?",o:["is","do","are","does"],a:2},
        {t:"mc",q:"I ___ to music right now.",o:["listen","am listening","listens","listening"],a:1},
        {t:"fill",q:"She is ___ (make) a cake.",ans:["making"],x:"make → making (se quita la e)."},
        {t:"listen",say:"Where's Dad? He's in the garden. He's playing with the dog.",q:"¿Qué está haciendo el papá?",o:["Cocinando","Jugando con el perro","Durmiendo","Leyendo"],a:1},
        {t:"oral",text:"I'm studying English right now."}
      ]},
    { title: "Hobbies: love, like, hate + -ing", goal: "Hablar de lo que te gusta hacer en tu tiempo libre.",
      theory: [
        {p:"Después de **love, like, enjoy, hate** el verbo va con **-ing**:"},
        {ex:[["I love reading.","Me encanta leer."],["She likes dancing.","A ella le gusta bailar."],["We enjoy cooking together.","Disfrutamos cocinar juntos."],["I hate getting up early.","Odio levantarme temprano."],["What do you do in your free time?","¿Qué haces en tu tiempo libre?"]]},
        {tip:"Hobbies comunes: playing football, watching movies, listening to music, going to the gym, travelling."}
      ],
      words: ["like","love","play","watch","listen","walk"],
      practice: [
        {t:"mc",q:"I love ___ movies.",o:["watch","watching","to watching","watches"],a:1},
        {t:"mc",q:"She hates ___ early.",o:["get up","getting up","gets up","got up"],a:1},
        {t:"mc",q:"What do you do in your free ___?",o:["day","hour","time","moment"],a:2},
        {t:"fill",q:"We enjoy ___ (travel).",ans:["travelling","traveling"]},
        {t:"listen",say:"In my free time I like going to the gym and listening to podcasts.",q:"¿Qué le gusta hacer?",o:["Leer y cocinar","Ir al gimnasio y escuchar pódcasts","Ver series","Viajar"],a:1},
        {t:"oral",text:"In my free time I like watching movies and cooking."}
      ]},
    { title: "El pasado de be: was y were", goal: "Hablar de dónde estabas y cómo estuvo algo.",
      theory: [
        {p:"El pasado de **be** tiene dos formas: **was** (I, he, she, it) y **were** (you, we, they):"},
        {ex:[["I was at home yesterday.","Ayer estuve en casa."],["The movie was great.","La película estuvo genial."],["We were in Cartagena last week.","Estuvimos en Cartagena la semana pasada."],["Were you tired?","¿Estabas cansado?"],["It wasn't expensive.","No era caro."]]},
        {p:"Palabras de tiempo pasado: **yesterday** (ayer), **last week** (la semana pasada), **last year**, **two days ago** (hace dos días)."},
        {tip:"Este tema es el puente hacia A2, donde aprenderás el pasado de todos los verbos."}
      ],
      reading: 5,
      words: ["yesterday","be","tired","happy","home"],
      practice: [
        {t:"mc",q:"I ___ sick yesterday.",o:["were","was","am","is"],a:1},
        {t:"mc",q:"They ___ at the party last night.",o:["was","were","are","be"],a:1},
        {t:"mc",q:"___ the food good?",o:["Were","Was","Is it","Did"],a:1},
        {t:"fill",q:"We ___ in Bogotá two weeks ago.",ans:["were"]},
        {t:"listen",say:"Last weekend we were at the beach. The weather was beautiful.",q:"¿Dónde estuvieron?",o:["En la montaña","En la playa","En casa","En Bogotá"],a:1},
        {t:"oral",text:"Yesterday I was at home with my family."}
      ]}
  ],
  quiz: [
    {t:"mc",q:"I go to church ___ Sundays.",o:["in","at","on","to"],a:2},
    {t:"mc",q:"Look! It ___.",o:["rains","is raining","rain","raining"],a:1},
    {t:"mc",q:"My husband likes ___ football.",o:["play","playing","plays","to playing"],a:1},
    {t:"mc",q:"We ___ very tired last night.",o:["was","were","are","be"],a:1},
    {t:"mc",q:"My birthday is ___ December.",o:["on","at","in","to"],a:2},
    {t:"fill",q:"What are you ___ (do) now?",ans:["doing"]},
    {t:"listen",say:"Right now I'm cooking, and my wife is reading a book.",q:"¿Qué está haciendo la esposa?",o:["Cocinando","Leyendo un libro","Viendo TV","Durmiendo"],a:1},
    {t:"listen",say:"I was in Miami last year. It was very hot.",q:"¿Cómo era el clima en Miami?",o:["Frío","Muy caluroso","Lluvioso","Agradable"],a:1},
    {t:"oral",text:"I love reading and listening to music."},
    {t:"oral",text:"Last week I was very busy."}
  ]}
  ],
  /* examen final: preguntas propias + una muestra de los quizzes de unidad */
  final: {
    extra: [
      {t:"mc",q:"—Where are you from? —___",o:["I'm 30.","I'm from Peru.","I'm fine.","I'm a teacher."],a:1},
      {t:"mc",q:"My sister ___ two children.",o:["have","has","is","haves"],a:1},
      {t:"mc",q:"___ there a bank near here?",o:["Are","Is","Do","Does"],a:1},
      {t:"mc",q:"They ___ like coffee.",o:["doesn't","don't","isn't","aren't"],a:1},
      {t:"mc",q:"I usually ___ to work by bus.",o:["goes","going","go","am go"],a:2},
      {t:"mc",q:"The children ___ playing in the park now.",o:["is","are","am","be"],a:1},
      {t:"fill",q:"___ much is this jacket?",ans:["how"]},
      {t:"fill",q:"She ___ (watch) TV every evening.",ans:["watches"]},
      {t:"listen",say:"Hi, I'm Mark. I'm a doctor and I work in a big hospital in the city center.",q:"¿Dónde trabaja Mark?",o:["En una escuela","En un hospital","En un banco","En un restaurante"],a:1},
      {t:"listen",say:"We get up at seven, have breakfast at half past seven and leave home at eight.",q:"¿A qué hora salen de casa?",o:["7:00","7:30","8:00","8:30"],a:2},
      {t:"oral",text:"My name is Henry. I live in Colombia with my family."},
      {t:"oral",text:"On weekends I like cooking and watching movies."},
      {t:"write",q:"Escribe en inglés entre 40 y 80 palabras: preséntate (nombre, edad, de dónde eres), habla de tu familia y de tu rutina de un día normal."}
    ],
    fromEachUnit: 4,
    pass: 70
  }
}
};
