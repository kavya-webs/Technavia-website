import React, { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck, Zap, Clock, ExternalLink } from "lucide-react";
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { WebDevHeroMockup } from "@/components/mockups/WebDevHeroMockup";
import { ServiceBookingForm } from "@/components/forms/ServiceBookingForm";
import { AdHeaderBar } from "@/components/ui/AdHeaderBar";

export const metadata: Metadata = {
  title: "Fast, High-Converting Websites Built for Google Search | TECHNAVIA",
  description:
    "A fast, modern website built to show up on Google and turn visitors into paying customers—in 21 days. 100% full ownership with zero monthly theme lock-in.",
  alternates: {
    canonical: "https://technaviatechnology.com/services/web-development-seo",
  },
  openGraph: {
    title: "Fast, High-Converting Websites Built for Google Search | TECHNAVIA",
    description:
      "A fast, modern website built to show up on Google and turn visitors into paying customers—in 21 days. 100% full ownership with zero monthly theme lock-in.",
    url: "https://technaviatechnology.com/services/web-development-seo",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "TECHNAVIA — High-Converting Websites Built for Google",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast, High-Converting Websites Built for Google Search | TECHNAVIA",
    description:
      "A fast, modern website built to show up on Google and turn visitors into paying customers—in 21 days. 100% full ownership with zero monthly theme lock-in.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

const AUDIENCE_CARDS = [
  {
    num: "01",
    tag: "STORE OWNERS",
    title: "E-Commerce & D2C Owners",
    desc: "You're running Instagram or Google ads, getting clicks, but your slow or cluttered store isn't turning enough visitors into buyers.",
  },
  {
    num: "02",
    tag: "ORGANIC GROWTH",
    title: "Growing Brands Invisible on Google",
    desc: "You rely completely on paid ads or referrals because your website never shows up when customers search Google for what you sell.",
  },
  {
    num: "03",
    tag: "FRESH LAUNCHES",
    title: "Founders Starting Fresh or Rebranding",
    desc: "You want a premium, trustworthy online presence launched in 3 weeks—without dealing with confusing tech talk or flaky freelancers.",
  },
];

const PROVEN_BUILDS = [
  {
    id: "seravolve",
    client: "Seravolve",
    tagline: "Skincare E-Commerce",
    feature: "Custom 3-step quiz & routine builder",
    headline: "Interactive quiz engine converting mobile ad traffic into product sales.",
    summary: "Built for instant speed so mobile shoppers never wait on slow checkout pages.",
    metric: "0.4s",
    metricLabel: "Mobile Load Speed",
    url: "https://seravolve.com/",
    previewImg: "/images/results/seravolve.webp",
  },
  {
    id: "tg-media",
    client: "TG media",
    tagline: "Growth & Video Agency",
    feature: "Bold editorial design & video showcase",
    headline: "High-impact visual showcase converting high-ticket brand inquiries.",
    summary: "Loads heavy video reels and case studies instantly without lag.",
    metric: "99/100",
    metricLabel: "Google Speed Score",
    url: "https://marketing-agency-neon.vercel.app/",
    previewImg: "/images/results/tg_media.webp",
  },
  {
    id: "cosmo-solor",
    client: "COSMO SOLOR",
    tagline: "Commercial Solar Energy",
    feature: "Clean modern showcase & story slider",
    headline: "Commercial solar showcase built to win enterprise B2B trust.",
    summary: "Clean, authoritative layout designed for commercial property decision-makers.",
    metric: "100%",
    metricLabel: "Client Ownership",
    url: "https://concept-cosmoenergy.vercel.app/",
    previewImg: "/images/results/cosmo_solor.webp",
  },
];

const FAQS = [
  {
    question: "What do you actually mean by \"SEO\"?",
    answer:
      "SEO (Search Engine Optimization) simply means setting up your website's structure, page titles, speed, and product/service descriptions so Google clearly understands what you sell—and shows your business when people search for it, bringing you free traffic over time.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on how many pages, products, or custom features (like quizzes or booking flows) you need. We give you a clear, fixed project price upfront on our free 20-minute call—no surprise hourly bills and no mandatory monthly retainer.",
  },
  {
    question: "How long does it take, and how much of my time is needed?",
    answer:
      "Most websites launch in 21 days from start to finish. You only need about 2 hours total across the entire project (one kickoff call and one review call)—we handle the design, copywriting, and setup.",
  },
  {
    question: "Do I need to be technical to update my website later?",
    answer:
      "Not at all. We set everything up so you can easily update text, images, or products yourself, and we record a short step-by-step handover video for your team.",
  },
  {
    question: "Will I own my website completely?",
    answer:
      "Yes—100%. Your domain, design, and website files belong entirely to you. You are never locked into paying us forever.",
  },
];

export default function WebDevelopmentSeoPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      {/* Schema Markup */}
      <ServiceJsonLd
        name="Web Development + Technical SEO"
        description="A fast, modern website built to show up on Google and turn visitors into paying customers—in 21 days."
        url="https://technaviatechnology.com/services/web-development-seo"
        serviceType="Web Design, Speed Optimization & Search Engine Optimization"
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
        <AdHeaderBar offerText="Claim your free 5-min website speed & conversion review" />
      </Suspense>

      {/* ========================================================
          SECTION 1: HERO (2-COLUMN SPLIT WITH PROOF MOCKUP)
          ======================================================== */}
      <section className="relative w-full pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-24 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] overflow-hidden">
        {/* Subtle Obsidian Background Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D4F542]/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
          {/* Left Column: Direct Hook & Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-7">
            {/* Hormozi Benefit Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14161A] border border-white/[0.12] w-fit shadow-[0_0_20px_rgba(212,245,66,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider uppercase text-white/90">
                FOR E-COMMERCE &amp; BUSINESS OWNERS TIRED OF SLOW WEBSITES THAT DON&apos;T SELL
              </span>
            </div>

            {/* Benefit-First Primary H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-tight font-bold tracking-tight text-white leading-[1.08]">
              A fast, modern website built to show up on Google and{" "}
              <span className="text-[#D4F542]">turn visitors into paying customers</span>—in 21 days.
            </h1>

            {/* Clear Plain-English Subhead */}
            <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed max-w-2xl">
              If your store or website takes too long to load on mobile, shoppers leave before they even see your products. We design, write, and launch a clean, high-converting website that brings in organic Google traffic—with less than 2 hours of your time.
            </p>

            {/* Two Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#service-book"
                className="h-12 sm:h-14 px-8 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_0_30px_rgba(212,245,66,0.35)] cursor-pointer"
              >
                <span>Get My Free 5-Min Website Review →</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#proven-builds"
                className="h-12 sm:h-14 px-7 rounded-xl bg-[#14161A] hover:bg-white/[0.08] border border-white/[0.15] text-white font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>See Real Websites We Built ↓</span>
              </a>
            </div>

            {/* 3 Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs font-mono text-white/60 border-t border-white/[0.08]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                <span>LOADS IN UNDER 1 SECOND</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                <span>BUILT FOR GOOGLE SEARCH</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4F542]" />
                <span>100% YOURS TO OWN</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual HUD Benchmark Card */}
          <div className="lg:col-span-5 w-full">
            <WebDevHeroMockup />
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: BEFORE VS. AFTER (THE REAL COST OF A SLOW WEBSITE)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">THE CORE PROBLEM</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Why most good businesses lose sales online.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Without TECHNAVIA */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#14161A]/80 border border-red-500/30 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-semibold tracking-wider uppercase">
                <XCircle className="w-4 h-4" />
                <span>Without TECHNAVIA</span>
              </div>
              <div className="flex flex-col gap-3 text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                <div className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>Slow pages waste your ad budget—nearly half of mobile shoppers leave if a page takes over 3 seconds.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>Confusing layouts make visitors wonder what you sell and leave without buying or inquiring.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>Hidden behind agencies that charge monthly fees just to keep your own website running.</span>
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
                  <span>Instant-loading pages on every phone so more of your paid ad clicks turn into orders and leads.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#D4F542] font-bold shrink-0 mt-0.5">✓</span>
                  <span>Clear, persuasive sales copy that explains why customers should choose you in 5 seconds.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#D4F542] font-bold shrink-0 mt-0.5">✓</span>
                  <span>Built cleanly for Google so customers searching for your products find you for free—and you own 100% of your site.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: WHO THIS IS FOR (3 SIMPLE CARDS)
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">IDEAL FIT</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Is this right for your business?
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
          SECTION 4: PROVEN BUILDS (REAL HOSTED PROOF BLOCK)
          ======================================================== */}
      <section id="proven-builds" className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">REAL PROOF ONLY</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Real websites we&apos;ve built—click and test them yourself.
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-sans">
              Don&apos;t take our word for it. Open our live builds and see how fast and smooth they feel on your phone or laptop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {PROVEN_BUILDS.map((res) => (
              <div
                key={res.id}
                className="rounded-2xl bg-[#14161A] border border-white/[0.1] overflow-hidden flex flex-col justify-between group hover:border-[#D4F542]/50 transition-all shadow-xl"
              >
                {/* Obsidian HUD Browser Frame */}
                <div className="bg-[#181B20] px-3.5 py-2 border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/70" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                    <span className="w-2 h-2 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-[10px] font-mono text-white/40 truncate max-w-[150px]">
                    {res.url.replace("https://", "").replace("/", "")}
                  </span>
                  <div className="w-6" />
                </div>

                {/* Visible Cropped Desktop Screenshot */}
                <div className="relative w-full aspect-[16/10] bg-[#0B0D10] overflow-hidden">
                  <Image
                    src={res.previewImg}
                    alt={`${res.client} live preview`}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-[#D4F542] font-semibold">
                    {res.metric} · {res.metricLabel}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono text-white/50">
                    <span className="font-semibold text-white/80">{res.client}</span>
                    <span className="text-[#D4F542] text-[11px]">{res.tagline}</span>
                  </div>
                  <h3 className="text-base font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors leading-snug">
                    {res.headline}
                  </h3>
                  <p className="text-xs text-white/65 leading-relaxed font-sans">
                    {res.feature}
                  </p>

                  <div className="pt-2">
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D4F542] hover:underline font-semibold"
                    >
                      <span>Open Live Site ↗</span>
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
          SECTION 5: SIMPLE GUARANTEE BANNER
          ======================================================== */}
      <section className="py-14 sm:py-18 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#D4F542]/[0.03]">
        <div className="max-w-[1280px] mx-auto p-8 sm:p-12 rounded-3xl bg-[#14161A] border border-[#D4F542]/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_40px_rgba(212,245,66,0.1)]">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[#D4F542] font-mono text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero-Risk Guarantee</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-tight font-bold text-white">
              Our Speed &amp; Full-Ownership Promise
            </h3>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-sans">
              Your new website will score 95+ on Google&apos;s official speed test and you own 100% of the domain, design, and files—with zero lock-in. If it doesn&apos;t hit our speed benchmark at launch, we fix it for free.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="#service-book"
              className="h-12 sm:h-14 px-8 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(212,245,66,0.3)] cursor-pointer"
            >
              <span>Get My Free 5-Min Website Review →</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: REAL FAQS IN PLAIN ENGLISH
          ======================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0E1014]">
        <div className="max-w-[900px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#D4F542]">STRAIGHT ANSWERS</span>
            <h2 className="text-2xl sm:text-4xl font-tight font-semibold tracking-tight text-white">
              Straight answers to common questions.
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
          SECTION 7: PERSONALIZED BOOKING FORM
          ======================================================== */}
      <section id="service-book" className="py-16 md:py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <ServiceBookingForm serviceType="web-development-seo" />
        </div>
      </section>
    </div>
  );
}
