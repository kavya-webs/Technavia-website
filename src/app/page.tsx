import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { WhyTechnavia } from "@/components/sections/WhyTechnavia";
import { WorksWithStrip } from "@/components/sections/WorksWithStrip";
import { WorkflowsAccordion } from "@/components/sections/WorkflowsAccordion";
import { ProcessSection } from "@/components/sections/ProcessSection";

export const metadata: Metadata = {
  title: {
    absolute: "Technavia Technology | Web Development, Technical SEO & AI Automation Studio",
  },
  description:
    "Technavia Technology is a B2B technology studio specializing in Web Development, Technical SEO, LLM Visibility (AEO/GEO), and Custom AI Automations at technaviatechnology.com.",
  alternates: {
    canonical: "https://technaviatechnology.com",
  },
  openGraph: {
    title: "Technavia Technology | Web Development, Technical SEO & AI Automation Studio",
    description:
      "Technavia Technology is a B2B web engineering, Technical SEO, LLM Visibility (AEO/GEO), and Custom AI Automation studio at technaviatechnology.com.",
    url: "https://technaviatechnology.com",
    siteName: "Technavia Technology",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "Technavia Technology | Web Development, Technical SEO & AI Automation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technavia Technology | Web Development, Technical SEO & AI Automation Studio",
    description:
      "Technavia Technology is a B2B web engineering, Technical SEO, LLM Visibility (AEO/GEO), and Custom AI Automation studio at technaviatechnology.com.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

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
