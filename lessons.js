/* Temario por nivel. Cada unidad tiene lecciones (un día de estudio cada una) y un quiz de unidad.
   Teoría: {p} párrafo (**negrita**), {ex:[[inglés,español]]} ejemplos con audio, {tip} consejo.
   Preguntas: mc (opción múltiple), fill (completar), listen (escuchar), oral (decir en voz alta), write (redacción; min = palabras mínimas, keys = grupos de expresiones esperadas).
   exam: la pregunta de esa lección que entra al examen final, para que el examen cubra todos los temas.    pool: banco extra de cada unidad para que al repetir un quiz cambien las preguntas; exam2: segunda versión de la pregunta de examen de la lección.
*/
window.SYLLABUS = {
 "0": {
  "intro": "En 30 lecciones (6 unidades de 5 días) vas a aprender a presentarte y deletrear tus datos, describir a tu familia, contar tu rutina, pedir comida y comprar ropa, moverte por tu ciudad, hablar del clima y de tu tiempo libre. Estudia una lección por día (unos 40 minutos). Cada unidad termina con un quiz de escritura, escucha y habla, y el nivel termina con el examen final.",
  "units": [
   {
    "title": "Hola, ¿quién eres?",
    "lessons": [
     {
      "title": "Saludos y despedidas",
      "goal": "Saludar, despedirte y preguntar cómo está alguien.",
      "theory": [
       {
        "p": "En inglés el saludo cambia según la hora y qué tan formal es la situación. **Hello** sirve siempre; **Hi** es más informal, entre amigos."
       },
       {
        "ex": [
         [
          "Hello! / Hi!",
          "¡Hola!"
         ],
         [
          "Good morning.",
          "Buenos días."
         ],
         [
          "Good afternoon.",
          "Buenas tardes."
         ],
         [
          "Good evening.",
          "Buenas noches (al llegar)."
         ],
         [
          "Good night.",
          "Buenas noches (al despedirte o ir a dormir)."
         ]
        ]
       },
       {
        "p": "Para preguntar cómo está alguien y responder:"
       },
       {
        "ex": [
         [
          "How are you?",
          "¿Cómo estás?"
         ],
         [
          "I'm fine, thanks. And you?",
          "Bien, gracias. ¿Y tú?"
         ],
         [
          "I'm very well.",
          "Estoy muy bien."
         ],
         [
          "Not bad.",
          "No muy mal."
         ]
        ]
       },
       {
        "p": "Para despedirte:"
       },
       {
        "ex": [
         [
          "Goodbye. / Bye!",
          "Adiós. / ¡Chao!"
         ],
         [
          "See you later.",
          "Nos vemos."
         ],
         [
          "See you tomorrow.",
          "Hasta mañana."
         ]
        ]
       },
       {
        "tip": "Good night NO se usa para saludar al llegar. Al llegar de noche se dice Good evening."
       }
      ],
      "words": [
       "Hello / Hi",
       "Good morning",
       "Goodbye / Bye",
       "How are you?",
       "I'm fine, thanks",
       "See you later",
       "Please",
       "Thank you / Thanks"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "Son las 9 de la mañana. Saludas a tu jefe:",
        "o": [
         "Good night",
         "Good morning",
         "Good evening",
         "See you later"
        ],
        "a": 1,
        "x": "Por la mañana se dice Good morning."
       },
       {
        "t": "mc",
        "q": "—How are you? —___",
        "o": [
         "I'm fine, thanks.",
         "I'm Laura.",
         "I'm from Colombia.",
         "Goodbye."
        ],
        "a": 0,
        "x": "A How are you? se responde cómo estás: I'm fine."
       },
       {
        "t": "mc",
        "q": "Te vas a dormir. Le dices a tu familia:",
        "o": [
         "Good evening",
         "Good afternoon",
         "Good night",
         "Hello"
        ],
        "a": 2,
        "x": "Good night es para despedirse en la noche."
       },
       {
        "t": "fill",
        "q": "See you ___. (mañana)",
        "ans": [
         "tomorrow"
        ],
        "x": "Tomorrow = mañana."
       },
       {
        "t": "listen",
        "say": "Good afternoon! How are you today?",
        "q": "¿Qué escuchaste?",
        "o": [
         "Un saludo de la tarde",
         "Una despedida",
         "Un saludo de la noche",
         "Una presentación"
        ],
        "a": 0
       },
       {
        "t": "oral",
        "text": "Good morning! How are you?"
       }
      ],
      "id": "a1-saludos-y-despedidas",
      "exam": {
       "t": "mc",
       "q": "Te despides en la noche antes de dormir:",
       "o": [
        "Good evening.",
        "Good night.",
        "Good afternoon.",
        "Hello."
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "—How are you? —___",
       "o": [
        "I'm fine, thank you.",
        "I'm Ana.",
        "Goodbye.",
        "Nice to meet you."
       ],
       "a": 0
      },
      "vocab": [
       [
        "hello",
        "interjección",
        "hola",
        "Hello! How are you?"
       ],
       [
        "hi",
        "interjección",
        "hola (informal)",
        "Hi, Ana!"
       ],
       [
        "good morning",
        "expresión",
        "buenos días",
        "Good morning, Mr. Pérez."
       ],
       [
        "good afternoon",
        "expresión",
        "buenas tardes",
        "Good afternoon, everyone."
       ],
       [
        "good evening",
        "expresión",
        "buenas noches (al llegar)",
        "Good evening! Welcome."
       ],
       [
        "good night",
        "expresión",
        "buenas noches (al despedirse)",
        "Good night, see you tomorrow."
       ],
       [
        "goodbye",
        "interjección",
        "adiós",
        "Goodbye, have a nice day!"
       ],
       [
        "bye",
        "interjección",
        "chao",
        "Bye! See you."
       ],
       [
        "see you later",
        "expresión",
        "nos vemos más tarde",
        "Bye, see you later!"
       ],
       [
        "see you tomorrow",
        "expresión",
        "hasta mañana",
        "See you tomorrow at work."
       ],
       [
        "How are you?",
        "expresión",
        "¿Cómo estás?",
        "Hi, Carlos! How are you?"
       ],
       [
        "I'm fine",
        "expresión",
        "estoy bien",
        "I'm fine, thanks."
       ],
       [
        "thank you",
        "expresión",
        "gracias",
        "Thank you very much!"
       ],
       [
        "thanks",
        "interjección",
        "gracias (informal)",
        "Thanks, see you!"
       ],
       [
        "and you?",
        "expresión",
        "¿y tú?",
        "I'm fine. And you?"
       ],
       [
        "very well",
        "expresión",
        "muy bien",
        "I'm very well, thank you."
       ],
       [
        "not bad",
        "expresión",
        "no tan mal, más o menos",
        "—How are you? —Not bad."
       ],
       [
        "Have a nice day!",
        "expresión",
        "¡Que tengas un buen día!",
        "Thanks, have a nice day!"
       ],
       [
        "welcome",
        "adjetivo / interjección",
        "bienvenido",
        "Welcome to the class!"
       ],
       [
        "everyone",
        "pronombre",
        "todos",
        "Good morning, everyone!"
       ]
      ],
      "dialogue": {
       "title": "En la oficina por la mañana",
       "scene": "Sara llega a la oficina y saluda a su compañero Tom. Más tarde se despiden.",
       "a": "Sara",
       "b": "Tom",
       "lines": [
        [
         "A",
         "Good morning, Tom!",
         "¡Buenos días, Tom!"
        ],
        [
         "B",
         "Good morning, Sara! How are you?",
         "¡Buenos días, Sara! ¿Cómo estás?"
        ],
        [
         "A",
         "I'm fine, thanks. And you?",
         "Bien, gracias. ¿Y tú?"
        ],
        [
         "B",
         "I'm very well, thank you.",
         "Muy bien, gracias."
        ],
        [
         "A",
         "Is Mr. Brown here today?",
         "¿El señor Brown está hoy?"
        ],
        [
         "B",
         "Yes, he is. He's in his office.",
         "Sí. Está en su oficina."
        ],
        [
         "A",
         "Great. Thank you, Tom.",
         "Genial. Gracias, Tom."
        ],
        [
         "B",
         "You're welcome.",
         "De nada."
        ],
        [
         "A",
         "Well, it's six o'clock. Goodbye, Tom!",
         "Bueno, son las seis. ¡Adiós, Tom!"
        ],
        [
         "B",
         "Bye, Sara! Have a nice evening.",
         "¡Chao, Sara! Que tengas buena noche."
        ],
        [
         "A",
         "Thanks, you too. See you tomorrow!",
         "Gracias, igualmente. ¡Hasta mañana!"
        ],
        [
         "B",
         "See you tomorrow. Good night!",
         "Hasta mañana. ¡Buenas noches!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "How",
         "are",
         "you",
         "today?"
        ],
        "es": "¿Cómo estás hoy?"
       },
       {
        "t": "order",
        "words": [
         "I'm",
         "fine,",
         "thank",
         "you."
        ],
        "es": "Estoy bien, gracias."
       },
       {
        "t": "dict",
        "say": "Good morning, how are you?"
       },
       {
        "t": "dict",
        "say": "See you tomorrow."
       },
       {
        "t": "mc",
        "q": "—Thank you! —___",
        "o": [
         "You're welcome.",
         "Good night.",
         "I'm fine.",
         "See you."
        ],
        "a": 0,
        "x": "A thank you se responde You're welcome (de nada)."
       },
       {
        "t": "mc",
        "q": "Llegas a una fiesta a las 8 p.m.:",
        "o": [
         "Good night!",
         "Good evening!",
         "Good afternoon!",
         "Goodbye!"
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "Hi Paul! I'm not bad, thanks. And you?",
        "q": "¿Cómo está la persona?",
        "o": [
         "Muy mal",
         "No tan mal",
         "Excelente",
         "Cansada"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Good evening! I'm very well, thank you."
       }
      ]
     },
     {
      "title": "El verbo to be y presentarte",
      "goal": "Decir tu nombre y usar I am, you are, he is, she is.",
      "theory": [
       {
        "p": "El verbo **to be** significa **ser** o **estar**. Es el verbo más importante del inglés y cambia según la persona:"
       },
       {
        "ex": [
         [
          "I am (I'm)",
          "yo soy / estoy"
         ],
         [
          "You are (you're)",
          "tú eres / estás"
         ],
         [
          "He is (he's)",
          "él es / está"
         ],
         [
          "She is (she's)",
          "ella es / está"
         ],
         [
          "It is (it's)",
          "eso es / está"
         ],
         [
          "We are (we're)",
          "nosotros somos / estamos"
         ],
         [
          "They are (they're)",
          "ellos son / están"
         ]
        ]
       },
       {
        "p": "Para presentarte:"
       },
       {
        "ex": [
         [
          "My name is Henry.",
          "Mi nombre es Henry."
         ],
         [
          "I'm Henry.",
          "Soy Henry."
         ],
         [
          "What's your name?",
          "¿Cuál es tu nombre?"
         ],
         [
          "Nice to meet you.",
          "Mucho gusto."
         ]
        ]
       },
       {
        "tip": "En inglés siempre se dice el sujeto: no se dice 'Am Henry', se dice 'I am Henry'."
       }
      ],
      "words": [
       "I",
       "you",
       "he",
       "she",
       "it",
       "we",
       "they",
       "be",
       "name",
       "Nice to meet you"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "She ___ my sister.",
        "o": [
         "am",
         "is",
         "are",
         "be"
        ],
        "a": 1,
        "x": "Con she se usa is."
       },
       {
        "t": "mc",
        "q": "We ___ friends.",
        "o": [
         "is",
         "am",
         "are",
         "be"
        ],
        "a": 2,
        "x": "Con we se usa are."
       },
       {
        "t": "mc",
        "q": "___ name is Carlos.",
        "o": [
         "I",
         "Me",
         "My",
         "Am"
        ],
        "a": 2,
        "x": "Para decir 'mi nombre' se usa my."
       },
       {
        "t": "fill",
        "q": "I ___ a student. (soy)",
        "ans": [
         "am",
         "'m"
        ],
        "x": "Con I se usa am."
       },
       {
        "t": "listen",
        "say": "Hi, I'm Daniel. Nice to meet you.",
        "q": "¿Cómo se llama la persona?",
        "o": [
         "David",
         "Daniel",
         "Diana",
         "Danny"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Hello, my name is Ana. Nice to meet you."
       }
      ],
      "id": "a1-el-verbo-to-be-y-presentarte",
      "exam": {
       "t": "fill",
       "q": "They ___ my parents.",
       "ans": [
        "are",
        "'re"
       ]
      },
      "exam2": {
       "t": "mc",
       "q": "My wife and I ___ teachers.",
       "o": [
        "is",
        "am",
        "are",
        "be"
       ],
       "a": 2
      },
      "vocab": [
       [
        "I am",
        "verbo (be)",
        "yo soy / estoy",
        "I am a student."
       ],
       [
        "you are",
        "verbo (be)",
        "tú eres / estás",
        "You are my friend."
       ],
       [
        "he is",
        "verbo (be)",
        "él es / está",
        "He is a doctor."
       ],
       [
        "she is",
        "verbo (be)",
        "ella es / está",
        "She is happy."
       ],
       [
        "it is",
        "verbo (be)",
        "es / está (cosa)",
        "It is a big house."
       ],
       [
        "we are",
        "verbo (be)",
        "nosotros somos / estamos",
        "We are in class."
       ],
       [
        "they are",
        "verbo (be)",
        "ellos son / están",
        "They are teachers."
       ],
       [
        "name",
        "sustantivo",
        "nombre",
        "My name is Henry."
       ],
       [
        "first name",
        "sustantivo",
        "nombre (de pila)",
        "My first name is Laura."
       ],
       [
        "last name",
        "sustantivo",
        "apellido",
        "My last name is Gómez."
       ],
       [
        "student",
        "sustantivo",
        "estudiante",
        "I am a new student."
       ],
       [
        "teacher",
        "sustantivo",
        "profesor, profesora",
        "She is my English teacher."
       ],
       [
        "friend",
        "sustantivo",
        "amigo, amiga",
        "This is my friend Ana."
       ],
       [
        "classmate",
        "sustantivo",
        "compañero de clase",
        "He is my classmate."
       ],
       [
        "nice to meet you",
        "expresión",
        "mucho gusto",
        "Hi, I'm Tom. Nice to meet you."
       ],
       [
        "What's your name?",
        "expresión",
        "¿Cómo te llamas?",
        "Hello! What's your name?"
       ],
       [
        "this is",
        "expresión",
        "este es / esta es (para presentar)",
        "This is my husband, Carlos."
       ],
       [
        "Mr.",
        "sustantivo",
        "señor",
        "Good morning, Mr. Smith."
       ],
       [
        "Mrs.",
        "sustantivo",
        "señora",
        "Mrs. Jones is our teacher."
       ],
       [
        "new",
        "adjetivo",
        "nuevo",
        "I'm a new student."
       ]
      ],
      "dialogue": {
       "title": "El primer día de clase",
       "scene": "Ana entra a su primera clase de inglés y conoce a Mark, otro estudiante.",
       "a": "Ana",
       "b": "Mark",
       "lines": [
        [
         "A",
         "Hi! Is this the English class?",
         "¡Hola! ¿Esta es la clase de inglés?"
        ],
        [
         "B",
         "Yes, it is. Are you a new student?",
         "Sí. ¿Eres estudiante nueva?"
        ],
        [
         "A",
         "Yes, I am. My name is Ana. What's your name?",
         "Sí. Me llamo Ana. ¿Cómo te llamas?"
        ],
        [
         "B",
         "I'm Mark. Nice to meet you, Ana.",
         "Soy Mark. Mucho gusto, Ana."
        ],
        [
         "A",
         "Nice to meet you too.",
         "Mucho gusto también."
        ],
        [
         "B",
         "What's your last name?",
         "¿Cuál es tu apellido?"
        ],
        [
         "A",
         "My last name is Romero. And you?",
         "Mi apellido es Romero. ¿Y tú?"
        ],
        [
         "B",
         "My last name is Wilson.",
         "Mi apellido es Wilson."
        ],
        [
         "A",
         "Who is the teacher?",
         "¿Quién es el profesor?"
        ],
        [
         "B",
         "The teacher is Mrs. Davis. She is very nice.",
         "La profesora es la señora Davis. Es muy amable."
        ],
        [
         "A",
         "Great! And who are they?",
         "¡Genial! ¿Y ellos quiénes son?"
        ],
        [
         "B",
         "They are our classmates, Leo and Kim. Come, this is Ana!",
         "Son nuestros compañeros, Leo y Kim. ¡Vengan, ella es Ana!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "My",
         "name",
         "is",
         "Ana."
        ],
        "es": "Mi nombre es Ana."
       },
       {
        "t": "order",
        "words": [
         "She",
         "is",
         "my",
         "teacher."
        ],
        "es": "Ella es mi profesora."
       },
       {
        "t": "dict",
        "say": "Nice to meet you."
       },
       {
        "t": "dict",
        "say": "We are new students."
       },
       {
        "t": "mc",
        "q": "Leo and Kim ___ my classmates.",
        "o": [
         "is",
         "am",
         "are",
         "be"
        ],
        "a": 2
       },
       {
        "t": "fill",
        "q": "___ is my friend, Pedro. (presentando)",
        "ans": [
         "this"
        ]
       },
       {
        "t": "listen",
        "say": "Hello, I'm Mrs. Davis and I'm your new English teacher.",
        "q": "¿Quién es la señora Davis?",
        "o": [
         "Una estudiante",
         "La nueva profesora de inglés",
         "La directora",
         "Una amiga"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Hi, my name is Henry. What's your name?"
       }
      ]
     },
     {
      "id": "a1-alfabeto",
      "title": "El alfabeto y tus datos personales",
      "goal": "Deletrear tu nombre y dar tu teléfono y tu correo.",
      "theory": [
       {
        "p": "Las letras en inglés suenan distinto que en español. Las que más se confunden:"
       },
       {
        "ex": [
         [
          "A, E, I",
          "ei, i, ai"
         ],
         [
          "G, J",
          "yi, yei"
         ],
         [
          "H",
          "eich"
         ],
         [
          "R",
          "ar"
         ],
         [
          "W",
          "dábel-yu"
         ],
         [
          "Y",
          "uai"
         ],
         [
          "Z",
          "zi (EE. UU.) / zed (Reino Unido)"
         ]
        ]
       },
       {
        "p": "Para deletrear y dar tus datos:"
       },
       {
        "ex": [
         [
          "How do you spell your name?",
          "¿Cómo se deletrea tu nombre?"
         ],
         [
          "H-E-N-R-Y.",
          "H-E-N-R-Y."
         ],
         [
          "What's your phone number?",
          "¿Cuál es tu número de teléfono?"
         ],
         [
          "It's 300 555 1234.",
          "Es el 300 555 1234."
         ],
         [
          "What's your email address?",
          "¿Cuál es tu correo?"
         ],
         [
          "henry at gmail dot com",
          "henry@gmail.com"
         ]
        ]
       },
       {
        "tip": "En un correo, @ se dice at y el punto se dice dot. Los números de teléfono se dicen dígito por dígito, y el 0 se puede decir oh."
       }
      ],
      "words": [
       "name",
       "phone",
       "How are you?",
       "Can you repeat, please?"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "¿Cómo se dice @ en un correo?",
        "o": [
         "dot",
         "at",
         "arroba",
         "and"
        ],
        "a": 1,
        "x": "@ = at; el punto = dot."
       },
       {
        "t": "mc",
        "q": "—How do you ___ your name? —P-A-B-L-O.",
        "o": [
         "say",
         "write",
         "spell",
         "call"
        ],
        "a": 2,
        "x": "spell = deletrear."
       },
       {
        "t": "mc",
        "q": "La letra que suena 'ai' es:",
        "o": [
         "E",
         "I",
         "A",
         "Y"
        ],
        "a": 1,
        "x": "I suena ai; E suena i."
       },
       {
        "t": "fill",
        "q": "What's your email ___?",
        "ans": [
         "address"
        ],
        "x": "email address = dirección de correo."
       },
       {
        "t": "listen",
        "say": "My email is laura dot perez at gmail dot com.",
        "q": "¿Cuál es el correo?",
        "o": [
         "laura.perez@gmail.com",
         "lauraperez@gmail.com",
         "laura@perez.gmail.com",
         "perez.laura@gmail.com"
        ],
        "a": 0
       },
       {
        "t": "oral",
        "text": "My name is Henry. H, E, N, R, Y."
       }
      ],
      "exam": {
       "t": "mc",
       "q": "Para decir maria.lopez@mail.com dices:",
       "o": [
        "maria point lopez arroba mail point com",
        "maria dot lopez at mail dot com",
        "maria lopez at mail com",
        "maria dot lopez and mail dot com"
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "—How do you spell 'Gómez'? —___",
       "o": [
        "G-O-M-E-Z",
        "Gómez",
        "It's Gómez",
        "I am Gómez"
       ],
       "a": 0
      },
      "vocab": [
       [
        "alphabet",
        "sustantivo",
        "alfabeto",
        "The English alphabet has 26 letters."
       ],
       [
        "letter",
        "sustantivo",
        "letra; carta",
        "A is the first letter."
       ],
       [
        "spell",
        "verbo",
        "deletrear",
        "How do you spell your name?"
       ],
       [
        "phone number",
        "sustantivo",
        "número de teléfono",
        "What's your phone number?"
       ],
       [
        "email address",
        "sustantivo",
        "dirección de correo",
        "My email address is ana@mail.com."
       ],
       [
        "at",
        "preposición",
        "arroba (@) en un correo",
        "henry at gmail dot com"
       ],
       [
        "dot",
        "sustantivo",
        "punto (en un correo o página web)",
        "gmail dot com"
       ],
       [
        "address",
        "sustantivo",
        "dirección",
        "What's your address?"
       ],
       [
        "street",
        "sustantivo",
        "calle",
        "I live on Main Street."
       ],
       [
        "zero / oh",
        "número",
        "cero",
        "My number is three, oh, one..."
       ],
       [
        "double",
        "adjetivo",
        "doble (para letras o números repetidos)",
        "Anna: A, double N, A."
       ],
       [
        "capital letter",
        "sustantivo",
        "mayúscula",
        "Write your name with a capital letter."
       ],
       [
        "repeat",
        "verbo",
        "repetir",
        "Can you repeat that, please?"
       ],
       [
        "slowly",
        "adverbio",
        "despacio",
        "Can you speak slowly, please?"
       ],
       [
        "sorry?",
        "interjección",
        "¿perdón? (cuando no oíste)",
        "Sorry? Can you repeat?"
       ],
       [
        "form",
        "sustantivo",
        "formulario",
        "Please complete this form."
       ],
       [
        "write",
        "verbo",
        "escribir",
        "Write your email here."
       ],
       [
        "Can you spell that?",
        "expresión",
        "¿Puede deletrearlo?",
        "Gómez? Can you spell that?"
       ],
       [
        "age",
        "sustantivo",
        "edad",
        "Name, age and address, please."
       ],
       [
        "number",
        "sustantivo",
        "número",
        "What's your house number?"
       ]
      ],
      "dialogue": {
       "title": "Inscripción en el gimnasio",
       "scene": "Carlos se inscribe en un gimnasio y la recepcionista llena un formulario.",
       "a": "Recepcionista",
       "b": "Carlos",
       "lines": [
        [
         "A",
         "Good afternoon. Can I have your name, please?",
         "Buenas tardes. ¿Me da su nombre, por favor?"
        ],
        [
         "B",
         "Yes. My name is Carlos Quintero.",
         "Sí. Me llamo Carlos Quintero."
        ],
        [
         "A",
         "Sorry? Can you spell your last name?",
         "¿Perdón? ¿Puede deletrear su apellido?"
        ],
        [
         "B",
         "Sure. Q-U-I-N-T-E-R-O.",
         "Claro. Q-U-I-N-T-E-R-O."
        ],
        [
         "A",
         "Thank you. What's your phone number?",
         "Gracias. ¿Cuál es su número de teléfono?"
        ],
        [
         "B",
         "It's three one oh, five five five, two eight nine four.",
         "Es el 310 555 2894."
        ],
        [
         "A",
         "Can you repeat that slowly, please?",
         "¿Puede repetirlo despacio, por favor?"
        ],
        [
         "B",
         "Three, one, oh. Five, five, five. Two, eight, nine, four.",
         "Tres, uno, cero. Cinco, cinco, cinco. Dos, ocho, nueve, cuatro."
        ],
        [
         "A",
         "Perfect. And your email address?",
         "Perfecto. ¿Y su correo?"
        ],
        [
         "B",
         "It's carlos dot q at gmail dot com.",
         "Es carlos.q@gmail.com."
        ],
        [
         "A",
         "Great. And how old are you?",
         "Genial. ¿Y cuántos años tiene?"
        ],
        [
         "B",
         "I'm forty-one.",
         "Tengo cuarenta y uno."
        ],
        [
         "A",
         "Thank you, Mr. Quintero. Welcome to the gym!",
         "Gracias, señor Quintero. ¡Bienvenido al gimnasio!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "How",
         "do",
         "you",
         "spell",
         "your",
         "name?"
        ],
        "es": "¿Cómo se deletrea tu nombre?"
       },
       {
        "t": "order",
        "words": [
         "Can",
         "you",
         "repeat",
         "that,",
         "please?"
        ],
        "es": "¿Puede repetir eso, por favor?"
       },
       {
        "t": "dict",
        "say": "My email is ana at gmail dot com."
       },
       {
        "t": "dict",
        "say": "Can you speak slowly, please?"
       },
       {
        "t": "mc",
        "q": "Anna se deletrea:",
        "o": [
         "A, N, A",
         "A, double N, A",
         "A, N, N, N, A",
         "Double A, N"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "La letra J suena:",
        "o": [
         "jota",
         "yei",
         "ji",
         "ai"
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "My last name is Ortiz. O-R-T-I-Z.",
        "q": "¿Cómo se escribe el apellido?",
        "o": [
         "Ortis",
         "Ortiz",
         "Hortiz",
         "Ortíz con H"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "My phone number is three one oh, five five five, one two three four."
       }
      ]
     },
     {
      "title": "Países y nacionalidades",
      "goal": "Decir de dónde eres y preguntar de dónde es alguien.",
      "theory": [
       {
        "p": "Para hablar de origen se usa **be from** (ser de):"
       },
       {
        "ex": [
         [
          "Where are you from?",
          "¿De dónde eres?"
         ],
         [
          "I'm from Colombia.",
          "Soy de Colombia."
         ],
         [
          "She is from Mexico.",
          "Ella es de México."
         ],
         [
          "They are from Spain.",
          "Ellos son de España."
         ]
        ]
       },
       {
        "p": "Las nacionalidades se escriben **siempre con mayúscula** en inglés:"
       },
       {
        "ex": [
         [
          "Colombia → Colombian",
          "colombiano"
         ],
         [
          "Mexico → Mexican",
          "mexicano"
         ],
         [
          "Spain → Spanish",
          "español"
         ],
         [
          "the United States → American",
          "estadounidense"
         ],
         [
          "England → English",
          "inglés"
         ]
        ]
       },
       {
        "p": "Para negar se agrega **not**: I'm not from Peru. He isn't (is not) American."
       },
       {
        "tip": "Spanish es tanto 'español' (nacionalidad) como el idioma español."
       }
      ],
      "words": [
       "Where are you from?",
       "from",
       "city",
       "speak"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "Where ___ you from?",
        "o": [
         "is",
         "am",
         "are",
         "do"
        ],
        "a": 2,
        "x": "Con you se usa are."
       },
       {
        "t": "mc",
        "q": "I'm from Colombia. I'm ___.",
        "o": [
         "colombian",
         "Colombian",
         "Colombia",
         "Columbian"
        ],
        "a": 1,
        "x": "Las nacionalidades van con mayúscula: Colombian."
       },
       {
        "t": "mc",
        "q": "He ___ from Peru. He's from Chile.",
        "o": [
         "is",
         "isn't",
         "aren't",
         "not"
        ],
        "a": 1,
        "x": "Negativo con he: isn't (is not)."
       },
       {
        "t": "fill",
        "q": "She is ___ Mexico.",
        "ans": [
         "from"
        ],
        "x": "be from = ser de."
       },
       {
        "t": "listen",
        "say": "My name is Paolo. I'm from Italy, but I live in Bogotá.",
        "q": "¿De dónde es Paolo?",
        "o": [
         "Colombia",
         "Italia",
         "España",
         "México"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I'm from Colombia. Where are you from?"
       }
      ],
      "id": "a1-paises-y-nacionalidades",
      "exam": {
       "t": "mc",
       "q": "—Where is she from? —___",
       "o": [
        "She's from Peru.",
        "She's Peru.",
        "She from Peru.",
        "She's of Peru."
       ],
       "a": 0
      },
      "exam2": {
       "t": "fill",
       "q": "—Where ___ they from? —Brazil.",
       "ans": [
        "are"
       ]
      },
      "vocab": [
       [
        "country",
        "sustantivo",
        "país",
        "Colombia is a beautiful country."
       ],
       [
        "nationality",
        "sustantivo",
        "nacionalidad",
        "What's your nationality?"
       ],
       [
        "Colombian",
        "adjetivo",
        "colombiano",
        "I'm Colombian."
       ],
       [
        "Mexican",
        "adjetivo",
        "mexicano",
        "Tacos are Mexican food."
       ],
       [
        "American",
        "adjetivo",
        "estadounidense",
        "He's American, from Texas."
       ],
       [
        "Canadian",
        "adjetivo",
        "canadiense",
        "My teacher is Canadian."
       ],
       [
        "Spanish",
        "adjetivo",
        "español",
        "Paella is Spanish food."
       ],
       [
        "English",
        "adjetivo / sustantivo",
        "inglés",
        "She's English, from London."
       ],
       [
        "Brazilian",
        "adjetivo",
        "brasileño",
        "My friend is Brazilian."
       ],
       [
        "Peruvian",
        "adjetivo",
        "peruano",
        "Ceviche is Peruvian."
       ],
       [
        "Italian",
        "adjetivo",
        "italiano",
        "I love Italian food."
       ],
       [
        "French",
        "adjetivo",
        "francés",
        "She speaks French."
       ],
       [
        "city",
        "sustantivo",
        "ciudad",
        "Cali is a big city."
       ],
       [
        "capital",
        "sustantivo",
        "capital",
        "Lima is the capital of Peru."
       ],
       [
        "from",
        "preposición",
        "de (origen)",
        "I'm from Medellín."
       ],
       [
        "Where are you from?",
        "expresión",
        "¿De dónde eres?",
        "Where are you from, Paolo?"
       ],
       [
        "live",
        "verbo",
        "vivir",
        "I live in Bogotá."
       ],
       [
        "speak",
        "verbo",
        "hablar (un idioma)",
        "I speak Spanish and a little English."
       ],
       [
        "language",
        "sustantivo",
        "idioma",
        "English is a useful language."
       ],
       [
        "a little",
        "expresión",
        "un poco",
        "I speak a little English."
       ]
      ],
      "dialogue": {
       "title": "Conociendo a alguien en un hostal",
       "scene": "Laura conoce a Ben en la cocina de un hostal en Cartagena.",
       "a": "Laura",
       "b": "Ben",
       "lines": [
        [
         "A",
         "Hi! I'm Laura. Are you new here?",
         "¡Hola! Soy Laura. ¿Eres nuevo aquí?"
        ],
        [
         "B",
         "Hi, Laura. Yes, I am. I'm Ben.",
         "Hola, Laura. Sí. Soy Ben."
        ],
        [
         "A",
         "Nice to meet you, Ben. Where are you from?",
         "Mucho gusto, Ben. ¿De dónde eres?"
        ],
        [
         "B",
         "I'm from Canada, from Toronto. And you?",
         "Soy de Canadá, de Toronto. ¿Y tú?"
        ],
        [
         "A",
         "I'm Colombian. I'm from Medellín.",
         "Soy colombiana. Soy de Medellín."
        ],
        [
         "B",
         "Medellín! Is it a big city?",
         "¡Medellín! ¿Es una ciudad grande?"
        ],
        [
         "A",
         "Yes, it is. It's beautiful. Do you speak Spanish?",
         "Sí. Es hermosa. ¿Hablas español?"
        ],
        [
         "B",
         "A little. I speak English and French.",
         "Un poco. Hablo inglés y francés."
        ],
        [
         "A",
         "French? Wow! Is your family French?",
         "¿Francés? ¡Wow! ¿Tu familia es francesa?"
        ],
        [
         "B",
         "My mother is French, but my father is Canadian.",
         "Mi mamá es francesa, pero mi papá es canadiense."
        ],
        [
         "A",
         "Cool! Are your friends here too?",
         "¡Qué bien! ¿Tus amigos también están aquí?"
        ],
        [
         "B",
         "Yes, they are. They're Australian. They're at the beach.",
         "Sí. Son australianos. Están en la playa."
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "Where",
         "are",
         "you",
         "from?"
        ],
        "es": "¿De dónde eres?"
       },
       {
        "t": "order",
        "words": [
         "I",
         "speak",
         "a",
         "little",
         "English."
        ],
        "es": "Hablo un poco de inglés."
       },
       {
        "t": "dict",
        "say": "I'm from Colombia."
       },
       {
        "t": "dict",
        "say": "My mother is French."
       },
       {
        "t": "mc",
        "q": "He's from Brazil. He's ___.",
        "o": [
         "Brazil",
         "Brazilian",
         "brazilian",
         "Brasilero"
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "I ___ Spanish and English. (hablo)",
        "ans": [
         "speak"
        ]
       },
       {
        "t": "listen",
        "say": "My name is Yuki. I'm Japanese, but I live in Mexico City.",
        "q": "¿Dónde vive Yuki?",
        "o": [
         "Japón",
         "Ciudad de México",
         "Lima",
         "Toronto"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I'm Colombian and I speak Spanish and a little English."
       }
      ]
     },
     {
      "title": "Números del 0 al 20 y la edad",
      "goal": "Contar hasta 20 y decir cuántos años tienes.",
      "theory": [
       {
        "ex": [
         [
          "zero, one, two, three, four, five",
          "0, 1, 2, 3, 4, 5"
         ],
         [
          "six, seven, eight, nine, ten",
          "6, 7, 8, 9, 10"
         ],
         [
          "eleven, twelve, thirteen, fourteen, fifteen",
          "11, 12, 13, 14, 15"
         ],
         [
          "sixteen, seventeen, eighteen, nineteen, twenty",
          "16, 17, 18, 19, 20"
         ]
        ]
       },
       {
        "p": "Para la edad en inglés se usa **be**, no 'tener':"
       },
       {
        "ex": [
         [
          "How old are you?",
          "¿Cuántos años tienes?"
         ],
         [
          "I'm thirty-five (years old).",
          "Tengo treinta y cinco años."
         ],
         [
          "My son is ten.",
          "Mi hijo tiene diez años."
         ]
        ]
       },
       {
        "tip": "Error muy común: decir 'I have 35 years'. Lo correcto es 'I am 35'."
       },
       {
        "p": "Las decenas: twenty (20), thirty (30), forty (40), fifty (50). Se combinan con guion: thirty-five (35), forty-two (42)."
       }
      ],
      "reading": 0,
      "words": [
       "one, two, three, four, five",
       "six, seven, eight, nine, ten",
       "eleven, twelve, twenty, thirty",
       "how old",
       "year"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "¿Cómo dices 'Tengo 30 años'?",
        "o": [
         "I have 30 years.",
         "I am 30 years old.",
         "I have 30 old.",
         "I'm 30 years."
        ],
        "a": 1,
        "x": "La edad va con be: I am 30 years old."
       },
       {
        "t": "mc",
        "q": "How old ___ your daughter?",
        "o": [
         "are",
         "am",
         "is",
         "has"
        ],
        "a": 2,
        "x": "Your daughter = she → is."
       },
       {
        "t": "mc",
        "q": "'Fifteen' es:",
        "o": [
         "50",
         "15",
         "5",
         "16"
        ],
        "a": 1,
        "x": "Fifteen = 15; fifty = 50."
       },
       {
        "t": "fill",
        "q": "12 se escribe: ___",
        "ans": [
         "twelve"
        ],
        "x": "12 = twelve."
       },
       {
        "t": "listen",
        "say": "My grandmother is seventy-eight years old.",
        "q": "¿Cuántos años tiene la abuela?",
        "o": [
         "68",
         "87",
         "78",
         "18"
        ],
        "a": 2
       },
       {
        "t": "oral",
        "text": "I am thirty-five years old."
       }
      ],
      "id": "a1-numeros-del-0-al-20-y-la-edad",
      "exam": {
       "t": "mc",
       "q": "'Mi hijo tiene 13 años' es:",
       "o": [
        "My son has 13 years.",
        "My son is thirteen.",
        "My son is thirty.",
        "My son have thirteen years."
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "¿Cómo preguntas la edad de tu jefe?",
       "o": [
        "How many years has he?",
        "How old is he?",
        "How old he is?",
        "What age he has?"
       ],
       "a": 1
      },
      "vocab": [
       [
        "one, two, three",
        "número",
        "uno, dos, tres",
        "I have three sisters."
       ],
       [
        "four, five, six",
        "número",
        "cuatro, cinco, seis",
        "She is six years old."
       ],
       [
        "seven, eight, nine",
        "número",
        "siete, ocho, nueve",
        "My son is nine."
       ],
       [
        "ten, eleven, twelve",
        "número",
        "diez, once, doce",
        "There are twelve months."
       ],
       [
        "thirteen, fourteen, fifteen",
        "número",
        "trece, catorce, quince",
        "My daughter is fifteen."
       ],
       [
        "sixteen, seventeen",
        "número",
        "dieciséis, diecisiete",
        "He is seventeen."
       ],
       [
        "eighteen, nineteen, twenty",
        "número",
        "dieciocho, diecinueve, veinte",
        "I'm twenty years old."
       ],
       [
        "thirty, forty, fifty",
        "número",
        "treinta, cuarenta, cincuenta",
        "My father is fifty."
       ],
       [
        "sixty, seventy, eighty, ninety",
        "número",
        "sesenta, setenta, ochenta, noventa",
        "My grandmother is eighty."
       ],
       [
        "How old are you?",
        "expresión",
        "¿Cuántos años tienes?",
        "How old are you, Tom?"
       ],
       [
        "years old",
        "expresión",
        "años (de edad)",
        "I'm thirty-five years old."
       ],
       [
        "age",
        "sustantivo",
        "edad",
        "What's your age?"
       ],
       [
        "baby",
        "sustantivo",
        "bebé",
        "The baby is one year old."
       ],
       [
        "child",
        "sustantivo",
        "niño, niña",
        "She is a child. She's eight."
       ],
       [
        "teenager",
        "sustantivo",
        "adolescente",
        "My son is a teenager."
       ],
       [
        "adult",
        "sustantivo",
        "adulto",
        "Adults pay ten dollars."
       ],
       [
        "young",
        "adjetivo",
        "joven",
        "My teacher is young."
       ],
       [
        "old",
        "adjetivo",
        "viejo, mayor",
        "My dog is old."
       ],
       [
        "birthday",
        "sustantivo",
        "cumpleaños",
        "Today is my birthday!"
       ],
       [
        "Happy birthday!",
        "expresión",
        "¡Feliz cumpleaños!",
        "Happy birthday, Mom!"
       ]
      ],
      "dialogue": {
       "title": "Una fiesta de cumpleaños",
       "scene": "En la fiesta de cumpleaños de la hija de Marta, una vecina, Julie, conversa con ella.",
       "a": "Julie",
       "b": "Marta",
       "lines": [
        [
         "A",
         "Happy birthday to your daughter! How old is she?",
         "¡Feliz cumpleaños a tu hija! ¿Cuántos años cumple?"
        ],
        [
         "B",
         "Thank you! She's seven today.",
         "¡Gracias! Hoy cumple siete."
        ],
        [
         "A",
         "Seven! And your son? How old is he?",
         "¡Siete! ¿Y tu hijo? ¿Cuántos años tiene?"
        ],
        [
         "B",
         "He's thirteen. He's a teenager now!",
         "Tiene trece. ¡Ya es un adolescente!"
        ],
        [
         "A",
         "Wow. How many children are here?",
         "Wow. ¿Cuántos niños hay aquí?"
        ],
        [
         "B",
         "There are fifteen children and twelve adults.",
         "Hay quince niños y doce adultos."
        ],
        [
         "A",
         "That's a big party! Is your mother here?",
         "¡Qué fiesta tan grande! ¿Tu mamá está aquí?"
        ],
        [
         "B",
         "Yes, she is. She's over there. She's seventy-two.",
         "Sí. Está allá. Tiene setenta y dos."
        ],
        [
         "A",
         "She looks young!",
         "¡Se ve joven!"
        ],
        [
         "B",
         "Thank you! And how old is your baby?",
         "¡Gracias! ¿Y cuántos tiene tu bebé?"
        ],
        [
         "A",
         "He's ten months old.",
         "Tiene diez meses."
        ],
        [
         "B",
         "He's beautiful. Come, have some cake!",
         "Es hermoso. ¡Ven, come torta!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "How",
         "old",
         "is",
         "your",
         "son?"
        ],
        "es": "¿Cuántos años tiene tu hijo?"
       },
       {
        "t": "order",
        "words": [
         "I",
         "am",
         "forty",
         "years",
         "old."
        ],
        "es": "Tengo cuarenta años."
       },
       {
        "t": "dict",
        "say": "She is fifteen years old."
       },
       {
        "t": "dict",
        "say": "Happy birthday to you!"
       },
       {
        "t": "mc",
        "q": "Ochenta y seis es:",
        "o": [
         "sixty-eight",
         "eighty-six",
         "eighteen six",
         "eight-six"
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "My baby is ten ___ old. (meses)",
        "ans": [
         "months"
        ]
       },
       {
        "t": "listen",
        "say": "My grandfather is ninety-one and my grandmother is eighty-seven.",
        "q": "¿Cuántos años tiene la abuela?",
        "o": [
         "78",
         "87",
         "91",
         "19"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "My son is thirteen and my daughter is seven."
       }
      ]
     }
    ],
    "quiz": [
     {
      "t": "mc",
      "q": "Por la tarde saludas así:",
      "o": [
       "Good night",
       "Good afternoon",
       "Goodbye",
       "Good morning"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "They ___ from Brazil.",
      "o": [
       "is",
       "am",
       "are",
       "be"
      ],
      "a": 2
     },
     {
      "t": "mc",
      "q": "—What's your name? —___",
      "o": [
       "I'm fine.",
       "My name is Pedro.",
       "I'm 20.",
       "I'm from Cali."
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "She is from Spain. She is ___.",
      "o": [
       "Spain",
       "Spanish",
       "spanish",
       "Spainish"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "¿Cómo preguntas la edad?",
      "o": [
       "How are you?",
       "How old are you?",
       "How many years have you?",
       "What is your old?"
      ],
      "a": 1
     },
     {
      "t": "fill",
      "q": "He ___ from Chile. (es)",
      "ans": [
       "is",
       "'s"
      ]
     },
     {
      "t": "listen",
      "say": "Hi! I'm Sofia. I'm twenty-four and I'm from Argentina.",
      "q": "¿Cuántos años tiene Sofia?",
      "o": [
       "14",
       "24",
       "42",
       "20"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "Good evening. My name is Mr. Brown. I'm your new teacher.",
      "q": "¿Quién es Mr. Brown?",
      "o": [
       "Un estudiante",
       "El nuevo profesor",
       "Un doctor",
       "Un amigo"
      ],
      "a": 1
     },
     {
      "t": "write",
      "q": "Preséntate en inglés (mínimo 20 palabras): tu nombre, tu edad, de dónde eres y tu número de teléfono.",
      "min": 20,
      "keys": [
       [
        "my name is",
        "i am",
        "i'm"
       ],
       [
        "years old"
       ],
       [
        "from"
       ],
       [
        "number",
        "phone"
       ]
      ]
     },
     {
      "t": "oral",
      "text": "Hello! My name is Henry and I'm from Colombia."
     },
     {
      "t": "oral",
      "text": "How old are you?"
     }
    ],
    "pool": [
     {
      "t": "mc",
      "q": "Al llegar a una reunión a las 7 p.m. dices:",
      "o": [
       "Good night",
       "Good evening",
       "Good afternoon",
       "Goodbye"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "I ___ a teacher. I'm a doctor.",
      "o": [
       "am not",
       "not am",
       "isn't",
       "aren't"
      ],
      "a": 0
     },
     {
      "t": "mc",
      "q": "—Are you from Chile? —No, I ___.",
      "o": [
       "am not",
       "'m not",
       "not",
       "isn't"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "La letra 'E' en inglés suena:",
      "o": [
       "e",
       "i",
       "ai",
       "ei"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "He is from Mexico. He is ___.",
      "o": [
       "Mexico",
       "mexican",
       "Mexican",
       "Mexicano"
      ],
      "a": 2
     },
     {
      "t": "fill",
      "q": "—How old ___ your brother? —He's 25.",
      "ans": [
       "is",
       "'s"
      ]
     },
     {
      "t": "fill",
      "q": "—Nice to ___ you. —Nice to meet you too.",
      "ans": [
       "meet"
      ]
     },
     {
      "t": "mc",
      "q": "Diecinueve es:",
      "o": [
       "ninety",
       "nineteen",
       "nine",
       "ninety-nine"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "Hi, my name is Kevin, K-E-V-I-N. I'm from Canada and I'm thirty.",
      "q": "¿De dónde es Kevin?",
      "o": [
       "Estados Unidos",
       "Canadá",
       "Inglaterra",
       "Australia"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "My phone number is three one five, two eight four, nine nine zero one.",
      "q": "¿Cuál es el número?",
      "o": [
       "315 284 9901",
       "315 248 9901",
       "351 284 9910",
       "315 284 9001"
      ],
      "a": 0
     },
     {
      "t": "listen",
      "say": "Good night, everyone! See you tomorrow at the office.",
      "q": "¿Cuándo se van a ver?",
      "o": [
       "Hoy en la noche",
       "Mañana en la oficina",
       "El lunes",
       "En la casa"
      ],
      "a": 1
     },
     {
      "t": "write",
      "q": "Escribe un mensaje corto presentándote a un compañero de clase nuevo (mínimo 20 palabras): saludo, nombre, de dónde eres y tu correo.",
      "min": 20,
      "keys": [
       [
        "hello",
        "hi",
        "good morning",
        "good afternoon"
       ],
       [
        "my name is",
        "i am",
        "i'm"
       ],
       [
        "from"
       ],
       [
        "email",
        "at",
        "dot"
       ]
      ]
     },
     {
      "t": "oral",
      "text": "Good afternoon. My name is Laura and I'm from Colombia."
     },
     {
      "t": "oral",
      "text": "My email is laura at gmail dot com."
     },
     {
      "t": "oral",
      "text": "I'm forty years old. How old are you?"
     }
    ]
   },
   {
    "title": "Mi familia y mis cosas",
    "lessons": [
     {
      "title": "La familia y los posesivos",
      "goal": "Presentar a tu familia usando my, your, his, her, our, their.",
      "theory": [
       {
        "p": "Los **posesivos** van antes del sustantivo y no cambian en plural:"
       },
       {
        "ex": [
         [
          "my mother",
          "mi mamá"
         ],
         [
          "your father",
          "tu papá"
         ],
         [
          "his wife",
          "la esposa de él"
         ],
         [
          "her husband",
          "el esposo de ella"
         ],
         [
          "our children",
          "nuestros hijos"
         ],
         [
          "their house",
          "la casa de ellos"
         ]
        ]
       },
       {
        "p": "Para decir 'el carro de Carlos' se usa **'s**: **Carlos's car**, **my sister's name**."
       },
       {
        "tip": "His es de él y her es de ella, sin importar si la cosa es masculina o femenina: his mother (la mamá de él)."
       }
      ],
      "reading": 1,
      "words": [
       "mother",
       "father",
       "brother",
       "sister",
       "son",
       "daughter",
       "husband",
       "wife",
       "children",
       "my",
       "your",
       "his",
       "her",
       "our",
       "their"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "Ana is married. ___ husband is Carlos.",
        "o": [
         "His",
         "Her",
         "Their",
         "Our"
        ],
        "a": 1,
        "x": "Ana es mujer → her husband."
       },
       {
        "t": "mc",
        "q": "Pedro and Lucía have a son. ___ son is five.",
        "o": [
         "Their",
         "His",
         "Her",
         "Your"
        ],
        "a": 0,
        "x": "De ellos → their."
       },
       {
        "t": "mc",
        "q": "La hermana de mi mamá se escribe:",
        "o": [
         "my mother sister",
         "my mother's sister",
         "my mothers sister",
         "my sister's mother"
        ],
        "a": 1,
        "x": "Posesión con 's: my mother's sister."
       },
       {
        "t": "fill",
        "q": "My father's son is my ___.",
        "ans": [
         "brother"
        ],
        "x": "El hijo de tu papá es tu hermano."
       },
       {
        "t": "listen",
        "say": "This is my family. My wife is Marta and our daughter is Sara.",
        "q": "¿Cómo se llama la hija?",
        "o": [
         "Marta",
         "Sara",
         "Laura",
         "Ana"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "This is my family. My wife is Laura."
       }
      ],
      "id": "a1-la-familia-y-los-posesivos",
      "exam": {
       "t": "mc",
       "q": "Pedro has a sister. ___ name is Ana.",
       "o": [
        "His",
        "Her",
        "Its",
        "Their"
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "Mi papá y mi mamá son mis:",
       "o": [
        "parents",
        "relatives",
        "fathers",
        "grandparents"
       ],
       "a": 0
      },
      "vocab": [
       [
        "family",
        "sustantivo",
        "familia",
        "I have a big family."
       ],
       [
        "parents",
        "sustantivo",
        "padres (papá y mamá)",
        "My parents live in Cali."
       ],
       [
        "mother / mom",
        "sustantivo",
        "madre / mamá",
        "My mom is a nurse."
       ],
       [
        "father / dad",
        "sustantivo",
        "padre / papá",
        "My dad works in a bank."
       ],
       [
        "brother",
        "sustantivo",
        "hermano",
        "I have two brothers."
       ],
       [
        "sister",
        "sustantivo",
        "hermana",
        "My sister is older than me."
       ],
       [
        "husband",
        "sustantivo",
        "esposo",
        "Her husband is Peruvian."
       ],
       [
        "wife",
        "sustantivo",
        "esposa",
        "His wife is a teacher."
       ],
       [
        "son",
        "sustantivo",
        "hijo",
        "Our son is ten."
       ],
       [
        "daughter",
        "sustantivo",
        "hija",
        "Their daughter is a doctor."
       ],
       [
        "grandparents",
        "sustantivo",
        "abuelos",
        "My grandparents live on a farm."
       ],
       [
        "uncle",
        "sustantivo",
        "tío",
        "My uncle lives in Miami."
       ],
       [
        "aunt",
        "sustantivo",
        "tía",
        "My aunt is very funny."
       ],
       [
        "cousin",
        "sustantivo",
        "primo, prima",
        "My cousin is my best friend."
       ],
       [
        "married",
        "adjetivo",
        "casado",
        "Are you married?"
       ],
       [
        "single",
        "adjetivo",
        "soltero",
        "My brother is single."
       ],
       [
        "his",
        "determinante posesivo",
        "su (de él)",
        "His name is Luis."
       ],
       [
        "her",
        "determinante posesivo",
        "su (de ella)",
        "Her name is Rosa."
       ],
       [
        "our",
        "determinante posesivo",
        "nuestro",
        "Our house is small."
       ],
       [
        "their",
        "determinante posesivo",
        "su (de ellos)",
        "Their children are at school."
       ]
      ],
      "dialogue": {
       "title": "Fotos de la familia",
       "scene": "Laura le muestra a su compañera Kate unas fotos de su familia en el celular.",
       "a": "Kate",
       "b": "Laura",
       "lines": [
        [
         "A",
         "Is this your family, Laura?",
         "¿Esta es tu familia, Laura?"
        ],
        [
         "B",
         "Yes, it is. This is my husband, Carlos.",
         "Sí. Este es mi esposo, Carlos."
        ],
        [
         "A",
         "He looks nice. And who are the children?",
         "Se ve amable. ¿Y quiénes son los niños?"
        ],
        [
         "B",
         "They're our children. Our son is Tomás and our daughter is Valentina.",
         "Son nuestros hijos. Nuestro hijo es Tomás y nuestra hija es Valentina."
        ],
        [
         "A",
         "How old are they?",
         "¿Cuántos años tienen?"
        ],
        [
         "B",
         "Tomás is ten and Valentina is seven.",
         "Tomás tiene diez y Valentina siete."
        ],
        [
         "A",
         "And who is this woman?",
         "¿Y quién es esta mujer?"
        ],
        [
         "B",
         "That's my mother-in-law, Carlos's mother. Her name is Rosa.",
         "Es mi suegra, la mamá de Carlos. Se llama Rosa."
        ],
        [
         "A",
         "Is she from Medellín too?",
         "¿Ella también es de Medellín?"
        ],
        [
         "B",
         "No, she isn't. She's from Cali. Her husband is from Cali too.",
         "No. Es de Cali. Su esposo también es de Cali."
        ],
        [
         "A",
         "Do you have brothers or sisters?",
         "¿Tienes hermanos o hermanas?"
        ],
        [
         "B",
         "I have one sister. Her name is Ana and she lives in Spain.",
         "Tengo una hermana. Se llama Ana y vive en España."
        ],
        [
         "A",
         "Is she married?",
         "¿Está casada?"
        ],
        [
         "B",
         "Yes. Her husband is Spanish. Their son is my nephew, Pablo.",
         "Sí. Su esposo es español. Su hijo es mi sobrino, Pablo."
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "This",
         "is",
         "my",
         "sister's",
         "husband."
        ],
        "es": "Este es el esposo de mi hermana."
       },
       {
        "t": "order",
        "words": [
         "Their",
         "children",
         "are",
         "at",
         "school."
        ],
        "es": "Sus hijos (de ellos) están en el colegio."
       },
       {
        "t": "dict",
        "say": "My parents live in Cali."
       },
       {
        "t": "dict",
        "say": "Her name is Rosa."
       },
       {
        "t": "mc",
        "q": "My mother's brother is my ___.",
        "o": [
         "cousin",
         "uncle",
         "grandfather",
         "nephew"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "Luis is my friend. ___ wife is from Peru.",
        "o": [
         "Her",
         "His",
         "Their",
         "Your"
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "I'm not married. I'm single, but I have a lot of cousins.",
        "q": "¿La persona está casada?",
        "o": [
         "Sí",
         "No, es soltera",
         "Es viuda",
         "No lo dice"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "This is my father and that is my mother."
       }
      ]
     },
     {
      "title": "Artículos a / an y plurales",
      "goal": "Usar a, an, the y formar plurales.",
      "theory": [
       {
        "p": "**a** y **an** significan 'un / una'. Se usa **an** antes de sonido de vocal:"
       },
       {
        "ex": [
         [
          "a book, a car, a house",
          "un libro, un carro, una casa"
         ],
         [
          "an apple, an egg, an hour",
          "una manzana, un huevo, una hora"
         ]
        ]
       },
       {
        "p": "**the** es 'el, la, los, las' y es igual para todo."
       },
       {
        "p": "Plural: casi siempre se agrega **-s**. Si termina en s, sh, ch, x se agrega **-es**. Hay irregulares:"
       },
       {
        "ex": [
         [
          "book → books",
          "libro → libros"
         ],
         [
          "bus → buses",
          "bus → buses"
         ],
         [
          "child → children",
          "niño → niños"
         ],
         [
          "man → men / woman → women",
          "hombre → hombres / mujer → mujeres"
         ],
         [
          "person → people",
          "persona → personas"
         ]
        ]
       },
       {
        "tip": "Hour empieza con h muda (suena 'aur'), por eso es an hour."
       }
      ],
      "words": [
       "a",
       "an",
       "the",
       "book",
       "car",
       "house",
       "egg"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "I have ___ apple.",
        "o": [
         "a",
         "an",
         "the",
         "—"
        ],
        "a": 1,
        "x": "Apple empieza con sonido de vocal → an."
       },
       {
        "t": "mc",
        "q": "She has ___ new car.",
        "o": [
         "an",
         "a",
         "—",
         "two"
        ],
        "a": 1,
        "x": "New empieza con consonante → a."
       },
       {
        "t": "mc",
        "q": "El plural de child es:",
        "o": [
         "childs",
         "childes",
         "children",
         "childrens"
        ],
        "a": 2,
        "x": "Child → children (irregular)."
       },
       {
        "t": "fill",
        "q": "one bus, two ___",
        "ans": [
         "buses"
        ],
        "x": "Termina en s → se agrega -es."
       },
       {
        "t": "listen",
        "say": "There are three women and two men in the office.",
        "q": "¿Cuántas mujeres hay?",
        "o": [
         "2",
         "3",
         "5",
         "1"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I have a car and two books."
       }
      ],
      "id": "a1-articulos-a-an-y-plurales",
      "exam": {
       "t": "mc",
       "q": "There are three ___ in the room.",
       "o": [
        "persons",
        "peoples",
        "people",
        "person"
       ],
       "a": 2
      },
      "exam2": {
       "t": "mc",
       "q": "She is ___ engineer.",
       "o": [
        "a",
        "an",
        "the",
        "—"
       ],
       "a": 1
      },
      "vocab": [
       [
        "a / an",
        "artículo",
        "un, una",
        "I have a car and an umbrella."
       ],
       [
        "the",
        "artículo",
        "el, la, los, las",
        "The book is on the table."
       ],
       [
        "apple",
        "sustantivo",
        "manzana",
        "I eat an apple every day."
       ],
       [
        "umbrella",
        "sustantivo",
        "sombrilla, paraguas",
        "Take an umbrella."
       ],
       [
        "orange",
        "sustantivo",
        "naranja",
        "An orange, please."
       ],
       [
        "hour",
        "sustantivo",
        "hora",
        "The class is an hour long."
       ],
       [
        "box",
        "sustantivo",
        "caja (plural: boxes)",
        "There are two boxes."
       ],
       [
        "bus",
        "sustantivo",
        "bus (plural: buses)",
        "The buses are full."
       ],
       [
        "watch",
        "sustantivo",
        "reloj (plural: watches)",
        "I have two watches."
       ],
       [
        "man / men",
        "sustantivo",
        "hombre / hombres",
        "There are three men in the office."
       ],
       [
        "woman / women",
        "sustantivo",
        "mujer / mujeres",
        "Two women are in the car."
       ],
       [
        "child / children",
        "sustantivo",
        "niño / niños",
        "The children are in the park."
       ],
       [
        "person / people",
        "sustantivo",
        "persona / personas",
        "Ten people work here."
       ],
       [
        "foot / feet",
        "sustantivo",
        "pie / pies",
        "My feet are cold."
       ],
       [
        "tooth / teeth",
        "sustantivo",
        "diente / dientes",
        "Brush your teeth."
       ],
       [
        "key",
        "sustantivo",
        "llave",
        "Where are my keys?"
       ],
       [
        "bag",
        "sustantivo",
        "bolso, maleta",
        "My bag is black."
       ],
       [
        "pen",
        "sustantivo",
        "lapicero",
        "Can I have a pen?"
       ],
       [
        "notebook",
        "sustantivo",
        "cuaderno",
        "Open your notebook."
       ],
       [
        "chair",
        "sustantivo",
        "silla",
        "There are twenty chairs."
       ]
      ],
      "dialogue": {
       "title": "Preparando el morral",
       "scene": "Una mamá ayuda a su hijo Sam a organizar el morral para el colegio.",
       "a": "Mamá",
       "b": "Sam",
       "lines": [
        [
         "A",
         "Sam, do you have a pen?",
         "Sam, ¿tienes un lapicero?"
        ],
        [
         "B",
         "Yes, I have two pens and a pencil.",
         "Sí, tengo dos lapiceros y un lápiz."
        ],
        [
         "A",
         "Good. And your notebooks?",
         "Bien. ¿Y tus cuadernos?"
        ],
        [
         "B",
         "The notebooks are in the bag.",
         "Los cuadernos están en el morral."
        ],
        [
         "A",
         "Do you have an apple for lunch?",
         "¿Tienes una manzana para el almuerzo?"
        ],
        [
         "B",
         "No, I have an orange and a sandwich.",
         "No, tengo una naranja y un sándwich."
        ],
        [
         "A",
         "OK. Where are your keys?",
         "Bueno. ¿Dónde están tus llaves?"
        ],
        [
         "B",
         "The keys are on the table, Mom.",
         "Las llaves están en la mesa, mamá."
        ],
        [
         "A",
         "It's raining. Take an umbrella!",
         "Está lloviendo. ¡Lleva un paraguas!"
        ],
        [
         "B",
         "OK. Is the bus here?",
         "Bueno. ¿Ya llegó el bus?"
        ],
        [
         "A",
         "Yes, and there are a lot of children on the bus.",
         "Sí, y hay muchos niños en el bus."
        ],
        [
         "B",
         "My friends are there! Bye, Mom!",
         "¡Mis amigos están ahí! ¡Chao, mamá!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "I",
         "have",
         "an",
         "umbrella",
         "and",
         "a",
         "bag."
        ],
        "es": "Tengo un paraguas y un bolso."
       },
       {
        "t": "order",
        "words": [
         "The",
         "children",
         "are",
         "in",
         "the",
         "park."
        ],
        "es": "Los niños están en el parque."
       },
       {
        "t": "dict",
        "say": "There are three women in the car."
       },
       {
        "t": "dict",
        "say": "Brush your teeth, please."
       },
       {
        "t": "mc",
        "q": "El plural de foot es:",
        "o": [
         "foots",
         "feet",
         "feets",
         "footes"
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "I need ___ hour to finish. (una)",
        "ans": [
         "an"
        ]
       },
       {
        "t": "listen",
        "say": "There are fifteen people in the room: nine men and six women.",
        "q": "¿Cuántas mujeres hay?",
        "o": [
         "9",
         "15",
         "6",
         "5"
        ],
        "a": 2
       },
       {
        "t": "oral",
        "text": "I have an apple, two oranges and a sandwich."
       }
      ]
     },
     {
      "title": "This, that, these, those",
      "goal": "Señalar cosas cerca y lejos.",
      "theory": [
       {
        "ex": [
         [
          "this",
          "este, esta, esto (cerca, singular)"
         ],
         [
          "these",
          "estos, estas (cerca, plural)"
         ],
         [
          "that",
          "ese, esa, aquel (lejos, singular)"
         ],
         [
          "those",
          "esos, esas, aquellos (lejos, plural)"
         ]
        ]
       },
       {
        "ex": [
         [
          "This is my phone.",
          "Este es mi teléfono."
         ],
         [
          "These are my keys.",
          "Estas son mis llaves."
         ],
         [
          "Is that your bag?",
          "¿Esa es tu bolsa?"
         ],
         [
          "Those shoes are nice.",
          "Esos zapatos son lindos."
         ]
        ]
       },
       {
        "tip": "Con these y those el verbo va en plural: These ARE..., Those ARE..."
       }
      ],
      "words": [
       "this",
       "that",
       "phone",
       "shoes",
       "table",
       "chair"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "___ are my children. (aquí, cerca)",
        "o": [
         "This",
         "That",
         "These",
         "Those"
        ],
        "a": 2,
        "x": "Cerca y plural → these."
       },
       {
        "t": "mc",
        "q": "Look at ___ house over there!",
        "o": [
         "these",
         "that",
         "those",
         "this"
        ],
        "a": 1,
        "x": "Lejos y singular → that."
       },
       {
        "t": "mc",
        "q": "Those ___ my shoes.",
        "o": [
         "is",
         "are",
         "am",
         "be"
        ],
        "a": 1,
        "x": "Those es plural → are."
       },
       {
        "t": "fill",
        "q": "___ is my wife, Laura. (esta, cerca)",
        "ans": [
         "this"
        ],
        "x": "Cerca y singular → this."
       },
       {
        "t": "listen",
        "say": "Excuse me, are those your keys on the table?",
        "q": "¿Qué pregunta la persona?",
        "o": [
         "Si las llaves son suyas",
         "Dónde está la mesa",
         "Qué hora es",
         "Si quiere café"
        ],
        "a": 0
       },
       {
        "t": "oral",
        "text": "This is my phone and these are my keys."
       }
      ],
      "id": "a1-this-that-these-those",
      "exam": {
       "t": "mc",
       "q": "(Señalando unos zapatos lejos) Are ___ your shoes?",
       "o": [
        "this",
        "that",
        "these",
        "those"
       ],
       "a": 3
      },
      "exam2": {
       "t": "mc",
       "q": "___ are my keys. (en mi mano)",
       "o": [
        "This",
        "That",
        "These",
        "Those"
       ],
       "a": 2
      },
      "vocab": [
       [
        "this",
        "determinante / pronombre",
        "este, esta, esto (cerca)",
        "This is my phone."
       ],
       [
        "that",
        "determinante / pronombre",
        "ese, esa, aquel (lejos)",
        "That car is new."
       ],
       [
        "these",
        "determinante / pronombre",
        "estos, estas (cerca)",
        "These shoes are nice."
       ],
       [
        "those",
        "determinante / pronombre",
        "esos, esas, aquellos (lejos)",
        "Those people are my neighbours."
       ],
       [
        "here",
        "adverbio",
        "aquí",
        "Come here, please."
       ],
       [
        "there",
        "adverbio",
        "allá, allí",
        "My house is over there."
       ],
       [
        "over there",
        "expresión",
        "por allá",
        "The bathroom is over there."
       ],
       [
        "phone",
        "sustantivo",
        "teléfono, celular",
        "Is this your phone?"
       ],
       [
        "glasses",
        "sustantivo",
        "gafas",
        "These are my glasses."
       ],
       [
        "wallet",
        "sustantivo",
        "billetera",
        "That's my wallet."
       ],
       [
        "jacket",
        "sustantivo",
        "chaqueta",
        "This jacket is warm."
       ],
       [
        "shoes",
        "sustantivo",
        "zapatos",
        "Those shoes are expensive."
       ],
       [
        "book",
        "sustantivo",
        "libro",
        "This book is very good."
       ],
       [
        "picture",
        "sustantivo",
        "foto, cuadro",
        "Look at this picture."
       ],
       [
        "What's this?",
        "expresión",
        "¿Qué es esto?",
        "What's this? It's a key."
       ],
       [
        "whose",
        "pronombre",
        "de quién",
        "Whose bag is this?"
       ],
       [
        "mine",
        "pronombre",
        "mío",
        "That bag is mine."
       ],
       [
        "yours",
        "pronombre",
        "tuyo",
        "Is this pen yours?"
       ],
       [
        "look at",
        "verbo",
        "mirar",
        "Look at those birds!"
       ],
       [
        "nice",
        "adjetivo",
        "lindo, agradable",
        "That's a nice jacket."
       ]
      ],
      "dialogue": {
       "title": "Objetos perdidos",
       "scene": "En la oficina de objetos perdidos de un centro comercial, Luis busca sus cosas.",
       "a": "Empleada",
       "b": "Luis",
       "lines": [
        [
         "A",
         "Good afternoon. Can I help you?",
         "Buenas tardes. ¿Le puedo ayudar?"
        ],
        [
         "B",
         "Yes, please. My wallet and my glasses are lost.",
         "Sí, por favor. Perdí mi billetera y mis gafas."
        ],
        [
         "A",
         "OK. Is this your wallet?",
         "Bueno. ¿Esta es su billetera?"
        ],
        [
         "B",
         "No, it isn't. My wallet is brown.",
         "No. Mi billetera es café."
        ],
        [
         "A",
         "What about that wallet over there?",
         "¿Y esa billetera de allá?"
        ],
        [
         "B",
         "Yes! That's my wallet. Thank you!",
         "¡Sí! Esa es mi billetera. ¡Gracias!"
        ],
        [
         "A",
         "And are these your glasses?",
         "¿Y estas son sus gafas?"
        ],
        [
         "B",
         "No, those are not mine. Mine are black.",
         "No, esas no son mías. Las mías son negras."
        ],
        [
         "A",
         "Look at these. Are they yours?",
         "Mire estas. ¿Son suyas?"
        ],
        [
         "B",
         "Yes, they are! Great.",
         "¡Sí! Genial."
        ],
        [
         "A",
         "Is this jacket yours too?",
         "¿Esta chaqueta también es suya?"
        ],
        [
         "B",
         "No, it isn't. Thank you very much for your help!",
         "No. ¡Muchas gracias por su ayuda!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "Are",
         "these",
         "your",
         "glasses?"
        ],
        "es": "¿Estas son tus gafas?"
       },
       {
        "t": "order",
        "words": [
         "That",
         "jacket",
         "is",
         "very",
         "nice."
        ],
        "es": "Esa chaqueta es muy linda."
       },
       {
        "t": "dict",
        "say": "Whose bag is this?"
       },
       {
        "t": "dict",
        "say": "Those shoes are mine."
       },
       {
        "t": "mc",
        "q": "—Is this pen yours? —Yes, it's ___.",
        "o": [
         "my",
         "mine",
         "me",
         "I"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "Look at ___ birds in the sky!",
        "o": [
         "this",
         "these",
         "those",
         "that"
        ],
        "a": 2
       },
       {
        "t": "listen",
        "say": "These keys are mine, but that phone isn't. It's my sister's.",
        "q": "¿De quién es el teléfono?",
        "o": [
         "De la persona que habla",
         "De su hermana",
         "De su papá",
         "No se sabe"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Excuse me, is this your wallet?"
       }
      ]
     },
     {
      "title": "Have: lo que tienes",
      "goal": "Decir qué tienes y preguntar con Do you have...?",
      "theory": [
       {
        "p": "**have** significa 'tener'. Con he, she, it cambia a **has**:"
       },
       {
        "ex": [
         [
          "I have a dog.",
          "Tengo un perro."
         ],
         [
          "She has two children.",
          "Ella tiene dos hijos."
         ],
         [
          "We have a big house.",
          "Tenemos una casa grande."
         ]
        ]
       },
       {
        "p": "Para preguntar y negar se usa **do / does**:"
       },
       {
        "ex": [
         [
          "Do you have a car?",
          "¿Tienes carro?"
         ],
         [
          "Yes, I do. / No, I don't.",
          "Sí. / No."
         ],
         [
          "Does he have a brother?",
          "¿Él tiene un hermano?"
         ],
         [
          "She doesn't have a phone.",
          "Ella no tiene teléfono."
         ]
        ]
       },
       {
        "tip": "Después de does / doesn't el verbo vuelve a have: Does she have? (no 'Does she has')."
       }
      ],
      "words": [
       "have",
       "dog",
       "cat",
       "money",
       "job"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "My brother ___ a red car.",
        "o": [
         "have",
         "has",
         "haves",
         "having"
        ],
        "a": 1,
        "x": "He → has."
       },
       {
        "t": "mc",
        "q": "___ you have a pet?",
        "o": [
         "Are",
         "Does",
         "Do",
         "Have"
        ],
        "a": 2,
        "x": "Con you → Do you have...?"
       },
       {
        "t": "mc",
        "q": "She ___ have a job.",
        "o": [
         "don't",
         "doesn't",
         "isn't",
         "hasn't"
        ],
        "a": 1,
        "x": "Negativo con she → doesn't have."
       },
       {
        "t": "fill",
        "q": "—Do you have children? —Yes, I ___.",
        "ans": [
         "do"
        ],
        "x": "Respuesta corta: Yes, I do."
       },
       {
        "t": "listen",
        "say": "I don't have a car, but my wife has a motorcycle.",
        "q": "¿Quién tiene moto?",
        "o": [
         "El que habla",
         "La esposa",
         "Nadie",
         "Los dos"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I have two sisters and one brother."
       }
      ],
      "id": "a1-have-lo-que-tienes",
      "exam": {
       "t": "mc",
       "q": "___ your brother have a car?",
       "o": [
        "Do",
        "Does",
        "Is",
        "Has"
       ],
       "a": 1
      },
      "exam2": {
       "t": "fill",
       "q": "My parents ___ a big house.",
       "ans": [
        "have"
       ]
      },
      "vocab": [
       [
        "have",
        "verbo",
        "tener",
        "I have a car."
       ],
       [
        "has",
        "verbo",
        "tiene (he, she, it)",
        "She has two dogs."
       ],
       [
        "don't have",
        "verbo",
        "no tengo / no tienen",
        "We don't have a garden."
       ],
       [
        "doesn't have",
        "verbo",
        "no tiene",
        "He doesn't have a job."
       ],
       [
        "Do you have...?",
        "expresión",
        "¿Tienes...?",
        "Do you have a pen?"
       ],
       [
        "pet",
        "sustantivo",
        "mascota",
        "Do you have a pet?"
       ],
       [
        "dog",
        "sustantivo",
        "perro",
        "We have a big dog."
       ],
       [
        "cat",
        "sustantivo",
        "gato",
        "My cat is black."
       ],
       [
        "car",
        "sustantivo",
        "carro",
        "He has a new car."
       ],
       [
        "motorcycle",
        "sustantivo",
        "moto",
        "My brother has a motorcycle."
       ],
       [
        "bike",
        "sustantivo",
        "bicicleta",
        "I have a red bike."
       ],
       [
        "computer",
        "sustantivo",
        "computador",
        "Do you have a computer?"
       ],
       [
        "laptop",
        "sustantivo",
        "portátil",
        "I have a laptop for work."
       ],
       [
        "job",
        "sustantivo",
        "trabajo, empleo",
        "She has a good job."
       ],
       [
        "time",
        "sustantivo",
        "tiempo",
        "I don't have time."
       ],
       [
        "money",
        "sustantivo",
        "dinero",
        "Do you have money?"
       ],
       [
        "house",
        "sustantivo",
        "casa",
        "They have a small house."
       ],
       [
        "garden",
        "sustantivo",
        "jardín",
        "We have a garden."
       ],
       [
        "a lot of",
        "expresión",
        "mucho, muchos",
        "She has a lot of friends."
       ],
       [
        "any",
        "determinante",
        "ningún (en negativas); algún (en preguntas)",
        "I don't have any pets."
       ]
      ],
      "dialogue": {
       "title": "Buscando apartamento",
       "scene": "Andrés busca un compañero de apartamento y habla con Mike, un posible interesado.",
       "a": "Andrés",
       "b": "Mike",
       "lines": [
        [
         "A",
         "Hi, Mike. Do you have a few minutes?",
         "Hola, Mike. ¿Tienes unos minutos?"
        ],
        [
         "B",
         "Sure. Does the apartment have two bedrooms?",
         "Claro. ¿El apartamento tiene dos habitaciones?"
        ],
        [
         "A",
         "Yes, it has two bedrooms and a big kitchen.",
         "Sí, tiene dos habitaciones y una cocina grande."
        ],
        [
         "B",
         "Great. Does it have a garden?",
         "Genial. ¿Tiene jardín?"
        ],
        [
         "A",
         "No, it doesn't have a garden, but it has a balcony.",
         "No, no tiene jardín, pero tiene balcón."
        ],
        [
         "B",
         "OK. I have a cat. Is that a problem?",
         "Bueno. Tengo un gato. ¿Es un problema?"
        ],
        [
         "A",
         "No problem. I don't have any pets, but I love cats.",
         "No hay problema. No tengo mascotas, pero me encantan los gatos."
        ],
        [
         "B",
         "Do you have a car?",
         "¿Tienes carro?"
        ],
        [
         "A",
         "No, I don't. I have a bike. Do you have a car?",
         "No. Tengo una bicicleta. ¿Tú tienes carro?"
        ],
        [
         "B",
         "Yes, I have a small car. Does the building have parking?",
         "Sí, tengo un carro pequeño. ¿El edificio tiene parqueadero?"
        ],
        [
         "A",
         "Yes, it does. Do you have any questions?",
         "Sí. ¿Tienes alguna pregunta?"
        ],
        [
         "B",
         "No, I don't. The apartment is perfect!",
         "No. ¡El apartamento es perfecto!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "Does",
         "your",
         "sister",
         "have",
         "a",
         "car?"
        ],
        "es": "¿Tu hermana tiene carro?"
       },
       {
        "t": "order",
        "words": [
         "We",
         "don't",
         "have",
         "any",
         "pets."
        ],
        "es": "No tenemos mascotas."
       },
       {
        "t": "dict",
        "say": "She has a lot of friends."
       },
       {
        "t": "dict",
        "say": "Do you have a computer?"
       },
       {
        "t": "mc",
        "q": "—Does he have a job? —No, he ___.",
        "o": [
         "don't",
         "doesn't",
         "isn't",
         "hasn't"
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "My parents ___ a small house in the country.",
        "ans": [
         "have"
        ]
       },
       {
        "t": "listen",
        "say": "I have a laptop for work, but I don't have a computer at home.",
        "q": "¿Qué NO tiene en la casa?",
        "o": [
         "Portátil",
         "Computador",
         "Celular",
         "Televisor"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I don't have a car, but I have a bike."
       }
      ]
     },
     {
      "id": "a1-describir",
      "title": "Describir personas",
      "goal": "Describir cómo es alguien físicamente.",
      "theory": [
       {
        "p": "En inglés el **adjetivo va antes del sustantivo** y no cambia en plural: a tall man, two tall men."
       },
       {
        "ex": [
         [
          "She is tall and thin.",
          "Ella es alta y delgada."
         ],
         [
          "He is short.",
          "Él es bajo."
         ],
         [
          "She has long black hair.",
          "Tiene el pelo largo y negro."
         ],
         [
          "He has blue eyes.",
          "Tiene ojos azules."
         ],
         [
          "My father has a beard.",
          "Mi papá tiene barba."
         ],
         [
          "What does she look like?",
          "¿Cómo es ella (físicamente)?"
         ]
        ]
       },
       {
        "p": "Para el pelo y los ojos se usa **have / has**; para la estatura y la edad, **be**."
       },
       {
        "tip": "Hair es incontable: no se dice 'hairs' ni 'a hair' para hablar del pelo de alguien."
       }
      ],
      "words": [
       "tall",
       "short",
       "young",
       "old",
       "beautiful",
       "hair",
       "eyes"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "Ordena: She has (hair / black / long).",
        "o": [
         "hair long black",
         "long black hair",
         "black hair long",
         "long hair black"
        ],
        "a": 1,
        "x": "Los adjetivos van antes del sustantivo."
       },
       {
        "t": "mc",
        "q": "My brother ___ green eyes.",
        "o": [
         "is",
         "has",
         "have",
         "are"
        ],
        "a": 1,
        "x": "Ojos y pelo con have/has."
       },
       {
        "t": "mc",
        "q": "Para preguntar cómo es alguien físicamente:",
        "o": [
         "How is she?",
         "What does she look like?",
         "What is she like hair?",
         "How she looks?"
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "He isn't tall. He's ___.",
        "ans": [
         "short"
        ],
        "x": "short = bajo."
       },
       {
        "t": "listen",
        "say": "My sister is tall and thin. She has short brown hair and big brown eyes.",
        "q": "¿Cómo tiene el pelo la hermana?",
        "o": [
         "Largo y negro",
         "Corto y castaño",
         "Largo y castaño",
         "Corto y rubio"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "My wife is short and she has long black hair."
       }
      ],
      "exam": {
       "t": "mc",
       "q": "¿Cuál frase está bien?",
       "o": [
        "He has hair short.",
        "He has short hair.",
        "He is short hairs.",
        "He have short hair."
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "What does your father look like?",
       "o": [
        "He likes football.",
        "He's tall and he has gray hair.",
        "He's fine.",
        "He's a doctor."
       ],
       "a": 1
      },
      "vocab": [
       [
        "tall",
        "adjetivo",
        "alto",
        "My son is very tall."
       ],
       [
        "short",
        "adjetivo",
        "bajo; corto",
        "She is short."
       ],
       [
        "thin",
        "adjetivo",
        "delgado",
        "He is tall and thin."
       ],
       [
        "big",
        "adjetivo",
        "grande",
        "He has big eyes."
       ],
       [
        "hair",
        "sustantivo",
        "pelo, cabello",
        "She has curly hair."
       ],
       [
        "long",
        "adjetivo",
        "largo",
        "My sister has long hair."
       ],
       [
        "curly",
        "adjetivo",
        "crespo",
        "He has curly hair."
       ],
       [
        "straight",
        "adjetivo",
        "liso",
        "She has straight black hair."
       ],
       [
        "blond",
        "adjetivo",
        "rubio",
        "My cousin is blond."
       ],
       [
        "dark",
        "adjetivo",
        "oscuro",
        "He has dark hair."
       ],
       [
        "gray",
        "adjetivo",
        "gris, canoso",
        "My dad has gray hair."
       ],
       [
        "eyes",
        "sustantivo",
        "ojos",
        "She has green eyes."
       ],
       [
        "beard",
        "sustantivo",
        "barba",
        "My uncle has a beard."
       ],
       [
        "glasses",
        "sustantivo",
        "gafas",
        "He wears glasses."
       ],
       [
        "pretty",
        "adjetivo",
        "bonita",
        "Your daughter is very pretty."
       ],
       [
        "handsome",
        "adjetivo",
        "guapo",
        "He's a handsome man."
       ],
       [
        "friendly",
        "adjetivo",
        "amable, amigable",
        "My neighbour is very friendly."
       ],
       [
        "What does he look like?",
        "expresión",
        "¿Cómo es él (físicamente)?",
        "What does your brother look like?"
       ],
       [
        "look like",
        "verbo",
        "parecerse a",
        "You look like your mother."
       ],
       [
        "wear",
        "verbo",
        "usar, llevar puesto",
        "She wears a red dress."
       ]
      ],
      "dialogue": {
       "title": "Recogiendo a alguien en el aeropuerto",
       "scene": "Diego va a recoger a la prima de su esposa en el aeropuerto y llama a su esposa para preguntar cómo es.",
       "a": "Diego",
       "b": "Paula",
       "lines": [
        [
         "A",
         "Hi, Paula. I'm at the airport. What does your cousin look like?",
         "Hola, Paula. Estoy en el aeropuerto. ¿Cómo es tu prima?"
        ],
        [
         "B",
         "Her name is Sofía. She's tall and thin.",
         "Se llama Sofía. Es alta y delgada."
        ],
        [
         "A",
         "OK. What color is her hair?",
         "Bueno. ¿De qué color tiene el pelo?"
        ],
        [
         "B",
         "She has long, curly, dark hair.",
         "Tiene el pelo largo, crespo y oscuro."
        ],
        [
         "A",
         "Does she wear glasses?",
         "¿Usa gafas?"
        ],
        [
         "B",
         "Yes, she does. She has big brown eyes and glasses.",
         "Sí. Tiene ojos grandes y cafés, y gafas."
        ],
        [
         "A",
         "And what is she wearing today?",
         "¿Y qué tiene puesto hoy?"
        ],
        [
         "B",
         "A red jacket and black jeans.",
         "Una chaqueta roja y jeans negros."
        ],
        [
         "A",
         "Is she with her husband?",
         "¿Viene con su esposo?"
        ],
        [
         "B",
         "Yes. He's short and he has a gray beard.",
         "Sí. Él es bajo y tiene barba canosa."
        ],
        [
         "A",
         "I see them! She looks like you.",
         "¡Los veo! Se parece a ti."
        ],
        [
         "B",
         "Everyone says that! Thank you, Diego.",
         "¡Todos dicen eso! Gracias, Diego."
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "She",
         "has",
         "long",
         "curly",
         "hair."
        ],
        "es": "Ella tiene el pelo largo y crespo."
       },
       {
        "t": "order",
        "words": [
         "What",
         "does",
         "he",
         "look",
         "like?"
        ],
        "es": "¿Cómo es él físicamente?"
       },
       {
        "t": "dict",
        "say": "My father has gray hair and a beard."
       },
       {
        "t": "dict",
        "say": "You look like your mother."
       },
       {
        "t": "mc",
        "q": "Pelo liso es:",
        "o": [
         "curly hair",
         "straight hair",
         "long hair",
         "short hair"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "He ___ glasses. (usa)",
        "o": [
         "has on",
         "wears",
         "uses wear",
         "is wear"
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "My best friend is short and blond. She has blue eyes and she's very friendly.",
        "q": "¿De qué color tiene los ojos?",
        "o": [
         "Cafés",
         "Verdes",
         "Azules",
         "Negros"
        ],
        "a": 2
       },
       {
        "t": "write",
        "q": "Describe físicamente a una persona famosa (mínimo 20 palabras) sin decir el nombre.",
        "min": 20,
        "keys": [
         [
          "is",
          "he's",
          "she's"
         ],
         [
          "has"
         ],
         [
          "hair",
          "eyes"
         ],
         [
          "tall",
          "short",
          "thin",
          "big",
          "long",
          "curly",
          "straight",
          "blond",
          "dark"
         ]
        ]
       }
      ]
     }
    ],
    "quiz": [
     {
      "t": "mc",
      "q": "Laura's husband is Carlos. Carlos is ___ husband.",
      "o": [
       "his",
       "her",
       "their",
       "its"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "I'd like ___ egg, please.",
      "o": [
       "a",
       "an",
       "the",
       "some"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "Plural de woman:",
      "o": [
       "womans",
       "women",
       "womens",
       "woman"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "___ are my parents over there.",
      "o": [
       "This",
       "That",
       "These",
       "Those"
      ],
      "a": 3
     },
     {
      "t": "mc",
      "q": "Does your sister ___ a car?",
      "o": [
       "has",
       "have",
       "haves",
       "is"
      ],
      "a": 1
     },
     {
      "t": "fill",
      "q": "My mother's mother is my ___.",
      "ans": [
       "grandmother",
       "grandma"
      ]
     },
     {
      "t": "listen",
      "say": "We have three children: two boys and a girl.",
      "q": "¿Cuántas hijas tienen?",
      "o": [
       "1",
       "2",
       "3",
       "0"
      ],
      "a": 0
     },
     {
      "t": "listen",
      "say": "Is this your bag? No, my bag is that one, the black one.",
      "q": "¿De qué color es su bolsa?",
      "o": [
       "Blanca",
       "Negra",
       "Roja",
       "Azul"
      ],
      "a": 1
     },
     {
      "t": "write",
      "q": "Describe a una persona de tu familia (mínimo 20 palabras): quién es, cómo es y qué tiene.",
      "min": 20,
      "keys": [
       [
        "my"
       ],
       [
        "is",
        "he's",
        "she's"
       ],
       [
        "has",
        "have"
       ],
       [
        "hair",
        "eyes",
        "tall",
        "short"
       ]
      ]
     },
     {
      "t": "oral",
      "text": "This is my brother. His name is David."
     },
     {
      "t": "oral",
      "text": "Do you have any children?"
     }
    ],
    "pool": [
     {
      "t": "mc",
      "q": "My parents have a dog. ___ dog is very small.",
      "o": [
       "Its",
       "Their",
       "His",
       "Our"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "Mi hermana y yo tenemos un carro. Es ___ car.",
      "o": [
       "their",
       "our",
       "my",
       "her"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "I need ___ umbrella. It's raining.",
      "o": [
       "a",
       "an",
       "the",
       "some"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "El plural de man es:",
      "o": [
       "mans",
       "men",
       "mens",
       "manes"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "___ is my new phone. (en mi mano)",
      "o": [
       "That",
       "These",
       "This",
       "Those"
      ],
      "a": 2
     },
     {
      "t": "mc",
      "q": "We ___ two children.",
      "o": [
       "has",
       "have",
       "haves",
       "are"
      ],
      "a": 1
     },
     {
      "t": "fill",
      "q": "She ___ have a car. (no tiene)",
      "ans": [
       "doesn't",
       "does not"
      ]
     },
     {
      "t": "mc",
      "q": "Para el pelo se dice: She ___ curly hair.",
      "o": [
       "is",
       "has",
       "have",
       "does"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "This is my brother, Luis. He's tall and he has short brown hair and glasses.",
      "q": "¿Cómo es Luis?",
      "o": [
       "Bajo y con pelo largo",
       "Alto, pelo corto castaño y gafas",
       "Alto y rubio",
       "Bajo y con barba"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "Are these your books? No, my books are those, on the chair.",
      "q": "¿Dónde están sus libros?",
      "o": [
       "En la mesa",
       "En la silla",
       "En la bolsa",
       "En el piso"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "My husband's mother lives with us. Her name is Rosa and she has three cats.",
      "q": "¿Cuántos gatos tiene Rosa?",
      "o": [
       "1",
       "2",
       "3",
       "4"
      ],
      "a": 2
     },
     {
      "t": "write",
      "q": "Describe a tu mejor amigo o amiga (mínimo 20 palabras): cómo se llama, cómo es físicamente y qué tiene.",
      "min": 20,
      "keys": [
       [
        "his name",
        "her name",
        "name is"
       ],
       [
        "is",
        "he's",
        "she's"
       ],
       [
        "has",
        "have"
       ],
       [
        "hair",
        "eyes",
        "tall",
        "short"
       ]
      ]
     },
     {
      "t": "oral",
      "text": "My sister is tall and she has long brown hair."
     },
     {
      "t": "oral",
      "text": "These are my children and that is my house."
     },
     {
      "t": "oral",
      "text": "Do you have any brothers or sisters?"
     }
    ]
   },
   {
    "title": "Mi día",
    "lessons": [
     {
      "title": "Presente simple: lo que haces siempre",
      "goal": "Hablar de tu rutina con el presente simple.",
      "theory": [
       {
        "p": "El **presente simple** se usa para hábitos y cosas que son verdad siempre. Es el verbo normal, pero con **he, she, it** se agrega **-s**:"
       },
       {
        "ex": [
         [
          "I work in an office.",
          "Trabajo en una oficina."
         ],
         [
          "You live in Cali.",
          "Vives en Cali."
         ],
         [
          "She works in a hospital.",
          "Ella trabaja en un hospital."
         ],
         [
          "He watches TV at night.",
          "Él ve TV en la noche."
         ],
         [
          "My son studies English.",
          "Mi hijo estudia inglés."
         ]
        ]
       },
       {
        "p": "Reglas de la -s: verbos que terminan en s, sh, ch, x, o agregan **-es** (watches, goes). Si terminan en consonante + y, cambian a **-ies** (study → studies). **have → has**."
       },
       {
        "tip": "La -s es solo para he, she, it. 'They works' es un error: es 'they work'."
       }
      ],
      "words": [
       "work",
       "live",
       "study",
       "watch",
       "go",
       "eat",
       "drink"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "My wife ___ in a bank.",
        "o": [
         "work",
         "works",
         "working",
         "is work"
        ],
        "a": 1,
        "x": "She → works."
       },
       {
        "t": "mc",
        "q": "They ___ in Medellín.",
        "o": [
         "lives",
         "live",
         "living",
         "is live"
        ],
        "a": 1,
        "x": "They → live (sin -s)."
       },
       {
        "t": "mc",
        "q": "He ___ TV every night.",
        "o": [
         "watchs",
         "watches",
         "watch",
         "watching"
        ],
        "a": 1,
        "x": "Termina en ch → watches."
       },
       {
        "t": "fill",
        "q": "She ___ (study) English on Mondays.",
        "ans": [
         "studies"
        ],
        "x": "Consonante + y → ies: studies."
       },
       {
        "t": "listen",
        "say": "My husband gets up early. He goes to the gym before work.",
        "q": "¿Qué hace el esposo antes del trabajo?",
        "o": [
         "Desayuna",
         "Va al gimnasio",
         "Lee",
         "Duerme"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I work in an office and my wife works in a school."
       }
      ],
      "id": "a1-presente-simple-lo-que-haces-siempre",
      "exam": {
       "t": "fill",
       "q": "My husband ___ (cook) dinner every day.",
       "ans": [
        "cooks"
       ]
      },
      "exam2": {
       "t": "mc",
       "q": "My son ___ English at school.",
       "o": [
        "study",
        "studys",
        "studies",
        "studying"
       ],
       "a": 2
      },
      "vocab": [
       [
        "work",
        "verbo",
        "trabajar",
        "I work in an office."
       ],
       [
        "live",
        "verbo",
        "vivir",
        "She lives in Cali."
       ],
       [
        "study",
        "verbo",
        "estudiar",
        "My son studies at night."
       ],
       [
        "go",
        "verbo",
        "ir",
        "He goes to the gym."
       ],
       [
        "watch",
        "verbo",
        "ver (TV)",
        "She watches TV every night."
       ],
       [
        "cook",
        "verbo",
        "cocinar",
        "My husband cooks dinner."
       ],
       [
        "drive",
        "verbo",
        "manejar",
        "I drive to work."
       ],
       [
        "take",
        "verbo",
        "tomar (bus, taxi)",
        "We take the bus."
       ],
       [
        "teach",
        "verbo",
        "enseñar",
        "She teaches math."
       ],
       [
        "help",
        "verbo",
        "ayudar",
        "He helps his father."
       ],
       [
        "clean",
        "verbo",
        "limpiar",
        "I clean the house on Saturdays."
       ],
       [
        "need",
        "verbo",
        "necesitar",
        "I need a new phone."
       ],
       [
        "want",
        "verbo",
        "querer",
        "She wants a coffee."
       ],
       [
        "know",
        "verbo",
        "saber, conocer",
        "I know your brother."
       ],
       [
        "office",
        "sustantivo",
        "oficina",
        "She works in an office."
       ],
       [
        "company",
        "sustantivo",
        "empresa",
        "He works for a big company."
       ],
       [
        "nurse",
        "sustantivo",
        "enfermero, enfermera",
        "My wife is a nurse."
       ],
       [
        "engineer",
        "sustantivo",
        "ingeniero",
        "He's an engineer."
       ],
       [
        "every day",
        "expresión",
        "todos los días",
        "I study every day."
       ],
       [
        "on weekends",
        "expresión",
        "los fines de semana",
        "We visit my parents on weekends."
       ]
      ],
      "dialogue": {
       "title": "¿A qué te dedicas?",
       "scene": "Dos vecinos, Jorge y Ellen, conversan en el ascensor sobre sus trabajos.",
       "a": "Jorge",
       "b": "Ellen",
       "lines": [
        [
         "A",
         "Hi, Ellen! What do you do?",
         "¡Hola, Ellen! ¿A qué te dedicas?"
        ],
        [
         "B",
         "I'm a nurse. I work in a hospital downtown.",
         "Soy enfermera. Trabajo en un hospital en el centro."
        ],
        [
         "A",
         "Wow. Do you work every day?",
         "Wow. ¿Trabajas todos los días?"
        ],
        [
         "B",
         "I work four days a week. And you?",
         "Trabajo cuatro días a la semana. ¿Y tú?"
        ],
        [
         "A",
         "I'm an engineer. I work for a big company.",
         "Soy ingeniero. Trabajo para una empresa grande."
        ],
        [
         "B",
         "Do you drive to work?",
         "¿Vas manejando al trabajo?"
        ],
        [
         "A",
         "No, I take the metro. And your husband? What does he do?",
         "No, tomo el metro. ¿Y tu esposo? ¿A qué se dedica?"
        ],
        [
         "B",
         "He teaches English at a school. He loves his job.",
         "Enseña inglés en un colegio. Le encanta su trabajo."
        ],
        [
         "A",
         "That's great. Does he work on weekends?",
         "Qué bien. ¿Trabaja los fines de semana?"
        ],
        [
         "B",
         "No, he doesn't. On weekends he cooks and cleans the house.",
         "No. Los fines de semana cocina y limpia la casa."
        ],
        [
         "A",
         "Lucky you! My wife and I clean on Saturdays.",
         "¡Qué suerte! Mi esposa y yo limpiamos los sábados."
        ],
        [
         "B",
         "Well, this is my floor. Have a nice day, Jorge!",
         "Bueno, este es mi piso. ¡Que tengas buen día, Jorge!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "She",
         "works",
         "in",
         "a",
         "hospital."
        ],
        "es": "Ella trabaja en un hospital."
       },
       {
        "t": "order",
        "words": [
         "My",
         "husband",
         "teaches",
         "English."
        ],
        "es": "Mi esposo enseña inglés."
       },
       {
        "t": "dict",
        "say": "He takes the bus to work."
       },
       {
        "t": "dict",
        "say": "We clean the house on Saturdays."
       },
       {
        "t": "mc",
        "q": "My brother ___ in Bogotá.",
        "o": [
         "live",
         "lives",
         "living",
         "is live"
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "She ___ (teach) at a school.",
        "ans": [
         "teaches"
        ]
       },
       {
        "t": "listen",
        "say": "My sister lives in London. She works in a restaurant and studies English at night.",
        "q": "¿Qué hace la hermana en la noche?",
        "o": [
         "Trabaja",
         "Estudia inglés",
         "Cocina",
         "Va al gimnasio"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I work in an office and I take the bus every day."
       }
      ]
     },
     {
      "title": "La hora y la rutina diaria",
      "goal": "Decir la hora y contar tu día.",
      "theory": [
       {
        "ex": [
         [
          "What time is it?",
          "¿Qué hora es?"
         ],
         [
          "It's seven o'clock.",
          "Son las siete en punto."
         ],
         [
          "It's half past seven.",
          "Son las siete y media."
         ],
         [
          "It's quarter past eight.",
          "Son las ocho y cuarto."
         ],
         [
          "It's quarter to nine.",
          "Son las nueve menos cuarto."
         ]
        ]
       },
       {
        "p": "Para decir a qué hora haces algo se usa **at**:"
       },
       {
        "ex": [
         [
          "I get up at six.",
          "Me levanto a las seis."
         ],
         [
          "I have breakfast at seven.",
          "Desayuno a las siete."
         ],
         [
          "I go to bed at ten.",
          "Me acuesto a las diez."
         ]
        ]
       },
       {
        "tip": "Para 'desayunar, almorzar, cenar' se usa have: have breakfast, have lunch, have dinner."
       }
      ],
      "reading": 2,
      "words": [
       "time",
       "get up",
       "breakfast",
       "lunch",
       "dinner",
       "morning",
       "afternoon",
       "night"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "7:30 en inglés es:",
        "o": [
         "half past seven",
         "seven half",
         "half to seven",
         "thirty seven"
        ],
        "a": 0,
        "x": "Y media = half past."
       },
       {
        "t": "mc",
        "q": "I get up ___ six o'clock.",
        "o": [
         "in",
         "on",
         "at",
         "to"
        ],
        "a": 2,
        "x": "Con la hora → at."
       },
       {
        "t": "mc",
        "q": "¿Cómo dices 'almorzamos a la una'?",
        "o": [
         "We eat lunch in one.",
         "We have lunch at one.",
         "We lunch at one hour.",
         "We have lunch on one."
        ],
        "a": 1,
        "x": "have lunch at one."
       },
       {
        "t": "fill",
        "q": "What ___ is it? It's five o'clock.",
        "ans": [
         "time"
        ],
        "x": "What time is it? = ¿Qué hora es?"
       },
       {
        "t": "listen",
        "say": "The meeting is at quarter past ten.",
        "q": "¿A qué hora es la reunión?",
        "o": [
         "10:15",
         "10:45",
         "9:45",
         "10:30"
        ],
        "a": 0
       },
       {
        "t": "oral",
        "text": "I get up at six and I have breakfast at seven."
       }
      ],
      "id": "a1-la-hora-y-la-rutina-diaria",
      "exam": {
       "t": "mc",
       "q": "8:45 es:",
       "o": [
        "quarter past eight",
        "quarter to nine",
        "eight forty-five past",
        "half past eight"
       ],
       "a": 1
      },
      "exam2": {
       "t": "listen",
       "say": "The train leaves at twenty past seven.",
       "q": "¿A qué hora sale el tren?",
       "o": [
        "7:20",
        "7:40",
        "6:40",
        "7:02"
       ],
       "a": 0
      },
      "vocab": [
       [
        "wake up",
        "verbo",
        "despertarse",
        "I wake up at five thirty."
       ],
       [
        "get up",
        "verbo",
        "levantarse",
        "I get up at six."
       ],
       [
        "take a shower",
        "expresión",
        "ducharse",
        "I take a shower in the morning."
       ],
       [
        "get dressed",
        "expresión",
        "vestirse",
        "I get dressed after breakfast."
       ],
       [
        "brush my teeth",
        "expresión",
        "cepillarme los dientes",
        "I brush my teeth three times a day."
       ],
       [
        "have breakfast",
        "expresión",
        "desayunar",
        "We have breakfast at seven."
       ],
       [
        "have lunch",
        "expresión",
        "almorzar",
        "I have lunch at one."
       ],
       [
        "have dinner",
        "expresión",
        "cenar",
        "We have dinner at eight."
       ],
       [
        "go to work",
        "expresión",
        "ir al trabajo",
        "I go to work by bus."
       ],
       [
        "get home",
        "expresión",
        "llegar a casa",
        "I get home at six."
       ],
       [
        "go to bed",
        "expresión",
        "acostarse",
        "I go to bed at ten."
       ],
       [
        "o'clock",
        "adverbio",
        "en punto",
        "It's three o'clock."
       ],
       [
        "half past",
        "expresión",
        "y media",
        "It's half past four."
       ],
       [
        "quarter past",
        "expresión",
        "y cuarto",
        "It's quarter past nine."
       ],
       [
        "quarter to",
        "expresión",
        "menos cuarto",
        "It's quarter to eleven."
       ],
       [
        "a.m. / p.m.",
        "expresión",
        "de la mañana / de la tarde-noche",
        "The class is at 7 p.m."
       ],
       [
        "early",
        "adverbio",
        "temprano",
        "I get up early."
       ],
       [
        "late",
        "adverbio",
        "tarde",
        "He gets home late."
       ],
       [
        "then",
        "adverbio",
        "luego",
        "I have breakfast, then I go to work."
       ],
       [
        "after that",
        "expresión",
        "después de eso",
        "After that, I take the bus."
       ]
      ],
      "dialogue": {
       "title": "La rutina de un panadero",
       "scene": "Una periodista de radio entrevista a Pedro, un panadero, sobre su día.",
       "a": "Periodista",
       "b": "Pedro",
       "lines": [
        [
         "A",
         "Good morning, Pedro. What time do you get up?",
         "Buenos días, Pedro. ¿A qué hora se levanta?"
        ],
        [
         "B",
         "I get up very early, at three o'clock.",
         "Me levanto muy temprano, a las tres."
        ],
        [
         "A",
         "Three o'clock! What do you do then?",
         "¡A las tres! ¿Y luego qué hace?"
        ],
        [
         "B",
         "I take a shower, I get dressed and I go to the bakery.",
         "Me ducho, me visto y voy a la panadería."
        ],
        [
         "A",
         "Do you have breakfast at home?",
         "¿Desayuna en casa?"
        ],
        [
         "B",
         "No, I have breakfast at the bakery at half past six.",
         "No, desayuno en la panadería a las seis y media."
        ],
        [
         "A",
         "What time does the bakery open?",
         "¿A qué hora abre la panadería?"
        ],
        [
         "B",
         "It opens at six. People buy bread before work.",
         "Abre a las seis. La gente compra pan antes del trabajo."
        ],
        [
         "A",
         "And when do you have lunch?",
         "¿Y cuándo almuerza?"
        ],
        [
         "B",
         "At quarter past twelve. After that, I go home and sleep for an hour.",
         "A las doce y cuarto. Después voy a casa y duermo una hora."
        ],
        [
         "A",
         "What time do you go to bed?",
         "¿A qué hora se acuesta?"
        ],
        [
         "B",
         "At eight p.m. I'm always tired!",
         "A las ocho de la noche. ¡Siempre estoy cansado!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "I",
         "have",
         "breakfast",
         "at",
         "seven."
        ],
        "es": "Desayuno a las siete."
       },
       {
        "t": "order",
        "words": [
         "What",
         "time",
         "do",
         "you",
         "get",
         "up?"
        ],
        "es": "¿A qué hora te levantas?"
       },
       {
        "t": "dict",
        "say": "It's quarter to nine."
       },
       {
        "t": "dict",
        "say": "I go to bed at eleven o'clock."
       },
       {
        "t": "mc",
        "q": "10:30 es:",
        "o": [
         "half past ten",
         "half to ten",
         "ten and half",
         "thirty past ten o'clock"
        ],
        "a": 0
       },
       {
        "t": "mc",
        "q": "'Llego a casa a las seis' es:",
        "o": [
         "I arrive home six.",
         "I get home at six.",
         "I go home in six.",
         "I get to home at six."
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "I wake up at six, but I get up at quarter past six.",
        "q": "¿A qué hora se levanta?",
        "o": [
         "6:00",
         "6:15",
         "6:45",
         "6:30"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I get up at six, I take a shower and then I have breakfast."
       }
      ]
     },
     {
      "title": "Negativas y preguntas en presente",
      "goal": "Decir lo que no haces y hacer preguntas.",
      "theory": [
       {
        "p": "Para negar se usa **don't** (I, you, we, they) o **doesn't** (he, she, it) + verbo sin -s:"
       },
       {
        "ex": [
         [
          "I don't smoke.",
          "No fumo."
         ],
         [
          "She doesn't eat meat.",
          "Ella no come carne."
         ],
         [
          "They don't work on Sundays.",
          "No trabajan los domingos."
         ]
        ]
       },
       {
        "p": "Para preguntar se pone **Do** o **Does** al inicio:"
       },
       {
        "ex": [
         [
          "Do you like coffee?",
          "¿Te gusta el café?"
         ],
         [
          "Does he speak English?",
          "¿Él habla inglés?"
         ],
         [
          "Where do you work?",
          "¿Dónde trabajas?"
         ],
         [
          "What time does the class start?",
          "¿A qué hora empieza la clase?"
         ]
        ]
       },
       {
        "tip": "Con doesn't y does el verbo pierde la -s: She doesn't work (no 'doesn't works')."
       }
      ],
      "words": [
       "do",
       "like",
       "speak",
       "understand",
       "know"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "He ___ like vegetables.",
        "o": [
         "don't",
         "doesn't",
         "isn't",
         "not"
        ],
        "a": 1,
        "x": "He → doesn't."
       },
       {
        "t": "mc",
        "q": "___ your children go to school by bus?",
        "o": [
         "Does",
         "Do",
         "Are",
         "Is"
        ],
        "a": 1,
        "x": "Your children = they → Do."
       },
       {
        "t": "mc",
        "q": "Where ___ she live?",
        "o": [
         "do",
         "is",
         "does",
         "are"
        ],
        "a": 2,
        "x": "She → does."
       },
       {
        "t": "fill",
        "q": "I ___ understand. Can you repeat? (no)",
        "ans": [
         "don't",
         "do not"
        ],
        "x": "Negativo con I → don't."
       },
       {
        "t": "listen",
        "say": "Does your wife work on Saturdays? No, she doesn't. She works from Monday to Friday.",
        "q": "¿Cuándo trabaja la esposa?",
        "o": [
         "Los sábados",
         "De lunes a viernes",
         "Todos los días",
         "Los domingos"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Do you speak English? Yes, I do."
       }
      ],
      "id": "a1-negativas-y-preguntas-en-presente",
      "exam": {
       "t": "mc",
       "q": "She ___ work on Sundays.",
       "o": [
        "don't",
        "doesn't",
        "isn't",
        "not"
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "Where ___ your sister work?",
       "o": [
        "do",
        "does",
        "is",
        "are"
       ],
       "a": 1
      },
      "vocab": [
       [
        "do",
        "verbo auxiliar",
        "(para preguntas con I, you, we, they)",
        "Do you like tea?"
       ],
       [
        "does",
        "verbo auxiliar",
        "(para preguntas con he, she, it)",
        "Does she work here?"
       ],
       [
        "don't",
        "contracción",
        "no (I, you, we, they)",
        "I don't smoke."
       ],
       [
        "doesn't",
        "contracción",
        "no (he, she, it)",
        "He doesn't drive."
       ],
       [
        "what",
        "pronombre",
        "qué",
        "What do you do?"
       ],
       [
        "where",
        "adverbio",
        "dónde",
        "Where do you live?"
       ],
       [
        "when",
        "adverbio",
        "cuándo",
        "When do you study?"
       ],
       [
        "who",
        "pronombre",
        "quién",
        "Who do you live with?"
       ],
       [
        "why",
        "adverbio",
        "por qué",
        "Why do you study English?"
       ],
       [
        "how",
        "adverbio",
        "cómo",
        "How do you go to work?"
       ],
       [
        "what time",
        "expresión",
        "a qué hora",
        "What time does the class start?"
       ],
       [
        "smoke",
        "verbo",
        "fumar",
        "I don't smoke."
       ],
       [
        "like",
        "verbo",
        "gustar",
        "Do you like coffee?"
       ],
       [
        "understand",
        "verbo",
        "entender",
        "I don't understand."
       ],
       [
        "meat",
        "sustantivo",
        "carne",
        "She doesn't eat meat."
       ],
       [
        "vegetarian",
        "adjetivo",
        "vegetariano",
        "My sister is vegetarian."
       ],
       [
        "Yes, I do.",
        "expresión",
        "Sí (respuesta corta)",
        "—Do you speak English? —Yes, I do."
       ],
       [
        "No, she doesn't.",
        "expresión",
        "No (respuesta corta)",
        "—Does she drive? —No, she doesn't."
       ],
       [
        "really?",
        "interjección",
        "¿en serio?",
        "Really? That's interesting."
       ],
       [
        "interesting",
        "adjetivo",
        "interesante",
        "Your job is interesting."
       ]
      ],
      "dialogue": {
       "title": "Una cita para conocerse",
       "scene": "Marcela y James se conocen en una aplicación y toman un café juntos por primera vez.",
       "a": "James",
       "b": "Marcela",
       "lines": [
        [
         "A",
         "So, Marcela, where do you live?",
         "Entonces, Marcela, ¿dónde vives?"
        ],
        [
         "B",
         "I live in Chapinero, near the university. And you?",
         "Vivo en Chapinero, cerca de la universidad. ¿Y tú?"
        ],
        [
         "A",
         "I live in Usaquén. Do you work at the university?",
         "Vivo en Usaquén. ¿Trabajas en la universidad?"
        ],
        [
         "B",
         "No, I don't. I work in a bank. Why do you live in Bogotá?",
         "No. Trabajo en un banco. ¿Por qué vives en Bogotá?"
        ],
        [
         "A",
         "I teach English here. I love the city.",
         "Enseño inglés aquí. Me encanta la ciudad."
        ],
        [
         "B",
         "Do you speak Spanish?",
         "¿Hablas español?"
        ],
        [
         "A",
         "Yes, I do, but not very well. Do you like sports?",
         "Sí, pero no muy bien. ¿Te gustan los deportes?"
        ],
        [
         "B",
         "Yes, I do. I play tennis on Sundays. Do you play tennis?",
         "Sí. Juego tenis los domingos. ¿Juegas tenis?"
        ],
        [
         "A",
         "No, I don't, but I run every morning.",
         "No, pero corro todas las mañanas."
        ],
        [
         "B",
         "Really? I don't run. I hate running!",
         "¿En serio? Yo no corro. ¡Odio correr!"
        ],
        [
         "A",
         "Ha ha. Do you want another coffee?",
         "Ja, ja. ¿Quieres otro café?"
        ],
        [
         "B",
         "No, thanks. I don't drink a lot of coffee. But a tea, yes!",
         "No, gracias. No tomo mucho café. ¡Pero un té, sí!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "Where",
         "does",
         "your",
         "brother",
         "work?"
        ],
        "es": "¿Dónde trabaja tu hermano?"
       },
       {
        "t": "order",
        "words": [
         "I",
         "don't",
         "understand",
         "the",
         "question."
        ],
        "es": "No entiendo la pregunta."
       },
       {
        "t": "dict",
        "say": "Does she eat meat?"
       },
       {
        "t": "dict",
        "say": "We don't work on Sundays."
       },
       {
        "t": "mc",
        "q": "—Do your parents live here? —No, they ___.",
        "o": [
         "doesn't",
         "don't",
         "aren't",
         "not"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "___ do you go to work? By bus.",
        "o": [
         "Where",
         "How",
         "What",
         "Who"
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "My husband doesn't eat meat. He's vegetarian. But I love chicken.",
        "q": "¿Qué es el esposo?",
        "o": [
         "Cocinero",
         "Vegetariano",
         "Doctor",
         "Carnicero"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Where do you live? What do you do?"
       }
      ]
     },
     {
      "title": "¿Qué tan seguido? Adverbios de frecuencia",
      "goal": "Decir con qué frecuencia haces las cosas.",
      "theory": [
       {
        "ex": [
         [
          "always",
          "siempre (100 %)"
         ],
         [
          "usually",
          "normalmente (80 %)"
         ],
         [
          "often",
          "a menudo (60 %)"
         ],
         [
          "sometimes",
          "a veces (40 %)"
         ],
         [
          "never",
          "nunca (0 %)"
         ]
        ]
       },
       {
        "p": "Van **antes del verbo**, pero **después de be**:"
       },
       {
        "ex": [
         [
          "I always drink coffee in the morning.",
          "Siempre tomo café en la mañana."
         ],
         [
          "She sometimes cooks dinner.",
          "Ella a veces cocina la cena."
         ],
         [
          "He is never late.",
          "Él nunca llega tarde."
         ]
        ]
       },
       {
        "p": "Para preguntar: **How often do you...?** (¿Con qué frecuencia...?)"
       },
       {
        "tip": "Never ya es negativo: 'I never smoke' (no 'I don't never smoke')."
       }
      ],
      "words": [
       "always",
       "usually",
       "often",
       "sometimes",
       "never"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "Ordena: (always / I / walk) to work.",
        "o": [
         "I walk always to work.",
         "Always I walk to work.",
         "I always walk to work.",
         "I walk to work always."
        ],
        "a": 2,
        "x": "El adverbio va antes del verbo."
       },
       {
        "t": "mc",
        "q": "He ___ late.",
        "o": [
         "never is",
         "is never",
         "never be",
         "don't never"
        ],
        "a": 1,
        "x": "Con be el adverbio va después: is never."
       },
       {
        "t": "mc",
        "q": "'A veces' en inglés es:",
        "o": [
         "always",
         "often",
         "sometimes",
         "never"
        ],
        "a": 2
       },
       {
        "t": "fill",
        "q": "How ___ do you go to the gym?",
        "ans": [
         "often"
        ],
        "x": "How often = con qué frecuencia."
       },
       {
        "t": "listen",
        "say": "I usually take the bus, but sometimes I walk.",
        "q": "¿Cómo va normalmente?",
        "o": [
         "Camina",
         "En bus",
         "En carro",
         "En bicicleta"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I usually get up at six, but on Sundays I get up at nine."
       }
      ],
      "id": "a1-que-tan-seguido-adverbios-de-frecuencia",
      "exam": {
       "t": "mc",
       "q": "Ordena: I (late / never / am).",
       "o": [
        "I never am late.",
        "I am never late.",
        "I am late never.",
        "Never I am late."
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "'Ella casi nunca toma café' — la más cercana es:",
       "o": [
        "She always drinks coffee.",
        "She never drinks coffee.",
        "She usually drinks coffee.",
        "She often drinks coffee."
       ],
       "a": 1
      },
      "vocab": [
       [
        "always",
        "adverbio",
        "siempre",
        "I always drink coffee."
       ],
       [
        "usually",
        "adverbio",
        "normalmente",
        "I usually walk to work."
       ],
       [
        "often",
        "adverbio",
        "a menudo",
        "We often eat out."
       ],
       [
        "sometimes",
        "adverbio",
        "a veces",
        "Sometimes I cook."
       ],
       [
        "rarely",
        "adverbio",
        "rara vez",
        "I rarely watch TV."
       ],
       [
        "never",
        "adverbio",
        "nunca",
        "He never smokes."
       ],
       [
        "How often...?",
        "expresión",
        "¿Con qué frecuencia...?",
        "How often do you exercise?"
       ],
       [
        "once a week",
        "expresión",
        "una vez a la semana",
        "I go swimming once a week."
       ],
       [
        "twice a month",
        "expresión",
        "dos veces al mes",
        "We visit my aunt twice a month."
       ],
       [
        "every morning",
        "expresión",
        "todas las mañanas",
        "I run every morning."
       ],
       [
        "exercise",
        "verbo / sustantivo",
        "hacer ejercicio; ejercicio",
        "I exercise three times a week."
       ],
       [
        "run",
        "verbo",
        "correr",
        "She runs in the park."
       ],
       [
        "swim",
        "verbo",
        "nadar",
        "I swim on Saturdays."
       ],
       [
        "eat out",
        "verbo",
        "comer fuera",
        "We eat out on Fridays."
       ],
       [
        "healthy",
        "adjetivo",
        "saludable",
        "I eat healthy food."
       ],
       [
        "junk food",
        "sustantivo",
        "comida chatarra",
        "I rarely eat junk food."
       ],
       [
        "vegetables",
        "sustantivo",
        "verduras",
        "Do you eat vegetables every day?"
       ],
       [
        "sleep",
        "verbo",
        "dormir",
        "I sleep seven hours."
       ],
       [
        "late",
        "adjetivo",
        "tarde, retrasado",
        "He's never late."
       ],
       [
        "on time",
        "expresión",
        "a tiempo, puntual",
        "She's always on time."
       ]
      ],
      "dialogue": {
       "title": "En el consultorio",
       "scene": "La doctora Ruiz le pregunta a Andrés por sus hábitos en un chequeo médico.",
       "a": "Doctora",
       "b": "Andrés",
       "lines": [
        [
         "A",
         "Andrés, how often do you exercise?",
         "Andrés, ¿con qué frecuencia hace ejercicio?"
        ],
        [
         "B",
         "Hmm, I rarely exercise. Maybe once a month.",
         "Mmm, rara vez. Tal vez una vez al mes."
        ],
        [
         "A",
         "Once a month? That's not much. Do you walk to work?",
         "¿Una vez al mes? No es mucho. ¿Camina al trabajo?"
        ],
        [
         "B",
         "No, I never walk. I always drive.",
         "No, nunca camino. Siempre manejo."
        ],
        [
         "A",
         "OK. And what do you usually eat for lunch?",
         "Bueno. ¿Y qué almuerza normalmente?"
        ],
        [
         "B",
         "I usually eat fast food. I'm always busy.",
         "Normalmente como comida rápida. Siempre estoy ocupado."
        ],
        [
         "A",
         "Do you eat vegetables?",
         "¿Come verduras?"
        ],
        [
         "B",
         "Sometimes. My wife often cooks vegetables on weekends.",
         "A veces. Mi esposa a menudo cocina verduras los fines de semana."
        ],
        [
         "A",
         "How many hours do you sleep?",
         "¿Cuántas horas duerme?"
        ],
        [
         "B",
         "I usually sleep five or six hours.",
         "Normalmente duermo cinco o seis horas."
        ],
        [
         "A",
         "You need to sleep more and exercise three times a week.",
         "Necesita dormir más y hacer ejercicio tres veces a la semana."
        ],
        [
         "B",
         "OK, doctor. I'll try!",
         "Bueno, doctora. ¡Lo intentaré!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "I",
         "usually",
         "walk",
         "to",
         "work."
        ],
        "es": "Normalmente camino al trabajo."
       },
       {
        "t": "order",
        "words": [
         "How",
         "often",
         "do",
         "you",
         "exercise?"
        ],
        "es": "¿Con qué frecuencia haces ejercicio?"
       },
       {
        "t": "dict",
        "say": "She is always on time."
       },
       {
        "t": "dict",
        "say": "We eat out once a week."
       },
       {
        "t": "mc",
        "q": "'Rara vez como comida chatarra':",
        "o": [
         "I never eat junk food.",
         "I rarely eat junk food.",
         "I eat rarely junk food.",
         "Rarely I eat junk food always."
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "I go swimming ___ a week. (dos veces)",
        "ans": [
         "twice"
        ]
       },
       {
        "t": "listen",
        "say": "I exercise three times a week, but I never go to the gym on Sundays.",
        "q": "¿Cuántas veces hace ejercicio a la semana?",
        "o": [
         "1",
         "2",
         "3",
         "7"
        ],
        "a": 2
       },
       {
        "t": "write",
        "q": "Escribe sobre tus hábitos de salud (mínimo 20 palabras). Usa al menos tres adverbios de frecuencia.",
        "min": 20,
        "keys": [
         [
          "always",
          "usually",
          "often"
         ],
         [
          "sometimes",
          "rarely"
         ],
         [
          "never"
         ],
         [
          "exercise",
          "eat",
          "sleep",
          "walk",
          "run"
         ]
        ]
       }
      ]
     },
     {
      "id": "a1-conectores",
      "title": "Conectores y escribir sobre tu día",
      "goal": "Unir ideas con and, but, or, because y escribir un texto corto.",
      "theory": [
       {
        "ex": [
         [
          "and",
          "y: I have a dog and a cat."
         ],
         [
          "but",
          "pero: I like tea, but I don't like coffee."
         ],
         [
          "or",
          "o: Do you want tea or coffee?"
         ],
         [
          "because",
          "porque: I'm tired because I work a lot."
         ],
         [
          "then",
          "luego: I have breakfast, then I go to work."
         ]
        ]
       },
       {
        "p": "Para escribir sobre tu día: empieza con la hora, usa el presente simple y une las frases con conectores. Ejemplo:"
       },
       {
        "ex": [
         [
          "I get up at six. I have breakfast and then I go to work by bus.",
          "Me levanto a las seis. Desayuno y luego voy al trabajo en bus."
         ],
         [
          "I like my job, but it is very busy.",
          "Me gusta mi trabajo, pero es muy ocupado."
         ]
        ]
       },
       {
        "tip": "Because responde a Why? (¿por qué?): Why are you happy? Because it's Friday."
       }
      ],
      "words": [
       "and",
       "but",
       "or",
       "because",
       "then"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "I like football, ___ my wife doesn't.",
        "o": [
         "and",
         "but",
         "or",
         "because"
        ],
        "a": 1,
        "x": "Contraste → but."
       },
       {
        "t": "mc",
        "q": "I stay at home ___ it's raining.",
        "o": [
         "but",
         "or",
         "because",
         "then"
        ],
        "a": 2
       },
       {
        "t": "mc",
        "q": "Do you want rice ___ pasta?",
        "o": [
         "or",
         "but",
         "because",
         "and then"
        ],
        "a": 0
       },
       {
        "t": "fill",
        "q": "I have a shower, ___ I have breakfast. (luego)",
        "ans": [
         "then"
        ]
       },
       {
        "t": "listen",
        "say": "I don't drive to work because the traffic is terrible, so I take the metro.",
        "q": "¿Por qué no maneja?",
        "o": [
         "No tiene carro",
         "Por el tráfico",
         "Vive cerca",
         "No sabe manejar"
        ],
        "a": 1
       },
       {
        "t": "write",
        "q": "Escribe tu rutina de un día normal (mínimo 25 palabras). Usa and, but, then o because.",
        "min": 25,
        "keys": [
         [
          "and"
         ],
         [
          "but",
          "then",
          "because"
         ],
         [
          "i get up",
          "i have",
          "i go",
          "i work"
         ]
        ]
       }
      ],
      "exam": {
       "t": "mc",
       "q": "Why do you study English? ___ I want to travel.",
       "o": [
        "So",
        "But",
        "Because",
        "Or"
       ],
       "a": 2
      },
      "exam2": {
       "t": "mc",
       "q": "I like the city, ___ it's very noisy.",
       "o": [
        "because",
        "or",
        "but",
        "and then"
       ],
       "a": 2
      },
      "vocab": [
       [
        "and",
        "conjunción",
        "y",
        "I have a dog and a cat."
       ],
       [
        "but",
        "conjunción",
        "pero",
        "I like tea, but I don't like coffee."
       ],
       [
        "or",
        "conjunción",
        "o",
        "Tea or coffee?"
       ],
       [
        "because",
        "conjunción",
        "porque",
        "I'm happy because it's Friday."
       ],
       [
        "so",
        "conjunción",
        "así que, entonces",
        "I'm tired, so I go to bed early."
       ],
       [
        "then",
        "adverbio",
        "luego, después",
        "I eat, then I sleep."
       ],
       [
        "first",
        "adverbio",
        "primero",
        "First, I take a shower."
       ],
       [
        "after that",
        "expresión",
        "después de eso",
        "After that, I have breakfast."
       ],
       [
        "finally",
        "adverbio",
        "finalmente",
        "Finally, I go to bed."
       ],
       [
        "also",
        "adverbio",
        "también",
        "I also speak French."
       ],
       [
        "too",
        "adverbio",
        "también (al final)",
        "I like music too."
       ],
       [
        "busy",
        "adjetivo",
        "ocupado",
        "Monday is a busy day."
       ],
       [
        "tired",
        "adjetivo",
        "cansado",
        "I'm tired after work."
       ],
       [
        "free time",
        "expresión",
        "tiempo libre",
        "I read in my free time."
       ],
       [
        "message",
        "sustantivo",
        "mensaje",
        "I write a message to my friend."
       ],
       [
        "email",
        "sustantivo",
        "correo electrónico",
        "I write emails every day."
       ],
       [
        "Dear...",
        "expresión",
        "Querido(a)... (para cartas y correos)",
        "Dear Ana, how are you?"
       ],
       [
        "Best wishes",
        "expresión",
        "Saludos (despedida en correos)",
        "Best wishes, Henry."
       ],
       [
        "sentence",
        "sustantivo",
        "oración, frase",
        "Write five sentences."
       ],
       [
        "paragraph",
        "sustantivo",
        "párrafo",
        "Write a short paragraph."
       ]
      ],
      "dialogue": {
       "title": "Un correo a una nueva amiga",
       "scene": "Natalia le lee en voz alta a su profesor el correo que escribió para su amiga por correspondencia, Emma.",
       "a": "Profesor",
       "b": "Natalia",
       "lines": [
        [
         "A",
         "Natalia, please read your email.",
         "Natalia, por favor lee tu correo."
        ],
        [
         "B",
         "OK. Dear Emma, my name is Natalia and I'm from Colombia.",
         "Bueno. Querida Emma, me llamo Natalia y soy de Colombia."
        ],
        [
         "A",
         "Good. Continue, please.",
         "Bien. Continúa, por favor."
        ],
        [
         "B",
         "I'm thirty-five and I'm a dentist. I work a lot, but I love my job.",
         "Tengo treinta y cinco años y soy odontóloga. Trabajo mucho, pero me encanta mi trabajo."
        ],
        [
         "A",
         "Very good. You use 'and' and 'but'. Excellent.",
         "Muy bien. Usas 'and' y 'but'. Excelente."
        ],
        [
         "B",
         "I get up at six. First, I take a shower, then I have breakfast with my family.",
         "Me levanto a las seis. Primero me ducho, luego desayuno con mi familia."
        ],
        [
         "A",
         "Nice. What do you do in your free time?",
         "Bien. ¿Qué haces en tu tiempo libre?"
        ],
        [
         "B",
         "In my free time I read or watch movies, because I'm usually tired.",
         "En mi tiempo libre leo o veo películas, porque normalmente estoy cansada."
        ],
        [
         "A",
         "And how do you finish the email?",
         "¿Y cómo terminas el correo?"
        ],
        [
         "B",
         "Please write soon! Best wishes, Natalia.",
         "¡Por favor escribe pronto! Saludos, Natalia."
        ],
        [
         "A",
         "Perfect. Now, write one more paragraph about your city.",
         "Perfecto. Ahora escribe un párrafo más sobre tu ciudad."
        ],
        [
         "B",
         "OK! My city is big and beautiful, but the traffic is terrible.",
         "¡Bueno! Mi ciudad es grande y hermosa, pero el tráfico es terrible."
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "First,",
         "I",
         "take",
         "a",
         "shower."
        ],
        "es": "Primero, me ducho."
       },
       {
        "t": "order",
        "words": [
         "I'm",
         "tired,",
         "so",
         "I",
         "go",
         "to",
         "bed."
        ],
        "es": "Estoy cansado, así que me acuesto."
       },
       {
        "t": "dict",
        "say": "I like my job, but it is very busy."
       },
       {
        "t": "dict",
        "say": "Dear Emma, how are you?"
       },
       {
        "t": "mc",
        "q": "It's raining, ___ I take an umbrella.",
        "o": [
         "but",
         "so",
         "because",
         "or"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "Para terminar un correo amable:",
        "o": [
         "Dear Ana,",
         "Best wishes,",
         "Hello,",
         "Sorry,"
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "I don't have a car, so I take the bus. Also, I walk to the supermarket.",
        "q": "¿Por qué toma el bus?",
        "o": [
         "Porque es barato",
         "Porque no tiene carro",
         "Porque vive lejos",
         "Porque le gusta"
        ],
        "a": 1
       }
      ]
     }
    ],
    "quiz": [
     {
      "t": "mc",
      "q": "My father ___ in a hospital.",
      "o": [
       "work",
       "works",
       "is work",
       "working"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "She ___ coffee. She prefers tea.",
      "o": [
       "don't drink",
       "doesn't drinks",
       "doesn't drink",
       "not drink"
      ],
      "a": 2
     },
     {
      "t": "mc",
      "q": "___ they live near here?",
      "o": [
       "Does",
       "Do",
       "Are",
       "Is"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "8:15 es:",
      "o": [
       "quarter to eight",
       "quarter past eight",
       "eight and fifteen",
       "half past eight"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "Ordena: She (late / is / never).",
      "o": [
       "She never is late.",
       "She is never late.",
       "She is late never.",
       "Never she is late."
      ],
      "a": 1
     },
     {
      "t": "fill",
      "q": "He ___ (go) to bed at eleven.",
      "ans": [
       "goes"
      ]
     },
     {
      "t": "listen",
      "say": "I start work at nine and I finish at six. I have lunch at one.",
      "q": "¿A qué hora termina de trabajar?",
      "o": [
       "A las 9",
       "A la 1",
       "A las 6",
       "A las 5"
      ],
      "a": 2
     },
     {
      "t": "listen",
      "say": "My son never eats vegetables, but he always eats fruit.",
      "q": "¿Qué come siempre el hijo?",
      "o": [
       "Verduras",
       "Fruta",
       "Carne",
       "Pan"
      ],
      "a": 1
     },
     {
      "t": "write",
      "q": "Escribe sobre tu rutina (mínimo 25 palabras): a qué hora te levantas, qué haces y con qué frecuencia.",
      "min": 25,
      "keys": [
       [
        "i get up",
        "i wake up"
       ],
       [
        "at"
       ],
       [
        "always",
        "usually",
        "often",
        "sometimes",
        "never"
       ],
       [
        "and",
        "but",
        "then",
        "because"
       ]
      ]
     },
     {
      "t": "oral",
      "text": "I usually have lunch at one o'clock."
     },
     {
      "t": "oral",
      "text": "Does your wife speak English?"
     }
    ],
    "pool": [
     {
      "t": "mc",
      "q": "My daughter ___ to school by bus.",
      "o": [
       "go",
       "goes",
       "going",
       "gos"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "We ___ dinner at eight.",
      "o": [
       "has",
       "have",
       "haves",
       "having"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "6:30 es:",
      "o": [
       "six thirty o'clock",
       "half past six",
       "half to six",
       "thirty past six"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "___ he like football?",
      "o": [
       "Do",
       "Does",
       "Is",
       "Are"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "They ___ eat meat. They are vegetarian.",
      "o": [
       "doesn't",
       "don't",
       "aren't",
       "not"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "I'm tired ___ I work a lot.",
      "o": [
       "but",
       "or",
       "because",
       "so"
      ],
      "a": 2
     },
     {
      "t": "fill",
      "q": "She ___ (watch) TV every night.",
      "ans": [
       "watches"
      ]
     },
     {
      "t": "fill",
      "q": "How ___ do you go to the cinema? Once a month.",
      "ans": [
       "often"
      ]
     },
     {
      "t": "listen",
      "say": "On weekdays I get up at half past five, but on Saturdays I get up at nine.",
      "q": "¿A qué hora se levanta entre semana?",
      "o": [
       "5:30",
       "5:00",
       "9:00",
       "6:30"
      ],
      "a": 0
     },
     {
      "t": "listen",
      "say": "My wife doesn't drink coffee. She always drinks tea in the morning.",
      "q": "¿Qué toma la esposa?",
      "o": [
       "Café",
       "Té",
       "Jugo",
       "Leche"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "I never work on Sundays. I usually visit my parents and we have lunch together.",
      "q": "¿Qué hace normalmente los domingos?",
      "o": [
       "Trabaja",
       "Visita a sus padres",
       "Va al gimnasio",
       "Duerme"
      ],
      "a": 1
     },
     {
      "t": "write",
      "q": "Escribe sobre el día de una persona de tu familia (mínimo 25 palabras). Usa he o she y adverbios de frecuencia.",
      "min": 25,
      "keys": [
       [
        "he",
        "she"
       ],
       [
        "gets up",
        "works",
        "goes",
        "has",
        "watches",
        "studies"
       ],
       [
        "always",
        "usually",
        "often",
        "sometimes",
        "never"
       ],
       [
        "and",
        "but",
        "then",
        "because"
       ]
      ]
     },
     {
      "t": "oral",
      "text": "I usually go to bed at ten o'clock."
     },
     {
      "t": "oral",
      "text": "My husband doesn't like coffee, but he loves tea."
     },
     {
      "t": "oral",
      "text": "What time do you start work?"
     }
    ]
   },
   {
    "title": "Comida y compras",
    "lessons": [
     {
      "title": "Comida y gustos",
      "goal": "Decir qué te gusta y qué no te gusta comer.",
      "theory": [
       {
        "ex": [
         [
          "I like chicken.",
          "Me gusta el pollo."
         ],
         [
          "I love fruit.",
          "Me encanta la fruta."
         ],
         [
          "I don't like fish.",
          "No me gusta el pescado."
         ],
         [
          "She likes coffee.",
          "A ella le gusta el café."
         ],
         [
          "Do you like rice?",
          "¿Te gusta el arroz?"
         ]
        ]
       },
       {
        "p": "En inglés el que 'gusta' es la persona: **I like** = me gusta. No se dice 'me like'."
       },
       {
        "tip": "Con comida en general no se usa the: I like chicken (no 'I like the chicken')."
       }
      ],
      "words": [
       "food",
       "water",
       "coffee",
       "milk",
       "bread",
       "rice",
       "chicken",
       "fruit",
       "like",
       "love"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "'Me gusta el té' es:",
        "o": [
         "Me like tea.",
         "I like tea.",
         "I like the tea.",
         "I likes tea."
        ],
        "a": 1,
        "x": "I like tea, sin the."
       },
       {
        "t": "mc",
        "q": "My son ___ pizza.",
        "o": [
         "love",
         "loves",
         "is love",
         "loving"
        ],
        "a": 1,
        "x": "He → loves."
       },
       {
        "t": "mc",
        "q": "___ you like fish?",
        "o": [
         "Are",
         "Does",
         "Do",
         "Is"
        ],
        "a": 2
       },
       {
        "t": "fill",
        "q": "I don't like milk, but I ___ cheese. (amo)",
        "ans": [
         "love"
        ],
        "x": "love = amar, encantar."
       },
       {
        "t": "listen",
        "say": "I love Mexican food, but I don't like very spicy things.",
        "q": "¿Qué no le gusta?",
        "o": [
         "La comida mexicana",
         "Lo muy picante",
         "El arroz",
         "El pollo"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I love fruit, but I don't like fish."
       }
      ],
      "id": "a1-comida-y-gustos",
      "exam": {
       "t": "mc",
       "q": "Do you like ___?",
       "o": [
        "the fish",
        "fish",
        "a fish",
        "fishes"
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "My husband ___ like vegetables.",
       "o": [
        "don't",
        "doesn't",
        "isn't",
        "not"
       ],
       "a": 1
      },
      "vocab": [
       [
        "food",
        "sustantivo",
        "comida",
        "I love Colombian food."
       ],
       [
        "meat",
        "sustantivo",
        "carne",
        "I don't eat meat."
       ],
       [
        "chicken",
        "sustantivo",
        "pollo",
        "Chicken with rice, please."
       ],
       [
        "fish",
        "sustantivo",
        "pescado",
        "Fish is healthy."
       ],
       [
        "rice",
        "sustantivo",
        "arroz",
        "We eat rice every day."
       ],
       [
        "beans",
        "sustantivo",
        "fríjoles",
        "I love beans."
       ],
       [
        "eggs",
        "sustantivo",
        "huevos",
        "I have eggs for breakfast."
       ],
       [
        "cheese",
        "sustantivo",
        "queso",
        "A sandwich with cheese, please."
       ],
       [
        "bread",
        "sustantivo",
        "pan",
        "Fresh bread is delicious."
       ],
       [
        "fruit",
        "sustantivo",
        "fruta",
        "I eat fruit every morning."
       ],
       [
        "vegetables",
        "sustantivo",
        "verduras",
        "Vegetables are good for you."
       ],
       [
        "soup",
        "sustantivo",
        "sopa",
        "I love chicken soup."
       ],
       [
        "juice",
        "sustantivo",
        "jugo",
        "Orange juice, please."
       ],
       [
        "water",
        "sustantivo",
        "agua",
        "Can I have some water?"
       ],
       [
        "like",
        "verbo",
        "gustar",
        "I like pizza."
       ],
       [
        "love",
        "verbo",
        "encantar, amar",
        "She loves chocolate."
       ],
       [
        "hate",
        "verbo",
        "odiar",
        "I hate onions."
       ],
       [
        "favorite",
        "adjetivo",
        "favorito",
        "My favorite food is ajiaco."
       ],
       [
        "delicious",
        "adjetivo",
        "delicioso",
        "This soup is delicious!"
       ],
       [
        "spicy",
        "adjetivo",
        "picante",
        "Mexican food is spicy."
       ]
      ],
      "dialogue": {
       "title": "¿Qué comemos esta noche?",
       "scene": "Una pareja, Camilo y Jenny, decide qué cocinar para la cena.",
       "a": "Camilo",
       "b": "Jenny",
       "lines": [
        [
         "A",
         "What do you want for dinner tonight?",
         "¿Qué quieres de cena esta noche?"
        ],
        [
         "B",
         "I don't know. Do you like fish?",
         "No sé. ¿Te gusta el pescado?"
        ],
        [
         "A",
         "Not really. I prefer chicken.",
         "No mucho. Prefiero el pollo."
        ],
        [
         "B",
         "OK. Chicken with rice and vegetables?",
         "Bueno. ¿Pollo con arroz y verduras?"
        ],
        [
         "A",
         "I love chicken, but I hate broccoli!",
         "Me encanta el pollo, ¡pero odio el brócoli!"
        ],
        [
         "B",
         "Ha ha, I know. Carrots and potatoes, then.",
         "Ja, ja, ya sé. Entonces zanahorias y papas."
        ],
        [
         "A",
         "Perfect. And for dessert?",
         "Perfecto. ¿Y de postre?"
        ],
        [
         "B",
         "Do we have any fruit?",
         "¿Tenemos fruta?"
        ],
        [
         "A",
         "Yes, we have mangoes and bananas.",
         "Sí, tenemos mangos y bananos."
        ],
        [
         "B",
         "Great, mango is my favorite fruit.",
         "Genial, el mango es mi fruta favorita."
        ],
        [
         "A",
         "What do you want to drink? Juice or water?",
         "¿Qué quieres tomar? ¿Jugo o agua?"
        ],
        [
         "B",
         "Orange juice, please. This dinner is going to be delicious!",
         "Jugo de naranja, por favor. ¡Esta cena va a estar deliciosa!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "My",
         "favorite",
         "food",
         "is",
         "pizza."
        ],
        "es": "Mi comida favorita es la pizza."
       },
       {
        "t": "order",
        "words": [
         "I",
         "don't",
         "like",
         "spicy",
         "food."
        ],
        "es": "No me gusta la comida picante."
       },
       {
        "t": "dict",
        "say": "She loves chocolate cake."
       },
       {
        "t": "dict",
        "say": "Do you like fish or chicken?"
       },
       {
        "t": "mc",
        "q": "'Odio las cebollas' es:",
        "o": [
         "I hate onions.",
         "I don't hate onions.",
         "I hates onions.",
         "Onions hate me."
        ],
        "a": 0
       },
       {
        "t": "fill",
        "q": "This soup is very good. It's ___! (deliciosa)",
        "ans": [
         "delicious"
        ]
       },
       {
        "t": "listen",
        "say": "My kids love pasta, but they hate vegetables. My wife loves fish.",
        "q": "¿Qué odian los niños?",
        "o": [
         "La pasta",
         "Las verduras",
         "El pescado",
         "La fruta"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I love chicken and rice, but I don't like fish."
       }
      ]
     },
     {
      "title": "There is / there are, some / any",
      "goal": "Decir qué hay y usar some y any.",
      "theory": [
       {
        "ex": [
         [
          "There is a supermarket near my house.",
          "Hay un supermercado cerca de mi casa."
         ],
         [
          "There are two banks on this street.",
          "Hay dos bancos en esta calle."
         ],
         [
          "Is there any milk?",
          "¿Hay leche?"
         ],
         [
          "There isn't any bread.",
          "No hay pan."
         ]
        ]
       },
       {
        "p": "**some** se usa en frases afirmativas; **any** en negativas y preguntas:"
       },
       {
        "ex": [
         [
          "There are some eggs.",
          "Hay unos huevos."
         ],
         [
          "Are there any apples?",
          "¿Hay manzanas?"
         ],
         [
          "We don't have any rice.",
          "No tenemos arroz."
         ]
        ]
       },
       {
        "tip": "There is + singular; there are + plural."
       }
      ],
      "words": [
       "egg",
       "bread",
       "milk",
       "supermarket"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "There ___ three eggs in the fridge.",
        "o": [
         "is",
         "are",
         "be",
         "has"
        ],
        "a": 1,
        "x": "Plural → there are."
       },
       {
        "t": "mc",
        "q": "Is there ___ coffee?",
        "o": [
         "some",
         "any",
         "a",
         "an"
        ],
        "a": 1,
        "x": "Pregunta → any."
       },
       {
        "t": "mc",
        "q": "I'd like ___ water, please.",
        "o": [
         "any",
         "some",
         "an",
         "a"
        ],
        "a": 1,
        "x": "Afirmativo / al pedir → some."
       },
       {
        "t": "fill",
        "q": "There ___ a park near my house.",
        "ans": [
         "is",
         "'s"
        ],
        "x": "Singular → there is."
       },
       {
        "t": "listen",
        "say": "There isn't any milk, but there are some eggs and some bread.",
        "q": "¿Qué NO hay?",
        "o": [
         "Huevos",
         "Pan",
         "Leche",
         "Nada falta"
        ],
        "a": 2
       },
       {
        "t": "oral",
        "text": "There is a supermarket near my house."
       }
      ],
      "id": "a1-there-is-there-are-some-any",
      "exam": {
       "t": "mc",
       "q": "Are there ___ eggs?",
       "o": [
        "some",
        "any",
        "a",
        "an"
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "There ___ some bread on the table.",
       "o": [
        "are",
        "is",
        "have",
        "be"
       ],
       "a": 1
      },
      "vocab": [
       [
        "there is",
        "expresión",
        "hay (singular)",
        "There is a bank near here."
       ],
       [
        "there are",
        "expresión",
        "hay (plural)",
        "There are two cats."
       ],
       [
        "is there...?",
        "expresión",
        "¿hay...? (singular)",
        "Is there any milk?"
       ],
       [
        "are there...?",
        "expresión",
        "¿hay...? (plural)",
        "Are there any eggs?"
       ],
       [
        "there isn't",
        "expresión",
        "no hay (singular)",
        "There isn't any bread."
       ],
       [
        "there aren't",
        "expresión",
        "no hay (plural)",
        "There aren't any apples."
       ],
       [
        "some",
        "determinante",
        "algunos, algo de",
        "There are some eggs."
       ],
       [
        "any",
        "determinante",
        "nada de / algún",
        "Is there any juice?"
       ],
       [
        "fridge",
        "sustantivo",
        "nevera",
        "The milk is in the fridge."
       ],
       [
        "kitchen",
        "sustantivo",
        "cocina",
        "There is a big kitchen."
       ],
       [
        "milk",
        "sustantivo",
        "leche",
        "There isn't any milk."
       ],
       [
        "butter",
        "sustantivo",
        "mantequilla",
        "Is there any butter?"
       ],
       [
        "sugar",
        "sustantivo",
        "azúcar",
        "No sugar, please."
       ],
       [
        "salt",
        "sustantivo",
        "sal",
        "Pass the salt, please."
       ],
       [
        "oil",
        "sustantivo",
        "aceite",
        "We need oil."
       ],
       [
        "tomatoes",
        "sustantivo",
        "tomates",
        "There are some tomatoes."
       ],
       [
        "potatoes",
        "sustantivo",
        "papas",
        "We need potatoes."
       ],
       [
        "onions",
        "sustantivo",
        "cebollas",
        "There aren't any onions."
       ],
       [
        "shopping list",
        "sustantivo",
        "lista de compras",
        "Let's write a shopping list."
       ],
       [
        "need",
        "verbo",
        "necesitar",
        "We need some eggs."
       ]
      ],
      "dialogue": {
       "title": "La lista del mercado",
       "scene": "Antes de ir al supermercado, Luisa revisa la nevera y su esposo Nick escribe la lista.",
       "a": "Nick",
       "b": "Luisa",
       "lines": [
        [
         "A",
         "OK, let's write a shopping list. Is there any milk?",
         "Bueno, hagamos la lista. ¿Hay leche?"
        ],
        [
         "B",
         "No, there isn't any milk. Write milk.",
         "No, no hay leche. Escribe leche."
        ],
        [
         "A",
         "Milk. Are there any eggs?",
         "Leche. ¿Hay huevos?"
        ],
        [
         "B",
         "Yes, there are some eggs. Six, I think.",
         "Sí, hay algunos huevos. Seis, creo."
        ],
        [
         "A",
         "Good. And tomatoes?",
         "Bien. ¿Y tomates?"
        ],
        [
         "B",
         "There are two tomatoes, but there aren't any onions.",
         "Hay dos tomates, pero no hay cebollas."
        ],
        [
         "A",
         "Onions. Is there any cheese?",
         "Cebollas. ¿Hay queso?"
        ],
        [
         "B",
         "Yes, there's some cheese, but there isn't any butter.",
         "Sí, hay algo de queso, pero no hay mantequilla."
        ],
        [
         "A",
         "Butter. What about rice?",
         "Mantequilla. ¿Y arroz?"
        ],
        [
         "B",
         "There's a lot of rice. We don't need rice.",
         "Hay mucho arroz. No necesitamos arroz."
        ],
        [
         "A",
         "And fruit? The kids need fruit for school.",
         "¿Y fruta? Los niños necesitan fruta para el colegio."
        ],
        [
         "B",
         "Yes, write apples and bananas. Let's go!",
         "Sí, escribe manzanas y bananos. ¡Vámonos!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "Is",
         "there",
         "any",
         "milk",
         "in",
         "the",
         "fridge?"
        ],
        "es": "¿Hay leche en la nevera?"
       },
       {
        "t": "order",
        "words": [
         "There",
         "are",
         "some",
         "eggs",
         "on",
         "the",
         "table."
        ],
        "es": "Hay unos huevos en la mesa."
       },
       {
        "t": "dict",
        "say": "There isn't any sugar."
       },
       {
        "t": "dict",
        "say": "We need some potatoes and onions."
       },
       {
        "t": "mc",
        "q": "There ___ a lot of people in the supermarket.",
        "o": [
         "is",
         "are",
         "be",
         "has"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "We don't have ___ butter.",
        "o": [
         "some",
         "any",
         "a",
         "an"
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "There are three apples, but there isn't any orange juice.",
        "q": "¿Qué NO hay?",
        "o": [
         "Manzanas",
         "Jugo de naranja",
         "Leche",
         "Pan"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "There are some eggs, but there isn't any milk."
       }
      ]
     },
     {
      "title": "En el restaurante",
      "goal": "Pedir comida y la cuenta con cortesía.",
      "theory": [
       {
        "ex": [
         [
          "Can I see the menu, please?",
          "¿Puedo ver la carta, por favor?"
         ],
         [
          "I'd like a coffee, please.",
          "Quisiera un café, por favor."
         ],
         [
          "Can I have the chicken, please?",
          "¿Me trae el pollo, por favor?"
         ],
         [
          "For me, a salad.",
          "Para mí, una ensalada."
         ],
         [
          "Can we have the bill, please?",
          "¿Nos trae la cuenta, por favor?"
         ]
        ]
       },
       {
        "p": "**I'd like** (I would like) es la forma amable de decir 'quiero'. 'I want' puede sonar brusco."
       },
       {
        "tip": "En Estados Unidos la cuenta se dice check; en Reino Unido, bill."
       }
      ],
      "reading": 3,
      "words": [
       "I'd like…",
       "Please",
       "Thank you / Thanks",
       "restaurant",
       "How much is it?"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "La forma más amable de pedir es:",
        "o": [
         "I want a coffee.",
         "Give me a coffee.",
         "I'd like a coffee, please.",
         "Coffee now."
        ],
        "a": 2
       },
       {
        "t": "mc",
        "q": "Para pedir la cuenta dices:",
        "o": [
         "Can we have the bill, please?",
         "Where is the bill?",
         "I want pay.",
         "Bill me."
        ],
        "a": 0
       },
       {
        "t": "mc",
        "q": "—Anything to drink? —___",
        "o": [
         "Yes, a lemonade, please.",
         "I'm fine.",
         "Nice to meet you.",
         "Goodbye."
        ],
        "a": 0
       },
       {
        "t": "fill",
        "q": "I'd ___ the soup, please.",
        "ans": [
         "like"
        ],
        "x": "I'd like = quisiera."
       },
       {
        "t": "listen",
        "say": "Hi, can I have a large coffee and a chocolate cake, please?",
        "q": "¿Qué pidió?",
        "o": [
         "Té y torta",
         "Café grande y torta de chocolate",
         "Café pequeño",
         "Jugo y pan"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I'd like a coffee with milk, please."
       }
      ],
      "id": "a1-en-el-restaurante",
      "exam": {
       "t": "mc",
       "q": "La forma amable de pedir:",
       "o": [
        "I want water.",
        "Give me water.",
        "I'd like some water, please.",
        "Water."
       ],
       "a": 2
      },
      "exam2": {
       "t": "mc",
       "q": "Para pedir la cuenta:",
       "o": [
        "Can I have the bill, please?",
        "Give me money.",
        "How much you want?",
        "The menu, please."
       ],
       "a": 0
      },
      "vocab": [
       [
        "menu",
        "sustantivo",
        "carta, menú",
        "Can I see the menu, please?"
       ],
       [
        "waiter / waitress",
        "sustantivo",
        "mesero / mesera",
        "The waiter is very friendly."
       ],
       [
        "table",
        "sustantivo",
        "mesa",
        "A table for two, please."
       ],
       [
        "order",
        "verbo",
        "pedir (en un restaurante)",
        "Are you ready to order?"
       ],
       [
        "I'd like...",
        "expresión",
        "quisiera...",
        "I'd like the soup, please."
       ],
       [
        "Can I have...?",
        "expresión",
        "¿Me trae...?",
        "Can I have some water?"
       ],
       [
        "starter",
        "sustantivo",
        "entrada",
        "For a starter, a salad."
       ],
       [
        "main course",
        "sustantivo",
        "plato fuerte",
        "For the main course, steak."
       ],
       [
        "dessert",
        "sustantivo",
        "postre",
        "What's for dessert?"
       ],
       [
        "drink",
        "sustantivo / verbo",
        "bebida; beber",
        "Anything to drink?"
       ],
       [
        "glass",
        "sustantivo",
        "vaso, copa",
        "A glass of water, please."
       ],
       [
        "bottle",
        "sustantivo",
        "botella",
        "A bottle of water."
       ],
       [
        "salad",
        "sustantivo",
        "ensalada",
        "A green salad, please."
       ],
       [
        "steak",
        "sustantivo",
        "filete de res",
        "I'd like the steak."
       ],
       [
        "bill / check",
        "sustantivo",
        "cuenta",
        "The bill, please."
       ],
       [
        "tip",
        "sustantivo",
        "propina",
        "We leave a tip."
       ],
       [
        "ready",
        "adjetivo",
        "listo",
        "Are you ready to order?"
       ],
       [
        "Anything else?",
        "expresión",
        "¿Algo más?",
        "Anything else? No, thank you."
       ],
       [
        "Enjoy your meal!",
        "expresión",
        "¡Buen provecho!",
        "Here you are. Enjoy your meal!"
       ],
       [
        "Here you are.",
        "expresión",
        "Aquí tiene.",
        "Here you are, your coffee."
       ]
      ],
      "dialogue": {
       "title": "Una mesa para dos",
       "scene": "Daniel y su esposa llegan a un restaurante. El mesero los atiende.",
       "a": "Mesero",
       "b": "Daniel",
       "lines": [
        [
         "A",
         "Good evening. A table for two?",
         "Buenas noches. ¿Mesa para dos?"
        ],
        [
         "B",
         "Yes, please. By the window, if possible.",
         "Sí, por favor. Junto a la ventana, si se puede."
        ],
        [
         "A",
         "Of course. Here's the menu. Anything to drink?",
         "Claro. Aquí está la carta. ¿Algo de tomar?"
        ],
        [
         "B",
         "A bottle of water and two glasses of lemonade, please.",
         "Una botella de agua y dos limonadas, por favor."
        ],
        [
         "A",
         "Are you ready to order?",
         "¿Están listos para pedir?"
        ],
        [
         "B",
         "Yes. For a starter, can we have a green salad?",
         "Sí. De entrada, ¿nos trae una ensalada verde?"
        ],
        [
         "A",
         "Sure. And for the main course?",
         "Claro. ¿Y de plato fuerte?"
        ],
        [
         "B",
         "I'd like the steak, and my wife would like the fish.",
         "Quisiera el filete, y mi esposa quisiera el pescado."
        ],
        [
         "A",
         "Anything else?",
         "¿Algo más?"
        ],
        [
         "B",
         "No, thank you. That's all.",
         "No, gracias. Es todo."
        ],
        [
         "A",
         "Here you are. Enjoy your meal!",
         "Aquí tienen. ¡Buen provecho!"
        ],
        [
         "B",
         "Thank you. Excuse me, can we have the bill, please?",
         "Gracias. Disculpe, ¿nos trae la cuenta, por favor?"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "Can",
         "I",
         "see",
         "the",
         "menu,",
         "please?"
        ],
        "es": "¿Puedo ver la carta, por favor?"
       },
       {
        "t": "order",
        "words": [
         "I'd",
         "like",
         "the",
         "chicken",
         "soup."
        ],
        "es": "Quisiera la sopa de pollo."
       },
       {
        "t": "dict",
        "say": "A table for two, please."
       },
       {
        "t": "dict",
        "say": "Can we have the bill, please?"
       },
       {
        "t": "mc",
        "q": "—Anything else? —___",
        "o": [
         "No, thank you. That's all.",
         "Yes, I'm fine.",
         "Here you are.",
         "Enjoy your meal."
        ],
        "a": 0
       },
       {
        "t": "mc",
        "q": "El mesero te entrega el plato y dice:",
        "o": [
         "Can I have it?",
         "Enjoy your meal!",
         "I'd like it.",
         "The bill, please."
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "For the main course I'd like the pasta, and for dessert, ice cream.",
        "q": "¿Qué pide de postre?",
        "o": [
         "Torta",
         "Helado",
         "Fruta",
         "Nada"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "For the main course, I'd like the steak, please."
       }
      ]
     },
     {
      "title": "Precios y números grandes",
      "goal": "Preguntar precios y entender cantidades.",
      "theory": [
       {
        "ex": [
         [
          "How much is this shirt?",
          "¿Cuánto cuesta esta camisa?"
         ],
         [
          "How much are these shoes?",
          "¿Cuánto cuestan estos zapatos?"
         ],
         [
          "It's twenty dollars.",
          "Cuesta veinte dólares."
         ],
         [
          "That's expensive! / That's cheap!",
          "¡Qué caro! / ¡Qué barato!"
         ]
        ]
       },
       {
        "ex": [
         [
          "one hundred",
          "100"
         ],
         [
          "two hundred and fifty",
          "250"
         ],
         [
          "one thousand",
          "1.000"
         ],
         [
          "five thousand",
          "5.000"
         ]
        ]
       },
       {
        "tip": "Para precios en inglés se usa punto para decimales: $4.50 se dice 'four fifty' o 'four dollars fifty'."
       }
      ],
      "words": [
       "How much is it?",
       "one hundred",
       "money",
       "expensive",
       "cheap",
       "price"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "How much ___ these jeans?",
        "o": [
         "is",
         "are",
         "be",
         "does"
        ],
        "a": 1,
        "x": "Jeans es plural → are."
       },
       {
        "t": "mc",
        "q": "350 es:",
        "o": [
         "three hundred fifty-five",
         "three hundred and fifty",
         "thirty-five hundred",
         "three and fifty"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "'¡Qué caro!' es:",
        "o": [
         "That's cheap!",
         "That's expensive!",
         "That's nice!",
         "That's good!"
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "How ___ is this book?",
        "ans": [
         "much"
        ],
        "x": "How much = cuánto (precio)."
       },
       {
        "t": "listen",
        "say": "The jacket is eighty-five dollars, but today it's on sale for sixty.",
        "q": "¿Cuánto cuesta hoy la chaqueta?",
        "o": [
         "$85",
         "$60",
         "$65",
         "$80"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Excuse me, how much is this shirt?"
       }
      ],
      "id": "a1-precios-y-numeros-grandes",
      "exam": {
       "t": "listen",
       "say": "These shoes are one hundred and twenty dollars.",
       "q": "¿Cuánto cuestan los zapatos?",
       "o": [
        "$102",
        "$120",
        "$112",
        "$220"
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "1.500 en inglés es:",
       "o": [
        "one thousand five hundred",
        "fifteen thousand",
        "one hundred fifty",
        "one five hundred"
       ],
       "a": 0
      },
      "vocab": [
       [
        "How much is it?",
        "expresión",
        "¿Cuánto cuesta?",
        "How much is this bag?"
       ],
       [
        "How much are they?",
        "expresión",
        "¿Cuánto cuestan?",
        "How much are these shoes?"
       ],
       [
        "cost",
        "verbo",
        "costar",
        "It costs fifty dollars."
       ],
       [
        "price",
        "sustantivo",
        "precio",
        "The price is good."
       ],
       [
        "dollar",
        "sustantivo",
        "dólar",
        "It's ten dollars."
       ],
       [
        "peso",
        "sustantivo",
        "peso",
        "It costs twenty thousand pesos."
       ],
       [
        "cent",
        "sustantivo",
        "centavo",
        "Ninety-nine cents."
       ],
       [
        "hundred",
        "número",
        "cien",
        "One hundred dollars."
       ],
       [
        "thousand",
        "número",
        "mil",
        "Two thousand pesos."
       ],
       [
        "million",
        "número",
        "millón",
        "A million dollars!"
       ],
       [
        "cheap",
        "adjetivo",
        "barato",
        "This phone is cheap."
       ],
       [
        "expensive",
        "adjetivo",
        "caro",
        "That watch is expensive."
       ],
       [
        "sale",
        "sustantivo",
        "rebaja, oferta",
        "It's on sale today."
       ],
       [
        "discount",
        "sustantivo",
        "descuento",
        "Is there a discount?"
       ],
       [
        "pay",
        "verbo",
        "pagar",
        "Can I pay by card?"
       ],
       [
        "cash",
        "sustantivo",
        "efectivo",
        "I pay in cash."
       ],
       [
        "card",
        "sustantivo",
        "tarjeta",
        "Do you take cards?"
       ],
       [
        "change",
        "sustantivo",
        "cambio, vueltas",
        "Here's your change."
       ],
       [
        "receipt",
        "sustantivo",
        "recibo",
        "Can I have a receipt?"
       ],
       [
        "total",
        "sustantivo",
        "total",
        "The total is forty dollars."
       ]
      ],
      "dialogue": {
       "title": "En la tienda de tecnología",
       "scene": "Felipe quiere comprar unos audífonos y pregunta precios.",
       "a": "Vendedora",
       "b": "Felipe",
       "lines": [
        [
         "A",
         "Hello. Can I help you?",
         "Hola. ¿Le ayudo?"
        ],
        [
         "B",
         "Yes. How much are these headphones?",
         "Sí. ¿Cuánto cuestan estos audífonos?"
        ],
        [
         "A",
         "They're one hundred and twenty dollars.",
         "Cuestan ciento veinte dólares."
        ],
        [
         "B",
         "That's expensive! Do you have cheaper ones?",
         "¡Qué caro! ¿Tiene unos más baratos?"
        ],
        [
         "A",
         "Yes. These are forty-five dollars, and they're on sale today.",
         "Sí. Estos cuestan cuarenta y cinco dólares, y hoy están en oferta."
        ],
        [
         "B",
         "Great. Is there a discount if I pay in cash?",
         "Genial. ¿Hay descuento si pago en efectivo?"
        ],
        [
         "A",
         "Yes, ten percent. So the total is forty dollars and fifty cents.",
         "Sí, diez por ciento. Entonces el total es cuarenta dólares con cincuenta."
        ],
        [
         "B",
         "Perfect. Here's fifty dollars.",
         "Perfecto. Aquí tiene cincuenta dólares."
        ],
        [
         "A",
         "Thank you. Here's your change: nine dollars and fifty cents.",
         "Gracias. Aquí tiene su cambio: nueve dólares con cincuenta."
        ],
        [
         "B",
         "Can I have a receipt, please?",
         "¿Me da el recibo, por favor?"
        ],
        [
         "A",
         "Of course. Here you are.",
         "Claro. Aquí tiene."
        ],
        [
         "B",
         "Thanks a lot. Have a nice day!",
         "Muchas gracias. ¡Que tenga buen día!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "How",
         "much",
         "are",
         "these",
         "shoes?"
        ],
        "es": "¿Cuánto cuestan estos zapatos?"
       },
       {
        "t": "order",
        "words": [
         "Can",
         "I",
         "pay",
         "by",
         "card?"
        ],
        "es": "¿Puedo pagar con tarjeta?"
       },
       {
        "t": "dict",
        "say": "It costs two hundred dollars."
       },
       {
        "t": "dict",
        "say": "Here's your change."
       },
       {
        "t": "mc",
        "q": "25.000 pesos se dice:",
        "o": [
         "twenty-five thousand pesos",
         "twenty-five hundred pesos",
         "two thousand five pesos",
         "twenty-five million pesos"
        ],
        "a": 0
       },
       {
        "t": "fill",
        "q": "I pay in ___. (efectivo)",
        "ans": [
         "cash"
        ]
       },
       {
        "t": "listen",
        "say": "The jacket is eighty dollars, but with the discount it's sixty-four.",
        "q": "¿Cuánto cuesta con descuento?",
        "o": [
         "$80",
         "$64",
         "$46",
         "$84"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "How much is it? Can I pay in cash?"
       }
      ]
     },
     {
      "id": "a1-ropa",
      "title": "Ropa y compras en una tienda",
      "goal": "Comprar ropa: pedir tallas, colores y probártela.",
      "theory": [
       {
        "ex": [
         [
          "Can I help you?",
          "¿Le puedo ayudar?"
         ],
         [
          "I'm looking for a shirt.",
          "Estoy buscando una camisa."
         ],
         [
          "What size are you?",
          "¿Qué talla es usted?"
         ],
         [
          "Medium, please.",
          "Mediana, por favor."
         ],
         [
          "Can I try it on?",
          "¿Me la puedo probar?"
         ],
         [
          "Do you have it in blue?",
          "¿La tiene en azul?"
         ],
         [
          "It's too big / too small.",
          "Me queda muy grande / muy pequeña."
         ],
         [
          "I'll take it.",
          "Me la llevo."
         ]
        ]
       },
       {
        "p": "Ropa: **shirt** (camisa), **T-shirt** (camiseta), **pants / jeans** (pantalón), **dress** (vestido), **shoes** (zapatos), **jacket** (chaqueta). Tallas: small, medium, large."
       },
       {
        "tip": "Pants, jeans y shoes son siempre plurales: These jeans are nice (no 'this jeans')."
       }
      ],
      "words": [
       "clothes",
       "shirt",
       "pants",
       "shoes",
       "dress",
       "jacket"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "Para preguntar si te la puedes probar:",
        "o": [
         "Can I try it on?",
         "Can I put it?",
         "Can I test it?",
         "Can I wear on it?"
        ],
        "a": 0
       },
       {
        "t": "mc",
        "q": "These shoes ___ too small.",
        "o": [
         "is",
         "are",
         "am",
         "be"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "—What size are you? —___",
        "o": [
         "Blue.",
         "Medium.",
         "Twenty dollars.",
         "Yes, please."
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "I'll ___ it. (me la llevo)",
        "ans": [
         "take"
        ]
       },
       {
        "t": "listen",
        "say": "Do you have this jacket in black? This one is too big for me.",
        "q": "¿Qué problema tiene la chaqueta?",
        "o": [
         "Es muy cara",
         "Es muy grande",
         "Es muy pequeña",
         "No le gusta el color negro"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Excuse me, can I try on these jeans?"
       }
      ],
      "exam": {
       "t": "mc",
       "q": "En la tienda: 'Me queda muy pequeña.'",
       "o": [
        "It's very little.",
        "It's too small.",
        "It's too short of me.",
        "It's small too."
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "These jeans are perfect. ___",
       "o": [
        "I'll take them.",
        "I take it.",
        "I'll take it.",
        "I take they."
       ],
       "a": 0
      },
      "vocab": [
       [
        "clothes",
        "sustantivo",
        "ropa",
        "I need new clothes."
       ],
       [
        "shirt",
        "sustantivo",
        "camisa",
        "A white shirt."
       ],
       [
        "T-shirt",
        "sustantivo",
        "camiseta",
        "I wear a T-shirt at home."
       ],
       [
        "pants",
        "sustantivo",
        "pantalón",
        "These pants are long."
       ],
       [
        "jeans",
        "sustantivo",
        "jeans",
        "Blue jeans, please."
       ],
       [
        "dress",
        "sustantivo",
        "vestido",
        "A beautiful dress."
       ],
       [
        "skirt",
        "sustantivo",
        "falda",
        "She has a black skirt."
       ],
       [
        "shoes",
        "sustantivo",
        "zapatos",
        "My shoes are new."
       ],
       [
        "sneakers",
        "sustantivo",
        "tenis (zapatos deportivos)",
        "I run in sneakers."
       ],
       [
        "jacket",
        "sustantivo",
        "chaqueta",
        "Take a jacket."
       ],
       [
        "sweater",
        "sustantivo",
        "saco, suéter",
        "A warm sweater."
       ],
       [
        "size",
        "sustantivo",
        "talla",
        "What size are you?"
       ],
       [
        "small / medium / large",
        "adjetivo",
        "pequeña / mediana / grande",
        "Medium, please."
       ],
       [
        "try on",
        "verbo",
        "probarse",
        "Can I try it on?"
       ],
       [
        "fitting room",
        "sustantivo",
        "probador",
        "The fitting room is there."
       ],
       [
        "too big",
        "expresión",
        "muy grande (de más)",
        "It's too big for me."
       ],
       [
        "too small",
        "expresión",
        "muy pequeño",
        "These shoes are too small."
       ],
       [
        "color",
        "sustantivo",
        "color",
        "What color do you want?"
       ],
       [
        "I'll take it.",
        "expresión",
        "Me lo llevo.",
        "It's perfect. I'll take it."
       ],
       [
        "look for",
        "verbo",
        "buscar",
        "I'm looking for a dress."
       ]
      ],
      "dialogue": {
       "title": "Comprando un vestido",
       "scene": "Valentina busca un vestido para una boda en un almacén de ropa.",
       "a": "Vendedor",
       "b": "Valentina",
       "lines": [
        [
         "A",
         "Hi! Can I help you?",
         "¡Hola! ¿Le ayudo?"
        ],
        [
         "B",
         "Yes, I'm looking for a dress for a wedding.",
         "Sí, busco un vestido para una boda."
        ],
        [
         "A",
         "What color do you like?",
         "¿Qué color le gusta?"
        ],
        [
         "B",
         "Blue or green, please.",
         "Azul o verde, por favor."
        ],
        [
         "A",
         "What size are you?",
         "¿Qué talla es?"
        ],
        [
         "B",
         "I'm usually a medium.",
         "Normalmente soy talla mediana."
        ],
        [
         "A",
         "How about this blue dress?",
         "¿Qué tal este vestido azul?"
        ],
        [
         "B",
         "It's beautiful. Can I try it on?",
         "Es hermoso. ¿Me lo puedo probar?"
        ],
        [
         "A",
         "Of course. The fitting room is over there.",
         "Claro. El probador está allá."
        ],
        [
         "B",
         "Hmm, it's too big. Do you have a small?",
         "Mmm, me queda muy grande. ¿Tiene talla pequeña?"
        ],
        [
         "A",
         "Yes, here you are. How is it?",
         "Sí, aquí tiene. ¿Cómo le queda?"
        ],
        [
         "B",
         "It's perfect! How much is it? I'll take it.",
         "¡Perfecto! ¿Cuánto cuesta? Me lo llevo."
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "I'm",
         "looking",
         "for",
         "a",
         "blue",
         "shirt."
        ],
        "es": "Estoy buscando una camisa azul."
       },
       {
        "t": "order",
        "words": [
         "These",
         "jeans",
         "are",
         "too",
         "small."
        ],
        "es": "Estos jeans me quedan muy pequeños."
       },
       {
        "t": "dict",
        "say": "Can I try it on?"
       },
       {
        "t": "dict",
        "say": "What size are you?"
       },
       {
        "t": "mc",
        "q": "'Tenis' (zapatos deportivos) en inglés:",
        "o": [
         "tennis",
         "sneakers",
         "sandals",
         "boots"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "La chaqueta te queda perfecta. Dices:",
        "o": [
         "I'll take it.",
         "It's too big.",
         "I try it.",
         "I look for it."
        ],
        "a": 0
       },
       {
        "t": "listen",
        "say": "I need a warm sweater and black pants for work.",
        "q": "¿Qué color de pantalón necesita?",
        "o": [
         "Azul",
         "Negro",
         "Gris",
         "Café"
        ],
        "a": 1
       },
       {
        "t": "write",
        "q": "Describe la ropa que tienes puesta hoy y la que te gusta usar (mínimo 20 palabras).",
        "min": 20,
        "keys": [
         [
          "i'm wearing",
          "i wear",
          "i have"
         ],
         [
          "shirt",
          "t-shirt",
          "pants",
          "jeans",
          "dress",
          "skirt",
          "shoes",
          "sneakers",
          "jacket",
          "sweater"
         ],
         [
          "blue",
          "black",
          "white",
          "red",
          "green",
          "gray",
          "brown",
          "yellow"
         ]
        ]
       }
      ]
     }
    ],
    "quiz": [
     {
      "t": "mc",
      "q": "My wife ___ chocolate.",
      "o": [
       "love",
       "loves",
       "is love",
       "lovs"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "There ___ some apples on the table.",
      "o": [
       "is",
       "are",
       "am",
       "be"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "We don't have ___ bread.",
      "o": [
       "some",
       "any",
       "a",
       "an"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "Pides amablemente:",
      "o": [
       "I want the fish.",
       "I'd like the fish, please.",
       "Give fish.",
       "Fish me."
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "How much ___ the tickets?",
      "o": [
       "is",
       "are",
       "does",
       "do"
      ],
      "a": 1
     },
     {
      "t": "fill",
      "q": "Can we have the ___, please? (la cuenta)",
      "ans": [
       "bill",
       "check"
      ]
     },
     {
      "t": "listen",
      "say": "I'd like two coffees and one orange juice, please.",
      "q": "¿Cuántos cafés pide?",
      "o": [
       "1",
       "2",
       "3",
       "Ninguno"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "This phone costs four hundred and fifty dollars.",
      "q": "¿Cuánto cuesta el teléfono?",
      "o": [
       "$415",
       "$540",
       "$450",
       "$4.50"
      ],
      "a": 2
     },
     {
      "t": "write",
      "q": "Escribe qué te gusta comer y qué hay en tu nevera (mínimo 20 palabras).",
      "min": 20,
      "keys": [
       [
        "i like",
        "i love",
        "i don't like"
       ],
       [
        "there is",
        "there are",
        "there isn't",
        "there aren't"
       ],
       [
        "some",
        "any"
       ]
      ]
     },
     {
      "t": "oral",
      "text": "Can I have the menu, please?"
     },
     {
      "t": "oral",
      "text": "There isn't any milk in the fridge."
     }
    ],
    "pool": [
     {
      "t": "mc",
      "q": "My children ___ pizza.",
      "o": [
       "loves",
       "love",
       "is love",
       "loving"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "There ___ any milk.",
      "o": [
       "aren't",
       "isn't",
       "not",
       "don't"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "We have ___ apples, but we don't have ___ oranges.",
      "o": [
       "any / some",
       "some / any",
       "a / an",
       "some / some"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "Para pedir en el restaurante:",
      "o": [
       "Can I have the soup, please?",
       "I want soup now.",
       "Give soup.",
       "Soup for me give."
      ],
      "a": 0
     },
     {
      "t": "mc",
      "q": "How much ___ this jacket?",
      "o": [
       "are",
       "is",
       "do",
       "does"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "These pants are too big. Do you have a ___ size?",
      "o": [
       "more small",
       "smaller",
       "small",
       "smallest"
      ],
      "a": 1
     },
     {
      "t": "fill",
      "q": "—Anything to ___? —A lemonade, please.",
      "ans": [
       "drink"
      ]
     },
     {
      "t": "fill",
      "q": "Excuse me, can I ___ on this dress?",
      "ans": [
       "try"
      ]
     },
     {
      "t": "listen",
      "say": "I'd like a chicken sandwich and a small coffee, please. No sugar.",
      "q": "¿Qué NO quiere en el café?",
      "o": [
       "Leche",
       "Azúcar",
       "Hielo",
       "Crema"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "These shoes are sixty-nine dollars and the T-shirt is fifteen.",
      "q": "¿Cuánto cuesta la camiseta?",
      "o": [
       "$50",
       "$15",
       "$69",
       "$16"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "Is there any bread? No, there isn't, but there are some eggs.",
      "q": "¿Qué hay?",
      "o": [
       "Pan",
       "Huevos",
       "Leche",
       "Nada"
      ],
      "a": 1
     },
     {
      "t": "write",
      "q": "Escribe un diálogo corto en una tienda de ropa (mínimo 20 palabras): pide una prenda, la talla y el precio.",
      "min": 20,
      "keys": [
       [
        "i'm looking for",
        "i'd like",
        "can i"
       ],
       [
        "size",
        "small",
        "medium",
        "large"
       ],
       [
        "how much"
       ],
       [
        "please"
       ]
      ]
     },
     {
      "t": "oral",
      "text": "Can we have the bill, please?"
     },
     {
      "t": "oral",
      "text": "I'd like a large coffee with milk, please."
     },
     {
      "t": "oral",
      "text": "How much are these shoes?"
     }
    ]
   },
   {
    "title": "Mi ciudad, mi casa y el clima",
    "lessons": [
     {
      "title": "La casa y los lugares de la ciudad",
      "goal": "Describir tu casa y tu barrio.",
      "theory": [
       {
        "ex": [
         [
          "My house has three bedrooms.",
          "Mi casa tiene tres habitaciones."
         ],
         [
          "The kitchen is small.",
          "La cocina es pequeña."
         ],
         [
          "There's a park near my house.",
          "Hay un parque cerca de mi casa."
         ],
         [
          "There are two restaurants on my street.",
          "Hay dos restaurantes en mi calle."
         ]
        ]
       },
       {
        "p": "Lugares útiles: **bank** (banco), **hospital**, **supermarket**, **park**, **restaurant**, **school**, **store** (tienda), **pharmacy** (droguería)."
       },
       {
        "tip": "Con have/has describes lo que tiene la casa; con there is/are describes lo que hay en un lugar."
       }
      ],
      "words": [
       "house",
       "apartment",
       "room",
       "kitchen",
       "bathroom",
       "bedroom",
       "street",
       "bank",
       "hospital",
       "park"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "Donde cocinas es la:",
        "o": [
         "bedroom",
         "kitchen",
         "bathroom",
         "office"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "My apartment ___ two bathrooms.",
        "o": [
         "have",
         "has",
         "there is",
         "is"
        ],
        "a": 1,
        "x": "It (my apartment) → has."
       },
       {
        "t": "mc",
        "q": "Donde sacas dinero:",
        "o": [
         "park",
         "bank",
         "school",
         "hospital"
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "There ___ two schools in my neighbourhood.",
        "ans": [
         "are"
        ],
        "x": "Plural → there are."
       },
       {
        "t": "listen",
        "say": "I live in an apartment. It has two bedrooms, a small kitchen and a big living room.",
        "q": "¿Qué es grande?",
        "o": [
         "La cocina",
         "La sala",
         "El baño",
         "La habitación"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "My house has three bedrooms and a small kitchen."
       }
      ],
      "id": "a1-la-casa-y-los-lugares-de-la-ciudad",
      "exam": {
       "t": "mc",
       "q": "Where do you wash your hands?",
       "o": [
        "In the bedroom",
        "In the bathroom",
        "In the garden",
        "In the bank"
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "Where can you buy medicine?",
       "o": [
        "At the bank",
        "At the pharmacy",
        "At the park",
        "At the library"
       ],
       "a": 1
      },
      "vocab": [
       [
        "house",
        "sustantivo",
        "casa",
        "Their house is big."
       ],
       [
        "apartment",
        "sustantivo",
        "apartamento",
        "I live in an apartment."
       ],
       [
        "living room",
        "sustantivo",
        "sala",
        "The TV is in the living room."
       ],
       [
        "bedroom",
        "sustantivo",
        "habitación, alcoba",
        "My bedroom is small."
       ],
       [
        "bathroom",
        "sustantivo",
        "baño",
        "There are two bathrooms."
       ],
       [
        "kitchen",
        "sustantivo",
        "cocina",
        "The kitchen is new."
       ],
       [
        "dining room",
        "sustantivo",
        "comedor",
        "We eat in the dining room."
       ],
       [
        "balcony",
        "sustantivo",
        "balcón",
        "I have plants on the balcony."
       ],
       [
        "floor",
        "sustantivo",
        "piso",
        "I live on the third floor."
       ],
       [
        "stairs",
        "sustantivo",
        "escaleras",
        "Take the stairs."
       ],
       [
        "elevator",
        "sustantivo",
        "ascensor",
        "The elevator is broken."
       ],
       [
        "neighborhood",
        "sustantivo",
        "barrio",
        "My neighborhood is quiet."
       ],
       [
        "supermarket",
        "sustantivo",
        "supermercado",
        "The supermarket is open."
       ],
       [
        "pharmacy",
        "sustantivo",
        "droguería",
        "Is there a pharmacy near here?"
       ],
       [
        "bank",
        "sustantivo",
        "banco",
        "The bank opens at nine."
       ],
       [
        "hospital",
        "sustantivo",
        "hospital",
        "She works in a hospital."
       ],
       [
        "park",
        "sustantivo",
        "parque",
        "The kids play in the park."
       ],
       [
        "mall",
        "sustantivo",
        "centro comercial",
        "Let's go to the mall."
       ],
       [
        "quiet",
        "adjetivo",
        "tranquilo",
        "It's a quiet street."
       ],
       [
        "noisy",
        "adjetivo",
        "ruidoso",
        "My street is noisy."
       ]
      ],
      "dialogue": {
       "title": "Mostrando el apartamento nuevo",
       "scene": "Juliana le muestra a su amiga Kelly el apartamento al que se acaba de mudar.",
       "a": "Kelly",
       "b": "Juliana",
       "lines": [
        [
         "A",
         "Wow, this apartment is beautiful! How many bedrooms are there?",
         "¡Wow, este apartamento es hermoso! ¿Cuántas habitaciones hay?"
        ],
        [
         "B",
         "There are two bedrooms and two bathrooms.",
         "Hay dos habitaciones y dos baños."
        ],
        [
         "A",
         "The living room is very big.",
         "La sala es muy grande."
        ],
        [
         "B",
         "Yes, and look, there's a balcony with a great view.",
         "Sí, y mira, hay un balcón con una vista genial."
        ],
        [
         "A",
         "Is the kitchen new?",
         "¿La cocina es nueva?"
        ],
        [
         "B",
         "Yes, it is. But it's small.",
         "Sí. Pero es pequeña."
        ],
        [
         "A",
         "What floor is it?",
         "¿En qué piso es?"
        ],
        [
         "B",
         "The eighth floor. Thank God there's an elevator!",
         "El octavo. ¡Gracias a Dios hay ascensor!"
        ],
        [
         "A",
         "Is the neighborhood quiet?",
         "¿El barrio es tranquilo?"
        ],
        [
         "B",
         "Very quiet. And there's a supermarket and a pharmacy on the corner.",
         "Muy tranquilo. Y hay un supermercado y una droguería en la esquina."
        ],
        [
         "A",
         "Is there a park near here?",
         "¿Hay un parque cerca?"
        ],
        [
         "B",
         "Yes, there's a big park two blocks away. I run there every morning.",
         "Sí, hay un parque grande a dos cuadras. Corro ahí todas las mañanas."
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "There",
         "are",
         "two",
         "bedrooms",
         "and",
         "a",
         "kitchen."
        ],
        "es": "Hay dos habitaciones y una cocina."
       },
       {
        "t": "order",
        "words": [
         "I",
         "live",
         "on",
         "the",
         "third",
         "floor."
        ],
        "es": "Vivo en el tercer piso."
       },
       {
        "t": "dict",
        "say": "My neighborhood is very quiet."
       },
       {
        "t": "dict",
        "say": "Is there a pharmacy near here?"
       },
       {
        "t": "mc",
        "q": "Donde ves TV con la familia:",
        "o": [
         "living room",
         "bathroom",
         "elevator",
         "balcony"
        ],
        "a": 0
       },
       {
        "t": "mc",
        "q": "Ruidoso es:",
        "o": [
         "quiet",
         "noisy",
         "busy",
         "big"
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "Our house has three bedrooms, but only one bathroom. That's a problem!",
        "q": "¿Cuántos baños tiene la casa?",
        "o": [
         "1",
         "2",
         "3",
         "0"
        ],
        "a": 0
       },
       {
        "t": "oral",
        "text": "My apartment has two bedrooms and a small kitchen."
       }
      ]
     },
     {
      "title": "Preposiciones de lugar",
      "goal": "Decir dónde están las cosas.",
      "theory": [
       {
        "ex": [
         [
          "in",
          "en, dentro de: The keys are in my bag."
         ],
         [
          "on",
          "sobre: The phone is on the table."
         ],
         [
          "under",
          "debajo de: The cat is under the bed."
         ],
         [
          "next to",
          "al lado de: The bank is next to the park."
         ],
         [
          "near",
          "cerca de: I live near the school."
         ],
         [
          "between",
          "entre: The pharmacy is between the bank and the café."
         ],
         [
          "opposite",
          "al frente de: The school is opposite the church."
         ]
        ]
       },
       {
        "tip": "Para preguntar dónde está algo: Where is...? / Where are...?"
       }
      ],
      "words": [
       "in",
       "on",
       "under",
       "next to",
       "near",
       "table",
       "bed"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "The cat is ___ the bed. (debajo)",
        "o": [
         "on",
         "in",
         "under",
         "next"
        ],
        "a": 2
       },
       {
        "t": "mc",
        "q": "The bank is ___ the supermarket. (al lado)",
        "o": [
         "next to",
         "near to",
         "in",
         "between"
        ],
        "a": 0
       },
       {
        "t": "mc",
        "q": "Where ___ my glasses?",
        "o": [
         "is",
         "are",
         "am",
         "be"
        ],
        "a": 1,
        "x": "Glasses es plural → are."
       },
       {
        "t": "fill",
        "q": "The book is ___ the table. (sobre)",
        "ans": [
         "on"
        ]
       },
       {
        "t": "listen",
        "say": "The pharmacy is between the bank and the café, opposite the park.",
        "q": "¿Qué está al frente de la droguería?",
        "o": [
         "El banco",
         "El café",
         "El parque",
         "La escuela"
        ],
        "a": 2
       },
       {
        "t": "oral",
        "text": "My phone is on the table next to the keys."
       }
      ],
      "id": "a1-preposiciones-de-lugar",
      "exam": {
       "t": "mc",
       "q": "The cat is ___ the table. (debajo)",
       "o": [
        "on",
        "in",
        "under",
        "between"
       ],
       "a": 2
      },
      "exam2": {
       "t": "mc",
       "q": "The park is ___ the school. (al frente)",
       "o": [
        "opposite",
        "between",
        "under",
        "on"
       ],
       "a": 0
      },
      "vocab": [
       [
        "in",
        "preposición",
        "en, dentro de",
        "The milk is in the fridge."
       ],
       [
        "on",
        "preposición",
        "sobre, encima de",
        "The keys are on the table."
       ],
       [
        "under",
        "preposición",
        "debajo de",
        "The shoes are under the bed."
       ],
       [
        "next to",
        "preposición",
        "al lado de",
        "The bank is next to the café."
       ],
       [
        "near",
        "preposición",
        "cerca de",
        "I live near the park."
       ],
       [
        "between",
        "preposición",
        "entre",
        "The school is between the bank and the church."
       ],
       [
        "opposite",
        "preposición",
        "al frente de",
        "The park is opposite my house."
       ],
       [
        "behind",
        "preposición",
        "detrás de",
        "The garden is behind the house."
       ],
       [
        "in front of",
        "preposición",
        "delante de",
        "The bus stops in front of the school."
       ],
       [
        "on the left",
        "expresión",
        "a la izquierda",
        "The door is on the left."
       ],
       [
        "on the right",
        "expresión",
        "a la derecha",
        "The bathroom is on the right."
       ],
       [
        "on the corner",
        "expresión",
        "en la esquina",
        "There's a café on the corner."
       ],
       [
        "sofa",
        "sustantivo",
        "sofá",
        "The cat is on the sofa."
       ],
       [
        "table",
        "sustantivo",
        "mesa",
        "Put it on the table."
       ],
       [
        "bed",
        "sustantivo",
        "cama",
        "The book is under the bed."
       ],
       [
        "shelf",
        "sustantivo",
        "repisa, estante",
        "The books are on the shelf."
       ],
       [
        "drawer",
        "sustantivo",
        "cajón",
        "The keys are in the drawer."
       ],
       [
        "wall",
        "sustantivo",
        "pared",
        "There's a picture on the wall."
       ],
       [
        "door",
        "sustantivo",
        "puerta",
        "Close the door, please."
       ],
       [
        "window",
        "sustantivo",
        "ventana",
        "The plant is next to the window."
       ]
      ],
      "dialogue": {
       "title": "¿Dónde están mis llaves?",
       "scene": "Andrés va tarde al trabajo y no encuentra sus cosas. Su esposa Carolina le ayuda.",
       "a": "Andrés",
       "b": "Carolina",
       "lines": [
        [
         "A",
         "Carolina, where are my keys? I'm late!",
         "Carolina, ¿dónde están mis llaves? ¡Voy tarde!"
        ],
        [
         "B",
         "Are they on the table?",
         "¿Están en la mesa?"
        ],
        [
         "A",
         "No, they aren't on the table.",
         "No, no están en la mesa."
        ],
        [
         "B",
         "Look in the drawer, next to the door.",
         "Busca en el cajón, al lado de la puerta."
        ],
        [
         "A",
         "Yes! They're in the drawer. Thanks! And my phone?",
         "¡Sí! Están en el cajón. ¡Gracias! ¿Y mi celular?"
        ],
        [
         "B",
         "I think it's on the sofa, under the newspaper.",
         "Creo que está en el sofá, debajo del periódico."
        ],
        [
         "A",
         "Got it. And where's my wallet?",
         "Listo. ¿Y dónde está mi billetera?"
        ],
        [
         "B",
         "It's on the shelf, between the books and the plant.",
         "Está en la repisa, entre los libros y la planta."
        ],
        [
         "A",
         "Perfect. Where's the car? In front of the house?",
         "Perfecto. ¿Dónde está el carro? ¿Delante de la casa?"
        ],
        [
         "B",
         "No, it's behind the house, in the garage.",
         "No, está detrás de la casa, en el garaje."
        ],
        [
         "A",
         "OK, I have everything. Bye, love!",
         "Bueno, tengo todo. ¡Chao, amor!"
        ],
        [
         "B",
         "Wait! Your laptop is under the chair!",
         "¡Espera! ¡Tu portátil está debajo de la silla!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "The",
         "keys",
         "are",
         "in",
         "the",
         "drawer."
        ],
        "es": "Las llaves están en el cajón."
       },
       {
        "t": "order",
        "words": [
         "There's",
         "a",
         "picture",
         "on",
         "the",
         "wall."
        ],
        "es": "Hay un cuadro en la pared."
       },
       {
        "t": "dict",
        "say": "The cat is under the bed."
       },
       {
        "t": "dict",
        "say": "The bank is next to the supermarket."
       },
       {
        "t": "mc",
        "q": "'Detrás de la casa' es:",
        "o": [
         "in front of the house",
         "behind the house",
         "opposite the house",
         "next the house"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "The café is ___ the corner.",
        "o": [
         "in",
         "on",
         "at the",
         "under"
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "Your glasses are on the shelf, next to the window.",
        "q": "¿Al lado de qué están las gafas?",
        "o": [
         "La puerta",
         "La ventana",
         "La cama",
         "La mesa"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "My phone is on the sofa, next to the window."
       }
      ]
     },
     {
      "title": "Pedir y dar direcciones",
      "goal": "Preguntar cómo llegar y entender indicaciones simples.",
      "theory": [
       {
        "ex": [
         [
          "Excuse me, where is the station?",
          "Disculpe, ¿dónde está la estación?"
         ],
         [
          "Is there a bank near here?",
          "¿Hay un banco cerca?"
         ],
         [
          "Go straight.",
          "Siga derecho."
         ],
         [
          "Turn left / Turn right.",
          "Gire a la izquierda / derecha."
         ],
         [
          "It's on the left / on the right.",
          "Está a la izquierda / derecha."
         ],
         [
          "It's on the corner.",
          "Está en la esquina."
         ]
        ]
       },
       {
        "tip": "Empieza siempre con Excuse me para sonar amable."
       }
      ],
      "reading": 4,
      "words": [
       "Excuse me",
       "Where are you from?",
       "street",
       "city",
       "near"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "'Gire a la derecha' es:",
        "o": [
         "Turn left",
         "Go straight",
         "Turn right",
         "Stop right"
        ],
        "a": 2
       },
       {
        "t": "mc",
        "q": "Para preguntar amablemente empiezas con:",
        "o": [
         "Hey you!",
         "Excuse me,",
         "Listen,",
         "Give me"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "'Siga derecho' es:",
        "o": [
         "Go right",
         "Go straight",
         "Turn straight",
         "Go left"
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "The bank is ___ the left.",
        "ans": [
         "on"
        ],
        "x": "on the left / on the right."
       },
       {
        "t": "listen",
        "say": "Go straight and turn left at the church. The hotel is on the right.",
        "q": "¿Dónde gira?",
        "o": [
         "En el banco",
         "En la iglesia",
         "En el parque",
         "En el hotel"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Excuse me, is there a pharmacy near here?"
       }
      ],
      "id": "a1-pedir-y-dar-direcciones",
      "exam": {
       "t": "mc",
       "q": "'Gire a la izquierda en la esquina':",
       "o": [
        "Turn right in the corner.",
        "Turn left at the corner.",
        "Go left the corner.",
        "Turn to left on corner."
       ],
       "a": 1
      },
      "exam2": {
       "t": "listen",
       "say": "Go straight, turn right, and the museum is on your left.",
       "q": "¿Dónde queda el museo?",
       "o": [
        "A la derecha",
        "A la izquierda",
        "Al frente",
        "Detrás"
       ],
       "a": 1
      },
      "vocab": [
       [
        "Excuse me",
        "expresión",
        "disculpe",
        "Excuse me, where is the station?"
       ],
       [
        "Where is...?",
        "expresión",
        "¿Dónde está...?",
        "Where is the museum?"
       ],
       [
        "How do I get to...?",
        "expresión",
        "¿Cómo llego a...?",
        "How do I get to the airport?"
       ],
       [
        "go straight",
        "expresión",
        "siga derecho",
        "Go straight for two blocks."
       ],
       [
        "turn left",
        "expresión",
        "gire a la izquierda",
        "Turn left at the bank."
       ],
       [
        "turn right",
        "expresión",
        "gire a la derecha",
        "Turn right at the corner."
       ],
       [
        "cross",
        "verbo",
        "cruzar",
        "Cross the street."
       ],
       [
        "block",
        "sustantivo",
        "cuadra",
        "It's two blocks from here."
       ],
       [
        "corner",
        "sustantivo",
        "esquina",
        "Turn left at the corner."
       ],
       [
        "traffic light",
        "sustantivo",
        "semáforo",
        "Turn right at the traffic light."
       ],
       [
        "street",
        "sustantivo",
        "calle",
        "Go down this street."
       ],
       [
        "avenue",
        "sustantivo",
        "avenida",
        "It's on Seventh Avenue."
       ],
       [
        "station",
        "sustantivo",
        "estación",
        "The metro station is near."
       ],
       [
        "bus stop",
        "sustantivo",
        "parada de bus",
        "The bus stop is over there."
       ],
       [
        "museum",
        "sustantivo",
        "museo",
        "The museum is open today."
       ],
       [
        "church",
        "sustantivo",
        "iglesia",
        "Turn left at the church."
       ],
       [
        "far",
        "adjetivo",
        "lejos",
        "Is it far?"
       ],
       [
        "near / close",
        "adjetivo",
        "cerca",
        "It's very close."
       ],
       [
        "walk",
        "verbo",
        "caminar",
        "It's a five-minute walk."
       ],
       [
        "You can't miss it.",
        "expresión",
        "No tiene pérdida.",
        "It's on the right. You can't miss it."
       ]
      ],
      "dialogue": {
       "title": "Perdido en el centro",
       "scene": "Un turista, Peter, busca el museo y le pregunta a Sandra en la calle.",
       "a": "Peter",
       "b": "Sandra",
       "lines": [
        [
         "A",
         "Excuse me. How do I get to the Gold Museum?",
         "Disculpe. ¿Cómo llego al Museo del Oro?"
        ],
        [
         "B",
         "The Gold Museum? Is it your first time in Bogotá?",
         "¿El Museo del Oro? ¿Es su primera vez en Bogotá?"
        ],
        [
         "A",
         "Yes, it is. Is it far?",
         "Sí. ¿Es lejos?"
        ],
        [
         "B",
         "No, it's close. It's a ten-minute walk.",
         "No, es cerca. Son diez minutos caminando."
        ],
        [
         "A",
         "Great. Which way?",
         "Genial. ¿Por dónde?"
        ],
        [
         "B",
         "Go straight down this street for three blocks.",
         "Siga derecho por esta calle tres cuadras."
        ],
        [
         "A",
         "Three blocks. OK.",
         "Tres cuadras. Bueno."
        ],
        [
         "B",
         "At the traffic light, turn left.",
         "En el semáforo, gire a la izquierda."
        ],
        [
         "A",
         "Turn left at the traffic light...",
         "Gire a la izquierda en el semáforo..."
        ],
        [
         "B",
         "Then cross the avenue. The museum is on the right, next to a park.",
         "Luego cruce la avenida. El museo está a la derecha, al lado de un parque."
        ],
        [
         "A",
         "Thank you so much!",
         "¡Muchas gracias!"
        ],
        [
         "B",
         "You're welcome. You can't miss it. Enjoy the museum!",
         "Con gusto. No tiene pérdida. ¡Disfrute el museo!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "How",
         "do",
         "I",
         "get",
         "to",
         "the",
         "station?"
        ],
        "es": "¿Cómo llego a la estación?"
       },
       {
        "t": "order",
        "words": [
         "Turn",
         "left",
         "at",
         "the",
         "traffic",
         "light."
        ],
        "es": "Gire a la izquierda en el semáforo."
       },
       {
        "t": "dict",
        "say": "Go straight for two blocks."
       },
       {
        "t": "dict",
        "say": "Is it far from here?"
       },
       {
        "t": "mc",
        "q": "'No tiene pérdida' es:",
        "o": [
         "You can't miss it.",
         "It's not lost.",
         "Don't lose it.",
         "You can find."
        ],
        "a": 0
       },
       {
        "t": "mc",
        "q": "'Cruce la calle' es:",
        "o": [
         "Turn the street.",
         "Cross the street.",
         "Go the street.",
         "Walk to street."
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "The bus stop is two blocks from here. Turn right at the church.",
        "q": "¿Dónde gira?",
        "o": [
         "En el semáforo",
         "En la iglesia",
         "En el banco",
         "En la esquina"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Excuse me, how do I get to the museum?"
       }
      ]
     },
     {
      "title": "Can y can't",
      "goal": "Hablar de habilidades y pedir permiso.",
      "theory": [
       {
        "p": "**can** = poder / saber hacer algo. Es igual para todas las personas y el verbo va sin to:"
       },
       {
        "ex": [
         [
          "I can swim.",
          "Sé nadar."
         ],
         [
          "She can speak three languages.",
          "Ella habla tres idiomas."
         ],
         [
          "I can't (cannot) drive.",
          "No sé manejar."
         ],
         [
          "Can you help me?",
          "¿Me puedes ayudar?"
         ],
         [
          "Can I open the window?",
          "¿Puedo abrir la ventana?"
         ]
        ]
       },
       {
        "tip": "No se dice 'She cans' ni 'I can to swim'. Es: She can swim."
       }
      ],
      "words": [
       "can",
       "help",
       "open",
       "close",
       "speak"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "My daughter ___ play the piano.",
        "o": [
         "cans",
         "can",
         "can to",
         "is can"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "___ I use your phone?",
        "o": [
         "Do",
         "Can",
         "Am",
         "Does"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "He can't ___.",
        "o": [
         "swims",
         "to swim",
         "swim",
         "swimming"
        ],
        "a": 2
       },
       {
        "t": "fill",
        "q": "I ___ cook. I always burn the food. (no puedo)",
        "ans": [
         "can't",
         "cannot"
        ]
       },
       {
        "t": "listen",
        "say": "I can speak English and French, but I can't speak German.",
        "q": "¿Qué idioma NO habla?",
        "o": [
         "Inglés",
         "Francés",
         "Alemán",
         "Español"
        ],
        "a": 2
       },
       {
        "t": "oral",
        "text": "Can you help me, please?"
       }
      ],
      "id": "a1-can-y-can-t",
      "exam": {
       "t": "mc",
       "q": "My son can ___ very well.",
       "o": [
        "swims",
        "to swim",
        "swim",
        "swimming"
       ],
       "a": 2
      },
      "exam2": {
       "t": "mc",
       "q": "___ you speak French?",
       "o": [
        "Do",
        "Can",
        "Are",
        "Does"
       ],
       "a": 1
      },
      "vocab": [
       [
        "can",
        "verbo modal",
        "poder, saber (hacer)",
        "I can swim."
       ],
       [
        "can't",
        "verbo modal",
        "no poder, no saber",
        "I can't drive."
       ],
       [
        "swim",
        "verbo",
        "nadar",
        "Can you swim?"
       ],
       [
        "drive",
        "verbo",
        "manejar",
        "She can drive a truck."
       ],
       [
        "cook",
        "verbo",
        "cocinar",
        "My husband can cook very well."
       ],
       [
        "dance",
        "verbo",
        "bailar",
        "Can you dance salsa?"
       ],
       [
        "sing",
        "verbo",
        "cantar",
        "I can't sing."
       ],
       [
        "play the guitar",
        "expresión",
        "tocar la guitarra",
        "He can play the guitar."
       ],
       [
        "ride a bike",
        "expresión",
        "montar en bicicleta",
        "My son can ride a bike."
       ],
       [
        "speak",
        "verbo",
        "hablar",
        "I can speak two languages."
       ],
       [
        "use a computer",
        "expresión",
        "usar un computador",
        "Can you use a computer?"
       ],
       [
        "fix",
        "verbo",
        "arreglar",
        "Can you fix my phone?"
       ],
       [
        "help",
        "verbo",
        "ayudar",
        "Can you help me?"
       ],
       [
        "borrow",
        "verbo",
        "pedir prestado",
        "Can I borrow your pen?"
       ],
       [
        "open",
        "verbo",
        "abrir",
        "Can I open the window?"
       ],
       [
        "sit",
        "verbo",
        "sentarse",
        "Can I sit here?"
       ],
       [
        "well",
        "adverbio",
        "bien",
        "She can dance very well."
       ],
       [
        "a little",
        "expresión",
        "un poco",
        "I can speak a little French."
       ],
       [
        "Of course!",
        "expresión",
        "¡Claro!",
        "—Can I sit here? —Of course!"
       ],
       [
        "Sorry, you can't.",
        "expresión",
        "Lo siento, no se puede.",
        "—Can I smoke here? —Sorry, you can't."
       ]
      ],
      "dialogue": {
       "title": "Entrevista de trabajo en un hotel",
       "scene": "La gerente de un hotel entrevista a Mateo para un puesto en recepción.",
       "a": "Gerente",
       "b": "Mateo",
       "lines": [
        [
         "A",
         "Thank you for coming, Mateo. Can you speak English?",
         "Gracias por venir, Mateo. ¿Habla inglés?"
        ],
        [
         "B",
         "Yes, I can. I can speak English and a little French.",
         "Sí. Hablo inglés y un poco de francés."
        ],
        [
         "A",
         "Excellent. Can you use a computer?",
         "Excelente. ¿Sabe usar un computador?"
        ],
        [
         "B",
         "Yes, of course. I can use Excel and email very well.",
         "Sí, claro. Sé usar Excel y el correo muy bien."
        ],
        [
         "A",
         "Can you drive?",
         "¿Sabe manejar?"
        ],
        [
         "B",
         "Yes, I can. I have a license.",
         "Sí. Tengo licencia."
        ],
        [
         "A",
         "Good. Sometimes we take guests to the airport. Can you work at night?",
         "Bien. A veces llevamos huéspedes al aeropuerto. ¿Puede trabajar de noche?"
        ],
        [
         "B",
         "Yes, I can, but I can't work on Sundays.",
         "Sí, pero no puedo trabajar los domingos."
        ],
        [
         "A",
         "No problem. Can you start next Monday?",
         "No hay problema. ¿Puede empezar el próximo lunes?"
        ],
        [
         "B",
         "Yes! Can I ask a question?",
         "¡Sí! ¿Puedo hacer una pregunta?"
        ],
        [
         "A",
         "Of course.",
         "Claro."
        ],
        [
         "B",
         "Can I wear my own shoes, or is there a uniform?",
         "¿Puedo usar mis propios zapatos, o hay uniforme?"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "Can",
         "you",
         "help",
         "me,",
         "please?"
        ],
        "es": "¿Me puedes ayudar, por favor?"
       },
       {
        "t": "order",
        "words": [
         "I",
         "can't",
         "play",
         "the",
         "guitar."
        ],
        "es": "No sé tocar la guitarra."
       },
       {
        "t": "dict",
        "say": "Can I borrow your pen?"
       },
       {
        "t": "dict",
        "say": "She can dance very well."
       },
       {
        "t": "mc",
        "q": "—Can I sit here? —___",
        "o": [
         "Of course!",
         "Yes, I can sit.",
         "No, I don't.",
         "Yes, you sit."
        ],
        "a": 0
       },
       {
        "t": "mc",
        "q": "'¿Me presta su bicicleta?':",
        "o": [
         "Can I lend your bike?",
         "Can I borrow your bike?",
         "Can you borrow me your bike?",
         "Do I borrow your bike?"
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "My grandmother can't use a computer, but she can cook amazing food.",
        "q": "¿Qué NO sabe hacer la abuela?",
        "o": [
         "Cocinar",
         "Usar un computador",
         "Bailar",
         "Manejar"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I can speak Spanish and I can cook, but I can't sing."
       }
      ]
     },
     {
      "id": "a1-clima",
      "title": "El clima y las estaciones",
      "goal": "Hablar del clima y de las estaciones del año.",
      "theory": [
       {
        "ex": [
         [
          "What's the weather like?",
          "¿Cómo está el clima?"
         ],
         [
          "It's sunny.",
          "Está soleado."
         ],
         [
          "It's raining. / It's rainy.",
          "Está lloviendo. / Está lluvioso."
         ],
         [
          "It's cloudy.",
          "Está nublado."
         ],
         [
          "It's windy.",
          "Hace viento."
         ],
         [
          "It's hot / warm / cold.",
          "Hace calor / está templado / hace frío."
         ]
        ]
       },
       {
        "p": "Estaciones: **spring** (primavera), **summer** (verano), **autumn / fall** (otoño), **winter** (invierno). Se usa **in**: in summer, in winter."
       },
       {
        "tip": "Para el clima siempre se empieza con It: It's cold (no 'Is cold' ni 'Makes cold')."
       }
      ],
      "words": [
       "weather",
       "hot",
       "cold"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "'Hace frío' es:",
        "o": [
         "Is cold.",
         "It's cold.",
         "Makes cold.",
         "It has cold."
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "What's the weather ___ today?",
        "o": [
         "like",
         "as",
         "how",
         "is"
        ],
        "a": 0
       },
       {
        "t": "mc",
        "q": "It snows a lot ___ winter in Canada.",
        "o": [
         "on",
         "at",
         "in",
         "the"
        ],
        "a": 2
       },
       {
        "t": "fill",
        "q": "There are clouds. It's ___.",
        "ans": [
         "cloudy"
        ]
       },
       {
        "t": "listen",
        "say": "Today it's sunny and hot in Cartagena, but tomorrow it's going to rain.",
        "q": "¿Cómo está el clima hoy?",
        "o": [
         "Lluvioso",
         "Soleado y caluroso",
         "Frío",
         "Nublado"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Today it's sunny and very hot."
       }
      ],
      "exam": {
       "t": "listen",
       "say": "In Bogotá it's often cloudy and cold in the morning.",
       "q": "¿Cómo es el clima en Bogotá en la mañana?",
       "o": [
        "Soleado y caliente",
        "Nublado y frío",
        "Lluvioso y caliente",
        "Con viento"
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "It's raining. Take an ___.",
       "o": [
        "jacket",
        "umbrella",
        "sunglasses",
        "T-shirt"
       ],
       "a": 1
      },
      "vocab": [
       [
        "weather",
        "sustantivo",
        "clima, tiempo",
        "What's the weather like?"
       ],
       [
        "sunny",
        "adjetivo",
        "soleado",
        "It's sunny today."
       ],
       [
        "rainy",
        "adjetivo",
        "lluvioso",
        "It's rainy in April."
       ],
       [
        "cloudy",
        "adjetivo",
        "nublado",
        "It's cloudy this morning."
       ],
       [
        "windy",
        "adjetivo",
        "con viento",
        "It's very windy."
       ],
       [
        "hot",
        "adjetivo",
        "caliente, caluroso",
        "It's hot in Cartagena."
       ],
       [
        "warm",
        "adjetivo",
        "templado, cálido",
        "It's warm in Medellín."
       ],
       [
        "cold",
        "adjetivo",
        "frío",
        "It's cold in Bogotá."
       ],
       [
        "rain",
        "verbo / sustantivo",
        "llover; lluvia",
        "It rains a lot here."
       ],
       [
        "snow",
        "verbo / sustantivo",
        "nevar; nieve",
        "It snows in Canada."
       ],
       [
        "storm",
        "sustantivo",
        "tormenta",
        "There's a storm tonight."
       ],
       [
        "temperature",
        "sustantivo",
        "temperatura",
        "The temperature is 25 degrees."
       ],
       [
        "degrees",
        "sustantivo",
        "grados",
        "It's 30 degrees."
       ],
       [
        "spring",
        "sustantivo",
        "primavera",
        "Flowers grow in spring."
       ],
       [
        "summer",
        "sustantivo",
        "verano",
        "We go to the beach in summer."
       ],
       [
        "fall / autumn",
        "sustantivo",
        "otoño",
        "The leaves fall in autumn."
       ],
       [
        "winter",
        "sustantivo",
        "invierno",
        "Winter is cold in New York."
       ],
       [
        "season",
        "sustantivo",
        "estación (del año)",
        "My favorite season is summer."
       ],
       [
        "umbrella",
        "sustantivo",
        "paraguas",
        "Take an umbrella."
       ],
       [
        "sunglasses",
        "sustantivo",
        "gafas de sol",
        "Don't forget your sunglasses."
       ]
      ],
      "dialogue": {
       "title": "Planeando un viaje",
       "scene": "Mónica y su hermano Iván hablan por teléfono sobre el clima antes de un viaje.",
       "a": "Mónica",
       "b": "Iván",
       "lines": [
        [
         "A",
         "Hi, Iván! What's the weather like in Cartagena?",
         "¡Hola, Iván! ¿Cómo está el clima en Cartagena?"
        ],
        [
         "B",
         "It's very hot and sunny. It's thirty-two degrees today!",
         "Muy caliente y soleado. ¡Hoy hace treinta y dos grados!"
        ],
        [
         "A",
         "Wow. Here in Bogotá it's cold and rainy.",
         "Wow. Aquí en Bogotá está frío y lluvioso."
        ],
        [
         "B",
         "Is it raining now?",
         "¿Está lloviendo ahora?"
        ],
        [
         "A",
         "Yes, and it's windy too. I need my jacket and an umbrella.",
         "Sí, y también hace viento. Necesito mi chaqueta y un paraguas."
        ],
        [
         "B",
         "Come to Cartagena! The weather is perfect for the beach.",
         "¡Vente a Cartagena! El clima está perfecto para la playa."
        ],
        [
         "A",
         "That's the plan! What clothes do I need?",
         "¡Ese es el plan! ¿Qué ropa necesito?"
        ],
        [
         "B",
         "T-shirts, shorts, sandals and sunglasses.",
         "Camisetas, pantalonetas, sandalias y gafas de sol."
        ],
        [
         "A",
         "Does it rain a lot there?",
         "¿Llueve mucho allá?"
        ],
        [
         "B",
         "Sometimes in the afternoon, but only for an hour.",
         "A veces en la tarde, pero solo una hora."
        ],
        [
         "A",
         "Great. And what's your favorite season?",
         "Genial. ¿Y cuál es tu época favorita?"
        ],
        [
         "B",
         "Here we don't have seasons, but I love December. It's sunny and windy!",
         "Aquí no tenemos estaciones, pero me encanta diciembre. ¡Es soleado y con brisa!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "What's",
         "the",
         "weather",
         "like",
         "today?"
        ],
        "es": "¿Cómo está el clima hoy?"
       },
       {
        "t": "order",
        "words": [
         "It's",
         "cold",
         "and",
         "cloudy",
         "in",
         "Bogotá."
        ],
        "es": "Hace frío y está nublado en Bogotá."
       },
       {
        "t": "dict",
        "say": "Take an umbrella, it's raining."
       },
       {
        "t": "dict",
        "say": "My favorite season is summer."
       },
       {
        "t": "mc",
        "q": "Gafas de sol en inglés:",
        "o": [
         "sun glasses only",
         "sunglasses",
         "glasses sun",
         "sunny glasses"
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "It ___ a lot in Canada in winter. (nieva)",
        "ans": [
         "snows"
        ]
       },
       {
        "t": "listen",
        "say": "Tomorrow it's going to be cloudy in the morning and sunny in the afternoon.",
        "q": "¿Cómo estará en la tarde?",
        "o": [
         "Nublado",
         "Soleado",
         "Lluvioso",
         "Con nieve"
        ],
        "a": 1
       },
       {
        "t": "write",
        "q": "Describe el clima de tu ciudad hoy y tu estación o época favorita (mínimo 20 palabras).",
        "min": 20,
        "keys": [
         [
          "it's",
          "it is"
         ],
         [
          "sunny",
          "rainy",
          "cloudy",
          "windy",
          "hot",
          "warm",
          "cold",
          "raining"
         ],
         [
          "favorite",
          "favourite"
         ],
         [
          "because",
          "and",
          "but"
         ]
        ]
       }
      ]
     }
    ],
    "quiz": [
     {
      "t": "mc",
      "q": "The keys are ___ my bag. (dentro)",
      "o": [
       "on",
       "in",
       "under",
       "at"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "Donde duermes es el:",
      "o": [
       "kitchen",
       "bathroom",
       "bedroom",
       "office"
      ],
      "a": 2
     },
     {
      "t": "mc",
      "q": "'Gire a la izquierda':",
      "o": [
       "Turn right",
       "Turn left",
       "Go left straight",
       "Go straight"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "She ___ drive.",
      "o": [
       "can",
       "cans",
       "can to",
       "is can"
      ],
      "a": 0
     },
     {
      "t": "mc",
      "q": "The café is ___ the bank and the school.",
      "o": [
       "between",
       "next",
       "opposite to",
       "under"
      ],
      "a": 0
     },
     {
      "t": "fill",
      "q": "___ I open the window? (puedo)",
      "ans": [
       "can"
      ]
     },
     {
      "t": "listen",
      "say": "My apartment is small: one bedroom, one bathroom and a kitchen.",
      "q": "¿Cuántas habitaciones tiene?",
      "o": [
       "1",
       "2",
       "3",
       "0"
      ],
      "a": 0
     },
     {
      "t": "listen",
      "say": "Excuse me, the station is on the corner, next to the post office.",
      "q": "¿Al lado de qué está la estación?",
      "o": [
       "El banco",
       "La oficina de correos",
       "La iglesia",
       "El parque"
      ],
      "a": 1
     },
     {
      "t": "write",
      "q": "Describe tu barrio y cómo está el clima hoy (mínimo 25 palabras).",
      "min": 25,
      "keys": [
       [
        "there is",
        "there are"
       ],
       [
        "next to",
        "near",
        "opposite",
        "between",
        "on the corner"
       ],
       [
        "it's",
        "it is"
       ],
       [
        "sunny",
        "cloudy",
        "raining",
        "rainy",
        "hot",
        "cold",
        "windy"
       ]
      ]
     },
     {
      "t": "oral",
      "text": "Excuse me, where is the bank?"
     },
     {
      "t": "oral",
      "text": "I can speak Spanish and a little English."
     }
    ],
    "pool": [
     {
      "t": "mc",
      "q": "Donde preparas la comida:",
      "o": [
       "bathroom",
       "kitchen",
       "garden",
       "bedroom"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "The bank is ___ the pharmacy and the café.",
      "o": [
       "next",
       "between",
       "opposite to",
       "on"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "My keys are ___ the table. (encima)",
      "o": [
       "in",
       "under",
       "on",
       "at"
      ],
      "a": 2
     },
     {
      "t": "mc",
      "q": "'Siga derecho dos cuadras':",
      "o": [
       "Go right two blocks.",
       "Go straight for two blocks.",
       "Turn straight two blocks.",
       "Go two blocks left."
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "I ___ cook. My wife cooks.",
      "o": [
       "can't",
       "don't can",
       "not can",
       "cannot to"
      ],
      "a": 0
     },
     {
      "t": "mc",
      "q": "It's 35 degrees today. It's very ___.",
      "o": [
       "cold",
       "hot",
       "windy",
       "cloudy"
      ],
      "a": 1
     },
     {
      "t": "fill",
      "q": "___ I use your bathroom, please?",
      "ans": [
       "can"
      ]
     },
     {
      "t": "fill",
      "q": "What's the ___ like? It's sunny.",
      "ans": [
       "weather"
      ]
     },
     {
      "t": "listen",
      "say": "Turn right at the supermarket. The school is on the left, opposite the park.",
      "q": "¿Qué hay al frente de la escuela?",
      "o": [
       "El supermercado",
       "El parque",
       "El banco",
       "Una iglesia"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "Today it's cloudy and windy, so take a jacket.",
      "q": "¿Por qué debes llevar chaqueta?",
      "o": [
       "Está soleado",
       "Está nublado y hace viento",
       "Hace mucho calor",
       "Está nevando"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "I can play the guitar, but I can't sing.",
      "q": "¿Qué NO puede hacer?",
      "o": [
       "Tocar guitarra",
       "Cantar",
       "Bailar",
       "Nadar"
      ],
      "a": 1
     },
     {
      "t": "write",
      "q": "Explica a un amigo cómo llegar desde tu casa a una tienda cercana (mínimo 20 palabras).",
      "min": 20,
      "keys": [
       [
        "go straight",
        "turn left",
        "turn right"
       ],
       [
        "on the left",
        "on the right",
        "on the corner",
        "next to",
        "opposite"
       ],
       [
        "the"
       ]
      ]
     },
     {
      "t": "oral",
      "text": "Excuse me, where is the nearest pharmacy?"
     },
     {
      "t": "oral",
      "text": "Go straight and turn left at the bank."
     },
     {
      "t": "oral",
      "text": "It's cold and cloudy today."
     }
    ]
   },
   {
    "title": "Tiempo libre y el pasado",
    "lessons": [
     {
      "title": "Días, meses y fechas",
      "goal": "Decir cuándo pasan las cosas con on, in y at.",
      "theory": [
       {
        "ex": [
         [
          "on Monday, on Sunday",
          "el lunes, el domingo"
         ],
         [
          "on May 5th",
          "el 5 de mayo"
         ],
         [
          "in March, in 2025",
          "en marzo, en 2025"
         ],
         [
          "in the morning / afternoon / evening",
          "en la mañana / tarde / noche"
         ],
         [
          "at 7 o'clock, at night",
          "a las 7, en la noche"
         ]
        ]
       },
       {
        "p": "Los días y los meses se escriben **con mayúscula** en inglés: Monday, January."
       },
       {
        "ex": [
         [
          "When is your birthday?",
          "¿Cuándo es tu cumpleaños?"
         ],
         [
          "It's on July 20th.",
          "Es el 20 de julio."
         ]
        ]
       },
       {
        "tip": "Regla rápida: at para horas, on para días y fechas, in para meses, años y partes del día."
       }
      ],
      "words": [
       "Monday, Tuesday, Wednesday",
       "Thursday, Friday",
       "Saturday, Sunday",
       "January, February, March, April",
       "birthday",
       "week",
       "month"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "I have English class ___ Tuesday.",
        "o": [
         "in",
         "at",
         "on",
         "the"
        ],
        "a": 2
       },
       {
        "t": "mc",
        "q": "My birthday is ___ October.",
        "o": [
         "on",
         "in",
         "at",
         "to"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "The movie starts ___ 8 p.m.",
        "o": [
         "in",
         "on",
         "at",
         "for"
        ],
        "a": 2
       },
       {
        "t": "fill",
        "q": "I go to the gym ___ the morning.",
        "ans": [
         "in"
        ]
       },
       {
        "t": "listen",
        "say": "My birthday is on the twelfth of August.",
        "q": "¿Cuándo es el cumpleaños?",
        "o": [
         "12 de abril",
         "12 de agosto",
         "20 de agosto",
         "2 de agosto"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "My birthday is in March."
       }
      ],
      "id": "a1-dias-meses-y-fechas",
      "exam": {
       "t": "mc",
       "q": "The party is ___ Saturday ___ 8 p.m.",
       "o": [
        "in / on",
        "on / at",
        "at / in",
        "on / in"
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "I was born ___ 1985.",
       "o": [
        "on",
        "at",
        "in",
        "the"
       ],
       "a": 2
      },
      "vocab": [
       [
        "Monday",
        "sustantivo",
        "lunes",
        "I have class on Monday."
       ],
       [
        "Tuesday",
        "sustantivo",
        "martes",
        "See you on Tuesday."
       ],
       [
        "Wednesday",
        "sustantivo",
        "miércoles",
        "The meeting is on Wednesday."
       ],
       [
        "Thursday",
        "sustantivo",
        "jueves",
        "I go to the gym on Thursday."
       ],
       [
        "Friday",
        "sustantivo",
        "viernes",
        "Friday is my favorite day."
       ],
       [
        "Saturday",
        "sustantivo",
        "sábado",
        "We clean on Saturday."
       ],
       [
        "Sunday",
        "sustantivo",
        "domingo",
        "On Sunday I rest."
       ],
       [
        "weekend",
        "sustantivo",
        "fin de semana",
        "Have a nice weekend!"
       ],
       [
        "January / February / March",
        "sustantivo",
        "enero / febrero / marzo",
        "My birthday is in March."
       ],
       [
        "April / May / June",
        "sustantivo",
        "abril / mayo / junio",
        "School ends in June."
       ],
       [
        "July / August / September",
        "sustantivo",
        "julio / agosto / septiembre",
        "We travel in July."
       ],
       [
        "October / November / December",
        "sustantivo",
        "octubre / noviembre / diciembre",
        "Christmas is in December."
       ],
       [
        "first / second / third",
        "número ordinal",
        "primero / segundo / tercero",
        "May first is a holiday."
       ],
       [
        "date",
        "sustantivo",
        "fecha",
        "What's the date today?"
       ],
       [
        "calendar",
        "sustantivo",
        "calendario",
        "Check the calendar."
       ],
       [
        "appointment",
        "sustantivo",
        "cita",
        "I have an appointment on Friday."
       ],
       [
        "holiday",
        "sustantivo",
        "festivo, vacaciones",
        "Monday is a holiday."
       ],
       [
        "When is...?",
        "expresión",
        "¿Cuándo es...?",
        "When is your birthday?"
       ],
       [
        "next week",
        "expresión",
        "la próxima semana",
        "See you next week."
       ],
       [
        "today / tomorrow",
        "adverbio",
        "hoy / mañana",
        "Today is Monday, tomorrow is Tuesday."
       ]
      ],
      "dialogue": {
       "title": "Pidiendo una cita en el odontólogo",
       "scene": "Luis llama al consultorio para pedir una cita.",
       "a": "Recepcionista",
       "b": "Luis",
       "lines": [
        [
         "A",
         "Good morning, Smile Dental. How can I help you?",
         "Buenos días, Smile Dental. ¿En qué le ayudo?"
        ],
        [
         "B",
         "Hi. I'd like an appointment with Dr. Gómez, please.",
         "Hola. Quisiera una cita con el doctor Gómez, por favor."
        ],
        [
         "A",
         "Sure. Is next week OK?",
         "Claro. ¿La próxima semana está bien?"
        ],
        [
         "B",
         "Yes. Is Tuesday possible?",
         "Sí. ¿Es posible el martes?"
        ],
        [
         "A",
         "Sorry, Tuesday is full. What about Wednesday the fifteenth?",
         "Lo siento, el martes está lleno. ¿Qué tal el miércoles quince?"
        ],
        [
         "B",
         "Wednesday the fifteenth... What time?",
         "El miércoles quince... ¿A qué hora?"
        ],
        [
         "A",
         "At ten in the morning or at four in the afternoon.",
         "A las diez de la mañana o a las cuatro de la tarde."
        ],
        [
         "B",
         "Four in the afternoon, please. I work in the morning.",
         "A las cuatro de la tarde, por favor. Trabajo en la mañana."
        ],
        [
         "A",
         "Perfect. Wednesday, March fifteenth, at four p.m. What's your name?",
         "Perfecto. Miércoles 15 de marzo, a las 4 p.m. ¿Su nombre?"
        ],
        [
         "B",
         "Luis Herrera.",
         "Luis Herrera."
        ],
        [
         "A",
         "Thank you, Mr. Herrera. See you on Wednesday.",
         "Gracias, señor Herrera. Nos vemos el miércoles."
        ],
        [
         "B",
         "Thank you. Have a nice day!",
         "Gracias. ¡Que tenga buen día!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "My",
         "birthday",
         "is",
         "in",
         "October."
        ],
        "es": "Mi cumpleaños es en octubre."
       },
       {
        "t": "order",
        "words": [
         "I",
         "have",
         "an",
         "appointment",
         "on",
         "Friday."
        ],
        "es": "Tengo una cita el viernes."
       },
       {
        "t": "dict",
        "say": "Christmas is on December twenty-fifth."
       },
       {
        "t": "dict",
        "say": "See you next week."
       },
       {
        "t": "mc",
        "q": "The class is ___ Monday ___ the morning.",
        "o": [
         "on / in",
         "in / on",
         "at / in",
         "on / at"
        ],
        "a": 0
       },
       {
        "t": "mc",
        "q": "El 3 de mayo:",
        "o": [
         "May the three",
         "May third",
         "Third of the May",
         "May three day"
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "The meeting isn't on Thursday. It's on Friday at nine.",
        "q": "¿Cuándo es la reunión?",
        "o": [
         "Jueves",
         "Viernes a las 9",
         "Viernes a las 5",
         "Lunes"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "My birthday is on July twentieth."
       }
      ]
     },
     {
      "title": "Presente continuo: lo que pasa ahora",
      "goal": "Decir lo que estás haciendo en este momento.",
      "theory": [
       {
        "p": "Para acciones que pasan **ahora mismo** se usa **be + verbo con -ing**:"
       },
       {
        "ex": [
         [
          "I'm studying English now.",
          "Estoy estudiando inglés ahora."
         ],
         [
          "She's cooking dinner.",
          "Ella está cocinando la cena."
         ],
         [
          "They're watching TV.",
          "Están viendo TV."
         ],
         [
          "What are you doing?",
          "¿Qué estás haciendo?"
         ],
         [
          "I'm not working today.",
          "Hoy no estoy trabajando."
         ]
        ]
       },
       {
        "p": "Ortografía: make → making (se quita la e), run → running, swim → swimming (se dobla la consonante)."
       },
       {
        "tip": "Compara: I work every day (rutina) / I'm working now (en este momento)."
       }
      ],
      "words": [
       "now",
       "today",
       "watch",
       "cook",
       "read",
       "play"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "Shh! The baby ___.",
        "o": [
         "sleeps",
         "is sleeping",
         "sleep",
         "sleeping"
        ],
        "a": 1,
        "x": "Ahora mismo → is sleeping."
       },
       {
        "t": "mc",
        "q": "What ___ you doing?",
        "o": [
         "is",
         "do",
         "are",
         "does"
        ],
        "a": 2
       },
       {
        "t": "mc",
        "q": "I ___ to music right now.",
        "o": [
         "listen",
         "am listening",
         "listens",
         "listening"
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "She is ___ (make) a cake.",
        "ans": [
         "making"
        ],
        "x": "make → making (se quita la e)."
       },
       {
        "t": "listen",
        "say": "Where's Dad? He's in the garden. He's playing with the dog.",
        "q": "¿Qué está haciendo el papá?",
        "o": [
         "Cocinando",
         "Jugando con el perro",
         "Durmiendo",
         "Leyendo"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "I'm studying English right now."
       }
      ],
      "id": "a1-presente-continuo-lo-que-pasa-ahora",
      "exam": {
       "t": "mc",
       "q": "Be quiet! The children ___.",
       "o": [
        "sleep",
        "are sleeping",
        "sleeping",
        "is sleeping"
       ],
       "a": 1
      },
      "exam2": {
       "t": "fill",
       "q": "What are you ___ (do) right now?",
       "ans": [
        "doing"
       ]
      },
      "vocab": [
       [
        "now",
        "adverbio",
        "ahora",
        "I'm busy now."
       ],
       [
        "right now",
        "expresión",
        "ahora mismo",
        "She's sleeping right now."
       ],
       [
        "at the moment",
        "expresión",
        "en este momento",
        "I'm working at the moment."
       ],
       [
        "today",
        "adverbio",
        "hoy",
        "I'm not working today."
       ],
       [
        "Look!",
        "interjección",
        "¡Mira!",
        "Look! It's snowing."
       ],
       [
        "Listen!",
        "interjección",
        "¡Escucha!",
        "Listen! The baby is crying."
       ],
       [
        "doing",
        "verbo (-ing)",
        "haciendo",
        "What are you doing?"
       ],
       [
        "making",
        "verbo (-ing)",
        "haciendo, preparando",
        "I'm making dinner."
       ],
       [
        "cooking",
        "verbo (-ing)",
        "cocinando",
        "Dad is cooking."
       ],
       [
        "sleeping",
        "verbo (-ing)",
        "durmiendo",
        "The kids are sleeping."
       ],
       [
        "crying",
        "verbo (-ing)",
        "llorando",
        "The baby is crying."
       ],
       [
        "waiting",
        "verbo (-ing)",
        "esperando",
        "I'm waiting for the bus."
       ],
       [
        "talking",
        "verbo (-ing)",
        "hablando",
        "She's talking on the phone."
       ],
       [
        "running",
        "verbo (-ing)",
        "corriendo",
        "He's running in the park."
       ],
       [
        "sitting",
        "verbo (-ing)",
        "sentado",
        "I'm sitting on the sofa."
       ],
       [
        "wearing",
        "verbo (-ing)",
        "llevando puesto",
        "She's wearing a red dress."
       ],
       [
        "raining",
        "verbo (-ing)",
        "lloviendo",
        "It's raining again."
       ],
       [
        "homework",
        "sustantivo",
        "tarea",
        "My son is doing his homework."
       ],
       [
        "video call",
        "sustantivo",
        "videollamada",
        "I'm on a video call."
       ],
       [
        "busy",
        "adjetivo",
        "ocupado",
        "Sorry, I'm busy right now."
       ]
      ],
      "dialogue": {
       "title": "Una videollamada familiar",
       "scene": "Andrea llama a su mamá, que vive en otra ciudad, para saludarla un domingo.",
       "a": "Andrea",
       "b": "Mamá",
       "lines": [
        [
         "A",
         "Hi, Mom! What are you doing?",
         "¡Hola, mamá! ¿Qué estás haciendo?"
        ],
        [
         "B",
         "Hi, honey! I'm cooking lunch. I'm making soup.",
         "¡Hola, mi amor! Estoy cocinando el almuerzo. Estoy haciendo sopa."
        ],
        [
         "A",
         "Mmm! Where's Dad?",
         "¡Mmm! ¿Dónde está papá?"
        ],
        [
         "B",
         "He's sitting in the garden. He's reading the newspaper.",
         "Está sentado en el jardín. Está leyendo el periódico."
        ],
        [
         "A",
         "And what's that noise?",
         "¿Y qué es ese ruido?"
        ],
        [
         "B",
         "Your brother is watching football on TV.",
         "Tu hermano está viendo fútbol en la tele."
        ],
        [
         "A",
         "Ha ha, of course. Is it raining there?",
         "Ja, ja, claro. ¿Está lloviendo allá?"
        ],
        [
         "B",
         "No, it's sunny today. What are the kids doing?",
         "No, hoy está soleado. ¿Qué están haciendo los niños?"
        ],
        [
         "A",
         "Sara is doing her homework and Leo is sleeping.",
         "Sara está haciendo la tarea y Leo está durmiendo."
        ],
        [
         "B",
         "And you? Are you working today?",
         "¿Y tú? ¿Estás trabajando hoy?"
        ],
        [
         "A",
         "No, I'm not. I'm relaxing and talking to you!",
         "No. ¡Estoy descansando y hablando contigo!"
        ],
        [
         "B",
         "That's nice. I love you, honey. Talk to you later!",
         "Qué bien. Te quiero, mi amor. ¡Hablamos más tarde!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "What",
         "are",
         "you",
         "doing",
         "right",
         "now?"
        ],
        "es": "¿Qué estás haciendo ahora mismo?"
       },
       {
        "t": "order",
        "words": [
         "The",
         "baby",
         "is",
         "sleeping."
        ],
        "es": "El bebé está durmiendo."
       },
       {
        "t": "dict",
        "say": "I'm waiting for the bus."
       },
       {
        "t": "dict",
        "say": "She's talking on the phone."
       },
       {
        "t": "mc",
        "q": "'Escribir' en -ing es:",
        "o": [
         "writeing",
         "writing",
         "writting",
         "writng"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "Look! It ___.",
        "o": [
         "snows",
         "is snowing",
         "snow",
         "snowing"
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "Sorry, I can't talk now. I'm driving. I'm going to the airport.",
        "q": "¿Por qué no puede hablar?",
        "o": [
         "Está cocinando",
         "Está manejando",
         "Está durmiendo",
         "Está en una reunión"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Right now I'm sitting at home and I'm studying English."
       }
      ]
     },
     {
      "title": "Hobbies: love, like, hate + -ing",
      "goal": "Hablar de lo que te gusta hacer en tu tiempo libre.",
      "theory": [
       {
        "p": "Después de **love, like, enjoy, hate** el verbo va con **-ing**:"
       },
       {
        "ex": [
         [
          "I love reading.",
          "Me encanta leer."
         ],
         [
          "She likes dancing.",
          "A ella le gusta bailar."
         ],
         [
          "We enjoy cooking together.",
          "Disfrutamos cocinar juntos."
         ],
         [
          "I hate getting up early.",
          "Odio levantarme temprano."
         ],
         [
          "What do you do in your free time?",
          "¿Qué haces en tu tiempo libre?"
         ]
        ]
       },
       {
        "tip": "Hobbies comunes: playing football, watching movies, listening to music, going to the gym, travelling."
       }
      ],
      "words": [
       "like",
       "love",
       "play",
       "watch",
       "listen",
       "walk"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "I love ___ movies.",
        "o": [
         "watch",
         "watching",
         "to watching",
         "watches"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "She hates ___ early.",
        "o": [
         "get up",
         "getting up",
         "gets up",
         "got up"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "What do you do in your free ___?",
        "o": [
         "day",
         "hour",
         "time",
         "moment"
        ],
        "a": 2
       },
       {
        "t": "fill",
        "q": "We enjoy ___ (travel).",
        "ans": [
         "travelling",
         "traveling"
        ]
       },
       {
        "t": "listen",
        "say": "In my free time I like going to the gym and listening to podcasts.",
        "q": "¿Qué le gusta hacer?",
        "o": [
         "Leer y cocinar",
         "Ir al gimnasio y escuchar pódcasts",
         "Ver series",
         "Viajar"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "In my free time I like watching movies and cooking."
       }
      ],
      "id": "a1-hobbies-love-like-hate-ing",
      "exam": {
       "t": "mc",
       "q": "I love ___ to music.",
       "o": [
        "listen",
        "listening",
        "listens",
        "to listening"
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "He hates ___ the dishes.",
       "o": [
        "wash",
        "washing",
        "washes",
        "to washing"
       ],
       "a": 1
      },
      "vocab": [
       [
        "hobby",
        "sustantivo",
        "pasatiempo",
        "My hobby is photography."
       ],
       [
        "free time",
        "expresión",
        "tiempo libre",
        "What do you do in your free time?"
       ],
       [
        "enjoy",
        "verbo",
        "disfrutar",
        "I enjoy reading."
       ],
       [
        "reading",
        "sustantivo",
        "leer, la lectura",
        "I love reading novels."
       ],
       [
        "dancing",
        "sustantivo",
        "bailar, el baile",
        "She loves dancing salsa."
       ],
       [
        "cooking",
        "sustantivo",
        "cocinar",
        "He enjoys cooking."
       ],
       [
        "swimming",
        "sustantivo",
        "natación",
        "Swimming is good exercise."
       ],
       [
        "cycling",
        "sustantivo",
        "ciclismo",
        "I go cycling on Sundays."
       ],
       [
        "hiking",
        "sustantivo",
        "caminatas, senderismo",
        "We love hiking in the mountains."
       ],
       [
        "fishing",
        "sustantivo",
        "pesca",
        "My dad likes fishing."
       ],
       [
        "painting",
        "sustantivo",
        "pintura",
        "Painting relaxes me."
       ],
       [
        "gardening",
        "sustantivo",
        "jardinería",
        "My mom loves gardening."
       ],
       [
        "video games",
        "sustantivo",
        "videojuegos",
        "My son plays video games."
       ],
       [
        "movies",
        "sustantivo",
        "películas",
        "Do you like watching movies?"
       ],
       [
        "music",
        "sustantivo",
        "música",
        "I listen to music every day."
       ],
       [
        "play",
        "verbo",
        "jugar, tocar",
        "I play tennis on Saturdays."
       ],
       [
        "go + -ing",
        "expresión",
        "ir a (actividad)",
        "Let's go swimming!"
       ],
       [
        "don't mind",
        "verbo",
        "no me molesta",
        "I don't mind cooking."
       ],
       [
        "boring",
        "adjetivo",
        "aburrido",
        "Fishing is boring for me."
       ],
       [
        "fun",
        "adjetivo",
        "divertido",
        "Dancing is fun!"
       ]
      ],
      "dialogue": {
       "title": "Conociendo al nuevo compañero de trabajo",
       "scene": "En la hora del almuerzo, Valeria conversa con Sam, el nuevo compañero de la oficina.",
       "a": "Valeria",
       "b": "Sam",
       "lines": [
        [
         "A",
         "So, Sam, what do you do in your free time?",
         "Entonces, Sam, ¿qué haces en tu tiempo libre?"
        ],
        [
         "B",
         "I love hiking. I go hiking every weekend.",
         "Me encanta caminar en la montaña. Voy todos los fines de semana."
        ],
        [
         "A",
         "That's great! I like hiking too, but I don't go very often.",
         "¡Qué bien! A mí también me gusta, pero no voy muy seguido."
        ],
        [
         "B",
         "What about you? What are your hobbies?",
         "¿Y tú? ¿Cuáles son tus pasatiempos?"
        ],
        [
         "A",
         "I enjoy painting and dancing. I take salsa classes on Thursdays.",
         "Disfruto pintar y bailar. Tomo clases de salsa los jueves."
        ],
        [
         "B",
         "Salsa! I can't dance. I hate dancing in public!",
         "¡Salsa! Yo no sé bailar. ¡Odio bailar en público!"
        ],
        [
         "A",
         "Ha ha. It's fun! Do you like cooking?",
         "Ja, ja. ¡Es divertido! ¿Te gusta cocinar?"
        ],
        [
         "B",
         "I don't mind cooking, but I prefer eating!",
         "No me molesta cocinar, ¡pero prefiero comer!"
        ],
        [
         "A",
         "Me too. Do you play any sports?",
         "Yo también. ¿Practicas algún deporte?"
        ],
        [
         "B",
         "I play football with my friends on Tuesdays.",
         "Juego fútbol con mis amigos los martes."
        ],
        [
         "A",
         "Cool. We have a team here at the office. Do you want to join?",
         "Bien. Tenemos un equipo aquí en la oficina. ¿Quieres unirte?"
        ],
        [
         "B",
         "Yes, I'd love to!",
         "¡Sí, me encantaría!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "I",
         "enjoy",
         "reading",
         "in",
         "my",
         "free",
         "time."
        ],
        "es": "Disfruto leer en mi tiempo libre."
       },
       {
        "t": "order",
        "words": [
         "Let's",
         "go",
         "swimming",
         "on",
         "Saturday."
        ],
        "es": "Vamos a nadar el sábado."
       },
       {
        "t": "dict",
        "say": "My mom loves gardening."
       },
       {
        "t": "dict",
        "say": "I don't mind cooking."
       },
       {
        "t": "mc",
        "q": "We go ___ in the mountains.",
        "o": [
         "hike",
         "hiking",
         "to hike",
         "hikes"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "'Pescar es aburrido para mí':",
        "o": [
         "Fishing is fun for me.",
         "Fishing is boring for me.",
         "Fish is boring me.",
         "I'm boring fishing."
        ],
        "a": 1
       },
       {
        "t": "listen",
        "say": "My husband loves cycling, but I prefer swimming. We both hate running.",
        "q": "¿Qué prefiere la persona que habla?",
        "o": [
         "Ciclismo",
         "Natación",
         "Correr",
         "Caminar"
        ],
        "a": 1
       },
       {
        "t": "write",
        "q": "Escribe sobre tus pasatiempos (mínimo 25 palabras): qué te encanta, qué te gusta, qué odias y con qué frecuencia lo haces.",
        "min": 25,
        "keys": [
         [
          "i love",
          "i enjoy",
          "i like"
         ],
         [
          "i hate",
          "i don't like",
          "i don't mind"
         ],
         [
          "ing"
         ],
         [
          "always",
          "usually",
          "often",
          "sometimes",
          "never",
          "every",
          "on weekends",
          "on saturdays",
          "on sundays"
         ]
        ]
       }
      ]
     },
     {
      "id": "a1-objeto",
      "title": "Pronombres de objeto e imperativos",
      "goal": "Usar me, you, him, her, it, us, them y dar instrucciones.",
      "theory": [
       {
        "p": "Los **pronombres de objeto** van después del verbo o de una preposición:"
       },
       {
        "ex": [
         [
          "I → me: Call me tomorrow.",
          "Llámame mañana."
         ],
         [
          "he → him: I know him.",
          "Lo conozco."
         ],
         [
          "she → her: I love her.",
          "La amo."
         ],
         [
          "it → it: I like it.",
          "Me gusta."
         ],
         [
          "we → us: Help us, please.",
          "Ayúdanos, por favor."
         ],
         [
          "they → them: I see them every day.",
          "Los veo todos los días."
         ]
        ]
       },
       {
        "p": "El **imperativo** sirve para instrucciones y es el verbo solo, sin sujeto. Para negar: **Don't** + verbo."
       },
       {
        "ex": [
         [
          "Open the door.",
          "Abre la puerta."
         ],
         [
          "Sit down, please.",
          "Siéntate, por favor."
         ],
         [
          "Don't worry.",
          "No te preocupes."
         ],
         [
          "Don't touch it!",
          "¡No lo toques!"
         ]
        ]
       },
       {
        "tip": "No se dice 'I love she'; después del verbo va el pronombre de objeto: I love her."
       }
      ],
      "words": [
       "help",
       "give",
       "take",
       "open",
       "close"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "My mother is great. I love ___.",
        "o": [
         "she",
         "her",
         "hers",
         "him"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "Where are my keys? I can't find ___.",
        "o": [
         "it",
         "they",
         "them",
         "their"
        ],
        "a": 2
       },
       {
        "t": "mc",
        "q": "'No te preocupes' es:",
        "o": [
         "Not worry.",
         "Don't worry.",
         "No worry you.",
         "You don't worry."
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "Can you help ___? (nos)",
        "ans": [
         "us"
        ]
       },
       {
        "t": "listen",
        "say": "Please call me after six. Don't call me in the morning.",
        "q": "¿Cuándo NO debes llamar?",
        "o": [
         "Después de las seis",
         "En la mañana",
         "En la noche",
         "Nunca"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Please give me the book."
       }
      ],
      "exam": {
       "t": "mc",
       "q": "I have two cats. I play with ___ every day.",
       "o": [
        "they",
        "them",
        "their",
        "it"
       ],
       "a": 1
      },
      "exam2": {
       "t": "mc",
       "q": "I like your shoes. Where did you buy ___?",
       "o": [
        "it",
        "them",
        "they",
        "their"
       ],
       "a": 1
      },
      "vocab": [
       [
        "me",
        "pronombre",
        "me, a mí",
        "Call me tomorrow."
       ],
       [
        "you",
        "pronombre",
        "te, a ti",
        "I love you."
       ],
       [
        "him",
        "pronombre",
        "lo, a él",
        "I know him."
       ],
       [
        "her",
        "pronombre",
        "la, a ella",
        "Tell her the news."
       ],
       [
        "it",
        "pronombre",
        "lo, la (cosa)",
        "I like it."
       ],
       [
        "us",
        "pronombre",
        "nos, a nosotros",
        "Help us, please."
       ],
       [
        "them",
        "pronombre",
        "los, las, a ellos",
        "I see them every day."
       ],
       [
        "call",
        "verbo",
        "llamar",
        "Call me later."
       ],
       [
        "tell",
        "verbo",
        "decir, contar",
        "Tell me about your trip."
       ],
       [
        "give",
        "verbo",
        "dar",
        "Give me the keys."
       ],
       [
        "send",
        "verbo",
        "enviar",
        "Send me a message."
       ],
       [
        "show",
        "verbo",
        "mostrar",
        "Show me your photos."
       ],
       [
        "wait",
        "verbo",
        "esperar",
        "Wait for me!"
       ],
       [
        "sit down",
        "verbo",
        "sentarse",
        "Sit down, please."
       ],
       [
        "stand up",
        "verbo",
        "ponerse de pie",
        "Stand up, please."
       ],
       [
        "turn off",
        "verbo",
        "apagar",
        "Turn off your phone."
       ],
       [
        "be careful",
        "expresión",
        "ten cuidado",
        "Be careful! It's hot."
       ],
       [
        "Don't worry.",
        "expresión",
        "No te preocupes.",
        "Don't worry, it's OK."
       ],
       [
        "Don't forget...",
        "expresión",
        "No olvides...",
        "Don't forget your keys."
       ],
       [
        "Let's...",
        "expresión",
        "Vamos a...",
        "Let's go!"
       ]
      ],
      "dialogue": {
       "title": "Primer día en el gimnasio",
       "scene": "El entrenador Mike le da instrucciones a Diana en su primera clase.",
       "a": "Mike",
       "b": "Diana",
       "lines": [
        [
         "A",
         "Welcome, Diana! Please put your bag in the locker.",
         "¡Bienvenida, Diana! Por favor pon tu bolso en el casillero."
        ],
        [
         "B",
         "OK. Can I keep my phone with me?",
         "Bueno. ¿Puedo tener mi celular conmigo?"
        ],
        [
         "A",
         "Yes, but turn it off, please. Don't use it in class.",
         "Sí, pero apágalo, por favor. No lo uses en clase."
        ],
        [
         "B",
         "No problem. What do I do first?",
         "No hay problema. ¿Qué hago primero?"
        ],
        [
         "A",
         "First, stand here and watch me. Then do it with me.",
         "Primero, párate aquí y mírame. Luego hazlo conmigo."
        ],
        [
         "B",
         "Like this?",
         "¿Así?"
        ],
        [
         "A",
         "Yes, perfect! Now, sit down on the mat and stretch.",
         "¡Sí, perfecto! Ahora siéntate en el tapete y estírate."
        ],
        [
         "B",
         "Ouch! It hurts a little.",
         "¡Ay! Duele un poco."
        ],
        [
         "A",
         "Don't worry. Go slowly and be careful.",
         "No te preocupes. Ve despacio y ten cuidado."
        ],
        [
         "B",
         "Can you show me the machines?",
         "¿Me puedes mostrar las máquinas?"
        ],
        [
         "A",
         "Sure. Follow me. And don't forget to drink water!",
         "Claro. Sígueme. ¡Y no olvides tomar agua!"
        ],
        [
         "B",
         "Thanks, Mike. Call me if there's a class on Saturday.",
         "Gracias, Mike. Llámame si hay clase el sábado."
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "Please",
         "send",
         "me",
         "a",
         "message."
        ],
        "es": "Por favor envíame un mensaje."
       },
       {
        "t": "order",
        "words": [
         "Don't",
         "forget",
         "your",
         "umbrella."
        ],
        "es": "No olvides tu paraguas."
       },
       {
        "t": "dict",
        "say": "Wait for me, please."
       },
       {
        "t": "dict",
        "say": "Turn off your phone."
       },
       {
        "t": "mc",
        "q": "I love my grandparents. I visit ___ every Sunday.",
        "o": [
         "they",
         "them",
         "their",
         "us"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "'Ten cuidado' es:",
        "o": [
         "Be careful!",
         "Do careful!",
         "Have careful!",
         "Don't careful!"
        ],
        "a": 0
       },
       {
        "t": "listen",
        "say": "Please don't call me before nine. Send me a message instead.",
        "q": "¿Qué debes hacer antes de las nueve?",
        "o": [
         "Llamar",
         "Enviar un mensaje",
         "Esperar",
         "Nada"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Don't worry. Call me later, please."
       }
      ]
     },
     {
      "title": "El pasado de be: was y were",
      "goal": "Hablar de dónde estabas y cómo estuvo algo.",
      "theory": [
       {
        "p": "El pasado de **be** tiene dos formas: **was** (I, he, she, it) y **were** (you, we, they):"
       },
       {
        "ex": [
         [
          "I was at home yesterday.",
          "Ayer estuve en casa."
         ],
         [
          "The movie was great.",
          "La película estuvo genial."
         ],
         [
          "We were in Cartagena last week.",
          "Estuvimos en Cartagena la semana pasada."
         ],
         [
          "Were you tired?",
          "¿Estabas cansado?"
         ],
         [
          "It wasn't expensive.",
          "No era caro."
         ]
        ]
       },
       {
        "p": "Palabras de tiempo pasado: **yesterday** (ayer), **last week** (la semana pasada), **last year**, **two days ago** (hace dos días)."
       },
       {
        "tip": "Este tema es el puente hacia A2, donde aprenderás el pasado de todos los verbos."
       }
      ],
      "reading": 5,
      "words": [
       "yesterday",
       "be",
       "tired",
       "happy",
       "home"
      ],
      "practice": [
       {
        "t": "mc",
        "q": "I ___ sick yesterday.",
        "o": [
         "were",
         "was",
         "am",
         "is"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "They ___ at the party last night.",
        "o": [
         "was",
         "were",
         "are",
         "be"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "___ the food good?",
        "o": [
         "Were",
         "Was",
         "Is it",
         "Did"
        ],
        "a": 1
       },
       {
        "t": "fill",
        "q": "We ___ in Bogotá two weeks ago.",
        "ans": [
         "were"
        ]
       },
       {
        "t": "listen",
        "say": "Last weekend we were at the beach. The weather was beautiful.",
        "q": "¿Dónde estuvieron?",
        "o": [
         "En la montaña",
         "En la playa",
         "En casa",
         "En Bogotá"
        ],
        "a": 1
       },
       {
        "t": "oral",
        "text": "Yesterday I was at home with my family."
       }
      ],
      "id": "a1-el-pasado-de-be-was-y-were",
      "exam": {
       "t": "fill",
       "q": "Where ___ you yesterday?",
       "ans": [
        "were"
       ]
      },
      "exam2": {
       "t": "mc",
       "q": "___ you at work yesterday?",
       "o": [
        "Was",
        "Were",
        "Are",
        "Did"
       ],
       "a": 1
      },
      "vocab": [
       [
        "was",
        "verbo (pasado de be)",
        "era, estaba, fue (I, he, she, it)",
        "I was at home."
       ],
       [
        "were",
        "verbo (pasado de be)",
        "eran, estaban (you, we, they)",
        "They were happy."
       ],
       [
        "wasn't",
        "contracción",
        "no era, no estaba",
        "It wasn't expensive."
       ],
       [
        "weren't",
        "contracción",
        "no eran, no estaban",
        "We weren't at work."
       ],
       [
        "yesterday",
        "adverbio",
        "ayer",
        "I was tired yesterday."
       ],
       [
        "last night",
        "expresión",
        "anoche",
        "Where were you last night?"
       ],
       [
        "last week",
        "expresión",
        "la semana pasada",
        "We were in Cali last week."
       ],
       [
        "last year",
        "expresión",
        "el año pasado",
        "I was in Spain last year."
       ],
       [
        "ago",
        "adverbio",
        "hace (tiempo)",
        "Two days ago."
       ],
       [
        "born",
        "adjetivo",
        "nacido (be born = nacer)",
        "I was born in 1985."
       ],
       [
        "party",
        "sustantivo",
        "fiesta",
        "The party was great."
       ],
       [
        "trip",
        "sustantivo",
        "viaje",
        "How was your trip?"
       ],
       [
        "great",
        "adjetivo",
        "genial, excelente",
        "It was a great day."
       ],
       [
        "terrible",
        "adjetivo",
        "terrible",
        "The traffic was terrible."
       ],
       [
        "amazing",
        "adjetivo",
        "increíble",
        "The concert was amazing."
       ],
       [
        "crowded",
        "adjetivo",
        "lleno de gente",
        "The beach was crowded."
       ],
       [
        "How was...?",
        "expresión",
        "¿Cómo estuvo...?",
        "How was your weekend?"
       ],
       [
        "beach",
        "sustantivo",
        "playa",
        "We were at the beach."
       ],
       [
        "concert",
        "sustantivo",
        "concierto",
        "The concert was on Saturday."
       ],
       [
        "sick",
        "adjetivo",
        "enfermo",
        "I was sick last week."
       ]
      ],
      "dialogue": {
       "title": "¿Cómo estuvo tu fin de semana?",
       "scene": "El lunes en la oficina, Natalia le pregunta a su compañero Óscar por su fin de semana.",
       "a": "Natalia",
       "b": "Óscar",
       "lines": [
        [
         "A",
         "Good morning, Óscar! How was your weekend?",
         "¡Buenos días, Óscar! ¿Cómo estuvo tu fin de semana?"
        ],
        [
         "B",
         "It was amazing! I was in Santa Marta.",
         "¡Increíble! Estuve en Santa Marta."
        ],
        [
         "A",
         "Really? Were you with your family?",
         "¿En serio? ¿Estabas con tu familia?"
        ],
        [
         "B",
         "Yes, my wife and my kids were with me.",
         "Sí, mi esposa y mis hijos estaban conmigo."
        ],
        [
         "A",
         "How was the weather?",
         "¿Cómo estuvo el clima?"
        ],
        [
         "B",
         "It was hot and sunny. The water was perfect.",
         "Caliente y soleado. El agua estaba perfecta."
        ],
        [
         "A",
         "Was the beach crowded?",
         "¿La playa estaba llena?"
        ],
        [
         "B",
         "Yes, it was. It was a holiday weekend. And you? Where were you?",
         "Sí. Era fin de semana festivo. ¿Y tú? ¿Dónde estuviste?"
        ],
        [
         "A",
         "I was at home. I was sick on Saturday.",
         "Estuve en casa. Estuve enferma el sábado."
        ],
        [
         "B",
         "Oh no! Are you OK now?",
         "¡Oh no! ¿Ya estás bien?"
        ],
        [
         "A",
         "Yes, I'm fine now. On Sunday I was at a concert with my sister.",
         "Sí, ya estoy bien. El domingo estuve en un concierto con mi hermana."
        ],
        [
         "B",
         "Cool! Was it good?",
         "¡Qué bien! ¿Estuvo bueno?"
        ],
        [
         "A",
         "It was great, but the tickets were very expensive!",
         "Estuvo genial, ¡pero las boletas estaban muy caras!"
        ]
       ]
      },
      "more": [
       {
        "t": "order",
        "words": [
         "Where",
         "were",
         "you",
         "last",
         "night?"
        ],
        "es": "¿Dónde estabas anoche?"
       },
       {
        "t": "order",
        "words": [
         "The",
         "concert",
         "was",
         "amazing."
        ],
        "es": "El concierto fue increíble."
       },
       {
        "t": "dict",
        "say": "I was born in nineteen eighty-five."
       },
       {
        "t": "dict",
        "say": "How was your weekend?"
       },
       {
        "t": "mc",
        "q": "My parents ___ in Spain last year.",
        "o": [
         "was",
         "were",
         "are",
         "is"
        ],
        "a": 1
       },
       {
        "t": "mc",
        "q": "—Was it expensive? —No, it ___.",
        "o": [
         "wasn't",
         "weren't",
         "isn't",
         "didn't"
        ],
        "a": 0
       },
       {
        "t": "listen",
        "say": "Two days ago I was in Bogotá, but yesterday I was in Medellín.",
        "q": "¿Dónde estuvo ayer?",
        "o": [
         "Bogotá",
         "Medellín",
         "Cali",
         "En casa"
        ],
        "a": 1
       },
       {
        "t": "write",
        "q": "Cuenta cómo estuvo tu último fin de semana (mínimo 25 palabras): dónde estuviste, con quién y cómo estuvo.",
        "min": 25,
        "keys": [
         [
          "was",
          "were"
         ],
         [
          "last",
          "yesterday",
          "ago"
         ],
         [
          "with"
         ],
         [
          "great",
          "amazing",
          "terrible",
          "good",
          "fun",
          "boring",
          "tired"
         ]
        ]
       }
      ]
     }
    ],
    "quiz": [
     {
      "t": "mc",
      "q": "I go to church ___ Sundays.",
      "o": [
       "in",
       "at",
       "on",
       "to"
      ],
      "a": 2
     },
     {
      "t": "mc",
      "q": "Look! It ___.",
      "o": [
       "rains",
       "is raining",
       "rain",
       "raining"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "My husband likes ___ football.",
      "o": [
       "play",
       "playing",
       "plays",
       "to playing"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "We ___ very tired last night.",
      "o": [
       "was",
       "were",
       "are",
       "be"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "My birthday is ___ December.",
      "o": [
       "on",
       "at",
       "in",
       "to"
      ],
      "a": 2
     },
     {
      "t": "fill",
      "q": "What are you ___ (do) now?",
      "ans": [
       "doing"
      ]
     },
     {
      "t": "listen",
      "say": "Right now I'm cooking, and my wife is reading a book.",
      "q": "¿Qué está haciendo la esposa?",
      "o": [
       "Cocinando",
       "Leyendo un libro",
       "Viendo TV",
       "Durmiendo"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "I was in Miami last year. It was very hot.",
      "q": "¿Cómo era el clima en Miami?",
      "o": [
       "Frío",
       "Muy caluroso",
       "Lluvioso",
       "Agradable"
      ],
      "a": 1
     },
     {
      "t": "write",
      "q": "Cuenta qué estás haciendo ahora y dónde estuviste el fin de semana pasado (mínimo 25 palabras).",
      "min": 25,
      "keys": [
       [
        "i'm",
        "i am"
       ],
       [
        "ing"
       ],
       [
        "was",
        "were"
       ],
       [
        "last",
        "yesterday"
       ]
      ]
     },
     {
      "t": "oral",
      "text": "I love reading and listening to music."
     },
     {
      "t": "oral",
      "text": "Last week I was very busy."
     }
    ],
    "pool": [
     {
      "t": "mc",
      "q": "Our English class is ___ Monday ___ 7 p.m.",
      "o": [
       "in / at",
       "on / at",
       "at / on",
       "on / in"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "Christmas is ___ December.",
      "o": [
       "on",
       "at",
       "in",
       "to"
      ],
      "a": 2
     },
     {
      "t": "mc",
      "q": "Listen! Someone ___ at the door.",
      "o": [
       "knocks",
       "is knocking",
       "knock",
       "knocking"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "She enjoys ___ novels.",
      "o": [
       "read",
       "reading",
       "reads",
       "to reading"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "Call ___ tomorrow, please. (a mí)",
      "o": [
       "I",
       "me",
       "my",
       "mine"
      ],
      "a": 1
     },
     {
      "t": "mc",
      "q": "The children ___ at school yesterday.",
      "o": [
       "was",
       "were",
       "are",
       "is"
      ],
      "a": 1
     },
     {
      "t": "fill",
      "q": "I ___ at home last night. (estuve)",
      "ans": [
       "was"
      ]
     },
     {
      "t": "fill",
      "q": "___ touch that! It's hot. (no)",
      "ans": [
       "don't",
       "do not"
      ]
     },
     {
      "t": "listen",
      "say": "Right now my son is doing his homework and my daughter is playing the piano.",
      "q": "¿Qué está haciendo la hija?",
      "o": [
       "Tarea",
       "Tocando piano",
       "Viendo TV",
       "Durmiendo"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "We were in Medellín last weekend. The weather was perfect.",
      "q": "¿Cuándo estuvieron en Medellín?",
      "o": [
       "Ayer",
       "El fin de semana pasado",
       "El mes pasado",
       "Hoy"
      ],
      "a": 1
     },
     {
      "t": "listen",
      "say": "My birthday is on the third of June.",
      "q": "¿Cuándo es el cumpleaños?",
      "o": [
       "3 de junio",
       "13 de junio",
       "3 de julio",
       "30 de junio"
      ],
      "a": 0
     },
     {
      "t": "write",
      "q": "Escribe sobre tus hobbies y qué hiciste el fin de semana pasado (mínimo 25 palabras).",
      "min": 25,
      "keys": [
       [
        "i like",
        "i love",
        "i enjoy",
        "i hate"
       ],
       [
        "ing"
       ],
       [
        "was",
        "were"
       ],
       [
        "last",
        "yesterday"
       ]
      ]
     },
     {
      "t": "oral",
      "text": "My birthday is on the fifth of May."
     },
     {
      "t": "oral",
      "text": "I was very tired yesterday."
     },
     {
      "t": "oral",
      "text": "Right now I'm reading a book."
     }
    ]
   }
  ],
  "final": {
   "extra": [
    {
     "t": "listen",
     "say": "Hi, I'm Mark. I'm a doctor and I work in a big hospital in the city center.",
     "q": "¿Dónde trabaja Mark?",
     "o": [
      "En una escuela",
      "En un hospital",
      "En un banco",
      "En un restaurante"
     ],
     "a": 1
    },
    {
     "t": "listen",
     "say": "We get up at seven, have breakfast at half past seven and leave home at eight.",
     "q": "¿A qué hora salen de casa?",
     "o": [
      "7:00",
      "7:30",
      "8:00",
      "8:30"
     ],
     "a": 2
    },
    {
     "t": "oral",
     "text": "My name is Henry. I live in Colombia with my family."
    },
    {
     "t": "oral",
     "text": "On weekends I like cooking and watching movies."
    },
    {
     "t": "write",
     "q": "Escribe en inglés entre 40 y 80 palabras: preséntate (nombre, edad, de dónde eres), habla de tu familia y de tu rutina de un día normal."
    }
   ],
   "perLesson": true,
   "listenPerUnit": 1,
   "pass": 70
  }
 }
};
