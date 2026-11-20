"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { RESULTS } from "@/lib/data";

const RESULT_IMAGES: Record<string, string> = {
  "harbour-dental": "/images/results/card_01.jpg",
  "northcode-studio": "/images/results/card_02.jpg",
  "fernwood-living": "/images/results/card_03.jpg",
  "crosslane-freight": "/images/results/card_04.jpg",
  "whitmore-hale": "/images/results/card_05.jpg",
  "aldgate-estates": "/images/results/card_06.jpg",
};

export function ResultsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Slanted white line animation matching Image 4 (starts flat at bottom, right end rises up on scroll)
  const whiteLineY2 = useTransform(scrollYProgress, [0.4, 0.95], ["98%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-32 px-6 md:px-14 border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel>Results</SectionLabel>
            <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1]">
              Numbers the owner <br />
              <span className="text-[#D4F542]">reads on Monday.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6 max-w-md">
            <p className="text-base text-white/60 leading-relaxed font-sans md:text-right">
              Every result opens on the figure the client reports upward. How
              the workflow got there is one click behind it.
            </p>
            <Button href="/results" variant="ghost" hasArrow={false} hasLamp={true}>
              All results
            </Button>
          </div>
        </div>

        {/* Stacking Card Deck */}
        <div className="relative flex flex-col gap-12 pb-16">
          {RESULTS.map((res, idx) => {
            const imgSrc =
              RESULT_IMAGES[res.id] || "/images/results/card_01.jpg";

            // Stacking offset: each card sticks slightly lower to create depth
            const topOffset = 100 + idx * 16;

            return (
              <div
                key={res.id}
                style={{ top: `${topOffset}px` }}
                className="sticky rounded-3xl overflow-hidden border border-white/[0.14] bg-zinc-950 shadow-[0_-12px_45px_rgba(0,0,0,0.85)] min-h-[460px] sm:min-h-[520px] flex flex-col justify-between p-6 sm:p-12 transition-all group"
              >
                {/* Background Photo with Scrim - reduced black tint for clear visibility */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={imgSrc}
                    alt={res.client}
                    className="w-full h-full object-cover object-[50%_40%] group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/20" />
                </div>

                {/* Top Bar inside Card */}
                <div className="relative z-10 flex items-center justify-between">
                  {/* Result Pill */}
                  <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/[0.1] text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                    <span className="text-white/90 font-medium tracking-wider uppercase">
                      RESULT {res.num} / 06
                    </span>
                  </div>

                  {/* Year Pill */}
                  <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/[0.1] text-xs font-mono text-white/70">
                    {res.year}
                  </div>
                </div>

                {/* Bottom Content Bar inside Card */}
                <div className="relative z-10 mt-auto pt-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                  {/* Left Metric */}
                  <div className="flex flex-col gap-2 max-w-sm">
                    <div className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-white tracking-tight leading-none group-hover:text-[#D4F542] transition-colors">
                      {res.metric}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#D4F542] text-black font-mono font-bold text-xs uppercase tracking-wider w-fit shadow-[0_0_12px_rgba(212,245,66,0.3)]">
                      {res.metricSub}
                    </div>
                  </div>

                  {/* Middle Narrative */}
                  <div className="flex flex-col gap-3 max-w-xl">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-white">
                        {res.client}
                      </h3>
                      <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
                        {res.industry} · {res.workflowUsed}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                      {res.headline}
                    </p>
                  </div>

                  {/* Right Circular CTA Button */}
                  <div className="flex items-center gap-3 self-start lg:self-end">
                    <Link
                      href={`/results/${res.id}`}
                      className="group/btn flex items-center gap-3 pl-4 pr-2 py-2 rounded-full bg-white/10 hover:bg-white border border-white/20 hover:border-white text-white hover:text-black transition-all backdrop-blur-md"
                    >
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                        OPEN
                      </span>
                      <span className="w-8 h-8 rounded-full bg-[#D4F542] text-black flex items-center justify-center font-bold text-sm group-hover/btn:scale-105 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Sub-Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center gap-3 text-xs font-mono text-white/60">
            <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] animate-pulse" />
            <span>1,284 tasks ran for our clients last night</span>
          </div>

          <Button href="/results" variant="solid" className="w-full sm:w-auto">
            All results
          </Button>
        </div>
      </div>

      {/* Animated Slanted White Line after "All results" button matching Image 4 */}
      <div className="relative w-full h-16 mt-6 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="0%"
            y1="98%"
            x2="100%"
            y2={whiteLineY2}
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="1.5"
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          />
        </svg>
      </div>
    </section>
  );
}
