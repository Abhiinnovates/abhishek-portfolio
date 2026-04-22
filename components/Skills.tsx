"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    category: "AI / GenAI",
    color: "from-blue-500/20 to-indigo-500/20",
    accent: "#4F8EF7",
    skills: [
      "OpenAI",
      "Claude",
      "Gemini",
      "LangChain",
      "CrewAI",
      "LangGraph",
      "RAG Systems",
      "Prompt Engineering",
      "Conversational AI",
    ],
  },
  {
    category: "Cloud & Platforms",
    color: "from-orange-500/20 to-amber-500/20",
    accent: "#F7944F",
    skills: ["AWS Bedrock", "AWS Lambda", "AWS S3", "Azure AI", "Google Cloud"],
  },
  {
    category: "Data & Systems",
    color: "from-green-500/20 to-emerald-500/20",
    accent: "#4FF7A0",
    skills: ["Pinecone", "FAISS", "SQL", "NoSQL", "Data Pipelines"],
  },
  {
    category: "Dev Tools",
    color: "from-purple-500/20 to-violet-500/20",
    accent: "#A04FF7",
    skills: ["Docker", "CI/CD", "Git & GitHub"],
  },
  {
    category: "Languages",
    color: "from-pink-500/20 to-rose-500/20",
    accent: "#F74F8E",
    skills: [
      "Python (Advanced)",
      "JavaScript",
      "TypeScript",
      "APIs",
      "Backend Development",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="// Tech Stack"
          title="Skills & Expertise"
          subtitle="A collection of technologies I use to build intelligent systems."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border bg-surface p-6 hover:border-white/10 transition-all duration-300 overflow-hidden"
            >
              {/* Background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: group.accent }}
                  />
                  <h3 className="font-display font-semibold text-heading text-sm">
                    {group.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: gi * 0.05 + si * 0.04 }}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg border border-white/6 bg-white/3 text-subtle hover:text-body hover:border-white/15 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Proficiency note card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/8 to-accent-2/8 p-6 flex flex-col justify-center"
          >
            <div className="font-display text-4xl font-bold text-heading mb-2">
              2+
            </div>
            <div className="text-subtle text-sm mb-4">
              Years building AI systems
            </div>
            <div className="font-display text-4xl font-bold text-heading mb-2">
              10+
            </div>
            <div className="text-subtle text-sm mb-4">
              AI frameworks & tools
            </div>
            <div className="font-mono text-xs text-accent/60 border-t border-accent/15 pt-4">
              Constantly learning, always shipping
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
