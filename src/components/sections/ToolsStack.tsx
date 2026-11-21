"use client";

import React, { useState, useEffect, useRef } from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";

interface ToolCardData {
  id: string;
  num: string;
  category: string;
  name: string;
  description: string;
  connectsTo: string;
  meta: string;
}

const LEFT_TOOLS: ToolCardData[] = [
  {
    id: "crm",
    num: "01",
    category: "SALES",
    name: "CRM",
    description:
      "Every lead, deal and note in one place, kept current by the workflows rather than by people.",
    connectsTo: "HubSpot, Pipedrive, Salesforce",
    meta: "USED IN 4 WORKFLOWS • SINCE 2019",
  },
  {
    id: "inbox",
    num: "03",
    category: "COMMS",
    name: "Inbox",
    description: "Mail read, sorted and drafted before you open it.",
    connectsTo: "Gmail, Outlook, Slack",
    meta: "USED IN 5 WORKFLOWS • SINCE 2020",
  },
  {
    id: "docs",
    num: "05",
    category: "DATA",
    name: "Docs",
    description: "Contracts, folders and boards created the moment they are needed.",
    connectsTo: "DocuSign, Notion, Google Workspace",
    meta: "USED IN 3 WORKFLOWS • SINCE 2020",
  },
];

const RIGHT_TOOLS: ToolCardData[] = [
  {
    id: "invoicing",
    num: "02",
    category: "FINANCE",
    name: "Invoicing",
    description: "Quotes become invoices, invoices become reconciled cash.",
    connectsTo: "Xero, QuickBooks, Stripe",
    meta: "USED IN 3 WORKFLOWS • SINCE 2019",
  },
  {
    id: "helpdesk",
    num: "04",
    category: "SUPPORT",
    name: "Helpdesk",
    description:
      "Tickets tagged, answered from your own articles and escalated with the history attached.",
    connectsTo: "Intercom, Zendesk, Help Scout",
    meta: "USED IN 2 WORKFLOWS • SINCE 2021",
  },
  {
    id: "reporting",
    num: "06",
    category: "DATA",
    name: "Reporting",
    description: "The figures pulled overnight and written morning.",
    connectsTo: "Google Sheets, Metabase, Notion",
    meta: "USED IN 4 WORKFLOWS • SINCE 2021",
  },
];

interface WirePath {
  id: string;
  d: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: string;
}

export function ToolsStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [wires, setWires] = useState<WirePath[]>([]);

  useEffect(() => {
    const computeWires = () => {
      if (!containerRef.current || !hubRef.current) return;
      if (window.innerWidth < 1024) {
        setWires([]);
        return;
      }

      const cRect = containerRef.current.getBoundingClientRect();
      const hRect = hubRef.current.getBoundingClientRect();

      const hubLeftX = hRect.left - cRect.left;
      const hubRightX = hRect.right - cRect.left;
      const hubTopY = hRect.top - cRect.top + hRect.height * 0.22;
      const hubMidY = hRect.top - cRect.top + hRect.height * 0.5;
      const hubBotY = hRect.top - cRect.top + hRect.height * 0.78;

      const newWires: WirePath[] = [];

      // Left cards (01 CRM, 03 Inbox, 05 Docs)
      LEFT_TOOLS.forEach((tool, i) => {
        const cardEl = cardRefs.current[tool.id];
        if (!cardEl) return;
        const cardRect = cardEl.getBoundingClientRect();

        const endX = cardRect.right - cRect.left;
        const endY = cardRect.top - cRect.top + cardRect.height * 0.5;

        const startX = hubLeftX;
        const startY = i === 0 ? hubTopY : i === 1 ? hubMidY : hubBotY;

        const dx = startX - endX;
        const d =
          i === 1
            ? `M ${startX} ${startY} L ${endX} ${endY}`
            : `M ${startX} ${startY} C ${startX - dx * 0.45} ${startY}, ${
                endX + dx * 0.45
              } ${endY}, ${endX} ${endY}`;

        newWires.push({
          id: tool.id,
          d,
          startX,
          startY,
          endX,
          endY,
          delay: `${i * 0.45}s`,
        });
      });

      // Right cards (02 Invoicing, 04 Helpdesk, 06 Reporting)
      RIGHT_TOOLS.forEach((tool, i) => {
        const cardEl = cardRefs.current[tool.id];
        if (!cardEl) return;
        const cardRect = cardEl.getBoundingClientRect();

        const endX = cardRect.left - cRect.left;
        const endY = cardRect.top - cRect.top + cardRect.height * 0.5;

        const startX = hubRightX;
        const startY = i === 0 ? hubTopY : i === 1 ? hubMidY : hubBotY;

        const dx = endX - startX;
        const d =
          i === 1
            ? `M ${startX} ${startY} L ${endX} ${endY}`
            : `M ${startX} ${startY} C ${startX + dx * 0.45} ${startY}, ${
                endX - dx * 0.45
              } ${endY}, ${endX} ${endY}`;

        newWires.push({
          id: tool.id,
          d,
          startX,
          startY,
          endX,
          endY,
          delay: `${(i + 3) * 0.4}s`,
        });
      });

      setWires(newWires);
    };

    computeWires();
    window.addEventListener("resize", computeWires);
    const observer = new ResizeObserver(computeWires);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", computeWires);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-36 px-6 md:px-14 border-t border-white/[0.08] overflow-hidden">
      {/* Background Photography: team in glass meeting room with lighter tint */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/1RRozVJo6j9BUUQiWVOOruiGIKg.webp?scale-down-to=2048"
          alt="A team talking in a glass-walled office at dusk, the city lit behind them"
          className="w-full h-full object-cover object-[50%_50%] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10]/80 via-transparent to-[#0B0D10]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/75 via-transparent to-[#0B0D10]/75" />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel>Tools</SectionLabel>
            <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1]">
              Your stack, <span className="text-[#D4F542]">wired.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-5 max-w-md">
            <p className="text-base text-white/60 leading-relaxed font-sans md:text-right">
              We do not replace the tools your team already pays for. We connect
              them, so a change in one shows up in all the others before anyone
              has to type it twice.
            </p>
            <Button href="/book" variant="ghost" hasArrow={false} hasLamp={true} className="!h-[42px] !text-xs">
              Book a stack audit
            </Button>
          </div>
        </div>

        {/* Interactive Stack Map - 3 Columns with Horizontal Hub Rectangle & Animated Travelling Glowing Balls */}
        <div ref={containerRef} className="relative w-full my-6">
          {/* Dynamic SVG Overlay for Connecting Lines and Traveling Glowing Balls */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible hidden lg:block"
            aria-hidden="true"
          >
            <defs>
              <filter id="ball-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {wires.map((w) => (
              <g key={w.id}>
                {/* Connecting thin green wire */}
                <path
                  d={w.d}
                  fill="none"
                  stroke="#D4F542"
                  strokeWidth="1.2"
                  strokeOpacity="0.45"
                />

                {/* Connection dot at card */}
                <circle
                  cx={w.endX}
                  cy={w.endY}
                  r="3.5"
                  fill="#D4F542"
                  className="drop-shadow-[0_0_8px_#D4F542]"
                />

                {/* Connection dot at center hub */}
                <circle
                  cx={w.startX}
                  cy={w.startY}
                  r="2.5"
                  fill="#D4F542"
                  fillOpacity="0.8"
                />

                {/* Small green glowing ball traveling endlessly from center box to respected card */}
                <circle r="4" fill="#D4F542" filter="url(#ball-glow)">
                  <animateMotion
                    dur="2.8s"
                    repeatCount="indefinite"
                    path={w.d}
                    begin={w.delay}
                  />
                </circle>
              </g>
            ))}
          </svg>

          {/* Grid Layout: Left 3 Cards | Center Rectangle Hub | Right 3 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (01 CRM, 03 Inbox, 05 Docs) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {LEFT_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  ref={(el) => {
                    cardRefs.current[tool.id] = el;
                  }}
                  className="relative p-6 sm:p-7 rounded-2xl bg-[#0B0D10]/85 border border-white/[0.12] hover:border-white/30 transition-all duration-300 backdrop-blur-md shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-[#D4F542] font-semibold">{tool.num}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/[0.08] text-white/80 text-[10px] uppercase tracking-wider">
                        {tool.category}
                      </span>
                    </div>
                    <h4 className="text-2xl font-tight font-semibold text-white tracking-tight mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                      {tool.description}
                    </p>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#D4F542] font-semibold mb-1">
                      CONNECTS TO
                    </div>
                    <div className="text-xs font-mono text-white/90">
                      {tool.connectsTo}
                    </div>
                    <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mt-3 pt-3 border-t border-white/[0.08]">
                      {tool.meta}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Hub: Horizontal Rectangle matching reference image */}
            <div className="lg:col-span-4 flex items-center justify-center py-6">
              <div
                ref={hubRef}
                className="relative w-full max-w-[320px] h-[165px] rounded-2xl bg-[#0B0D10]/95 border border-[#D4F542] shadow-[0_0_28px_rgba(212,245,66,0.25)] flex flex-col items-center justify-center p-6 text-center backdrop-blur-2xl"
              >
                {/* Glowing neon green center bulb */}
                <span className="relative flex items-center justify-center mb-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#D4F542] shadow-[0_0_12px_#D4F542,0_0_24px_rgba(212,245,66,0.85)]" />
                  <span className="absolute -inset-1.5 rounded-full border border-[#D4F542] animate-ping opacity-60" />
                </span>

                <div className="text-3xl sm:text-[34px] font-tight font-bold text-white tracking-tight leading-none mb-1">
                  Runbook
                </div>

                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-[#D4F542] font-semibold">
                  RUNS THE WORKFLOWS BETWEEN THEM
                </span>
              </div>
            </div>

            {/* Right Column (02 Invoicing, 04 Helpdesk, 06 Reporting) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {RIGHT_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  ref={(el) => {
                    cardRefs.current[tool.id] = el;
                  }}
                  className="relative p-6 sm:p-7 rounded-2xl bg-[#0B0D10]/85 border border-white/[0.12] hover:border-white/30 transition-all duration-300 backdrop-blur-md shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-[#D4F542] font-semibold">{tool.num}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/[0.08] text-white/80 text-[10px] uppercase tracking-wider">
                        {tool.category}
                      </span>
                    </div>
                    <h4 className="text-2xl font-tight font-semibold text-white tracking-tight mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                      {tool.description}
                    </p>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#D4F542] font-semibold mb-1">
                      CONNECTS TO
                    </div>
                    <div className="text-xs font-mono text-white/90">
                      {tool.connectsTo}
                    </div>
                    <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mt-3 pt-3 border-t border-white/[0.08]">
                      {tool.meta}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
