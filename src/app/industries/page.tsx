import React from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { BookSection } from "@/components/sections/BookSection";
import { INDUSTRIES } from "@/lib/data";

export const metadata = {
  title: "Runbook — Industries we automate",
  description: "Clinics, agencies, shops, depots, law firms and estate agents all do the same things by hand.",
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full pt-[100px]">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Industries</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95] max-w-4xl">
          Six sectors, <br />
          <span className="text-[#D4F542]">the same ten jobs.</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
          Clinics, agencies, shops, depots, law firms and estate agents all do the same things by
          hand: chase invoices, route leads, copy contact records, and assemble weekly reports.
        </p>
      </section>

      {/* Expanded Industry Directory */}
      <section className="py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <SectionLabel>Sectors we automate</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
            Pre-built blueprints tailored to your sector.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="p-8 rounded-2xl bg-zinc-900/60 border border-white/[0.1] backdrop-blur-md flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono text-white/40">
                  <span className="text-base text-[#D4F542] font-semibold">{ind.num}</span>
                  <span className="text-[#D4F542] font-semibold">{ind.share} of clients</span>
                </div>
                <h3 className="text-3xl font-tight font-semibold text-white">{ind.name}</h3>
                <p className="text-sm text-white/70 leading-relaxed font-sans">{ind.description}</p>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono text-[#D4F542] uppercase tracking-wider">
                  Typical workflows:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ind.workflows.map((wf) => (
                    <span
                      key={wf}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-white/80 border border-white/[0.08]"
                    >
                      {wf}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Results & Book */}
      <ResultsSection />
      <BookSection />
    </div>
  );
}
