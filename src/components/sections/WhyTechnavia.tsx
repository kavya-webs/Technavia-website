"use client";

import React from "react";
import { motion } from "framer-motion";

export function WhyTechnavia() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between bg-[#0B0D10] text-[#F8F8F5] pt-12 md:pt-16 pb-12 md:pb-16 px-6 md:px-8 lg:px-14 border-t border-white/[0.08]">
      <div className="max-w-[1340px] mx-auto w-full flex-1 flex flex-col justify-between gap-10 lg:gap-14">
        {/* Top 2-Column: Pitch Headline + Engineering Architecture HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
          {/* Left Column: Eyebrow + Big Punchy Statement */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542] font-semibold">
                THE PROBLEM WE SOLVE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-tight font-semibold tracking-[-0.035em] text-[#F8F8F5] leading-[1.08] max-w-[660px]">
              Most B2B websites look polished—
              <span className="text-[#D4F542]">
                and still fail to generate pipeline.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 font-sans max-w-xl leading-relaxed mt-1">
              Slow templates don&apos;t rank on Google, LLMs ignore unstructured brands, and manual follow-ups lose warm leads in minutes. TECHNAVIA replaces fragmented freelancers with one engineered growth system.
            </p>
          </div>

          {/* Right Column: Dark-Tech Architecture HUD Card */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="relative w-full max-w-[540px] min-h-[330px] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0E1116] shadow-2xl p-4 sm:p-6 flex flex-col justify-between group">
              {/* Circuit Grid Pattern Background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="why-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="#D4F542" />
                      <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#why-grid)" />
                </svg>
              </div>

              {/* Glowing Accent Ring */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#D4F542]/10 blur-3xl pointer-events-none" />

              {/* Top HUD Telemetry */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-y-1 gap-x-2 text-xs font-mono">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] animate-pulse" />
                  <span className="text-white/80 font-medium text-[11px] sm:text-xs">ENGINEERING BUS ONLINE</span>
                </div>
                <span className="text-white/40 uppercase tracking-widest text-[9px] sm:text-[10px] shrink-0">NEXT.JS · GEO · N8N</span>
              </div>

              {/* Center Architecture Blueprint Nodes */}
              <div className="relative z-10 my-auto grid grid-cols-3 gap-2 sm:gap-3 py-3 sm:py-4">
                <div className="p-2 sm:p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex flex-col gap-0.5 sm:gap-1">
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#D4F542]">01 · SPEED</span>
                  <span className="text-xs sm:text-sm font-tight font-bold text-white whitespace-nowrap">&lt; 1.0s LCP</span>
                  <span className="text-[10px] sm:text-[11px] font-sans text-white/50 leading-tight">Edge Pre-rendered</span>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-white/[0.04] border border-[#D4F542]/30 flex flex-col gap-0.5 sm:gap-1 shadow-[0_0_20px_rgba(212,245,66,0.1)]">
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#D4F542]">02 · ENTITY</span>
                  <span className="text-xs sm:text-sm font-tight font-bold text-white whitespace-nowrap">AEO / GEO</span>
                  <span className="text-[10px] sm:text-[11px] font-sans text-white/50 leading-tight">ChatGPT & Perplexity</span>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex flex-col gap-0.5 sm:gap-1">
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#D4F542]">03 · OPS</span>
                  <span className="text-xs sm:text-sm font-tight font-bold text-white whitespace-nowrap">&lt; 60s Lead</span>
                  <span className="text-[10px] sm:text-[11px] font-sans text-white/50 leading-tight">CRM Synced</span>
                </div>
              </div>

              {/* Floating Pill on photo: 100/100 CORE WEB VITALS */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#0B0D10]/90 border border-white/[0.16] backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542]" />
                  <span className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-white/90 whitespace-nowrap">
                    <strong className="text-[#D4F542] font-semibold mr-1">95+</strong>
                    CORE WEB VITALS
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-white/50 uppercase whitespace-nowrap">21-DAY DELIVERY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4-Column Stat Metrics Row */}
        <div className="w-full pt-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Stat 1: 21 Days */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                01
              </span>
              <div className="text-3xl sm:text-5xl lg:text-[54px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2">
                21 Days
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                From blueprint to live web, SEO & AI system
              </p>
            </div>

            {/* Stat 2: < 1.0s */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                02
              </span>
              <div className="text-3xl sm:text-5xl lg:text-[54px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2">
                &lt; 1.0s
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Mobile load speed target (Core Web Vitals green)
              </p>
            </div>

            {/* Stat 3: < 60 sec */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                03
              </span>
              <div className="text-3xl sm:text-5xl lg:text-[54px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2">
                &lt; 60 sec
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Automated lead response & CRM qualification
              </p>
            </div>

            {/* Stat 4: 2 Hours */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                04
              </span>
              <div className="text-3xl sm:text-5xl lg:text-[54px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2">
                2 Hours
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Total founder input required—done-for-you build
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
