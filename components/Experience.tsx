"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 md:mb-12">
          Experience
        </h2>

        <div className="space-y-6 md:space-y-8">

          <div>
            <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">
              Full-Stack Development
            </h3>
            <p className="text-[#a9b1d6] text-sm md:text-base leading-relaxed">
              I build full-stack applications with structured backend
              architecture: MVC projects in plain PHP, Laravel applications
              with Livewire, decoupled REST APIs with validation,
              authentication and database persistence, and interactive React
              frontends built with reusable components.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">
              Previous Professional Background
            </h3>
            <p className="text-[#a9b1d6] text-sm md:text-base leading-relaxed">
              Previous professional experience outside development, in
              operational and organization-focused roles involving incident
              handling, teamwork under pressure and responsibility in
              day-to-day operations.
            </p>
          </div>

        </div>

      </motion.div>

    </Section>
  );
}
