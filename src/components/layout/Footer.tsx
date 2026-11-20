"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Footer() {
  const [londonTime, setLondonTime] = useState("09:21");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        };
        setLondonTime(new Intl.DateTimeFormat("en-GB", options).format(now));
      } catch (e) {
        setLondonTime("09:21");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full bg-[#07080A] text-[#F8F8F5] overflow-hidden">
      {/* Upper Main Footer Deck (lifts up to reveal the watermark underneath) */}
      <div className="relative z-10 bg-[#0B0D10] border-t border-white/[0.08] pt-24 pb-20 px-6 md:px-14 rounded-b-[36px] sm:rounded-b-[48px] shadow-[0_24px_60px_rgba(0,0,0,0.95)]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column Headline & CTA */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[0.98]">
                Your business, <br />
                <span className="text-[#D4F542]">running itself.</span>
              </h2>

              <div>
                <Button href="/book" variant="solid" className="w-fit">
                  Book a call
                </Button>
              </div>
            </div>

            {/* Right Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
              {/* Col 1: Agency */}
              <div className="flex flex-col gap-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-white/50 border-b border-white/[0.08] pb-2">
                  AGENCY
                </span>
                <ul className="flex flex-col gap-3 text-sm font-medium text-white/80 font-sans">
                  <li>
                    <Link
                      href="/workflows"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      Workflows
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/results"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      Results
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/process"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      Process
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 2: Company */}
              <div className="flex flex-col gap-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-white/50 border-b border-white/[0.08] pb-2">
                  COMPANY
                </span>
                <ul className="flex flex-col gap-3 text-sm font-medium text-white/80 font-sans">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      Insights
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 3: Contact */}
              <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-white/50 border-b border-white/[0.08] pb-2">
                  CONTACT
                </span>
                <div className="flex flex-col gap-3 text-sm text-white/80 font-sans">
                  <a
                    href="mailto:hello@runbookops.agency"
                    className="hover:text-[#D4F542] transition-colors break-all font-medium"
                  >
                    hello@runbookops.agency
                  </a>
                  <span className="text-xs font-mono text-white/50">
                    London · remote-first
                  </span>
                  <div className="flex items-center gap-3 pt-2 text-xs font-mono font-bold tracking-wider uppercase text-white/70">
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      LINKEDIN
                    </a>
                    <span>·</span>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      X
                    </a>
                    <span>·</span>
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      YOUTUBE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Underlying Curtain Reveal Layer (Giant Runbook Watermark + Live Status) */}
      <div className="relative z-0 pt-16 pb-12 px-6 md:px-14 bg-[#07080A]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          {/* Top of reveal drawer: Huge Watermark + Live Office card */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            {/* Watermark Logo */}
            <div className="flex items-center gap-4 select-none pointer-events-none">
              <span className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[#D4F542] shadow-[0_0_30px_#D4F542]" />
              <span className="text-6xl sm:text-8xl lg:text-[140px] font-tight font-extrabold text-white/20 tracking-tighter leading-none">
                Runbook
              </span>
            </div>

            {/* Live London Widget Card matching sec_180.jpg */}
            <div className="relative w-full sm:w-80 h-24 rounded-2xl overflow-hidden border border-white/[0.12] bg-zinc-950 flex flex-col justify-end p-3.5">
              <img
                src="https://framerusercontent.com/images/D5vywc1iZWqwCmhbjYFnlcV21C0.webp?scale-down-to=2048"
                alt="London Office"
                className="absolute inset-0 w-full h-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] animate-pulse" />
                  <span className="text-white font-medium">
                    LONDON · {londonTime}
                  </span>
                </div>
                <span className="text-[#D4F542] text-[11px] font-bold">
                  3 WORKFLOWS RUNNING
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Legal Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/[0.08] text-xs font-mono text-white/50">
            <div className="flex flex-wrap items-center gap-6">
              <span>© 2026 Runbook</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>

            <div className="text-white/40 uppercase tracking-widest text-[11px]">
              RUNS ON ZAPIER · MAKE · N8N · CUSTOM AGENTS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
