# Research Authority Guides - Comprehensive Summary

**Date Generated:** 2026-03-26
**Source System:** Oracle Cloud ERP (Ananet / עננט)
**Organization:** Bar-Ilan University (BIU) - Research Authority (רשות המחקר)

---

## Table of Contents

1. [Document 1: Research Authority Budgets User Guide](#document-1-research-authority-budgets-user-guide)
2. [Document 2: Researcher Report - Budgets](#document-2-researcher-report---budgets)
3. [Document 3: Hazardous Materials (CHOM"S)](#document-3-hazardous-materials-choms)
4. [Document 4: Purchase Orders v5](#document-4-purchase-orders-v5)
5. [Document 5: Researcher Report (Updated) - DOCX](#document-5-researcher-report-updated---docx)
6. [Document 6: Pre-Research (Updated) - DOCX](#document-6-pre-research-updated---docx)
7. [Hebrew Terminology Glossary](#hebrew-terminology-glossary)

---

## Document 1: Research Authority Budgets User Guide

**File:** `מדריך למשתמש - רשות מחקר תקציבים.pdf`
**Pages:** 37
**Purpose:** End-to-end guide for Research Authority budget staff on grant budgeting, project creation, journal entries, and invoicing in Oracle Cloud ERP.

### Overview / Flow

The Budgets department (תקציבים) is the continuation unit of the Pre-Research department (קדם מחקר). After a grant is approved in Pre-Research, the subsequent handling -- grant budgeting, project creation, and project budgeting -- passes to the Budgets department.

**High-level flow:**
1. Complete grant definitions (השלמת הגדרות מענק)
2. Grant budgeting (תקצוב מענק)
3. Create new project (יצירת פרויקט חדש)
4. Enter funding sources for project (הזנת מקורות מימון לפרויקט)
5. Budget the project (תקצוב הפרויקט)
6. Data entry validation (בקרת הזנת נתונים)
7. General ledger / journal entries (ספר ראשי - הזנת פקודות יומן)
8. Manage existing journal entries (ניהול פקודות יומן קיימות)
9. Create customer invoice (יצירת חשבונית ללקוח)
10. Locate existing invoice (איתור חשבונית קיימת)

### Chapter 2: Grant Budgeting (תקצוב מענק)

When a grant status changes to 007 (approved grant / מענק מאושר), an alert is received at the Research Authority and the grant needs to be budgeted.

#### 2.1 Completing Grant Definitions (השלמת הגדרות מענק)

**Step-by-step:**
1. Navigate: Module icon > click through to Grant Management (ניהול מענקים) screen
2. Click on the project name (שם הפרויקט) to open it
3. The "Edit Grant Details" (עריכת פרטי מענק) screen opens
4. Click on the relevant area in the screen
5. Fill in missing fields

**Notes:**
- You can search for grants in the Grant Management screen by name or grant number
- Most fields come pre-filled from the Pre-Research department
- Fields marked with asterisk (*) are mandatory

#### 2.2 Editing Grant Period (עריכת תקופת מענק)

**Step-by-step:**
1. In the "Edit Grant Details" screen, click on the relevant area
2. The "Edit Budget Periods" (ערוך תקופות תקציביות) screen opens

**Key fields:**
| Field | Notes |
|-------|-------|
| Period name | Must be numbered sequentially: 01, 02, 03 |
| Extended authority (רשות מורחבת) | Default checked -- allows entering budget exceeding a single year but not total framework |

**Important warnings:**
- Fields with asterisk are mandatory
- If combinations were opened and budget/execution created for a period, that period cannot be blocked or edited

#### 2.3 Adding Internal Funding Source (הוספת מקור מימון פנימי)

1. In the Funding Sources (מקורות מימון) area, mark the checkbox
2. Click add button
3. An internal funding sources row opens
4. Select the internal funding source name from the list

#### 2.4 Adding Team Member (הוספת איש צוות)

1. Click add button -- Team Member (איש צוות) screen opens
2. Click add to add a new row
3. Click on search -- "Search and Select: Person" screen opens
4. Enter name or email
5. Click search
6. At the end, click save

**Notes:**
- In fields with double asterisks (**), at least one must be filled
- In the Role field (תפקיד), multiple team members can be selected, but "Principal Investigator" (חוקר ראשי) is an exclusive role

### Chapter 3: Creating a New Project (יצירת פרויקט חדש)

**Step-by-step:**
1. Navigate to the module
2. Click on desired project name or search by name/number
3. Click to proceed
4. The "Manage Grant Projects" (ניהול פרויקטי מענקים) screen opens
5. Click create
6. "Create and Associate Project from Template" (צור ושייך פרויקט מתבנית) screen opens
7. Select the default template (only option available)

**Required fields:**

| Field | Notes | Required |
|-------|-------|----------|
| Project Name (שם פרויקט) | Enter project name | Yes |
| Project Number (מספר פרויקט) | Auto-generated, starts with budget type value (e.g., type 20 starts with 2), each project gets a unique 6-digit number | Yes |
| Project Description (תיאור פרויקט) | Enter description | No |
| Project Start Date | Auto-filled from grant start date | Yes |
| Project End Date | Auto-filled from grant end date | No |
| Project Organization (ארגון פרויקט) | Auto-filled | Yes |
| Project Manager (מנהל פרויקט) | Auto-filled from principal investigator, but can be changed | Yes |
| Funding Source (מקור מימון) | Auto-appears from grant data, can be changed | No |

**Additional Info fields (creates accounting combinations):**

| Field | Notes | Required |
|-------|-------|----------|
| Legal Entity (ישות משפטית) | Only choice: Bar-Ilan University | Yes |
| Budget Type (סוג תקציב) | Only choice: 20 | Yes |
| Organizational Unit (יחידה ארגונית) | Select unit; wrong choice requires creating new project | Yes |
| Control Type (סוג בקרה) | 1 = regular budget control by initial amount; 2 = closed economy -- no initial budget, control by income | Yes |
| Overhead Code (קוד תקורה) | If applicable | No |
| Overhead Percentage (אחוז תקורה) | If applicable | No |
| Deploy Current Year Only (לפרוס שנה נוכחית בלבד) | Default blank; select "No" to deploy full budget for future years | No |

### Chapter 4: Entering Funding Sources for Project (הזנת מקורות מימון לפרויקט)

**Step-by-step:**
1. Navigate to the module
2. Select project
3. The "Manage Grant Funding" (ניהול מימון מענק) screen opens
4. Click create -- "Add Funding" (הוסף מימון) screen opens

**Key fields:**

| Field | Notes | Required |
|-------|-------|----------|
| Budget Period (תקופות תקציב) | Select period 01 first, complete all funding sources, then move to period 02 | Yes |
| Funding Source (מקור מימון) | Select funder; if multiple, fill first funder then repeat for others | Yes |
| Number | Enter sequential number | Yes |
| Date | Select date | Yes |
| Description | **Important:** In period 01, enter "Y" to create combinations for first budget year only; enter "N" for other periods to avoid creating unnecessary combinations | Yes |
| Direct Funding Amount (סכום מימון ישיר) | Enter funder amount; if grant has multiple projects, add each project manually | Yes |
| Indirect Funding Amount (סכום מימון עקיף) | Enter indirect amount | No |

### Chapter 5: Project Budgeting (תקצוב הפרויקט)

**Step-by-step:**
1. Navigate to the module
2. Select project
3. Click on budget management
4. Select project and click proceed
5. "Manage Budget Versions" (ניהול גרסאות תקציב) screen opens
6. Click arrow on create button
7. "Create Budget: Planning Option" (יצירת תקציב: אפשרות תכנון) screen opens
8. Select planning amounts in RESEARCH_AUT_PLAN_TYPE (default selection)
9. Click next -- "Edit Budget: Version 1" (עריכת תקציב: גרסה 1) screen opens
10. Stand on a row and click expand at the top of the table
11. A row with all expense items opens
12. Select relevant expense item for project budgeting
13. Click expand for more fields
14. Click on button -- "Alternative Info" (מידע חליפי) screen opens for giving alternative display names to expense items
15. Enter budget amounts in "Raw Cost" (עלות גולמית) for each project year
16. Click add to add more resource lines (additional expense items)
17. Add a revenue item but budget it at zero
18. Click submit at end

**Important notes:**
- Under each project, Tasks are opened, and under each Task, resources (budget items) are created
- Attachments can be added at the budget level
- When submitting, the budget version goes for approval per organizational settings
- First budget entry creates version 1 (original budget); after approval, version 2 is created for budget updates
- **No budget control in this screen** -- reducing budget when full amount was utilized will not trigger an error

### Chapter 6: Data Entry Validation (בקרת הזנת נתונים)

**Step-by-step:**
1. Navigate to the module, select project
2. "Check Grant" (בדוק מענק) screen opens
3. Upper section shows: budget status, total funding amount (grant size), budgeted amount, and unbudgeted amount
4. Click check -- "Validation Results" area opens
5. Verify zero errors and warnings
6. Click finish

**Critical outcomes:**
- If all data entered correctly, the contract and grant become active and operational
- System creates project number, combinations, and budget version
- Budget transfers to general ledger -- no special approval required
- Approval needed only for project budget activation

### Chapter 7: General Ledger - Journal Entries (ספר ראשי - הזנת פקודות יומן)

The Research Authority performs manual journal entries for execution and budget reservations. A flexible field was built for reservations. After creating a journal entry, budget control is performed.

**Step-by-step:**
1. Navigate to journal entry module
2. Click create -- "Create Journal Entry" screen opens
3. Fill batch fields:

| Field | Notes | Required |
|-------|-------|----------|
| Journal Entry Batch (אצוות פקודות יומן) | Enter batch name (may contain multiple entries) | No |
| Description | Enter description | No |
| Balance Type (סוג יתרה) | Choose between "Actual" (בפועל) and "Budget Reservation" (שריון התקציב) | Yes |
| Accounting Period (תקופה חשבונאית) | Select any open period | Yes |
| Attachments | Click to attach documents | No |

4. Fill journal entry fields:

| Field | Notes | Required |
|-------|-------|----------|
| Journal Entry (פקודות יומן) | Enter name identical to batch name | No |
| Description | Enter description | No |
| Currency (מטבע) | Default NIS; for foreign currency, "Exchange Rate Type" field opens -- select "Spot" | No |
| Ledger (ספר חשבונות) | Auto-filled by currency | Yes |
| Accounting Date | Auto-filled with current date | Yes |
| Category (קטגוריה) | Select "Transfer" (העברה) -- transferring one budget item to another as part of execution | Yes |

5. Fill journal lines
6. Click account button -- Account screen opens
7. Enter project number in Project field
8. "Show Segments" screen opens -- select required combination
9. Enter amount manually in journal line
10. Repeat for credit side
11. Click save, then click post

**Budget control:**
13. Click "Check Budget Balance" button
14. Status shows balance after journal entry posting
15. Click to view budget snapshot after posting
16. Select budget in the Display field

### Chapter 8: Managing Existing Journal Entries (ניהול פקודות יומן קיימות)

After posting journal entries, you can return to an existing entry to check: approval status, budget balance status, batch status, or completion status. You can also copy, reverse (storno), or print entries.

**Key operations:**
- **Copy for new entry:** Click duplicate, a new journal creation screen opens with copied data
- **Storno (reversal):** Click reversal, select reversal period and method (choose "Swap Debit and Credit" / החלפת חובה וזכות), click submit
- **Find storno entry:** Navigate to journal management, search, click on the entry

### Chapter 9: Creating Customer Invoice (יצירת חשבונית ללקוח)

**Step-by-step:**
1. Navigate to billing module
2. Click create -- "Create Transaction: Invoice" screen opens
3. Fill fields:

| Field | Notes | Required |
|-------|-------|----------|
| Transaction Classification (סיווג תנועה) | Select Invoice (חשבונית) | Yes |
| Business Unit (יחידה עסקית) | Select BIU RM | Yes |
| Transaction Source (מקור תנועה) | Select Research Authority - Current (רשות המחקר - שוטף) | Yes |
| Transaction Type (סוג התנועה) | Select Research Authority (רשות המחקר) | Yes |
| Transaction Date (תאריך התנועה) | Enter invoice date | Yes |
| Accounting Date | Enter accounting registration date | Yes |
| Bill-to Name (שם לחיוב) | Enter customer name | Yes |

4. In General Information area, click next:

| Field | Notes | Required |
|-------|-------|----------|
| Context Value (ערך הקשרי) | Select Research Authority account | Yes |
| Account Period (תקופת חשבון) | Enter account period | No |
| Account Details (פרטי חשבון) | Enter free text for identification | No |

5. Invoice lines:

| Field | Notes | Required |
|-------|-------|----------|
| Item (פריט) | Enter item | No |
| Description (תיאור) | Enter invoice description | Yes |
| Message Line (שורת הודעה) | Enter message | No |
| Unit of Measure (יח' מידה) | Enter units | No |
| Quantity (כמות) | Enter quantity | Yes |
| Unit Price (מחיר יחידה) | Enter unit price | Yes |
| Amount (סכום) | Auto-calculated from quantity x unit price | Yes |
| Details (פרטים) | Select revenue account combination per line | Yes |

6. Click save, verify note appears
7. Click approve -- Approval screen opens
8. Click confirm -- Accounting Lines screen shows combinations
9. Click preview for invoice preview before issuance
10. Click issue to produce the invoice
11. PDF version appears in attachments after a few minutes

**Important:** Each invoice line gets its own combination via the Details button.

### Chapter 10: Locating Existing Invoice (איתור חשבונית קיימת)

1. Navigate to billing module
2. Click manage -- "Manage Transactions" (ניהול תנועות) screen opens
3. Search by: transaction source, transaction number, transaction date, or bill-to customer
4. Click on transaction number to open existing invoice
5. Update fields as needed
6. Click save
7. After status updates to "Completed," click complete
8. Invoice can be opened in PDF format (appears in attachments after a few minutes)
9. Duplicate functionality available via the duplicate button

---

## Document 2: Researcher Report - Budgets

**File:** `מדריך משתמש - הדוח לחוקר תקציבים.pdf`
**Pages:** 8
**Purpose:** Guide for Research Authority staff to view researcher-specific budget reports showing research projects, budget vs. actual data, and detailed transaction history.

### Researcher List Report (רשימת חוקרים)

**Intended audience:** Research Authority staff (עובדי רשות מחקר)

**Step-by-step:**
1. Click the designated button to open the Researchers List (רשימת החוקרים) screen
2. Enter researcher name in the search field (select from dropdown list)
3. Click search -- results screen opens
4. Click on the ID number in the "Identity Card" (תעודת זהות) column
5. A screen with all research projects for this researcher opens

**Screen overview notes:**
- This is a summary of research projects showing: research number per project, budget year
- Column for accessing all supplementary reports
- Column for accessing research ledger (detailed reports per research)
- The researcher report is a general report open to the research department, but restricted per individual researcher

### General Information Screen (מידע כללי)

6. Click on the column to open General Information screen with research settings
7. Scroll to bottom -- Budget Summary vs. Actual (סיכום תקציב מול ביצוע) appears

**Budget terminology:**
| Term | Hebrew | Meaning |
|------|--------|---------|
| Source Budget | תקציב מקור | Original budget per item |
| Controlled Budget | תקציב מבוקר | Current budget after modifications to original |
| Actual | בפועל | Actual execution/spending |
| Reservation | שריון | Purchase requisitions or orders in the system |
| Budget Balance | יתרת תקציב | Available balance for use |

**Important:** Any blue-colored amount is clickable to drill into transaction details.

### Detailed Drill-Down Screens

**8.1 Budget Screen (תקציבים):**
- Clicking on a controlled budget amount (e.g., in "Consumable Materials and Equipment" / חומרים וציוד אזיל) opens the detailed Budgets screen

**8.2 Budget Reservation Screen (שריון תקציבי):**
- Clicking on a reservation amount shows open reservation transactions only
- When a purchase requisition creates a reservation, it disappears from this report when the requisition becomes a purchase order

**8.3 Purchase Requisition Details (פרטי דרישה לרכש):**
- From the reservation screen, clicking on a number opens purchase requisition details
- Same applies for purchase orders

**9. Actual Expenses Screen (הוצאות בפועל):**
- Clicking on an actual amount opens detailed execution screen
- Shows all transactions from journal entries through salary interfaces
- Includes full chronology of purchase requisition progression
- Budget items shown at bottom of screen

---

## Document 3: Hazardous Materials (CHOM"S)

**File:** `חומרים מסוכנים.pdf`
**Pages:** 23
**Last Updated:** 2025-06-23
**Author:** Noam Weiss (נעם וייס)
**Purpose:** Guide for Safety Department tasks related to hazardous materials management in Ananet, including poison permits, lab quotas, safety training, and inventory management.

### Chapter 1: Introduction (מבוא)

Describes Safety Department tasks in Ananet: updating hazardous material inventory movements in labs, updating campus quantities in poison permits, approving safety training for labs, and more.

### Chapter 2: Poison Permit (היתר רעלים)

Describes the process of updating the total permitted quantity for hazardous materials across campuses (Safed / צפת and Bar-Ilan), per the poison permit from the Ministry of Environmental Protection (המשרד לאיכות הסביבה).

#### 2.1 Process Flow
1. Safety Department submits poison permit request for an item
2. Poison permit received from Ministry of Environmental Protection
3. Safety Department updates quantity in permit for the item in Ananet
4. Safety Department attaches permit copy to the item in Ananet

#### 2.2 Updating Poison Permit Quantity (עדכון כמות היתר רעלים לפריט חומ"ס)

**Step-by-step:**
1. Navigate: Main modules menu > Product Management (ניהול מוצר) > Product Information Management (ניהול מידע על מוצר)
2. Click Tasks > Item Management (ניהול פריטים)
3. In the field next to "Item Management," select items of type **Poison Codes**
4. Search for the hazardous material item
5. Select the appropriate row (SAFED or BIU) -- "Edit Item" screen opens

**WARNING:** Do NOT update quantity in the parent organization BIM.

5. Scroll to **Specifications** (מפרטים) tab > **Planning** (תכנון) menu
6. Update the **Maximum** (מרבי) field under the **Min-Max Quantity** section with the permit amount
7. Click **Save** (שמור) at top of form
8. In the Specifications tab, click on **Poison Codes** menu
9. In the **Amount Allowed Per Year** field -- update the annual requested quantity
10. In the **Amount Allowed** field -- update the maximum approved quantity
11. If the permit contains multiple items, update the **Line in Permit** field
12. Click **Save and Close** (שמור וסגור)
13. Re-search the item in Item Management to verify the update

#### 2.3 Attaching Poison Permit to Item (צירוף היתר רעלים לפריט בעננט)

**Step-by-step:**
1. In the Item Management screen, search for the Poison Codes item
2. Select the appropriate row (SAFED or BIU)
3. Scroll to the **Attachments** (נספחים) tab
4. Click **Choose File** on the left
5. In the dialog, select the permit file from your computer
6. Click **Save and Close**

**Important note:** The "Add Attachments" panel on the left may not always appear, especially when attachments already exist. To make it appear, click **Actions** > **Add Attachment** or use the **+** icon.

### Chapter 3: Hazardous Material Quota per Lab (מכסת פריט חומ"ס למעבדה)

Describes updating the maximum quantity of a hazardous item that the Safety Department allocates to researcher labs. Updates occur when: a new hazardous item is created, a new lab is established, quantities change for an existing lab, or a lab closes.

**Prerequisite:** The lab must already be established and the hazardous material linked to it (as described in the Infrastructure Guide).

#### 3.2 Updating Maximum Quantity per Lab (עדכון כמות מרבית למעבדה)

**Step-by-step:**
1. Click your initials in the top ribbon > **Setup and Maintenance** (הקמה ותחזוקה)
2. In the top menu, select **Manufacturing and Supply Chain Management** (ניהול הייצור ושרשרת הספקת חומרים)
3. Select functional area: **Inventory Management** (ניהול מלאי)
4. Verify the **Display** (הצג) field shows "All Tasks"
5. Scroll and find or search for task: **Manage Warehouses and Locations** (ניהול מחסנים ואיתורים), click on it
6. You may be prompted to select an **Inventory Organization** (ארגון מלאי) -- select and click **OK**
7. **Manage Warehouses** (ניהול מחסנים) screen appears
8. Select the lab/warehouse row and click **Manage Item Warehouses** (ניהול מחסני פריט)

**For a new item (not yet linked to lab):**
- Click **Actions** > **Add** or use the add icon
- In the "Add Item to Warehouse" panel: search and select item; update **Maximum Quantity** (כמות מרבית)
- Click **Save and Close**

**For an existing item (quantity update):**
- Select the item row, click **Actions** > **Edit**
- Update the new quantity in **Maximum Quantity** field
- Click **Save and Close**
- Repeat for all labs/warehouses that need the item

### Chapter 4: Safety Training for Lab (הדרכת בטיחות למעבדה)

**Safety training approval is a prerequisite for ordering hazardous materials.**

Navigation is identical to Chapter 3. In the **Training Required** (דרושה הדרכה) field, select **Yes** or **No**.

**CRITICAL NOTE:**
- **"No"** = lab has completed training or material does not require training
- **"Yes"** = training IS required; purchase requisitions for this material will be **REJECTED**

### Chapter 5: Hazardous Materials Reports (דוחות חומ"ס)

**Status:** Not yet implemented.

### Chapter 6: Hazardous Material Inventory Management in Lab (For Researcher)

**Navigation:** Main modules bar > **Others** (אחרים) > **Lab Reporting Screen**

**Top section fields (fill in exact order):**
- **Lab Name** (שם המעבדה): Select from dropdown
- **Lab Code** (קוד מעבדה): Security code (personal, keep secure)
- **Item** (פריט): Select item for reporting

**Inventory actions:**

| Action | Hebrew | Description |
|--------|--------|-------------|
| Addition | הוספה | Add new stock to inventory |
| Subtraction | החסרה | Deduct after usage |
| Update | עדכון | Correct discrepancy with actual count |

---

## Document 4: Purchase Orders v5

**File:** `הזמנות רכש גרסה 5.pdf`
**Pages:** 136
**Last Updated:** 2025-07-14
**Author:** Noam Weiss (נעם וייס)
**Purpose:** Comprehensive guide for procurement staff (buyers/קניינים) on all types of purchase orders in Ananet.

### Chapter 1: Introduction (מבוא)

The Purchase Orders module follows the Purchase Requisition stage. Some orders are created automatically upon requisition approval; others must be created manually. All POs in BIU are requisition-based and go through approval hierarchies.

### Chapter 2: Purchase Orders - Overview (מבט כללי)

#### 2.1 System Login
1. Open Ananet in browser, connect via SSO
2. Set language to **Hebrew - עברית**, click **Connect**

#### 2.2 Home Page Dashboard

Navigate: Modules > **Procurement** > **Purchase Orders**

**Dashboard tiles (Infolets):**

| Tile | Navigates To | Description |
|------|-------------|-------------|
| Orders Requiring Attention | Manage Orders | Count by delay type |
| Orders in Process | Manage Orders | Diagram by status |
| Open Schedules | Manage Orders | By schedule index |
| Old Requisition Lines | Process Requisitions | By waiting days |
| Recent Activity | Schedule Lifecycle | Order lifecycle |
| Requisition Lines Requiring Action | Process Requisitions | Waiting for processing |
| Change Requests Requiring Action | Manage Orders | Pending changes |
| Incomplete | Manage Orders | Incomplete orders |
| Orders Pending Receipt Confirmation | Manage Orders | Late or pending |

#### 2.3 Menus
- **Tasks** (משימות): Main screens for PO creation/management
- **Search** (חיפוש): Search requisitions, orders, agreements, suppliers
- **Recent Documents**: Recently processed POs
- **Reports and Analytics**: Not in use

#### 2.4 Managing Orders (ניהול הזמנות)

**Search features:** Basic vs. Advanced (with operators: equals, contains, starts with, ends with). Saved searches available. Query by Example for result filtering.

**Results table actions:**

| Action | Function | Conditions |
|--------|----------|------------|
| Edit | Open for editing/change order | All except "Pending Approval" |
| Delete | Permanently delete | Only "Incomplete" status |
| Export to Excel | Export all rows | Always |
| Cancel Document | Cancel but keep | All except "Incomplete" and closed |
| Close | Close permanently/for invoice/receipt | Open and closed statuses |
| Reopen | Reopen closed docs | Closed statuses only |
| Hold/Freeze | Set hold or freeze status | Various |
| View PDF | View PO document | Always |

**Note:** Create and Duplicate are **NOT IN USE** at BIU -- all POs are requisition-based.

#### 2.5 Canceling a Purchase Order

When canceled: status changes to "Canceled," requester notified, new identical line added to requisition automatically, requisition returns to buyer pool.

### Chapter 3: Standard Purchase Order (הזמנת רכש רגילה)

**Process:** Requisition > Approval > PO Creation via Document Builder > PO Editing > PO Approval > Receipt > Invoice > Payment

**Creating the order:**
1. Navigate: Procurement > PO > Tasks > **Process Purchase Requisitions**
2. Search and select requisition lines
3. **Add to Document Builder** -- set Order Type (New/Existing), Style (always "Purchase Order"), Supplier, Currency
4. Click **Create** -- new PO number generated
5. Edit PO: General info, Terms, Notes, Lines, Schedules, Distributions
6. **Submit** to initiate approval

**Key warnings:**
- Payment terms from supplier card -- DO NOT TOUCH
- Changes contradicting requester's data require requester approval
- Document Builder creates ONE order from all added lines

### Chapter 4: International PO - Import of Goods (חו"ל)

**Two-phase process:** First PO for international supplier (product lines), then separate POs for logistics suppliers.

**Multi-step requisition approval:**
1. Buyer reassigns requisition to self
2. Adds logistics cost lines (tip: 1.00 NIS unit price, adjust quantity)
3. Reassigns back to requester
4. Requester reviews and resubmits
5. After approval, buyer creates POs

**Special notes:**
- Communication Method = "None" (POs sent manually by email)
- System blocks mixed-supplier orders
- Use line splitting for partial quantity utilization

### Chapter 5: Price List Order (הזמנה ממחירון)

**Automated process:** Approved requisition auto-converts to PO, PO auto-approved. Buyer only reviews and sends to supplier.

### Chapter 6: Internal Order (מוכרנים פנימיים)

For campus internal suppliers. After vendor approval, order auto-created. Common: vendor rejects for price update (1.00 NIS placeholder). No invoice -- vendor performs **manual final closure**. Scheduled program transfers funds.

### Chapter 7: Change Orders (הוראות שינוי)

Two methods:
1. **By buyer in PO:** Actions > Edit > fill description > make changes > Submit
2. **By requester in requisition:** Actions > Edit Order > make changes > Submit

Change orders applicable for: Open, Closed for Receipt, Closed for Invoice statuses.

### Chapter 8: Contractual Purchase Agreement (הסכם חוזי)

Amount-based agreement without specific items. Auto-approved. Exempt from tender law for related orders.

### Chapter 9: Framework Agreement / Price List (הסכם מסגרת / מחירון)

Item-and-price-based agreement. Supports Excel bulk loading. Auto-approved.

### Chapter 10: Tasks and Approvals

**Approval actions:** Approve, Reject (with comment), Reassign, Request Info, Ad Hoc (add approver).

### Chapters 11-13: Special Order Types

- **Chapter 11 - BIRAD Order:** For BIU's technology transfer company
- **Chapter 12 - Transportation Order:** For travel/transport services
- **Chapter 13 - Construction Order:** For facilities/construction work

All follow requisition-based processes with type-specific category selections.

---

## Document 5: Researcher Report (Updated) - DOCX

**File:** `מדריך משתמש - הדוח לחוקר (מעודכן).docx`
**Purpose:** Updated DOCX version of Document 2. Identical workflow for accessing researcher budget reports with drill-down to budgets, reservations, requisition details, and actual expenses.

### Key Budget Terms

| Hebrew | English | Definition |
|--------|---------|------------|
| תקציב מקור | Source Budget | Original budget per line item |
| תקציב מבוקר | Controlled Budget | Current budget after modifications |
| בפועל | Actual | Budget execution / spending |
| שריון | Reservation | Purchase requisitions or orders pending |
| יתרת תקציב | Budget Balance | Available remaining budget |

---

## Document 6: Pre-Research (Updated) - DOCX

**File:** `מדריך משתמש - קדם מחקר (מעודכן).docx`
**Purpose:** Guide for Pre-Research department covering grant creation, funder management, and route management.

### Key Concepts

- Each fund (קרן) = customer. New funds start from number 4000.
- After grant approval in Pre-Research, Research department opens a project.

### Opening a New Grant

1. Navigate to Module > Grant Management
2. Click create > Select template by currency type

**WARNING:** Template determines currency. Cannot change currency, grant name, or primary funder after creation.

3. Fill required fields:

| Field | Notes | Required |
|-------|-------|----------|
| Grant Name (שם מענק) | Name the research | Yes |
| Primary Funder (מממן ראשי) | Select customer | Yes |
| Start/End Dates | Select dates | Yes |
| Principal Investigator (חוקר ראשי) | Select PI | Yes |

4. Fill Additional Info fields (30+ fields including organization, institution, fund routes, research type, proposal details, status)

**Key status note:** Draft in Pre-Research; becomes Active after approval and transfer to Research.

5. Set up Budget Periods (numbered 01, 02, 03...)

### Managing Funders (ניהול מממנים)

**Search:** Settings > Setup and Maintenance > search "Manage Funders" > search by name/status
**Add new:** In Manage Funders > click add > enter name > select customer > save

### Managing Routes (ניהול מסלולים)

Via **Shared Lookups** (BIU_RM_MASLULIM type):
- View: Search Manage Shared Lookups > filter by BIU_RM_MASLULIM > click triangle to view details
- Add: Click add in table > fill Lookup Code (unique), Meaning, Description > expand details > fill FUND_NUMBER, MUSLUL_FUND, and optional fields (FUND_TYPE, VATAT_TYPE, FUND_CLASS, OVERHEAD_CODE, OVERHEAD_RATE) > save

---

## Hebrew Terminology Glossary

### General System Terms

| Hebrew | English |
|--------|---------|
| עננט | Ananet (Oracle Cloud ERP) |
| רשות המחקר | Research Authority |
| קדם מחקר | Pre-Research |
| תקציבים | Budgets department |
| מסך | Screen |
| שדה | Field |
| לחצן | Button |
| לשונית | Tab |
| חובה | Mandatory |
| רשות | Optional |
| הקמה ותחזוקה | Setup and Maintenance |

### Grant & Budget Terms

| Hebrew | English |
|--------|---------|
| מענק | Grant |
| מממן / מממן ראשי | Funder / Primary Funder |
| פרויקט | Project |
| קומבינציה | Accounting combination |
| תקופת תקציב | Budget period |
| גרסת תקציב | Budget version |
| מקור מימון | Funding source |
| סעיף הוצאה / הכנסה | Expense / Revenue item |
| עלות גולמית | Raw cost |
| תקציב מקור | Source budget |
| תקציב מבוקר | Controlled budget |
| בפועל | Actual |
| שריון | Reservation (encumbrance) |
| יתרת תקציב | Budget balance |
| בקרה תקציבית | Budget control |
| סוג בקרה | Control type (1=standard, 2=closed economy) |
| תקורה | Overhead |
| טיוטה / פעיל / מאושר | Draft / Active / Approved |
| קרן | Fund |
| מסלול קרן | Fund route |
| חוקר ראשי | Principal Investigator |

### Procurement Terms

| Hebrew | English |
|--------|---------|
| רכש | Procurement |
| הזמנת רכש | Purchase Order (PO) |
| דרישת רכש | Purchase Requisition |
| קניין | Buyer |
| דורש | Requester |
| ספק | Supplier |
| מוכרן | Internal vendor |
| הסכם חוזי | Contractual agreement |
| הסכם מסגרת / מחירון | Framework agreement / Price list |
| הוראת שינוי | Change order |
| בונה המסמכים | Document Builder |
| עגלת קניות | Shopping cart |
| עיבוד דרישות רכש | Process Purchase Requisitions |
| ניהול הזמנות | Manage Orders |
| העמסות לוגיסטיות | Logistics cost allocations |
| ייבוא טובין | Import of goods |
| חוק חובת המכרזים | Mandatory Tender Law |
| סגירה סופית | Final closure |
| הקצאה מחדש | Reassign |
| בדיקת יתרות תקציב | Check budget balance |
| תנאי תשלום | Payment terms |
| שיטת תקשורת | Communication method |
| מטבע הצמדה | Indexation currency |

### Hazardous Materials Terms

| Hebrew | English |
|--------|---------|
| חומ"ס | Hazardous materials |
| היתר רעלים | Poison permit |
| מעבדה | Laboratory |
| מחסן | Warehouse |
| הדרכת בטיחות | Safety training |
| ארגון מלאי | Inventory organization |
| כמות מרבית | Maximum quantity |
| דרושה הדרכה | Training required |
| קוד מעבדה | Lab code (security) |
| הוספה / החסרה / עדכון | Addition / Subtraction / Update |
| Poison Codes | Item type for hazmat |

### Financial Terms

| Hebrew | English |
|--------|---------|
| ספר ראשי | General Ledger |
| פקודת יומן | Journal entry |
| סוג יתרה | Balance type |
| תקופה חשבונאית | Accounting period |
| סטורנו | Storno/Reversal |
| חשבונית ללקוח | Customer invoice |
| סיווג תנועה | Transaction classification |
| מקור תנועה | Transaction source |
| ערך הקשרי | Context value |
| שורות חשבונאיות | Accounting lines |

### Key Navigation Paths

| Purpose | Path |
|---------|------|
| Grant Management | Module > ניהול מענקים |
| Budget Versions | Module > Project > Budget Management > ניהול גרסאות תקציב |
| Journal Entries | Module > General Ledger > Journal Entries |
| Customer Invoicing | Module > חיוב > Create Transaction |
| Purchase Orders Home | Module > רכש > הזמנות רכש |
| Process Requisitions | Procurement > PO > Tasks > עיבוד דרישות רכש |
| Manage Orders | Procurement > PO > Tasks > ניהול הזמנות |
| Setup & Maintenance | Initials > הקמה ותחזוקה |
| Item Management | ניהול מוצר > ניהול מידע על מוצר > Tasks > ניהול פריטים |
| Warehouse Management | Setup > Manufacturing & Supply Chain > ניהול מלאי > ניהול מחסנים ואיתורים |
| Manage Funders | Setup > search "ניהול מממנים" |
| Manage Shared Lookups | Setup > search "ניהול Lookups משותפים" |
| Lab Reporting | Modules > אחרים > Lab Reporting Screen |
