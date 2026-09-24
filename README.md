# David Kanda Chumo — Personal Engineering Portfolio

A production-grade, fast, accessible, and visually distinctive personal portfolio website engineered for **David Kanda Chumo** (AI Automation Engineer | RAG & LLM Systems Architect | Full-Stack Developer).

Built strictly around software development and AI engineering with zero clichés, featuring a technical dark-mode-first aesthetic, blueprint grid textures, emerald accents, and high-performance App Router architecture.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Custom SVG Brand Vectors + [Lucide React](https://lucide.dev/)
- **Theme**: Persistent Dark / Light Mode with `localStorage` synchronization
- **Deployment**: Zero-config deployment on [Vercel](https://vercel.com/)

---

## 🚀 Key Features & Sections

1. **Hero**:
   - Technical identity, location badge (Nairobi, Kenya • Open to Remote & Freelance).
   - High-impact tagline: *"I build production-grade AI agents and full-stack systems that stay online, stay grounded, and stay within budget."*
   - Framed headshot (`/public/headshot.jpg`) with subtle hover ring and status badge.
   - Primary CTA linking directly to the live [Enterprise RAG Agent Demo](https://rag-agent-ashen.vercel.app/).
   - Secondary CTAs for résumé download (`/public/resume.pdf`) and contact anchor.
2. **About**:
   - Focus on RAG pipeline resiliency, anti-hallucination grounding, and cost-controlled LLM routing.
   - Architectural pillars detailing fallback ladders, citation verifiers, and production observability.
3. **Skills**:
   - Grouped into 4 technical categories with custom iconography:
     - **RAG & AI Systems**: Dense/Hybrid/BM25 retrieval, circuit breakers, confidence scoring.
     - **Languages & Frameworks**: Python, FastAPI, TypeScript, React, Next.js, Node.js.
     - **Infrastructure & Tools**: PostgreSQL, Git/GitHub, REST APIs, Vercel, Linux.
     - **Reliability & Ops**: Exponential backoff, caching, connection pooling, p50/p95/p99 telemetry.
4. **Featured Projects (Centerpiece)**:
   - **Enterprise Production RAG Agent & Resilience Engine**: 10-stage pipeline, fallback ladder surviving 429/503 outages, up to 70% inference cost reduction, 105 automated tests (100% pass), and live demo link.
   - **Full-Stack Gym Management System**: Complete member lifecycle platform, subscription billing tiers, attendance check-ins, and analytics ([Live Site](https://gym-management-system2.netlify.app/) | [GitHub](https://github.com/kandadave/gym-management-system)).
   - **Scrollport (Chrome Extension)**: Manifest V3 browser extension for DOM navigation and lightweight background execution.
   - **AI Automation & Intelligent Systems**: High-throughput extraction, schema-enforced document parsing, and webhook integration.
5. **Engineering Experience**:
   - Milestones in RAG architecture, resilient backend engineering, and full-stack delivery.
6. **Contact & Footer**:
   - Direct email card with one-click copy button (`davidkandachumo@gmail.com`).
   - Interactive message form triggering default mail client with formatted subject and body.
   - Verified profile links to GitHub ([@kandadave](https://github.com/kandadave)) and LinkedIn ([david-kanda](https://www.linkedin.com/in/david-kanda-373742364)).

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── headshot.jpg      # Your profile headshot (drop your photo here)
│   ├── resume.pdf        # Your downloadable PDF résumé
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css   # Dark/light tokens, grid blueprint, and styles
│   │   ├── layout.tsx    # Root layout with SEO and OpenGraph metadata
│   │   └── page.tsx      # Main single-page portfolio layout
│   ├── components/
│   │   ├── Navbar.tsx    # Responsive header with theme toggle
│   │   ├── Hero.tsx      # Hero section & CTA buttons
│   │   ├── About.tsx     # Architectural narrative & principles
│   │   ├── Skills.tsx    # Grouped skills matrix
│   │   ├── Projects.tsx  # Featured projects showcase
│   │   ├── Experience.tsx# Engineering trajectory
│   │   ├── Contact.tsx   # Contact form & social links
│   │   ├── Footer.tsx    # Footer with back-to-top button
│   │   └── Icons.tsx     # Brand SVG vectors
│   ├── context/
│   │   └── ThemeContext.tsx # Persistent theme provider
│   ├── data/
│   │   ├── projects.ts   # Typed projects data store (easily append new ones!)
│   │   ├── skills.ts     # Grouped skills list
│   │   └── experience.ts # Engineering achievements
│   └── types/
│       └── portfolio.ts  # TypeScript interfaces
```

---

## ⚡ How to Add New Projects

All projects are stored in `/src/data/projects.ts`. You do not need to modify any React component to add, remove, or edit a project:

1. Open `src/data/projects.ts`.
2. Append a new object to the `projectsData` array:

```typescript
{
  id: "your-project-slug",
  title: "Your Project Title",
  subtitle: "Brief architecture or system subtitle",
  category: "ai-rag", // "ai-rag" | "full-stack" | "tools"
  featured: false,
  badge: "Custom Badge",
  description: "Detailed explanation of what problem the project solves...",
  liveUrl: "https://your-demo-link.com",
  githubUrl: "https://github.com/kandadave/your-repo",
  tags: ["Python", "FastAPI", "PostgreSQL"],
  highlights: [
    "Architectural milestone or metric #1",
    "Architectural milestone or metric #2",
  ],
  metrics: [
    { label: "Metric Label", value: "Value" },
  ],
}
```

The UI will automatically render the new project with responsive formatting, badges, tags, and category filters.

---

## 💻 Local Development

1. Ensure Node.js 18+ is installed.
2. Clone or open the repository:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to Vercel

This repository is pre-configured for zero-config Vercel deployment:

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete production portfolio"
   git push -u origin master
   ```
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import `kandadave/portfolio`.
4. Leave all build settings as default (Framework Preset: **Next.js**).
5. Click **Deploy**. Your site will be live on a `*.vercel.app` domain in ~1 minute.
