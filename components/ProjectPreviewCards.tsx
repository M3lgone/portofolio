"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectPreviewCardsProps {
  isHovered: boolean;
}

export default function ProjectPreviewCards({ isHovered }: ProjectPreviewCardsProps) {
const projects = [
  {
    id: 1,
    name: "To Do Ghost",
    color: "from-[#61dafb]/30 to-[#bb9af7]/30",
    position: "top-[-200px] left-[-280px]",
    rotation: -15,
    image: "/projects/to-do-ghost-dashboard.png",
    imageAlt: "To Do Ghost dashboard screenshot",
    imageFit: "cover" as const,
  },
  {
    id: 2,
    name: "Battle Odyssey · Livewire",
    color: "from-[#bb9af7]/30 to-[#f7768e]/30",
    position: "top-[-220px] left-[-100px]",
    rotation: -5,
    image: "/projects/battle-livewire.png",
    imageAlt: "Battle Odyssey Livewire battle screen",
    imageFit: "cover" as const,
  },
  {
    id: 3,
    name: "Battle Odyssey · API",
    color: "from-[#7dcfff]/30 to-[#9ece6a]/30",
    position: "top-[-220px] right-[-100px]",
    rotation: 5,
    image: "/projects/battle-api-logo.png",
    imageAlt: "Battle Odyssey API logo",
    imageFit: "contain" as const,
  },
  {
    id: 4,
    name: "Battle Odyssey · React",
    color: "from-[#e0af68]/30 to-[#7aa2f7]/30",
    position: "top-[-200px] right-[-280px]",
    rotation: 15,
    image: "/projects/battle-front.png",
    imageAlt: "Battle Odyssey React frontend combat screen",
    imageFit: "cover" as const,
  },
];

  return (
    <AnimatePresence>
      {isHovered && (
        <>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
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
                damping: 20
              }}
              className={`absolute ${project.position} w-48 h-64 rounded-2xl bg-gradient-to-br ${project.color} border border-white/20 backdrop-blur-md pointer-events-none shadow-2xl`}
            >
              {/* Preview visual real del proyecto */}
              <div className="absolute inset-4 bg-[#0E2657] rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="192px"
                  className={
                    project.imageFit === "contain"
                      ? "object-contain p-4"
                      : "object-cover object-top"
                  }
                />
              </div>
            </motion.div>
          ))}
        </>
      )}
    </AnimatePresence>
  );
}