// Cloudflare Pages Function — /api/chat
// Routes chat requests to Gemini 3.1 Flash with knowledge base injected.
//
// Required env var (set in Cloudflare Pages settings):
//   GEMINI_API_KEY — from https://aistudio.google.com/apikey
//
// Endpoint: POST /api/chat
// Body: { messages: [{ role: 'user'|'assistant', content: string }, ...] }
// Returns: { reply: string }

const GEMINI_MODEL = 'gemini-2.5-flash'; // upgrade to gemini-3.1-flash when GA
const MAX_OUTPUT_TOKENS = 1000;

// Files to load as the knowledge base (relative to deployed root)
const KB_FILES = [
  '/reference/workflows.md',
  '/reference/categories-to-buyers.md',
  '/reference/smart-forms.md',
  '/reference/operational-rules.md',
  '/reference/quote-thresholds.md',
  '/reference/timeline.md',
  '/reference/glossary-brnet-vs-ananet.md',
  '/help/where-to-go.md',
  '/help/known-issues.md',
  '/help/support-channels.md',
];

const SYSTEM_INSTRUCTIONS = `אתה עוזר ידע למערכת עננט (Oracle Cloud ERP) של אוניברסיטת בר-אילן.
התפקיד שלך: לעזור לחוקרים, סטודנטים ועובדי בר-אילן להבין תהליכי רכש, מציאת קניינים, חוקים אופרטיביים, וכל מה שקשור לעננט.

# על המאגר
אתה מבוסס על:
- 7 הקלטות הדרכה רשמיות של מחלקת רכש בר-אילן (אפריל 2026)
- 40 מסמכי PDF הדרכתיים רשמיים
- שאלות-תשובות מהבוט הציבורי של מחלקת רכש (bar-ilan-ai-guide.lovable.app)
- שאלות נפוצות ופירוטים מפורטל בר-אילן

המאגר נערך ע"י **אלעד רפואה**, דוקטורנט במעבדה לרגש ויחסים בינאישיים בהנחיית פרופ' אשכול רפאלי.

# כללי ניתוב — שאלות אישיות
כשמישהו שואל שאלה הדורשת גישה לחשבון אישי שלו, אתה לא יכול לתת תשובה ישירה — כי אין לך גישה לחשבון. במקרים כאלה, ענה בנימוס + הצבע למקום הנכון:

| השאלה | הצבע ל |
|---|---|
| יתרה אישית / סטטוס דרישה ספציפית | "התחבר לעננט ישירות" |
| שגיאת SSO / לא מצליח להתחבר | "מוקד תקשוב 072-2644999" |
| שגיאת חומ"ס (חריגה / פג תוקף) | "hazmat.barnet@biu.ac.il" |
| שאלת מחקר על תקציב grant | "רשות המחקר / Yelena Turchik / ananet-bedikot" |
| בעיה בעננט שאינה מתועדת אצלך | "ananet.service@biu.ac.il או 072-2644999 ext 4999" |
| HR / שכר / חופשות | "משאבי אנוש (לא ב-עננט)" |

# כללי ניתוב — פרטי קשר אישיים
לשאלות "מה הטלפון של [שם]?" או "איפה החדר של [שם]?" — אתה לא נותן את הפרטים האישיים. תאמר: "לפרטי קשר ישירים, פנה ל-ananet.service@biu.ac.il שינתבו אותך, או דרך הבוט הרשמי של מחלקת רכש (bar-ilan-ai-guide.lovable.app)." זה כיבוד פרטיות של עובדי בר-אילן.

**יוצא דופן**: אתה כן יכול לאמר "הקניין של קטגוריה X הוא [שם]" — זה מידע ניתוב פומבי. אבל בלי טלפון/חדר/מייל אישי.

# הענקת קבצים
כשמישהו מבקש "תן לי את ה-PDF על X" או "יש קובץ על Y?" — תספק קישור ישיר ל-GitHub:
- בסיס: https://github.com/elad-refoua/ananet-knowledge
- PDFs: /pdfs/
- הרצאות: /lectures/
- סינתזות: /summaries/
- מסמכי עיון: /reference/

# שפה
ענה בשפה שבה נשאלת. עברית → עברית. אנגלית → אנגלית. ערבית → ערבית. וכו'.

# סגנון
- ידידותי, ברור, פרקטי
- צטט מקור כשרלוונטי ("לפי הרצאה X" או "לפי מדריך Y")
- אם אתה לא בטוח — אמור זאת
- אם השאלה לא קשורה לעננט — תפנה: "השאלה שלך לא לעננט. נסה לשאול את [המקום הרלוונטי]."

# דיסקליימר חשוב
האתר אינו על אחריות המתחזק. בינה מלאכותית עלולה לטעות. כל מידע ניתן לאימות מול חומרי המקור (לינקים ב-GitHub).

---

# מאגר הידע שלך
`;

async function loadKnowledgeBase(origin) {
  const fetches = KB_FILES.map(async (path) => {
    try {
      const res = await fetch(origin + path);
      if (!res.ok) return '';
      const text = await res.text();
      return `## ${path}\n\n${text}\n\n---\n\n`;
    } catch (e) {
      return '';
    }
  });
  const parts = await Promise.all(fetches);
  return parts.join('');
}

function buildGeminiContents(messages) {
  // Convert OpenAI-style messages to Gemini-style contents
  return messages.map((msg) => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }],
  }));
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS for development; same-origin in prod
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (!env.GEMINI_API_KEY) {
    return new Response(JSON.stringify({
      error: 'Bot not configured. GEMINI_API_KEY missing.'
    }), { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }),
      { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (messages.length === 0) {
    return new Response(JSON.stringify({ error: 'No messages' }),
      { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
  }

  // Load KB at request time (Cloudflare caches static assets, so this is fast)
  const url = new URL(request.url);
  const origin = url.origin;
  const knowledgeBase = await loadKnowledgeBase(origin);

  const systemInstruction = SYSTEM_INSTRUCTIONS + knowledgeBase;

  const geminiBody = {
    systemInstruction: { parts: [{ text: systemInstruction }] },
    contents: buildGeminiContents(messages),
    generationConfig: {
      maxOutputTokens: MAX_OUTPUT_TOKENS,
      temperature: 0.4,
      topP: 0.95,
    },
  };

  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${env.GEMINI_API_KEY}`;

  let geminiRes;
  try {
    geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiBody),
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Failed to reach Gemini API: ' + e.message }),
      { status: 502, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
  }

  if (!geminiRes.ok) {
    const errText = await geminiRes.text();
    return new Response(JSON.stringify({ error: `Gemini API ${geminiRes.status}: ${errText.slice(0, 200)}` }),
      { status: 502, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
  }

  const data = await geminiRes.json();
  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'מצטער, לא הצלחתי לייצר תשובה.';

  return new Response(JSON.stringify({ reply }), {
    headers: { 'Content-Type': 'application/json', ...corsHeaders }
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}
