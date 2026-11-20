import React from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BookSection } from "@/components/sections/BookSection";
import { RESULTS } from "@/lib/data";

export const metadata = {
  title: "Runbook — Results: the number comes first",
  description: "Every result opens on a figure the owner can check: hours back, days to paid, appointments kept.",
};

export default function ResultsPage() {
  return (
    <div className="flex flex-col w-full pt-[100px]">
      {/* Page Hero */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Results</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95] max-w-4xl">
          The number <br />
          <span className="text-[#D4F542]">comes first.</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
          Every result opens on a figure the owner can check: hours back, days to paid, appointments
          kept. The story of how we wired it is one click behind it.
        </p>
      </section>

      {/* Results Grid List */}
      <section className="py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <SectionLabel>All results</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
            Six results, each with a number.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESULTS.map((res) => (
            <Link
              key={res.id}
              href={`/results/${res.id}`}
              className="p-8 md:p-10 rounded-2xl bg-zinc-900/60 border border-white/[0.1] hover:border-[#D4F542]/50 hover:bg-zinc-900/80 transition-all flex flex-col justify-between gap-8 group backdrop-blur-md"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono text-white/40">
                  <span>Result {res.num} / 06</span>
                  <span>{res.year}</span>
                </div>

                <div className="text-5xl md:text-6xl font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors">
                  {res.metric}
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#D4F542]">
                  {res.metricSub}
                </div>

                <h3 className="text-2xl font-tight font-semibold text-white mt-2">
                  {res.client}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  {res.headline}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] text-xs font-mono">
                <span className="text-white/40">{res.industry}</span>
                <span className="text-[#D4F542] group-hover:translate-x-1 transition-transform">
                  Read full story →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Book Section */}
      <BookSection />
    </div>
  );
}
