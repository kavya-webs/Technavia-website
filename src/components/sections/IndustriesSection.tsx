"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { INDUSTRIES } from "@/lib/data";

export function IndustriesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-32 px-6 md:px-14 border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel>Industries</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-tight font-semibold tracking-tight text-[#F8F8F5]">
              Six sectors, <br className="hidden sm:block" />
              <span className="text-[#D4F542]">the same ten jobs.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4 max-w-md">
            <p className="text-sm text-white/70 leading-relaxed">
              Every sector has its own version of the work that repeats every day. We have wired
              most of it before, so your build starts from a running workflow.
            </p>
            <Button href="/industries" variant="ghost">
              All industries
            </Button>
          </div>
        </div>

        {/* Sectors List with Floating Preview Card */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/[0.1] pt-6">
          {/* Left Sector Rows */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-white/[0.08]">
            {INDUSTRIES.map((ind, idx) => (
              <div
                key={ind.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                className="py-6 md:py-8 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="text-sm font-mono text-white/40 group-hover:text-[#D4F542] transition-colors">
                    {ind.num}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-tight font-semibold text-white group-hover:text-[#D4F542] group-hover:translate-x-2 transition-all duration-300">
                    {ind.name}
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="text-[#D4F542] font-semibold">{ind.share}</span>
                  <span className="text-white/40 hidden sm:inline">of our clients</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Hover Preview Card (Sticky) */}
          <div className="lg:col-span-4 sticky top-28 hidden lg:block">
            <div className="p-8 rounded-2xl bg-zinc-900/80 border border-white/[0.1] backdrop-blur-xl flex flex-col gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between text-xs font-mono text-white/50">
                <span>{INDUSTRIES[hoveredIdx].num} / 06</span>
                <span className="text-[#D4F542]">{INDUSTRIES[hoveredIdx].share}</span>
              </div>

              <h4 className="text-2xl font-tight font-semibold text-white">
                {INDUSTRIES[hoveredIdx].name}
              </h4>

              <p className="text-xs text-white/70 leading-relaxed">
                {INDUSTRIES[hoveredIdx].description}
              </p>

              <div className="flex flex-col gap-2 pt-3 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono text-[#D4F542] uppercase tracking-wider">
                  Typical workflows:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {INDUSTRIES[hoveredIdx].workflows.map((wf) => (
                    <span
                      key={wf}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-white/90 border border-white/[0.08]"
                    >
                      {wf}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[11px] font-mono text-white/50 pt-2">
                Example client: <span className="text-white">{INDUSTRIES[hoveredIdx].exampleClient}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
