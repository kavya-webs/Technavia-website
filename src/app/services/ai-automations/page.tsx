import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { BookSection } from "@/components/sections/BookSection";
import { ServiceJsonLd } from "@/components/seo/JsonLd";

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

export default function AiAutomationsPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      <ServiceJsonLd
        name="Custom AI Automations"
        description="Production n8n and API workflows that capture, qualify, and follow up with inbound leads in under 60 seconds—eliminating manual ops bottlenecks."
        url="https://technaviatechnology.com/services/ai-automations"
        serviceType="Autonomous Operations & Workflow Automation"
      />

      <SubpageHero
        pageName="SERVICE · 03"
        titleLine1="Custom AI"
        titleLine2="Automations."
        highlightLine2={true}
        subtitle="Production n8n and webhook pipelines that capture, qualify, and route inbound leads in under 60 seconds—eliminating manual ops bottlenecks while your team sleeps."
        primaryCta={{ label: "Audit Your Ops Bottlenecks", href: "/book?type=audit&service=ai-automations" }}
        secondaryCta={{ label: "View Automation Telemetry", href: "/results" }}
        backgroundImage="/images/tech/ai_automations.jpg"
        wireframeNumber="03"
        statusPills={[
          { text: "< 60s RESPONSE TIME", variant: "brass" },
          { text: "N8N & CRM SYNCED", variant: "ghost" },
          { text: "24/7 AUTONOMOUS OPS", variant: "outline" },
        ]}
      />

      {/* Technical Specifications Grid */}
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

      {/* Case Study Callout */}
      <section className="py-16 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1116] border border-white/[0.14] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
                BENCHMARK OUTCOME · KINETIX STUDIO
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-tight font-semibold text-white">
              31 Hours Saved Per Week · Response Time Cut to 42 Seconds
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
              Inbound leads used to sit in inboxes for over 4 hours before manual review. TECHNAVIA wired an autonomous pipeline that enriches leads, scores ICP fit, and books qualified calls in under 60 seconds on autopilot.
            </p>
          </div>
          <Link
            href="/book?type=audit&service=ai-automations"
            className="px-8 py-4 rounded-full bg-[#D4F542] text-black font-tight font-semibold text-sm hover:scale-105 transition-transform whitespace-nowrap self-stretch md:self-auto text-center"
          >
            Map Your Automation Pipeline
          </Link>
        </div>
      </section>

      <BookSection />
    </div>
  );
}
