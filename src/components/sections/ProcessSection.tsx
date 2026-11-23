"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
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
    week: "DAYS 1–3",
    title: "Audit & Blueprint",
    headline: "Audit & Offer Blueprint",
    description:
      "We dissect your current site, competitors, search gaps, and AI visibility—then lock in your conversion offer and wireframe.",
    clientRole:
      "A 60-minute discovery call; access to search console and current workflow blueprints.",
    img: "/images/tech/process_audit.webp",
  },
  {
    step: "02",
    week: "DAYS 4–10",
    title: "Speed-First Build",
    headline: "Speed-First Engineering",
    description:
      "We build your custom dark/brand-matched frontend in Next.js with zero bloat, clean heading hierarchy, and conversion copy.",
    clientRole:
      "Review interactive staging environment and sign off on core page templates.",
    img: "/images/tech/process_build.webp",
  },
  {
    step: "03",
    week: "DAYS 11–14",
    title: "SEO & LLM Indexing",
    headline: "SEO & LLM Entity Indexing",
    description:
      "We deploy structured JSON-LD schema, XML sitemaps, internal linking hubs, and AEO answer blocks built for Google and AI engines.",
    clientRole:
      "Sign-off on brand entity claims, core services, and knowledge graph attributes.",
    img: "/images/tech/process_indexing.webp",
  },
  {
    step: "04",
    week: "DAYS 15–18",
    title: "AI Workflows",
    headline: "AI Workflow Wiring",
    description:
      "We connect your forms, Meta Ads leads, calendar, and CRM via n8n so every inquiry gets qualified and routed in under 60 seconds.",
    clientRole:
      "Review dummy-lead test run and automated notification alerts.",
    img: "/images/tech/process_automate.webp",
  },
  {
    step: "05",
    week: "DAYS 19–21",
    title: "QA & Launch",
    headline: "QA, Launch & Handover",
    description:
      "We stress-test Core Web Vitals, verify tracking pixels, ship to your domain, and hand over 100% of the code and documentation.",
    clientRole:
      "Domain DNS verification and complete repository handover.",
    img: "/images/tech/process_scale.webp",
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [mobileStep, setMobileStep] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const handleStepChange = (newStep: number) => {
    setDirection(newStep > mobileStep ? 1 : -1);
    setMobileStep(newStep);
  };

  const handleNext = () => {
    setDirection(1);
    setMobileStep((prev) => (prev < STEPS.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setDirection(-1);
    setMobileStep((prev) => (prev > 0 ? prev - 1 : STEPS.length - 1));
  };

  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 35;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -300) {
      handleNext();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 300) {
      handlePrev();
    }
  };

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
    <>
      {/* MOBILE & TABLET EXPERIENCE: Touch-swipeable interactive Step Explorer */}
      <section className="block lg:hidden relative w-full bg-[#0B0D10] text-[#F8F8F5] py-16 sm:py-20 px-5 sm:px-8 border-t border-white/[0.08]">
        {/* Header */}
        <div className="max-w-2xl mx-auto flex flex-col gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542] font-semibold">
              OUR 21-DAY PROCESS
            </span>
          </div>
          <p className="text-3xl sm:text-4xl font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.05]">
            From silent website <br />
            <span className="text-[#D4F542]">to automated pipeline in three weeks.</span>
          </p>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
            Five engineering stages from deep technical audit to fully indexed, automated digital authority.
          </p>
        </div>

        {/* Horizontal Step Tabs Rail */}
        <div className="max-w-2xl mx-auto flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none -mx-1 px-1">
          {STEPS.map((s, idx) => {
            const isActive = mobileStep === idx;
            return (
              <button
                key={s.step}
                type="button"
                onClick={() => handleStepChange(idx)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#D4F542] text-black font-bold shadow-[0_0_12px_rgba(212,245,66,0.35)] scale-100"
                    : "bg-white/[0.06] text-white/60 hover:text-white border border-white/[0.08]"
                }`}
              >
                <span>{s.step}</span>
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Animated Card with Touch Swipe */}
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Subtle Swipe Hint */}
          <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pb-2 px-1">
            <span className="flex items-center gap-1.5 text-[#D4F542]">
              <span className="animate-pulse">↔</span>
              <span>SWIPE OR TAP TO EXPLORE</span>
            </span>
            <span className="text-white/60">{STEPS[mobileStep].week}</span>
          </div>

          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={handleDragEnd}
            className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.14] bg-zinc-950 min-h-[420px] sm:min-h-[460px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl touch-pan-y cursor-grab active:cursor-grabbing select-none group"
          >
            {/* Background Photo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileStep}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-0 pointer-events-none"
              >
                <Image
                  src={STEPS[mobileStep].img}
                  alt={STEPS[mobileStep].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-cover object-[50%_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/85 via-50% to-[#0B0D10]/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/95 via-[#0B0D10]/60 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Top Card Elements */}
            <div className="relative z-10 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#D4F542] text-black font-mono text-[11px] font-bold shadow-[0_0_12px_rgba(212,245,66,0.35)]">
                  {STEPS[mobileStep].week}
                </span>
                <span className="text-xs font-mono text-white/70 tracking-wider uppercase">
                  STEP {STEPS[mobileStep].step} / 05
                </span>
              </div>

              {/* Outline Stroke Number */}
              <span
                className="text-6xl sm:text-7xl font-tight font-extrabold select-none pointer-events-none leading-none tracking-tighter"
                style={{
                  WebkitTextStroke: "1.5px #D4F542",
                  color: "transparent",
                  textShadow: "0 0 25px rgba(212, 245, 66, 0.35)",
                }}
              >
                {STEPS[mobileStep].step}
              </span>
            </div>

            {/* Content Area with Direction-Aware Slide Animation */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={mobileStep}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? 30 : -30,
                    opacity: 0,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                  },
                  exit: (dir: number) => ({
                    x: dir > 0 ? -30 : 30,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative z-10 flex flex-col gap-2.5 my-auto py-4 pointer-events-none"
              >
                <div className="text-xs font-mono text-[#D4F542] font-semibold tracking-wider uppercase">
                  {STEPS[mobileStep].headline}
                </div>
                <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-white tracking-tight">
                  {STEPS[mobileStep].title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans line-clamp-3">
                  {STEPS[mobileStep].description}
                </p>
                <div className="p-3 rounded-xl bg-black/60 border border-white/[0.08] text-[11px] font-mono text-white/80 mt-1">
                  <span className="text-[#D4F542] font-semibold">Deliverable: </span>
                  {STEPS[mobileStep].clientRole}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Controls inside Card */}
            <div className="relative z-10 pt-4 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-white/[0.1] hover:bg-white/[0.2] active:scale-95 text-white flex items-center justify-center text-xs font-mono transition-all cursor-pointer"
                  aria-label="Previous step"
                >
                  ←
                </button>

                {/* Interactive Dots Pagination */}
                <div className="flex items-center gap-1.5 px-2">
                  {STEPS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleStepChange(i)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        mobileStep === i
                          ? "w-6 bg-[#D4F542] shadow-[0_0_8px_#D4F542]"
                          : "w-1.5 bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-white/[0.1] hover:bg-white/[0.2] active:scale-95 text-white flex items-center justify-center text-xs font-mono transition-all cursor-pointer"
                  aria-label="Next step"
                >
                  →
                </button>
              </div>

              <Button href="/book?type=audit" variant="ghost" hasArrow={false} hasLamp={true} className="!h-[36px] !text-[11px] !px-3.5">
                Get 48-Hour Blueprint
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESKTOP EXPERIENCE: 450vh spring pinned horizontal glide (Monitors & Large Laptops) */}
      <section ref={containerRef} className="hidden lg:block relative w-full bg-[#0B0D10] text-[#F8F8F5] h-[450vh]">
        {/* Pinned Sticky Screen Wrapper */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-6 md:pt-10 pb-8 md:pb-12 px-6 md:px-8 lg:px-14 overflow-hidden border-t border-white/[0.08]">
          <div className="max-w-[1360px] mx-auto w-full h-full flex flex-col justify-between relative">
            
            {/* Main Content Area (Intro Column on left + Horizontal Slide Track) */}
            <div className="relative w-full flex-1 flex items-center overflow-hidden my-auto">
              {/* Left Intro Pitch Column - Fades and slides out on scroll (matching Image 1 -> Image 2) */}
              <motion.div
                style={{ opacity: introOpacity, x: introX }}
                className="absolute left-0 z-10 w-[85vw] sm:w-[50vw] md:w-[36vw] max-w-[440px] flex flex-col gap-4 sm:gap-5 pr-4 sm:pr-8 pointer-events-auto"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542] font-semibold">
                    OUR 21-DAY PROCESS
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.04]">
                  From silent website <br />
                  <span className="text-[#D4F542]">to automated pipeline in three weeks.</span>
                </h2>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans max-w-sm">
                  Five engineering stages from deep technical audit to fully indexed, automated digital authority.
                </p>

                <div className="pt-2">
                  <Button href="/book?type=audit" variant="ghost" hasArrow={false} hasLamp={true} className="!h-[44px] !text-xs">
                    Get Your 48-Hour Audit Blueprint
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
                        <Image
                          src={s.img}
                          alt={s.title}
                          fill
                          sizes="(max-width: 1200px) 50vw, 620px"
                          className="object-cover object-[50%_35%] scale-100"
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
                      type="button"
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
    </>
  );
}
