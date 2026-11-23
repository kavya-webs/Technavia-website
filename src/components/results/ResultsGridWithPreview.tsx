"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RESULTS, ResultItem } from "@/lib/data";

export function ResultsGridWithPreview() {
  const [activePreview, setActivePreview] = useState<ResultItem | null>(null);
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);

  const handleOpenPreview = (res: ResultItem) => {
    setActivePreview(res);
    setIframeLoading(true);
  };

  const handleClosePreview = () => {
    setActivePreview(null);
  };

  return (
    <div className="flex flex-col gap-12 w-full">
      {/* 3 Real Hosted Builds in Obsidian HUD Browser Frames */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {RESULTS.map((res) => (
          <div
            key={res.id}
            className="group rounded-3xl bg-[#0E1116] border border-[#2A2F38] hover:border-[#D4F542] transition-colors duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden"
          >
            {/* Top Bar: Badge & Industry */}
            <div className="p-6 pb-4 border-b border-white/[0.08] flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 border border-white/[0.1] text-[11px] font-mono text-[#D4F542] font-semibold uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_6px_#D4F542] animate-pulse" />
                  {res.badge}
                </span>
                <span className="text-xs font-mono text-white/50">{res.year}</span>
              </div>

              <div>
                <h3 className="text-2xl font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors">
                  {res.client}
                </h3>
                <p className="text-sm text-white/70 font-sans mt-1 line-clamp-2">
                  {res.headline}
                </p>
              </div>

              {/* Spec Highlights */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {res.highlights?.map((h, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-full bg-[#14161A] border border-[#2A2F38] text-[11px] font-mono text-white/80"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Obsidian HUD Browser Frame */}
            <div className="px-6 py-4 flex flex-col">
              <div className="rounded-2xl overflow-hidden bg-[#14161A] border border-[#2A2F38] group-hover:border-[#D4F542]/80 transition-colors shadow-2xl flex flex-col">
                {/* Mockup Header */}
                <div className="flex items-center justify-between px-3.5 py-2 bg-[#0B0D10] border-b border-[#2A2F38]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/70 border border-white/[0.08] text-[10px] font-mono text-white/70 max-w-[170px] truncate">
                    <span className="w-1 h-1 rounded-full bg-[#D4F542] shrink-0" />
                    <span className="truncate">{res.url.replace("https://", "")}</span>
                  </div>

                  <span className="text-[9px] font-mono font-bold text-[#D4F542] tracking-wider px-1.5 py-0.5 rounded bg-[#D4F542]/10 border border-[#D4F542]/20">
                    LIVE
                  </span>
                </div>

                {/* Screenshot Visual with Hover Actions */}
                <div className="relative aspect-[16/10] w-full bg-black/40 overflow-hidden group/thumb">
                  <Image
                    src={res.previewImg}
                    alt={`${res.client} Live Interface`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-top group-hover/thumb:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Hover Buttons Overlay */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover/thumb:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2.5 p-4">
                    <button
                      type="button"
                      onClick={() => handleOpenPreview(res)}
                      className="w-full py-2 px-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                      <span>Interactive Preview</span>
                      <span>👁</span>
                    </button>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-full bg-[#D4F542] hover:bg-[#c2e438] text-black font-tight font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(212,245,66,0.4)]"
                    >
                      <span>{res.ctaText}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Metric & Problem/Result Breakdown */}
            <div className="p-6 pt-2 border-t border-white/[0.08] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-tight font-semibold text-white tracking-tight">
                    {res.metric}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#D4F542]">
                    {res.metricSub}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenPreview(res)}
                  className="px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-mono text-white/80 transition-colors flex items-center gap-1.5"
                >
                  <span>Preview</span>
                  <span className="text-[#D4F542]">👁</span>
                </button>
              </div>

              {/* Problem & Result Mini Summary */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-sans">
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.06] flex flex-col gap-0.5">
                  <span className="font-mono text-[9px] uppercase text-red-400 font-semibold tracking-wider">
                    PROBLEM
                  </span>
                  <p className="text-white/60 line-clamp-2 leading-tight">{res.before}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.06] flex flex-col gap-0.5">
                  <span className="font-mono text-[9px] uppercase text-emerald-400 font-semibold tracking-wider">
                    OUTCOME
                  </span>
                  <p className="text-white/60 line-clamp-2 leading-tight">{res.after}</p>
                </div>
              </div>

              {/* Bottom Direct Links */}
              <div className="flex items-center justify-between pt-2 text-xs font-mono">
                <Link
                  href={`/results/${res.id}`}
                  className="text-white/60 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Full case study →
                </Link>

                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4F542] hover:underline font-semibold"
                >
                  {res.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-xs font-mono text-white/50 text-center sm:text-left leading-relaxed">
        Client mirrors are self-hosted with permission to preserve client domain privacy while letting you inspect live UI and engineering quality.
      </div>

      {/* Interactive Preview Modal */}
      {activePreview && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex flex-col items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="w-full max-w-6xl h-[90vh] flex flex-col rounded-3xl bg-[#0E1116] border border-[#2A2F38] shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden">
            {/* Modal Browser Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-[#0B0D10] border-b border-[#2A2F38]">
              {/* Left: Window Dots & Site Title */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/90 cursor-pointer" onClick={handleClosePreview} />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/90" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/90" />
                </div>
                <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-white/10">
                  <span className="text-xs font-mono text-white font-semibold">{activePreview.client}</span>
                  <span className="text-[10px] font-mono text-[#D4F542] px-2 py-0.5 rounded bg-[#D4F542]/10 border border-[#D4F542]/20">
                    {activePreview.badge}
                  </span>
                </div>
              </div>

              {/* Center: Desktop / Mobile Width Switcher */}
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/80 border border-white/10">
                <button
                  type="button"
                  onClick={() => setPreviewMode("desktop")}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                    previewMode === "desktop"
                      ? "bg-[#D4F542] text-black font-semibold shadow-sm"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span>🖥</span>
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewMode("mobile")}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                    previewMode === "mobile"
                      ? "bg-[#D4F542] text-black font-semibold shadow-sm"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span>📱</span>
                  <span className="hidden sm:inline">Mobile (375px)</span>
                </button>
              </div>

              {/* Right: Open in New Tab & Close */}
              <div className="flex items-center gap-3">
                <a
                  href={activePreview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-[#D4F542] hover:bg-[#c2e438] text-black font-mono text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1"
                >
                  <span>Launch Live</span>
                  <span>↗</span>
                </a>
                <button
                  type="button"
                  onClick={handleClosePreview}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-mono text-sm transition-colors"
                  aria-label="Close Preview"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body / Iframe Viewport */}
            <div className="flex-1 w-full bg-zinc-950/90 overflow-auto flex items-center justify-center p-2 sm:p-6 relative">
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-zinc-950 z-10 text-white/60">
                  <div className="w-8 h-8 border-2 border-[#D4F542] border-t-transparent rounded-full animate-spin" />
                  <span className="font-mono text-xs tracking-widest text-[#D4F542]">
                    CONNECTING TO LIVE BUILD...
                  </span>
                </div>
              )}

              <div
                className={`transition-all duration-300 relative bg-white overflow-hidden ${
                  previewMode === "desktop"
                    ? "w-full h-full rounded-xl border border-white/10 shadow-2xl"
                    : "w-[375px] h-[720px] max-h-full rounded-[40px] border-[8px] border-[#2A2F38] shadow-[0_0_50px_rgba(0,0,0,0.9)]"
                }`}
              >
                <iframe
                  src={activePreview.url}
                  title={`${activePreview.client} Interactive Preview`}
                  className="w-full h-full bg-white"
                  onLoad={() => setIframeLoading(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
