"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TOOLS = [
  "Salesforce",
  "HubSpot",
  "Xero",
  "Slack",
  "Gmail",
  "Notion",
  "Stripe",
  "Shopify",
  "Airtable",
  "QuickBooks",
];

export function WorksWithStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  // Scroll animation: The green thread line starts flat along the bottom of the strip,
  // and as the user scrolls, the right end rises up so the line tilts and becomes slant.
  const { scrollYProgress } = useScroll({
    target: stripRef,
    offset: ["start end", "end start"],
  });

  const lineY2 = useTransform(scrollYProgress, [0.15, 0.75], ["98%", "20%"]);

  return (
    <section
      ref={stripRef}
      className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-12 md:py-16 border-t border-b border-white/[0.08] overflow-hidden select-none"
    >
      {/* Animated slanted green thread line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="0%"
          y1="98%"
          x2="100%"
          y2={lineY2}
          stroke="#D4F542"
          strokeWidth="1.5"
          className="drop-shadow-[0_0_8px_rgba(212,245,66,0.7)]"
        />
      </svg>

      <div className="relative w-full flex items-center">
        {/* Left pinned badge: WORKS WITH */}
        <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center pl-6 md:pl-14 pr-8 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/95 to-transparent pointer-events-none">
          <div className="flex items-center gap-3 bg-[#0B0D10]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/[0.08]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_12px_#D4F542,0_0_24px_rgba(212,245,66,0.6)]" />
            <span className="text-xs font-mono uppercase tracking-[0.16em] text-white/80 font-semibold whitespace-nowrap">
              WORKS WITH
            </span>
          </div>
        </div>

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 z-20 w-24 md:w-32 bg-gradient-to-l from-[#0B0D10] to-transparent pointer-events-none" />

        {/* Marquee with large typography & glowing bullet points matching Image 3 */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap pl-40 md:pl-56">
          <motion.div
            className="flex items-center flex-nowrap shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 26,
              ease: "linear",
            }}
          >
            {[...TOOLS, ...TOOLS, ...TOOLS, ...TOOLS].map((tool, idx) => (
              <div key={idx} className="flex items-center shrink-0">
                <span className="text-2xl sm:text-3xl md:text-[34px] font-tight font-medium text-white tracking-tight hover:text-[#D4F542] transition-colors cursor-default">
                  {tool}
                </span>
                {/* Glowing lime bullet point matching Image 3 */}
                <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542,0_0_20px_rgba(212,245,66,0.8)] flex-shrink-0 mx-5 sm:mx-7 md:mx-9" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
