import React from "react";
import { Metadata } from "next";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookSection } from "@/components/sections/BookSection";

export const metadata: Metadata = {
  title: "Runbook — FAQ: what we automate, tools, timing, access",
  description:
    "What we automate, which tools we connect, how night-shift operations run, and what security fences we build.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-col w-full">
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
        secondaryCta={{ label: "EMAIL AN ARCHITECT", href: "mailto:hello@runbookops.agency" }}
      />

      {/* Embedded FAQ Component with De-duplicated Heading */}
      <FaqSection showHeader={false} />

      {/* Book Call Section */}
      <BookSection />
    </div>
  );
}
