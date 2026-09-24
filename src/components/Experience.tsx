"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            04 // Engineering Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Systems Architecture & Development History
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Focused strictly on AI engineering, autonomous systems implementation, and full-stack software delivery.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-5 before:w-0.5 before:bg-slate-200 dark:before:bg-white/10">
          {experienceData.map((item) => (
            <div key={item.id} className="relative pl-10 sm:pl-14">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute left-1.5 sm:left-3 top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-[#06090e] shadow-sm" />

              <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      {item.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Narrative */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Bulleted Achievements */}
                <ul className="space-y-2 pt-2">
                  {item.achievements.map((ach, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Used */}
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
