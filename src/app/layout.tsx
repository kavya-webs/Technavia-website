import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageTransition } from "@/components/layout/PageTransition";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://technaviatechnology.com"),
  title: {
    default: "TECHNAVIA — Websites Engineered to Rank on Google & AI",
    template: "%s | TECHNAVIA",
  },
  description:
    "We engineer sub-second B2B websites built to rank on Google, get cited by ChatGPT & Perplexity, and auto-qualify every inbound lead into your CRM.",
  alternates: {
    canonical: "https://technaviatechnology.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "TECHNAVIA — Websites Engineered to Rank on Google & AI",
    description:
      "Turn your website into a Google, AI-search, and lead-automation engine in 21 days.",
    url: "https://technaviatechnology.com",
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
      "Turn your website into a Google, AI-search, and lead-automation engine in 21 days.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0B0D10] text-[#F8F8F5] min-h-screen flex flex-col font-sans selection:bg-[#D4F542] selection:text-black">
        <OrganizationJsonLd />
        <SmoothScroll />
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
