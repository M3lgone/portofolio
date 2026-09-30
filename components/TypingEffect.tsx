"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypingEffect({ 
  text, 
  speed = 50, 
  className = "" 
}: TypingEffectProps) {
  const [prefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [displayedText, setDisplayedText] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? text
      : ""
  );
  const [currentIndex, setCurrentIndex] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? text.length
      : 0
  );

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, prefersReducedMotion]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">
        {displayedText}
        {currentIndex < text.length && (
          <span className="animate-pulse">|</span>
        )}
      </span>
    </span>
  );
}