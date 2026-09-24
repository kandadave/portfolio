import { ExperienceItem } from "@/types/portfolio";

export const experienceData: ExperienceItem[] = [
  {
    id: "ai-engineer-consultant",
    role: "AI Automation Engineer & LLM Systems Architect",
    company: "Autonomous Engineering & Client Systems",
    location: "Nairobi, Kenya • Remote",
    period: "2023 — Present",
    type: "Contract / Project Engagements",
    description:
      "Architecting and deploying production-grade AI applications, autonomous agents, and enterprise RAG engines built to eliminate hallucinations and operate under strict API cost budgets.",
    achievements: [
      "Engineered multi-provider fallback orchestrator across Claude, OpenAI, and Groq with automated circuit breakers, achieving 99.9% uptime during third-party rate limits.",
      "Implemented a 4-pass hybrid dense/BM25 retrieval engine with confidence score calibration, cutting context token usage by 55% while elevating answer relevance.",
      "Designed real-time telemetry pipelines monitoring p50/p95 latency and token budgets with automated alerting.",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "RAG", "LLM APIs", "Docker", "Next.js"],
  },
  {
    id: "fullstack-developer",
    role: "Full-Stack Software Developer",
    company: "Web & Automation Solutions",
    location: "Nairobi, Kenya",
    period: "2022 — Present",
    type: "Freelance & Open Source",
    description:
      "Building high-performance full-stack web applications, custom browser extensions, and backend automation pipelines for businesses and digital platforms.",
    achievements: [
      "Built and deployed the Gym Management System web platform handling member records, tiered plans, and attendance tracking with responsive design.",
      "Developed Scrollport, a Manifest V3 Chrome Extension providing seamless DOM navigation and background interaction workflows.",
      "Authored clean, documented RESTful services in FastAPI and Node.js with strict type safety and automated testing.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "JavaScript", "PostgreSQL", "Tailwind CSS"],
  },
];
