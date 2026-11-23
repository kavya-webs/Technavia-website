import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BookSection } from "@/components/sections/BookSection";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Services — Web Engineering, LLM Visibility & AI Systems",
  description:
    "Explore TECHNAVIA's three core engineering systems: conversion Next.js web development with sub-second Core Web Vitals, LLM visibility (AEO/GEO), and custom AI automations.",
  alternates: {
    canonical: "https://technaviatechnology.com/services",
  },
  openGraph: {
    title: "Services — Web Engineering, LLM Visibility & AI Systems",
    description:
      "Explore TECHNAVIA's three core engineering systems: conversion Next.js web development with sub-second Core Web Vitals, LLM visibility (AEO/GEO), and custom AI automations.",
    url: "https://technaviatechnology.com/services",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "TECHNAVIA — Built to Rank. Automated to Scale.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Web Engineering, LLM Visibility & AI Systems",
    description:
      "Explore TECHNAVIA's three core engineering systems: conversion Next.js web development with sub-second Core Web Vitals, LLM visibility (AEO/GEO), and custom AI automations.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

const SERVICES_DATA = [
  {
    id: "web-development-seo",
    num: "01",
    title: "Web Development + Technical SEO",
    tagline: "Sub-second Next.js architecture built to convert enterprise buyers and rank on Google from day one.",
    href: "/services/web-development-seo",
    deliverables: [
      "Custom conversion UI/UX engineered in Next.js & React 19",
      "Guaranteed 95+ Mobile Core Web Vitals & sub-second LCP",
      "Full JSON-LD structured data graph & canonical routing",
      "Semantic HTML5 hierarchy optimized for crawl budgets",
      "100% source-code ownership with zero platform lock-in",
    ],
    timeline: "Days 4–10 of build",
    metric: "< 1.0s",
    metricLabel: "Mobile LCP",
  },
  {
    id: "llm-visibility",
    num: "02",
    title: "LLM Visibility (AEO / GEO)",
    tagline: "Entity graph optimization and structured answer architecture so ChatGPT, Gemini & Perplexity recommend your brand.",
    href: "/services/llm-visibility",
    deliverables: [
      "Wikidata, Crunchbase & Schema.org SameAs entity mapping",
      "Quotable answer-capsule content engineering",
      "Perplexity, SearchGPT & Claude citation indexing",
      "High information-gain topic clusters & comparative tables",
      "Continuous generative citation monitoring & telemetry",
    ],
    timeline: "Days 11–14 of build",
    metric: "TOP 1",
    metricLabel: "Citation Target",
  },
  {
    id: "ai-automations",
    num: "03",
    title: "Custom AI Automations",
    tagline: "Production n8n and API workflows that capture, qualify, and follow up with inbound leads in under 60 seconds.",
    href: "/services/ai-automations",
    deliverables: [
      "Instant inbound lead enrichment via Apollo & Clearbit APIs",
      "LLM qualification agents scoring leads against your ICP",
      "Automated calendar booking and instant CRM synchronization",
      "Real-time Slack / Teams notification alerts with lead brief",
      "Custom internal operations agents eliminating manual triage",
    ],
    timeline: "Days 15–18 of build",
    metric: "< 60s",
    metricLabel: "Lead Response",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
        ]}
      />
      <ServiceJsonLd
        name="TECHNAVIA Growth Systems"
        description="Three engineering disciplines: Web Development + Technical SEO, LLM Visibility (AEO/GEO), and Custom AI Automations."
        url="https://technaviatechnology.com/services"
        serviceType="Web Engineering, Generative Engine Optimization & Workflow Automation"
      />

      {/* Subpage Hero */}
      <SubpageHero
        pageName="SERVICES"
        titleLine1="Three engineering systems."
        titleLine2="One compounding pipeline."
        highlightLine2={true}
        subtitle="Every service is built to stand alone as a precision solution or compound together as our flagship 21-Day Turnkey Growth Engine."
        primaryCta={{ label: "Book an audit", href: "/book?type=audit" }}
        secondaryCta={{ label: "View results", href: "/results" }}
        backgroundImage="/images/tech/process_build.webp"
        wireframeNumber="03"
        statusPills={[
          { text: "SUB-SECOND LOAD", variant: "brass" },
          { text: "AEO / GEO INDEXED", variant: "ghost" },
          { text: "24/7 AI PIPELINE", variant: "outline" },
        ]}
      />

      {/* Services Grid Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              CORE DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-5xl font-tight font-semibold text-white tracking-tight leading-[1.05]">
              Select a focused capability—or deploy the full engine.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="rounded-3xl bg-[#0E1116] border border-white/[0.12] p-8 flex flex-col justify-between group hover:border-[#D4F542]/40 transition-all duration-300 shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
              >
                <div className="flex flex-col gap-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <span className="font-mono text-2xl font-bold text-[#D4F542]">
                      {srv.num}
                    </span>
                    <div className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-white/90 whitespace-nowrap shrink-0">
                      <strong className="text-[#D4F542] mr-1 whitespace-nowrap">{srv.metric}</strong> <span className="whitespace-nowrap">{srv.metricLabel}</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-white leading-tight">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-white/70 font-sans leading-relaxed">
                      {srv.tagline}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.08]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                      CORE DELIVERABLES:
                    </span>
                    {srv.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/85 font-sans">
                        <span className="w-4 h-4 rounded-full bg-[#D4F542]/15 text-[#D4F542] flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link CTA */}
                <div className="pt-8 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-mono text-white/40">{srv.timeline}</span>
                  <Link
                    href={srv.href}
                    className="group/btn inline-flex items-center gap-2 text-xs font-mono text-[#D4F542] font-semibold tracking-wider hover:underline"
                  >
                    <span>DEEP DIVE</span>
                    <span className="w-7 h-7 rounded-full bg-[#D4F542] text-black flex items-center justify-center font-bold text-xs group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement & Pricing Framing Section */}
      <section className="py-20 md:py-28 px-6 md:px-8 lg:px-14 border-t border-white/[0.08] bg-[#0E1116]/50">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              ENGAGEMENT MODELS
            </span>
            <h2 className="text-3xl sm:text-5xl font-tight font-semibold text-white tracking-tight leading-[1.05]">
              Transparent engineering sprints with zero agency lock-in.
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
              We operate on fixed sprint deliverables or ongoing performance retainers. You receive 100% source-code ownership on day 21.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Model 1: Turnkey Build */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0B0D10] border border-white/[0.14] flex flex-col justify-between gap-8 shadow-xl">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#D4F542] text-black font-mono font-bold text-xs uppercase tracking-wider">
                    FLAGSHIP DELIVERY
                  </span>
                  <span className="text-xs font-mono text-white/50">21-DAY SPRINT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-white">
                  21-Day Turnkey Growth Engine
                </h3>
                <p className="text-sm text-white/70 font-sans leading-relaxed">
                  The complete done-for-you transformation: sub-second Next.js frontend, full AEO/GEO entity indexing for ChatGPT & Perplexity, and automated CRM lead routing.
                </p>
                <div className="flex flex-col gap-2 pt-2 text-xs font-sans text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="text-[#D4F542]">✓</span> Complete frontend engineering & conversion copy
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#D4F542]">✓</span> Guaranteed 95+ Core Web Vitals mobile benchmark
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#D4F542]">✓</span> Organization, Service & FAQ structured JSON-LD
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#D4F542]">✓</span> Full n8n lead enrichment and webhook pipeline
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#D4F542]">✓</span> 100% code ownership & deployment documentation
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-white/50 uppercase">TOTAL TIMELINE</div>
                  <div className="text-xl font-tight font-bold text-white">21 Working Days</div>
                </div>
                <Link
                  href="/book?type=audit"
                  className="px-6 py-3 rounded-full bg-[#D4F542] text-black font-tight font-semibold text-sm hover:scale-105 transition-transform"
                >
                  Request Blueprint
                </Link>
              </div>
            </div>

            {/* Model 2: Growth Retainer */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0B0D10] border border-white/[0.14] flex flex-col justify-between gap-8 shadow-xl">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/[0.08] text-white/80 font-mono font-medium text-xs uppercase tracking-wider">
                    MONTHLY PARTNERSHIP
                  </span>
                  <span className="text-xs font-mono text-white/50">ONGOING SCALE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-white">
                  Continuous Growth & Telemetry Retainer
                </h3>
                <p className="text-sm text-white/70 font-sans leading-relaxed">
                  For engineering and marketing teams requiring continuous AI search citation monitoring, schema iteration, new offer pages, and automated workflow maintenance.
                </p>
                <div className="flex flex-col gap-2 pt-2 text-xs font-sans text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="text-[#D4F542]">✓</span> Weekly Perplexity & ChatGPT citation tracking
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#D4F542]">✓</span> Continuous Core Web Vitals speed monitoring
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#D4F542]">✓</span> Dedicated workflow engineering hours per month
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#D4F542]">✓</span> Conversion rate testing on new offer landings
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#D4F542]">✓</span> Direct Slack channel with senior web architect
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-white/50 uppercase">COMMENCEMENT</div>
                  <div className="text-xl font-tight font-bold text-white">Post-Launch</div>
                </div>
                <Link
                  href="/book?type=retainer"
                  className="px-6 py-3 rounded-full bg-white/[0.1] hover:bg-white text-white hover:text-black font-tight font-semibold text-sm transition-all"
                >
                  Inquire on Retainers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded 21-Day Methodology Section */}
      <ProcessSection />

      {/* Conversion Section */}
      <BookSection />
    </div>
  );
}
