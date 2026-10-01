import Container from "./Container";
import { ArrowUp } from "lucide-react";

const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about-section" },
  { label: "Stack", href: "#stack" },
];

const linkClass = "transition-colors hover:text-[#7aa2f7]";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-8 md:py-10">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.25em] text-[#a9b1d6]">
            Melab
          </p>

          <nav aria-label="Footer" className="md:flex-1">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#a9b1d6] md:justify-center">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#hero"
            className={`inline-flex shrink-0 items-center gap-1.5 text-sm text-[#a9b1d6] ${linkClass}`}
          >
            <ArrowUp size={14} aria-hidden="true" />
            Back to top
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-[#a9b1d6]/70 md:mt-8">
          © 2026 Mel Lab · Ismael González
        </p>
      </Container>
    </footer>
  );
}
