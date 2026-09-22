"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Image from "next/image";
import { Github, ArrowRight } from "lucide-react";

type Project = {
  badge: string;
  title: string;
  description: string;
  tags: { label: string; bg: string; text: string; border: string }[];
  repo: string;
  image?: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
};

const projects: Project[] = [
  {
    badge: "Standalone project",
    title: "To Do Ghost",
    description:
      "Task management web app built from scratch following an MVC architecture with a custom PHP framework (Router, Controller, View). Full CRUD with business logic, status workflow (Pending → In Progress → Done), dashboard filters and JSON persistence.",
    tags: [
      { label: "PHP", bg: "bg-[#777bb4]/20", text: "text-[#777bb4]", border: "border-[#777bb4]/30" },
      { label: "MVC", bg: "bg-[#527dc1]/20", text: "text-[#527dc1]", border: "border-[#527dc1]/30" },
      { label: "JSON", bg: "bg-[#9ece6a]/20", text: "text-[#9ece6a]", border: "border-[#9ece6a]/30" },
    ],
    repo: "https://github.com/M3lgone/to-do-ghost",
    image: "/projects/to-do-ghost-dashboard.png",
    imageAlt: "To Do Ghost dashboard screenshot",
    imageFit: "cover",
  },
  {
    badge: "Battle Odyssey · Part 1 of 3",
    title: "Battle Odyssey — Livewire",
    description:
      "Turn-based RPG built with Laravel and Livewire: a Warrior faces three consecutive battles (Goblin → Troll → Orc boss). Reactive HP/MP components, enemy AI, battle log, rest-or-continue progression and session-persisted state.",
    tags: [
      { label: "PHP", bg: "bg-[#777bb4]/20", text: "text-[#777bb4]", border: "border-[#777bb4]/30" },
      { label: "LARAVEL", bg: "bg-[#ff2d20]/20", text: "text-[#ff2d20]", border: "border-[#ff2d20]/30" },
      { label: "LIVEWIRE", bg: "bg-[#bb9af7]/20", text: "text-[#bb9af7]", border: "border-[#bb9af7]/30" },
    ],
    repo: "https://github.com/M3lgone/battle-odissey",
    image: "/projects/battle-livewire.png",
    imageAlt: "Battle Odyssey Livewire battle screen",
    imageFit: "cover",
  },
  {
    badge: "Battle Odyssey · Part 2 of 3",
    title: "Battle Odyssey — REST API",
    description:
      "Decoupled REST API (JSON over /api/v1) owning the game rules and persistence: Passport Bearer authentication, player/admin roles, characters, enemies, skills, games and battles, FormRequest validation, Pest tests, Scribe docs and Docker setup.",
    tags: [
      { label: "LARAVEL", bg: "bg-[#ff2d20]/20", text: "text-[#ff2d20]", border: "border-[#ff2d20]/30" },
      { label: "REST API", bg: "bg-[#7dcfff]/20", text: "text-[#7dcfff]", border: "border-[#7dcfff]/30" },
      { label: "MYSQL", bg: "bg-[#4479a1]/20", text: "text-[#4479a1]", border: "border-[#4479a1]/30" },
    ],
    repo: "https://github.com/M3lgone/battle-odyssey-api",
    image: "/projects/battle-api-logo.png",
    imageAlt: "Battle Odyssey API logo",
    imageFit: "contain",
  },
  {
    badge: "Battle Odyssey · Part 3 of 3",
    title: "Battle Odyssey — React Frontend",
    description:
      "React game client consuming the REST API: reusable components, character selection with stats, animated turn-based combat with battle effects, HP/MP carry-over with Rest & Next, battle history and admin management screens.",
    tags: [
      { label: "REACT", bg: "bg-[#61dafb]/20", text: "text-[#61dafb]", border: "border-[#61dafb]/30" },
      { label: "REST API", bg: "bg-[#7dcfff]/20", text: "text-[#7dcfff]", border: "border-[#7dcfff]/30" },
      { label: "TAILWIND", bg: "bg-[#06b6d4]/20", text: "text-[#06b6d4]", border: "border-[#06b6d4]/30" },
    ],
    repo: "https://github.com/M3lgone/battle-odyssey-front",
    image: "/projects/battle-front.png",
    imageAlt: "Battle Odyssey React frontend combat screen",
    imageFit: "cover",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.015, y: -3 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden group rounded-xl bg-[#24283b] border border-white/10 hover:border-[#527dc1] transition shadow-sm hover:shadow-xl hover:shadow-[#527dc1]/10"
    >

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#527dc1]/10 to-[#bb9af7]/10 blur-xl"></div>
      </div>

      {/* Image Preview */}
      <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-[#527dc1]/30 to-[#bb9af7]/30 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={
              project.imageFit === "contain"
                ? "object-contain p-8"
                : "object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
            }
          />
        ) : null}
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <p className="text-xs font-medium tracking-wide text-[#7aa2f7] mb-2">
          {project.badge}
        </p>
        <h3 className="text-lg md:text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-[#a9b1d6] text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
          {project.tags.map((t) => (
            <span
              key={t.label}
              className={`px-3 py-1 text-xs rounded-full ${t.bg} ${t.text} border ${t.border}`}
            >
              {t.label}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <motion.a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 bg-[#527dc1] text-[#e0f2fe] rounded-lg font-medium hover:bg-[#4266a8] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#527dc1]/50 text-xs md:text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} className="md:w-[18px] md:h-[18px]" />
            View Repository
          </motion.a>
        </div>
      </div>

    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects">

      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 md:mb-6">
        Projects
      </h2>

      <p className="text-[#a9b1d6] text-sm md:text-base leading-relaxed max-w-2xl mb-6 md:mb-8">
        A task manager built from scratch with PHP and MVC — and Battle Odyssey,
        one game that evolved in three stages: from a Livewire app to a decoupled
        Laravel REST API with a React frontend.
      </p>

      {/* Battle Odyssey evolution strip */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-8 md:mb-12 text-xs md:text-sm">
        <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#ff2d20]/10 border border-[#ff2d20]/30 text-[#ff2d20] font-medium">
          Part 1 · Laravel + Livewire
        </span>
        <ArrowRight size={16} className="text-[#527dc1] flex-shrink-0" />
        <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#7dcfff]/10 border border-[#7dcfff]/30 text-[#7dcfff] font-medium">
          Part 2 · Laravel REST API
        </span>
        <ArrowRight size={16} className="text-[#527dc1] flex-shrink-0" />
        <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#61dafb]/10 border border-[#61dafb]/30 text-[#61dafb] font-medium">
          Part 3 · React Frontend
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

    </Section>
  );
}
