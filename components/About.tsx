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
                alt="Isma"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Info personal */}
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Hey again 👋
              </h3>
              
              <p className="text-[#a9b1d6] text-sm leading-relaxed mb-3 md:mb-4">
                I&apos;m currently training as a full-stack developer, focused on PHP, Laravel, MySQL and React.
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
              Hi, I&apos;m Isma — a full-stack developer focused on PHP, Laravel, MySQL and React. I enjoy building clean, well-organized applications where the backend logic is solid and the interface stays simple and clear.
            </p>
            
            <p className="text-[#a9b1d6] text-sm md:text-base leading-relaxed">
              I&apos;m coming from operational roles centered on organization and incident management, so I&apos;m used to solving problems, working in a team and adapting quickly. Now I apply that mindset to development: understanding requirements, structuring the code and learning something new with every project.
            </p>
          </div>
        </motion.div>

      </div>

    </Section>
  );
}