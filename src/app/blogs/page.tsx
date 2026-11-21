import React from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BookSection } from "@/components/sections/BookSection";
import { BlogExplorer } from "@/components/sections/BlogExplorer";
import { ARTICLES } from "@/lib/data";

export const metadata = {
  title: "TECHNAVIA — Blogs & Blueprints: Web Engineering, SEO & AI Visibility",
  description:
    "Technical guides, real-world benchmarks, and architectural field notes from engineering high-performance web systems, securing LLM citations, and building autonomous workflows.",
};

export default function BlogsPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5] pt-[92px]">
      {/* Hero Header */}
      <section className="py-16 md:py-24 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#D4F542]">Blogs</span>
        </div>

        <div className="flex flex-col gap-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#F8F8F5]/90 font-medium">
              TECHNAVIA BLUEPRINTS & RESEARCH
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[1]">
            Blueprints for ranking,
            <br />
            <span className="text-[#D4F542]">visibility & automation.</span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-white/70 max-w-2xl leading-relaxed font-sans">
            Technical field notes, real-world benchmarks, and architecture blueprints from engineering sub-second websites, securing LLM citations, and running background pipelines on autopilot.
          </p>
        </div>
      </section>

      {/* Interactive Blogs Explorer Section (Search, Filter, Sort, Grid) */}
      <section className="py-16 md:py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full">
        <BlogExplorer articles={ARTICLES} />
      </section>

      {/* Bottom Conversion Section */}
      <BookSection />
    </div>
  );
}
