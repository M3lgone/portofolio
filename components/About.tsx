"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import Image from "next/image";
import { MapPin, Briefcase } from "lucide-react";

const highlights = [
  {
    label: "How I work",
    text: "Breaking problems down into smaller pieces — technically sound and easy to use.",
  },
  {
    label: "What I care about",
    text: "Clean architecture, meaningful interfaces, and the details that make an app feel coherent.",
  },
  {
    label: "Beyond code",
    text: "Staying active, outdoors, curious — discipline and consistency on and off the screen.",
  },
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const disableMotion = prefersReducedMotion ?? false;

  return (
    <Section id="about-section">
      <motion.div
        initial={disableMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#7aa2f7] md:text-sm">
          03 — About
        </p>
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#c0caf5] md:mb-12 md:text-3xl">
          A little bit about me
        </h2>

        <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-5">
          {/* Foto + contexto — columna izquierda, sin card */}
          <motion.figure
            initial={disableMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/profile-fixed.webp"
                alt="Ismael González — Full-Stack Developer"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-5">
              <p className="text-lg font-semibold tracking-tight text-[#c0caf5]">
                Hi, I&apos;m Ismael
              </p>
              <p className="mb-4 mt-1 text-sm leading-relaxed text-[#a9b1d6]">
                Full-Stack Developer based in Girona.
              </p>
              <ul className="flex flex-col gap-2 text-sm text-[#a9b1d6]">
                <li className="flex items-center gap-2.5">
                  <MapPin size={16} aria-hidden="true" className="shrink-0 text-[#7aa2f7]" />
                  <span>Girona, Spain</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Briefcase size={16} aria-hidden="true" className="shrink-0 text-[#7aa2f7]" />
                  <span>Full-Stack Developer</span>
                </li>
              </ul>
            </figcaption>
          </motion.figure>

          {/* Texto principal — columna derecha, max-w-prose */}
          <motion.div
            initial={disableMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="max-w-prose">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#7aa2f7]">
                How I think
              </h3>
              <p className="mb-4 text-[15px] leading-relaxed text-[#a9b1d6] md:text-base">
                I enjoy turning problems into structured, useful software. What
                I like most about development is figuring out how things should
                work, breaking problems down into smaller pieces, and building
                solutions that are both technically sound and easy to use.
              </p>
              <p className="mb-8 text-[15px] leading-relaxed text-[#a9b1d6] md:mb-10 md:text-base">
                I care about clean architecture, meaningful interfaces, and the
                small details that make an application feel coherent. I like
                understanding the problem behind a feature rather than simply
                making it work.
              </p>

              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#7aa2f7]">
                Outside of coding
              </h3>
              <p className="mb-8 text-[15px] leading-relaxed text-[#a9b1d6] md:mb-10 md:text-base">
                Outside of coding, I enjoy staying active, spending time
                outdoors, discovering new places, and spending time with friends
                and family. I value discipline and consistency, and I&apos;m
                naturally curious about the world around me. I enjoy exploring
                new ideas by trying things for myself, whether that&apos;s a new
                technology, a creative project, or something completely
                unrelated to programming.
              </p>

              <ul className="mb-8 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3 md:mb-10">
                {highlights.map((item) => (
                  <li key={item.label}>
                    <p className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#c0caf5]">
                      <span
                        aria-hidden="true"
                        className="h-px w-4 shrink-0 bg-[#bb9af7]/70"
                      />
                      {item.label}
                    </p>
                    <p className="text-sm leading-relaxed text-[#a9b1d6]">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="border-l-2 border-[#bb9af7]/60 pl-4 text-[15px] leading-relaxed text-[#a9b1d6] md:text-base">
                Mel Lab is my space to explore that mindset through different
                kinds of projects, from web applications and games to
                experiments with hardware, automation, and other technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
