import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { BookSection } from "@/components/sections/BookSection";
import { ARTICLES } from "@/lib/data";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = ARTICLES.find((a) => a.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} — TECHNAVIA Insights`,
    description: post.excerpt,
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = ARTICLES.find((a) => a.slug === slug);

  if (!post) {
    notFound();
  }

  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="flex flex-col w-full pt-[100px]">
      {/* Article Header */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1000px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/insights" className="hover:text-white">Insights</Link>
          <span>/</span>
          <span className="text-[#D4F542]">{post.type}</span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-white/50 mb-4">
          <span className="px-2.5 py-0.5 rounded-full bg-[#D4F542] text-black font-semibold">
            {post.type}
          </span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[1.05]">
          {post.title}
        </h1>

        <p className="mt-6 text-xl text-white/70 font-sans leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/[0.08] text-xs font-mono text-white/60">
          <span className="w-8 h-8 rounded-full bg-zinc-800 text-[#D4F542] grid place-items-center font-bold">
            {post.author.name.charAt(0)}
          </span>
          <div>
            <div className="font-semibold text-white">{post.author.name}</div>
            <div>{post.author.role}</div>
          </div>
        </div>
      </section>

      {/* Article Prose Content */}
      <article className="py-16 px-6 md:px-14 max-w-[800px] mx-auto w-full flex flex-col gap-6 text-base md:text-lg text-white/80 leading-relaxed font-sans">
        {post.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </article>

      {/* Two More from the Night Shift */}
      <section className="py-20 px-6 md:px-14 border-t border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-tight font-semibold text-white">
            Two more from the night shift
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/insights/${rel.slug}`}
                className="p-8 rounded-2xl bg-zinc-900/50 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col gap-4 group"
              >
                <div className="text-xs font-mono text-white/40">{rel.type} · {rel.readTime}</div>
                <h4 className="text-2xl font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors">
                  {rel.title}
                </h4>
                <p className="text-xs text-white/60 line-clamp-2">{rel.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookSection />
    </div>
  );
}
