import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageTransition } from "@/components/layout/PageTransition";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { MetaPixel } from "@/components/analytics/MetaPixel";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-tight",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const isStaging =
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "development" ||
  (process.env.NEXT_PUBLIC_VERCEL_ENV && process.env.NEXT_PUBLIC_VERCEL_ENV !== "production");

export const metadata: Metadata = {
  metadataBase: new URL("https://technaviatechnology.com"),
  title: {
    default: "TECHNAVIA | Web Development, Technical SEO & AI Automation Studio",
    template: "%s | TECHNAVIA",
  },
  description:
    "TECHNAVIA is a B2B technology studio specializing in Web Development, Technical SEO, LLM Visibility (AEO/GEO), and Custom AI Automations at technaviatechnology.com.",
  alternates: {
    canonical: "https://technaviatechnology.com",
  },
  robots: isStaging
    ? {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      }
    : {
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "TECHNAVIA | Web Development, Technical SEO & AI Automation Studio",
    description:
      "B2B technology studio specializing in Web Development, Technical SEO, LLM Visibility (AEO/GEO), and Custom AI Automations at technaviatechnology.com.",
    url: "https://technaviatechnology.com",
    siteName: "TECHNAVIA",
    type: "website",
    images: [
      {
        url: "https://technaviatechnology.com/images/technavia/Banner-1.png",
        width: 1200,
        height: 630,
        alt: "TECHNAVIA | Web Development, Technical SEO & AI Automation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TECHNAVIA | Web Development, Technical SEO & AI Automation Studio",
    description:
      "B2B technology studio specializing in Web Development, Technical SEO, LLM Visibility (AEO/GEO), and Custom AI Automations at technaviatechnology.com.",
    images: ["https://technaviatechnology.com/images/technavia/Banner-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0B0D10] text-[#F8F8F5] min-h-screen flex flex-col font-sans selection:bg-[#D4F542] selection:text-black">
        <MetaPixel />
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
