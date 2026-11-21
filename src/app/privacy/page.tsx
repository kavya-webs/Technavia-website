import React from "react";
import Link from "next/link";

export const metadata = {
  title: "TECHNAVIA — Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full pt-[100px]">
      <section className="py-20 px-6 md:px-14 border-b border-white/[0.08] max-w-[900px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Legal</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-tight font-semibold text-[#F8F8F5] tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-xs font-mono text-white/50">LAST UPDATED: 1 OCTOBER 2026</p>
      </section>

      <article className="py-16 px-6 md:px-14 max-w-[900px] mx-auto w-full flex flex-col gap-6 text-sm text-white/70 leading-relaxed font-sans">
        <h2 className="text-xl font-tight font-semibold text-white">1. Information We Collect</h2>
        <p>
          We collect basic contact information submitted via our booking and contact forms, including
          your name, company email address, and company operational software stack notes.
        </p>

        <h2 className="text-xl font-tight font-semibold text-white">2. How We Use It</h2>
        <p>
          We use this data exclusively to evaluate workflow compatibility, schedule initial consultation
          screen shares, and prepare architecture briefs. We never sell or license your contact details
          to third parties.
        </p>

        <h2 className="text-xl font-tight font-semibold text-white">3. Client Workflow Data</h2>
        <p>
          When executing automations for contracted clients, data payloads pass directly between the
          client's authorized systems (e.g., from CRM API directly to accounting software API). We do not
          store or log proprietary business transaction data on intermediary external databases.
        </p>

        <h2 className="text-xl font-tight font-semibold text-white">4. Your Rights</h2>
        <p>
          You may request full deletion of your contact records at any time by emailing
          contact@technavia.com.
        </p>
      </article>
    </div>
  );
}
