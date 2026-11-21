"use client";

import React from "react";
import Link from "next/link";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { ARTICLES } from "@/lib/data";

const ARTICLE_COVERS = [
  "https://framerusercontent.com/images/cYs8F5LBZmepNfUf2snm7RACtw.webp?scale-down-to=2048",
  "https://framerusercontent.com/images/Jxu37NxDNOIaWeaS5R0LXCHC4BI.webp?scale-down-to=1024",
  "https://framerusercontent.com/images/AxCkb9fHLjrXXGlXS7BA23JaGc.webp?scale-down-to=1024",
  "https://framerusercontent.com/images/m9emPuCxxggvbxwlNI25zVMWXFo.webp?scale-down-to=1024",
];

export function InsightsGrid() {
  const featured = ARTICLES[0];
  const secondary = ARTICLES.slice(1, 4);

  return (
    <section className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-24 md:py-36 px-6 md:px-14 border-t border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel>Insights</SectionLabel>
            <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1]">
              Notes from <br />
              <span className="text-[#D4F542]">the night shift.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6 max-w-md">
            <p className="text-base text-white/60 leading-relaxed font-sans md:text-right">
              What we learn wiring companies together, written so your next
              workflow runs sooner.
            </p>
            <Button href="/blogs" variant="ghost" hasArrow={false} hasLamp={true}>
              All blogs & blueprints
            </Button>
          </div>
        </div>

        {/* Asymmetric Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Big Featured Card Left */}
          <Link
            href={`/blogs/${featured.slug}`}
            className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-zinc-950 border border-white/[0.12] hover:border-[#D4F542]/50 transition-all duration-400 flex flex-col justify-between gap-8 group backdrop-blur-md relative overflow-hidden shadow-2xl"
          >
            {/* Featured Article Background Image with subtle scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src={ARTICLE_COVERS[0]}
                alt={featured.title}
                className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/80 to-transparent" />
            </div>

            <div className="relative z-10 flex items-center gap-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#D4F542] text-black font-semibold">
                {featured.type}
              </span>
              <span className="text-white/50 tracking-wider">
                {featured.date} · {featured.readTime}
              </span>
            </div>

            <div className="relative z-10 flex flex-col gap-4 my-auto pt-16">
              <h3 className="text-3xl sm:text-5xl font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors leading-[1.08] tracking-tight">
                {featured.title}
              </h3>
              <p className="text-base text-white/70 leading-relaxed max-w-xl font-sans">
                {featured.excerpt}
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/[0.1]">
              <span className="text-xs font-mono text-[#D4F542] uppercase tracking-wider group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-2">
                Read the article →
              </span>
            </div>
          </Link>

          {/* 3 Stacked Cards Right */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {secondary.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="p-6 md:p-7 rounded-2xl bg-zinc-950/70 border border-white/[0.1] hover:border-white/30 hover:bg-zinc-900/60 transition-all flex flex-col gap-3 group relative overflow-hidden"
              >
                <div className="flex items-center gap-3 text-[11px] font-mono text-white/40">
                  <span className="text-[#D4F542] font-medium">{post.type}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors leading-snug">
                  {post.title}
                </h4>
                <p className="text-xs text-white/60 line-clamp-2 leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
