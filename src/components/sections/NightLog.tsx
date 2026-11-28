"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { RollingCounter } from "../ui/RollingCounter";

interface LogEntry {
  time: string;
  event: string;
  workflow: string;
  category: string;
  result: string;
  href: string;
  linkLabel: string;
}

const TERMINAL_LOGS: LogEntry[] = [
  {
    time: "23:52",
    event: "Inbound enterprise lead qualified via AI",
    workflow: "Custom AI Automations",
    category: "AI LEAD ROUTING",
    result: "Scored 94/100, enriched with company metrics, CRM updated",
    href: "/services/ai-automations",
    linkLabel: "See AI Automations →",
  },
  {
    time: "00:07",
    event: "Core Web Vitals edge benchmark passed",
    workflow: "Web Dev + Technical SEO",
    category: "TECHNICAL SEO",
    result: "100/100 Lighthouse, 0.38s LCP across all global nodes",
    href: "/services/web-development-seo",
    linkLabel: "See Web Dev + SEO →",
  },
  {
    time: "00:41",
    event: "Brand entity cited by Perplexity AI",
    workflow: "LLM Visibility (AEO/GEO)",
    category: "LLM VISIBILITY",
    result: "Knowledge graph linked, authoritative source citation verified",
    href: "/services/llm-visibility",
    linkLabel: "See LLM Visibility →",
  },
  {
    time: "01:15",
    event: "JSON-LD schema validated across 48 pages",
    workflow: "Web Dev + Technical SEO",
    category: "SEARCH SCHEMA",
    result: "Zero rich snippet errors, instant indexation on Google & Bing",
    href: "/services/web-development-seo",
    linkLabel: "See Web Dev + SEO →",
  },
  {
    time: "01:48",
    event: "Automated webhook pipeline triggered",
    workflow: "Custom AI Automations",
    category: "AI AUTOMATIONS",
    result: "Contract signed, staging repo initialized, client notified",
    href: "/services/ai-automations",
    linkLabel: "See AI Automations →",
  },
  {
    time: "02:14",
    event: "Weekly ranking & citation digest built",
    workflow: "LLM Visibility (AEO/GEO)",
    category: "AEO MONITORING",
    result: "Position #1 secured for 14 keywords, weekly report delivered",
    href: "/services/llm-visibility",
    linkLabel: "See LLM Visibility →",
  },
];

export function NightLog() {
  const [activeIdx, setActiveIdx] = useState<number>(TERMINAL_LOGS.length - 1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [typedText, setTypedText] = useState<string>("");
  const [taskCount, setTaskCount] = useState<number>(1284);

  // Typewriter effect state
  const activeEntry = TERMINAL_LOGS[activeIdx];

  // Character-by-character typewriter for the active row
  useEffect(() => {
    let currentPos = 0;
    const fullText = activeEntry.event;
    setTypedText("");

    const typeInterval = setInterval(() => {
      if (currentPos < fullText.length) {
        currentPos++;
        setTypedText(fullText.slice(0, currentPos));
      } else {
        clearInterval(typeInterval);
      }
    }, 45); // 45ms per character creates a crisp, realistic terminal typing speed

    return () => clearInterval(typeInterval);
  }, [activeIdx, activeEntry.event]);

  // Auto-advance loop when not paused
  useEffect(() => {
    if (isPaused) return;

    const advanceTimer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TERMINAL_LOGS.length);
      setTaskCount((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(advanceTimer);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setActiveIdx((prev) => (prev + 1) % TERMINAL_LOGS.length);
      } else if (e.key === "ArrowUp") {
        setActiveIdx(
          (prev) => (prev - 1 + TERMINAL_LOGS.length) % TERMINAL_LOGS.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-36 px-6 md:px-8 lg:px-14 border-t border-white/[0.08] overflow-hidden">
      {/* Background Photography: desk with lit monitors */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/case-studies/tools_architecture.webp"
          alt="A desk with three lit monitors in a dark office at night"
          fill
          sizes="100vw"
          loading="lazy"
          decoding="async"
          className="object-cover object-[50%_50%] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/85 to-[#0B0D10]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <SectionLabel>SAMPLE AUTOMATION TELEMETRY</SectionLabel>
          <h2 className="text-3xl sm:text-5xl font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.05]">
            What your growth engine runs <br />
            <span className="text-[#D4F542]">while your team sleeps.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
            Example production triggers Technavia Technology wires into client CRMs, websites, and AI monitoring pipelines:
          </p>
          <Button href="/services" variant="ghost" hasArrow={false} hasLamp={true}>
            Explore Services
          </Button>
        </div>

        {/* Right Column Interactive Terminal Card */}
        <div className="lg:col-span-7 relative p-6 md:p-8 rounded-3xl bg-[#0B0D10]/95 border border-white/[0.14] backdrop-blur-2xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.95)] flex flex-col gap-5">
          {/* Terminal Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.1]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/90">
                Live Telemetry · 6 Nodes Active
              </span>
            </div>
            <div className="text-right">
              <div className="text-xs font-mono font-bold text-[#D4F542] tracking-wider uppercase">
                CRITICAL WORKFLOWS ONLINE
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mt-0.5">
                Latency &lt; 60ms
              </div>
            </div>
          </div>

          {/* Log Entry Rows */}
          <div className="flex flex-col gap-1.5 py-2 font-mono text-xs">
            {TERMINAL_LOGS.map((item, idx) => {
              const isCurrent = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-2.5 rounded-xl cursor-pointer transition-all flex items-center justify-between gap-4 ${
                    isCurrent
                      ? "bg-white/[0.08] text-white shadow-inner"
                      : "text-[#A8B0BC] hover:text-white/80 hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    {/* Status Dot */}
                    {isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] flex-shrink-0" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                    )}

                    {/* Timestamp */}
                    <span
                      className={
                        isCurrent
                          ? "text-[#D4F542] font-semibold flex-shrink-0"
                          : "text-white/50 flex-shrink-0"
                      }
                    >
                      {item.time}
                    </span>

                    {/* Event Description (with typewriter if active) */}
                    <span className="truncate">
                      {isCurrent ? (
                        <>
                          <span className="text-white font-medium">
                            {typedText}
                          </span>
                          <span className="inline-block w-2 h-3.5 bg-[#D4F542] ml-1 align-middle animate-pulse shadow-[0_0_6px_#D4F542]" />
                        </>
                      ) : (
                        item.event
                      )}
                    </span>
                  </div>

                  {/* Category Tag */}
                  <span
                    className={`text-[11px] font-mono tracking-wider uppercase hidden sm:inline flex-shrink-0 ${
                      isCurrent ? "text-[#D4F542]" : "text-white/30"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Log Detail Box with Descriptive Service CTA */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/75 border border-white/[0.12] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[11px] font-mono text-white/50">
                <span className="text-[#D4F542]">{activeEntry.time}</span>
                <span>·</span>
                <span className="uppercase">WORKFLOW:</span>
                <span className="text-white font-medium">{activeEntry.workflow}</span>
              </div>
              <div className="text-sm sm:text-base text-white font-tight font-medium">
                {activeEntry.result}
              </div>
            </div>

            <Link
              href={activeEntry.href}
              className="px-4 py-2 rounded-full bg-[#D4F542] text-black font-mono font-semibold text-xs inline-flex items-center justify-center gap-1.5 hover:scale-105 transition-transform shadow-[0_0_16px_rgba(212,245,66,0.4)] flex-shrink-0 whitespace-nowrap w-fit"
            >
              {activeEntry.linkLabel}
            </Link>
          </div>

          {/* Terminal Controls Bar */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] text-xs font-mono">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white/80 transition-colors cursor-pointer"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isPaused ? "bg-amber-400" : "bg-[#D4F542]"
                }`}
              />
              <span>{isPaused ? "Resume" : "Pause"}</span>
            </button>
            <span className="text-[#A8B0BC] text-[11px]">
              ↑ ↓ to navigate, → to step
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
