# Finance and Logistics Guides -- Comprehensive Summary

> Generated: 2026-03-26
> Source: 18 PDF training documents for Bar-Ilan University "Ananet" (Oracle Fusion Cloud ERP)

---

## TABLE OF CONTENTS

### FINANCE DOCUMENTS
1. [Bank Reconciliation Guide](#1-bank-reconciliation-guide)
2. [General Accounting Guide](#2-general-accounting-guide)
3. [Receivables (AR) Guide](#3-receivables-ar-guide)
4. [Masav Voucher Approval and Sampling Guide](#4-masav-voucher-approval-and-sampling-guide)
5. [Foreign Currency Payment Approval Guide](#5-foreign-currency-payment-approval-guide)
6. [Payments Guide](#6-payments-guide)
7. [Projects Guide](#7-projects-guide)
8. [Budget Control Module Guide](#8-budget-control-module-guide)
9. [Budget Transfer Guide](#9-budget-transfer-guide)
10. [Fixed Assets Guide](#10-fixed-assets-guide)
11. [Payables (AP) Guide](#11-payables-ap-guide)
12. [Graduated Withholding Tax Settings Guide](#12-graduated-withholding-tax-settings-guide)
13. [Cloud Expense Reporting Guide](#13-cloud-expense-reporting-guide)
14. [Ananet System Launch Presentation](#14-ananet-system-launch-presentation)

### LOGISTICS DOCUMENTS
15. [Purchase Orders Guide](#15-purchase-orders-guide)
16. [Internal Procurement Guide](#16-internal-procurement-guide)
17. [Inventory Management Guide](#17-inventory-management-guide)
18. [Infrastructure (Master Data) Guide](#18-infrastructure-master-data-guide)

---

## FINANCE DOCUMENTS

---

### 1. Bank Reconciliation Guide

**Hebrew Title:** מדריך למשתמש -- התאמת בנקים מעודכן
**Pages:** 22 | **Author:** Maria Dvorin | **Last Updated:** 20.05.2025

#### Topics Covered

1. **Introduction (Mavo / מבוא)**
   - The Bank Reconciliation module in Oracle Fusion Cloud is an integral part of the finance system
   - Purpose: verify that company books match bank records, identify unrecorded transactions, and control banking entries
   - Integrates with: AP (Accounts Payable / תשלומים לספקים), AR (Accounts Receivable / גביה מלקוחות), GL (General Ledger / ספר ראשי)
   - Can generate summary reports of reconciliation status and unreconciled transactions

2. **Managing Bank Statements (ניהול דפי חשבון בנק)**
   - Bank statements are loaded via the Meteor system (מערכת מטאור)
   - Users verify the integrity of loaded statements and manually update transactions as needed

   **Step-by-step process:**
   1. Click the overview icon -- the Overview screen (מסך מבט-על) opens showing reconciled and unreconciled transactions
   2. Click the Tasks button (לחצן המשימות) -- Bank Statement Management screen opens (מסך ניהול דפי חשבון בנק)
   3. Select date range in End Date field (תאריך סיום דף חשבון) -- default is last 45 days
   4. Click the area in the screen to expand search fields
   5. Select relevant bank account in the Bank Account field (שדה חשבון בנק)
   6. Click Search button
   7. Click on the selected bank row to see results
   8. Click desired bank statement -- Bank Statement screen opens (מסך דף חשבון בנק)
   9. Click Edit button to make manual changes if needed
   10. Click Save when done

   **Key Fields for Manual Bank Statement Lines:**
   | Field (Hebrew) | Field (English) | Required | Notes |
   |---|---|---|---|
   | תאריך רישום | Recording Date | Required | Enter date of recording |
   | יום ערך | Value Date | Optional | |
   | אסמכתת התאמה | Reconciliation Reference | Optional | Bank reference number |
   | קוד תנועה | Transaction Code | Required | 100 = Payment (AP), 400 = Receipt (AR) |
   | אינדיקטור חובה/זכות | Debit/Credit Indicator | Required | 100 = Debit, 400 = Credit |
   | סכום | Amount | Required | Bank transaction amount |

   **Important Notes:**
   - OPBD line = Opening balance for a given day
   - CLBD line = Closing balance (opening + current day transactions)
   - If closing balance does not match after updates, a red discrepancy appears in the Balance Check field (בדיקת יתרות) -- manually update CLBD to correct

3. **Bank Reconciliation (התאמות בנקים)**
   - Currently only **manual reconciliation** is available; automatic reconciliation planned for the future

   **Step-by-step process:**
   1. Click the main icon, then Manual Reconciliation (התאמה ידנית)
   2. Upper area shows all unreconciled transactions; lower area shows previously reconciled transactions
   3. Bottom section splits into: Bank Statement Lines (שורות דף חשבון בנק) on right, System Transactions (תנועות מערכת) on left
   4. Select bank account, click Search
   5. Right side = unreconciled bank transactions; Left side = system transactions
   6. System transactions may include: supplier payments, customer receipts, manual journal entries, AP/AR transactions
   7. Mark a transaction on each side for matching
   8. Click the Reconcile button

   **Tips:**
   - Green amounts are clickable -- navigate to source transaction
   - Can customize displayed columns via the View button
   - Can search by shared reference number across both sides

4. **Editing Reconciled Transactions (עריכת תנועות מותאמות)**
   - Navigate to the reconciliation screen, select bank, search, expand results
   - Each reconciliation group appears separately
   - Select a group checkbox to open/undo a reconciliation
   - Customize display columns as needed

5. **Creating Book Transactions for Reconciliation (יצירת תנועה להתאמה בספרים)**
   - Used when a bank-side transaction has no corresponding book entry

   **Step-by-step process:**
   1. Navigate to External Cash Transactions (תנועות מזומן חיצוניות)
   2. Fill in fields: Bank Account, Business Unit, Amount, Date, Reference, Transaction Type, Description, Value Date
   3. Accounting section auto-fills Cash Account; manually select Offset Account (חשבון קיזוז) via search
   4. Select required segment for journal entry
   5. Save, then return to reconciliation screen to match
   6. Create accounting (journal entry in GL) by selecting the subledger application and relevant ledger

   **Important:** Bank reconciliation must be performed before creating accounting. Unreconciled transactions do not create journal entries.

6. **Cash to GL Reconciliation Report (דוח התאמת מזומן לספר ראשי)**
   - Shows summary: closing balance, unreconciled amounts, reconciled closing balance
   - Three mandatory fields marked with asterisks
   - Report output available as PDF download

   **Navigation:** Main icon > Cash to GL Reconciliation Report > Fill criteria > Submit > Process Tracking > Download PDF

---

### 2. General Accounting Guide

**Hebrew Title:** מדריך למשתמש -- חשבונאות כללית
**Pages:** 49 | **Author:** Yair Mishmor | **Last Updated:** 07/05/2025

#### Topics Covered

1. **Introduction (מבוא)**
   - General Accounting module in Oracle Fusion Cloud provides a platform for managing General Ledger (GL) accounts
   - Tools for: journal entries, account tracking, foreign currency revaluation, period management, GL reports
   - Flow: Journal Entry Creation > Journal Recording > Reversal/Management > Revaluation > Account Tracking

2. **Journal Entries (פקודות יומן)**
   - Journal entries create balanced debits and credits in GL accounts

   **2.1 Manual Journal Entry Creation (יצירת פקודת יומן ידנית)**

   **Navigation:** Home > General Accounting (חשבונאות כללית) > Journal Entries (פקודות יומן) > Tasks > Create Journal Entry

   **Key Fields:**
   | Area | Field (Hebrew) | Field (English) | Required | Notes |
   |---|---|---|---|---|
   | Journal Batch | אצוות פקודות יומן | Journal Batch | Optional (auto-named) | Can contain multiple journals |
   | Journal Batch | סוג יתרה | Balance Type | Required | Select "בפועל" (Actual) |
   | Journal Batch | תקופה חשבונאית | Accounting Period | Required | |
   | Journal Entry | פקודת יומן | Journal Entry | Optional (auto-named) | |
   | Journal Entry | תאריך רישום חשבונאי | Accounting Date | Required | |
   | Journal Entry | קטגוריה | Category | Required | Select "אחר" (Other) for regular |
   | Journal Entry | מטבע | Currency | Required | If non-ILS, Spot exchange rate auto-fills |
   | Lines | חשבון | Account | Required | Select via combination picker |
   | Lines | חובה/זכות | Debit/Credit | Required | |

   **Additional features:**
   - DFF (Descriptive Flexfield) for account details -- expand line to access "פרטי חשבון"
   - Reversal parameters: Choose reversal period and method (Change Sign / Swap Debit-Credit)
   - Budget balance check: Actions menu > Check budget balances
   - Budget reservation: Actions menu > Reserve budget
   - Forecasted balances view in top-left corner
   - Complete journal: Click "Complete" button -- status changes from "לא הושלם" to "הושלם"
   - Post journal: Click "Post" -- status changes to "נרשם"

   **2.2 Spreadsheet Journal Entry (יצירת פקודות יומן בגיליון אלקטרוני)**
   - Navigate to Tasks > Create Spreadsheet Journal Entry
   - Downloads Excel template with Oracle connection
   - Fill in fields: Ledger, Category, Currency, Period, Date, Lines (Account, Debit, Credit)
   - Upload from spreadsheet back to Oracle

   **2.3 Journal Entry Management (ניהול פקודות יומן)**
   - Search by: batch name, status, period, accounting date
   - Actions: view, edit, copy, reverse, delete
   - **Copy journal (העתקת פקודת יומן):** Select journal > Actions > Copy
   - **Reverse journal (היפוך פקודת יומן):** Actions > Reverse > Select reversal period and method

3. **Account Tracking and Balance Queries (מעקב חשבונות ושאילתות יתרות)**
   - Create account groups for monitoring (קבוצת חשבונות למעקב)
   - View tracked account groups with balance summaries
   - Edit tracked account groups
   - Navigate to any account for drill-down into transactions

4. **Balance Revaluation (שערוך יתרות)**
   - For foreign currency accounts
   - Navigate: Tasks > Revalue Balances
   - Select: Ledger, Revaluation rule, Accounting date
   - Submit the revaluation process
   - View results in Process Tracking

5. **General Ledger Reports (דוחות ספר ראשי)**
   - **Trial Balance Report (דוח מאזן בוחן):** Standard system report
   - Navigate: Reports and Analytics > Search for report > Fill parameters (Ledger, Period, Currency) > Run
   - Export to Excel/PDF

6. **Period Close (סגירת תקופה)**
   - Navigate: Tasks > Close Period
   - Select period > Change status to Closed
   - **Warning:** Cannot reopen closed periods without specific authorization

---

### 3. Receivables (AR) Guide

**Hebrew Title:** חייבים -- מדריך משתמש -- מעודכן
**Pages:** 71 | **Author:** Yair Mishmor | **Last Updated:** 11/06/2025

#### Topics Covered

1. **Introduction**
   - AR module manages customer accounts: invoicing, credits, receipts, deposits
   - Flow: Customer Setup > Invoice > Receipt/Credit > Deposit

2. **Customers (לקוחות)**

   **2.1 Customer Setup (הקמת לקוח)**

   **Navigation:** Home > Billing (חיוב) > Tasks > Create Organization Customer (יצירת לקוח ארגון)

   **Key Fields:**
   | Area | Field | Required | Notes |
   |---|---|---|---|
   | Organization Info | Name (שם) | Required | Customer name |
   | Organization Info | Tax ID (מספר זיהוי נישום) | Optional | Tax authority file number |
   | Account Details | Description (תיאור חשבון) | Recommended | |
   | Account Details | Account Open Date (תאריך פתיחת חשבון) | Required | Cannot invoice before this date |
   | Account Details | Account Type (סוג חשבון) | Recommended | |
   | Account Details | Customer Classification (סיווג לקוח) | Recommended | Helps with searches/reports |
   | Account Details | Sponsors fields | Required for RM only | For Research Authority customers |
   | Address | Address Set (סל כתובת חשבון) | Required | BIU MAIN or BIU RM |

   **2.2 Customer Management (ניהול לקוחות)**
   - Search, edit contacts, update payment terms
   - Add related accounts (חשבון קשור) for cross-payment scenarios
   - Add additional customer sites (אתרים)

3. **Invoices (חשבוניות)**

   **3.1 Invoice Creation (יצירת חשבונית)**
   - Navigation: Home > Billing > Tasks > Create Invoice
   - Fields: Customer, Transaction Type, Invoice Date, Currency, Amount, GL Date
   - Line items with account combinations

   **3.2 Invoice Management (ניהול חשבוניות)**
   - Search, view, edit, approve, complete invoices
   - Print invoices, manage attachments

   **3.3 Invoice Credit (זיכוי חשבונית)**
   - Navigate to invoice > Actions > Credit
   - Select full or partial credit

   **3.4 Credit Memo Creation (יצירת הודעת זיכוי)**
   - Standalone credit memo for specific scenarios

   **3.5 Credit Memo Attribution (ייחוס הודעות זיכוי לחשבוניות)**
   - Link credit memos to specific invoices

   **3.6 Invoice Reconciliation (התאמת חשבוניות)**

4. **Receipts (תקבולים)**

   **4.1 Standard Receipt Creation (יצירת תקבול מסוג סטנדרטי)**
   - Navigation: Home > Billing > Tasks > Create Standard Receipt
   - Fields: Customer, Receipt Method, Amount, Date, Receipt Number
   - Apply receipt to specific invoices

   **4.2 Standard Receipt Management**
   - Search, edit, reverse, void receipts

   **4.3 Miscellaneous Receipt Creation (יצירת תקבול מסוג שונות)**
   - For receipts not tied to specific customers/invoices
   - Distribution to GL accounts required

   **4.4 Miscellaneous Receipt Management**

5. **Receipt Deposits (הפקדות תקבולים)**
   - **Create Deposit Batch (יצירת אצוות הפקדת תקבולים):** Group receipts for bank deposit
   - **Manage Deposit Batches**

6. **AR Reports (דוחות חייבים)**
   - **Aging Report (דוח גיול חייבים):** Receivables aging analysis
   - **Customer Ledger Report (דוח כרטסת לקוח):** Customer transaction history

7. **AR Period Management (ניהול תקופות חייבים)**
   - Open and close accounting periods for AR module

---

### 4. Masav Voucher Approval and Sampling Guide

**Hebrew Title:** אישור ובדיקת מדגמית של שוברי מסב
**Pages:** 7 | **Project:** Ananet -- Oracle Fusion in Cloud

#### Topics Covered

1. **Approval Process for Masav Payments**
   - Approval hierarchy based on payment amount thresholds:
     | Template | Approvers |
     |---|---|
     | Masav ILS up to 25K | fluseg, ernstc, zaitarn, anconah, MAGALA |
     | Masav ILS 25K-250K | fluseg, anconah, zaitarn, MAGALA |
     | Masav ILS above 250K | anconah, zaitarn, MAGALA, fluseg |
   - Only 2 approvers required per request to complete the cycle

2. **Step-by-step Approval Process:**
   1. Approver receives notification via system bell (פעמון) and email
   2. Click notification link for details -- header indicates template type
   3. To view included invoices: Actions > View Approvals (פעולות > הצג אישורים)
   4. Click attached file -- PDF report with all payment details opens
   5. To view invoice data: Navigate to Payables > Invoices > Manage Invoices
   6. Search by voucher number (מספר שובר)
   7. View attachments by clicking the paperclip icon
   8. To approve specific invoices: Stand on a line > Notes icon > Note type "Payment Approval" > Write "Approved for payment" > Save and Close
   9. Return to original notification > Select Approve (אישור)

3. **Delegation of Authority**
   - Approver can delegate: Actions > Delegate Authority (האצל סמכויות)
   - Enter delegate contact name > Send
   - Delegate receives notification and can approve/reject
   - Creator can track status: Notifications > View All > Created by me > View Approvals

---

### 5. Foreign Currency Payment Approval Guide

**Hebrew Title:** מדריך אישור תשלומי מטח
**Pages:** 4

#### Topics Covered

Guide for finance managers to approve foreign currency (FC) payments at Bank Hapoalim (בנק הפועלים).

**Step-by-step Process:**
1. Navigate to: Payables (זכאים) > Payments (תשלומים)
2. From Tasks list, select Manage Payments (ניהול תשלומים)
3. Search by payment number that appears in Bank Hapoalim > Click Search
4. Click on the payment number in results
5. In the payment screen, go to "Paid Invoices" tab (לשונית חשבוניות ששולמו)
6. Click on invoice number to view it
7. Open attachment to verify correctness
8. Review all invoices in the payment
9. Return to payment screen > Open Attachments section
10. Switch type from "File" to "Text" > Write "Approver" in Title and Filename fields
11. Write "Approver" and click OK -- creates audit trail of who approved and when

---

### 6. Payments Guide

**Hebrew Title:** מדריך למשתמש -- תשלומים
**Pages:** 32 | **Author:** Yair Mishmor | **Last Updated:** 26/05/2025

#### Topics Covered

1. **Individual Invoice Payment (תשלום חשבוניות בדידות)**

   **Navigation:** Home > Payables (זכאים) > Invoices (חשבוניות) > Tasks > Manage Invoices

   **Step-by-step:**
   1. Search for invoice using search fields
   2. Click invoice number to enter it
   3. Actions > Edit
   4. Click "Manage Payments" (ניהול תשלומים) to manage payment splits, holds, etc.
   5. To place a hold: Select payment line > Hold button
   6. To split payment: Select line > Split button
   7. To pay in full: Actions > Pay in Full

   **Pay in Full Fields:**
   | Field | Required | Notes |
   |---|---|---|
   | Bank Account (חשבון בנק) | Required | Select payment bank |
   | Payment Processing Profile (פרופיל עיבוד תשלומים) | Required | Based on payment method |
   | Payment Document (מסמך תשלום) | Required | Based on payment method |

   **Prerequisites for payment:**
   - Validation Status (סטטוס אימות) must be "Validated" (מאומת)
   - Approval Status (סטטוס אישור) must be "Approved" (אושר)

2. **Payment Creation (יצירת תשלום)**

   **Navigation:** Home > Payables > Payments (תשלומים) > Tasks > Create Payment

   **Key Fields:**
   | Field | Required | Notes |
   |---|---|---|
   | Business Unit (יחידה עסקית) | Required | Bar-Ilan University - Legal Entity |
   | Supplier or Party (ספק או צד) | Required | Search and select |
   | Payment Date (תאריך תשלום) | Required | |
   | Type (סוג) | Required | Select "Quick" (מהיר) |
   | Bank Account (חשבון בנק להחזר הוצאות) | Required | |
   | Payment Currency (מטבע התשלום) | Required | |
   | Payment Method (שיטת תשלום) | Required | |
   | Processing Profile (פרופיל עיבוד תשלומים) | Required | Derived from payment method |
   | Transfer Account (חשבון להעברת תשלום) | Required | |
   | Payment Document (מסמך תשלום) | Required | Derived from payment method |
   | Document Number (מספר מסמך תשלום) | Required | Auto-numbered by method |
   | Attachments (נספחים) | Optional | |

   - After filling header, select invoices from "Invoices to Pay" section
   - Click "Select and Add" > choose invoices > Apply > Save

3. **Payment Management (ניהול תשלומים)**
   - Search payments by various criteria
   - View payment details, download payment document
   - Access payment file management (ניהול קובצי תשלומים) via reference number
   - **Cancel Payment (ביטול תשלום):** Open payment > Actions > Cancel

4. **Payment Batches (אצוות תשלום)**

   **4.1 Creating Payment Batch (יצירת אצוות תשלום)**

   **Navigation:** Home > Payables > Payments > Tasks > Submit Payment Processing Request

   **Key Fields:**
   | Area | Field | Required | Notes |
   |---|---|---|---|
   | Header | Name (שם) | Required | Batch name |
   | Header | Template (תבנית) | Required | Select template |
   | Selection Criteria | Pay Through Date (לתשלום על תאריך) | Required | |
   | Selection Criteria | Payment Priority (קדימות תשלום) | Required | Regular suppliers = 99 |
   | Selection Criteria | Payment Method (שיטת תשלום) | Required | Derived from template |
   | Payment Options | Payment Date (תאריך תשלום) | Required | |
   | Payment Options | Bank Account | Required | Derived from template |
   | Processing Options | Credit Attribution up to Zero (ייחוס זיכויים עד סכום אפס לתשלום) | Optional | Collect credits |
   | Processing Options | Review Installments (בדוק תשלומים לשיעורין) | Recommended | |
   | Processing Options | Review Proposed Payments (בדוק תשלומים מוצעים) | Recommended | |
   | Processing Options | Immediate File Creation (יצירה מידית של קובץ תשלום) | Recommended | |

   **Batch Processing Flow:**
   1. Submit batch > Appears in "Requires Attention" tab
   2. Review installments > Remove/add payments as needed
   3. Review proposed payments > Remove if needed
   4. Batch enters approval cycle
   5. After approval: Download payment file
   6. Download payment register (פנקס תשלומים)
   7. Final confirmation: Actions > Confirm > Acknowledge
   8. Batch moves to "Recently Completed" tab

   **4.2 Managing Payment Batches**
   - Search, view, edit existing batches
   - Available actions depend on batch status
   - Cancel batch option available before final confirmation

   **Sending Deposit Notification to Supplier:**
   - Tasks > Send Separate Deposit Notification (שליחת הודעת הפקדה נפרדת)
   - Select payment file, format, and submit

   **Important:** After final confirmation (step 26), batch cannot be bulk-cancelled.

---

### 7. Projects Guide

**Hebrew Title:** מדריך למשתמש -- פרויקטים
**Pages:** 16 | **Author:** Maria Dvorin | **Last Updated:** 15.06.2025

#### Topics Covered

1. **Introduction**
   - Oracle Projects module manages projects comprehensively: planning, execution, control, financial reporting
   - Used for: opening new projects, managing projects, entering budgets
   - Project combinations and budgets transfer to Budget Control module and GL
   - Budget transfers between accounts within a project done via dedicated screen (under development)
   - **Warning:** Do NOT perform budget transfers directly in the Projects module

2. **Creating a New Project (פתיחת פרויקט חדש)**

   **2.1 Project Entry (הזנת פרויקט חדש)**

   **Navigation:** Click Projects icon > Create Project

   **Key Fields:**
   | Field | Required | Notes |
   |---|---|---|
   | Source Template (תבנית מקור) | Required | Only option: FINANCE_PROJECTS_ILS |
   | Project Name (שם פרויקט) | Required | Free text |
   | Project Number (מספר פרויקט) | Required | 6 digits; must start with project type prefix (e.g., type 40 starts with 4) |
   | Start Date (מתאריך) | Required | |
   | End Date (תאריך סיום) | Optional | Recommended: end of relevant calendar year |
   | Legal Entity (ישות משפטית) | Optional | |
   | Budget Type (סוג תקציב) | Optional | |
   | Organizational Unit (יחידה ארגונית) | Optional | |
   | Control Type (סוג בקרה) | Optional | |
   | Classification (סיווג) | Optional | |

   **2.2 Team Member Setup (הגדרות חברי צוות)**
   - Add Project Manager = Budget Referent (רפרנט תקציבי)
   - Fields: Person, Project Role, Start Date, End Date

   **2.3 Additional Project Information (מידע נוסף)**
   - Configure flexible fields that determine project combination and budget control
   - **Warning:** Once project is created in GL, these fields CANNOT be changed

   **Flexible Fields:**
   | Field | Values | Notes |
   |---|---|---|
   | Legal Entity (ישות משפטית) | Bar-Ilan University | Required |
   | Budget Type (סוג תקציב) | 40=Limited Project, 50=Designated Project, 60=Construction (multi-year) | Required |
   | Organizational Unit (יחידה ארגונית) | Select from list | Required |
   | Control Type (סוג בקרה) | 1=Budget Control per Item, 2=Closed Budget Control | Required |
   | Classification (סיווג) | Select from list | Required |

3. **Searching and Editing Existing Projects (חיפוש פרויקט קיים ועריכתו)**
   - Search by name or project number
   - Edit basic data, attach documents, update team members

4. **Entering Project Budget (הזנת תקציב לפרויקט)**

   **Navigation:** Financial Project Settings > Tasks > Manage Budget Versions > Create Budget

   **Process:**
   1. Create budget > Set planning options
   2. Select budget year > Add lines
   3. Enter resources and costs per line
   4. **Total gross cost per year must equal zero** (verified via "Check" option)
   5. Submit for approval -- sent to Budget Department Head
   6. After approval, becomes initial version (Version 1) -- frozen, cannot be modified

   **Important:**
   - All subsequent changes must be made in Version 2
   - Do NOT perform budget transfers directly in Projects module -- use dedicated screen (under development)

---

### 8. Budget Control Module Guide

**Hebrew Title:** מדריך למשתמש -- מודול תקציב (בקרה תקציבית)
**Pages:** 27 | **Author:** Maria Dvorin | **Last Updated:** 02.04.2025

#### Topics Covered

1. **Introduction**
   - Budget Control = tool for managing organizational budget, monitoring expenses and purchases, checking balances, preventing deficits, and transferring budget allocations
   - Bar-Ilan University manages multi-year budgets for ongoing operations and special projects

   **4 Budget Types at the University:**
   1. Annual Budget Control (בקרה תקציבית שנתית)
   2. Multi-year Closed Budget (משק סגור רב שנתי) -- managed in Projects module, Research Authority
   3. KKMB (קקמ"ב) -- both ILS and USD, multi-year, internally budgeted
   4. Construction Budget (תקציב בינוי) -- per-account control, multi-year

2. **Budget Account Groups (קבוצת חשבונות תקציב)**

   **2.1 Creating Budget Groups (יצירת קבוצות תקציב לבקרה)**

   **Navigation:** Home > Budget Control (בקרת תקציב) > Budget Tracking area > Create

   **Fields:**
   | Field | Required | Notes |
   |---|---|---|
   | Name (שם) | Required | Group name |
   | Control Budget (תקציב בקרה) | Required | Budget type |
   | Description (תיאור) | Recommended | |
   | Access (גישה) | Required | Private or Public |
   | Budget Account Label (תווית חשבון תקציב) | Recommended | Description label |
   | Legal Entity | Required | |
   | Budget Type | Required | |
   | Organizational Unit | Required | |
   | Project | Required | |
   | Research Year (שנת מחקר) | Required | |
   | Control Type | Required | |

   **2.2 Editing Budget Groups (עריכת תקציב לבקרה)**

3. **Budget Entry, Verification, and Transfer (הזנה, בדיקה והעברת תקציבים)**

   **3.1 Annual Budget Entry via FBDI Import**
   - Download template from Oracle: Search "budget amounts FBDI"
   - Fill Excel template (XCC_BUDGET_MULTI_PERIOD_INT sheet)
   - Upload to system

   **Template Columns:**
   | Column | Required | Notes |
   |---|---|---|
   | Source Budget Type | Required | |
   | Source Budget Name | Required | |
   | Budget Entry Name | Required | Unique name, e.g., BCPMY |
   | Currency Code | Required | Default: ILS |
   | Segment 1 | Required | Legal Entity |
   | Segment 2 | Required | Budget Type |
   | Segment 3 | Required | Organizational Unit |
   | Segment 4 | Required | Account |
   | Segment 5 | Required | Project |
   | Segment 6 | Required | Control Type |
   | Budget Year | Required | Research year |
   | Amount 1-4 | Required | Annual=Amount1 only; Quarterly=all four |

   **3.2 Managing Budget Groups**
   - Click any budget amount to drill into Balance Check screen

4. **Checking Budget Records (בדיקת רישומים תקציביים)**
   - Search by: Control Budget, Period From, Period To, Record Name

5. **Managing Control Budgets (ניהול תקציבי בקרה)**
   - View budget structure: Legal Entity, Budget Type, Org Unit, Project, Research Year, Control Type
   - View control levels, budget manager, tree details (parent/child accounts)
   - Transactions affecting budget consumption: invoices, cutoff entries, manual journals, requisitions, POs

6. **Checking Budget Control Balances (בדיקת יתרות בקרה תקציביות)**

   **Navigation:** Tasks > Check Budget Control Balances (בדוק יתרות בקרה תקציבית)

   **Search Fields:**
   | Field | Required | Notes |
   |---|---|---|
   | Account (חשבון) | Required | |
   | Project (פרויקט) | Required | |
   | Control Type (סוג בקרה) | Required | 0=No control, 1=With control, 2=Closed budget |
   | Legal Entity | Required | Default: Bar-Ilan |
   | Budget Type | Required | |
   | Organizational Unit | Required | |
   | Amount Type (סוג סכום) | Recommended | Periodic cumulative or Annual cumulative |
   | Budget Period From/To | Required | |

   **Balance Display Fields:**
   | Field (Hebrew) | Field (English) | Description |
   |---|---|---|
   | תקציב כולל | Total Budget | Total allocated budget |
   | מחויבות לרכש | Purchase Commitments | Budget reserved from purchase requisitions |
   | התחייבויות | Obligations | Purchase requisitions consumed from budget |
   | צריכה אחרת | Other Consumption | Other budget consumption |
   | הוצאות | Expenses | Invoices consumed from budget |
   | סה"כ צריכה | Total Consumption | |
   | סכום יתרות תקציב זמינות | Available Budget Balance | Remaining balance |

   **Drill-down capabilities:** Click any amount to see transactions (requisitions, POs, invoices)
   - Can export documents to PDF
   - **Tip:** Save frequent budgets to Favorites (מועדפים) for quick access

7. **Budget Transfers (העברת סכומים בין התקציבים)**
   - Authorization defined per user
   - Use Ctrl+click to select multiple budget lines for transfer
   - Transfer "From" total must equal transfer "To" total
   - Confirmation notification received after successful transfer

8. **Budget Period Management (ניהול תקופות תקציב)**
   - **8.1 Managing Period Status:** Change period status (Open/Closed)
   - **8.2 PO Balance Carryforward (העברה של יתרות הזמנות רכש):**
     - Select Ledger, cutoff date, reopening date
     - Run mode: Preview or Final
     - Example: Transfer from Q1 2025 (01/01/2025) to Q2 2025 (01/04/2025)

---

### 9. Budget Transfer Guide

**Hebrew Title:** מדריך להעברת תקציב
**Pages:** 3

#### Topics Covered

1. **General Transfers (העברות כללי)**
   - Open search screen > Search for transfers > Click "Create Transfer Transaction" for new transfer
   - Fill in data for Current (שוטף) or Projects (פרויקטים)
   - Fill transfer amounts in rows
   - Transfer screen shows: current balance, projected balance, available amount, projected available
   - **Cannot create negative budgets** -- if projected available shows red (negative), transfer will be blocked
   - Save and continue, or Execute to validate

2. **Current Budget Transfer (העברה בשוטף)**
   - Select year (required)
   - Enter explanation for transfer (required)
   - Finance department transfers also require attaching the transfer request document
   - Fill Organizational Unit and Account > Click Add
   - Repeat to add more rows
   - Fill amounts in rows > Save or Execute

3. **Project Budget Transfer (העברות תקציב פרויקט)**
   - Similar to current budget; add rows and fill amounts > Execute

4. **Existing Controls (בקרות קיימות):**
   1. Invalid combination of Unit + Account: Error message shown; contact budget referent
   2. Unbalanced transfers: If total row (שורת התאמה כוללת) is not 0, transfer blocked
   3. Negative budget: If projected available is negative (red), transfer blocked
   4. Restricted account classification (סיווג חשבון = 00): Departments cannot transfer -- e.g., salary budgets

---

### 10. Fixed Assets Guide

**Hebrew Title:** מדריך למשתמש -- רכוש קבוע
**Pages:** 24 | **Author:** Yair Mishmor | **Last Updated:** 08/05/2025

#### Topics Covered

1. **Fixed Asset Setup (נכסי רכוש קבוע)**

   **1.1 Creating a Fixed Asset (הקמת נכס רכוש קבוע)**

   **Navigation:** Home > Fixed Assets (רכוש קבוע) > Assets (נכסים) > Tasks > Add Asset

   **Key Fields:**
   | Field | Required | Notes |
   |---|---|---|
   | Asset Type (סוג נכס) | Required | Options: Construction in Progress (בנייה בתהליך), Capitalized (מהוון), Expensed (נרשם כהוצאה) |
   | Category (קטגוריה) | Required | Primary + Secondary category |
   | Description (תיאור) | Required | |
   | Cost (עלות) | Required | TOTAL cost, not per-unit |
   | Units (יחידות) | Required | Number of units |
   | Expense Account (חשבון הוצאות) | Required | Full combination for depreciation expense |
   | Location (מיקום) | Required | Select "Null" |
   | Asset Number (מספר נכס) | Optional | Auto-numbered if blank |
   | Date Placed in Service (תאריך הכנסה לשימוש) | Required | Also default depreciation start date |
   | Attachments (נספחים) | Required | Attach documents |
   | Depreciation checkbox (הפחתה) | Optional | Mark for alternate depreciation start date |

   **Process:**
   1. Fill initial fields > Click OK > Detailed asset screen opens
   2. Optionally save as incomplete (status: לא הושלם) for later completion
   3. Submit for registration > Notification confirms completion
   4. Asset appears in "Recent Additions" (תוספות אחרונות)

   **1.2 Asset Inquiry (חקירת נכסי רכוש קבוע)**
   - Search by various criteria with advanced search options
   - Asset details include: type, category, cost, depreciation info
   - Tabs: Financial (כספי), Allocations (הקצאות), Cost History (היסטוריית עלות), Depreciation (פחת), Transactions (תנועות)

   **1.3 Adding to Existing Asset (תוספת לנכס רכוש קבוע קיים)**

   **Navigation:** Assets > Tasks > Adjust Assets (התאם נכסים)
   1. Search for asset
   2. Select asset > Adjust
   3. Update cost in Financial Details > Adjust depreciation method, life, etc. if needed
   4. Save -- changes reflected in Cost History and Transactions tabs

   **1.4 Bulk Additions -- Still under development as of 08/05/2025**

2. **Depreciation and Period Close (הרצת חישוב פחת וסגירת תקופה)**

   **2.1 Running Depreciation (הרצת חישוב פחת רכוש קבוע)**
   - Navigate to Assets > Depreciation tab > Select period > Run
   - View depreciation amounts per period in asset inquiry

   **2.2 Period Close (סגירת תקופה)**
   - Navigate to Assets > Depreciation tab > Actions > Close Period
   - **Warning:** After closing a period:
     - Cannot perform operations in the closed period
     - Cannot reopen the closed period

3. **Fixed Asset Reports (דוחות רכוש קבוע)**

   **Depreciation Form / Form Yod-Alef (טופס פחת / טופס י"א)**
   - Israeli localization report
   - Navigate: Reports and Analytics > Search "Israeli Localization Fixed Asset Report"
   - Parameters: Year, To Period
   - Can add to Favorites for quick access
   - Export to Excel, PDF, or other formats

---

### 11. Payables (AP) Guide

**Hebrew Title:** מדריך למשתמש -- זכאים
**Pages:** 63 | **Author:** Yair Mishmor | **Last Updated:** 04/06/2025

#### Topics Covered

1. **Introduction**
   - AP module manages supplier accounts: invoicing, credits, payments, advances
   - Flow: Supplier Setup > Invoice Receipt > Payment/Credit > Bank Settlement

2. **Suppliers (ספקים)**

   **2.1 Supplier Registration (הקמת ספק)**

   **Navigation:** Home > Payables (זכאים) > Overview > Tasks > Register Supplier

   **Key Fields:**
   | Area | Field | Required | Notes |
   |---|---|---|---|
   | Registration | Company (חברה) | Required | Supplier name |
   | Registration | Request Reason (סיבת בקשה) | Required | Select "Supplier Registration - Outsourcing" |
   | Registration | Business Unit (יחידה עסקית רכש) | Required | Bar-Ilan University - Legal Entity |
   | Registration | Business Relationship (קשר עסקי) | Required | Select "Approved for Expense" |
   | Company | Tax Organization Type (סוג ארגון מס) | Required | Select from list |
   | Company | Supplier Type (סוג ספק) | Required | Select "Regular Suppliers"; omission causes data deletion |
   | Company | Tax Country (ארץ מס) | Required | |
   | Company | Company Registration (ח.פ) | Required | Invalid number causes data deletion |
   | Company | Authorized Dealer (עוסק מורשה) | Required | Choose one: Company or Authorized Dealer |
   | Contacts | At least one contact | Required | |
   | Addresses | At least one address | Required | Purpose must include "Orders" and "Payment Transfer" |

   **Post-Registration:**
   - System performs automatic validation of company/ID numbers (takes several minutes)
   - User receives notifications about registration approval
   - If rejected: view rejection reason in Approval History

   **2.2 Supplier Management (ניהול ספקים)**
   - Search by keywords or advanced search
   - Update: financial parameters, tax settings, payment methods, bank accounts
   - **Site Setup:** Including withholding tax group, payment terms, payment method
   - **Bank Account Setup:** Required for electronic payments; includes bank, branch, account number, IBAN

3. **Invoices (חשבוניות)**

   **3.1 Invoice from Purchase Order (יצירת חשבונית מהזמנת רכש)**
   - Navigate: Invoices > Tasks > Create Invoice
   - Select PO Match option, enter PO number
   - System pulls PO lines for matching
   - Fields: Invoice Number, Amount, Tax, Date, Currency, Attachments
   - Validate invoice > Submit for approval

   **3.2 PO Invoice Credit (זיכוי חשבונית מהזמנת רכש)**
   - Create credit memo referencing original invoice

   **3.3 Invoice without PO (יצירת חשבונית שלא מהזמנת רכש)**
   - Manual entry of all line details
   - Requires full account combination per line

   **3.4 Advance Payment (יצירת מקדמה)**
   - Create advance type invoice
   - **3.4.1 Tax Invoice and Advance Attribution:** Create tax invoice and link the advance

   **3.5 Invoice Management (ניהול חשבוניות)**
   - Search, edit, validate, approve invoices
   - **3.5.1 Converting Transaction Invoice to Tax Invoice (הפיכת חשבונית עסקה לחשבונית מס)**
   - **3.5.2 Cancelling Invoice Lines or Full Invoice (ביטול שורה/חשבונית)**
   - **3.5.3 Invoice Alerts (אלרטים לחשבוניות)**

4. **AP Period Management (ניהול תקופות זכאים)**
   - Open and close accounting periods for AP module

---

### 12. Graduated Withholding Tax Settings Guide

**Hebrew Title:** הגדרות מס מדורג לניכוי מס במקור
**Pages:** 6 | **Project:** Ananet -- Oracle Fusion in Cloud

#### Topics Covered

Configuration of graduated withholding tax (ניכוי מס מדורג) for suppliers in the system.

**Full Process (5 Steps):**

**Step 1: Managing Tax Rates (ניהול שיעורי מס)**
- Navigation: Setup and Maintenance > Manage Tax Rates and Tax Refund Rates (ניהול שיעורי מס ושיעורי החזר מס)
- Under "Withholding Tax" (ניכוי מס במקור): Create new tax
- Rate type: "Gross Amount Tariff" (תעריפון סכום ברוטו)
- Fill: tax details, validity period, rates

**Step 2: Managing Tax Condition Sets (ניהול סלי תנאי מס)**
- Navigation: Setup and Maintenance > Manage Tax Condition Sets
- Under "Withholding Tax" > New
- Set code and name; under Factor Set select BIU_WHT_TCC_FS
- Link to tax code from Step 1

**Step 3: Managing Tax Rules (ניהול כללי מיסוי)**
- Navigation: Setup and Maintenance > Manage Tax Rules
- Under: Tax Deduction Rules > Withholding Tax > Direct Rate Rule Type
- Search for rule: BIU_WHT_DIRECT_RULE > Edit
- Add new set (from Step 2), set status and VAT code
- Submit

**Step 4: Updating the Supplier (עדכון הספק)**
- In supplier site allocations: Select appropriate Withholding Tax Group
- Save, close, and submit changes for approval

**Step 5: Examples (דוגמאות)**
- Invoice 1: 30,000 ILS fully paid (with graduated deductions shown)
- Invoice 2: Additional example with multi-tier deductions

**Note:** For existing suppliers with renewed tax certificates for a new tax year, only Step 1 needs updating (deduction period and validity).

---

### 13. Cloud Expense Reporting Guide

**Hebrew Title:** מדריך למשתמש -- דיווח הוצאות בענן
**Pages:** 9 | **Project:** Ananet -- Oracle Fusion in Cloud

#### Topics Covered

1. **Introduction**
   - Self-service expense reimbursement module for university employees
   - Part of Oracle Cloud ERP
   - Currently: employees only (not external workers or students not in HR module)

2. **Module Access (כניסה למודול)**
   - Main menu > "Me" (אני) > "Expenses" icon (הוצאות)

3. **Bank Account Setup (הגדרת חשבון בנק)**
   - **Mandatory on first login**
   - Gear icon > Manage Bank Accounts (ניהול חשבונות בנק) > Add (+)
   - Must be an Israeli ILS account
   - Select bank and branch from existing list
   - If bank/branch missing: open support ticket
   - If multiple accounts: payment goes to the one marked as "Primary" (ראשי)

4. **Managing Delegates (ניהול נציגים)**
   - Gear icon > Manage Delegates (ניהול נציגים)
   - Add employees who can enter expense reports on your behalf
   - View list of all employees you can enter reports for

5. **Creating a New Report (יצירת דוח חדש)**
   - Click "Create Report" icon > Enter report purpose
   - Click "Create Item" (יצירת פריט) for each expense line

   **Expense Item Fields:**
   | Field | Notes |
   |---|---|
   | Date (תאריך) | Invoice date |
   | Template (תבנית) | Options: Research (מחקר), Projects and Current (פרויקטים ושוטף), KKMB (קקמ"ב) |
   | Type (סוג) | List of report types per template |
   | Amount (סכום) | Currency + amount; ILS default; auto-converts foreign currency at system rate |
   | Attachments (נספחים) | Scanned invoice -- **Required** |
   | Supplier Name (שם הספק) | As on invoice -- free text |
   | Invoice Number (מספר חשבונית) | As on invoice |
   | Description (תיאור) | Activity description |

   **Account Assignment per Template:**
   - **Projects and Current:** Select Department (מחלקה), Account (חשבון), Project (פרויקט)
   - **Research:** Select Account, Project, Research Year (שנת מחקר)
   - **KKMB:** Select Account, Sub-account (תת חשבון), Employee ID (תעודת זהות) > Click button to generate "Account Combination" (שילוב חשבונות)

   **Important:** System does NOT check budget availability at this stage. If insufficient budget found during approvals, request will be rejected.

6. **Submitting Report for Approval (שליחת הדוח לאישור)**
   - Status flow: Not Submitted (לא נשלח) > Pending Approval (ממתין לאישור) > Ready for Payment Processing (מוכן לעיבוד תשלום) > Ready for Payment (מוכן לתשלום) > Paid (שולם)
   - Click three dots > Submit (שליחה)
   - View approval chain via "View Report History" and "Pending Manager Approval" links
   - **Note:** Approval chain details may take several minutes to appear

7. **Approving Expense Reports (אישור דוח הוצאות)**
   - Approver receives notification via bell icon
   - Can approve/reject directly from notification
   - For detailed review: click link to see Budget Control (יתרה תקציבית), Report Lines, Duplicate Detection
   - **If available balance is negative (red): reject or increase budget**
   - To view attachments: must enter full report via button

8. **Creating Standalone Expense Items (יצירת פריט הוצאות חדשה)**
   - Create expense item first, attach to report later
   - Saved but not submitted until attached to a report

9. **Creating Report for Another User (יצירת דוח הוצאות עבור משתמש אחר)**
   - Change "Owner" (בעלים) field at top of screen
   - Select alternative user from authorized list

---

### 14. Ananet System Launch Presentation

**Hebrew Title:** מצגת עליית מערכת עננט
**Pages:** 36 | **Date:** 05-02-2026

#### Topics Covered

1. **System Transition Overview**
   - Moving from "Barnet" (ברנט) to "Ananet" (עננט) -- on-premise to Oracle Cloud ERP
   - Bar-Ilan will be the first Israeli university on a modern cloud ERP
   - Modules: HR, Finance, Procurement, Dedicated Research/Grants module

2. **Reasons for Change**
   - Current system operational since 2010
   - Outdated local infrastructure
   - Limited flexibility and stability
   - No future support

3. **Benefits of New System:**
   - Accessibility from anywhere (including mobile and abroad)
   - Enhanced security
   - Regular updates and new features
   - Advanced analytics and data tools
   - Automation and built-in AI capabilities
   - Advanced supplier portal

4. **Critical Timeline:**
   | Date | Milestone |
   |---|---|
   | 10/02/2026 | Last date for local purchase requisitions |
   | 26/04/2026 | Last date for international purchase requisitions (imports), travel |
   | 12/03/2026 | Last date for most operations |
   | 19/03/2026 | Barnet system shutdown |
   | 19/03 - 26/04/2026 | Shutdown period (data migration) -- timed around Passover |
   | 01/04 - 08/04/2026 | Passover holiday |
   | 26/04/2026 | Ananet system launch |

5. **Preparation Recommendations:**
   - Advance purchase orders and approvals
   - Expedite payments where possible
   - Advance international travel bookings
   - Advance import orders
   - Advance lab material orders and update inventories
   - Advance student scholarship setup
   - Advance sub-contracts from other institutions

6. **Support:**
   - Training program to be published before launch
   - Detailed guides with screenshots to be distributed
   - Dedicated email: ananet.service@biu.ac.il
   - Support form available
   - Dedicated support center at IT: 072-264-4999

7. **Q&A Highlights (23 questions covered):**
   - Research assistant permissions will carry over
   - System accessible remotely
   - No data loss expected from migration
   - Support center covers both how-to and troubleshooting (permanent, not temporary)
   - No impact on retirees who were teaching/research associates
   - Cannot commit to suppliers without approved PO during shutdown
   - Tenders closing during transition: handled case-by-case
   - Urgent equipment repairs abroad: special procedures
   - Monthly supplier payments: advance where possible
   - Retroactive expense reimbursement: yes, possible after system goes live
   - Budget framework preservation: can pre-create requisitions
   - Existing scholarships transfer automatically
   - Budget transfers between units during shutdown: handled manually if needed
   - March/April student scholarships: will be paid on time
   - Research assistant travel during shutdown: advance all arrangements
   - Private flight payment during shutdown with retroactive reimbursement: possible
   - Approved "Passport" travel during shutdown: continues as approved
   - Conference supporting documents: call for papers + proposal + budget confirmation acceptable

---

## LOGISTICS DOCUMENTS

---

### 15. Purchase Orders Guide

**Hebrew Title:** מדריך למשתמש -- הזמנות רכש
**Pages:** 136 | **Author:** Noam Weiss | **Last Updated:** 14-07-2025

#### Topics Covered

This is the most comprehensive guide (136 pages). Covers the full lifecycle of purchase orders at Bar-Ilan University.

1. **Introduction (מבוא)**
   - Purchase orders follow purchase requisitions
   - Some POs created automatically upon requisition approval; others require manual creation
   - All POs go through approval hierarchy based on requisition type
   - Requisitions routed to specific buyers (קניינים) by product category and requisition type

2. **Purchase Orders -- General Overview (הזמנות רכש -- מבט כללי)**

   **2.1 System Login**
   - Open link in browser > SSO authentication
   - Language: Hebrew (עברית)
   - Navigate: Modules bar > Procurement (רכש) > Purchase Orders (הזמנות רכש)

   **2.2 Home Page Dashboard**
   - Tiles (Infolets): Orders requiring attention, In-process orders, Open schedules, Old requisition lines, Recent activity, Action-required requisitions, Change requests, Incomplete items, Orders awaiting receipt confirmation
   - Customize visible tiles: "My Infolets" menu
   - Refresh: "Refresh Page" button

   **2.3 Menus**
   - Tasks (משימות): Main screens for creation, processing, management
   - Search (חיפוש): Search requisitions, orders, agreements, suppliers
   - Reports (דוחות): Standard reports and scheduling options
   - Notifications (הודעות): Approval workflow notifications

   **2.4 Order Management (ניהול הזמנות)**
   - Search with multiple criteria
   - Advanced search with additional fields
   - View order details: header, lines, schedules, receipts
   - Print PO document
   - Edit order (creates Change Order if already approved)

   **2.5 Order Cancellation (ביטול הזמנת רכש)**
   - Cancel full order or specific lines
   - Actions > Cancel > Select reason
   - Status changes to "Cancelled" (בוטל)

3. **Regular Purchase Order (הזמנת רכש רגילה)**

   **3.1 Process Flow:**
   Requisition > Approval > PO Creation (manual) > PO Approval > Send to Supplier > Receipt > Invoice

   **3.2 Approval:**
   - Buyer receives notification for requisition requiring manual PO creation
   - Review requisition details before creating PO

   **3.3 PO Creation (יצירת הזמנה):**

   **Navigation:** Purchase Orders > Tasks > Create Order

   **Key Header Fields:**
   | Field | Required | Notes |
   |---|---|---|
   | Style (סגנון) | Required | Standard PO |
   | Supplier (ספק) | Required | Search and select |
   | Supplier Site (אתר ספק) | Required | |
   | Buyer (הקונה) | Required | Auto-populated |
   | Currency (מטבע) | Required | Default ILS |
   | Communication Method (שיטת תקשורת) | Optional | Email, fax, etc. |
   | Description (תיאור) | Optional | |

   **Line Fields:**
   | Field | Required | Notes |
   |---|---|---|
   | Type (סוג) | Required | Goods / Services / Fixed-Price Services |
   | Item (פריט) | Optional | Select from catalog |
   | Description (תיאור) | Required | |
   | Category (קטגוריה) | Required | Product category |
   | Quantity (כמות) | Required | |
   | Unit Price (מחיר ליחידה) | Required | |
   | Requested Delivery Date | Optional | |
   | Delivery Location | Required | Campus location |
   | Charge Account (חשבון חיוב) | Required | From requisition or manual entry |

   **3.4 Editing PO:**
   - Edit creates a Change Order (הוראת שינויי) if PO already approved
   - Can modify: supplier, lines, prices, quantities, schedules, accounts

4. **International Purchase Order -- Import of Goods (הזמנת רכש חו"ל -- ייבוא טובין)**

   **4.1 Process Flow:**
   Requisition > Approval > Buyer Creates Foreign PO > Add Logistics Lines > Approval > Send to Supplier > Customs & Logistics > Receipt > Invoice

   **4.2 Requisition Approval Process:**
   - Buyer receives requisition notification
   - Can edit requisition details (supplier, prices, terms)
   - Must add charges for: customs, freight, insurance, handling fees
   - Create separate PO lines for logistics suppliers

   **4.3 Creating Foreign PO:**
   - Similar to regular PO but with foreign currency
   - Additional logistics lines for customs agents, freight forwarders
   - Split lines for multiple logistics suppliers

   **4.7 Special Notes for International Orders:**
   - Currency handling
   - Multiple supplier management
   - Customs documentation requirements

5. **Catalog Order -- Framework Agreement (הזמנה ממחירון / הסכם מסגרת)**

   **5.1 Process:** Requisition from catalog > Auto-approval > Auto-PO creation > Auto-PO approval
   - Fastest process -- most steps are automatic

6. **Internal Orders -- Internal Suppliers (הזמנה פנימית / מוכרנים פנימיים)**

   **6.1 Process:**
   Requisition > Internal supplier approval > Auto-PO > Service/Delivery > Manual Final Close

   - Internal suppliers (מוכרנים) = campus departments providing services
   - Common practice: price listed as 1 ILS in catalog; real price updated during approval
   - No invoice generated -- buyer must manually perform "Final Close" (סגירה סופית)
   - Budget transfer from requester to internal supplier via scheduled process

   **6.3 Final Close:**
   - Navigate to: Purchase Orders > Tasks > Manage Orders > Search > Select > Actions > Close
   - Select "Final Close" (סגירה סופית) in Action field

7. **Change Orders (הוראות שינויי)**

   **7.1 Change Order on PO:**
   - Edit approved PO > System creates Change Order automatically
   - Describe changes > Submit for approval

   **7.2 Change Order on Requisition:**
   - Edit requisition that already has a PO
   - Changes propagate to related PO after approval

8. **Contractual Purchase Agreement -- Amount without Quantity (הסכם חוזי לרכש)**
   - For ongoing supplier relationships with agreed total amount
   - No specific quantities defined
   - Individual POs reference the agreement

9. **Framework Purchase Agreement -- Catalog/Pricelist (הסכם מסגרת לרכש / מחירון)**

   **9.1 Process:** Create Agreement > Add Items & Prices > Approval Cycle > Available for Requisitions

   **9.2 Creating Framework Agreement:**

   **Navigation:** Purchase Orders > Purchase Agreements > Tasks > Create Agreement

   **Key Fields:**
   | Section | Field | Required | Notes |
   |---|---|---|---|
   | General | Style (סגנון) | Required | Framework Purchase Agreement |
   | General | Supplier | Required | |
   | General | Currency | Required | Default ILS |
   | General | Buyer (הקונה) | Required | Routes requisitions to this buyer |
   | Controls | Business Unit | Required | Bar-Ilan - Legal Entity |
   | Controls | Procurement Site | Required | Auto-fills from supplier site |
   | Controls | Auto-generate PO | Required | Must be checked |
   | Controls | Auto-submit for approval | Required | Must be checked |
   | Controls | Allow retroactive pricing | Required | Must be checked |
   | Notifications | Condition-based alerts | Optional | Expiry, released/unreleased amounts |

   **9.3 Loading Lines from File (טעינת שורות מקובץ):**
   - Create template once from any existing agreement
   - Download ZIP > Extract Template text file > Open in Excel
   - Save as Unicode.txt
   - Fill columns: Action (ADD/SYNC), Description, Category, Supplier Item, Internal Item Number, Unit of Measure, Price
   - Upload via: Edit > Lines > Actions > Load Lines

10. **Tasks and Approvals (משימות ואישורים)**
    - Approval screen usage
    - Actions in requisition approval form: approve, reject, reassign, delegate, add notes

11. **BiRad Orders (הזמנה מביראד)**
    - Special process for BiRad company orders

12. **Transportation Orders (הזמנת היסעים)**
    - Special process for transportation/shuttle services

13. **Construction Orders (הזמנת בינוי)**
    - Special process for construction/building projects
    - Unique requisition creation, approval flow, and PO generation
    - Receipt reporting considerations

---

### 16. Internal Procurement Guide

**Hebrew Title:** רכש פנימי
**Pages:** 22 | **(Subset of Purchase Orders guide, pages 72-104)**

This document is a subset from the main Purchase Orders guide focusing specifically on internal procurement processes. Key topics:

1. **Internal Orders (הזמנה פנימית / מוכרנים פנימיים)**
   - Same content as Section 6 of the Purchase Orders guide
   - Internal campus suppliers (e.g., IT department renting classrooms, providing backup services)
   - Price = 1 ILS in catalog; real price communicated during approval cycle
   - Requester updates quantity to match real total

2. **Framework Agreement for Procurement / Catalog (הסכם מסגרת לרכש / מחירון)**
   - Same content as Section 9 of the Purchase Orders guide
   - Creating, editing, and loading catalog items
   - File upload template process

---

### 17. Inventory Management Guide

**Hebrew Title:** מדריך למשתמש -- ניהול מלאי
**Pages:** 62 | **Author:** Noam Weiss | **Last Updated:** 14-07-2025

#### Topics Covered

1. **Introduction**
   - Covers all warehouse/inventory operations for Bar-Ilan central warehouse
   - Processes: requisitions, receipts, picking, shipping, inventory counts, item management

2. **Purchasing from Inventory (רכש מהמלאי)**

   **2.1 Process Flow:**
   Requisition (inventory item) > Approval > Transfer Order (הוראת העברה) > Shipment Creation > Picking > Delivery > Budget Transfer

   - No PO or invoice in this process
   - Budget transferred from requester to warehouse via scheduled process

   **2.2 From Requisition to Transfer Order:**
   - Requester creates requisition for inventory item (not supplier item)
   - Specifies delivery location and desired delivery date
   - After approval: auto-converted to Transfer Order within minutes

   **2.3 Shipment Creation -- Method A (detailed):**
   - Navigate: Supply Chain Execution > Inventory Management
   - Tasks > Show Tasks > Shipments > Manage Shipment Lines
   - Search transfer orders by criteria (delivery date, customer, status)
   - Select lines > "Create Automatic Shipment"
   - Save -- shipment number auto-assigned

   **2.4 Creating Pick Slips (שוברי ליקוט):**
   - Click shipment number > Actions > Release for Picking (שחרור לליקוט)
   - Alternatively: select multiple shipment lines > Actions > Release for Picking

   **2.5 Printing Pick Slips (הפקת תדפיס שוברי ליקוט):**
   - Navigate: Reports and Analytics > Search "Pick Slip Report"
   - Parameters: Organization, date range
   - Output as PDF

   **2.6 Shipment Verification (אימות משלוחים):**
   - After picking: confirm actual quantities shipped
   - Update "Quantity Shipped" (כמות שנשלחה) field
   - Actions > Confirm Shipment (אישור משלוח)

   **2.7 Delivery (מסירה):**
   - Physical delivery to requester

   **2.8 Picking and Shipping -- Method B (streamlined):**
   - Combined picking + shipping in fewer steps
   - Uses "Pick Release" and "Ship Confirm" in single flow

3. **Min-Max Settings for Items (הגדרות מינ'-מקס' לפריט)**

   **3.1 Process:** Define minimum and maximum quantities per item per warehouse

   **3.2 Updating Min-Max Data:**
   - Navigate: Inventory Management > Tasks > Manage Item Quantities
   - Select item > Set Min Quantity, Max Quantity, Reorder Point
   - Safety stock calculations

   **3.3 Updating Purchase Data:**
   - Fixed lot size, lead times, preferred supplier

4. **Inventory Replenishment -- Min-Max Report (חידוש מלאי במחסן)**

   **4.1 Process:** Run Min-Max report > System generates purchase requisitions for items below minimum

   **4.2 Manual Min-Max Report:**
   - Navigate: Tasks > Min-Max Planning Report
   - Parameters: Organization, Planner, Item range
   - Report shows: current quantity, min, max, reorder quantity, suggested purchase quantity
   - Can auto-generate requisitions from report

5. **Receiving Orders to Inventory (קבלת הזמנות למלאי)**

   **5.1 Process:** PO exists > Goods arrive > Warehouse reports receipt

   **5.2 Receiving with PO (דיווח קבלת הזמנות למלאי):**
   - Navigate: Receiving > Tasks > Receive Expected Shipments
   - Search by PO number > Select lines > Enter received quantity
   - Submit receipt > Items added to inventory

   **5.3 Receiving without PO (דיווח קבלה למחסן ללא הזמנה):**
   - For items arriving without PO
   - Manual entry of item details, quantities, accounts

6. **Inventory Management / Physical Inventory (ניהול מצאי / אינוונטאר)**

   **6.1 Process:** Create inventory count > Tag items > Count > Update > Approve adjustments

   **6.2 Creating Inventory Item (יצירת פריט אינוונטאר):**
   - For tracking non-warehouse items across campus

   **6.3 Managing Inventory Items:**
   - Update locations, quantities, status

7. **Inventory Counts (ספירות מלאי)**

   **7.1 Process:** Define count > Snapshot > Generate tags > Print count sheets > Count > Update > Approve

   **7.2 Creating Inventory Count:**
   - Navigate: Inventory Management > Tasks > Create Inventory Count
   - Parameters: Organization, Scope (full/partial), Items

   **7.3 Inventory Snapshot (צילום מצב מלאי):**
   - Captures current on-hand quantities at count start

   **7.4 Creating Count Tags (יצירת תגיות):**
   - System generates tags for each item to be counted

   **7.5 Printing Count Sheets (הדפסת דפי הספירה):**
   - Physical sheets for warehouse staff

   **7.6 Updating Count Results (עדכון תוצאות הספירה):**
   - Enter actual counted quantities
   - System calculates variances

   **7.7 Approving Count (אישור הספירה):**
   - Review and approve adjustments
   - Adjustments posted to inventory

8. **Tasks and Approvals (משימות ואישורים)**
   - Approval workflow for inventory transactions

9. **Inventory Reports (דו"חות מלאי)**
   - Various standard reports for inventory analysis

---

### 18. Infrastructure (Master Data) Guide

**Hebrew Title:** מדריך למשתמש -- תשתיות
**Pages:** 66 | **Author:** Noam Weiss | **Last Updated:** 30-06-2025

#### Topics Covered

1. **Introduction**
   - Covers foundational infrastructure/master data setup for logistics
   - Static data tables: suppliers, catalogs, items, warehouses
   - Used by: requesters, buyers, warehouse staff, safety department

2. **Standard Purchased Item Setup (הקמת פריט נרכש סטנדרטי)**
   - Items NOT managed in warehouse inventory and NOT hazardous materials

   **2.1 Process:** Create Item > Assign to Inventory Orgs > Assign to Catalog Category > Add Attachments > Update Physical Attributes

   **2.2 Creating Item via Template:**
   - Navigate: Product Management (ניהול מוצר) > Product Information Management > Tasks > Create Item
   - Item Classification: Root Item Classification (סיווג פריט שורש)
   - Template: General Procurement (רכש כללי)
   - Organization: BIM (top org)
   - Fill: Item number (מק"ט), Description, Status (Active), Lifecycle Phase (Manufacturing), Primary UOM

   **Key Steps:**
   - Categories tab: Assign appropriate procurement category
   - Attachments tab: Upload related files
   - Organizations tab: Assign to inventory organizations (BIM, warehouses)
   - Purchasing tab: Verify procurement settings
   - Physical Attributes: weight, dimensions, etc.

   **2.3 Creating Item by Copying Existing:**
   - Search existing similar item > Copy > Modify as needed

3. **Inventory-Managed Item Setup (הקמת פריט מנוהל מלאי)**
   - Items ordered from central warehouse

   **3.1 Process:** Create Item > Assign Orgs > Assign Category > Add Attachments > Configure Inventory Settings > Price Fixing

   **3.2 Creating via Template:**
   - Template: "Warehouse Item" (פריט מחסני)
   - Additional settings: Lot control, serial control, subinventory defaults
   - Inventory-specific tabs: Planning, Receiving, Material Handling

   **3.3 Creating by Copying Existing Item**

   **3.4 Price Fixing (קיבוע מחיר):**
   - Navigate: Pricing > Manage Pricing > Price Lists
   - Find or create price list for the item
   - Set unit price, currency, validity dates
   - Required for items sold from warehouse to internal requesters

4. **Hazardous Materials Item Setup (הקמת פריט חומ"ס)**
   - For dangerous/chemical materials with special regulatory requirements

   **4.1 Process:** Create Poison Group > Set Lab Max Quantities > Create HAZMAT Category > Create HAZMAT Item > Create Hazardous Item > Set Unit Conversions > Define Relationships

   **4.2 Creating Poison Group (יצירת קבוצת רעלים):**
   - Custom classification for regulatory compliance
   - Fields: Group name, toxicity level, regulatory codes

   **4.3 Lab Maximum Quantities (עדכון כמות מרבית למעבדה):**
   - Set maximum allowed quantities per lab/location
   - Safety compliance requirement

   **4.4 Creating HAZMAT Category (יצירת קטגורית קבוצת חומ"ס):**
   - Hierarchical categorization of hazardous materials

   **4.5 Creating HAZMAT Group Item (יצירת פריט קבוצת חומ"ס):**
   - Parent item representing a group of related hazardous items

   **4.6 Creating Individual Hazardous Item (יצירת פריט חומר מסוכן):**
   - Specific hazardous material with all safety data
   - Links to SDS (Safety Data Sheets)

   **4.7 Unit of Measure Conversion (הגדרת יחס המרת יחידות):**
   - Define conversions between different UOMs (e.g., kg to liters)

   **4.8 Defining Relationships (הגדרת קשרים):**
   - Link related items, substitute items

5. **Item and Catalog Management (ניהול פריטים וקטלוגים)**

   **5.1 Item Management (ניהול פריטים):**
   - Search, edit, deactivate items
   - Update attributes, categories, organizations

   **5.2 Catalog Management (ניהול קטלוגים):**
   - Create and manage procurement catalogs
   - Organize items into browsable categories
   - Used by requesters when creating requisitions

6. **Warehouse/Lab Setup (הקמת מחסן/מעבדה)**

   **6.1 Process:** Define in system as inventory organization

   **6.2 Creating Warehouse:**
   - Navigate: Inventory Management > Setup > Manage Inventory Organizations
   - Define: Name, code, type, address, default settings
   - Configure: subinventories, locators, receiving parameters

7. **Bulk Loading HAZMAT Items from File (טעינת פריטי חומ"ס מקובץ)**
   - File-based import for bulk creation of hazardous material items
   - Template structure, validation rules, upload process

---

## KEY HEBREW TERMINOLOGY GLOSSARY

| Hebrew Term | English Translation | Context |
|---|---|---|
| עננט | Ananet | Oracle Fusion Cloud ERP system name |
| ברנט | Barnet | Legacy ERP system being replaced |
| ספר ראשי (GL) | General Ledger | Main accounting ledger |
| פקודת יומן | Journal Entry | Accounting entry |
| חשבונאות כללית | General Accounting | GL module |
| חייבים (AR) | Receivables | Accounts Receivable |
| זכאים (AP) | Payables | Accounts Payable |
| תשלומים | Payments | Payment processing |
| התאמת בנקים | Bank Reconciliation | Bank rec module |
| רכוש קבוע | Fixed Assets | FA module |
| בקרה תקציבית | Budget Control | Budget management |
| תקציב | Budget | Budget |
| פרויקט | Project | Project |
| הזמנת רכש | Purchase Order (PO) | Procurement order |
| דרישת רכש | Purchase Requisition | Procurement request |
| הסכם מסגרת | Framework Agreement | Blanket/catalog agreement |
| הסכם חוזי | Contractual Agreement | Contract-based agreement |
| מחירון | Price List / Catalog | Item catalog with prices |
| ספק | Supplier/Vendor | External supplier |
| לקוח | Customer | Customer entity |
| חשבונית | Invoice | Invoice document |
| תקבול | Receipt | Customer payment received |
| הפקדה | Deposit | Bank deposit |
| זיכוי | Credit | Credit memo |
| מקדמה | Advance | Advance payment |
| אצווה / אצוות | Batch | Processing batch |
| יחידה עסקית | Business Unit | Organizational unit |
| ישות משפטית | Legal Entity | Legal entity |
| יחידה ארגונית | Organizational Unit | Org unit for budgets |
| קומבינציה | Combination | Account code combination |
| מקטע | Segment | Account segment |
| חשבון קיזוז | Offset Account | Contra account |
| שערוך | Revaluation | FX revaluation |
| פחת | Depreciation | Asset depreciation |
| טופס י"א | Form Yod-Alef | Israeli depreciation form |
| מסב / מסב"ים | Masav | Israeli electronic payment system |
| מטח / מט"ח | Foreign Currency | Foreign exchange |
| ניכוי מס במקור | Withholding Tax | Tax withholding at source |
| מס מדורג | Graduated Tax | Tiered tax rate |
| רפרנט תקציבי | Budget Referent | Person responsible for budget |
| דוח גיול | Aging Report | Receivables aging |
| כרטסת | Ledger Card | Account statement |
| סגירת תקופה | Period Close | Accounting period closure |
| ניהול מלאי | Inventory Management | Inventory module |
| הוראת העברה | Transfer Order | Internal transfer |
| שובר ליקוט | Pick Slip | Warehouse picking document |
| ספירת מלאי | Inventory Count | Physical count |
| אינוונטאר | Inventory / Physical Count | Asset tracking |
| מינ'-מקס' | Min-Max | Reorder point planning |
| חומ"ס | Hazardous Materials (HAZMAT) | Dangerous goods |
| קבוצת רעלים | Poison Group | Toxin classification |
| מק"ט | Item Number / SKU | Product identifier |
| קטלוג | Catalog | Product catalog |
| מחסן | Warehouse | Storage facility |
| מוכרן פנימי | Internal Supplier/Seller | Campus service provider |
| קניין | Buyer | Procurement officer |
| דורש | Requester | Person creating requisition |
| סבב אישורים | Approval Cycle | Workflow approvals |
| הוראת שינויי | Change Order | Modification order |
| קקמ"ב | KKMB | Special research fund type |
| משק סגור | Closed Budget | Restricted project budget |
| שריון | Reservation / Encumbrance | Budget reservation |

---

## KEY ORACLE CLOUD NAVIGATION PATHS

| Module | Navigation Path |
|---|---|
| General Accounting | Home > חשבונאות כללית > פקודות יומן |
| Bank Reconciliation | Home > (icon) > התאמה ידנית |
| Receivables | Home > חיוב > משימות |
| Payables Overview | Home > זכאים > מבט על |
| Payables Invoices | Home > זכאים > חשבוניות |
| Payments | Home > זכאים > תשלומים > מבט על |
| Fixed Assets | Home > רכוש קבוע > נכסים |
| Budget Control | Home > בקרת תקציב > לוח מידע |
| Projects | Home > פרויקטים |
| Expense Reports | Main menu > אני > הוצאות |
| Purchase Orders | Modules bar > רכש > הזמנות רכש |
| Purchase Agreements | Modules bar > רכש > הסכמי רכש |
| Inventory Management | Modules bar > ביצוע שרשרת אספקה > ניהול מלאי |
| Product Management | Modules bar > ניהול מוצר > ניהול מידע על מוצר |
| Reports | Home > דוחות ואנליטיקס |
| Setup | הקמה ותחזוקה |

---

## IMPORTANT WARNINGS AND TIPS ACROSS ALL GUIDES

1. **Budget Control:** System does NOT check budget at expense report creation stage; budget check happens during approval cycle
2. **Projects:** Do NOT perform budget transfers directly in the Projects module; use the dedicated transfer screen
3. **Projects:** Once a project is created in GL, flexible field configurations CANNOT be changed
4. **Projects:** Budget Version 1 is frozen after approval; all changes go in Version 2+
5. **Fixed Assets:** After period close, the period CANNOT be reopened and no operations can be performed
6. **Supplier Registration:** Invalid company/dealer number causes data deletion during registration
7. **Supplier Registration:** Must have at least one contact and one address with "Orders" and "Payment Transfer" purposes
8. **Payment Batches:** After final confirmation, batch cannot be bulk-cancelled
9. **Bank Reconciliation:** Only manual reconciliation currently available; automatic planned for future
10. **Bank Reconciliation:** Unreconciled transactions do not create journal entries -- must reconcile first
11. **Inventory:** Two methods for picking/shipping -- Method A (detailed) gives more control; Method B (streamlined) is faster
12. **HAZMAT Items:** Special classification, lab maximum quantities, and safety compliance required
13. **Framework Agreements (Catalogs):** Must enable auto-generate PO, auto-submit for approval, and retroactive pricing
14. **Budget Transfers:** Cannot create negative budgets; transfer totals must balance to zero
15. **Expense Reports:** Approval chain details may take several minutes to appear after submission
16. **System Transition:** Shutdown period 19/03/2026-26/04/2026; advance all critical operations before this date
