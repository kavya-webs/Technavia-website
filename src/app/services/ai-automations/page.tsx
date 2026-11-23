import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { BookSection } from "@/components/sections/BookSection";
import { ServiceJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Custom AI Automations — Production n8n & API Workflows | TECHNAVIA",
  description:
    "Production n8n and API workflows that capture, qualify, and follow up with inbound leads in under 60 seconds—eliminating manual ops bottlenecks.",
  alternates: {
    canonical: "https://technaviatechnology.com/services/ai-automations",
  },
  openGraph: {
    title: "Custom AI Automations — Production n8n & API Workflows | TECHNAVIA",
    description:
      "Production n8n and API workflows that capture, qualify, and follow up with inbound leads in under 60 seconds—eliminating manual ops bottlenecks.",
    url: "https://technaviatechnology.com/services/ai-automations",
  },
};

const ICP_CALLOUTS = [
  {
    num: "01",
    tag: "HIGH-GROWTH B2B TEAMS",
    title: "Leads Waiting Hours to Be Contacted",
    desc: "Losing up to 40% of inbound revenue because prospects wait hours or days for a busy rep to respond instead of being engaged while buying intent is peak.",
  },
  {
    num: "02",
    tag: "SALES & REVENUE LEADERS",
    title: "Buried Under Manual Data Entry",
    desc: "Spending expensive SDR and AE hours copy-pasting lead data into CRM fields, tagging records, and manually researching company headcounts.",
  },
  {
    num: "03",
    tag: "OPERATIONS FOUNDERS",
    title: "Scaling Revenue Without Headcount",
    desc: "Needing 24/7 automated pipelines that enrich leads, score ICP fit, and book qualified meetings on autopilot without adding permanent payroll overhead.",
  },
];

const AUTOMATION_FEATURES = [
  {
    num: "01",
    title: "Sub-60s Inbound Lead Enrichment",
    desc: "Form submissions instantly ping Apollo, Clearbit, and LinkedIn APIs to extract headcount, estimated revenue, and tech stack data before your sales rep even sees the ticket.",
  },
  {
    num: "02",
    title: "LLM Qualification Agents",
    desc: "Autonomous LLM reasoning workers score inbound inquiries against your exact ICP criteria, flagging Tier-1 accounts and generating tailored pre-call intelligence briefs.",
  },
  {
    num: "03",
    title: "Autonomous Calendar Scheduling",
    desc: "High-value prospects receive an immediate personalized booking link and pre-drafted agenda, driving meeting booking rates up by over 140%.",
  },
  {
    num: "04",
    title: "Two-Way CRM Synchronization",
    desc: "Every data point, score, and meeting status automatically syncs into HubSpot, Salesforce, or Pipedrive on autopilot—eliminating hours of manual data entry.",
  },
  {
    num: "05",
    title: "Slack & Internal Telemetry Alerts",
    desc: "Rich interactive Slack notifications ping your executive team with high-intent lead briefs, one-click approval buttons, and deal stage summaries.",
  },
  {
    num: "06",
    title: "Night-Shift Reporting Workers",
    desc: "Scheduled background automations audit keyword rankings, verify uptime, compile client billing summaries, and dispatch morning executive digests.",
  },
];

const DELIVERABLES = [
  "Production n8n Workflow Bus & Dedicated Webhook Pipelines",
  "Sub-60s Lead Enrichment & LLM ICP Scoring Engine",
  "Two-Way CRM Integration (HubSpot, Salesforce, Pipedrive)",
  "Automated Calendar Funnel & Interactive Slack Telemetry Alerts",
  "100% Workflow Ownership (Self-Hosted or Cloud, Zero Per-Action Tax)",
];

const PIPELINE_STAGES = [
  {
    stage: "STAGE 01",
    name: "Inbound Webhook / Form / Meta Ad",
    desc: "Lead submits details on your website or ad form. Webhook fires instantly to trigger the automation bus with zero queue delay.",
    metric: "0.2s TRIGGER",
  },
  {
    stage: "STAGE 02",
    name: "AI Enrichment & ICP Scoring",
    desc: "API ping enriches company revenue, employee count, and tech stack. LLM evaluates ICP fit and assigns priority tier (Tier 1 / 2 / 3).",
    metric: "< 15s ENRICHMENT",
  },
  {
    stage: "STAGE 03",
    name: "Personalized Outreach & Booking",
    desc: "Prospect receives custom WhatsApp or email response with dynamic booking link and pre-populated questionnaire.",
    metric: "< 60s ENGAGEMENT",
  },
  {
    stage: "STAGE 04",
    name: "Two-Way CRM Sync & Slack Brief",
    desc: "HubSpot / Salesforce updated with all extracted attributes. Sales team receives an interactive Slack alert with meeting confirmation.",
    metric: "ZERO BUSYWORK",
  },
];

const FAQS = [
  {
    question: "Why use n8n instead of Zapier or Make?",
    answer:
      "n8n gives you complete control, self-hosting options, enterprise privacy, and zero exponential 'task taxes' as your lead volume multiplies. Your data stays strictly in your custody without recurring third-party transaction fees.",
  },
  {
    question: "How fast is the lead response really?",
    answer:
      "Our webhook and LLM pipelines consistently trigger within 15–45 seconds of form submission, ensuring the prospect is engaged while your product is still top of mind.",
  },
  {
    question: "What tools can you integrate with?",
    answer:
      "Any tool with a REST API, GraphQL, or webhook capability—including HubSpot, Salesforce, Pipedrive, Slack, Notion, Stripe, Apollo, LinkedIn, and custom internal SQL databases.",
  },
];

export default function AiAutomationsPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      <ServiceJsonLd
        name="Custom AI Automations"
        description="Production n8n and API workflows that capture, qualify, and follow up with inbound leads in under 60 seconds—eliminating manual ops bottlenecks."
        url="https://technaviatechnology.com/services/ai-automations"
        serviceType="Autonomous Operations & Workflow Automation"
      />
      <FaqJsonLd faqs={FAQS} />

      {/* 1. Hero with Standardized Breadcrumb */}
      <SubpageHero
        pageName="Custom AI Automations"
        parentCrumb={{ label: "Services", href: "/services" }}
        titleLine1="Custom AI"
        titleLine2="Automations."
        highlightLine2={true}
        subtitle="Production n8n and webhook pipelines that capture, qualify, and route inbound leads in under 60 seconds—eliminating manual ops bottlenecks while your team sleeps."
        primaryCta={{ label: "Get Your Free 5-Min Audit", href: "/book?type=audit&service=ai-automations" }}
        secondaryCta={{ label: "See Live Builds", href: "/results" }}
        backgroundImage="/images/tech/ai_automations.jpg"
        wireframeNumber="03"
        statusPills={[
          { text: "< 60s RESPONSE TIME", variant: "brass" },
          { text: "N8N & CRM SYNCED", variant: "ghost" },
          { text: "24/7 AUTONOMOUS OPS", variant: "outline" },
        ]}
      />

      {/* 2. "Who This Is Built For" Strip */}
      <section className="py-20 md:py-24 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full border-b border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              TARGET ICP &amp; PAIN POINTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white tracking-tight">
              Who this automation sprint is built for.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ICP_CALLOUTS.map((icp) => (
              <div
                key={icp.num}
                className="p-7 rounded-2xl bg-[#0E1116] border border-white/[0.1] flex flex-col gap-3 shadow-lg"
              >
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/[0.06]">
                  <span className="text-[#D4F542] font-bold">{icp.num}</span>
                  <span className="text-white/40 uppercase">{icp.tag}</span>
                </div>
                <h3 className="text-xl font-tight font-semibold text-white">{icp.title}</h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  {icp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 6-Card Engineering Specification Grid */}
      <section className="py-24 md:py-32 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              PIPELINE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-tight font-semibold text-white tracking-tight leading-[1.05]">
              Automate the repetitive manual work that slows your growth team down.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AUTOMATION_FEATURES.map((feat) => (
              <div
                key={feat.num}
                className="p-8 rounded-3xl bg-[#0E1116] border border-white/[0.12] flex flex-col justify-between gap-6 hover:border-[#D4F542]/40 transition-colors shadow-lg"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <span className="font-mono text-2xl font-bold text-[#D4F542]">
                    {feat.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-tight font-semibold text-white">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-white/70 font-sans leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "What You Get in 21 Days" Deliverables Checklist */}
      <section className="py-20 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full border-t border-white/[0.08]">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1116] border border-white/[0.12] flex flex-col lg:flex-row gap-10 items-start justify-between">
          <div className="flex flex-col gap-4 max-w-lg">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              21-DAY DELIVERABLES
            </span>
            <h3 className="text-3xl sm:text-4xl font-tight font-semibold text-white tracking-tight">
              Self-operating revenue workflows.
            </h3>
            <p className="text-sm text-white/70 font-sans leading-relaxed">
              Every automation is thoroughly tested with simulated edge cases, comprehensive error alerting, and dedicated video documentation.
            </p>
          </div>

          <div className="flex flex-col gap-3.5 w-full lg:max-w-lg">
            {DELIVERABLES.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm font-sans text-white/90"
              >
                <span className="w-5 h-5 rounded-full bg-[#D4F542]/20 text-[#D4F542] flex items-center justify-center text-xs font-bold shrink-0">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Real Proof: Live Lead-to-CRM Automation Blueprint (Replacing Kinetix Studio) */}
      <section className="py-24 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full border-t border-white/[0.08]">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1116] border border-[#2A2F38] flex flex-col gap-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
                  LIVE LEAD-TO-CRM BLUEPRINT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white tracking-tight">
                Sub-60s Inbound Qualification &amp; Booking Pipeline
              </h2>
              <p className="text-sm text-white/70 font-sans leading-relaxed">
                How TECHNAVIA turns cold form submissions into enriched, scored, and booked sales meetings on autopilot.
              </p>
            </div>

            <Link
              href="/book?type=audit&service=ai-automations"
              className="px-6 py-3 rounded-full bg-[#D4F542] hover:bg-[#c3e634] text-black font-tight font-semibold text-xs tracking-wider uppercase transition-all whitespace-nowrap self-start md:self-auto shadow-[0_0_16px_rgba(212,245,66,0.25)]"
            >
              Map Your Automation Pipeline →
            </Link>
          </div>

          {/* 4-Stage Live Telemetry Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PIPELINE_STAGES.map((stg, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#14161A] border border-white/[0.1] flex flex-col justify-between gap-4 relative overflow-hidden"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/[0.06]">
                    <span className="text-[#D4F542] font-semibold">{stg.stage}</span>
                    <span className="text-white/40 text-[10px]">STEP 0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-tight font-semibold text-white leading-snug">
                    {stg.name}
                  </h3>
                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    {stg.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white/40">SLA</span>
                  <span className="text-[#D4F542] font-semibold">{stg.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNAVIA Engineering Guarantee Strip */}
      <section className="py-16 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0E1116] via-[#14161A] to-[#0E1116] border border-[#D4F542]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              TECHNAVIA ENGINEERING GUARANTEE
            </span>
            <h3 className="text-2xl sm:text-4xl font-tight font-semibold text-white">
              Our Sub-60s Speed &amp; Zero-SaaS-Tax Guarantee
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
              Every automation pipeline we deploy triggers in under 60 seconds and is built on open platforms like n8n, giving you 100% workflow ownership with zero per-task agency markup.
            </p>
          </div>
          <Link
            href="/book?type=audit&service=ai-automations"
            className="px-8 py-4 rounded-full bg-[#D4F542] text-black font-tight font-semibold text-sm hover:scale-105 transition-transform whitespace-nowrap self-stretch md:self-auto text-center"
          >
            Claim Your 5-Min Audit
          </Link>
        </div>
      </section>

      {/* 7. 3 Service-Specific FAQs */}
      <section className="py-20 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white tracking-tight">
              Frequently asked about Custom AI Automations.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1116] border border-white/[0.1] flex flex-col gap-3 shadow-lg"
              >
                <span className="text-xs font-mono text-[#D4F542] font-semibold">
                  0{idx + 1} · QUESTION
                </span>
                <h3 className="text-base font-tight font-semibold text-white leading-snug">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bottom Brief Form (Pre-selected) */}
      <BookSection defaultService="AI Lead Automations" />
    </div>
  );
}
