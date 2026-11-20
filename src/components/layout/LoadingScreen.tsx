"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fill the bar over 2.2 seconds
    const startTime = Date.now();
    const duration = 2200;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        // Briefly hold the full bar, then trigger exit scale + fade
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            setVisible(false);
          }, 950);
        }, 300);
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  const handleSkip = () => {
    setProgress(100);
    setIsDone(true);
    setTimeout(() => {
      setVisible(false);
    }, 450);
  };

  if (!visible) return null;

  const words = ["THE", "NIGHT", "SHIFT", "STARTS"];

  return (
    <AnimatePresence>
      {!isDone ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1, scale: 1 }}
          exit={{
            scale: 1.65,
            opacity: 0,
            transition: { duration: 0.9, ease: [0.7, 0, 0.2, 1] },
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
            {/* Title Row with Squash & Stretch */}
            <motion.div
              initial={{ y: -80, opacity: 0, scaleX: 1.3, scaleY: 0.6 }}
              animate={{ y: 0, opacity: 1, scaleX: 1, scaleY: 1 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 22,
                mass: 1.2,
              }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-[#D4F542] shadow-[0_0_20px_#D4F542]" />
              <h1 className="text-4xl md:text-5xl font-tight font-bold tracking-tight text-white">
                Runbook
              </h1>
            </motion.div>

            {/* Word-by-word dropping subtitle */}
            <div className="flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest uppercase">
              <motion.span
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 18,
                  delay: 0.15,
                }}
                className="text-[#D4F542] font-semibold text-base md:text-lg"
              >
                02:20
              </motion.span>
              <div className="flex items-center gap-1.5 text-white/80">
                {words.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 18,
                      delay: 0.25 + i * 0.08,
                    }}
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Glowing Lime Loading Bar */}
            <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative mt-2">
              <motion.div
                className="h-full bg-[#D4F542] rounded-full shadow-[0_0_12px_#D4F542,0_0_24px_#D4F542]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
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
      ) : null}
    </AnimatePresence>
  );
}
