/* Revisión del contenido del curso, sin navegador:
   - estructura de cada lección, ejercicio, quiz, examen, lectura, vocabulario y diccionario
   - que cada pregunta tenga una respuesta correcta válida y opciones sin repetir
   - que todas las palabras de las lecturas estén en el diccionario
   - ortografía de cada palabra en inglés (en-US y en-GB) y en español
   Uso: node tools/qa/check-content.mjs [--json salida.json]
   Las palabras correctas que el corrector no conoce van en tools/qa/allowlist.txt */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url)), root = path.join(here, "..", "..");
const require = createRequire(import.meta.url);
globalThis.window = {};
for (const f of ["lessons.js", "readings.js", "vocab.js", "vocab-extra.js", "dict.js", "practice-extra.js"]) require(path.join(root, f));
const W = globalThis.window, LV = ["A1", "A2", "B1", "B2", "C1", "C2"];
const findings = [];
const add = (sev, where, msg) => findings.push({ sev, where, msg });
const err = (w, m) => add("error", w, m), warn = (w, m) => add("aviso", w, m);
const str = v => typeof v === "string" && v.trim().length > 0;

/* ---------- diccionario y vocabulario ---------- */
const DICT = new Map();
W.DICT_SRC.trim().split("\n").forEach((l, i) => {
  const p = l.split("|").map(s => s.trim());
  if (p.length !== 5 || p.some(x => !x)) err(`diccionario línea ${i + 1}`, `entrada incompleta: "${l.slice(0, 60)}"`);
  else if (DICT.has(p[0])) warn(`diccionario`, `palabra repetida: "${p[0]}"`);
  else DICT.set(p[0], p);
});

const known = new Set([...DICT.keys()]);
const vocabByLevel = LV.map(() => new Map());
const formsOf = w => { const k = w.toLowerCase(), out = new Set([k]); for (const [f, p] of DICT) if (p[1].toLowerCase() === k) out.add(f); return out; };
const addVocab = (L, w, m, e, where, lessonVocab) => {
  if (!str(w) || !str(m)) { err(where, `palabra sin significado: "${w}"`); return; }
  const k = w.toLowerCase();
  if (!lessonVocab && vocabByLevel[L].has(k) && !vocabByLevel[L].get(k).lesson) warn(where, `"${w}" aparece dos veces en el vocabulario de ${LV[L]}`);
  vocabByLevel[L].set(k, { w, m, e, lesson: !!lessonVocab });
  k.split(/[\s/]+/).forEach(x => known.add(x.replace(/[^a-z'-]/g, "")));
  if (str(e) && /^[a-z'-]+$/i.test(w.trim())) {
    const ex = e.toLowerCase(), forms = formsOf(w.trim());
    if (![...forms].some(f => ex.includes(f.slice(0, Math.max(3, f.length - 2))))) warn(where, `el ejemplo de "${w}" no usa la palabra: "${e}"`);
  }
};
[W.VOCAB, W.VOCAB_EXTRA].forEach((src, si) => (src || []).forEach((cats, L) => Object.entries(cats || {}).forEach(([cat, txt]) => txt.trim().split("\n").forEach(line => {
  const p = line.split("|").map(s => s.trim()), where = `${LV[L]} · vocabulario${si ? " extra" : ""} · ${cat}`;
  if (p.length < 3) { err(where, `línea incompleta: "${line}"`); return; }
  addVocab(L, p[0], p[1], p[2], where);
}))));

/* ---------- ejercicios ---------- */
const lower = s => String(s).trim().toLowerCase();
/* nombres, deletreos y transformaciones (bus → buses) no necesitan traducción */
const sameOk = en => /→/.test(en) || en.trim().split(/\s+/).every(w => /^[A-Z0-9¿¡"'(-]/.test(w));
function checkItem(it, where) {
  if (!it || typeof it !== "object") { err(where, "ejercicio vacío"); return; }
  const t = it.t;
  if (t === "mc" || t === "listen") {
    if (!str(it.q)) err(where, `pregunta sin enunciado`);
    if (!Array.isArray(it.o) || it.o.length < 2) err(where, `"${it.q}": menos de 2 opciones`);
    else {
      if (it.o.some(o => !str(o))) err(where, `"${it.q}": hay una opción vacía`);
      if (new Set(it.o.map(o => o.trim())).size !== it.o.length) err(where, `"${it.q}": opciones repetidas (${it.o.join(" / ")})`);
      if (!(Number.isInteger(it.a) && it.a >= 0 && it.a < it.o.length)) err(where, `"${it.q}": la respuesta correcta (${it.a}) no existe`);
    }
    if (t === "listen" && !str(it.say)) err(where, `"${it.q}": escucha sin audio (say)`);
  } else if (t === "fill") {
    if (!str(it.q)) err(where, "completar sin enunciado");
    else if (!/_{2,}|…|\.\.\./.test(it.q)) warn(where, `"${it.q}": no tiene espacio en blanco (___)`);
    if (!Array.isArray(it.ans) || !it.ans.length || it.ans.some(a => !str(a))) err(where, `"${it.q}": sin respuesta válida`);
  } else if (t === "oral") { if (!str(it.text)) err(where, "frase oral vacía"); }
  else if (t === "dict") { if (!str(it.say)) err(where, "dictado sin audio"); }
  else if (t === "order") {
    if (!Array.isArray(it.words) || it.words.length < 2 || it.words.some(w => !str(w))) err(where, "ordenar: palabras inválidas");
    if (!str(it.es)) warn(where, `ordenar "${(it.words || []).join(" ")}": sin traducción`);
  } else if (t === "write") {
    if (!str(it.q)) err(where, "redacción sin consigna");
  } else if (t === "talk") {
    if (!str(it.q) || !(it.min > 0)) err(where, "habla libre sin consigna o mínimo");
    if (str(it.model)) {
      const n = (it.model.toLowerCase().match(/[a-z']+/g) || []).length, low = " " + it.model.toLowerCase() + " ";
      if (n < it.min) err(where, `"${it.q}": la respuesta modelo (${n} palabras) no alcanza el mínimo (${it.min})`);
      (it.keys || []).forEach(g => { if (!g.some(k => low.includes(k.toLowerCase()))) err(where, `"${it.q}": la respuesta modelo no usa "${g[0]}"`); });
    } else warn(where, `"${it.q}": sin respuesta modelo`);
  } else err(where, `tipo de ejercicio desconocido: ${t}`);
}

/* ---------- temario ---------- */
let nLessons = 0, nItems = 0;
const linkedReadings = LV.map(() => new Set());
Object.entries(W.SYLLABUS).forEach(([Ls, sy]) => {
  const L = +Ls, lv = LV[L];
  if (!str(sy.intro)) warn(lv, "el nivel no tiene introducción");
  const UNITS = { A1: 8, A2: 8, B1: 8 }; if (!sy.units || sy.units.length !== (UNITS[lv] || 6)) err(lv, `tiene ${sy.units ? sy.units.length : 0} unidades (se esperan ${UNITS[lv] || 6})`);
  let day = 0;
  sy.units.forEach((u, ui) => {
    const uw = `${lv} · Unidad ${ui + 1}`;
    if (!str(u.title)) err(uw, "unidad sin título");
    if (u.lessons.length !== 5) warn(uw, `tiene ${u.lessons.length} lecciones (se esperan 5)`);
    u.lessons.forEach((l, k) => {
      day++; nLessons++;
      const w = `${lv} · Día ${day} · ${l.title || "(sin título)"}`;
      ["title", "goal"].forEach(f => { if (!str(l[f])) err(w, `falta "${f}"`); });
      if (!Array.isArray(l.theory) || !l.theory.length) err(w, "sin explicación (theory)");
      else l.theory.forEach((b, bi) => {
        if (b.ex) b.ex.forEach(([en, es], j) => { if (!str(en) || !str(es)) err(w, `ejemplo ${bi + 1}.${j + 1} de la explicación sin texto o sin traducción`); else if (lower(en) === lower(es) && !sameOk(en)) warn(w, `ejemplo sin traducir: "${en}"`); });
        else if (!str(b.p) && !str(b.tip)) err(w, `bloque ${bi + 1} de la explicación vacío`);
      });
      if (!Array.isArray(l.vocab) || l.vocab.length < 8) warn(w, `solo ${l.vocab ? l.vocab.length : 0} palabras de vocabulario`);
      (l.vocab || []).forEach(v => { if (!Array.isArray(v) || v.length < 4 || v.some(x => !str(x))) err(w, `vocabulario incompleto: ${JSON.stringify(v)}`); else addVocab(L, v[0], v[2], v[3], w, true); });
      if (!l.dialogue || !Array.isArray(l.dialogue.lines) || l.dialogue.lines.length < 4) warn(w, "conversación corta o ausente");
      else {
        if (!str(l.dialogue.a) || !str(l.dialogue.b)) err(w, "la conversación no tiene nombres de personajes");
        l.dialogue.lines.forEach(([who, en, es], j) => {
          if (who !== "A" && who !== "B") err(w, `línea ${j + 1} de la conversación sin personaje A/B`);
          if (!str(en) || !str(es)) err(w, `línea ${j + 1} de la conversación sin texto o sin traducción`);
          else if (lower(en) === lower(es) && !sameOk(en)) warn(w, `línea ${j + 1} sin traducir: "${en}"`);
        });
      }
      const prac = [...(l.practice || []), ...(l.more || [])];
      if (prac.length < 10) warn(w, `práctica corta: ${prac.length} ejercicios`);
      prac.forEach((it, j) => { nItems++; checkItem(it, `${w} · práctica ${j + 1}`); });
      if (!l.exam) err(w, "sin pregunta para el examen final"); else checkItem(l.exam, `${w} · pregunta de examen`);
      if (l.exam2) checkItem(l.exam2, `${w} · pregunta de examen 2`);
      const qs = prac.map(x => x.t + ":" + lower([x.q, x.text, x.say, (x.words || []).join(" ")].filter(Boolean).join(" | ")));
      qs.forEach((q, j) => { if (q && qs.indexOf(q) !== j) warn(w, `ejercicio repetido en la práctica: "${q.slice(0, 60)}"`); });
      if (l.reading != null) { if (!W.READINGS[L] || !W.READINGS[L][l.reading]) err(w, `la lectura ${l.reading} no existe`); else linkedReadings[L].add(l.reading); }
    });
    const quiz = [...(u.quiz || []), ...(u.pool || [])];
    if ((u.quiz || []).length < 8) warn(uw, `quiz corto: ${(u.quiz || []).length} preguntas`);
    quiz.forEach((it, j) => { nItems++; checkItem(it, `${uw} · quiz ${j + 1}`); });
    ["listen", "oral"].forEach(t => { if (!quiz.some(x => x.t === t)) err(uw, `el quiz no tiene preguntas de tipo ${t}`); });
  });
  (sy.final && sy.final.extra || []).forEach((it, j) => checkItem(it, `${lv} · examen final extra ${j + 1}`));
  if (!sy.final || sy.final.pass < 85) err(lv, `el examen final pide ${sy.final && sy.final.pass} % (debe ser 85 %)`);
});

/* ---------- lecturas ---------- */
const TOK = /[A-Za-zÀ-ÿ]+(?:['’][A-Za-z]+)*(?:-[A-Za-zÀ-ÿ]+)*['’]?/g;
W.READINGS.forEach((rs, L) => {
  rs.forEach((r, i) => {
    const w = `${LV[L]} · lectura ${i + 1} · ${r.title}`;
    if (!str(r.title) || !str(r.es) || !str(r.text)) { err(w, "lectura incompleta"); return; }
    const miss = [...new Set((r.text.match(TOK) || []).map(x => x.toLowerCase().replace(/’/g, "'")).filter(x => !DICT.has(x) && !vocabByLevel.some(m => m.has(x))))];
    if (miss.length) err(w, `${miss.length} palabras sin significado al tocarlas: ${miss.slice(0, 15).join(", ")}${miss.length > 15 ? "…" : ""}`);
    (r.qs || []).forEach((it, j) => checkItem(it, `${w} · comprensión ${j + 1}`));
    if (i >= 6 && !(r.qs && r.qs.length)) warn(w, "lectura extra sin preguntas de comprensión");
  });
  if (rs.length && linkedReadings[L].size < 6) warn(`${LV[L]} · lecturas`, `solo ${linkedReadings[L].size} de las 6 lecturas del curso están enlazadas a una lección`);
});

/* ---------- práctica extra ---------- */
(W.PRACTICE_EXTRA || []).forEach((units, L) => (units || []).forEach((items, u) => {
  const w = `${LV[L]} · Unidad ${u + 1} · práctica extra`;
  items.forEach((it, j) => checkItem(it, `${w} ${j + 1}`));
  ["listen", "talk", "oral"].forEach(t => { if (!items.some(x => x.t === t)) warn(w, `no tiene ejercicios de tipo ${t}`); });
}));

/* ---------- ortografía ---------- */
const allow = new Set(fs.existsSync(path.join(here, "allowlist.txt")) ? fs.readFileSync(path.join(here, "allowlist.txt"), "utf8").split("\n").map(s => s.trim().toLowerCase()).filter(s => s && !s.startsWith("#")) : []);
const nspell = (await import("nspell")).default;
const mk = async m => { const d = (await import(m)).default; return nspell(d.aff, d.dic); };
const enUS = await mk("dictionary-en"), enGB = await mk("dictionary-en-gb"), es = await mk("dictionary-es");
const okEN = w => enUS.correct(w) || enGB.correct(w) || enUS.correct(w.toLowerCase()) || enGB.correct(w.toLowerCase());
const okES = w => es.correct(w) || es.correct(w.toLowerCase());
const bad = { en: new Map(), es: new Map() };
const note = (lang, word, where, ctx) => { const m = bad[lang]; if (!m.has(word)) m.set(word, { where, ctx, n: 0 }); m.get(word).n++; };
function spellEN(text, where) {
  const clean = String(text).replace(/\([^)]*\)/g, " ").replace(/-ing\b/g, " ");
  for (const raw of clean.match(/[A-Za-zÀ-ÿ]+(?:['’][A-Za-zÀ-ÿ]+)*(?:-[A-Za-zÀ-ÿ]+)*/g) || []) {
    const t = raw.replace(/’/g, "'").replace(/^'+|'+$/g, ""), w = t.replace(/'s$/i, "");
    if (w.length < 2 || /[À-ÿ]/.test(w) || okES(w)) continue; // palabras en español dentro de un ejemplo
    if (w.includes("-") && w.split("-").every(x => x.length < 2 || okEN(x) || known.has(x.toLowerCase()) || allow.has(x.toLowerCase()))) continue;
    if (w.includes("-") && okEN(w.split("-")[0])) continue;
    if (/^[A-Z]{2,}$/.test(w)) continue; // siglas
    const lw = w.toLowerCase();
    if (allow.has(lw) || known.has(lw) || okEN(w) || okEN(t)) continue;
    if (/^[A-Z]/.test(w)) continue; // nombres propios
    note("en", lw, where, text);
  }
}
function spellES(text, where) {
  const clean = String(text).replace(/\*\*/g, "").replace(/“[^”]*”|"[^"]*"/g, " ");
  for (const raw of clean.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g) || []) {
    const w = raw, lw = w.toLowerCase();
    if (w.length < 2 || /^[A-ZÁÉÍÓÚÑ]/.test(w)) continue;
    if (allow.has(lw) || okES(w) || okEN(w) || known.has(lw)) continue;
    note("es", lw, where, text);
  }
}
Object.entries(W.SYLLABUS).forEach(([Ls, sy]) => { let day = 0; sy.units.forEach(u => u.lessons.forEach(l => {
  const w = `${LV[Ls]} · Día ${++day} · ${l.title}`;
  spellES(l.goal, w); (l.theory || []).forEach(b => { if (b.p) spellES(b.p, w); if (b.tip) spellES(b.tip, w); if (b.ex) b.ex.forEach(([en, es_]) => { spellEN(en, w); spellES(es_, w); }); });
  (l.vocab || []).forEach(v => { spellEN(v[0], w); spellES(v[2], w); spellEN(v[3], w); });
  if (l.dialogue) l.dialogue.lines.forEach(x => { spellEN(x[1], w); spellES(x[2], w); });
  [...(l.practice || []), ...(l.more || []), l.exam, l.exam2].filter(Boolean).forEach(it => {
    if (it.say) spellEN(it.say, w); if (it.text) spellEN(it.text, w); if (it.words) spellEN(it.words.join(" "), w); if (it.x) spellES(it.x, w); if (it.es) spellES(it.es, w);
  });
})); });
W.READINGS.forEach((rs, L) => rs.forEach(r => { spellEN(r.text, `${LV[L]} · lectura · ${r.title}`); spellES(r.es, `${LV[L]} · lectura · ${r.title}`); }));
for (const [w, p] of DICT) { spellES(p[3], `diccionario: ${w}`); spellEN(p[4], `diccionario: ${w}`); }
vocabByLevel.forEach((m, L) => m.forEach(v => { spellES(v.m, `${LV[L]} · vocabulario · ${v.w}`); if (v.e) spellEN(v.e, `${LV[L]} · vocabulario · ${v.w}`); }));
(W.PRACTICE_EXTRA || []).forEach((units, L) => (units || []).forEach((items, u) => items.forEach(it => {
  const w = `${LV[L]} · Unidad ${u + 1} · práctica extra`;
  if (it.say) spellEN(it.say, w); if (it.text) spellEN(it.text, w); if (it.model) spellEN(it.model, w);
})));
for (const lang of ["en", "es"]) for (const [word, d] of [...bad[lang]].sort((a, b) => b[1].n - a[1].n))
  warn(`ortografía (${lang === "en" ? "inglés" : "español"}) · ${d.where}`, `"${word}" no está en el corrector${d.n > 1 ? ` (${d.n} veces)` : ""} · «${String(d.ctx).slice(0, 90)}»`);

/* ---------- salida ---------- */
const stats = { niveles: Object.keys(W.SYLLABUS).length, lecciones: nLessons, ejercicios: nItems, lecturas: W.READINGS.reduce((s, r) => s + r.length, 0), diccionario: DICT.size, vocabulario: vocabByLevel.reduce((s, m) => s + m.size, 0) };
const out = { stats, errores: findings.filter(f => f.sev === "error"), avisos: findings.filter(f => f.sev === "aviso") };
const ji = process.argv.indexOf("--json");
if (ji > 0) fs.writeFileSync(process.argv[ji + 1], JSON.stringify(out, null, 1));
console.log(`Contenido: ${stats.niveles} niveles · ${stats.lecciones} lecciones · ${stats.ejercicios} ejercicios · ${stats.lecturas} lecturas · ${stats.vocabulario} palabras · ${stats.diccionario} entradas de diccionario`);
console.log(`→ ${out.errores.length} errores · ${out.avisos.length} avisos`);
if (ji < 0) { out.errores.slice(0, 40).forEach(f => console.log(`ERROR  ${f.where}: ${f.msg}`)); out.avisos.slice(0, 40).forEach(f => console.log(`aviso  ${f.where}: ${f.msg}`)); }
process.exitCode = out.errores.length ? 1 : 0;
