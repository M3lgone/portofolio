"use client";

import { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajustar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Configuración del grid
    const spacing = 50; // Espacio entre puntos
    const dotRadius = 2; // Tamaño del punto
    const glowRadius = 150; // Radio de influencia del mouse

    // Tracking del mouse
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animación del grid
    let rafId = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!document.hidden) {
        const cols = Math.ceil(canvas.width / spacing);
        const rows = Math.ceil(canvas.height / spacing);

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const x = i * spacing;
            const y = j * spacing;

            // Calcular distancia al mouse
            const dx = mousePos.current.x - x;
            const dy = mousePos.current.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Calcular opacidad basada en distancia
            let opacity = 0.15;
            let size = dotRadius;

            if (distance < glowRadius) {
              const influence = 1 - distance / glowRadius;
              opacity = 0.15 + influence * 0.6;
              size = dotRadius + influence * 3;
            }

            // Dibujar punto
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(122, 162, 247, ${opacity})`;
            ctx.fill();
          }
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}