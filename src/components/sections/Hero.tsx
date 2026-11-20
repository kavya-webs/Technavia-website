"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { RollingCounter } from "../ui/RollingCounter";
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
}

const HERO_PINS: HeroPin[] = [
  {
    id: "invoicing",
    time: "02:14",
    event: "Invoice #4821 sent",
    title: "Invoicing",
    desc: "Invoices out the minute a job closes, chased until paid.",
    href: "/workflows/invoicing",
    left: "40%",
    top: "13%",
    side: "r",
  },
  {
    id: "lead-routing",
    time: "02:15",
    event: "Lead qualified · CRM updated",
    title: "Lead routing",
    desc: "Every enquiry scored, assigned and in the CRM in seconds.",
    href: "/workflows/lead-routing",
    left: "40%",
    top: "31%",
    side: "r",
  },
  {
    id: "support",
    time: "02:16",
    event: "Ticket #772 closed",
    title: "Support",
    desc: "Tickets answered, tagged and escalated without a queue.",
    href: "/workflows/support",
    left: "92%",
    top: "20%",
    side: "l",
  },
  {
    id: "onboarding",
    time: "02:18",
    event: "Client folder created",
    title: "Onboarding",
    desc: "Contracts, accounts and welcome sequences from one form.",
    href: "/workflows/onboarding",
    left: "57%",
    top: "66%",
    side: "r",
  },
  {
    id: "reporting",
    time: "02:20",
    event: "Monday report sent",
    title: "Reporting",
    desc: "The numbers on the desk every morning, nobody builds them.",
    href: "/workflows/reporting",
    left: "92%",
    top: "44%",
    side: "l",
  },
];

export function Hero() {
  const [activePin, setActivePin] = useState<string>("invoicing");

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between pt-[100px] pb-12 px-6 md:px-14 overflow-hidden bg-[#0B0D10]">
      {/* Background Dusk Office Photography */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://framerusercontent.com/images/kltvaH90N1EBZgMRovsYhy45bk0.webp?scale-down-to=2048"
          alt="An open-plan office at dusk, screens still lit"
          className="absolute inset-0 w-full h-full object-cover object-[50%_42%] select-none scale-105 transition-transform duration-1000"
        />
        {/* Layered Lighting Scrims matching Framer .rbh-scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10]/60 via-transparent to-[#0B0D10]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[#0B0D10]/20" />
      </div>

      {/* Floating Interactive Workflow Pins */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        {HERO_PINS.map((pin) => {
          const isOn = activePin === pin.id;
          const isLeft = pin.side === "l";

          return (
            <div
              key={pin.id}
              style={{ left: pin.left, top: pin.top }}
              className={`absolute pointer-events-auto flex items-center gap-2.5 cursor-pointer -translate-x-[7px] -translate-y-[7px] ${
                isLeft ? "flex-row-reverse -translate-x-[calc(100%-7px)]" : ""
              }`}
              onClick={() => setActivePin(pin.id)}
            >
              {/* Lamp Dot with Glow / Ping */}
              <div className="relative flex-shrink-0">
                <div
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-400 ${
                    isOn
                      ? "bg-[#D4F542] shadow-[0_0_0_6px_rgba(212,245,66,0.24),0_0_22px_#D4F542]"
                      : "bg-white/70 shadow-[0_0_0_5px_rgba(255,255,255,0.14)] hover:bg-white"
                  }`}
                />
                {isOn && (
                  <span className="absolute -inset-1.5 rounded-full border border-[#D4F542] animate-ping opacity-60" />
                )}
              </div>

              {/* Glass Info Plate */}
              <div
                className={`flex flex-col rounded-lg p-2.5 transition-all duration-400 backdrop-blur-md max-w-[320px] ${
                  isOn
                    ? "bg-[#0B0D10]/85 border border-[#D4F542]/60 shadow-[0_12px_32px_-10px_rgba(0,0,0,0.8)]"
                    : "bg-[#0B0D10]/70 border border-white/[0.18] hover:border-white/40"
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase whitespace-nowrap">
                  <span className="text-[#D4F542] font-semibold">{pin.time}</span>
                  <span className="text-white/80">{pin.event}</span>
                </div>

                {isOn && (
                  <div className="mt-2.5 pt-2 border-t border-white/[0.1] grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 items-center animate-in fade-in duration-300">
                    <span className="text-base font-tight font-semibold tracking-tight text-white leading-tight">
                      {pin.title}
                    </span>
                    <Link
                      href={pin.href}
                      className="row-span-2 w-9 h-9 rounded-full bg-[#D4F542] text-black grid place-items-center hover:scale-105 transition-transform"
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
                    <span className="text-xs text-white/75 leading-snug">
                      {pin.desc}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Copy & Headlines */}
      <div className="relative z-20 max-w-[1280px] w-full mx-auto mt-auto pt-20 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
        <div className="max-w-3xl flex flex-col gap-6">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] w-fit">
            <LitDot />
            <span className="text-xs font-mono uppercase tracking-[0.1em] text-[#F8F8F5]/90">
              Business automation agency · Since 2019
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-[clamp(72px,8.6vw,120px)] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[0.92] text-balance">
            Your business,
            <br />
            running <em className="not-italic text-[#D4F542]">itself.</em>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#F8F8F5]/80 font-normal max-w-xl leading-relaxed">
            We wire your CRM, invoicing, onboarding and support into workflows that run while the
            office sleeps.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="/book" variant="solid">
              Book a call
            </Button>
            <Button href="/workflows" variant="ghost" hasArrow={false} hasLamp={true}>
              See the workflows
            </Button>
          </div>
        </div>

        {/* Live Counters Bottom Right */}
        <div className="flex items-center gap-8 md:gap-12 pb-2">
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-tight font-semibold tracking-tight text-[#F8F8F5]">
              <RollingCounter value="1,284" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#F8F8F5]/60 mt-1">
              tasks run tonight
            </span>
          </div>

          <div className="w-[1px] h-12 bg-white/20" />

          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-tight font-semibold tracking-tight text-[#F8F8F5]">
              31h
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#F8F8F5]/60 mt-1">
              back per week
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
