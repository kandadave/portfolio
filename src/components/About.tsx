"use client";

import React from "react";
import { Shield, Zap, RefreshCw, BarChart3, CheckCircle2 } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Shield,
      title: "Zero-Hallucination Grounding",
      description:
        "Deterministic pre- and post-generation citation verification, ensuring answers are anchored to factual source documents before delivery.",
    },
    {
      icon: RefreshCw,
      title: "Resilient Multi-Provider Fallback",
      description:
        "Provider-agnostic routing equipped with automated circuit breakers and exponential backoff to survive upstream 429 and 503 outages.",
    },
    {
      icon: Zap,
      title: "Cost-Optimized Orchestration",
      description:
        "Multi-tier semantic query caching and cost-sorted model selection that slashes inference expenses by up to 70% without sacrificing precision.",
    },
    {
      icon: BarChart3,
      title: "Production Observability",
      description:
        "Comprehensive telemetry with p50/p95/p99 latency tracking, token consumption audits, and structured logging for complete transparency.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-semibold tracking-wider uppercase mb-3 border border-emerald-500/20">
            Architectural Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering resilient, grounded, and cost-controlled AI systems.
          </h2>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-7 sm:p-9 space-y-6">
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
              I am an <strong className="text-slate-950 font-bold">AI Automation Engineer and Full-Stack Developer</strong> specializing in 
              high-throughput Retrieval-Augmented Generation (RAG) pipelines and LLM-powered enterprise products.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              While many AI applications look impressive in demos, real production workloads frequently collapse under upstream provider outages, 
              uncontrolled API token bills, and subtle hallucinations. I engineer provider-agnostic, resilient architectures that survive upstream 
              rate-limits, remain strictly grounded against hallucinations, and operate with maximum token efficiency.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              With deep expertise in <strong className="text-slate-900 font-semibold">Python, JavaScript, FastAPI, React, Next.js, and PostgreSQL</strong>, 
              I design systems from first principles — pairing mathematically sound retrieval techniques with robust full-stack interfaces.
            </p>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Available for contract & freelance AI engineering
              </span>
              <span>•</span>
              <span>Nairobi, Kenya (UTC+3)</span>
              <span>•</span>
              <span>Worldwide Remote Ready</span>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-5 hover:border-emerald-500/40 transition-all duration-200 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-500/30 flex-shrink-0 flex items-center justify-center text-emerald-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
