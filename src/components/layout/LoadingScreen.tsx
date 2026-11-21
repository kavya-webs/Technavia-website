"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TechnaviaLogo } from "../ui/TechnaviaLogo";

export function LoadingScreen() {
  const [shouldRender, setShouldRender] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Only show on first visit in this browser session
    try {
      const shown = sessionStorage.getItem("technavia_intro_shown");
      if (!shown) {
        setShouldRender(true);
        sessionStorage.setItem("technavia_intro_shown", "true");

        // Complete fast & smooth in 1.1s
        const doneTimer = setTimeout(() => {
          setIsDone(true);
        }, 1100);

        return () => clearTimeout(doneTimer);
      }
    } catch {
      // In case sessionStorage is restricted
      setShouldRender(false);
    }
  }, []);

  const handleSkip = () => {
    setIsDone(true);
  };

  if (!shouldRender || isDone) return null;

  const words = ["BUILT", "TO", "RANK.", "AUTOMATED", "TO", "SCALE."];

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-[#0B0D10] text-[#F8F8F5] flex flex-col justify-between p-8 md:p-14 select-none overflow-hidden"
        >
          {/* Top Skip Button */}
          <div className="w-full flex justify-end">
            <button
              onClick={handleSkip}
              className="px-5 py-2 rounded-full border border-white/20 text-xs font-mono tracking-widest uppercase text-white/70 hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              SKIP
            </button>
          </div>

          {/* Center Brand & Loading Stage */}
          <div className="max-w-xl w-full mx-auto flex flex-col gap-5 my-auto">
            {/* Title Row */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              <TechnaviaLogo variant="horizontal" symbolSize={38} wordmarkHeight={24} />
            </motion.div>

            {/* Word-by-word dropping subtitle */}
            <div className="flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest uppercase">
              <span className="text-[#D4F542] font-semibold text-base md:text-lg">
                02:20
              </span>
              <div className="flex items-center gap-1.5 text-white/80">
                {words.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.1 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Glowing Lime Loading Bar - Pure CSS/Framer GPU transition */}
            <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative mt-2">
              <motion.div
                className="h-full bg-[#D4F542] rounded-full shadow-[0_0_12px_#D4F542,0_0_24px_#D4F542]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Bottom Counter Row */}
            <div className="flex items-center justify-between text-xs font-mono tracking-widest uppercase text-white/60 pt-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_6px_#D4F542]" />
                <span>TASKS TONIGHT</span>
              </div>
              <span className="text-[#D4F542] font-semibold">1,284</span>
            </div>
          </div>

          {/* Bottom Spacer */}
          <div className="h-6" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
