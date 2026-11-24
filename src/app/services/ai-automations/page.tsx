import React, { Suspense } from "react";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck } from "lucide-react";
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { AutomationsHeroMockup } from "@/components/mockups/AutomationsHeroMockup";
import { ServiceBookingForm } from "@/components/forms/ServiceBookingForm";
import { AdHeaderBar } from "@/components/ui/AdHeaderBar";

export const metadata: Metadata = {
  title: "Custom AI Automations & Lead Routing Systems | TECHNAVIA",
  description:
    "Respond to, qualify, and book every inbound B2B lead in under 60 seconds on 24/7 autopilot. Connect website, ads, CRM, and calendar with zero Zapier tax.",
  alternates: {
    canonical: "https://technaviatechnology.com/services/ai-automations",
  },
  openGraph: {
    title: "Custom AI Automations & Lead Routing Systems | TECHNAVIA",
    description:
      "Respond to, qualify, and book every inbound B2B lead in under 60 seconds on 24/7 autopilot. Connect website, ads, CRM, and calendar with zero Zapier tax.",
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
    title: "Custom AI Automations & Lead Routing Systems | TECHNAVIA",
    description:
      "Respond to, qualify, and book every inbound B2B lead in under 60 seconds on 24/7 autopilot. Connect website, ads, CRM, and calendar with zero Zapier tax.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

const PAIN_COMPARISON = [
  {
    manual: "Leads sit in inboxes for 4–12 hours while buying intent fades",
    automated: "Inbound leads qualified and contacted in under 60 seconds",
  },
  {
    manual: "Reps waste 10–15 hours/week on manual data entry and CRM updates",
    automated: "Enriched with company size, role, and intent before reps even open the lead",
  },
  {
    manual: "Generic, robotic follow-ups that prospects ignore",
    automated: "Personalized outreach that sounds human and matches their specific inquiry",
  },
  {
    manual: "Ballooning monthly Zapier invoices with arbitrary task limits",
    automated: "Zero recurring per-task fees—hosted on infrastructure you 100% own",
  },
  {
    manual: "Leads slip through cracks when reps are busy or off-shift",
    automated: "24/7 autopilot that never misses an inquiry or forgets to follow up",
  },
];

const TARGET_AUDIENCE = [
  {
    tag: "GROWTH & PIPELINE",
    title: "B2B Sales & Growth Leaders",
    desc: "Missing revenue because warm inbound leads wait hours for a reply while competitors strike first.",
  },
  {
    tag: "OPERATIONS EFFICIENCY",
    title: "Founders & COOs Scaling Lean",
    desc: "Spending expensive team hours copy-pasting CRM data instead of closing deals and serving clients.",
  },
  {
    tag: "STABLE INFRASTRUCTURE",
    title: "Agencies & High-Ticket Service Firms",
    desc: "Drowning in Zapier invoices and broken automations that fail silently under volume.",
  },
];

const BLUEPRINT_STAGES = [
  {
    num: "01",
    tag: "0.2s TRIGGER",
    title: "Instant Capture",
    desc: "Prospect submits a website form, ad lead form, or booking request. The system catches it instantly.",
  },
  {
    num: "02",
    tag: "< 30s ENRICHMENT",
    title: "AI Research & Scoring",
    desc: "AI instantly verifies the email, analyzes company size, and scores intent against your Ideal Customer Profile in under 30 seconds.",
  },
  {
    num: "03",
    tag: "< 60s OUTREACH",
    title: "Personalized Outreach & Booking",
    desc: "Qualified leads receive an instant, personalized message with a direct link to book on your calendar.",
  },
  {
    num: "04",
    tag: "ZERO MANUAL ENTRY",
    title: "CRM Sync & Team Brief",
    desc: "Your CRM (HubSpot, Salesforce, Pipedrive, etc.) is fully updated, and your team gets a concise Slack/Teams brief.",
  },
];

const WORKFLOW_CARDS = [
  {
    num: "01",
    title: "Instant Lead Response & Routing",
    desc: "Capture leads from your site or ads, score them instantly, and route high-value prospects to the right rep in under a minute.",
  },
  {
    num: "02",
    title: "AI Lead Qualification",
    desc: "Automatically assess company fit, budget, and readiness from form submissions and public data before booking calls.",
  },
  {
    num: "03",
    title: "Two-Way CRM Synchronization",
    desc: "Keep your CRM, calendar, email, and messaging platforms in perfect real-time sync with zero manual data entry.",
  },
  {
    num: "04",
    title: "Automated Follow-Up Sequences",
    desc: "Multi-touch email and WhatsApp follow-up sequences that adapt to prospect replies and stop automatically once booked.",
  },
  {
    num: "05",
    title: "Client Onboarding Workflows",
    desc: "Automatically generate client portals, trigger welcome emails, invite team members, and create project tasks upon contract signing.",
  },
  {
    num: "06",
    title: "Automated Pipeline & Ops Reporting",
    desc: "Weekly automated digests sent to Slack or email showing pipeline health, speed-to-lead times, and conversion rates.",
  },
];

const FAQS = [
  {
    question: "How quickly can this be set up?",
    answer:
      "Most custom automation workflows are designed, tested, and fully deployed within 10 to 14 business days. We map your current processes first, build the system in a staging environment, and run live tests before switching production traffic.",
  },
  {
    question: "Do we have to switch our existing CRM or tools?",
    answer:
      "No. We integrate directly with your current tech stack—HubSpot, Salesforce, Pipedrive, Zoho, Slack, Google Workspace, and Microsoft 365. You keep using the tools your team already knows.",
  },
  {
    question: "Why is this better than Zapier or Make?",
    answer:
      "Zapier and Make charge recurring fees for every single task your workflows execute, which can easily cost hundreds of dollars every month as you grow. We build on modern open-source automation infrastructure that you own completely, with zero per-task costs and enterprise-grade data privacy.",
  },
  {
    question: "What happens if an API or third-party tool breaks?",
    answer:
      "Every workflow we build includes automated error handling and alerting. If an external API experiences downtime, the system automatically logs the retry, notifies your team on Slack, and ensures zero lead data is lost.",
  },
  {
    question: "Do you maintain the system after launch?",
    answer:
      "Yes. We provide 30 days of complimentary monitoring and fine-tuning after launch, plus optional ongoing maintenance packages so your workflows stay reliable as your business scales.",
  },
];

export default function AiAutomationsPage() {
  return (
    <div className="relative min-h-screen bg-[#0B0D10] text-[#F8F8F5] selection:bg-[#D4F542] selection:text-black">
      {/* Sticky Top Notification Strip */}
      <Suspense fallback={null}>
        <AdHeaderBar offerText="B2B Speed-to-Lead Architecture: Respond to every lead in under 60 seconds." />
      </Suspense>

      {/* SEO Structured Data */}
      <ServiceJsonLd
        name="Custom AI Automations & Lead Routing"
        description="Respond to, qualify, and book every inbound B2B lead in under 60 seconds on 24/7 autopilot. Connect website, ads, CRM, and calendar with zero Zapier tax."
        serviceType="B2B Lead Pipeline & Operations Automation"
        url="https://technaviatechnology.com/services/ai-automations"
      />
      <FaqJsonLd faqs={FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
          { name: "AI Automations", item: "/services/ai-automations" },
        ]}
      />

      {/* ========================================================
          SECTION 1: HERO
          ======================================================== */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4F542]/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-white/80">
                FOR B2B TEAMS LOSING PIPELINE TO SLOW FOLLOW-UP &amp; MANUAL OPS
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-tight font-semibold tracking-[-0.04em] text-white leading-[1.06]">
              Respond to, qualify, and book every inbound B2B lead in{" "}
              <span className="text-[#D4F542]">under 60 seconds</span>—24/7.
            </h1>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans max-w-2xl">
              When a warm prospect waits hours for a reply, your close rate drops fast. We build custom AI automation systems that connect your website, paid ads, CRM, and calendar—saving your team 15–30 hours a week without recurring per-task Zapier fees.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#service-book"
                className="h-12 sm:h-14 px-8 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_0_24px_rgba(212,245,66,0.35)] cursor-pointer"
              >
                <span>Map My Automation Roadmap (Free 20-Min Call)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#automation-flow"
                className="h-12 sm:h-14 px-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-white font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>See the 60-Second Flow ↓</span>
              </a>
            </div>

            {/* Micro-Trust Strip */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-3 text-[11px] font-mono text-white/50">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4F542]" />
                <span>&lt; 60-SECOND LEAD RESPONSE</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4F542]" />
                <span>2-WAY CRM SYNC</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4F542]" />
                <span>ZERO MONTHLY ZAPIER TAX</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <AutomationsHeroMockup />
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: BEFORE VS AFTER COMPARISON
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-3 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#D4F542]">
              THE COST OF MANUAL FOLLOW-UP
            </span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Manual follow-up quietly leaks revenue every day.
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Speed-to-lead is the single biggest conversion lever in B2B sales. Here is what changes when your operations run on autopilot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left: Pain Column */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#14161A]/80 border border-red-500/20 flex flex-col gap-5">
              <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06]">
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
                  MANUAL B2B OPERATIONS
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {PAIN_COMPARISON.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                      {item.manual}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Outcome Column */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#14161A] border border-[#D4F542]/40 shadow-[0_0_30px_rgba(212,245,66,0.08)] flex flex-col gap-5">
              <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06]">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4F542] font-semibold">
                  AUTOMATED WITH TECHNAVIA
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {PAIN_COMPARISON.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D4F542] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-white/90 font-sans leading-relaxed">
                      {item.automated}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: TARGET AUDIENCE
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#D4F542]">
              FIT ASSESSMENT
            </span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Built for B2B sales &amp; operations teams.
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Designed specifically for companies with steady inbound lead flow who want higher conversion without hiring more coordinators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TARGET_AUDIENCE.map((aud, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#14161A] border border-white/[0.08] hover:border-white/[0.2] transition-colors flex flex-col gap-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[#D4F542] font-semibold uppercase tracking-wider">
                    {aud.tag}
                  </span>
                  <span className="text-xs font-mono text-white/30">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-tight font-semibold text-white">{aud.title}</h3>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: LIVE PIPELINE BLUEPRINT
          ======================================================== */}
      <section id="automation-flow" className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#D4F542]">
              HOW IT WORKS
            </span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              How your automated B2B lead engine works.
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Four synchronized stages that transform a cold form submission into a scheduled sales call in under 60 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BLUEPRINT_STAGES.map((stg) => (
              <div
                key={stg.num}
                className="p-6 rounded-2xl bg-[#14161A] border border-white/[0.08] flex flex-col gap-4 relative"
              >
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-2xl font-tight font-bold text-[#D4F542] font-mono">
                    {stg.num}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D4F542]/10 text-[#D4F542] border border-[#D4F542]/20">
                    {stg.tag}
                  </span>
                </div>
                <h3 className="text-base font-tight font-semibold text-white">{stg.title}</h3>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans">{stg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: WHAT WE AUTOMATE (6 WORKFLOW CARDS)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-3 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#D4F542]">
              OPERATIONS ROADMAP
            </span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Six revenue &amp; ops workflows we automate.
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Battle-tested B2B workflows configured on dedicated infrastructure with zero per-task software markup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFLOW_CARDS.map((wf) => (
              <div
                key={wf.num}
                className="p-6 sm:p-7 rounded-2xl bg-[#14161A] border border-white/[0.08] hover:border-[#D4F542]/30 transition-colors flex flex-col gap-3"
              >
                <div className="text-xs font-mono text-[#D4F542] font-semibold">{wf.num}</div>
                <h3 className="text-base font-tight font-semibold text-white">{wf.title}</h3>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: SPEED & OWNERSHIP GUARANTEE BANNER
          ======================================================== */}
      <section className="py-16 md:py-20 px-6 md:px-10 lg:px-16 border-b border-white/[0.08]">
        <div className="max-w-[1100px] mx-auto p-8 sm:p-12 rounded-3xl bg-[#14161A] border-2 border-[#D4F542] shadow-[0_0_40px_rgba(212,245,66,0.18)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[#D4F542] font-mono text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5 text-[#D4F542]" />
              <span>SPEED &amp; FULL OWNERSHIP GUARANTEE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-white">
              Our Sub-60s Speed &amp; Full Ownership Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              Every workflow is stress-tested before launch to run reliably under 60 seconds, documented for your team, and hosted on infrastructure you 100% own—with zero ongoing per-task SaaS markup.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="#service-book"
              className="h-12 sm:h-14 px-8 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(212,245,66,0.3)] cursor-pointer"
            >
              <span>Map My Automation Roadmap →</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7: REAL B2B FAQS
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[900px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">
              CLARITY FIRST
            </span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Questions B2B teams ask before automating.
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
          SECTION 8: DEDICATED SERVICE BOOKING FORM
          ======================================================== */}
      <section id="service-book" className="py-16 md:py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <ServiceBookingForm serviceType="ai-automations" />
        </div>
      </section>
    </div>
  );
}
