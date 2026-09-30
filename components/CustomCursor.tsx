"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const enableId = requestAnimationFrame(() => setEnabled(true));
    document.body.classList.add("custom-cursor-active");

    let rafId = 0;
    let pending = false;
    let lastEvent: MouseEvent | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      lastEvent = e;
      if (pending) return;
      pending = true;
      rafId = requestAnimationFrame(() => {
        pending = false;
        if (!lastEvent) return;
        setMousePosition({ x: lastEvent.clientX, y: lastEvent.clientY });

        const target = lastEvent.target as HTMLElement | null;
        setIsPointer(
          !!target?.closest("a, button, [role='button']")
        );
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(enableId);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Cursor principal (punto pequeño) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#7aa2f7] rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Cursor glow (círculo grande con blur) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#7aa2f7]/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </>
  );
}