"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";

interface WorkflowItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  tools: string[];
  time: string;
  action: string;
  img: string;
}

const WORKFLOW_ITEMS: WorkflowItem[] = [
  {
    id: "web-dev-seo",
    num: "01",
    title: "Web Development + Technical SEO",
    tagline: "Fast, conversion-focused websites engineered with clean architecture to rank from day one.",
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
    tools: ["n8n", "Make", "OpenAI APIs", "Supabase", "Slack / CRM"],
    time: "24/7",
    action: "Lead qualified · CRM updated · Digest sent",
    img: "/images/tech/ai_automations.jpg",
  },
];

export function WorkflowsAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] pt-24 md:pt-32 pb-28 md:pb-36 overflow-visible border-t border-white/[0.08]">
      {/* Angled Edge Header Accent */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-14 flex flex-col gap-16">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <SectionLabel>Core Capabilities</SectionLabel>
            <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1]">
              Engineered to rank. <br />
              <span className="text-[#D4F542]">Automated to scale.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6">
            <p className="text-base text-white/60 leading-relaxed font-sans max-w-md lg:text-right">
              Three core engineering disciplines that turn your digital presence into an autonomous growth engine.
            </p>
            <Button href="/workflows" variant="ghost" hasArrow={false} hasLamp={true}>
              All services
            </Button>
          </div>
        </div>
      </div>

      {/* Accordion Rows */}
      <div className="mt-14 md:mt-20 border-t border-white/[0.12]">
        {WORKFLOW_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setOpenIndex(idx)}
              onClick={() => setOpenIndex(idx)}
              className={`relative border-b border-white/[0.12] transition-colors duration-400 overflow-hidden cursor-pointer ${
                isOpen ? "bg-black/50" : "hover:bg-white/[0.02]"
              }`}
            >
              {/* Row Background Media Layer */}
              <div
                className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${
                    isOpen ? "scale-100" : "scale-105"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/95 via-[#0B0D10]/75 to-[#0B0D10]/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/90 via-transparent to-[#0B0D10]/80" />
              </div>

              {/* Main Trigger Button */}
              <button
                onClick={() => toggle(idx)}
                className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-8 lg:px-14 py-7 md:py-9 flex items-center justify-between text-left group cursor-pointer"
              >
                <div className="flex items-center gap-8 md:gap-20">
                  <span
                    className={`font-mono text-2xl md:text-4xl transition-colors duration-400 ${
                      isOpen
                        ? "text-[#D4F542]"
                        : "text-white/40 group-hover:text-white"
                    }`}
                  >
                    {item.num}
                  </span>
                  <h3
                    className={`font-tight font-semibold tracking-[-0.04em] transition-all duration-400 ${
                      isOpen
                        ? "text-3xl sm:text-5xl md:text-6xl lg:text-[68px] text-white"
                        : "text-2xl sm:text-4xl md:text-5xl text-white/80 group-hover:text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isOpen
                      ? "bg-white text-black rotate-90"
                      : "border border-white/20 text-white group-hover:border-white"
                  }`}
                >
                  <svg
                    className="w-4 h-4 -rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {/* Expandable Content Area with buttery-smooth Framer Motion animation */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.35, ease: "linear", delay: 0.06 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.2, ease: "linear" },
                      },
                    }}
                    className="relative z-10 overflow-hidden"
                  >
                    <div className="pb-10 pt-2">
                      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-14 pl-6 sm:pl-16 md:pl-28 lg:pl-44 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="flex flex-col gap-4 max-w-xl">
                          <p className="text-base sm:text-lg md:text-xl text-[#F8F8F5]/90 font-normal leading-relaxed font-sans">
                            {item.tagline}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            {item.tools.map((t) => (
                              <span
                                key={t}
                                className="px-3 py-1 rounded-full bg-[#0B0D10]/80 border border-white/20 text-xs font-mono uppercase tracking-wider text-white/80 backdrop-blur-sm"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 flex-shrink-0">
                          <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#0B0D10]/80 border border-[#D4F542]/50 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                            <span className="text-xs font-mono text-[#D4F542] font-semibold">
                              {item.time}
                            </span>
                            <span className="text-xs font-mono text-white/90 uppercase">
                              {item.action}
                            </span>
                          </div>
                          <Link
                            href={`/workflows/${item.id}`}
                            className="w-10 h-10 rounded-full bg-[#D4F542] text-black grid place-items-center hover:scale-105 transition-transform flex-shrink-0"
                            title={`Open ${item.title}`}
                          >
                            <svg
                              className="w-4 h-4 -rotate-45"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.4"
                            >
                              <path d="M5 12h14M13 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
