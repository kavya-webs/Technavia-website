import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { BookSection } from "@/components/sections/BookSection";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ARTICLES } from "@/lib/data";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = ARTICLES.find((a) => a.slug === slug);
  if (!post) return { title: "Blueprint Not Found" };

  const fullImageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `https://technaviatechnology.com${post.coverImage}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://technaviatechnology.com/blogs/${slug}`,
    },
    openGraph: {
      title: `${post.title} | TECHNAVIA Blueprints`,
      description: post.excerpt,
      url: `https://technaviatechnology.com/blogs/${slug}`,
      type: "article",
      images: [
        {
          url: fullImageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | TECHNAVIA Blueprints`,
      description: post.excerpt,
      images: [fullImageUrl],
    },
  };
}

const CATEGORY_SERVICE_MAP: Record<
  string,
  { href: string; badge: string; label: string; summary: string }
> = {
  "Web Engineering": {
    href: "/services/web-development-seo",
    badge: "WEB DEVELOPMENT + TECHNICAL SEO",
    label: "Explore our 21-Day Web Development & SEO Service →",
    summary: "Sub-second Next.js builds with 95+ Core Web Vitals, clean schema graphs, and full code ownership.",
  },
  "AI Visibility": {
    href: "/services/llm-visibility",
    badge: "LLM VISIBILITY (AEO / GEO)",
    label: "Explore our LLM Visibility (ChatGPT & Perplexity) Service →",
    summary: "Structured entity graphs and quotable Q&A blocks so AI answer engines cite and recommend your business.",
  },
  "AI Automations": {
    href: "/services/ai-automations",
    badge: "CUSTOM AI AUTOMATIONS",
    label: "Explore our Custom B2B AI Automations Service →",
    summary: "Sub-60s lead enrichment, AI qualification, and automated CRM routing without recurring Zapier markups.",
  },
};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = ARTICLES.findIndex((a) => a.slug === slug);
  const post = currentIndex >= 0 ? ARTICLES[currentIndex] : undefined;

  if (!post) {
    notFound();
  }

  const serviceMatch =
    CATEGORY_SERVICE_MAP[post.category] || CATEGORY_SERVICE_MAP["Web Engineering"];

  // Rotate starting from the next article so all 6 articles receive incoming related links,
  // prioritizing articles in the same category first.
  const rotatedOthers = Array.from(
    { length: ARTICLES.length - 1 },
    (_, offset) => ARTICLES[(currentIndex + 1 + offset) % ARTICLES.length]
  );
  const sameCategory = rotatedOthers.filter((a) => a.category === post.category);
  const otherCategory = rotatedOthers.filter((a) => a.category !== post.category);
  const related = [...sameCategory, ...otherCategory].slice(0, 2);

  return (
    <div className="flex flex-col w-full bg-[#0B0D10] text-[#F8F8F5] pt-[92px]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Blueprints", item: "/blogs" },
          { name: post.title, item: `/blogs/${slug}` },
        ]}
      />
      <ArticleJsonLd
        title={post.title}
        excerpt={post.excerpt}
        datePublished={post.date}
        slug={post.slug}
        coverImage={post.coverImage}
        authorName={post.author.name}
      />
      {/* Header & Meta */}
      <section className="py-16 md:py-24 px-6 md:px-8 lg:px-14 border-b border-white/[0.08] max-w-[1000px] mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blogs" className="hover:text-white transition-colors">
            Blogs
          </Link>
          <span>/</span>
          <Link
            href={
              post.category === "AI Visibility"
                ? "/services/llm-visibility"
                : post.category === "AI Automations"
                ? "/services/ai-automations"
                : "/services/web-development-seo"
            }
            className="text-[#D4F542] hover:underline"
          >
            {post.category}
          </Link>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/50 mb-6">
          <span className="px-3 py-1 rounded-full bg-[#D4F542] text-black font-semibold">
            {post.category}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/[0.08] text-white/80">
            {post.type}
          </span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[1.08]">
          {post.title}
        </h1>

        {/* Subtitle / Excerpt */}
        <p className="mt-6 text-lg sm:text-xl text-white/70 font-sans leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author & Tags Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 mt-8 border-t border-white/[0.08]">
          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="w-10 h-10 rounded-full bg-[#14161A] border border-[#D4F542]/50 text-[#D4F542] grid place-items-center font-bold text-sm shadow-[0_0_12px_rgba(212,245,66,0.2)]">
              TN
            </div>
            <div>
              <div className="font-semibold text-white">{post.author.name}</div>
              <div className="text-white/50">{post.author.role}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-[#14161A] border border-white/[0.08] text-[11px] font-mono text-white/60"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <div className="max-w-[1000px] mx-auto w-full px-6 md:px-8 lg:px-14 pt-10">
        <div className="relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent" />
        </div>
      </div>

      {/* Main Prose Article */}
      <article className="py-14 px-6 md:px-8 lg:px-14 max-w-[840px] mx-auto w-full flex flex-col gap-8 text-base md:text-lg text-white/80 leading-relaxed font-sans">
        {/* Key Takeaways Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#14161A] border border-[#D4F542]/40 shadow-xl flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4F542]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]" />
            EXECUTIVE ARCHITECTURE SUMMARY
          </div>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
            {post.excerpt}
          </p>
        </div>

        {/* Article Paragraphs */}
        {post.content.map((paragraph, idx) => (
          <p key={idx} className="text-white/85 leading-relaxed">
            {paragraph}
          </p>
        ))}

        {/* Contextual Service Callout Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#14161A] border border-[#D4F542]/40 flex flex-col gap-3 shadow-lg mt-2">
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#D4F542] uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]" />
            <span>{serviceMatch.badge}</span>
          </div>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
            {serviceMatch.summary}
          </p>
          <div className="pt-1">
            <Link
              href={serviceMatch.href}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-[#D4F542] hover:text-white transition-colors"
            >
              <span>{serviceMatch.label}</span>
            </Link>
          </div>
        </div>

        {/* Blueprint Callout */}
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-[#D4F542] uppercase tracking-wider">
              Want this engineered for your company?
            </span>
            <span className="text-sm text-white/80 font-medium">
              We implement this exact architecture in 3-to-5 week fixed engineering sprints.
            </span>
          </div>
          <Button href="/book" variant="quiet" className="shrink-0">
            Book an audit
          </Button>
        </div>
      </article>

      {/* Two Related Blueprints */}
      <section className="py-20 px-6 md:px-8 lg:px-14 border-t border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-white">
              Related engineering blueprints
            </h3>
            <Link
              href="/blogs"
              className="text-xs font-mono text-[#D4F542] hover:underline uppercase tracking-wider"
            >
              Browse all blueprints →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blogs/${rel.slug}`}
                className="p-8 rounded-2xl bg-[#14161A]/80 border border-white/[0.08] hover:border-[#D4F542]/50 hover:bg-[#14161A] transition-all flex flex-col justify-between gap-6 group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#A8B0BC]">
                  <span className="text-[#D4F542] font-semibold">{rel.category}</span>
                  <span>{rel.readTime}</span>
                </div>
                <h4 className="text-2xl font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors leading-snug">
                  {rel.title}
                </h4>
                <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                  {rel.excerpt}
                </p>
                <div className="text-xs font-mono text-[#D4F542] group-hover:translate-x-1.5 transition-transform flex items-center gap-1 font-semibold pt-2 border-t border-white/[0.06]">
                  Read blueprint →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <BookSection />
    </div>
  );
}
