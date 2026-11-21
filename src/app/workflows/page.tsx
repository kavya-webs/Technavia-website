import React from "react";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { WorkflowsNightShift } from "@/components/sections/WorkflowsNightShift";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BookSection } from "@/components/sections/BookSection";

export const metadata = {
  title: "Runbook — Workflows: Invoicing, Lead routing, Support, Onboarding, Reporting",
  description:
    "Five workflows, running on their own. Invoicing, lead routing, support, onboarding and reporting, wired into the tools you already use.",
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
