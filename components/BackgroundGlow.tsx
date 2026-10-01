"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

function ParallaxGlow() {
  const { scrollY } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 -z-10 flex justify-center"
      style={{
        y: useTransform(scrollY, [0, 1000], [0, 400]),
      }}
    >
      <div className="h-[700px] w-[700px] rounded-full bg-[#7aa2f7]/10 blur-[160px] md:h-[900px] md:w-[900px] md:blur-[200px]"></div>
    </motion.div>
  );
}

export default function BackgroundGlow() {
  const prefersReducedMotion = useReducedMotion();

  // Sin animación vinculada al scroll: halo estático sutil, misma estética.
  if (prefersReducedMotion) {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 flex justify-center"
      >
        <div className="h-[700px] w-[700px] rounded-full bg-[#7aa2f7]/10 blur-[160px] md:h-[900px] md:w-[900px] md:blur-[200px]"></div>
      </div>
    );
  }

  return <ParallaxGlow />;
}
