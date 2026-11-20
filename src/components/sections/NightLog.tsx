"use client";

import React, { useState, useEffect, useRef } from "react";
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
}

const TERMINAL_LOGS: LogEntry[] = [
  {
    time: "23:52",
    event: "New lead from the website form",
    workflow: "Lead Routing",
    category: "LEAD ROUTING",
    result: "Enquiry routed to London partner, calendar link sent",
    href: "/workflows",
  },
  {
    time: "00:07",
    event: "Proposal #318 signed",
    workflow: "Onboarding",
    category: "ONBOARDING",
    result: "Client folder created in Drive, Slack channel spawned",
    href: "/workflows",
  },
  {
    time: "00:41",
    event: "Invoice #4821 sent",
    workflow: "Invoicing",
    category: "INVOICING",
    result: "£4,200 invoice dispatched to accounts, payment link active",
    href: "/workflows",
  },
  {
    time: "01:15",
    event: "14 support tickets sorted",
    workflow: "Support Triage",
    category: "SUPPORT TRIAGE",
    result: "10 tickets answered unattended, 4 escalated with context tags",
    href: "/workflows",
  },
  {
    time: "01:48",
    event: "Stock below 20 on SKU 1132",
    workflow: "Reordering",
    category: "REORDERING",
    result: "Purchase order draft prepared for supplier sign-off",
    href: "/workflows",
  },
  {
    time: "02:14",
    event: "Weekly report built",
    workflow: "Reporting",
    category: "REPORTING",
    result: "Monday morning briefing sent to partner inboxes",
    href: "/workflows",
  },
  {
    time: "02:36",
    event: "Overdue invoice #4790 nudged",
    workflow: "Collections",
    category: "COLLECTIONS",
    result: "Polite reminder delivered via SMS & email with payment link",
    href: "/workflows",
  },
  {
    time: "03:05",
    event: "Candidate replies scheduled",
    workflow: "Hiring",
    category: "HIRING",
    result: "Three interviews booked in the calendar",
    href: "/workflows",
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
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-36 px-6 md:px-14 border-t border-white/[0.08] overflow-hidden">
      {/* Background Photography: desk with lit monitors */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/D5vywc1iZWqwCmhbjYFnlcV21C0.webp?scale-down-to=2048"
          alt="A desk with three lit monitors in a dark office at night"
          className="w-full h-full object-cover object-[50%_50%] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/85 to-[#0B0D10]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <SectionLabel>The night log</SectionLabel>
          <h2 className="text-4xl sm:text-6xl font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1]">
            While you sleep, <br />
            <span className="text-[#D4F542]">the work gets done.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans">
            Every workflow writes what it did into one log. This is a night like
            any other: leads routed, invoices out, tickets sorted, nobody at a
            desk.
          </p>
          <Button href="/workflows" variant="ghost" hasArrow={false} hasLamp={true}>
            See the workflows
          </Button>
        </div>

        {/* Right Column Interactive Terminal Card */}
        <div className="lg:col-span-7 relative p-6 md:p-8 rounded-3xl bg-[#0B0D10]/95 border border-white/[0.14] backdrop-blur-2xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.95)] flex flex-col gap-5">
          {/* Terminal Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.1]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/90">
                Live · Tonight
              </span>
            </div>
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-tight font-bold text-white tracking-tight leading-none">
                <RollingCounter value={taskCount.toLocaleString()} />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mt-1">
                Tasks tonight
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
                      : "text-white/40 hover:text-white/80 hover:bg-white/[0.02]"
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

          {/* Active Log Detail Box with Arrow CTA */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/75 border border-white/[0.12] flex items-center justify-between gap-4">
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
              className="w-10 h-10 rounded-full bg-[#D4F542] text-black flex items-center justify-center font-bold text-base hover:scale-110 transition-transform shadow-[0_0_16px_rgba(212,245,66,0.4)] flex-shrink-0"
              aria-label="View workflow details"
            >
              ↗
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
            <span className="text-white/40 text-[11px]">
              ↑ ↓ to navigate, → to step
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
