/* Agrega entradas a dict.js desde un archivo de texto (forma | base | tipo | significado | ejemplo), sin duplicar.
   Uso: node tools/dict-add.js <archivo.txt> */
const fs = require("fs"), path = require("path"), root = path.join(__dirname, "..");
global.window = {};
require(path.join(root, "dict.js"));
const have = new Set(window.DICT_SRC.trim().split("\n").map(l => l.split("|")[0].trim()));
const add = fs.readFileSync(path.resolve(process.argv[2]), "utf8").trim().split("\n").filter(l => {
  const p = l.split("|").map(s => s.trim());
  if (p.length !== 5 || p.some(x => !x)) { console.error("línea incompleta: " + l); process.exit(1); }
  if (have.has(p[0])) return false; have.add(p[0]); return true;
});
const src = fs.readFileSync(path.join(root, "dict.js"), "utf8"), i = src.lastIndexOf("`;");
fs.writeFileSync(path.join(root, "dict.js"), src.slice(0, i) + add.join("\n") + "\n" + src.slice(i));
console.log(`${add.length} entradas nuevas · ${have.size} en total`);
