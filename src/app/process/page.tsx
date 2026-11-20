import React from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProcessSection as ProcessWidget } from "@/components/sections/ProcessSection";
import { BookSection } from "@/components/sections/BookSection";
import { PROCESS_STEPS } from "@/lib/data";

export const metadata = {
  title: "Runbook — Process: from audit to autopilot",
  description: "The same plan every time: audit, map, build, launch, report. You know what each week needs from you.",
};

export default function ProcessPage() {
  return (
    <div className="flex flex-col w-full pt-[100px]">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Process</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95] max-w-4xl">
          From audit <br />
          <span className="text-[#D4F542]">to autopilot.</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
          The same plan every time: audit, map, build, launch, report. You know what each week needs
          from you before it starts.
        </p>
      </section>

      {/* Interactive Process Widget */}
      <ProcessWidget />

      {/* Week by Week Detailed Roadmap */}
      <section className="py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <SectionLabel>Week by week</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
            What each week needs from you.
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-white/[0.1] border-y border-white/[0.1]">
          {PROCESS_STEPS.map((s) => (
            <div key={s.step} className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-3 flex flex-col gap-1">
                <span className="text-xs font-mono text-[#D4F542]">{s.week}</span>
                <span className="text-3xl font-tight font-semibold text-white">
                  Step {s.step} · {s.title}
                </span>
              </div>

              <div className="lg:col-span-6 flex flex-col gap-3">
                <h4 className="text-xl font-tight font-semibold text-white/90">{s.headline}</h4>
                <p className="text-sm text-white/70 leading-relaxed font-sans">{s.description}</p>
              </div>

              <div className="lg:col-span-3 p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] text-xs font-mono text-white/60">
                <span className="text-[#D4F542] uppercase block mb-1">Your role:</span>
                {s.clientRole}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookSection />
    </div>
  );
}
