"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESULTS } from "@/lib/data";

const REVIEW_PORTRAITS = [
  "https://framerusercontent.com/images/gtCsnjITh4FJZxvR6mJl8ITbA.webp?scale-down-to=2048",
  "https://framerusercontent.com/images/rYF6VrXEAAW6zGsmEsPDhvtAY.webp?scale-down-to=2048",
  "https://framerusercontent.com/images/py9KhPBZwCXd1QM59jPco86fIk.webp?scale-down-to=2048",
  "https://framerusercontent.com/images/AN3J79LdNmBN2sL5osuX3cTIPw.webp?scale-down-to=2048",
  "https://framerusercontent.com/images/tbKfoU4sf8kUohplyzin5oZI8.webp?scale-down-to=2048",
];

export function ReviewsSection() {
  const [activeReview, setActiveReview] = useState<number>(0);
  const reviews = RESULTS;
  const current = reviews[activeReview] || reviews[0];

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
          {/* Left Portrait & Badge */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-[#E2E3DC] border border-[#14161A]/12 shadow-2xl flex flex-col justify-end p-6">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeReview}
                  src={REVIEW_PORTRAITS[activeReview]}
                  alt={current.quote.author}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Bottom Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Client Pill in bottom left */}
              <div className="relative z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-xs font-mono text-white/90 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                <span className="tracking-wider uppercase font-medium">
                  {current.client}
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
                {/* 5 Numbered Circular Buttons */}
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
                    left: `${(activeReview / (reviews.length - 1)) * 80}%`,
                    width: "20%",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
