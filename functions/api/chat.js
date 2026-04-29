// Cloudflare Pages Function — /api/chat
// Routes chat to Gemini with topic-specific knowledge base.
//
// Required env var (set in Cloudflare Pages settings):
//   GEMINI_API_KEY — from https://aistudio.google.com/apikey
//
// Endpoint: POST /api/chat
// Body: {
//   messages: [{ role: 'user'|'assistant', content: string }, ...],
//   topic?: 'general' | 'hazmat' | 'scholarships' | ...
// }
// Response: JSON { reply: string, model: string, topic: string }

import { KBs, TOPICS_META, TOPIC_IDS } from './_kb.js';

const GEMINI_MODELS = ['gemini-2.5-flash-lite', 'gemini-2.5-flash', 'gemini-flash-latest'];
const MAX_OUTPUT_TOKENS = 1500;

const COMMON_RULES = `
המטרה שלך: לעזור למשתמשי עננט בבר-אילן עם שאלות על המערכת. ענה ישיר, מפורט, ידידותי, בשפה שבה נשאלת.

מקרים מיוחדים:
1. שאלה על חשבון אישי (היתרה שלי, הסטטוס שלי, ה-SSO לא עובד) — אין לך גישה. הצבע ל: התחבר לעננט / מוקד תקשוב 072-2644999 / ananet.service@biu.ac.il.
2. בקשה לטלפון/חדר/מייל אישי של עובד — תאמר "לפרטי קשר ישירים, פנה ל-ananet.service@biu.ac.il". (כן מותר לאמר את שם הקניין של קטגוריה.)
3. שגיאת חומ"ס (חריגה / פג תוקף) — הצבע ל-hazmat.barnet@biu.ac.il.
4. בקשה לקובץ — תן קישור ל-https://github.com/elad-refoua/ananet-knowledge/.

לכל שאר השאלות על עננט — ענה ישירות עם המידע מהמאגר שלך.

האתר אינו על אחריות המתחזק. AI עלול לטעות. ציין מקור כשאפשר.
`;

function buildSystemInstruction(topicId) {
  const meta = TOPICS_META[topicId] || TOPICS_META.general;
  const kb = KBs[topicId] || KBs.general;

  // Identity per topic
  let identity;
  let scope;

  if (topicId === 'general') {
    identity = `אתה **בוט עננט הכללי** — מומחה לכל הנושאים של מערכת עננט (Oracle Cloud ERP) של אוניברסיטת בר-אילן.
אתה יודע על: workflows רכש, חומ"ס, מלגות, חו"ל, היסעים, רשות מחקר, החזר הוצאות, וכל נושא אחר.`;
    scope = `# הקבצים שלך
${meta.sources ? meta.sources.map(s => '- ' + s).join('\n') : '(כל הקבצים)'}`;
  } else {
    // List the OTHER specialists for redirection
    const otherSpecialists = TOPIC_IDS
      .filter(t => t !== 'general' && t !== topicId)
      .map(t => '  - ' + TOPICS_META[t].title + ' (' + t + '): ' + TOPICS_META[t].description)
      .join('\n');

    identity = `אתה **${meta.title}** — מומחה ספציפי בנושא: ${meta.description}.

⚠️ **אתה לא יודע** על נושאים אחרים. אם נשאלת שאלה שלא בתחום שלך, ענה בנימוס:
"אני רק יודע על: ${meta.description}. לשאלה שלך נסה את **בוט כללי** או את אחד הבוטים המומחים האחרים:

${otherSpecialists}

אפשר להחליף בוט בלחיצה על שם הבוט בראש החלון."

🚫 **אסור לך** לנחש או להמציא מידע על נושאים מחוץ לתחום שלך, גם אם אתה חושב שאתה יודע.`;

    scope = `# הקבצים בתחום שלך
${meta.sources.map(s => '- ' + s).join('\n')}

זה כל מה שיש לך. שום דבר אחר.`;
  }

  return `${identity}

${COMMON_RULES}

${scope}

---

# מאגר הידע שלך

${kb}
`;
}

function buildGeminiContents(messages) {
  return messages
    .filter(m => m.role === 'user' || m.role === 'assistant')
    .map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content || '' }],
    }));
}

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.GEMINI_API_KEY) {
    return jsonResponse({ error: 'הבוט לא מוגדר. חסר GEMINI_API_KEY בסביבת השרת.' }, 500);
  }

  let body;
  try { body = await request.json(); } catch (e) {
    return jsonResponse({ error: 'JSON לא תקין' }, 400);
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (messages.length === 0) {
    return jsonResponse({ error: 'אין הודעות' }, 400);
  }

  // Validate topic
  let topic = body.topic || 'general';
  if (!KBs[topic]) {
    topic = 'general';
  }

  const systemInstruction = buildSystemInstruction(topic);

  const geminiBody = {
    systemInstruction: { parts: [{ text: systemInstruction }] },
    contents: buildGeminiContents(messages),
    generationConfig: {
      maxOutputTokens: MAX_OUTPUT_TOKENS,
      temperature: 0.4,
      topP: 0.95,
    },
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
    ],
  };

  // Try each model in order; fall through on 503/overload errors
  let geminiRes = null;
  let lastErrText = '';
  let usedModel = null;
  for (const model of GEMINI_MODELS) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;
    try {
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(geminiBody),
      });
      if (r.ok) {
        geminiRes = r;
        usedModel = model;
        break;
      }
      lastErrText = await r.text();
      if (r.status !== 503 && r.status !== 429) {
        return jsonResponse({ error: 'Gemini API ' + r.status + ': ' + lastErrText.slice(0, 300) }, 502);
      }
    } catch (e) {
      lastErrText = e.message;
    }
  }

  if (!geminiRes) {
    return jsonResponse({ error: 'כל המודלים של Gemini עמוסים כעת. נסה שוב בעוד דקה.' }, 502);
  }

  const data = await geminiRes.json();
  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'מצטער, לא הצלחתי לייצר תשובה. נסה שוב.';
  return jsonResponse({ reply, model: usedModel, topic });
}

// === GET /api/chat — list available topics (for UI) ===
export async function onRequestGet(context) {
  return jsonResponse({
    topics: TOPIC_IDS.map(id => ({
      id,
      ...TOPICS_META[id],
    })),
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}
