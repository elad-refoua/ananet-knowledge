// scripts/build-kb.js
// Builds a multi-topic KB bundle for the chat worker.
//
// Outputs functions/api/_kb.js with:
//   - KBs: { general, hazmat, scholarships, ... } — text bundles per topic
//   - TOPICS_META: { topic: { title, description, sources: [...] } }
//
// Run: node scripts/build-kb.js

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const OUT_FILE = path.join(REPO_ROOT, 'functions', 'api', '_kb.js');

// === SLICE MAP ===
// Each topic is a list of { file, sections } entries.
// `sections` can be ['*'] for entire file or specific heading strings.
//
// Section extraction: matches the heading text exactly, then includes content
// up to the NEXT heading at the same OR shallower level.

const SLICE_MAP = {
  general: [
    { file: 'reference/workflows.md', sections: ['*'] },
    { file: 'reference/categories-to-buyers.md', sections: ['*'] },
    { file: 'reference/smart-forms.md', sections: ['*'] },
    { file: 'reference/operational-rules.md', sections: ['*'] },
    { file: 'reference/quote-thresholds.md', sections: ['*'] },
    { file: 'reference/timeline.md', sections: ['*'] },
    { file: 'reference/glossary-brnet-vs-ananet.md', sections: ['*'] },
    { file: 'help/where-to-go.md', sections: ['*'] },
    { file: 'help/known-issues.md', sections: ['*'] },
    { file: 'help/support-channels.md', sections: ['*'] },
  ],

  hazmat: [
    { file: 'lectures/05-hazmat-2026-04-15_summary.md', sections: ['*'] },
    { file: 'reference/workflows.md', sections: ['## 4. רכש חומ"ס (Hazmat)'] },
    { file: 'reference/categories-to-buyers.md', sections: ['## רכש מחקר - חומרים מסוכנים', '## רכש מחקר - ציוד מעבדתי'] },
    { file: 'reference/smart-forms.md', sections: ['### 3. דרישת רכש לחומרים מסוכנים'] },
    { file: 'reference/quote-thresholds.md', sections: ['*'] },
    { file: 'reference/operational-rules.md', sections: ['*'] },
    { file: 'help/where-to-go.md', sections: ['### ⚠️ שגיאות מערכת'] },
    { file: 'help/support-channels.md', sections: ['## 🧪 חומרים מסוכנים (חומ"ס)'] },
  ],

  'local-purchase': [
    { file: 'lectures/03-local-purchase-catalog-2026-04-13_summary.md', sections: ['*'] },
    { file: 'reference/workflows.md', sections: ['## 1. רכש מהמלאי (Inventory Pull)', '## 2. רכש מקומי (Local with Quote)', '## 3. רכש ממחירון (Catalog)'] },
    { file: 'reference/categories-to-buyers.md', sections: ['## רכש מקומי - כללי', '## רכש מקומי - שיווק', '## רכש ציוד מחשוב (149-153)'] },
    { file: 'reference/smart-forms.md', sections: ['### 6. רכש מהמלאי', '### 10. קניה בכרטיס אשראי ללא יבוא (מקומי)', '### 11. רכישה מאתר אינטרנט של ספק'] },
    { file: 'reference/quote-thresholds.md', sections: ['*'] },
    { file: 'reference/operational-rules.md', sections: ['*'] },
    { file: 'help/where-to-go.md', sections: ['### 🛒 דרישות והזמנות'] },
  ],

  foreign: [
    { file: 'lectures/07-operations-briefing-2026-04-19_summary.md', sections: ['*'] },
    { file: 'reference/workflows.md', sections: ['## 5. רכש טובין מחו"ל (Foreign Import - with shipment)'] },
    { file: 'reference/categories-to-buyers.md', sections: ['## רכש חו"ל'] },
    { file: 'reference/smart-forms.md', sections: ['### 4. דרישת יבוא', '### 5. דרישת יצוא'] },
    { file: 'reference/quote-thresholds.md', sections: ['*'] },
    { file: 'reference/operational-rules.md', sections: ['*'] },
    { file: 'help/where-to-go.md', sections: ['### 🌍 רכש מחו"ל'] },
  ],

  'credit-card': [
    { file: 'lectures/04-credit-card-bank-transfer-2026-04-14_summary.md', sections: ['*'] },
    { file: 'reference/workflows.md', sections: ['## 6. קניה בכרטיס אשראי ללא ייבוא (Credit Card, no shipment)', '## 7. העברת כספים לחו"ל ללא ייבוא (Bank Transfer, no shipment)'] },
    { file: 'reference/smart-forms.md', sections: ['### 1. העברה בנקאית לחו"ל ללא יבוא', '### 2. קניה בכרטיס אשראי ללא יבוא מאתרים בחו"ל'] },
    { file: 'reference/categories-to-buyers.md', sections: ['### תשלומים לחו"ל ללא ייבוא'] },
    { file: 'reference/quote-thresholds.md', sections: ['*'] },
    { file: 'reference/operational-rules.md', sections: ['*'] },
  ],

  scholarships: [
    { file: 'lectures/08-scholarships-2026-04-16_summary.md', sections: ['*'] },
    { file: 'reference/smart-forms.md', sections: ['### 9. העברת כספים'] },
    { file: 'reference/operational-rules.md', sections: ['*'] },
    { file: 'reference/timeline.md', sections: ['*'] },
    { file: 'help/where-to-go.md', sections: ['### 🎓 מלגות'] },
  ],

  expense: [
    { file: 'lectures/06-expense-reimbursement-2026-04-16_summary.md', sections: ['*'] },
    { file: 'reference/operational-rules.md', sections: ['*'] },
    { file: 'help/where-to-go.md', sections: ['### 💸 החזרי הוצאות'] },
  ],

  transport: [
    { file: 'reference/workflows.md', sections: ['## 10. רכש היסעים (Transport)'] },
    { file: 'reference/smart-forms.md', sections: ['### 7. רכש היסעים'] },
    { file: 'reference/categories-to-buyers.md', sections: ['## רכש פנימי'] },
    { file: 'reference/operational-rules.md', sections: ['*'] },
  ],

  internal: [
    { file: 'reference/workflows.md', sections: ['## 8. רכש פנימי (Internal)', '## 9. רכש מבירא', '## 11. רכש בינו (BINO)'] },
    { file: 'reference/categories-to-buyers.md', sections: ['## רכש פנימי', '## רכש בינו (BINO - 900-994)', '## שירותים פר-פקולטה'] },
    { file: 'reference/smart-forms.md', sections: ['### 8. רכש בירא / בינו'] },
    { file: 'reference/operational-rules.md', sections: ['*'] },
  ],

  research: [
    { file: 'summaries/research-authority-guides.md', sections: ['*'] },
    { file: 'reference/operational-rules.md', sections: ['*'] },
    { file: 'reference/quote-thresholds.md', sections: ['*'] },
    { file: 'help/where-to-go.md', sections: ['### 💰 כסף ותקציב'] },
  ],
};

// === Topic metadata for system prompt + UI ===

const TOPICS_META = {
  general: {
    title: 'בוט כללי',
    title_en: 'General Bot',
    description: 'יודע על כל הנושאים — workflows, מלגות, חומ"ס, חו"ל, היסעים, רשות מחקר',
    icon: '🤖',
  },
  hazmat: {
    title: 'בוט חומ"ס',
    title_en: 'Hazmat Specialist',
    description: 'מומחה ברכישת חומרים מסוכנים, מסך דיווח למעבדה, קודי מעבדה, SDS',
    icon: '🧪',
  },
  'local-purchase': {
    title: 'בוט רכש מקומי',
    title_en: 'Local Purchase Specialist',
    description: 'רכש מקומי, מחירון, מלאי מהמחסן הראשי',
    icon: '🛒',
  },
  foreign: {
    title: 'בוט רכש חו"ל',
    title_en: 'Foreign Purchase Specialist',
    description: 'יבוא ויצוא טובין מחו"ל (עם משלוח פיזי)',
    icon: '🌍',
  },
  'credit-card': {
    title: 'בוט תשלומים לחו"ל',
    title_en: 'Foreign Payments Specialist',
    description: 'אשראי + העברה בנקאית לחו"ל ללא משלוח פיזי',
    icon: '💳',
  },
  scholarships: {
    title: 'בוט מלגות',
    title_en: 'Scholarships Specialist',
    description: 'הקמה, ביטול, שינוי, ודדליינים של מלגות',
    icon: '🎓',
  },
  expense: {
    title: 'בוט החזר הוצאות',
    title_en: 'Expense Reimbursement Specialist',
    description: 'הגשה, מעקב, ופתרון בעיות בהחזרי הוצאות',
    icon: '💸',
  },
  transport: {
    title: 'בוט היסעים',
    title_en: 'Transport Specialist',
    description: 'אוטובוסים, מוניות, השכרת רכב, ושינוע',
    icon: '🚌',
  },
  internal: {
    title: 'בוט רכש פנימי / בינוי',
    title_en: 'Internal/Construction Specialist',
    description: 'רכש פנימי, בירא, בינו, ושירותי תפעול',
    icon: '🏗️',
  },
  research: {
    title: 'בוט רשות מחקר',
    title_en: 'Research Authority Specialist',
    description: 'הדוח לחוקר, קדם מחקר, תקציבי grants, encumbrances',
    icon: '🔬',
  },
};

// === Section extraction ===

function extractSections(content, sectionList) {
  if (!sectionList || sectionList.length === 0) return content;
  if (sectionList.includes('*')) return content;

  const lines = content.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);

    if (headingMatch) {
      const fullHeading = '#'.repeat(headingMatch[1].length) + ' ' + headingMatch[2].trim();
      const matched = sectionList.some(target =>
        target.trim() === fullHeading.trim() ||
        target.trim() === '#'.repeat(headingMatch[1].length) + ' ' + headingMatch[2].trim()
      );

      if (matched) {
        const startLevel = headingMatch[1].length;
        result.push(line);
        i++;

        while (i < lines.length) {
          const nextLine = lines[i];
          const nextMatch = nextLine.match(/^(#{1,6})\s+/);
          if (nextMatch && nextMatch[1].length <= startLevel) break;
          result.push(nextLine);
          i++;
        }
        continue;
      }
    }
    i++;
  }

  return result.join('\n');
}

function buildKBForTopic(topicId, slices) {
  const parts = [];
  const sources = [];
  const warnings = [];

  for (const slice of slices) {
    const fullPath = path.join(REPO_ROOT, slice.file);
    if (!fs.existsSync(fullPath)) {
      warnings.push(`Missing file for topic ${topicId}: ${slice.file}`);
      continue;
    }

    const content = fs.readFileSync(fullPath, 'utf8');
    let sliced;

    if (slice.sections.includes('*')) {
      sliced = content;
    } else {
      sliced = extractSections(content, slice.sections);
      if (!sliced.trim()) {
        warnings.push(`No matching sections in ${slice.file} for: ${slice.sections.join(', ')}`);
        continue;
      }
    }

    parts.push(`\n## ${slice.file}\n\n${sliced}\n`);
    sources.push(slice.file);
  }

  return { kb: parts.join('\n---\n'), sources, warnings };
}

// === Main ===

const KBs = {};
const META = {};
const allWarnings = [];

console.log('Building topic-specific KBs...\n');

for (const [topicId, slices] of Object.entries(SLICE_MAP)) {
  const { kb, sources, warnings } = buildKBForTopic(topicId, slices);
  KBs[topicId] = kb;
  META[topicId] = {
    ...TOPICS_META[topicId],
    sources,
    sizeKB: Math.round(kb.length / 1024 * 10) / 10,
  };

  console.log(`  ${TOPICS_META[topicId].icon} ${topicId.padEnd(16)} ${kb.length.toString().padStart(7)} chars  (${META[topicId].sizeKB} KB)  ${sources.length} sources`);

  if (warnings.length > 0) {
    allWarnings.push(...warnings.map(w => `[${topicId}] ${w}`));
  }
}

if (allWarnings.length > 0) {
  console.log('\n⚠️  Warnings:');
  allWarnings.forEach(w => console.log('   ' + w));
}

// === Output module ===

function safeStringify(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

const moduleSrc = `// AUTO-GENERATED by scripts/build-kb.js — do not edit by hand
// Generated: ${new Date().toISOString()}

export const KBs = {
${Object.entries(KBs).map(([k, v]) => `  ${JSON.stringify(k)}: \`${safeStringify(v)}\``).join(',\n')}
};

export const TOPICS_META = ${JSON.stringify(META, null, 2)};

export const TOPIC_IDS = ${JSON.stringify(Object.keys(KBs))};
`;

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, moduleSrc, 'utf8');

const totalSize = Object.values(KBs).reduce((s, k) => s + k.length, 0);
console.log(`\n✅ Built ${Object.keys(KBs).length} topics, total ${(totalSize / 1024).toFixed(1)} KB`);
console.log(`   Output: ${OUT_FILE}`);
