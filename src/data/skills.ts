import { SkillGroup } from "@/types/portfolio";

export const skillsData: SkillGroup[] = [
  {
    id: "rag-ai-systems",
    title: "RAG & AI Systems",
    iconName: "brain",
    description:
      "Production-grade generative AI architectures, resilient retrieval pipelines, and deterministic guardrails.",
    skills: [
      "RAG Architecture",
      "Multi-Stage Retrieval (Dense/Hybrid/BM25)",
      "LLM Orchestration & Fallback Routing",
      "Prompt Engineering",
      "Hallucination Grounding",
      "Citation Verification",
      "Confidence Scoring",
      "AI Agents",
      "Workflow Automation",
      "Semantic Caching",
    ],
  },
  {
    id: "languages-frameworks",
    title: "Languages & Frameworks",
    iconName: "code",
    description:
      "Modern full-stack language ecosystems, high-performance backends, and responsive reactive client applications.",
    skills: [
      "Python",
      "FastAPI",
      "TypeScript",
      "JavaScript (ES6+)",
      "React",
      "Next.js (App Router)",
      "Node.js",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "RESTful API Design",
    ],
  },
  {
    id: "infrastructure-tools",
    title: "Infrastructure & Tools",
    iconName: "server",
    description:
      "Cloud deployment workflows, relational database engineering, API tooling, and environment management.",
    skills: [
      "PostgreSQL",
      "Git & GitHub",
      "REST APIs & Webhooks",
      "Vercel Deployment",
      "Netlify",
      "Linux / Bash",
      "Postman & API Testing",
      "Environment Security & Secrets",
    ],
  },
  {
    id: "reliability-ops",
    title: "Reliability & Production Ops",
    iconName: "shield",
    description:
      "Fault-tolerant distributed patterns designed to survive upstream provider degradation, rate limits, and latency spikes.",
    skills: [
      "Circuit Breakers",
      "Exponential Backoff & Retries",
      "Multi-Tier Caching",
      "Connection Pooling",
      "Production Observability",
      "p50 / p95 / p99 Latency Tracking",
      "Structured Audit Logging",
      "Automated Integration Testing",
    ],
  },
];
