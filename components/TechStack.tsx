"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";

const core: { label: string; concept?: boolean }[] = [
  { label: "PHP" },
  { label: "Laravel" },
  { label: "React" },
  { label: "REST API" },
  { label: "MySQL" },
  { label: "Tailwind CSS" },
  // Capacidad arquitectónica demostrada por To Do Ghost (no un framework).
  { label: "MVC", concept: true },
];

const supporting: string[] = [
  "Livewire",
  "Vite",
  "Axios",
  "React Router",
  "JavaScript",
  "JSON",
];

const tools: string[] = ["Git", "GitHub", "Docker", "Pest", "Scribe", "Vercel"];

function Tier({
  index,
  title,
  hint,
  children,
  disableMotion,
}: {
  index: string;
  title: string;
  hint: string;
  children: React.ReactNode;
  disableMotion: boolean;
}) {
  return (
    <motion.section
      aria-label={title}
      initial={disableMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="flex items-baseline gap-4">
        <span
          aria-hidden="true"
          className="font-mono text-xs text-[#a9b1d6]/50"
        >
          {index}
        </span>
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c0caf5]">
          {title}
        </h3>
        <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
        <span className="hidden text-xs text-[#a9b1d6]/60 sm:inline">
          {hint}
        </span>
      </div>
      <div className="mt-5">{children}</div>
    </motion.section>
  );
}

export default function TechStack() {
  const prefersReducedMotion = useReducedMotion();
  const disableMotion = prefersReducedMotion ?? false;

  return (
    <Section id="stack">
      <motion.div
        initial={disableMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#7aa2f7] md:text-sm">
          04 — Stack
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-[#c0caf5] md:text-3xl">
          Tech Stack
        </h2>
        <p className="mb-10 mt-3 max-w-2xl text-sm leading-relaxed text-[#a9b1d6] md:mb-12 md:text-base">
          Technologies I use to build full-stack applications.
        </p>

        <div className="space-y-10 md:space-y-12">
          <Tier
            index="01"
            title="Core"
            hint="What I build with"
            disableMotion={disableMotion}
          >
            <ul className="flex max-w-2xl flex-wrap gap-2.5 md:gap-3">
              {core.map((item) => (
                <li
                  key={item.label}
                  className={`rounded-lg border px-4 py-2 text-sm font-semibold text-[#c0caf5] md:text-[15px] ${
                    item.concept
                      ? "border-dashed border-[#bb9af7]/50 bg-[#bb9af7]/[0.07]"
                      : "border-[#7aa2f7]/40 bg-[#7aa2f7]/10"
                  }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </Tier>

          <Tier
            index="02"
            title="Supporting"
            hint="Proven complements"
            disableMotion={disableMotion}
          >
            <ul className="flex max-w-2xl flex-wrap gap-2">
              {supporting.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[13px] font-medium text-[#a9b1d6]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Tier>

          <Tier
            index="03"
            title="Tools / Workflow"
            hint="How I work"
            disableMotion={disableMotion}
          >
            <ul className="flex max-w-2xl flex-wrap gap-2">
              {tools.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#a9b1d6]/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Tier>
        </div>
      </motion.div>
    </Section>
  );
}
