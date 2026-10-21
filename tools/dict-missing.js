/* Lista las palabras de las lecturas de un nivel que no tienen entrada en el diccionario.
   Uso: node tools/dict-missing.js <nivel 0-5> [archivo-de-lecturas.js] */
const path = require("path"), root = path.join(__dirname, "..");
global.window = {};
require(path.join(root, "dict.js"));
const L = +process.argv[2];
let rs;
if (process.argv[3]) rs = require(path.resolve(process.argv[3]));
else { require(path.join(root, "readings.js")); rs = window.READINGS[L]; }
const D = new Set(window.DICT_SRC.trim().split("\n").map(l => l.split("|")[0].trim()));
const miss = new Set();
rs.forEach(r => r.text.match(/[A-Za-zÀ-ÿ]+(?:['’][A-Za-z]+)*(?:-[A-Za-zÀ-ÿ]+)*['’]?/g).forEach(w => { w = w.toLowerCase().replace(/’/g, "'"); if (!D.has(w)) miss.add(w); }));
console.log(miss.size + " faltan:\n" + [...miss].join(", "));
