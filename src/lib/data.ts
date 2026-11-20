export interface WorkflowItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  tools: string[];
  timestamp: string;
  timeAction: string;
  trigger: string;
  steps: string[];
  result: string;
  caseStudy: {
    client: string;
    metric: string;
    quote: string;
  };
}

export interface ResultItem {
  id: string;
  num: string;
  client: string;
  industry: string;
  year: string;
  headline: string;
  metric: string;
  metricSub: string;
  summary: string;
  before: string;
  after: string;
  workflowUsed: string;
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface IndustryItem {
  id: string;
  num: string;
  name: string;
  share: string;
  workflows: string[];
  description: string;
  exampleClient: string;
}

export interface ToolItem {
  id: string;
  num: string;
  name: string;
  category: string;
  description: string;
  connectsTo: string[];
  workflowCount: number;
  since: string;
}

export interface ArticleItem {
  slug: string;
  type: "Guide" | "Insight" | "Report";
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
}

export interface FaqItem {
  num: string;
  question: string;
  answer: string;
  category?: string;
}

// -------------------------------------------------------------
// WORKFLOWS DATA
// -------------------------------------------------------------
export const WORKFLOWS: WorkflowItem[] = [
  {
    id: "invoicing",
    num: "01",
    title: "Invoicing",
    tagline: "Invoices out the minute a job closes, chased until paid.",
    summary: "When a job is marked done in your project tool, the invoice is built from the quote, checked against purchase orders, and delivered with payment links.",
    description: "Manual invoice chasing eats hours every Friday. Runbook wires your billing systems directly to work tracking so payment cycles drop from 45 days to 9 days.",
    tools: ["Xero", "QuickBooks", "Stripe", "GoCardless", "Gmail"],
    timestamp: "02:14",
    timeAction: "Invoice #4821 sent",
    trigger: "Job marked 'Complete' in project tracker or CRM",
    steps: [
      "Job status change triggers draft invoice creation in accounting software",
      "Line items and expenses validated against quote specifications",
      "Invoice emailed with one-click payment links (card / bank debit)",
      "Automated gentle reminders scheduled for days 7, 14, and 21 until reconciled",
    ],
    result: "Payments collected 9 days faster without administrative friction.",
    caseStudy: {
      client: "Northcode Studio",
      metric: "9 days faster paid",
      quote: "We used to lose half of every Monday afternoon writing reminders. Now invoices land automatically before our clients finish their morning standup.",
    },
  },
  {
    id: "lead-routing",
    num: "02",
    title: "Lead routing",
    tagline: "Every enquiry scored, assigned and in the CRM in seconds.",
    summary: "Incoming leads from forms, chats, or partner portals are enriched with company firmographics, deduplicated, and routed instantly to the right desk.",
    description: "Speed to lead is the highest predictor of close rate. In under 60 seconds, enquiries are scored, enriched, and put into your pipeline with draft replies.",
    tools: ["HubSpot", "Pipedrive", "Typeform", "Clearbit", "Slack"],
    timestamp: "02:15",
    timeAction: "Lead qualified · CRM updated",
    trigger: "New inbound enquiry submitted via website or partner API",
    steps: [
      "Webhook fires on form submission; Clearbit/enrichment API fetches employee count & revenue",
      "Lead scoring algorithm calculates qualification tier (A, B, C)",
      "Contact and deal records created in CRM with calendar booking links",
      "Slack notification sent to matching team channel with full context dossier",
    ],
    result: "Lead response time drops from 4 hours to under 60 seconds.",
    caseStudy: {
      client: "Aldgate Estates",
      metric: "3× viewings booked",
      quote: "Portal leads answered in under a minute mean negotiators find qualified buyers before competitors even download their spreadsheets.",
    },
  },
  {
    id: "support",
    num: "03",
    title: "Support",
    tagline: "Tickets answered, tagged and escalated without a queue.",
    summary: "Customer queries are categorized, common requests resolved instantly from internal knowledge bases, and complex issues routed with conversation history.",
    description: "Up to 70% of inbound tickets are repetitive queries. Runbook equips your helpdesk with autonomous triage agents that maintain brand voice.",
    tools: ["Intercom", "Zendesk", "Help Scout", "Slack", "Notion"],
    timestamp: "02:16",
    timeAction: "Ticket #772 closed",
    trigger: "New support ticket received via email, widget or portal",
    steps: [
      "Ticket text parsed for urgency, topic intent, and sentiment",
      "Knowledge retrieval matches ticket to verified documentation",
      "Autonomous draft response generated or standard action executed",
      "Complex edge-cases escalated to team with bullet-point summary",
    ],
    result: "71% of standard tickets resolved unattended overnight.",
    caseStudy: {
      client: "Fernwood Living",
      metric: "71% tickets closed unattended",
      quote: "Customers wake up to solved inquiries instead of a queue ticket. Our team now focuses purely on complex high-touch accounts.",
    },
  },
  {
    id: "onboarding",
    num: "04",
    title: "Onboarding",
    tagline: "Contracts, accounts and welcome sequences from one form.",
    summary: "One submission triggers client workspace provisioning, contract generation, billing authorization, and scheduled welcome communications.",
    description: "Client kickoff shouldn't require copy-pasting across eight apps. A single submission provisions everything in 90 seconds flat.",
    tools: ["DocuSign", "Google Drive", "Notion", "Slack", "Stripe"],
    timestamp: "02:18",
    timeAction: "Client folder created",
    trigger: "Deal marked 'Closed Won' in CRM",
    steps: [
      "Master service agreement auto-generated and dispatched via DocuSign",
      "Dedicated Google Drive directory structure and shared Notion portal built",
      "Stripe customer profile created and recurring billing mandate initialized",
      "Private Slack connect channel generated with automated welcome dossier",
    ],
    result: "Client kickoff time compressed from 3 days to under 3 minutes.",
    caseStudy: {
      client: "Crosslane Freight",
      metric: "31 h a week back",
      quote: "New drivers and vendors are onboarded with contracts and compliance checklists verified before their start date.",
    },
  },
  {
    id: "reporting",
    num: "05",
    title: "Reporting",
    tagline: "The numbers on the desk every morning, nobody builds them.",
    summary: "Daily figures aggregated overnight across financial tools, marketing pipelines, and operational queues, delivered as clean briefings at 07:00.",
    description: "Stop spending late Sunday evenings compiling weekly KPI decks. Runbook synthesizes multi-source data while the team sleeps.",
    tools: ["Google Sheets", "Looker Studio", "Xero", "HubSpot", "Slack"],
    timestamp: "02:20",
    timeAction: "Monday report sent",
    trigger: "Scheduled cron timer every day at 02:00 UTC",
    steps: [
      "Extract revenue numbers from Stripe & Xero",
      "Pull conversion metrics and pipeline velocity from CRM",
      "Calculate variance against weekly targets and format clean summaries",
      "Email structured PDF brief to leadership and post highlights to Slack",
    ],
    result: "Zero hours spent assembling manual reports each week.",
    caseStudy: {
      client: "Whitmore & Hale",
      metric: "4 min matter opening",
      quote: "The partners receive their billing realization numbers at 7 AM sharp with zero manual spreadsheet handling.",
    },
  },
];

// -------------------------------------------------------------
// RESULTS DATA
// -------------------------------------------------------------
export const RESULTS: ResultItem[] = [
  {
    id: "harbour-dental",
    num: "01",
    client: "Harbour Dental",
    industry: "Clinics",
    year: "2026",
    headline: "Reminders by text, a reply to reschedule, the diary refilled from the waiting list.",
    metric: "−62 %",
    metricSub: "missed appointments",
    summary: "Two clinics with four dentists struggled with 40 morning calls and frequent last-minute cancellations.",
    before: "Reception spent 3 hours every morning manually calling patients; 18% of booked slots went empty due to no-shows.",
    after: "Two-way SMS reminders trigger auto-rescheduling; cancelled slots are instantly offered to the waitlist. Empty chair time dropped by two-thirds.",
    workflowUsed: "Support & Reminders",
    quote: {
      text: "Our front desk used to start the day with 40 reminder calls. Now it starts with patients. Missed appointments are down by two thirds and nobody on my team touched a spreadsheet to get there.",
      author: "Dr Hana Lee",
      role: "Practice Owner · Harbour Dental",
    },
  },
  {
    id: "northcode-studio",
    num: "02",
    client: "Northcode Studio",
    industry: "Agencies",
    year: "2026",
    headline: "Invoices generated on milestone completion, chased politely until paid.",
    metric: "9 days",
    metricSub: "faster paid",
    summary: "A 16-person design agency with project managers chasing billing milestones instead of delivering creative work.",
    before: "Invoice creation was delayed until month-end; average debtor days sat at 42 days.",
    after: "Figma & Linear task completions trigger draft invoices in Xero with payment links. Average payment arrival down to 14 days.",
    workflowUsed: "Invoicing & Billing",
    quote: {
      text: "We used to lose half of every Monday afternoon writing reminders. Now invoices land automatically before our clients finish their morning standup.",
      author: "Martin Keane",
      role: "Managing Director · Northcode Studio",
    },
  },
  {
    id: "fernwood-living",
    num: "03",
    client: "Fernwood Living",
    industry: "E-commerce",
    year: "2025",
    headline: "Order tracking, address changes and returns handled without human intervention.",
    metric: "71 %",
    metricSub: "tickets closed unattended",
    summary: "A direct-to-consumer furniture company inundated with 'Where is my order?' inquiries during seasonal rushes.",
    before: "Support team of 4 overwhelmed by 300+ daily tickets; response times exceeded 24 hours.",
    after: "Zendesk paired with Shopify & courier APIs answers delivery status and generates return labels instantly.",
    workflowUsed: "Customer Support Automation",
    quote: {
      text: "About 70% of our tickets now close themselves while our support agents only touch nuanced design consultations.",
      author: "Anjali Mehta",
      role: "Head of Operations · Fernwood Living",
    },
  },
  {
    id: "crosslane-freight",
    num: "04",
    client: "Crosslane Freight",
    industry: "Logistics",
    year: "2025",
    headline: "Driver dispatch, proof of delivery upload, and vendor onboarding unified.",
    metric: "31 h",
    metricSub: "a week back per team",
    summary: "A regional logistics depot managing 45 trucks with paper dockets and manual WhatsApp chains.",
    before: "Office dispatchers retyped delivery manifests into accounting software and called drivers individually.",
    after: "Mobile delivery signatures automatically close jobs, file PODs, and generate customer receipts in real time.",
    workflowUsed: "Onboarding & Dispatch",
    quote: {
      text: "The paperwork used to pile up until 8 PM every single evening. Now manifests reconcile themselves as each truck completes its drop.",
      author: "Daniel Okoro",
      role: "Operations Director · Crosslane Freight",
    },
  },
  {
    id: "whitmore-hale",
    num: "05",
    client: "Whitmore & Hale",
    industry: "Legal",
    year: "2025",
    headline: "Client matter intake and anti-money laundering checks automated in minutes.",
    metric: "4 min",
    metricSub: "from enquiry to open matter",
    summary: "A boutique commercial law firm spending billable associate hours on client intake compliance.",
    before: "Onboarding a new client required 5 separate forms, manual identity verification, and 3-5 days wait time.",
    after: "Secure client portal captures details, performs electronic ID checks, and builds matter workspaces in Clio.",
    workflowUsed: "Compliance & Intake",
    quote: {
      text: "What used to take a paralegal two days of back-and-forth emails now finishes in four minutes with complete audit trails.",
      author: "Eleanor Whitmore",
      role: "Senior Partner · Whitmore & Hale",
    },
  },
  {
    id: "aldgate-estates",
    num: "06",
    client: "Aldgate Estates",
    industry: "Real estate",
    year: "2024",
    headline: "Portal leads answered in under sixty seconds with calendar booking links.",
    metric: "3×",
    metricSub: "viewings booked",
    summary: "An independent London estate agency competing against corporate brokerages for Rightmove enquiries.",
    before: "Weekend and evening portal enquiries waited until Monday morning; 60% of prospective buyers ghosted.",
    after: "Inbound enquiries trigger instant SMS & WhatsApp verification with direct viewing scheduling.",
    workflowUsed: "Lead Routing & Scheduling",
    quote: {
      text: "Portal leads answered in under a minute mean our negotiators have their schedules packed before competitors even download their spreadsheets.",
      author: "Marcus Vance",
      role: "Principal Broker · Aldgate Estates",
    },
  },
];

// -------------------------------------------------------------
// INDUSTRIES DATA
// -------------------------------------------------------------
export const INDUSTRIES: IndustryItem[] = [
  {
    id: "clinics",
    num: "01",
    name: "Clinics",
    share: "24 %",
    workflows: ["Appointment reminders", "Intake forms", "Recall lists", "Deposit collection"],
    description: "Dental practices, physio centers and medical clinics reclaiming front desk time from scheduling calls.",
    exampleClient: "Harbour Dental",
  },
  {
    id: "agencies",
    num: "02",
    name: "Agencies",
    share: "21 %",
    workflows: ["Proposal to contract", "Client onboarding", "Timesheet to invoice", "Review requests"],
    description: "Design studios, software consultancies and marketing teams automating billing and project setup.",
    exampleClient: "Northcode Studio",
  },
  {
    id: "e-commerce",
    num: "03",
    name: "E-commerce",
    share: "18 %",
    workflows: ["Order updates", "Returns management", "Low-stock alerts", "Review syndication"],
    description: "Direct-to-consumer brands eliminating repetitive support tickets and streamlining vendor reorders.",
    exampleClient: "Fernwood Living",
  },
  {
    id: "logistics",
    num: "04",
    name: "Logistics",
    share: "14 %",
    workflows: ["Job dispatch", "Proof of delivery", "Customer updates", "Driver compliance"],
    description: "Haulage, courier and warehouse networks replacing manual manifest retyping with webhook pipelines.",
    exampleClient: "Crosslane Freight",
  },
  {
    id: "legal",
    num: "05",
    name: "Legal",
    share: "13 %",
    workflows: ["Matter intake", "Conflict checks", "Time to bill", "Document assembly"],
    description: "Law practices expediting AML verification and contract preparation without administrative bloat.",
    exampleClient: "Whitmore & Hale",
  },
  {
    id: "real-estate",
    num: "06",
    name: "Real estate",
    share: "10 %",
    workflows: ["Viewing bookings", "Valuation follow-ups", "Vendor updates", "Deposit tracking"],
    description: "Residential agencies securing instant lead response on portal enquiries and automated calendar sync.",
    exampleClient: "Aldgate Estates",
  },
];

// -------------------------------------------------------------
// TOOLS & INTEGRATIONS DATA
// -------------------------------------------------------------
export const TOOLS: ToolItem[] = [
  {
    id: "crm",
    num: "01",
    name: "CRM",
    category: "Sales",
    description: "Every lead, deal and note in one place, kept current by workflows rather than people.",
    connectsTo: ["HubSpot", "Pipedrive", "Salesforce"],
    workflowCount: 4,
    since: "2019",
  },
  {
    id: "invoicing",
    num: "02",
    name: "Invoicing",
    category: "Finance",
    description: "Quotes become invoices, invoices become reconciled cash without chasing.",
    connectsTo: ["Xero", "QuickBooks", "Stripe", "GoCardless"],
    workflowCount: 3,
    since: "2019",
  },
  {
    id: "inbox",
    num: "03",
    name: "Inbox",
    category: "Comms",
    description: "Mail read, sorted, enriched and drafted before you start your day.",
    connectsTo: ["Gmail", "Outlook", "Slack"],
    workflowCount: 5,
    since: "2020",
  },
  {
    id: "helpdesk",
    num: "04",
    name: "Helpdesk",
    category: "Support",
    description: "Tickets tagged, answered from internal docs and escalated with history attached.",
    connectsTo: ["Intercom", "Zendesk", "Help Scout"],
    workflowCount: 2,
    since: "2021",
  },
  {
    id: "docs",
    num: "05",
    name: "Docs",
    category: "Data",
    description: "Contracts, folders and shared workspaces created the moment they are needed.",
    connectsTo: ["Notion", "Google Drive", "DocuSign"],
    workflowCount: 3,
    since: "2020",
  },
  {
    id: "reporting",
    num: "06",
    name: "Reporting",
    category: "Data",
    description: "The figures pulled overnight and written up into morning briefings.",
    connectsTo: ["Google Sheets", "Looker Studio", "Airtable"],
    workflowCount: 2,
    since: "2022",
  },
];

// -------------------------------------------------------------
// PRICING PACKAGES DATA
// -------------------------------------------------------------
export const PRICING_PACKAGES = [
  {
    id: "audit",
    num: "01",
    name: "The Audit",
    price: "£2,800",
    cadence: "Fixed price",
    badge: "First step",
    summary: "We sit with the people who do the work and identify every task that repeats across your tool stack.",
    deliverables: [
      "2 days of structured observation across your departments",
      "Comprehensive map of 30+ repetitive operations",
      "ROI prioritization scorecard (hours lost vs implementation cost)",
      "Technical architecture plan for the top 5 high-impact workflows",
      "Credited 100% against build fees if you proceed",
    ],
    timeline: "Week 1",
  },
  {
    id: "build",
    num: "02",
    name: "Workflow Build",
    price: "£4,500",
    cadence: "Per workflow",
    badge: "Most popular",
    summary: "Turnkey custom automation wiring your tools with robust error handling, monitoring, and staff training.",
    deliverables: [
      "Full API & webhook integration between your systems",
      "Custom business logic & conditional routing rules",
      "Edge-case testing & failure fallback alerts to Slack",
      "Interactive staff walkthrough video & documentation",
      "30-day post-launch warranty with instant bug remediation",
    ],
    timeline: "Weeks 2–5",
  },
  {
    id: "run",
    num: "03",
    name: "The Night Shift",
    price: "£950",
    cadence: "Per month",
    badge: "Retainer",
    summary: "Dedicated monitoring, API schema update maintenance, and ongoing workflow tweaks as your team expands.",
    deliverables: [
      "24/7 autonomous heartbeat logging and alert triage",
      "API migration maintenance when tools release updates",
      "Up to 4 minor workflow modifications or prompt adjustments / month",
      "Weekly performance & task count executive report",
      "Direct Slack access to your assigned automation engineer",
    ],
    timeline: "Ongoing",
  },
];

// -------------------------------------------------------------
// PROCESS STEPS DATA
// -------------------------------------------------------------
export const PROCESS_STEPS = [
  {
    step: "01",
    week: "Week 1",
    title: "Audit",
    headline: "Finding the lost hours.",
    description: "We sit with the people who do the work and list every task that repeats. Most teams find thirty; we pick the ten that cost the most hours.",
    clientRole: "Two 45-minute interviews with department leads; view-only access to existing tools.",
  },
  {
    step: "02",
    week: "Week 2",
    title: "Map",
    headline: "Architecture & trigger rules.",
    description: "We map the exact triggers, data transformations, security boundaries, and fallback conditions before writing any automation code.",
    clientRole: "Review the workflow schematic and approve data validation criteria.",
  },
  {
    step: "03",
    week: "Weeks 3–4",
    title: "Build",
    headline: "Wiring the tools.",
    description: "Our engineers build the pipelines, test against historical company edge-cases, and integrate failure notifications into your team's Slack.",
    clientRole: "Provide sample edge-case data and test sandbox credentials.",
  },
  {
    step: "04",
    week: "Week 5",
    title: "Launch",
    headline: "Parallel run to live.",
    description: "We run the workflows in shadow mode alongside your manual team for 5 days to verify 100% accuracy, then switch fully to autopilot.",
    clientRole: "Sign off on shadow run accuracy verification.",
  },
  {
    step: "05",
    week: "Ongoing",
    title: "Autopilot",
    headline: "The morning report.",
    description: "The systems execute through the night. Your team arrives to reconciled accounts, answered leads, and clean morning briefings.",
    clientRole: "Read the Monday report; focus on high-value strategic work.",
  },
];

// -------------------------------------------------------------
// INSIGHTS / BLOG ARTICLES
// -------------------------------------------------------------
export const ARTICLES: ArticleItem[] = [
  {
    slug: "which-workflow-first",
    type: "Guide",
    date: "6 Oct 2026",
    readTime: "5 min read",
    title: "Which workflow to automate first",
    excerpt: "Sort the list by hours lost, not by what looks clever. A ten-minute scoring method that picks the first project.",
    author: {
      name: "Mara Lindqvist",
      role: "Founder · Solutions, Runbook",
    },
    content: [
      "When companies decide to automate, their first instinct is usually to build something complex: a multi-model customer service agent, a dynamic pricing pipeline, or an elaborate predictive forecast.",
      "In practice, the highest-ROI automation is almost always unglamorous. It is the invoice chasing email sent every Friday afternoon. It is the lead copied from Typeform into HubSpot. It is the Google Drive folder created when a client signs.",
      "Here is the simple 3-part framework we use during our first-week audits to identify which workflow to tackle first.",
      "1. Calculate Human Friction (Hours lost per week × hourly cost of the operator).",
      "2. Calculate Error Severity (What happens when a human forgets this step on a busy Friday?).",
      "3. Measure System Reliability (Are the target tools accessible via modern REST APIs or webhooks?).",
      "If a task occurs at least 15 times a week, touches two or more tools, and follows deterministic if-this-then-that rules, wire that one first. The hours saved immediately fund the rest of your automation roadmap.",
    ],
  },
  {
    slug: "zapier-make-n8n",
    type: "Insight",
    date: "26 Sep 2026",
    readTime: "6 min read",
    title: "Zapier, Make or n8n: which one your business should run on",
    excerpt: "Same apps, different owners, different costs at volume. How we choose, and where AI agents fit.",
    author: {
      name: "Jack Torrance",
      role: "Lead Automation Architect, Runbook",
    },
    content: [
      "One of the first questions clients ask is: 'Why not just hire someone on Upwork to build a few Zaps?'",
      "Zapier is incredible for rapid prototyping and simple linear automations. But as soon as your business reaches 10,000 tasks a month, Zapier's task-based pricing turns into a punitive tax on your growth.",
      "Make offers superior visual error branching and substantially better pricing at scale, making it our preferred engine for mid-sized operations.",
      "For enterprise setups with strict GDPR, HIPAA, or on-premise compliance requirements, self-hosted n8n is unbeatable. You own the execution environment, pay zero per-task fees, and maintain complete control over sensitive customer payloads.",
    ],
  },
  {
    slug: "invoice-chasing",
    type: "Guide",
    date: "15 Sep 2026",
    readTime: "5 min read",
    title: "Chasing invoices without chasing anyone",
    excerpt: "A four-step sequence in the client's own tone, tied to the day the work finishes, that stops the moment the money lands.",
    author: {
      name: "Mara Lindqvist",
      role: "Founder · Solutions, Runbook",
    },
    content: [
      "Most invoice chasing fails because it happens sporadically when the business owner notices cash flow dipping at the end of the month.",
      "Effective automated chasing operates with predictable mathematical regularity. It begins 3 days before the invoice is due with an automated delivery confirmation.",
      "On day +3, a gentle reminder with direct one-click Apple Pay or Stripe bank transfer links arrives.",
      "By connecting your bank feed reconciliation directly to the notification webhook, the sequence instantly pauses the second payment clears, ensuring no client ever receives an embarrassing reminder for an already-paid bill.",
    ],
  },
  {
    slug: "ai-agents-in-support",
    type: "Insight",
    date: "2 Sep 2026",
    readTime: "6 min read",
    title: "What an AI agent should and should not answer in support",
    excerpt: "About 70 % of tickets can close on their own. The other 30 % is where the setup matters.",
    author: {
      name: "Jack Torrance",
      role: "Lead Automation Architect, Runbook",
    },
    content: [
      "Nothing damages brand trust faster than an unconstrained LLM hallucinating refund policies or making false promises to an angry customer.",
      "The golden rule of customer support automation: Autonomous agents should only handle deterministic, verifiable retrieval tasks.",
      "Order status lookups, returns initiation, invoice re-sends, and appointment rescheduling should be automated with strict schema validation.",
      "Complaints, refund requests above £50, or messages detected with negative sentiment must be summarized and escalated to experienced human agents with full customer context.",
    ],
  },
  {
    slug: "the-morning-report",
    type: "Report",
    date: "18 Aug 2026",
    readTime: "4 min read",
    title: "The morning report: what founders actually read at 07:00",
    excerpt: "Why 80-page dashboard tools get ignored, and how a 6-line automated summary keeps leadership aligned.",
    author: {
      name: "Mara Lindqvist",
      role: "Founder · Solutions, Runbook",
    },
    content: [
      "Most executive dashboards fail because they require a founder to log into a portal and dig through filters to understand yesterday's performance.",
      "A great automated morning report delivers three numbers directly to your lock screen: Yesterday's Cash Collected, New Qualified Pipeline, and Unresolved Operational Blockers.",
      "When information is pushed proactively while the team sleeps, executive decisions happen over morning coffee rather than in reactive afternoon meetings.",
    ],
  },
  {
    slug: "cost-of-manual-work",
    type: "Guide",
    date: "5 Aug 2026",
    readTime: "7 min read",
    title: "The hidden compounding cost of manual data entry",
    excerpt: "It's not just the 3 hours a day. It's the context switching, the typos, and the staff burnout.",
    author: {
      name: "Jack Torrance",
      role: "Lead Automation Architect, Runbook",
    },
    content: [
      "When calculating the cost of manual administration, leaders usually multiply hourly wages by hours spent typing.",
      "This overlooks the compounding cost of context switching. Research shows it takes 23 minutes for an employee to regain deep focus after being interrupted by an administrative task.",
      "By removing repetitive data entry from skilled knowledge workers, team satisfaction rises, turnover drops, and operational velocity triples.",
    ],
  },
];

// -------------------------------------------------------------
// FAQS DATA
// -------------------------------------------------------------
export const FAQS: FaqItem[] = [
  {
    num: "01",
    question: "What exactly do you automate?",
    answer: "The repeatable work between your systems: invoicing and chasing, lead routing and CRM upkeep, client onboarding, support replies, reports and month end. If a task happens every week and touches more than one tool, it is an ideal candidate.",
    category: "Scope",
  },
  {
    num: "02",
    question: "Which tools do you work with?",
    answer: "We connect to the tools you already pay for: HubSpot, Pipedrive, Salesforce, Xero, QuickBooks, Stripe, Slack, Gmail, Notion, Google Workspace, DocuSign, Intercom, Zendesk, and over 60 others. If it has an API or webhook, we can wire it.",
    category: "Tools",
  },
  {
    num: "03",
    question: "How long does a first workflow take?",
    answer: "Five weeks from the first audit call to live autopilot. Week 1 is audit, Week 2 is mapping, Weeks 3–4 are build and edge-case testing, and Week 5 is parallel run and live launch.",
    category: "Timeline",
  },
  {
    num: "04",
    question: "What does it cost?",
    answer: "An audit is a fixed £2,800 (100% credited against your build if you proceed). Workflows are £4,500 each to build turnkey. The Night Shift monitoring retainer is £950/month to guarantee 24/7 uptime and ongoing adjustments.",
    category: "Pricing",
  },
  {
    num: "05",
    question: "What happens when something breaks?",
    answer: "Every workflow is built with automated dead-letter queues. If an external API changes or returns an unexpected error at 2 a.m., execution pauses, an alert with full debugging payload posts to our on-call Slack, and human engineers resolve it before morning.",
    category: "Reliability",
  },
  {
    num: "06",
    question: "Where does our data go?",
    answer: "Directly between your existing systems. We do not store your customer records, credentials, or proprietary files on third-party servers. All webhook authentication tokens remain secured in your private environment.",
    category: "Security",
  },
  {
    num: "07",
    question: "Do we own the workflows?",
    answer: "Yes, 100%. Everything we build belongs to you. If you ever decide to pause your retainer, the workflows continue running in your own accounts and your team has complete documentation.",
    category: "Ownership",
  },
  {
    num: "08",
    question: "Are we too small for this?",
    answer: "If you have at least 3 people spending more than 10 hours a week copying information between tools, you will see an immediate positive cash ROI in month one.",
    category: "Eligibility",
  },
];

// -------------------------------------------------------------
// NIGHT LOG TERMINAL DATA
// -------------------------------------------------------------
export const NIGHT_LOGS = [
  {
    time: "23:52",
    event: "New lead from website form",
    workflow: "Lead routing",
    result: "In the CRM, owner assigned, first reply sent",
  },
  {
    time: "00:07",
    event: "Proposal #318 signed",
    workflow: "Onboarding",
    result: "Workspace, invoice and welcome mail created",
  },
  {
    time: "00:41",
    event: "Invoice #4821 sent",
    workflow: "Invoicing",
    result: "Payment link sent, reminders set for day 7, 14 and 21",
  },
  {
    time: "01:15",
    event: "14 support tickets sorted",
    workflow: "Support triage",
    result: "9 answered, 5 handed to team with context dossier",
  },
  {
    time: "01:48",
    event: "Stock below 20 on SKU 1132",
    workflow: "Reordering",
    result: "Purchase order sent to supplier",
  },
  {
    time: "02:14",
    event: "Weekly report built",
    workflow: "Reporting",
    result: "In founder's inbox at 07:00 sharp",
  },
];
