import React from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BookSection } from "@/components/sections/BookSection";
import { WORKFLOWS } from "@/lib/data";

export const metadata = {
  title: "Runbook — Workflows: invoicing, leads, support, onboarding",
  description: "Five workflows, running on their own. Invoicing, lead routing, support, onboarding and reporting.",
};

export default function WorkflowsPage() {
  return (
    <div className="flex flex-col w-full pt-[100px]">
      {/* Page Hero */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Services</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95] max-w-4xl">
          Five workflows, <br />
          <span className="text-[#D4F542]">running on their own.</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
          Invoicing, lead routing, support, onboarding and reporting, wired into the tools you already
          use every day.
        </p>
      </section>

      {/* Detailed Workflow Cards */}
      <section className="py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <SectionLabel>The night shift, workflow by workflow</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
            Five workflows. Zero hands.
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {WORKFLOWS.map((wf) => (
            <div
              key={wf.id}
              className="p-8 md:p-12 rounded-2xl bg-zinc-900/60 border border-white/[0.1] backdrop-blur-md flex flex-col lg:flex-row justify-between gap-10"
            >
              <div className="flex flex-col gap-6 max-w-2xl">
                <div className="flex items-center gap-4 text-xs font-mono text-white/40">
                  <span className="text-base text-[#D4F542] font-semibold">{wf.num}</span>
                  <span>·</span>
                  <span className="text-[#D4F542]">{wf.timestamp} {wf.timeAction}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
                  {wf.title}
                </h3>

                <p className="text-base text-white/80 leading-relaxed font-sans">
                  {wf.summary}
                </p>

                {/* Steps Checklist */}
                <div className="flex flex-col gap-2 pt-2">
                  <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                    How it triggers & runs:
                  </span>
                  <ul className="flex flex-col gap-1.5 text-xs text-white/70">
                    {wf.steps.map((st, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#D4F542]">•</span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Runs on tools */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-white/40">Runs on:</span>
                  {wf.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-xs font-mono text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Case Study Mini Card */}
              <div className="lg:w-80 p-6 rounded-xl bg-black/50 border border-white/[0.08] flex flex-col justify-between gap-6 self-start">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-mono text-white/40 uppercase">Case result</span>
                  <div className="text-3xl font-tight font-semibold text-[#D4F542]">
                    {wf.caseStudy.metric}
                  </div>
                  <div className="text-xs font-mono text-white/80">{wf.caseStudy.client}</div>
                  <p className="text-xs text-white/60 italic mt-2">
                    "{wf.caseStudy.quote}"
                  </p>
                </div>

                <Button href={`/workflows/${wf.id}`} variant="solid">
                  View workflow
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Process Section */}
      <ProcessSection />

      {/* Embedded Book Section */}
      <BookSection />
    </div>
  );
}
