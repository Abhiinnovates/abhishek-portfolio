"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    company: "Patanjali Foods Limited",
    role: "Head Intern",
    duration: "June 2024 – August 2024",
    type: "Internship",
    responsibilities: [
      "Led a team of interns across multiple projects, improving overall workflow efficiency and output quality",
      "Coordinated tasks between team members and stakeholders, improving execution speed and reducing bottlenecks",
      "Developed strong leadership, communication, and problem-solving skills in a fast-paced corporate environment",
    ],
    skills: ["Leadership", "Team Management", "Problem Solving", "Communication"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-2/4 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="// Experience"
          title="Work History"
          subtitle="The roles that shaped my professional thinking and leadership."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center hidden md:flex">
                  <Briefcase size={18} className="text-accent" />
                </div>

                <div className="group rounded-2xl border border-border bg-surface p-7 hover:border-accent/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-accent/60 border border-accent/15 bg-accent/6 px-2 py-0.5 rounded">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-heading text-xl">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-muted text-sm flex-shrink-0">
                      <Calendar size={14} />
                      <span className="font-mono text-xs">{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((resp, ri) => (
                      <motion.li
                        key={ri}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + ri * 0.07 }}
                        className="flex items-start gap-3 text-subtle text-sm leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2 flex-shrink-0" />
                        {resp}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg border border-border bg-white/3 text-subtle"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Future / seeking */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative md:pl-16"
            >
              <div className="absolute left-0 top-6 w-12 h-12 rounded-full border border-dashed border-accent/30 flex items-center justify-center hidden md:flex">
                <span className="text-accent text-xl leading-none">?</span>
              </div>

              <div className="rounded-2xl border border-dashed border-accent/20 bg-gradient-to-br from-accent/4 to-transparent p-7">
                <h3 className="font-display font-bold text-heading text-lg mb-2">
                  Your Company
                </h3>
                <p className="text-subtle text-sm">
                  I'm actively looking for opportunities in AI engineering,
                  GenAI product development, or any role where I can build
                  intelligent systems that create real impact.
                </p>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-4 inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  Let's talk →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
