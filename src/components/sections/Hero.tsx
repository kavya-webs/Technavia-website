"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { LitDot } from "../ui/LitDot";

interface HeroPin {
  id: string;
  time: string;
  event: string;
  title: string;
  desc: string;
  href: string;
  left: string;
  top: string;
  side: "r" | "l";
  lampX: number;
  lampY: number;
}

// Exactly 3 functional workflow pins moved a lot towards the right with a comfortable right margin:
// 1. Invoicing at the upper right (92%, 16%)
// 2. Lead routing at middle right (87%, 34%)
// 3. Support at lower-middle right (93%, 52%)
const HERO_PINS: HeroPin[] = [
  {
    id: "invoicing",
    time: "02:14",
    event: "INVOICE #4821 SENT",
    title: "Invoicing",
    desc: "Invoices out the minute a job closes, chased until paid.",
    href: "/workflows/invoicing",
    left: "92%",
    top: "16%",
    side: "l",
    lampX: 92,
    lampY: 0,
  },
  {
    id: "lead-routing",
    time: "02:15",
    event: "LEAD QUALIFIED · CRM UPDATED",
    title: "Lead routing",
    desc: "Every enquiry scored, assigned and in the CRM in seconds.",
    href: "/workflows/lead-routing",
    left: "87%",
    top: "34%",
    side: "l",
    lampX: 87,
    lampY: 0,
  },
  {
    id: "support",
    time: "02:16",
    event: "TICKET #772 CLOSED",
    title: "Support",
    desc: "Tickets answered, tagged and escalated without a queue.",
    href: "/workflows/support",
    left: "93%",
    top: "52%",
    side: "l",
    lampX: 93,
    lampY: 0,
  },
];

export function Hero() {
  const [activePin, setActivePin] = useState<string | null>(null);
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);
  const [isInsideHero, setIsInsideHero] = useState<boolean>(false);
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    if (!isInsideHero) setIsInsideHero(true);
  };

  const handleMouseLeave = () => {
    setIsInsideHero(false);
    setCursorPos(null);
    setHoveredPin(null);
  };

  // Currently focused pin for wire anchor
  const displayedPinId = hoveredPin || activePin || "lead-routing";
  const currentPin = HERO_PINS.find((p) => p.id === displayedPinId) || HERO_PINS[1];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInsideHero(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-[104px] pb-12 px-6 md:px-14 overflow-hidden bg-[#0B0D10] select-none cursor-none"
    >
      {/* Background Dusk Office Photography */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://framerusercontent.com/images/kltvaH90N1EBZgMRovsYhy45bk0.webp?scale-down-to=2048"
          alt="An open-plan office at dusk, screens still lit"
          className="absolute inset-0 w-full h-full object-cover object-[50%_42%] scale-105"
        />

        {/* Minor Black Tint across entire background for crisp text readability */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        {/* Perimeter Vignette: darker towards the outer edges, lighter in center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(11,13,16,0.35)_75%,rgba(11,13,16,0.9)_100%)] pointer-events-none" />

        {/* Top and bottom subtle blending transitions */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0B0D10]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0D10] to-transparent pointer-events-none" />
      </div>

      {/* The Cursor as the "AUTOMATE THIS" Button (Acts as mouse cursor within Hero with subtle lime glow) */}
      {isInsideHero && cursorPos && (
        <div
          className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D4F542] text-black font-mono text-[11px] font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(212,245,66,0.45),0_0_8px_rgba(212,245,66,0.6),0_4px_16px_rgba(0,0,0,0.4)] whitespace-nowrap will-change-transform"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
        >
          AUTOMATE THIS
        </div>
      )}

      {/* Animated SVG Electrical Cable / Wire connected dynamically to active/hovered pin */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          key={displayedPinId}
          d={`M ${currentPin.lampX} ${currentPin.lampY} Q ${(currentPin.lampX + parseFloat(currentPin.left)) / 2 + (currentPin.side === 'l' ? 3 : -3)} ${(currentPin.lampY + parseFloat(currentPin.top)) / 2 - 4} ${parseFloat(currentPin.left)} ${parseFloat(currentPin.top)}`}
          fill="none"
          stroke="#D4F542"
          strokeWidth="0.25"
          strokeDasharray="0.8 0.6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        />
      </svg>

      {/* 3 Interactive Workflow Pins - All 3 have full hover expansion, click activation, and direct links */}
      <div className="absolute inset-0 z-30 pointer-events-none hidden lg:block">
        {HERO_PINS.map((pin) => {
          const isExpanded = hoveredPin === pin.id || activePin === pin.id;
          const isLeft = pin.side === "l";

          return (
            <div
              key={pin.id}
              data-testid={`hero-pin-${pin.id}`}
              style={{ left: pin.left, top: pin.top }}
              onMouseEnter={() => setHoveredPin(pin.id)}
              onMouseLeave={() => setHoveredPin(null)}
              onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
              className={`absolute pointer-events-auto flex items-center gap-2.5 -translate-y-1/2 transition-opacity duration-200 select-none ${
                isLeft
                  ? "flex-row-reverse -translate-x-[calc(100%-7px)]"
                  : "flex-row -translate-x-[7px]"
              }`}
            >
              {/* Lamp Connection Dot */}
              <div className="relative flex-shrink-0">
                <div
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    isExpanded
                      ? "bg-[#D4F542] shadow-[0_0_0_6px_rgba(212,245,66,0.25),0_0_20px_#D4F542]"
                      : "bg-white/70 shadow-[0_0_0_4px_rgba(255,255,255,0.12)] hover:bg-white hover:scale-110"
                  }`}
                />
                {isExpanded && (
                  <span className="absolute -inset-1.5 rounded-full border border-[#D4F542] animate-ping opacity-60" />
                )}
              </div>

              {/* Pin Plate (Expands with details & arrow button on hover/click) */}
              <div
                className={`flex flex-col rounded-xl transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isExpanded
                    ? "bg-[#0B0D10]/95 border border-[#D4F542]/70 p-3.5 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.85)] min-w-[280px] max-w-[340px]"
                    : "bg-[#0B0D10]/80 border border-white/[0.18] px-3 py-1.5 hover:border-white/40 hover:bg-[#0B0D10]/90"
                }`}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3 text-xs font-mono tracking-wider uppercase whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="text-[#D4F542] font-semibold">{pin.time}</span>
                    <span className={isExpanded ? "text-white font-medium text-[11px]" : "text-white/80 text-[11px]"}>
                      {pin.event}
                    </span>
                  </div>

                  {/* Accent pill indicator when expanded */}
                  {isExpanded && (
                    <span className="w-6 h-1 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] flex-shrink-0" />
                  )}
                </div>

                {/* Expanded Details on Hover with arrow button */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="mt-3 pt-2.5 border-t border-white/[0.1] grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 items-center"
                  >
                    <span className="text-base font-tight font-semibold tracking-tight text-white leading-tight">
                      {pin.title}
                    </span>

                    <Link
                      href={pin.href}
                      className="row-span-2 w-8 h-8 rounded-full bg-[#D4F542] text-black grid place-items-center hover:scale-110 transition-transform shadow-[0_0_12px_rgba(212,245,66,0.35)]"
                      title={`Open ${pin.title}`}
                    >
                      <svg
                        className="w-4 h-4 -rotate-45"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <span className="text-xs text-white/70 leading-snug font-sans">
                      {pin.desc}
                    </span>
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Copy & Headlines - Anchored to bottom-left with ample space */}
      <div className="relative z-20 max-w-[1280px] w-full mx-auto mt-auto pt-24 pb-4 flex flex-col lg:flex-row lg:items-end justify-between gap-10 pointer-events-none">
        <div className="max-w-[480px] sm:max-w-[520px] flex flex-col gap-5 pointer-events-auto">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] w-fit">
            <LitDot />
            <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#F8F8F5]/90 font-medium">
              BUSINESS AUTOMATION AGENCY · SINCE 2019
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[0.93]">
            Your business,
            <br />
            running <span className="text-[#D4F542]">itself.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#F8F8F5]/80 font-normal max-w-md leading-relaxed font-sans">
            We wire your CRM, invoicing, onboarding and support into workflows that run while the
            office sleeps.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <Button href="/book" variant="solid" className="!h-[48px] !text-[13px]">
              Book a call
            </Button>
            <Button href="/workflows" variant="ghost" hasArrow={false} hasLamp={true} className="!h-[48px] !text-[13px]">
              See the workflows
            </Button>
          </div>
        </div>

        {/* Bottom Right: 31h Back per week */}
        <div className="flex flex-col items-start lg:items-end pb-2 pointer-events-auto">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-tight font-semibold tracking-tight text-[#F8F8F5] leading-none">
            31h
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#F8F8F5]/60 mt-1.5">
            BACK PER WEEK
          </span>
        </div>
      </div>
    </section>
  );
}
