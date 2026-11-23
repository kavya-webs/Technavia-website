"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { RESULTS } from "@/lib/data";

export function ResultsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Slanted white line animation (starts flat at bottom, right end rises up on scroll)
  const whiteLineY2 = useTransform(scrollYProgress, [0.35, 0.9], ["98%", "15%"]);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-32 px-6 md:px-8 lg:px-14 border-t border-white/[0.08]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel>PROVEN ARCHITECTURE</SectionLabel>
            <h2 className="text-3xl sm:text-5xl lg:text-[68px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.02]">
              Real hosted builds, <br />
              <span className="text-[#D4F542]">sub-second engineering quality.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6 max-w-md">
            <p className="text-base text-white/60 leading-relaxed font-sans md:text-right">
              Inspect our production deployments and self-hosted client mirrors. Every system is engineered for sub-second Core Web Vitals, conversion UX, and automated pipeline scale.
            </p>
            <Button href="/results" variant="ghost" hasArrow={false} hasLamp={true}>
              All results & live mirrors
            </Button>
          </div>
        </div>

        {/* Stacking Card Deck - Sticky stack preserved */}
        <div className="relative flex flex-col gap-12 pb-16">
          {RESULTS.map((res, idx) => {
            // Stacking offset: each card sticks slightly lower to create realistic depth stacking
            const topOffset = 100 + idx * 24;

            return (
              <div
                key={res.id}
                style={{ top: `${topOffset}px` }}
                className="sticky rounded-3xl overflow-hidden border border-[#2A2F38] hover:border-[#D4F542] bg-[#0E1116] shadow-[0_-16px_50px_rgba(0,0,0,0.95)] flex flex-col justify-between p-6 sm:p-10 transition-colors duration-300 group"
              >
                {/* Top Meta Bar */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/[0.12] text-xs font-mono">
                      <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] animate-pulse" />
                      <span className="text-[#D4F542] font-semibold tracking-wider uppercase text-[11px]">
                        {res.badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-white/50">
                    <span className="text-white/90 font-medium">RESULT {res.num} / 03</span>
                    <span>·</span>
                    <span>{res.year}</span>
                    <span>·</span>
                    <span className="text-[#D4F542] uppercase">{res.industry}</span>
                  </div>
                </div>

                {/* Main Content: Two Columns on Large Screens */}
                <div className="relative z-10 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Column: Narrative, Spec Pills, Problem/Solution */}
                  <div className="lg:col-span-6 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-baseline gap-3">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-tight font-semibold text-white tracking-tight group-hover:text-[#D4F542] transition-colors">
                          {res.client}
                        </h3>
                        <span className="text-xs font-mono text-white/50 uppercase">
                          {res.workflowUsed}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                        {res.headline}
                      </p>
                    </div>

                    {/* 3 Spec Pills */}
                    <div className="flex flex-wrap gap-2">
                      {res.highlights?.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-[#14161A] border border-[#2A2F38] text-xs font-mono text-white/80"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Problem -> System -> Result Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-sans pt-1">
                      <div className="p-3 rounded-xl bg-black/60 border border-white/[0.08] flex flex-col gap-1">
                        <span className="font-mono text-[10px] uppercase text-red-400 font-semibold tracking-wider">
                          01 · PROBLEM
                        </span>
                        <p className="text-white/70 leading-snug text-[11.5px] line-clamp-3">
                          {res.before}
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-black/60 border border-white/[0.08] flex flex-col gap-1">
                        <span className="font-mono text-[10px] uppercase text-[#D4F542] font-semibold tracking-wider">
                          02 · SYSTEM BUILT
                        </span>
                        <p className="text-white/70 leading-snug text-[11.5px] line-clamp-3">
                          {res.summary}
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-black/60 border border-white/[0.08] flex flex-col gap-1">
                        <span className="font-mono text-[10px] uppercase text-emerald-400 font-semibold tracking-wider">
                          03 · RESULT
                        </span>
                        <p className="text-white/70 leading-snug text-[11.5px] line-clamp-3">
                          {res.after}
                        </p>
                      </div>
                    </div>

                    {/* Actions & Metrics Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/[0.08]">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl sm:text-4xl font-tight font-semibold text-white tracking-tight leading-none">
                          {res.metric}
                        </div>
                        <div className="px-2.5 py-1 rounded bg-[#D4F542]/15 text-[#D4F542] font-mono text-[10px] font-semibold uppercase tracking-wider border border-[#D4F542]/30">
                          {res.metricSub}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4F542] hover:bg-[#c3e634] text-black font-tight font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_16px_rgba(212,245,66,0.2)] hover:shadow-[0_0_24px_rgba(212,245,66,0.4)]"
                        >
                          <span>{res.ctaText}</span>
                        </a>

                        <Link
                          href={`/results/${res.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-white uppercase tracking-wider px-3 py-2 transition-colors"
                        >
                          Details →
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Obsidian HUD Browser Frame */}
                  <div className="lg:col-span-6 flex flex-col">
                    <div className="relative rounded-2xl overflow-hidden bg-[#14161A] border border-[#2A2F38] group-hover:border-[#D4F542] transition-colors duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col">
                      {/* Browser Mockup Top Bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0B0D10]/95 border-b border-[#2A2F38] backdrop-blur-md">
                        {/* Minimal window dots */}
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                        </div>

                        {/* Status Pill in Browser Address Bar */}
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-white/[0.08] text-[11px] font-mono text-white/80 max-w-[260px] truncate shadow-inner">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_6px_#D4F542] shrink-0 animate-pulse" />
                          <span className="truncate">{res.url.replace("https://", "")}</span>
                        </div>

                        {/* Status pill right */}
                        <span className="text-[10px] font-mono uppercase text-[#D4F542] font-semibold tracking-wider px-2 py-0.5 rounded bg-[#D4F542]/10 border border-[#D4F542]/30">
                          LIVE
                        </span>
                      </div>

                      {/* Browser Viewport with Hover Zoom Effect */}
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 block cursor-pointer group/frame"
                      >
                        <Image
                          src={res.previewImg}
                          alt={`${res.client} Live Interface`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 600px"
                          className="object-cover object-top group-hover/frame:scale-[1.03] group-hover/frame:-translate-y-1 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                        {/* Interactive Hover Pill */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4F542] text-black font-tight font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(212,245,66,0.6)]">
                            {res.ctaText}
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote & Sub-Bar */}
        <div className="flex flex-col gap-6 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-xs font-mono text-white/60">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] animate-pulse" />
              <span>Production builds verified for sub-second Core Web Vitals</span>
            </div>

            <Button href="/results" variant="solid" className="w-full sm:w-auto">
              All results & live mirrors
            </Button>
          </div>

          {/* User Required Footnote */}
          <p className="text-xs font-mono text-white/40 text-center sm:text-left leading-relaxed">
            Client mirrors are self-hosted with permission to preserve client domain privacy while letting you inspect live UI and engineering quality.
          </p>
        </div>
      </div>

      {/* Animated Slanted White Line */}
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
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="1.5"
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] drop-shadow-[0_0_16px_rgba(255,255,255,0.4)]"
          />
        </svg>
      </div>
    </section>
  );
}
