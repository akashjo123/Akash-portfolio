"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowDown, MoveDown, Compass, Terminal, Layers } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"craft" | "code" | "system">("craft");
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative w-full pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden border-b border-hairline">
      {/* Editorial Grid Background Hairlines */}
      <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto px-6 sm:px-8">
        <div className="w-full h-full border-l border-r border-hairline/40 grid grid-cols-1 md:grid-cols-12 pointer-events-none">
          <div className="hidden md:block col-span-8 border-r border-hairline/30 h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Status & Context Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-12 sm:pb-16 gap-4 border-b border-hairline/60">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs font-mono tracking-widest uppercase text-ink-muted">
              AVAILABLE FOR SELECT PROJECTS &amp; PRODUCT ADVISORY
            </span>
          </div>

          <div className="text-xs font-mono tracking-wider uppercase text-ink-muted flex items-center gap-3">
            <span>KOCHI, IN / REMOTE</span>
            <span className="text-hairline">|</span>
            <span className="text-ink font-semibold">FRONT-END &amp; PRODUCT DESIGN</span>
          </div>
        </div>

        {/* Main Headline & Art-Directed Hero Grid */}
        <div className="pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headlines & Editorial Statement */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-2.5 py-1 bg-surface border border-hairline rounded text-[11px] font-mono tracking-widest uppercase text-ink-muted">
                PORTFOLIO 2024 — AKASH JOSEPH
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-ink leading-[1.04]"
            >
              Designing digital experiences that feel{" "}
              <span className="font-serif italic font-normal tracking-normal text-ink">
                intuitive.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-ink-muted font-normal leading-relaxed max-w-2xl"
            >
              I’m Akash Joseph, a UI/UX Designer and Front-End Developer focused on creating thoughtful, functional and visually engaging digital experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-ink text-canvas rounded hover:bg-neutral-800 text-sm font-mono tracking-wide transition-all duration-200 active:scale-95 group"
              >
                <span>EXPLORE WORK (05)</span>
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-canvas border border-hairline hover:border-ink rounded text-sm font-mono tracking-wide text-ink transition-all duration-200"
              >
                <span>GET IN TOUCH</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Carefully Art-Directed Abstract Visual Composition */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-surface border border-hairline rounded-lg p-6 sm:p-7 shadow-sm">
              {/* Composition Header */}
              <div className="flex items-center justify-between pb-4 border-b border-hairline text-xs font-mono text-ink-muted">
                <span className="uppercase font-semibold tracking-wider text-ink">
                  DESIGN × ENGINEERING RATIO
                </span>
                <span className="text-[10px] text-ink-muted">01 // INTERFACE FRAMEWORK</span>
              </div>

              {/* Interactive Framework Switcher */}
              <div className="grid grid-cols-3 gap-2 my-4">
                <button
                  onClick={() => setActiveTab("craft")}
                  className={`py-2 px-2.5 text-[11px] font-mono rounded border transition-all text-center ${
                    activeTab === "craft"
                      ? "bg-canvas border-ink text-ink font-bold shadow-sm"
                      : "bg-surface border-hairline text-ink-muted hover:border-neutral-400"
                  }`}
                >
                  <Compass size={13} className="mx-auto mb-1 opacity-70" />
                  <span>UI/UX CRAFT</span>
                </button>
                <button
                  onClick={() => setActiveTab("system")}
                  className={`py-2 px-2.5 text-[11px] font-mono rounded border transition-all text-center ${
                    activeTab === "system"
                      ? "bg-canvas border-ink text-ink font-bold shadow-sm"
                      : "bg-surface border-hairline text-ink-muted hover:border-neutral-400"
                  }`}
                >
                  <Layers size={13} className="mx-auto mb-1 opacity-70" />
                  <span>SYSTEMS</span>
                </button>
                <button
                  onClick={() => setActiveTab("code")}
                  className={`py-2 px-2.5 text-[11px] font-mono rounded border transition-all text-center ${
                    activeTab === "code"
                      ? "bg-canvas border-ink text-ink font-bold shadow-sm"
                      : "bg-surface border-hairline text-ink-muted hover:border-neutral-400"
                  }`}
                >
                  <Terminal size={13} className="mx-auto mb-1 opacity-70" />
                  <span>FRONT-END</span>
                </button>
              </div>

              {/* Dynamic Composition Display */}
              <div className="bg-canvas border border-hairline rounded p-5 min-h-[220px] flex flex-col justify-between">
                {activeTab === "craft" && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono uppercase text-ink-muted">
                        PHILOSOPHY // 01
                      </span>
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-sm text-ink leading-relaxed font-sans">
                      &ldquo;Interface design is not merely decoration—it is the tactile language through which humans navigate complex digital systems.&rdquo;
                    </p>
                    <div className="flex items-center gap-2 pt-2 border-t border-hairline text-[11px] font-mono text-ink-muted">
                      <span>USER-CENTRIC</span>
                      <span>·</span>
                      <span>INFORMATION ARCHITECTURE</span>
                      <span>·</span>
                      <span>HEURISTICS</span>
                    </div>
                  </div>
                )}

                {activeTab === "system" && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono uppercase text-ink-muted">
                        FOUNDATIONS // 02
                      </span>
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-sm text-ink leading-relaxed font-sans">
                      &ldquo;Systematic token structures, WCAG AAA accessibility, and rigid spatial scales bring harmony across 100+ components.&rdquo;
                    </p>
                    <div className="flex items-center gap-2 pt-2 border-t border-hairline text-[11px] font-mono text-ink-muted">
                      <span>SWISS GRID</span>
                      <span>·</span>
                      <span>DESIGN TOKENS</span>
                      <span>·</span>
                      <span>FIGMA VARIANTS</span>
                    </div>
                  </div>
                )}

                {activeTab === "code" && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono uppercase text-ink-muted">
                        PRODUCTION // 03
                      </span>
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-sm text-ink leading-relaxed font-sans">
                      &ldquo;Bridging the gap between Figma and production code through semantic HTML, TypeScript, modern React, and performant CSS.&rdquo;
                    </p>
                    <div className="flex items-center gap-2 pt-2 border-t border-hairline text-[11px] font-mono text-ink-muted">
                      <span>REACT / NEXT.JS</span>
                      <span>·</span>
                      <span>TYPESCRIPT</span>
                      <span>·</span>
                      <span>TAILWIND CSS</span>
                    </div>
                  </div>
                )}

                {/* Micro Technical Details */}
                <div className="pt-3 border-t border-hairline flex justify-between text-[10px] font-mono text-ink-muted">
                  <span>DISCIPLINE: DUAL HYBRID</span>
                  <span>ACCESSIBILITY: AAA TARGET</span>
                </div>
              </div>

              {/* Composition Footer Spec */}
              <div className="pt-4 flex justify-between items-center text-[10px] font-mono text-ink-muted">
                <span>INDEX REF: AJ-2024-FOLIO</span>
                <span>FIGMA → CODE WORKFLOW</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Work Scroll Indicator */}
        <div className="mt-16 sm:mt-24 pt-6 border-t border-hairline flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono text-ink-muted gap-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-ink inline-block" />
            <span className="uppercase tracking-widest text-ink font-medium">
              SELECTED CLIENT &amp; PRODUCT ARCHITECTURE (2022 — 2024)
            </span>
          </div>

          <a
            href="#work"
            className="group flex items-center gap-2 text-ink hover:text-ink-muted transition-colors"
          >
            <span className="uppercase tracking-wider">SCROLL TO EXPLORE ARCHIVE</span>
            <MoveDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
