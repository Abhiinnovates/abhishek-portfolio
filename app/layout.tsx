import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Rathore — AI Engineer",
  description:
    "AI Software Engineer specializing in Generative AI and Agentic AI systems. Building intelligent solutions from problem framing to scalable deployment.",
  keywords: [
    "AI Engineer",
    "GenAI",
    "Agentic AI",
    "LangChain",
    "CrewAI",
    "OpenAI",
    "RAG",
  ],
  authors: [{ name: "Abhishek Rathore" }],
  openGraph: {
    title: "Abhishek Rathore — AI Engineer",
    description: "Building intelligent solutions with Generative AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
