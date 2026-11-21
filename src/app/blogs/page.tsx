import React from "react";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { BookSection } from "@/components/sections/BookSection";
import { BlogExplorer } from "@/components/sections/BlogExplorer";
import { ARTICLES } from "@/lib/data";

export const metadata = {
  title: "TECHNAVIA — Blogs & Blueprints: Web Engineering, SEO & AI Visibility",
  description:
    "Technical guides, real-world benchmarks, and architectural field notes from engineering high-performance web systems, securing LLM citations, and building autonomous workflows.",
  alternates: {
    canonical: "https://technaviatechnology.com/blogs",
  },
};

export default function BlogsPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      {/* Hero Header with Background Photography & Visual Parity */}
      <SubpageHero
        pageName="BLOGS"
        titleLine1="Blueprints for ranking,"
        titleLine2="visibility & automation."
        highlightLine2={true}
        subtitle="Technical field notes, real-world benchmarks, and architecture blueprints from engineering sub-second websites, securing LLM citations, and running background pipelines on autopilot."
        backgroundImage="/images/tech/llm_visibility.jpg"
        wireframeNumber="04"
        badgeText="BLUEPRINTS & RESEARCH"
        statusPills={[
          { text: "6 BLUEPRINTS PUBLISHED", variant: "brass" },
          { text: "AEO / GEO VALIDATED", variant: "ghost" },
        ]}
        primaryCta={{ label: "Book an audit", href: "/book" }}
        secondaryCta={{ label: "Explore services", href: "/workflows" }}
      />

      {/* Interactive Blogs Explorer Section (Search, Filter, Sort, Grid) */}
      <section className="py-16 md:py-24 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full">
        <BlogExplorer articles={ARTICLES} />
      </section>

      {/* Bottom Conversion Section */}
      <BookSection />
    </div>
  );
}
