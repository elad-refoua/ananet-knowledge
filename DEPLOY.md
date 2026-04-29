# הוראות פריסה — Ananet Knowledge Base

מסמך זה מסביר איך לפרוס את הריפו ל-Cloudflare Pages עם בוט שיחה (Gemini 3.1 Flash).

---

## 1. פתח חשבון Gemini API (חינמי)

1. לך ל-https://aistudio.google.com/apikey
2. התחבר עם חשבון Google
3. לחץ "Create API Key" → בחר project (או צור חדש)
4. העתק את ה-key שנוצר. שמור במקום בטוח — לא ראית אותו שוב.

⚠️ **אל תקשר את ה-API key לקוד של GitHub.** הוא נשמר רק כסביבה ב-Cloudflare.

---

## 2. פתח חשבון Cloudflare (חינמי)

1. לך ל-https://cloudflare.com
2. הירשם עם Google / GitHub / אימייל

---

## 3. יצירת הריפו ב-GitHub

```bash
cd ananet-knowledge
git init
git add .
git commit -m "Initial public knowledge base"
gh repo create ananet-knowledge --public --source=. --remote=origin --push
```

או דרך GitHub UI: צור repo חדש בשם `ananet-knowledge`, ודחוף.

---

## 4. חיבור Cloudflare Pages לריפו

1. ב-Cloudflare Dashboard → **Pages** → **Create a project** → **Connect to Git**
2. בחר GitHub → אשר → בחר את `ananet-knowledge`
3. Build settings:
   - **Framework preset**: None
   - **Build command**: (השאר ריק)
   - **Build output directory**: `/` (root) או השאר ריק
   - **Root directory**: השאר ריק
4. **Environment variables**:
   - שם: `GEMINI_API_KEY`
   - ערך: ה-key שיצרת בשלב 1
   - וודא שמסומן **Production**
5. לחץ **Save and Deploy**

⏱️ הפריסה תיקח 1-3 דקות.

---

## 5. בדיקה

לאחר הפריסה, ה-URL יהיה משהו כמו `https://ananet-knowledge.pages.dev` (או שם דומה ש-Cloudflare ייצרה).

בדיקות:
1. ✅ העמוד נטען
2. ✅ החיפוש עובד (הקלד "מחשב" ובדוק תוצאות)
3. ✅ לחץ על "💬 שאל את הבוט" וכתוב שאלה
4. ✅ הבוט עונה

אם הבוט לא עונה:
- בדוק ש-`GEMINI_API_KEY` הוגדר נכון
- בדוק ב-Cloudflare → Pages → Project → Logs

---

## 6. דומיין מותאם (אופציונלי)

אם תרצה דומיין משלך (`ananet.guide` למשל):

1. קנה דומיין (Namecheap, Google Domains, וכו')
2. ב-Cloudflare Pages → Project → **Custom domains** → **Set up a custom domain**
3. הוסף את הדומיין שלך
4. הגדר DNS לפי ההוראות

---

## 7. עדכון תוכן

כל push ל-`main` יפעיל deploy אוטומטי. כדי לעדכן:

```bash
# ערוך קבצים
git add .
git commit -m "Update reference materials"
git push
```

⏱️ ב-1-2 דקות האתר יתעדכן.

---

## פתרון בעיות

### "Bot not configured"
**סיבה**: `GEMINI_API_KEY` לא הוגדר בסביבת Cloudflare.
**פתרון**: ראה שלב 4, סעיף 4.

### "HTTP 502: Gemini API quota exceeded"
**סיבה**: עברת את ה-free tier (1,500 בקשות/יום).
**פתרון**: המתן ליום הבא, או שדרג ל-paid plan ב-Google AI Studio.

### "Failed to reach Gemini API"
**סיבה**: בעיית רשת זמנית.
**פתרון**: נסה שוב בעוד דקה.

### השגיאה אינה כלולה כאן
פנה ל-eladrefoua@gmail.com עם:
- צילום מסך
- שעה
- ה-URL

---

## עלויות צפויות

- **Gemini API**: $0 (free tier 1,500 בקשות/יום, 50 RPM)
- **Cloudflare Pages**: $0 (עד 500 builds/חודש, bandwidth ללא הגבלה)
- **GitHub**: $0 (public repo)
- **דומיין**: $10-15/שנה (אופציונלי)

**סה"כ**: $0 לשימוש בסיסי.
