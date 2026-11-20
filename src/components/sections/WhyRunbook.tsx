"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { RollingCounter } from "../ui/RollingCounter";

export function WhyRunbook() {
  const toolsList = [
    "HubSpot",
    "Xero",
    "Slack",
    "Gmail",
    "Notion",
    "Stripe",
    "Shopify",
    "Airtable",
    "QuickBooks",
    "Salesforce",
  ];

  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-32 px-6 md:px-14 border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-20">
        {/* Top 2-Column Pitch with Stage Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionLabel>Why Runbook</SectionLabel>
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.07] text-balance">
              Most of what your team does every day is the same ten things.{" "}
              <span className="text-[#D4F542]">
                We make them happen on their own,
              </span>{" "}
              while everyone is asleep.
            </h2>
          </div>

          <div className="lg:col-span-5 flex justify-end">
            <figure className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl group">
              <img
                src="https://framerusercontent.com/images/ycGdT58vzuZkZf1qTQY9cYoIhc.webp?scale-down-to=1024"
                alt="An office after hours, one desk still lit"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Pin on photo */}
              <figcaption className="absolute bottom-6 left-6 right-6 flex items-center gap-3 p-3 rounded-xl bg-[#0B0D10]/80 border border-white/[0.16] backdrop-blur-md">
                <span className="relative flex-shrink-0 w-3 h-3 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542]" />
                <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase">
                  <b className="text-[#D4F542] font-semibold">02:14</b>
                  <span className="text-white/90">Payroll approved</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 4-Column Stat Tumbler Row with animated top hair rule */}
        <div className="relative pt-12">
          {/* Animated horizontal line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.12] origin-left"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Stat 1 */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-[#D4F542]">01</span>
              <div className="text-4xl md:text-6xl font-tight font-semibold tracking-tight text-[#F8F8F5]">
                <RollingCounter value="48,200" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/60 mt-1">
                Tasks run a month
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-[#D4F542]">02</span>
              <div className="text-4xl md:text-6xl font-tight font-semibold tracking-tight text-[#F8F8F5]">
                31 h
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/60 mt-1">
                Back per team, per week
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-[#D4F542]">03</span>
              <div className="text-4xl md:text-6xl font-tight font-semibold tracking-tight text-[#F8F8F5]">
                <RollingCounter value="214" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/60 mt-1">
                Workflows live tonight
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-[#D4F542]">04</span>
              <div className="text-4xl md:text-6xl font-tight font-semibold tracking-tight text-[#F8F8F5]">
                <RollingCounter value="60" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/60 mt-1">
                Tools wired together
              </span>
            </div>
          </div>
        </div>

        {/* Infinite Tool Marquee with glowing lime dots between tools */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center gap-6 overflow-hidden">
          <div className="text-xs font-mono uppercase tracking-widest text-white/50 flex-shrink-0 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_6px_#D4F542]" />
            <span>Works with</span>
          </div>
          <div className="relative w-full overflow-hidden mask-gradient-x">
            <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
              {[...toolsList, ...toolsList, ...toolsList].map((tool, i) => (
                <React.Fragment key={i}>
                  <span className="text-sm font-medium tracking-tight text-white/70 hover:text-[#D4F542] transition-colors cursor-default">
                    {tool}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]/70 flex-shrink-0" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
