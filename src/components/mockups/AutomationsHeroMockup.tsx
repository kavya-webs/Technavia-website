"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle2, Clock, Zap, ArrowRight, Activity } from "lucide-react";

export function AutomationsHeroMockup() {
  const steps = [
    {
      time: "00:01s",
      title: "Ad or Website Lead Received",
      desc: "Instant capture from website forms, Meta Ads, or LinkedIn Lead Gen",
      tag: "TRIGGER",
    },
    {
      time: "00:15s",
      title: "Company Researched & Lead Qualified by AI",
      desc: "Enriches company details & scores prospect against your exact ICP",
      tag: "ENRICHED",
    },
    {
      time: "00:40s",
      title: "Personalized Email/WhatsApp + Booking Link Sent",
      desc: "Prospect receives tailored outreach with calendar link in seconds",
      tag: "ENGAGED",
    },
    {
      time: "00:45s",
      title: "CRM Updated & Sales Team Notified in Slack",
      desc: "HubSpot/Salesforce synced & team gets executive pre-call brief",
      tag: "RESOLVED",
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl sm:rounded-3xl bg-[#14161A]/95 border border-white/[0.14] p-5 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col gap-4 backdrop-blur-xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4F542]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#D4F542] animate-pulse" />
          <span className="text-[11px] font-mono text-white/50">LIVE AUTONOMOUS EXECUTION BUS</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D4F542]/10 text-[#D4F542] border border-[#D4F542]/30 font-semibold uppercase">
          0.42s TOTAL DURATION
        </span>
      </div>

      {/* Live Pipeline Steps */}
      <div className="flex flex-col gap-2.5">
        {steps.map((st, idx) => (
          <motion.div
            key={st.time}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#D4F542]/40 transition-all flex items-start gap-3 relative group"
          >
            {/* Active pulse dot */}
            <div className="relative mt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] block shadow-[0_0_8px_#D4F542]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] absolute inset-0 animate-ping opacity-75" />
            </div>

            <div className="flex-1 flex flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-tight font-semibold text-[#F8F8F5]">
                  {st.title}
                </span>
                <span className="text-[10px] font-mono font-bold text-[#D4F542] bg-[#D4F542]/10 px-1.5 py-0.5 rounded">
                  {st.time}
                </span>
              </div>
              <p className="text-[11px] text-white/60 leading-relaxed font-sans">
                {st.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom KPI strip */}
      <div className="p-3 rounded-xl bg-[#D4F542]/[0.05] border border-[#D4F542]/30 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-white">
          <Zap className="w-4 h-4 text-[#D4F542]" />
          <span>Sub-60s Inbound Guarantee</span>
        </div>
        <span className="text-[#D4F542] font-semibold">Zero Monthly Zapier Tax</span>
      </div>
    </div>
  );
}

export default AutomationsHeroMockup;
