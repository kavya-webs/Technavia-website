import React from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ARTICLES } from "@/lib/data";

export const metadata = {
  title: "Runbook — Insights: guides on business automation",
  description: "What we learn wiring companies every week, written down plainly: what to automate first, what it costs and where AI fits.",
};

export default function InsightsPage() {
  return (
    <div className="flex flex-col w-full pt-[100px]">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Insights</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95] max-w-4xl">
          Notes from <br />
          <span className="text-[#D4F542]">the night shift.</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
          What we learn wiring companies every week, written down plainly: what to automate first,
          what it costs, and where AI agents actually belong.
        </p>
      </section>

      {/* Articles Directory */}
      <section className="py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <SectionLabel>All insights</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
            Guides, benchmarks and architecture notes.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="p-8 rounded-2xl bg-zinc-900/60 border border-white/[0.1] hover:border-[#D4F542]/50 hover:bg-zinc-900/80 transition-all flex flex-col justify-between gap-6 group backdrop-blur-md"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono text-white/40">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.08] text-[#D4F542] font-semibold">
                    {article.type}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-2xl font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-sans line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] text-xs font-mono text-white/40">
                <span>{article.date}</span>
                <span className="text-[#D4F542] group-hover:translate-x-1 transition-transform">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
