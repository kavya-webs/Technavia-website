"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { TechnaviaLogo } from "../ui/TechnaviaLogo";

export function Footer() {
  const [logoHovered, setLogoHovered] = useState(false);
  const pathname = usePathname();

  if (pathname?.startsWith("/lp")) {
    return null;
  }

  return (
    <footer
      className="relative w-full z-0 overflow-hidden lg:min-h-[720px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      {/* Desktop spacer to allow natural scrolling to uncover the fixed curtain reveal footer */}
      <div className="hidden lg:block relative w-full h-[720px] pointer-events-none opacity-0" />

      {/* Footer Body: Static on mobile, fixed at bottom behind <main> on desktop for the curtain reveal */}
      <div className="lg:fixed lg:bottom-0 lg:left-0 w-full lg:h-[720px] bg-[#07080A] text-[#F8F8F5] flex flex-col justify-between pt-16 pb-10 px-6 md:px-8 lg:px-14 z-0">
        <div className="max-w-[1280px] w-full mx-auto flex flex-col justify-between h-full gap-12">
          {/* Top Row: Headline & Navigation Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Headline & CTA */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[0.98]">
                Websites engineered, <br />
                <span className="text-[#D4F542]">running on Google & AI.</span>
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
                  DISCIPLINES
                </span>
                <ul className="flex flex-col gap-2.5 text-sm font-medium text-white/80 font-sans">
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      Services
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
                      href="/process"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      Stack
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
                      href="/process"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="hover:text-[#D4F542] transition-colors"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
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
                    href="mailto:contact@technavia.com"
                    className="hover:text-[#D4F542] transition-colors whitespace-nowrap font-medium"
                  >
                    contact@technavia.com
                  </a>
                  <span className="text-xs font-mono text-white/50">
                    Remote-First · Serving B2B Teams Worldwide
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Giant Row: Giant TECHNAVIA Logo Card with Green Slide Hover + London Widget */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-auto">
            {/* Giant Logo Card with sliding green block hover effect */}
            <div
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
              onClick={() => setLogoHovered(!logoHovered)}
              className="lg:col-span-8 relative overflow-hidden rounded-[24px] sm:rounded-[36px] border border-white/[0.12] bg-[#0E1116] px-5 sm:px-8 lg:px-12 py-5 sm:py-7 lg:py-8 flex items-center cursor-pointer select-none group"
            >
              {/* Base Layer: White text & Lime 6-node network icon */}
              <div className="flex items-center select-none py-1 sm:py-2">
                <TechnaviaLogo
                  variant="horizontal"
                  symbolSize={42}
                  wordmarkHeight={26}
                  className="max-w-full sm:hidden"
                />
                <TechnaviaLogo
                  variant="horizontal"
                  symbolSize={58}
                  wordmarkHeight={38}
                  className="max-w-full hidden sm:flex"
                />
              </div>

              {/* Sliding Neon Lime Green Box Overlay Layer */}
              <motion.div
                className="absolute inset-0 bg-[#D4F542] flex items-center px-5 sm:px-8 lg:px-12 py-5 sm:py-7 lg:py-8 overflow-hidden pointer-events-none"
                initial={false}
                animate={{
                  clipPath: logoHovered
                    ? "inset(0% 0% 0% 0%)"
                    : "inset(0% 100% 0% 0%)",
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center select-none py-1 sm:py-2">
                  <TechnaviaLogo
                    variant="horizontal"
                    symbolSize={42}
                    wordmarkHeight={26}
                    symbolColor="#000000"
                    wordmarkColor="#000000"
                    className="max-w-full sm:hidden"
                  />
                  <TechnaviaLogo
                    variant="horizontal"
                    symbolSize={58}
                    wordmarkHeight={38}
                    symbolColor="#000000"
                    wordmarkColor="#000000"
                    className="max-w-full hidden sm:flex"
                  />
                </div>
              </motion.div>
            </div>

            {/* Live Operational Status Widget Card */}
            <div className="lg:col-span-4 relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/[0.12] bg-[#0E1116] flex flex-col justify-between p-6 min-h-[140px] sm:min-h-[160px]">
              {/* Dark-Tech Circuit / Grid Background Pattern */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="footer-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="#D4F542" />
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#footer-grid)" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/60 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/50">
                <span className="uppercase tracking-widest text-[10px]">GLOBAL TELEMETRY</span>
                <span className="text-[#D4F542] text-[10px] font-bold tracking-wider">ALL NODES ONLINE</span>
              </div>

              <div className="relative z-10 flex items-center justify-between text-xs font-mono pt-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542] animate-pulse" />
                  <span className="text-white font-medium">
                    Remote-First · Serving B2B Teams Worldwide
                  </span>
                </div>
                <span className="text-[#D4F542] text-[11px] font-bold tracking-wider hidden sm:inline">
                  3 SYSTEMS ACTIVE
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Legal Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/[0.08] text-xs font-mono text-white/50">
            <div className="flex flex-wrap items-center gap-6">
              <span>© 2026 TECHNAVIA</span>
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
              BUILT TO RANK · AUTOMATED TO SCALE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
