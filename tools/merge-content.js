/* Fusiona un archivo de contenido ({idLección: {vocab, dialogue, more}}) en lessons.js y valida el resultado.
   Uso: node tools/merge-content.js <nivel 0-5> <archivo.js> [<archivo.js> ...] */
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
global.window = {};
require(path.join(root, "lessons.js"));
const L = +process.argv[2], files = process.argv.slice(3);
const sy = window.SYLLABUS[L];
const byId = {};
sy.units.forEach(u => u.lessons.forEach(l => (byId[l.id] = l)));
const problems = [];
for (const f of files) {
  const content = require(path.resolve(f));
  for (const [id, c] of Object.entries(content)) {
    const les = byId[id];
    if (!les) { problems.push(`no existe la lección ${id}`); continue; }
    Object.assign(les, c);
  }
}
/* validación de todas las lecciones del nivel */
const checkItem = (it, where) => {
  if (it.o && !(it.a >= 0 && it.a < it.o.length)) problems.push(`${where}: respuesta fuera de rango`);
  if (it.t === "order" && (!it.words || it.words.length < 3)) problems.push(`${where}: ordenar sin palabras`);
  if (it.t === "dict" && !it.say) problems.push(`${where}: dictado sin texto`);
};
sy.units.forEach(u => u.lessons.forEach(l => {
  if (l.vocab) {
    if (l.vocab.length < 20) problems.push(`${l.id}: solo ${l.vocab.length} palabras`);
    l.vocab.forEach(v => { if (v.length !== 4 || v.some(x => !x)) problems.push(`${l.id}: palabra incompleta ${JSON.stringify(v)}`); });
  }
  if (l.dialogue && l.dialogue.lines.length < 12) problems.push(`${l.id}: diálogo corto`);
  if (l.dialogue) l.dialogue.lines.forEach(x => { if (!["A", "B"].includes(x[0]) || !x[1] || !x[2]) problems.push(`${l.id}: línea de diálogo incompleta`); });
  [...l.practice, ...(l.more || []), l.exam, l.exam2].filter(Boolean).forEach((it, i) => checkItem(it, `${l.id}#${i}`));
}));
if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
const src = fs.readFileSync(path.join(root, "lessons.js"), "utf8");
const head = src.split("window.SYLLABUS =")[0];
fs.writeFileSync(path.join(root, "lessons.js"), head + "window.SYLLABUS = " + JSON.stringify(window.SYLLABUS, null, 1) + ";\n");
const done = sy.units.flatMap(u => u.lessons).filter(l => l.vocab && l.dialogue);
console.log(`Nivel ${L}: ${done.length} lecciones completas · ${done.reduce((s, l) => s + l.vocab.length, 0)} palabras de lección`);
