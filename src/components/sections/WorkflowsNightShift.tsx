"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";

interface WorkflowDetail {
  id: string;
  num: string;
  title: string;
  tagline: string;
  summary: string;
  tools: string[];
  time: string;
  action: string;
  img: string;
  imageAlign: "right" | "left";
}

const WORKFLOW_DETAILS: WorkflowDetail[] = [
  {
    id: "invoicing",
    num: "01",
    title: "Invoicing",
    tagline: "Invoices out the minute a job closes, chased until paid.",
    summary:
      "When a job is marked done in your project tool, the invoice is built from the quote, checked against the timesheet and sent from your accounting system with the right payment link. Reminders go out on day 7, 14 and 21 in your own tone, stop the moment the money lands, and the ledger is reconciled every morning at 06:00.",
    tools: ["Xero", "QuickBooks", "Stripe", "GoCardless", "Gmail"],
    time: "02:14",
    action: "Invoice #4821 sent",
    img: "https://framerusercontent.com/images/pt55hjmji8LIjNGhQZtIvdoJdI.webp?scale-down-to=2048",
    imageAlign: "right",
  },
  {
    id: "lead-routing",
    num: "02",
    title: "Lead routing",
    tagline: "Every enquiry scored, assigned and in the CRM in seconds.",
    summary:
      "Website forms, inbound mail and ad leads land in one queue. Each enquiry is enriched with company size, sector and location, scored against your ideal client and routed to the right person's calendar with a drafted first reply. Nothing waits in an inbox overnight, and the CRM holds the full record before anyone has read it.",
    tools: ["HubSpot", "Pipedrive", "Typeform", "Clearbit", "Slack"],
    time: "02:15",
    action: "Lead qualified · CRM updated",
    img: "https://framerusercontent.com/images/WuDZGegUoTc2fQRZKz75LuQHKw.webp?scale-down-to=2048",
    imageAlign: "left",
  },
  {
    id: "support",
    num: "03",
    title: "Support",
    tagline: "Tickets answered, tagged and escalated without a queue.",
    summary:
      "Every message to support is read, tagged by topic and urgency, and answered from your own help articles when the answer already exists. Refunds, cancellations and outages go to a person within minutes with the customer's history attached. Across our clients 71 % of tickets close without anyone on their side touching them.",
    tools: ["Intercom", "Zendesk", "Help Scout", "Slack", "Notion"],
    time: "02:16",
    action: "Ticket #772 closed",
    img: "https://framerusercontent.com/images/HeKgtQJLUH23dS8vPa7TY3fGvjM.webp?scale-down-to=2048",
    imageAlign: "right",
  },
  {
    id: "onboarding",
    num: "04",
    title: "Onboarding",
    tagline: "Contracts, accounts and welcome sequences from one form.",
    summary:
      "A signed proposal starts the clock. The contract goes out for e-signature, the client folder, project board and shared channel are created with the right people in them, the first invoice is raised and a welcome sequence runs over the first 14 days. Your team opens a workspace that is already set up.",
    tools: ["DocuSign", "Google Drive", "Notion", "Slack", "Stripe"],
    time: "02:18",
    action: "Client folder created",
    img: "https://framerusercontent.com/images/LxpPJti5vuqwnKxo3nXTj9scvM.webp?scale-down-to=2048",
    imageAlign: "left",
  },
  {
    id: "reporting",
    num: "05",
    title: "Reporting",
    tagline: "The numbers on the desk every morning, nobody builds them.",
    summary:
      "Revenue, pipeline, cash, delivery and support figures are pulled from every system at 02:00, checked against targets and formatted into a single email and dashboard. Weekly summaries, month-end reconciliations and board packs arrive without anyone pulling CSV exports.",
    tools: ["Google Sheets", "Looker Studio", "Airtable", "Stripe", "Slack"],
    time: "02:20",
    action: "Monday report sent",
    img: "https://framerusercontent.com/images/unJzb8Yad2e1lOvu0QXxo4v80ik.webp?scale-down-to=2048",
    imageAlign: "right",
  },
];

export function WorkflowsNightShift() {
  const [activeTab, setActiveTab] = useState<string>("invoicing");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 260;

      for (const item of WORKFLOW_DETAILS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop - offset;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWorkflow = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -140;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#0B0D10] text-[#F8F8F5]">
      {/* Intro Header */}
      <section className="py-20 md:py-28 px-6 md:px-14 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <SectionLabel>The night shift, workflow by workflow</SectionLabel>
          <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[0.98]">
            Five workflows. <br />
            <span className="text-[#D4F542]">Zero hands.</span>
          </h2>
        </div>
        <div className="lg:col-span-5 pb-2">
          <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            Each one is wired into the tools you already pay for and runs on a trigger, not a
            reminder. Pick one to see what it does between the last log-off and the first coffee.
          </p>
        </div>
      </section>

      {/* Sticky Subnav Bar */}
      <div className="sticky top-[88px] z-30 w-full bg-[#0B0D10]/95 backdrop-blur-md border-y border-white/[0.08] py-4 px-6 md:px-14">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-white/40 flex-shrink-0 mr-4">
            WORKFLOWS
          </span>

          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-shrink-0">
            {WORKFLOW_DETAILS.map((wf) => {
              const isActive = activeTab === wf.id;
              return (
                <button
                  key={wf.id}
                  onClick={() => scrollToWorkflow(wf.id)}
                  type="button"
                  className={`flex items-center gap-2 py-1.5 px-3 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? "text-[#D4F542] bg-white/[0.08] font-semibold"
                      : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span className={isActive ? "text-[#D4F542]" : "text-white/40"}>{wf.num}</span>
                  <span>{wf.title}</span>
                  <span className="text-white/40">{wf.time}</span>
                  <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] leading-none">
                    ↓
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5 Full Workflow Sections with Background Image & Reveal on Scroll */}
      <div className="flex flex-col w-full">
        {WORKFLOW_DETAILS.map((wf) => {
          const isRight = wf.imageAlign === "right";

          return (
            <section
              key={wf.id}
              id={wf.id}
              className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center py-20 lg:py-28 px-6 md:px-14 border-b border-white/[0.08] overflow-hidden"
            >
              {/* Background Photography with Reveal on Scroll */}
              <motion.div
                initial={{ opacity: 0, scale: 1.06 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute inset-0 z-0 pointer-events-none ${
                  isRight ? "lg:left-[25%]" : "lg:right-[25%]"
                }`}
              >
                <img
                  src={wf.img}
                  alt={wf.title}
                  className="w-full h-full object-cover object-center opacity-45"
                />
                {/* Vignette Gradients */}
                <div
                  className={`absolute inset-0 ${
                    isRight
                      ? "bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/80 to-transparent"
                      : "bg-gradient-to-l from-[#0B0D10] via-[#0B0D10]/80 to-transparent"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]" />
              </motion.div>

              {/* Giant Outline Number in the Background */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute z-0 pointer-events-none select-none bottom-8 ${
                  isRight ? "right-10 lg:right-24" : "left-10 lg:left-24"
                }`}
              >
                <span
                  className="text-[140px] sm:text-[200px] lg:text-[280px] font-tight font-extralight tracking-tighter leading-none"
                  style={{
                    WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.18)",
                    color: "transparent",
                  }}
                >
                  {wf.num}
                </span>
              </motion.div>

              {/* Foreground Content Card */}
              <div className="relative z-10 max-w-[1280px] mx-auto w-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className={`max-w-2xl flex flex-col gap-6 ${isRight ? "" : "lg:ml-auto"}`}
                >
                  {/* Step Pill */}
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50">
                    <span>WORKFLOW</span>
                    <span className="text-[#D4F542] font-semibold">{wf.num}</span>
                    <span>/</span>
                    <span>05</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl sm:text-6xl lg:text-[76px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[0.98]">
                    {wf.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-lg sm:text-2xl font-tight font-medium text-white/90 leading-snug">
                    {wf.tagline}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
                    {wf.summary}
                  </p>

                  {/* Runs on Tools */}
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
                      RUNS ON
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {wf.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-white/80 uppercase"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Live Status Badge & Action Row */}
                  <div className="flex flex-wrap items-center gap-5 pt-4">
                    {/* Timestamp Status Pill */}
                    <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] animate-pulse" />
                      <span className="text-[#D4F542] font-semibold">{wf.time}</span>
                      <span className="text-white/80 uppercase">{wf.action}</span>
                    </div>

                    {/* See How It Runs CTA Link */}
                    <Link
                      href={`/workflows/${wf.id}`}
                      className="group inline-flex items-center gap-3 text-sm font-tight font-semibold text-white hover:text-[#D4F542] transition-colors"
                    >
                      <span className="underline underline-offset-4 decoration-white/30 group-hover:decoration-[#D4F542]">
                        See how it runs
                      </span>
                      <span className="w-8 h-8 rounded-full bg-[#D4F542] text-black flex items-center justify-center font-bold text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shadow-[0_0_12px_rgba(212,245,66,0.3)]">
                        ↗
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
