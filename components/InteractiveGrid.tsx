"use client";

import { useEffect, useRef, useState } from "react";

const SPACING = 50;
const DOT_RADIUS = 2;
const GLOW_RADIUS = 150;

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  // Loop dinámico solo con puntero fino y sin reduced-motion.
  const [dynamic, setDynamic] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compute = () => setDynamic(fine.matches && !reduced.matches);
    compute();
    fine.addEventListener("change", compute);
    reduced.addEventListener("change", compute);
    return () => {
      fine.removeEventListener("change", compute);
      reduced.removeEventListener("change", compute);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const draw = (interactive: boolean) => {
      const { x: mx, y: my } = mousePos.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / SPACING);
      const rows = Math.ceil(canvas.height / SPACING);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;

          let opacity = 0.15;
          let size = DOT_RADIUS;

          if (interactive) {
            const dx = mx - x;
            const dy = my - y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < GLOW_RADIUS) {
              const influence = 1 - distance / GLOW_RADIUS;
              opacity = 0.15 + influence * 0.6;
              size = DOT_RADIUS + influence * 3;
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(122, 162, 247, ${opacity})`;
          ctx.fill();
        }
      }
    };

    // Sin loop dinámico: un único frame estático (misma densidad, sin coste).
    if (!dynamic) {
      draw(false);
      const onResize = () => draw(false);
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", resize);

    let rafId = 0;
    let running = false;

    const loop = () => {
      if (!running) return;
      // Pausa real cuando la pestaña no está visible.
      if (!document.hidden) draw(true);
      rafId = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || document.hidden) return;
      running = true;
      rafId = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, [dynamic]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
