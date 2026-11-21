"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function Footer() {
  const [londonTime, setLondonTime] = useState("14:37");
  const [logoHovered, setLogoHovered] = useState(false);

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
        setLondonTime("14:37");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="relative w-full z-0 overflow-hidden lg:min-h-[720px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      {/* Desktop spacer to allow natural scrolling to uncover the fixed curtain reveal footer */}
      <div className="hidden lg:block relative w-full h-[720px] pointer-events-none opacity-0" />

      {/* Footer Body: Static on mobile, fixed at bottom behind <main> on desktop for the curtain reveal */}
      <div className="lg:fixed lg:bottom-0 lg:left-0 w-full lg:h-[720px] bg-[#07080A] text-[#F8F8F5] flex flex-col justify-between pt-16 pb-10 px-6 md:px-14 z-0">
        <div className="max-w-[1280px] w-full mx-auto flex flex-col justify-between h-full gap-12">
          {/* Top Row: Headline & Navigation Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Headline & CTA */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[0.98]">
                Your business, <br />
                <span className="text-[#D4F542]">running itself.</span>
              </h2>

              <div>
                <Button href="/book" variant="solid">
                  Book a call
                </Button>
              </div>
            </div>

            {/* Right Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Col 1: Agency */}
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-white/45 border-b border-white/[0.08] pb-2">
                  AGENCY
                </span>
                <ul className="flex flex-col gap-2.5 text-sm font-medium text-white/80 font-sans">
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
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-white/45 border-b border-white/[0.08] pb-2">
                  COMPANY
                </span>
                <ul className="flex flex-col gap-2.5 text-sm font-medium text-white/80 font-sans">
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
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 3: Contact */}
              <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-white/45 border-b border-white/[0.08] pb-2">
                  CONTACT
                </span>
                <div className="flex flex-col gap-2.5 text-sm text-white/80 font-sans">
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

          {/* Center Giant Row: Giant Runbook Logo Card with Green Slide Hover + London Widget */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-auto">
            {/* Giant Logo Card with sliding green block hover effect */}
            <div
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
              className="lg:col-span-8 relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/[0.12] bg-[#0E1116] px-8 sm:px-12 py-6 sm:py-8 flex items-center cursor-pointer select-none group"
            >
              {/* Base Layer: White text & Lime glowing dot */}
              <div className="flex items-center gap-5 sm:gap-8 select-none">
                <span className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[#D4F542] shadow-[0_0_24px_#D4F542] flex-shrink-0" />
                <span className="text-6xl sm:text-8xl lg:text-[130px] font-tight font-extrabold text-[#F8F8F5] tracking-tighter leading-none">
                  Runbook
                </span>
              </div>

              {/* Sliding Neon Lime Green Box Overlay Layer */}
              <motion.div
                className="absolute inset-0 bg-[#D4F542] flex items-center px-8 sm:px-12 py-6 sm:py-8 overflow-hidden pointer-events-none"
                initial={false}
                animate={{
                  clipPath: logoHovered
                    ? "inset(0% 0% 0% 0%)"
                    : "inset(0% 100% 0% 0%)",
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-5 sm:gap-8 select-none">
                  <span className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-black flex-shrink-0" />
                  <span className="text-6xl sm:text-8xl lg:text-[130px] font-tight font-extrabold text-black tracking-tighter leading-none">
                    Runbook
                  </span>
                </div>
              </motion.div>
            </div>

            {/* London Live Widget Card matching sec_180.jpg & video */}
            <div className="lg:col-span-4 relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/[0.12] bg-zinc-950 flex flex-col justify-end p-6 min-h-[140px] sm:min-h-[160px]">
              <img
                src="https://framerusercontent.com/images/D5vywc1iZWqwCmhbjYFnlcV21C0.webp?scale-down-to=2048"
                alt="London Office Night Sky"
                className="absolute inset-0 w-full h-full object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542] animate-pulse" />
                  <span className="text-white font-medium">
                    LONDON · {londonTime}
                  </span>
                </div>
                <span className="text-[#D4F542] text-[11px] font-bold tracking-wider">
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

            <div className="text-white/45 uppercase tracking-widest text-[11px]">
              RUNS ON ZAPIER · MAKE · N8N · CUSTOM AGENTS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
