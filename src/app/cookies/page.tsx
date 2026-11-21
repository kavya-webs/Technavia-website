import React from "react";
import Link from "next/link";

export const metadata = {
  title: "TECHNAVIA — Cookies Policy",
};

export default function CookiesPage() {
  return (
    <div className="flex flex-col w-full pt-[100px]">
      <section className="py-20 px-6 md:px-14 border-b border-white/[0.08] max-w-[900px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Legal</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-tight font-semibold text-[#F8F8F5] tracking-tight">
          Cookies Policy
        </h1>
        <p className="mt-4 text-xs font-mono text-white/50">LAST UPDATED: 1 OCTOBER 2026</p>
      </section>

      <article className="py-16 px-6 md:px-14 max-w-[900px] mx-auto w-full flex flex-col gap-6 text-sm text-white/70 leading-relaxed font-sans">
        <h2 className="text-xl font-tight font-semibold text-white">1. What We Use</h2>
        <p>
          This website uses essential functional cookies and session storage strictly necessary to
          remember your loading screen preferences, theme settings, and booking form selections.
        </p>

        <h2 className="text-xl font-tight font-semibold text-white">2. No Ad Trackers</h2>
        <p>
          We do not deploy invasive third-party cross-site advertising tracking cookies or ad pixels.
        </p>
      </article>
    </div>
  );
}
