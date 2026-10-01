"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface ProjectPreviewCardsProps {
  isHovered: boolean;
}

export default function ProjectPreviewCards({
  isHovered,
}: ProjectPreviewCardsProps) {
  const prefersReducedMotion = useReducedMotion();

  const projects = [
    {
      id: 1,
      name: "To Do Ghost",
      color: "from-[#61dafb]/30 to-[#bb9af7]/30",
      position: "top-[-190px] left-[-160px]",
      rotation: -12,
      image: "/projects/to-do-ghost-dashboard.png",
      imageAlt: "",
      imageFit: "cover" as const,
    },
    {
      id: 2,
      name: "Battle Odyssey · Livewire",
      color: "from-[#bb9af7]/30 to-[#f7768e]/30",
      position: "top-[-205px] left-[-20px]",
      rotation: -4,
      image: "/projects/battle-livewire.png",
      imageAlt: "",
      imageFit: "cover" as const,
    },
    {
      id: 3,
      name: "Battle Odyssey · API",
      color: "from-[#7dcfff]/30 to-[#9ece6a]/30",
      position: "top-[-205px] right-[-20px]",
      rotation: 4,
      image: "/projects/battle-api-logo.png",
      imageAlt: "",
      imageFit: "contain" as const,
    },
    {
      id: 4,
      name: "Battle Odyssey · React",
      color: "from-[#e0af68]/30 to-[#7aa2f7]/30",
      position: "top-[-190px] right-[-160px]",
      rotation: 12,
      image: "/projects/battle-front.webp",
      imageAlt: "",
      imageFit: "cover" as const,
    },
  ];

  // Decorativas: sin animación si el usuario prefiere movimiento reducido.
  // El Hero funciona igual sin ellas (el CTA no depende del hover).
  if (prefersReducedMotion) return null;

  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0">
      <AnimatePresence>
        {isHovered && (
          <>
            {projects.map((project, index) => (
              <motion.span
                key={project.id}
                role="presentation"
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: project.rotation,
                }}
                exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className={`absolute ${project.position} block h-60 w-44 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br shadow-2xl backdrop-blur-md ${project.color}`}
              >
                <span className="absolute inset-3 overflow-hidden rounded-xl bg-[#0E2657]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="176px"
                    aria-hidden="true"
                    className={
                      project.imageFit === "contain"
                        ? "object-contain p-4"
                        : "object-cover object-top"
                    }
                  />
                </span>
              </motion.span>
            ))}
          </>
        )}
      </AnimatePresence>
    </span>
  );
}
