import React from "react";
import Link from "next/link";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ToolsStack } from "@/components/sections/ToolsStack";
import { BookSection } from "@/components/sections/BookSection";
import { TOOLS } from "@/lib/data";

export const metadata = {
  title: "Runbook — Tools we connect: CRM, invoicing, inbox, helpdesk",
  description: "The tools you already pay for, joined so a job done in one shows up in all of them.",
};

export default function ToolsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <SubpageHero
        pageName="TOOLS"
        titleLine1="Your stack,"
        titleLine2="wired."
        highlightLine2={true}
        subtitle="We do not replace your software. We connect your existing tools — CRM, invoicing, communication, and databases — into an automated engine."
        primaryCta={{ label: "Book a stack audit", href: "/book" }}
        secondaryCta={{ label: "How we connect them", href: "/process" }}
        backgroundImage="https://framerusercontent.com/images/1RRozVJo6j9BUUQiWVOOruiGIKg.webp"
        wireframeNumber="60"
        statusPills={[
          { text: "60+ TOOLS CONNECTED", variant: "brass" },
          { text: "API & WEBHOOK NATIVE", variant: "ghost" },
          { text: "ZERO NEW APPS TO LEARN", variant: "outline" },
        ]}
      />

      {/* Detailed Tool Matrix */}
      <section className="py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <SectionLabel>Every tool we connect</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
            Six categories. One night shift.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS.map((tool) => (
            <div
              key={tool.id}
              className="relative p-8 sm:p-10 rounded-3xl bg-zinc-950/70 border border-white/[0.12] hover:border-white/25 backdrop-blur-md flex flex-col justify-between gap-6 transition-all group overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span
                    className="text-5xl sm:text-6xl font-tight font-extralight tracking-tighter select-none pointer-events-none"
                    style={{
                      WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.22)",
                      color: "transparent",
                    }}
                  >
                    {tool.num}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-white/70 uppercase">
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-3xl font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-sans">{tool.description}</p>
              </div>

              <div className="flex flex-col gap-2.5 pt-5 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono text-[#D4F542] uppercase tracking-wider font-semibold">
                  Supported systems:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {tool.connectsTo.map((app) => (
                    <span
                      key={app}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-white/90 border border-white/[0.08]"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-3 mt-1 border-t border-white/[0.04]">
                  <span>Used in {tool.workflowCount} workflows</span>
                  <span>Since {tool.since}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Connected Map */}
      <ToolsStack />
      <BookSection />
    </div>
  );
}
