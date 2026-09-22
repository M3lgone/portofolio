"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Mail, Github, Linkedin, Globe } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('ismaelgn89@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 md:mb-12">
          Come and say hi!
        </h2>

        <p className="text-[#a9b1d6] text-sm md:text-base leading-relaxed max-w-xl mb-6 md:mb-10">
          Full-stack developer open to a first opportunity. Feel free to reach out about projects, roles or collaborations.
        </p>

        {/* Links limpios estilo Ryan Evans */}
        <div className="flex flex-col gap-3 max-w-xl">
          
          {/* Email - Click para copiar */}
          <motion.button
            onClick={copyEmail}
            className="group flex items-center gap-3 px-4 md:px-5 py-3 md:py-4 rounded-lg border border-white/10 hover:border-[#527dc1] transition-all hover:bg-[#527dc1]/5 w-full text-left"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Mail size={18} className="md:w-5 md:h-5 text-[#527dc1] flex-shrink-0" />
            <span className="text-[#c0caf5] group-hover:text-[#527dc1] transition text-sm md:text-base truncate">
              {copied ? 'Email copied!' : 'ismaelgn89@gmail.com'}
            </span>
          </motion.button>

          <motion.a
            href="https://github.com/M3lgone"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-4 md:px-5 py-3 md:py-4 rounded-lg border border-white/10 hover:border-[#527dc1] transition-all hover:bg-[#527dc1]/5"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Github size={18} className="md:w-5 md:h-5 text-[#527dc1] flex-shrink-0" />
            <span className="text-[#c0caf5] group-hover:text-[#527dc1] transition text-sm md:text-base">
              M3lgone
            </span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ismael-gonzalez-nestal/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-4 md:px-5 py-3 md:py-4 rounded-lg border border-white/10 hover:border-[#527dc1] transition-all hover:bg-[#527dc1]/5"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Linkedin size={18} className="md:w-5 md:h-5 text-[#527dc1] flex-shrink-0" />
            <span className="text-[#c0caf5] group-hover:text-[#527dc1] transition text-sm md:text-base">
              Ismael Gonzalez Nestal
            </span>
          </motion.a>

          <motion.a
            href="https://isma.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-4 md:px-5 py-3 md:py-4 rounded-lg border border-white/10 hover:border-[#527dc1] transition-all hover:bg-[#527dc1]/5"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Globe size={18} className="md:w-5 md:h-5 text-[#527dc1] flex-shrink-0" />
            <span className="text-[#c0caf5] group-hover:text-[#527dc1] transition text-sm md:text-base">
              isma.dev
            </span>
          </motion.a>

        </div>

      </motion.div>

    </Section>
  );
}