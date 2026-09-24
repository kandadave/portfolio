"use client";

import React, { useState, useMemo } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MapPin,
  Clock,
  ExternalLink,
  Sparkles,
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
  const [providerOverride, setProviderOverride] = useState<"auto" | "gmail" | "outlook" | "yahoo" | "client">("auto");
  const [status, setStatus] = useState<{
    message: string;
    url?: string;
    providerName?: string;
  } | null>(null);

  const recipientEmail = "davidkandachumo@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Smart detect email provider based on user input
  const detectedProvider = useMemo(() => {
    if (providerOverride !== "auto") return providerOverride;
    const lower = formState.email.toLowerCase().trim();
    if (lower.includes("@gmail.com") || lower.includes("@googlemail.com")) {
      return "gmail";
    }
    if (
      lower.includes("@outlook.com") ||
      lower.includes("@hotmail.com") ||
      lower.includes("@live.com") ||
      lower.includes("@msn.com")
    ) {
      return "outlook";
    }
    if (lower.includes("@yahoo.com") || lower.includes("@ymail.com")) {
      return "yahoo";
    }
    // Default to Gmail web compose for all other addresses
    return "gmail";
  }, [formState.email, providerOverride]);

  const providerLabels: Record<string, { name: string; color: string; desc: string }> = {
    gmail: {
      name: "Gmail (Web Tab)",
      color: "text-red-600 bg-red-50 border-red-200",
      desc: "Opens compose tab in Gmail. Pre-fills message or prompts login if not signed in.",
    },
    outlook: {
      name: "Outlook (Web Tab)",
      color: "text-blue-600 bg-blue-50 border-blue-200",
      desc: "Opens compose tab in Outlook/Hotmail. Prompts login if not signed in.",
    },
    yahoo: {
      name: "Yahoo Mail (Web Tab)",
      color: "text-purple-600 bg-purple-50 border-purple-200",
      desc: "Opens compose tab in Yahoo Mail in a new browser tab.",
    },
    client: {
      name: "Default Desktop Mail Client",
      color: "text-slate-700 bg-slate-100 border-slate-200",
      desc: "Opens your local installed email application.",
    },
  };

  const getComposeUrl = () => {
    const subjectText =
      formState.subject.trim() || `Portfolio Inquiry from ${formState.name || "Client"}`;
    const bodyText = `Hi David,\n\n${formState.message}\n\n---\nSender Details:\nName: ${formState.name}\nEmail: ${formState.email}`;

    const encSub = encodeURIComponent(subjectText);
    const encBody = encodeURIComponent(bodyText);

    switch (detectedProvider) {
      case "gmail":
        return `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encSub}&body=${encBody}`;
      case "outlook":
        return `https://outlook.live.com/mail/0/deeplink/compose?to=${recipientEmail}&subject=${encSub}&body=${encBody}`;
      case "yahoo":
        return `https://compose.mail.yahoo.com/?to=${recipientEmail}&subject=${encSub}&body=${encBody}`;
      case "client":
      default:
        return `mailto:${recipientEmail}?subject=${encSub}&body=${encBody}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getComposeUrl();
    const providerInfo = providerLabels[detectedProvider];

    if (detectedProvider === "client") {
      window.location.href = url;
      setStatus({
        message: "Triggering your desktop email application...",
      });
    } else {
      // Open in a new tab directly
      const newTab = window.open(url, "_blank", "noopener,noreferrer");

      if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
        // In case browser blocked popups
        setStatus({
          message: `Browser blocked popup. Click the link below to open ${providerInfo.name}:`,
          url,
          providerName: providerInfo.name,
        });
      } else {
        setStatus({
          message: `Opened ${providerInfo.name} in a new tab! If you are not signed in, your provider will prompt you to log in.`,
          url,
          providerName: providerInfo.name,
        });
      }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-semibold tracking-wider uppercase mb-3 border border-emerald-500/20">
            05 // Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Build Something Grounded & Resilient.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have a project, a RAG pipeline to architect, or an engineering role? Send a message directly from your browser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with 1-Click Copy */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-500/30 flex items-center justify-center text-emerald-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Direct Email
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fastest response within 24 hours
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2">
                <span className="font-mono text-xs sm:text-sm text-slate-900 font-medium truncate">
                  {recipientEmail}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-2xs"
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
                className="glass-card rounded-xl p-5 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-slate-700 group-hover:text-emerald-600 transition-colors" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      GitHub
                    </div>
                    <div className="text-[11px] font-mono text-slate-500">
                      @kandadave
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/david-kanda-373742364"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-5 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-slate-700 group-hover:text-emerald-600 transition-colors" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      LinkedIn
                    </div>
                    <div className="text-[11px] font-mono text-slate-500">
                      david-kanda
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

            </div>

            {/* Timezone & Location Card */}
            <div className="glass-card rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-700">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Nairobi, Kenya • East Africa Time (UTC+3)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Flexible overlap with US, European & Global time zones</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Browser-Direct Email Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-9">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">
                  Send a Message
                </h3>
                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Opens in New Tab
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Your message opens directly in a new webmail tab (e.g. Gmail or Outlook) with the recipient, subject, and text pre-filled.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">
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
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@gmail.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="RAG Architecture Consultation / Contract Role"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">
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
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Email Service Selector / Detection Badge */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-mono text-[11px]">Send via:</span>
                    <span className={`px-2 py-0.5 rounded font-mono font-bold text-[11px] border ${providerLabels[detectedProvider].color}`}>
                      {providerLabels[detectedProvider].name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="text-slate-400">Switch:</span>
                    <button
                      type="button"
                      onClick={() => setProviderOverride("gmail")}
                      className={`px-2 py-0.5 rounded transition-all ${
                        detectedProvider === "gmail"
                          ? "bg-red-600 text-white font-semibold"
                          : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      Gmail
                    </button>
                    <button
                      type="button"
                      onClick={() => setProviderOverride("outlook")}
                      className={`px-2 py-0.5 rounded transition-all ${
                        detectedProvider === "outlook"
                          ? "bg-blue-600 text-white font-semibold"
                          : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      Outlook
                    </button>
                    <button
                      type="button"
                      onClick={() => setProviderOverride("client")}
                      className={`px-2 py-0.5 rounded transition-all ${
                        detectedProvider === "client"
                          ? "bg-slate-800 text-white font-semibold"
                          : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      Mail App
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open in New Tab & Send</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
                  </button>

                  {/* Status Banner with Fallback Link */}
                  {status && (
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                      <div className="font-medium flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{status.message}</span>
                      </div>
                      {status.url && (
                        <div className="pt-1">
                          <a
                            href={status.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-emerald-700 font-bold underline hover:text-emerald-900"
                          >
                            Click here to launch {status.providerName} manually <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
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
