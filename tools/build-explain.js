/* Arma explain.js con la sección "Entiende el porqué" de cada lección.
   Fuente: content/explicaciones/<nivel>.js → module.exports = { idLección: [bloques] }
   Bloques: {h:"título"} · {p:"párrafo con **negrita**"} · {li:["paso", …]} · {ex:[[inglés, español], …]}
            {err:[[mal, bien, por qué], …]} · {tip:"truco para recordar"}
   Uso: node tools/build-explain.js   (valida y escribe explain.js) */
const fs = require("fs"), path = require("path"), root = path.join(__dirname, "..");
global.window = {}; require(path.join(root, "lessons.js"));
const LV = ["a1", "a2", "b1", "b2", "c1", "c2"], out = {}, problems = [], rep = [];
LV.forEach((lv, L) => {
  const f = path.join(root, "content", "explicaciones", lv + ".js"); if (!fs.existsSync(f)) return;
  const src = require(f), ids = window.SYLLABUS[L].units.flatMap(u => u.lessons.map(l => l.id));
  Object.keys(src).forEach(id => { if (!ids.includes(id)) problems.push(`${lv}: no existe la lección ${id}`); });
  let n = 0, chars = 0;
  ids.forEach(id => {
    const b = src[id]; if (!b) { problems.push(`${lv}: falta la explicación de ${id}`); return; }
    const has = k => b.some(x => x[k]);
    if (!has("p")) problems.push(`${id}: sin párrafos`);
    if (!has("err")) problems.push(`${id}: sin errores típicos`);
    if (!has("li") && !has("ex")) problems.push(`${id}: sin regla paso a paso ni ejemplos`);
    b.forEach(x => {
      const k = Object.keys(x); if (k.length !== 1 || !["h", "p", "li", "ex", "err", "tip"].includes(k[0])) problems.push(`${id}: bloque desconocido ${JSON.stringify(x).slice(0, 60)}`);
      (x.err || []).forEach(e => { if (e.length !== 3 || e.some(v => !v)) problems.push(`${id}: error típico incompleto`); });
      (x.ex || []).forEach(e => { if (e.length !== 2 || e.some(v => !v)) problems.push(`${id}: ejemplo incompleto`); });
    });
    const len = JSON.stringify(b).length; if (len < 900) problems.push(`${id}: explicación muy corta (${len})`);
    out[id] = b; n++; chars += len;
  });
  rep.push(`${lv.toUpperCase()}: ${n}/${ids.length} lecciones · media ${Math.round(chars / Math.max(n, 1))} caracteres`);
});
if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
fs.writeFileSync(path.join(root, "explain.js"), "/* Sección \"Entiende el porqué\" de cada lección. Se genera con tools/build-explain.js desde content/explicaciones/ */\nwindow.EXPLAIN = " + JSON.stringify(out) + ";\n");
console.log(rep.join("\n"));
