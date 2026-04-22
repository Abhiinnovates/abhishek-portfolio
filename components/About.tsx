"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Users, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const traits = [
  {
    icon: Brain,
    title: "AI-First Thinking",
    desc: "I approach every problem by asking how AI can fundamentally transform the solution.",
  },
  {
    icon: Rocket,
    title: "End-to-End Builder",
    desc: "From problem framing and architecture to deployment and monitoring — I own the full lifecycle.",
  },
  {
    icon: Zap,
    title: "Automation Obsessed",
    desc: "Passionate about eliminating repetitive work and creating intelligent, self-operating systems.",
  },
  {
    icon: Users,
    title: "Collaborative Leader",
    desc: "Experienced in leading teams and translating complex AI concepts into business impact.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-2/4 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <SectionHeader
              tag="// About me"
              title={`Who I am`}
              subtitle="An AI engineer who loves turning complex AI research into practical, impactful products."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 text-subtle leading-relaxed"
            >
              <p>
                I'm{" "}
                <span className="text-heading font-medium">
                  Abhishek Rathore
                </span>
                , an AI Software Engineer specializing in{" "}
                <span className="text-accent font-medium">Generative AI</span>{" "}
                and{" "}
                <span className="text-accent font-medium">Agentic AI</span>{" "}
                systems. I build intelligent solutions that actually work at
                scale.
              </p>
              <p>
                My expertise spans the full AI development cycle — designing
                RAG architectures, orchestrating multi-agent workflows with
                LangChain and CrewAI, and deploying production-grade AI
                solutions on cloud platforms.
              </p>
              <p>
                I'm passionate about{" "}
                <span className="text-body">
                  transforming business workflows
                </span>{" "}
                using AI — not just as a tool, but as a fundamental rethinking
                of how work gets done.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {[
                "Python",
                "LangChain",
                "CrewAI",
                "OpenAI API",
                "AWS",
                "RAG",
                "Agentic AI",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg border border-border bg-surface text-subtle hover:border-accent/30 hover:text-accent transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Trait cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                whileHover={{ y: -3, borderColor: "rgba(79,142,247,0.35)" }}
                className="p-5 rounded-xl border border-border bg-surface group transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent/15 to-accent-2/15 flex items-center justify-center mb-3 group-hover:from-accent/25 group-hover:to-accent-2/25 transition-all">
                  <trait.icon size={18} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-heading text-sm mb-2">
                  {trait.title}
                </h3>
                <p className="text-subtle text-xs leading-relaxed">{trait.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
