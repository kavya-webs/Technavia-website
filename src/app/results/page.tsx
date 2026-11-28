import React from "react";
import { Metadata } from "next";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BookSection } from "@/components/sections/BookSection";
import { ResultsGridWithPreview } from "@/components/results/ResultsGridWithPreview";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Results & Case Studies — Verified Web Engineering ROI",
  description:
    "Explore verified engineering outcomes and live self-hosted mirrors: Seravolve, TG media, and COSMO SOLOR with sub-second Core Web Vitals and inquiry surges.",
  alternates: {
    canonical: "https://technaviatechnology.com/results",
  },
  openGraph: {
    title: "Results & Case Studies — Verified Web Engineering ROI",
    description:
      "Explore verified engineering outcomes and live self-hosted mirrors: Seravolve, TG media, and COSMO SOLOR with sub-second Core Web Vitals and inquiry surges.",
    url: "https://technaviatechnology.com/results",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "Technavia Technology — Real Builds & Verified Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Results & Case Studies — Verified Web Engineering ROI",
    description:
      "Explore verified engineering outcomes and live self-hosted mirrors: Seravolve, TG media, and COSMO SOLOR with sub-second Core Web Vitals and inquiry surges.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

export default function ResultsPage() {
  return (
    <div className="flex flex-col w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Results", item: "/results" },
        ]}
      />
      {/* Page Hero */}
      <SubpageHero
        pageName="RESULTS & LIVE BUILDS"
        titleLine1="Real hosted builds,"
        titleLine2="proven ROI."
        highlightLine2={true}
        subtitle="Inspect live production sites and self-hosted client mirrors. Every system is built for sub-second Core Web Vitals, organic search scale, and automated conversion pipelines."
        primaryCta={{ label: "Request Free Audit", href: "/book?type=audit" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
        backgroundImage="/images/tech/why_technavia.webp"
        wireframeNumber="06"
        statusPills={[
          { text: "100/100 CORE WEB VITALS", variant: "brass" },
          { text: "D2C & CRO ENGINE", variant: "ghost" },
          { text: "EDITORIAL MOTION UX", variant: "outline" },
          { text: "CLEAN-TECH SCALE", variant: "ghost" },
        ]}
      />

      {/* Results Grid List with Interactive Preview */}
      <section className="py-24 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <SectionLabel>PROVEN BUILDS & CLIENT MIRRORS</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
            Inspect real engineering quality across production deployments.
          </h2>
        </div>

        <ResultsGridWithPreview />
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Book Section */}
      <BookSection />
    </div>
  );
}
