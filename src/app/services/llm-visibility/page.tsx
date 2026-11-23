import React, { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck, Sparkles, Clock } from "lucide-react";
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { LlmHeroMockup } from "@/components/mockups/LlmHeroMockup";
import { ServiceBookingForm } from "@/components/forms/ServiceBookingForm";
import { AdHeaderBar } from "@/components/ui/AdHeaderBar";

export const metadata: Metadata = {
  title: "LLM Visibility & Generative Engine Optimization (AEO / GEO) | TECHNAVIA",
  description:
    "Make ChatGPT, Gemini & Perplexity recommend your brand first. In 21 days, we engineer your entity graph, JSON-LD schema, and quotable answer architecture.",
  alternates: {
    canonical: "https://technaviatechnology.com/services/llm-visibility",
  },
  openGraph: {
    title: "LLM Visibility & Generative Engine Optimization (AEO / GEO) | TECHNAVIA",
    description:
      "Make ChatGPT, Gemini & Perplexity recommend your brand first. In 21 days, we engineer your entity graph, JSON-LD schema, and quotable answer architecture.",
    url: "https://technaviatechnology.com/services/llm-visibility",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "TECHNAVIA — LLM Visibility (AEO / GEO)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLM Visibility & Generative Engine Optimization (AEO / GEO) | TECHNAVIA",
    description:
      "Make ChatGPT, Gemini & Perplexity recommend your brand first. In 21 days, we engineer your entity graph, JSON-LD schema, and quotable answer architecture.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

const PAIN_CARDS = [
  {
    num: "01",
    tag: "ZERO CITATIONS",
    title: "Invisible in Conversational AI Queries",
    desc: "Enterprise buyers ask ChatGPT and Perplexity for vendor recommendations in your niche, and your brand is completely absent while competitors get named and linked.",
  },
  {
    num: "02",
    tag: "INFERIOR RIVALS WINNING",
    title: "Losing Market Share to Weaker Competitors",
    desc: "Competitors with inferior offerings win high-intent AI recommendations simply because their entity nodes, Wikidata connections, and JSON-LD markup are crawler-accessible.",
  },
  {
    num: "03",
    tag: "ZERO VISIBILITY DATA",
    title: "Operating Without AI Search Telemetry",
    desc: "Having no visibility into what LLMs output about your category, whether models hallucinate outdated pricing, or how often buyers are steered directly to rivals.",
  },
];

const CITATION_LAYERS = [
  {
    layer: "LAYER 01",
    name: "Organization + Service JSON-LD Knowledge Graph",
    desc: "Machine-readable structured microdata linking your company to verified Wikidata, Crunchbase, and founder entities. Guarantees LLM knowledge bases recognize your brand as a primary verified category authority.",
    tag: "ENTITY ANCHOR",
  },
  {
    layer: "LAYER 02",
    name: "Quotable Answer-Capsule Syntax",
    desc: "High-density 40–60 word subject-predicate copy blocks engineered for vector search and RAG extraction. Formatted so ChatGPT and Perplexity pull your exact claims as the synthesized answer.",
    tag: "RAG EXTRACTION",
  },
  {
    layer: "LAYER 03",
    name: "Bot Crawl Authorization & IndexNow Protocol",
    desc: "Unrestricted, high-speed crawler access for OAI-SearchBot, PerplexityBot, and ClaudeBot with instant IndexNow submission upon every service or pricing update.",
    tag: "LIVE INDEXATION",
  },
];

const ENGINEERING_SPECS = [
  {
    num: "01",
    title: "Semantic Entity Graph Mapping",
    desc: "We connect your company to verified nodes on Wikidata, Crunchbase, and Schema.org with exact sameAs references, cementing your distinct category identity.",
  },
  {
    num: "02",
    title: "Quotable Answer-Capsule Syntax",
    desc: "We architect web copy into direct, high information-gain blocks engineered specifically for RAG (Retrieval-Augmented Generation) models to quote verbatim.",
  },
  {
    num: "03",
    title: "ChatGPT & Perplexity Telemetry",
    desc: "Live telemetry monitoring query variations across Perplexity, SearchGPT, Claude, and Gemini to track citation frequency, sentiment, and category rank.",
  },
  {
    num: "04",
    title: "Information Gain & Benchmark Matrices",
    desc: "We deploy proprietary benchmarks, structured comparison matrices, and FAQPage microdata that AI answer engines pull to answer high-intent buyer prompts.",
  },
  {
    num: "05",
    title: "Digital Co-occurrence Anchoring",
    desc: "We structure digital footprints so your brand co-occurs alongside top tier category leaders in technical corpora, GitHub repositories, and verified industry indexes.",
  },
  {
    num: "06",
    title: "Direct Bot Crawl Authorization",
    desc: "Clean robots.txt configurations that cleanly permit OAI-SearchBot, PerplexityBot, ClaudeBot, and GPTBot without compromising private endpoints.",
  },
];

const OFFER_STACK = [
  "Complete Organization & Service JSON-LD Knowledge Graph",
  "Full-Site Quotable Answer-Capsule Content Architecture",
  "Bot Crawl Authorization & IndexNow Instant Submission Protocol",
  "LLM Citation Baseline Audit Across 10 Live Buyer Queries",
  "Permanent Entity Disambiguation Assets (SameAs Wikidata & Socials)",
];

const FAQS = [
  {
    question: "What is AEO / GEO and how is it different from traditional SEO?",
    answer:
      "Traditional SEO optimizes for keyword rank in Google's 10 blue links. Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) structure your brand's entity graph and content architecture so Large Language Models (ChatGPT, Perplexity, Gemini) extract and cite your brand in conversational answers.",
  },
  {
    question: "How quickly do AI search engines start citing our brand?",
    answer:
      "Perplexity, SearchGPT, and Gemini utilize live web crawlers (IndexNow and direct web search) which can ingest structured entity updates and answer capsules within days to weeks of indexation.",
  },
  {
    question: "Do I need to rebuild my entire website to get LLM visibility?",
    answer:
      "No. While a sub-second Next.js architecture provides optimal crawl efficiency, our entity graph schemas, JSON-LD microdata, and answer-capsule blocks can be layered onto existing digital infrastructure without a full redesign.",
  },
  {
    question: "How do we track if AI search is actually generating leads?",
    answer:
      "We configure dedicated campaign referral tracking, brand query impression baselines, and custom direct attribution fields so you can measure traffic and revenue originating from AI citations.",
  },
];

export default function LlmVisibilityPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      {/* Schema Markup */}
      <ServiceJsonLd
        name="LLM Visibility (AEO / GEO)"
        description="Entity graph optimization and structured answer architecture so ChatGPT, Gemini, and Perplexity recommend your brand when buyers search your category."
        url="https://technaviatechnology.com/services/llm-visibility"
        serviceType="Generative Engine Optimization & Answer Engine Optimization"
      />
      <FaqJsonLd faqs={FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
          { name: "LLM Visibility (AEO / GEO)", item: "/services/llm-visibility" },
        ]}
      />

      {/* Optional Ad Mode Sticky Banner (?ad=1) */}
      <Suspense fallback={null}>
        <AdHeaderBar offerText="Claim your free 48-hr ChatGPT & Perplexity brand citation audit" />
      </Suspense>

      {/* ========================================================
          SECTION 1: HORMOZI CALLOUT + OUTCOME HERO (2-COLUMN SPLIT)
          ======================================================== */}
      <section className="relative w-full pt-16 md:pt-24 pb-20 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4F542]/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Callout, H1, Subhead, CTA, Trust Pills */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542] font-semibold">
                FOR B2B BRANDS INVISIBLE WHEN BUYERS ASK CHATGPT &amp; PERPLEXITY
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.04]">
              Make ChatGPT, Gemini &amp; Perplexity recommend your brand first—when high-intent buyers ask.
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans max-w-xl">
              Buyers no longer click 10 blue links—they ask AI who to hire. In 21 days, we engineer your entity graph, JSON-LD schema, and quotable answer architecture so AI search engines cite you over competitors.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#service-book"
                className="h-12 sm:h-14 px-7 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition-transform active:scale-95 shadow-[0_0_24px_rgba(212,245,66,0.35)] cursor-pointer"
              >
                <span>Audit My Brand on ChatGPT &amp; Perplexity</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* 3 Trust Pills */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs font-mono text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                21-Day Implementation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                OAI &amp; Perplexity Verified
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                100% Entity Ownership
              </span>
            </div>
          </div>

          {/* Right Column: Visual Hook Mockup */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <LlmHeroMockup />
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: THE COST OF INACTION (BEFORE VS. AFTER SPLIT)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">THE AI VISIBILITY LEAK</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              What happens when your category searches on AI today
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
                AI engines hallucinate your offer or recommend louder, inferior competitors because your site lacks entity schema, structured answer capsules, and crawler authorization.
              </p>
              <div className="pt-2 text-xs font-mono text-red-400/80 flex flex-col gap-1.5 border-t border-red-500/20">
                <span>• 0 citations when buyers ask ChatGPT &amp; Perplexity who to hire</span>
                <span>• Competitors capture high-intent enterprise pipeline</span>
                <span>• Outdated or hallucinated pricing output to prospects</span>
              </div>
            </div>

            {/* After 21 Days With TECHNAVIA */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#D4F542]/[0.06] border border-[#D4F542]/40 flex flex-col gap-4 shadow-[0_0_30px_rgba(212,245,66,0.1)]">
              <div className="flex items-center gap-2 text-[#D4F542] font-mono text-xs font-semibold tracking-wider uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>After 21 Days With TECHNAVIA</span>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
                Verified Organization + Service JSON-LD entity graph; RAG-friendly 40–60 word answer blocks; authorized OAI-SearchBot &amp; PerplexityBot indexing; tracked citation baseline.
              </p>
              <div className="pt-2 text-xs font-mono text-[#D4F542] flex flex-col gap-1.5 border-t border-[#D4F542]/20">
                <span>• Recommended as top category provider in live AI answers</span>
                <span>• Machine-readable entity linked to Wikidata &amp; knowledge graphs</span>
                <span>• Real telemetry tracking citation frequency and sentiment</span>
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
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">BUYER SYMPTOMS</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Who needs Generative Engine Optimization today
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
          SECTION 4: HOW THE SYSTEM WORKS (3-LAYER CITATION STACK)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">PROVEN CITATION STACK</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              The 3-layer architecture behind AI search citations
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              How we transform static websites into machine-readable knowledge anchors that ChatGPT, Perplexity, and Gemini trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CITATION_LAYERS.map((layer) => (
              <div
                key={layer.layer}
                className="p-7 rounded-2xl bg-[#14161A] border border-white/[0.1] hover:border-[#D4F542]/50 transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#D4F542] font-bold">{layer.layer}</span>
                    <span className="text-[10px] font-mono text-black bg-[#D4F542] px-2 py-0.5 rounded font-bold">
                      {layer.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors">
                    {layer.name}
                  </h3>
                  <p className="text-xs text-white/65 leading-relaxed font-sans">
                    {layer.desc}
                  </p>
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
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">AEO &amp; GEO SPECIFICATION</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Six engineering pillars of LLM citation dominance
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
              The 21-Day LLM Visibility Offer Stack
            </h2>

            <p className="text-sm text-white/70 leading-relaxed font-sans">
              Everything required to link your brand into global AI knowledge graphs and get cited when enterprise buyers search your niche.
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
              <span className="text-[11px] font-mono text-white/40">$3,000 ADDED VALUE</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col gap-1.5">
                <span className="text-xs font-mono text-[#D4F542] font-bold">BONUS 01 · $1,500 VALUE</span>
                <h4 className="text-sm font-tight font-semibold text-white">Free 48-Hour AI Visibility &amp; Citation Tear-Down</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  We run 10 buyer queries in your sector across ChatGPT, Perplexity, and Gemini to reveal your current citation gap before kickoff.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col gap-1.5">
                <span className="text-xs font-mono text-[#D4F542] font-bold">BONUS 02 · $1,500 VALUE</span>
                <h4 className="text-sm font-tight font-semibold text-white">100% Schema &amp; Entity Asset Ownership Transfer</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  All JSON-LD schemas, Wikidata anchors, and llms.txt files are deployed into your code with zero ongoing software tax.
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
              <span>THE MEASURABLE AI VISIBILITY GUARANTEE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-white">
              Verified AI Indexation or we continue engineering at zero cost.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              We guarantee your brand entity graph and structured answer capsules will be fully indexed by OAI-SearchBot and PerplexityBot within 21 days of deployment, or we continue tuning your entity nodes at zero additional cost until citations register.
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
          <ServiceBookingForm serviceType="llm-visibility" />
        </div>
      </section>
    </div>
  );
}
