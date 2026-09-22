"use client";

import { useState } from "react";
import ProjectPreviewCards from "./ProjectPreviewCards";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./Container";
import TypingEffect from "./TypingEffect";
import {
  SiPhp,
  SiLaravel,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

export default function Hero() {
  const { scrollY } = useScroll();

  const skills = [
    {
      name: "PHP",
      icon: SiPhp,
      color: "from-[#777bb4]/20 to-[#777bb4]/10",
      border: "border-[#777bb4]/30",
      text: "text-[#777bb4]",
      iconColor: "#777bb4",
    },
    {
      name: "Laravel",
      icon: SiLaravel,
      color: "from-[#ff2d20]/20 to-[#ff2d20]/10",
      border: "border-[#ff2d20]/30",
      text: "text-[#ff2d20]",
      iconColor: "#ff2d20",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "from-[#4479a1]/20 to-[#4479a1]/10",
      border: "border-[#4479a1]/30",
      text: "text-[#4479a1]",
      iconColor: "#4479a1",
    },
    {
      name: "React",
      icon: SiReact,
      color: "from-[#61dafb]/20 to-[#61dafb]/10",
      border: "border-[#61dafb]/30",
      text: "text-[#61dafb]",
      iconColor: "#61dafb",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "from-[#ffffff]/20 to-[#ffffff]/10",
      border: "border-[#ffffff]/30",
      text: "text-[#ffffff]",
      iconColor: "#ffffff",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "from-[#3178c6]/20 to-[#3178c6]/10",
      border: "border-[#3178c6]/30",
      text: "text-[#3178c6]",
      iconColor: "#3178c6",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "from-[#06b6d4]/20 to-[#06b6d4]/10",
      border: "border-[#06b6d4]/30",
      text: "text-[#06b6d4]",
      iconColor: "#06b6d4",
    },
    {
      name: "Git",
      icon: SiGit,
      color: "from-[#f05032]/20 to-[#f05032]/10",
      border: "border-[#f05032]/30",
      text: "text-[#f05032]",
      iconColor: "#f05032",
    },
  ];

  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col items-start justify-start pt-32 md:pt-48 pb-12"
    >
      {/* Glow background con parallax */}
      <motion.div
        className="absolute inset-0 -z-10 flex justify-center"
        style={{
          y: useTransform(scrollY, [0, 800], [0, 300]),
        }}
      >
        <div className="w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#7aa2f7] opacity-20 blur-[150px] rounded-full"></div>
      </motion.div>

      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] bg-clip-text text-transparent mb-4">
            Isma — Full-Stack Developer
          </h1>

          <p className="text-base md:text-lg font-medium text-[#c0caf5] mb-4">
            PHP · Laravel · MySQL · REST APIs · React
          </p>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            <TypingEffect
              text="Developer building full-stack projects with PHP, Laravel and React — learning by doing."
              speed={30}
            />
          </p>
          <div className="relative inline-flex flex-wrap items-center gap-3 md:gap-4 mt-8">
            <motion.a
              href="#projects"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-[#527dc1] text-[#e0f2fe] rounded-lg font-medium hover:bg-[#4266a8] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#527dc1]/50 relative z-20 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-transparent border border-[#527dc1] text-[#527dc1] rounded-lg font-medium hover:bg-[#527dc1]/10 transition-all hover:scale-105 relative z-20 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>

            {/* Preview Cards - Solo en desktop */}
            <div className="hidden md:block">
              <ProjectPreviewCards isHovered={isHovering} />
            </div>
          </div>
        </div>
      </Container>

      {/* Carrusel de Skills al final del Hero */}
      <div className="absolute bottom-20 md:bottom-32 left-0 right-0 w-full overflow-hidden py-4 md:py-8">
        {/* Blur gradient izquierdo */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#1a1b26] to-transparent z-10 pointer-events-none"></div>

        {/* Blur gradient derecho */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#1a1b26] to-transparent z-10 pointer-events-none"></div>

        {/* Carrusel infinito */}
        <div className="flex gap-4 md:gap-6 animate-marquee">
          {duplicatedSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={`${skill.name}-${index}`}
                className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r ${skill.color} border ${skill.border} ${skill.text} font-medium text-xs md:text-sm whitespace-nowrap backdrop-blur-sm`}
              >
                <Icon
                  size={16}
                  className="md:w-[18px] md:h-[18px]"
                  style={{ color: skill.iconColor }}
                />
                <span className="hidden sm:inline">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
