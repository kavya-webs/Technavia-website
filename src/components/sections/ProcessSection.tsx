"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
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

  // Vertical scroll tracking: As user scrolls down 450vh, the carousel glides sideways
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll spring for luxurious, fluid inertia when scrolling between slides
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.0005,
  });

  // Intro left header: Fades out and slides left as scrolling starts (Image 1 -> Image 2)
  const introOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0]);
  const introX = useTransform(smoothProgress, [0, 0.05], ["0px", "-60px"]);

  // Horizontal motion:
  // At progress 0: Slide 01 starts at "40vw" (on the right half, matching Image 1)
  // At progress 0.08: Slide 01 glides to "0vw" (matching Image 2) and stays centered until ~0.20
  // Then progressively moves left to center slides 02, 03, 04, 05 with box proportions
  const trackX = useTransform(
    smoothProgress,
    [0, 0.08, 0.20, 0.38, 0.56, 0.76, 0.95],
    ["40vw", "0vw", "0vw", "-50vw", "-100vw", "-150vw", "-200vw"]
  );

  // Timeline progress bar
  const fillWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    // Map scroll progress to active step 0..4
    if (latest < 0.22) {
      setActiveStep(0);
    } else if (latest < 0.44) {
      setActiveStep(1);
    } else if (latest < 0.64) {
      setActiveStep(2);
    } else if (latest < 0.84) {
      setActiveStep(3);
    } else {
      setActiveStep(4);
    }
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
    <section ref={containerRef} className="relative w-full bg-[#0B0D10] text-[#F8F8F5] h-[450vh]">
      {/* Pinned Sticky Screen Wrapper */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-6 md:pt-10 pb-8 md:pb-12 px-6 md:px-14 overflow-hidden border-t border-white/[0.08]">
        <div className="max-w-[1360px] mx-auto w-full h-full flex flex-col justify-between relative">
          
          {/* Main Content Area (Intro Column on left + Horizontal Slide Track) */}
          <div className="relative w-full flex-1 flex items-center overflow-hidden my-auto">
            {/* Left Intro Pitch Column - Fades and slides out on scroll (matching Image 1 -> Image 2) */}
            <motion.div
              style={{ opacity: introOpacity, x: introX }}
              className="absolute left-0 z-10 w-[36vw] max-w-[440px] flex flex-col gap-5 pr-8 pointer-events-auto"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-white/80 font-medium">
                  HOW IT RUNS
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-[58px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.04]">
                From audit <br />
                <span className="text-[#D4F542]">to autopilot.</span>
              </h2>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans max-w-sm">
                Five steps from the first call to a business that runs itself. One
                person on your side, and a morning report from then on.
              </p>

              <div className="pt-2">
                <Button href="/process" variant="ghost" hasArrow={false} hasLamp={true} className="!h-[44px] !text-xs">
                  See the full process
                </Button>
              </div>
            </motion.div>

            {/* Horizontal Slides Track */}
            <motion.div
              style={{ x: trackX }}
              className="relative z-20 flex items-center gap-8 pl-0 will-change-transform"
            >
              {STEPS.map((s, idx) => {
                const isCurrent = activeStep === idx;

                return (
                  <div
                    key={s.step}
                    className="relative w-[48vw] max-w-[620px] min-w-[340px] aspect-square shrink-0 rounded-3xl overflow-hidden border border-white/[0.12] bg-zinc-950 shadow-2xl transition-all duration-500"
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
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/95 via-[#0B0D10]/70 to-[#0B0D10]/30" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]/70" />
                    </div>

                    {/* Dark Tint Overlay to highlight center slide: Non-active slides get dark black scrim */}
                    <div
                      className={`absolute inset-0 z-10 transition-opacity duration-500 pointer-events-none ${
                        isCurrent ? "opacity-0" : "opacity-60 bg-black"
                      }`}
                    />

                    {/* Giant Neon Stroke Outline Number - Always visible, lime when current, white/scrim when inactive */}
                    <div
                      className="absolute left-6 sm:left-12 top-6 sm:top-10 z-20 text-[110px] sm:text-[170px] lg:text-[210px] font-tight font-extrabold pointer-events-none leading-none tracking-tighter transition-all duration-500"
                      style={{
                        WebkitTextStroke: isCurrent
                          ? "2px #D4F542"
                          : "1.5px rgba(255, 255, 255, 0.35)",
                        color: "transparent",
                        textShadow: isCurrent
                          ? "0 0 35px rgba(212, 245, 66, 0.3)"
                          : "none",
                      }}
                    >
                      {s.step}
                    </div>

                    {/* Slide Details (Title, Description, Badge) - Only visible when slide is active/centered with generous box spacing */}
                    <div
                      className={`relative z-20 h-full flex flex-col justify-end p-8 sm:p-12 md:p-14 transition-all duration-500 ${
                        isCurrent
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4 pointer-events-none"
                      }`}
                    >
                      {/* Content Bottom / Left */}
                      <div className="max-w-xl flex flex-col gap-3.5">
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

                        <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans max-w-lg">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
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
