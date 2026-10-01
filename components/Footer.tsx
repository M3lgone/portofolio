import Container from "./Container";
import { Github, Linkedin, ArrowUp } from "lucide-react";

const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about-section" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const social = [
  {
    label: "GitHub",
    href: "https://github.com/M3lgone",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ismael-gonzalez-nestal/",
    Icon: Linkedin,
  },
];

const linkClass =
  "transition-colors hover:text-[#7aa2f7]";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-8 md:py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a9b1d6]">
            Melab
          </p>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#a9b1d6]">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#a9b1d6]">
            {social.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 ${linkClass}`}
              >
                <Icon size={14} aria-hidden="true" />
                {label}
              </a>
            ))}
            <a
              href="#hero"
              className={`inline-flex items-center gap-1.5 ${linkClass}`}
            >
              <ArrowUp size={14} aria-hidden="true" />
              Back to top
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[#a9b1d6]/70 md:mt-8">
          © 2026 Mel Lab · Ismael González
        </p>
      </Container>
    </footer>
  );
}
