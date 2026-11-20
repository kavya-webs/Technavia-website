"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";

interface WorkflowItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  tools: string[];
  time: string;
  action: string;
  img: string;
}

const WORKFLOW_ITEMS: WorkflowItem[] = [
  {
    id: "invoicing",
    num: "01",
    title: "Invoicing",
    tagline: "Invoices out the minute a job closes, chased until paid.",
    tools: ["Xero", "QuickBooks", "Stripe", "GoCardless", "Slack"],
    time: "02:14",
    action: "Invoice #4821 sent",
    img: "https://framerusercontent.com/images/pt55hjmji8LIjNGhQZtIvdoJdI.webp?scale-down-to=2048",
  },
  {
    id: "lead-routing",
    num: "02",
    title: "Lead routing",
    tagline: "Every enquiry scored, assigned and in the CRM in seconds.",
    tools: ["HubSpot", "Salesforce", "Typeform", "Calendly", "Slack"],
    time: "02:15",
    action: "Lead qualified · CRM updated",
    img: "https://framerusercontent.com/images/WuDZGegUoTc2fQRZKz75LuQHKw.webp?scale-down-to=2048",
  },
  {
    id: "support",
    num: "03",
    title: "Support",
    tagline: "Tickets answered, tagged and escalated without a queue.",
    tools: ["Zendesk", "Intercom", "Freshdesk", "Notion", "Linear"],
    time: "02:16",
    action: "Ticket #772 closed",
    img: "https://framerusercontent.com/images/HeKgtQJLUH23dS8vPa7TY3fGvjM.webp?scale-down-to=2048",
  },
  {
    id: "onboarding",
    num: "04",
    title: "Onboarding",
    tagline: "Contracts, accounts and welcome sequences from one form.",
    tools: ["DocuSign", "Google Workspace", "Notion", "Slack", "Airtable"],
    time: "02:18",
    action: "Client folder created",
    img: "https://framerusercontent.com/images/LxpPJti5vuqwnKxo3nXTj9scvM.webp?scale-down-to=2048",
  },
  {
    id: "reporting",
    num: "05",
    title: "Reporting",
    tagline: "The numbers on the desk every morning, nobody builds them.",
    tools: ["Google Sheets", "PostgreSQL", "Slack", "Metabase", "Notion"],
    time: "02:20",
    action: "Monday report sent",
    img: "https://framerusercontent.com/images/unJzb8Yad2e1lOvu0QXxo4v80ik.webp?scale-down-to=2048",
  },
];

export function WorkflowsAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] pt-24 md:pt-32 pb-28 md:pb-36 overflow-visible border-t border-white/[0.08]">
      {/* Angled Edge Header Accent */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-14 flex flex-col gap-16">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <SectionLabel>What we automate</SectionLabel>
            <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1]">
              The work that runs <br />
              <span className="text-[#D4F542]">while you sleep.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6">
            <p className="text-base text-white/60 leading-relaxed font-sans max-w-md lg:text-right">
              Five workflows, each wired into the tools you already pay for.
              Point at one to see what it does at night.
            </p>
            <Button href="/workflows" variant="ghost" hasArrow={false} hasLamp={true}>
              All workflows
            </Button>
          </div>
        </div>
      </div>

      {/* Accordion Rows */}
      <div className="mt-14 md:mt-20 border-t border-white/[0.12]">
        {WORKFLOW_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setOpenIndex(idx)}
              onClick={() => setOpenIndex(idx)}
              className={`relative border-b border-white/[0.12] transition-colors duration-400 overflow-hidden cursor-pointer ${
                isOpen ? "bg-black/50" : "hover:bg-white/[0.02]"
              }`}
            >
              {/* Row Background Media Layer */}
              <div
                className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${
                    isOpen ? "scale-100" : "scale-105"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/95 via-[#0B0D10]/75 to-[#0B0D10]/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/90 via-transparent to-[#0B0D10]/80" />
              </div>

              {/* Main Trigger Button */}
              <button
                onClick={() => toggle(idx)}
                className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-14 py-7 md:py-9 flex items-center justify-between text-left group cursor-pointer"
              >
                <div className="flex items-center gap-8 md:gap-20">
                  <span
                    className={`font-mono text-2xl md:text-4xl transition-colors duration-400 ${
                      isOpen
                        ? "text-[#D4F542]"
                        : "text-white/40 group-hover:text-white"
                    }`}
                  >
                    {item.num}
                  </span>
                  <h3
                    className={`font-tight font-semibold tracking-[-0.04em] transition-all duration-400 ${
                      isOpen
                        ? "text-3xl sm:text-5xl md:text-6xl lg:text-[68px] text-white"
                        : "text-2xl sm:text-4xl md:text-5xl text-white/80 group-hover:text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isOpen
                      ? "bg-white text-black rotate-90"
                      : "border border-white/20 text-white group-hover:border-white"
                  }`}
                >
                  <svg
                    className="w-4 h-4 -rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {/* Expandable Content Area */}
              <div
                className={`relative z-10 grid transition-all duration-600 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 pb-10"
                    : "grid-rows-[0fr] opacity-0 pb-0"
                }`}
              >
                <div className="overflow-hidden min-h-0">
                  <div className="max-w-[1400px] mx-auto px-6 md:px-14 pl-16 sm:pl-28 md:pl-44 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-2">
                    <div className="flex flex-col gap-4 max-w-xl">
                      <p className="text-lg md:text-xl text-[#F8F8F5]/90 font-normal leading-relaxed font-sans">
                        {item.tagline}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {item.tools.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full bg-[#0B0D10]/80 border border-white/20 text-xs font-mono uppercase tracking-wider text-white/80 backdrop-blur-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#0B0D10]/80 border border-[#D4F542]/50 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                        <span className="text-xs font-mono text-[#D4F542] font-semibold">
                          {item.time}
                        </span>
                        <span className="text-xs font-mono text-white/90 uppercase">
                          {item.action}
                        </span>
                      </div>
                      <Link
                        href={`/workflows/${item.id}`}
                        className="w-10 h-10 rounded-full bg-[#D4F542] text-black grid place-items-center hover:scale-105 transition-transform"
                        title={`Open ${item.title}`}
                      >
                        <svg
                          className="w-4 h-4 -rotate-45"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                        >
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
