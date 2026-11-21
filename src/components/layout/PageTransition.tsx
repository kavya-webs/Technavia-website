"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "covering" | "revealing">("idle");
  const targetUrlRef = useRef<string | null>(null);

  // Global event delegation to intercept internal link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip external links, mailto, tel, anchor hashes, modifier keys, target="_blank"
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        anchor.getAttribute("target") === "_blank" ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey ||
        e.button !== 0 // Only left click
      ) {
        return;
      }

      // Check if same URL
      if (href === pathname) {
        return;
      }

      e.preventDefault();
      targetUrlRef.current = href;
      setPhase("covering");
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [pathname]);

  // When covering finishes, navigate to the target route
  const handleCoverComplete = () => {
    if (targetUrlRef.current) {
      router.push(targetUrlRef.current);
      // Give Next.js a short moment to render the new route, then reveal
      setTimeout(() => {
        setPhase("revealing");
      }, 50);
    }
  };

  // When reveal finishes, return to idle
  const handleRevealComplete = () => {
    setPhase("idle");
    targetUrlRef.current = null;
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      <AnimatePresence mode="wait">
        {phase === "covering" && (
          <motion.div
            key="wipe-in"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={handleCoverComplete}
            className="absolute inset-0 bg-[#0B0D10] w-full h-full"
          >
            {/* Leading Green Line on the Left edge */}
            <div className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-[#D4F542] shadow-[0_0_16px_#D4F542,0_0_32px_rgba(212,245,66,0.9)]" />
          </motion.div>
        )}

        {phase === "revealing" && (
          <motion.div
            key="wipe-out"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={handleRevealComplete}
            className="absolute inset-0 bg-[#0B0D10] w-full h-full"
          >
            {/* Trailing Green Line on the Right edge */}
            <div className="absolute right-0 top-0 bottom-0 w-[2.5px] bg-[#D4F542] shadow-[0_0_16px_#D4F542,0_0_32px_rgba(212,245,66,0.9)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
