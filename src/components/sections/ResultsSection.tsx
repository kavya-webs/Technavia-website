"use client";

import React from "react";
import Link from "next/link";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { RESULTS } from "@/lib/data";

export function ResultsSection() {
  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-32 px-6 md:px-14 border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel>Results</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-tight font-semibold tracking-tight text-[#F8F8F5]">
              Numbers the owner <br className="hidden sm:block" />
              <span className="text-[#D4F542]">reads on Monday.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4 max-w-md">
            <p className="text-sm text-white/70 leading-relaxed">
              Every result opens on the figure the client reports upward. How the workflow got there
              is one click behind it.
            </p>
            <Button href="/results" variant="ghost">
              All results
            </Button>
          </div>
        </div>

        {/* Stacked Case Study Cards */}
        <div className="flex flex-col gap-6">
          {RESULTS.map((res) => (
            <div
              key={res.id}
              className="p-8 md:p-12 rounded-2xl bg-zinc-900/60 border border-white/[0.1] backdrop-blur-md transition-all duration-400 hover:border-white/30 hover:bg-zinc-900/80 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                {/* Metric Hero */}
                <div className="flex flex-col gap-2 max-w-sm">
                  <div className="flex items-center gap-3 text-xs font-mono text-white/40">
                    <span>Result {res.num} / 06</span>
                    <span>·</span>
                    <span>{res.year}</span>
                  </div>
                  <div className="text-5xl sm:text-7xl font-tight font-semibold text-white tracking-tight group-hover:text-[#D4F542] transition-colors">
                    {res.metric}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#D4F542]">
                    {res.metricSub}
                  </div>
                </div>

                {/* Client Narrative */}
                <div className="flex flex-col gap-4 max-w-xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-tight font-semibold text-white">
                      {res.client}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/60">
                      {res.industry}
                    </span>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed font-sans">
                    {res.headline}
                  </p>
                  <p className="text-xs text-white/50 italic border-l-2 border-[#D4F542] pl-3 py-1">
                    "{res.quote.text}"
                  </p>
                </div>

                {/* Direct Link */}
                <div className="flex md:flex-col justify-end">
                  <Link
                    href={`/results/${res.id}`}
                    className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-[#D4F542] transition-colors whitespace-nowrap self-start md:self-auto"
                  >
                    Open result →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
