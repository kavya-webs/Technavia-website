import React, { Suspense } from "react";
import { Metadata } from "next";
import { TechnaviaLogo } from "@/components/ui/TechnaviaLogo";
import { BookForm } from "@/app/book/BookForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `High-Growth B2B System (${slug})`,
    description:
      "Turn your website into a Google, AI-search, and lead-automation engine in 21 days (5-day website build + 16-day SEO sprint).",
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export function generateStaticParams() {
  return [{ slug: "demo-icp" }];
}

export default async function PaidLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F8F8F5] flex flex-col justify-between selection:bg-[#D4F542] selection:text-black">
      {/* Distraction-Free Header (Logo only, zero exit navigation) */}
      <header className="w-full h-20 px-6 md:px-14 flex items-center justify-between border-b border-white/[0.08] bg-[#0B0D10]/90 backdrop-blur-md sticky top-0 z-30">
        <TechnaviaLogo variant="horizontal" symbolSize={28} wordmarkHeight={18} />
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-[#D4F542]">
          <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] animate-pulse" />
          <span>21-DAY SPRINT (5D WEB + 16D SEO)</span>
        </div>
      </header>

      {/* Main Single-Funnel Content */}
      <main className="flex-1 max-w-[1100px] mx-auto w-full px-6 md:px-8 py-12 md:py-20 flex flex-col gap-16">
        {/* 1. Ad-Matched Headline & Subhead */}
        <div className="flex flex-col gap-5 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] w-fit mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              ENGINEERED FOR HIGH-GROWTH B2B ({slug.toUpperCase()})
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-[-0.035em] text-[#F8F8F5] leading-[1.04]">
            Turn your website into a <span className="text-[#D4F542]">Google, AI-search & lead engine</span> in 21 days (5-day web + 16-day SEO).
          </h1>

          <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed max-w-2xl mx-auto">
            Stop losing qualified pipeline to slow templates and manual follow-ups. We engineer sub-second B2B sites built to rank, get recommended by ChatGPT, and auto-qualify inbound leads into your CRM.
          </p>
        </div>

        {/* 2. 3-Bullet Pain / Outcome Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0E1116] border border-white/[0.1] flex flex-col gap-2">
            <span className="text-xs font-mono text-[#D4F542] font-bold">01 · SUB-SECOND SPEED</span>
            <div className="text-xl font-tight font-bold text-white">&lt; 1.0s Mobile LCP</div>
            <p className="text-xs text-white/60 leading-relaxed font-sans">
              95+ Core Web Vitals guarantee. Zero slow agency bloat, instantaneous edge rendering.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1116] border border-white/[0.1] flex flex-col gap-2">
            <span className="text-xs font-mono text-[#D4F542] font-bold">02 · AEO / GEO VISIBILITY</span>
            <div className="text-xl font-tight font-bold text-white">ChatGPT & Perplexity</div>
            <p className="text-xs text-white/60 leading-relaxed font-sans">
              Structured entity graphs and quotable answer blocks so AI assistants cite your brand first.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1116] border border-white/[0.1] flex flex-col gap-2">
            <span className="text-xs font-mono text-[#D4F542] font-bold">03 · AUTONOMOUS OPS</span>
            <div className="text-xl font-tight font-bold text-white">&lt; 60s Lead Response</div>
            <p className="text-xs text-white/60 leading-relaxed font-sans">
              Automated data enrichment, LLM lead scoring, calendar booking, and CRM synchronization.
            </p>
          </div>
        </div>

        {/* 3. Hormozi Offer Stack + Guarantee */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1116] border border-[#D4F542]/30 flex flex-col gap-8 shadow-2xl">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              THE 21-DAY SPRINT (5 DAYS WEBSITE + 16 DAYS SEO)
            </span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold text-white">
              Everything required to scale your inbound pipeline.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/85 font-sans">
            <div className="flex items-center gap-3">
              <span className="text-[#D4F542] font-bold">✓</span> Full Next.js & React 19 conversion website
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#D4F542] font-bold">✓</span> Hormozi-style conversion copy & offer architecture
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#D4F542] font-bold">✓</span> Organization, Service & FAQ JSON-LD schemas
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#D4F542] font-bold">✓</span> Perplexity, Claude & SearchGPT citation readiness
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#D4F542] font-bold">✓</span> Production n8n lead enrichment & CRM sync
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#D4F542] font-bold">✓</span> 100% source code ownership & documentation
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-black/60 border border-white/[0.1] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-mono text-white/80">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542]" />
              <span>
                <strong>Our Guarantee:</strong> 95+ Mobile Core Web Vitals or we optimize it free until it does.
              </span>
            </div>
            <span className="text-[#D4F542] font-mono text-xs font-bold whitespace-nowrap hidden sm:inline">
              ZERO RISK
            </span>
          </div>
        </div>

        {/* 4. Single Inline Audit / Booking Form */}
        <div id="audit-form" className="flex flex-col gap-8 pt-4">
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-white">
              Request Your 5-Minute Custom Video Tear-Down
            </h3>
            <p className="text-sm text-white/60 font-sans">
              No sales reps or pressure. We will inspect your current site, search positioning, and AI visibility and deliver a personalized Loom audit within 48 hours.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="py-12 text-center text-xs font-mono text-white/50 animate-pulse">
                INITIALIZING AUDIT BRIEF FORM...
              </div>
            }
          >
            <BookForm />
          </Suspense>
        </div>
      </main>

      {/* Minimal Footer (No exit links) */}
      <footer className="w-full py-8 px-6 text-center border-t border-white/[0.08] text-xs font-mono text-white/40">
        <div>© 2026 TECHNAVIA · BUILT TO RANK · AUTOMATED TO SCALE</div>
      </footer>
    </div>
  );
}
