# Ananet Lectures — Comprehensive Knowledge Synthesis

Source: 6 Hebrew transcripts + summaries from BIU's Timeless meeting recorder, covering the kickoff (Feb 5 2026) and the five training lectures held April 13-16 2026 in the run-up to the April 26 2026 go-live.

This document is the canonical knowledge base for the `ananet-expert` agent. Every fact below is grounded in a specific lecture, with a timestamp where the moment is significant. Section headings list the file path, primary speaker(s), and audience pain points heard in the room.

---

## 0. Cross-Lecture Concepts (apply to ALL modules)

### 0.1 Go-live timeline (set in lecture 01, refined throughout)
- **Feb 10 2026** — Last date to file foreign import requisitions (יבוא) in Brnet. Source: `01` Assael ~25:00 and Jeremy ~41:30.
- **Mar 12 2026** — Last date for ALL other requisition types (local, expense reports, travel, scholarships, internal). Brnet stops accepting requisitions. Source: `01` Assael ~25:53.
- **Mar 19 2026** — Brnet system fully shut down (right before Pesach). Source: `01` Assael ~23:30.
- **Mar 19 → Apr 26** — System down for data migration. NO requisitions, NO budget transfers between units, NO new vendors, NO receipts can be processed. Source: `01` Arnon Zait ~52:34, Jeremy ~46:00.
- **Apr 26 2026** — Ananet goes live. Initial rollout is **gradual** — first key users in finance/HR/research authority, then wider rollout. Source: `01` Assael ~26:42; reinforced in every lecture.
- **Exception committee (ועדת חריגים)** chaired by CEO Zohar Yinon for safety/emergency-only items during shutdown. Will NOT cover poor planning. Source: `01` Zohar ~13:01.

### 0.2 Why Ananet (technical/strategic context, lecture 01)
- Replaces **Brnet** (in production since 2010), Oracle on-premise, no longer supported for development. Source: `01` Assael ~18:43.
- Ananet = native Oracle Cloud ERP. BIU is likely the **first university worldwide** to put its full ERP in the cloud. Source: `01` Assael ~18:21.
- HR module already in cloud since earlier; this go-live brings finance, procurement, logistics, research authority into the cloud. A bridge module called **coexistence** had been linking the two. Source: `01` Assael ~18:00.
- Cloud benefits cited: stability (3 Brnet outages in last 3 months, one took a week to recover), quarterly Oracle version updates, eventual AI capabilities baked in, supplier portal, info security & privacy. Source: `01` Assael & Zohar ~19:00-22:00.
- Project started in **March 2020** at the start of COVID. Source: `01` Zohar ~5:13.

### 0.3 Authentication & Access (constant across lectures)
- **Single Sign-On (SSO)** via "בר-אילן שלי" → "אתר הדרכה להנ"נט" / "כניסה לסביבת תרגול". Black "Company Single Sign On" button uses Windows credentials. NO separate username/password. Source: `03` Yelena ~7:00, `05` Tamar+Chaim ~38:14, `08` Shay ~2:22.
- **Cannot log in as someone else** — SSO ties to your personal Windows session. Researchers who want assistants to act on their behalf must use **"חוק חופשה"** (vacation rule / delegation) to forward their approvals. Source: `05` Chaim ~38:35.
- Language: Hebrew or English at login; switch any time via **Set Preference** → Language → Current Session. Source: `03` Yelena ~9:24-12:08.
- System is **24/7 cloud** — NOT shut down at 22:00 like Brnet. Accessible from home and mobile (mobile is "possible but inconvenient"). Source: `05` Sivan question + Yelena ~45:53.

### 0.4 Universal UI patterns
- **The home screen** has: navigation bar with modules (filtered by your permissions), favorites (מועדפים), recent items (פריטים אחרונים), notification bell with red counter for actions/notices.
- **The bell (פעמון)** is where rejection notifications, approval requests, and notices arrive. There is also email — but the on-screen error popup that Brnet had is **gone**: "in Ananet we unfortunately cannot show error messages on screen" — Chaim, `03` ~57:14. Errors come via the bell + email after Test Validation runs.
- **Test Validation** = first stop in EVERY approval workflow. Auto-checks (vendors, hazmat permits, quote attachment, quantities, etc.). Takes **up to 10 minutes**. Source: `03` Chaim ~52:09-56:11; `05` Yelena ~16:09.
- **Wildcard search** = `%` to find partial item names anywhere in the description. Source: `03` Michal ~31:00, `05` Yelena ~8:20.
- **"סיום" button is confusing** — it does NOT close, it **clears the form**. Oracle global has refused to fix this. Just memorize it. Chaim, `03` ~91:25.
- **Approvers can be added manually** to a requisition via "ניהול אישורים" → choose existing approver → Plus icon → above / below / parallel / end-of-stage. Source: `03` Michal ~75:00; `08` Michal ~58:30.
- **Budget split** on a single line: enter the line, then "פיצול" → add row → distribute by % or ₪. **Must total 100%**. After splitting, must resend (שלח) because changes pull the request out of the approval cycle. Source: `03` Michal ~80:00.
- **Duplicate (שכפל)** existing requisitions via Actions → Duplicate. Works for ALL types (local, hazmat, scholarships, expenses). Source: `05` Chaim ~35:24, `06` ~ exp reports.
- **Budget balance check (בדיקת יתרות תקציב)** — if no balance, you cannot send to approval at all. The bell sends a message. Source: `03` Chaim+Gabriella ~57:00.
- **Migrated history**: Only Brnet **requisitions that became orders** migrate to Ananet (1-2 years back, "agreed with procurement"). Standalone requisitions that never became orders do NOT migrate. Vendors with unpaid invoices migrate. Source: `03` Chaim ~55:17-56:30.

### 0.5 Permissions reduction
- Number of "דורשים" (requesters) was deliberately reduced per faculty/department by management. **Rationale**: someone who only files 1-2 requisitions per year cannot operate a complex system. Source: `01` Assael ~34:50. Anyone needing permissions restored should **email the head of admin/division** to formally request. Repeated in `03` and `05`.

### 0.6 Support
- Mailing list: **עננת בדיקות** (search "Outlook" — `ananet-bedikot` mailbox). Yelena Turchik routes to the right person. Source: `05` Yelena ~41:02.
- Permissions issues during training: email Yelena Turchik OR `ananet-bedikot`. Source: `05` Yelena ~40:10.
- Training site: בר-אילן שלי → קישורים → "אתר הדרכה להנ"נט". Contains: training videos (short, per-topic, no Q&A), booklets per topic, FAQ (still being populated), link to **DEV2** practice environment. Source: `03` Yelena ~9:03; `04` ~47:31.
- DEV2 practice: opens **Monday before go-live** (week of Apr 20). Initially per-user availability; some testers had it earlier. Source: `06` Aviram ~end; `08` Shay ~57:00.

### 0.7 Naming & vocabulary differences from Brnet
| Brnet term | Ananet term |
|---|---|
| חנות (shop) | does NOT exist; replaced by "רכש ממחירון" / smart forms / categories |
| הסכמים ומחירונים, לוגיסטיקה ואירועים, תקשוב | All folded into a **single search bar** at top of דרישות רכש |
| משתמש & סיסמה | SSO |
| הזמנה ללא פס | gone — once an order has a number, it's been approved & sent |
| על-המסך error | gone — only via bell + email after Test Validation |
| Vacation/holiday delegation | "חוק חופשה" — researcher self-defines |

---

## 1. LECTURE 01 — Kickoff / Preparation Meeting (Feb 5 2026)
**File**: `01-2026-02-05-meeting-of-preparation-for-ananet.md`
**Speakers**: Assael Movshovitz (אגף תקשוב, project manager), Zohar Yinon (CEO/סמנכ"ל), Jeremy Regenstreif (procurement), Avital (moderator), Arnon Zait (finance), Ronit (research authority).
**Audience**: ~700 attendees on Zoom from across campus.
**Recording note**: Zohar's opening remarks set strategic context; Jeremy's section gives concrete shutdown procedures.

### 1.1 Strategic message (Zohar, ~5:00-15:00)
- The transition is **like a Tel-Aviv light-rail line** — painful now, then we won't remember life before it. Source: `01` Zohar ~11:24.
- Will require relearning workflows people have used for years. Some processes will not exist on Day 1.
- Data migration carries risk; some loss is possible. Five+ years of history being migrated.
- Exception committee for safety/emergency only. CEO will personally chair.

### 1.2 Concrete deadlines (Assael, ~23:00-27:00)
- Foreign import (יבוא) requisitions: **by Feb 10**.
- All other requisitions: **by Mar 12**.
- System sealed: **Mar 19**.
- Go-live: **Apr 26** (after Independence Day weekend).
- Procurement (Jeremy) will execute orders in the week between Mar 12-19 to convert open requisitions to orders.

### 1.3 What to prepare in advance (Jeremy, ~41:00-50:00)
- **Frame orders (הזמנת מסגרת)** for routine recurring needs — open them BEFORE shutdown with a max amount. Unused amount returns afterward.
- Don't need to send the order to the supplier — can hold internally and decide during shutdown. Source: `01` Jeremy ~49:28.
- New vendors must be opened BEFORE shutdown — no new vendors during freeze.
- Liquid nitrogen — solution being worked on (no commitment yet).
- Receipts (קבלות) cannot be processed during shutdown — products can still arrive but you log receipt only after Apr 26.

### 1.4 Finance (Arnon, ~52:00-55:00)
- **Existing scholarships migrate automatically**.
- **No budget transfers between units** during shutdown.
- **March scholarship payment will be paid early** (before shutdown). April payment is on May 1 anyway.
- Foreign travel: pay personally during shutdown, get reimbursed retroactively. Trips already approved in Passport will execute; keep invoices.

### 1.5 Support model (Assael, ~30:00-39:00)
- Dedicated support hub for Ananet for first months — when calling the IT helpdesk, press 1 or 2 for Ananet routing.
- Each department designates a **pivot user** (1-2) as first-level support to reduce load on the central hub.
- Permissions are migrated — same permissions Brnet user had, will be in Ananet. Active validation in progress with key users.

### 1.6 Closing (Ronit, 58:42)
"The most important things are suppliers and students — scholarships and supplier payments. If you're thinking of someone who needs a scholarship, **enter it before the shutdown**, we'll pay before. Approve receipts so we can pay invoices. Don't forget the students."

---

## 2. LECTURE 03 — Local Purchase, Catalog Purchase, Inventory Purchase (Apr 13 2026)
**Files**: `03-2026-04-13-עננט-הדרכה-מס-8--רכש-מקומי,-רכש-מחירון-ורכש-מהמלאי.md` + `_summary.md`
**Speakers**: Yelena Turchik (תקשוב, lead trainer), Michal Kalman (procurement), Chaim Yosefi (procurement, expert source for nuances), Liat Daniel.
**Notable participants who asked questions**: Shimon Tinman (vet, animal orders), Sylvie Baruch (expense module gone), Avishai Erzi (history migration), Gabriella Khalsetski (font size, validation timing), Sandra Eshton-Tsariker, Iris Cohen, Talia Shimne, Dganit Bar-Noy, Sima Korzberg, Nehami, Ohad Menshrov.
**Length**: ~2.5 hours, ~200 attendees. Recording was made and uploaded to training site.

### 2.1 Initial setup mandatory for every user (~14:18-17:00)
**Must do BEFORE first requisition** otherwise Ananet blocks you on the requisition screen:
- רכש → דרישות רכש → משימות נוספות → **עדכון העדפות דרישות רכש**
- Set **מיקום יעד מסירה** (delivery destination) — search advanced by building name (e.g. "Mexico"), select a room, save.
- (Optional but recommended for research assistants) Add **favorite charge accounts** with nicknames so you can switch between researchers' accounts via dropdown without re-searching the segment chooser.

### 2.2 Three purchase types — ONE department, three flows
After Brnet's "shops" disappeared, you now route purchases by HOW you buy:

#### 2.2.1 Catalog purchase (רכש ממחירון) — ~28:00-50:00
Replaces Brnet shops: "הסכמים ומחירונים", "לוגיסטיקה ואירועים", "תקשוב", "מרכז התקשורת" — all unified.
1. From דרישות רכש home, use the **top search bar**. Search with `%` wildcard (e.g. `%מחשב%`).
2. Result tiles show items already on framework agreements. Click **הוספה לעגלה** (add to cart).
3. Cart icon at top — click number to view cart contents; can delete, can switch to row view.
4. **For computing equipment**, you must select an **IT consultant (יועץ מחשוב)** from the dropdown — these get added to the approval cycle.
5. Click **בדיקה** to enter the requisition edit screen.
6. Required fields per line: שם מבקש (default = requester; CRITICAL for approval — manager of the מבקש is in the cycle, so always set this to the actual end-user), מיקום יעד מסירה, ספק/יעד חד-פעמי, **מספר סלולרי לאספקה**, סוג מקור (defaults to vendor for catalog), אתר ספק.
7. **Header description** auto-pulls from first item — REPLACE it with something searchable (e.g. "מחשב להדרכה").
8. **תשומה / לא תשומה** mandatory for every line.
9. **ערך תכונה** — choose from {יבוא, יצוא, הסעות, אחר, חומרים מסוכנים}. For catalog purchases pick **אחר**.
10. **חשבון לחיוב** — use favorite (dropdown) or click segment chooser (איפוס then build).
11. **Catalog purchases do NOT require an attachment** (no quote needed — the price is from the framework agreement).
12. שלח (send) → request gets a number, status "ממתין לאישור".

KEY RULE: **One requisition = one supplier**. You can add multiple lines to the same requisition only if all from the same vendor (Tali Q & Chaim A, `05` ~22:08-22:14; reinforced in `03` Michal). For multiple suppliers you create multiple requisitions.

#### 2.2.2 Local purchase with quote (רכש מקומי) — ~62:00-80:00
1. דרישות רכש → משימות נוספות → **הזנת שורת דרישת רכש**.
2. Sub-type: "דרישה לפי כמות ומחיר" (default) or "דרישת מסגרת" (frame requisition / hour bank — enter only quantity × unit-price formulation).
3. **No מק"ט** (item code) for local purchase — leave blank. Type a free-text **תיאור** (e.g. "כיסא").
4. **Category (קטגוריה)** is critical — drives the approval cycle and routes to the correct buyer (קניין). If your category isn't in the list, **email the procurement department** (Michal Kalman, `03` ~65:33).
5. Quantity, unit, price. Vendor: optional at this stage (procurement can complete it). If you have a quote, paste vendor's product code into "ספק פריט" and "יצרן/מק"ט יצרן" — helps avoid wrong delivery (Chaim, `03` ~108:50).
6. **MUST attach the quote (הצעת מחיר) at the HEADER level** (not row level). Use the נספחים section in the header → קובץ. Without attachment Test Validation will reject. (Chaim explicit, `03` ~114:13: "נספחים אפשר לשים בשני מקומות... הציפייה מכם זה לשים נספחים אך ורק ברמת ההדר").
7. Same field requirements as catalog: phone, attribute value = אחר, charge account.
8. שלח.

#### 2.2.3 Inventory purchase (רכש מהמלאי, formerly אבסנאות) — covered in `03` summary
1. הזנת שורת דרישת רכש → search with filter "פריט מלאי = Y".
2. Price is fixed — cannot edit.
3. Source type: מלאי. Action: הוצאה.
4. No need to set warehouse (defaults to general warehouse). Can check stock availability via "מחסן מקור".

### 2.3 Receipts (קבלות) — ~42:00 in `05`, ~95:00 in `03`
- The דורש (requester) is the one who gets the receipt notification, NOT the מכין (preparer). Source: `05` Chaim/Dudi ~43:00.
- Notification email is sent **only when an invoice has arrived but cannot be paid because no receipt was filed** — not nightly like Brnet.
- Self-initiated receipt: רכש → "קבלות שלי" → list shows pending.
- Partial receipt and returns supported.

### 2.4 Pain points heard live
- **Sylvie Baruch** (`03` ~5:43) — expense module disappeared from her view. Chaim: "expense reimbursement is no longer part of procurement; it's a separate module" — referred to Shay Meler.
- **Avishai Erzi** (`03` ~54:56) — what about old Brnet history? Chaim: "Only requisitions that became orders migrate (1-2 years back). There's a report linking Brnet→Ananet numbers. Unpaid invoices migrate too."
- **Gabriella Khalsetski** (`03` ~56:38) — fonts too small, browser zoom is the answer; budget-balance check is real-time, blocks send if no funds.
- **Ohad Menshrov** (`03` ~58:51) — rejection arrives via bell, also email (subject to ongoing discussion).
- **Sima Korzberg** (`03` ~58:06) — "the two side-by-side panels (Recent Requests vs Recent Purchases) are confusing." Chaim: "agreed, we may remove the left one — labels can't be customized, it's a translation."
- **Shimon Tinman** (vet, `03` ~122:48) — animal orders need ethics committee approval # field; not in current system. Chaim: "send me an email with the categories, we'll add the requirement."
- **Talia Shimne** (`03` ~33:33) — urgent orders: in Brnet there was a "urgent flag" checkbox. NOT implemented in Ananet. Workaround: write in הערות לקניין AND email/phone the buyer.

---

## 3. LECTURE 04 — Credit Card & International Bank Transfer (Apr 14 2026)
**Files**: `04-2026-04-14-עננט-הדרכה-מס-10--רכש-בכרטיס-אשראי-ורכש-באמצעות-העברה-בנקאית.md` + `_summary.md`
**Speakers**: Yelena Turchik (lead), Michal Kalman, Jeremy Regenstreif (procurement, sets policy), Shay Shoval (import expert), Chaim Yosefi.
**Length**: ~84 minutes, very long with extensive Q&A.
**Two smart forms** (טפסים חכמים) at bottom of דרישות רכש home page:

### 3.1 Foreign Bank Transfer Without Import (~6:00-25:00)
**Use cases**: virtual services from abroad — paying foreign visiting professors, refunding people who are not BIU employees, paying foreign service providers without a physical shipment.
- **Article submission fees over $750** must use this form (NOT credit card). Source: `04` Jeremy ~22:00 (article fee threshold).

**Process**:
1. דרישות רכש → טופסי בקשה (bottom of page) → **העברה בנקאית לחו"ל ללא ייבוא**.
2. סוג בקשה auto-set, do not change.
3. תיאור פריט, **קטגוריה** (small list — click search, click חיפוש to see all options).
4. סכום + מט"ח. **Currently only USD set up** in test environment; production will have all currencies. The system auto-pulls today's exchange rate. Source: ~7:08-8:33.
5. Attach a quote/invoice (קובץ / טקסט / קישור).
6. Choose charge account (favorites or segments). Can split between budgets (must total 100%).
7. **CRITICAL**: Must select an existing **vendor** (ספק) on the requisition. The vendor's bank details are pulled from the vendor master record — NOT entered on the form. Source: `04` Jeremy ~13:25.
8. If the vendor doesn't exist, must contact **Dorit Olami** (vendor manager) to open it BEFORE filing the requisition. Source: `04` Jeremy ~19:48.
9. Even visiting professors are defined as **vendors** in the system. Source: `04` Sylvie+Jeremy ~16:00.

**Best practice (Shay Shoval, ~22:25)**: Always attach updated bank details as part of the quote/invoice attachment, even if the vendor exists in the system. Reason: vendor bank details may be outdated and payment will go to whatever is in the vendor master.

**Future fix requested**: Show vendor bank details on screen during requisition entry so requester can verify. Jeremy committed but **not before go-live** (~26:13).

### 3.2 Credit Card Purchase Without Import (~26:18 onward)
**Limit**: 1500 ₪ maximum.
**Allowed sites**: Specific to Amazon, eBay, AliExpress (where physical shipment is involved but small) AND foreign service sites (Adobe Spain example, ~51:00 — Ohad's question), magazine subscriptions, foreign article publishing (under 750 ₪).

**Process**:
1. טופסי בקשה → **קנייה בכרטיס אשראי לחו"ל ללא ייבוא**.
2. תיאור פריט, sparse category list, סכום (max 1500 ₪).
3. Required fields:
   - שם האתר
   - לינק לאתר
   - שם דורש באנגלית
   - מספר סלולרי
   - תעודת זהות (of the requester — needed because some foreign sites like AliExpress demand ID for shipping to Israel; Jeremy ~32:12).
   - **שם משתמש לאתר + סיסמה** (so finance can actually execute the transaction).
4. **MUST attach screenshot from the site** showing what's being purchased.
5. ערך תכונה = אחר.
6. שלח.

### 3.3 Critical scope decisions (Jeremy, multiple times)
- **Israeli vendors who only accept credit card** (e.g. KSP) → use **רגיל רכש מקומי**. Define KSP as a vendor with credit card payment site. NOT this smart form.
- **Foreign vendor with physical shipment over the small limit** → רכש חו"ל / ייבוא (separate training Sunday).
- **Amazon/eBay/AliExpress with extra import/shipping costs** → file an additional separate import requisition (Shay ~36:16).
- **Foreign lab tests where you ship samples + pay for the analysis** → TWO requisitions: (1) **export shipment** through מדור ייבוא (rishyon yetsu, customs paperwork required), and (2) the payment via this **בנקאית ללא ייבוא** form. Reason is **tax law** — when paying for a service abroad, BIU pays tax (~18%) which can only flow through the no-import payment path. Source: `04` Shay ~52:39-58:00.

### 3.4 Multi-researcher article fees (~37:30)
If 2-3 researchers split an article publication fee:
- **Option A** (preferred): each opens their own requisition for their portion, attaching the same invoice. Source: Jeremy ~38:04.
- **Option B**: one researcher opens it, then budget transfers afterward through the budget department (Shay ~39:54). Be advised — researcher staff often **don't have access to other researchers' budgets** so option A is what actually happens.

### 3.5 Annual subscription auto-renewal
- **NOT supported**. Each year you must open a new requisition manually. Source: `04` Jeremy ~51:02.

### 3.6 Visibility / status tracking (~70:00)
- Yehudit Ben-Gigi-Kadosh: in Brnet, after request reached procurement we lost visibility. Ananet: when you open ניהול דרישות, one column = order number. Once there's an order number, it's been approved and sent to vendor (in Ananet, the buyer or auto-tool sends it — in Brnet there used to be a שורה תחתונה under the order # to indicate "sent to vendor"; that visual cue is **gone**). To find which buyer is handling: open תדפיס דרישה (printout), buyer name appears there. Source: `04` Chaim+Yehudit ~73:00-78:00.

### 3.7 Internal-purchase (רכש פנימי) confusion
The lecture digressed into long discussion (Bat-Chen Ben-Daniel, ~43:00) about payments to maintenance/construction divisions:
- These will be **רכש פנימי** with catalog price ₪1 × quantity-as-amount — not yet built for construction (אין מחירון לבינוי). Will exist at or shortly after go-live. Heim Yosefi sent an email asking units to define their catalogs.
- Maintenance/security e.g. detector neutralization (נטרול גלאים): same model — Hagit Kun's department creates a catalog with the standard prices (₪314 typical, ₪1500 special-location), the requester picks the right line.
- **Separate dedicated training the next day** (Apr 15) on internal purchase / construction.

---

## 4. LECTURE 05 — Hazardous Materials (חומ"ס) (Apr 15 2026)
**Files**: `05-2026-04-15-עננט-הדרכה-מס-5--רכש-חומרים-מסוכנים.md` + `_summary.md`
**Speakers**: Yelena Turchik (lead, demonstrating with a test user), Dudi Raviv (procurement, hazmat domain expert), Chaim Yosefi, Hagit Kun (item-master team).
**Notable questioners**: Shimon Tinman (vet, animal orders), Talia Shimne (delivery times, urgent flag), Tamar Tannenbaum (permissions), Tali (multiple lines), Iris Gispan (BIRD funding), Einat Akirav (BIRD), Batya Lerer (no rכש menu visible), Sivan, Ronen Yehuda (catalog purchase of hazmat).
**Length**: ~48 min, ~80 attendees.

### 4.1 Item-code (מק"ט) revolution — biggest change from Brnet
- Brnet used **categories** to track hazmat. Ananet uses **specific item codes** PER SIZE/PACKAGE. Example: ethanol in 100mL, 200mL, 300mL, 400mL, 500mL bottles = **5 separate item codes**. Source: `05` Dudi ~27:46.
- Reason: precise inventory management — system knows exactly how much is in each lab.
- Hazmat item codes start with **IC** prefix.
- New chemical or new size? Email the **Hagit Kun team** (חגית קון) to create a new item code. Source: `05` Hagit ~28:50.

### 4.2 Search techniques (~7:38-9:42)
- Direct: type known מק"ט number.
- Advanced search: magnifier → חיפוש מתקדם → field "תיאור" with operator "מכיל" → e.g. type "Marker".
- By **CAS number**: CAS appears in item description, so search תיאור מכיל [CAS#] returns all sizes.

### 4.3 Required fields (must be filled, otherwise rejected by Test Validation)
1. **כמות** + יחידת מידה (sub-unit kg for permit calculation).
2. **מחיר**.
3. **ספק** (recommended even though field is technically optional).
4. **ערך תכונה = "חומרים מסוכנים"** ← this triggers extra mandatory fields.
5. **Risk acknowledgment checkbox** — declares you read the risks (which appear in the category description).
6. **קוד מעבדה + סיפרה סודית** — every lab has a secret code; only authorized people know it. Without correct code → rejection at Test Validation. Source: `05` Yelena ~12:08.
7. **חשבון לחיוב** budget account.
8. **מספר סלולרי** of the requester.
9. **Quote attached** (file). Source: `05` Yelena ~16:09.
10. **Item description must be modified** to match supplier's description (rule: any text edit counts as a modification). Source: `05` Yelena ~19:09.

### 4.4 Approval workflow specifics
- After שלח → status "ממתין לאישור" → Test Validation runs (~10 min).
- If rejected: open requisition → Actions → "הצגת היסטוריית מסמך" → see exact rejection reason. Source: `05` Yelena ~17:48.
- Common rejections: missing quote attachment, exceeding lab permit quantities, unchanged item description.
- After Test Validation passes → human approver (e.g. Tamar Gershon shown), based on hierarchy + amount.
- Can preview approvers before sending: ניהול אישורים.
- Can check budget balance before sending: בדיקת יתרות תקציב.

### 4.5 Permissions architecture (Tamar's question, ~29:18)
- **Two-layer authorization**: lab code (knows secret) + budget account (authorized for this account).
- **Requester (דורש) vs Preparer (מכין)** — budget access is tied to the **דורש**. Source: `05` Dudi ~30:24.
- A research assistant supporting multiple PIs needs explicit budget permissions for each PI's accounts to file requisitions for them.

### 4.6 BIRD funding handling (Iris Gispan + Einat Akirav, ~32:42)
- BIRD is defined **as a vendor** in the system. Open requisition with BIRD as vendor, **price ₪1** on the researcher's reserve budget account (just for hazmat compliance check). Same as Brnet workflow.

### 4.7 Urgent orders — NO flag exists
- Brnet had an "urgent" checkbox flag. Ananet does NOT. Workaround: write in הערות לקניין + email/phone the buyer. Source: `05` Talia Shimne + Dudi/Chaim ~33:33-35:09.

### 4.8 Animal orders (Shimon, vet, ~26:00)
Animal items are **NOT** under hazmat in Ananet — they're a separate category routing to the vet for approval based on faculty. Ethics committee approval # field requested but **does not exist yet**. Shimon should email Chaim Yosefi the relevant categories. (Same issue raised in lecture 03.)

### 4.9 Multiple lines (Tali, ~22:01)
Yes, multiple lines per requisition allowed — but ALL must be from the same vendor. Add to cart, add another, validate together. Duplicate (שכפל) existing requisition: allowed, can change vendor.

### 4.10 Lab permission issues — many lab managers had no rkש menu
- Batya Lerer (`05` ~38:19): "I don't see a procurement option at all in my user."
- Sivan: "Same — for almost all lab managers."
- Yelena's response: anyone who had Brnet permissions should email her directly OR `ananet-bedikot`. Some users may not have been migrated.

### 4.11 Reports for inventory & permits
- Custom reports built in Ananet showing lab-level: current inventory, ordered amount, permitted amount per chemical. To be covered in a separate inventory-update training (Dudi Raviv + Yelena will lead). Source: `05` Dudi ~31:37.

### 4.12 Receipts (~42:30)
- The דורש (NOT the מכין) gets receipt notifications.
- Notifications only when an invoice has arrived but no receipt — not nightly.
- Self-initiated: רכש → קבלות שלי.

---

## 5. LECTURE 06 — Expense Reimbursement (Apr 16 2026)
**Files**: `06-2026-04-16-עננט--הדרכה-מס-7---החזר-הוצאות.md` + `_summary.md`
**Speakers**: Aviram Bar-Shalome (developer/owner of expenses module), Yelena Turchik (lead trainer), Ronit Rotman (project liaison, often firefighting policy questions).
**Notable questioners**: Sylvie Baruch (students/non-employees), Hannah Damatov (closing praise — "this is a Garden of Eden compared to Brnet"), Talia Shimne (petty cash), Yaakov Pitusi (cross-employee filing), Jacqueline questions about rates, Dganit Bar-Noy, Channah Damatov, Ksenya Gontsova (foreign students), Yonit Hamburger, Hamootal Duadi (procedural clarifier), Lior Shashon (temporary employees), Moriah Feldman, Liat Daniel, Chen Shochat.
**Length**: ~80 min, contentious atmosphere with audible frustration.

### 5.1 Module fundamentals
- Brand-new module — **NOT done through requisitions** any more (in Brnet it was a דרישת רכש). Source: `06` Aviram ~3:00.
- **Self-service** — every employee enters their own expenses. Source: ~3:24.
- **BIU-only**: Only people **registered in BIU's HR system** can receive reimbursement. **NO** option for: external workers, students who are not employed, foreign visitors. Source: ~5:00, repeated 8+ times.
- Bank transfer only, ILS only, to a personal Israeli account.
- Aviram on the Oracle product: "this is NOT vanilla Oracle expenses — don't search YouTube for guides; we've made BIU-specific customizations."

### 5.2 Mandatory first-time setup
1. Navigate: **אני** (Me) → tile **הוצאות** (Expenses).
2. **Settings → Manage Bank Accounts** — add personal Israeli bank account (must be ILS). Use bank code (12 = Hapoalim) → branch dropdown will populate. If your branch is missing, open a ticket with IT. Can have multiple accounts; mark one as **Primary**.
3. **Settings → Manage Delegates** (ניהול נציגים):
   - **"People who can enter on my behalf"** — choose colleagues authorized to file expenses for you.
   - **"People for whom I can enter expenses"** — see who has authorized you.
- The delegate's permission is **scoped only to the expense module** — they cannot see anything else of yours. Source: `06` Ronit ~46:51.

### 5.3 Creating an expense report
1. **אני → הוצאות → "יצירת דוח"**.
2. **Purpose / title** for the report (e.g. "Sample Expenses 2026").
3. Click **"יצירת פריט"** for each invoice line.
4. Fields per line:
   - **Date** of invoice.
   - **Template** — pick one of three: "Projects & Operating", "Research Authority", "KKMB" (קקמ"ב). Source: ~30:05.
   - **Expense type** — dropdown changes based on template (e.g. "דמי חניה", "כיבוד וארוחות"). Each type opens type-specific extra fields.
   - **Amount + currency** — defaults ILS but supports any currency. System auto-pulls exchange rate; you can override (system flags the change for the approver). Source: ~32:00.
   - **Attachment** — scanned invoice (mandatory).
   - **Vendor name** (free text; e.g. "Krevitz").
   - **Invoice number** (free text from invoice).
   - **Description** (so manager understands).
   - **Charge account** — three dropdowns (department / account / project). Then click **green button "השלם שדה שילוב חשבונות"** to validate the combination is legal. Aviram: don't try to fill this manually. Source: ~37:00.
5. Multiple lines: click "יצירת פריט" repeatedly. Same scope = multiple invoices in one report.
6. **שמירה וסגירה** to save without sending.
7. From report screen, three-dots → **שליחה** to lock and send for approval.

### 5.4 Approval (manager view)
- Manager gets bell + email notification.
- Click bell → click report → see header (amount, requester, title), **budget control** (red = no funds — should reject), the lines themselves, exchange-rate flag if anomaly, **"דוחות חשודים ככפולים"** table (auto-detects same date+amount), and full approval-cycle visualization. Source: ~62:20-66:00.
- Buttons: אישור / ביטול הפעולה לחלוטין (full reject — must enter reason).
- Payments execute **twice a month, on the 1st and 15th**, just like supplier payments. Source: `06` Ronit+Talia ~75:30.

### 5.5 Critical policy issues (NOT solved at lecture time)
The lecture became contentious because BIU's old workflows don't map to the new architecture:

#### 5.5.1 Students (employed vs not)
- **Employed students (סגל זוטר with payslip)** — they ARE registered in HR, so they CAN log in and file. Source: ~13:40.
- **Non-employed students** (foreign students, certain TAs) — **NO solution at go-live**. Aviram & Ronit accept this is a problem. Workaround proposed: the researcher pays the student via **Bit personal transfer**, then the researcher files the expense as their own. Sylvie & Yonit explicit: "this is not a real solution." Source: `06` Ronit ~51:33-52:55.

#### 5.5.2 Employees not tied to a budget account
- **Department managers without budget assignment** can't reimburse from departmental budget. Talia Shimne example: shop floor employees who don't sit at a computer and aren't tied to budgets.
- Aviram's framing (~14:23): "If you don't have permission for the budget, you shouldn't be making purchases for it." This was rejected by attendees as unrealistic.
- Ronit: "This is for IT to solve — they need to provide a way to grant temporary or scoped permission." Action item: IT to find a solution.

#### 5.5.3 Multi-line consolidated reports for monthly subscriptions
- Sylvie asked whether one PDF with 12 monthly receipts can be one report. Aviram: "yes, **same expense type**, one PDF, one line for the total." Source: ~58:30.
- For recurring monthly entries, **duplicate the report**: open last month's, three-dots → duplicate, edit dates/amounts, send.

#### 5.5.4 Petty cash replacement
- Talia: "Our department stopped using petty cash because we were told it would be in Brnet/Ananet." Aviram (~17:00): "Yes, this should replace petty cash."
- But you cannot easily reimburse a colleague — only yourself or someone who delegated to you.

### 5.6 Foreign-currency expenses
Sylvie & Ohad raised this. Solution:
- Enter amount in foreign currency (e.g. USD).
- System auto-pulls today's rate.
- You can override the rate to match your **actual credit-card debit in ILS**. The system marks the override and the approver sees it. Source: ~95:00.
- There IS a sanity check — wildly off rates blocked.

### 5.7 Practice environment status
- At lecture time (~Apr 16), **NO practice environment available**. DEV2 was not yet open. Source: `06` Aviram ~end. Promised by **Monday** before go-live. This caused frustration — "you want us go-live in 10 days with no practice."

### 5.8 The "delegate filing" demo
After the recorded portion, Ronit & Aviram switched to a live screen-share showing what a delegate sees:
- When a delegate logs in, top of expense screen shows whose expenses you're managing. Default = self.
- Dropdown to switch to anyone who delegated to you (e.g. Aviram → Shay).
- When you file in someone else's name, the report shows "submitted by [delegate] on behalf of [employee]".
- The owner whose budget is being charged does NOT need to re-approve (delegating implies trust). Source: ~70:50.

### 5.9 Sentiment summary
Channah Damatov closed with sincere praise: "Compared to Brnet this is a Garden of Eden of a system. I'm in shock — wonderful work, thank you." But the lecture was largely consumed by attendees discovering process gaps that have no solution at go-live, especially for student reimbursements.

---

## 6. LECTURE 07 — Operations Team Pre-Launch Briefing (Apr 19 2026)
**File**: `07-2026-04-19-עננט-הדרכות-ודגשים-תפעול-עלייה-לאוויר.md` (718 lines) + `_summary.md`
**Speakers (in order)**:
- **Ofer Shragay** (סמנכ"ל תפעול / VP Operations) — opens (~05:54) and closes (~02:15:30).
- **Jeremy Regenstreif** (procurement) — moderator throughout, transitions between modules, Q&A handler in chat.
- **Karin Katzir** + **Ofer Wolf** (procurement, local-purchase desk) — module 1 (~12:24-58:00).
- **Shay Shoval** (ראש מדור רכש חו"ל / Head of Foreign-Purchase Section) — module 2 (~01:00:01-01:23:00).
- **Hagit Kun** (safety/hazmat item-master team) + **Kobi Biton** (safety/hazmat co-host) — module 3 (~01:30:25-01:50:00).
- **Lior Sasson + Dror Sasson** (logistics/central warehouse — speaker labelled "Yair" in transcript) — module 4 (~01:59:36-02:15:30).
- **Niram** — technical session manager.

**Audience**: ~150-200 BIU operations-side end-users (procurement, lab managers, warehouse customers, transport requesters). Modular Zoom — attendees joined only the slot relevant to them.
**Length**: ~2h 14m total. Format: NOT a full training (those happened in lectures 03-06, 08); this is a **last-mile dgashim (דגשים) briefing** — operational do's and don'ts, plus differences from prior lectures, plus open Q&A on day-of-launch realities. Recording was made and will be uploaded to the תקשוב training site.

### 6.1 Why this lecture exists (Ofer Shragay opening, ~05:54-07:35)
- Held in **חודש זיו** (month of bloom — Iyar, Apr 2026), seven days before go-live.
- Purpose: **drill operational dgashim** for the four operations sub-domains — local purchase + transport, foreign purchase, hazmat, central warehouse. Each domain owner presents their own emphases.
- Ofer Shragay framed it as "we're in good company — Solomon started building the First Temple in Iyar."
- Jeremy added (~07:47): "Today is **modular** — come and go for your slot. We'll start each new session at the published time, not before."

### 6.2 Karin Katzir + Ofer Wolf — Local Purchase, Transport, Catalog (~12:24-58:00)
**Frame** (~12:50): "This is NOT training, it's dgashim. For real training go to the תקשוב training site and watch the recordings."

#### 6.2.1 Login & navigation rules (do this BEFORE first action)
- **No username/password** — black "SSO" button, automatic Windows-credential identification (~14:12).
- **CRITICAL — no browser back/forward buttons.** Pressing them kicks you out. Use only **בוצע / סיום / דף הבית** inside the system. Karin emphasized this twice (~14:30 and ~57:21).

#### 6.2.2 Three purchase paths (Jeremy ~10:14, Karin ~15:32-16:51)
- **רכש ממחירונים** (catalog purchase) — replaces Brnet shops (הסכמים ומחירונים, לוגיסטיקה ואירועים, תקשוב, תקשורת) — all unified into a single search bar with `%wildcard%`.
- **רכש לפי הצעת מחיר** (quote-based) — replaces "free" Brnet local-purchase form; entered via משימות נוספות → הזנת שורת דרישת רכש.
- **טפסים חכמים / Smart Forms** — credit-card-foreign and bank-transfer-foreign (covered briefly here, fully in L4).

#### 6.2.3 Transport (הסעים) — the dgashim Karin emphasized (~17:13-19:33)
- **One bus per requisition.** You CANNOT bundle multiple buses in one requisition (Karin ~18:04).
- Search "אוטובוס" with %% — see vehicles by capacity (60-seat, 12-hour, 220km basis), pick the right size.
- **MANDATORY**: mobile phone field. Without it the system rejects (~18:37).
- **ערך תכונה = "הסעים"** opens transport-specific fields: from/to, hours, route, etc.
- **No quote attachment needed** for catalog purchase (price is from framework agreement) (~19:33).

#### 6.2.4 Local purchase with quote (Ofer Wolf ~22:55-37:51)
- **Description must match the supplier's quote text** — when you pick a hazmat or warehouse מק"ט, the system auto-fills BIU's internal description; **you MUST overwrite it** to match the supplier's wording or Test Validation rejects (~29:04, ~54:00).
- **קטגוריה (category)** is critical — drives approval cycle and routes to correct buyer.
- **Quantity unit always "יחידה"** — never Each / kg / gram (~25:35).
- **Currency must match the quote** (USD / EUR / ILS) — do NOT mix currencies in one requisition (Karin/Diana Q ~40:06).
- **Frame requisition (דרישת מסגרת)** — for hourly/progressive billing where amounts come in tranches; you enter total budget, the supplier sends invoices over time (~24:00).
- **Header description auto-fills from first cart line** — change it to something searchable (~32:40).
- **Quote attachment MUST go at HEADER level**, not row level — system rejects without it (~33:16).
- **Comments**: row-level comments work but are operationally awkward; prefer header-level.
- **One supplier per requisition** — if you mix two vendors, system rejects (~21:25).

#### 6.2.5 The bell, Test Validation, and visibility (~36:17-39:46)
- After שלח, **Test Validation runs ~10 min**. If you missed mobile phone or quote attachment, system rejects to bell + email.
- **NOT online/instant**: requester must keep checking the bell. This is a **conceptual shift** from Brnet (where on-screen errors appeared immediately) — Karin called it out explicitly (~39:46).
- View rejection: open requisition → Actions → "הצגת היסטוריית מסמך" → see exact reason.
- **Fixing**: open the rejected requisition → Actions → Edit → add missing field → resend. NO need to recreate (~42:14).

#### 6.2.6 Order/requisition number prefixes (Jeremy + Karin ~48:33-49:49)
This is CRITICAL operational knowledge for the first weeks:
- **Migrated Brnet orders** keep their original Brnet numbers (start with **1**).
- **New Ananet orders** start with **4**, 7 digits.
- **New Ananet requisitions** start with **2**, 7 digits.
- **Internal-shop orders** have shorter numbers (start with **2** or similar).
- See an order number on the screen → it's been approved & sent to vendor.

#### 6.2.7 Migration scope clarifications (Jeremy ~47:50-48:23)
- **ONLY orders that were not fully paid** migrated. If you ordered 9 units, 7 were delivered + paid, you'll see an order for **2 units** in Ananet — not 9.
- **Standalone Brnet requisitions did NOT migrate at all** — must be recreated from scratch (Karin ~52:53, "Requisitions that didn't become orders did not transfer to Ananet — recreate them").
- **Receipts for migrated orders are still done in Ananet**, even though the order originated in Brnet (Karin ~49:58).
- **Vendor-creation procedure unchanged** — Dorit Olami still opens new vendors (~46:03).

#### 6.2.8 Other operational dgashim
- **Amount entered is BEFORE VAT** (Karin ~41:46). System adds VAT during processing if applicable; budget is debited only on the no-VAT amount.
- **Buyer (קניין) is hidden until the order is approved** — you cannot see who's handling your request before approval (Jeremy ~02:01:43, also in L4 ~73:00).
- **Order copy emailed** to requester at approval (~56:22). Can also be downloaded as PDF from inside the order.
- **Pivot users** in each unit will provide first-line support; only escalate to procurement if pivot can't help (Jeremy ~42:33).
- **Bot AI in development** for free-text questions about categories and מק"טים — already partially functional (Jeremy ~43:51, Karin ~43:35).
- **No urgent flag** — write הערה לקניין + email/phone the buyer (consistent with L3, L5).
- **Refreshment orders (כיבוד)** — use frame requisition with the total quote amount, NOT a row per item (~46:22).

### 6.3 Shay Shoval — Foreign Purchase (~01:00:01-01:23:00)
**Opening (~01:00:53):** "The work method has changed. Buyers will NO LONGER fix your requisitions. The fix is on you."

This is the **biggest operational change vs Brnet for foreign purchase** — and not covered in any prior lecture.

#### 6.3.1 The new workflow (Shay ~01:01:27-01:03:30)
1. Requester opens requisition.
2. Buyer reviews — if OK, contacts vendor for logistics calculation (החלת חישובי המסה לוגיסטית).
3. **If NOT OK, buyer rejects + emails the requester EXACTLY what to fix. Requester edits and resubmits.**
4. Logistics-loading rows: **buyer emails the requester the loading amounts; requester enters them in the existing requisition** (NOT a new one). This is the inverse of Brnet, where the buyer entered them.

#### 6.3.2 Hard rules for foreign requisitions (Shay walkthrough ~01:03:43-01:16:28)
- **Item description must be IN ENGLISH and IDENTICAL to the quote.** Description goes "as is" to the order, and the foreign vendor must recognize it. "Microscope" alone is NOT enough — include serial number / model from the quote (~01:04:43).
- **Type always "דרישה לפי כמות ומחיר"** — never frame requisition (~01:04:33).
- **Price is NET after discount** — Ananet has no discount field, just like Brnet (~01:06:17).
- **Currency must be USD/EUR/etc. matching quote** — but in test environment only USD is loaded (~01:06:38).
- **ערך תכונה (Attribute Value)** — set at row level to "אחר" if not hazmat. At HEADER level, change to "ייבוא" or "ייצוא" (~01:09:13). This is the field that **routes the requisition to the foreign-purchase desk**.
- **Vendor MUST be selected** — if you don't know who, type "General" as vendor name and you get a routing page; the buyer assigns the real vendor later (~01:11:53).

#### 6.3.3 Import-specific mandatory fields (~01:09:36)
- Email of supplier or research collaborator.
- Cooling required (Y/N) — if N, write "לא נדרש". Without it, requisition stalls.
- Internet purchase: cart link + site username + password (system staff log in to your cart and pay).

#### 6.3.4 Export-specific mandatory fields (~01:10:37-01:11:36)
- Email of cooperator/recipient.
- Cooling.
- **Who pays for shipping** — sender / recipient / lift-share (במעלית/בערילה).
- **Package dimensions in cm + weight in kg** — for shipment cost estimation.

#### 6.3.5 Logistics-loading requisitions (separate type) (Shay ~01:12:11)
For pure logistics charges (no item shipped, just import/export overhead):
- No "logistics-loading" attribute value — just pick "ייבוא".
- Email = requester's own email (no vendor on logistics).
- Description = "העמסות לוגיסטיות" + the original requisition's category, qty, price.
- Buyer calculates the loading and emails it back; requester types it into this requisition.

#### 6.3.6 Required attachments for foreign requisitions (~01:13:19)
- **Quote** — supplier quote OR Proforma Invoice OR website screenshot.
- **Export form** for export shipments — buyer sends a template; requester fills + reattaches.
- **Customs declaration** — same as Brnet, exact item content for customs release.

#### 6.3.7 Quote-count thresholds (Shay ~01:14:58 — REINFORCES rules from L4 but states them differently)
| Requisition amount (incl. VAT) | Required quotes |
|---|---|
| Up to 20,000 ₪ | 1 quote |
| 20,000-60,000 ₪ | 2 quotes |
| 60,000-100,000 ₪ | 3 quotes |
| Above 100,000 ₪ | Tender committee (ועדת תשומות) |

**Difference from L4**: L4 (credit-card lecture) gave the $750 article-fee threshold for that specific smart form. L7 here gives the **general foreign-purchase quote-count rule**, which applies to all foreign requisitions with shipment.

#### 6.3.8 Smart-form vs foreign requisition decision tree (Jeremy + Shay ~01:18:45-01:22:28)
- **Foreign software, NO shipment** → smart form (קנייה בכרטיס אשראי לחו"ל ללא ייבוא).
- **Foreign software shipped on Disk-on-Key** → foreign requisition (ייבוא).
- **Amazon / eBay / AliExpress / Temu** with shipment → smart-form (credit-card) for now (Jeremy explicit, ~01:20:01).
- **Foreign service-only payments** (DropBox renewal, software subscriptions) → smart-form.
- **Anything sent IN or OUT of Israel physically** (incl. samples, equipment, returns) → foreign requisition.
- **FedEx is the ONLY outbound carrier** for BIU foreign mail; not the BIU campus post (~01:18:27).

#### 6.3.9 Edit existing, don't recreate (Shay ~01:21:00)
- "Always edit the existing requisition rather than cancel + recreate. We use the requisition number as **reference with the supplier**. If you cancel and open a new one, the supplier won't know what we're talking about."
- "Editing is much simpler in Ananet than in Brnet — Actions → Edit, done."

#### 6.3.10 Closing tone (Shay ~01:23:00, Jeremy ~01:23:36)
Shay was unusually frank: "Yes, the work method is **more annoying** for you than before. We're paying attention to detail so the purchase is clean. There will be back-and-forth. Nothing to do about it."
Jeremy added: "Hard at the start, for us too. New system. We'll get over it together."

### 6.4 Hagit Kun — Hazmat (~01:30:25-01:50:00)
**Frame**: "Categories, chemical name, CAS number — UNCHANGED from Brnet. The big change is **container size added to every מק"ט**."

This module is essentially a **condensed version of L5 with new operational details**. Key REFINEMENTS from L5:

#### 6.4.1 Search by CAS in description (~01:31:30)
- In Ananet hazmat search: choose "תיאור" + operator "מכיל" + paste CAS number. All sizes of that chemical appear.
- This is faster than the prior Brnet workflow.

#### 6.4.2 Lab code IS personal — new format, mailed individually (~01:34:25, ~01:40:37)
- "Lab code will be sent to **each researcher individually** by email, AFTER stock count is complete."
- "Lab code in Ananet is **DIFFERENT** from Brnet code. Don't reuse old codes." (~01:40:54)
- Without a valid lab code, hazmat requisitions are blocked.

#### 6.4.3 Lab Reporting Screen (NEW — not covered in L5) (~01:37:30-01:40:00)
- Path: Home → navigate sideways in top bar → חומרים מסוכנים → **Lab Reporting Screen / מסך דיווח למעבדה**.
- Use cases:
  - **Declare consumed** — "I used up 2 bottles of X" → lowers your inventory → frees you to order more.
  - **Declare gift / received not via purchase** — must declare BEFORE accepting to ensure permit compliance.
- Hagit emphasized: "Receipt does NOT auto-decrement your lab stock. You MUST come to the Lab Reporting Screen and declare consumption manually." (~01:49:34)
- **System BLOCKS negative inventory** — if you try to declare more consumed than your records show, error.
- **Permit overruns auto-notify safety unit** — Hagit's team gets a system message and follows up.

#### 6.4.4 Item code structure (~01:34:47)
- `IC` prefix.
- `[Chemical name]` — e.g. tris.
- `[CAS]` — or `0` if no CAS.
- `[Container size]` — 25g, 50g, 1g, etc., or "yiunit" for items where size isn't relevant (buffers, inhibitors).

#### 6.4.5 Receiving gifts (~01:43:58-01:44:31)
- **Declare BEFORE accepting** any chemical you didn't purchase. If it's outside your permit, BIU is in violation of the toxics-permit law.
- Email **hazmat@biu.ac.il** (unchanged from Brnet) for permit-extension requests OR if you got an error and need lab support.

#### 6.4.6 BIRD (Israel-US R&D) procurement (Hagit + Ofer Wolf ~01:46:21-01:47:30)
- BIRD = treat as a vendor.
- Open a normal hazmat requisition; pick **"בירד"** as supplier; quantity is what matters.
- **Sum**: ideally **0**; if system requires non-zero, use **1 ₪** placeholder. Avoid currency, use ₪.
- The Ananet permit-approval routing replaces the Brnet "approval to BIRD" step automatically.

#### 6.4.7 Everything is hazmat — including water (~01:41:44)
"Every chemical including DDW40 (deionized water) is in the hazmat category. So even water requisitions go through this module."

### 6.5 Lior + Dror Sasson — Central Warehouse (~01:59:36-02:15:30)
**Speaker tag note**: The transcript labels this speaker as "יאיר/Yair" — but Ofer Shragay's intro at ~07:35 named **Lior Sasson + Dror Sasson** as the warehouse presenters. Treat "Yair" tag as one of the Sasson brothers (likely a misrecognition by Timeless).

#### 6.5.1 The four hard rules for warehouse requisitions (~02:02:04-02:02:53)
1. **Source Type MUST = "מלאי" (inventory)**, NOT "ספק חיצוני". If wrong, requisition does NOT route to the warehouse.
2. **Source Warehouse field**: must explicitly write **"מחסן כללי"** (General Warehouse) — this is the renamed **המחסן המרכזי** from Brnet.
3. **NEVER mark "תשומה" / Research Input.** No warehouse item is a research input. (Yair was emphatic, twice ~02:02:32, ~02:07:34: "אף פריט מהמחסן אינו תשומה.")
4. **ערך תכונה = "אחר"** for ALL warehouse requisitions.

#### 6.5.2 Item codes & search (~02:01:21-02:13:08)
- Pick by item code if known.
- Search via "מכיל" + name fragment, but result will mix internal and external sources — verify the **Source Type** flips to "מלאי" automatically when you pick a real warehouse item.
- **Item codes starting with "Y" = Yes/inventory item** (~02:13:08).
- Catalog of item codes will be **emailed to all users** by Lior's team after launch.

#### 6.5.3 Mandatory delivery details (~02:14:48)
- Building number, floor number, room number, **mobile phone**.
- Without exact details: package sits in warehouse, never delivered.

#### 6.5.4 Distinction with rכש מקומי (Ofer Wolf clarification, ~02:07:42)
- Same lab tubes (מבחנות) bought from external supplier through רכש מקומי = MARK תשומה.
- Same lab tubes from the central warehouse = DON'T mark תשומה.
- This is because the warehouse holds bulk-procured items already classified by procurement, while external buys hit the input-tracking law (חוק תשומות).

#### 6.5.5 Other dgashim
- Category field is **read-only** when you pick a warehouse item — you can't change it (~02:11:55).
- Order numbers from inventory differ from external-supplier orders (Jeremy ~02:11:20).
- **No catalog shop (חנות) for warehouse** — Galit Zahav asked, Yair confirmed: "Shops are a thing of the past. The shop in Brnet is gone." (~02:10:00)

### 6.6 Audience questions and concerns

| Time | Questioner | Question | Answer |
|---|---|---|---|
| ~06:39 | Avi Pa'er | Where can we find lecture materials and recordings? | Jeremy: "Will send the link to the תקשוב training site at the end" — link posted in chat ~13:20 |
| ~25:00 | Several | Same lab tubes from warehouse vs external — different תשומה rules? | Karin/Ofer Wolf clarified the distinction (warehouse = no תשומה; external = yes) |
| ~40:06 | Diana | Can I mix currencies in one requisition? | Karin: "No, single currency only. Mix → buyer chaos." |
| ~50:07 | Several | What about partial allocation if part of an order already came in (שיכוך שיויון)? | Jeremy: "We don't have a final answer. Will follow up." (open issue) |
| ~52:14 | Lab managers | Where do we approve refreshment-order receipts? | Karin: "All receipts including כיבוד go through 'הקבלות שלי' tab." |
| ~01:17:47 | Shimon | How will I know logistics-loading amounts in advance? | Shay: "You won't. Open the requisition; we calculate; we email you the amount; you enter it." |
| ~01:25:19 | Hannah | Where will the booklet be? | Jeremy: "We'll post it on our site and ask Niram to send the recording." |
| ~01:42:00 | Several | Do receipts auto-decrement lab stock? | Hagit: "NO — must use Lab Reporting Screen." |
| ~02:10:00 | Galit Zahav | Why isn't this a catalog shop? | Yair: "Shops are gone in Ananet. Source-Type is the new mechanism." |

### 6.7 Cross-references to earlier lectures

#### Refines (does not contradict)
- **Migration scope** (L7 Jeremy ~47:50-48:23) refines L1/L3: not only "orders that became orders migrate" but specifically "**only the unpaid quantity** of partially-paid orders migrates." This is operationally crucial — your Ananet view will show fewer items than Brnet did for partially-fulfilled orders.
- **Number prefixes** (L7 Jeremy ~49:25) — first detailed listing across all lectures of the **1/2/4 prefix scheme**. Not in L1, L3, L4, L5, L6, L8.
- **Lab Reporting Screen** (L7 Hagit ~01:37:30) — extends L5's hazmat coverage: L5 mentioned "reports built into Ananet" (Dudi ~31:37) but didn't show the Lab Reporting Screen workflow. L7 makes it concrete and emphasizes it's MANUAL (~01:49:34).
- **Personal lab codes mailed AFTER stock count** (L7 Hagit ~01:40:37) — refines L5 (Dudi ~25:00 referred to lab codes generally). L7 confirms timing: you receive your code only after Hagit's team finishes the per-lab inventory upload, which is happening **the week before launch**.
- **Quote-count thresholds for foreign purchase** (L7 Shay ~01:14:58) — L4 (credit-card) only mentioned the $750 article threshold for that smart form. L7 is the **first complete statement** of the general 20K/60K/100K thresholds for foreign requisitions in any lecture.
- **English description requirement** (L7 Shay ~01:04:43) — L4 implicitly mentioned it for credit-card; L7 makes it MANDATORY for ALL foreign requisitions.

#### Refines L3 (local purchase)
- The "header description auto-fills from the first cart line" detail (L7 Ofer Wolf ~32:40) was not mentioned in L3 with this precision. L3 said "header description should be searchable" (Yelena/Michal); L7 explains the auto-fill mechanism that requesters keep mistakenly leaving in place.
- The "edit a rejected requisition rather than recreate" guidance (L7 Karin ~42:14, Shay ~01:21:00) is consistent with L3 but more emphatic.

#### Refines L5 (hazmat)
- L5 mentioned "all chemicals including water are hazmat" implicitly via permit law; L7 (Hagit ~01:41:44) makes it explicit: "DDW40 is in hazmat. Even water orders go through this module." — useful clarification for cleanroom labs.
- BIRD workflow (L7 Hagit + Ofer Wolf ~01:46:21) — L5 didn't cover BIRD; L7 fills the gap (vendor=BIRD, qty=most important, sum 0 or 1 ₪).

#### Genuinely NEW in L7 (not in L1, L3, L4, L5, L6, L8)
- **No back/forward browser buttons** — operational rule emphasized only in L7.
- **Order/requisition number prefix scheme** — only L7.
- **Quote-count thresholds for foreign purchase (20K/60K/100K)** — only L7.
- **Lab Reporting Screen workflow** — only L7.
- **Source Type "מלאי" enforcement + "מחסן כללי" warehouse field** — only L7.
- **No תשומה for ANY warehouse item** — only L7 (Yair was emphatic; Ofer Wolf clarified the distinction).
- **Item codes starting with "Y" = inventory** — only L7.
- **Pivot users in each unit (משתמשי כלים)** — first explicit operational mention, refines L1 Assael's general "pivot users" comment.
- **English description ALL foreign requisitions** — only L7.
- **FedEx is sole outbound carrier** — only L7.
- **One row per quote line** for foreign — emphasized in L7 (Shay ~01:21:58); L3 hinted but didn't enforce.
- **Foreign-purchase staff will NOT fix requisitions for you** — major workflow inversion, only L7.

#### No contradictions found
L7 is consistent with L1, L3, L4, L5, L6, L8 on every point checked. It is a **refinement layer** rather than a correction layer.

### 6.8 Critical warnings & last-minute changes
1. **Receipt does NOT auto-decrement hazmat lab stock** — requesters MUST proactively use Lab Reporting Screen. If you skip this, your future requisitions will be blocked due to "exceeded permit quantity" even though you've actually consumed the chemicals.
2. **Foreign-purchase desk no longer fixes requisitions.** If you're used to Brnet workflow where buyers silently corrected things, you will see rejections you've never seen before in the first weeks.
3. **Personal lab codes have not been distributed yet** as of Apr 19. Hagit's team is loading inventories per lab; codes will be emailed individually. Researchers will likely log in on Apr 26 (launch day) and discover they cannot order chemicals because the code hasn't arrived. Plan accordingly.
4. **Migration of partially-fulfilled orders shows only unpaid quantity.** Researchers expecting to see "9 of 9 ordered" in Ananet will see "2 of 2" — this WILL cause panic on day 1.
5. **Browser back/forward buttons kick you out** — this is a recurring trap. Karin emphasized twice; Shay reinforced.
6. **Bot AI is partially functional.** Categories and item-code search via the bot is in active development. Don't rely on it for the first weeks; use the catalog/training-site materials.

### 6.9 Sentiment summary
- **Tone**: Calm, professional, organized. Each speaker presented their domain with confidence and the modular schedule held.
- **Audience engagement**: Heavy chat questions but controlled — no contentious debates as in L6 (expense module). Most questions were procedural.
- **Trainer self-awareness**: Shay's frank "yes the new method is more annoying for you" struck a refreshing note. Ofer Shragay's closing thanks ("we're not going anywhere, we'll do another session if needed") signaled willingness to support beyond Apr 26.
- **Underlying anxiety**: The 3+ hour length and the volume of "small but mandatory" rules (no back button, no currency mix, no תשומה for warehouse, English descriptions, header attachments only, Lab Reporting Screen) suggests trainers are bracing for a high error rate in week 1.
- **Productive but long**: Audience would benefit from either pre-sent materials or shorter focused sessions per role (recommendation noted in summary).

### 6.10 Action items from L7 (assigned)
| Action | Owner |
|---|---|
| Send link to all training materials and recordings | Jeremy (תקשוב) |
| Send procurement training presentations | Karin Katzir |
| Mail personal lab code to each researcher after stock count | Hagit Kun |
| Send central warehouse item-code catalog | Lior Sasson |
| Continue developing AI bot with category + מק"ט info | Jeremy (תקשוב) |
| Upload foreign-purchase categories list to bot | Shay Shoval |
| Consider scheduling additional dgashim session if needed | Ofer Shragay |
| Each unit appoints local pivot users (משתמשי כלים) for first-line support | Unit managers |

---

## 7. LECTURE 08 — Scholarships (מלגות) (Apr 16 2026)
**Files**: `08-2026-04-16-עננט-הדרכה-מס-4--מלגות.md` + `_summary.md`
**Speakers**: Shay Meler (אגף תקשוב, lead), Ronit Rotman (project liaison), Michal Kalman (procurement, joined for procurement-side expertise on the integrated workflow).
**Notable questioners**: Zvi Swisa (international school, asked piercing questions about timing), Esther Adi-Japha (student-registration check), Ester Akirav, Aila Bracha (multi-year scholarships), Sima Korzberg (auto-fill loss), Gabriella Khalsetski (research-year auto-fill missing), Hila Schwartz (sub-deans approval), Vali Latka (rector approvals), Hannah Damatov, Apirat Pulver (timing/cancellation), Ornit Hagvi-Danokh (donor funding source), Hava Arnest (student returns), Tami Rubnov, Tzipi.
**Length**: ~80 min, ~50 attendees. Recorded.

### 7.1 Conceptual model — scholarships now go through procurement
Scholarship submission → creates a **vendor record** (the student) if not exists → creates a **procurement requisition** → approval cycle → becomes an **order** → **vouchers** (חשבוניות) generated per month → payment on 1st of each month. Source: `08` Shay ~6:00.

### 7.2 Major change: academic year alignment
- **Brnet**: scholarship year = November to October (a payment for "September" was filed in October to pay in November).
- **Ananet**: scholarship year = **October to September**, with **payment one month forward** (October scholarship pays November 1). Source: `08` Shay ~8:06.
- Concept: the date you enter = the **שריון month** (encumbrance month / month being granted), NOT the payment date.
- Late grants: enter "January" today (April 16) and the system will create vouchers for January, February, March all dated today, paying as a **lump sum** ASAP. Source: `08` Shay+Zvi ~10:21.

### 7.3 Entering a scholarship — full step-by-step
1. Login via SSO → click **"מלגות"** in nav.
2. Default search shows current year (תשפ"ו). Click **"ליצור"** (create new).
3. **Student ID/passport** (single field accepts both תעודת זהות AND דרכון). Search → student details auto-populate from BIU-net incl. bank info.
4. **Display panel** shows: סכום מאושר לתשלום (already-approved this year), סכום ממתין לאישור, סכום שנתי. **KNOWN BUG**: the annual sum does NOT include amounts already paid on later-cancelled scholarships. A new column will be added. Source: `08` Shay+Ronit ~44:40.
5. **Academic department of the student** (e.g. H325 = Chemistry; can also type department name to search).
6. **חודש תחילת מלגה** + **חודש סיום**. Wording on screen says "תחילת שנה" but is misleading — you can enter any month. Source: `08` Shay+Zvi ~9:18.
7. **סכום מלגה** (total) — system auto-calculates monthly payment + number of payments. Editable.
8. **סיבה למלגה** + free-text **הערות**.
9. Multi-year scholarships (e.g. President scholarships): fill **for current year only**, then in next year's October open a new entry from this same screen. Source: `08` Shay+Aila ~13:13.
10. **Budget department** — can be different from academic department (e.g. honors scholarships use departments starting with **S**). Source: `08` Shay ~57:00.
11. **Project** — by number or text search.
12. **Research year** (שנת מחקר) — **KNOWN BUG**: does NOT auto-populate as it did in Brnet. Must enter manually. Source: `08` Sima+Shay ~14:26.
13. **Funding source** — for Research Authority projects, MUST be "קרן מחקר" (or system rejects). For non-Research-Authority can be "גורם חיצוני" (donor) etc. Validation rule. Source: `08` Shay ~16:17.
14. **Researcher name** — free text, **for information only** (the actual approval routing uses the project's defined PI in Ananet, not what you type). Source: `08` Shay ~14:53.
15. **Save** — system validates the funding-source ↔ project combination. Generates a scholarship number.
16. **Attach documents** (recommended at this stage so they flow with the requisition).
17. **שליחה לאישור** — must check two boxes:
    - "Verified, student has no debt" (but **system does NOT actually check this** — known bug)
    - "Scholarship is not for work"
18. After send: vendor created (if needed), requisition created, attachments transferred.

### 7.4 Approval cycles
- **Research Authority scholarships**: PI of the project → research-authority budget רפרנטית. Two stops only. Source: `08` Shay ~25:33.
- **Excellence/dean scholarships**: head of student's academic department → ממונה (dean) → department budget owner. Source: `08` Shay+Hila ~21:54.
- **No paper form needed** — the in-system approval cycle replaces the old Word form with two signatures. Ronit explicit: "we did a long approval cycle exactly so the form wouldn't be needed." Source: `08` Ronit ~17:55-18:42.
- Researcher who enters their own scholarship MUST also approve it (does NOT auto-skip). Goes through bell. Source: `08` Shay ~26:44.
- Approvers can be **added manually** to any cycle via Actions → Edit → Manage Approvals → Plus icon. Live demo at ~58:30 — Michal walked Shay through it.
- Sub-dean / Vice-rector / Rector cycles: Hila & Vali asked specifically. Shay/Ronit answer: present cycles are based on tested setups; if your faculty needs a different signer, raise it now (Ronit Ori at the Rector's office is the contact for honors-scholarship overrides). Workaround: attach signer's approval as PDF attachment.

### 7.5 Cancellation
- **Before send**: just edit/delete.
- **In approval cycle**: ask an approver to **reject**. You as the requester cannot reject your own item.
- **After approval (vouchers exist)**: open the scholarship → Edit → **"ביטול מלגה"** → enter date = the **first month to cancel** (e.g. enter April 1 → student does NOT receive starting May 1, since payment happens one month forward). Source: `08` Shay+Zvi+Ohad ~36:00-38:30.
- **Cannot partially cancel and resume**. To resume, open a brand-new scholarship.
- **Cannot edit** an already-sent scholarship — only cancel.
- Cancellation releases שריון and cancels future vouchers.

### 7.6 Saving custom searches
- ניהול דרישות → search bar → add filter "תיאור מכיל מלגות" → execute → save with name (e.g. "חיפוש מלגות"). Reusable. Can set as default. Source: `08` Shay+Sima ~52:25-54:00.
- Ronit offered personal help to anyone struggling: "I'll join your Teams call and set it up — it's a one-time thing."

### 7.7 Migrated scholarships (from Brnet)
- Each migrated scholarship is **split into two entries**:
  - **Already-paid portion** — status **"בילד"** (legacy state).
  - **Yet-to-be-paid portion** — status **"חויב"**, will continue paying through Ananet.
- Both entries carry the **same original Brnet scholarship number**. Source: scholarships summary section "Migrated Scholarships".

### 7.8 Negative-amount scholarships (returns)
- Decided: when a student returns money, **the department** (not finance) enters a **negative-amount scholarship**. Goes through normal approval with finance approval. Source: `08` Hava+Ronit ~49:08.

### 7.9 Known bugs at go-live (acknowledged by Shay & Ronit)
| Bug | Severity | Status |
|---|---|---|
| No check that student is registered to courses | CRITICAL | Known, escalated to Sa'al (CIO) for prioritization |
| Research year doesn't auto-populate | Medium | Manual workaround |
| Researcher name not editable after send | Low | Won't fix in v1 |
| Annual sum doesn't include cancelled-after-partial-payment | Medium | Add a column — TBD |
| **Information security: users can SEE all university scholarships** | HIGH | Raised by Zehavit ~end; pending action by Roni Solomon / As'ad |
| "תחילת שנה" wording is misleading (you can enter any month) | Low | Known |

### 7.10 Required setup for scholarship enterers
**MUST do** before first scholarship: set **delivery location** in procurement preferences (משימות נוספות → עדכון העדפות דרישות רכש). Without this, can't proceed. Source: `08` Michal ~59:50.

### 7.11 Validation behavior
- Insufficient budget → system blocks creating the requisition → error message displayed.
- Validation on funding source ↔ project type at save.
- NO validation on student status (the bug).

### 7.12 Payment timing summary
- Vouchers (חשבוניות) generated: first 2 months immediately at order approval, then one per month going forward.
- Payment **only on the 1st of each month** (no 15th option, scholarships are NOT supplier payments). Source: `08` Hava+Shay ~43:35.
- Late payments produce lump sum on first available 1st.

### 7.13 Contact map
- **Shay Meler** (תקשוב) — primary lead.
- **Ronit Rotman** — project liaison, custom-search help.
- **Michal Kalman** — procurement-side questions (the requisition created behind the scholarship).
- **Sa'al** (סמנכ"ל מחשוב / CIO) — bug prioritization escalation.
- **Roni Solomon** & **As'ad** & **Yigal Yaniv** & **Yossi Klipa** — IT bugs / info security.
- **Permissions email**: "הרשאות עננת" (address shared in chat).

---

## Cross-Cutting Patterns the Agent Should Know

### Common questions audiences asked across multiple lectures
- "Where did the urgent flag go?" — gone, use comments + email/phone.
- "Why did the expense module disappear?" — it moved out of procurement to its own module; some users hadn't been migrated to it.
- "Will my Brnet history migrate?" — only requisitions that became orders; ~1-2 years; unpaid invoices migrate.
- "What about students who aren't employees?" — no solution; workaround via researcher's Bit transfer + reimbursement.
- "What about non-BIU foreign visitors?" — define them as vendors and use Foreign Bank Transfer Without Import smart form.
- "Multi-researcher article fee?" — open separate requisitions (or one requisition + budget transfers afterward).
- "Annual subscription auto-renewal?" — not supported, file new requisition each year.
- "Where's the Brnet 'הזמנה ללא פס' state?" — gone. If there's an order number, it's been approved.

### Recurrent guidance the trainers emphasized
- **Email "ananet-bedikot"** for any access/permission/process issue — Yelena routes.
- **Practice in DEV2** before go-live — environment opens Monday before launch.
- **Remember the deadlines**: Mar 12 for everything except imports (Mar 12 in lecture 01 → reused in 03/04/05/06/08).
- **Send everything before shutdown** — late entries can't be retroactively pre-dated.
- **Approvers are based on the מבקש field** — set this correctly to the actual end-user, not yourself.
- **Categories matter** — wrong category = wrong buyer = delays.
- **Attach the quote at HEADER level** — not row level — for procurement to see it.
- **Use search + save** to build personal workspaces; ניהול דרישות supports custom saved searches.
- **Use delegation for vacations** ("חוק חופשה" for researchers; "ניהול נציגים" in expenses module).

### Differences in tone across lectures
- Lecture 03 (catalog/local): Yelena & Michal patient, audience curious, 200 attendees, lots of UI questions.
- Lecture 04 (credit/transfer): Jeremy more authoritative, sets policy live, Shay Shoval contributes import expertise; high information density, 84 minutes.
- Lecture 05 (hazmat): Dudi the domain expert, calm, lab managers raised serious permission issues, ended with permission triage.
- Lecture 06 (expenses): contentious — process gaps for non-employees and unbudgeted users had no answer; Channah's closing praise softened it.
- Lecture 08 (scholarships): Shay shows live, audience attentive, Ronit defended decisions on form removal and provided multiple offers of personal help.

---

## How to Use This Document (for the agent)

When citing in answers, use the format: **"In lecture 05 (Hazmat, Apr 15), Dudi Raviv at ~27:46 explained that..."**, including the file name when helpful: `05-2026-04-15-עננט-הדרכה-מס-5--רכש-חומרים-מסוכנים.md`.

For UI walk-throughs, prefer the trainer's exact path: home → procurement → requisitions → additional tasks → enter requisition row.

For policy questions, attribute to the policy speaker (Jeremy, Ronit, Aviram) rather than the demo trainer (Yelena).

When a user asks about something the trainers explicitly said is broken / not yet built / will be added later, name it as such — do not pretend it works.

When trainers gave conflicting answers on the spot (and they did, multiple times), surface that the answer is unsettled and recommend emailing `ananet-bedikot`.
