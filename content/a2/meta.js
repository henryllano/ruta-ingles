module.exports = {
  intro: "En 30 lecciones (6 unidades de 5 días) vas a contar historias en pasado, comparar y describir, hablar de planes y del futuro, contar experiencias con el presente perfecto, hablar de salud y obligaciones, y resolver situaciones en tiendas y servicios. Estudia una lección por día (45 a 60 minutos). Cada unidad termina con un quiz de escritura, escucha y habla, y el nivel termina con el examen final.",
  final: {
    extra: [
      {t:"listen",say:"I've lived in this city for six years, but I'm going to move to the coast next year because I need a warmer place.",q:"¿Por qué se va a mudar?",o:["Por trabajo","Necesita un lugar más cálido","Por su familia","Es más barato"],a:1},
      {t:"listen",say:"If you take the express bus, you'll arrive in twenty minutes. The normal bus is slower.",q:"¿Cuánto tarda el bus expreso?",o:["10 minutos","20 minutos","30 minutos","Una hora"],a:1},
      {t:"oral",text:"Last year I went to Mexico and it was the best trip of my life."},
      {t:"oral",text:"I've never been to Europe, but I'm going to travel there next year."},
      {t:"write",q:"Escribe un correo a un amigo (mínimo 60 palabras): cuéntale algo que hiciste el mes pasado, una experiencia que nunca has tenido y tus planes para las próximas vacaciones.",min:60,keys:[["last","ago","yesterday"],["have never","haven't","have you ever","i've"],["going to","will"],["because","but","so"]]}
    ],
    listenPerUnit: 1,
    pass: 70
  }
};
