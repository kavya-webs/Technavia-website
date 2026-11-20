"use client";

import React, { useEffect, useState } from "react";

interface RollingCounterProps {
  value: string | number;
  className?: string;
  duration?: number;
}

export function RollingCounter({
  value,
  className = "",
}: RollingCounterProps) {
  const str = String(value);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className={`rb-roll ${className}`}>
      {str.split("").map((char, i) => {
        const isDigit = !isNaN(parseInt(char, 10));

        if (!isDigit) {
          return (
            <span key={i} className="inline-block px-[1px]">
              {char}
            </span>
          );
        }

        const digit = parseInt(char, 10);
        const yOffset = mounted ? digit * -10 : 0; // percentage based or em based

        return (
          <span key={i} className="rb-dg relative inline-block h-[1em] overflow-hidden align-top">
            <span
              className="rb-dg-c flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
              style={{
                transform: `translateY(${yOffset * 10}%)`,
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <span key={n} className="block h-[1em] leading-[1em] text-center">
                  {n}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}
