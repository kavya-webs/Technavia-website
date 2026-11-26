"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { RESULTS } from "@/lib/data";

export function ResultsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Slanted white line animation (starts flat at bottom, right end rises up on scroll)
  const whiteLineY2 = useTransform(scrollYProgress, [0.35, 0.9], ["98%", "15%"]);

  // Mobile carousel navigation
  const scrollToMobileCard = (index: number) => {
    setActiveMobileIdx(index);
    if (!carouselRef.current) return;
    const cards = carouselRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleMobileScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.offsetWidth * 0.88;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex >= 0 && newIndex < RESULTS.length && newIndex !== activeMobileIdx) {
      setActiveMobileIdx(newIndex);
    }
  };

  // Exact desktop vertical offsets per user spec
  const DESKTOP_TOP_OFFSETS = [92, 140, 188];

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-20 sm:py-24 md:py-32 px-5 sm:px-8 lg:px-14 border-t border-white/[0.08]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel>PROVEN ARCHITECTURE</SectionLabel>
            <h2 className="text-3xl sm:text-5xl lg:text-[68px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.02]">
              Real hosted builds, <br />
              <span className="text-[#D4F542]">sub-second engineering quality.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6 max-w-md">
            <p className="text-base text-white/60 leading-relaxed font-sans md:text-right">
              Inspect our production deployments and self-hosted client mirrors. Every system is engineered for sub-second Core Web Vitals, conversion UX, and automated pipeline scale.
            </p>
            <Button href="/results" variant="ghost" hasArrow={false} hasLamp={true}>
              All results & live mirrors
            </Button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 1. MOBILE CAROUSEL (< 768px): Horizontal Scroll-Snap */}
        {/* ======================================================== */}
        <div className="block md:hidden">
          {/* Mobile Controls: 01 / 02 / 03 Tabs + Arrow Buttons */}
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-2">
              {RESULTS.map((res, i) => {
                const isActive = activeMobileIdx === i;
                return (
                  <button
                    key={res.id}
                    onClick={() => scrollToMobileCard(i)}
                    className={`min-w-[44px] min-h-[44px] px-3.5 py-2 rounded-full text-xs font-mono font-bold transition-all flex items-center justify-center cursor-pointer ${
                      isActive
                        ? "bg-[#D4F542] text-black shadow-[0_0_12px_rgba(212,245,66,0.35)] scale-105"
                        : "bg-white/[0.06] text-white/60 hover:text-white border border-white/[0.1]"
                    }`}
                    aria-label={`Project 0${i + 1}`}
                  >
                    0{i + 1}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  scrollToMobileCard((activeMobileIdx - 1 + RESULTS.length) % RESULTS.length)
                }
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#14161A] border border-white/[0.12] hover:border-[#D4F542] text-white flex items-center justify-center text-base transition-colors cursor-pointer"
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                onClick={() =>
                  scrollToMobileCard((activeMobileIdx + 1) % RESULTS.length)
                }
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#14161A] border border-white/[0.12] hover:border-[#D4F542] text-white flex items-center justify-center text-base transition-colors cursor-pointer"
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Snap Track */}
          <div
            ref={carouselRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-5 px-5 scrollbar-none"
          >
            {RESULTS.map((res) => (
              <div
                key={`mobile-${res.id}`}
                className="w-[88vw] max-w-[400px] shrink-0 snap-center rounded-3xl overflow-hidden border border-[#2A2F38] bg-[#0E1116] p-5 flex flex-col gap-5 shadow-2xl"
              >
                {/* 1. Top: Obsidian HUD Browser Preview Frame */}
                <div className="rounded-2xl overflow-hidden bg-[#14161A] border border-[#2A2F38]">
                  <div className="flex items-center justify-between px-3 py-2 bg-[#0B0D10]/95 border-b border-[#2A2F38]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                      <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                      <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/70 border border-white/[0.08] text-[10px] font-mono text-white/80 max-w-[170px] truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542] shrink-0 animate-pulse" />
                      <span className="truncate">{res.url.replace("https://", "")}</span>
                    </div>
                    <span className="text-[9px] font-mono uppercase text-[#D4F542] font-semibold px-1.5 py-0.5 rounded bg-[#D4F542]/10 border border-[#D4F542]/30">
                      LIVE
                    </span>
                  </div>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 block"
                  >
                    <Image
                      src={res.previewImg}
                      alt={`${res.client} Live Interface`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      decoding="async"
                      className="object-cover object-top"
                    />
                  </a>
                </div>

                {/* 2. Badge + Title */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#D4F542] font-semibold tracking-wider uppercase text-[10px]">
                      {res.badge}
                    </span>
                    <span className="text-[#A8B0BC]">RESULT {res.num}/03</span>
                  </div>
                  <h3 className="text-2xl font-tight font-semibold text-white tracking-tight">
                    {res.client}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                    {res.headline}
                  </p>
                </div>

                {/* 3. Highlights Spec Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {res.highlights?.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-[#14161A] border border-[#2A2F38] text-[10.5px] font-mono text-white/80"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* 4. Concise Unwrapped Problem / System / Result Rows */}
                <div className="flex flex-col gap-2 text-xs font-sans">
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/[0.08] flex flex-col gap-0.5">
                    <span className="font-mono text-[9.5px] uppercase text-red-400 font-semibold tracking-wider">
                      01 · PROBLEM
                    </span>
                    <p className="text-white/70 leading-snug text-[11px]">
                      {res.before}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/[0.08] flex flex-col gap-0.5">
                    <span className="font-mono text-[9.5px] uppercase text-[#D4F542] font-semibold tracking-wider">
                      02 · SYSTEM BUILT
                    </span>
                    <p className="text-white/70 leading-snug text-[11px]">
                      {res.summary}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/[0.08] flex flex-col gap-0.5">
                    <span className="font-mono text-[9.5px] uppercase text-emerald-400 font-semibold tracking-wider">
                      03 · RESULT
                    </span>
                    <p className="text-white/70 leading-snug text-[11px]">
                      {res.after}
                    </p>
                  </div>
                </div>

                {/* 5. Metrics & Full-Width Min 48px CTA */}
                <div className="flex flex-col gap-3 pt-2 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-tight font-semibold text-white tracking-tight">
                      {res.metric}
                    </div>
                    <div className="px-2 py-0.5 rounded bg-[#D4F542]/15 text-[#D4F542] font-mono text-[9.5px] font-semibold uppercase tracking-wider border border-[#D4F542]/30">
                      {res.metricSub}
                    </div>
                  </div>

                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] rounded-full bg-[#D4F542] text-black font-tight font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_16px_rgba(212,245,66,0.25)] active:scale-[0.98] transition-transform"
                  >
                    <span>{res.ctaText}</span>
                  </a>

                  <Link
                    href={`/results/${res.id}`}
                    className="text-center text-xs font-mono text-white/50 hover:text-white uppercase tracking-wider py-1"
                  >
                    {res.client} Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. TABLET (768px–1023px): Vertical Cards (No Sticky)     */}
        {/* ======================================================== */}
        <div className="hidden md:flex lg:hidden flex-col gap-8 pb-10">
          {RESULTS.map((res) => (
            <div
              key={`tablet-${res.id}`}
              className="relative rounded-3xl overflow-hidden border border-[#2A2F38] bg-[#0E1116] p-8 shadow-2xl flex flex-col gap-6"
            >
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/[0.12]">
                  <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] animate-pulse" />
                  <span className="text-[#D4F542] font-semibold tracking-wider uppercase text-[11px]">
                    {res.badge}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white/50">
                  <span className="text-white/90 font-medium">RESULT {res.num} / 03</span>
                  <span>·</span>
                  <span className="text-[#D4F542] uppercase">{res.industry}</span>
                </div>
              </div>

              {/* 2-Column Internal Grid */}
              <div className="grid grid-cols-2 gap-6 items-center">
                {/* Left: Narrative, Specs, Problem/System/Result, CTA */}
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-3xl font-tight font-semibold text-white tracking-tight mb-1">
                      {res.client}
                    </h3>
                    <p className="text-xs text-white/70 font-sans leading-relaxed">
                      {res.headline}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {res.highlights?.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full bg-[#14161A] border border-[#2A2F38] text-[11px] font-mono text-white/80"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 text-xs font-sans">
                    <div className="p-2.5 rounded-xl bg-black/60 border border-white/[0.08]">
                      <span className="font-mono text-[9.5px] uppercase text-red-400 font-semibold tracking-wider block mb-0.5">
                        01 · PROBLEM
                      </span>
                      <p className="text-white/70 leading-snug text-[11px]">
                        {res.before}
                      </p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/60 border border-white/[0.08]">
                      <span className="font-mono text-[9.5px] uppercase text-[#D4F542] font-semibold tracking-wider block mb-0.5">
                        02 · SYSTEM BUILT
                      </span>
                      <p className="text-white/70 leading-snug text-[11px]">
                        {res.summary}
                      </p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/60 border border-white/[0.08]">
                      <span className="font-mono text-[9.5px] uppercase text-emerald-400 font-semibold tracking-wider block mb-0.5">
                        03 · RESULT
                      </span>
                      <p className="text-white/70 leading-snug text-[11px]">
                        {res.after}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-tight font-semibold text-white">{res.metric}</span>
                      <span className="text-[9px] font-mono uppercase text-[#D4F542] bg-[#D4F542]/10 px-2 py-0.5 rounded border border-[#D4F542]/30">
                        {res.metricSub}
                      </span>
                    </div>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-full bg-[#D4F542] text-black font-tight font-semibold text-xs tracking-wider uppercase shadow-[0_0_12px_rgba(212,245,66,0.25)] hover:bg-[#c3e634]"
                    >
                      {res.ctaText}
                    </a>
                  </div>
                </div>

                {/* Right: Obsidian HUD Browser Frame */}
                <div className="rounded-2xl overflow-hidden bg-[#14161A] border border-[#2A2F38]">
                  <div className="flex items-center justify-between px-3 py-2 bg-[#0B0D10]/95 border-b border-[#2A2F38]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                      <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                      <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/70 border border-white/[0.08] text-[10px] font-mono text-white/80 max-w-[180px] truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542] shrink-0 animate-pulse" />
                      <span className="truncate">{res.url.replace("https://", "")}</span>
                    </div>
                    <span className="text-[9px] font-mono uppercase text-[#D4F542] font-semibold px-1.5 py-0.5 rounded bg-[#D4F542]/10 border border-[#D4F542]/30">
                      LIVE
                    </span>
                  </div>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 block"
                  >
                    <Image
                      src={res.previewImg}
                      alt={`${res.client} Live Interface`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      decoding="async"
                      className="object-cover object-top"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================== */}
        {/* 3. DESKTOP (>= 1024px): Sticky-Stacking Deck               */}
        {/* ======================================================== */}
        <div className="hidden lg:flex flex-col gap-12 pb-16">
          {RESULTS.map((res, idx) => {
            const topOffset = DESKTOP_TOP_OFFSETS[idx] || 92 + idx * 48;

            return (
              <div
                key={`desktop-${res.id}`}
                style={{ top: `${topOffset}px` }}
                className="lg:sticky rounded-3xl overflow-hidden border border-[#2A2F38] hover:border-[#D4F542] bg-[#0E1116] shadow-[0_-16px_50px_rgba(0,0,0,0.95)] flex flex-col justify-between p-8 sm:p-10 transition-colors duration-300 group"
              >
                {/* Uniform Single-Line Header Bar */}
                <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/[0.12] text-xs font-mono whitespace-nowrap">
                      <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] animate-pulse shrink-0" />
                      <span className="text-[#D4F542] font-semibold tracking-wider uppercase text-[11px] whitespace-nowrap">
                        {res.badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-white/50 whitespace-nowrap">
                    <span className="text-white/90 font-medium whitespace-nowrap">RESULT {res.num} / 03</span>
                    <span>·</span>
                    <span className="whitespace-nowrap">{res.year}</span>
                    <span>·</span>
                    <span className="text-[#D4F542] uppercase whitespace-nowrap">{res.industry}</span>
                  </div>
                </div>

                {/* Main Content: Two Columns on Large Screens */}
                <div className="relative z-10 pt-6 grid grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Column: Narrative, Spec Pills, Problem/System/Result */}
                  <div className="col-span-6 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-baseline gap-3">
                        <h3 className="text-3xl lg:text-4xl font-tight font-semibold text-white tracking-tight group-hover:text-[#D4F542] transition-colors whitespace-nowrap">
                          {res.client}
                        </h3>
                        <span className="text-xs font-mono text-white/50 uppercase whitespace-nowrap">
                          {res.workflowUsed}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                        {res.headline}
                      </p>
                    </div>

                    {/* 3 Spec Pills */}
                    <div className="flex flex-wrap gap-2">
                      {res.highlights?.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-[#14161A] border border-[#2A2F38] text-xs font-mono text-white/80 whitespace-nowrap"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Problem -> System -> Result Strip (Zero Line Clamp) */}
                    <div className="grid grid-cols-3 gap-2.5 text-xs font-sans pt-1">
                      <div className="p-3 rounded-xl bg-black/60 border border-white/[0.08] flex flex-col gap-1">
                        <span className="font-mono text-[10px] uppercase text-red-400 font-semibold tracking-wider">
                          01 · PROBLEM
                        </span>
                        <p className="text-white/70 leading-snug text-[11.5px]">
                          {res.before}
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-black/60 border border-white/[0.08] flex flex-col gap-1">
                        <span className="font-mono text-[10px] uppercase text-[#D4F542] font-semibold tracking-wider">
                          02 · SYSTEM BUILT
                        </span>
                        <p className="text-white/70 leading-snug text-[11.5px]">
                          {res.summary}
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-black/60 border border-white/[0.08] flex flex-col gap-1">
                        <span className="font-mono text-[10px] uppercase text-emerald-400 font-semibold tracking-wider">
                          03 · RESULT
                        </span>
                        <p className="text-white/70 leading-snug text-[11.5px]">
                          {res.after}
                        </p>
                      </div>
                    </div>

                    {/* Actions & Metrics Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/[0.08]">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl sm:text-4xl font-tight font-semibold text-white tracking-tight leading-none whitespace-nowrap">
                          {res.metric}
                        </div>
                        <div className="px-2.5 py-1 rounded bg-[#D4F542]/15 text-[#D4F542] font-mono text-[10px] font-semibold uppercase tracking-wider border border-[#D4F542]/30 whitespace-nowrap">
                          {res.metricSub}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4F542] hover:bg-[#c3e634] text-black font-tight font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_16px_rgba(212,245,66,0.2)] hover:shadow-[0_0_24px_rgba(212,245,66,0.4)] cursor-pointer whitespace-nowrap"
                        >
                          <span>{res.ctaText}</span>
                        </a>

                        <Link
                          href={`/results/${res.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-white uppercase tracking-wider px-3 py-2 transition-colors whitespace-nowrap"
                        >
                          {res.client} Case Study →
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Obsidian HUD Browser Frame */}
                  <div className="col-span-6 flex flex-col">
                    <div className="relative rounded-2xl overflow-hidden bg-[#14161A] border border-[#2A2F38] group-hover:border-[#D4F542] transition-colors duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col">
                      {/* Browser Mockup Top Bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0B0D10]/95 border-b border-[#2A2F38] backdrop-blur-md">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                        </div>

                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-white/[0.08] text-[11px] font-mono text-white/80 max-w-[260px] truncate shadow-inner">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_6px_#D4F542] shrink-0 animate-pulse" />
                          <span className="truncate">{res.url.replace("https://", "")}</span>
                        </div>

                        <span className="text-[10px] font-mono uppercase text-[#D4F542] font-semibold tracking-wider px-2 py-0.5 rounded bg-[#D4F542]/10 border border-[#D4F542]/30">
                          LIVE
                        </span>
                      </div>

                      {/* Browser Viewport with Hover Zoom Effect */}
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 block cursor-pointer group/frame"
                      >
                        <Image
                          src={res.previewImg}
                          alt={`${res.client} Live Interface`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                          decoding="async"
                          className="object-cover object-top group-hover/frame:scale-[1.03] group-hover/frame:-translate-y-1 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                        {/* Interactive Hover Pill */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4F542] text-black font-tight font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(212,245,66,0.6)]">
                            {res.ctaText}
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote & Sub-Bar */}
        <div className="flex flex-col gap-6 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-xs font-mono text-white/60">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] animate-pulse" />
              <span>Production builds verified for sub-second Core Web Vitals</span>
            </div>

            <Button href="/results" variant="solid" className="w-full sm:w-auto">
              All results & live mirrors
            </Button>
          </div>

          <p className="text-xs font-mono text-[#A8B0BC] text-center sm:text-left leading-relaxed">
            Client mirrors are self-hosted with permission to preserve client domain privacy while letting you inspect live UI and engineering quality.
          </p>
        </div>
      </div>

      {/* Animated Slanted White Line */}
      <div className="relative w-full h-16 mt-6 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="0%"
            y1="98%"
            x2="100%"
            y2={whiteLineY2}
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="1.5"
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] drop-shadow-[0_0_16px_rgba(255,255,255,0.4)]"
          />
        </svg>
      </div>
    </section>
  );
}
