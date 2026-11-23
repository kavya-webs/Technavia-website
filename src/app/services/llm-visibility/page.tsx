import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { BookSection } from "@/components/sections/BookSection";
import { ServiceJsonLd } from "@/components/seo/JsonLd";

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

export default function LlmVisibilityPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      <ServiceJsonLd
        name="LLM Visibility (AEO / GEO)"
        description="Entity graph optimization and structured answer architecture so ChatGPT, Gemini, and Perplexity recommend your brand when buyers search your category."
        url="https://technaviatechnology.com/services/llm-visibility"
        serviceType="Generative Engine Optimization & Answer Engine Optimization"
      />

      <SubpageHero
        pageName="SERVICE · 02"
        titleLine1="LLM Visibility"
        titleLine2="(AEO / GEO)."
        highlightLine2={true}
        subtitle="When high-intent B2B buyers ask ChatGPT or Perplexity for the top software or service in your niche, we ensure your brand is cited as the primary recommendation."
        primaryCta={{ label: "Audit Your AI Visibility", href: "/book?type=audit&service=llm-visibility" }}
        secondaryCta={{ label: "View Citation Case Study", href: "/results" }}
        backgroundImage="/images/tech/llm_visibility.jpg"
        wireframeNumber="02"
        statusPills={[
          { text: "TOP 1 CITATION TARGET", variant: "brass" },
          { text: "AEO / GEO ARCHITECTURE", variant: "ghost" },
          { text: "PERPLEXITY & CHATGPT READY", variant: "outline" },
        ]}
      />

      {/* Technical Specifications Grid */}
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

      {/* Case Study Callout */}
      <section className="py-16 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1116] border border-white/[0.14] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] font-semibold">
                BENCHMARK OUTCOME · APEX SAAS
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-tight font-semibold text-white">
              +380% AI Citation Growth Across ChatGPT & Perplexity
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
              Apex was invisible in generative search despite high product quality. TECHNAVIA structured their entity graph and deployed quotable answer capsules, securing primary recommendations in 68% of relevant AI buyer queries.
            </p>
          </div>
          <Link
            href="/book?type=audit&service=llm-visibility"
            className="px-8 py-4 rounded-full bg-[#D4F542] text-black font-tight font-semibold text-sm hover:scale-105 transition-transform whitespace-nowrap self-stretch md:self-auto text-center"
          >
            Audit Your Brand on ChatGPT
          </Link>
        </div>
      </section>

      <BookSection />
    </div>
  );
}
