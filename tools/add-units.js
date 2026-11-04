/* Agrega o reemplaza unidades completas en un nivel ya existente, con las mismas validaciones de build-level.js.
   Cada archivo exporta {n, title, quiz, pool, lessons:[...]} donde n es el número de la unidad (7 = séptima).
   Uso: node tools/add-units.js <nivel 0-5> content/a1/u7.js content/a1/u8.js   (CHECK=1 solo valida) */
const fs = require("fs"), path = require("path"), root = path.join(__dirname, "..");
global.window = {};
require(path.join(root, "lessons.js"));
const L = +process.argv[2], files = process.argv.slice(3).map(f => path.resolve(f));
const sy = window.SYLLABUS[L], problems = [], need = (c, m) => { if (!c) problems.push(m); };
const checkItem = (it, where) => {
  need(["mc", "fill", "listen", "oral", "write", "order", "dict"].includes(it.t), `${where}: tipo desconocido ${it.t}`);
  if (it.o) need(it.a >= 0 && it.a < it.o.length && new Set(it.o).size === it.o.length, `${where}: respuesta fuera de rango u opciones repetidas`);
  if (it.t === "mc" || it.t === "listen") need(it.o && it.o.length >= 3, `${where}: pocas opciones`);
  if (it.t === "fill") need(Array.isArray(it.ans) && it.ans.length && it.q.includes("___"), `${where}: completar sin respuesta o sin espacio`);
  if (it.t === "order") need(it.words && it.words.length >= 3 && it.es, `${where}: ordenar incompleto`);
  if (it.t === "dict" || it.t === "listen") need(it.say, `${where}: sin audio`);
  if (it.t === "oral") need(it.text, `${where}: oral sin texto`);
  if (it.t === "write") need(it.q && it.min && it.keys, `${where}: redacción incompleta`);
};
const ids = new Set(sy.units.flatMap(u => u.lessons.map(l => l.id)));
const units = files.map(f => require(f));
units.forEach(u => {
  const w = `unidad ${u.n}`;
  need(u.n >= 1 && u.n <= sy.units.length + units.length, `${w}: número fuera de orden`);
  need(u.title && u.lessons && u.lessons.length === 5, `${w}: debe tener 5 lecciones`);
  need(u.quiz && u.quiz.length >= 10, `${w}: quiz corto`);
  need(u.pool && u.pool.length >= 12, `${w}: banco corto`);
  ["write", "oral", "listen"].forEach(t => need(u.quiz.some(x => x.t === t), `${w}: el quiz no evalúa ${t}`));
  [...u.quiz, ...u.pool].forEach((it, i) => checkItem(it, `${w} quiz/banco #${i}`));
  const old = sy.units[u.n - 1]; if (old) old.lessons.forEach(l => ids.delete(l.id));
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
  });
});
if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
const les = units.flatMap(u => u.lessons);
console.log(`OK: ${units.length} unidades · ${les.length} lecciones · ${les.reduce((s, l) => s + l.vocab.length, 0)} palabras · ${les.reduce((s, l) => s + l.practice.length + l.more.length, 0)} ejercicios`);
if (process.env.CHECK) process.exit(0);
units.forEach(u => { const { n, ...rest } = u; rest.lessons = rest.lessons.map(l => ({ title: l.title, goal: l.goal, theory: l.theory, words: l.words || [], practice: l.practice, id: l.id, exam: l.exam, exam2: l.exam2, vocab: l.vocab, dialogue: l.dialogue, more: l.more, ...(l.reading != null ? { reading: l.reading } : {}) })); sy.units[n - 1] = { title: rest.title, lessons: rest.lessons, quiz: rest.quiz, pool: rest.pool }; });
const src = fs.readFileSync(path.join(root, "lessons.js"), "utf8");
fs.writeFileSync(path.join(root, "lessons.js"), src.split("window.SYLLABUS =")[0] + "window.SYLLABUS = " + JSON.stringify(window.SYLLABUS, null, 1) + ";\n");
console.log(`Nivel ${L}: ahora tiene ${sy.units.length} unidades y ${sy.units.reduce((s, u) => s + u.lessons.length, 0)} lecciones`);
