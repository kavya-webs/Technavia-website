import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { BookSection } from "@/components/sections/BookSection";
import { WORKFLOWS } from "@/lib/data";

export function generateStaticParams() {
  return WORKFLOWS.map((w) => ({ slug: w.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const wf = WORKFLOWS.find((w) => w.id === slug);
  if (!wf) return { title: "Workflow Not Found" };
  return {
    title: `TECHNAVIA — ${wf.title}`,
    description: wf.tagline,
  };
}

export default async function WorkflowDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const wf = WORKFLOWS.find((w) => w.id === slug);

  if (!wf) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full pt-[100px]">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/workflows" className="hover:text-white">Services</Link>
          <span>/</span>
          <span className="text-[#D4F542]">{wf.title}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95]">
              {wf.title}
            </h1>
            <p className="mt-6 text-xl text-[#D4F542] font-tight font-medium">
              {wf.tagline}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button href="/book" variant="solid">
              Book a call
            </Button>
            <Button href="/workflows" variant="ghost">
              All workflows
            </Button>
          </div>
        </div>
      </section>

      {/* 4 Parts Breakdown */}
      <section className="py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-20">
        {/* Part 1: What It Does */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/[0.1] pt-8">
          <div className="lg:col-span-4 flex flex-col gap-1">
            <span className="text-xs font-mono text-white/40">PART 01 / 04</span>
            <span className="text-xs font-mono text-[#D4F542] uppercase tracking-wider">What it does</span>
            <h2 className="text-3xl font-tight font-semibold text-white mt-2">
              What runs while nobody is in.
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6 text-base text-white/80 leading-relaxed font-sans">
            <p>{wf.description}</p>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] text-xs font-mono flex items-center gap-3">
              <span className="text-[#D4F542]">Trigger:</span>
              <span className="text-white">{wf.trigger}</span>
            </div>
          </div>
        </div>

        {/* Part 2: Step-by-Step Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/[0.1] pt-8">
          <div className="lg:col-span-4 flex flex-col gap-1">
            <span className="text-xs font-mono text-white/40">PART 02 / 04</span>
            <span className="text-xs font-mono text-[#D4F542] uppercase tracking-wider">The steps</span>
            <h2 className="text-3xl font-tight font-semibold text-white mt-2">
              Trigger, steps, result.
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-4">
            {wf.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.08] flex items-start gap-4"
              >
                <span className="text-xs font-mono text-[#D4F542] bg-[#D4F542]/10 px-2 py-1 rounded">
                  0{idx + 1}
                </span>
                <span className="text-sm text-white/80">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Tools & Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/[0.1] pt-8">
          <div className="lg:col-span-4 flex flex-col gap-1">
            <span className="text-xs font-mono text-white/40">PART 03 / 04</span>
            <span className="text-xs font-mono text-[#D4F542] uppercase tracking-wider">Integrations</span>
            <h2 className="text-3xl font-tight font-semibold text-white mt-2">
              The tools it runs on.
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-wrap gap-3">
            {wf.tools.map((tool) => (
              <div
                key={tool}
                className="px-6 py-4 rounded-xl bg-zinc-900/60 border border-white/[0.1] text-base font-semibold text-white"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Part 4: Proof / Case Result */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/[0.1] pt-8">
          <div className="lg:col-span-4 flex flex-col gap-1">
            <span className="text-xs font-mono text-white/40">PART 04 / 04</span>
            <span className="text-xs font-mono text-[#D4F542] uppercase tracking-wider">Proof</span>
            <h2 className="text-3xl font-tight font-semibold text-white mt-2">
              What it did for others.
            </h2>
          </div>
          <div className="lg:col-span-8 p-8 rounded-2xl bg-zinc-900/70 border border-white/[0.1] flex flex-col gap-4">
            <span className="text-4xl font-tight font-bold text-[#D4F542]">
              {wf.caseStudy.metric}
            </span>
            <span className="text-sm font-mono text-white/60">
              Verified outcome for {wf.caseStudy.client}
            </span>
            <p className="text-base text-white/80 italic font-sans border-l-2 border-[#D4F542] pl-4 py-1">
              "{wf.caseStudy.quote}"
            </p>
          </div>
        </div>
      </section>

      {/* Book Call Form */}
      <BookSection />
    </div>
  );
}
