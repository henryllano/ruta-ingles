/* Cobertura del temario frente a cursos de referencia.
   Compara un nivel con content/referencia/<nivel>.json y dice qué temas tienen lección propia,
   cuáles están cubiertos, cuáles solo aparecen de pasada y cuáles faltan.
   Uso: npm run qa:cobertura -- a1      (reporte en qa-reporte/cobertura-<nivel>.md) */
import fs from "fs"; import path from "path"; import { createRequire } from "module";
const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const lvl = (process.argv[2] || "a1").toLowerCase();
const ref = JSON.parse(fs.readFileSync(path.join(root, "content/referencia", lvl + ".json"), "utf8"));
global.window = {};
for (const f of ["lessons.js", "readings.js", "practice-extra.js", "vocab-extra.js"]) { const p = path.join(root, f); if (fs.existsSync(p)) require(p); }
const L = ref.nivel, sy = window.SYLLABUS[L];
const plano = xs => xs.map(x => JSON.stringify(x || "")).join(" ").replace(/\\n/g, " ");
const texto = plano([sy]), extra = plano([(window.READINGS || [])[L], (window.PRACTICE_EXTRA || [])[L], (window.VOCAB_EXTRA || [])[L]]);
const lecciones = sy.units.flatMap((u, ui) => u.lessons.map((l, k) => ({ n: ui * 5 + k + 1, t: l.title })));
const filas = ref.temas.map(t => {
  const n = (s, r) => (s.match(new RegExp(r, "gi")) || []).length;
  const hits = t.buscar.map(r => n(texto, r)), enLecturas = t.buscar.reduce((a, r) => a + n(extra, r), 0);
  const total = hits.reduce((a, b) => a + b, 0), min = t.min || 3;
  const propia = t.titulo ? lecciones.find(l => new RegExp(t.titulo, "i").test(l.t)) : null;
  const estado = propia ? "Lección propia" : total >= min && hits.every(h => h > 0) ? "Cubierto" : total + enLecturas > 0 ? "Parcial" : "Falta";
  return { ...t, total, enLecturas, estado, dia: propia ? propia.n : null };
});
const orden = { "Falta": 0, "Parcial": 1, "Cubierto": 2, "Lección propia": 3 };
const cuenta = e => filas.filter(f => f.estado === e).length;
const pct = Math.round(filas.reduce((a, f) => a + (f.estado === "Parcial" ? .5 : f.estado === "Falta" ? 0 : 1), 0) / filas.length * 100);
let md = `# Cobertura ${lvl.toUpperCase()} frente a cursos de referencia\n\n${ref.fuentes}.\n\n**Cobertura: ${pct}%** · ${cuenta("Lección propia")} con lección propia · ${cuenta("Cubierto")} cubiertos · ${cuenta("Parcial")} parciales · ${cuenta("Falta")} faltan\n\n| Estado | Área | Tema | En lecciones | En lecturas y extra |\n|---|---|---|---|---|\n`;
[...filas].sort((a, b) => orden[a.estado] - orden[b.estado] || a.area.localeCompare(b.area)).forEach(f => md += `| ${f.estado}${f.dia ? " (Día " + f.dia + ")" : ""} | ${f.area} | ${f.tema} | ${f.total} | ${f.enLecturas} |\n`);
fs.mkdirSync(path.join(root, "qa-reporte"), { recursive: true });
fs.writeFileSync(path.join(root, "qa-reporte", `cobertura-${lvl}.md`), md);
console.log(md);
