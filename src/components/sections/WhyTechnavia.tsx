"use client";

import React from "react";
import { motion } from "framer-motion";

export function WhyTechnavia() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between bg-[#0B0D10] text-[#F8F8F5] pt-12 md:pt-16 pb-12 md:pb-16 px-6 md:px-14 border-t border-white/[0.08]">
      <div className="max-w-[1340px] mx-auto w-full flex-1 flex flex-col justify-between gap-10 lg:gap-14">
        {/* Top 2-Column: Pitch Headline + Engineering Studio Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
          {/* Left Column: Eyebrow + Big Punchy Statement */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-white/80 font-medium">
                WHY TECHNAVIA
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-tight font-semibold tracking-[-0.035em] text-[#F8F8F5] leading-[1.08] max-w-[640px]">
              Most websites look good but fail to bring in qualified pipeline.{" "}
              <span className="text-[#D4F542]">
                We engineer sites that rank on search engines & AI,
              </span>{" "}
              then automate your growth operations.
            </h2>
          </div>

          {/* Right Column: Desk Photo with Floating Core Web Vitals Pill */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <figure className="relative w-full max-w-[540px] aspect-[16/11] rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl group">
              <img
                src="/images/tech/why_technavia.jpg"
                alt="TECHNAVIA engineering workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Floating Pill on photo: 100/100 CORE WEB VITALS */}
              <figcaption className="absolute bottom-5 left-5 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B0D10]/85 border border-white/[0.16] backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542]" />
                <span className="text-xs font-mono tracking-wider uppercase text-white/90">
                  <strong className="text-[#D4F542] font-semibold mr-2">100/100</strong>
                  CORE WEB VITALS
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Bottom 4-Column Stat Metrics Row */}
        <div className="w-full pt-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Stat 1: 100/100 */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                01
              </span>
              <div className="text-4xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2">
                100
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Lighthouse performance score
              </p>
            </div>

            {/* Stat 2: 4.8x */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                02
              </span>
              <div className="text-4xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2 flex items-baseline">
                4.8
                <span className="text-2xl sm:text-3xl font-light text-[#D4F542] ml-1">
                  x
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Organic & AI engine impressions
              </p>
            </div>

            {/* Stat 3: 0.4s */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                03
              </span>
              <div className="text-4xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2 flex items-baseline">
                0.4
                <span className="text-2xl sm:text-3xl font-light text-[#D4F542] ml-1">
                  s
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Average LCP load time
              </p>
            </div>

            {/* Stat 4: 24/7 */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                04
              </span>
              <div className="text-4xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2">
                24/7
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Autonomous lead routing & ops
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
