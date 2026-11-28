import React from "react";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://technaviatechnology.com/#organization",
        "name": "TECHNAVIA",
        "alternateName": ["Technavia Technology", "TECHNAVIA Studio"],
        "disambiguatingDescription":
          "B2B technology studio specializing in Web Development, Technical SEO, LLM Visibility (AEO/GEO), and Custom AI Automations at technaviatechnology.com.",
        "url": "https://technaviatechnology.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://technaviatechnology.com/#logo",
          "url": "https://technaviatechnology.com/logo.png",
          "caption": "TECHNAVIA Logo",
        },
        "description":
          "B2B technology studio specializing in Web Development, Technical SEO, LLM Visibility (AEO/GEO), and Custom AI Automations at technaviatechnology.com.",
        "slogan": "BUILT TO RANK. AUTOMATED TO SCALE.",
        "email": "inquiry@technaviatechnology.com",
        "telephone": "+91 7048617190",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "202 Cyber City Corporate Office, Mota Varachha Main Road, Utran",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "postalCode": "394105",
          "addressCountry": "IN",
        },
        "areaServed": "Worldwide",
        "founder": {
          "@type": "Person",
          "name": "Kavya Mavani",
          "jobTitle": "Lead Web Architect & Founder",
          "email": "kavyamavaniweb@gmail.com",
        },
        "sameAs": [
          "https://www.instagram.com/technavia/",
          "https://www.pinterest.com/technaviatechnology/",
        ],
        "knowsAbout": [
          {
            "@type": "Thing",
            "name": "Website Design",
            "sameAs": "https://en.wikipedia.org/wiki/Web_design",
          },
          {
            "@type": "Thing",
            "name": "Search Engine Optimization",
            "sameAs": "https://en.wikipedia.org/wiki/Search_engine_optimization",
          },
          {
            "@type": "Thing",
            "name": "E-Commerce",
            "sameAs": "https://en.wikipedia.org/wiki/E-commerce",
          },
          {
            "@type": "Thing",
            "name": "Generative Engine Optimization",
            "sameAs": "https://en.wikipedia.org/wiki/Search_engine_optimization",
          },
          {
            "@type": "Thing",
            "name": "Business Process Automation",
            "sameAs": "https://en.wikipedia.org/wiki/Business_process_automation",
          },
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "TECHNAVIA Core Engineering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@id": "https://technaviatechnology.com/#service-web-dev-seo",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@id": "https://technaviatechnology.com/#service-llm-visibility",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@id": "https://technaviatechnology.com/#service-ai-automations",
              },
            },
          ],
        },
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
      },
      {
        "@type": "Service",
        "@id": "https://technaviatechnology.com/#service-web-dev-seo",
        "name": "Web Development + Technical SEO",
        "provider": {
          "@id": "https://technaviatechnology.com/#organization",
        },
        "description":
          "Conversion-engineered Next.js websites with clean semantic architecture, sub-second Core Web Vitals, and schema markup built to rank from day one.",
        "serviceType": "Web Engineering & Technical Search Engine Optimization",
        "url": "https://technaviatechnology.com/services/web-development-seo",
      },
      {
        "@type": "Service",
        "@id": "https://technaviatechnology.com/#service-llm-visibility",
        "name": "LLM Visibility (AEO / GEO)",
        "provider": {
          "@id": "https://technaviatechnology.com/#organization",
        },
        "description":
          "Entity graph optimization and structured answer architecture so ChatGPT, Gemini, and Perplexity recommend your brand when buyers search your category.",
        "serviceType": "Generative Engine Optimization & Answer Engine Optimization",
        "url": "https://technaviatechnology.com/services/llm-visibility",
      },
      {
        "@type": "Service",
        "@id": "https://technaviatechnology.com/#service-ai-automations",
        "name": "Custom AI Automations",
        "provider": {
          "@id": "https://technaviatechnology.com/#organization",
        },
        "description":
          "Production n8n and API workflows that capture, qualify, and follow up with inbound leads in under 60 seconds—eliminating manual ops bottlenecks.",
        "serviceType": "Autonomous Operations & Workflow Automation",
        "url": "https://technaviatechnology.com/services/ai-automations",
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

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; item: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith("http")
        ? crumb.item
        : `https://technaviatechnology.com${crumb.item}`,
    })),
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
        "url": "https://technaviatechnology.com/logo.png",
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
  pageUrl,
}: {
  faqs: Array<{ question: string; answer: string }>;
  pageUrl?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl
      ? {
          "@id": `${pageUrl}#faqpage`,
          "url": pageUrl,
          "isPartOf": {
            "@id": "https://technaviatechnology.com/#website",
          },
          "publisher": {
            "@id": "https://technaviatechnology.com/#organization",
          },
        }
      : {}),
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, "$1"),
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

export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "serviceType": serviceType,
    "provider": {
      "@id": "https://technaviatechnology.com/#organization",
    },
    "areaServed": "Worldwide",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
