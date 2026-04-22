"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import TypedText from "./TypedText";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Abhiinnovates",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "www.linkedin.com/in/Abhishek~rathore",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:abhishekinnovates@gmail.com",
    label: "Email",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-2/4 blur-[100px] pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#4F8EF7 1px, transparent 1px), linear-gradient(90deg, #4F8EF7 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Availability badge */}
          <motion.div {...fadeUp(0.1)} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-accent border border-accent/20 bg-accent/6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-heading leading-[1.08] tracking-tight mb-6"
          >
            <TypedText />
            <br />
            <span className="text-subtle font-normal text-3xl sm:text-4xl md:text-5xl">
              building the future
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div {...fadeUp(0.35)} className="mb-4">
            <div className="flex items-center gap-2 flex-wrap">
              {["AI Engineer", "GenAI", "Agentic AI", "Automation"].map(
                (tag, i) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-accent/70 border border-accent/15 bg-accent/5 px-2 py-1 rounded"
                  >
                    {i > 0 && (
                      <span className="text-muted mr-2 text-[10px]">·</span>
                    )}
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.45)}
            className="text-subtle text-lg leading-relaxed mb-10 max-w-xl"
          >
            AI Software Engineer specializing in{" "}
            <span className="text-body font-medium">Generative AI</span> and{" "}
            <span className="text-body font-medium">Agentic AI systems</span>.
            Building end-to-end intelligent solutions — from problem framing to
            scalable deployment.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.55)}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-accent to-accent-2 hover:opacity-90 transition-all shadow-lg shadow-accent/20"
            >
              <Sparkles size={16} />
              View my work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-body border border-border hover:border-accent/40 hover:text-heading transition-all"
            >
              Let's connect
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div {...fadeUp(0.65)} className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, color: "#4F8EF7" }}
                className="flex items-center gap-2 text-muted hover:text-accent transition-all text-sm"
                aria-label={label}
              >
                <Icon size={18} />
                <span className="hidden sm:block font-mono text-xs">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
          <span className="text-[10px] font-mono tracking-widest uppercase">
            Scroll
          </span>
        </motion.div>
      </div>

      {/* Floating stats */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4"
      >
        {[
          { value: "3+", label: "AI Projects" },
          { value: "5+", label: "Technologies" },
          { value: "∞", label: "Curiosity" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-xl p-4 text-center min-w-[90px] border border-border/60"
          >
            <div className="font-display font-bold text-2xl text-heading mb-1">
              {stat.value}
            </div>
            <div className="text-[10px] font-mono text-muted uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
