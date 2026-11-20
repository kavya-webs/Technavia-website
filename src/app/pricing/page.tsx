import React from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookSection } from "@/components/sections/BookSection";
import { PRICING_PACKAGES } from "@/lib/data";

export const metadata = {
  title: "Runbook — Pricing: audit, build and run packages",
  description: "Fixed prices, no surprises. An audit that finds the hours, a build that wires the workflows, a run that keeps them going.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full pt-[100px]">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Pricing</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95] max-w-4xl">
          Fixed prices, <br />
          <span className="text-[#D4F542]">no surprises.</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
          An audit that finds the lost hours, a build that wires the workflows, a monthly run that
          keeps them going. Every price is fixed before we begin.
        </p>
      </section>

      {/* 3 Packages Cards */}
      <section className="py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <SectionLabel>Packages</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
            Three packages. One number each.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-8 md:p-10 rounded-2xl flex flex-col justify-between gap-8 border backdrop-blur-md ${
                pkg.id === "build"
                  ? "bg-zinc-900/80 border-[#D4F542] shadow-[0_0_30px_rgba(212,245,66,0.15)]"
                  : "bg-zinc-900/50 border-white/[0.1]"
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#D4F542]">{pkg.num}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.08] text-white/70">
                    {pkg.badge}
                  </span>
                </div>

                <h3 className="text-3xl font-tight font-semibold text-white">{pkg.name}</h3>

                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-5xl font-tight font-bold text-white tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-mono text-white/60 uppercase">{pkg.cadence}</span>
                </div>

                <p className="text-sm text-white/70 leading-relaxed font-sans">{pkg.summary}</p>

                <div className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.08]">
                  <span className="text-xs font-mono text-white/40 uppercase">What's included:</span>
                  <ul className="flex flex-col gap-2 text-xs text-white/80">
                    {pkg.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#D4F542]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button href="/book" variant={pkg.id === "build" ? "solid" : "ghost"}>
                Book {pkg.name}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded FAQ & Book */}
      <FaqSection />
      <BookSection />
    </div>
  );
}
