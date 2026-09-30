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
  const glowY = useTransform(scrollY, [0, 800], [0, 300]);

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

  // Dos copias para el loop -50%: una visible, una solo visual (aria-hidden).
  const marqueeCopies = [false, true];
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex min-h-[svh] flex-col overflow-clip pb-0"
    >
      {/* Glow decorativo — reducido a un solo halo, contenido por overflow-clip */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex justify-center"
        style={{
          y: glowY,
        }}
      >
        <div className="h-[380px] w-[340px] rounded-full bg-[#7aa2f7] opacity-15 blur-[120px] md:h-[520px] md:w-[560px]"></div>
      </motion.div>

      <div className="flex flex-1 flex-col justify-center pb-10 pt-28 md:pb-14 md:pt-40">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#7aa2f7] md:text-sm">
              MELAB · Mel Lab
            </p>
            <h1 className="mb-4 text-balance bg-gradient-to-r from-[#7aa2f7] via-[#93aef7] to-[#bb9af7] bg-clip-text pb-1 text-5xl font-semibold leading-[1.05] tracking-tight text-transparent md:text-6xl lg:text-7xl">
              Ismael González
            </h1>

            <p className="mb-3 text-2xl font-semibold tracking-tight text-[#c0caf5] md:text-3xl">
              Full-Stack Developer
            </p>

            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#a9b1d6] md:text-sm">
              PHP · Laravel · MySQL · React
            </p>

            <p className="max-w-xl text-base leading-relaxed text-[#a9b1d6] md:text-lg">
              <TypingEffect
                text="Building full-stack projects with solid backend logic and modern, intuitive frontend"
                speed={30}
              />
            </p>
            <div className="relative mt-10 inline-flex max-w-full flex-wrap items-center gap-3 md:gap-4">
              <motion.a
                href="#projects"
                onMouseEnter={() => setIsPreviewVisible(true)}
                onMouseLeave={() => setIsPreviewVisible(false)}
                onFocus={() => setIsPreviewVisible(true)}
                onBlur={() => setIsPreviewVisible(false)}
                className="relative z-20 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#7aa2f7] px-7 py-3 text-sm font-semibold text-[#1a1b26] transition-colors hover:bg-[#9db8ff] hover:shadow-lg hover:shadow-[#7aa2f7]/25 md:text-[15px]"
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                className="relative z-20 inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#7aa2f7]/60 bg-transparent px-7 py-3 text-sm font-semibold text-[#9db8ff] transition-colors hover:border-[#7aa2f7] hover:bg-[#7aa2f7]/10 md:text-[15px]"
                whileTap={{ scale: 0.97 }}
              >
                Contact
              </motion.a>

              {/* Preview Cards - Solo en desktop amplio, decorativas */}
              <div className="hidden lg:block" aria-hidden="true">
                <ProjectPreviewCards isHovered={isPreviewVisible} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Marquee en flujo normal: sin absolute, sin solape con CTAs */}
      <div className="marquee-pause relative w-full overflow-hidden py-5 md:py-7">
        {/* Fades laterales */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-[#1a1b26] to-transparent md:w-32"
        ></div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-[#1a1b26] to-transparent md:w-32"
        ></div>

        {/* Pista infinita: 2 copias idénticas, la segunda oculta a AT */}
        <div className="animate-marquee flex w-max">
          {marqueeCopies.map((hidden, copyIndex) => (
            <ul
              key={copyIndex}
              aria-hidden={hidden || undefined}
              className="flex shrink-0 items-center gap-4 pr-4 md:gap-6 md:pr-6"
            >
              {[...skills, ...skills].map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <li
                    key={`${skill.name}-${copyIndex}-${index}`}
                    className={`flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-gradient-to-r px-3 py-2 text-xs font-medium backdrop-blur-sm md:gap-2 md:px-5 md:py-2.5 md:text-sm ${skill.color} ${skill.border} ${skill.text}`}
                  >
                    <Icon
                      size={16}
                      aria-hidden="true"
                      className="md:h-[18px] md:w-[18px]"
                      style={{ color: skill.iconColor }}
                    />
                    <span>{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
