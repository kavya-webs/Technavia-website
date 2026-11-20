import React from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { BookSection } from "@/components/sections/BookSection";

export const metadata = {
  title: "Runbook — Careers: automation engineers and ops builders",
  description: "Work you can point at. Remote first, real clients from week one, and a workflow stack you can think with.",
};

export default function CareersPage() {
  const roles = [
    {
      num: "01",
      title: "Senior Automation Engineer",
      team: "Engineering · Full-time",
      location: "London / Remote (UK/EU)",
      description:
        "Build resilient multi-step webhook pipelines in Make, n8n, Python and TypeScript connecting enterprise CRMs and billing engines.",
    },
    {
      num: "02",
      title: "Operations Solutions Architect",
      team: "Solutions · Full-time",
      location: "London / Remote (UK/EU)",
      description:
        "Lead on-site client audits, interview operations managers, and translate messy manual office workflows into clean technical specifications.",
    },
    {
      num: "03",
      title: "Client Automation Success Lead",
      team: "Client Operations · Full-time",
      location: "Remote",
      description:
        "Manage live workflow monitoring, handle client Slack requests, and proactively discover new automation opportunities for existing accounts.",
    },
  ];

  return (
    <div className="flex flex-col w-full pt-[100px]">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-white">About</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Careers</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95] max-w-4xl">
          Work you can <br />
          <span className="text-[#D4F542]">point at.</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
          Remote-first, real clients from week one, and a work stack where the things you build
          execute automatically every single night.
        </p>
      </section>

      {/* Open Roles List */}
      <section className="py-24 px-6 md:px-14 max-w-[1280px] mx-auto w-full flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <SectionLabel>Open roles</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
            Three roles open on the night shift.
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-white/[0.1] border-y border-white/[0.1]">
          {roles.map((role) => (
            <div
              key={role.num}
              className="py-10 flex flex-col md:flex-row md:items-center justify-between gap-8 group"
            >
              <div className="flex flex-col gap-3 max-w-xl">
                <div className="flex items-center gap-3 text-xs font-mono text-white/40">
                  <span className="text-[#D4F542]">{role.num}</span>
                  <span>·</span>
                  <span>{role.team}</span>
                  <span>·</span>
                  <span className="text-white/60">{role.location}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-white group-hover:text-[#D4F542] transition-colors">
                  {role.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-sans">{role.description}</p>
              </div>

              <a
                href={`mailto:careers@runbookops.agency?subject=Application:%20${role.title}`}
                className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#D4F542] transition-colors whitespace-nowrap self-start md:self-auto"
              >
                Apply for role →
              </a>
            </div>
          ))}
        </div>
      </section>

      <BookSection />
    </div>
  );
}
