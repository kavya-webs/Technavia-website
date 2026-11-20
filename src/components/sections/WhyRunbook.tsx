"use client";

import React from "react";
import { motion } from "framer-motion";

export function WhyRunbook() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between bg-[#0B0D10] text-[#F8F8F5] pt-12 md:pt-16 pb-12 md:pb-16 px-6 md:px-14 border-t border-white/[0.08] select-none">
      <div className="max-w-[1340px] mx-auto w-full flex-1 flex flex-col justify-between gap-10 lg:gap-14">
        {/* Top 2-Column: Pitch Headline + Dusk Office Desk Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
          {/* Left Column: Eyebrow + Big Punchy Statement */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-white/80 font-medium">
                WHY RUNBOOK
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-tight font-semibold tracking-[-0.035em] text-[#F8F8F5] leading-[1.08] max-w-[640px]">
              Most of what your team does every day is the same ten things.{" "}
              <span className="text-[#D4F542]">
                We make them happen on their own,
              </span>{" "}
              while everyone is asleep.
            </h2>
          </div>

          {/* Right Column: Desk Photo with Floating 02:14 Payroll Approved Pill */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <figure className="relative w-full max-w-[540px] aspect-[16/11] rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl group">
              <img
                src="https://framerusercontent.com/images/ycGdT58vzuZkZf1qTQY9cYoIhc.webp?scale-down-to=1024"
                alt="An office after hours, one desk still lit"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Floating Pill on photo: 02:14 PAYROLL APPROVED */}
              <figcaption className="absolute bottom-5 left-5 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B0D10]/85 border border-white/[0.16] backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542]" />
                <span className="text-xs font-mono tracking-wider uppercase text-white/90">
                  <strong className="text-[#D4F542] font-semibold mr-2">02:14</strong>
                  PAYROLL APPROVED
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Bottom 4-Column Stat Metrics Row - Pixel-Perfect matching Image 1 */}
        <div className="w-full pt-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Stat 1: 48,200 */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                01
              </span>
              <div className="text-4xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2">
                48,200
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Tasks run a month
              </p>
            </div>

            {/* Stat 2: 31h */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                02
              </span>
              <div className="text-4xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2 flex items-baseline">
                31
                <span className="text-2xl sm:text-3xl font-light text-white/80 ml-1">
                  h
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Back per team, per week
              </p>
            </div>

            {/* Stat 3: 214 */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                03
              </span>
              <div className="text-4xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2">
                214
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Workflows live tonight
              </p>
            </div>

            {/* Stat 4: 60 */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                04
              </span>
              <div className="text-4xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2">
                60
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Tools wired together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
