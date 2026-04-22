"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #4F8EF7, #7B5EA7)",
        height: "2px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        transition: "width 0.1s linear",
      }}
    />
  );
}
