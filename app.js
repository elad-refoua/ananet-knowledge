// Ananet Knowledge - client side app
// Chat with backend (Cloudflare Worker -> Gemini 3.1 Flash)
// Full-text search across categories + smart forms

const BOT_ENDPOINT = '/api/chat';

// Conversation history
const conversation = [];

// === DOM helpers (safe) ===
function el(tag, opts) {
  opts = opts || {};
  const node = document.createElement(tag);
  if (opts.className) node.className = opts.className;
  if (opts.text != null) node.textContent = opts.text;
  return node;
}

// Tokenize text into safe DOM nodes (no innerHTML)
function tokenize(line) {
  const out = [];
  let buf = '';
  let i = 0;

  function flush() {
    if (buf) { out.push({ type: 'text', text: buf }); buf = ''; }
  }

  while (i < line.length) {
    // Bold: **text**
    if (line[i] === '*' && line[i + 1] === '*') {
      const end = line.indexOf('**', i + 2);
      if (end > i + 2) {
        flush();
        out.push({ type: 'bold', text: line.slice(i + 2, end) });
        i = end + 2;
        continue;
      }
    }
    // Code: `text`
    if (line[i] === '`') {
      const end = line.indexOf('`', i + 1);
      if (end > i + 1) {
        flush();
        out.push({ type: 'code', text: line.slice(i + 1, end) });
        i = end + 1;
        continue;
      }
    }
    // Markdown link: [text](url)
    if (line[i] === '[') {
      const closeBracket = line.indexOf(']', i + 1);
      if (closeBracket > i + 1 && line[closeBracket + 1] === '(') {
        const closeParen = line.indexOf(')', closeBracket + 2);
        if (closeParen > closeBracket + 2) {
          const url = line.slice(closeBracket + 2, closeParen);
          if (url.startsWith('http')) {
            flush();
            out.push({ type: 'link', text: line.slice(i + 1, closeBracket), url });
            i = closeParen + 1;
            continue;
          }
        }
      }
    }
    // Bare URL: http(s)://...
    if (line.slice(i, i + 7) === 'http://' || line.slice(i, i + 8) === 'https://') {
      let end = i;
      while (end < line.length && !/\s/.test(line[end])) end++;
      flush();
      const url = line.slice(i, end);
      out.push({ type: 'link', text: url, url });
      i = end;
      continue;
    }
    buf += line[i];
    i++;
  }
  flush();
  return out;
}

function buildBotBubble(text) {
  const wrapper = el('div', { className: 'bubble' });
  const lines = text.split('\n');
  lines.forEach((line, idx) => {
    if (idx > 0) wrapper.appendChild(el('br'));
    const tokens = tokenize(line);
    tokens.forEach(t => {
      if (t.type === 'text') {
        wrapper.appendChild(document.createTextNode(t.text));
      } else if (t.type === 'bold') {
        wrapper.appendChild(el('strong', { text: t.text }));
      } else if (t.type === 'code') {
        wrapper.appendChild(el('code', { text: t.text }));
      } else if (t.type === 'link') {
        const a = el('a', { text: t.text });
        a.href = t.url;
        a.target = '_blank';
        a.rel = 'noopener';
        wrapper.appendChild(a);
      }
    });
  });
  return wrapper;
}

function buildUserBubble(text) {
  return el('div', { className: 'bubble', text });
}

function buildTypingBubble() {
  const bubble = el('div', { className: 'bubble' });
  const dots = el('span', { className: 'typing-dots' });
  for (let i = 0; i < 3; i++) dots.appendChild(el('span'));
  bubble.appendChild(dots);
  return bubble;
}

// === Chat ===
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

function addMessage(role, bubble) {
  const wrapper = el('div', { className: role === 'user' ? 'chat-message-user' : 'chat-message-bot' });
  const avatar = el('div', { className: 'text-2xl flex-shrink-0', text: role === 'user' ? '👤' : '🤖' });
  if (role === 'user') {
    wrapper.appendChild(bubble);
    wrapper.appendChild(avatar);
  } else {
    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);
  }
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return wrapper;
}

async function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = '';
  chatInput.disabled = true;
  chatSend.disabled = true;

  addMessage('user', buildUserBubble(text));
  conversation.push({ role: 'user', content: text });

  const typingWrapper = addMessage('bot', buildTypingBubble());

  try {
    const response = await fetch(BOT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: conversation })
    });

    if (!response.ok) throw new Error('HTTP ' + response.status);

    const data = await response.json();
    const reply = data.reply || data.text || 'מצטער, לא קיבלתי תשובה.';
    typingWrapper.remove();
    addMessage('bot', buildBotBubble(reply));
    conversation.push({ role: 'assistant', content: reply });
  } catch (err) {
    typingWrapper.remove();
    const errText = '⚠️ שגיאה בשירות הבוט. נסה שוב בעוד רגע.\n\nניתן לפנות ישירות: ananet.service@biu.ac.il או 072-2644999 ext 4999.\n\n(' + err.message + ')';
    addMessage('bot', buildBotBubble(errText));
  } finally {
    chatInput.disabled = false;
    chatSend.disabled = false;
    chatInput.focus();
  }
}

chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });

// === Search ===
const searchInput = document.getElementById('search');
const searchResults = document.getElementById('search-results');
let searchIndex = null;

async function loadSearchIndex() {
  if (searchIndex) return searchIndex;
  try {
    const [catRes, smartRes] = await Promise.all([
      fetch('/data/categories.json'),
      fetch('/data/smart-forms.json')
    ]);
    searchIndex = {
      categories: await catRes.json(),
      smartForms: await smartRes.json()
    };
    return searchIndex;
  } catch (e) {
    return { categories: null, smartForms: null };
  }
}

function buildSearchResult(title, subtitle, link) {
  const a = el('a', { className: 'search-result block' });
  a.href = link;
  a.appendChild(el('h5', { text: title }));
  a.appendChild(el('p', { text: subtitle }));
  return a;
}

async function performSearch(query) {
  if (!query || query.length < 2) {
    searchResults.classList.add('hidden');
    return;
  }
  const idx = await loadSearchIndex();
  const results = [];
  const q = query.toLowerCase();

  if (idx.categories && idx.categories.groups) {
    for (const groupKey in idx.categories.groups) {
      const group = idx.categories.groups[groupKey];
      for (const catNum in group.categories) {
        const cat = group.categories[catNum];
        const desc = cat.description || '';
        const buyer = cat.buyer || '';
        if (catNum.includes(q) || desc.toLowerCase().includes(q) || buyer.toLowerCase().includes(q)) {
          results.push({
            title: 'קטגוריה ' + catNum + ' — ' + desc,
            subtitle: 'קניין: ' + buyer,
            link: 'https://github.com/elad-refoua/ananet-knowledge/blob/main/reference/categories-to-buyers.md'
          });
          if (results.length > 15) break;
        }
      }
      if (results.length > 15) break;
    }
  }

  if (idx.smartForms && idx.smartForms.smart_forms) {
    for (const form of idx.smartForms.smart_forms) {
      const nameHe = form.name_he || '';
      const useCase = form.use_case || '';
      if (nameHe.includes(query) || useCase.toLowerCase().includes(q)) {
        results.push({
          title: 'Smart Form: ' + nameHe,
          subtitle: useCase,
          link: 'https://github.com/elad-refoua/ananet-knowledge/blob/main/reference/smart-forms.md'
        });
      }
    }
  }

  searchResults.replaceChildren();
  if (results.length === 0) {
    searchResults.appendChild(el('p', {
      className: 'text-slate-500 text-sm p-2',
      text: 'לא נמצאו תוצאות. נסה לשאול את הבוט.'
    }));
  } else {
    results.slice(0, 8).forEach(r => searchResults.appendChild(buildSearchResult(r.title, r.subtitle, r.link)));
  }
  searchResults.classList.remove('hidden');
}

let searchTimeout;
searchInput.addEventListener('input', (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => performSearch(e.target.value), 200);
});

document.addEventListener('click', (e) => {
  if (!searchResults.contains(e.target) && e.target !== searchInput) {
    searchResults.classList.add('hidden');
  }
});
