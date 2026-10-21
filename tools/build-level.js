/* Arma el temario de un nivel desde content/<carpeta>/ y lo valida.
   La carpeta tiene meta.js ({intro, final:{extra, listenPerUnit, pass}}), u1.js…u6.js
   ({title, quiz, pool, lessons:[{id,title,goal,theory,vocab,dialogue,practice,more,exam,exam2,reading}]})
   y opcionalmente readings.js (array de lecturas del nivel).
   Uso: node tools/build-level.js <nivel 0-5> <carpeta> */
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const L = +process.argv[2], dir = path.resolve(root, process.argv[3]);
global.window = {};
require(path.join(root, "lessons.js"));
require(path.join(root, "readings.js"));
const meta = require(path.join(dir, "meta.js"));
const units = [1, 2, 3, 4, 5, 6].map(n => path.join(dir, `u${n}.js`)).filter(f => fs.existsSync(f)).map(f => require(f));
const problems = [];
const need = (cond, msg) => { if (!cond) problems.push(msg); };
const checkItem = (it, where) => {
  need(["mc", "fill", "listen", "oral", "write", "order", "dict"].includes(it.t), `${where}: tipo desconocido ${it.t}`);
  if (it.o) need(it.a >= 0 && it.a < it.o.length, `${where}: respuesta fuera de rango`);
  if (it.t === "mc" || it.t === "listen") need(it.o && it.o.length >= 3, `${where}: pocas opciones`);
  if (it.t === "fill") need(Array.isArray(it.ans) && it.ans.length, `${where}: completar sin respuesta`);
  if (it.t === "order") need(it.words && it.words.length >= 3, `${where}: ordenar sin palabras`);
  if (it.t === "dict" || it.t === "listen") need(it.say, `${where}: sin audio`);
  if (it.t === "oral") need(it.text, `${where}: oral sin texto`);
  if (it.t === "write") need(it.q && it.min, `${where}: redacción incompleta`);
};
/* meta.readingMap = {idLección: índiceLectura} conecta cada lectura con su lección */
units.forEach(u => u.lessons.forEach(l => { if (meta.readingMap && meta.readingMap[l.id] != null) l.reading = meta.readingMap[l.id]; }));
const ids = new Set();
units.forEach((u, ui) => {
  need(u.title && u.lessons && u.lessons.length === 5, `unidad ${ui + 1}: debe tener 5 lecciones`);
  need(u.quiz && u.quiz.length >= 10, `unidad ${ui + 1}: quiz corto`);
  need(u.pool && u.pool.length >= 12, `unidad ${ui + 1}: banco corto`);
  ["write", "oral", "listen"].forEach(t => need(u.quiz.some(x => x.t === t), `unidad ${ui + 1}: el quiz no evalúa ${t}`));
  [...u.quiz, ...u.pool].forEach((it, i) => checkItem(it, `u${ui + 1} quiz/banco #${i}`));
  u.lessons.forEach(l => {
    need(!ids.has(l.id), `id repetido ${l.id}`); ids.add(l.id);
    need(l.title && l.goal && l.theory && l.theory.length >= 3, `${l.id}: falta teoría`);
    need(l.vocab && l.vocab.length >= 20, `${l.id}: ${l.vocab ? l.vocab.length : 0} palabras`);
    (l.vocab || []).forEach(v => need(v.length === 4 && v.every(Boolean), `${l.id}: palabra incompleta ${JSON.stringify(v)}`));
    need(l.dialogue && l.dialogue.lines.length >= 12, `${l.id}: diálogo corto`);
    if (l.dialogue) l.dialogue.lines.forEach(x => need(["A", "B"].includes(x[0]) && x[1] && x[2], `${l.id}: línea incompleta`));
    const prac = [...(l.practice || []), ...(l.more || [])];
    need(prac.length >= 14, `${l.id}: ${prac.length} ejercicios`);
    ["order", "dict", "listen", "oral"].forEach(t => need(prac.some(x => x.t === t), `${l.id}: falta ejercicio ${t}`));
    prac.forEach((it, i) => checkItem(it, `${l.id} #${i}`));
    need(l.exam && l.exam2, `${l.id}: falta pregunta de examen`);
    [l.exam, l.exam2].filter(Boolean).forEach((it, i) => checkItem(it, `${l.id} examen ${i + 1}`));
    if (!l.words) l.words = [];
  });
});
let readings = null;
if (fs.existsSync(path.join(dir, "readings.js"))) {
  readings = require(path.join(dir, "readings.js"));
  units.forEach(u => u.lessons.forEach(l => { if (l.reading != null) need(l.reading < readings.length, `${l.id}: lectura ${l.reading} no existe`); }));
}
need(meta.final && meta.final.extra && meta.final.extra.some(x => x.t === "write"), "meta: el examen final necesita redacción");
(meta.final && meta.final.extra || []).forEach((it, i) => checkItem(it, `final extra #${i}`));
if (problems.length) { console.error(problems.join("\n")); process.exit(1); }

window.SYLLABUS[L] = { intro: meta.intro, units: units.map(u => ({ title: u.title, lessons: u.lessons, quiz: u.quiz, pool: u.pool })), final: { listenPerUnit: 1, pass: 70, ...meta.final } };
const src = fs.readFileSync(path.join(root, "lessons.js"), "utf8");
fs.writeFileSync(path.join(root, "lessons.js"), src.split("window.SYLLABUS =")[0] + "window.SYLLABUS = " + JSON.stringify(window.SYLLABUS, null, 1) + ";\n");
if (readings) {
  window.READINGS[L] = readings;
  const rsrc = fs.readFileSync(path.join(root, "readings.js"), "utf8");
  const rhead = rsrc.includes("window.READINGS =") ? rsrc.split("window.READINGS =")[0] : "";
  fs.writeFileSync(path.join(root, "readings.js"), rhead + "window.READINGS = " + JSON.stringify(window.READINGS, null, 1) + ";\n");
}
const les = units.flatMap(u => u.lessons);
console.log(`Nivel ${L}: ${units.length} unidades · ${les.length} lecciones · ${les.reduce((s, l) => s + l.vocab.length, 0)} palabras · ${les.reduce((s, l) => s + l.practice.length + (l.more || []).length, 0)} ejercicios · ${readings ? readings.length : 0} lecturas`);
