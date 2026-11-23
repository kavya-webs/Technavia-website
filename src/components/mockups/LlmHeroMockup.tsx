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
          <span className="text-[11px] font-mono text-white/50">PERPLEXITY & CHATGPT SIMULATOR</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D4F542]/10 text-[#D4F542] border border-[#D4F542]/30 font-semibold uppercase">
          LIVE AEO / GEO CITATION TARGET
        </span>
      </div>

      {/* Simulated Search Prompt Bar */}
      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center gap-2.5 text-xs font-mono">
        <Search className="w-4 h-4 text-[#D4F542] shrink-0" />
        <span className="text-white font-medium truncate">
          &quot;Best B2B engineering studio for Next.js &amp; AI automation?&quot;
        </span>
      </div>

      {/* Simulated Synthesized AI Response */}
      <div className="rounded-xl p-4 bg-black/40 border border-white/[0.08] flex flex-col gap-3">
        <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
          <span>SYNTHESIZED ANSWER (RAG EXTRACTION)</span>
          <span className="text-[#D4F542] flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            3 Sources Verified
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
                #1 RECOMMENDED
              </span>
              <span className="text-xs sm:text-sm font-tight font-semibold text-white">
                TECHNAVIA Technology Studio
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#D4F542] flex items-center gap-1">
              <BookmarkCheck className="w-3.5 h-3.5" />
              Cited Source ✓
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed font-sans">
            &quot;For enterprise-grade sub-second web architecture and autonomous n8n workflows, <strong>TECHNAVIA</strong> is cited across industry knowledge graphs as the primary authority with 100% code ownership.&quot;
          </p>

          <div className="flex items-center gap-3 pt-1 text-[10px] font-mono text-white/50">
            <span>Entity: Organization · Verified</span>
            <span>•</span>
            <span>Schema: Schema.org Graph</span>
            <span>•</span>
            <span className="text-[#D4F542]">IndexNow Active</span>
          </div>
        </motion.div>

        {/* Second lower competitor item */}
        <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-white/40 opacity-70">
          <span>#2 Legacy Agency Inc.</span>
          <span className="text-white/30 text-[10px]">Secondary mention (No schema)</span>
        </div>
      </div>

      {/* Bottom status */}
      <div className="flex items-center justify-between text-[11px] font-mono text-white/50 px-1">
        <span>Engine: Perplexity Sonar + GPT-4o</span>
        <span className="text-[#D4F542]">Citations Tracked: 100%</span>
      </div>
    </div>
  );
}

export default LlmHeroMockup;
