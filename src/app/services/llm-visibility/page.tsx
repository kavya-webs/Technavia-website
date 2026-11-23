import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { BookSection } from "@/components/sections/BookSection";
import { ServiceJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "LLM Visibility (AEO / GEO) — Generative Engine Optimization | TECHNAVIA",
  description:
    "Entity graph optimization and structured answer architecture so ChatGPT, Gemini, and Perplexity recommend your brand when buyers search your category.",
  alternates: {
    canonical: "https://technaviatechnology.com/services/llm-visibility",
  },
  openGraph: {
    title: "LLM Visibility (AEO / GEO) — Generative Engine Optimization | TECHNAVIA",
    description:
      "Entity graph optimization and structured answer architecture so ChatGPT, Gemini, and Perplexity recommend your brand when buyers search your category.",
    url: "https://technaviatechnology.com/services/llm-visibility",
  },
};

const ICP_CALLOUTS = [
  {
    num: "01",
    tag: "B2B TECH & SERVICES",
    title: "Invisible on Generative AI",
    desc: "When enterprise buyers prompt ChatGPT or Perplexity for solutions in your niche, your competitors get cited while your brand is completely absent.",
  },
  {
    num: "02",
    tag: "CATEGORY PIONEERS",
    title: "Losing to Inferior Rivals",
    desc: "Competitors with inferior offerings win AI recommendations simply because their entity graphs, Wikipedia/Wikidata nodes, and Schema markup are structured.",
  },
  {
    num: "03",
    tag: "GROWTH DIRECTORS",
    title: "Seeking Verifiable Telemetry",
    desc: "Need real data on how often AI models reference your brand, what sentiment is attached, and how to engineer quotable content blocks for RAG citation.",
  },
];

const GEO_SPECIFICATIONS = [
  {
    num: "01",
    title: "Semantic Entity Graph Mapping",
    desc: "We connect your company to verified nodes on Wikidata, Crunchbase, and Schema.org with exact sameAs references, ensuring AI algorithms identify you as a distinct category entity.",
  },
  {
    num: "02",
    title: "Quotable Answer-Capsule Syntax",
    desc: "We architect your web copy into direct, high information-gain subject-predicate blocks engineered specifically for RAG (Retrieval-Augmented Generation) models to quote verbatim.",
  },
  {
    num: "03",
    title: "ChatGPT & Perplexity Citation Tracking",
    desc: "Live telemetry monitoring query variations across Perplexity AI, SearchGPT, Claude, and Gemini to track citation frequency, sentiment, and category positioning.",
  },
  {
    num: "04",
    title: "Information Gain & Comparative Tables",
    desc: "We deploy proprietary benchmarks, structured comparison matrices, and FAQPage microdata that AI answer engines extract to answer high-intent buyer research prompts.",
  },
  {
    num: "05",
    title: "Cross-Corpus Digital Co-occurrence",
    desc: "We structure digital footprints so your brand co-occurs alongside top tier category leaders in technical corpora, GitHub repositories, and verified industry indexes.",
  },
  {
    num: "06",
    title: "Direct Bot Crawl Authorization",
    desc: "Our server configurations cleanly permit OAI-SearchBot, PerplexityBot, ClaudeBot, and GPTBot without compromising private endpoints or application security.",
  },
];

const DELIVERABLES = [
  "Complete Entity Knowledge Graph & Schema.org Implementation",
  "Full-Site Quotable Answer-Capsule Content Architecture",
  "Bot Crawl Permissions & IndexNow Instant Submission Protocol",
  "LLM Citation Baseline & Perplexity/ChatGPT Telemetry Audit",
  "100% Entity Ownership & Brand Representation Assets",
];

const CITATION_LAYERS = [
  {
    layer: "LAYER 01",
    name: "Organization + Service JSON-LD Graph",
    desc: "Machine-readable structured data linking your company to Wikidata, Crunchbase, and founder entities. Guarantees LLM knowledge bases recognize your brand as a verified authority.",
    tag: "ENTITY ANCHOR",
  },
  {
    layer: "LAYER 02",
    name: "Quotable Answer-Capsule Syntax",
    desc: "High-density subject-predicate copy engineered for vector search and RAG extraction. Formatted so ChatGPT and Perplexity pull your exact claims as the answer summary.",
    tag: "RAG EXTRACTION",
  },
  {
    layer: "LAYER 03",
    name: "Bot Crawl Authorization & IndexNow",
    desc: "Unrestricted, high-speed crawler access for OAI-SearchBot, PerplexityBot, and ClaudeBot with instant IndexNow pinging upon every product or service update.",
    tag: "LIVE INDEXATION",
  },
];

const FAQS = [
  {
    question: "What is AEO / GEO and how is it different from traditional SEO?",
    answer:
      "Traditional SEO focuses on keywords and backlinks to rank in Google blue links. Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) structure your brand entity and content so Large Language Models (ChatGPT, Perplexity, Gemini) extract and cite you in conversational answers.",
  },
  {
    question: "How quickly do AI search engines start citing our brand?",
    answer:
      "Perplexity, SearchGPT, and Gemini utilize live web crawlers (IndexNow and direct web search) which can ingest structured entity updates and answer capsules within days to weeks of indexation.",
  },
  {
    question: "Do I need to rebuild my entire website to get LLM visibility?",
    answer:
      "No. While a sub-second Next.js architecture provides optimal crawl efficiency, our entity graph schemas, JSON-LD microdata, and answer-capsule blocks can be layered onto existing digital infrastructure.",
  },
];

export default function LlmVisibilityPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      <ServiceJsonLd
        name="LLM Visibility (AEO / GEO)"
        description="Entity graph optimization and structured answer architecture so ChatGPT, Gemini, and Perplexity recommend your brand when buyers search your category."
        url="https://technaviatechnology.com/services/llm-visibility"
        serviceType="Generative Engine Optimization & Answer Engine Optimization"
      />
      <FaqJsonLd faqs={FAQS} />

      {/* 1. Hero with Standardized Breadcrumb */}
      <SubpageHero
        pageName="LLM Visibility (AEO / GEO)"
        parentCrumb={{ label: "Services", href: "/services" }}
        titleLine1="LLM Visibility"
        titleLine2="(AEO / GEO)."
        highlightLine2={true}
        subtitle="When high-intent B2B buyers ask ChatGPT or Perplexity for the top software or service in your niche, we ensure your brand is cited as the primary recommendation."
        primaryCta={{ label: "Get Your Free 5-Min Audit", href: "/book?type=audit&service=llm-visibility" }}
        secondaryCta={{ label: "See Live Builds", href: "/results" }}
        backgroundImage="/images/tech/llm_visibility.jpg"
        wireframeNumber="02"
        statusPills={[
          { text: "TOP 1 CITATION TARGET", variant: "brass" },
          { text: "AEO / GEO ARCHITECTURE", variant: "ghost" },
          { text: "PERPLEXITY & CHATGPT READY", variant: "outline" },
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
              Who this AI search sprint is built for.
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
              GENERATIVE ENGINE OPTIMIZATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-tight font-semibold text-white tracking-tight leading-[1.05]">
              Engineered to get cited when buyers prompt generative search.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GEO_SPECIFICATIONS.map((spec) => (
              <div
                key={spec.num}
                className="p-8 rounded-3xl bg-[#0E1116] border border-white/[0.12] flex flex-col justify-between gap-6 hover:border-[#D4F542]/40 transition-colors shadow-lg"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <span className="font-mono text-2xl font-bold text-[#D4F542]">
                    {spec.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-tight font-semibold text-white">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-white/70 font-sans leading-relaxed">
                    {spec.desc}
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
              Production AI search infrastructure.
            </h3>
            <p className="text-sm text-white/70 font-sans leading-relaxed">
              Every deliverable is verified with live prompt evaluations across ChatGPT, Perplexity, Claude, and Google Gemini before project sign-off.
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

      {/* 5. Real Proof: AEO / GEO Architecture Blueprint (Replacing Apex SaaS) */}
      <section className="py-24 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full border-t border-white/[0.08]">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1116] border border-[#2A2F38] flex flex-col gap-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
                  AEO / GEO ARCHITECTURE BLUEPRINT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white tracking-tight">
                The 3-Layer AI Citation Stack
              </h2>
              <p className="text-sm text-white/70 font-sans leading-relaxed">
                How TECHNAVIA structures digital brand entities so Large Language Models cite your company as the top category answer.
              </p>
            </div>

            <Link
              href="/book?type=audit&service=llm-visibility"
              className="px-6 py-3 rounded-full bg-[#D4F542] hover:bg-[#c3e634] text-black font-tight font-semibold text-xs tracking-wider uppercase transition-all whitespace-nowrap self-start md:self-auto shadow-[0_0_16px_rgba(212,245,66,0.25)]"
            >
              Audit Your Brand on ChatGPT &amp; Perplexity →
            </Link>
          </div>

          {/* 3-Layer Visual Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CITATION_LAYERS.map((layer, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#14161A] border border-white/[0.1] flex flex-col justify-between gap-4 relative overflow-hidden"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/[0.06]">
                    <span className="text-[#D4F542] font-semibold">{layer.layer}</span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.06] text-white/60 text-[10px] uppercase">
                      {layer.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-tight font-semibold text-white">
                    {layer.name}
                  </h3>
                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    {layer.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40">
                  <span>ACTIVE TELEMETRY</span>
                  <span className="text-[#D4F542]">VERIFIED</span>
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
              Our AI Visibility &amp; Verifiable Citation Guarantee
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
              We guarantee your company entity is fully mapped into Google&apos;s Knowledge Graph and major AI training datasets with valid schema and direct crawler access—or we refine your entity graph for free.
            </p>
          </div>
          <Link
            href="/book?type=audit&service=llm-visibility"
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
              Frequently asked about LLM Visibility (AEO / GEO).
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
      <BookSection defaultService="LLM Visibility (ChatGPT/Perplexity)" />
    </div>
  );
}
