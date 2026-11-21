/* Buscador de gramática: analiza una frase en inglés y explica, en español natural,
   por qué está construida así. Funciona sin internet. Uso:
   GRAM.analyze(texto, {lookup}) → {toks, X, cards}
   GRAM.wordGuide(palabra) → tarjeta con todos los usos de una palabra difícil, o null
   GRAM.topics(consulta) → tarjetas de temas que coinciden con la búsqueda */
(function () {
  "use strict";
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const E = s => `<b lang="en">${esc(s)}</b>`;
  const I = s => `<i lang="en">${esc(s)}</i>`;
  const set = s => new Set(s.trim().split(/\s+/));

  /* ---------- listas de palabras ---------- */
  const IRR = `be was/were been|have had had|do did done|go went gone|get got got/gotten|make made made|take took taken|come came come|see saw seen|know knew known|think thought thought|say said said|tell told told|give gave given|find found found|feel felt felt|become became become|leave left left|put put put|bring brought brought|begin began begun|keep kept kept|hold held held|write wrote written|stand stood stood|hear heard heard|let let let|mean meant meant|set set set|meet met met|run ran run|pay paid paid|sit sat sat|speak spoke spoken|lie lay lain|lead led led|read read read|grow grew grown|lose lost lost|fall fell fallen|send sent sent|build built built|understand understood understood|draw drew drawn|break broke broken|spend spent spent|cut cut cut|rise rose risen|drive drove driven|buy bought bought|wear wore worn|choose chose chosen|seek sought sought|throw threw thrown|catch caught caught|deal dealt dealt|win won won|forget forgot forgotten|lend lent lent|sell sold sold|fight fought fought|teach taught taught|eat ate eaten|drink drank drunk|sing sang sung|swim swam swum|fly flew flown|sleep slept slept|wake woke woken|ride rode ridden|hide hid hidden|bite bit bitten|shake shook shaken|steal stole stolen|forgive forgave forgiven|freeze froze frozen|hurt hurt hurt|cost cost cost|hit hit hit|shut shut shut|quit quit quit|spread spread spread|feed fed fed|bleed bled bled|lay laid laid|light lit lit|shoot shot shot|shine shone shone|stick stuck stuck|swear swore sworn|tear tore torn|beat beat beaten|blow blew blown|dig dug dug|hang hung hung|ring rang rung|sink sank sunk|spin spun spun|strike struck struck|sweep swept swept|undertake undertook undertaken|overcome overcame overcome|withdraw withdrew withdrawn|arise arose arisen|bear bore borne|bend bent bent|bind bound bound|breed bred bred|burn burnt/burned burnt/burned|dream dreamt/dreamed dreamt/dreamed|learn learnt/learned learnt/learned|smell smelt/smelled smelt/smelled|spell spelt/spelled spelt/spelled|spill spilt/spilled spilt/spilled|forbid forbade forbidden|mistake mistook mistaken|prove proved proven/proved|show showed shown|sew sewed sewn|weep wept wept|wind wound wound|upset upset upset|bet bet bet|broadcast broadcast broadcast|fit fit fit|split split split`;
  const PAST = {}, PP = {}, IRRBASE = {};
  IRR.split("|").forEach(r => { const [b, p, pp] = r.split(" "); IRRBASE[b] = { p, pp };
    p.split("/").forEach(x => { (PAST[x] = PAST[x] || []).push(b); });
    pp.split("/").forEach(x => { (PP[x] = PP[x] || []).push(b); }); });

  const VERBS = set(`be have do go get make take come see know think say tell give find want need like love hate prefer try learn forget remember decide plan hope promise agree refuse expect seem start begin stop finish enjoy avoid mind keep suggest practice practise consider imagine miss help let ask answer work play live study eat drink buy sell pay cook clean wash watch look listen hear speak talk read write call open close wait walk run drive ride fly travel visit move stay leave arrive return meet send bring carry use change turn feel become put sit stand sleep wake wear win lose break build cut fall hold hurt lend lead mean show sing swim teach throw understand catch choose draw dream fight fix grow hide hit jump kill kiss laugh lie lift marry offer order pass pick prepare print pull push rain reach relax rent repair rest save share shop shout smile smoke snow spell spend steal taste thank touch train type vote wish worry explain describe discuss improve include increase invite join mention notice own pretend produce protect provide receive recommend reduce remove replace reply report require serve solve sound support suppose surprise translate trust care cry dance check copy cost count cover create deliver depend design develop die discover enter exist fail fill follow happen hurry install introduce invent manage measure park perform place pour prove publish realise realize recognise recognize rescue reserve ring roll rush search shake shine shoot shut sign sink smell sort spread stick strike suffer swear sweep tear tie upload download post text email book borrow afford allow arrange attempt beg bother claim dare deserve hesitate intend neglect proceed tend threaten appear continue decline aim struggle encourage advise remind persuade force warn permit admit deny risk quit delay postpone involve regret celebrate complain apply achieve accept add argue avoid believe belong breathe brush climb collect compare complete connect contain control cross decorate destroy disagree enjoy estimate fold guess hug identify ignore impress inform interrupt jog knock land like listen lock mix name note obey organize organise paint pack pass plant point pray prefer prevent promise protect pump punish rain record refer reflect relate rely remain repeat rescue respond retire review ruin sail satisfy scream seem settle shave shower sneeze spoil stare step suit supply surround survive switch tidy tour trade transfer treat trip unite unlock vanish wander warm water weigh whisper wonder yawn zip adapt address adopt affect analyse analyze approach approve assess assume attend avoid behave benefit blame bake boil borrow calculate cancel challenge charge chat chase cheat cheer chew close commit communicate concentrate confirm confuse consist contribute convince correct cough crash criticise criticize damage date deal debate decrease define delete demand depend deserve detect differ disappear dislike divide doubt drop earn educate eliminate employ end enhance ensure entertain escape establish evaluate examine exercise expand experience export express face fear feature fit focus forgive gain gather generate govern greet handle harm head heat hire host hunt imply import indicate influence insist inspire intend investigate judge justify kick limit link load maintain matter mend motivate obtain occur operate oppose overcome participate persuade pick plan predict present preserve pretend process promote propose purchase pursue question raise react recover recycle reduce reform register reject release rely remind represent request research resolve respect restore reveal ride rise score select separate shift sink skip solve sound speed spill stress stretch submit succeed suggest surf suspect tackle target tell tend test thrive tolerate track transform undergo upgrade urge value vary wait weaken withdraw yell`);
  const TOVERBS = set(`want need like love hate prefer try learn forget remember decide plan hope promise agree refuse expect seem start begin afford arrange attempt choose deserve fail hesitate intend manage offer prepare pretend tend threaten wait wish ask happen appear continue mean dare decline aim struggle help would hurry claim swear vow seek strive`);
  const OBJTO = set(`want ask tell expect allow need encourage invite advise remind teach persuade force warn order permit get require enable cause urge would`);
  const INGVERBS = set(`enjoy finish avoid mind keep suggest practise practice consider imagine miss deny admit risk quit delay postpone involve recommend can't`);
  const CHANGEVERBS = set(`stop remember forget try regret`);
  const MOTION = set(`go come travel walk drive fly move return get run ride hurry rush send take bring invite welcome head commute`);
  const TOPEOPLE = set(`talk speak listen say explain write reply give send show lend sell describe introduce happen belong apologise apologize mention complain report suggest`);
  const PLACENOUNS = set(`work school bed class church college university hospital prison town market jail sea court`);
  const SUBJP = set(`i you he she it we they`);
  const S3P = set(`he she it this that everyone everybody someone somebody nobody no-one anyone anybody everything something nothing anything one`);
  const PLP = set(`we they you these those people`);
  const OBJP = set(`me you him her it us them`);
  const POSSD = set(`my your his her its our their`);
  const DET = set(`the a an my your his her its our their this that these those some any every each no another much many few several`);
  const BE = set(`am is are was were be been being`);
  const BEPRES = set(`am is are`), BEPAST = set(`was were`);
  const MODALS = set(`can could should must might may will would shall`);
  const HAVE = set(`have has had having`);
  const DOAUX = set(`do does did`);
  const WH = set(`what where when why who whom whose which how`);
  const PREPS = set(`of in on at about for from with without before after by into onto than through during instead besides despite towards toward upon like against beyond`);
  const ADVS = set(`not never always already just ever really also still often usually sometimes probably even only rarely seldom hardly barely definitely certainly actually recently finally almost nearly simply frequently generally normally`);
  const FREQ = set(`always usually often sometimes never rarely seldom normally frequently generally occasionally hardly`);
  const NOTVERB = set(`thing things morning mornings evening evenings ceiling king ring rings sing spring string wing wings during building buildings nothing something anything everything meeting meetings feeling feelings painting interesting boring amazing exciting surprising tiring relaxing shocking annoying charming willing ongoing outgoing upcoming`);
  const ADJ_ING = set(`interesting boring amazing exciting surprising tiring relaxing shocking annoying charming willing ongoing outgoing upcoming confusing frightening disappointing embarrassing fascinating`);
  const ADJS = set(`happy glad sad sorry pleased ready able easy hard difficult nice good great important possible impossible necessary likely unlikely surprised excited afraid willing eager free lucky tired busy hungry thirsty cold hot late early sure certain right wrong proud careful kind rude interesting boring new old big small tall short young beautiful ugly expensive cheap fast slow strong weak rich poor clean dirty quiet noisy safe dangerous healthy sick ill fine bad better best worse worst angry bored worried nervous calm famous popular different similar same favourite favorite open closed full empty heavy light dark long large little high low warm cool wet dry hard soft sweet bitter funny serious friendly lazy clever smart smart`);
  const PHRASAL = {
    "give up": "rendirse, dejar (un hábito)", "look for": "buscar", "look after": "cuidar", "look forward": "esperar con ganas", "look up": "buscar (en el diccionario o internet)", "find out": "averiguar, enterarse",
    "get up": "levantarse", "wake up": "despertarse", "turn on": "prender, encender", "turn off": "apagar", "put on": "ponerse (ropa)", "take off": "quitarse (ropa); despegar (avión)",
    "pick up": "recoger", "set up": "montar, organizar", "go on": "continuar; pasar (What's going on?)", "carry on": "seguir, continuar", "come back": "volver", "go back": "regresar", "go out": "salir (a divertirse)",
    "sit down": "sentarse", "stand up": "ponerse de pie", "fill in": "llenar (un formulario)", "fill out": "llenar (un formulario)", "run out": "acabarse, quedarse sin", "get on": "subirse; llevarse bien",
    "get off": "bajarse", "get along": "llevarse bien", "break down": "dañarse, varar (un carro)", "call back": "devolver la llamada", "check in": "registrarse (hotel, vuelo)", "check out": "salir del hotel; mirar",
    "grow up": "crecer, criarse", "hang out": "pasar el rato, parchar", "make up": "inventar; reconciliarse; maquillarse", "put off": "aplazar", "turn down": "rechazar; bajar (el volumen)", "turn up": "aparecer; subir (el volumen)",
    "work out": "hacer ejercicio; resolver", "figure out": "descifrar, entender", "come up": "surgir", "bring up": "sacar un tema; criar", "throw away": "botar (a la basura)", "take care": "cuidarse", "calm down": "calmarse",
    "slow down": "ir más despacio", "show up": "aparecer, llegar", "sort out": "arreglar, solucionar", "point out": "señalar, hacer notar", "deal with": "lidiar con, encargarse de", "cut down": "reducir", "put up": "aguantar (put up with)",
    "get over": "superar", "go through": "pasar por (algo difícil)", "come across": "encontrarse con (por casualidad)", "rule out": "descartar", "carry out": "llevar a cabo", "take up": "empezar (un hobby); ocupar",
    "log in": "iniciar sesión", "sign up": "inscribirse", "write down": "anotar", "keep up": "seguir el ritmo", "catch up": "ponerse al día", "drop by": "pasar (de visita)", "end up": "terminar (en algo)", "give back": "devolver",
    "look out": "tener cuidado", "set off": "salir (de viaje)", "break up": "terminar (una relación)", "come on": "¡vamos!; encenderse", "hold on": "esperar un momento", "move on": "pasar la página, seguir adelante", "pass away": "fallecer"
  };

  /* ---------- tokenizar y expandir contracciones ---------- */
  function tokenize(text) {
    const toks = [], re = /[A-Za-zÀ-ÿ]+(?:['’][A-Za-z]+)*|\d+(?:[.,:]\d+)*(?:st|nd|rd|th|am|pm)?|[^\sA-Za-z\d]/g;
    let m; while ((m = re.exec(text))) toks.push({ t: m[0], s: m.index, e: m.index + m[0].length, word: /[A-Za-z\d]/.test(m[0]) });
    return toks;
  }
  const SPRON = set(`he she it that what who where how there here when why everyone everybody somebody someone nobody nothing something everything this which`);
  const HAS_NEXT = set(`been got gone done seen had made taken given eaten written become known finished lived worked started left lost told broken forgotten bought tried decided already never just ever`);
  function expand(toks) {
    const X = [];
    toks.forEach((tk, ti) => {
      if (!tk.word) { X.push({ w: tk.t, ti, punct: true }); return; }
      const low = tk.t.toLowerCase().replace(/’/g, "'");
      const add = (w, c) => X.push({ w, ti, c: c || null });
      let m;
      if (low === "can't" || low === "cannot") { add("can", low); add("not", low); }
      else if (low === "won't") { add("will", low); add("not", low); }
      else if (low === "shan't") { add("shall", low); add("not", low); }
      else if (low === "ain't") { add("is", low); add("not", low); }
      else if ((m = low.match(/^(.+)n't$/))) { add(m[1], low); add("not", low); }
      else if ((m = low.match(/^(.+)'m$/))) { add(m[1], low); add("am", low); }
      else if ((m = low.match(/^(.+)'re$/))) { add(m[1], low); add("are", low); }
      else if ((m = low.match(/^(.+)'ve$/))) { add(m[1], low); add("have", low); }
      else if ((m = low.match(/^(.+)'ll$/))) { add(m[1], low); add("will", low); }
      else if ((m = low.match(/^(.+)'d$/))) { add(m[1], low); add("'d", low); }
      else if (low === "let's") { add("let", low); add("us", low); }
      else if ((m = low.match(/^(.+)'s$/))) {
        if (SPRON.has(m[1])) { add(m[1], low); add("'s", low); }
        else { add(m[1], low); X.push({ w: "'s", ti, c: low, poss: true }); }
      }
      else if ((m = low.match(/^(.+s)'$/))) { add(m[1], low); X.push({ w: "'s", ti, c: low, poss: true }); }
      else add(low);
      if (/^[A-Z]/.test(tk.t)) X[X.length - 1].cap = true;
    });
    /* resolver 's (is/has) y 'd (would/had) mirando la palabra siguiente */
    X.forEach((x, i) => {
      const n = X[i + 1] && X[i + 1].w, nn = X[i + 2] && X[i + 2].w;
      if (x.w === "'s" && !x.poss) x.w = (HAS_NEXT.has(n) && !(n === "just" && /ing$/.test(nn || ""))) || (n === "not" && nn === "been") ? "has" : "is";
      if (x.w === "'d") x.w = (n === "better" || (PP[n] && !VERBS.has(n)) || /ed$/.test(n || "") && n !== "need" || n === "been" || (n === "never" || n === "already" || n === "just") && (PP[nn] || /ed$/.test(nn || ""))) ? "had" : "would";
    });
    return X;
  }

  /* ---------- análisis morfológico ---------- */
  let LOOK = () => null;
  const info = w => { try { return LOOK(w) || null; } catch (e) { return null; } };
  const posOf = w => { const d = info(w); return d ? String(d.pos || "") : ""; };
  function baseOf(w) {
    if (!w) return null;
    if (VERBS.has(w)) return w;
    if (PAST[w]) return PAST[w][0];
    if (PP[w]) return PP[w][0];
    const tries = [];
    if (/ies$/.test(w)) tries.push(w.slice(0, -3) + "y");
    if (/ied$/.test(w)) tries.push(w.slice(0, -3) + "y");
    if (/es$/.test(w)) tries.push(w.slice(0, -2));
    if (/s$/.test(w)) tries.push(w.slice(0, -1));
    if (/ed$/.test(w)) { tries.push(w.slice(0, -2), w.slice(0, -1)); if (/(.)\1ed$/.test(w)) tries.push(w.slice(0, -3)); }
    if (/ing$/.test(w)) { const s = w.slice(0, -3); tries.push(s, s + "e"); if (/(.)\1$/.test(s)) tries.push(s.slice(0, -1)); if (/y$/.test(s) && s.length > 2) tries.push(s.slice(0, -1) + "ie"); }
    for (const t of tries) if (VERBS.has(t)) return t;
    const d = info(w); if (d && d.base && d.base !== "-" && /verbo/.test(d.pos)) return d.base.toLowerCase();
    return null;
  }
  const isBase = w => !!w && (VERBS.has(w) || (/^verbo$/.test(posOf(w))));
  const isIng = w => !!w && /ing$/.test(w) && w.length > 4 && !NOTVERB.has(w) && (!!baseOf(w) || /-ing/.test(posOf(w)));
  const isPP = w => !!w && (!!PP[w] || (/ed$/.test(w) && !!baseOf(w)) || /participio/.test(posOf(w)));
  const isPast = w => !!w && (!!PAST[w] || (/ed$/.test(w) && !!baseOf(w)) || /pasado/.test(posOf(w)));
  const is3s = w => !!w && /s$/.test(w) && !BE.has(w) && w !== "has" && w !== "does" && w !== "was" && w !== "is" && !!baseOf(w) && baseOf(w) !== w && !/ed$|ing$/.test(w) || /3\.ª persona/.test(posOf(w));
  const isAdj = w => !!w && (ADJS.has(w) || /^adjetivo/.test(posOf(w)) || ADJ_ING.has(w));
  const isNoun = w => !!w && /^sustantivo|^nombre propio/.test(posOf(w));
  const isPluralNoun = w => /sustantivo \(plural\)/.test(posOf(w)) || w === "people" || w === "children" || w === "men" || w === "women";
  function gloss(w) {
    const d = info(w); if (!d || !d.m) return "";
    return String(d.m).split(/[;,]/)[0].replace(/\(.*?\)/g, "").trim();
  }
  const glossBase = w => gloss(w) || "";
  const ppOf = b => IRRBASE[b] ? IRRBASE[b].pp.split("/")[0] : (/e$/.test(b) ? b + "d" : /[^aeiou]y$/.test(b) ? b.slice(0, -1) + "ied" : b + "ed");
  const pastOf = b => IRRBASE[b] ? IRRBASE[b].p.split("/")[0] : ppOf(b);
  const sOf = b => b === "have" ? "has" : b === "do" ? "does" : b === "go" ? "goes" : /(s|sh|ch|x|z|o)$/.test(b) ? b + "es" : /[^aeiou]y$/.test(b) ? b.slice(0, -1) + "ies" : b + "s";

  /* ---------- análisis ---------- */
  function analyze(text, opt) {
    LOOK = (opt && opt.lookup) || LOOK;
    const toks = tokenize(text), X = expand(toks), cards = [], done = new Set();
    const w = i => (X[i] && !X[i].punct) ? X[i].w : null;
    const isP = i => X[i] && X[i].punct;
    const n = X.length;
    const card = c => { cards.push(c); };
    const skipA = i => { while (w(i) && ADVS.has(w(i))) i++; return i; };       /* salta not / never / already… */
    const prevWord = i => { i--; while (i >= 0 && isP(i)) i--; return i; };
    const sentStart = i => { let j = i - 1; while (j >= 0 && !(isP(j) && /[.!?]/.test(X[j].w))) j--; return j + 1; };
    const subjBefore = i => { let j = i - 1; if (j >= 0 && !isP(j)) return j; return -1; };
    const hasWord = (re, from, to) => { for (let k = from || 0; k < (to == null ? n : to); k++) if (w(k) && re.test(w(k))) return k; return -1; };
    const say = (from, to) => { const a = [], seen = new Set(); for (let k = from; k <= to; k++) if (X[k] && !seen.has(X[k].ti)) { seen.add(X[k].ti); a.push(toks[X[k].ti].t); } return a.join(" ").replace(/ ([,.!?;:])/g, "$1"); };
    const S = (i, j) => E(say(i, j == null ? i : j));
    const npEnd = i => { let k = i; while (w(k) && (DET.has(w(k)) || POSSD.has(w(k)) || isAdj(w(k)) || /^\d/.test(w(k)))) k++; return w(k) && !isP(k) && !MODALS.has(w(k)) && !BE.has(w(k)) ? k : Math.max(i, k - 1); };

    for (let i = 0; i < n; i++) {
      const a = w(i); if (!a) continue;
      const b = w(i + 1), c = w(i + 2), d = w(i + 3);

      /* ===== errores típicos (se muestran primero) ===== */
      const clauseStart = i === sentStart(i) || /^(and|but|so|because|when|if|then|or)$/.test(w(prevWord(i)) || "") || (isP(i - 1) && X[i - 1].w === ",");
      if ((a === "i" || a === "you" || a === "we" || a === "they") && b === "is" && clauseStart && done.add(i + 1)) card({ k: "err-is", warn: true, at: [i, i + 1], lv: "A1", t: "Ojo: aquí hay un error de concordancia",
        h: `${S(i)} nunca va con ${E("is")}. Con <b>${a === "i" ? "I" : a}</b> se usa ${E(a === "i" ? "am" : "are")}: ${E((a === "i" ? "I" : a) + (a === "i" ? " am" : " are"))}. ${E("is")} es solo para una tercera persona (${I("he, she, it")}).`, les: "a1-el-verbo-to-be-y-presentarte" });
      if (S3P.has(a) && b === "are" && !["one", "that"].includes(a) && clauseStart && done.add(i + 1)) card({ k: "err-are", warn: true, at: [i, i + 1], lv: "A1", t: "Ojo: aquí hay un error de concordancia",
        h: `Con ${S(i)} el verbo va en singular: ${E(a + " is")}, no ${E(a + " are")}.`, les: "a1-el-verbo-to-be-y-presentarte" });
      if (a === "people" && b === "is" && (clauseStart || (w(i - 1) === "the" && (i - 1 === sentStart(i)))) && done.add(i + 1)) card({ k: "err-people", warn: true, at: [i, i + 1], lv: "A1", t: "Ojo: people es plural",
        h: `En español decimos «la gente <b>es</b>» (singular), pero en inglés ${E("people")} es plural: ${E("people are")}. Igual pasa con ${E("the police are")}.` });
      if ((a === "he" || a === "she" || a === "it") && b === "do" && c === "not" && done.add(i + 1)) card({ k: "err-dont", warn: true, at: [i, i + 2], lv: "A1", t: "Ojo: con he / she / it es doesn't",
        h: `Con ${E(a)} el auxiliar es ${E("does")}: ${E(a + " doesn't")}. Es la misma regla de la -s de tercera persona: ${I("she works → she doesn't work")}.`, les: "a1-negativas-y-preguntas-en-presente" });
      if (MODALS.has(a) && b === "to" && isBase(c) && a !== "ought") card(done.add(i + 1) && { k: "err-modalto", warn: true, at: [i, i + 2], lv: "A1", t: `Ojo: después de ${a} no va to`,
        h: `Los modales (${I("can, must, should, will, might…")}) van pegados al verbo sin ${E("to")}: ${E(a + " " + c)}. La excepción famosa es ${E("ought to")}, y ${E("have to")} no es modal sino un verbo normal.`, les: "a1-can-y-can-t" });
      if (MODALS.has(a) && b && is3s(b) && !["was", "is", "has", "does"].includes(b) && !isNoun(b)) card({ k: "err-modals", warn: true, at: [i, i + 1], lv: "A1", t: `Ojo: después de ${a} el verbo va sin -s`,
        h: `Después de un modal el verbo va en su forma base, aunque el sujeto sea ${I("he/she/it")}: ${E(a + " " + baseOf(b))}, no ${E(a + " " + b)}.`, les: "a1-can-y-can-t" });
      if (DOAUX.has(a) && (a === "did" || a === "does") && (SUBJP.has(b) || b === "not") ) {
        const j = b === "not" ? i + 2 : (w(i + 2) === "not" ? i + 3 : i + 2), v = w(j);
        if (v && ((a === "did" && isPast(v) && !VERBS.has(v)) || (a === "does" && is3s(v) && !isNoun(v)))) card({ k: "err-didpast", warn: true, at: [i, j], lv: "A1", t: `Ojo: con ${a} el verbo vuelve a la forma base`,
          h: `${E(a)} ya está marcando ${a === "did" ? "el pasado" : "la tercera persona"}, así que el verbo principal no lo repite: ${E(baseOf(v))}, no ${E(v)}. En inglés la marca de tiempo va una sola vez: ${I(a === "did" ? "Did you go? / I didn't go" : "Does she work? / She doesn't work")}.`, les: a === "did" ? "a1-pasado-simple-regulares" : "a1-negativas-y-preguntas-en-presente" });
      }
      if (HAVE.has(a) && /^\d+$/.test(b || "") && /^years?$/.test(c || "")) card({ k: "err-age", warn: true, at: [i, i + 2], lv: "A1", t: "Ojo: la edad va con be, no con have",
        h: `En español «tengo ${b} años», pero en inglés la edad se dice con ${E("to be")}: ${E("I am " + b + " (years old)")}. En inglés no «tienes» años: los «eres».`, les: "a1-numeros-del-0-al-20-y-la-edad" });
      if (BE.has(a) && b === "agree") card({ k: "err-agree", warn: true, at: [i, i + 1], lv: "A2", t: "Ojo: agree es un verbo",
        h: `«Estoy de acuerdo» en inglés es solo ${E("I agree")}. ${E("agree")} ya es el verbo completo, no necesita ${E("am")}.` });
      if (a === "more" && /er$/.test(b || "") && isAdj(b)) card({ k: "err-morer", warn: true, at: [i, i + 1], lv: "A2", t: "Ojo: doble comparativo",
        h: `${E(b)} ya es comparativo (la -er significa «más»), así que ${E("more")} sobra: ${E(b)} solo.`, les: "a2-u2-l1" });

      /* ===== question tags ===== */
      if (isP(i - 1) && X[i - 1].w === "," && (BE.has(a) || DOAUX.has(a) || MODALS.has(a) || HAVE.has(a)) && (w(i + 1) === "not" ? SUBJP.has(w(i + 2)) : SUBJP.has(b)) && (isP(i + (w(i + 1) === "not" ? 3 : 2)) || !w(i + (w(i + 1) === "not" ? 3 : 2)))) {
        card({ k: "tag", at: [i, i + (w(i + 1) === "not" ? 2 : 1)], lv: "B1", t: "Question tag: ¿cierto?, ¿no?", h: `Esa preguntica al final (${E(say(i, i + (w(i + 1) === "not" ? 2 : 1)))}) es el «¿cierto?» o «¿no?» del español. Se forma con el mismo auxiliar de la frase y el pronombre del sujeto, y va al revés: si la frase es afirmativa, la cola es negativa (${I("It's cold, isn't it?")}) y al revés (${I("You don't smoke, do you?")}).`, f: "frase afirmativa + auxiliar negativo + pronombre?", les: "b1-u5-l5" });
        continue;
      }

      /* ===== it como sujeto obligatorio ===== */
      if (a === "it" && (w(i + 1) === "is" || w(i + 1) === "was") && i === sentStart(i)) {
        const v = w(skipA(i + 2));
        if (v && (/^(raining|snowing|cold|hot|sunny|windy|cloudy|late|early|time|important|necessary|possible|easy|difficult|hard|nice|good|great|true|clear|obvious)$/.test(v) || /^\d/.test(v) || /o'clock/.test(v))) {
          card({ k: "it", at: [i, i + 1], lv: "A1", t: "It: el sujeto que en español no se dice", h: `En español decimos «llueve», «es tarde», «es importante» sin sujeto. El inglés <b>siempre necesita un sujeto</b>, así que pone ${E("it")} aunque no signifique nada: ${I("It's raining")}, ${I("It's late")}, ${I("It's important to rest")}. Decir solo ${I("Is raining")} es un error muy típico de los hispanohablantes.`, f: "It + is + clima / hora / adjetivo", les: "a1-clima" });
          if (!isIng(v)) done.add(i + 1);
        }
      }

      /* ===== there is / there are ===== */
      if (a === "there" && BE.has(b)) { done.add(i + 1);
        const pl = b === "are" || b === "were";
        card({ k: "there", at: [i, i + 1], lv: "A1", t: `${say(i, i + 1)}: decir que algo existe («hay»)`,
          h: `El español usa una sola palabra, «hay», pero el inglés necesita un sujeto, así que pone ${E("there")} como sujeto «de relleno» y luego el verbo ${E("be")}. Por eso es ${E("there " + b)} y no solo ${E(b)}. El verbo concuerda con lo que viene después: ${pl ? `aquí es plural (${E(b)})` : `aquí es singular (${E(b)})`}: ${I("there is a car / there are two cars")}.${BEPAST.has(b) ? ` Como está en pasado, es «había / hubo».` : ""}`,
          f: "there + is/are (+ cosa) · there + was/were (pasado)", les: "a1-there-is-there-are-some-any" });
        continue; }

      /* ===== used to / be used to / get used to ===== */
      if (a === "used" && b === "to") {
        const be = BE.has(w(i - 1)) || /^get|^got|getting/.test(w(i - 1) || "");
        if (be || isIng(c) || DET.has(c) || OBJP.has(c)) {
          done.add(i + 1); card({ k: "beused", at: [i - (be ? 1 : 0), i + 2], lv: "B1", t: `${say(be ? i - 1 : i, i + 1)}: estar acostumbrado`,
            h: `Ojo con esta trampa: ${E("be used to")} significa «estar acostumbrado a» y ${E("get used to")} «acostumbrarse a». Aquí ${E("to")} es una preposición (como «a»), por eso lo que sigue es un sustantivo o un verbo con <b>-ing</b>: ${I("I'm used to working late")}. No confundir con ${E("used to + verbo")} (lo que solías hacer).`,
            f: "be / get used to + sustantivo o verbo-ing", les: "b1-u2-l3" }); }
        else { done.add(i + 1); card({ k: "usedto", at: [i, i + 2], lv: "A2", t: `${say(i, i + 2)}: lo que solías hacer antes`,
          h: `${E("used to")} + verbo base cuenta un hábito o una situación del pasado que <b>ya no</b> es así. Equivale a «solía» o al imperfecto del español (${I("I used to live there")} = «yo vivía allá»). Va siempre en pasado (${E("used")}) y el verbo que sigue va en forma base${c ? ` (${E(c)})` : ""}. En pregunta y negativa pierde la d: ${I("Did you use to…? / I didn't use to…")}.`,
          f: "used to + verbo base", les: "a2-u7-l1" }); }
        continue;
      }

      /* ===== going to (futuro) ===== */
      if (a === "going" && b === "to" && BE.has(w(i - 1)) && isBase(c) && !DET.has(c) && !PLACENOUNS.has(c)) {
        done.add(i + 1); done.add(i - 1);
        card({ k: "goingto", at: [i - 1, i + 2], lv: "A1", t: `${say(i - 1, i + 2)}: un plan o una intención`,
          h: `${E("be going to")} + verbo es la forma de hablar de planes que ya decidiste o de algo que ya se ve venir. Es igualito al español «voy a + verbo»: ${I("I'm going to study")} = «voy a estudiar». Por eso lleva ${E(w(i - 1))} (concuerda con el sujeto), ${E("going")} y ${E("to")}, y después el verbo en forma base: ${E(c)}${gloss(c) ? ` («${esc(gloss(c))}»)` : ""}.`,
          f: "am / is / are + going to + verbo base", les: "a1-going-to-planes-e-invitaciones" });
        continue;
      }

      /* ===== have to / ought to ===== */
      if (HAVE.has(a) && b === "to" && isBase(c)) { done.add(i + 1);
        const t = a === "had" ? "pasado" : a === "has" ? "tercera persona" : "presente";
        card({ k: "haveto", at: [i, i + 2], lv: "A2", t: `${say(i, i + 2)}: obligación («tener que»)`,
          h: `${E("have to")} es exactamente «tener que»: ${I("I have to work")} = «tengo que trabajar». Por eso, igual que en español, después va ${E("to")} + verbo. ${a === "has" ? `Aquí es ${E("has")} porque el sujeto es tercera persona (he/she/it).` : a === "had" ? `Aquí está en pasado: ${E("had to")} = «tuve / tenía que».` : ""} A diferencia de ${E("must")}, sí es un verbo normal: se niega con ${E("don't")} (${I("you don't have to")} = «no tienes que», no es obligatorio).`,
          f: "have / has / had + to + verbo base", les: "a2-u5-l3", x: t });
        continue; }
      if (a === "ought" && b === "to") { done.add(i + 1); card({ k: "ought", at: [i, i + 2], lv: "B1", t: "ought to: debería",
        h: `${E("ought to")} significa lo mismo que ${E("should")} («debería»). Es el único modal que lleva ${E("to")}. Suena un poco más formal.`, f: "ought to + verbo base", les: "a2-u5-l2" }); continue; }

      /* ===== be able to / about to / supposed to / likely to / bound to ===== */
      if (BE.has(a) && ["able", "about", "supposed", "likely", "unlikely", "bound", "allowed", "due"].includes(b) && c === "to") { done.add(i + 2);
        const M = { able: ["poder, ser capaz de", "Se usa en los tiempos donde can no existe: will be able to, have been able to.", "b1-u7-l5"], about: ["estar a punto de", "Algo que va a pasar en segundos.", "b2-u7-l1"], supposed: ["se supone que, deber (según lo planeado)", "Habla de lo esperado o acordado, que a veces no se cumple.", "b2-u7-l2"], likely: ["ser probable que", "Probabilidad alta.", "b2-u7-l3"], unlikely: ["ser poco probable que", "Probabilidad baja.", "b2-u7-l3"], bound: ["ser casi seguro que", "Certeza muy alta: «seguro que pasa».", "b2-u7-l3"], allowed: ["tener permiso para, poder", "Habla de permisos y reglas.", "b2-u7-l2"], due: ["estar previsto que", "Algo programado.", "b2-u7-l3"] }[b];
        card({ k: "beX-to", at: [i, i + 3], lv: "B1", t: `be ${b} to: ${M[0]}`,
          h: `${E("be " + b + " to")} + verbo base es una expresión fija que significa «${M[0]}». ${M[1]} El ${E("to")} es el de infinitivo, por eso el verbo siguiente${w(i + 3) ? ` (${E(w(i + 3))})` : ""} va en forma base, y ${E(a)} cambia según el sujeto y el tiempo.`, f: `be ${b} to + verbo base`, les: M[2] });
        continue; }

      /* ===== verbo + objeto + to (I want you to come) ===== */
      if (OBJTO.has(baseOf(a) || a) && b && (OBJP.has(b) || (DET.has(b) && w(i + 3) === "to") || (X[i + 1] && X[i + 1].cap && c === "to")) ) {
        const j = OBJP.has(b) || (X[i + 1] && X[i + 1].cap) ? i + 2 : i + 3;
        if (w(j) === "to" && isBase(w(j + 1))) { done.add(j);
          const v = w(j + 1), base = baseOf(a) || a;
          card({ k: "objto", at: [i, j + 1], lv: "B1", t: `${say(i, j + 1)}: querer / pedir que alguien haga algo`,
            h: `En español decimos «quiero <b>que</b> vengas», con «que» y subjuntivo. El inglés no hace eso: pone la persona como objeto y luego ${E("to")} + verbo: ${E(say(i, j + 1))}. Por eso no se dice ${I(`${base} that you ${v}`)} y menos ${I(`${base} you ${sOf(v) === v ? v : v}`)} sin ${E("to")}. Funciona igual con ${I("ask, tell, need, expect, allow, would like")}: ${I("She asked me to wait")} = «me pidió que esperara».`,
            f: "verbo + persona (me, you, him…) + to + verbo base", les: "b1-u2-l4" });
        }
      }

      /* ===== to: todos los casos ===== */
      if (a === "to" && !done.has(i)) {
        const p = prevWord(i), pw = w(p), pb = baseOf(pw) || pw;
        const nextVerb = b && isBase(b) && !DET.has(b) && !OBJP.has(b) && !POSSD.has(b) && !(X[i + 1] && X[i + 1].cap && i + 1 !== sentStart(i + 1)) && !/^\d/.test(b);
        const placeLike = b && (PLACENOUNS.has(b) && MOTION.has(pb));
        if (nextVerb && !placeLike) {
          const v = b, g = gloss(v);
          const intro = `Aquí ${E("to " + v)} es el <b>infinitivo</b>: la forma «sin conjugar» del verbo, como «${g ? esc(g) : "-ar, -er, -ir"}» en español. En español el infinitivo es una sola palabra (la terminación lo marca), pero en inglés el verbo no cambia, así que se le pone ${E("to")} delante para indicar «este es el verbo en infinitivo».`;
          if (pw && TOVERBS.has(pb)) {
            const both = ["like", "love", "hate", "prefer", "start", "begin", "continue"].includes(pb), chg = ["remember", "forget", "try", "stop", "regret"].includes(pb);
            card({ k: "to-inf-verb", at: [p, i + 1], lv: "A1", t: `${say(p, i + 1)}: verbo + to + verbo`,
              h: `${intro} Cuando un verbo como ${E(pw)} va seguido de otra acción, esa segunda acción va con ${E("to")}: ${E(say(p, i + 1))} = «${esc(gloss(pb) || pb)} ${g ? esc(g) : ""}». Esto pasa con ${I("want, need, would like, decide, hope, plan, try, learn, forget…")} El primer verbo es el que se conjuga; el segundo se queda quieto con su ${E("to")}.${both ? ` Con ${E(pb)} también se puede usar -ing (${I(pb + " " + (v.replace(/e$/, "") + "ing"))}) casi con el mismo significado.` : ""}${chg ? ` Ojo: con ${E(pb)} cambiar a -ing cambia el significado (${I(pb === "stop" ? "stop to smoke = parar para fumar / stop smoking = dejar de fumar" : pb === "remember" ? "remember to call = acordarse de llamar / remember calling = recordar haber llamado" : pb === "forget" ? "forget to lock = olvidar cerrar / forget meeting = olvidar haber conocido" : pb === "try" ? "try to open = intentar abrir / try opening = probar abriendo" : "regret to tell = lamentar decir (ahora) / regret telling = arrepentirse de haber dicho")}).` : ""}${pb === "would" ? "" : ""}`,
              f: "verbo + to + verbo base", les: pb === "want" || pb === "would" || pb === "like" ? "a1-going-to-planes-e-invitaciones" : "b1-u2-l4" });
          } else if (pw && (pw === "too" || pw === "enough" || (w(p - 1) === "too" && isAdj(pw)) || (pw && w(p + 0) && w(i - 1) === "enough"))) {
            card({ k: "to-tooenough", at: [p, i + 1], lv: "A2", t: `too / enough + to: demasiado o suficiente para`,
              h: `${E("too")} (demasiado) y ${E("enough")} (suficiente) se completan con ${E("to")} + verbo, que aquí equivale a «para»: ${I("It's too hot to sleep")} = «hace demasiado calor para dormir», ${I("old enough to drive")} = «suficientemente grande para manejar». ${intro}`, f: "too + adjetivo + to + verbo · adjetivo + enough + to + verbo", les: "a2-u2-l3" });
          } else if (pw && isAdj(pw) && !TOVERBS.has(pw)) {
            card({ k: "to-adj", at: [p, i + 1], lv: "A2", t: `${say(p, i + 1)}: adjetivo + to + verbo`,
              h: `Muchos adjetivos se completan con ${E("to")} + verbo: ${E(say(p, i + 1))}. En español a veces se usa «de» o «para»: ${I("happy to help")} = «feliz de ayudar», ${I("easy to understand")} = «fácil de entender», ${I("ready to go")} = «listo para salir». ${intro}`, f: "be + adjetivo + to + verbo base", les: "b1-u2-l4" });
          } else if (pw && WH.has(pw)) {
            card({ k: "to-wh", at: [p, i + 1], lv: "B1", t: `${say(p, i + 1)}: qué / cómo / dónde + hacer`,
              h: `Después de palabras como ${I("how, what, where, when, who")} se puede poner ${E("to")} + verbo para hablar de lo que hay que hacer: ${I("I don't know what to say")} = «no sé qué decir», ${I("how to cook")} = «cómo cocinar». Es exactamente como el infinitivo del español después de «qué / cómo». ${intro}`, f: "how / what / where + to + verbo", les: "b1-u2-l4" });
          } else if (pw && (/^(something|anything|nothing|everything|someone|somebody|anybody|nobody|anyone|somewhere|anywhere|nowhere|time|way|chance|reason|place|decision|plan|money|thing|things|one|lot|opportunity|right|ability|attempt|effort|permission|need|desire|plenty)$/.test(pw) || (isNoun(pw) && w(p - 1) === "of") || (isNoun(pw) && /^(a|an|some|no|any|more|enough)$/.test(w(p - 1) || "") && [2, 3, 4].some(k => /^(have|has|had|need|needs|needed|find|found|give|gave|got|get|is|are|was|were|buy|bought|want|wants)$/.test(w(p - k) || "")))) && !MOTION.has(pb)) {
            card({ k: "to-noun", at: [p, i + 1], lv: "A2", t: `${say(p, i + 1)}: algo para hacer`,
              h: `Un sustantivo se puede completar con ${E("to")} + verbo para decir para qué es o qué hay que hacer con él: ${I("something to eat")} = «algo de comer / algo para comer», ${I("time to go")} = «hora de irnos», ${I("a book to read")} = «un libro para leer». ${intro}`, f: "sustantivo + to + verbo base", les: "a2-u7-l5" });
          } else if (i === sentStart(i) || p < 0) {
            card({ k: "to-start", at: [i, i + 1], lv: "B1", t: `${say(i, i + 1)} al principio: «para…»`,
              h: `Una frase que empieza con ${E("to")} + verbo suele decir el propósito («para…»): ${I("To learn English, you need practice")} = «para aprender inglés necesitas práctica». ${intro}`, f: "To + verbo, … (propósito)", les: "a2-u7-l5" });
          } else {
            card({ k: "to-purpose", at: [i, i + 1], lv: "A2", t: `${say(i, i + 1)}: para qué (propósito)`,
              h: `Este ${E("to")} responde «¿para qué?»: equivale a «para» en español. ${I("I went to the store to buy milk")} = «fui a la tienda para comprar leche». Un error muy típico es decir ${I("for buy")}: con un verbo, el «para» del propósito es ${E("to")}, no ${E("for")} (${E("for")} va con sustantivos: ${I("for my mom")}). ${intro}`, f: "acción + to + verbo base (= para + verbo)", les: "a2-u7-l5" });
          }
        } else if (b && isIng(b)) {
          card({ k: "to-ing", at: [p >= 0 ? p : i, i + 1], lv: "B1", t: `${say(p >= 0 ? p : i, i + 1)}: to + -ing`,
            h: `Aquí ${E("to")} no es de infinitivo sino una <b>preposición</b> (como «a»). Y después de una preposición el verbo va con -ing. Pasa en expresiones fijas como ${I("look forward to seeing you")} («tengo ganas de verte»), ${I("be used to working")}, ${I("in addition to studying")}, ${I("object to paying")}. Truco: si puedes poner un sustantivo en lugar del verbo (${I("look forward to the party")}), el ${E("to")} es preposición.`, f: "expresión + to (preposición) + verbo-ing", les: "b1-u2-l3" });
        } else if (pw && w(hasWord(/^from$/, 0, i)) && hasWord(/^from$/, 0, i) >= 0) {
          card({ k: "to-range", at: [hasWord(/^from$/, 0, i), i + 1], lv: "A1", t: "from … to: de … a / desde … hasta",
            h: `${E("from")} marca el punto de partida y ${E("to")} el de llegada, en lugares, horas o fechas: ${I("from Monday to Friday")} = «de lunes a viernes», ${I("from 9 to 5")}.`, f: "from + inicio + to + final", les: "a1-la-hora-y-la-rutina-diaria" });
        } else if (pw === "been") {
          card({ k: "to-been", at: [p - (HAVE.has(w(p - 1)) ? 1 : 0), npEnd(i + 1)], lv: "A2", t: `${say(p - (HAVE.has(w(p - 1)) ? 1 : 0), npEnd(i + 1))}: haber ido a un lugar`,
            h: `${E("have been to")} + lugar significa «haber ido / haber estado en» (y ya volviste): ${I("She has been to Paris")} = «ella ha estado en París». Aquí ${E("been")} funciona como participio de ${E("go")} para hablar de experiencias. Compara: ${I("She has gone to Paris")} = «se fue a París» (y todavía está allá).`, f: "have / has been to + lugar", les: "a2-u4-l1" });
        } else if (pw && MOTION.has(pb)) {
          card({ k: "to-dir", at: [p, npEnd(i + 1)], lv: "A1", t: `${say(p, npEnd(i + 1))}: movimiento hacia un lugar`,
            h: `Con verbos de movimiento (${I("go, come, travel, walk, drive, fly, move…")}) ${E("to")} indica el destino, como «a» en español: ${E(say(p, npEnd(i + 1)))}. Ojo: no se usa ${E("to")} con ${I("home, here, there, downtown")}: ${I("I go home")} (no ${I("go to home")}).${PLACENOUNS.has(b) ? ` Con ${E(b)} no se pone ${E("the")}: ${I("go to " + b)} habla de la actividad («ir a trabajar / a estudiar / a dormir»), no del edificio.` : ""}`,
            f: "verbo de movimiento + to + lugar", les: "a1-pedir-y-dar-direcciones" });
        } else if (pw && (TOPEOPLE.has(pb) || [1, 2, 3, 4].some(k => w(p - k) && TOPEOPLE.has(baseOf(w(p - k)) || w(p - k))) && (OBJP.has(b) || (X[i + 1] && X[i + 1].cap) || DET.has(b) || POSSD.has(b)))) {
          card({ k: "to-person", at: [TOPEOPLE.has(pb) ? p : i, npEnd(i + 1)], lv: "A1", t: `${say(TOPEOPLE.has(pb) ? p : i, npEnd(i + 1))}: a quién va dirigida la acción`,
            h: `Aquí ${E("to")} señala a la persona que recibe algo o a quien le hablas, como «a» en español: ${I("talk to me")} = «háblame», ${I("give it to Ana")} = «dáselo a Ana», ${I("listen to music")} = «escuchar música». Algunos verbos lo piden siempre: ${I("listen to, talk to, explain to, belong to, happen to")}. Ojo: ${E("tell")} no lo lleva (${I("tell me")}, no ${I("tell to me")}).`,
            f: "verbo + to + persona / cosa", les: "a1-objeto" });
        } else if (/^\d/.test(pw || "") || /^(quarter|half|ten|five|twenty|twenty-five)$/.test(pw || "")) {
          card({ k: "to-time", at: [p, i + 1], lv: "A1", t: "La hora: … to …", h: `En la hora, ${E("to")} significa «para»: ${I("ten to five")} = «diez para las cinco» (4:50), ${I("a quarter to six")} = «un cuarto para las seis».`, f: "minutos + to + hora", les: "a1-la-hora-y-la-rutina-diaria" });
        } else {
          card({ k: "to-prep", at: [i, npEnd(i + 1)], lv: "A1", t: `${say(i, npEnd(i + 1))}: to como preposición`,
            h: `Aquí ${E("to")} no va con un verbo, así que es una <b>preposición</b>: significa «a», «hacia» o «para» (dirección, destino o quién recibe algo). Regla rápida para saber cuál ${E("to")} es: si después viene un verbo en forma base (${I("to eat, to go")}) es infinitivo; si viene un sustantivo, un lugar o una persona (${I("to the park, to me")}) es preposición.`, f: "to + lugar / persona / cosa" });
        }
        continue;
      }

      /* ===== modales ===== */
      if (MODALS.has(a) && !done.has(i)) {
        let j = skipA(i + 1); if (SUBJP.has(w(j)) || (X[j] && X[j].cap)) j = skipA(j + 1);
        const v = w(j), neg = w(i + 1) === "not";
        if (v === "have" && isPP(w(j + 1)) && w(j + 1) !== "to") {
          const M = { should: ["debería haber…", "algo que era buena idea y no se hizo (arrepentimiento o crítica)", "b1-u7-l2"], could: ["podría haber…", "una posibilidad del pasado que no se aprovechó, o una deducción", "b1-u7-l2"], would: ["habría…", "el resultado imaginario de un pasado que no ocurrió (tercer condicional)", "b1-u7-l1"], must: ["seguro que…", "una deducción casi segura sobre el pasado", "b1-u7-l3"], might: ["puede que haya…", "una posibilidad sobre el pasado", "b1-u7-l3"], may: ["puede que haya…", "una posibilidad sobre el pasado", "b1-u7-l3"], can: ["no puede haber…", "(casi siempre con can't) una deducción negativa: es imposible que haya pasado", "b1-u7-l3"], will: ["habrá…", "algo que estará terminado en un momento del futuro (future perfect)", "b2-u1-l2"] }[a] || ["", "", ""];
          card({ k: "modalhave", at: [i, j + 1], lv: "B1", t: `${say(i, j + 1)}: ${M[0]}`,
            h: `Los modales no tienen pasado propio, así que para hablar del pasado se usa <b>modal + have + participio</b>: ${E(say(i, j + 1))}. Expresa ${M[1]}. El ${E("have")} nunca cambia a ${E("has")} ni a ${E("had")} (va después de un modal), y el verbo va en participio: ${E(w(j + 1))}${baseOf(w(j + 1)) && baseOf(w(j + 1)) !== w(j + 1) ? ` (de ${E(baseOf(w(j + 1)))})` : ""}.`,
            f: "modal + have + participio", les: M[2] });
          done.add(j); continue;
        }
        if (a === "would" && (v === "like" || v === "love" || v === "prefer")) {
          card({ k: "wouldlike", at: [i, j], lv: "A1", t: `${say(i, j)}: pedir o desear con cortesía`,
            h: `${E("would like")} es la forma amable de ${E("want")}: equivale a «me gustaría / quisiera». ${I("I'd like a coffee")} suena mucho más educado que ${I("I want a coffee")}. Va con un sustantivo o con ${E("to")} + verbo (${I("I'd like to go")}). ${E("'d")} es la contracción de ${E("would")}.`,
            f: "would like + sustantivo · would like + to + verbo", les: "a1-en-el-restaurante" });
          continue;
        }
        if (a === "would" && v === "rather") { card({ k: "rather", at: [i, j + 1], lv: "A2", t: "would rather: preferiría", h: `${E("would rather")} (${E("I'd rather")}) significa «preferiría» y va con el verbo en forma base, sin ${E("to")}: ${I("I'd rather stay home")}. Si hablas de otra persona, el verbo va en pasado: ${I("I'd rather you stayed")} («preferiría que te quedaras»).`, f: "would rather + verbo base (than + verbo base)", les: "a2-u8-l2" }); continue; }
        if (a === "will" && v === "be" && isIng(w(j + 1))) { card({ k: "futcont", at: [i, j + 1], lv: "B2", t: `${say(i, j + 1)}: futuro continuo`, h: `${E("will be")} + -ing describe una acción que <b>estará en progreso</b> en un momento del futuro: ${I("This time tomorrow I'll be flying")} = «mañana a esta hora estaré volando».`, f: "will be + verbo-ing", les: "b2-u1-l2" }); done.add(j); continue; }
        if (isBase(v) || v === "be" || v === "have") {
          const MD = {
            can: ["poder, saber hacer algo", "habilidad, posibilidad o permiso: «puedo / sé»", "a1-can-y-can-t"],
            could: ["podía, podría", "habilidad en el pasado (podía), una posibilidad o una petición amable (¿podrías…?)", "b1-u7-l5"],
            should: ["debería", "un consejo o lo que es buena idea", "a2-u5-l2"],
            must: ["deber, tener que (obligación fuerte)", "una obligación fuerte o una deducción casi segura («debe de ser…»)", "a2-u5-l4"],
            might: ["puede que, quizás", "una posibilidad pequeña", "a2-u7-l2"],
            may: ["puede que; ¿puedo…? (formal)", "posibilidad o permiso formal", "a2-u7-l2"],
            will: ["futuro (-ré, -rás…)", "el futuro: decisiones del momento, promesas y predicciones", "a2-u3-l3"],
            would: ["-ría (condicional)", "algo imaginario o hipotético («haría, iría»), o cortesía", "b1-u3-l3"],
            shall: ["¿…?, ofrecer o sugerir", "ofrecer o sugerir en preguntas: Shall we go? = ¿nos vamos?", "a2-u3-l3"]
          }[a];
          const q = i === sentStart(i) || WH.has(w(prevWord(i)));
          card({ k: "modal-" + a, at: [i, j], lv: a === "would" || a === "might" || a === "may" ? "A2" : "A1", t: `${say(i, j)}: ${MD[0]}`,
            h: `${E(a)} es un <b>verbo modal</b> y expresa ${MD[1]}. Los modales tienen tres reglas que los hacen fáciles: (1) el verbo que sigue va en <b>forma base, sin ${E("to")}</b>: ${E(a + " " + v)}, nunca ${I(a + " to " + v)}; (2) no cambian con el sujeto (${I("I " + a + ", she " + a)}, sin -s); (3) se niegan y preguntan solos, sin ${E("do")}: ${I(a + " not / " + (a === "can" ? "can't" : a === "will" ? "won't" : a + "n't"))}, ${I(a.charAt(0).toUpperCase() + a.slice(1) + " you…?")}.${neg ? ` Aquí está en negativo: ${E(say(i, i + 1))}.` : ""}${q && i === sentStart(i) ? ` Aquí abre una pregunta: el modal se pone antes del sujeto.` : ""}${a === "will" && X[i].c ? ` ${E(X[i].c)} es la contracción.` : ""}`,
            f: `${a} + verbo base`, les: MD[2] });
          continue;
        }
      }

      /* ===== condicionales ===== */
      if (a === "if" || a === "unless") {
        const end = (() => { let k = i + 1; while (k < n && !(isP(k) && /[.!?]/.test(X[k].w))) k++; return k; })();
        const seg = X.slice(i, end).map(x => x.w);
        const hasWill = seg.includes("will") || seg.includes("won't"), hasWould = seg.includes("would"), hadPP = seg.some((x, k) => x === "had" && isPP(seg[k + 1] || "")),
          wouldHave = seg.some((x, k) => (x === "would" || x === "could" || x === "might") && seg[k + 1] === "have"), pastIn = seg.slice(1).some(x => isPast(x) && !isPP(x) || x === "were" || x === "was" || (isPast(x) && !seg.includes("have")));
        let t, h, f, les, lv;
        if (hadPP && wouldHave) { lv = "B1"; t = "Tercer condicional: lo que habría pasado"; h = `Esta frase imagina un pasado que <b>no ocurrió</b> y su resultado: «si hubiera…, habría…». La parte con ${E("if")} va en pasado perfecto (${E("had")} + participio) y el resultado con ${E("would have")} + participio. ${I("If I had studied, I would have passed")} = «si hubiera estudiado, habría pasado». Ojo: nunca va ${I("would")} en la parte del ${E("if")}.`; f = "If + had + participio, would have + participio"; les = "b1-u7-l1"; }
        else if (hadPP && hasWould) { lv = "B2"; t = "Condicional mixto"; h = `Mezcla un pasado que no ocurrió (${E("had")} + participio) con un resultado en el presente (${E("would")} + verbo): ${I("If I had studied medicine, I would be a doctor now")} = «si hubiera estudiado medicina, ahora sería médico».`; f = "If + had + participio, would + verbo base"; les = "b2-u2-l2"; }
        else if (hasWould || (pastIn && !hasWill)) { lv = "B1"; t = "Segundo condicional: situaciones imaginarias"; h = `Esta frase imagina algo que no es real ahora o es poco probable: «si tuviera…, haría…». Aunque hable del presente, la parte con ${E("if")} va en <b>pasado</b> (${I("If I had money")}) y el resultado con ${E("would")} + verbo base. Ese pasado no es tiempo real, es la forma de marcar «esto es imaginario». Con be se usa ${E("were")} para todas las personas: ${I("If I were you…")} = «yo que tú…».`; f = "If + pasado, would + verbo base"; les = "b1-u3-l3"; }
        else if (hasWill || seg.some(x => MODALS.has(x))) { lv = "A2"; t = `Primer condicional: si pasa esto, pasará aquello`; h = `Habla de algo posible en el futuro y su consecuencia. Lo curioso para un hispanohablante: la parte con ${E(a)} va en <b>presente</b>, no en futuro. ${I("If it rains, I will stay home")} = «si llueve, me quedaré en casa». Nunca ${I("If it will rain")}. El ${E("will")} va solo en la parte del resultado.${a === "unless" ? ` ${E("unless")} = «a menos que» (= if… not).` : ""}`; f = "If + presente, will + verbo base"; les = "a2-u6-l3"; }
        else { lv = "A2"; t = "Condicional cero: verdades generales"; h = `Cuando las dos partes van en presente (${I("If you heat ice, it melts")}), la frase dice algo que siempre pasa: es una regla o un hecho general. ${E("if")} aquí casi significa «cuando».`; f = "If + presente, presente"; les = "a2-u6-l3"; }
        card({ k: "cond", at: [i, end - 1], lv, t, h, f, les }); continue;
      }

      /* ===== wish ===== */
      if (/^wish(es|ed)?$/.test(a) && b && (SUBJP.has(b) || (X[i + 1] && X[i + 1].cap))) {
        const v = w(i + 2); let h;
        if (v === "had" && isPP(w(i + 3))) h = `${E("wish")} + pasado perfecto (${E("had")} + participio) expresa arrepentimiento por el pasado: ${I("I wish I had studied")} = «ojalá hubiera estudiado».`;
        else if (v === "would") h = `${E("wish")} + ${E("would")} expresa que te molesta algo que otra persona hace y quieres que cambie: ${I("I wish you would stop")} = «ojalá dejaras de…».`;
        else h = `${E("wish")} + pasado expresa un deseo sobre el <b>presente</b> que no es real: ${I("I wish I had more time")} = «ojalá tuviera más tiempo». El pasado (${v ? E(v) : ""}) no significa que sea pasado: marca que es imaginario, como el «tuviera» del español. Con be se prefiere ${E("were")}: ${I("I wish I were taller")}.`;
        card({ k: "wish", at: [i, i + 3], lv: "B1", t: `${say(i, i)}: ojalá…`, h, f: "wish + pasado (presente) · wish + had + participio (pasado)", les: "b1-u3-l4" }); continue;
      }

      /* ===== inversión y énfasis (C1) ===== */
      if (i === sentStart(i) && ["never", "rarely", "seldom", "hardly", "scarcely", "little", "nowhere", "only", "not", "no", "under", "barely", "at", "in", "on"].includes(a)) {
        let k = i + 1, lim = Math.min(n, i + 8); while (k < lim && !(MODALS.has(w(k)) || HAVE.has(w(k)) || DOAUX.has(w(k)) || BE.has(w(k)))) k++;
        const head = say(i, k - 1).toLowerCase();
        const ok = k < lim && (SUBJP.has(w(k + 1)) || DET.has(w(k + 1)) || (X[k + 1] && X[k + 1].cap)) && (/^(never|rarely|seldom|hardly|scarcely|little|nowhere|barely)\b/.test(head) || /^not only|^not until|^only (when|after|then|by|if|once|in)|^no sooner|^under no|^on no|^at no|^in no/.test(head));
        if (ok) { card({ k: "inversion", at: [i, k + 1], lv: "C1", t: `Inversión: ${say(i, k - 1)} + auxiliar + sujeto`,
          h: `Cuando una frase empieza con una expresión negativa o restrictiva (${I("Never, Rarely, Not only, Only when, No sooner, Under no circumstances…")}), el inglés invierte el orden como en una pregunta: primero el auxiliar (${E(w(k))}) y después el sujeto. ${I("I have never seen…")} → ${I("Never have I seen…")}. No es pregunta: es un recurso para dar énfasis y sonar formal o dramático.`, f: "Expresión negativa + auxiliar + sujeto + verbo", les: "c1-u1-l1" }); continue; }
      }
      if (i === sentStart(i) && a === "what" && hasWord(/^(is|was)$/, i + 2) > 0 && !DOAUX.has(b) && !BE.has(b) && !MODALS.has(b) && (SUBJP.has(b) || DET.has(b))) {
        const k = hasWord(/^(is|was)$/, i + 2);
        card({ k: "cleft", at: [i, k], lv: "B2", t: "Oración hendida: What … is …", h: `${E("What I need is…")} es una forma de poner el foco en una parte de la frase. En vez de ${I("I need a break")}, dices ${I("What I need is a break")} («lo que necesito es un descanso»). El ${E("what")} aquí significa «lo que», no es pregunta.`, f: "What + sujeto + verbo + is/was + foco", les: "c1-u1-l2" });
      }
      if (["suggest", "suggested", "insist", "insisted", "recommend", "recommended", "demand", "demanded", "propose", "proposed", "require", "required", "request", "requested", "essential", "vital", "important"].includes(a) && b === "that" && w(i + 2) && w(i + 3) && (SUBJP.has(w(i + 2)) || DET.has(w(i + 2)) || (X[i+2] && X[i+2].cap)) ) {
        let k = i + 3; if (DET.has(w(i + 2))) k = i + 4; if (w(k) === "not") k++;
        const v = w(k); if (v && (isBase(v) || v === "be") && !is3s(v)) card({ k: "subj", at: [i, k], lv: "C1", t: "Subjuntivo: suggest that + verbo base",
          h: `Después de ${I("suggest, insist, recommend, demand, it's essential that…")} el inglés formal usa el verbo en <b>forma base</b> para todas las personas, sin -s y sin ${E("should")}: ${I("I suggest that he " + (v === "be" ? "be" : v))} (no ${I("he " + (v === "be" ? "is" : sOf(v)))}). Es el subjuntivo del inglés, el equivalente a «sugiero que <b>vaya</b>».`, f: "suggest / insist that + sujeto + verbo base", les: "c1-u2-l3" });
      }

      /* ===== causativo: have/get something done ===== */
      if (/^(have|has|had|having|get|gets|got|getting)$/.test(a) && b && (DET.has(b) || POSSD.has(b)) && isPP(w(i + 3)) && !BE.has(w(i + 2)) && isNoun(c) ) {
        card({ k: "causative", at: [i, i + 3], lv: "B1", t: `${say(i, i + 3)}: mandar a hacer algo`, h: `${E("have / get")} + cosa + participio significa que <b>otra persona</b> hace el trabajo por ti: ${I("I had my hair cut")} = «me corté el pelo (en la peluquería)», no que lo cortaste tú. En español decimos «me arreglaron el carro» o «mandé a arreglar el carro».`, f: "have / get + objeto + participio", les: "b1-u7-l4" }); done.add(i); done.add(i + 3); continue;
      }

      /* ===== let / make / help + objeto + verbo base ===== */
      if (/^(let|lets|make|makes|made|making|help|helps|helped)$/.test(a) && b && (OBJP.has(b) || (X[i + 1] && X[i + 1].cap)) && isBase(c) && !DET.has(c)) {
        const base = baseOf(a) || a;
        card({ k: "letmake", at: [i, i + 2], lv: "B1", t: base === "let" && b === "us" ? `${say(i, i + 2)}: proponer algo («vamos a…»)` : `${say(i, i + 2)}: ${base} + persona + verbo (sin to)`, h: base === "let" && b === "us"
          ? `${E("Let's")} (= ${E("let us")}) sirve para proponer algo al grupo: ${I("Let's go")} = «vamos», ${I("Let's eat")} = «comamos». El verbo va en forma base, sin ${E("to")}.`
          : `${E(base)} es de los pocos verbos que van con persona + verbo en forma base, <b>sin ${E("to")}</b>: ${E(say(i, i + 2))}. ${I("let")} = «dejar / permitir», ${I("make")} = «obligar / hacer que», ${I("help")} = «ayudar» (con help el ${E("to")} es opcional). Ojo: en pasiva sí vuelve el to: ${I("I was made to wait")}.`, f: "let / make / help + persona + verbo base", les: base === "let" && b === "us" ? "a1-going-to-planes-e-invitaciones" : "b2-u7-l2" });
        continue;
      }

      /* ===== tiempos con have: presente perfecto, pasado perfecto ===== */
      if (HAVE.has(a) && !done.has(i) && a !== "having") {
        let j = skipA(i + 1); if (j === i + 1 && (SUBJP.has(w(j)) || (X[j] && X[j].cap))) j = skipA(j + 1);
        const v = w(j);
        if (v === "been" && isIng(w(j + 1))) {
          const past = a === "had";
          card({ k: past ? "ppcont" : "prpcont", at: [i, j + 1], lv: "B1", t: `${say(i, j + 1)}: ${past ? "pasado perfecto continuo" : "presente perfecto continuo"}`,
            h: past ? `${E("had been")} + -ing cuenta algo que <b>venía pasando</b> hasta un momento del pasado: ${I("I had been waiting for an hour when she arrived")} = «llevaba una hora esperando cuando llegó».`
              : `${E(a + " been")} + -ing habla de algo que empezó en el pasado y <b>sigue hasta ahora</b> (o acaba de parar), poniendo el foco en la duración. El español lo dice con «llevar + gerundio» o con el presente: ${I("I've been studying for two hours")} = «llevo dos horas estudiando». Por eso no se dice ${I("I am studying for two hours")}.${a === "has" ? ` Es ${E("has")} porque el sujeto es tercera persona.` : ""}`,
            f: past ? "had been + verbo-ing" : "have / has been + verbo-ing", les: past ? "b2-u1-l1" : "b1-u2-l1" });
          done.add(j); continue;
        }
        if (v && v !== "to" && isPP(v) && !(isNoun(v) && !PP[v] && !/ed$/.test(v)) && !(v === "got" && w(j + 1) === "to")) {
          const pb = baseOf(v), irr = pb && IRRBASE[pb];
          const timeW = ["for", "since", "already", "yet", "just", "ever", "never", "recently", "lately", "before", "so"].filter(x => X.some(y => y.w === x));
          if (a === "had") {
            card({ k: "pastperf", at: [i, j], lv: "B1", t: `${say(i, j)}: pasado perfecto («había + participio»)`,
              h: `${E("had")} + participio cuenta algo que pasó <b>antes</b> de otro momento del pasado. Es igual al «había + -ado/-ido» del español: ${I("When I arrived, the train had left")} = «cuando llegué, el tren ya había salido». ${E("had")} es igual para todas las personas.${irr ? ` ${E(v)} es el participio irregular de ${E(pb)}.` : ""}`,
              f: "had + participio", les: "b1-u1-l3" });
          } else {
            card({ k: "presperf", at: [i, j], lv: "A2", t: `${say(i, j)}: presente perfecto`,
              h: `${E(a)} + participio (${E(v)}${pb && pb !== v ? `, de ${E(pb)}` : ""}) forma el <b>presente perfecto</b>. Se parece al «he + -ado/-ido» del español (${I("I have eaten")} = «he comido»), pero el inglés lo usa para cosas que conectan el pasado con el presente: experiencias de la vida (${I("Have you ever been to Cartagena?")}), algo que empezó antes y sigue (${I("I've lived here for 5 years")} = «vivo aquí hace 5 años») o algo reciente con efecto ahora. Si dices <b>cuándo</b> pasó (${I("yesterday, in 2020, last week")}), se cambia a pasado simple. ${a === "has" ? `Es ${E("has")} porque el sujeto es tercera persona (he/she/it). ` : ""}${irr ? `${E(v)} es irregular: ${E(pb)} → ${E(IRRBASE[pb].p.split("/")[0])} → ${E(v)}. ` : ""}${timeW.length ? `Fíjate en ${timeW.map(E).join(", ")}: ${timeW.length > 1 ? "son palabras que suelen" : "es una palabra que suele"} acompañar este tiempo.` : ""}`,
              f: "have / has + participio", les: timeW.some(x => x === "for" || x === "since") ? "a2-u4-l4" : timeW.some(x => ["already", "yet", "just"].includes(x)) ? "a2-u4-l3" : "a2-u4-l1" });
          }
          done.add(j); continue;
        }
        if (a === "have" || a === "has") {
          if ((v === "got") ) { card({ k: "havegot", at: [i, j], lv: "A1", t: `${say(i, j)}: tener (inglés británico)`, h: `${E("have got")} significa lo mismo que ${E("have")} («tener»), es muy común en inglés británico. ${I("I've got a car")} = ${I("I have a car")}.`, f: "have / has got + cosa", les: "a1-have-lo-que-tienes" }); done.add(j); continue; }
          const subj = w(prevWord(i));
          if (a === "has" || (subj && SUBJP.has(subj))) card({ k: "have", at: [i, i], lv: "A1", t: `${say(i, i)}: tener`,
            h: `${E("have")} es «tener». Con ${I("he, she, it")} (o una persona) cambia a ${E("has")}: ${I("I have / she has")}. ${a === "has" ? `Por eso aquí es ${E("has")}.` : ""} Ojo: no se usa para la edad (${I("I am 30")}), ni para el frío o el hambre (${I("I'm cold, I'm hungry")}): en inglés esas cosas se «son», con ${E("be")}.`, f: "I / you / we / they have · he / she / it has", les: "a1-have-lo-que-tienes" });
        }
      }

      /* ===== verbo be ===== */
      if (BE.has(a) && !done.has(i) && !["be", "been", "being"].includes(a)) {
        let j = skipA(i + 1); let q = false;
        const st = sentStart(i);
        if ((i === st || WH.has(w(prevWord(i)))) && (SUBJP.has(w(j)) || DET.has(w(j)) || (X[j] && X[j].cap) || isNoun(w(j)))) { q = true; let k = j + 1; if (DET.has(w(j))) k = j + 2; j = skipA(k); }
        const v = w(j), past = BEPAST.has(a);
        if ((v === "going" && w(j + 1) === "to" && isBase(w(j + 2)) && !DET.has(w(j + 2))) || (v === "used" && w(j + 1) === "to")) continue;
        if (v && isIng(v) && v !== "going" || (v === "going" && w(j + 1) !== "to")) {
          card({ k: past ? "pastcont" : "prescont", at: [i, j], lv: "A1", t: `${say(i, j)}: ${past ? "pasado continuo («estaba + -ando»)" : "presente continuo («estoy + -ando»)"}`,
            h: past ? `${E(a)} + verbo con -ing cuenta lo que <b>estaba pasando</b> en un momento del pasado, como «estaba + -ando/-iendo»: ${I("I was cooking when you called")} = «estaba cocinando cuando llamaste». Es ${E(a)} porque el sujeto es ${a === "was" ? "I / he / she / it" : "you / we / they"}.`
              : `${E(a)} + verbo con -ing (${E(v)}) es como «estar + -ando/-iendo» del español: algo que pasa <b>ahora mismo</b> o en esta temporada. El ${E(a)} es obligatorio: no basta con ${I(v)} solo (como no basta con «cocinando» sin «estoy»). También se usa para planes ya acordados: ${I("I'm meeting Ana tomorrow")}.${baseOf(v) && baseOf(v) + "ing" !== v ? ` Fíjate en la ortografía: ${E(baseOf(v))} → ${E(v)}.` : ""}`,
            f: past ? "was / were + verbo-ing" : "am / is / are + verbo-ing", les: past ? "a2-u1-l5" : "a1-presente-continuo-lo-que-pasa-ahora" });
          done.add(j); continue;
        }
        if (v && isPP(v) && !isAdj(v) && !(PP[v] === undefined && !/ed$/.test(v)) || (v === "being" && isPP(w(j + 1)))) {
          const by = hasWord(/^by$/, j + 1);
          const pv = v === "being" ? w(j + 1) : v, pb = baseOf(pv);
          card({ k: "passive", at: [i, v === "being" ? j + 1 : j], lv: "A2", t: `${say(i, v === "being" ? j + 1 : j)}: voz pasiva`,
            h: `${E(a)} + participio (${E(pv)}${pb && pb !== pv ? `, de ${E(pb)}` : ""}) es la <b>voz pasiva</b>: lo importante es lo que le pasa a algo, no quién lo hace. ${I("English is spoken here")} = «aquí se habla inglés». El español usa mucho «se + verbo» para esto; el inglés usa ${E("be")} + participio.${by > 0 ? ` La palabra ${E("by")} presenta a quien hace la acción («por»).` : ""} El ${E(a)} marca el tiempo (${past ? "pasado" : "presente"}).`,
            f: "be (am / is / are / was / were) + participio", les: past ? "b1-u4-l1" : "a2-u7-l4" });
          done.add(j); continue;
        }
        if (v === "born") { card({ k: "born", at: [i, j], lv: "A1", t: `${say(i, j)}: nacer`, h: `En inglés «nacer» se dice con la pasiva ${E("be born")}: ${I("I was born in 1990")} = «nací en 1990». Literalmente es «fui nacido», por eso lleva ${E(a)} (pasado de be) y no existe ${I("I borned")}. Para el lugar o el año va ${E("in")}; para la fecha exacta, ${E("on")}: ${I("on May 5th")}.`, f: "was / were born + in / on", les: "a1-el-pasado-de-be-was-y-were" }); done.add(j); continue; }
        /* be + adjetivo / sustantivo / edad */
        const s = w(subjBefore(i)) || "";
        const forms = past ? `${I("I / he / she / it was")} y ${I("you / we / they were")}` : `${I("I am")}, ${I("he / she / it is")}, ${I("you / we / they are")}`;
        let extra = "";
        if (/^\d+$/.test(v || "")) extra = ` Aquí habla de la edad: en español «tengo ${v} años», pero en inglés la edad se dice con ${E("be")}: ${I("I am " + v)}. En inglés los años no se «tienen», se «son».`;
        else if (v && /^(hungry|thirsty|cold|hot|afraid|right|wrong|lucky|sleepy)$/.test(v)) extra = ` Fíjate: en español decimos «<b>tengo</b> ${({ hungry: "hambre", thirsty: "sed", cold: "frío", hot: "calor", afraid: "miedo", right: "razón", wrong: "la culpa / estar equivocado", lucky: "suerte", sleepy: "sueño" })[v]}», pero en inglés es con ${E("be")}: ${I("I am " + v)}. En inglés el hambre o el frío se «son».`;
        else if (v && isAdj(v)) extra = ` Después viene un adjetivo (${E(v)}${gloss(v) ? `, «${esc(gloss(v))}»` : ""}). En inglés ${E("be")} sirve a la vez para «ser» y para «estar», así que ${I("I am tired")} = «estoy cansado» y ${I("I am tall")} = «soy alto».`;
        let why = "";
        if (a === "am") why = ` ¿Por qué ${E("I am")} y no ${I("I is")}? Porque ${E("be")} es el verbo más irregular del inglés (viene de raíces muy antiguas) y conservó una forma propia para «yo»: ${E("am")}, como en español «yo <b>soy</b>» es distinto de «él <b>es</b>». ${E("am")} va solo y siempre con ${E("I")}.`;
        else if (a === "is") why = ` Es ${E("is")} porque el sujeto${s && !SUBJP.has(s) ? ` (${E(s)})` : ""} es una sola persona o cosa (he / she / it): igual que en español «él <b>es</b>».`;
        else if (a === "are") why = ` Es ${E("are")} porque el sujeto${s ? ` (${E(s)})` : ""} es ${s === "you" ? `${E("you")}, que en inglés siempre va con ${E("are")} (sea tú o ustedes)` : "plural (we / they / you o varias cosas)"}.`;
        else if (a === "was") why = ` ${E("was")} es el pasado de ${E("am")} e ${E("is")} (I / he / she / it).`;
        else if (a === "were") why = ` ${E("were")} es el pasado de ${E("are")} (you / we / they)${s === "i" || s === "he" || s === "she" || s === "it" ? `; aquí con ${E(s)} se usa porque es una situación imaginaria (${I("If I were you")})` : ""}.`;
        card({ k: "be", at: [i, i], lv: "A1", t: `${say(i, i)}: el verbo to be (ser / estar)${q ? " en pregunta" : ""}`,
          h: `${E(a)} es una forma del verbo ${E("to be")}, que significa «ser» y «estar» a la vez. Cambia según el sujeto: ${forms}.${why}${q ? ` Aquí está <b>antes</b> del sujeto porque es una pregunta: con ${E("be")} no se usa ${E("do")}, solo se invierte el orden (${I("You are tired → Are you tired?")}).` : ""}${w(i + 1) === "not" ? ` La negativa se hace poniendo ${E("not")} después: ${E(say(i, i + 1))}.` : ""}${extra}`,
          f: past ? "I / he / she / it was · you / we / they were" : "I am · he / she / it is · you / we / they are",
          les: past ? "a1-el-pasado-de-be-was-y-were" : "a1-el-verbo-to-be-y-presentarte" });
        continue;
      }

      /* ===== do / does / did ===== */
      if (DOAUX.has(a) && !done.has(i)) {
        const st = sentStart(i), neg = w(i + 1) === "not";
        let j = neg ? i + 2 : i + 1, q = false;
        if (!neg && (i === st || WH.has(w(prevWord(i)))) && (SUBJP.has(w(j)) || DET.has(w(j)) || (X[j] && X[j].cap) || isNoun(w(j)))) { q = true; j += DET.has(w(j)) ? 2 : 1; }
        j = skipA(j);
        const v = w(j);
        if ((neg || q) && v && (isBase(v) || baseOf(v))) {
          const who = a === "does" ? `${E("does")} porque el sujeto es he / she / it` : a === "did" ? `${E("did")} porque es pasado (sirve para todas las personas)` : `${E("do")} (I / you / we / they)`;
          card({ k: "doaux", at: [i, j], lv: "A1", t: `${say(i, j)}: ${q ? "pregunta" : "negativa"} con ${a}`,
            h: `En español basta con decir «¿${q ? "trabajas" : "no trabajas"}?», pero en inglés los verbos normales no pueden ${q ? "hacer preguntas" : "negarse"} solos: necesitan un ayudante, el auxiliar ${E("do")}. Aquí es ${who}. El ayudante se lleva la marca de tiempo y persona, por eso el verbo principal se queda en forma base: ${E(baseOf(v) || v)}${a === "does" ? ` (no ${I(sOf(baseOf(v) || v))})` : a === "did" ? ` (no ${I(pastOf(baseOf(v) || v))})` : ""}. ${E("do")} en sí no se traduce.${neg ? ` ${E(X[i].c || say(i, i + 1))} = ${E(a + " not")}.` : ""}`,
            f: q ? "(Wh-) + do / does / did + sujeto + verbo base?" : "sujeto + don't / doesn't / didn't + verbo base", les: a === "did" ? "a1-pasado-simple-regulares" : "a1-negativas-y-preguntas-en-presente" });
          done.add(j); continue;
        }
        if (!neg && !q && v && isBase(v) && SUBJP.has(w(prevWord(i)))) { card({ k: "doemph", at: [i, j], lv: "C1", t: `${say(i, j)}: do enfático`, h: `En una frase afirmativa, ${E(a)} + verbo base da énfasis: ${I("I do like it")} = «sí que me gusta», ${I("She did call")} = «sí llamó (aunque no lo creas)». Al hablar, se acentúa el ${E(a)}.`, f: "sujeto + do / does / did + verbo base (énfasis)", les: "c1-u1-l3" }); done.add(j); continue; }
      }

      /* ===== verbos de -ing después de otro verbo ===== */
      if (pbIs(a, INGVERBS) && isIng(b)) {
        const base = baseOf(a) || a;
        card({ k: "ingverb", at: [i, i + 1], lv: "B1", t: `${say(i, i + 1)}: verbo + -ing`,
          h: `Algunos verbos piden que la acción que sigue vaya con <b>-ing</b> y no con ${E("to")}. ${E(base)} es uno de ellos: ${E(say(i, i + 1))}, nunca ${I(base + " to " + (baseOf(b) || b))}. Los más comunes: ${I("enjoy, finish, avoid, mind, keep, suggest, practise, consider, miss")}. En español usamos el infinitivo («disfruto cocinar»), por eso es un error muy típico.`, f: "enjoy / finish / avoid / keep… + verbo-ing", les: "b1-u2-l4" });
        continue;
      }
      if (pbIs(a, set("like love hate prefer start begin continue")) && isIng(b)) {
        card({ k: "likeing", at: [i, i + 1], lv: "A1", t: `${say(i, i + 1)}: gustos + -ing`, h: `Después de ${I("like, love, hate, enjoy")} la actividad va con -ing: ${I("I like dancing")} = «me gusta bailar». En español usamos el infinitivo, pero en inglés el -ing funciona como un sustantivo («el bailar»). Con ${I("like, love, hate")} también se puede usar ${E("to")} + verbo.`, f: "like / love / hate + verbo-ing", les: "a1-hobbies-love-like-hate-ing" }); continue;
      }
      if (pbIs(a, CHANGEVERBS) && isIng(b)) {
        const base = baseOf(a) || a;
        card({ k: "changeing", at: [i, i + 1], lv: "B2", t: `${say(i, i + 1)}: el -ing cambia el significado`, h: `Con ${E(base)} no da igual -ing o ${E("to")}: ${I(base === "stop" ? "stop smoking = dejar de fumar / stop to smoke = parar para fumar" : base === "remember" ? "remember calling = recordar haber llamado / remember to call = acordarse de llamar" : base === "forget" ? "forget meeting = olvidar haber conocido / forget to meet = olvidar reunirse" : base === "try" ? "try opening = probar abriendo / try to open = intentar abrir" : "regret telling = arrepentirse de haber dicho / regret to tell = lamentar tener que decir")}. Con -ing hablas de algo ya hecho o de la actividad en sí.`, f: `${base} + -ing ≠ ${base} + to`, les: "b2-u6-l5" }); continue;
      }
      /* preposición + -ing */
      if (PREPS.has(a) && isIng(b) && !BE.has(w(i - 1))) {
        card({ k: "preping", at: [i, i + 1], lv: "B1", t: `${say(i, i + 1)}: preposición + -ing`,
          h: `Después de una preposición (${I("of, in, at, about, for, without, before, after, by, instead of…")}) el verbo va con <b>-ing</b>, nunca en infinitivo. En español decimos «antes de salir», pero en inglés es ${I("before leaving")}; «sin decir nada» = ${I("without saying anything")}; «gracias por venir» = ${I("thanks for coming")}.`, f: "preposición + verbo-ing", les: "b1-u2-l4" });
        continue;
      }

      /* ===== comparativos y superlativos ===== */
      if (a === "than") {
        const p = prevWord(i), pw = w(p), more = w(p - 1) === "more" || w(p - 1) === "less";
        if (pw) card({ k: "comp", at: [more ? p - 1 : p, i], lv: "A2", t: `${say(more ? p - 1 : p, i)}: comparar («más… que»)`,
          h: more ? `Con adjetivos largos (de dos sílabas o más) el comparativo se hace con ${E(w(p - 1))} + adjetivo + ${E("than")}: ${E(say(p - 1, i))} = «${w(p - 1) === "more" ? "más" : "menos"} ${esc(gloss(pw) || pw)} que». ${E("than")} es el «que» de la comparación (no ${I("that")}).`
            : /er$/.test(pw) ? `Con adjetivos cortos se agrega <b>-er</b> en vez de «más»: ${E(pw)} = «más ${esc(gloss(pw.replace(/ier$/, "y").replace(/(.)\1er$/, "$1").replace(/er$/, "")) || gloss(pw.replace(/r$/, "")) || "…")}». Y el «que» de la comparación es ${E("than")} (no ${I("that")}). Con adjetivos largos se usa ${E("more")}: ${I("more expensive than")}. Nunca los dos juntos (${I("more bigger")}).`
            : `${E("than")} es el «que» de las comparaciones: ${I("better than, more than, rather than")}.`, f: "adjetivo corto + -er + than · more + adjetivo largo + than", les: "a2-u2-l1" });
        continue;
      }
      if (a === "the" && b && (/est$/.test(b) && isAdj(b) || b === "most" || b === "least" || b === "best" || b === "worst")) {
        card({ k: "sup", at: [i, b === "most" || b === "least" ? i + 2 : i + 1], lv: "A2", t: `${say(i, b === "most" || b === "least" ? i + 2 : i + 1)}: superlativo («el más…»)`,
          h: `El superlativo dice que algo es el número uno de un grupo. Lleva ${E("the")} delante y se forma con <b>-est</b> en adjetivos cortos (${I("the tallest")} = «el más alto») o con ${E("the most")} en largos (${I("the most expensive")}). ${I("best")} y ${I("worst")} son irregulares (de ${I("good")} y ${I("bad")}). Después se dice ${E("in")} + lugar o grupo (${I("the best in the city")}), no ${I("of")}.`, f: "the + adjetivo-est · the most + adjetivo largo", les: "a2-u2-l2" });
        continue;
      }
      if (a === "as" && b && isAdj(b) && c === "as") { card({ k: "asas", at: [i, i + 2], lv: "A2", t: `${say(i, i + 2)}: tan… como`, h: `${E("as + adjetivo + as")} compara dos cosas iguales: ${I("as tall as")} = «tan alto como». En negativa dice que no llegan al mismo nivel: ${I("not as expensive as")} = «no tan caro como».`, f: "as + adjetivo + as", les: "a2-u2-l3" }); continue; }

      /* ===== artículos ===== */
      if (a === "an" && b) { card({ k: "an", at: [i, i + 1], lv: "A1", t: `${say(i, i + 1)}: an en vez de a`, h: `Se usa ${E("an")} (y no ${E("a")}) cuando la palabra siguiente empieza con <b>sonido</b> de vocal: ${I("an apple, an hour")}. Lo que manda es el sonido, no la letra: ${I("an hour")} (la h no suena), pero ${I("a university")} (suena «iu»). Es solo para que suene más fluido: «a apple» obliga a cortar entre dos vocales.`, f: "a + sonido de consonante · an + sonido de vocal", les: "a1-articulos-a-an-y-plurales" }); continue; }
      if (a === "a" && b && /^[aeio]/.test(b) && !/^(one|eu|uni|use|usu|uti|euro|once)/.test(b)) card({ k: "a-err", warn: true, at: [i, i + 1], lv: "A1", t: `Ojo: ¿no debería ser «an ${b}»?`, h: `${E(b)} empieza con sonido de vocal, así que normalmente va ${E("an")}: ${E("an " + b)}.`, les: "a1-articulos-a-an-y-plurales" });

      /* ===== posesivo 's ===== */
      if (X[i + 1] && X[i + 1].poss) { card({ k: "poss", at: [i, i + 2], lv: "A1", t: `${toks[X[i].ti].t}: posesivo con 's`, h: `El <b>'s</b> indica de quién es algo: ${I("Maria's car")} = «el carro de María». El orden es al revés del español: primero el dueño y después la cosa, y sin «de». Si el dueño es plural con s, solo se pone el apóstrofo: ${I("my parents' house")}.`, f: "dueño + 's + cosa", les: "a1-la-familia-y-los-posesivos" }); continue; }

      /* ===== there + tercera persona -s ===== */
      if ((S3P.has(a) || (X[i].cap && i !== sentStart(i) && !SUBJP.has(a)) || (DET.has(w(i - 1)) && isNoun(a) && !isPluralNoun(a) && !/s$/.test(a))) && b && !done.has(i + 1)) {
        let j = skipA(i + 1); const v = w(j);
        if (v && is3s(v) && (!isNoun(v) || S3P.has(a) || X[i].cap) && !BE.has(v) && !HAVE.has(v) && !DOAUX.has(v) && !MODALS.has(v)) {
          const base = baseOf(v);
          card({ k: "s3", at: [i, j], lv: "A1", t: `${say(i, j)}: la -s de tercera persona`,
            h: `En presente simple, cuando el sujeto es ${I("he, she, it")} (o una persona o cosa en singular, como ${E(say(i, i))}), el verbo lleva <b>-s</b>: ${E(base)} → ${E(v)}. Es el único cambio que tiene el presente en inglés (${I("I work, you work, she works")}), así que es fácil olvidarlo, pero suena raro sin ella. Es como en español, donde «él trabaj<b>a</b>» es distinto de «yo trabaj<b>o</b>».${v !== base + "s" ? ` La ortografía cambia un poco: ${E(base)} → ${E(v)}.` : ""}`,
            f: "he / she / it + verbo + -s", les: "a1-presente-simple-lo-que-haces-siempre" });
          done.add(j); continue;
        }
      }

      /* ===== estilo indirecto ===== */
      if (/^(said|told|asked|explained|replied|admitted|promised|warned|claimed)$/.test(a) && (b === "that" || (OBJP.has(b) && (c === "that" || c === "to" || c === "if" || c === "whether" || SUBJP.has(c))) || b === "if" || b === "whether" || (SUBJP.has(b) && i > 0))) {
        card({ k: "reported", at: [i, i + 1], lv: "B1", t: `${say(i, i)}: estilo indirecto`, h: `${E(a)} introduce lo que alguien dijo, sin comillas. Al contarlo, los tiempos suelen «retroceder» un paso al pasado: ${I("\"I am tired\"")} → ${I("She said (that) she was tired")}. ${E("say")} va sin persona (${I("said that")}) y ${E("tell")} siempre lleva a quién (${I("told me that")}). ${E("that")} es opcional.${b === "if" || b === "whether" ? ` Con ${E(b)} se reporta una pregunta de sí/no («si…»), y el orden ya no es de pregunta.` : ""}`, f: "said (that) + frase · told + persona + (that) + frase", les: "b1-u5-l1" });
      }

      /* ===== pasado simple ===== */
      if (!done.has(i) && isPast(a) && !isAdj(a) && !BE.has(a) && a !== "had" && a !== "did" && !(isNoun(a) && !PAST[a] && !/ed$/.test(a)) && !MODALS.has(a)) {
        const p = w(prevWord(i));
        if (p && (SUBJP.has(p) || (X[prevWord(i)] && X[prevWord(i)].cap) || isNoun(p) || ADVS.has(p) || p === "who" || p === "that")) {
          const base = baseOf(a), irr = IRRBASE[base];
          if (base && base !== a) {
            card({ k: "past", at: [i, i], lv: "A1", t: `${say(i, i)}: pasado simple${irr ? " (verbo irregular)" : ""}`,
              h: irr ? `${E(a)} es el pasado de ${E(base)}${gloss(base) ? ` («${esc(gloss(base))}»)` : ""}. Es un verbo <b>irregular</b>: no lleva -ed, cambia de forma (${I(base + " → " + irr.p.split("/")[0])}) y toca aprenderlo de memoria, como en español «ir → fui». Lo bueno: el pasado en inglés es igual para todas las personas (${I("I " + a + ", she " + a + ", they " + a)}). En pregunta y negativa vuelve a la forma base con ${E("did")}: ${I("Did you " + base + "? / I didn't " + base)}.`
                : `${E(a)} es el pasado de ${E(base)}${gloss(base) ? ` («${esc(gloss(base))}»)` : ""}. Los verbos regulares forman el pasado con <b>-ed</b> y la forma es la misma para todas las personas: ${I("I " + a + ", she " + a + ", they " + a)}. Mucho más fácil que en español. En pregunta y negativa se usa ${E("did")} y el verbo vuelve a la forma base: ${I("Did you " + base + "? / I didn't " + base)}.`,
              f: irr ? `${base} → ${irr.p} → ${irr.pp}` : "verbo + -ed (igual para todos)", les: irr ? "a1-pasado-simple-irregulares" : "a1-pasado-simple-regulares" });
            continue;
          }
        }
      }

      /* ===== relativos ===== */
      if (["who", "which", "that", "whose", "where"].includes(a) && i !== sentStart(i)) {
        const p = w(prevWord(i));
        if (p && (isNoun(p) || isPluralNoun(p) || /^(one|someone|something|anyone|everyone|people|man|woman|person|place|thing|city|house|book|car|friend)$/.test(p) || (a !== "that" && X[prevWord(i)] && X[prevWord(i)].cap)) && !isP(prevWord(i) + 1) || (p && isP(i - 1) && X[i - 1].w === "," && ["who", "which", "whose", "where"].includes(a))) {
          const M = { who: "para personas («que» o «quien»)", which: "para cosas o animales («que», «el cual»)", that: "para personas o cosas en frases que definen («que»)", whose: "para decir de quién es algo («cuyo»)", where: "para lugares («donde»)" }[a];
          card({ k: "rel", at: [i, i], lv: "A2", t: `${say(i, i)}: pronombre relativo`,
            h: `Aquí ${E(a)} no es pregunta: une dos ideas para describir mejor la palabra anterior (${E(p)}). Se usa ${M}. ${I("The woman who lives next door is a teacher")} = «la mujer que vive al lado es profesora». El español usa «que» para casi todo; el inglés elige según si es persona, cosa o lugar.${isP(i - 1) && X[i - 1].w === "," ? ` Como va entre comas, añade información extra (no se puede usar ${E("that")} en este caso).` : ""}`,
            f: "persona + who · cosa + which / that · lugar + where", les: isP(i - 1) ? "b2-u3-l4" : "a2-u7-l3" });
          continue;
        }
      }

      /* ===== preguntas con wh- ===== */
      if (WH.has(a) && i === sentStart(i) && (DOAUX.has(b) || MODALS.has(b) || BE.has(b) || HAVE.has(b))) {
        const G = { what: "qué", where: "dónde", when: "cuándo", why: "por qué", who: "quién", whom: "a quién", whose: "de quién", which: "cuál", how: "cómo" }[a];
        card({ k: "wh", at: [i, i + 1], lv: "A1", t: `${say(i, i + 1)}: pregunta con ${a}`, h: `La pregunta empieza con ${E(a)} («${G}») y enseguida va el auxiliar (${E(b)}), antes del sujeto. Ese orden —palabra de pregunta + auxiliar + sujeto + verbo— es fijo en inglés: ${I("Where do you live?")}, ${I("What are you doing?")}. En español el orden es más libre, por eso cuesta al principio.`, f: "Wh- + auxiliar + sujeto + verbo?", les: "a1-negativas-y-preguntas-en-presente" });
        continue;
      }
      if (a === "who" && i === sentStart(i) && b && (isPast(b) || is3s(b)) && !DOAUX.has(b)) { card({ k: "whosubj", at: [i, i + 1], lv: "A2", t: `${say(i, i + 1)}: pregunta por el sujeto`, h: `Cuando ${E("who")} o ${E("what")} preguntan por <b>quien hace</b> la acción, no se usa ${E("do / did")}: ${I("Who called you?")} = «¿quién te llamó?», no ${I("Who did call you?")}. Es como una frase normal donde ${E("who")} ocupa el lugar del sujeto.`, f: "Who / What + verbo (sin do)?", les: "a2-u8-l3" }); continue; }

      /* ===== frecuencia ===== */
      if (FREQ.has(a) && i !== sentStart(i)) {
        const p = w(prevWord(i));
        card({ k: "freq", at: [i, i], lv: "A1", t: `${say(i, i)}: adverbio de frecuencia`, h: `${E(a)} dice con qué frecuencia pasa algo. Su lugar es fijo: va <b>antes del verbo principal</b> (${I("I always drink coffee")}) pero <b>después</b> de ${E("be")} (${I("She is always late")}) y después del auxiliar (${I("I have never been there")}).${p && BE.has(p) ? ` Aquí va después de ${E(p)}, como manda la regla.` : ""}${a === "never" ? ` ${E("never")} ya es negativo: no se usa con ${E("don't")} (${I("I never eat meat")}, no ${I("I don't never eat")}).` : ""}`, f: "sujeto + adverbio + verbo · be + adverbio", les: "a1-que-tan-seguido-adverbios-de-frecuencia" });
        continue;
      }

      /* ===== for / since / ago ===== */
      if (a === "since" && b && (/^\d/.test(b) || /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday|january|february|march|april|may|june|july|august|september|october|november|december|yesterday|last|i|he|she|we|they|then|childhood)$/.test(b))) { card({ k: "since", at: [i, i + 1], lv: "A2", t: "since: desde (un momento)", h: `${E("since")} marca el <b>punto de inicio</b> de algo que sigue hasta hoy: ${I("since 2019, since Monday")}. Va con presente perfecto: ${I("I've worked here since 2019")} = «trabajo aquí desde 2019». Para la <b>duración</b> se usa ${E("for")}: ${I("for three years")}.`, f: "since + momento · for + duración", les: "a2-u4-l4" }); continue; }
      if (a === "for" && /^\d+$|^(a|two|three|four|five|six|ten|many|several|years|months|weeks|ages|hours|minutes|days)$/.test(b || "") && /^(years?|months?|weeks?|days?|hours?|minutes?|ages|long|while)$/.test(c || b || "") && X.some(x => HAVE.has(x.w))) { card({ k: "for", at: [i, i + 2], lv: "A2", t: "for: durante (cuánto tiempo)", h: `${E("for")} + cantidad de tiempo dice <b>cuánto dura</b> algo. Con presente perfecto expresa algo que sigue: ${I("I've lived here for five years")} = «vivo aquí hace cinco años / llevo cinco años aquí». No se usa ${I("since five years")}: ${E("since")} es para el momento de inicio.`, f: "for + duración", les: "a2-u4-l4" }); continue; }
      if (a === "ago" && w(i - 1)) { card({ k: "ago", at: [Math.max(0, i - 2), i], lv: "A1", t: "ago: hace (tiempo)", h: `${E("ago")} es el «hace» del pasado, pero va <b>al final</b>: ${I("two days ago")} = «hace dos días». Siempre con pasado simple: ${I("I saw him two days ago")}.`, f: "cantidad de tiempo + ago", les: "a1-pasado-simple-regulares" }); continue; }

      /* ===== in / on / at de tiempo ===== */
      if (["in", "on", "at"].includes(a) && b) {
        const DAYS = /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday|mondays|tuesdays|wednesdays|thursdays|fridays|saturdays|sundays|weekdays|christmas|my|the|her|his|your|new)$/;
        const tw = c || "";
        let h = null;
        if (a === "at" && (/^\d/.test(b) || /^(night|noon|midnight|the|christmas|lunchtime|dawn|weekends?)$/.test(b) && (b !== "the" || /^(weekend|moment|end|beginning|same)$/.test(tw)))) h = `${E("at")} se usa para un <b>punto exacto</b>: la hora (${I("at 7 o'clock")}), ${I("at night, at noon, at the weekend")}. Truco: ${E("at")} = punto, ${E("on")} = día, ${E("in")} = periodo largo.`;
        else if (a === "on" && (/^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)s?$/.test(b) || (/^(my|her|his|your|christmas|new)$/.test(b) && /^(birthday|day|eve|year's)$/.test(tw)) || /^\d+(st|nd|rd|th)?$/.test(b) || (b === "the" && /^\d|first|second|third|weekend/.test(tw)))) h = `${E("on")} se usa para <b>días y fechas</b>: ${I("on Monday, on May 5th, on my birthday")}. Truco: ${E("at")} = hora exacta, ${E("on")} = día, ${E("in")} = periodo largo (mes, año, estación).`;
        else if (a === "in" && (/^(january|february|march|april|may|june|july|august|september|october|november|december|summer|winter|spring|autumn|fall)$/.test(b) || /^(19|20)\d\d$/.test(b) || (b === "the" && /^(morning|afternoon|evening|past|future|century|80s|90s)$/.test(tw)))) h = `${E("in")} se usa para <b>periodos largos</b>: meses (${I("in July")}), años (${I("in 2020")}), estaciones y partes del día (${I("in the morning")}). Truco: ${E("at")} = hora, ${E("on")} = día, ${E("in")} = periodo largo. Ojo: ${I("at night")}, pero ${I("in the morning")}.`;
        if (h) { card({ k: "prept-" + a, at: [i, b === "the" || b === "my" || b === "her" || b === "his" || b === "your" ? i + 2 : i + 1], lv: "A1", t: `${say(i, b === "the" || b === "my" || b === "her" || b === "his" || b === "your" ? i + 2 : i + 1)}: preposición de tiempo`, h, f: "at + hora · on + día / fecha · in + mes / año / periodo", les: "a1-dias-meses-y-fechas" }); continue; }
      }

      /* ===== pronombres de objeto ===== */
      if (["me", "him", "us", "them"].includes(a) && i > 0 && w(i - 1) && !SUBJP.has(w(i - 1)) && !X[i].c) {
        card({ k: "objp", at: [i, i], lv: "A1", t: `${say(i, i)}: pronombre de objeto`, h: `${E(a)} recibe la acción (= «${({ me: "me / mí", him: "lo / le / él", us: "nos / nosotros", them: "los / les / ellos" })[a]}»). En español esos pronombres van antes del verbo («<b>me</b> llama»), pero en inglés van <b>después</b>: ${I("She calls me")}. También van después de preposiciones: ${I("with me, for them")}. No se usa la forma de sujeto: ${I("for I")} ✗ → ${I("for me")} ✓.`, f: "verbo / preposición + me, you, him, her, it, us, them", les: "a1-objeto" });
        continue;
      }

      /* ===== phrasal verbs ===== */
      if (baseOf(a) || VERBS.has(a)) {
        const base = baseOf(a) || a;
        for (const k of [i + 1, i + 2, i + 3]) {
          const pv = base + " " + w(k);
          if (w(k) && PHRASAL[pv] && (k === i + 1 || !(isP(k - 1)))) {
            card({ k: "phrasal", at: [i, k], lv: "A2", t: `${base} ${w(k)}: phrasal verb`, h: `${E(base + " " + w(k))} es un <b>phrasal verb</b>: verbo + partícula que juntos tienen un significado propio, que muchas veces no se adivina por las partes. Aquí significa «${esc(PHRASAL[pv])}». ${k > i + 1 ? `Fíjate que el objeto (${E(say(i + 1, k - 1))}) puede ir en medio: ${I(base + " it " + w(k))}.` : "Cuando el objeto es un pronombre, va en medio: " + I(base + " it " + w(k)) + "."} Lo mejor es aprenderlos como una sola palabra.`, f: "verbo + partícula (up, out, off, on…)", les: "a2-u6-l4" });
            break;
          }
        }
      }

      /* ===== imperativo ===== */
      if (i === sentStart(i) && isBase(a) && !MODALS.has(a) && !BE.has(a) && !(DOAUX.has(a) && b !== "not") && a !== "have" && b && !SUBJP.has(b) && !isNoun(a) || (i === sentStart(i) && a === "do" && b === "not" && isBase(c)) || (i === sentStart(i) && a === "please" && isBase(b))) {
        if (!(X.slice(i).some(x => x.w === "?"))) { card({ k: "imp", at: [i, a === "do" ? i + 2 : i], lv: "A1", t: "Imperativo: dar instrucciones", h: `La frase empieza con el verbo en forma base y sin sujeto: es una orden, instrucción o invitación (${I("Open the door")} = «abre la puerta»). En inglés el imperativo es igual para tú, usted y ustedes. Para negarlo se pone ${E("Don't")} delante: ${I("Don't worry")}. Con ${E("please")} suena amable.`, f: "Verbo base + … · Don't + verbo base", les: "a1-objeto" }); continue; }
      }
    }
    function pbIs(x, S) { const bb = baseOf(x) || x; return S.has(bb) || S.has(x); }

    /* adjetivo antes del sustantivo (una sola tarjeta) */
    for (let i = 0; i < n - 1; i++) {
      const a = w(i), b = w(i + 1);
      if (a && b && isAdj(a) && !/er$|est$/.test(a) && (isNoun(b) || isPluralNoun(b)) && !isAdj(b) && !BE.has(w(i - 1)) && (DET.has(w(i - 1)) || POSSD.has(w(i - 1)) || !w(i - 1) || isAdj(w(i - 1)) || PREPS.has(w(i - 1)))) {
        card({ k: "adjnoun", at: [i, i + 1], lv: "A1", t: `${say(i, i + 1)}: el adjetivo va antes`, h: `En inglés el adjetivo va <b>antes</b> del sustantivo: ${E(say(i, i + 1))} = «${esc(gloss(b) || b)} ${esc(gloss(a) || a)}». Es al revés del español («un carro rojo» = ${I("a red car")}). Además el adjetivo nunca cambia: no tiene plural ni femenino (${I("red cars")}, no ${I("reds cars")}).`, f: "(artículo) + adjetivo + sustantivo", les: "a1-describir" });
        break;
      }
    }
    /* contracciones */
    const cons = [...new Set(X.filter(x => x.c && !x.poss).map(x => x.c))];
    if (cons.length) {
      const full = c => { const p = X.filter(x => x.c === c && !x.poss).map(x => x.w); const seen = []; for (let k = 0; k < p.length; k++) { seen.push(p[k]); if (seen.length >= 2) break; } return seen.join(" "); };
      card({ k: "contr", at: null, lv: "A1", t: "Contracciones", h: `En inglés hablado y escrito informal se juntan dos palabras con un apóstrofo: ${cons.slice(0, 6).map(c => `${E(c)} = ${I(full(c))}`).join(", ")}. Significan exactamente lo mismo; la forma larga suena más formal o enfática.`, f: "I'm, you're, don't, can't, it's…", les: "a1-el-verbo-to-be-y-presentarte" });
    }

    /* ordenar: errores primero, luego por posición; eliminar duplicados */
    const seenK = new Set(), out = [];
    cards.forEach(c => { const key = c.k + ":" + (c.at ? c.at.join("-") : ""); if (!seenK.has(key)) { seenK.add(key); out.push(c); } });
    out.forEach(c => { if (c.at) c.ti = [X[c.at[0]] ? X[c.at[0]].ti : 0, X[Math.min(c.at[1], n - 1)] ? X[Math.min(c.at[1], n - 1)].ti : 0]; });
    out.sort((p, q) => (q.warn ? 1 : 0) - (p.warn ? 1 : 0) || (p.ti ? p.ti[0] : 999) - (q.ti ? q.ti[0] : 999));
    return { toks, X, cards: out };
  }

  /* ---------- explicación de una sola palabra dentro de la frase ---------- */
  function wordRole(X, toks, ti) {
    const xs = X.filter(x => x.ti === ti && !x.punct); if (!xs.length) return null;
    const w = xs[0].w, d = info(w), pos = d ? String(d.pos) : "";
    const out = [];
    if (xs.length > 1 && xs[0].c) out.push(`${E(toks[ti].t)} es una contracción de ${I(xs.map(x => x.w).join(" "))}.`);
    if (SUBJP.has(w)) out.push(`${E(w === "i" ? "I" : w)} es un pronombre de sujeto (${({ i: "yo", you: "tú / usted / ustedes", he: "él", she: "ella", it: "eso (cosa o animal)", we: "nosotros", they: "ellos / ellas" })[w]}). En inglés el sujeto casi nunca se omite, aunque en español sí («voy» = ${I("I go")}).${w === "i" ? " Siempre se escribe con mayúscula." : ""}`);
    else if (OBJP.has(w)) out.push(`${E(w)} es un pronombre de objeto: recibe la acción y va después del verbo o de una preposición.`);
    else if (POSSD.has(w)) out.push(`${E(w)} es un posesivo («${({ my: "mi", your: "tu / su", his: "su (de él)", her: "su (de ella)", its: "su (de una cosa)", our: "nuestro", their: "su (de ellos)" })[w]}»). No cambia en plural: ${I(w + " books")}.`);
    else if (w === "the") out.push(`${E("the")} es el artículo definido: sirve para «el, la, los, las», sin cambiar. Pero ojo: cuando hablas en general, el inglés <b>no</b> lo usa (${I("I like coffee")} = «me gusta <b>el</b> café»).`);
    else if (w === "a" || w === "an") out.push(`${E(w)} es el artículo indefinido («un / una»). Solo va con cosas que se cuentan en singular. ${I("an")} se usa antes de sonido de vocal. Ojo: con profesiones el inglés sí lo pone: ${I("She is a doctor")} = «es médica».`);
    else if (w === "not") out.push(`${E("not")} es el «no» de la frase. Va después del auxiliar o de ${I("be")}: ${I("I am not, she does not, they can not")}.`);
    if (d && d.m) out.push(`<span class="gmean">${pos ? `<small>${esc(pos)}</small> ` : ""}${esc(d.m)}${d.base && d.base !== "-" ? ` · forma base: <b lang="en">${esc(d.base)}</b>` : ""}</span>`);
    const base = baseOf(w);
    if (!d && base && base !== w) out.push(`Es una forma del verbo ${E(base)}${gloss(base) ? ` («${esc(gloss(base))}»)` : ""}.`);
    return { w: toks[ti].t, html: out.join(" ") };
  }

  /* ---------- guía de palabras con muchos usos ---------- */
  const WG = {
    to: { t: "Los usos de to", h: `${E("to")} es de las palabras que más confunden porque cumple dos papeles distintos:`, li: [
      ["Infinitivo (to + verbo)", "Marca el verbo «sin conjugar», como -ar/-er/-ir en español.", "I want to sleep. = Quiero dormir."],
      ["Propósito (= para + verbo)", "Responde «¿para qué?». Nunca «for + verbo».", "I came to see you. = Vine para verte."],
      ["Dirección (= a, hacia)", "Con verbos de movimiento indica el destino.", "We went to Medellín."],
      ["A quién (= a)", "Quién recibe algo o a quién le hablas.", "Give it to me. / Listen to her."],
      ["De … a", "Con from, para rangos de lugar, hora o fecha.", "from 8 to 5"],
      ["Preposición + -ing", "En expresiones fijas va seguido de -ing.", "I'm looking forward to seeing you."],
      ["La hora (= para)", "Minutos que faltan.", "ten to six = diez para las seis"]],
      tip: `Truco: si después de ${E("to")} viene un verbo en forma base, es infinitivo o propósito; si viene un lugar, persona o cosa, es preposición.`, les: "a2-u7-l5" },
    for: { t: "Los usos de for", h: `${E("for")} suele traducirse como «para» o «por», pero tiene usos fijos:`, li: [
      ["Para (destinatario)", "Para quién es algo.", "This is for you."], ["Durante (duración)", "Cuánto tiempo, sobre todo con presente perfecto.", "I've lived here for 5 years."],
      ["Por (motivo, intercambio)", "Gracias por, por un precio.", "Thanks for your help. / I bought it for $10."], ["Para + -ing (función)", "Para qué sirve un objeto.", "a knife for cutting bread"]],
      tip: `Ojo: para decir «para + verbo» (propósito) se usa ${E("to")}, no ${E("for")}: ${I("I study to learn")} (no ${I("for learn")}).`, les: "a2-u4-l4" },
    since: { t: "since", h: `${E("since")} tiene dos usos:`, li: [["Desde (momento de inicio)", "Con presente perfecto.", "I've known her since 2015."], ["Ya que / como (causa)", "Algo formal.", "Since you're here, let's start."]], tip: `Para duración se usa ${E("for")}: ${I("for 10 years")}.`, les: "a2-u4-l4" },
    get: { t: "Los usos de get", h: `${E("get")} es un comodín del inglés hablado. Su significado cambia según lo que lo acompañe:`, li: [
      ["Conseguir, recibir", "get + cosa.", "I got a new job. / I got your message."], ["Llegar", "get + to / home / here.", "What time did you get home?"],
      ["Ponerse, volverse (cambio)", "get + adjetivo.", "It's getting cold. / She got angry."], ["Entender", "", "I don't get it."], ["Phrasal verbs", "get up, get on, get off, get over…", "I get up at 6."], ["Pasiva informal", "get + participio.", "He got fired."]],
      tip: `Pasado: ${I("got")}; participio: ${I("got")} (UK) o ${I("gotten")} (US).`, les: "b2-u7-l5" },
    do: { t: "Los usos de do", h: `${E("do")} tiene dos papeles muy distintos:`, li: [["Auxiliar (no se traduce)", "Para preguntas y negativas en presente y pasado.", "Do you like it? / I don't know."], ["Verbo «hacer»", "Tareas, actividades, trabajo.", "I do my homework. / What do you do?"], ["Énfasis", "Afirmativo con fuerza.", "I do love this song!"]], tip: `En ${I("What do you do?")} el primer do es auxiliar y el segundo es «hacer»: «¿a qué te dedicas?».`, les: "a1-negativas-y-preguntas-en-presente" },
    would: { t: "Los usos de would", h: `${E("would")} casi siempre equivale a la terminación «-ría» del español:`, li: [["Condicional", "Situaciones imaginarias.", "I would travel more if I had money."], ["Cortesía", "Pedir y ofrecer con amabilidad.", "Would you like some coffee? / I'd like a table."], ["Hábitos del pasado", "Acciones repetidas antes (como used to).", "We would play outside every day."], ["Futuro en el pasado", "En estilo indirecto.", "She said she would call."]], tip: `${I("I'd")} puede ser ${I("I would")} o ${I("I had")}: si sigue un participio (${I("I'd gone")}) es had.`, les: "b1-u3-l3" },
    will: { t: "will", h: `${E("will")} + verbo base forma el futuro:`, li: [["Decisión del momento", "", "I'll have the chicken, please."], ["Predicción", "", "It will rain tomorrow."], ["Promesa u oferta", "", "I'll help you."]], tip: `Para planes ya decididos se prefiere ${I("going to")}: ${I("I'm going to visit my mom")}.`, les: "a2-u3-l3" },
    have: { t: "Los usos de have", h: `${E("have")} puede ser verbo normal o auxiliar:`, li: [["Tener", "Posesión, familia, características.", "I have two brothers."], ["Comer, tomar, hacer (acciones)", "have breakfast, have a shower, have a good time.", "We had lunch at noon."], ["Auxiliar del presente perfecto", "have + participio.", "I have finished."], ["Tener que", "have to + verbo.", "I have to go."]], tip: `Con ${I("he/she/it")} es ${I("has")}. Y la edad, el hambre o el frío no van con have: ${I("I am 30, I'm hungry")}.`, les: "a1-have-lo-que-tienes" },
    be: { t: "El verbo to be", h: `${E("to be")} significa «ser» y «estar» a la vez:`, li: [["Presente", "", "I am · you / we / they are · he / she / it is"], ["Pasado", "", "I / he / she / it was · you / we / they were"], ["Edad, hambre, frío", "Lo que en español «se tiene», en inglés «se es».", "I'm 25. / I'm hungry. / I'm cold."], ["Auxiliar", "Presente continuo y pasiva.", "I'm working. / It was made in China."]], tip: `¿Por qué ${I("I am")} y no ${I("I is")}? Porque be es irregular y tiene una forma propia para cada sujeto, como «soy / es / somos».`, les: "a1-el-verbo-to-be-y-presentarte" },
    that: { t: "Los usos de that", h: `${E("that")} tiene varios trabajos:`, li: [["Ese / esa / eso", "Demostrativo (lejos).", "That car is mine."], ["Que (une frases)", "Después de verbos como say, think, know. Es opcional.", "I think (that) you're right."], ["Que (relativo)", "Para describir personas o cosas.", "The book that I read."]], tip: `En comparaciones el «que» no es that sino ${I("than")}: ${I("bigger than")}.`, les: "a2-u7-l3" },
    it: { t: "it", h: `${E("it")} es «eso / ello», pero su uso más importante es como sujeto obligatorio:`, li: [["Cosa o animal", "", "Where is my phone? It's on the table."], ["Sujeto vacío", "Clima, hora, distancias, opiniones.", "It's raining. / It's 5 o'clock. / It's important."]], tip: `En español se omite («llueve»), en inglés nunca: ${I("It's raining")}.`, les: "a1-clima" },
    there: { t: "there", h: `${E("there")} tiene dos usos:`, li: [["Allá / allí", "Lugar.", "I live there."], ["Hay (there is / there are)", "Existencia.", "There is a problem. / There are two cats."]], tip: `«Había» = ${I("there was / there were")}. «Va a haber» = ${I("there will be")}.`, les: "a1-there-is-there-are-some-any" },
    used: { t: "used to vs. be used to", h: "Se parecen mucho pero significan cosas distintas:", li: [["used to + verbo", "Lo que solías hacer.", "I used to smoke. = Antes fumaba."], ["be used to + -ing", "Estar acostumbrado.", "I'm used to working late."], ["get used to + -ing", "Acostumbrarse.", "You'll get used to it."]], tip: "", les: "b2-u1-l3" },
    make: { t: "make vs. do", h: `Los dos se traducen «hacer», pero no son intercambiables:`, li: [["make", "Crear o producir algo.", "make a cake, make a mistake, make money, make a decision"], ["do", "Tareas y actividades.", "do homework, do the dishes, do exercise, do a favour"], ["make + persona + verbo", "Obligar.", "She made me laugh."]], tip: "Toca aprender las combinaciones fijas (colocaciones).", les: "b2-u5-l1" },
    as: { t: "Los usos de as", h: `${E("as")} es una palabra con muchos usos:`, li: [["Como (función)", "", "She works as a nurse."], ["Tan … como", "", "as tall as my brother"], ["Mientras / cuando", "", "As I was leaving, he called."], ["Ya que", "", "As it was late, we left."]], tip: `Para «como» en el sentido de «parecido a» se usa ${I("like")}: ${I("She sings like a bird")}.`, les: "a2-u2-l3" },
    like: { t: "Los usos de like", h: "", li: [["Gustar", "", "I like pizza. / I like dancing."], ["Como (parecido a)", "", "He looks like his dad."], ["would like (quisiera)", "", "I'd like a coffee."], ["What is it like?", "¿Cómo es?", "What's your city like?"]], tip: `Ojo: ${I("I like")} = «me gusta». En inglés quien «gusta» es el sujeto: ${I("She likes me")} = «yo le gusto».`, les: "a1-comida-y-gustos" },
    some: { t: "some / any", h: "", li: [["some", "En afirmativas y en ofrecimientos.", "I have some money. / Would you like some tea?"], ["any", "En negativas y preguntas.", "I don't have any money. / Do you have any questions?"]], tip: "", les: "a1-there-is-there-are-some-any" },
    much: { t: "much / many / a lot of", h: "", li: [["many", "Cosas que se cuentan.", "many books"], ["much", "Cosas que no se cuentan (sobre todo en negativas y preguntas).", "much water, much time"], ["a lot of", "Sirve para las dos.", "a lot of friends, a lot of money"]], tip: "", les: "a2-u6-l1" },
    ing: { t: "Las formas con -ing", h: "La terminación -ing tiene varios papeles:", li: [["Presente continuo", "be + -ing.", "I'm reading."], ["Como sustantivo (gerundio)", "Sujeto o después de ciertos verbos.", "Swimming is good. / I enjoy cooking."], ["Después de preposición", "Siempre -ing.", "before leaving, without saying"], ["Adjetivo", "Lo que causa el sentimiento.", "boring (aburridor) vs. bored (aburrido)"]], tip: "", les: "b1-u2-l4" }
  };
  WG.doing = WG.ing; WG.am = WG.be; WG.is = WG.be; WG.are = WG.be; WG.was = WG.be; WG.were = WG.be; WG.has = WG.have; WG.had = WG.have; WG.does = WG.do; WG.did = WG.do; WG.got = WG.get; WG.any = WG.some; WG.many = WG.much;
  function wordGuide(q) { const k = String(q || "").toLowerCase().trim().replace(/^-/, ""); return WG[k] ? Object.assign({ key: k }, WG[k]) : null; }

  /* ---------- buscar temas ---------- */
  const TOPICS = [
    ["verbo to be ser estar am is are", "a1-el-verbo-to-be-y-presentarte"], ["presente simple", "a1-presente-simple-lo-que-haces-siempre"], ["tercera persona -s he she it", "a1-presente-simple-lo-que-haces-siempre"],
    ["do does negativas preguntas presente", "a1-negativas-y-preguntas-en-presente"], ["presente continuo -ing ahora", "a1-presente-continuo-lo-que-pasa-ahora"], ["pasado simple regulares -ed did", "a1-pasado-simple-regulares"],
    ["pasado irregulares", "a1-pasado-simple-irregulares"], ["going to futuro planes", "a1-going-to-planes-e-invitaciones"], ["will futuro", "a2-u3-l3"], ["presente perfecto present perfect have has participio", "a2-u4-l1"],
    ["for since desde", "a2-u4-l4"], ["just already yet", "a2-u4-l3"], ["comparativos than more", "a2-u2-l1"], ["superlativos most est", "a2-u2-l2"], ["can poder", "a1-can-y-can-t"], ["should consejo deberia", "a2-u5-l2"],
    ["have to tener que obligacion", "a2-u5-l3"], ["must mustn't", "a2-u5-l4"], ["primer condicional if will", "a2-u6-l3"], ["segundo condicional would", "b1-u3-l3"], ["tercer condicional would have", "b1-u7-l1"],
    ["condicionales mixtos", "b2-u2-l2"], ["used to solia", "a2-u7-l1"], ["be used to get used to acostumbrado", "b1-u2-l3"], ["pasiva passive voz pasiva", "a2-u7-l4"], ["relativos who which that where whose", "a2-u7-l3"],
    ["gerundio infinitivo -ing to", "b1-u2-l4"], ["estilo indirecto reported speech said told", "b1-u5-l1"], ["question tags", "b1-u5-l5"], ["pasado perfecto past perfect had", "b1-u1-l3"], ["pasado continuo was were -ing", "a2-u1-l5"],
    ["presente perfecto continuo been -ing", "b1-u2-l1"], ["wish ojala if only", "b1-u3-l4"], ["modales deduccion must might could", "b1-u4-l4"], ["should have could have", "b1-u7-l2"], ["causativo have something done", "b1-u7-l4"],
    ["inversion never have i", "c1-u1-l1"], ["oraciones hendidas cleft what i need", "c1-u1-l2"], ["subjuntivo suggest that", "c1-u2-l3"], ["phrasal verbs", "a2-u6-l4"], ["articulos a an the", "a1-articulos-a-an-y-plurales"],
    ["posesivos my your 's", "a1-la-familia-y-los-posesivos"], ["there is there are hay some any", "a1-there-is-there-are-some-any"], ["preposiciones lugar in on at", "a1-preposiciones-de-lugar"], ["preposiciones tiempo in on at fechas", "a1-dias-meses-y-fechas"],
    ["adverbios frecuencia always never", "a1-que-tan-seguido-adverbios-de-frecuencia"], ["much many a lot", "a2-u6-l1"], ["contables incontables how much how many", "a1-contables-e-incontables"], ["pronombres objeto me him imperativo", "a1-objeto"],
    ["would rather prefer", "a2-u8-l2"], ["might may posibilidad", "a2-u7-l2"], ["futuro continuo future perfect", "b2-u1-l2"], ["conectores although however despite", "b1-u8-l1"], ["make let", "b2-u7-l2"], ["this that these those", "a1-this-that-these-those"]
  ];
  const fold = t => String(t).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  function topics(q) { const f = fold(q).split(/\s+/).filter(x => x.length > 1); if (!f.length) return [];
    return TOPICS.map(([k, id]) => { const kk = fold(k); let s = 0; f.forEach(x => { if (new RegExp("(^|\\s)" + x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).test(kk)) s += 2; else if (kk.includes(x)) s += 1; }); return { id, s }; })
      .filter(x => x.s > 0).sort((a, b) => b.s - a.s).filter((x, i, arr) => x.s >= arr[0].s * 0.75).slice(0, 6).map(x => x.id).filter((v, i, a) => a.indexOf(v) === i); }

  window.GRAM = { analyze, wordRole, wordGuide, topics, esc };
})();
