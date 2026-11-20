import React from "react";
import Link from "next/link";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookSection } from "@/components/sections/BookSection";

export const metadata = {
  title: "Runbook — FAQ: what we automate, tools, timing, access",
  description: "What we automate, which tools, how long, what access, what it costs. If yours is missing, ask it on the call.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-col w-full pt-[100px]">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Questions</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95] max-w-4xl">
          Asked before <br />
          <span className="text-[#D4F542]">every first call.</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
          What we automate, which tools, how long it takes, what credentials we need, and what it
          costs. If your question is missing, ask it on the screen share.
        </p>
      </section>

      {/* Embedded FAQ Component */}
      <FaqSection />

      {/* Book Call */}
      <BookSection />
    </div>
  );
}
