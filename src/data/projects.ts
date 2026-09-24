import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "rag-agent-resilience-engine",
    title: "Enterprise Production RAG Agent & Resilience Engine",
    subtitle: "Provider-Agnostic 10-Stage RAG Pipeline with Circuit Breaker Architecture",
    category: "ai-rag",
    featured: true,
    badge: "Flagship Architecture",
    description:
      "Provider-agnostic RAG agent built on an end-to-end 10-stage pipeline — featuring intent classification, coreference resolution, 4-pass hybrid retrieval, deterministic calculation engine, and multi-signal confidence scoring.",
    liveUrl: "https://rag-agent-ashen.vercel.app/",
    githubUrl: "https://github.com/kandadave",
    tags: [
      "Python",
      "FastAPI",
      "LLM Orchestration",
      "Vector Retrieval",
      "PostgreSQL",
      "Circuit Breakers",
      "Audit Observability",
    ],
    highlights: [
      "Cost-first multi-provider fallback ladder with circuit breakers surviving upstream 429/503 outages seamlessly.",
      "Post-generation citation verifier and anti-hallucination grounding guard verifying factuality before emitting responses.",
      "Up to 70% inference cost reduction achieved via intelligent cost-sorted routing and semantic query caching.",
      "Full production observability tracking p50/p95/p99 latency, per-request token expenditure, and structured audit logs.",
      "Validated against 105 automated unit/integration tests (100% pass rate) and 25 complex end-to-end multi-turn scenarios.",
    ],
    metrics: [
      { label: "Pipeline Stages", value: "10 Stages" },
      { label: "Cost Reduction", value: "Up to 70%" },
      { label: "Automated Tests", value: "105 (100% Pass)" },
      { label: "Scenarios Validated", value: "25 E2E" },
    ],
  },
  {
    id: "gym-management-system",
    title: "Full-Stack Gym & Fitness Management Platform",
    subtitle: "Complete Member Lifecycle, Tier Subscriptions & Facility Operations",
    category: "full-stack",
    featured: true,
    badge: "Production Web App",
    description:
      "Comprehensive, end-to-end gym and fitness club management platform engineered to streamline member administration, subscription billing tiers, attendance check-ins, staff management, and real-time revenue analytics.",
    liveUrl: "https://gym-management-system2.netlify.app/",
    githubUrl: "https://github.com/kandadave/gym-management-system",
    tags: [
      "React",
      "JavaScript",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Responsive UI",
      "Netlify",
    ],
    highlights: [
      "Dynamic membership lifecycle workflows handling new signups, status renewals, expiration alerts, and tier upgrades.",
      "Administrative dashboard delivering real-time metrics on active memberships, daily check-ins, and financial reporting.",
      "Responsive, accessible front-end interface optimized for rapid check-in desk workflows and mobile member use.",
      "Robust state management and modular REST API integration ensuring reliable data synchronization across sessions.",
    ],
    metrics: [
      { label: "Deployment", value: "Netlify Live" },
      { label: "Architecture", value: "Full-Stack SPA" },
      { label: "Database", value: "Relational/REST" },
      { label: "Interface", value: "100% Responsive" },
    ],
  },
  {
    id: "scrollport-chrome-extension",
    title: "Scrollport — Chrome Navigation Extension",
    subtitle: "Lightweight In-Browser Content Interaction & Viewport Workflow Enhancer",
    category: "tools",
    featured: false,
    badge: "Chrome Extension",
    description:
      "Custom Chrome Extension built with modern browser extension APIs to enhance web navigation and content-interaction workflows. Engineered for ultra-lightweight footprint and real-time background execution without tab degradation.",
    liveUrl: "https://github.com/kandadave",
    githubUrl: "https://github.com/kandadave",
    tags: [
      "JavaScript",
      "Chrome Extensions API",
      "Manifest V3",
      "DOM Scripting",
      "Performance Optimization",
    ],
    highlights: [
      "Engineered on Manifest V3 architecture with event-driven background service workers.",
      "Zero-latency content-interaction hooks operating seamlessly across complex single-page apps.",
      "Minimalist memory footprint with strict permission scoping for user privacy and security.",
    ],
    metrics: [
      { label: "Manifest", value: "V3 Compliant" },
      { label: "Overhead", value: "< 2MB Memory" },
      { label: "Runtime", value: "Event-Driven" },
    ],
  },
  {
    id: "ai-automation-intelligent-systems",
    title: "AI Automation & Autonomous Systems Suite",
    subtitle: "High-Throughput Extraction, Document Processing & Webhook Pipelines",
    category: "ai-rag",
    featured: false,
    badge: "Automation Pipelines",
    description:
      "Suite of production-grade AI automation pipelines orchestrating Python, REST APIs, and modern LLMs to automate unstructured data processing, intelligent web-scraping, autonomous agents, and webhook synchronization.",
    liveUrl: "https://github.com/kandadave",
    githubUrl: "https://github.com/kandadave",
    tags: [
      "Python",
      "LLM APIs",
      "FastAPI",
      "Web Scraping",
      "Task Orchestration",
      "Webhooks",
    ],
    highlights: [
      "Resilient scraping and parsing pipelines extracting structured schema from high-frequency dynamic web targets.",
      "Autonomous agent loops utilizing LLM tool-calling and schema validation for automated document transformation.",
      "Bi-directional webhook synchronization connecting disparate business tools with retry and dead-letter queue handling.",
    ],
    metrics: [
      { label: "Throughput", value: "High-Volume" },
      { label: "Validation", value: "Schema-Enforced" },
      { label: "Integration", value: "REST & Webhooks" },
    ],
  },

  /*
  ==============================================================================
  HOW TO ADD NEW PROJECTS:
  ==============================================================================
  Simply copy the template block below and paste it here into the array:

  {
    id: "your-project-slug",
    title: "Project Display Title",
    subtitle: "One line subtitle or architecture summary",
    category: "ai-rag" | "full-stack" | "tools",
    featured: false, // Set to true to highlight with extra visual prominence
    badge: "Custom Badge", // e.g. "Mobile App", "SaaS Platform", "Open Source"
    description: "2-3 sentences explaining what problem this solves and how it works.",
    liveUrl: "https://your-demo-url.com", // optional
    githubUrl: "https://github.com/kandadave/your-repo", // optional
    tags: ["Tech1", "Tech2", "Tech3"],
    highlights: [
      "Key technical achievement or architectural win #1",
      "Key technical achievement or architectural win #2",
      "Key technical achievement or architectural win #3",
    ],
    metrics: [
      { label: "Metric 1", value: "Value 1" },
      { label: "Metric 2", value: "Value 2" },
    ],
  },
  ==============================================================================
  */
];
