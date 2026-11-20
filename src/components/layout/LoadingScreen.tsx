"use client";

import React, { useState, useEffect } from "react";
import { RollingCounter } from "../ui/RollingCounter";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [isLifting, setIsLifting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user already saw the loader in this session
    const seen = sessionStorage.getItem("runbook_loader_seen");
    if (seen === "true") {
      setVisible(false);
      return;
    }

    // Progress bar animation over ~2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait briefly at 100%, then trigger curtain lift
          setTimeout(() => {
            setIsLifting(true);
            setTimeout(() => {
              setVisible(false);
              sessionStorage.setItem("runbook_loader_seen", "true");
            }, 900);
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    setIsLifting(true);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("runbook_loader_seen", "true");
    }, 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#0B0D10] text-[#F8F8F5] flex flex-col justify-between p-8 md:p-14 select-none transition-all duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] ${
        isLifting ? "-translate-x-full opacity-0 pointer-events-none" : "translate-x-0 opacity-100"
      }`}
    >
      {/* Top Bar with Skip */}
      <div className="w-full flex justify-end">
        <button
          onClick={handleSkip}
          className="px-5 py-2 rounded-full border border-white/20 text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          SKIP
        </button>
      </div>

      {/* Center Stage */}
      <div className="max-w-xl mx-auto w-full flex flex-col gap-6">
        {/* Runbook Brand with Glowing Lime Dot */}
        <div className="flex items-center gap-3">
          <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#D4F542] shadow-[0_0_20px_#D4F542]" />
          <h1 className="text-4xl md:text-6xl font-tight font-semibold tracking-tight text-white">
            Runbook
          </h1>
        </div>

        {/* Digital Clock Timestamp & Night Shift */}
        <div className="flex items-baseline gap-4 text-xs font-mono tracking-widest text-[#F8F8F5]">
          <span className="text-2xl md:text-3xl text-[#D4F542] font-semibold">02:20</span>
          <span className="text-white/80">THE NIGHT SHIFT STARTS</span>
        </div>

        {/* Glowing Progress Rail */}
        <div className="relative w-full h-[3px] bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#D4F542] shadow-[0_0_16px_#D4F542] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Bottom Task Metrics */}
        <div className="flex items-center justify-between text-xs font-mono tracking-widest text-white/80">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
            <span>TASKS TONIGHT</span>
          </span>
          <span className="text-[#D4F542] font-semibold text-sm">
            <RollingCounter value="1,284" />
          </span>
        </div>
      </div>

      {/* Bottom spacer for centering balance */}
      <div className="h-6" />
    </div>
  );
}
