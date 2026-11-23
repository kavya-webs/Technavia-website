import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { BookSection } from "@/components/sections/BookSection";
import { RESULTS } from "@/lib/data";

export function generateStaticParams() {
  return RESULTS.map((r) => ({ slug: r.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const res = RESULTS.find((r) => r.id === slug);
  if (!res) return { title: "Result Not Found" };
  return {
    title: `TECHNAVIA — ${res.client}: ${res.metric} ${res.metricSub}`,
    description: res.headline,
  };
}

export default async function ResultDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = RESULTS.find((r) => r.id === slug);

  if (!res) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full pt-[100px]">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/results" className="hover:text-white">Results</Link>
          <span>/</span>
          <span className="text-[#D4F542]">{res.client}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-[#D4F542] uppercase tracking-widest font-semibold">
              RESULT {res.num} / 03 · {res.badge}
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95] mt-2">
              {res.client}
            </h1>
            <p className="mt-6 text-xl text-white/90 font-tight font-medium max-w-2xl leading-relaxed">
              {res.headline}
            </p>

            {/* Spec Highlights */}
            <div className="flex flex-wrap gap-2 pt-4">
              {res.highlights?.map((h, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-[#14161A] border border-[#2A2F38] text-xs font-mono text-white/80"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#D4F542] hover:bg-[#c2e438] text-black font-tight font-semibold text-sm uppercase tracking-wider transition-all shadow-[0_0_16px_rgba(212,245,66,0.3)]"
            >
              {res.ctaText}
            </a>
            <Button href="/results" variant="ghost">
              All results
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-16">
        {/* Obsidian HUD Browser Frame */}
        <div className="rounded-3xl overflow-hidden bg-[#14161A] border border-[#2A2F38] shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col">
          {/* Browser Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-[#0B0D10] border-b border-[#2A2F38]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
              <span className="ml-3 text-xs font-mono text-white/50">{res.badge}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542] animate-pulse" />
              <span>{res.url}</span>
            </div>
            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-[#D4F542] text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#c2e438] transition-colors"
            >
              {res.ctaText}
            </a>
          </div>

          {/* Viewport */}
          <div className="relative aspect-[16/9] w-full bg-black/50 overflow-hidden">
            <Image
              src={res.previewImg}
              alt={`${res.client} Live Interface`}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Giant Metric Highlight */}
        <div className="p-10 md:p-14 rounded-2xl bg-zinc-900/60 border border-white/[0.1] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex flex-col">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2">
              Verified Metric Outcome
            </span>
            <span className="text-6xl sm:text-8xl font-tight font-bold text-[#D4F542]">
              {res.metric}
            </span>
            <span className="text-base font-mono uppercase tracking-wider text-white/80 mt-1">
              {res.metricSub}
            </span>
          </div>

          <div className="max-w-md flex flex-col gap-2 border-t md:border-t-0 md:border-l border-white/[0.1] pt-6 md:pt-0 md:pl-8">
            <span className="text-xs font-mono text-white/50 uppercase">Engineering Blueprint</span>
            <p className="text-sm text-white/80 leading-relaxed font-sans">{res.summary}</p>
          </div>
        </div>

        {/* Before and After Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/[0.1] pt-12">
          <div className="p-8 rounded-2xl bg-red-950/20 border border-red-500/20 flex flex-col gap-4">
            <span className="text-xs font-mono text-red-400 font-semibold uppercase tracking-wider">
              Before TECHNAVIA
            </span>
            <p className="text-base text-white/80 leading-relaxed font-sans">{res.before}</p>
          </div>

          <div className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 flex flex-col gap-4">
            <span className="text-xs font-mono text-[#D4F542] font-semibold uppercase tracking-wider">
              After TECHNAVIA
            </span>
            <p className="text-base text-white/80 leading-relaxed font-sans">{res.after}</p>
          </div>
        </div>

        {/* Client Quote */}
        <div className="p-10 rounded-2xl bg-zinc-900/40 border border-white/[0.1] flex flex-col gap-6">
          <span className="text-4xl text-[#D4F542] font-serif leading-none">“</span>
          <blockquote className="text-2xl sm:text-3xl font-tight font-semibold text-white leading-snug">
            {res.quote.text}
          </blockquote>
          <div className="text-xs font-mono text-white/60">
            <span className="font-semibold text-white">{res.quote.author}</span> · {res.quote.role}
          </div>
        </div>

        {/* Footnote */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-xs font-mono text-white/50 text-center sm:text-left leading-relaxed">
          Client mirrors are self-hosted with permission to preserve client domain privacy while letting you inspect live UI and engineering quality.
        </div>
      </section>

      {/* Book Call Form */}
      <BookSection />
    </div>
  );
}
