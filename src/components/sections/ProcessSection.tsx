"use client";

import React, { useState } from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";

interface ProcessStep {
  step: string;
  week: string;
  title: string;
  headline: string;
  description: string;
  clientRole: string;
  img: string;
}

const STEPS: ProcessStep[] = [
  {
    step: "01",
    week: "Week 1",
    title: "Audit",
    headline: "Finding the lost hours",
    description:
      "We sit with the people who do the work and list every task that repeats. Most teams find thirty; we pick the ten that cost the most hours.",
    clientRole:
      "An 80-minute interview with department leads; read-only access to existing tools.",
    img: "https://framerusercontent.com/images/YIExqfW95lYL06qfHJsvAQYxR3Q.webp?scale-down-to=2048",
  },
  {
    step: "02",
    week: "Week 2",
    title: "Map",
    headline: "The single source of truth",
    description:
      "We draw every handoff, trigger, conditional branch and human sign-off on one canvas. No build starts until you sign off the flow.",
    clientRole:
      "One 45-minute diagram review call to approve the logic.",
    img: "https://framerusercontent.com/images/gL8YwCzYwSCuF5xVfVZTkj0hqjk.webp?scale-down-to=2048",
  },
  {
    step: "03",
    week: "Weeks 3-4",
    title: "Build",
    headline: "Wiring the machine",
    description:
      "We connect your CRM, invoicing, inbox and databases in sandbox environments. Every edge case is tested against past client transactions.",
    clientRole:
      "Zero hours required from your team. We work on dummy data.",
    img: "https://framerusercontent.com/images/wpafQXWdQJCRrKXIWCks9bdMc.webp?scale-down-to=2048",
  },
  {
    step: "04",
    week: "Week 5",
    title: "Launch",
    headline: "Shadowing the live office",
    description:
      "The automation runs alongside your team for seven days. Staff verify the outputs before actions go out to real customers.",
    clientRole:
      "10 minutes a day checking draft emails and generated invoices.",
    img: "https://framerusercontent.com/images/XwXhHNBcyj1p6pAUtOL4YPr50s.webp?scale-down-to=2048",
  },
  {
    step: "05",
    week: "Ongoing",
    title: "Autopilot",
    headline: "The morning digest",
    description:
      "Every morning at 08:00, your Slack or inbox receives a clean runbook digest: what closed, what got sent, and what needs human attention.",
    clientRole:
      "Read a 60-second summary while drinking your coffee.",
    img: "https://framerusercontent.com/images/mDldpEEr36RAiQQ7KZnIDf7wCEA.webp?scale-down-to=2048",
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-32 px-6 md:px-14 border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel>How it runs</SectionLabel>
            <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1]">
              From audit <br />
              <span className="text-[#D4F542]">to autopilot.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6 max-w-md">
            <p className="text-base text-white/60 leading-relaxed font-sans md:text-right">
              Five steps from the first call to a business that runs itself. One
              person on your side, and a morning report from then on.
            </p>
            <Button href="/process" variant="ghost" hasArrow={false} hasLamp={true}>
              See the full process
            </Button>
          </div>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-white/[0.12] pb-4">
          {STEPS.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`py-3.5 px-4 text-left rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? "bg-white/[0.1] text-white shadow-sm"
                    : "text-white/40 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                <div
                  className={`text-xs font-mono tracking-wider uppercase transition-colors ${
                    isActive ? "text-[#D4F542]" : "text-white/40"
                  }`}
                >
                  Step {s.step} · {s.week}
                </div>
                <div className="text-lg font-semibold font-tight mt-1">
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Hero Card */}
        <div className="relative rounded-2xl bg-zinc-950 border border-white/[0.12] min-h-[480px] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
          {/* Background Photography for active step */}
          <div className="absolute inset-0 z-0">
            <img
              src={STEPS[activeStep].img}
              alt={STEPS[activeStep].title}
              className="w-full h-full object-cover object-[50%_40%] scale-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/95 via-[#0B0D10]/80 to-[#0B0D10]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]/60" />
          </div>

          {/* Big Outline Watermark Number */}
          <div className="absolute right-8 top-6 z-10 text-[140px] sm:text-[200px] font-tight font-bold text-white/[0.06] select-none pointer-events-none leading-none">
            {STEPS[activeStep].step}
          </div>

          {/* Content Area */}
          <div className="relative z-20 flex-1 p-8 sm:p-14 flex flex-col justify-between gap-8 max-w-3xl">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#D4F542] text-black font-mono text-xs font-semibold">
                  {STEPS[activeStep].week}
                </span>
                <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
                  Step {STEPS[activeStep].step} / 05
                </span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-tight font-semibold text-white tracking-[-0.03em] leading-tight">
                {STEPS[activeStep].title} —{" "}
                <span className="text-[#D4F542] font-normal">
                  {STEPS[activeStep].headline}
                </span>
              </h3>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-sans max-w-2xl">
                {STEPS[activeStep].description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/[0.12] text-xs font-mono text-white/80 backdrop-blur-md max-w-xl">
              <span className="text-[#D4F542] uppercase font-semibold mr-2">
                Your part:
              </span>
              {STEPS[activeStep].clientRole}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
