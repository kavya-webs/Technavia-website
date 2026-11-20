"use client";

import React, { useState, useEffect } from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { RollingCounter } from "../ui/RollingCounter";
import { NIGHT_LOGS } from "@/lib/data";

export function NightLog() {
  const [activeLog, setActiveLog] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveLog((prev) => (prev + 1) % NIGHT_LOGS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-36 px-6 md:px-14 border-t border-white/[0.08] overflow-hidden">
      {/* Background Photography: desk with lit monitors */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/D5vywc1iZWqwCmhbjYFnlcV21C0.webp?scale-down-to=2048"
          alt="A desk with three lit monitors in a dark office at night"
          className="w-full h-full object-cover object-[50%_50%] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/80 to-[#0B0D10]" />
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
        <div className="lg:col-span-7 relative p-6 md:p-8 rounded-2xl bg-[#0B0D10]/90 border border-white/[0.14] backdrop-blur-2xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9)]">
          {/* Terminal Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.1]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/90">
                Live · Tonight
              </span>
            </div>
            <div className="text-xs font-mono text-[#D4F542]">
              <RollingCounter value="1,284" /> tasks tonight
            </div>
          </div>

          {/* Log Entry Rows */}
          <div className="flex flex-col gap-1.5 py-4">
            {NIGHT_LOGS.map((item, idx) => {
              const isCurrent = activeLog === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveLog(idx)}
                  className={`p-3 rounded-xl text-xs font-mono cursor-pointer transition-all flex items-center justify-between gap-4 ${
                    isCurrent
                      ? "bg-white/[0.1] text-white border-l-2 border-[#D4F542] shadow-sm"
                      : "text-white/50 hover:text-white/80 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#D4F542] font-semibold">
                      {item.time}
                    </span>
                    <span className="truncate">{item.event}</span>
                  </div>
                  <span className="text-white/40 uppercase hidden sm:inline text-[11px]">
                    {item.workflow}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Log Detail Box */}
          <div className="p-4 rounded-xl bg-black/60 border border-white/[0.1] flex flex-col gap-2 mt-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
              <span>
                {NIGHT_LOGS[activeLog].time} · WORKFLOW:{" "}
                {NIGHT_LOGS[activeLog].workflow}
              </span>
              <span className="text-[#D4F542] font-medium">
                COMPLETED UNATTENDED
              </span>
            </div>
            <div className="text-sm text-white font-medium">
              {NIGHT_LOGS[activeLog].result}
            </div>
          </div>

          {/* Terminal Controls Bar */}
          <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/[0.08] text-xs font-mono">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-3.5 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-white/90 transition-colors cursor-pointer"
            >
              {isPaused ? "▶ Resume" : "⏸ Pause"}
            </button>
            <span className="text-white/40">↑ ↓ to navigate entries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
