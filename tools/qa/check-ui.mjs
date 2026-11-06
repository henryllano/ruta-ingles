/* Revisión de la página en un navegador real (Chromium), como si fuera un estudiante:
   - entrar, registrarse, examen de nivel obligatorio, ubicación y bloqueo de niveles
   - cuenta administradora con todo abierto
   - cada lección de los 6 niveles: explicación, vocabulario, conversación y práctica calificada
   - cada quiz de unidad, examen final, práctica extra, lectura y preguntas de comprensión
   - un estudiante perfecto debe aprobar (≥ 85 %) y uno que responde mal debe reprobar
   - escenas, vocabulario, diccionario, traductor, voz, repaso espaciado y vista en celular
   La voz y el micrófono se simulan. Uso: node tools/qa/check-ui.mjs [--json salida.json] [--nivel N] */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url)), root = path.join(here, "..", "..");
const require = createRequire(import.meta.url);
let pw; try { pw = require("playwright"); } catch { pw = require(path.join(execSync("npm root -g").toString().trim(), "playwright")); }
/* Si la página está en ACCESO_ABIERTO (revisión temporal), se prueba una copia con registro y bloqueos activos,
   para que todas las revisiones sigan valiendo para cuando se vuelva a cerrar. */
const SRC_HTML = fs.readFileSync(path.join(root, "index.html"), "utf8");
const ABIERTO = /const ACCESO_ABIERTO=true;/.test(SRC_HTML);
const QA_FILE = path.join(root, "index.qa.html");
if (ABIERTO) fs.writeFileSync(QA_FILE, SRC_HTML.replace("const ACCESO_ABIERTO=true;", "const ACCESO_ABIERTO=false;"));
process.on("exit", () => { try { if (ABIERTO) fs.unlinkSync(QA_FILE); } catch (e) {} });
const URL = "file://" + path.join(root, ABIERTO ? "index.qa.html" : "index.html");
const URL_REAL = "file://" + path.join(root, "index.html");
const ADMIN = "henry.llanogiraldo@gmail.com";
const argN = process.argv.indexOf("--nivel"), ONLY = argN > 0 ? +process.argv[argN + 1] : null;
const findings = [], stats = { lecciones: 0, practicas: 0, quizzes: 0, finales: 0, extra: 0, lecturas: 0, comprension: 0, escenas: 0 };
const err = (w, m) => findings.push({ sev: "error", where: w, msg: m }), warn = (w, m) => findings.push({ sev: "aviso", where: w, msg: m });
const LV = ["A1", "A2", "B1", "B2", "C1", "C2"];
const log = (...a) => console.log(...a);

/* voz y micrófono simulados: la voz "termina" enseguida; el micrófono "dice" window.__say */
const FAKES = () => {
  let speaking = false;
  const fake = { get speaking() { return speaking; }, get pending() { return false; }, addEventListener() {},
    getVoices: () => [{ name: "Microsoft Aria Online (Natural) - English (United States)", lang: "en-US", voiceURI: "aria", localService: false }, { name: "Google español", lang: "es-ES", voiceURI: "es", localService: false }],
    cancel() { speaking = false; }, speak(u) { speaking = true; setTimeout(() => { speaking = false; u.dispatchEvent(new Event("end")); }, 5); } };
  Object.defineProperty(window, "speechSynthesis", { value: fake });
  window.SpeechSynthesisUtterance = class extends EventTarget { constructor(t) { super(); this.text = t; this.rate = 1; } };
  const FakeSR = class { start() { setTimeout(() => { const t = window.__say || ""; this.onresult && this.onresult({ resultIndex: 0, results: [Object.assign([{ transcript: t }], { isFinal: true })] }); setTimeout(() => this.onend && this.onend(), 20); }, 20); } stop() { this.onend && this.onend(); } abort() {} };
  Object.defineProperty(window, "webkitSpeechRecognition", { value: FakeSR, configurable: true });
  Object.defineProperty(window, "SpeechRecognition", { value: FakeSR, configurable: true });
  /* resolver la práctica abierta: "bien" responde todo correcto, "mal" todo incorrecto */
  window.__solve = mode => {
    const filler = ["I", "think", "this", "is", "important", "because", "people", "learn", "better", "when", "they", "practise", "every", "day", "and", "share", "their", "ideas", "with", "friends", "at", "work", "or", "school", "although", "it", "can", "be", "difficult", "sometimes"];
    let guard = 0;
    while (!Q.done && guard++ < 400) {
      const it = Q.items[Q.i], ok = mode === "bien";
      if (it.o) Q.sel = ok ? it.a : (it.a + 1) % it.o.length;
      if (it.t === "fill") Q.typed = ok ? it.ans[0] : "zzz";
      if (it.t === "dict") { Q.plays = 1; Q.typed = ok ? it.say : "zzz"; }
      if (it.t === "oral") Q.said = ok ? it.text : "banana";
      if (it.t === "order") Q.ord = { bank: [], picked: (ok ? it.words : [...it.words].reverse()).map((w, i) => ({ w, i })) };
      if (it.t === "talk") Q.said = ok ? (it.model || (it.keys || []).map(g => g[0]).join(" ") + " " + filler.join(" ")) : "no";
      if (it.t === "write") {
        if (ok) { const keys = (it.keys || []).map(g => g[0]).join(" , "); let t = keys + " . "; let k = 0; while (t.split(/\s+/).length < (it.min || 15) + 25) t += filler[k++ % filler.length] + (k % 9 ? " " : ". "); Q.typed = t; }
        else Q.typed = "bad";
      }
      qNext();
    }
    return { done: Q.done, pct: Q.pct, passed: Q.passed, n: Q.items.length, pass: Q.cfg.pass };
  };
};

const b = await pw.chromium.launch();
const t0 = Date.now();
async function newPage(viewport = { width: 1200, height: 900 }) {
  const ctx = await b.newContext({ viewport });
  await ctx.addInitScript(FAKES);
  /* sin internet para el traductor: se prueba el modo sin conexión */
  await ctx.route(/translate\.googleapis|mymemory/, r => r.abort());
  const p = await ctx.newPage();
  p.on("pageerror", e => err("página", `error de JavaScript: ${e.message.split("\n")[0]}`));
  p.on("console", m => { if (m.type() === "error" && !/net::ERR|Failed to load resource|favicon/.test(m.text())) warn("consola", m.text().slice(0, 160)); });
  await p.goto(URL); await p.waitForTimeout(300);
  return { ctx, p };
}
async function register(p, name, mail, user) {
  await p.click("#wNew"); await p.fill("#wName", name); await p.fill("#wMail", mail); await p.fill("#wUser", user);
  await p.fill("#wPw", "clave-prueba-1"); await p.fill("#wPw2", "clave-prueba-1"); await p.click("#whoF button[type=submit]"); await p.waitForTimeout(500);
}
const solve = (p, mode) => p.evaluate(m => window.__solve(m), mode);
async function checkSet(p, where, open, arg, { wrong = false } = {}) {
  const ok = await p.evaluate(open, arg).then(() => true, e => { err(where, `no abre: ${e.message.split("\n")[0]}`); return false; });
  if (!ok) return null;
  const started = await p.evaluate(() => typeof Q !== "undefined" && Q && !Q.done && Q.items && Q.items.length);
  if (!started) { err(where, "no inició la práctica"); return null; }
  const r = await solve(p, "bien");
  if (!r.done) err(where, "la práctica no terminó");
  else if (r.pass < 85) err(where, `pide ${r.pass} % para aprobar (debe ser 85 %)`);
  else if (!r.passed) err(where, `un estudiante que responde todo bien saca ${r.pct} % y no aprueba`);
  if (wrong) {
    await p.evaluate(open, arg); const w = await solve(p, "mal");
    if (w.passed) err(where, `respondiendo todo mal aprueba con ${w.pct} %`);
  }
  return r;
}

/* ---------- 1. entrada, registro, examen obligatorio y bloqueo (estudiante normal) ---------- */
log("1/4 · Registro, examen de nivel y bloqueos…");
{
  const { ctx, p } = await newPage();
  if (!(await p.isVisible("#wWho"))) err("entrada", "no aparece la pantalla de usuario y contraseña");
  if ((await p.innerHTML("#exCloseWrap")).trim()) err("entrada", "se puede cerrar la pantalla de entrada sin cuenta");
  await register(p, "Estudiante Prueba", "estudiante.prueba@ejemplo.com", "estudianteqa");
  const forced = await p.evaluate(() => OV === "exam" && X && X.forced);
  if (!forced) err("examen de nivel", "no se exige el examen al registrarse");
  const locked0 = await p.evaluate(() => [0, 1, 2, 3, 4, 5].map(unlocked));
  if (locked0.some(Boolean)) err("examen de nivel", "hay niveles abiertos antes de presentar el examen");
  /* presentar el examen: elige siempre la primera opción, escribe la redacción y graba la parte hablada */
  for (let i = 0; i < 300; i++) {
    const step = await p.evaluate(() => X.step);
    if (step >= 5) break;
    if (step === 1 || step === 2) {
      if (await p.$("#play")) { await p.click("#play"); await p.waitForTimeout(30); }
      await p.click(".opt >> nth=0"); await p.click("#next");
    } else if (step === 3) {
      await p.fill("#essay", "Last month I went to the beach with my family. We swam in the sea, ate fresh fish and walked on the sand every evening. It was a wonderful holiday and I would like to go back next year because I love the sea.");
      await p.click("#next");
    } else if (step === 4) {
      const txt = await p.evaluate(() => (document.querySelector(".say") || {}).textContent || "hello");
      await p.evaluate(t => { window.__say = t; }, txt);
      if (await p.$("#recBtn")) { await p.click("#recBtn"); await p.waitForTimeout(150); }
      const nx = await p.$("#next:not([disabled])"); if (nx) await nx.click(); else if (await p.$("#skip")) await p.click("#skip");
    }
    await p.waitForTimeout(20);
  }
  const res = await p.evaluate(() => ({ step: X.step, place: placedOf(curStudent()), un: [0, 1, 2, 3, 4, 5].map(unlocked), txt: (document.querySelector(".result") || {}).textContent || "" }));
  if (res.step !== 5) err("examen de nivel", "no se pudo terminar el examen");
  else {
    if (res.place == null) err("examen de nivel", "no se guardó la ubicación");
    else {
      res.un.forEach((u, i) => { if (u !== (i <= res.place)) err("bloqueo de niveles", `${LV[i]} debería estar ${i <= res.place ? "abierto" : "cerrado"} (ubicado en ${LV[res.place]})`); });
      if (!/Te ubicamos en/.test(res.txt)) err("examen de nivel", "el resultado no explica la ubicación");
    }
    /* ubicación estricta por la habilidad más débil */
    const strict = await p.evaluate(() => LV[placeOf({ pts: 239, s: { listen: 311, written: 187, essay: 165, speak: 157 } })].k);
    if (strict !== "A2") err("ubicación", `con escucha B2 y lo demás A2 debería quedar en A2, quedó en ${strict}`);
    /* lección siguiente bloqueada en un nivel por encima del ubicado */
    if (res.place < 5) {
      const L = res.place + 1;
      await p.evaluate(L => saveProg(L - 1 + "-final", 90, true), L);
      const s = await p.evaluate(L => { const st = sylSteps(L); return [stepOpen(L, st[0].key), stepOpen(L, st[1].key)]; }, L);
      if (!s[0] || s[1]) err("bloqueo de lecciones", `en ${LV[L]} el día 1 debería estar abierto y el día 2 cerrado`);
    }
    await p.evaluate(() => openLevel(5));
    if (res.place < 4 && !/bloqueado/i.test(await p.textContent("#exBody"))) err("bloqueo de niveles", "C2 se abre sin haberlo ganado");
  }
  /* cerrar sesión y volver a entrar */
  await p.evaluate(() => logout()); await p.waitForTimeout(100);
  await p.fill("#wWho", "estudianteqa"); await p.fill("#wPw", "mala-clave"); await p.click("#whoF button[type=submit]"); await p.waitForTimeout(400);
  if (!/incorrecta/i.test(await p.textContent("#wErr"))) err("entrada", "acepta una contraseña incorrecta o no avisa");
  await p.fill("#wPw", "clave-prueba-1"); await p.click("#whoF button[type=submit]"); await p.waitForTimeout(500);
  if (!(await p.evaluate(() => curStudent() && curStudent().user === "estudianteqa"))) err("entrada", "no se puede volver a entrar con usuario y contraseña");
  if ((await p.evaluate(() => localStorage.getItem("ruta3-students"))).includes("clave-prueba-1")) err("seguridad", "la contraseña se guarda sin cifrar");
  await ctx.close();
}

/* ---------- 2. todo el curso con la cuenta administradora ---------- */
log("2/4 · Recorriendo todas las lecciones, quizzes, exámenes y lecturas…");
const { ctx: actx, p } = await newPage();
await register(p, "Administrador", ADMIN, "adminqa");
if (await p.evaluate(() => OV === "exam")) err("administrador", "a la cuenta administradora le pide el examen de nivel");
if (!(await p.evaluate(() => [0, 1, 2, 3, 4, 5].every(unlocked)))) err("administrador", "la cuenta administradora no tiene todo abierto");

const levels = ONLY != null ? [ONLY] : [0, 1, 2, 3, 4, 5];
for (const L of levels) {
  const lv = LV[L], tl = Date.now();
  await p.evaluate(L => openLevel(L), L);
  const rows = await p.$$eval(".srow[data-key]", e => e.length), steps = await p.evaluate(L => sylSteps(L).length, L);
  if (rows !== steps) err(`${lv} · temario`, `muestra ${rows} filas de ${steps} pasos`);
  const info = await p.evaluate(L => SYL(L).units.map(u => u.lessons.length), L);
  let day = 0;
  for (let u = 0; u < info.length; u++) {
    for (let k = 0; k < info[u]; k++) {
      day++; stats.lecciones++;
      const w = `${lv} · Día ${day}`;
      const view = await p.evaluate(([L, u, k]) => {
        lessonView(L, u, k); const les = SYL(L).units[u].lessons[k], b = document.getElementById("exBody");
        return { title: les.title, vw: b.querySelectorAll(".vw").length, voc: lesVocab(les).length, dl: b.querySelectorAll(".dline").length, lines: les.dialogue ? les.dialogue.lines.length : 0,
          prac: !!document.getElementById("lPrac"), text: b.textContent.length, scene: !!document.getElementById("dScene"), undef: /undefined|NaN|\[object Object\]/.test(b.textContent) };
      }, [L, u, k]).catch(e => { err(w, `la lección no abre: ${e.message.split("\n")[0]}`); return null; });
      if (!view) continue;
      const wt = `${w} · ${view.title}`;
      if (view.vw < view.voc) err(wt, `muestra ${view.vw} de ${view.voc} palabras de vocabulario`);
      if (view.lines && view.dl < view.lines) err(wt, `la conversación muestra ${view.dl} de ${view.lines} líneas`);
      if (!view.prac) err(wt, "no tiene botón de práctica calificada");
      if (view.undef) err(wt, "aparece 'undefined', 'NaN' u '[object Object]' en la página");
      if (view.text < 800) warn(wt, "la lección tiene muy poco texto");
      /* escena animada: se abre y genera sus preguntas */
      if (view.scene && k === 0) {
        const sc = await p.evaluate(() => { document.getElementById("dScene").click(); return !!document.querySelector(".stage"); }).catch(() => false);
        stats.escenas++;
        if (!sc) err(wt, "la escena animada no abre");
        await p.evaluate(() => stopScene());
      }
      /* práctica calificada: perfecta aprueba; en el primer día de cada unidad, toda mal reprueba */
      const r = await checkSet(p, `${wt} · práctica`, ([L, u, k]) => { lessonView(L, u, k); document.getElementById("lPrac").click(); }, [L, u, k], { wrong: k === 0 });
      if (r) { stats.practicas++; const c = await p.evaluate(() => { const c = {}; Q.items.forEach(x => c[x.t] = (c[x.t] || 0) + 1); return c; });
        if ((c.listen || 0) + (c.dict || 0) < 5) warn(wt, `la práctica tiene poca escucha (${(c.listen || 0) + (c.dict || 0)})`);
        if ((c.oral || 0) + (c.talk || 0) < 3) warn(wt, `la práctica tiene poca habla (${(c.oral || 0) + (c.talk || 0)})`); }
    }
    if (await checkSet(p, `${lv} · Quiz unidad ${u + 1}`, ([L, u]) => unitQuiz(L, u), [L, u], { wrong: u === 0 })) stats.quizzes++;
    if (await p.evaluate(([L, u]) => !!xpOf(L, u), [L, u])) { if (await checkSet(p, `${lv} · Unidad ${u + 1} · práctica extra`, ([L, u]) => extraPractice(L, u), [L, u])) stats.extra++; }
    else warn(`${lv} · Unidad ${u + 1}`, "no tiene práctica extra");
  }
  if (await checkSet(p, `${lv} · Examen final`, L => finalExam(L), L, { wrong: true })) stats.finales++;
  /* lecturas: se abren, cada palabra tocada muestra su significado, y las preguntas de comprensión se pueden aprobar */
  const nR = await p.evaluate(L => READINGS[L].length, L);
  for (let i = 0; i < nR; i++) {
    stats.lecturas++;
    const rd = await p.evaluate(([L, i]) => {
      reader(L, i); const ws = [...document.querySelectorAll("#rText .w")];
      const sample = ws.filter((_, j) => j % Math.max(1, Math.floor(ws.length / 12)) === 0);
      const empty = [];
      sample.forEach(el => { el.click(); const sh = document.querySelector(".wsheet"); if (!sh || /Todavía no tenemos/.test(sh.textContent)) empty.push(el.textContent); });
      document.querySelector(".wsheet")?.remove();
      return { title: READINGS[L][i].title, words: ws.length, empty, qs: !!document.getElementById("rQs") };
    }, [L, i]).catch(e => { err(`${lv} · lectura ${i + 1}`, `no abre: ${e.message.split("\n")[0]}`); return null; });
    if (!rd) continue;
    if (rd.words < 50) err(`${lv} · lectura · ${rd.title}`, `solo ${rd.words} palabras`);
    if (rd.empty.length) err(`${lv} · lectura · ${rd.title}`, `palabras sin significado al tocarlas: ${rd.empty.join(", ")}`);
    if (rd.qs) { if (await checkSet(p, `${lv} · comprensión · ${rd.title}`, ([L, i]) => { reader(L, i); document.getElementById("rQs").click(); }, [L, i])) stats.comprension++; }
  }
  /* vocabulario del nivel */
  const voc = await p.evaluate(L => { openVocab(L); return { shown: document.getElementById("exBody").textContent.match(/(\d+) palabras/), total: vocabOf(L).length }; }, L);
  if (!voc.shown || +voc.shown[1] !== voc.total) err(`${lv} · vocabulario`, `el contador no coincide con ${voc.total} palabras`);
  log(`   ${lv} revisado en ${Math.round((Date.now() - tl) / 1000)} s`);
}

/* ---------- 3. herramientas: diccionario, traductor, voces y repaso ---------- */
log("3/4 · Diccionario, traductor, voces y repaso…");
{
  await p.evaluate(() => closeExam());
  await p.evaluate(() => { toolsOpen("dict"); const q = document.getElementById("dQ"); q.value = "casa"; q.dispatchEvent(new Event("input")); });
  const d1 = await p.$$eval(".dent b", e => e.map(x => x.textContent));
  if (!d1.includes("house")) err("diccionario", `buscar "casa" no muestra "house" (${d1.slice(0, 5).join(", ")})`);
  await p.evaluate(() => { const q = document.getElementById("dQ"); q.value = "run"; q.dispatchEvent(new Event("input")); });
  if (!(await p.$$eval(".dent b", e => e.some(x => x.textContent === "run")))) err("diccionario", `buscar "run" no lo encuentra`);
  await p.evaluate(() => toolTab("tr"));
  await p.fill("#trIn", "Hola amigo"); await p.click("#trGo"); await p.waitForTimeout(800);
  const tr = await p.textContent("#trOut");
  if (!tr.trim() || /Traduciendo/.test(tr)) err("traductor", "no muestra ninguna traducción sin internet");
  await p.evaluate(() => toolTab("voice"));
  if ((await p.$$(".vlist label")).length < 1) err("voces", "no lista voces en inglés");
  await p.evaluate(() => toolsClose());
  /* repaso espaciado */
  const srs = await p.evaluate(() => {
    srsAdd(0, vocabOf(0).slice(0, 8).map(v => v.w)); const db = loadDB(), st = db.find(s => s.id === S.student);
    Object.values(st.srs).forEach(r => { r.due = day0() - 1; }); saveDB(db); render();
    const due = srsDue().length; srsReview(); const keys = Q.items.map(x => x._srs); const r = window.__solve("bien");
    const after = srsAll().filter(x => keys.includes(x.k));
    return { due, r, up: after.length === keys.length && after.every(x => x.b >= 1), next: after.filter(x => x.due < day0() + DAYMS).length };
  });
  if (srs.due < 8) err("repaso", `no aparecen las palabras para repasar (${srs.due})`);
  if (!srs.up || srs.next) err("repaso", "las palabras acertadas no suben de nivel o siguen pendientes hoy");
  await p.evaluate(() => closeExam());
}
await actx.close();

/* ---------- 4. vista en celular: nada se sale de la pantalla ---------- */
log("4/4 · Vista en celular…");
{
  const { ctx, p: m } = await newPage({ width: 360, height: 760 });
  await register(m, "Administrador", ADMIN, "adminqa");
  const views = { portada: "closeExam()", nivel: "openLevel(2)", leccion: "openLevel(2);lessonView(2,1,1)", lectura: "openLevel(3);reader(3,8)", practica: "openLevel(1);lessonView(1,0,0);document.getElementById('lPrac').click()", vocabulario: "openVocab(0)", diccionario: "closeExam();toolsOpen('dict')" };
  for (const [k, js] of Object.entries(views)) {
    await m.evaluate(js); await m.waitForTimeout(150);
    const over = await m.evaluate(() => { const vw = document.documentElement.clientWidth, ex = document.getElementById("exam"); return Math.max(document.documentElement.scrollWidth, ex && !ex.hidden ? ex.scrollWidth : 0) - vw; });
    if (over > 2) err(`celular · ${k}`, `la página se sale ${over}px de la pantalla`);
    await m.evaluate(() => { try { toolsClose(); } catch (e) {} });
  }
  await ctx.close();
}
await b.close();

const out = { stats: { ...stats, segundos: Math.round((Date.now() - t0) / 1000) }, errores: findings.filter(f => f.sev === "error"), avisos: findings.filter(f => f.sev === "aviso") };
const ji = process.argv.indexOf("--json");
if (ji > 0) fs.writeFileSync(process.argv[ji + 1], JSON.stringify(out, null, 1));
log(`Página: ${stats.lecciones} lecciones · ${stats.practicas} prácticas · ${stats.quizzes} quizzes · ${stats.finales} finales · ${stats.extra} prácticas extra · ${stats.lecturas} lecturas · ${stats.comprension} comprensiones · ${out.stats.segundos} s`);
if (ABIERTO) {
  /* el modo abierto real: sin inscripción, todo abierto y examen voluntario */
  const b2 = await pw.chromium.launch(); const ctx2 = await b2.newContext(); await ctx2.addInitScript(FAKES); const p2 = await ctx2.newPage();
  await p2.goto(URL_REAL); await p2.waitForTimeout(500);
  const r = await p2.evaluate(() => ({ modal: !exam.hidden, st: (curStudent() || {}).name, todos: [0, 1, 2, 3, 4, 5].every(i => unlocked(i)), examen: mustPlace() }));
  if (r.modal || !r.st) err("acceso abierto", "la página pide inscribirse aunque ACCESO_ABIERTO está activo");
  if (!r.todos) err("acceso abierto", "hay niveles bloqueados aunque ACCESO_ABIERTO está activo");
  if (r.examen) err("acceso abierto", "el examen de nivel sigue siendo obligatorio");
  log("Acceso abierto TEMPORAL activo: sin inscripción, 6 niveles abiertos, examen voluntario (las demás pruebas se hicieron con el acceso normal)");
  await b2.close();
}
log(`→ ${out.errores.length} errores · ${out.avisos.length} avisos`);
if (ji < 0) { out.errores.slice(0, 50).forEach(f => log(`ERROR  ${f.where}: ${f.msg}`)); out.avisos.slice(0, 30).forEach(f => log(`aviso  ${f.where}: ${f.msg}`)); }
process.exitCode = out.errores.length ? 1 : 0;
