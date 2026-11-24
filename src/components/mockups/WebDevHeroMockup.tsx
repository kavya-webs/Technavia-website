"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, AlertTriangle, ArrowRight, Gauge, Check } from "lucide-react";

export function WebDevHeroMockup() {
  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl sm:rounded-3xl bg-[#14161A]/95 border border-white/[0.14] p-5 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col gap-5 backdrop-blur-xl relative overflow-hidden">
      {/* Top decorative gradient glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4F542]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-[11px] font-mono text-white/40 ml-2">STORE & SITE BENCHMARK</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D4F542]/10 text-[#D4F542] border border-[#D4F542]/30 font-semibold">
          REAL RESULTS
        </span>
      </div>

      {/* Comparison Cards: Old Template vs TECHNAVIA Build */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative">
        {/* Typical Slow Store */}
        <div className="rounded-xl p-4 bg-white/[0.03] border border-red-500/20 flex flex-col justify-between gap-3 relative">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-red-400 font-semibold flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              TYPICAL SLOW STORE
            </span>
          </div>

          <div className="flex flex-col gap-2 text-xs font-sans text-white/75 leading-relaxed">
            <div className="flex items-start gap-1.5 text-red-300/90 font-mono text-[11px]">
              <span className="text-red-400">•</span>
              <span>Takes 4+ seconds on mobile</span>
            </div>
            <div className="flex items-start gap-1.5 text-red-300/90 font-mono text-[11px]">
              <span className="text-red-400">•</span>
              <span>Shoppers bounce before buying</span>
            </div>
            <div className="flex items-start gap-1.5 text-red-300/90 font-mono text-[11px]">
              <span className="text-red-400">•</span>
              <span>Invisible on Google search</span>
            </div>
          </div>

          <div className="pt-2 border-t border-red-500/20 flex justify-between text-[11px] font-mono">
            <span className="text-white/50">Speed Score</span>
            <span className="text-red-400 font-bold">42 / 100</span>
          </div>
        </div>

        {/* Your New TECHNAVIA Site */}
        <div className="rounded-xl p-4 bg-[#D4F542]/[0.05] border border-[#D4F542]/40 flex flex-col justify-between gap-3 relative shadow-[0_0_24px_rgba(212,245,66,0.12)]">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#D4F542] font-semibold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-[#D4F542]" />
              YOUR NEW TECHNAVIA SITE
            </span>
          </div>

          <div className="flex flex-col gap-2 text-xs font-sans text-white/90 leading-relaxed">
            <div className="flex items-start gap-1.5 text-[#D4F542] font-mono text-[11px]">
              <span>✓</span>
              <span>Opens instantly on any phone</span>
            </div>
            <div className="flex items-start gap-1.5 text-[#D4F542] font-mono text-[11px]">
              <span>✓</span>
              <span>Built to convert ad clicks</span>
            </div>
            <div className="flex items-start gap-1.5 text-[#D4F542] font-mono text-[11px]">
              <span>✓</span>
              <span>Ready to rank on Google</span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#D4F542]/20 flex justify-between text-[11px] font-mono">
            <span className="text-white/70">Speed Score</span>
            <span className="text-[#D4F542] font-bold">98 / 100</span>
          </div>
        </div>
      </div>

      {/* Bottom KPI strip */}
      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <Gauge className="w-4 h-4 text-[#D4F542]" />
          <span className="text-white/80">Loads in under 1 second</span>
        </div>
        <span className="text-[#D4F542] font-semibold flex items-center gap-1">
          <Check className="w-3.5 h-3.5" />
          100% Yours to Own
        </span>
      </div>
    </div>
  );
}

export default WebDevHeroMockup;
