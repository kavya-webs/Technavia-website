"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookSection } from "@/components/sections/BookSection";

interface PackageData {
  id: string;
  num: string;
  name: string;
  badge?: string;
  pricePayOnce: string;
  priceMonthly: string;
  cadencePayOnce: string;
  cadenceMonthly: string;
  summary: string;
  deliverables: string[];
  bgImage?: string;
}

const PACKAGES: PackageData[] = [
  {
    id: "audit",
    num: "01",
    name: "Audit",
    pricePayOnce: "£1,500",
    priceMonthly: "£125",
    cadencePayOnce: "ONE WEEK, FIXED PRICE",
    cadenceMonthly: "PER MONTH, SPREAD OVER 12 MO",
    summary:
      "We map your week and hand you the list of what to automate first, with the hours each fix buys back.",
    deliverables: [
      "80-minute stakeholder audit",
      "Full workflow inventory map",
      "Prioritized ROI roadmap",
      "Fixed build estimate",
    ],
  },
  {
    id: "build",
    num: "02",
    name: "Build",
    badge: "MOST CHOSEN",
    pricePayOnce: "£6,000",
    priceMonthly: "£500",
    cadencePayOnce: "PER WORKFLOW, FIXED PRICE",
    cadenceMonthly: "PER MONTH, SPREAD OVER 12 MO",
    summary:
      "One workflow wired end to end, run beside your team for two weeks, then handed over with a runbook.",
    deliverables: [
      "End-to-end sandbox build",
      "Past record stress tests",
      "14-day shadowing period",
      "Video runbook + documentation",
      "30-day post-launch warranty",
    ],
    bgImage:
      "https://framerusercontent.com/images/wpafQXWdQJCRrKXIWCks9bdMc.webp?scale-down-to=2048",
  },
  {
    id: "run",
    num: "03",
    name: "Run",
    pricePayOnce: "£7,200",
    priceMonthly: "£600",
    cadencePayOnce: "PER YEAR, PAID UP FRONT",
    cadenceMonthly: "PER MONTH, BILLED MONTHLY",
    summary:
      "We watch every workflow, fix what breaks the same day, and rebuild what needs adapting as you grow.",
    deliverables: [
      "Daily error monitoring",
      "4-hour fix SLA on failures",
      "API & tool updates handled",
      "One monthly tuning sprint",
      "Quarterly workflow reviews",
    ],
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"once" | "monthly">("once");

  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      {/* Hero Header */}
      <SubpageHero
        pageName="PRICING"
        titleLine1="Three packages."
        titleLine2="One number each."
        highlightLine2={true}
        subtitle="Clear pricing. No hourly billing, no surprises. Pick the tier that matches your automation maturity."
        primaryCta={{ label: "Book an audit", href: "/book" }}
        secondaryCta={{ label: "See the process", href: "/process" }}
        backgroundImage="/images/workflows/photo_invoicing.jpg"
        wireframeNumber="03"
        statusPills={[
          { text: "FIXED PRICE GUARANTEE", variant: "brass" },
          { text: "ROI WITHIN 30 DAYS", variant: "ghost" },
          { text: "SPREAD OVER 12 MONTHS", variant: "outline" },
        ]}
      />

      {/* Pricing Toggle Bar */}
      <section className="pt-14 pb-8 px-6 md:px-14 max-w-[1280px] mx-auto w-full">
        <div className="flex flex-wrap items-center gap-6">
          {/* Morphing Capsule Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-zinc-900 border border-white/15 relative">
            <button
              onClick={() => setBillingCycle("once")}
              className={`relative z-10 px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                billingCycle === "once" ? "text-black" : "text-white/60 hover:text-white"
              }`}
            >
              PAY ONCE
              {billingCycle === "once" && (
                <motion.div
                  layoutId="pricing-active-pill"
                  className="absolute inset-0 bg-[#D4F542] rounded-full shadow-[0_0_20px_rgba(212,245,66,0.4)] -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>

            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative z-10 px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                billingCycle === "monthly" ? "text-black" : "text-white/60 hover:text-white"
              }`}
            >
              MONTHLY
              {billingCycle === "monthly" && (
                <motion.div
                  layoutId="pricing-active-pill"
                  className="absolute inset-0 bg-[#D4F542] rounded-full shadow-[0_0_20px_rgba(212,245,66,0.4)] -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          </div>

          {/* Subtitle helper note */}
          <div className="flex items-center gap-2 text-xs font-mono text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]" />
            <span>Monthly spreads the same package over twelve months.</span>
          </div>
        </div>
      </section>

      {/* 3 Packages Cards */}
      <section className="pb-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, index) => {
            const price =
              billingCycle === "once" ? pkg.pricePayOnce : pkg.priceMonthly;
            const cadence =
              billingCycle === "once"
                ? pkg.cadencePayOnce
                : pkg.cadenceMonthly;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between gap-8 border backdrop-blur-md overflow-hidden transition-all ${
                  pkg.id === "build"
                    ? "bg-zinc-950 border-[#D4F542] shadow-[0_0_40px_rgba(212,245,66,0.18)]"
                    : "bg-zinc-950/70 border-white/[0.12] hover:border-white/25"
                }`}
              >
                {/* Background Photo for Build Card */}
                {pkg.bgImage && (
                  <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
                    <img
                      src={pkg.bgImage}
                      alt={pkg.name}
                      className="w-full h-full object-cover object-[50%_30%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                  </div>
                )}

                <div className="relative z-10 flex flex-col gap-6">
                  {/* Top Bar with Number and optional Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-6xl sm:text-7xl font-tight font-extralight tracking-tighter select-none pointer-events-none"
                        style={{
                          WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.22)",
                          color: "transparent",
                        }}
                      >
                        0{index + 1}
                      </span>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-mono">
                        <span className="w-2 h-2 rounded-full bg-[#D4F542]" />
                        <span className="text-white/80 uppercase font-medium">
                          {pkg.name}
                        </span>
                      </div>
                    </div>

                    {pkg.badge && (
                      <span className="px-3 py-1 rounded-full bg-[#D4F542] text-black font-mono font-bold text-[11px] tracking-wider uppercase shadow-[0_0_12px_rgba(212,245,66,0.3)]">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Price Block */}
                  <div className="flex flex-col gap-1.5 mt-2">
                    <div className="flex items-baseline gap-2">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={price}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="text-5xl sm:text-6xl font-tight font-bold text-white tracking-tight"
                        >
                          {price}
                        </motion.span>
                      </AnimatePresence>
                      {billingCycle === "monthly" && (
                        <span className="text-sm font-mono text-white/60">
                          / mo
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#D4F542] font-semibold">
                      {cadence}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
                    {pkg.summary}
                  </p>

                  {/* Deliverables List */}
                  <div className="flex flex-col gap-3 pt-6 border-t border-white/[0.08]">
                    <span className="text-xs font-mono uppercase tracking-wider text-white/40">
                      WHAT'S INCLUDED:
                    </span>
                    <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-white/80 font-sans">
                      {pkg.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#D4F542] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="relative z-10 pt-4">
                  <Button
                    href="/book"
                    variant={pkg.id === "build" ? "solid" : "ghost"}
                    hasLamp={pkg.id !== "build"}
                    className="w-full text-center justify-center"
                  >
                    Book {pkg.name}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Embedded FAQ & Book Sections */}
      <FaqSection />
      <BookSection />
    </div>
  );
}
