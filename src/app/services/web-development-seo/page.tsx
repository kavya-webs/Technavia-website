import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { BookSection } from "@/components/sections/BookSection";
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { RESULTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Web Development + Technical SEO Studio | TECHNAVIA",
  description:
    "Conversion-engineered Next.js websites with clean semantic architecture, sub-second Core Web Vitals, and schema markup built to rank on Google from day one.",
  alternates: {
    canonical: "https://technaviatechnology.com/services/web-development-seo",
  },
  openGraph: {
    title: "Web Development + Technical SEO Studio | TECHNAVIA",
    description:
      "Conversion-engineered Next.js websites with clean semantic architecture, sub-second Core Web Vitals, and schema markup built to rank on Google from day one.",
    url: "https://technaviatechnology.com/services/web-development-seo",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "TECHNAVIA — Web Development + Technical SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development + Technical SEO Studio | TECHNAVIA",
    description:
      "Conversion-engineered Next.js websites with clean semantic architecture, sub-second Core Web Vitals, and schema markup built to rank on Google from day one.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

const ICP_CALLOUTS = [
  {
    num: "01",
    tag: "HIGH-TICKET B2B & D2C",
    title: "Tired of 3–5s Load Times",
    desc: "Losing up to 53% of mobile visitors and paid ad spend because bloated WordPress or Shopify templates crawl under heavy scripts.",
  },
  {
    num: "02",
    tag: "ORGANIC GROWTH LEADERS",
    title: "Failing Core Web Vitals",
    desc: "Seeing Google rankings slip because of unoptimized LCP, layout shifts (CLS), and poor crawl budget distribution across commercial pages.",
  },
  {
    num: "03",
    tag: "MODERN FOUNDERS",
    title: "Escaping Agency Lock-In",
    desc: "Wanting 100% source code ownership in Next.js, React 19, and TailwindCSS—with zero recurring proprietary theme taxes.",
  },
];

const FEATURES = [
  {
    num: "01",
    title: "Sub-Second Next.js Architecture",
    desc: "React 19 Server Components render your pages at the edge with zero hydration overhead, guaranteeing < 1.0s mobile LCP and 95+ Lighthouse Performance.",
  },
  {
    num: "02",
    title: "Semantic HTML5 & Crawl Efficiency",
    desc: "Clean heading tags, aria-landmarks, and zero-bloat DOM structures allow Googlebot and AI crawlers to discover and index your deepest commercial pages instantly.",
  },
  {
    num: "03",
    title: "Enterprise Schema.org Knowledge Graphs",
    desc: "Machine-readable JSON-LD for Organization, WebSite, Service, FAQPage, and Product entities linking your brand to authoritative global knowledge graphs.",
  },
  {
    num: "04",
    title: "Hormozi Offer Architecture & Copy",
    desc: "We rewrite your value proposition with high-clarity conversion copy, risk-reversal guarantees, and frictionless audit booking briefs that turn traffic into pipeline.",
  },
  {
    num: "05",
    title: "Zero-Lock-In & Full Code Ownership",
    desc: "You own the full GitHub repository, Vercel deployments, domain DNS, and documentation with no proprietary agency themes or recurring software taxes.",
  },
  {
    num: "06",
    title: "Server-Side Telemetry & Lead Tracking",
    desc: "Server-side Meta CAPI, Google Analytics 4, and webhook triggers wired cleanly without render-blocking third-party script bloat.",
  },
];

const DELIVERABLES = [
  "Custom Next.js & React 19 Production Codebase",
  "95+ Mobile & Desktop Core Web Vitals Guarantee (< 1.0s LCP)",
  "Full Technical SEO Architecture, JSON-LD Schema & XML Sitemaps",
  "Hormozi-Style High-Conversion Copywriting & Wireframes",
  "100% Code, Domain, Vercel & GitHub Repository Ownership",
];

const FAQS = [
  {
    question: "How do you guarantee 95+ Core Web Vitals on mobile?",
    answer:
      "We build with Next.js App Router and React Server Components, eliminating heavy client-side JavaScript bundles, optimizing assets as modern WebP/AVIF, and pre-rendering critical CSS at the edge.",
  },
  {
    question: "Do we own the website and source code completely?",
    answer:
      "Yes, 100%. Upon final delivery, the entire GitHub repository, Vercel deployment credentials, domain records, and Figma assets are transferred directly to your team with zero vendor lock-in.",
  },
  {
    question: "How long does the full website build take?",
    answer:
      "Exactly 21 days from blueprint sign-off to live production deployment, following our structured 5-stage sprint methodology.",
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
      <FaqJsonLd faqs={FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
          { name: "Web Development + Technical SEO", item: "/services/web-development-seo" },
        ]}
      />

      {/* 1. Hero with Standardized Breadcrumb */}
      <SubpageHero
        pageName="Web Development + Technical SEO"
        parentCrumb={{ label: "Services", href: "/services" }}
        titleLine1="Web Development +"
        titleLine2="Technical SEO."
        highlightLine2={true}
        subtitle="We engineer sub-second Next.js web applications with clean semantic architecture, structured JSON-LD schema, and conversion copy built to rank on Google from day one."
        primaryCta={{ label: "Get Your Free 5-Min Audit", href: "/book?type=audit&service=web-dev-seo" }}
        secondaryCta={{ label: "See Live Builds", href: "/results" }}
        backgroundImage="/images/tech/web_dev_seo.webp"
        wireframeNumber="01"
        statusPills={[
          { text: "95+ CORE WEB VITALS", variant: "brass" },
          { text: "< 1.0s MOBILE LCP", variant: "ghost" },
          { text: "100% CODE OWNERSHIP", variant: "outline" },
        ]}
      />

      {/* 2. "Who This Is Built For" Strip */}
      <section className="py-20 md:py-24 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full border-b border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              TARGET ICP &amp; PAIN POINTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white tracking-tight">
              Who this engineering sprint is built for.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ICP_CALLOUTS.map((icp) => (
              <div
                key={icp.num}
                className="p-7 rounded-2xl bg-[#0E1116] border border-white/[0.1] flex flex-col gap-3 shadow-lg"
              >
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/[0.06]">
                  <span className="text-[#D4F542] font-bold">{icp.num}</span>
                  <span className="text-white/40 uppercase">{icp.tag}</span>
                </div>
                <h3 className="text-xl font-tight font-semibold text-white">{icp.title}</h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  {icp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 6-Card Engineering Specification Grid */}
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

      {/* 4. "What You Get in 21 Days" Deliverables Checklist */}
      <section className="py-20 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full border-t border-white/[0.08]">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1116] border border-white/[0.12] flex flex-col lg:flex-row gap-10 items-start justify-between">
          <div className="flex flex-col gap-4 max-w-lg">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              21-DAY DELIVERABLES
            </span>
            <h3 className="text-3xl sm:text-4xl font-tight font-semibold text-white tracking-tight">
              Concrete shipped output. Zero agency fluff.
            </h3>
            <p className="text-sm text-white/70 font-sans leading-relaxed">
              Every deliverable is handed over on day 21 with full admin credentials, documentation, and source code repository access.
            </p>
          </div>

          <div className="flex flex-col gap-3.5 w-full lg:max-w-lg">
            {DELIVERABLES.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm font-sans text-white/90"
              >
                <span className="w-5 h-5 rounded-full bg-[#D4F542]/20 text-[#D4F542] flex items-center justify-center text-xs font-bold shrink-0">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Real Proof: 3 Real Hosted Builds */}
      <section className="py-24 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
                PROVEN ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white tracking-tight">
                Inspect real production builds &amp; client mirrors.
              </h2>
            </div>
            <Link
              href="/results"
              className="text-xs font-mono text-[#D4F542] hover:underline flex items-center gap-1.5"
            >
              <span>View All Benchmark Results</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {RESULTS.map((res) => (
              <div
                key={res.id}
                className="rounded-2xl overflow-hidden bg-[#14161A] border border-[#2A2F38] hover:border-[#D4F542] transition-colors flex flex-col justify-between shadow-xl group"
              >
                <div>
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#0B0D10]/95 border-b border-[#2A2F38]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                      <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                      <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                    </div>
                    <span className="text-[10px] font-mono text-white/60 truncate max-w-[140px]">
                      {res.url.replace("https://", "")}
                    </span>
                    <span className="text-[9px] font-mono text-[#D4F542] uppercase font-bold">
                      LIVE
                    </span>
                  </div>

                  {/* Screenshot */}
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-[16/10] w-full block overflow-hidden bg-black/60"
                  >
                    <Image
                      src={res.previewImg}
                      alt={res.client}
                      fill
                      sizes="380px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </a>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white/40">{res.industry}</span>
                      <span className="text-[#D4F542] font-semibold">{res.metric}</span>
                    </div>
                    <h3 className="text-xl font-tight font-semibold text-white">{res.client}</h3>
                    <p className="text-xs text-white/70 font-sans leading-relaxed line-clamp-2">
                      {res.headline}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#D4F542] hover:bg-[#c3e634] text-black font-tight font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Launch Live Preview ↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNAVIA Engineering Guarantee Strip */}
      <section className="py-16 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0E1116] via-[#14161A] to-[#0E1116] border border-[#D4F542]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              TECHNAVIA ENGINEERING GUARANTEE
            </span>
            <h3 className="text-2xl sm:text-4xl font-tight font-semibold text-white">
              Our 95+ Speed &amp; Zero-Lock-In Guarantee
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

      {/* 7. 3 Service-Specific FAQs */}
      <section className="py-20 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white tracking-tight">
              Frequently asked about Web Dev &amp; Technical SEO.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1116] border border-white/[0.1] flex flex-col gap-3 shadow-lg"
              >
                <span className="text-xs font-mono text-[#D4F542] font-semibold">
                  0{idx + 1} · QUESTION
                </span>
                <h3 className="text-base font-tight font-semibold text-white leading-snug">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bottom Brief Form (Pre-selected) */}
      <BookSection defaultService="Website + Technical SEO" />
    </div>
  );
}
