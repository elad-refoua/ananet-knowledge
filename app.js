// Ananet Knowledge - main app
// Hash router + Workflow Finder + Buyer Finder + Browse + Topic-aware Chat

const BOT_ENDPOINT = '/api/chat';
const GITHUB_BASE = 'https://github.com/elad-refoua/ananet-knowledge';

// === Topic registry ===
// Mirrors functions/api/_kb.js TOPICS_META — kept here for client-side UI.
const TOPICS = {
  general: {
    title: 'בוט עננט הכללי',
    short: 'כללי',
    description: 'יודע על כל הנושאים — workflows, מלגות, חומ"ס, חו"ל, היסעים, ועוד',
    icon: '🤖',
  },
  hazmat: {
    title: 'בוט חומ"ס המומחה',
    short: 'חומ"ס',
    description: 'מומחה ברכישת חומרים מסוכנים, מסך דיווח למעבדה, קודי מעבדה, SDS',
    icon: '🧪',
  },
  'local-purchase': {
    title: 'בוט רכש מקומי המומחה',
    short: 'רכש מקומי',
    description: 'רכש מקומי, מחירון, מלאי מהמחסן הראשי',
    icon: '🛒',
  },
  foreign: {
    title: 'בוט רכש חו"ל המומחה',
    short: 'חו"ל',
    description: 'יבוא ויצוא טובין מחו"ל (עם משלוח פיזי)',
    icon: '🌍',
  },
  'credit-card': {
    title: 'בוט תשלומים לחו"ל המומחה',
    short: 'תשלומי חו"ל',
    description: 'אשראי + העברה בנקאית לחו"ל ללא משלוח פיזי',
    icon: '💳',
  },
  scholarships: {
    title: 'בוט מלגות המומחה',
    short: 'מלגות',
    description: 'הקמה, ביטול, שינוי, ודדליינים של מלגות',
    icon: '🎓',
  },
  expense: {
    title: 'בוט החזר הוצאות המומחה',
    short: 'החזר הוצאות',
    description: 'הגשה, מעקב, ופתרון בעיות בהחזרי הוצאות',
    icon: '💸',
  },
  transport: {
    title: 'בוט היסעים המומחה',
    short: 'היסעים',
    description: 'אוטובוסים, מוניות, השכרת רכב, ושינוע',
    icon: '🚌',
  },
  internal: {
    title: 'בוט רכש פנימי / בינוי המומחה',
    short: 'פנימי / בינוי',
    description: 'רכש פנימי, בירא, בינו, ושירותי תפעול',
    icon: '🏗️',
  },
  research: {
    title: 'בוט רשות מחקר המומחה',
    short: 'רשות מחקר',
    description: 'הדוח לחוקר, קדם מחקר, תקציבי grants, encumbrances',
    icon: '🔬',
  },
};

const SUGGESTED_QUESTIONS = {
  general: [
    'מי הקניין של מחשבים?',
    'איך מקימים דרישת חומ"ס?',
    'דדליין מלגות?',
    'ספי הצעות מחיר',
  ],
  hazmat: [
    'איך מקימים דרישת חומ"ס?',
    'מה זה מסך דיווח למעבדה?',
    'איך מבטלים שגיאת חריגה?',
    'מה לעשות אם המק"ט לא קיים?',
  ],
  'local-purchase': [
    'איך מקימים דרישת רכש מקומי?',
    'מה ההבדל בין מחירון לרכש מקומי?',
    'איך מזמינים מהמחסן הראשי?',
    'מי הקניין של ריהוט?',
  ],
  foreign: [
    'איך מקימים דרישת יבוא?',
    'מה צריך לדרישת יצוא?',
    'איך מציינים שעה במשלוח?',
    'מה ספי הצעות המחיר ביבוא?',
  ],
  'credit-card': [
    'איך משלמים על מאמר בכתב עת?',
    'איך משלמים בכרטיס אשראי לאתר חו"ל?',
    'מה הסף ל-Inputs Committee?',
    'איך מקימים דרישה למנוי תוכנה?',
  ],
  scholarships: [
    'איך מבטלים מלגה?',
    'מה הדדליין לביטול מלגות?',
    'איך משנים סכום מלגה?',
    'איך מתחיל תהליך מלגה חדש?',
  ],
  expense: [
    'איך מגישים החזר נסיעה?',
    'מה הדדליין להגשה?',
    'מה צריך להוכיח?',
    'איך עוקבים אחרי החזר?',
  ],
  transport: [
    'איך מזמינים אוטובוס?',
    'מה הקטגוריה להיסעים?',
    'איך מציינים שעה ומסלול?',
    'מה לעשות עם כביש 6?',
  ],
  internal: [
    'מה זה רכש פנימי?',
    'מי הקניין של בינוי?',
    'איך מזמינים מבירא?',
    'איך עובדים עם BINO?',
  ],
  research: [
    'איפה רואים את הדוח לחוקר?',
    'מה זה encumbrance?',
    'איך מנהלים תקציב grant?',
    'איך עובדים עם רשות המחקר?',
  ],
};

// === DOM helpers (safe — no innerHTML for any user content) ===
function el(tag, opts) {
  opts = opts || {};
  const node = document.createElement(tag);
  if (opts.className) node.className = opts.className;
  if (opts.text != null) node.textContent = opts.text;
  if (opts.href) node.href = opts.href;
  return node;
}

function tokenizeMd(line) {
  const out = [];
  let buf = '';
  let i = 0;
  function flush() { if (buf) { out.push({ type: 'text', text: buf }); buf = ''; } }
  while (i < line.length) {
    if (line[i] === '*' && line[i + 1] === '*') {
      const end = line.indexOf('**', i + 2);
      if (end > i + 2) { flush(); out.push({ type: 'bold', text: line.slice(i + 2, end) }); i = end + 2; continue; }
    }
    if (line[i] === '`') {
      const end = line.indexOf('`', i + 1);
      if (end > i + 1) { flush(); out.push({ type: 'code', text: line.slice(i + 1, end) }); i = end + 1; continue; }
    }
    if (line[i] === '[') {
      const close = line.indexOf(']', i + 1);
      if (close > i + 1 && line[close + 1] === '(') {
        const closeP = line.indexOf(')', close + 2);
        if (closeP > close + 2) {
          const url = line.slice(close + 2, closeP);
          if (url.startsWith('http') || url.startsWith('mailto:') || url.startsWith('/') || url.startsWith('#')) {
            flush(); out.push({ type: 'link', text: line.slice(i + 1, close), url }); i = closeP + 1; continue;
          }
        }
      }
    }
    if (line.slice(i, i + 7) === 'http://' || line.slice(i, i + 8) === 'https://') {
      let end = i;
      while (end < line.length && !/\s/.test(line[end])) end++;
      flush();
      const url = line.slice(i, end);
      out.push({ type: 'link', text: url, url });
      i = end;
      continue;
    }
    buf += line[i]; i++;
  }
  flush();
  return out;
}

function renderInline(parent, text) {
  const tokens = tokenizeMd(text);
  tokens.forEach(t => {
    if (t.type === 'text') parent.appendChild(document.createTextNode(t.text));
    else if (t.type === 'bold') parent.appendChild(el('strong', { text: t.text }));
    else if (t.type === 'code') parent.appendChild(el('code', { text: t.text }));
    else if (t.type === 'link') {
      const a = el('a', { text: t.text });
      a.href = t.url;
      if (t.url.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
      parent.appendChild(a);
    }
  });
}

// Markdown to DOM renderer for browse pages
function renderMarkdown(container, md) {
  container.replaceChildren();
  const lines = md.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('```')) {
      i++;
      const codeLines = [];
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]); i++;
      }
      i++;
      const pre = el('pre');
      pre.appendChild(el('code', { text: codeLines.join('\n') }));
      container.appendChild(pre);
      continue;
    }

    const hMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (hMatch) {
      const h = el('h' + Math.min(hMatch[1].length, 6));
      renderInline(h, hMatch[2]);
      container.appendChild(h);
      i++; continue;
    }

    if (line.trim() === '---') {
      container.appendChild(el('hr'));
      i++; continue;
    }

    if (line.startsWith('> ')) {
      const lines_q = [];
      while (i < lines.length && lines[i].startsWith('> ')) { lines_q.push(lines[i].slice(2)); i++; }
      const bq = el('blockquote');
      const p = el('p');
      renderInline(p, lines_q.join(' '));
      bq.appendChild(p);
      container.appendChild(bq);
      continue;
    }

    if (line.includes('|') && i + 1 < lines.length && lines[i + 1].match(/^\|?[\s|:-]+\|?$/)) {
      const tableLines = [];
      while (i < lines.length && lines[i].includes('|')) { tableLines.push(lines[i]); i++; }
      const table = el('table');
      const thead = el('thead');
      const tbody = el('tbody');
      const headers = tableLines[0].split('|').map(c => c.trim()).filter(c => c);
      const headerRow = el('tr');
      headers.forEach(h => {
        const th = el('th');
        renderInline(th, h);
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);
      tableLines.slice(2).forEach(row => {
        const cells = row.split('|').map(c => c.trim());
        if (cells[0] === '') cells.shift();
        if (cells[cells.length - 1] === '') cells.pop();
        if (cells.length === 0) return;
        const tr = el('tr');
        cells.slice(0, headers.length).forEach(c => {
          const td = el('td');
          renderInline(td, c);
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      container.appendChild(table);
      continue;
    }

    if (line.match(/^[\s]*[-*]\s+/)) {
      const ul = el('ul');
      while (i < lines.length && lines[i].match(/^[\s]*[-*]\s+/)) {
        const li = el('li');
        renderInline(li, lines[i].replace(/^[\s]*[-*]\s+/, ''));
        ul.appendChild(li);
        i++;
      }
      container.appendChild(ul);
      continue;
    }

    if (line.match(/^\d+\.\s+/)) {
      const ol = el('ol');
      while (i < lines.length && lines[i].match(/^\d+\.\s+/)) {
        const li = el('li');
        renderInline(li, lines[i].replace(/^\d+\.\s+/, ''));
        ol.appendChild(li);
        i++;
      }
      container.appendChild(ol);
      continue;
    }

    if (line.trim()) {
      const paras = [line];
      i++;
      while (i < lines.length && lines[i].trim() && !lines[i].match(/^(#|>|```|\||[-*]\s|\d+\.\s)/)) {
        paras.push(lines[i]); i++;
      }
      const p = el('p');
      renderInline(p, paras.join(' '));
      container.appendChild(p);
      continue;
    }

    i++;
  }
}

// =====================================================================
// ROUTER
// =====================================================================
const routes = {
  '/': renderHome,
  '/workflow-finder': renderWorkflowFinder,
  '/find-buyer': renderFindBuyer,
  '/browse': renderBrowse,
  '/about': renderAbout,
};

function getCurrentRoute() {
  const hash = location.hash.slice(1) || '/';
  const [path, query] = hash.split('?');
  return { path: path || '/', query: query ? Object.fromEntries(new URLSearchParams(query)) : {} };
}

function navigate() {
  const { path, query } = getCurrentRoute();
  document.querySelectorAll('.route').forEach(r => r.classList.add('hidden'));
  const routeEl = document.getElementById('route-' + (path === '/' ? 'home' : path.slice(1)));
  if (routeEl) {
    routeEl.classList.remove('hidden');
    if (routes[path]) routes[path](query);
  } else {
    document.getElementById('route-home').classList.remove('hidden');
    renderHome();
  }
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', navigate);

// =====================================================================
// HOME
// =====================================================================
function renderHome() {
  document.querySelectorAll('.suggested-chip').forEach(chip => {
    chip.onclick = () => {
      document.getElementById('hero-chat-input').value = chip.textContent;
      submitHeroChat();
    };
  });

  document.getElementById('hero-chat-form').onsubmit = (e) => {
    e.preventDefault();
    submitHeroChat();
  };
}

function submitHeroChat() {
  const input = document.getElementById('hero-chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  openChatSheet();
  setTimeout(() => sendChatMessage(text), 100);
}

// =====================================================================
// WORKFLOW FINDER
// =====================================================================
const WORKFLOW_TYPES = [
  { id: 'office', icon: '🛒', title: 'משרדי / מתכלים / כללי', desc: 'עט, נייר, ניקיון, ריהוט' },
  { id: 'computer', icon: '💻', title: 'ציוד מחשוב', desc: 'מחשב, מסך, מדפסת, טאבלט' },
  { id: 'hazmat', icon: '🧪', title: 'חומרים מסוכנים (חומ"ס)', desc: 'כל חומר כימי למעבדה' },
  { id: 'foreign-import', icon: '🌍', title: 'רכש מחו"ל (עם משלוח)', desc: 'ייבוא פיזי לארץ' },
  { id: 'foreign-no-import', icon: '💳', title: 'תשלום לחו"ל (ללא משלוח)', desc: 'מנוי תוכנה, מאמר, כנס' },
  { id: 'transport', icon: '🚌', title: 'היסעים', desc: 'אוטובוס, מונית, השכרת רכב' },
  { id: 'warehouse', icon: '📦', title: 'מהמחסן הראשי', desc: 'פריט מהמלאי הפנימי' },
  { id: 'internal', icon: '🏗️', title: 'שירות פנימי / בינוי', desc: 'BIRA, BINO, מחלקות בר-אילן' },
];

const WORKFLOW_RESULTS = {
  'office': {
    smartForm: 'רכש מקומי או רכש ממחירון',
    buyer: 'תלוי במוצר — ראה מצא קניין',
    quoteNote: 'תלוי בסכום (ראה ספי הצעות)',
    fields: [
      'תיאור הפריט (זהה להצעת המחיר)',
      'כמות יחידה = "יחידה"',
      'מטבע (תואם להצעה)',
      'מספר סלולרי תקין',
      'חשבון חיוב',
      'ערך תכונה = "אחר"',
      'ספק יחיד לכל הדרישה',
    ],
    attachments: ['הצעת מחיר ב-Header (לא ברמת שורה)', 'אם > 100K — אישור ועדת תשומות'],
    pdfPath: '/pdfs/logistics-procurement/דורש/05-דרישת-רכש---רכש-מקומי.pdf',
    lectureName: 'הרצאה 8 (13.4.2026)',
    lectureTopic: '03-local-purchase-catalog-2026-04-13_summary',
  },
  'computer': {
    smartForm: 'רכש מקומי או ממחירון',
    buyer: 'קציר, קארין (קטגוריות 149-153)',
    quoteNote: 'תלוי בסכום + יועץ מחשוב חובה',
    fields: [
      'קטגוריה: 149 (מדפסות) / 150 (מסכים) / 151 (מחשב נייח) / 152 (לפטופ) / 153 (טאבלט)',
      '⚠️ דורש בחירת יועץ מחשוב לאישור',
      'מספר סלולרי + חשבון חיוב',
    ],
    attachments: ['הצעת מחיר', 'אישור יועץ מחשוב'],
    pdfPath: '/pdfs/logistics-procurement/דורש/05-דרישת-רכש---רכש-מקומי.pdf',
    lectureName: 'הרצאה 8',
    lectureTopic: '03-local-purchase-catalog-2026-04-13_summary',
    extraNote: '⚠️ קטגוריות 149-153 חייבות אישור יועץ מחשוב — המערכת תחייב אותך לבחור יועץ.',
  },
  'hazmat': {
    smartForm: 'דרישת רכש לחומרים מסוכנים',
    buyer: 'קליין, גרי (501-533) / מולצנסקי, שחר (373-377)',
    quoteNote: 'לפי סכום + ועדת תשומות מ-100K',
    fields: [
      'ערך תכונה = "חומרים מסוכנים"',
      'מק"ט אריזה מדויק (כל גודל אריזה = מק"ט אחר)',
      'שם מעבדה + קוד מעבדה אישי',
      'אישור SDS (סימון V)',
    ],
    attachments: ['הצעת מחיר', 'SDS sheet'],
    pdfPath: '/pdfs/logistics-procurement/דורש/07-דרישת-רכש---חומר-מסוכן.pdf',
    lectureName: 'הרצאה 5 (15.4.2026)',
    lectureTopic: '05-hazmat-2026-04-15_summary',
    extraNote: '⚠️ קוד מעבדה אישי מתקבל לאחר ספירת מלאי. שגיאת "פג תוקף" / "חריגה" → hazmat.barnet@biu.ac.il',
  },
  'foreign-import': {
    smartForm: 'דרישת יבוא',
    buyer: 'שובל, שי (קטגוריות 202-261)',
    quoteNote: 'עד 20K = הצעה אחת | 20-60K = 2 | 60-100K = 3 | מעל 100K = ועדה',
    fields: [
      'תיאור באנגלית בלבד (בדיוק כמו בהצעה)',
      'שורה נפרדת לכל פריט',
      'ספק חו"ל באנגלית (או "GENERAL" אם לא במערכת)',
      'מטבע = USD/EUR/וכו\' תואם הצעה',
      'מחיר נטו (אחרי הנחות)',
      'כתובת מייל ספק/איש קשר',
      'קירור נדרש? (כן/לא חובה לציין)',
      'מספר סלולרי של מקבל',
      'ערך תכונה: שורה = "אחר" | Header = "ייבוא"',
    ],
    attachments: ['Proforma Invoice / Quote', 'צילום מסך עגלת קניות (אם אינטרנט)'],
    pdfPath: '/pdfs/logistics-procurement/דורש/08-דרישת-רכש---טובין-מחול.pdf',
    lectureName: 'הרצאה 7 (19.4.2026)',
    lectureTopic: '07-operations-briefing-2026-04-19_summary',
    extraNote: '⚠️ שינוי מברנט: רק הדורש עורך. הקניין לא יערוך עבורך — חובה דיוק כבר בהקמה.',
  },
  'foreign-no-import': {
    smartForm: 'העברה בנקאית לחו"ל ללא יבוא | קניה בכרטיס אשראי ללא יבוא',
    buyer: 'רגנשטיינר, ג\'רמי (251-258, 260) | נגר, לבנה (250)',
    quoteNote: 'מאמר $750+ → ועדת תשומות',
    fields: [
      'ספק חו"ל באנגלית',
      'תיאור באנגלית',
      'סכום ומטבע',
      'לינק / שם משתמש / סיסמה (אם רכישת אינטרנט)',
    ],
    attachments: ['חשבונית / חוזה / Proforma'],
    pdfPath: '/pdfs/logistics-procurement/דורש/09-דרישת-רכש---קניה-בכרטיס-אשראי-ללא-ייבוא.pdf',
    lectureName: 'הרצאה 10 (14.4.2026)',
    lectureTopic: '04-credit-card-bank-transfer-2026-04-14_summary',
    extraNote: '✅ דוגמאות: DropBox subscription, פרסום מאמר, חברות בארגון, כנס וירטואלי. ❌ לא לשמש לפריט שדורש משלוח.',
  },
  'transport': {
    smartForm: 'רכש היסעים',
    buyer: 'כהן, איריס (141, 142) / וולף, עופר (699)',
    quoteNote: 'אין צורך בהצעת מחיר (מחירון קבוע)',
    fields: [
      'שורה אחת = אוטובוס אחד (אסור לאחד)',
      'שעות התייצבות',
      'מקום איסוף',
      'מסלול מדויק',
      'שם וטלפון אחראי הנסיעה',
      'שורה נפרדת לכביש 6 (אם רלוונטי)',
      'ערך תכונה = "הסעים"',
    ],
    attachments: ['אין נדרש'],
    pdfPath: '/pdfs/logistics-procurement/דורש/15-דרישת-רכש---היסעים.pdf',
    lectureName: 'הרצאה 7',
    lectureTopic: '07-operations-briefing-2026-04-19_summary',
  },
  'warehouse': {
    smartForm: 'רכש מהמלאי',
    buyer: 'אין קניין — אישור פנימי בלבד',
    quoteNote: 'אין צורך בהצעת מחיר',
    fields: [
      'סוג מקור = "מלאי" (לא "ספק חיצוני"!)',
      'סוג יעד = "הוצאה"',
      'מחסן מקור = "מחסן כללי"',
      'ערך תכונה = "אחר"',
      '❌ אל תסמן "תשומת מחקר" — אף פריט מהמחסן אינו תשומה',
    ],
    attachments: ['אין'],
    pdfPath: '/pdfs/logistics-procurement/דורש/04-דרישות-רכש---מלאי.pdf',
    lectureName: 'הרצאה 8',
    lectureTopic: '03-local-purchase-catalog-2026-04-13_summary',
    extraNote: 'מהיר — אישור פנימי בלבד, הופך אוטומטית להוראת העברה. 242 פריטים זמינים.',
  },
  'internal': {
    smartForm: 'רכש בירא / בינו / רכש פנימי',
    buyer: 'תלוי בקטגוריה — ראה מצא קניין',
    quoteNote: 'תלוי במחלקה',
    fields: [
      'בחר את הקטגוריה הספציפית (851 = בירא, 900-994 = בינו)',
      'הקניין נקבע אוטומטית לפי הקטגוריה',
    ],
    attachments: ['תלוי במחלקה'],
    pdfPath: '/pdfs/logistics-procurement/דורש/11-דרישות-רכש---רכש-פנימי.pdf',
    lectureName: 'הרצאה 7',
    lectureTopic: '07-operations-briefing-2026-04-19_summary',
  },
};

function renderWorkflowFinder() {
  const container = document.getElementById('wizard-container');
  container.replaceChildren();
  const step = el('div', { className: 'wizard-step' });
  step.appendChild(el('h3', { className: 'text-lg md:text-xl font-bold mb-4', text: 'מה אתה רוצה לקנות / לבצע?' }));
  const grid = el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4' });
  WORKFLOW_TYPES.forEach(type => {
    const card = el('button', { className: 'wizard-card' });
    card.appendChild(el('div', { className: 'text-4xl mb-3', text: type.icon }));
    card.appendChild(el('h4', { className: 'font-bold text-base md:text-lg', text: type.title }));
    card.appendChild(el('p', { className: 'text-sm text-slate-600 mt-1', text: type.desc }));
    card.onclick = () => showWorkflowResult(type.id);
    grid.appendChild(card);
  });
  step.appendChild(grid);
  container.appendChild(step);
}

function showWorkflowResult(typeId) {
  const result = WORKFLOW_RESULTS[typeId];
  const type = WORKFLOW_TYPES.find(t => t.id === typeId);
  const container = document.getElementById('wizard-container');
  container.replaceChildren();

  const wrapper = el('div', { className: 'wizard-step' });

  // Header
  const header = el('div', { className: 'mb-4' });
  const back = el('button', { className: 'text-sm text-slate-600 hover:text-primary-600 mb-3', text: '← בחר תהליך אחר' });
  back.onclick = renderWorkflowFinder;
  header.appendChild(back);
  header.appendChild(el('h3', { className: 'text-xl md:text-2xl font-bold', text: type.icon + ' ' + type.title }));
  wrapper.appendChild(header);

  // Smart form
  const smartFormSection = el('div', { className: 'result-section bg-primary-50 border-primary-200' });
  smartFormSection.appendChild(el('h3', { text: '✅ השתמש בטופס:' }));
  smartFormSection.appendChild(el('p', { className: 'text-lg font-semibold text-primary-900', text: result.smartForm }));
  wrapper.appendChild(smartFormSection);

  // Extra note
  if (result.extraNote) {
    const note = el('div', { className: 'result-section bg-amber-50 border-amber-200' });
    const p = el('p', { className: 'text-sm text-amber-900' });
    renderInline(p, result.extraNote);
    note.appendChild(p);
    wrapper.appendChild(note);
  }

  // Mandatory fields
  const fieldsSection = el('div', { className: 'result-section' });
  fieldsSection.appendChild(el('h3', { text: '📝 שדות חובה' }));
  const ul = el('ul', { className: 'space-y-1 text-sm' });
  result.fields.forEach(f => {
    const li = el('li', { className: 'flex items-start gap-2' });
    li.appendChild(el('span', { text: '•' }));
    const span = el('span');
    renderInline(span, f);
    li.appendChild(span);
    ul.appendChild(li);
  });
  fieldsSection.appendChild(ul);
  wrapper.appendChild(fieldsSection);

  // Attachments
  const attSection = el('div', { className: 'result-section' });
  attSection.appendChild(el('h3', { text: '📎 נספחים' }));
  const ulA = el('ul', { className: 'space-y-1 text-sm' });
  result.attachments.forEach(a => {
    const li = el('li', { className: 'flex items-start gap-2' });
    li.appendChild(el('span', { text: '•' }));
    const span = el('span');
    renderInline(span, a);
    li.appendChild(span);
    ulA.appendChild(li);
  });
  attSection.appendChild(ulA);
  wrapper.appendChild(attSection);

  // Buyer
  const buyerSection = el('div', { className: 'result-section' });
  buyerSection.appendChild(el('h3', { text: '👤 קניין' }));
  buyerSection.appendChild(el('p', { className: 'text-sm', text: result.buyer }));
  const buyerNote = el('p', { className: 'text-xs text-slate-500 mt-2' });
  buyerNote.appendChild(document.createTextNode('לפרטי קשר ישירים — '));
  const a = el('a', { text: 'ananet.service@biu.ac.il', href: 'mailto:ananet.service@biu.ac.il' });
  a.className = 'text-primary-600 underline';
  buyerNote.appendChild(a);
  buyerSection.appendChild(buyerNote);
  wrapper.appendChild(buyerSection);

  // Quote requirement
  const quoteSection = el('div', { className: 'result-section' });
  quoteSection.appendChild(el('h3', { text: '💰 דרישות הצעות מחיר' }));
  quoteSection.appendChild(el('p', { className: 'text-sm', text: result.quoteNote }));
  quoteSection.appendChild(el('a', {
    href: '#/browse?topic=quote-thresholds',
    className: 'text-xs text-primary-600 underline mt-2 inline-block',
    text: 'פירוט מלא ספי הצעות מחיר →'
  }));
  wrapper.appendChild(quoteSection);

  // Sources
  const sourceSection = el('div', { className: 'result-section bg-slate-50' });
  sourceSection.appendChild(el('h3', { text: '📚 מקורות לאימות' }));
  const sourceList = el('ul', { className: 'space-y-2 text-sm' });
  if (result.pdfPath) {
    const li = el('li');
    const link = el('a', { text: '📄 מדריך PDF רשמי', href: GITHUB_BASE + '/blob/main' + result.pdfPath });
    link.className = 'text-primary-600 underline'; link.target = '_blank';
    li.appendChild(link);
    sourceList.appendChild(li);
  }
  if (result.lectureName) {
    const li = el('li');
    const link = el('a', { text: '🎙️ ' + result.lectureName, href: '#/browse?topic=' + result.lectureTopic });
    link.className = 'text-primary-600 underline';
    li.appendChild(link);
    sourceList.appendChild(li);
  }
  sourceSection.appendChild(sourceList);
  wrapper.appendChild(sourceSection);

  // Follow-up actions
  const actions = el('div', { className: 'flex flex-wrap gap-3 mt-6' });
  const btnBack = el('button', { className: 'bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg', text: '← בחר תהליך אחר' });
  btnBack.onclick = renderWorkflowFinder;
  const btnAsk = el('button', { className: 'bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg', text: '💬 שאל את הבוט שאלה ספציפית' });
  btnAsk.onclick = () => {
    openChatSheet();
    setTimeout(() => sendChatMessage('יש לי שאלה ספציפית על ' + type.title), 100);
  };
  actions.appendChild(btnBack); actions.appendChild(btnAsk);
  wrapper.appendChild(actions);

  container.appendChild(wrapper);
}

// =====================================================================
// FIND BUYER
// =====================================================================
let categoriesData = null;

async function loadCategories() {
  if (categoriesData) return categoriesData;
  try {
    const res = await fetch('/data/categories.json');
    categoriesData = await res.json();
    return categoriesData;
  } catch (e) { return null; }
}

function flattenCategories(data) {
  const flat = [];
  if (!data || !data.groups) return flat;
  for (const groupKey in data.groups) {
    const group = data.groups[groupKey];
    for (const catNum in group.categories) {
      const cat = group.categories[catNum];
      flat.push({
        catNum,
        groupName: group.name_he,
        description: cat.description || '',
        buyer: cat.buyer || '',
      });
    }
  }
  return flat;
}

async function renderFindBuyer() {
  const container = document.getElementById('buyer-finder-container');
  container.replaceChildren();

  const data = await loadCategories();
  const flat = flattenCategories(data);

  const searchWrap = el('div', { className: 'mb-6' });
  const input = el('input', {
    className: 'w-full bg-white border border-slate-300 rounded-xl px-5 py-3 text-base outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition'
  });
  input.type = 'text';
  input.placeholder = '🔍 הקלד פריט / מספר קטגוריה / שם קניין...';
  input.setAttribute('aria-label', 'חיפוש קניין');
  searchWrap.appendChild(input);
  container.appendChild(searchWrap);

  const results = el('div', { className: 'space-y-2' });
  container.appendChild(results);

  function buildEmpty() {
    const emptyState = el('div', { className: 'text-center py-8' });
    emptyState.appendChild(el('div', { className: 'text-4xl mb-3', text: '🔍' }));
    emptyState.appendChild(el('p', { className: 'text-slate-600', text: 'הקלד פריט או מספר קטגוריה כדי למצוא את הקניין הנכון' }));
    const examples = el('div', { className: 'mt-4 flex flex-wrap gap-2 justify-center' });
    ['מחשב', 'כיסא', 'הסעות', '502', 'קליין'].forEach(ex => {
      const chip = el('button', { className: 'chat-suggestion-chip', text: ex });
      chip.onclick = () => { input.value = ex; doSearch(ex); };
      examples.appendChild(chip);
    });
    emptyState.appendChild(examples);
    return emptyState;
  }

  results.appendChild(buildEmpty());

  function doSearch(query) {
    results.replaceChildren();
    const q = query.trim().toLowerCase();
    if (!q) { results.appendChild(buildEmpty()); return; }
    const matches = flat.filter(c =>
      c.catNum.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.buyer.toLowerCase().includes(q) ||
      c.groupName.toLowerCase().includes(q)
    ).slice(0, 30);

    if (matches.length === 0) {
      const noResult = el('div', { className: 'text-center py-8' });
      noResult.appendChild(el('div', { className: 'text-3xl mb-2', text: '🤷' }));
      noResult.appendChild(el('p', { className: 'text-slate-600 mb-3', text: 'לא נמצא. נסה לשאול את הבוט.' }));
      const btn = el('button', { className: 'bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg', text: '💬 שאל את הבוט' });
      btn.onclick = () => { openChatSheet(); setTimeout(() => sendChatMessage('מי הקניין של ' + query + '?'), 100); };
      noResult.appendChild(btn);
      results.appendChild(noResult);
      return;
    }

    results.appendChild(el('p', { className: 'text-sm text-slate-600 mb-2', text: matches.length === 30 ? 'מציג 30 תוצאות ראשונות. צמצם את החיפוש.' : 'נמצאו ' + matches.length + ' תוצאות' }));

    matches.forEach(m => {
      const card = el('div', { className: 'buyer-result' });
      const top = el('div', { className: 'flex items-start justify-between gap-3' });
      const left = el('div');
      const catLine = el('div', { className: 'flex items-center gap-2 mb-1' });
      catLine.appendChild(el('span', { className: 'bg-primary-100 text-primary-700 text-xs font-bold px-2 py-1 rounded', text: 'קטגוריה ' + m.catNum }));
      catLine.appendChild(el('span', { className: 'text-xs text-slate-500', text: m.groupName }));
      left.appendChild(catLine);
      left.appendChild(el('p', { className: 'text-sm font-medium', text: m.description }));
      top.appendChild(left);
      card.appendChild(top);

      const buyerLine = el('div', { className: 'mt-2 flex items-center gap-2 text-sm' });
      buyerLine.appendChild(el('span', { className: 'text-slate-500', text: '👤 קניין:' }));
      buyerLine.appendChild(el('span', { className: 'font-semibold', text: m.buyer }));
      card.appendChild(buyerLine);

      results.appendChild(card);
    });

    const footer = el('div', { className: 'mt-4 p-3 bg-slate-50 rounded-lg text-xs text-slate-600 text-center' });
    footer.appendChild(document.createTextNode('לפרטי קשר ישירים (טלפון/חדר/מייל) — '));
    const a = el('a', { text: 'ananet.service@biu.ac.il', href: 'mailto:ananet.service@biu.ac.il' });
    a.className = 'text-primary-600 underline font-semibold';
    footer.appendChild(a);
    results.appendChild(footer);
  }

  let timer;
  input.addEventListener('input', (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => doSearch(e.target.value), 150);
  });
  input.focus();
}

// =====================================================================
// BROWSE
// =====================================================================
const BROWSE_TOPICS = {
  'workflows': { title: '11 סוגי דרישות רכש', file: '/reference/workflows.md' },
  'categories-to-buyers': { title: 'קטגוריות → קניינים', file: '/reference/categories-to-buyers.md' },
  'smart-forms': { title: 'Smart Forms', file: '/reference/smart-forms.md' },
  'operational-rules': { title: '10 חוקי הברזל', file: '/reference/operational-rules.md' },
  'quote-thresholds': { title: 'ספי הצעות מחיר', file: '/reference/quote-thresholds.md' },
  'timeline': { title: 'ציר זמן', file: '/reference/timeline.md' },
  'glossary-brnet-vs-ananet': { title: 'מילון: ברנט → עננט', file: '/reference/glossary-brnet-vs-ananet.md' },
  'where-to-go': { title: 'לאן לפנות', file: '/help/where-to-go.md' },
  'known-issues': { title: 'בעיות ידועות', file: '/help/known-issues.md' },
  'support-channels': { title: 'ערוצי תמיכה', file: '/help/support-channels.md' },
  'local-purchase': { title: 'רכש מקומי', file: '/reference/workflows.md' },
  'foreign': { title: 'רכש מחו"ל', file: '/reference/workflows.md' },
  'hazmat': { title: 'חומרים מסוכנים', file: '/lectures/05-hazmat-2026-04-15_summary.md' },
  'scholarships': { title: 'מלגות', file: '/lectures/08-scholarships-2026-04-16_summary.md' },
  'expense': { title: 'החזר הוצאות', file: '/lectures/06-expense-reimbursement-2026-04-16_summary.md' },
  'transport': { title: 'היסעים', file: '/reference/workflows.md' },
  'research': { title: 'רשות מחקר', file: '/summaries/research-authority-guides.md' },
  'construction': { title: 'בינוי ותפעול', file: '/reference/categories-to-buyers.md' },
  '03-local-purchase-catalog-2026-04-13_summary': { title: 'הרצאה 8 — רכש מקומי, מחירון, מלאי', file: '/lectures/03-local-purchase-catalog-2026-04-13_summary.md' },
  '04-credit-card-bank-transfer-2026-04-14_summary': { title: 'הרצאה 10 — אשראי + העברה בנקאית', file: '/lectures/04-credit-card-bank-transfer-2026-04-14_summary.md' },
  '05-hazmat-2026-04-15_summary': { title: 'הרצאה 5 — חומרים מסוכנים', file: '/lectures/05-hazmat-2026-04-15_summary.md' },
  '06-expense-reimbursement-2026-04-16_summary': { title: 'הרצאה 7 — החזר הוצאות', file: '/lectures/06-expense-reimbursement-2026-04-16_summary.md' },
  '07-operations-briefing-2026-04-19_summary': { title: 'הרצאה 7 — פגישת תפעול', file: '/lectures/07-operations-briefing-2026-04-19_summary.md' },
  '08-scholarships-2026-04-16_summary': { title: 'הרצאה 4 — מלגות', file: '/lectures/08-scholarships-2026-04-16_summary.md' },
};

// Map browse topic IDs → specialist bot IDs (when one exists)
const BROWSE_TO_BOT = {
  'hazmat': 'hazmat',
  'scholarships': 'scholarships',
  'expense': 'expense',
  'transport': 'transport',
  'foreign': 'foreign',
  'local-purchase': 'local-purchase',
  'research': 'research',
  'construction': 'internal',
};

async function renderBrowse(query) {
  const container = document.getElementById('browse-container');
  container.replaceChildren();

  const topicId = (query && query.topic) || 'workflows';
  const topic = BROWSE_TOPICS[topicId] || BROWSE_TOPICS['workflows'];

  // Specialist bot CTA (if this browse topic maps to a specialist)
  const botTopic = BROWSE_TO_BOT[topicId];
  if (botTopic && TOPICS[botTopic]) {
    const t = TOPICS[botTopic];
    const cta = el('div', { className: 'specialist-cta' });
    cta.appendChild(el('span', { className: 'text-3xl', text: t.icon }));
    const txt = el('div', { className: 'specialist-cta-text' });
    txt.appendChild(el('div', { className: 'font-bold text-primary-900', text: 'בוט מומחה זמין: ' + t.title }));
    txt.appendChild(el('div', { className: 'text-sm text-primary-800 mt-0.5', text: t.description }));
    cta.appendChild(txt);
    const btn = el('button', { text: '💬 שאל את הבוט המומחה' });
    btn.onclick = () => {
      if (currentTopic !== botTopic) {
        if (conversation.length === 0 || confirm('לפתוח שיחה עם ' + t.title + '?')) {
          currentTopic = botTopic;
          conversation.length = 0;
          saveConversation();
          updateTopicHeader();
        }
      }
      openChatSheet();
    };
    cta.appendChild(btn);
    container.appendChild(cta);
  }

  const chipsRow = el('div', { className: 'flex flex-wrap gap-2 mb-6 overflow-x-auto' });
  ['workflows', 'categories-to-buyers', 'smart-forms', 'operational-rules', 'quote-thresholds', 'timeline', 'where-to-go', 'known-issues', 'glossary-brnet-vs-ananet'].forEach(id => {
    const t = BROWSE_TOPICS[id];
    const chip = el('a', { href: '#/browse?topic=' + id, text: t.title });
    chip.className = 'chat-suggestion-chip' + (id === topicId ? ' bg-primary-100 border-primary-400 text-primary-800' : '');
    chipsRow.appendChild(chip);
  });
  container.appendChild(chipsRow);

  const sourceLink = el('div', { className: 'mb-3 text-xs text-slate-600' });
  sourceLink.appendChild(document.createTextNode('מקור: '));
  const sourceA = el('a', { text: 'הצג ב-GitHub', href: GITHUB_BASE + '/blob/main' + topic.file });
  sourceA.className = 'text-primary-600 underline'; sourceA.target = '_blank';
  sourceLink.appendChild(sourceA);
  container.appendChild(sourceLink);

  const contentDiv = el('div', { className: 'browse-content' });
  contentDiv.appendChild(el('p', { className: 'text-slate-500', text: 'טוען...' }));
  container.appendChild(contentDiv);

  try {
    const res = await fetch(topic.file);
    if (!res.ok) throw new Error('Not found');
    const md = await res.text();
    renderMarkdown(contentDiv, md);
  } catch (e) {
    contentDiv.replaceChildren();
    contentDiv.appendChild(el('p', { className: 'text-red-600', text: 'לא ניתן לטעון את התוכן: ' + e.message }));
  }
}

function renderAbout() { /* Static */ }

// =====================================================================
// CHAT
// =====================================================================
const conversation = [];

const chatSheet = document.getElementById('chat-sheet');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatForm = document.getElementById('chat-form');
const chatSuggestions = document.getElementById('chat-suggestions');

function openChatSheet() {
  chatSheet.classList.remove('hidden');
  if (conversation.length === 0) {
    showWelcome();
  } else if (chatMessages.children.length === 0) {
    // Restore conversation to UI (e.g., after page reload)
    restoreConversationToUI();
  }
  updateChatStatus();
  setTimeout(() => chatInput.focus(), 100);
}

function restoreConversationToUI() {
  chatMessages.replaceChildren();
  conversation.forEach(m => {
    if (m.role === 'user') addUserMessage(m.content);
    else addBotMessage(m.content);
  });
}

function updateChatStatus() {
  const statusEl = document.getElementById('chat-status');
  if (!statusEl) return;
  const userMsgs = conversation.filter(m => m.role === 'user').length;
  if (userMsgs === 0) {
    statusEl.textContent = 'שיחה חדשה';
  } else {
    statusEl.textContent = userMsgs + ' שאלות בשיחה — ההקשר נשמר';
  }
}

function closeChatSheet() {
  chatSheet.classList.add('hidden');
}

// Current topic (default: general)
let currentTopic = 'general';

function getWelcomeMessage(topicId) {
  const t = TOPICS[topicId] || TOPICS.general;
  if (topicId === 'general') {
    return 'שלום! אני **בוט עננט הכללי** — יודע על כל הנושאים: workflows רכש, מלגות, חומ"ס, חו"ל, היסעים, ועוד.\n\nשאל אותי בעברית, אנגלית, או כל שפה. למידע אישי (היתרה שלך, סטטוס דרישה) — אפנה אותך ל-ananet.service@biu.ac.il.\n\nרוצה דיוק ועומק בתחום ספציפי? לחץ על שם הבוט למעלה כדי לעבור לבוט מומחה.';
  }
  return 'שלום! אני **' + t.title + '** ' + t.icon + '\n\n**אני יודע רק על:** ' + t.description + '\n\nאם השאלה שלך מחוץ לתחום — אפנה אותך לבוט מומחה אחר או לבוט הכללי. החלפה — לחיצה על שם הבוט למעלה.';
}

function showWelcome() {
  chatMessages.replaceChildren();
  addBotMessage(getWelcomeMessage(currentTopic));
  const sugs = SUGGESTED_QUESTIONS[currentTopic] || SUGGESTED_QUESTIONS.general;
  showSuggestions(sugs.slice(0, 4));
}

function updateTopicHeader() {
  const t = TOPICS[currentTopic] || TOPICS.general;
  const titleEl = document.getElementById('topic-title');
  const iconEl = document.getElementById('topic-icon');
  if (titleEl) titleEl.textContent = t.title;
  if (iconEl) iconEl.textContent = t.icon;
}

function switchTopic(newTopicId) {
  if (!TOPICS[newTopicId]) return;
  if (newTopicId === currentTopic) return;
  if (conversation.length > 0) {
    if (!confirm('להחליף ל' + TOPICS[newTopicId].title + '? השיחה הנוכחית תיסגר.')) return;
  }
  currentTopic = newTopicId;
  conversation.length = 0;
  saveConversation();
  updateTopicHeader();
  showWelcome();
  updateChatStatus();
  closeTopicPicker();
}

function openTopicPicker() {
  const modal = document.getElementById('topic-picker-modal');
  const list = document.getElementById('topic-picker-list');
  list.replaceChildren();

  // General first, then specialists
  const order = ['general', ...Object.keys(TOPICS).filter(k => k !== 'general')];
  order.forEach(topicId => {
    const t = TOPICS[topicId];
    const card = el('button', { className: 'topic-card' + (topicId === currentTopic ? ' current' : '') });
    card.appendChild(el('span', { className: 'icon', text: t.icon }));
    const textWrap = el('div', { className: 'flex-1 min-w-0' });
    const titleLine = el('div', { className: 'title' });
    titleLine.appendChild(document.createTextNode(t.title));
    if (topicId === currentTopic) {
      titleLine.appendChild(el('span', { className: 'badge', text: 'נוכחי' }));
    }
    textWrap.appendChild(titleLine);
    textWrap.appendChild(el('div', { className: 'desc', text: t.description }));
    card.appendChild(textWrap);
    card.onclick = () => switchTopic(topicId);
    list.appendChild(card);
  });

  modal.classList.remove('hidden');
}

function closeTopicPicker() {
  document.getElementById('topic-picker-modal').classList.add('hidden');
}

function showSuggestions(questions) {
  chatSuggestions.replaceChildren();
  questions.forEach(q => {
    const chip = el('button', { className: 'chat-suggestion-chip', text: q });
    chip.onclick = () => { chatInput.value = q; sendChatFromInput(); };
    chatSuggestions.appendChild(chip);
  });
}

function clearSuggestions() { chatSuggestions.replaceChildren(); }

function buildBubble(text, isUser) {
  const wrapper = el('div', { className: isUser ? 'chat-message-user' : 'chat-message-bot' });
  const avatar = el('div', { className: 'text-2xl flex-shrink-0', text: isUser ? '👤' : '🤖' });
  const bubble = el('div', { className: 'bubble' });
  if (isUser) {
    bubble.textContent = text;
    wrapper.appendChild(bubble); wrapper.appendChild(avatar);
  } else {
    renderBotContent(bubble, text);
    wrapper.appendChild(avatar); wrapper.appendChild(bubble);
  }
  return wrapper;
}

function renderBotContent(bubble, text) {
  bubble.replaceChildren();
  const lines = text.split('\n');
  lines.forEach((line, idx) => {
    if (idx > 0) bubble.appendChild(el('br'));
    if (line.trim()) renderInline(bubble, line);
  });
}

function addUserMessage(text) {
  chatMessages.appendChild(buildBubble(text, true));
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(text) {
  chatMessages.appendChild(buildBubble(text, false));
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
  const wrapper = el('div', { className: 'chat-message-bot' });
  wrapper.id = 'typing-indicator';
  wrapper.appendChild(el('div', { className: 'text-2xl flex-shrink-0', text: '🤖' }));
  const bubble = el('div', { className: 'bubble' });
  const dots = el('span', { className: 'typing-dots' });
  for (let i = 0; i < 3; i++) dots.appendChild(el('span'));
  bubble.appendChild(dots);
  wrapper.appendChild(bubble);
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return wrapper;
}

async function sendChatMessage(text) {
  clearSuggestions();
  addUserMessage(text);
  conversation.push({ role: 'user', content: text });
  saveConversation();

  const typing = showTyping();
  let bubble = null;
  let accumulated = '';

  try {
    const res = await fetch(BOT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: conversation, topic: currentTopic }),
    });

    if (!res.ok) throw new Error('HTTP ' + res.status);

    const ct = res.headers.get('content-type') || '';
    if (ct.includes('text/event-stream') && res.body && res.body.getReader) {
      // Streaming SSE
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const events = buf.split('\n\n');
        buf = events.pop() || '';
        for (const evt of events) {
          if (!evt.startsWith('data: ')) continue;
          const dataStr = evt.slice(6).trim();
          if (dataStr === '[DONE]') continue;
          try {
            const data = JSON.parse(dataStr);
            const chunk = data.text || data.delta || '';
            if (chunk) {
              accumulated += chunk;
              if (!bubble) {
                typing.remove();
                const wrapper = el('div', { className: 'chat-message-bot' });
                wrapper.appendChild(el('div', { className: 'text-2xl flex-shrink-0', text: '🤖' }));
                bubble = el('div', { className: 'bubble' });
                wrapper.appendChild(bubble);
                chatMessages.appendChild(wrapper);
              }
              renderBotContent(bubble, accumulated);
              chatMessages.scrollTop = chatMessages.scrollHeight;
            }
          } catch (e) { /* ignore */ }
        }
      }
    }

    if (!accumulated) {
      // Non-streaming JSON fallback
      typing.remove();
      const data = await res.json().catch(() => ({}));
      accumulated = data.reply || data.text || 'מצטער, לא קיבלתי תשובה.';
      addBotMessage(accumulated);
    }

    conversation.push({ role: 'assistant', content: accumulated });
    saveConversation();
    updateChatStatus();
    // Show topic-aware follow-up suggestions
    const sugs = SUGGESTED_QUESTIONS[currentTopic] || SUGGESTED_QUESTIONS.general;
    showSuggestions(sugs.slice(0, 3));

  } catch (err) {
    typing.remove();
    addBotMessage('⚠️ שגיאה: ' + err.message + '\n\nלחלופין, פנה ישירות:\n• ananet.service@biu.ac.il\n• 072-2644999 ext 4999');
  }
}

function sendChatFromInput() {
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = '';
  sendChatMessage(text);
}

chatForm.addEventListener('submit', (e) => { e.preventDefault(); sendChatFromInput(); });
document.getElementById('chat-close').addEventListener('click', closeChatSheet);
document.getElementById('floating-chat-btn').addEventListener('click', openChatSheet);
document.getElementById('chat-clear').addEventListener('click', () => {
  if (conversation.length > 0) {
    if (!confirm('להתחיל שיחה חדשה? כל ההיסטוריה תימחק.')) return;
  }
  conversation.length = 0;
  saveConversation();
  showWelcome();
  updateChatStatus();
});

// Topic picker
document.getElementById('topic-selector').addEventListener('click', openTopicPicker);
document.getElementById('topic-picker-close').addEventListener('click', closeTopicPicker);
document.getElementById('topic-picker-modal').addEventListener('click', (e) => {
  if (e.target.id === 'topic-picker-modal') closeTopicPicker();
});

// Allow ?topic= query param to preselect a bot (deep link)
function applyTopicFromUrl() {
  const { query } = getCurrentRoute();
  if (query.bot && TOPICS[query.bot]) {
    currentTopic = query.bot;
    updateTopicHeader();
  }
}

function saveConversation() {
  try {
    // Keep last 30 messages — enough for solid context, not too heavy
    const trimmed = conversation.slice(-30);
    localStorage.setItem('ananet-chat', JSON.stringify({ at: Date.now(), msgs: trimmed }));
  } catch (e) { /* ignore */ }
}

function loadConversation() {
  try {
    const raw = localStorage.getItem('ananet-chat');
    if (!raw) return;
    const data = JSON.parse(raw);
    // 7 days retention
    if (Date.now() - data.at > 7 * 24 * 60 * 60 * 1000) {
      localStorage.removeItem('ananet-chat');
      return;
    }
    conversation.push(...data.msgs);
    // Don't render to UI yet — wait until chat is opened (avoids flicker on page load)
  } catch (e) { /* ignore */ }
}

// =====================================================================
// FIRST-VISIT MODAL
// =====================================================================
const FIRST_VISIT_KEY = 'ananet-first-visit-dismissed';

function checkFirstVisit() {
  if (localStorage.getItem(FIRST_VISIT_KEY)) return;
  const modal = document.getElementById('first-visit-modal');
  modal.classList.remove('hidden');
}

document.getElementById('first-visit-dismiss').addEventListener('click', () => {
  localStorage.setItem(FIRST_VISIT_KEY, '1');
  document.getElementById('first-visit-modal').classList.add('hidden');
});

// =====================================================================
// INIT
// =====================================================================
loadConversation();
checkFirstVisit();
navigate();
updateTopicHeader();

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !chatSheet.classList.contains('hidden')) closeChatSheet();
});

chatSheet.addEventListener('click', (e) => {
  if (e.target === chatSheet) closeChatSheet();
});
