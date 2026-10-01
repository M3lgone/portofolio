"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";

type ExperienceEntry = {
  index: string;
  period: string;
  periodAccent: "accent" | "violet";
  role: string;
  meta: string;
  description: string;
  highlights: string[];
};

// Contenido reutilizado verbatim de la versión anterior.
// Sin fechas/empresas inventadas: el periodo es editorial ("Current focus" /
// "Previous background") derivado de los propios encabezados existentes.
const entries: ExperienceEntry[] = [
  {
    index: "01",
    period: "Current focus",
    periodAccent: "accent",
    role: "Full-Stack Development",
    meta: "PHP · Laravel · Livewire · REST APIs · React",
    description:
      "I build full-stack applications with structured backend architecture: MVC projects in plain PHP, Laravel applications with Livewire, decoupled REST APIs with validation, authentication and database persistence, and interactive React frontends built with reusable components.",
    highlights: [
      "MVC projects in plain PHP and Laravel applications with Livewire",
      "Decoupled REST APIs with validation, authentication and database persistence",
      "Interactive React frontends built with reusable components",
    ],
  },
  {
    index: "02",
    period: "Previous background",
    periodAccent: "violet",
    role: "Previous Professional Background",
    meta: "Operations · Organisation · Teamwork",
    description:
      "Previous professional experience outside development, in operational and organization-focused roles involving incident handling, teamwork under pressure and responsibility in day-to-day operations.",
    highlights: [
      "Incident handling in operations",
      "Teamwork under pressure",
      "Responsibility in day-to-day operations",
    ],
  },
];

function TimelineEntry({
  entry,
  position,
  disableMotion,
}: {
  entry: ExperienceEntry;
  position: number;
  disableMotion: boolean;
}) {
  return (
    <motion.li
      initial={disableMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: position * 0.08 }}
      viewport={{ once: true, amount: 0.4 }}
      className="relative pl-7 md:pl-9"
    >
      {/* Punto de la timeline — pequeño, sin decoración excesiva */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-[7px] h-2 w-2 rounded-full border bg-[#1a1b26] ${
          entry.periodAccent === "violet"
            ? "border-[#bb9af7]"
            : "border-[#7aa2f7]"
        }`}
      />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-[150px_1fr] md:gap-6">
        {/* Periodo — tratamiento técnico/editorial, no es una fecha inventada */}
        <p className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] md:pt-1 md:text-xs">
          <span aria-hidden="true" className="mr-2 text-[#a9b1d6]/50">
            {entry.index}
          </span>
          <span
            className={
              entry.periodAccent === "violet"
                ? "text-[#bb9af7]"
                : "text-[#7aa2f7]"
            }
          >
            {entry.period}
          </span>
        </p>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight text-[#c0caf5] md:text-xl">
            {entry.role}
          </h3>
          <p className="mb-3 mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#a9b1d6]/80 md:text-[13px]">
            {entry.meta}
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-[#a9b1d6] md:text-base">
            {entry.description}
          </p>
          <ul className="mt-4 space-y-2">
            {entry.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-[#a9b1d6]"
              >
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-px w-4 shrink-0 bg-[#bb9af7]/70"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.li>
  );
}

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="experience">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#7aa2f7] md:text-sm">
          01 — Experience
        </p>
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#c0caf5] md:mb-12 md:text-3xl">
          Experience
        </h2>

        <ol className="relative space-y-10 border-l border-white/10 md:space-y-12">
          {entries.map((entry, i) => (
            <TimelineEntry
              key={entry.index}
              entry={entry}
              position={i}
              disableMotion={prefersReducedMotion ?? false}
            />
          ))}
        </ol>
      </motion.div>
    </Section>
  );
}
