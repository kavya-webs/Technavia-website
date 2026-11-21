import React from "react";
import Link from "next/link";
import { SubpageHero } from "@/components/sections/SubpageHero";
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
    <div className="flex flex-col w-full">
      {/* Hero */}
      <SubpageHero
        pageName="PROCESS"
        titleLine1="From audit"
        titleLine2="to autopilot."
        highlightLine2={true}
        subtitle="Five weeks from first conversation to fully automated operations running every night."
        primaryCta={{ label: "Book an audit", href: "/book" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        backgroundImage="/images/workflows/clean_hero_122.jpg"
        wireframeNumber="05"
        statusPills={[
          { text: "5 STEPS TO AUTOPILOT", variant: "brass" },
          { text: "AVERAGE 3-4 WEEKS TO LIVE", variant: "ghost" },
          { text: "ZERO CODE CHANGES", variant: "outline" },
        ]}
      />

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
                <div className="flex items-center gap-3">
                  <span
                    className="text-4xl sm:text-5xl font-tight font-extralight tracking-tighter select-none pointer-events-none"
                    style={{
                      WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.22)",
                      color: "transparent",
                    }}
                  >
                    {s.step}
                  </span>
                  <span className="text-xs font-mono text-[#D4F542]">{s.week}</span>
                </div>
                <span className="text-2xl sm:text-3xl font-tight font-semibold text-white mt-1">
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
