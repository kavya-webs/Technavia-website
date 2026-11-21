import React from "react";
import { Hero } from "@/components/sections/Hero";
import { WhyTechnavia } from "@/components/sections/WhyTechnavia";
import { WorksWithStrip } from "@/components/sections/WorksWithStrip";
import { WorkflowsAccordion } from "@/components/sections/WorkflowsAccordion";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ToolsStack } from "@/components/sections/ToolsStack";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { NightLog } from "@/components/sections/NightLog";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { InsightsGrid } from "@/components/sections/InsightsGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookSection } from "@/components/sections/BookSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <WhyTechnavia />
      <WorksWithStrip />
      <WorkflowsAccordion />
      <ProcessSection />
      <ToolsStack />
      <IndustriesSection />
      <ResultsSection />
      <NightLog />
      <ReviewsSection />
      <InsightsGrid />
      <FaqSection />
      <BookSection />
    </div>
  );
}
