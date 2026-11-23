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
          <span className="text-[11px] font-mono text-white/40 ml-2">CORE WEB VITALS BENCHMARK</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D4F542]/10 text-[#D4F542] border border-[#D4F542]/30 font-semibold">
          REAL-WORLD AUDIT
        </span>
      </div>

      {/* Comparison Cards: Old Template vs TECHNAVIA Build */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative">
        {/* Old Template */}
        <div className="rounded-xl p-3.5 bg-white/[0.03] border border-red-500/20 flex flex-col gap-2.5 relative">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-red-400 font-semibold flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              OLD TEMPLATE
            </span>
            <span className="text-white/40">WordPress/Webflow</span>
          </div>

          <div className="flex flex-col gap-1.5 pt-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-white/60">Mobile LCP</span>
              <span className="text-red-400 font-bold">4.2s (Poor)</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
              <div className="h-full bg-red-500/70 w-[35%]" />
            </div>

            <div className="flex justify-between text-[11px] font-mono pt-1">
              <span className="text-white/60">Lighthouse Score</span>
              <span className="text-yellow-400 font-bold">54 / 100</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
              <div className="h-full bg-yellow-500/70 w-[54%]" />
            </div>

            <div className="flex justify-between text-[11px] font-mono pt-1">
              <span className="text-white/60">Avg. Conversion Rate</span>
              <span className="text-white/50">1.1%</span>
            </div>
          </div>
        </div>

        {/* TECHNAVIA Next.js Build */}
        <div className="rounded-xl p-3.5 bg-[#D4F542]/[0.05] border border-[#D4F542]/40 flex flex-col gap-2.5 relative shadow-[0_0_24px_rgba(212,245,66,0.12)]">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#D4F542] font-semibold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 fill-[#D4F542]" />
              TECHNAVIA BUILD
            </span>
            <span className="text-[#D4F542] font-semibold">Next.js 16</span>
          </div>

          <div className="flex flex-col gap-1.5 pt-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-white/70">Mobile LCP</span>
              <span className="text-[#D4F542] font-bold">0.4s (Sub-second)</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "98%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]"
              />
            </div>

            <div className="flex justify-between text-[11px] font-mono pt-1">
              <span className="text-white/70">Lighthouse Score</span>
              <span className="text-[#D4F542] font-bold">99 / 100</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "99%" }}
                transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                className="h-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]"
              />
            </div>

            <div className="flex justify-between text-[11px] font-mono pt-1">
              <span className="text-white/70">Avg. Conversion Rate</span>
              <span className="text-[#D4F542] font-bold">3.4% (+209%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom KPI strip */}
      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <Gauge className="w-4 h-4 text-[#D4F542]" />
          <span className="text-white/80">95+ Mobile Score Guaranteed</span>
        </div>
        <span className="text-[#D4F542] font-semibold flex items-center gap-1">
          <Check className="w-3.5 h-3.5" />
          Passes 100% Core Web Vitals
        </span>
      </div>
    </div>
  );
}

export default WebDevHeroMockup;
