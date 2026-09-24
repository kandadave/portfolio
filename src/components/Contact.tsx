"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MapPin,
  Clock,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const emailAddress = "davidkandachumo@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setStatusMessage("Opening your default email client...");
    setTimeout(() => setStatusMessage(""), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            05 // Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let&apos;s Build Something Grounded & Resilient.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Have a project, a RAG pipeline to architect, or an engineering role? I am available for contract, consulting, and full-time engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with 1-Click Copy */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Direct Email
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Fastest response within 24 hours
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/5 flex items-center justify-between gap-2">
                <span className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 truncate">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
                  aria-label="Copy Email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* GitHub */}
              <a
                href="https://github.com/kandadave"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-5 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 transition-colors" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      GitHub
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      @kandadave
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/david-kanda-373742364"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-5 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 transition-colors" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      LinkedIn
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      david-kanda
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

            </div>

            {/* Timezone & Location Card */}
            <div className="glass-card rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Nairobi, Kenya • East Africa Time (UTC+3)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>Flexible overlap with US, European & Global time zones</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-9">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in the details below to launch your default mail client with pre-populated inquiry context.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="RAG Architecture Consultation / Contract Role"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your requirements, system architecture questions, or scope..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-emerald-500/25 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message (Email Client)</span>
                  </button>

                  {statusMessage && (
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 animate-pulse">
                      {statusMessage}
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
