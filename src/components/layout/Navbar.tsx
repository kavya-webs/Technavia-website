"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LitDot } from "../ui/LitDot";
import { Button } from "../ui/Button";

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
    { name: "Services", href: "/workflows" },
    { name: "Results", href: "/results" },
    { name: "Process", href: "/process" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[88px] z-50 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        isAway ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`w-full h-full px-6 md:px-14 flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? "bg-[#0B0D10]/80 backdrop-blur-md border-b border-white/[0.08]"
            : "bg-transparent"
        }`}
      >
        {/* Brand Logo - Made bigger */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="scale-125 flex items-center justify-center">
            <LitDot />
          </div>
          <span className="font-tight font-semibold text-2xl md:text-[26px] tracking-tight text-[#F8F8F5] group-hover:text-[#D4F542] transition-colors">
            Runbook
          </span>
        </Link>

        {/* Desktop Navigation Links - Hover effect with white pill shape & black text, active marked by green dot */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {navLinks.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 text-[#F8F8F5] hover:bg-white hover:text-black group flex flex-col items-center"
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button href="/book" variant="quiet" className="hidden sm:inline-flex">
            Book a call
          </Button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-white/[0.08] text-white border border-white/[0.1]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[88px] bg-[#0B0D10]/95 backdrop-blur-xl border-b border-white/[0.1] p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/90 hover:text-[#D4F542] py-2 border-b border-white/[0.05]"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Button href="/book" className="w-full">
              Book a call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
