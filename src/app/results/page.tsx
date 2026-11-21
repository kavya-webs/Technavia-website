import React from "react";
import Link from "next/link";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BookSection } from "@/components/sections/BookSection";
import { RESULTS } from "@/lib/data";

export const metadata = {
  title: "Runbook — Results: the number comes first",
  description: "Every result opens on a figure the owner can check: hours back, days to paid, appointments kept.",
};

const RESULT_IMAGES: Record<string, string> = {
  "harbour-dental": "/images/results/card_01.jpg",
  "northcode-studio": "/images/results/card_02.jpg",
  "fernwood-living": "/images/results/card_03.jpg",
  "crosslane-freight": "/images/results/card_04.jpg",
  "whitmore-hale": "/images/results/card_05.jpg",
  "aldgate-estates": "/images/results/card_06.jpg",
};

export default function ResultsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <SubpageHero
        pageName="RESULTS"
        titleLine1="The number"
        titleLine2="comes first."
        highlightLine2={true}
        subtitle="Every engagement starts with the metric that matters to your business. Real results from production workflows running every night."
        primaryCta={{ label: "Book a call", href: "/book" }}
        secondaryCta={{ label: "See the workflows", href: "/workflows" }}
        backgroundImage="/images/workflows/clean_hero_116.jpg"
        wireframeNumber="06"
        statusPills={[
          { text: "1,284 TASKS LAST NIGHT", variant: "brass" },
          { text: "31H BACK PER WEEK", variant: "ghost" },
          { text: "−62% MISSED CALLS", variant: "outline" },
          { text: "71% AUTOMATED", variant: "ghost" },
        ]}
      />

      {/* Results Grid List */}
      <section className="py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <SectionLabel>All results</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
            Six results, each with a number.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESULTS.map((res) => {
            const imgSrc = RESULT_IMAGES[res.id] || `/images/results/card_${res.num}.jpg`;

            return (
              <Link
                key={res.id}
                href={`/results/${res.id}`}
                className="relative rounded-3xl overflow-hidden border border-white/[0.12] hover:border-[#D4F542]/60 bg-zinc-950 p-8 sm:p-10 min-h-[460px] flex flex-col justify-between group transition-all duration-500 shadow-2xl"
              >
                {/* Background Photography with dark gradient overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={imgSrc}
                    alt={res.client}
                    className="w-full h-full object-cover object-[50%_40%] group-hover:scale-105 transition-transform duration-500 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/80 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/60 via-transparent to-[#0B0D10]/30" />
                </div>

                {/* Top Row: Pill and Giant Wireframe Stroke Number */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/[0.1] text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                    <span className="text-white/90 font-medium tracking-wider uppercase">
                      {res.industry}
                    </span>
                  </div>

                  <span
                    className="text-4xl sm:text-5xl font-tight font-extralight tracking-tighter select-none pointer-events-none"
                    style={{
                      WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.22)",
                      color: "transparent",
                    }}
                  >
                    {res.num}
                  </span>
                </div>

                {/* Bottom Narrative & Metric */}
                <div className="relative z-10 mt-auto pt-12 flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="text-5xl sm:text-6xl font-tight font-semibold text-white tracking-tight leading-none group-hover:text-[#D4F542] transition-colors">
                      {res.metric}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#D4F542] text-black font-mono font-bold text-xs uppercase tracking-wider w-fit shadow-[0_0_12px_rgba(212,245,66,0.3)]">
                      {res.metricSub}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-2">
                    <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-white">
                      {res.client}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-sans line-clamp-2">
                      {res.headline}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] text-xs font-mono">
                    <span className="text-white/50">{res.year} · {res.workflowUsed}</span>
                    <span className="text-[#D4F542] flex items-center gap-1 group-hover:translate-x-1 transition-transform font-medium">
                      Read full story →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Book Section */}
      <BookSection />
    </div>
  );
}
