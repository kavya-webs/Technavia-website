import React, { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck, Zap, Code2, Clock, ExternalLink, Sparkles } from "lucide-react";
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { WebDevHeroMockup } from "@/components/mockups/WebDevHeroMockup";
import { ServiceBookingForm } from "@/components/forms/ServiceBookingForm";
import { AdHeaderBar } from "@/components/ui/AdHeaderBar";
import { RESULTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sub-Second Next.js Web Development + Technical SEO Studio | TECHNAVIA",
  description:
    "We replace bloated WordPress, Webflow, and generic agency builds with sub-second Next.js architecture, technical SEO schema, and Hormozi-grade conversion copy in 21 days.",
  alternates: {
    canonical: "https://technaviatechnology.com/services/web-development-seo",
  },
  openGraph: {
    title: "Sub-Second Next.js Web Development + Technical SEO Studio | TECHNAVIA",
    description:
      "We replace bloated WordPress, Webflow, and generic agency builds with sub-second Next.js architecture, technical SEO schema, and Hormozi-grade conversion copy in 21 days.",
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
    title: "Sub-Second Next.js Web Development + Technical SEO Studio | TECHNAVIA",
    description:
      "We replace bloated WordPress, Webflow, and generic agency builds with sub-second Next.js architecture, technical SEO schema, and Hormozi-grade conversion copy in 21 days.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

const PAIN_CARDS = [
  {
    num: "01",
    tag: "MOBILE DROP-OFF",
    title: "Tired of 3–5s Mobile Load Times",
    desc: "Losing up to 53% of mobile visitors and paid ad spend before the headline even renders because bloated WordPress, Webflow, or Shopify templates crawl under heavy script waterfalls.",
  },
  {
    num: "02",
    tag: "ORGANIC SUPPRESSION",
    title: "Failing Google Core Web Vitals",
    desc: "Seeing Google rankings slip because of unoptimized LCP, layout shifts (CLS), and poor crawl budget distribution across commercial pages.",
  },
  {
    num: "03",
    tag: "VENDOR LOCK-IN",
    title: "Trapped in Agency & Theme Lock-In",
    desc: "Paying continuous monthly retainer taxes for slow theme updates instead of owning 100% clean Next.js React 19 source code deployed on Vercel with zero vendor dependency.",
  },
];

const ENGINEERING_SPECS = [
  {
    num: "01",
    title: "Sub-Second Next.js React 19",
    desc: "React Server Components pre-render at the edge with zero hydration bloat, guaranteeing < 1.0s mobile LCP and 95+ Lighthouse.",
  },
  {
    num: "02",
    title: "Semantic HTML & Crawl Efficiency",
    desc: "Clean heading hierarchies, ARIA landmarks, and minimal DOM depth ensure Googlebot and AI crawlers index commercial pages on first pass.",
  },
  {
    num: "03",
    title: "Enterprise JSON-LD Knowledge Graph",
    desc: "Organization, Service, and WebSite schemas link your brand to Google's Knowledge Graph with disambiguating sameAs anchors.",
  },
  {
    num: "04",
    title: "Hormozi Offer Architecture",
    desc: "Benefit-first hero headlines, risk-reversal guarantees, and frictionless audit booking briefs engineered to double lead conversions.",
  },
  {
    num: "05",
    title: "100% Code & Asset Ownership",
    desc: "You own the complete GitHub repository, Vercel production deployment, and design assets with zero recurring proprietary theme tax.",
  },
  {
    num: "06",
    title: "Server-Side Telemetry & Lead Tracking",
    desc: "Server-side Meta CAPI and webhook triggers fire instantly without render-blocking third-party tracking scripts slowing mobile paint.",
  },
];

const OFFER_STACK = [
  "Custom Next.js 16 + React 19 Production Codebase",
  "95+ Mobile & Desktop Core Web Vitals Guarantee (< 1.0s LCP)",
  "Full Technical SEO Architecture, JSON-LD Schema & XML Sitemaps",
  "Hormozi-Style High-Conversion Copywriting & Wireframe System",
  "Complete Vercel CI/CD Pipeline & GitHub Repository Transfer",
];

const FAQS = [
  {
    question: "How do you guarantee 95+ Core Web Vitals on mobile?",
    answer:
      "We build with Next.js App Router and React Server Components, pre-rendering HTML at the edge, converting all imagery to modern WebP/AVIF formats, eliminating heavy runtime CSS libraries, and removing render-blocking script waterfalls.",
  },
  {
    question: "Do we own the website and source code completely?",
    answer:
      "Yes, 100%. Upon final delivery, the full GitHub repository, Vercel deployment credentials, domain DNS configurations, and Figma assets are transferred directly to your organization with zero vendor lock-in or recurring theme fees.",
  },
  {
    question: "How much of my team's time is required during the 21 days?",
    answer:
      "Under 2 hours total across the entire 21-day sprint: a 30-minute technical kickoff call, a 30-minute wireframe and offer review, and a 30-minute pre-launch sign-off. We handle 100% of the engineering, copy, and performance profiling.",
  },
  {
    question: "Can you migrate our existing content, blogs, and SEO rankings safely?",
    answer:
      "Yes. We configure precise 1:1 301 redirect mappings in next.config.mjs, preserve existing canonical URL structures, and audit every indexing signal to ensure zero organic search drop or broken backlinks during launch.",
  },
];

export default function WebDevelopmentSeoPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      {/* Schema Markup */}
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

      {/* Optional Ad Mode Sticky Banner (?ad=1) */}
      <Suspense fallback={null}>
        <AdHeaderBar offerText="Claim your free 5-min site speed & conversion audit" />
      </Suspense>

      {/* ========================================================
          SECTION 1: HORMOZI CALLOUT + OUTCOME HERO (2-COLUMN SPLIT)
          ======================================================== */}
      <section className="relative w-full pt-16 md:pt-24 pb-20 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4F542]/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Callout, H1, Subhead, CTA, Trust Pills */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542] font-semibold">
                FOR B2B FOUNDERS & D2C BRANDS LOSING LEADS TO SLOW TEMPLATES
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.04]">
              Launch a sub-second website engineered to rank #1 on Google and double conversions—in 21 days.
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans max-w-xl">
              We replace bloated WordPress, Webflow, and generic agency builds with custom Next.js architecture, technical SEO schema, and Hormozi-grade conversion copy—requiring under 2 hours of your time.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#service-book"
                className="h-12 sm:h-14 px-7 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition-transform active:scale-95 shadow-[0_0_24px_rgba(212,245,66,0.35)] cursor-pointer"
              >
                <span>Get My Free 5-Min Site & Speed Tear-Down</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* 3 Trust Pills */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs font-mono text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                21-Day Turnaround
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                95+ Core Web Vitals Guarantee
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                100% Code Ownership
              </span>
            </div>
          </div>

          {/* Right Column: Service-Specific Visual Hook */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <WebDevHeroMockup />
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: THE COST OF INACTION (BEFORE VS. AFTER SPLIT)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">THE HIDDEN REVENUE LEAK</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              The real cost of keeping your current website template
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Without TECHNAVIA */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-red-950/[0.12] border border-red-500/30 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-semibold tracking-wider uppercase">
                <XCircle className="w-4 h-4" />
                <span>Without TECHNAVIA (Current State)</span>
              </div>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                3–5s mobile load drops 40%+ of paid ad clicks before the headline even renders; messy DOM blocks Google indexing; generic copy blends in with every competitor.
              </p>
              <div className="pt-2 text-xs font-mono text-red-400/80 flex flex-col gap-1.5 border-t border-red-500/20">
                <span>• 53% mobile visitors bounce after 3 seconds</span>
                <span>• Failing Google Core Web Vitals suppresses organic rankings</span>
                <span>• Vendor locked into proprietary agency templates</span>
              </div>
            </div>

            {/* After 21 Days With TECHNAVIA */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#D4F542]/[0.06] border border-[#D4F542]/40 flex flex-col gap-4 shadow-[0_0_30px_rgba(212,245,66,0.1)]">
              <div className="flex items-center gap-2 text-[#D4F542] font-mono text-xs font-semibold tracking-wider uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>After 21 Days With TECHNAVIA</span>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
                &lt; 1.0s mobile LCP; clean semantic HTML + JSON-LD knowledge graph; conversion-engineered hero &amp; offer stack; 100% GitHub &amp; Vercel ownership.
              </p>
              <div className="pt-2 text-xs font-mono text-[#D4F542] flex flex-col gap-1.5 border-t border-[#D4F542]/20">
                <span>• 95+ PageSpeed score across mobile &amp; desktop</span>
                <span>• Commercial pages rank higher on Google search</span>
                <span>• Zero vendor lock-in—you own every line of code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: WHO THIS IS BUILT FOR (3 PAIN-DRIVEN CARDS)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">ICP QUALIFICATION</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Who this 21-day sprint is engineered for
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PAIN_CARDS.map((item) => (
              <div
                key={item.num}
                className="p-6 sm:p-7 rounded-2xl bg-[#14161A]/80 border border-white/[0.08] hover:border-white/[0.2] transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#D4F542] font-bold">{item.num}</span>
                    <span className="text-[10px] font-mono uppercase text-white/40 tracking-wider">{item.tag}</span>
                  </div>
                  <h3 className="text-lg font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: HOW THE SYSTEM WORKS (REAL HOSTED PROOF BLOCK)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">REAL HOSTED BUILDS</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Proven Next.js architecture running live in production
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              We never show Figma mockups as finished work. Inspect our real, sub-second client builds live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {RESULTS.map((res) => (
              <div
                key={res.id}
                className="rounded-2xl bg-[#14161A] border border-white/[0.1] overflow-hidden flex flex-col justify-between group hover:border-[#D4F542]/50 transition-all shadow-xl"
              >
                <div className="relative w-full aspect-[16/10] bg-black/40 overflow-hidden">
                  <Image
                    src={res.previewImg}
                    alt={`${res.client} live preview`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161A] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono text-[#D4F542] font-semibold">
                    {res.metric} {res.metricSub}
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono text-white/40">
                    <span>{res.client}</span>
                    <span>{res.industry}</span>
                  </div>
                  <h3 className="text-base font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors leading-snug">
                    {res.headline}
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                    {res.summary}
                  </p>

                  <div className="pt-2">
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D4F542] hover:underline"
                    >
                      <span>Launch Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: ENGINEERING SPECIFICATION (6 COMPACT CARDS)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">TECHNICAL STACK</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Six engineering pillars of our high-speed Next.js builds
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGINEERING_SPECS.map((spec) => (
              <div
                key={spec.num}
                className="p-6 rounded-2xl bg-[#14161A]/80 border border-white/[0.08] hover:border-white/[0.2] transition-all flex flex-col gap-2.5"
              >
                <span className="text-xs font-mono text-[#D4F542] font-semibold">{spec.num}</span>
                <h3 className="text-base font-tight font-semibold text-white">{spec.title}</h3>
                <p className="text-xs text-white/65 leading-relaxed font-sans">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: THE 21-DAY GRAND SLAM OFFER STACK
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4F542]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542] font-semibold">
                COMPLETE SPRINT DELIVERABLES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-tight font-semibold tracking-tight text-white leading-tight">
              The 21-Day High-Conversion Next.js Offer Stack
            </h2>

            <p className="text-sm text-white/70 leading-relaxed font-sans">
              Everything required to engineer a category-leading digital flagship that ranks at the top of Google and converts paid ad clicks on day one.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {OFFER_STACK.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-white/85 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#D4F542] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Client Time Needed Tag */}
            <div className="pt-2 text-xs font-mono text-[#D4F542] flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Total Client Time Needed: &lt; 2 Hours Across Entire 21-Day Sprint</span>
            </div>
          </div>

          {/* 2 Included Bonuses Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#14161A] border border-[#D4F542]/40 shadow-[0_0_30px_rgba(212,245,66,0.12)] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="text-xs font-mono text-[#D4F542] font-semibold uppercase tracking-wider">
                INCLUDED SPRINT BONUSES
              </span>
              <span className="text-[11px] font-mono text-white/40">$2,400 ADDED VALUE</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col gap-1.5">
                <span className="text-xs font-mono text-[#D4F542] font-bold">BONUS 01 · $1,200 VALUE</span>
                <h4 className="text-sm font-tight font-semibold text-white">Free 48-Hour Technical &amp; Speed Tear-Down</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  We profile your current site&apos;s Core Web Vitals, DOM bloat, and crawl bottlenecks with a custom Loom video before kickoff.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col gap-1.5">
                <span className="text-xs font-mono text-[#D4F542] font-bold">BONUS 02 · $1,200 VALUE</span>
                <h4 className="text-sm font-tight font-semibold text-white">100% Source Code &amp; Asset Ownership Transfer</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Zero proprietary agency software, zero recurring monthly licensing taxes. You hold the master GitHub and Vercel keys.
                </p>
              </div>
            </div>

            <a
              href="#service-book"
              className="h-12 w-full rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(212,245,66,0.3)] cursor-pointer"
            >
              <span>Claim This Offer &amp; Book Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7: RISK REVERSAL GUARANTEE BANNER
          ======================================================== */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 border-b border-white/[0.08]">
        <div className="max-w-[1100px] mx-auto p-8 sm:p-12 rounded-3xl bg-[#14161A] border-2 border-[#D4F542] shadow-[0_0_40px_rgba(212,245,66,0.18)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[#D4F542] font-mono text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5 text-[#D4F542]" />
              <span>THE SUB-SECOND OR WE KEEP CODING GUARANTEE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-white">
              95+ Mobile Score Guarantee or we work for free.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              If your new Next.js website does not achieve a 95+ mobile performance score or load in under 1.0s on Google PageSpeed Insights upon delivery, we will profile, refactor, and optimize the codebase at our own expense until it passes—no excuses.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="#service-book"
              className="h-12 sm:h-14 px-8 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(212,245,66,0.3)] cursor-pointer"
            >
              <span>Get Started Risk-Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 8: OBJECTION-CRUSHING FAQS (4 SERVICE-SPECIFIC Q&AS)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[900px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">STRAIGHT ANSWERS</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#14161A] border border-white/[0.08] flex flex-col gap-2.5"
              >
                <h3 className="text-base font-tight font-semibold text-white flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-[#D4F542] font-mono text-xs">0{idx + 1}</span>
                </h3>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 9: DEDICATED SERVICE-PERSONALIZED 2-STEP BOOKING FORM
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <ServiceBookingForm serviceType="web-development-seo" />
        </div>
      </section>
    </div>
  );
}
