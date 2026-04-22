"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, CreditCard, Database } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    id: "01",
    icon: Bot,
    title: "AI Agent Systems",
    description:
      "Built multiple production-grade AI agents using CrewAI and LangChain with task-based collaboration and intelligent workflow orchestration.",
    tags: ["CrewAI", "LangChain", "Python", "Multi-Agent"],
    highlights: [
      "Multi-agent task collaboration",
      "Workflow orchestration engine",
      "Dynamic role assignment",
    ],
    gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
    accentColor: "#4F8EF7",
    status: "Completed",
  },
  {
    id: "02",
    icon: CreditCard,
    title: "AI Escrow Platform",
    description:
      "Designed an AI-powered transaction system with SaaS architecture, intelligent agents for verification, and automated dispute resolution.",
    tags: ["Agentic AI", "SaaS", "Python", "LLM"],
    highlights: [
      "Intelligent transaction verification",
      "SaaS business model",
      "Automated dispute resolution",
    ],
    gradient: "from-purple-600/20 via-violet-600/10 to-transparent",
    accentColor: "#7B5EA7",
    status: "Concept",
  },
  {
    id: "03",
    icon: Database,
    title: "Scalable Multi-Query AI",
    description:
      "Built a high-performance architecture supporting contextual memory, optimized retrieval, and multi-query processing with RAG pipelines.",
    tags: ["RAG", "Pinecone", "LangGraph", "Vector DB"],
    highlights: [
      "Contextual memory architecture",
      "Optimized RAG pipeline",
      "Scalable multi-query processing",
    ],
    gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
    accentColor: "#4FF7A0",
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="// Projects"
          title="What I've Built"
          subtitle="A selection of AI projects that push the boundaries of what's possible."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-border bg-surface overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${project.accentColor}18`,
                      border: `1px solid ${project.accentColor}30`,
                    }}
                  >
                    <project.icon
                      size={20}
                      style={{ color: project.accentColor }}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        color: project.accentColor,
                        borderColor: `${project.accentColor}30`,
                        backgroundColor: `${project.accentColor}10`,
                      }}
                    >
                      {project.status}
                    </span>
                    <span className="font-mono text-muted/40 text-xs">
                      {project.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-heading text-lg mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-subtle text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-xs text-subtle"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: project.accentColor }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-1 rounded-md border border-white/6 bg-white/3 text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <span className="text-xs text-muted font-mono">
                    View details
                  </span>
                  <motion.div
                    whileHover={{ x: 2, y: -2 }}
                    className="w-7 h-7 rounded-lg border border-border flex items-center justify-center group-hover:border-white/20 transition-colors"
                  >
                    <ArrowUpRight size={13} className="text-muted group-hover:text-body transition-colors" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More coming */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-muted text-sm font-mono">
            More projects in progress —{" "}
            <span className="text-accent">always building</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
