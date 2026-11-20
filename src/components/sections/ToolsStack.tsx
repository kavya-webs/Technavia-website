"use client";

import React, { useState } from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { TOOLS } from "@/lib/data";

export function ToolsStack() {
  const [selectedTool, setSelectedTool] = useState<string>("crm");

  const leftTools = TOOLS.slice(0, 3); // CRM, Invoicing, Inbox
  const rightTools = TOOLS.slice(3, 6); // Helpdesk, Docs, Reporting

  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-36 px-6 md:px-14 border-t border-white/[0.08] overflow-hidden">
      {/* Background Photography: team in glass meeting room */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/1RRozVJo6j9BUUQiWVOOruiGIKg.webp?scale-down-to=2048"
          alt="A team talking in a glass-walled office at dusk, the city lit behind them"
          className="w-full h-full object-cover object-[50%_50%] opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10] via-transparent to-[#0B0D10]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/80 to-[#0B0D10]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel>Tools</SectionLabel>
            <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1]">
              Your stack, <span className="text-[#D4F542]">wired.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6 max-w-md">
            <p className="text-base text-white/60 leading-relaxed font-sans md:text-right">
              We do not replace the tools your team already pays for. We connect
              them, so a change in one shows up in all the others before anyone
              has to type it twice.
            </p>
            <Button href="/tools" variant="ghost" hasArrow={false} hasLamp={true}>
              All tools
            </Button>
          </div>
        </div>

        {/* Interactive Stack Map (3 Columns with Center Hub) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-6">
          {/* Left Column Tools */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {leftTools.map((tool) => {
              const isSelected = selectedTool === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 backdrop-blur-md cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900/90 border-[#D4F542] shadow-[0_0_24px_rgba(212,245,66,0.18)] -translate-y-1"
                      : "bg-zinc-950/60 border-white/[0.1] hover:border-white/30 hover:bg-zinc-900/60"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-[#D4F542] font-semibold">{tool.num}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.08] text-white/70">
                      {tool.category}
                    </span>
                  </div>
                  <h4 className="text-2xl font-tight font-semibold text-white mb-2">
                    {tool.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3">
                    {tool.description}
                  </p>
                  <div className="text-xs font-mono text-white/40 pt-2.5 border-t border-white/[0.08]">
                    Connects to:{" "}
                    <span className="text-white/80">{tool.connectsTo.join(", ")}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center Hub Node */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-8">
            <div className="relative p-10 rounded-3xl bg-[#0B0D10]/95 border-2 border-[#D4F542] shadow-[0_0_40px_rgba(212,245,66,0.25)] text-center flex flex-col items-center gap-4 backdrop-blur-2xl">
              <span className="relative w-4 h-4 rounded-full bg-[#D4F542] shadow-[0_0_16px_#D4F542]">
                <span className="absolute -inset-2 rounded-full border border-[#D4F542] animate-ping opacity-75" />
              </span>
              <div className="text-3xl sm:text-4xl font-tight font-bold text-white tracking-tight">
                Runbook
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#D4F542] font-semibold">
                Central Dispatch
              </span>
              <p className="text-xs text-white/70 max-w-[220px] leading-relaxed">
                Runs the workflows and keeps records synchronized between them.
              </p>
            </div>
          </div>

          {/* Right Column Tools */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {rightTools.map((tool) => {
              const isSelected = selectedTool === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 backdrop-blur-md cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900/90 border-[#D4F542] shadow-[0_0_24px_rgba(212,245,66,0.18)] -translate-y-1"
                      : "bg-zinc-950/60 border-white/[0.1] hover:border-white/30 hover:bg-zinc-900/60"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-[#D4F542] font-semibold">{tool.num}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.08] text-white/70">
                      {tool.category}
                    </span>
                  </div>
                  <h4 className="text-2xl font-tight font-semibold text-white mb-2">
                    {tool.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3">
                    {tool.description}
                  </p>
                  <div className="text-xs font-mono text-white/40 pt-2.5 border-t border-white/[0.08]">
                    Connects to:{" "}
                    <span className="text-white/80">{tool.connectsTo.join(", ")}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
