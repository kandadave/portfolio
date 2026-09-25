"use client";

import React from "react";
import { skillsData } from "@/data/skills";
import { Brain, Code2, Server, ShieldCheck } from "lucide-react";

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "brain":
        return <Brain className="w-6 h-6 text-emerald-600" />;
      case "code":
        return <Code2 className="w-6 h-6 text-teal-600" />;
      case "server":
        return <Server className="w-6 h-6 text-cyan-600" />;
      case "shield":
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default:
        return <Brain className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-semibold tracking-wider uppercase mb-3 border border-emerald-500/20">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Categorized Technical Arsenal
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A battle-tested stack spanning generative AI orchestration, resilient backends, distributed operations, and modern frontend architecture.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((group) => (
            <div
              key={group.id}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:translate-y-[-2px] transition-all duration-300"
            >
              <div>
                {/* Header: Icon & Category Title */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-500/30 flex items-center justify-center shadow-xs">
                    {getIcon(group.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {group.title}
                    </h3>
                    <span className="text-xs font-mono text-emerald-700 font-semibold">
                      {group.skills.length} Technical Capabilities
                    </span>
                  </div>
                </div>

                {/* Category Description */}
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {group.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Status Line */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Production Ready</span>
                <span className="text-emerald-700 font-semibold">Verified In Workloads</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
