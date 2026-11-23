import React, { Suspense } from "react";
import { Metadata } from "next";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { BookForm } from "./BookForm";

export const metadata: Metadata = {
  title: "Book a 20-Min Architecture Consultation | TECHNAVIA",
  description:
    "Schedule a 20-minute screen share with a senior engineer. We map your web speed, LLM answer-engine visibility, and autonomous lead pipeline with zero pitch.",
  alternates: {
    canonical: "https://technaviatechnology.com/book",
  },
  openGraph: {
    title: "Book a 20-Min Architecture Consultation | TECHNAVIA",
    description:
      "Schedule a 20-minute screen share with a senior engineer. We map your web speed, LLM answer-engine visibility, and autonomous lead pipeline with zero pitch.",
    url: "https://technaviatechnology.com/book",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "TECHNAVIA — Book a 20-Minute Architecture Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a 20-Min Architecture Consultation | TECHNAVIA",
    description:
      "Schedule a 20-minute screen share with a senior engineer. We map your web speed, LLM answer-engine visibility, and autonomous lead pipeline with zero pitch.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

export default function BookPage() {
  return (
    <div className="flex flex-col w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Book Consultation", item: "/book" },
        ]}
      />
      {/* Subpage Hero with Dusk Logistics Depot Photography & Split-Line Animation */}
      <SubpageHero
        pageName="Book a Call"
        titleLine1="Twenty minutes."
        titleLine2="No pitch."
        subtitle="Screen share with a senior engineer who writes code. We will map your web architecture, LLM visibility, and automated lead workflows."
        backgroundImage="https://framerusercontent.com/images/o9ITAJgXIoSkR7WSBLyUKwhA1PI.webp?scale-down-to=2048"
        wireframeNumber="20"
        statusPills={[
          { text: "20-MIN AUDIT CALL", variant: "brass" },
          { text: "NO SLIDES · LIVE MAPPING", variant: "ghost" },
          { text: "SENIOR ENGINEER LED", variant: "outline" },
        ]}
      />

      {/* Booking Form Interface wrapped in Suspense boundary for Next.js 15 App Router */}
      <section className="py-20 md:py-28 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full flex flex-col items-center">
        <Suspense
          fallback={
            <div className="py-24 max-w-[800px] mx-auto w-full text-center text-xs font-mono text-white/50 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] animate-ping" />
              <span>INITIALIZING SCHEDULER...</span>
            </div>
          }
        >
          <BookForm />
        </Suspense>
      </section>
    </div>
  );
}
