import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Runbook — Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full pt-[100px]">
      <section className="py-20 px-6 md:px-14 border-b border-white/[0.08] max-w-[900px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Legal</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-tight font-semibold text-[#F8F8F5] tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-4 text-xs font-mono text-white/50">LAST UPDATED: 1 OCTOBER 2026</p>
      </section>

      <article className="py-16 px-6 md:px-14 max-w-[900px] mx-auto w-full flex flex-col gap-6 text-sm text-white/70 leading-relaxed font-sans">
        <h2 className="text-xl font-tight font-semibold text-white">1. Scope of Work</h2>
        <p>
          Runbook provides automation consulting, software integration, API workflow wiring, and
          ongoing monitoring services under fixed-price statements of work.
        </p>

        <h2 className="text-xl font-tight font-semibold text-white">2. Intellectual Property & Ownership</h2>
        <p>
          All custom workflow configurations, scripts, and documentation developed for your business
          become your sole property upon payment. You retain 100% ownership of your automated systems.
        </p>

        <h2 className="text-xl font-tight font-semibold text-white">3. Third-Party Software Dependencies</h2>
        <p>
          Workflows depend upon third-party APIs (e.g., Stripe, HubSpot, Xero). While Runbook builds
          robust error-handling into all pipelines, we are not liable for outages caused by third-party
          vendor service interruptions.
        </p>
      </article>
    </div>
  );
}
