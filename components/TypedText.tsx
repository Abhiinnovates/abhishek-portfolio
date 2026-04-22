"use client";

import { useState, useEffect } from "react";

const phrases = [
  "AI Engineer",
  "GenAI Developer",
  "Agentic AI Builder",
  "Automation Engineer",
  "LangChain Expert",
];

export default function TypedText() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const target = phrases[idx];

    if (paused) {
      const t = setTimeout(() => setPaused(false), 1400);
      return () => clearTimeout(t);
    }

    if (!deleting && displayed === target) {
      setPaused(true);
      setDeleting(true);
      return;
    }

    if (deleting && displayed === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % phrases.length);
      return;
    }

    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      setDisplayed(
        deleting ? target.slice(0, displayed.length - 1) : target.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(t);
  }, [displayed, deleting, paused, idx]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">
      {displayed}
      <span className="inline-block w-0.5 h-[0.9em] bg-accent ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
    </span>
  );
}
