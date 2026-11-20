import React from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BookSection } from "@/components/sections/BookSection";

export const metadata = {
  title: "Runbook — About: a business automation agency",
  description: "One team that wires the work and stays to run it. Every workflow we build gets measured, and the number goes to the owner.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pt-[100px]">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">About</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95] max-w-4xl">
          The night shift <br />
          <span className="text-[#D4F542]">since 2019.</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
          One team that wires the work and stays to run it. Every workflow we build gets measured,
          and the number goes directly to the owner on Monday morning.
        </p>
      </section>

      {/* The Story & Principles */}
      <section className="py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/[0.1] pt-8">
          <div className="lg:col-span-4 flex flex-col gap-1">
            <span className="text-xs font-mono text-[#D4F542] uppercase tracking-wider">The Story</span>
            <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white mt-2">
              Seven years of work that runs while everyone sleeps.
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6 text-base text-white/80 leading-relaxed font-sans">
            <p>
              Runbook began in 2019 with two founders, a shared desk in London and one client: a
              design studio whose creative directors spent their weekends assembling invoices and
              retyping timesheets.
            </p>
            <p>
              We realized that 80% of what growing businesses struggle with is not lack of strategy or
              ambition—it is the glue work between the systems they already pay for.
            </p>
            <p>
              Today, our automation infrastructure coordinates over 48,000 monthly tasks for clinics,
              agencies, e-commerce brands, legal firms and logistics depots across the UK, Europe and
              North America.
            </p>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/[0.1] pt-12">
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/[0.08] flex flex-col gap-3">
            <span className="text-xs font-mono text-[#D4F542]">01</span>
            <h4 className="text-2xl font-tight font-semibold text-white">No New Apps</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              We never ask your staff to learn another project management platform. We work with the
              tools you already pay for.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/[0.08] flex flex-col gap-3">
            <span className="text-xs font-mono text-[#D4F542]">02</span>
            <h4 className="text-2xl font-tight font-semibold text-white">The Number First</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              If a workflow cannot be measured in hours saved, days to paid, or tickets closed, we
              refuse to build it.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/[0.08] flex flex-col gap-3">
            <span className="text-xs font-mono text-[#D4F542]">03</span>
            <h4 className="text-2xl font-tight font-semibold text-white">We Stay to Run It</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Unlike consultants who deliver PDF slide decks and vanish, our engineers monitor and
              maintain your automations 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews & Book Call */}
      <ReviewsSection />
      <BookSection />
    </div>
  );
}
