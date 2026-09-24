"use client";

import React from "react";
import { Mail, ArrowUp, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-[#06090e]/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Monogram & Bio Note */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
              DKC
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                David Kanda Chumo
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                AI Automation Engineer & Full-Stack Systems Architect
              </p>
            </div>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/kandadave"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-kanda-373742364"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:davidkandachumo@gmail.com"
              aria-label="Send Email"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Copyright & Back To Top */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>© {new Date().getFullYear()} David Kanda Chumo</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-200/50 dark:bg-slate-800 hover:text-emerald-500 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom micro notice */}
        <div className="mt-8 pt-4 border-t border-slate-200/40 dark:border-white/5 text-center text-[10px] font-mono text-slate-400 dark:text-slate-600">
          Built with Next.js 16, TypeScript, Tailwind CSS & Framer Motion. Zero-config Vercel deployment.
        </div>
      </div>
    </footer>
  );
}
