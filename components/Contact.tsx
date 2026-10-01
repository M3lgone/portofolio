"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";

const EMAIL = "ismaelgn89@gmail.com";

const rowClass =
  "group flex min-h-[44px] items-center gap-3 rounded-lg border border-white/10 px-4 py-3 transition-colors hover:border-[#7aa2f7]/60 hover:bg-white/[0.03] md:px-5 md:py-4";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const disableMotion = prefersReducedMotion ?? false;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <Section id="contact">
      <motion.div
        initial={disableMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-xl"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#7aa2f7] md:text-sm">
          05 — Contact
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-[#c0caf5] md:text-3xl">
          Contact
        </h2>

        <p className="mb-6 mt-3 text-sm leading-relaxed text-[#a9b1d6] md:mb-10 md:text-base">
          Open to professional opportunities. Feel free to reach out about
          projects, roles or collaborations.
        </p>

        <div className="flex flex-col gap-3">
          {/* Email — acción directa + copiar como secundaria */}
          <div className={`${rowClass} pr-2 md:pr-3`}>
            <a
              href={`mailto:${EMAIL}`}
              aria-label={`Send email to ${EMAIL}`}
              className="flex min-w-0 flex-1 items-center gap-3"
            >
              <Mail
                size={18}
                aria-hidden="true"
                className="shrink-0 text-[#7aa2f7] transition-colors group-hover:text-[#9db8ff] md:h-5 md:w-5"
              />
              <span className="truncate text-sm text-[#c0caf5] md:text-base">
                {EMAIL}
              </span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-md border border-white/10 text-[#a9b1d6] transition-colors hover:border-[#7aa2f7]/60 hover:text-[#c0caf5]"
            >
              {copied ? (
                <Check size={16} aria-hidden="true" className="text-[#7aa2f7]" />
              ) : (
                <Copy size={16} aria-hidden="true" />
              )}
            </button>
            <span aria-live="polite" className="sr-only">
              {copied ? "Email address copied" : ""}
            </span>
          </div>

          <a
            href="https://github.com/M3lgone"
            target="_blank"
            rel="noopener noreferrer"
            className={rowClass}
          >
            <Github
              size={18}
              aria-hidden="true"
              className="shrink-0 text-[#7aa2f7] transition-colors group-hover:text-[#9db8ff] md:h-5 md:w-5"
            />
            <span className="text-sm text-[#c0caf5] md:text-base">
              M3lgone
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/ismael-gonzalez-nestal/"
            target="_blank"
            rel="noopener noreferrer"
            className={rowClass}
          >
            <Linkedin
              size={18}
              aria-hidden="true"
              className="shrink-0 text-[#7aa2f7] transition-colors group-hover:text-[#9db8ff] md:h-5 md:w-5"
            />
            <span className="text-sm text-[#c0caf5] md:text-base">
              Ismael González Nestal
            </span>
          </a>
        </div>

        {/* Sin CV publicado: nota editorial discreta, fuera de las acciones */}
        <p className="mt-6 text-xs tracking-wide text-[#a9b1d6]/60">
          CV (PDF) — coming soon.
        </p>
      </motion.div>
    </Section>
  );
}
