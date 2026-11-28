"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";
import { TechnaviaLogo } from "../ui/TechnaviaLogo";

interface ServiceSubItem {
  num: string;
  name: string;
  desc: string;
  href: string;
}

const SERVICE_ITEMS: ServiceSubItem[] = [
  {
    num: "01",
    name: "Web Development + Technical SEO",
    desc: "Sub-second Next.js builds engineered to rank",
    href: "/services/web-development-seo",
  },
  {
    num: "02",
    name: "LLM Visibility (AEO / GEO)",
    desc: "Get cited in ChatGPT, Gemini & Perplexity",
    href: "/services/llm-visibility",
  },
  {
    num: "03",
    name: "Custom AI Automations",
    desc: "Sub-60s lead routing, CRM sync & ops agents",
    href: "/services/ai-automations",
  },
];

const COMPANY_ITEMS = [
  {
    name: "About Technavia Technology",
    desc: "Studio story & engineering principles",
    href: "/about",
  },
  {
    name: "Contact",
    desc: "Direct inquiries & partnerships",
    href: "/contact",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isAway, setIsAway] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);
  const companyTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      if (currentY > 120 && currentY > lastY) {
        setIsAway(true);
      } else {
        setIsAway(false);
      }
      lastY = currentY;
    };

    // Initial check on mount
    setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setCompanyDropdown(false);
  }, [pathname]);

  if (pathname?.startsWith("/lp")) {
    return null;
  }

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setServicesDropdown(true);
  };
  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 150);
  };

  const handleCompanyEnter = () => {
    if (companyTimeout.current) clearTimeout(companyTimeout.current);
    setCompanyDropdown(true);
  };
  const handleCompanyLeave = () => {
    companyTimeout.current = setTimeout(() => {
      setCompanyDropdown(false);
    }, 150);
  };

  const isServicesActive = pathname.startsWith("/services");
  const isResultsActive = pathname.startsWith("/results");
  const isProcessActive = pathname.startsWith("/process");
  const isBlogsActive = pathname.startsWith("/blogs") || pathname.startsWith("/blog");
  const isCompanyActive = pathname.startsWith("/about") || pathname.startsWith("/contact");

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[88px] z-50 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        isAway ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`w-full h-full px-6 md:px-8 lg:px-14 flex items-center justify-between transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[#0B0D10]/85 backdrop-blur-md border-b border-white/[0.08]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Brand Logo - Official Technavia Technology */}
        <Link href="/" className="flex items-center group py-2" aria-label="Technavia Technology Home">
          <TechnaviaLogo
            variant="horizontal"
            symbolSize={30}
            wordmarkHeight={18}
            className="group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation Links - Exact 5 Center Slots (No crowding or wrapping) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {/* Slot 1: Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <Link
              href="/services"
              className={`relative px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                isServicesActive
                  ? "text-[#D4F542]"
                  : "text-[#F8F8F5] hover:bg-white hover:text-black"
              }`}
            >
              <span>Services</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  servicesDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
              </svg>
              {isServicesActive && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              )}
            </Link>

            {/* Dropdown Menu */}
            {servicesDropdown && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 w-[380px]"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <div className="rounded-2xl bg-[#14161A]/95 backdrop-blur-md border border-[#2A2F38] shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-2.5 flex flex-col gap-1">
                  {SERVICE_ITEMS.map((item) => {
                    const isSubActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`p-3 rounded-xl transition-all flex flex-col gap-1 group/item ${
                          isSubActive
                            ? "bg-white/[0.08] border border-[#D4F542]/30"
                            : "hover:bg-white/[0.05] border border-transparent"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono text-[#D4F542] text-[11px] font-semibold">
                            {item.num} · {item.name}
                          </span>
                          <span className="text-[#A8B0BC] group-hover/item:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
                        <p className="text-[11.5px] text-white/60 font-sans leading-tight">
                          {item.desc}
                        </p>
                      </Link>
                    );
                  })}

                  <div className="pt-2 mt-1 border-t border-white/[0.08] px-3 py-2 flex items-center justify-between">
                    <Link
                      href="/services"
                      className="text-xs font-mono text-[#D4F542] hover:underline flex items-center gap-1.5"
                    >
                      <span>Compare All Services & Retainers</span>
                      <span>→</span>
                    </Link>
                    <span className="text-[10px] font-mono text-[#A8B0BC] uppercase">5D WEB · 16D SEO</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Slot 2: Results */}
          <Link
            href="/results"
            className={`relative px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 text-[#F8F8F5] hover:bg-white hover:text-black flex flex-col items-center ${
              isResultsActive ? "text-[#D4F542]" : ""
            }`}
          >
            <span>Results</span>
            {isResultsActive && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
            )}
          </Link>

          {/* Slot 3: Process */}
          <Link
            href="/process"
            className={`relative px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 text-[#F8F8F5] hover:bg-white hover:text-black flex flex-col items-center ${
              isProcessActive ? "text-[#D4F542]" : ""
            }`}
          >
            <span>Process</span>
            {isProcessActive && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
            )}
          </Link>

          {/* Slot 4: Blogs */}
          <Link
            href="/blogs"
            className={`relative px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 text-[#F8F8F5] hover:bg-white hover:text-black flex flex-col items-center ${
              isBlogsActive ? "text-[#D4F542]" : ""
            }`}
          >
            <span>Blogs</span>
            {isBlogsActive && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
            )}
          </Link>

          {/* Slot 5: Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleCompanyEnter}
            onMouseLeave={handleCompanyLeave}
          >
            <Link
              href="/about"
              className={`relative px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                isCompanyActive
                  ? "text-[#D4F542]"
                  : "text-[#F8F8F5] hover:bg-white hover:text-black"
              }`}
            >
              <span>Company</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  companyDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
              </svg>
              {isCompanyActive && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              )}
            </Link>

            {/* Dropdown Menu */}
            {companyDropdown && (
              <div
                className="absolute top-full right-0 pt-2.5 z-50 w-[270px]"
                onMouseEnter={handleCompanyEnter}
                onMouseLeave={handleCompanyLeave}
              >
                <div className="rounded-2xl bg-[#14161A]/95 backdrop-blur-md border border-[#2A2F38] shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-2.5 flex flex-col gap-1">
                  {COMPANY_ITEMS.map((item) => {
                    const isSubActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`p-3 rounded-xl transition-all flex flex-col gap-0.5 group/item ${
                          isSubActive
                            ? "bg-white/[0.08] border border-[#D4F542]/30"
                            : "hover:bg-white/[0.05] border border-transparent"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-white group-hover/item:text-[#D4F542] transition-colors">
                          <span>{item.name}</span>
                          <span className="text-[#A8B0BC] group-hover/item:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
                        <p className="text-[11px] text-white/60 font-sans leading-tight">
                          {item.desc}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="hidden sm:inline-flex">
            <Button href="/book" variant="quiet" className="!h-[40px] !px-4 !text-xs lg:!text-sm">
              Book a call
            </Button>
          </div>

          {/* Mobile hamburger button - min 44px touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] w-11 h-11 p-2.5 rounded-full bg-white/[0.08] text-white border border-white/[0.15] flex items-center justify-center transition-all hover:bg-white/[0.18] hover:border-[#D4F542]/50 active:scale-95"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (< 1024px / md:hidden) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[88px] max-h-[calc(100vh-88px)] overflow-y-auto bg-[#0B0D10]/98 backdrop-blur-2xl border-b border-white/[0.12] p-6 sm:p-8 flex flex-col gap-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-1">
            {/* 1. Services Accordion */}
            <div className="border-b border-white/[0.06] pb-1">
              <div className="flex items-center justify-between min-h-[48px] py-2">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-tight font-medium ${
                    isServicesActive ? "text-[#D4F542]" : "text-white/90"
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white/60 hover:text-white"
                  aria-label="Expand services"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-3 pb-3 flex flex-col gap-2">
                  {SERVICE_ITEMS.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-0.5 active:bg-white/[0.08]"
                    >
                      <span className="text-xs font-mono font-semibold text-[#D4F542]">
                        {sub.num} · {sub.name}
                      </span>
                      <span className="text-[11px] text-white/60 leading-tight">{sub.desc}</span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-mono text-[#D4F542] hover:underline pt-1.5 pl-1"
                  >
                    Compare All Services & Retainers →
                  </Link>
                </div>
              )}
            </div>

            {/* 2. Results */}
            <Link
              href="/results"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between text-xl font-tight font-medium py-3 min-h-[48px] border-b border-white/[0.06] transition-colors ${
                isResultsActive ? "text-[#D4F542]" : "text-white/85 hover:text-white"
              }`}
            >
              <span>Results</span>
              {isResultsActive && (
                <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              )}
            </Link>

            {/* 3. Process */}
            <Link
              href="/process"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between text-xl font-tight font-medium py-3 min-h-[48px] border-b border-white/[0.06] transition-colors ${
                isProcessActive ? "text-[#D4F542]" : "text-white/85 hover:text-white"
              }`}
            >
              <span>Process</span>
              {isProcessActive && (
                <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              )}
            </Link>

            {/* 4. Blogs */}
            <Link
              href="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between text-xl font-tight font-medium py-3 min-h-[48px] border-b border-white/[0.06] transition-colors ${
                isBlogsActive ? "text-[#D4F542]" : "text-white/85 hover:text-white"
              }`}
            >
              <span>Blogs</span>
              {isBlogsActive && (
                <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              )}
            </Link>

            {/* 5. Company Accordion */}
            <div className="border-b border-white/[0.06] pb-1">
              <div className="flex items-center justify-between min-h-[48px] py-2">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-tight font-medium ${
                    isCompanyActive ? "text-[#D4F542]" : "text-white/90"
                  }`}
                >
                  Company
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white/60 hover:text-white"
                  aria-label="Expand company"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileCompanyOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {mobileCompanyOpen && (
                <div className="pl-3 pb-3 flex flex-col gap-2">
                  {COMPANY_ITEMS.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-0.5 active:bg-white/[0.08]"
                    >
                      <span className="text-xs font-tight font-semibold text-white">
                        {sub.name}
                      </span>
                      <span className="text-[11px] text-white/60 leading-tight">{sub.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <Button href="/book" className="w-full justify-center !h-[48px] !text-sm">
              Book a call
            </Button>
            <div className="flex items-center justify-between text-xs font-mono text-white/50 pt-2 border-t border-white/[0.08]">
              <span>REMOTE-FIRST · SERVING B2B WORLDWIDE</span>
              <span className="text-[#D4F542] font-semibold">3 SERVICES ACTIVE</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
