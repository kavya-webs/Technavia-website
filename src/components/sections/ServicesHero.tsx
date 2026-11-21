"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-36 pb-16 px-6 md:px-14 bg-[#0B0D10] text-[#F8F8F5] overflow-hidden border-b border-white/[0.08]">
      {/* Background Photography: Man working at monitors in dimmed office at dusk */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/workflows/clean_hero_120.jpg"
          alt="Workflows hero background"
          className="w-full h-full object-cover object-[55%_40%] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/85 to-[#0B0D10]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]/60" />
      </div>

      {/* Top Breadcrumb & Hero Copy */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full flex flex-col gap-8 my-auto">
        {/* Breadcrumb matching video */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-white/50"
        >
          <Link href="/" className="hover:text-white transition-colors">
            HOME
          </Link>
          <span>/</span>
          <span className="flex items-center gap-1.5 text-white/90">
            <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
            SERVICES
          </span>
        </motion.div>

        {/* Hero Title with masked split-line phase-in animation from bottom */}
        <h1 className="text-5xl sm:text-7xl lg:text-[96px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[0.96] max-w-5xl">
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="block"
            >
              Five workflows,
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.26 }}
              className="block text-[#D4F542]"
            >
              running on their own.
            </motion.span>
          </span>
        </h1>

        {/* Subhead text phasing in */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl text-white/75 leading-relaxed font-sans max-w-2xl"
        >
          Invoicing, lead routing, support, onboarding and reporting, wired into the tools you
          already use. Each one runs at night and reports in the morning.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <Link
            href="/book"
            className="group inline-flex items-center gap-3 bg-[#F0F2E8] hover:bg-white text-black pl-6 pr-2.5 py-2.5 rounded-full font-tight font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <span>Book a call</span>
            <span className="w-8 h-8 rounded-full bg-[#D4F542] flex items-center justify-center text-black text-xs font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              ↗
            </span>
          </Link>

          <Link
            href="/results"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white text-sm font-tight font-semibold transition-colors border border-white/[0.1]"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_6px_#D4F542]" />
            <span>See results</span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Pills Row matching video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="relative z-10 max-w-[1280px] mx-auto w-full pt-12 border-t border-white/[0.08] flex flex-wrap items-center gap-3"
      >
        <span className="px-4 py-2 rounded-full bg-[#D4F542] text-black font-mono text-xs font-semibold uppercase tracking-wider shadow-[0_0_12px_rgba(212,245,66,0.3)]">
          1,284 TASKS LAST NIGHT
        </span>
        <span className="px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] text-white/80 font-mono text-xs uppercase tracking-wider">
          FIXED PLAN AUDIT TO AUTOPILOT
        </span>
        <span className="px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] text-white/80 font-mono text-xs uppercase tracking-wider">
          5 WORKFLOWS
        </span>
      </motion.div>
    </section>
  );
}
