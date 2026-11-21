"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { FAQS } from "@/lib/data";

export interface FaqSectionProps {
  showHeader?: boolean;
}

export function FaqSection({ showHeader = true }: FaqSectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const activeIndex = openIndex >= 0 ? openIndex : 0;
  const currentNum = FAQS[activeIndex]?.num || "01";

  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-20 md:py-32 px-6 md:px-14 border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Sticky Question Image Card with Laser Line Animation */}
        <div className="lg:col-span-5 sticky top-28 hidden lg:block">
          <div className="relative w-full aspect-[4/5] max-h-[620px] rounded-[32px] overflow-hidden border border-white/[0.12] bg-[#12151B] shadow-[0_24px_50px_rgba(0,0,0,0.8)]">
            {/* Base Office Photography */}
            <img
              src="/images/tech/why_technavia.jpg"
              alt="TECHNAVIA studio"
              className="w-full h-full object-cover select-none pointer-events-none"
            />

            {/* Glowing Green Laser Scan Line Animation on Question Change */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`laser-${activeIndex}`}
                initial={{ top: "0%", opacity: 1 }}
                animate={{ top: "100%", opacity: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 right-0 h-[2.5px] bg-[#D4F542] shadow-[0_0_14px_#D4F542,0_0_28px_rgba(212,245,66,0.9)] z-20 pointer-events-none"
              />
            </AnimatePresence>

            {/* Huge Number at Bottom Left */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`num-${currentNum}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28 }}
                className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8 z-10 pointer-events-none"
              >
                <span className="text-7xl sm:text-8xl lg:text-[130px] font-tight font-extrabold text-[#F8F8F5] leading-none tracking-tight select-none drop-shadow-[0_10px_24px_rgba(0,0,0,0.9)]">
                  {currentNum}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Pill Badge at Bottom Right */}
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B0D10]/85 border border-white/10 backdrop-blur-md shadow-lg select-none">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              <span className="font-mono text-xs font-semibold text-[#D4F542] tracking-wider">
                {currentNum} / 08
              </span>
              <span className="font-mono text-[11px] text-white/70 tracking-widest uppercase">
                · QUESTION
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Heading (optional), Accordion & Still have a question CTA */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Section Heading — De-duplicated when showHeader is false */}
          {showHeader && (
            <div className="flex flex-col gap-4">
              <SectionLabel>Questions</SectionLabel>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-tight font-semibold tracking-[-0.03em] text-[#F8F8F5] leading-[1.05]">
                Asked before <br />
                <span className="text-[#D4F542]">every first workflow.</span>
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans max-w-xl">
                Straight answers on tools, access, timelines and what happens when something breaks at 2 a.m.
              </p>
            </div>
          )}

          {/* Accordion List */}
          <div className="flex flex-col border-b border-white/[0.08]">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.num}
                  className={`transition-colors duration-300 ${
                    isOpen ? "border-t-2 border-[#D4F542]" : "border-t border-white/[0.08]"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    type="button"
                    className="w-full py-6 flex items-center justify-between text-left group gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-5 sm:gap-6">
                      <span
                        className={`text-xs font-mono font-medium transition-colors ${
                          isOpen ? "text-[#D4F542]" : "text-white/40 group-hover:text-white/80"
                        }`}
                      >
                        {faq.num}
                      </span>
                      <h3
                        className={`text-xl sm:text-2xl font-tight font-semibold transition-colors ${
                          isOpen
                            ? "text-white"
                            : "text-white/90 group-hover:text-white"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* Plus / Minus Circular Pill */}
                    <span
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 transition-all ${
                        isOpen
                          ? "bg-[#D4F542] text-black shadow-[0_0_12px_rgba(212,245,66,0.35)]"
                          : "bg-white/[0.08] text-white/60 group-hover:bg-white/[0.14] group-hover:text-white"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-9 sm:pl-11 pr-4">
                          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans max-w-xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Still Have a Question Bottom Callout */}
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-md">
              <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-[#F8F8F5]">
                Still have a question?
              </h3>
              <p className="text-sm text-white/60 font-sans leading-relaxed">
                Write to us with the tool stack you run. A real person replies inside one working day.
              </p>
            </div>
            <Link
              href="mailto:contact@technavia.com"
              className="group inline-flex items-center gap-3 bg-[#F0F2E8] hover:bg-white text-black pl-5 pr-2 py-2 rounded-full font-tight font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] w-fit flex-shrink-0"
            >
              <span>Ask us</span>
              <span className="w-7 h-7 rounded-full bg-[#D4F542] flex items-center justify-center text-black text-xs font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;