import React from "react";
import { Metadata } from "next";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BookSection } from "@/components/sections/BookSection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Careers at TECHNAVIA — Web Engineers & AI Builders",
  description:
    "Join TECHNAVIA's remote engineering studio. We build sub-second web applications, AEO visibility systems, and autonomous lead workflows with zero busywork.",
  alternates: {
    canonical: "https://technaviatechnology.com/careers",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Careers at TECHNAVIA — Web Engineers & AI Builders",
    description:
      "Join TECHNAVIA's remote engineering studio. We build sub-second web applications, AEO visibility systems, and autonomous lead workflows with zero busywork.",
    url: "https://technaviatechnology.com/careers",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "TECHNAVIA — Careers & Engineering Opportunities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at TECHNAVIA — Web Engineers & AI Builders",
    description:
      "Join TECHNAVIA's remote engineering studio. We build sub-second web applications, AEO visibility systems, and autonomous lead workflows with zero busywork.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

interface RoleItem {
  num: string;
  title: string;
  team: string;
  location: string;
  tags: string[];
  description: string;
  outcomes: string;
}

const ROLES: RoleItem[] = [
  {
    num: "01",
    title: "Senior Automation Engineer",
    team: "Engineering · Full-time",
    location: "Remote-First · Worldwide",
    tags: ["Make", "n8n", "TypeScript", "Python", "Webhook APIs"],
    description:
      "Build resilient multi-step webhook pipelines in Make, n8n, Python and TypeScript connecting enterprise CRMs, billing engines and custom ERPs.",
    outcomes:
      "Take technical ownership of mission-critical client pipelines processing up to 50k events per month with sub-minute execution SLAs.",
  },
  {
    num: "02",
    title: "Operations Solutions Architect",
    team: "Solutions · Full-time",
    location: "Remote-First · Worldwide",
    tags: ["Systems Architecture", "Client Audits", "Process Mapping", "API Design"],
    description:
      "Lead on-site and remote client audits, interview operations directors, and translate messy manual office workflows into clean technical specifications.",
    outcomes:
      "Lead discovery audits from first walkthrough to prioritized ROI roadmaps and fixed-price blueprints in five working days.",
  },
  {
    num: "03",
    title: "Client Automation Success Lead",
    team: "Client Operations · Full-time",
    location: "Remote-First · Worldwide",
    tags: ["Workflow Monitoring", "Slack Connect", "Incident Response", "Account Expansion"],
    description:
      "Manage live workflow monitoring, triage client Slack Connect requests, and proactively discover new automation opportunities for active retainers.",
    outcomes:
      "Serve as the trusted technical advisor for our retainer clients, maintaining >99.8% automated workflow uptime.",
  },
];

const PRINCIPLES = [
  {
    num: "01",
    title: "Silent Infrastructure",
    description:
      "The best software is the kind nobody has to open. We build silent background engines that execute while the office is empty.",
  },
  {
    num: "02",
    title: "Production From Week 1",
    description:
      "No 90-day onboarding ramps or endless internal slide decks. Every engineer ships live automation code to production within their first 5 days.",
  },
  {
    num: "03",
    title: "High Leverage, Small Headcount",
    description:
      "We believe a 10-person agency operating on automated infrastructure delivers higher output than a 100-person traditional consultancy.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Careers", item: "/careers" },
        ]}
      />
      {/* Subpage Hero with Dusk Photography & Masked Split-Line Animation */}
      <SubpageHero
        pageName="Careers"
        parentCrumb={{ label: "About", href: "/about" }}
        titleLine1="Work you can"
        titleLine2="point at."
        subtitle="We build silent infrastructure for growing teams. Small headcount, high leverage, zero busywork."
        backgroundImage="/images/workflows/clean_hero_120.webp"
        wireframeNumber="03"
        statusPills={[
          { text: "3 OPEN ROLES", variant: "brass" },
          { text: "REMOTE-FIRST · WORLDWIDE", variant: "ghost" },
          { text: "PRODUCTION FROM WEEK 1", variant: "outline" },
        ]}
      />

      {/* Open Roles Section with Interactive Cards */}
      <section className="py-20 md:py-28 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <SectionLabel>Open roles</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-tight font-semibold tracking-[-0.03em] text-[#F8F8F5]">
              Three roles open on the night shift.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/70 max-w-md font-sans leading-relaxed md:text-right">
            Competitive salary, profit share on running retainers, remote setup allowance and full
            autonomy on your schedule.
          </p>
        </div>

        {/* 3 Interactive Role Cards */}
        <div className="flex flex-col gap-6">
          {ROLES.map((role) => (
            <div
              key={role.num}
              className="relative rounded-3xl p-8 sm:p-10 bg-zinc-950/80 border border-white/[0.12] hover:border-[#D4F542]/50 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row lg:items-center justify-between gap-8 transition-all duration-300 group overflow-hidden"
            >
              {/* Background Decorative Wireframe Numeral */}
              <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-20 group-hover:opacity-35 transition-opacity">
                <span
                  className="text-8xl sm:text-9xl font-tight font-extralight tracking-tighter"
                  style={{
                    WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.25)",
                    color: "transparent",
                  }}
                >
                  {role.num}
                </span>
              </div>

              {/* Role Details */}
              <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-full bg-[#D4F542]/10 border border-[#D4F542]/30 text-[#D4F542] font-semibold">
                    ROLE {role.num}
                  </span>
                  <span className="text-white/60">{role.team}</span>
                  <span className="text-white/30">·</span>
                  <span className="text-white/60">{role.location}</span>
                </div>

                {/* Role Title */}
                <h3 className="text-2xl sm:text-4xl font-tight font-bold text-white group-hover:text-[#D4F542] transition-colors tracking-tight">
                  {role.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
                  {role.description}
                </p>

                {/* Key Outcome */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-sans text-white/80 flex items-start gap-2">
                  <span className="text-[#D4F542] font-mono font-bold">Key mission:</span>
                  <span>{role.outcomes}</span>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 flex lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 flex-shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/[0.08]">
                <a
                  href={`mailto:inquiry@technaviatechnology.com?subject=Application:%20${encodeURIComponent(
                    role.title
                  )}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black hover:bg-[#D4F542] font-tight font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(212,245,66,0.4)] whitespace-nowrap"
                >
                  <span>Apply for role</span>
                  <span className="text-sm font-bold">→</span>
                </a>
                <span className="text-[11px] font-mono text-[#A8B0BC]">Reviewed in 48h</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 md:py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full border-t border-white/[0.08] flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <SectionLabel>Culture & Engineering</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
            How the team builds.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRINCIPLES.map((item) => (
            <div
              key={item.num}
              className="p-8 rounded-3xl bg-zinc-950/70 border border-white/[0.1] backdrop-blur-md flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4F542]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]" />
                <span>{item.num}</span>
              </div>
              <h4 className="text-2xl font-tight font-semibold text-white">{item.title}</h4>
              <p className="text-sm text-white/70 leading-relaxed font-sans">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Book Call Section */}
      <BookSection />
    </div>
  );
}
