"use client";

import React, { useState } from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { FAQS } from "@/lib/data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-32 px-6 md:px-14 border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column Sticky Header */}
        <div className="lg:col-span-5 sticky top-28 flex flex-col gap-6">
          <SectionLabel>Questions</SectionLabel>
          <h2 className="text-3xl sm:text-5xl font-tight font-semibold tracking-tight text-[#F8F8F5]">
            Asked before <br />
            every first workflow.
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-sans max-w-sm">
            Straight answers on tools, access, timelines and what happens when something breaks at
            2 a.m.
          </p>
          <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-white/50">
            Still have a question?{" "}
            <a href="mailto:hello@runbookops.agency" className="text-[#D4F542] underline">
              Write to us
            </a>
          </div>
        </div>

        {/* Right Accordion List */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-white/[0.1] border-y border-white/[0.1]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.num} className="py-6">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left group gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-white/40 group-hover:text-[#D4F542] transition-colors">
                      {faq.num}
                    </span>
                    <h3 className="text-lg sm:text-xl font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-white/40 flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] overflow-hidden ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pt-4" : "grid-rows-[0fr] opacity-0 pt-0"
                  }`}
                >
                  <div className="min-h-0 pl-8 pr-4">
                    <p className="text-sm text-white/70 leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
