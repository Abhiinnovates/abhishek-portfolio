"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "abhishek@example.com",
    href: "mailto:abhishek@example.com",
    color: "#4F8EF7",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abhishekrathore",
    href: "https://linkedin.com/in/abhishekrathore",
    color: "#0A66C2",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/abhishekrathore",
    href: "https://github.com/abhishekrathore",
    color: "#8892A4",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email required";
    if (!form.message.trim() || form.message.length < 10)
      errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[300px] bg-gradient-to-b from-accent/6 to-transparent blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="// Contact"
          title="Get in Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-subtle leading-relaxed mb-8">
              Whether you're looking for an AI engineer to join your team,
              want to discuss a project, or just want to connect — my inbox is
              always open.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-white/15 transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${link.color}18`,
                      border: `1px solid ${link.color}30`,
                    }}
                  >
                    <link.icon size={18} style={{ color: link.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted mb-0.5">
                      {link.label}
                    </div>
                    <div className="text-body text-sm group-hover:text-heading transition-colors">
                      {link.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability note */}
            <div className="mt-8 p-4 rounded-xl border border-accent/20 bg-accent/5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-mono font-medium">
                  Available for opportunities
                </span>
              </div>
              <p className="text-subtle text-xs">
                Open to full-time roles, freelance projects, and AI consulting
                engagements.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 p-12 rounded-2xl border border-green-500/20 bg-green-500/5 text-center"
              >
                <CheckCircle size={48} className="text-green-400" />
                <h3 className="font-display font-bold text-heading text-xl">
                  Message Sent!
                </h3>
                <p className="text-subtle text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-accent hover:text-accent/80 transition-colors font-mono"
                >
                  Send another →
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-7 rounded-2xl border border-border bg-surface"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-muted mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-bg border text-body placeholder-muted text-sm focus:outline-none focus:border-accent/50 transition-colors ${
                        errors.name ? "border-red-500/50" : "border-border"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-bg border text-body placeholder-muted text-sm focus:outline-none focus:border-accent/50 transition-colors ${
                        errors.email ? "border-red-500/50" : "border-border"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about your project or opportunity..."
                    className={`w-full px-4 py-3 rounded-xl bg-bg border text-body placeholder-muted text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none ${
                      errors.message ? "border-red-500/50" : "border-border"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl font-medium text-white bg-gradient-to-r from-accent to-accent-2 hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-muted text-xs text-center font-mono">
                  I typically respond within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
