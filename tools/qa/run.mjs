/* Revisión completa del curso: contenido + página. Escribe qa-reporte/reporte.md y qa-reporte/reporte.json.
   Uso: npm run qa   (o: node tools/qa/run.mjs) */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url)), root = path.join(here, "..", ".."), dir = path.join(root, "qa-reporte");
fs.mkdirSync(dir, { recursive: true });
const run = (file, out) => { const r = spawnSync(process.execPath, [path.join(here, file), "--json", out], { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  process.stdout.write(r.stdout); if (r.status > 1 || !fs.existsSync(out)) { console.error(r.stderr); return { stats: {}, errores: [{ sev: "error", where: file, msg: "la revisión no pudo terminar: " + (r.stderr || "").split("\n")[0] }], avisos: [] }; }
  return JSON.parse(fs.readFileSync(out, "utf8")); };
const c = run("check-content.mjs", path.join(dir, "contenido.json")), u = run("check-ui.mjs", path.join(dir, "pagina.json"));
const errores = [...c.errores, ...u.errores], avisos = [...c.avisos, ...u.avisos];
const fecha = new Date().toLocaleString("es-CO", { dateStyle: "long", timeStyle: "short", timeZone: "America/Bogota" });
const s = { ...c.stats, ...u.stats };
const list = (arr, max) => arr.slice(0, max).map(f => `- **${f.where}**: ${f.msg}`).join("\n") + (arr.length > max ? `\n- … y ${arr.length - max} más` : "");
const md = `# Revisión del curso · ${fecha}

**Resultado: ${errores.length ? `❌ ${errores.length} errores` : "✅ todo funciona"}${avisos.length ? ` · ${avisos.length} avisos` : ""}**

## Qué se revisó
- Contenido: ${s.niveles} niveles, ${s.lecciones} lecciones, ${s.ejercicios} ejercicios, ${s.lecturas} lecturas, ${s.vocabulario} palabras de vocabulario y ${s.diccionario} entradas de diccionario, con ortografía en inglés y español.
- Página (navegador real): ${u.stats.practicas ?? 0} prácticas, ${u.stats.quizzes ?? 0} quizzes, ${u.stats.finales ?? 0} exámenes finales, ${u.stats.extra ?? 0} prácticas extra, ${u.stats.lecturas ?? 0} lecturas, ${u.stats.comprension ?? 0} preguntas de comprensión, registro, examen de nivel, bloqueos, cuenta administradora, diccionario, traductor, repaso y vista en celular (${u.stats.segundos ?? "?"} s).

${errores.length ? `## Errores (hay que corregirlos)\n${list(errores, 80)}\n` : ""}
${avisos.length ? `## Avisos (revisar)\n${list(avisos, 80)}\n` : ""}`;
fs.writeFileSync(path.join(dir, "reporte.md"), md);
fs.writeFileSync(path.join(dir, "reporte.json"), JSON.stringify({ fecha, stats: s, errores, avisos }, null, 1));
console.log(`\nReporte: qa-reporte/reporte.md → ${errores.length} errores · ${avisos.length} avisos`);
process.exitCode = errores.length ? 1 : 0;
