import React from "react";
import { Metadata } from "next";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookSection } from "@/components/sections/BookSection";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { FAQS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Web Dev & AI | TECHNAVIA",
  description:
    "Everything you need to know about our Next.js engineering standards, Generative Engine Optimization (GEO/AEO), Core Web Vitals guarantees, and 21-day delivery.",
  alternates: {
    canonical: "https://technaviatechnology.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions — Web Dev & AI | TECHNAVIA",
    description:
      "Everything you need to know about our Next.js engineering standards, Generative Engine Optimization (GEO/AEO), Core Web Vitals guarantees, and 21-day delivery.",
    url: "https://technaviatechnology.com/faq",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "TECHNAVIA — Frequently Asked Questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions — Web Dev & AI | TECHNAVIA",
    description:
      "Everything you need to know about our Next.js engineering standards, Generative Engine Optimization (GEO/AEO), Core Web Vitals guarantees, and 21-day delivery.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

export default function FaqPage() {
  return (
    <div className="flex flex-col w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "FAQ", item: "/faq" },
        ]}
      />
      <FaqJsonLd faqs={FAQS} />
      {/* Subpage Hero with Photographic Background & Split-Line Animation */}
      <SubpageHero
        pageName="FAQ"
        titleLine1="Straight answers,"
        titleLine2="before the first call."
        subtitle="What we automate, which tools we connect, how night-shift operations run, and what security fences we build."
        backgroundImage="/images/questions/office_clean.jpg"
        wireframeNumber="08"
        statusPills={[
          { text: "8 COMMON QUESTIONS", variant: "brass" },
          { text: "ZERO TECHNICAL JARGON", variant: "ghost" },
          { text: "REPLY < 24H", variant: "outline" },
        ]}
        primaryCta={{ label: "BOOK A CALL", href: "/book" }}
        secondaryCta={{ label: "EMAIL AN ARCHITECT", href: "mailto:contact@technavia.com" }}
      />

      {/* Embedded FAQ Component with De-duplicated Heading */}
      <FaqSection showHeader={false} />

      {/* Book Call Section */}
      <BookSection />
    </div>
  );
}
