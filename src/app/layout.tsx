import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";

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
        <LoadingScreen />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
