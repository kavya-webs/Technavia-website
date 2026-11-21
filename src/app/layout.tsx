import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageTransition } from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://technavia.com"),
  title: {
    default: "TECHNAVIA — Websites Engineered to Rank on Google & AI",
    template: "%s | TECHNAVIA",
  },
  description:
    "Fast, conversion-focused Web Development + Technical SEO, LLM Visibility (AEO / GEO), and Custom AI Automations on autopilot.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "TECHNAVIA — Websites Engineered to Rank on Google & AI",
    description:
      "Websites engineered to rank on Google & AI. Web Dev + SEO, LLM Visibility, and Custom AI Automations.",
    url: "https://miraculous-beet-889424.framer.app",
    siteName: "TECHNAVIA",
    type: "website",
    images: [
      {
        url: "/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "TECHNAVIA — Built to Rank. Automated to Scale.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TECHNAVIA — Websites Engineered to Rank on Google & AI",
    description:
      "Websites engineered to rank on Google & AI. Web Dev + SEO, LLM Visibility, and Custom AI Automations.",
    images: ["/images/technavia/Banner-1.png"],
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
