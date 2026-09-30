"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const coreItems = [
  "PHP",
  "Laravel",
  "MySQL",
  "React",
  "JavaScript",
  "REST API",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

const familiarGroups: { title: string; items: string[] }[] = [
  {
    title: "Frontend · Familiar",
    items: ["TypeScript", "Next.js"],
  },
  {
    title: "Backend · Familiar",
    items: ["Livewire", "Java", "Node.js"],
  },
  {
    title: "Databases · Familiar",
    items: ["PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    title: "Tools · Familiar",
    items: ["Docker", "Postman", "Vercel", "VS Code", "Vite"],
  },
  {
    title: "Testing & Docs · Familiar",
    items: ["Pest", "PHPUnit", "Scribe"],
  },
];

export default function TechStack() {
  return (
    <Section id="stack">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 md:mb-6">
          Tech Stack
        </h2>

        <p className="text-[#a9b1d6] text-sm md:text-base leading-relaxed max-w-2xl mb-6 md:mb-8">
          Core stack I use to build and deliver projects, plus other
          technologies I have used and can work with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="relative overflow-hidden group rounded-xl bg-[#24283b] border border-[#527dc1]/40 hover:border-[#527dc1] transition shadow-sm hover:shadow-xl hover:shadow-[#527dc1]/10 p-4 md:p-6 md:col-span-2">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-[#527dc1]/10 to-[#bb9af7]/10 blur-xl"></div>
            </div>

            <h3 className="relative text-lg md:text-xl font-medium mb-3 md:mb-4">
              Core
            </h3>
            <div className="relative flex flex-wrap gap-2">
              {coreItems.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs rounded-full bg-[#527dc1]/20 text-[#c0caf5] border border-[#527dc1]/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {familiarGroups.map((group) => (
            <div
              key={group.title}
              className="relative overflow-hidden group rounded-xl bg-[#24283b] border border-white/10 hover:border-[#527dc1] transition shadow-sm hover:shadow-xl hover:shadow-[#527dc1]/10 p-4 md:p-6"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-[#527dc1]/10 to-[#bb9af7]/10 blur-xl"></div>
              </div>

              <h3 className="relative text-lg md:text-xl font-medium mb-3 md:mb-4">
                {group.title}
              </h3>
              <div className="relative flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-[#a9b1d6] border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </motion.div>

    </Section>
  );
}
