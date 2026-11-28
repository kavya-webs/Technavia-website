import React, { Suspense } from "react";
import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { BookForm } from "./BookForm";
import { CheckCircle2, ShieldCheck, Clock, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a 20-Min Architecture Consultation",
  description:
    "Schedule a 20-minute screen share with a senior engineer. We map your web speed, LLM answer-engine visibility, and autonomous lead pipeline with zero pitch.",
  alternates: {
    canonical: "https://technaviatechnology.com/book",
  },
  openGraph: {
    title: "Book a 20-Min Architecture Consultation | Technavia Technology",
    description:
      "Schedule a 20-minute screen share with a senior engineer. We map your web speed, LLM answer-engine visibility, and autonomous lead pipeline with zero pitch.",
    url: "https://technaviatechnology.com/book",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "Technavia Technology — Book a 20-Minute Architecture Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a 20-Min Architecture Consultation | Technavia Technology",
    description:
      "Schedule a 20-minute screen share with a senior engineer. We map your web speed, LLM answer-engine visibility, and autonomous lead pipeline with zero pitch.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

export default function BookPage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full bg-[#0B0D10] text-[#F8F8F5] flex flex-col justify-center py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-16 overflow-hidden">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Book Consultation", item: "/book" },
        ]}
      />

      {/* Subtle atmospheric background grid & glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4F542]/[0.03] rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Outcome Copy & Micro-Trust Points */}
        <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#D4F542] font-semibold">
              20-MIN LIVE AUDIT CALL
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.05]">
              Twenty minutes. <br />
              <span className="text-[#D4F542]">No pitch deck.</span>
            </h1>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans max-w-md">
              Screen share live with a senior engineer who writes code. We will map your site speed, LLM answer-engine visibility, or automated lead pipelines with zero fluff.
            </p>
          </div>

          {/* Micro-Trust Proof Points */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <Code2 className="w-4 h-4 text-[#D4F542] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs font-mono font-medium text-white">Direct Engineer Screen Share</span>
                <span className="text-[11px] text-white/50">Talk directly to builders, never a commissioned junior sales rep.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <Clock className="w-4 h-4 text-[#D4F542] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs font-mono font-medium text-white">Custom 48-Hour Tear-Down</span>
                <span className="text-[11px] text-white/50">Yours to keep with actionable next steps, even if we never work together.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <ShieldCheck className="w-4 h-4 text-[#D4F542] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs font-mono font-medium text-white">Zero Obligation · Zero Slide Decks</span>
                <span className="text-[11px] text-white/50">Live inspection of your real DOM, entity nodes, or n8n workflow blueprints.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Zero-Friction 2-Step Form */}
        <div className="lg:col-span-7 flex justify-center w-full">
          <Suspense
            fallback={
              <div className="w-full max-w-xl h-[420px] rounded-3xl bg-[#14161A]/80 border border-white/[0.08] flex items-center justify-center text-xs font-mono text-white/50 gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4F542] animate-ping" />
                <span>LOADING SCHEDULER...</span>
              </div>
            }
          >
            <BookForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
