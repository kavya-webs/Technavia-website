import React from "react";
import Link from "next/link";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BookSection } from "@/components/sections/BookSection";

export const metadata = {
  title: "TECHNAVIA — About: Web Engineering & AI Visibility",
  description: "One team that engineers your web architecture, secures your search rankings, and automates your operations.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <SubpageHero
        pageName="ABOUT"
        titleLine1="The night shift"
        titleLine2="since 2019."
        highlightLine2={true}
        subtitle="We are an automation engineering firm headquartered in London, dedicated to eliminating manual operations for high-growth businesses."
        primaryCta={{ label: "Book a call", href: "/book" }}
        secondaryCta={{ label: "See results", href: "/results" }}
        backgroundImage="/images/questions/base_office.jpg"
        wireframeNumber="19"
        statusPills={[
          { text: "BUSINESS AUTOMATION AGENCY", variant: "brass" },
          { text: "FOUNDED 2019 · LONDON", variant: "ghost" },
          { text: "48,200+ TASKS / MO", variant: "outline" },
          { text: "ZERO NEW APPS", variant: "ghost" },
        ]}
      />

      {/* The Story & Principles */}
      <section className="py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-20">
        {/* Story Block with Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-white/[0.1] pt-12">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-[#D4F542] uppercase tracking-wider font-semibold">
                The Story
              </span>
              <h2 className="text-3xl sm:text-5xl font-tight font-semibold text-white tracking-tight leading-[1.05]">
                Seven years of work that runs while everyone sleeps.
              </h2>
            </div>
            <div className="flex flex-col gap-5 text-base sm:text-lg text-white/80 leading-relaxed font-sans">
              <p>
                TECHNAVIA was established to solve a critical market gap: traditional agency websites look pretty but fail to rank on search engines or AI answer engines, and lack the automated infrastructure to convert inbound traffic.
              </p>
              <p>
                We believe that modern digital presence requires an engineering-first approach. Fast Next.js architecture, semantic JSON-LD entity structures, and automated lead routing pipelines that run seamlessly 24/7.
              </p>
              <p>
                Today, TECHNAVIA builds and powers digital infrastructure for high-growth SaaS, fintech, professional services, and ecommerce companies worldwide.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <figure className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl group">
              <img
                src="/images/tech/why_technavia.jpg"
                alt="TECHNAVIA Engineering Studio"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Pill on photo: 2019 · LONDON HQ */}
              <figcaption className="absolute bottom-5 left-5 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B0D10]/85 border border-white/[0.16] backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542]" />
                <span className="text-xs font-mono tracking-wider uppercase text-white/90">
                  <strong className="text-[#D4F542] font-semibold mr-1.5">2019</strong>
                  · LONDON HQ
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div className="flex flex-col gap-8 border-t border-white/[0.1] pt-16">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-[#D4F542] uppercase tracking-wider font-semibold">
              Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
              How we think about automation.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-8 sm:p-10 rounded-3xl bg-zinc-950/70 border border-white/[0.12] hover:border-white/25 flex flex-col justify-between gap-6 backdrop-blur-md overflow-hidden group">
              <div className="flex items-center justify-between">
                <span
                  className="text-6xl sm:text-7xl font-tight font-extralight tracking-tighter select-none pointer-events-none"
                  style={{
                    WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.22)",
                    color: "transparent",
                  }}
                >
                  01
                </span>
                <span className="w-2 h-2 rounded-full bg-[#D4F542]" />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <h4 className="text-2xl font-tight font-semibold text-white">No New Apps</h4>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  We never ask your staff to learn another project management platform. We work with the
                  tools you already pay for.
                </p>
              </div>
            </div>

            <div className="relative p-8 sm:p-10 rounded-3xl bg-zinc-950/70 border border-white/[0.12] hover:border-white/25 flex flex-col justify-between gap-6 backdrop-blur-md overflow-hidden group">
              <div className="flex items-center justify-between">
                <span
                  className="text-6xl sm:text-7xl font-tight font-extralight tracking-tighter select-none pointer-events-none"
                  style={{
                    WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.22)",
                    color: "transparent",
                  }}
                >
                  02
                </span>
                <span className="w-2 h-2 rounded-full bg-[#D4F542]" />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <h4 className="text-2xl font-tight font-semibold text-white">The Number First</h4>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  If a workflow cannot be measured in hours saved, days to paid, or tickets closed, we
                  refuse to build it.
                </p>
              </div>
            </div>

            <div className="relative p-8 sm:p-10 rounded-3xl bg-zinc-950/70 border border-white/[0.12] hover:border-white/25 flex flex-col justify-between gap-6 backdrop-blur-md overflow-hidden group">
              <div className="flex items-center justify-between">
                <span
                  className="text-6xl sm:text-7xl font-tight font-extralight tracking-tighter select-none pointer-events-none"
                  style={{
                    WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.22)",
                    color: "transparent",
                  }}
                >
                  03
                </span>
                <span className="w-2 h-2 rounded-full bg-[#D4F542]" />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <h4 className="text-2xl font-tight font-semibold text-white">We Stay to Run It</h4>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  Unlike consultants who deliver PDF slide decks and vanish, our engineers monitor and
                  maintain your automations 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Metric Proof Row */}
        <div className="border-t border-white/[0.1] pt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Stat 1: 48,200+ */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                01
              </span>
              <div className="text-4xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2">
                48,200+
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Tasks run / mo
              </p>
            </div>

            {/* Stat 2: 31h */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                02
              </span>
              <div className="text-4xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2 flex items-baseline">
                31
                <span className="text-2xl sm:text-3xl font-light text-white/80 ml-1">
                  h
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Back / week per team
              </p>
            </div>

            {/* Stat 3: 214 */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                03
              </span>
              <div className="text-4xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2">
                214
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Workflows live tonight
              </p>
            </div>

            {/* Stat 4: 60 */}
            <div className="flex flex-col border-t border-white/[0.14] pt-4">
              <span className="text-xs font-mono text-[#D4F542] font-semibold mb-3">
                04
              </span>
              <div className="text-4xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none mb-2">
                60
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-sans tracking-normal leading-snug">
                Tools wired together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Book Call */}
      <ReviewsSection />
      <BookSection />
    </div>
  );
}
