"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";

export function BookSection({ defaultService }: { defaultService?: string }) {
  const router = useRouter();
  const [teamSize, setTeamSize] = useState<string>("6–20");
  const [selectedWorkflows, setSelectedWorkflows] = useState<string[]>(() => {
    if (defaultService) {
      return [defaultService];
    }
    return ["Website + Technical SEO", "LLM Visibility (ChatGPT/Perplexity)"];
  });

  const teamSizes = ["1–5", "6–20", "21–100", "100+"];
  const workflowOptions = [
    "Website + Technical SEO",
    "LLM Visibility (ChatGPT/Perplexity)",
    "AI Lead Automations",
    "Full 21-Day Growth System",
  ];

  const toggleWorkflow = (item: string) => {
    setSelectedWorkflows((prev) =>
      prev.includes(item) ? prev.filter((w) => w !== item) : [...prev, item]
    );
  };

  const handleBook = () => {
    const params = new URLSearchParams({
      team: teamSize,
      workflows: selectedWorkflows.join(","),
    });
    router.push(`/book?${params.toString()}`);
  };

  const pickedCount =
    (teamSize ? 1 : 0) + (selectedWorkflows.length > 0 ? 1 : 0);

  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-36 px-6 md:px-14 border-t border-white/[0.08] overflow-hidden">
      {/* Background Photography: tech engineering environment */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/tech/hero_tech.webp"
          alt="Modern engineering architecture"
          className="w-full h-full object-cover object-[50%_50%] opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/80 via-[#0B0D10]/25 to-[#0B0D10]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]/40" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Description - Phase in from down on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          <SectionLabel>START YOUR UPGRADE</SectionLabel>
          <h2 className="text-3xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.02]">
            Get a free 5-minute audit— <br />
            <span className="text-[#D4F542]">or book a 20-min build call.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans max-w-lg">
            No pitch decks or pushy sales reps. Pick your biggest bottleneck below and we&apos;ll send a custom Loom audit within 48 hours.
          </p>
        </motion.div>

        {/* Right Interactive Brief Card - Phase in from right on scroll */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 p-5 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl bg-[#0B0D10]/95 border border-white/[0.16] backdrop-blur-2xl shadow-[0_24px_50px_rgba(0,0,0,0.85)] flex flex-col gap-5 sm:gap-6 md:gap-8"
        >
          {/* Card Header with Counter */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/[0.1]">
            <span className="text-xs sm:text-sm font-semibold font-tight text-white uppercase tracking-wider">
              Your brief
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-[#D4F542] font-medium">
              {pickedCount} / 2 picked
            </span>
          </div>

          {/* Question 1: Team Size */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-mono text-white/60 uppercase tracking-widest">
              01 · Team size
            </span>
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {teamSizes.map((size) => {
                const isSelected = teamSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setTeamSize(size)}
                    className={`py-2 sm:py-2.5 px-1.5 sm:px-2 rounded-xl text-[11px] sm:text-xs font-mono transition-all cursor-pointer min-h-[38px] sm:min-h-[44px] flex items-center justify-center ${
                      isSelected
                        ? "bg-[#D4F542] text-black font-semibold shadow-[0_0_12px_rgba(212,245,66,0.3)]"
                        : "bg-white/[0.06] text-white/70 hover:bg-white/[0.12] hover:text-white border border-white/[0.06]"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2: Workflows */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-mono text-white/60 uppercase tracking-widest">
              02 · What do you want to fix first?
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {workflowOptions.map((wf) => {
                const isSelected = selectedWorkflows.includes(wf);
                return (
                  <button
                    key={wf}
                    type="button"
                    onClick={() => toggleWorkflow(wf)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono transition-all cursor-pointer min-h-[36px] sm:min-h-[42px] flex items-center ${
                      isSelected
                        ? "bg-[#D4F542] text-black font-semibold shadow-[0_0_12px_rgba(212,245,66,0.3)]"
                        : "bg-white/[0.06] text-white/70 hover:bg-white/[0.12] hover:text-white border border-white/[0.06]"
                    }`}
                  >
                    {wf}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 sm:pt-4 border-t border-white/[0.1] flex flex-col gap-2.5 sm:gap-3">
            <Button
              onClick={handleBook}
              variant="solid"
              className="w-full justify-between !h-[46px] sm:!h-[52px] !text-xs sm:!text-sm"
            >
              <span>Book a 20-minute call</span>
            </Button>
            <div className="text-[10px] sm:text-[11px] font-mono text-white/40 text-center">
              No preparation needed · We screen share the flow live
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
