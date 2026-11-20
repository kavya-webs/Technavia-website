"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Footer() {
  const [londonTime, setLondonTime] = useState("02:20");

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
        setLondonTime("02:20");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full">
      {/* Upper Dark Tier */}
      <div className="bg-[#0B0D10] text-[#F8F8F5] pt-24 pb-20 px-6 md:px-14 border-t border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          {/* Big Typography Brand */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-6xl font-tight font-semibold tracking-tight text-[#F8F8F5]">
              Your business,
              <br />
              <span className="text-[#D4F542]">running itself.</span>
            </h2>
            <Button href="/book" variant="solid" className="w-fit">
              Book a call
            </Button>
          </div>

          {/* Right Live London Widget */}
          <div className="flex flex-col gap-3">
            <div className="relative w-72 md:w-80 h-32 rounded-xl overflow-hidden border border-white/[0.1]">
              {/* Background representation of office at night */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900 to-zinc-800" />
              <div className="absolute inset-0 bg-[radial-gradient(#D4F542_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/[0.1] text-xs font-mono flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                  <span>London · {londonTime}</span>
                </span>
                <span className="text-[#D4F542]">3 workflows live</span>
              </div>
            </div>
            <p className="text-xs text-white/50 font-mono tracking-wider">
              GLOBAL WORKFLOW DISPATCH · REMOTE-FIRST
            </p>
          </div>
        </div>
      </div>

      {/* Lower Light Tier (Bone / Paper) */}
      <div className="bg-[#F2F3EE] text-[#14161A] pt-16 pb-12 px-6 md:px-14 border-t border-[#14161A]/10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 mb-16">
          {/* Col 1: Agency */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#14161A]/60">
              Agency
            </span>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-[#14161A]/80">
              <li>
                <Link href="/workflows" className="hover:text-black transition-colors">
                  Workflows
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-black transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-black transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-black transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-black transition-colors">
                  Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Company */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#14161A]/60">
              Company
            </span>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-[#14161A]/80">
              <li>
                <Link href="/about" className="hover:text-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-black transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-black transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-black transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#14161A]/60">
              Contact
            </span>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-[#14161A]/80">
              <li>
                <a
                  href="mailto:hello@runbookops.agency"
                  className="hover:text-black transition-colors break-all"
                >
                  hello@runbookops.agency
                </a>
              </li>
              <li className="text-xs text-[#14161A]/60 font-mono">London · remote-first</li>
              <li>
                <Link href="/book" className="text-xs font-semibold underline underline-offset-4">
                  Book a screen share →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Socials */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#14161A]/60">
              Network
            </span>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-[#14161A]/80">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="max-w-[1280px] mx-auto pt-8 border-t border-[#14161A]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#14161A]/70">
          <div className="flex items-center gap-6">
            <span>© 2026 Runbook</span>
            <Link href="/privacy" className="hover:text-black transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-black transition-colors">
              Cookies
            </Link>
          </div>
          <div>Runs on Zapier · Make · n8n · Custom AI Agents</div>
        </div>
      </div>
    </footer>
  );
}
