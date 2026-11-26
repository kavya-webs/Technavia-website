import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Cookies Policy — Technical Data Usage | TECHNAVIA",
  description:
    "Information on how TECHNAVIA uses technical session cookies, anonymous analytics, and local storage to guarantee secure web engineering performance.",
  alternates: {
    canonical: "https://technaviatechnology.com/cookies",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookiesPage() {
  return (
    <div className="flex flex-col w-full pt-[100px]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Cookies Policy", item: "/cookies" },
        ]}
      />
      <section className="py-20 px-6 md:px-14 border-b border-white/[0.08] max-w-[900px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Legal</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-tight font-semibold text-[#F8F8F5] tracking-tight">
          Cookies Policy
        </h1>
        <p className="mt-4 text-xs font-mono text-white/50">LAST UPDATED: 26 NOVEMBER 2026</p>
      </section>

      <article className="py-16 px-6 md:px-14 max-w-[900px] mx-auto w-full flex flex-col gap-6 text-sm text-white/70 leading-relaxed font-sans">
        <h2 className="text-xl font-tight font-semibold text-white">1. Essential Functional Storage</h2>
        <p>
          This website uses essential functional cookies and session storage strictly necessary to
          remember your navigation state, booking form selections, and smooth-scrolling behavior.
        </p>

        <h2 className="text-xl font-tight font-semibold text-white">2. Analytics &amp; Advertising Measurement (Meta Pixel)</h2>
        <p>
          We use Meta Pixel (by Meta Platforms, Inc.) and privacy-respecting site telemetry to
          measure page views, evaluate campaign effectiveness, and improve the relevance of our
          announcements across Meta services. Meta may use cookies and similar identifiers to log
          session visits on our pages.
        </p>

        <h2 className="text-xl font-tight font-semibold text-white">3. Managing Your Preferences &amp; Opt-Out</h2>
        <p>
          You can block, clear, or restrict third-party cookies anytime through your browser
          settings, manage personalized ad preferences directly in your{" "}
          <a
            href="https://www.facebook.com/adpreferences/ad_settings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4F542] hover:underline"
          >
            Meta Ad Settings
          </a>
          , or email{" "}
          <a
            href="mailto:contact@technaviatechnology.com"
            className="text-[#D4F542] hover:underline"
          >
            contact@technaviatechnology.com
          </a>{" "}
          with any privacy questions.
        </p>
      </article>
    </div>
  );
}
