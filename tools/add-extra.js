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
const rsrc = fs.readFileSync(path.join(root, "readings.js"), "utf8");
fs.writeFileSync(path.join(root, "readings.js"), rsrc.split("window.READINGS =")[0] + "window.READINGS = " + JSON.stringify(window.READINGS, null, 1) + ";\n");
fs.writeFileSync(path.join(root, "vocab-extra.js"), "/* Vocabulario extra por nivel. Se genera con tools/add-extra.js desde content/<nivel>/extra-vocab.txt */\nwindow.VOCAB_EXTRA = [\n" +
  extra.map((cats, L) => "/* " + LV[L].toUpperCase() + " */ {\n" + Object.entries(cats).map(([c, ls]) => JSON.stringify(c) + ": `\n" + ls.join("\n").replace(/`/g, "'") + "\n`").join(",\n") + "\n}").join(",\n") + "\n];\n");
console.log(report.join("\n"));
