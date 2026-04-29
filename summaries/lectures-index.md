# Lecture Index - Topic → File → Timestamp Map
## Quick navigation for the ananet-expert agent

**How to use this file**: When a user asks about a specific topic, find it here, open the exact lecture file, and jump to the timestamp. Use `Grep` tool with the speaker's name or key phrase to locate exact context.

---

## File Paths (absolute, Windows)

| ID | File | Date | Topic |
|----|------|------|-------|
| L1 | `C:/Users/user/Desktop/projects/ananet/timeless-lectures/01-2026-02-05-meeting-of-preparation-for-ananet.md` | 2026-02-05 | Kickoff / preparation meeting |
| L3 | `C:/Users/user/Desktop/projects/ananet/timeless-lectures/03-2026-04-13-עננט-הדרכה-מס-8--רכש-מקומי,-רכש-מחירון-ורכש-מהמלאי.md` | 2026-04-13 | Local purchase, catalog, inventory |
| L4 | `C:/Users/user/Desktop/projects/ananet/timeless-lectures/04-2026-04-14-עננט-הדרכה-מס-10--רכש-בכרטיס-אשראי-ורכש-באמצעות-העברה-בנקאית.md` | 2026-04-14 | Credit card, bank transfer |
| L5 | `C:/Users/user/Desktop/projects/ananet/timeless-lectures/05-2026-04-15-עננט-הדרכה-מס-5--רכש-חומרים-מסוכנים.md` | 2026-04-15 | Hazardous materials |
| L6 | `C:/Users/user/Desktop/projects/ananet/timeless-lectures/06-2026-04-16-עננט--הדרכה-מס-7---החזר-הוצאות.md` | 2026-04-16 | Expense reimbursement |
| L7 | `C:/Users/user/Desktop/projects/ananet/timeless-lectures/07-2026-04-19-עננט-הדרכות-ודגשים-תפעול-עלייה-לאוויר.md` | 2026-04-19 | Operations team pre-launch briefing |
| L8 | `C:/Users/user/Desktop/projects/ananet/timeless-lectures/08-2026-04-16-עננט-הדרכה-מס-4--מלגות.md` | 2026-04-16 | Scholarships |

Each file has timestamps in format `[HH:MM:SS]` on every line.

---

## Topic → Lecture Map

### Timeline / Shutdown / Go-Live
- **Feb 10** import deadline: **L1** Assael ~25:00, Jeremy ~41:30
- **Mar 12** all other requisitions deadline: **L1** Assael ~25:53
- **Mar 19** Brnet shutdown: **L1** Assael ~23:30
- **Apr 26** Ananet go-live: **L1** Assael ~26:42
- **Exception committee** (CEO chairs): **L1** Zohar ~13:01

### Authentication & Access
- **SSO login flow** (בר-אילן שלי → אתר הדרכה): **L3** Yelena ~7:00, **L5** Tamar+Chaim ~38:14, **L8** Shay ~2:22
- **Cannot login as someone else**: **L5** Chaim ~38:35
- **24/7 cloud access** (from home/mobile): **L5** Sivan+Yelena ~45:53
- **Language switching**: **L3** Yelena ~9:24-12:08

### Universal UI Patterns
- **Test Validation** (up to 10 minutes): **L3** Chaim ~52:09-56:11, **L5** Yelena ~16:09
- **The confusing "סיום" button**: **L3** Chaim ~91:25
- **Wildcard search %**: **L3** Michal ~31:00, **L5** Yelena ~8:20
- **Budget split / פיצול**: **L3** Michal ~80:00
- **Duplicate (שכפל)**: **L5** Chaim ~35:24
- **Budget balance check**: **L3** Chaim+Gabriella ~57:00
- **Bell for notifications** (no on-screen errors): **L3** Chaim ~57:14

### Permissions & Delegation
- **Requesters reduced per dept**: **L1** Assael ~34:50
- **"חוק חופשה" delegation**: **L5** Chaim ~38:35
- **Migrated permissions from Brnet**: **L1** Assael ~30:00-39:00

### Local Purchase (רכש מקומי)
- **Full walkthrough**: **L3** entire lecture (1239 lines)
- **Yelena + Michal + Chaim** speakers

### Catalog Purchase (רכש מחירון)
- **Covered in L3** (same lecture)
- **Search bar replaces old shop**: see naming diff

### Inventory Purchase (רכש מלאי)
- **L3** (same lecture)

### Credit Card (כרטיס אשראי ללא ייבוא)
- **L4** entire lecture
- **$1500 credit limit**: **L4** Jeremy+Shay
- **$750 article fee threshold**: **L4** Jeremy+Shay
- **Multi-researcher article splits**: **L4**
- **Smart forms**: **L4**
- **Vendor-must-exist rule**: **L4**

### Foreign Bank Transfer (העברה בנקאית לחו"ל ללא ייבוא)
- **L4** (same lecture as credit card)

### Hazmat (חומרים מסוכנים)
- **L5** entire lecture (436 lines)
- **Item-code revolution** (per-size מק"ט): **L5** Dudi ~27:46
- **Lab secret codes**: **L5** Dudi
- **Two-layer authorization**: **L5** Hagit
- **Animal-order ethics gap** (field doesn't exist yet): **L5** + **L3** Shimon Tinman raised twice

### Expense Reimbursement (החזר הוצאות)
- **L6** entire lecture (1276 lines)
- **Self-service module**: **L6** Aviram
- **3 templates** (Research/Projects/Department): **L6**
- **BIU employees only** (no students/externals): **L6** — unsolved at go-live
- **Delegation**: **L6**
- **Foreign currency override**: **L6**

### Scholarships (מלגות)
- **L8** entire lecture (1876 lines)
- **Speakers**: Shay Meler, Ronit Rotman
- **New Oct-Sep year**: **L8**
- **Payment shifted one month forward** (Oct scholarship pays Nov 1): **L8** — most error-prone change
- **Cancellation logic**: **L8**
- **6 documented bugs** acknowledged by trainers: **L8**
- **Critical info-security bug**: users see all university scholarships: **L8** — not fixed at go-live
- **Migration**: existing scholarships migrate automatically: **L1** Arnon ~54:00

### Budget Management
- **No transfers between units during shutdown**: **L1** Arnon ~52:34
- **March scholarship paid early, April on May 1**: **L1** Arnon ~54:00

### Support Channels
- **ananet-bedikot mailing list**: **L5** Yelena ~41:02
- **Yelena Turchik** = central training coordinator: all lectures
- **DEV2 practice opens Mon before go-live**: **L6** Aviram ~end, **L8** Shay ~57:00

### Migration Specifics
- **Only Brnet requisitions that became orders migrate** (1-2 years): **L3** Chaim ~55:17-56:30
- **Standalone requisitions do NOT migrate**: **L3** Chaim
- **Vendors with unpaid invoices migrate**: **L3** Chaim
- **New vendors must be opened BEFORE shutdown**: **L1** Jeremy

### Frame Orders (הזמנת מסגרת)
- **Prepare before shutdown with max amount**: **L1** Jeremy ~49:28
- **Unused amount returns afterward**: **L1** Jeremy

### Operations Team Pre-Launch Briefing (Apr 19, day-of)
- **Modular structure** (3.5h, attend only your slot): **L7** Jeremy ~07:47
- **No back/forward browser buttons** (kicks you out): **L7** Karin ~14:30, Karin ~57:21
- **Three purchase paths recap** (catalog / quote / smart-form): **L7** Jeremy ~10:14
- **Bus rule — one bus per requisition**: **L7** Karin ~18:04
- **Mobile phone is mandatory in transport requisitions**: **L7** Karin ~18:37
- **Catalog purchase needs no quote attached**: **L7** Karin ~19:33
- **Header description = pulled from first cart line, change it**: **L7** Ofer Wolf ~32:40
- **One supplier per requisition** (system rejects mixed): **L7** Karin ~21:25
- **Quote MUST be attached at header level (not row)**: **L7** Ofer Wolf ~33:16
- **Item description must match supplier's quote (text edit triggers Test Validation)**: **L7** Karin ~54:00, Hagit ~01:31:40
- **Number prefixes for orders/requisitions** (1=migrated Brnet, 4=new Ananet orders, 2=new Ananet requisitions, 7 digits): **L7** Jeremy ~49:25, Karin ~48:33
- **Only paid-down quantities migrate** (e.g. 9 ordered, 7 paid → only 2 in Ananet): **L7** Jeremy ~48:09
- **Brnet requisitions did NOT migrate at all** (only orders): **L7** Jeremy ~47:50, Karin ~52:53
- **Frame requisition (דרישת מסגרת) for hourly/progressive billing**: **L7** Karin ~24:00
- **Currency mixing forbidden in one requisition**: **L7** Karin ~40:06
- **Amount entered is WITHOUT VAT**: **L7** Karin ~41:46
- **Order copy emailed to requester at approval**: **L7** Karin ~56:22
- **Bot AI in development for categories + מק"טים**: **L7** Jeremy ~43:51, Karin ~43:35
- **Pivot users in each unit for first-line support**: **L7** Jeremy ~42:33

#### L7 — Foreign Purchase (Shay Shoval ~01:00:01-01:23:00)
- **Buyers will NOT fix requisitions anymore — burden is on requester**: **L7** Shay ~01:00:53
- **Item description must be in English + identical to quote**: **L7** Shay ~01:04:43
- **Logistics-loading rows entered by requester per buyer instructions**: **L7** Shay ~01:02:51
- **Attribute Value (ערך תכונה) routes to ייבוא / ייצוא / חומ"ס / אחר**: **L7** Shay ~01:08:34
- **Import requisition mandatory fields**: vendor/cooperator email + cooling Y/N: **L7** Shay ~01:09:36
- **Export requisition mandatory fields**: email + cooling + who pays + dimensions (cm) + weight (kg): **L7** Shay ~01:10:37-01:11:36
- **Quotes-by-amount thresholds** (≤20K=1; ≤60K=2; ≤100K=3; >100K=tender committee): **L7** Shay ~01:14:58
- **Foreign software with NO shipment → smart form**, with shipment → foreign-purchase: **L7** Shay ~01:18:45, Jeremy ~01:19:32
- **Amazon/eBay/AliExpress/Temu** routed via credit-card smart-form even if shipment: **L7** Jeremy ~01:20:01
- **Disk-on-key shipment goes through ייבוא**, not credit-card form: **L7** Shay ~01:19:24
- **Service-only payments (DropBox renewal etc.) → smart-form**: **L7** Jeremy ~01:22:28
- **One requisition row per quote line** (e.g. 30 lines on quote = 30 rows): **L7** Shay ~01:21:58
- **General vendor as fallback** if you don't know which one: **L7** Shay ~01:11:53
- **Bell is the source of truth for rejections**: **L7** Shay ~01:16:28
- **FedEx-only for outbound shipments** (not BIU campus mail): **L7** Shay ~01:18:27

#### L7 — Hazmat (Hagit Kun ~01:30:25-01:48:00)
- **Categories / chemical name / CAS unchanged from Brnet**: **L7** Hagit ~01:31:06
- **Container size added per מק"ט (BIG change)**: **L7** Hagit ~01:31:10
- **Search by CAS in description ("מכיל") returns all sizes**: **L7** Hagit ~01:31:30
- **Lab code = personal, mailed individually after stock count, NEW format**: **L7** Hagit ~01:34:25, ~01:40:37
- **Risk-acknowledgment must be read BEFORE checking yes**: **L7** Hagit ~01:33:00
- **Lab Reporting Screen** (new) — declare consumed / received-as-gift items: **L7** Hagit ~01:37:30
- **Negative-inventory dispatch is system-blocked**: **L7** Hagit ~01:43:25
- **Permit overruns auto-notify safety unit**: **L7** Hagit ~01:43:25
- **All chemicals are hazmat in Ananet — even DDW40 / water**: **L7** Hagit ~01:41:44
- **BIRD purchases**: pick BIRD as vendor, "either qty 1 / amount 1 ₪ / 0" — quantity matters most: **L7** Hagit + Ofer Wolf ~01:46:21-01:47:30
- **Hagit's contact**: hazmat@biu.ac.il (unchanged from Brnet): **L7** Hagit ~01:45:44
- **Buffers/inhibitors get individual names; weight not always required (yiunit)**: **L7** Hagit ~01:35:59
- **Receipt does NOT auto-decrement lab stock — Lab Reporting Screen required**: **L7** Hagit ~01:49:34

#### L7 — Central Warehouse (Lior + Dror Sasson ~01:59:36-02:15:30)
- **Source Type MUST be "מלאי" (not external supplier) — else doesn't route to warehouse**: **L7** Yair ~02:02:04
- **Source Warehouse field MUST say "מחסן כללי"** (renamed from "המחסן המרכזי"): **L7** Yair ~02:02:13, ~02:14:35
- **NEVER mark "תשומה" for warehouse items** — no warehouse item is תשומה: **L7** Yair ~02:02:32, ~02:07:34
- **Attribute Value (ערך תכונה) = "אחר"** for all warehouse requisitions: **L7** Yair ~02:02:53
- **NO catalog (חנות) for warehouse — only by item code**: **L7** Yair ~02:10:00
- **Item code starting with "Y" = inventory item**: **L7** Yair ~02:13:08
- **Mandatory delivery details**: building #, floor, room, mobile: **L7** Yair ~02:14:48
- **Category field is read-only when warehouse item picked**: **L7** Yair ~02:11:55
- **Warehouse item codes catalog will be emailed to all users**: **L7** Yair ~02:11:31
- **Distinction**: same lab tubes from external vendor = תשומה; from warehouse = NOT תשומה: **L7** Ofer Wolf ~02:07:42
- **Order numbers from inventory differ from external supplier orders**: **L7** Jeremy ~02:11:20

### NEW Operational Rules introduced/clarified in L7
- **No back/forward browser buttons** — system kicks you out (Karin emphasized twice)
- **Test Validation auto-rejects** — back-and-forth via bell, NOT live Brnet-style chat with buyers
- **Fixing rejected requisition**: open → Actions → Edit → fix → resubmit (no need to recreate)
- **Buyer (קניין) is hidden until order is approved**: **L7** Jeremy ~02:01:43
- **Requisition number = ongoing reference** with foreign vendors — don't cancel + recreate, edit existing: **L7** Shay ~01:21:00

---

## People Reference

### Trainers
- **Assael Movshovitz** (אגף תקשוב, project manager) — L1 main presenter
- **Zohar Yinon** (CEO/סמנכ"ל) — L1 strategic context
- **Yelena Turchik** (תקשוב) — central training coordinator, L3/L5/L6/L8
- **Michal Kalman** (procurement) — L3 local purchase expert
- **Chaim Yosefi** (procurement) — L3/L5 nuance expert
- **Jeremy Regenstreif** (procurement) — L1/L4 imports, credit card
- **Arnon Zait** (finance) — L1 scholarships/budgets
- **Ronit** (research authority) — L1 closing remarks, L8 scholarships
- **Dudi Raviv** (safety unit) — L5 hazmat
- **Hagit Kun** (safety) — L5 hazmat authorization
- **Aviram Bar-Shalome** — L6 expense reimbursement
- **Shay Meler, Ronit Rotman** — L8 scholarships
- **Shay Shoval** — L4 credit card, L7 foreign purchase head (ראש מדור רכש חו"ל)
- **Tamar** — L5
- **Liat Daniel** — L3
- **Ofer Shragay** (סמנכ"ל תפעול / VP Operations) — L7 opener and closer
- **Karin Katzir** (procurement, local) — L7 catalog/local lead
- **Ofer Wolf** (procurement) — L7 local/quote walkthrough, BIRD clarification
- **Hagit Kun** (safety / hazmat domain) — L7 hazmat live demo (with Kobi Biton)
- **Kobi Biton** (safety) — L7 hazmat co-host
- **Lior Sasson + Dror Sasson** ("Yair" speaker tag in transcript = Sasson brothers, logistics/warehouse) — L7 central warehouse
- **Niram** (technical session manager) — L7 tech ops

### L7 Audience Questioners (named)
- **Avi Pa'er** — asked at start where lecture materials/recordings are: **L7** ~06:39
- **Diana** — currency-mixing question: **L7** ~40:06
- **Ohad** — multiple questions including rejected-by-description-mismatch, image-of-warehouse-item: **L7** ~54:00, ~02:13:00
- **Hannah** — asked where the booklet is: **L7** ~01:25:19
- **Shimon** — questions on logistics-loading process and fixing existing requisitions: **L7** ~01:17:47, ~01:20:30
- **Galit Zahav** — warehouse vs external-supplier confusion, "why isn't this a catalog shop?": **L7** ~02:10:00
- **Galin** — currency-related (referenced by Karin) — note: appears as "גלין" likely Yelena: **L7** ~29:40

### Audience Questioners (named)
- **Shimon Tinman** — raised animal-order ethics gap in L3 and L5
- **Sivan** — asked about 24/7 access in L5
- **Gabriella** — L3 budget balance question

---

## How the Agent Should Use This

When a user asks about a specific topic:

1. **Look up the topic here** → get L-number and timestamp
2. **Open the right file** via `Read` tool with `offset` parameter near the timestamp line
3. **Or Grep** for the speaker's name / key phrase:
   ```
   Grep pattern="חיים|Chaim.*סיום" path="C:/Users/user/Desktop/projects/ananet/timeless-lectures/"
   ```
4. **Cite the source** in the answer:
   > "לפי הדרכה 5 של עננט (15.4.26), חיים יוספי הסביר בדקה 91:25 ש..."

If something isn't here but the user insists it was said: search with Grep first, then fall back to the original transcripts.

If lecture 9 (הסעים) comes up — it FAILED/SCHEDULED in Timeless, no transcript available. Tell the user honestly and suggest checking PDFs or contacting Yelena Turchik. (The Apr 19 operations lecture is now L7, fully transcribed.)


---

## Auto-added Lectures (newer than initial 6)

- **2026-02-05** — מערכת "עננט" - מפגש היערכות
  - File: `AUTO-2026-02-05-מערכת-עננט---מפגש-היערכות.md`
  - Lines: 344
- **2026-04-13** — עננט הדרכה מס 8: רכש מקומי, רכש מחירון ורכש מהמלאי
  - File: `AUTO-2026-04-13-עננט-הדרכה-מס-8-רכש-מקומי,-רכש-מחירון-ורכש-מהמלאי.md`
  - Lines: 1239
- **2026-04-14** — עננט הדרכה מס 10: רכש בכרטיס אשראי ורכש באמצעות העברה בנקאית
  - File: `AUTO-2026-04-14-עננט-הדרכה-מס-10-רכש-בכרטיס-אשראי-ורכש-באמצעות-העברה-בנקאית.md`
  - Lines: 954
- **2026-04-15** — עננט הדרכה מס 5: רכש חומרים מסוכנים
  - File: `AUTO-2026-04-15-עננט-הדרכה-מס-5-רכש-חומרים-מסוכנים.md`
  - Lines: 436
- **2026-04-16** — עננט: הדרכה מס 7 - החזר הוצאות
  - File: `AUTO-2026-04-16-עננט-הדרכה-מס-7---החזר-הוצאות.md`
  - Lines: 1276
- **2026-04-19** — עננט - הדרכות ודגשים של אגף התפעול לקראת עלייה לאוויר
  - File: `AUTO-2026-04-19-עננט---הדרכות-ודגשים-של-אגף-התפעול-לקראת-עלייה-לאוויר.md`
  - Lines: 718
- **2026-04-16** — עננט הדרכה מס 4: מלגות
  - File: `AUTO-2026-04-16-עננט-הדרכה-מס-4-מלגות.md`
  - Lines: 1876
