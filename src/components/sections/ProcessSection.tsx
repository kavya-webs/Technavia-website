"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
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
    week: "WEEK 1",
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
    week: "WEEK 2",
    title: "Map",
    headline: "The single source of truth",
    description:
      "Each workflow is drawn end to end: the trigger, the tools it touches, the person who signs off. You approve the map before anything is built.",
    clientRole:
      "One 45-minute diagram review call to approve the logic.",
    img: "https://framerusercontent.com/images/gL8YwCzYwSCuF5xVfVZTkj0hqjk.webp?scale-down-to=2048",
  },
  {
    step: "03",
    week: "WEEKS 3-4",
    title: "Build",
    headline: "Wiring the machine",
    description:
      "We wire the workflows into your CRM, inbox, invoicing and helpdesk, with a test run on real records and a log you can read.",
    clientRole:
      "Zero hours required from your team. We work on dummy data.",
    img: "https://framerusercontent.com/images/wpafQXWdQJCRrKXIWCks9bdMc.webp?scale-down-to=2048",
  },
  {
    step: "04",
    week: "WEEK 5",
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
    week: "ONGOING",
    title: "Autopilot",
    headline: "The morning digest",
    description:
      "Every morning a report on what ran, what paused and what it saved. We tune, add and retire workflows as the business moves.",
    clientRole:
      "Read a 60-second summary while drinking your coffee.",
    img: "https://framerusercontent.com/images/mDldpEEr36RAiQQ7KZnIDf7wCEA.webp?scale-down-to=2048",
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  // Vertical scroll tracking: As user scrolls down 400vh, the carousel glides sideways
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 5 slides total: Translate horizontal track from 0% to -80%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = Math.min(STEPS.length - 1, Math.floor(latest * STEPS.length));
    setActiveStep(step);
  });

  const scrollToStep = (idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const travelDistance = containerRef.current.clientHeight - window.innerHeight;
    const targetY = scrollTop + (idx / (STEPS.length - 1)) * travelDistance;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative w-full bg-[#0B0D10] text-[#F8F8F5] h-[400vh]">
      {/* Pinned Sticky Screen Wrapper */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-8 pb-10 px-6 md:px-14 overflow-hidden border-t border-white/[0.08] select-none">
        <div className="max-w-[1340px] mx-auto w-full h-full flex flex-col justify-between gap-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 flex-shrink-0 pt-2">
            <div className="max-w-2xl">
              <SectionLabel>How it runs</SectionLabel>
              <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1]">
                From audit <span className="text-[#D4F542]">to autopilot.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3 max-w-md">
              <p className="text-sm sm:text-base text-white/60 leading-relaxed font-sans md:text-right">
                Five steps from the first call to a business that runs itself. One
                person on your side, and a morning report from then on.
              </p>
              <Button href="/process" variant="ghost" hasArrow={false} hasLamp={true} className="!h-[42px] !text-xs">
                See the full process
              </Button>
            </div>
          </div>

          {/* Horizontal Slides Viewport */}
          <div className="relative w-full flex-1 max-h-[560px] min-h-[380px] rounded-3xl overflow-hidden border border-white/[0.12] bg-zinc-950 shadow-2xl">
            <div className="relative w-full h-full overflow-hidden">
              {/* Sideways Sliding Track driven by downward scroll */}
              <motion.div
                style={{ x }}
                className="flex h-full w-[500%] will-change-transform"
              >
                {STEPS.map((s, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={s.step}
                      className="relative w-[20%] h-full flex-shrink-0 flex flex-col justify-between p-8 sm:p-12 md:p-14 select-none overflow-hidden"
                    >
                      {/* Background Photography */}
                      <div className="absolute inset-0 z-0">
                        <img
                          src={s.img}
                          alt={s.title}
                          className="w-full h-full object-cover object-[50%_35%] scale-100"
                          loading="lazy"
                        />
                        {/* Gradient scrims for readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/95 via-[#0B0D10]/75 to-[#0B0D10]/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]/70" />
                      </div>

                      {/* Giant Neon Stroke Outline Number */}
                      <div
                        className="absolute left-8 sm:left-14 top-6 sm:top-10 z-10 text-[120px] sm:text-[180px] lg:text-[220px] font-tight font-extrabold select-none pointer-events-none leading-none tracking-tighter"
                        style={{
                          WebkitTextStroke: isActive
                            ? "2px #D4F542"
                            : "1.5px rgba(255, 255, 255, 0.22)",
                          color: "transparent",
                          textShadow: isActive
                            ? "0 0 35px rgba(212, 245, 66, 0.25)"
                            : "none",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {s.step}
                      </div>

                      {/* Content on Bottom / Left */}
                      <div className="relative z-20 mt-auto max-w-2xl flex flex-col gap-3.5">
                        <div className="flex items-center gap-3">
                          <span className="px-3.5 py-1 rounded-full bg-[#D4F542] text-black font-mono text-xs font-semibold shadow-[0_0_12px_rgba(212,245,66,0.3)]">
                            {s.week}
                          </span>
                          <span className="text-xs font-mono text-white/60 tracking-widest uppercase">
                            STEP {s.step} / 05
                          </span>
                        </div>

                        <h3 className="text-3xl sm:text-5xl md:text-6xl font-tight font-semibold text-white tracking-[-0.03em] leading-tight">
                          {s.title}
                        </h3>

                        <p className="text-sm sm:text-lg text-white/80 leading-relaxed font-sans max-w-xl">
                          {s.description}
                        </p>
                      </div>

                      {/* Bottom Right Client Role Pill */}
                      <div className="relative z-20 self-start sm:self-end mt-4 p-3.5 sm:p-4 rounded-xl bg-black/75 border border-white/[0.12] text-xs font-mono text-white/80 backdrop-blur-md max-w-md">
                        <span className="text-[#D4F542] uppercase font-semibold mr-2">
                          Your part:
                        </span>
                        {s.clientRole}
                      </div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Side Navigation Arrow Overlays for direct jump */}
              <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
                <button
                  onClick={() => scrollToStep(Math.max(activeStep - 1, 0))}
                  disabled={activeStep === 0}
                  className="w-10 h-10 rounded-full bg-black/75 border border-white/20 text-white flex items-center justify-center hover:bg-[#D4F542] hover:text-black transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer backdrop-blur-md"
                  aria-label="Previous step"
                >
                  ←
                </button>
                <button
                  onClick={() => scrollToStep(Math.min(activeStep + 1, STEPS.length - 1))}
                  disabled={activeStep === STEPS.length - 1}
                  className="w-10 h-10 rounded-full bg-black/75 border border-white/20 text-white flex items-center justify-center hover:bg-[#D4F542] hover:text-black transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer backdrop-blur-md"
                  aria-label="Next step"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Interactive Timeline Rail */}
          <div className="relative w-full pt-4 pb-2 flex-shrink-0">
            {/* Track line background */}
            <div className="relative w-full h-[2px] bg-white/[0.16] rounded-full">
              {/* Animated filling lime line driven by scroll */}
              <motion.div
                style={{ width: fillWidth }}
                className="absolute left-0 top-0 h-full bg-[#D4F542] shadow-[0_0_12px_#D4F542]"
              />
            </div>

            {/* 5 Milestone Points */}
            <div className="relative flex justify-between items-start -mt-[7px]">
              {STEPS.map((s, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep >= idx;
                return (
                  <button
                    key={s.step}
                    onClick={() => scrollToStep(idx)}
                    className="group flex flex-col items-center cursor-pointer text-left focus:outline-none"
                    style={{ width: "20%" }}
                  >
                    {/* The dot */}
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                          isActive
                            ? "bg-[#D4F542] border-[#0B0D10] ring-4 ring-[#D4F542]/30 scale-125"
                            : isPassed
                            ? "bg-[#D4F542] border-[#0B0D10]"
                            : "bg-zinc-700 border-[#0B0D10] group-hover:bg-white"
                        }`}
                      />
                    </div>

                    {/* Active floating pill */}
                    <div className="flex flex-col items-center mt-2.5 text-center">
                      {isActive ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D4F542] text-black font-mono text-[11px] font-bold tracking-wider mb-1 shadow-[0_0_10px_rgba(212,245,66,0.3)]">
                          {s.week}
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono tracking-wider uppercase text-white/40 group-hover:text-white/70 transition-colors mb-1">
                          {s.week}
                        </span>
                      )}
                      <span
                        className={`text-xs sm:text-sm font-tight font-semibold transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-white/50 group-hover:text-white"
                        }`}
                      >
                        {s.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
