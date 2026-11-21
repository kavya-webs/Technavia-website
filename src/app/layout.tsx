import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageTransition } from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Runbook — Business Automation Agency | AI Workflows",
  description:
    "We wire your CRM, invoicing, onboarding and support into workflows that run while the office sleeps.",
  openGraph: {
    title: "Runbook — Business Automation Agency | AI Workflows",
    description:
      "We wire your CRM, invoicing, onboarding and support into workflows that run while the office sleeps.",
    url: "https://miraculous-beet-889424.framer.app",
    siteName: "Runbook",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0B0D10] text-[#F8F8F5] min-h-screen flex flex-col font-sans selection:bg-[#D4F542] selection:text-black">
        <SmoothScroll />
        <LoadingScreen />
        <PageTransition />
        <Navbar />
        <main className="flex-1 w-full relative z-10 bg-[#0B0D10] shadow-[0_40px_80px_rgba(0,0,0,0.95)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
