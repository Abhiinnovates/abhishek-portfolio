"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-border/60 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white font-display font-bold text-xs">
                AR
              </span>
              <span className="font-display font-semibold text-heading text-sm">
                Abhishek Rathore
              </span>
            </div>
            <p className="text-muted text-xs font-mono">
              AI Engineer · GenAI · Agentic AI
            </p>
          </motion.div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(link.href.replace("#", ""))
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs text-muted hover:text-body transition-colors animated-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials + scroll up */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/Abhiinnovates", label: "GitHub" },
              { icon: Linkedin, href: "www.linkedin.com/in/Abhishek~rathore", label: "LinkedIn" },
              { icon: Mail, href: "mailto:abhishekinnovates@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, color: "#4F8EF7" }}
                aria-label={label}
                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all"
              >
                <Icon size={14} />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all ml-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-muted text-xs font-mono">
          <span>© {new Date().getFullYear()} Abhishek Rathore. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with{" "}
            <span className="text-accent">Next.js</span> +{" "}
            <span className="text-accent">Framer Motion</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
