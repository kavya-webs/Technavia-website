import React, { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck, Sparkles, Clock } from "lucide-react";
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { AutomationsHeroMockup } from "@/components/mockups/AutomationsHeroMockup";
import { ServiceBookingForm } from "@/components/forms/ServiceBookingForm";
import { AdHeaderBar } from "@/components/ui/AdHeaderBar";

export const metadata: Metadata = {
  title: "Custom AI Automations & n8n Lead Routing Systems | TECHNAVIA",
  description:
    "Qualify, enrich, and book every inbound lead in under 60 seconds on 24/7 autopilot. Production n8n workflows with zero monthly Zapier tax.",
  alternates: {
    canonical: "https://technaviatechnology.com/services/ai-automations",
  },
  openGraph: {
    title: "Custom AI Automations & n8n Lead Routing Systems | TECHNAVIA",
    description:
      "Qualify, enrich, and book every inbound lead in under 60 seconds on 24/7 autopilot. Production n8n workflows with zero monthly Zapier tax.",
    url: "https://technaviatechnology.com/services/ai-automations",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "TECHNAVIA — Custom AI Automations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Automations & n8n Lead Routing Systems | TECHNAVIA",
    description:
      "Qualify, enrich, and book every inbound lead in under 60 seconds on 24/7 autopilot. Production n8n workflows with zero monthly Zapier tax.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

const PAIN_CARDS = [
  {
    num: "01",
    tag: "CONVERSION COLLAPSE",
    title: "Leads Waiting Hours for Follow-Up",
    desc: "Losing up to 391% in conversion probability because inbound ad and website leads sit in an unmonitored inbox for hours instead of receiving instant engagement while buying intent is peak.",
  },
  {
    num: "02",
    tag: "EXPENSIVE BUSYWORK",
    title: "Reps Drowning in Manual Data Entry",
    desc: "Paying skilled sales reps and SDRs $40–$80/hr to copy-paste lead details into CRM fields, research LinkedIn profiles manually, and draft repetitive scheduling emails.",
  },
  {
    num: "03",
    tag: "SOFTWARE BLEED",
    title: "Bleeding Cash on Zapier Task Taxes",
    desc: "Watching monthly Zapier or Make invoices balloon into hundreds of dollars just to run basic multi-step workflows with strict execution limits and zero enterprise data privacy.",
  },
];

const PIPELINE_STAGES = [
  {
    stage: "STAGE 01",
    name: "Inbound Webhook / Form / Meta Ad",
    desc: "Lead submits details on your website or Meta Lead Ad. Dedicated webhook fires instantly to trigger the automation bus with zero queue delay.",
    metric: "0.2s TRIGGER",
  },
  {
    stage: "STAGE 02",
    name: "AI Enrichment & ICP Scoring",
    desc: "API ping extracts company revenue, employee count, and tech stack. LLM evaluates ICP fit and assigns priority tier (Tier 1 / Tier 2 / Tier 3).",
    metric: "< 15s ENRICHMENT",
  },
  {
    stage: "STAGE 03",
    name: "Personalized Outreach & Booking Funnel",
    desc: "Prospect receives custom WhatsApp or email response with dynamic booking link and pre-populated questionnaire based on their industry.",
    metric: "< 60s ENGAGEMENT",
  },
  {
    stage: "STAGE 04",
    name: "Two-Way CRM Sync & Slack Executive Brief",
    desc: "HubSpot / Salesforce updated with all enriched attributes. Sales team receives an interactive Slack alert with meeting confirmation.",
    metric: "ZERO BUSYWORK",
  },
];

const ENGINEERING_SPECS = [
  {
    num: "01",
    title: "Sub-60s Inbound Webhook Bus",
    desc: "High-speed webhook listeners on self-hosted n8n capture ad and form submissions in milliseconds with zero queuing.",
  },
  {
    num: "02",
    title: "Autonomous LLM Qualification",
    desc: "AI reasoning models evaluate inbound leads against your exact ICP criteria and assign priority tiers before routing.",
  },
  {
    num: "03",
    title: "Two-Way CRM Synchronization",
    desc: "Bi-directional sync with HubSpot, Salesforce, or Pipedrive updating deal stages and contact records on autopilot.",
  },
  {
    num: "04",
    title: "Dynamic Calendar Funnels",
    desc: "High-value prospects receive instant personalized WhatsApp and email links with pre-filled scheduling slots.",
  },
  {
    num: "05",
    title: "Interactive Slack Telemetry Alerts",
    desc: "Rich Slack notifications with one-click lead approval buttons and prospect summaries dispatched immediately.",
  },
  {
    num: "06",
    title: "Self-Hosted Zero-Tax Architecture",
    desc: "100% open-source n8n pipelines hosted on your cloud or Hostinger VPS with zero recurring per-execution fees.",
  },
];

const OFFER_STACK = [
  "Complete Production n8n Automation Bus & Webhook Pipelines",
  "Sub-60s Lead Capture, Enrichment & Routing Engine",
  "Two-Way CRM Integration (HubSpot / Salesforce / Pipedrive)",
  "Automated Calendar Funnel & Interactive Slack Telemetry Alerts",
  "Complete Workflow JSON Blueprints & Self-Hosting Scripts",
];

const FAQS = [
  {
    question: "Why use self-hosted n8n instead of Zapier or Make?",
    answer:
      "n8n gives you complete ownership, enterprise data privacy, self-hosting options on your own server or VPS, and zero exponential 'task taxes' as your lead volume multiplies. Your data stays strictly in your custody without recurring third-party transaction fees.",
  },
  {
    question: "How fast does the automated response trigger?",
    answer:
      "Our webhooks trigger in 0.2 seconds and complete API enrichment, LLM scoring, CRM sync, and outbound personalized engagement within 15–45 seconds of form submission.",
  },
  {
    question: "What CRM and marketing platforms can you integrate with?",
    answer:
      "Any platform with a REST API, GraphQL, or webhook capability—including HubSpot, Salesforce, GoHighLevel, Pipedrive, Slack, Notion, Meta Ads, Google Ads, Stripe, and custom internal SQL databases.",
  },
  {
    question: "Who maintains the automations after the 21-day sprint?",
    answer:
      "You own 100% of the workflow JSON blueprints, self-hosting configurations, and documentation. We provide complete operational video walkthroughs, and our pipelines run autonomously with built-in error alerting.",
  },
];

export default function AiAutomationsPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      {/* Schema Markup */}
      <ServiceJsonLd
        name="Custom AI Automations"
        description="Production n8n and API workflows that capture, qualify, and route inbound leads in under 60 seconds, eliminating manual bottlenecks while your team sleeps."
        url="https://technaviatechnology.com/services/ai-automations"
        serviceType="Autonomous Operations & Workflow Automation"
      />
      <FaqJsonLd faqs={FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
          { name: "Custom AI Automations", item: "/services/ai-automations" },
        ]}
      />

      {/* Optional Ad Mode Sticky Banner (?ad=1) */}
      <Suspense fallback={null}>
        <AdHeaderBar offerText="Claim your free 20-min AI workflow mapping blueprint" />
      </Suspense>

      {/* ========================================================
          SECTION 1: HORMOZI CALLOUT + OUTCOME HERO (2-COLUMN SPLIT)
          ======================================================== */}
      <section className="relative w-full pt-16 md:pt-24 pb-20 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4F542]/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Callout, H1, Subhead, CTA, Trust Pills */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542] font-semibold">
                FOR GROWING B2B TEAMS LOSING WARM LEADS TO SLOW MANUAL FOLLOW-UP
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.04]">
              Qualify, enrich, and book every inbound lead in under 60 seconds—on 24/7 autopilot.
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans max-w-xl">
              Every 5 minutes a lead waits, conversion odds collapse. We build self-hosted n8n &amp; AI agent pipelines that connect your forms, Meta Ads, CRM, and calendar—with zero monthly Zapier tax.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#service-book"
                className="h-12 sm:h-14 px-7 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition-transform active:scale-95 shadow-[0_0_24px_rgba(212,245,66,0.35)] cursor-pointer"
              >
                <span>Map My Automation Pipeline (Free 20-Min Call)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* 3 Trust Pills */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs font-mono text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                Sub-60s Inbound Response
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                Two-Way CRM Synchronization
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                Zero Per-Task SaaS Tax
              </span>
            </div>
          </div>

          {/* Right Column: Visual Hook Mockup */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <AutomationsHeroMockup />
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: THE COST OF INACTION (BEFORE VS. AFTER SPLIT)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">THE SPEED-TO-LEAD BOTTLENECK</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              The high hidden cost of manual sales operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Without TECHNAVIA */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-red-950/[0.12] border border-red-500/30 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-semibold tracking-wider uppercase">
                <XCircle className="w-4 h-4" />
                <span>Without TECHNAVIA (Current State)</span>
              </div>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                Warm ad leads sit in an inbox for 4+ hours; sales reps waste 15–30 hrs/week copying data between sheets, CRMs, and emails; Zapier bills spike as volume grows.
              </p>
              <div className="pt-2 text-xs font-mono text-red-400/80 flex flex-col gap-1.5 border-t border-red-500/20">
                <span>• 391% decrease in lead qualification odds after 5 minutes</span>
                <span>• SDRs waste 50%+ of daily hours on repetitive copy-paste tasks</span>
                <span>• Zapier monthly bills surge as task counts multiply</span>
              </div>
            </div>

            {/* After 21 Days With TECHNAVIA */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#D4F542]/[0.06] border border-[#D4F542]/40 flex flex-col gap-4 shadow-[0_0_30px_rgba(212,245,66,0.1)]">
              <div className="flex items-center gap-2 text-[#D4F542] font-mono text-xs font-semibold tracking-wider uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>After 21 Days With TECHNAVIA</span>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
                Sub-60s automated lead response 24/7; two-way CRM sync with zero manual entry; self-hosted n8n workflows you own 100% with zero per-task SaaS tax.
              </p>
              <div className="pt-2 text-xs font-mono text-[#D4F542] flex flex-col gap-1.5 border-t border-[#D4F542]/20">
                <span>• Every prospect engaged in &lt; 60 seconds with personalized link</span>
                <span>• Complete CRM and Slack data synchronization on autopilot</span>
                <span>• 100% open-source self-hosted workflows you own forever</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: WHO THIS IS BUILT FOR (3 PAIN-DRIVEN CARDS)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">BUYER SYMPTOMS</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Who needs autonomous pipeline engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PAIN_CARDS.map((item) => (
              <div
                key={item.num}
                className="p-6 sm:p-7 rounded-2xl bg-[#14161A]/80 border border-white/[0.08] hover:border-white/[0.2] transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#D4F542] font-bold">{item.num}</span>
                    <span className="text-[10px] font-mono uppercase text-white/40 tracking-wider">{item.tag}</span>
                  </div>
                  <h3 className="text-lg font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: HOW THE SYSTEM WORKS (4-STAGE PIPELINE PROOF)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">AUTONOMOUS ARCHITECTURE</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              4-Stage Sub-60s Inbound Qualification &amp; Booking Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              The exact enterprise pipeline architecture that captures, enriches, and books warm leads while your sales team sleeps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PIPELINE_STAGES.map((st) => (
              <div
                key={st.stage}
                className="p-6 rounded-2xl bg-[#14161A] border border-white/[0.1] hover:border-[#D4F542]/50 transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-white/40">{st.stage}</span>
                    <span className="text-[10px] font-mono text-black bg-[#D4F542] px-2 py-0.5 rounded font-bold">
                      {st.metric}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors">
                    {st.name}
                  </h3>
                  <p className="text-xs text-white/65 leading-relaxed font-sans">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: ENGINEERING SPECIFICATION (6 COMPACT CARDS)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">SYSTEM SPECIFICATION</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Six engineering pillars of our autonomous workflows
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGINEERING_SPECS.map((spec) => (
              <div
                key={spec.num}
                className="p-6 rounded-2xl bg-[#14161A]/80 border border-white/[0.08] hover:border-white/[0.2] transition-all flex flex-col gap-2.5"
              >
                <span className="text-xs font-mono text-[#D4F542] font-semibold">{spec.num}</span>
                <h3 className="text-base font-tight font-semibold text-white">{spec.title}</h3>
                <p className="text-xs text-white/65 leading-relaxed font-sans">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: THE 21-DAY GRAND SLAM OFFER STACK
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4F542]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542] font-semibold">
                COMPLETE SPRINT DELIVERABLES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-tight font-semibold tracking-tight text-white leading-tight">
              The 21-Day Custom AI Automation Offer Stack
            </h2>

            <p className="text-sm text-white/70 leading-relaxed font-sans">
              Everything required to deploy a production-grade autonomous operations bus that captures, enriches, and books leads with zero manual data entry.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {OFFER_STACK.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-white/85 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#D4F542] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Client Time Needed Tag */}
            <div className="pt-2 text-xs font-mono text-[#D4F542] flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Total Client Time Needed: &lt; 2 Hours Across Entire 21-Day Sprint</span>
            </div>
          </div>

          {/* 2 Included Bonuses Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#14161A] border border-[#D4F542]/40 shadow-[0_0_30px_rgba(212,245,66,0.12)] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="text-xs font-mono text-[#D4F542] font-semibold uppercase tracking-wider">
                INCLUDED SPRINT BONUSES
              </span>
              <span className="text-[11px] font-mono text-white/40">$3,000 ADDED VALUE</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col gap-1.5">
                <span className="text-xs font-mono text-[#D4F542] font-bold">BONUS 01 · $1,500 VALUE</span>
                <h4 className="text-sm font-tight font-semibold text-white">Free 48-Hour Workflow Architecture Tear-Down</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  We audit your current lead routing, CRM bottlenecks, and manual operations with a live blueprint video before kickoff.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col gap-1.5">
                <span className="text-xs font-mono text-[#D4F542] font-bold">BONUS 02 · $1,500 VALUE</span>
                <h4 className="text-sm font-tight font-semibold text-white">100% Workflow Blueprint Ownership &amp; Zero Task Tax</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  You own all n8n JSON nodes and self-hosting scripts forever. Zero Zapier monthly fees as your lead volume multiplies.
                </p>
              </div>
            </div>

            <a
              href="#service-book"
              className="h-12 w-full rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(212,245,66,0.3)] cursor-pointer"
            >
              <span>Claim This Offer &amp; Book Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7: RISK REVERSAL GUARANTEE BANNER
          ======================================================== */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 border-b border-white/[0.08]">
        <div className="max-w-[1100px] mx-auto p-8 sm:p-12 rounded-3xl bg-[#14161A] border-2 border-[#D4F542] shadow-[0_0_40px_rgba(212,245,66,0.18)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[#D4F542] font-mono text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5 text-[#D4F542]" />
              <span>THE SUB-60S PIPELINE OR WE WORK FOR FREE GUARANTEE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-white">
              Sub-60s execution or we continue engineering at zero cost.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              We guarantee your automated lead capture, enrichment, and qualification pipeline will execute in under 60 seconds from form submit to CRM sync, or we will continue engineering and optimizing the workflow at zero cost until it does.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="#service-book"
              className="h-12 sm:h-14 px-8 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(212,245,66,0.3)] cursor-pointer"
            >
              <span>Get Started Risk-Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 8: OBJECTION-CRUSHING FAQS (4 SERVICE-SPECIFIC Q&AS)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[900px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">STRAIGHT ANSWERS</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#14161A] border border-white/[0.08] flex flex-col gap-2.5"
              >
                <h3 className="text-base font-tight font-semibold text-white flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-[#D4F542] font-mono text-xs">0{idx + 1}</span>
                </h3>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 9: DEDICATED SERVICE-PERSONALIZED 2-STEP BOOKING FORM
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <ServiceBookingForm serviceType="ai-automations" />
        </div>
      </section>
    </div>
  );
}
