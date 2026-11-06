/* Genera pron.js: pronunciación de cada palabra del vocabulario de todos los niveles.
   Fuente: CMU Pronouncing Dictionary (inglés de EE. UU., el mismo acento de las voces de la app).
   Para cada entrada se guardan dos formas:
   - figurada para hispanohablantes (ej. house → "jáus"; la tilde marca la sílaba fuerte)
   - AFI / IPA (ej. "haʊs")
   Uso: node tools/build-pron.mjs   (reporta cobertura y escribe pron.js) */
import fs from "fs"; import path from "path"; import vm from "vm";
import { dictionary as CMU } from "cmu-pronouncing-dictionary";
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ["vocab.js", "vocab-extra.js", "lessons.js", "dict.js"]) vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx);
const W = ctx.window;

/* ---------- entradas del vocabulario: [palabra, pista de categoría, significado] ---------- */
const entries = [];
(W.VOCAB || []).forEach((lv, L) => {
  const src = Object.assign({}, lv || {}), ex = (W.VOCAB_EXTRA || [])[L] || {};
  Object.entries(ex).forEach(([c, t]) => { src[c] = (src[c] || "") + "\n" + t; });
  Object.entries(src).forEach(([cat, txt]) => txt.trim().split("\n").forEach(l => { const [w, m] = l.split("|").map(s => (s || "").trim()); if (w) entries.push([w, cat, m]); }));
});
Object.values(W.SYLLABUS).forEach(sy => sy.units.forEach(u => u.lessons.forEach(l => (l.vocab || []).forEach(([w, pos, m]) => entries.push([w, pos, m])))));

/* ---------- homógrafos: la pronunciación depende del significado ---------- */
const HOMO = {
  live: [[/vivo|en directo|en vivo/i, "L AY1 V"], [/.*/, "L IH1 V"]],
  close: [[/cerca|cercano|íntimo|estrecho/i, "K L OW1 S"], [/.*/, "K L OW1 Z"]],
  use: [[/^uso|utilidad/i, "Y UW1 S"], [/.*/, "Y UW1 Z"]],
  tear: [[/lágrima/i, "T IH1 R"], [/.*/, "T EH1 R"]],
  wind: [[/enrollar|dar cuerda|serpente/i, "W AY1 N D"], [/.*/, "W IH1 N D"]],
  lead: [[/plomo/i, "L EH1 D"], [/.*/, "L IY1 D"]],
  read: [[/leí|leyó|leído|pasado/i, "R EH1 D"], [/.*/, "R IY1 D"]],
  minute: [[/diminuto|minucioso/i, "M AY0 N UW1 T"], [/.*/, "M IH1 N AH0 T"]],
  excuse: [[/^excusa|pretexto/i, "IH0 K S K Y UW1 S"], [/.*/, "IH0 K S K Y UW1 Z"]],
  house: [[/alojar|albergar/i, "HH AW1 Z"], [/.*/, "HH AW1 S"]],
  resume: [[/hoja de vida|curr[ií]culum|\bcv\b|resumen/i, "R EH1 Z AH0 M EY2"], [/.*/, "R IH0 Z UW1 M"]],
  bow: [[/arco|moño/i, "B OW1"], [/.*/, "B AW1"]],
  row: [[/pelea|discusión/i, "R AW1"], [/.*/, "R OW1"]],
  wound: [[/herida|herir/i, "W UW1 N D"], [/.*/, "W AW1 N D"]],
  used: [[/.*/, "Y UW1 Z D"]],
  "used to": [[/.*/, "Y UW1 S T T UW0"]],
  the: [[/.*/, "DH AH0"]], a: [[/.*/, "AH0"]], an: [[/.*/, "AE1 N"]], to: [[/.*/, "T UW1"]], of: [[/.*/, "AH1 V"]]
};
/* palabras con acento que cambia: sustantivo/adjetivo en la 1.ª sílaba, verbo en la 2.ª */
const SHIFT = new Set("record present object permit contract project increase decrease export import produce conduct convict desert insult protest progress refund rebel suspect survey transport upset conflict contrast estimate".split(" "));

const phonesOf = (word, cat, m) => {
  const k = word.toLowerCase();
  if (HOMO[k]) { for (const [re, ph] of HOMO[k]) if (re.test(m || "")) return ph; }
  const vars = []; if (CMU[k]) vars.push(CMU[k]); for (let i = 2; CMU[`${k}(${i})`]; i++) vars.push(CMU[`${k}(${i})`]);
  if (!vars.length) {
    const us = brToUs(k); if (us !== k && CMU[us]) return CMU[us];
    if (/'s$/.test(k) && CMU[k.slice(0, -2)]) { const b = CMU[k.slice(0, -2)]; return b + (/(S|Z|SH|CH|JH|ZH)$/.test(b) ? " IH0 Z" : /(P|T|K|F|TH)$/.test(b) ? " S" : " Z"); }
    return null;
  }
  if (SHIFT.has(k) && vars.length > 1) {
    const stressAt = v => v.split(" ").filter(p => /\d/.test(p)).findIndex(p => /1/.test(p));
    const verb = /verb/i.test(cat || "");
    const pick = vars.slice().sort((a, b) => stressAt(a) - stressAt(b));
    return verb ? pick[pick.length - 1] : pick[0];
  }
  return vars[0];
};

/* ortografía británica → americana, para buscar en el diccionario CMU */
function brToUs(k) {
  const fix = { ageing: "aging", sceptic: "skeptic", sceptical: "skeptical", scepticism: "skepticism", manoeuvre: "maneuver", lacklustre: "lackluster", centre: "center", theatre: "theater", metre: "meter", litre: "liter", fibre: "fiber", grey: "gray", tyre: "tire", programme: "program", catalogue: "catalog", dialogue: "dialog", cheque: "check", jewellery: "jewelry", aluminium: "aluminum", mum: "mom" };
  if (fix[k]) return fix[k];
  return k.replace(/isation/g, "ization").replace(/ise(s|d|r|rs)?$/, "ize$1").replace(/ising$/, "izing").replace(/yse(s|d)?$/, "yze$1").replace(/our(s|ed|ful|ite|able)?$/, "or$1").replace(/ll(ed|ing|er|ers|or|ors)$/, "l$1").replace(/tre$/, "ter").replace(/ogue$/, "og");
}
/* ---------- ARPAbet → figurada para hispanohablantes ---------- */
const V_ES = { AA: "a", AE: "a", AH: "a", AO: "o", AW: "au", AY: "ai", EH: "e", ER: "er", EY: "ei", IH: "i", IY: "i", OW: "ou", OY: "oi", UH: "u", UW: "u" };
const C_ES = { B: "b", CH: "ch", D: "d", DH: "dh", F: "f", G: "g", HH: "j", JH: "y", K: "k", L: "l", M: "m", N: "n", NG: "ng", P: "p", R: "r", S: "s", SH: "sh", T: "t", TH: "th", V: "v", W: "w", Y: "y", Z: "z", ZH: "sh" };
const ACC = { a: "á", e: "é", i: "í", o: "ó", u: "ú" };
function figurada(ph) {
  const ps = ph.split(" "), nV = ps.filter(p => /\d/.test(p)).length;
  let out = "", vIdx = 0;
  ps.forEach((p, i) => {
    const base = p.replace(/\d/, ""), st = (p.match(/\d/) || [""])[0];
    if (V_ES[base]) {
      let s = V_ES[base];
      if (base === "AH" && st === "0") s = (vIdx === 0 || i === ps.length - 1) ? "a" : "e";
      if (st === "1" && nV > 1) s = ACC[s[0]] + s.slice(1);
      out += s; vIdx++;
    } else {
      let c = C_ES[base] || "";
      const next = ps[i + 1] ? ps[i + 1].replace(/\d/, "") : "";
      if (base === "G" && /^(EH|IH|IY|EY|ER)$/.test(next)) c = "gu";
      if (base === "JH" && !V_ES[next]) c = "ch";
      out += c;
    }
  });
  return out;
}
/* ---------- ARPAbet → AFI (IPA) con acento principal ---------- */
const V_IPA = { AA: "ɑ", AE: "æ", AO: "ɔ", AW: "aʊ", AY: "aɪ", EH: "ɛ", EY: "eɪ", IH: "ɪ", IY: "i", OW: "oʊ", OY: "ɔɪ", UH: "ʊ", UW: "u" };
const C_IPA = { B: "b", CH: "tʃ", D: "d", DH: "ð", F: "f", G: "ɡ", HH: "h", JH: "dʒ", K: "k", L: "l", M: "m", N: "n", NG: "ŋ", P: "p", R: "r", S: "s", SH: "ʃ", T: "t", TH: "θ", V: "v", W: "w", Y: "j", Z: "z", ZH: "ʒ" };
const ONSETS = new Set("pr br tr dr kr ɡr fr θr pl bl kl ɡl fl sl sp st sk sm sn sw tw kw ʃr spr str skr spl skw bj pj kj ɡj fj vj mj hj nj dj tj lj".split(" "));
function ipa(ph) {
  const ps = ph.split(" "), nV = ps.filter(p => /\d/.test(p)).length, segs = [];
  ps.forEach(p => {
    const base = p.replace(/\d/, ""), st = (p.match(/\d/) || [""])[0];
    if (base === "AH") segs.push({ v: true, s: st === "1" ? "ʌ" : "ə", st });
    else if (base === "ER") segs.push({ v: true, s: st === "1" ? "ɝ" : "ɚ", st });
    else if (V_IPA[base]) segs.push({ v: true, s: V_IPA[base], st });
    else segs.push({ v: false, s: C_IPA[base] || "" });
  });
  if (nV > 1) {
    const k = segs.findIndex(x => x.v && x.st === "1");
    if (k > 0) {
      let j = k; const cons = [];
      while (j > 0 && !segs[j - 1].v) { cons.unshift(segs[j - 1].s); j--; }
      let take = Math.min(cons.length, 1);
      for (let n = Math.min(cons.length, 3); n > 1; n--) if (ONSETS.has(cons.slice(-n).join(""))) { take = n; break; }
      segs.splice(k - take, 0, { v: false, s: "ˈ" });
    } else if (k === 0) segs.unshift({ v: false, s: "ˈ" });
  }
  return segs.map(x => x.s).join("");
}

/* ---------- convertir una entrada completa (expresiones, alternativas con /) ---------- */
function pronounce(raw, cat, m) {
  const clean = raw.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\+[^/→]*/g, " ").replace(/→/g, "/").replace(/\([^)]*\)/g, " ").replace(/[…?!.,;:"“”¿¡]/g, " ").replace(/\.\.\./g, " ").replace(/\s+/g, " ").trim();
  if (!clean || /[+=]/.test(clean)) return null;
  const k = clean.toLowerCase();
  if (HOMO[k]) { const ph = phonesOf(k, cat, m); return ph ? [figurada(ph), ipa(ph)] : null; }
  const parts = clean.split(/\s*\/\s*/);
  const fig = [], ip = [];
  for (const part of parts) {
    const words = part.split(" ").filter(Boolean), fw = [], iw = [];
    for (const w of words) {
      const pieces = w.split("-"), fp = [], ipc = [];
      for (const pc of pieces) {
        if (!pc) continue;
        const ph = phonesOf(pc.replace(/^['’]|['’]$/g, "").replace(/’/g, "'"), cat, m);
        if (!ph) return null;
        fp.push(figurada(ph)); ipc.push(ipa(ph));
      }
      fw.push(fp.join("-")); iw.push(ipc.join("-"));
    }
    fig.push(fw.join(" ")); ip.push(iw.join(" "));
  }
  return [fig.join(" / "), ip.join(" / ")];
}

const PRON = {}; let ok = 0, miss = 0; const missing = new Set();
for (const [w, cat, m] of entries) {
  const k = w.toLowerCase().trim(); if (!k) continue;
  const p = pronounce(w, cat, m);
  if (!p) { miss++; missing.add(w); continue; }
  ok++;
  const homo = HOMO[k.replace(/[…?!.]/g, "").trim()] && HOMO[k].length > 1;
  if (homo) PRON[`${k}|${m}`] = p;
  if (!PRON[k] || !homo) PRON[k] = PRON[k] || p;
}
fs.writeFileSync(path.join(root, "pron.js"), "/* Pronunciación del vocabulario (figurada para hispanohablantes + AFI). Se genera con tools/build-pron.mjs desde el diccionario CMU (inglés de EE. UU.). */\nwindow.PRON = " + JSON.stringify(PRON) + ";\n");
console.log(`Pronunciación: ${ok} entradas con pronunciación · ${miss} sin (${(ok / (ok + miss) * 100).toFixed(1)} %) · ${Object.keys(PRON).length} claves · ${(fs.statSync(path.join(root, "pron.js")).size / 1024).toFixed(0)} KB`);
if (process.argv.includes("--faltan")) console.log([...missing].join(" · "));
