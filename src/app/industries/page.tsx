import React from "react";
import { Metadata } from "next";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { BookSection } from "@/components/sections/BookSection";

export const metadata: Metadata = {
  title: "Runbook — Industries we automate: six sectors, the same ten jobs",
  description:
    "Clinics, agencies, shops, depots, law firms and estate agents all do the same things by hand: chase invoices, route leads, copy contact records, and assemble weekly reports.",
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full">
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
        primaryCta={{ label: "EXPLORE WORKFLOWS", href: "/workflows" }}
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
