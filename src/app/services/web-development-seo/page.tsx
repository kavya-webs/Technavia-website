import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { BookSection } from "@/components/sections/BookSection";
import { ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Web Development + Technical SEO — Sub-Second Next.js Architecture | TECHNAVIA",
  description:
    "Conversion-engineered Next.js websites with clean semantic architecture, sub-second Core Web Vitals, and schema markup built to rank from day one.",
  alternates: {
    canonical: "https://technaviatechnology.com/services/web-development-seo",
  },
  openGraph: {
    title: "Web Development + Technical SEO — Sub-Second Next.js Architecture | TECHNAVIA",
    description:
      "Conversion-engineered Next.js websites with clean semantic architecture, sub-second Core Web Vitals, and schema markup built to rank from day one.",
    url: "https://technaviatechnology.com/services/web-development-seo",
  },
};

const FEATURES = [
  {
    num: "01",
    title: "Sub-Second Next.js Architecture",
    desc: "React 19 Server Components render your pages at the edge with zero hydration overhead, guaranteeing < 1.0s mobile LCP and 95+ Lighthouse Performance.",
  },
  {
    num: "02",
    title: "Semantic HTML5 & Crawl Budget Efficiency",
    desc: "Clean heading tags, aria-landmarks, and zero-bloat DOM structures allow Googlebot and AI crawlers to discover and index your deepest commercial pages instantly.",
  },
  {
    num: "03",
    title: "Enterprise Schema.org Knowledge Graphs",
    desc: "Machine-readable JSON-LD for Organization, WebSite, Service, FAQPage, and Product entities linking your brand to authoritative global knowledge graphs.",
  },
  {
    num: "04",
    title: "Hormozi Offer Architecture & Copywriting",
    desc: "We rewrite your value proposition with high-clarity conversion copy, risk-reversal guarantees, and frictionless audit booking briefs that turn traffic into pipeline.",
  },
  {
    num: "05",
    title: "Zero-Lock-In & 100% Code Ownership",
    desc: "You own the full GitHub repository, Vercel deployments, domain DNS, and documentation with no proprietary agency themes or recurring software taxes.",
  },
  {
    num: "06",
    title: "Automated Tracking & Lead Telemetry",
    desc: "Server-side Meta CAPI, Google Analytics 4, and webhook triggers wired cleanly without render-blocking third-party script bloat.",
  },
];

export default function WebDevelopmentSeoPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      <ServiceJsonLd
        name="Web Development + Technical SEO"
        description="Conversion-engineered Next.js websites with clean semantic architecture, sub-second Core Web Vitals, and schema markup built to rank from day one."
        url="https://technaviatechnology.com/services/web-development-seo"
        serviceType="Web Engineering & Technical Search Engine Optimization"
      />

      <SubpageHero
        pageName="SERVICE · 01"
        titleLine1="Web Development +"
        titleLine2="Technical SEO."
        highlightLine2={true}
        subtitle="We engineer sub-second Next.js web applications with clean semantic architecture, structured JSON-LD schema, and conversion copy built to rank on Google from day one."
        primaryCta={{ label: "Get Your Free 5-Min Audit", href: "/book?type=audit&service=web-dev-seo" }}
        secondaryCta={{ label: "View Speed Benchmarks", href: "/results" }}
        backgroundImage="/images/tech/web_dev_seo.jpg"
        wireframeNumber="01"
        statusPills={[
          { text: "95+ CORE WEB VITALS", variant: "brass" },
          { text: "SUB-SECOND LOAD", variant: "ghost" },
          { text: "100% CODE OWNERSHIP", variant: "outline" },
        ]}
      />

      {/* Technical Specifications Grid */}
      <section className="py-24 md:py-32 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              ENGINEERING SPECIFICATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-tight font-semibold text-white tracking-tight leading-[1.05]">
              Built for speed, Google rankings, and high-ticket B2B conversions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feat) => (
              <div
                key={feat.num}
                className="p-8 rounded-3xl bg-[#0E1116] border border-white/[0.12] flex flex-col justify-between gap-6 hover:border-[#D4F542]/40 transition-colors shadow-lg"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <span className="font-mono text-2xl font-bold text-[#D4F542]">
                    {feat.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-tight font-semibold text-white">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-white/70 font-sans leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed & Zero-Lock-In Guarantee */}
      <section className="py-16 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0E1116] via-[#14161A] to-[#0E1116] border border-[#D4F542]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              TECHNAVIA ENGINEERING GUARANTEE
            </span>
            <h3 className="text-2xl sm:text-4xl font-tight font-semibold text-white">
              Our 95+ Speed & Zero-Lock-In Guarantee
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
              Every site we ship passes mobile Core Web Vitals (95+ Lighthouse Performance) and comes with 100% source-code ownership—or we optimize it free until it does.
            </p>
          </div>
          <Link
            href="/book?type=audit&service=web-dev-seo"
            className="px-8 py-4 rounded-full bg-[#D4F542] text-black font-tight font-semibold text-sm hover:scale-105 transition-transform whitespace-nowrap self-stretch md:self-auto text-center"
          >
            Claim Your 5-Min Audit
          </Link>
        </div>
      </section>

      <BookSection />
    </div>
  );
}
