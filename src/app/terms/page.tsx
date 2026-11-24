import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service — Web Architecture Agreements | TECHNAVIA",
  description:
    "Standard terms of service, intellectual property ownership, 100% source code handover policies, and 21-day sprint agreements (5 days website + 16 days SEO) for TECHNAVIA.",
  alternates: {
    canonical: "https://technaviatechnology.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full pt-[100px]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Terms of Service", item: "/terms" },
        ]}
      />
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
          TECHNAVIA provides web engineering, technical SEO, LLM visibility optimization, custom AI
          automation wiring, and ongoing performance monitoring services under fixed-price statements of work.
        </p>

        <h2 className="text-xl font-tight font-semibold text-white">2. Intellectual Property & Ownership</h2>
        <p>
          All custom website source code, schema architecture, workflow pipelines, and documentation developed
          for your business become your sole property upon payment. You retain 100% ownership of your digital assets.
        </p>

        <h2 className="text-xl font-tight font-semibold text-white">3. Third-Party Software Dependencies</h2>
        <p>
          Systems depend upon third-party platforms and APIs (e.g., search engines, LLM providers, CRM platforms).
          While TECHNAVIA builds robust error-handling into all architectures, we are not liable for outages caused
          by third-party vendor service interruptions.
        </p>
      </article>
    </div>
  );
}
