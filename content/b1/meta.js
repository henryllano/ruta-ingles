module.exports = {
  readingMap: {"b1-u1-l5":0,"b1-u2-l3":1,"b1-u3-l5":2,"b1-u4-l4":3,"b1-u5-l4":4,"b1-u6-l3":5},
  intro: "En 30 lecciones (6 unidades de 5 días) vas a narrar historias con varios tiempos del pasado, hablar de cambios y experiencias, plantear hipótesis con condicionales, usar la voz pasiva y las oraciones de relativo, reportar lo que otros dicen y desenvolverte en el trabajo. Estudia una lección por día (45 a 60 minutos). Cada unidad termina con un quiz de escritura, escucha y habla, y el nivel termina con el examen final.",
  final: {
    extra: [
      {t:"listen",say:"When I arrived at the station, I realized I had left my wallet at home, so I had to go back and missed the train.",q:"¿Por qué perdió el tren?",o:["Llegó tarde por el tráfico","Tuvo que volver por la billetera","Se equivocó de estación","Se quedó dormido"],a:1},
      {t:"listen",say:"If I had more free time, I would learn to play the piano. Unfortunately, I work twelve hours a day.",q:"¿Qué haría si tuviera más tiempo?",o:["Viajar","Aprender piano","Trabajar menos","Estudiar inglés"],a:1},
      {t:"oral",text:"I used to live in a small town, but now I've been living in the city for ten years."},
      {t:"oral",text:"If I were you, I would apply for that job."},
      {t:"write",q:"Escribe un correo formal (mínimo 80 palabras) para quejarte de un servicio: cuenta qué pasó (usa varios tiempos del pasado), di qué te dijeron (estilo indirecto) y qué esperas que hagan.",min:80,keys:[["had","was","were"],["told me","said that","asked me"],["would","could","should"],["dear","regards","sincerely","yours"]]}
    ],
    listenPerUnit: 1,
    pass: 70
  }
};
