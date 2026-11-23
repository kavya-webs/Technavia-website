import React from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { WhyTechnavia } from "@/components/sections/WhyTechnavia";
import { WorksWithStrip } from "@/components/sections/WorksWithStrip";
import { WorkflowsAccordion } from "@/components/sections/WorkflowsAccordion";
import { ProcessSection } from "@/components/sections/ProcessSection";

// Dynamically imported below-the-fold sections (Full SSR preserved for SEO / LLM crawlers)
const ToolsStack = dynamic(() => import("@/components/sections/ToolsStack").then(mod => mod.ToolsStack), { ssr: true });
const IndustriesSection = dynamic(() => import("@/components/sections/IndustriesSection").then(mod => mod.IndustriesSection), { ssr: true });
const ResultsSection = dynamic(() => import("@/components/sections/ResultsSection").then(mod => mod.ResultsSection), { ssr: true });
const NightLog = dynamic(() => import("@/components/sections/NightLog").then(mod => mod.NightLog), { ssr: true });
const ReviewsSection = dynamic(() => import("@/components/sections/ReviewsSection").then(mod => mod.ReviewsSection), { ssr: true });
const InsightsGrid = dynamic(() => import("@/components/sections/InsightsGrid").then(mod => mod.InsightsGrid), { ssr: true });
const FaqSection = dynamic(() => import("@/components/sections/FaqSection").then(mod => mod.FaqSection), { ssr: true });
const BookSection = dynamic(() => import("@/components/sections/BookSection").then(mod => mod.BookSection), { ssr: true });

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
