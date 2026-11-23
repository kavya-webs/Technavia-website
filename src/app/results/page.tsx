import React from "react";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BookSection } from "@/components/sections/BookSection";
import { ResultsGridWithPreview } from "@/components/results/ResultsGridWithPreview";

export const metadata = {
  title: "TECHNAVIA — Real Builds & Results: Measurable Growth in Rankings & Pipeline",
  description:
    "Verified engineering outcomes and live self-hosted mirrors: Seravolve, TG media, and COSMO SOLOR with sub-second Core Web Vitals.",
};

export default function ResultsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <SubpageHero
        pageName="RESULTS & LIVE BUILDS"
        titleLine1="Real hosted builds,"
        titleLine2="proven ROI."
        highlightLine2={true}
        subtitle="Inspect live production sites and self-hosted client mirrors. Every system is built for sub-second Core Web Vitals, organic search scale, and automated conversion pipelines."
        primaryCta={{ label: "Request Free Audit", href: "/book?type=audit" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
        backgroundImage="/images/tech/why_technavia.jpg"
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
