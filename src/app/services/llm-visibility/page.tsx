import React, { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck, Sparkles, Clock } from "lucide-react";
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { LlmHeroMockup } from "@/components/mockups/LlmHeroMockup";
import { ServiceBookingForm } from "@/components/forms/ServiceBookingForm";
import { AdHeaderBar } from "@/components/ui/AdHeaderBar";

export const metadata: Metadata = {
  title: "Get Recommended on ChatGPT, Gemini & Perplexity | TECHNAVIA",
  description:
    "When customers ask ChatGPT or Google AI who to buy from, make sure your brand is the #1 answer. Complete 21-day AI search visibility setup.",
  alternates: {
    canonical: "https://technaviatechnology.com/services/llm-visibility",
  },
  openGraph: {
    title: "Get Recommended on ChatGPT, Gemini & Perplexity | TECHNAVIA",
    description:
      "When customers ask ChatGPT or Google AI who to buy from, make sure your brand is the #1 answer. Complete 21-day AI search visibility setup.",
    url: "https://technaviatechnology.com/services/llm-visibility",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "TECHNAVIA — AI Search Visibility (ChatGPT & Perplexity)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Recommended on ChatGPT, Gemini & Perplexity | TECHNAVIA",
    description:
      "When customers ask ChatGPT or Google AI who to buy from, make sure your brand is the #1 answer. Complete 21-day AI search visibility setup.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

const AUDIENCE_CARDS = [
  {
    num: "01",
    tag: "HIGH-TICKET BUYERS",
    title: "Service & B2B Business Owners",
    desc: "High-value buyers are researching options on ChatGPT and Perplexity before ever filling out a contact form.",
  },
  {
    num: "02",
    tag: "OUTPERFORM RIVALS",
    title: "Brands Losing to Louder Competitors",
    desc: "You deliver better work than your rivals, yet AI tools keep recommending them simply because their online info is clearer.",
  },
  {
    num: "03",
    tag: "EARLY ADVANTAGE",
    title: "Forward-Thinking Founders",
    desc: "You want to lock in early advantage on AI search now—before every competitor in your market catches on.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    num: "01",
    title: "Make Your Brand Crystal Clear",
    desc: "We add behind-the-scenes labels to your website so AI instantly knows who you are, what you sell, who you help, and why you're credible.",
    tag: "IDENTITY LABELS",
  },
  {
    num: "02",
    title: "Write Answers AI Loves to Quote",
    desc: "We add clear, direct Q&A sections and comparison blocks to your pages so AI assistants can easily pull your business as the best answer.",
    tag: "DIRECT ANSWERS",
  },
  {
    num: "03",
    title: "Open the Doors & Track Real Prompts",
    desc: "We make sure AI search bots can read your site without getting blocked, then test real buyer questions across ChatGPT and Perplexity to track your visibility.",
    tag: "PROMPT TESTING",
  },
];

const OPTIMIZE_PILLARS = [
  {
    num: "01",
    title: "Clear Brand Identity Labels",
    desc: "We connect your business name to verified online profiles and industry directories so AI tools never confuse you with another company.",
  },
  {
    num: "02",
    title: "Direct, Quotable Q&As",
    desc: "We format key answers in crisp 40-word blocks that AI tools love to lift and quote directly to customers.",
  },
  {
    num: "03",
    title: "Live Prompt Testing",
    desc: "We test dozens of real customer search questions on ChatGPT, Gemini, and Perplexity to verify when and how you get recommended.",
  },
  {
    num: "04",
    title: "Helpful Comparison Guides",
    desc: "We add structured comparison tables so AI assistants understand your advantages over alternatives.",
  },
  {
    num: "05",
    title: "Consistent Web Mentions",
    desc: "We ensure your location, services, and credentials match across official platforms so AI regards you as a trusted authority.",
  },
  {
    num: "06",
    title: "Unblocked AI Crawler Access",
    desc: "We ensure search bots from OpenAI, Perplexity, and Google can read your site fast without hitting technical walls.",
  },
];

const DELIVERABLES = [
  "Complete Business Profile & Structured Data Setup",
  "High-Value Quotable Q&A Sections Added to Key Pages",
  "Full AI Bot Access & Sitemap Submission Setup",
  "Before-and-After AI Visibility Benchmark Report Across 10 Live Customer Prompts",
  "100% Full Ownership of All Changes & Documentation",
];

const FAQS = [
  {
    question: "What is AI Search / LLM Ranking in simple terms?",
    answer:
      "Just like SEO helps you show up on Google, AI Search optimization helps your business get recommended when people type questions into ChatGPT, Perplexity, Gemini, or Google's AI answers.",
  },
  {
    question: "How is this different from regular Google SEO?",
    answer:
      "Regular SEO focuses on ranking links for short keywords. AI Search focuses on making your business the single clearest, most trustworthy answer to full customer questions—and the good news is, doing this helps your Google rankings too.",
  },
  {
    question: "How much does it cost and how long does it take?",
    answer:
      "Our full AI Visibility setup takes 21 days for a transparent fixed project fee (we'll share exact pricing on your free audit call based on your site size). You can run it as a one-time upgrade—no forced monthly lock-in.",
  },
  {
    question: "Do I need to rebuild my whole website for this?",
    answer:
      "No. In most cases, we can optimize your existing website directly without changing how it looks to visitors.",
  },
  {
    question: "Can you guarantee #1 spot in ChatGPT tomorrow?",
    answer:
      "Anyone who promises instant #1 overnight is lying. What we do guarantee is installing the exact proven foundation AI tools rely on, fixing every technical blocker, and showing you verifiable progress across real customer prompts.",
  },
];

export default function LlmVisibilityPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      {/* Schema Markup */}
      <ServiceJsonLd
        name="LLM Visibility & AI Search Optimization"
        description="Make ChatGPT, Gemini & Perplexity recommend your brand first. In 21 days, we organize your website and brand signals so AI engines cite your business."
        url="https://technaviatechnology.com/services/llm-visibility"
        serviceType="AI Search Optimization & Brand Visibility"
      />
      <FaqJsonLd faqs={FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
          { name: "LLM Visibility", item: "/services/llm-visibility" },
        ]}
      />

      {/* Optional Ad Mode Sticky Banner (?ad=1) */}
      <Suspense fallback={null}>
        <AdHeaderBar offerText="Check what ChatGPT & Perplexity say about your brand today" />
      </Suspense>

      {/* ========================================================
          SECTION 1: HERO (2-COLUMN SPLIT WITH AI CHAT MOCKUP)
          ======================================================== */}
      <section className="relative w-full pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-24 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D4F542]/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
          {/* Left Column: Direct Hook & Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14161A] border border-white/[0.12] w-fit shadow-[0_0_20px_rgba(212,245,66,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider uppercase text-white/90">
                FOR BUSINESS OWNERS WHO WANT CHATGPT &amp; GOOGLE AI TO RECOMMEND THEM
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-tight font-bold tracking-tight text-white leading-[1.08]">
              When customers ask ChatGPT or Google AI who to buy from,{" "}
              <span className="text-[#D4F542]">make sure your brand is the #1 answer.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed max-w-2xl">
              More buyers now ask AI tools for recommendations instead of scrolling through 10 Google links. In 21 days, we organize your website and online brand signals so ChatGPT, Gemini, and Perplexity trust and recommend your business over competitors.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#service-book"
                className="h-12 sm:h-14 px-8 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_0_30px_rgba(212,245,66,0.35)] cursor-pointer"
              >
                <span>Check How AI Sees My Brand (Free) →</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#how-ai-picks"
                className="h-12 sm:h-14 px-7 rounded-xl bg-[#14161A] hover:bg-white/[0.08] border border-white/[0.15] text-white font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>How It Works ↓</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs font-mono text-white/60 border-t border-white/[0.08]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                <span>CHATGPT &amp; PERPLEXITY READY</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                <span>GOOGLE AI OVERVIEWS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                <span>DONE-FOR-YOU IN 21 DAYS</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Chat Simulator Mockup */}
          <div className="lg:col-span-5 w-full">
            <LlmHeroMockup />
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: BEFORE VS. AFTER
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">THE SHIFT IN SEARCH</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Customers are already asking AI about your industry.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Without AI Search Optimization */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#14161A]/80 border border-red-500/30 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-semibold tracking-wider uppercase">
                <XCircle className="w-4 h-4" />
                <span>Without AI Search Optimization</span>
              </div>
              <div className="flex flex-col gap-3 text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                <div className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>When someone asks ChatGPT for the best business in your space, it recommends your competitors—or doesn&apos;t mention you at all.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>AI tools get confused about what you actually sell, your location, or who you help.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>You miss out on ready-to-buy customers who never even click a traditional Google ad.</span>
                </div>
              </div>
            </div>

            {/* After 21 Days With TECHNAVIA */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#D4F542]/[0.06] border border-[#D4F542]/40 flex flex-col gap-4 shadow-[0_0_30px_rgba(212,245,66,0.1)]">
              <div className="flex items-center gap-2 text-[#D4F542] font-mono text-xs font-semibold tracking-wider uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>After 21 Days With TECHNAVIA</span>
              </div>
              <div className="flex flex-col gap-3 text-sm sm:text-base text-white/90 leading-relaxed font-sans">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#D4F542] font-bold shrink-0 mt-0.5">✓</span>
                  <span>Your website is written and structured in the exact clear format AI assistants look for when picking trusted recommendations.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#D4F542] font-bold shrink-0 mt-0.5">✓</span>
                  <span>Your brand details, services, and reviews match cleanly across the web so AI sees you as the authority.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#D4F542] font-bold shrink-0 mt-0.5">✓</span>
                  <span>We test real customer prompts before and after so you can literally see the improvement.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: WHO THIS IS FOR (3 CARDS)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">MARKET FIT</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Is AI Search ranking right for your business?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AUDIENCE_CARDS.map((item) => (
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
          SECTION 4: HOW IT WORKS (3 SIMPLE PLAIN-ENGLISH STEPS)
          ======================================================== */}
      <section id="how-ai-picks" className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">THE 3-STEP ROADMAP</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              How we get ChatGPT, Gemini &amp; Perplexity to recommend you.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {HOW_IT_WORKS_STEPS.map((st) => (
              <div
                key={st.num}
                className="p-6 sm:p-8 rounded-2xl bg-[#14161A] border border-white/[0.08] flex flex-col justify-between gap-6 group hover:border-[#D4F542]/40 transition-all"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#D4F542]">STEP {st.num}</span>
                    <span className="text-[10px] font-mono uppercase text-white/40">{st.tag}</span>
                  </div>
                  <h3 className="text-xl font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: WHAT WE OPTIMIZE BEHIND THE SCENES
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">BEHIND THE SCENES</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              What we optimize behind the scenes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPTIMIZE_PILLARS.map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-2xl bg-[#14161A]/80 border border-white/[0.08] flex flex-col gap-3 hover:border-white/[0.2] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#D4F542] font-bold">{item.num}</span>
                </div>
                <h3 className="text-base font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: DELIVERABLES
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">THE COMPLETE PACKAGE</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Everything included in your 21-Day AI Visibility Upgrade.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DELIVERABLES.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#14161A] border border-white/[0.08] flex items-center gap-3.5"
              >
                <CheckCircle2 className="w-5 h-5 text-[#D4F542] shrink-0" />
                <span className="text-sm sm:text-base text-white/90 font-medium font-sans">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7: GUARANTEE BANNER
          ======================================================== */}
      <section className="py-14 sm:py-18 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#D4F542]/[0.03]">
        <div className="max-w-[1280px] mx-auto p-8 sm:p-12 rounded-3xl bg-[#14161A] border border-[#D4F542]/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_40px_rgba(212,245,66,0.1)]">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[#D4F542] font-mono text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Full-Verification Promise</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-tight font-bold text-white">
              Clear Before-and-After Proof—No Black-Box Mystery
            </h3>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-sans">
              We start by showing you exactly what ChatGPT, Gemini, and Perplexity say about your brand today, and deliver a complete before-and-after report after our 21-day build—with 100% ownership of every change we make.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="#service-book"
              className="h-12 sm:h-14 px-8 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(212,245,66,0.3)] cursor-pointer"
            >
              <span>Check How AI Sees My Brand (Free) →</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 8: REAL FAQS IN PLAIN ENGLISH
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[900px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">FREQUENTLY ASKED</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Common questions about AI Search ranking.
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
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 9: PERSONALIZED BOOKING FORM
          ======================================================== */}
      <section id="service-book" className="py-16 md:py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <ServiceBookingForm serviceType="llm-visibility" />
        </div>
      </section>
    </div>
  );
}
