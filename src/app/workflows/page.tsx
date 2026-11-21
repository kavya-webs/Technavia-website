import React from "react";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { WorkflowsNightShift } from "@/components/sections/WorkflowsNightShift";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BookSection } from "@/components/sections/BookSection";

export const metadata = {
  title: "TECHNAVIA — Services: Web Development, LLM Visibility & AI Automations",
  description:
    "Three core engineering disciplines: fast conversion-focused web architecture, semantic LLM visibility (AEO/GEO), and custom AI automations wired for growth.",
};

export default function WorkflowsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section with text phase-in on load */}
      <ServicesHero />

      {/* 2. The night shift, workflow by workflow: 5 workflows with background images & reveal on scroll */}
      <WorkflowsNightShift />

      {/* 3. Embedded How It Runs / Process Section */}
      <ProcessSection />

      {/* 4. Embedded Book a Call Section */}
      <BookSection />
    </div>
  );
}
