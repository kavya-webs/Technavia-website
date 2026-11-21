import React from "react";
import { Metadata } from "next";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "TECHNAVIA — Contact: Direct Engineering Line",
  description:
    "Direct line to senior web architects and AI engineers in London & SF. Zero SDR layers, zero automated sales funnels. Response within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Subpage Hero with Photographic Background & Split-Line Animation */}
      <SubpageHero
        pageName="Contact"
        titleLine1="Write to"
        titleLine2="the desk."
        subtitle="Direct line to senior automation architects in London. Zero SDR layers, zero automated sales funnels."
        backgroundImage="/images/questions/base_office.jpg"
        wireframeNumber="24"
        statusPills={[
          { text: "DESK ONLINE", variant: "brass" },
          { text: "< 24H RESPONSE TIME", variant: "ghost" },
          { text: "LONDON HQ · UTC/GMT", variant: "outline" },
        ]}
      />

      {/* Main Content Area: Left Details Card & Right Upgraded Glassmorphic Form */}
      <section className="py-20 md:py-28 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Information Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/[0.12] backdrop-blur-xl flex flex-col gap-8 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
            {/* Direct Email */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
                  Direct Line
                </span>
              </div>
              <a
                href="mailto:contact@technaviatechnology.com"
                className="text-xl sm:text-2xl font-tight font-semibold text-white hover:text-[#D4F542] transition-colors break-all"
              >
                contact@technaviatechnology.com
              </a>
            </div>

            {/* Base Location */}
            <div className="pt-6 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block mb-2">
                Base
              </span>
              <div className="text-base text-white/90 font-medium">London · Remote-First</div>
              <div className="text-xs font-mono text-[#D4F542] mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]" />
                <span>UTC / GMT timezone (desk active 08:00 – 18:30)</span>
              </div>
            </div>

            {/* Response Commitment */}
            <div className="pt-6 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block mb-2">
                Response Commitment
              </span>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                Every inbound enquiry is answered by a senior automation architect who writes code.
                No SDR outreach, no automated nurture sequences.
              </p>
            </div>

            {/* Retainer SLA */}
            <div className="pt-6 border-t border-white/[0.08] p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-[#D4F542] uppercase tracking-wider block mb-1 font-semibold">
                Existing Retainer Clients
              </span>
              <p className="text-xs text-white/60 leading-relaxed font-sans">
                Use your private Slack Connect channel for immediate incident triage and same-day workflow
                adjustments.
              </p>
            </div>
          </div>
        </div>

        {/* Right Glassmorphic Form Plate */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
