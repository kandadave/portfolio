"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import {
  ArrowUpRight,
  Terminal,
  Activity,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Engineering Works" },
    { id: "ai-rag", label: "AI & RAG Systems" },
    { id: "full-stack", label: "Full-Stack Web Apps" },
    { id: "tools", label: "Extensions & Tools" },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-semibold tracking-wider uppercase mb-3 border border-emerald-500/20">
              Featured Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Production Systems & Live Deployments
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Directly interactive projects highlighting high-availability RAG architectures, full-stack management platforms, and developer tooling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === cat.id
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Stream */}
        <div className="space-y-10">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`glass-card rounded-2xl p-6 sm:p-9 transition-all duration-300 relative overflow-hidden ${
                  isFeatured
                    ? "border-emerald-500/40 ring-1 ring-emerald-500/30 shadow-md"
                    : "border-slate-200"
                }`}
              >
                {/* Subtle top indicator if featured */}
                {isFeatured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Project Identity & Narrative */}
                  <div className="lg:col-span-7 space-y-4">
                    {/* Badge & Title */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        {project.badge && (
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-500/30">
                            {project.badge}
                          </span>
                        )}
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                          {project.category.replace("-", " ")}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-emerald-700">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technical Highlights Bullet List */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                        Key Architectural Highlights:
                      </div>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Tags */}
                    <div className="pt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Key Metrics & Action Links */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-slate-200">
                    
                    {/* Metric Chips Grid */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-3">
                        {project.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs"
                          >
                            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-tight font-semibold">
                              {metric.label}
                            </div>
                            <div className="text-base font-bold text-slate-900 mt-1">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all"
                        >
                          <span>Launch Live Demo</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-semibold text-xs sm:text-sm transition-all shadow-2xs"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>View Source / Repository</span>
                        </a>
                      )}
                    </div>

                    {/* Operational badge */}
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-500/20 flex items-center gap-2 text-xs text-emerald-800">
                      <Activity className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-[11px] font-medium">Engineered for high availability & low latency</span>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Data Architecture Note */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs text-slate-600 shadow-2xs">
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <Terminal className="w-4 h-4 text-emerald-600" />
            <span>Typed Data Store: <code className="text-emerald-700 font-semibold">/src/data/projects.ts</code></span>
          </div>
          <span className="text-[11px] hidden sm:inline text-slate-500">Add new projects anytime without modifying presentation code</span>
        </div>

      </div>
    </section>
  );
}
