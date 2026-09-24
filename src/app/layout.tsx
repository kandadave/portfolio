import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kanda.dev"),
  title: "David Kanda Chumo | AI Automation Engineer & RAG Systems Architect",
  description:
    "AI Automation Engineer and Full-Stack Developer specializing in production-grade RAG systems, LLM orchestration, resilient fallback architectures, and high-performance web applications.",
  keywords: [
    "David Kanda Chumo",
    "AI Automation Engineer",
    "RAG Systems Architect",
    "Full-Stack Developer",
    "Retrieval-Augmented Generation",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Next.js",
    "LLM Orchestration",
    "Nairobi Kenya Developer",
  ],
  authors: [{ name: "David Kanda Chumo", url: "https://github.com/kandadave" }],
  creator: "David Kanda Chumo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kanda.dev",
    siteName: "David Kanda Chumo Portfolio",
    title: "David Kanda Chumo | AI Automation Engineer & RAG Systems Architect",
    description:
      "I build production-grade AI agents and full-stack systems that stay online, stay grounded, and stay within budget.",
    images: [
      {
        url: "/headshot.png",
        width: 800,
        height: 800,
        alt: "David Kanda Chumo - AI Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Kanda Chumo | AI Automation Engineer & RAG Systems Architect",
    description:
      "I build production-grade AI agents and full-stack systems that stay online, stay grounded, and stay within budget.",
    images: ["/headshot.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-700 bg-slate-50 text-slate-900`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
