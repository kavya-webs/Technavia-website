import React from "react";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://technaviatechnology.com/#organization",
        "name": "TECHNAVIA",
        "alternateName": ["Technavia Technology", "TECHNAVIA Web Engineering & AI"],
        "url": "https://technaviatechnology.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://technaviatechnology.com/#logo",
          "url": "https://technaviatechnology.com/icon.svg",
          "caption": "TECHNAVIA 6-Node Network Symbol",
        },
        "description":
          "Websites engineered to rank on Google & AI. Fast Web Development + Technical SEO, LLM Visibility (AEO/GEO), and Custom AI Automations on autopilot.",
        "slogan": "BUILT TO RANK. AUTOMATED TO SCALE.",
        "email": "contact@technaviatechnology.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "London",
          "addressCountry": "GB",
        },
        "knowsAbout": [
          "Web Development",
          "Technical SEO",
          "Core Web Vitals",
          "Generative Engine Optimization",
          "AEO",
          "GEO",
          "LLM Visibility",
          "Next.js Architecture",
          "React Server Components",
          "Schema.org Entity Graphs",
          "AI Automations",
          "n8n Workflow Engineering",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://technaviatechnology.com/#website",
        "url": "https://technaviatechnology.com",
        "name": "TECHNAVIA",
        "description": "Websites engineered to rank on Google & AI.",
        "publisher": {
          "@id": "https://technaviatechnology.com/#organization",
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://technaviatechnology.com/blogs?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Service",
        "@id": "https://technaviatechnology.com/#service-web-dev-seo",
        "name": "Web Development + Technical SEO",
        "provider": {
          "@id": "https://technaviatechnology.com/#organization",
        },
        "description":
          "Fast, conversion-focused websites engineered with clean Next.js architecture and sub-400ms LCP so search engines index and rank them from day one.",
        "serviceType": "Web Engineering & Technical Search Engine Optimization",
        "url": "https://technaviatechnology.com/workflows/web-dev-seo",
      },
      {
        "@type": "Service",
        "@id": "https://technaviatechnology.com/#service-llm-visibility",
        "name": "LLM Visibility (AEO / GEO)",
        "provider": {
          "@id": "https://technaviatechnology.com/#organization",
        },
        "description":
          "Structured content and entity optimization so your brand gets recommended when buyers prompt ChatGPT, Gemini, Perplexity, and Claude.",
        "serviceType": "Generative Engine Optimization & Answer Engine Optimization",
        "url": "https://technaviatechnology.com/workflows/llm-visibility",
      },
      {
        "@type": "Service",
        "@id": "https://technaviatechnology.com/#service-ai-automations",
        "name": "Custom AI Automations",
        "provider": {
          "@id": "https://technaviatechnology.com/#organization",
        },
        "description":
          "Tailored background pipelines that automate lead capture, follow-ups, CRM syncing, and repetitive operations on autopilot.",
        "serviceType": "Autonomous Operations & Workflow Automation",
        "url": "https://technaviatechnology.com/workflows/ai-automations",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  excerpt,
  datePublished,
  slug,
  coverImage,
  authorName,
}: {
  title: string;
  excerpt: string;
  datePublished: string;
  slug: string;
  coverImage: string;
  authorName: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": excerpt,
    "datePublished": datePublished,
    "url": `https://technaviatechnology.com/blogs/${slug}`,
    "image": coverImage.startsWith("http")
      ? coverImage
      : `https://technaviatechnology.com${coverImage}`,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://technaviatechnology.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "TECHNAVIA",
      "logo": {
        "@type": "ImageObject",
        "url": "https://technaviatechnology.com/icon.svg",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://technaviatechnology.com/blogs/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
