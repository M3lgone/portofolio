"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import Image from "next/image";
import { Github } from "lucide-react";

const FRONT_REPO = "https://github.com/M3lgone/battle-odyssey-front";
const API_REPO = "https://github.com/M3lgone/battle-odyssey-api";

function Tag({ label }: { label: string }) {
  return (
    <li className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-[#a9b1d6]">
      {label}
    </li>
  );
}

function RepoButton({
  href,
  children,
  variant = "secondary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        variant === "primary"
          ? "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#7aa2f7] px-7 py-3 text-sm font-semibold text-[#1a1b26] transition-colors hover:bg-[#9db8ff]"
          : "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-[#c0caf5] transition-colors hover:border-[#7aa2f7]/60 hover:bg-[#7aa2f7]/10"
      }
    >
      <Github size={16} aria-hidden="true" />
      {children}
    </a>
  );
}

function FeaturedFront({ disableMotion }: { disableMotion: boolean }) {
  return (
    <motion.article
      id="project-front"
      aria-labelledby="project-front-title"
      initial={disableMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.25 }}
      className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] scroll-mt-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Contenido */}
        <div className="order-1 flex flex-col justify-center p-6 md:p-10">
          <p className="mb-3 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] md:text-xs">
            <span className="rounded-full border border-[#bb9af7]/40 bg-[#bb9af7]/10 px-3 py-1 text-[#bb9af7]">
              Featured
            </span>
            <span className="text-[#7aa2f7]">Battle Odyssey · Latest frontend</span>
          </p>
          <h3
            id="project-front-title"
            className="mb-3 text-2xl font-semibold tracking-tight text-[#c0caf5] md:text-3xl"
          >
            Battle Odyssey — React Frontend
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-[#a9b1d6] md:text-base">
            Interactive frontend for Battle Odyssey, a dark fantasy turn-based
            RPG. It consumes the Laravel REST API to play full runs: hero
            selection, animated turn-based combat with HP/MP carry-over,
            battle history and admin screens.
          </p>

          <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {[
              "Reusable React components",
              "Routing with React Router",
              "Local state management",
              "Animated combat & effects",
              "Persistence through the API",
              "Battle history & admin panel",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-[#a9b1d6]"
              >
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-px w-4 shrink-0 bg-[#bb9af7]/70"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a9b1d6]/70">
              Frontend
            </p>
            <ul className="mb-4 flex flex-wrap gap-2">
              <Tag label="React" />
              <Tag label="Vite" />
              <Tag label="Tailwind CSS" />
              <Tag label="React Router" />
            </ul>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a9b1d6]/70">
              Integration · Related backend
            </p>
            <ul className="flex flex-wrap gap-2">
              <Tag label="REST API" />
              <Tag label="Axios" />
              <Tag label="Laravel API" />
            </ul>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <RepoButton href={FRONT_REPO} variant="primary">
              View Frontend
            </RepoButton>
            <RepoButton href={API_REPO}>View API</RepoButton>
          </div>
        </div>

        {/* Preview real del juego */}
        <figure className="relative order-2 min-h-0 border-t border-white/10 lg:border-l lg:border-t-0">
          <div className="relative aspect-video h-full w-full overflow-hidden bg-[#0E2657]">
            <Image
              src="/projects/battle-front.webp"
              alt="Battle Odyssey React frontend: turn-based combat screen with HP and MP bars"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="border-t border-white/10 px-6 py-3 text-xs text-[#a9b1d6]/70 md:px-10">
            In-game combat — interactive application, not a static mockup.
          </figcaption>
        </figure>
      </div>
    </motion.article>
  );
}

type SupportingProject = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  repo: string;
  image: string;
  imageAlt: string;
  imageFit: "cover" | "contain";
  imageBg: string;
  imageSizes: string;
};

const supporting: SupportingProject[] = [
  {
    id: "project-api",
    eyebrow: "Battle Odyssey · Backend",
    title: "Battle Odyssey — REST API",
    description:
      "Decoupled REST API owning the game rules and persistence: Passport Bearer authentication, player/admin roles, characters, enemies, skills, games and battles, FormRequest validation, Pest tests, Scribe docs and Docker setup.",
    tags: ["Laravel", "REST API", "MySQL", "Auth & Roles"],
    repo: API_REPO,
    image: "/projects/battle-api-logo.png",
    imageAlt: "Battle Odyssey API logo",
    imageFit: "contain",
    imageBg: "bg-[#0E2657]",
    imageSizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    id: "project-original",
    eyebrow: "Battle Odyssey · Original",
    title: "Battle Odyssey — Livewire",
    description:
      "The origin of the project: a complete, playable turn-based JRPG built with Laravel and Livewire. A Warrior faces three consecutive battles (Goblin → Troll → Orc boss) with reactive HP/MP components, enemy AI, battle log and rest-or-continue progression.",
    tags: ["Laravel", "Livewire", "Tailwind CSS"],
    repo: "https://github.com/M3lgone/battle-odissey",
    image: "/projects/battle-livewire.png",
    imageAlt: "Battle Odyssey Livewire battle screen",
    imageFit: "cover",
    imageBg: "bg-[#0E2657]",
    imageSizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    id: "project-todo-ghost",
    eyebrow: "PHP · MVC App",
    title: "To Do Ghost",
    description:
      "Task management web app built from scratch following an MVC architecture with a custom PHP framework (Router, Controller, View). Full CRUD with business logic, status workflow (Pending → In Progress → Done), dashboard filters and JSON persistence.",
    tags: ["PHP", "MVC", "JSON"],
    repo: "https://github.com/M3lgone/to-do-ghost",
    image: "/projects/to-do-ghost-dashboard.png",
    imageAlt: "To Do Ghost dashboard screenshot",
    imageFit: "cover",
    imageBg: "bg-[#0E2657]",
    imageSizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    id: "project-lights-out",
    eyebrow: "PHP · Puzzle Game",
    title: "Lights Out",
    description:
      "Classic Lights Out puzzle in plain PHP with Tailwind: random 3×3 to 6×6 board where each move toggles a cell and its orthogonal neighbours. Move counter, restart, randomize and win detection.",
    tags: ["PHP", "Tailwind CSS"],
    repo: "https://github.com/M3lgone/lights-out",
    image: "/projects/lights-out-board.png",
    imageAlt: "Lights Out game board",
    imageFit: "cover",
    imageBg: "bg-[#0E2657]",
    imageSizes: "(max-width: 768px) 100vw, 50vw",
  },
];

function SupportingCard({
  project,
  disableMotion,
  position,
}: {
  project: SupportingProject;
  disableMotion: boolean;
  position: number;
}) {
  return (
    <motion.article
      id={project.id}
      aria-labelledby={`${project.id}-title`}
      initial={disableMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (position % 2) * 0.08 }}
      viewport={{ once: true, amount: 0.25 }}
      className="group flex scroll-mt-28 flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-colors hover:border-[#7aa2f7]/50"
    >
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden ${project.imageBg}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={project.imageSizes}
          loading="lazy"
          className={
            project.imageFit === "contain"
              ? "object-contain p-8"
              : "object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          }
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7aa2f7]">
          {project.eyebrow}
        </p>
        <h3
          id={`${project.id}-title`}
          className="mb-2 text-lg font-semibold tracking-tight text-[#c0caf5] md:text-xl"
        >
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-[#a9b1d6]">
          {project.description}
        </p>
        <ul className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </ul>
        <div className="mt-auto">
          <RepoButton href={project.repo}>View Repository</RepoButton>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const disableMotion = prefersReducedMotion ?? false;

  return (
    <Section id="projects">
      <motion.div
        initial={disableMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#7aa2f7] md:text-sm">
          02 — Projects
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-[#c0caf5] md:text-3xl">
          Projects
        </h2>
        <p className="mb-8 mt-3 max-w-2xl text-sm leading-relaxed text-[#a9b1d6] md:mb-12 md:text-base">
          The evolution of Battle Odyssey — from the original Livewire game to
          a decoupled API with its own React frontend — plus selected side
          projects.
        </p>
      </motion.div>

      <FeaturedFront disableMotion={disableMotion} />

      {/* Relación sutil de la evolución, sin diagramas */}
      <p className="mb-8 mt-6 text-xs tracking-wide text-[#a9b1d6]/70 md:mb-10 md:text-sm">
        Part of the same evolution:{" "}
        <a
          href="#project-original"
          className="text-[#a9b1d6] underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#7aa2f7]"
        >
          Original
        </a>{" "}
        →{" "}
        <a
          href="#project-api"
          className="text-[#a9b1d6] underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#7aa2f7]"
        >
          REST API
        </a>{" "}
        →{" "}
        <a
          href="#project-front"
          className="text-[#a9b1d6] underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#7aa2f7]"
        >
          React Frontend
        </a>
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {supporting.map((project, i) => (
          <SupportingCard
            key={project.id}
            project={project}
            position={i}
            disableMotion={disableMotion}
          />
        ))}
      </div>
    </Section>
  );
}
