"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";

interface WorkflowDetail {
  id: string;
  num: string;
  title: string;
  tagline: string;
  summary: string;
  tools: string[];
  time: string;
  action: string;
  img: string;
}

const WORKFLOW_DETAILS: WorkflowDetail[] = [
  {
    id: "web-dev-seo",
    num: "01",
    title: "Web Development + Technical SEO",
    tagline: "Fast, conversion-focused websites engineered with clean architecture to rank from day one.",
    summary:
      "Every website we engineer is built with modern Next.js 15, TypeScript, and server components for lightning-fast speeds and zero JavaScript bloat. We bake in semantic HTML, OpenGraph, JSON-LD structured data, clean URL hierarchies, and sub-second Core Web Vitals so Google and Bing index and reward your pages immediately.",
    tools: ["Next.js 15", "TypeScript", "TailwindCSS", "Schema.org", "Google Search Console"],
    time: "99/100",
    action: "Core Web Vitals · 0.4s LCP",
    img: "/images/tech/web_dev_seo.jpg",
  },
  {
    id: "llm-visibility",
    num: "02",
    title: "LLM Visibility (AEO / GEO)",
    tagline: "Structured content and entity optimization so your brand gets recommended by ChatGPT, Gemini, and Perplexity.",
    summary:
      "As B2B buyers transition from traditional Google searches to AI answer engines, your digital footprint must be semantically legible to large language models. We build entity relationships, knowledge graph linkages, structured citation hubs, and authoritative content clusters that secure prominent citations in ChatGPT Search, Google Gemini, and Perplexity.",
    tools: ["OpenAI", "Claude 3.5", "Perplexity API", "JSON-LD", "Knowledge Graph"],
    time: "TOP 1",
    action: "Answer Engine Citation Secured",
    img: "/images/tech/llm_visibility.jpg",
  },
  {
    id: "ai-automations",
    num: "03",
    title: "Custom AI Automations",
    tagline: "Tailored workflows that automate lead capture, follow-ups, reporting, and repetitive operations on autopilot.",
    summary:
      "Stop letting qualified inbound enquiries sit in unread inboxes. We wire custom AI agents and webhook pipelines directly into your forms, CRM, email, and messaging systems. Inbound leads are instantly scored, enriched with company metrics, entered into your CRM, and followed up with personalized context within seconds.",
    tools: ["n8n", "Make", "OpenAI APIs", "Supabase", "Slack / CRM"],
    time: "24/7",
    action: "Lead qualified · CRM updated · Digest sent",
    img: "/images/tech/ai_automations.jpg",
  },
];

export function WorkflowsNightShift() {
  const [activeTab, setActiveTab] = useState<string>("web-dev-seo");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 260;

      for (const item of WORKFLOW_DETAILS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop - offset;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWorkflow = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#0B0D10] text-[#F8F8F5]">
      {/* Intro Header */}
      <section className="py-20 md:py-28 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <SectionLabel>Engineered Capabilities</SectionLabel>
          <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[0.98]">
            Three core services. <br />
            <span className="text-[#D4F542]">Zero bottlenecks.</span>
          </h2>
        </div>
        <div className="lg:col-span-5 pb-2">
          <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            Engineered from first principles with modern code, semantic LLM visibility, and autonomous workflow pipelines.
          </p>
        </div>
      </section>

      {/* Un-sticky Subnav Strip as requested in Item 3 */}
      <div className="relative w-full bg-[#0B0D10] border-y border-white/[0.08] py-5 px-6 md:px-8 lg:px-14">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-white/40 flex-shrink-0">
            WORKFLOWS
          </span>

          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-shrink-0">
            {WORKFLOW_DETAILS.map((wf) => {
              const isActive = activeTab === wf.id;
              return (
                <button
                  key={wf.id}
                  onClick={() => scrollToWorkflow(wf.id)}
                  type="button"
                  className={`group flex items-center gap-2.5 py-1.5 px-3.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? "text-[#D4F542] bg-white/[0.08] font-semibold"
                      : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span className={isActive ? "text-[#D4F542]" : "text-white/40 font-semibold"}>
                    {wf.num}
                  </span>
                  <span className="font-tight font-medium text-sm">{wf.title}</span>
                  <span className="text-white/40 font-mono">{wf.time}</span>
                  <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] leading-none group-hover:translate-y-0.5 transition-transform">
                    ↓
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5 Full Workflow Sections with Background Image & Reveal on Scroll */}
      <div className="flex flex-col w-full">
        {WORKFLOW_DETAILS.map((wf) => {
          return (
            <section
              key={wf.id}
              id={wf.id}
              className="relative w-full min-h-[88vh] lg:min-h-[94vh] flex items-center py-20 lg:py-28 px-6 md:px-8 lg:px-14 border-b border-white/[0.08] overflow-hidden"
            >
              {/* Background Photography with Reveal Slider Effect on Scroll (Item 4) */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                  initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                  whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full"
                >
                  {/* Photo with subtle counter-scale */}
                  <motion.img
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                    src={wf.img}
                    alt={wf.title}
                    className="w-full h-full object-cover object-center opacity-85"
                  />

                  {/* Reveal Slider Leading Green Edge Line */}
                  <motion.div
                    initial={{ left: "0%" }}
                    whileInView={{ left: "100%", opacity: [0, 1, 1, 0] }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-0 bottom-0 w-[2.5px] bg-[#D4F542] shadow-[0_0_16px_#D4F542,0_0_32px_rgba(212,245,66,0.9)] pointer-events-none"
                  />

                  {/* Black Tint Gradient matching Image 2: Darker on left behind text, lighter in middle/right */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/95 via-[#0B0D10]/85 via-35% via-[#0B0D10]/45 via-55% to-[#0B0D10]/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/80 via-transparent via-50% to-[#0B0D10]/40" />
                </motion.div>
              </div>

              {/* Giant Outline Number in the Background positioned at bottom-right matching Image 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-0 pointer-events-none select-none bottom-6 right-8 md:bottom-10 md:right-16 lg:bottom-12 lg:right-24"
              >
                <span
                  className="text-[140px] sm:text-[220px] lg:text-[300px] font-tight font-extralight tracking-tighter leading-none"
                  style={{
                    WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.22)",
                    color: "transparent",
                  }}
                >
                  {wf.num}
                </span>
              </motion.div>

              {/* Foreground Content Card - Left-aligned text column */}
              <div className="relative z-10 max-w-[1280px] mx-auto w-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-2xl flex flex-col gap-6"
                >
                  {/* Step Pill */}
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50">
                    <span>WORKFLOW</span>
                    <span className="text-[#D4F542] font-semibold">{wf.num}</span>
                    <span>/</span>
                    <span>03</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl sm:text-6xl lg:text-[76px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[0.98]">
                    {wf.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-lg sm:text-2xl font-tight font-medium text-white/90 leading-snug">
                    {wf.tagline}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
                    {wf.summary}
                  </p>

                  {/* Runs on Tools */}
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
                      RUNS ON
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {wf.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-white/80 uppercase"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Live Status Badge & Action Row matching Image 2 */}
                  <div className="flex flex-wrap items-center gap-5 pt-4">
                    {/* Timestamp Status Pill */}
                    <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] animate-pulse" />
                      <span className="text-[#D4F542] font-semibold">{wf.time}</span>
                      <span className="text-white/80 uppercase">{wf.action}</span>
                    </div>

                    {/* See How It Runs CTA Link with arrow badge */}
                    <Link
                      href={`/workflows/${wf.id}`}
                      className="group inline-flex items-center gap-3 text-sm font-tight font-semibold text-white hover:text-[#D4F542] transition-colors"
                    >
                      <span className="underline underline-offset-4 decoration-white/30 group-hover:decoration-[#D4F542]">
                        See how it runs
                      </span>
                      <span className="w-8 h-8 rounded-full bg-[#D4F542] text-black flex items-center justify-center font-bold text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shadow-[0_0_12px_rgba(212,245,66,0.3)]">
                        ↗
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
