"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Copy, Check, ArrowUp } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "akashjoseph.design@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="hairline-t bg-[#F4F2ED] text-ink pt-20 sm:pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
            03 // INQUIRIES &amp; COLLABORATION
          </span>
        </div>

        {/* Big Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 sm:pb-24 border-b border-hairline">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium tracking-tight leading-[1.05] text-ink">
              Have a good idea? <br />
              <span className="italic font-normal text-ink-muted">
                Let’s make it happen.
              </span>
            </h2>
            <p className="text-lg text-ink-muted max-w-xl font-normal leading-relaxed">
              Available for contract design leadership, design systems architecture, and front-end engineering partnerships.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Direct Email Action Card */}
            <div className="p-6 bg-surface border border-hairline rounded-lg space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                DIRECT INQUIRY
              </div>
              <a
                href={`mailto:${email}`}
                className="text-lg font-mono font-medium text-ink hover:text-ink-muted transition-colors block break-all"
              >
                {email}
              </a>
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-canvas border border-hairline hover:border-ink text-xs font-mono transition-all duration-200 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-accent-dark" />
                      <span>COPIED TO CLIPBOARD</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${email}?subject=Project%20Inquiry%20via%20Portfolio`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-ink text-canvas hover:bg-neutral-800 text-xs font-mono font-medium transition-colors"
                >
                  <span>WRITE EMAIL</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social / Portfolio Links Row */}
        <div className="py-12 border-b border-hairline grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-ink-muted mb-3">
              NETWORK
            </div>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-ink hover:text-ink-muted transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} className="text-ink-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-ink hover:text-ink-muted transition-colors"
                >
                  <span>Behance</span>
                  <ArrowUpRight size={13} className="text-ink-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-ink hover:text-ink-muted transition-colors"
                >
                  <span>Dribbble</span>
                  <ArrowUpRight size={13} className="text-ink-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-ink-muted mb-3">
              CODE &amp; PROTOTYPES
            </div>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-ink hover:text-ink-muted transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={13} className="text-ink-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://figma.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-ink hover:text-ink-muted transition-colors"
                >
                  <span>Figma Community</span>
                  <ArrowUpRight size={13} className="text-ink-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-ink-muted mb-3">
              LOCATION &amp; TIME
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-ink font-medium">Kochi, Kerala, India</p>
              <p className="text-xs font-mono text-ink-muted">UTC+05:30 (IST)</p>
              <p className="text-xs text-ink-muted pt-1">Open to hybrid &amp; remote contracts</p>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-ink-muted mb-3">
              NAVIGATION
            </div>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink hover:text-ink-muted transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Colophon & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-ink-muted gap-4">
          <div>
            © {new Date().getFullYear()} AKASH JOSEPH. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>DESIGNED IN FIGMA</span>
            <span className="text-hairline">•</span>
            <span>BUILT WITH NEXT.JS &amp; TAILWIND</span>
            <span className="text-hairline">•</span>
            <span>SWISS EDITORIAL SYSTEM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
