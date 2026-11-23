"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LitDot } from "../ui/LitDot";
import { Button } from "../ui/Button";
import { TechnaviaLogo } from "../ui/TechnaviaLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isAway, setIsAway] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 30);

      // Auto-hide when scrolling down past 120px, reveal when scrolling up
      if (currentY > 120 && currentY > lastY) {
        setIsAway(true);
      } else {
        setIsAway(false);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Results", href: "/results" },
    { name: "Process", href: "/process" },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/about" },
  ];

  if (pathname?.startsWith("/lp")) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[88px] z-50 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        isAway ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="w-full h-full px-6 md:px-8 lg:px-14 flex items-center justify-between bg-[#0B0D10]/85 backdrop-blur-md border-b border-white/[0.08] transition-all duration-400">
        {/* Brand Logo - Official TECHNAVIA */}
        <Link href="/" className="flex items-center group py-2" aria-label="TECHNAVIA Home">
          <TechnaviaLogo
            variant="horizontal"
            symbolSize={30}
            wordmarkHeight={18}
            className="group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Desktop & iPad Navigation Links - Hover effect with white pill shape & black text, active marked by green dot */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
          {navLinks.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-2.5 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 text-[#F8F8F5] hover:bg-white hover:text-black group flex flex-col items-center"
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="hidden sm:inline-flex">
            <Button href="/book" variant="quiet" className="!h-[40px] !px-4 !text-xs lg:!text-sm">
              Book a call
            </Button>
          </div>

          {/* Mobile hamburger button - 44px touch target */}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[88px] bg-[#0B0D10]/98 backdrop-blur-2xl border-b border-white/[0.12] p-6 sm:p-8 flex flex-col gap-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-xl font-tight font-medium py-3 border-b border-white/[0.06] transition-colors ${
                    isActive ? "text-[#D4F542]" : "text-white/85 hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                  )}
                </Link>
              );
            })}
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
