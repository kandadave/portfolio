"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  Mail,
  MapPin,
  ShieldCheck,
  Cpu,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid-bg">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] hero-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Technical Identity & Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 w-fit text-xs font-mono text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Active Engineering
              </span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                Nairobi, Kenya • Open to Remote & Freelance
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                David Kanda{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
                  Chumo
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-emerald-600 dark:text-emerald-400 tracking-tight">
                AI Automation Engineer | RAG & LLM Systems Architect | Full-Stack Developer
              </p>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              &ldquo;I build production-grade AI agents and full-stack systems that{" "}
              <span className="text-slate-900 dark:text-white font-semibold">stay online</span>,{" "}
              <span className="text-slate-900 dark:text-white font-semibold">stay grounded</span>, and{" "}
              <span className="text-slate-900 dark:text-white font-semibold">stay within budget</span>.&rdquo;
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {/* Primary CTA */}
              <a
                href="https://rag-agent-ashen.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40 transition-all duration-200"
              >
                <Cpu className="w-4 h-4 text-emerald-200 group-hover:rotate-12 transition-transform" />
                <span>View Live RAG Agent Demo</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Secondary CTA: Resume */}
              <a
                href="/resume.pdf"
                download="David_Kanda_Chumo_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 font-medium text-sm transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Download Résumé</span>
              </a>

              {/* Secondary CTA: Contact */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 border border-transparent hover:border-slate-300 dark:hover:border-white/10 font-medium text-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Architectural Highlights / Verification Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-white/60 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/5">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Pipeline</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">10 Stages</div>
              </div>
              <div className="p-3 rounded-lg bg-white/60 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/5">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Inference Cost</div>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">Down 70%</div>
              </div>
              <div className="p-3 rounded-lg bg-white/60 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/5">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Automated Tests</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">105 (100% Pass)</div>
              </div>
              <div className="p-3 rounded-lg bg-white/60 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/5">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Hallucination</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Zero-Grounded</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Headshot Photo Card & Architecture Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Outer Decorative Gradient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl p-3 bg-white/80 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-md">
                
                {/* Image Container with Soft-Rounded Framing */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/headshot.jpg"
                    alt="David Kanda Chumo - AI Automation Engineer"
                    fill
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Gradient Overlay at Base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Identity Badge on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-white text-[11px] font-medium tracking-tight">
                        RAG Systems Architect
                      </span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[10px] uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Micro Technical Chip Below Photo */}
                <div className="mt-3 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-mono text-[11px]">Stack: Python • FastAPI • Next.js</span>
                  <span className="flex items-center gap-1 text-emerald-500 font-mono text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 99.9% Uptime
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
