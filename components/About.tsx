"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Image from "next/image";
import { MapPin, Briefcase } from "lucide-react";

export default function About() {
  return (
    <Section id="about-section">

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">

        {/* TARJETA CON FOTO - Columna izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="relative overflow-hidden group rounded-xl bg-[#24283b] border border-white/10 hover:border-[#527dc1] transition shadow-sm hover:shadow-xl hover:shadow-[#527dc1]/10 p-4 md:p-6">
            
            {/* Efecto glow al hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-[#527dc1]/10 to-[#bb9af7]/10 blur-xl"></div>
            </div>

            {/* Foto de perfil */}
            <div className="relative w-full aspect-square mb-4 md:mb-6 rounded-2xl overflow-hidden">
              <Image
                src="/images/profile.jpeg"
                alt="Ismael González — Full-Stack Developer"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Info personal */}
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Hi, I&apos;m Ismael
              </h3>
              
              <p className="text-[#a9b1d6] text-sm leading-relaxed mb-3 md:mb-4">
                Full-Stack Developer based in Girona.
              </p>

              {/* Location & Status */}
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-[#a9b1d6]">
                  <MapPin size={16} className="text-[#527dc1]" />
                  <span>Girona, Spain</span>
                </div>
                <div className="flex items-center gap-2 text-[#a9b1d6]">
                  <Briefcase size={16} className="text-[#527dc1]" />
                  <span>Full-Stack Developer</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* CONTENIDO ABOUT - Columna derecha */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="max-w-none">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 md:mb-6">
              A little bit about me
            </h2>

            <p className="text-[#a9b1d6] text-sm md:text-base leading-relaxed mb-3 md:mb-4">
              I enjoy turning problems into structured, useful software. What I like most about development is figuring out how things should work, breaking problems down into smaller pieces, and building solutions that are both technically sound and easy to use.
            </p>

            <p className="text-[#a9b1d6] text-sm md:text-base leading-relaxed mb-3 md:mb-4">
              I care about clean architecture, meaningful interfaces, and the small details that make an application feel coherent. I like understanding the problem behind a feature rather than simply making it work.
            </p>

            <p className="text-[#a9b1d6] text-sm md:text-base leading-relaxed mb-3 md:mb-4">
              Outside of coding, I enjoy staying active, spending time outdoors, discovering new places, and spending time with friends and family. I value discipline and consistency, and I&apos;m naturally curious about the world around me. I enjoy exploring new ideas by trying things for myself, whether that&apos;s a new technology, a creative project, or something completely unrelated to programming.
            </p>

            <p className="text-[#a9b1d6] text-sm md:text-base leading-relaxed">
              Mel Lab is my space to explore that mindset through different kinds of projects, from web applications and games to experiments with hardware, automation, and other technologies.
            </p>
          </div>
        </motion.div>

      </div>

    </Section>
  );
}