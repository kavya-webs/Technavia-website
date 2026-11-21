import React, { Suspense } from "react";
import { Metadata } from "next";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { BookForm } from "./BookForm";

export const metadata: Metadata = {
  title: "TECHNAVIA — Book a 20-minute architecture screen share",
  description:
    "Screen share with a senior engineer who writes code. We will map your web architecture, search visibility, and AI automation strategy.",
};

export default function BookPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Subpage Hero with Dusk Logistics Depot Photography & Split-Line Animation */}
      <SubpageHero
        pageName="Book a Call"
        titleLine1="Twenty minutes."
        titleLine2="No pitch."
        subtitle="Screen share with an engineer who writes code. We will map two workflows you want off your desk this month."
        backgroundImage="https://framerusercontent.com/images/o9ITAJgXIoSkR7WSBLyUKwhA1PI.webp?scale-down-to=2048"
        wireframeNumber="20"
        statusPills={[
          { text: "20-MIN SCREEN SHARE", variant: "brass" },
          { text: "NO SLIDES · LIVE MAPPING", variant: "ghost" },
          { text: "WITH AUTOMATION ENGINEER", variant: "outline" },
        ]}
      />

      {/* Booking Form Interface wrapped in Suspense boundary for Next.js 15 App Router */}
      <section className="py-20 md:py-28 px-6 md:px-8 lg:px-14 max-w-[1280px] mx-auto w-full flex flex-col items-center">
        <Suspense
          fallback={
            <div className="py-24 max-w-[800px] mx-auto w-full text-center text-xs font-mono text-white/50 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] animate-ping" />
              <span>INITIALIZING SCHEDULER...</span>
            </div>
          }
        >
          <BookForm />
        </Suspense>
      </section>
    </div>
  );
}
