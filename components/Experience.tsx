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
              Full-Stack Development — Training & Practical Projects
            </h3>
            <p className="text-[#a9b1d6] text-sm md:text-base leading-relaxed">
              Specialized training in web development with practical projects
              built with PHP, Laravel, MySQL, REST APIs and React — from an
              MVC task manager in plain PHP to a turn-based game developed
              first with Livewire and then as a decoupled Laravel API with
              a React frontend.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">
              Previous Professional Background
            </h3>
            <p className="text-[#a9b1d6] text-sm md:text-base leading-relaxed">
              Before moving into development I worked in operational,
              organization-focused roles where incident management, problem
              solving and teamwork under pressure were part of the daily
              routine. That experience shaped how I adapt to new contexts,
              stay organized and keep learning continuously — qualities I
              now bring to every project I build.
            </p>
          </div>

        </div>

      </motion.div>

    </Section>
  );
}
