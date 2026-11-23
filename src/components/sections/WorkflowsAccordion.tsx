"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";

interface CapabilityCard {
  id: string;
  num: string;
  title: string;
  href: string;
  tagline: string;
  bullets: string[];
  tools: string[];
  metric: string;
  metricLabel: string;
  img: string;
}

const CAPABILITIES: CapabilityCard[] = [
  {
    id: "web-dev-seo",
    num: "01",
    title: "Web Development + Technical SEO",
    href: "/services/web-development-seo",
    tagline:
      "Conversion-engineered Next.js websites with clean semantic architecture, sub-second Core Web Vitals, and schema markup built to rank from day one.",
    bullets: [
      "Custom conversion UI & copy",
      "95+ Lighthouse & CWV guarantee",
      "Full technical SEO & schema foundation",
    ],
    tools: ["Next.js", "TypeScript", "TailwindCSS", "Schema.org", "GSC"],
    metric: "95+",
    metricLabel: "Core Web Vitals",
    img: "/images/tech/web_dev_seo.jpg",
  },
  {
    id: "llm-visibility",
    num: "02",
    title: "LLM Visibility (AEO / GEO)",
    href: "/services/llm-visibility",
    tagline:
      "Entity graph optimization and structured answer architecture so ChatGPT, Gemini, and Perplexity recommend your brand when buyers search your category.",
    bullets: [
      "Organization, Service & FAQ JSON-LD",
      "Quotable answer-capsule architecture",
      "AI citation tracking & entity authority",
    ],
    tools: ["OpenAI", "Claude", "Perplexity", "JSON-LD Graph", "Vector DB"],
    metric: "TOP 1",
    metricLabel: "AI Citation Target",
    img: "/images/tech/llm_visibility.jpg",
  },
  {
    id: "ai-automations",
    num: "03",
    title: "Custom AI Automations",
    href: "/services/ai-automations",
    tagline:
      "Production n8n and API workflows that capture, qualify, and follow up with inbound leads in under 60 seconds—eliminating manual ops bottlenecks.",
    bullets: [
      "Instant lead capture & CRM sync",
      "Automated follow-up & call booking",
      "Custom reporting & internal ops agents",
    ],
    tools: ["n8n", "Make", "OpenAI APIs", "HubSpot", "Slack"],
    metric: "< 60s",
    metricLabel: "Lead Response Time",
    img: "/images/tech/ai_automations.jpg",
  },
];

export function WorkflowsAccordion() {
  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] pt-24 md:pt-32 pb-28 md:pb-36 overflow-visible border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-14 flex flex-col gap-16">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <SectionLabel>CORE CAPABILITIES</SectionLabel>
            <h2 className="text-3xl sm:text-5xl lg:text-[68px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.02]">
              Three engineering systems. <br />
              <span className="text-[#D4F542]">One compounding pipeline.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6">
            <p className="text-base text-white/70 leading-relaxed font-sans max-w-md lg:text-right">
              Every service is built to stand alone or work together as a unified acquisition engine.
            </p>
            <Button href="/services" variant="ghost" hasArrow={false} hasLamp={true}>
              Compare All Services →
            </Button>
          </div>
        </div>

        {/* Scannable 3-Column Open Cards Layout (Never collapsed) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          {CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0E1116] p-7 sm:p-8 flex flex-col justify-between group hover:border-[#D4F542]/40 transition-all duration-300 shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
            >
              {/* Subtle Ambient Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Card Top: Number + Metric Badge */}
              <div className="relative z-10 flex items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <span className="font-mono text-2xl font-semibold text-[#D4F542]">
                  {cap.num}
                </span>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                  <span className="font-semibold text-[#D4F542]">{cap.metric}</span>
                  <span className="text-white/60">{cap.metricLabel}</span>
                </div>
              </div>

              {/* Card Body: Title, Copy & Bullets */}
              <div className="relative z-10 flex-1 flex flex-col gap-5 py-6">
                <h3 className="text-2xl sm:text-3xl font-tight font-semibold tracking-tight text-[#F8F8F5] leading-tight">
                  {cap.title}
                </h3>

                <p className="text-sm text-white/70 font-sans leading-relaxed">
                  {cap.tagline}
                </p>

                {/* Bullets List */}
                <div className="flex flex-col gap-2.5 pt-2">
                  {cap.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/85 font-sans">
                      <span className="w-4 h-4 rounded-full bg-[#D4F542]/15 text-[#D4F542] flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tools & Dedicated Page Link */}
              <div className="relative z-10 pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  {cap.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono uppercase tracking-wider text-white/50 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <Link
                  href={cap.href}
                  className="w-10 h-10 rounded-full bg-[#D4F542] text-black flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,245,66,0.25)] flex-shrink-0"
                  aria-label={`Learn more about ${cap.title}`}
                  title={`Open ${cap.title}`}
                >
                  <svg
                    className="w-4 h-4 -rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkflowsAccordion;
