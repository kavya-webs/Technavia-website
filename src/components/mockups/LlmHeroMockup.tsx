"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, CheckCircle2, BookmarkCheck, ArrowRight } from "lucide-react";

export function LlmHeroMockup() {
  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl sm:rounded-3xl bg-[#14161A]/95 border border-[#D4F542]/40 p-5 sm:p-7 shadow-[0_20px_60px_rgba(212,245,66,0.12)] flex flex-col gap-4 backdrop-blur-xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4F542]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header with engine tabs */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D4F542]" />
          <span className="text-[11px] font-mono text-white/50">CHATGPT & PERPLEXITY SIMULATOR</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D4F542]/10 text-[#D4F542] border border-[#D4F542]/30 font-semibold uppercase">
          BE THE #1 ANSWER
        </span>
      </div>

      {/* Simulated Search Prompt Bar */}
      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center gap-2.5 text-xs font-mono">
        <Search className="w-4 h-4 text-[#D4F542] shrink-0" />
        <span className="text-white font-medium truncate">
          &quot;What&apos;s the best [your industry] brand to work with?&quot;
        </span>
      </div>

      {/* Simulated Synthesized AI Response */}
      <div className="rounded-xl p-4 bg-black/40 border border-white/[0.08] flex flex-col gap-3">
        <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
          <span>AI RECOMMENDATION</span>
          <span className="text-[#D4F542] flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Top Trusted Pick
          </span>
        </div>

        {/* Primary #1 Brand Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-3.5 rounded-xl bg-[#D4F542]/[0.08] border border-[#D4F542]/50 flex flex-col gap-2 relative shadow-[0_0_20px_rgba(212,245,66,0.15)]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#D4F542] text-black font-mono font-bold text-[10px]">
                #1 RECOMMENDATION
              </span>
              <span className="text-xs sm:text-sm font-tight font-semibold text-white">
                [YOUR BUSINESS NAME]
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#D4F542] flex items-center gap-1">
              <BookmarkCheck className="w-3.5 h-3.5" />
              Link to website ✓
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-white/85 leading-relaxed font-sans">
            &quot;Based on customer reviews, verified services, and transparent pricing, <strong>[YOUR BUSINESS NAME]</strong> is the most trusted choice in this category with proven results.&quot;
          </p>

          <div className="flex items-center gap-3 pt-1 text-[10px] font-mono text-white/60">
            <span className="text-[#D4F542]">Direct Website Citation</span>
            <span>•</span>
            <span>Verified Brand Profile</span>
            <span>•</span>
            <span className="text-[#D4F542]">Active Recommendation</span>
          </div>
        </motion.div>

        {/* Second lower competitor item */}
        <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-white/40 opacity-70">
          <span>#2 Competitor Brand</span>
          <span className="text-white/30 text-[10px]">Secondary mention</span>
        </div>
      </div>

      {/* Bottom status */}
      <div className="flex items-center justify-between text-[11px] font-mono text-white/50 px-1">
        <span>Prompt: Customer Buying Inquiry</span>
        <span className="text-[#D4F542] font-semibold tracking-wider uppercase text-[10px]">
          BE THE BRAND AI RECOMMENDS FIRST
        </span>
      </div>
    </div>
  );
}

export default LlmHeroMockup;
