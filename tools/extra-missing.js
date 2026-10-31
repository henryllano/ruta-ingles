/* Palabras de las lecturas extra de un nivel que no están ni en el diccionario ni en el vocabulario.
   Uso: node tools/extra-missing.js <nivel a1..c2> */
const path = require("path"), root = path.join(__dirname, "..");
global.window = {};
["dict.js", "vocab.js", "vocab-extra.js", "lessons.js"].forEach(f => { try { require(path.join(root, f)); } catch (e) {} });
const lv = process.argv[2], rs = require(path.join(root, "content", lv, "extra-readings.js"));
const have = new Set(window.DICT_SRC.trim().split("\n").map(l => l.split("|")[0].trim()));
[...(window.VOCAB || []), ...(window.VOCAB_EXTRA || [])].forEach(v => Object.values(v || {}).forEach(t => t.trim().split("\n").forEach(l => have.add(l.split("|")[0].trim().toLowerCase()))));
Object.values(window.SYLLABUS || {}).forEach(sy => sy.units.forEach(u => u.lessons.forEach(l => (l.vocab || []).forEach(v => have.add(v[0].toLowerCase())))));
const miss = new Set();
rs.forEach(r => r.text.match(/[A-Za-zÀ-ÿ]+(?:['’][A-Za-z]+)*(?:-[A-Za-zÀ-ÿ]+)*['’]?/g).forEach(w => { w = w.toLowerCase().replace(/’/g, "'"); if (!have.has(w)) miss.add(w); }));
console.log(miss.size + " faltan:\n" + [...miss].join(", "));
