"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TOOLS = [
  "Next.js",
  "TypeScript",
  "Vercel",
  "Google Search Console",
  "Schema.org",
  "OpenAI",
  "Claude",
  "Perplexity",
  "n8n",
  "Make",
  "HubSpot",
  "Stripe",
];

export function WorksWithStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  // Scroll animation: The green thread line starts flat along the bottom of the strip,
  // and as the user scrolls, the right end rises up so the line tilts and becomes slant.
  const { scrollYProgress } = useScroll({
    target: stripRef,
    offset: ["start end", "end start"],
  });

  const lineY2 = useTransform(scrollYProgress, [0.15, 0.85], ["98%", "15%"]);

  return (
    <section
      ref={stripRef}
      className="relative w-full bg-[#0B0D10] text-[#F8F8F5] pt-10 pb-12 border-t border-b border-white/[0.08] overflow-hidden"
    >
      {/* Top: WORKS WITH pill shifted upwards matching Image 1 */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-14 mb-6">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542,0_0_20px_rgba(212,245,66,0.8)]" />
          <span className="text-xs font-mono uppercase tracking-[0.16em] text-white/80 font-semibold">
            WORKS WITH
          </span>
        </div>
      </div>

      {/* Marquee with large typography & glowing bullet points - moving freely underneath */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        {/* Left & Right edge fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 z-10 w-16 md:w-28 bg-gradient-to-r from-[#0B0D10] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-16 md:w-28 bg-gradient-to-l from-[#0B0D10] to-transparent pointer-events-none" />

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
              <span className="text-2xl sm:text-3xl md:text-[36px] font-tight font-medium text-white tracking-tight hover:text-[#D4F542] transition-colors cursor-default">
                {tool}
              </span>
              {/* Glowing lime bullet point matching Image 3 */}
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542,0_0_20px_rgba(212,245,66,0.8)] flex-shrink-0 mx-5 sm:mx-7 md:mx-9" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Animated slanted green thread line with enhanced glow */}
      <div className="relative w-full h-12 mt-4 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="0%"
            y1="98%"
            x2="100%"
            y2={lineY2}
            stroke="#D4F542"
            strokeWidth="1.5"
            className="drop-shadow-[0_0_8px_#D4F542] drop-shadow-[0_0_16px_rgba(212,245,66,0.8)]"
          />
        </svg>
      </div>
    </section>
  );
}
