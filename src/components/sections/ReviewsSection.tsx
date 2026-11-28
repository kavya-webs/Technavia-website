"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESULTS } from "@/lib/data";

const CLIENT_INITIALS: Record<string, string> = {
  "seravolve": "SA",
  "tg-media": "TG",
  "cosmo-solor": "CC",
};

export function ReviewsSection() {
  const [activeReview, setActiveReview] = useState<number>(0);
  const reviews = RESULTS;
  const current = reviews[activeReview] || reviews[0];
  const initials = CLIENT_INITIALS[current.id] || "TV";

  return (
    <section className="relative w-full bg-[#F2F3EE] text-[#14161A] py-24 md:py-36 px-6 md:px-8 lg:px-14 border-t border-[#14161A]/10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-14">
        {/* Header Label */}
        <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#14161A]/60">
          <span className="w-2 h-2 rounded-full bg-[#87A800]" />
          <span>CLIENT WORDS</span>
        </div>

        {/* Testimonial Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Monogram Card & Badge */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-[#0B0D10] border border-black/20 shadow-2xl flex flex-col justify-between p-8">
              {/* Subtle Tech Grid Background */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="review-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.2" fill="#D4F542" />
                      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#review-grid)" />
                </svg>
              </div>

              {/* Top Badge: Verified Case Study */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#D4F542] uppercase tracking-wider font-semibold">
                  VERIFIED DEPLOYMENT
                </span>
                <span className="text-[#A8B0BC] uppercase">
                  {current.year}
                </span>
              </div>

              {/* Center Monogram Badge with Animated Transition */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center py-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeReview}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#14161A] border-2 border-[#D4F542]/30 flex items-center justify-center shadow-[0_0_40px_rgba(212,245,66,0.15)] group"
                  >
                    <div className="text-4xl sm:text-5xl font-tight font-extrabold text-[#F8F8F5] tracking-tight">
                      {initials}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#D4F542] text-black text-xs font-bold flex items-center justify-center shadow-md">
                      ✓
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="mt-5 text-center">
                  <div className="text-sm font-tight font-bold text-white tracking-wide">
                    {current.quote.author}
                  </div>
                  <div className="text-xs font-mono text-white/50 uppercase tracking-wider mt-0.5">
                    {current.quote.role}
                  </div>
                </div>
              </div>

              {/* Bottom Client Pill & Verified Stat */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 text-xs font-mono text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                  <span className="tracking-wider uppercase font-medium">
                    {current.client}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#D4F542] font-semibold tracking-wider">
                  {current.metric} {current.metricSub}
                </span>
              </div>
            </div>
          </div>

          {/* Right Large Blockquote and Controls */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-10">
            {/* Quote and Author */}
            <div className="flex flex-col gap-8 min-h-[260px] justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-6"
                >
                  <blockquote className="text-2xl sm:text-4xl lg:text-[46px] font-tight font-semibold tracking-[-0.03em] text-[#14161A] leading-[1.16]">
                    "{current.quote.text}"
                  </blockquote>

                  <div className="flex flex-wrap items-baseline gap-3 text-sm">
                    <span className="font-tight font-bold text-lg text-[#14161A]">
                      {current.quote.author}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#14161A]/60">
                      {current.quote.role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls with Number Pills, Rail, and Arrows */}
            <div className="flex flex-col gap-3 pt-6 border-t border-[#14161A]/10">
              <div className="flex items-center justify-between">
                {/* Numbered Circular Buttons */}
                <div className="flex items-center gap-2.5">
                  {reviews.map((_, idx) => {
                    const isActive = activeReview === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveReview(idx)}
                        className={`w-9 h-9 rounded-full text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center ${
                          isActive
                            ? "bg-[#D4F542] text-black shadow-sm scale-105"
                            : "bg-white/60 hover:bg-white text-black/60 border border-black/12"
                        }`}
                        aria-label={`Review 0${idx + 1}`}
                      >
                        0{idx + 1}
                      </button>
                    );
                  })}
                </div>

                {/* Circular Black Arrow Buttons */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() =>
                      setActiveReview(
                        (activeReview - 1 + reviews.length) % reviews.length
                      )
                    }
                    className="w-11 h-11 rounded-full bg-[#14161A] hover:bg-black text-white flex items-center justify-center text-lg transition-transform hover:scale-105 cursor-pointer shadow-sm"
                    aria-label="Previous review"
                  >
                    ←
                  </button>
                  <button
                    onClick={() =>
                      setActiveReview((activeReview + 1) % reviews.length)
                    }
                    className="w-11 h-11 rounded-full bg-[#14161A] hover:bg-black text-white flex items-center justify-center text-lg transition-transform hover:scale-105 cursor-pointer shadow-sm"
                    aria-label="Next review"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Progress Rail Underneath Number Pills */}
              <div className="relative w-48 h-[2px] bg-black/15 rounded-full mt-2">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[#14161A] rounded-full"
                  animate={{
                    left: `${(activeReview / Math.max(reviews.length - 1, 1)) * 80}%`,
                    width: "20%",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Technavia Technology Engineering Guarantee Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0B0D10] border border-white/[0.12] text-[#F8F8F5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#D4F542] font-semibold">
                TECHNAVIA TECHNOLOGY ENGINEERING GUARANTEE
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-tight font-semibold text-[#F8F8F5]">
              Our 95+ Speed & Zero-Lock-In Guarantee
            </h3>
            <p className="text-sm text-white/70 font-sans leading-relaxed">
              Every site we ship passes mobile Core Web Vitals (95+ Lighthouse Performance) and comes with 100% source-code ownership—or we optimize it free until it does.
            </p>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-white/80 bg-white/[0.06] border border-white/[0.12] px-5 py-3 rounded-2xl whitespace-nowrap self-stretch md:self-auto justify-center">
            <span className="text-[#D4F542] font-bold text-sm">100%</span>
            <span className="tracking-wider">CODE OWNERSHIP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
