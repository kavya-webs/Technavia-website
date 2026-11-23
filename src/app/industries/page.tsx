import React from "react";
import { Metadata } from "next";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { BookSection } from "@/components/sections/BookSection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Industries & Sectors Engineered to Rank | TECHNAVIA",
  description:
    "Discover our specialized web engineering and LLM search optimization across six core B2B sectors: SaaS, agencies, healthcare clinics, logistics, and D2C.",
  alternates: {
    canonical: "https://technaviatechnology.com/industries",
  },
  openGraph: {
    title: "Industries & Sectors Engineered to Rank | TECHNAVIA",
    description:
      "Discover our specialized web engineering and LLM search optimization across six core B2B sectors: SaaS, agencies, healthcare clinics, logistics, and D2C.",
    url: "https://technaviatechnology.com/industries",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "TECHNAVIA — Industries & Specialized Sectors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries & Sectors Engineered to Rank | TECHNAVIA",
    description:
      "Discover our specialized web engineering and LLM search optimization across six core B2B sectors: SaaS, agencies, healthcare clinics, logistics, and D2C.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Industries", item: "/industries" },
        ]}
      />
      {/* Subpage Hero with Photographic Background & Split-Line Animation */}
      <SubpageHero
        pageName="Industries"
        titleLine1="Six sectors,"
        titleLine2="the same ten jobs."
        subtitle="Battle-tested architectures engineered for your industry constraints and regulatory requirements."
        backgroundImage="/images/industries/agencies.jpg"
        wireframeNumber="06"
        statusPills={[
          { text: "6 SECTORS AUTOMATED", variant: "brass" },
          { text: "PRE-BUILT BLUEPRINTS", variant: "ghost" },
          { text: "48,200 TASKS/MO", variant: "outline" },
        ]}
        primaryCta={{ label: "EXPLORE SERVICES", href: "/services" }}
        secondaryCta={{ label: "BOOK ARCHITECT CALL", href: "/book" }}
      />

      {/* Enriched Industry Directory Grid with Local Photography & Glassmorphic Plates */}
      <IndustriesSection variant="grid" showHeader={false} />

      {/* Embedded Results & Book Sections */}
      <ResultsSection />
      <BookSection />
    </div>
  );
}
