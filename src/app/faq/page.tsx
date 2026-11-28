import React from "react";
import { Metadata } from "next";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { FaqKnowledgeHub } from "@/components/sections/FaqKnowledgeHub";
import { BookSection } from "@/components/sections/BookSection";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { FAQ_CLUSTERS, ALL_FAQS, faqAnswerToPlainText } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (55 Answers) — Web Design, SEO, GEO & AI",
  description:
    "55 plain-English answers on Technavia Technology's 21-day build process, Web Design & E-Commerce, Google Technical SEO, AI Search Visibility (ChatGPT, Gemini, Perplexity), and Custom B2B AI Automations.",
  alternates: {
    canonical: "https://technaviatechnology.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions (55 Answers) — Web Design, SEO, GEO & AI | Technavia Technology",
    description:
      "55 plain-English answers on Technavia Technology's 21-day build process, Web Design & E-Commerce, Google Technical SEO, AI Search Visibility (GEO/AEO), and Custom B2B AI Automations.",
    url: "https://technaviatechnology.com/faq",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "Technavia Technology — 55-Question AEO & GEO Knowledge Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions (55 Answers) — Web Design, SEO, GEO & AI | Technavia Technology",
    description:
      "55 plain-English answers on Web Design, Google SEO, AI Search Visibility (GEO/AEO), and Custom B2B AI Automations.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

export default function FaqPage() {
  return (
    <div className="flex flex-col w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "FAQ", item: "/faq" },
        ]}
      />
      <FaqJsonLd
        pageUrl="https://technaviatechnology.com/faq"
        faqs={ALL_FAQS.map((f) => ({
          question: f.question,
          answer: faqAnswerToPlainText(f.answer),
        }))}
      />
      {/* Subpage Hero with Photographic Background & Split-Line Animation (headingTag="p" so Knowledge Hub owns single semantic H1) */}
      <SubpageHero
        pageName="FAQ"
        headingTag="p"
        titleLine1="Straight answers,"
        titleLine2="before the first call."
        subtitle="55 research-backed answers on Website Design & E-Commerce, Google SEO, AI Search Visibility (ChatGPT, Gemini, Perplexity), and B2B AI Automations."
        backgroundImage="/images/questions/office_clean.jpg"
        wireframeNumber="55"
        statusPills={[
          { text: "55 COMMON QUESTIONS", variant: "brass" },
          { text: "5 TOPIC CLUSTERS", variant: "ghost" },
          { text: "REPLY < 24H", variant: "outline" },
        ]}
        primaryCta={{ label: "BOOK A CALL", href: "/book" }}
        secondaryCta={{ label: "EMAIL AN ARCHITECT", href: "mailto:inquiry@technaviatechnology.com" }}
      />

      {/* Interactive 55-Question AEO / GEO Knowledge Hub */}
      <FaqKnowledgeHub clusters={FAQ_CLUSTERS} />

      {/* Book Call Section */}
      <BookSection />
    </div>
  );
}
