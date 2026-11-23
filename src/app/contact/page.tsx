import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact TECHNAVIA — Direct Engineering Line & Loom Audit",
  description:
    "Direct line to senior web architects and AI engineers. Remote-first, serving B2B teams worldwide. Zero SDR layers, zero automated sales funnels. Response within 24 hours.",
  alternates: {
    canonical: "https://technaviatechnology.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      {/* Subpage Hero with Photographic Background & Split-Line Animation */}
      <SubpageHero
        pageName="Contact"
        parentCrumb={{ label: "Company", href: "/about" }}
        titleLine1="Write to"
        titleLine2="the desk."
        subtitle="Direct line to senior web architects and AI engineers. Remote-first, serving B2B teams worldwide."
        backgroundImage="/images/questions/base_office.jpg"
        wireframeNumber="24"
        statusPills={[
          { text: "DESK ONLINE", variant: "brass" },
          { text: "< 24H RESPONSE TIME", variant: "ghost" },
          { text: "REMOTE-FIRST · WORLDWIDE", variant: "outline" },
        ]}
      />

      {/* Main Content Area: Left Details Card & Right Upgraded Glassmorphic Form */}
      <section className="py-20 md:py-28 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Information Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Fast-Moving Buyers Shortcut Card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#14161A] to-[#0E1116] border border-[#D4F542]/40 flex flex-col gap-4 shadow-[0_0_30px_rgba(212,245,66,0.12)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
                Want a faster breakdown?
              </span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed font-sans">
              Skip the back-and-forth email. Request a free 5-minute Loom audit of your site, SEO, and AI visibility.
            </p>
            <Link
              href="/book"
              className="mt-1 inline-flex items-center justify-between px-5 py-3 rounded-full bg-[#D4F542] hover:bg-[#c3e634] text-black font-tight font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_16px_rgba(212,245,66,0.25)]"
            >
              <span>Book 20-Min Audit Call</span>
              <span className="font-bold">→</span>
            </Link>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/[0.12] backdrop-blur-xl flex flex-col gap-7 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
            {/* Direct Email */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
                  Direct Line
                </span>
              </div>
              <a
                href="mailto:contact@technavia.com"
                className="text-xl sm:text-2xl font-tight font-semibold text-white hover:text-[#D4F542] transition-colors whitespace-nowrap"
              >
                contact@technavia.com
              </a>
            </div>

            {/* Base Location */}
            <div className="pt-6 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block mb-2">
                Base
              </span>
              <div className="text-base text-white/90 font-medium">Remote-First · Serving B2B Teams Worldwide</div>
              <div className="text-xs font-mono text-[#D4F542] mt-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]" />
                <span>Global coverage (async & live engineering support)</span>
              </div>
            </div>

            {/* Response Commitment */}
            <div className="pt-6 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block mb-2">
                Response Commitment
              </span>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                Every inbound enquiry is answered by a senior web architect who writes code.
                No SDR outreach, no automated nurture sequences.
              </p>
            </div>

            {/* Retainer SLA */}
            <div className="pt-6 border-t border-white/[0.08] p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-[#D4F542] uppercase tracking-wider block mb-1 font-semibold">
                Existing Retainer Clients
              </span>
              <p className="text-xs text-white/60 leading-relaxed font-sans">
                Use your private Slack Connect channel for immediate incident triage and same-day workflow adjustments.
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
