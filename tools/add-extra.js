/* Agrega material extra a cada nivel sin tocar las lecciones:
   - content/<nivel>/extra-readings.js  → lecturas extra (se agregan después de las 6 del curso en readings.js)
   - content/<nivel>/extra-vocab.txt    → vocabulario extra en vocab-extra.js (secciones "## Categoría", líneas "palabra | significado | ejemplo | tema")
   Las palabras que ya existen en cualquier nivel se omiten.
   Uso: node tools/add-extra.js */
const fs = require("fs"), path = require("path"), root = path.join(__dirname, "..");
global.window = {};
["readings.js", "vocab.js", "lessons.js"].forEach(f => require(path.join(root, f)));
const LV = ["a1", "a2", "b1", "b2", "c1", "c2"], BASE_READINGS = 6;
const seen = new Set();
window.VOCAB.forEach(v => Object.values(v).forEach(t => t.trim().split("\n").forEach(l => seen.add(l.split("|")[0].trim().toLowerCase()))));
Object.values(window.SYLLABUS).forEach(sy => sy.units.forEach(u => u.lessons.forEach(l => (l.vocab || []).forEach(v => seen.add(v[0].toLowerCase())))));
const extra = [], report = [];
LV.forEach((lv, L) => {
  const dir = path.join(root, "content", lv);
  let nr = 0, nv = 0, dup = 0;
  const rf = path.join(dir, "extra-readings.js");
  if (fs.existsSync(rf)) {
    const rs = require(rf);
    rs.forEach(r => { if (!r.title || !r.es || !r.text) throw new Error(`${lv}: lectura incompleta ${r.title}`); r.text = r.text.replace(/\s*\n\s*/g, " ").trim(); });
    /* preguntas de comprensión opcionales: content/<nivel>/extra-readings-qs.js (un arreglo por lectura extra, en el mismo orden) */
    const qf = path.join(dir, "extra-readings-qs.js");
    if (fs.existsSync(qf)) { const qs = require(qf); if (qs.length !== rs.length) throw new Error(`${lv}: ${qs.length} grupos de preguntas para ${rs.length} lecturas`); rs.forEach((r, i) => { r.qs = qs[i]; }); }
    window.READINGS[L] = window.READINGS[L].slice(0, BASE_READINGS).concat(rs); nr = rs.length;
  }
  const vf = path.join(dir, "extra-vocab.txt"), cats = {};
  if (fs.existsSync(vf)) {
    let cat = null;
    fs.readFileSync(vf, "utf8").split("\n").forEach((l, i) => {
      l = l.trim(); if (!l) return;
      if (l.startsWith("## ")) { cat = l.slice(3).trim(); return; }
      const p = l.split("|").map(s => s.trim());
      if (!cat || p.length !== 4 || p.some(x => !x)) throw new Error(`${lv} extra-vocab línea ${i + 1}: ${l}`);
      const k = p[0].toLowerCase(); if (seen.has(k)) { dup++; return; } seen.add(k);
      (cats[cat] = cats[cat] || []).push(p.join(" | ")); nv++;
    });
  }
  extra[L] = cats; report.push(`${lv.toUpperCase()}: ${window.READINGS[L].length} lecturas (+${nr}) · +${nv} palabras (${dup} repetidas omitidas)`);
});
/* práctica extra por unidad: content/<nivel>/extra-practice.js (arreglo de 6 unidades) → practice-extra.js */
const xp = LV.map(lv => { const f = path.join(root, "content", lv, "extra-practice.js"); if (!fs.existsSync(f)) return null; const u = require(f);
  u.forEach((items, i) => items.forEach(it => { const ok = it.t === "talk" ? it.q && it.min : it.t === "oral" ? it.text : it.t === "fill" ? it.q && it.ans : it.q && it.o && it.a != null && it.a < it.o.length && (it.t !== "listen" || it.say);
    if (!ok) throw new Error(`${lv} práctica extra unidad ${i + 1}: ítem incompleto ${JSON.stringify(it).slice(0, 80)}`); }));
  report.push(`${lv.toUpperCase()}: práctica extra ${u.map(x => x.length).join("/")} ejercicios por unidad`); return u; });
/* el mínimo de palabras habladas no debe superar el 90 % de la respuesta modelo */
const fitMin = it => { if (it.t === "talk" && it.model) { const n = (it.model.toLowerCase().match(/[a-z']+/g) || []).length; it.min = Math.max(Math.min(it.min, Math.floor(n * 0.9)), Math.min(15, n)); } };
LV.forEach((lv, L) => { (window.READINGS[L] || []).forEach(r => (r.qs || []).forEach(fitMin)); (xp[L] || []).forEach(u => u.forEach(fitMin)); });
fs.writeFileSync(path.join(root, "practice-extra.js"), "/* Práctica extra por unidad (escucha larga, habla libre y pronunciación). Se genera con tools/add-extra.js */\nwindow.PRACTICE_EXTRA = " + JSON.stringify(xp) + ";\n");
LV.forEach((lv, L) => (window.READINGS[L] || []).forEach(r => (r.qs || []).forEach(q => { if (q.t !== "talk" && !(q.o && q.a < q.o.length)) throw new Error(`${lv}: pregunta de comprensión incompleta en ${r.title}`); })));
const rsrc = fs.readFileSync(path.join(root, "readings.js"), "utf8");
fs.writeFileSync(path.join(root, "readings.js"), rsrc.split("window.READINGS =")[0] + "window.READINGS = " + JSON.stringify(window.READINGS, null, 1) + ";\n");
fs.writeFileSync(path.join(root, "vocab-extra.js"), "/* Vocabulario extra por nivel. Se genera con tools/add-extra.js desde content/<nivel>/extra-vocab.txt */\nwindow.VOCAB_EXTRA = [\n" +
  extra.map((cats, L) => "/* " + LV[L].toUpperCase() + " */ {\n" + Object.entries(cats).map(([c, ls]) => JSON.stringify(c) + ": `\n" + ls.join("\n").replace(/`/g, "'") + "\n`").join(",\n") + "\n}").join(",\n") + "\n];\n");
console.log(report.join("\n"));
