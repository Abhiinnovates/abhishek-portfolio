"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg flex items-center justify-center px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Big 404 */}
          <div className="font-display font-black text-[120px] leading-none text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent-2 mb-4 select-none">
            404
          </div>

          <h1 className="font-display font-bold text-2xl text-heading mb-3">
            Page not found
          </h1>
          <p className="text-subtle mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-accent to-accent-2 hover:opacity-90 transition-all text-sm"
            >
              ← Back to Home
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-xl font-medium text-body border border-border hover:border-accent/40 hover:text-heading transition-all text-sm"
            >
              Contact me
            </Link>
          </div>

          {/* Mono hint */}
          <p className="mt-10 font-mono text-xs text-muted">
            Error 404 · Page not found
          </p>
        </motion.div>
      </div>
    </main>
  );
}
