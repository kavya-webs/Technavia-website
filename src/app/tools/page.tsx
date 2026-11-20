import React from "react";
import Link from "next/link";
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
    <div className="flex flex-col w-full pt-[100px]">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Your stack</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95] max-w-4xl">
          Your stack, <br />
          <span className="text-[#D4F542]">wired.</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
          The tools you already pay for, joined so a job done in one shows up in all of them. No new
          app for your team to learn.
        </p>
      </section>

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
              className="p-8 rounded-2xl bg-zinc-900/60 border border-white/[0.1] backdrop-blur-md flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-mono text-white/40">
                  <span className="text-[#D4F542] font-semibold">{tool.num}</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/[0.06] text-white/60">
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-3xl font-tight font-semibold text-white">{tool.name}</h3>
                <p className="text-sm text-white/70 leading-relaxed font-sans">{tool.description}</p>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono text-[#D4F542] uppercase tracking-wider">
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
                <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-2 mt-2 border-t border-white/[0.04]">
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
