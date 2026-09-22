"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      if (window.scrollY < 200) {
        setActive("");
        return;
      }

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (section.id === "hero") return;
        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = linkRefs.current[active];

    if (el) {
      const parent = el.closest(".nav-links");
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const rect = el.getBoundingClientRect();
        setIndicatorStyle({
          width: rect.width,
          left: rect.left - parentRect.left,
        });
      }
    } else {
      setIndicatorStyle({
        width: 0,
        left: 0,
      });
    }
  }, [active]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#1a1b26]/80 border-b border-white/10">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="font-semibold text-[#7aa2f7]">IsmaDEV</div>

        <div className="nav-links relative hidden md:flex gap-6 text-sm text-[#a9b1d6]">
          <motion.a
            href="#experience"
            className="relative hover:text-[#7aa2f7] transition"
            ref={(el) => { linkRefs.current["experience"] = el; }}
          >
            Experience
          </motion.a>

          <motion.a
            href="#projects"
            className="relative hover:text-[#7aa2f7] transition"
            ref={(el) => { linkRefs.current["projects"] = el; }}
          >
            Projects
          </motion.a>

          <motion.a
            href="#about-section"
            className="relative hover:text-[#7aa2f7] transition"
            ref={(el) => { linkRefs.current["about-section"] = el; }}
          >
            About
          </motion.a>

          <motion.a
            href="#stack"
            className="relative hover:text-[#7aa2f7] transition"
            ref={(el) => { linkRefs.current["stack"] = el; }}
          >
            Stack
          </motion.a>

          <motion.a
            href="#contact"
            className="relative hover:text-[#7aa2f7] transition"
            ref={(el) => { linkRefs.current["contact"] = el; }}
          >
            Contact
          </motion.a>

          <motion.div
            className="absolute -bottom-1 h-[2px] bg-[#7aa2f7]"
            animate={{ width: indicatorStyle.width, left: indicatorStyle.left }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#7aa2f7] p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/10 bg-[#1a1b26]/95 backdrop-blur-md"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              <a href="#experience" onClick={handleLinkClick} className="text-base py-2 transition text-[#a9b1d6] hover:text-[#7aa2f7]">
                Experience
              </a>
              <a href="#projects" onClick={handleLinkClick} className="text-base py-2 transition text-[#a9b1d6] hover:text-[#7aa2f7]">
                Projects
              </a>
              <a href="#about-section" onClick={handleLinkClick} className="text-base py-2 transition text-[#a9b1d6] hover:text-[#7aa2f7]">
                About
              </a>
              <a href="#stack" onClick={handleLinkClick} className="text-base py-2 transition text-[#a9b1d6] hover:text-[#7aa2f7]">
                Stack
              </a>
              <a href="#contact" onClick={handleLinkClick} className="text-base py-2 transition text-[#a9b1d6] hover:text-[#7aa2f7]">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}