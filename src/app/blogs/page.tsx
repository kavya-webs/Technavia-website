import React from "react";
import { Metadata } from "next";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { BookSection } from "@/components/sections/BookSection";
import { BlogExplorer } from "@/components/sections/BlogExplorer";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ARTICLES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Engineering Blueprints: SEO, LLM Visibility & AI",
  description:
    "Technical field notes, real-world benchmarks, and architecture blueprints for engineering sub-second websites, winning LLM citations, and running automations.",
  alternates: {
    canonical: "https://technaviatechnology.com/blogs",
  },
  openGraph: {
    title: "Engineering Blueprints: SEO, LLM Visibility & AI",
    description:
      "Technical field notes, real-world benchmarks, and architecture blueprints for engineering sub-second websites, winning LLM citations, and running automations.",
    url: "https://technaviatechnology.com/blogs",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "TECHNAVIA — Technical Blueprints & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blueprints: SEO, LLM Visibility & AI",
    description:
      "Technical field notes, real-world benchmarks, and architecture blueprints for engineering sub-second websites, winning LLM citations, and running automations.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

export default function BlogsPage() {
  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blueprints", item: "/blogs" },
        ]}
      />
      {/* Hero Header with Background Photography & Visual Parity */}
      <SubpageHero
        pageName="BLOGS"
        titleLine1="Blueprints for ranking,"
        titleLine2="visibility & automation."
        highlightLine2={true}
        subtitle="Technical field notes, real-world benchmarks, and architecture blueprints from engineering sub-second websites, securing LLM citations, and running background pipelines on autopilot."
        backgroundImage="/images/tech/llm_visibility.webp"
        wireframeNumber="04"
        badgeText="BLUEPRINTS & RESEARCH"
        statusPills={[
          { text: "6 BLUEPRINTS PUBLISHED", variant: "brass" },
          { text: "AEO / GEO VALIDATED", variant: "ghost" },
        ]}
        primaryCta={{ label: "Book an audit", href: "/book" }}
        secondaryCta={{ label: "Explore services", href: "/services" }}
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
