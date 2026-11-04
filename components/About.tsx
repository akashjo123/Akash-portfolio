"use client";

import React from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrapper";

export default function About() {
  const skillCategories = [
    {
      title: "UI/UX & RESEARCH",
      skills: [
        "UI/UX Design",
        "User Research",
        "Wireframing",
        "Prototyping",
      ],
      description:
        "Qualitative user interviews, contextual inquiries, iterative low/high-fidelity wireframes, and ergonomic interaction flows.",
    },
    {
      title: "DESIGN SYSTEMS & VISUALS",
      skills: [
        "Design Systems",
        "Responsive Web Design",
        "Figma",
      ],
      description:
        "Multi-tier token architecture, Swiss typographical grids, accessible WCAG color scales, and cross-device responsive layouts.",
    },
    {
      title: "FRONT-END ENGINEERING",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
      ],
      description:
        "Modern TypeScript component architecture, server-rendered React, fluid CSS animations, and clean, accessible DOM structures.",
    },
  ];

  const approachSteps = [
    {
      step: "01",
      title: "Discovery & Framing",
      description:
        "Uncovering foundational constraints, auditing existing systems, and conducting qualitative user research to define the core problem rather than superficial symptoms.",
    },
    {
      step: "02",
      title: "Architecture & Wireframes",
      description:
        "Mapping user journeys, establishing structural hierarchy, and validating wireframes before introducing high-fidelity visual styling.",
    },
    {
      step: "03",
      title: "Design Systems & Craft",
      description:
        "Refining typography, spatial rhythms, and component tokens in Figma with an eye for tactile micro-interactions and accessibility.",
    },
    {
      step: "04",
      title: "Production Implementation",
      description:
        "Translating design blueprints into clean, responsive Next.js and React code—ensuring zero loss of nuance from design to reality.",
    },
  ];

  return (
    <section id="about" className="w-full py-24 sm:py-32 bg-[#EAE8E1]/50 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              02 // PROFILE &amp; PHILOSOPHY
            </span>
          </div>
        </FadeIn>

        {/* Editorial Headline & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-hairline">
          <FadeIn className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-ink leading-[1.08]">
              Curiosity drives my design process.
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-ink font-normal leading-relaxed">
              <p>
                I’m Akash Joseph, a UI/UX Designer and Front-End Developer. I approach digital product design as an integrated discipline—where visual clarity, human psychology, and clean software architecture reinforce one another.
              </p>
              <p className="text-ink-muted">
                Too often, design and engineering operate in isolated silos, resulting in compromised user experiences and friction during handoff. By working fluidly across Figma and production code, I bridge that gap to build interfaces that feel purposeful, coherent, and technically solid.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-5 space-y-6 bg-canvas border border-hairline p-6 sm:p-8 rounded-lg shadow-sm">
            <div className="text-xs font-mono uppercase tracking-widest text-ink-muted border-b border-hairline pb-3">
              CORE PHILOSOPHY
            </div>
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-ink font-mono">
                  01 // Form follows intent
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed mt-1">
                  Ornamentation without structural purpose causes cognitive fatigue. Every line, margin, and type size must earn its place.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-ink font-mono">
                  02 // Digital tangibility
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed mt-1">
                  Interfaces should feel responsive and physical. Thoughtful motion and immediate feedback instill trust.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-ink font-mono">
                  03 // Production rigor
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed mt-1">
                  A design is only as strong as its coded implementation. Systematic tokens and accessible semantics ensure lasting quality.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Approach to Solving Problems */}
        <div className="py-20 border-b border-hairline">
          <FadeIn className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              METHODOLOGY
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-medium tracking-tight text-ink mt-2">
              My approach to solving problems
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((item, idx) => (
              <FadeIn
                key={item.step}
                delay={idx * 0.1}
                className="p-6 bg-canvas border border-hairline rounded-lg space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-mono font-bold text-accent-dark mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold tracking-tight text-ink mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-hairline flex items-center text-[10px] font-mono text-ink-muted">
                  <span>DISCIPLINE VERIFIED</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Skills & Capabilities (Clean visual layout, NO progress bars) */}
        <div className="pt-20">
          <FadeIn className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                CAPABILITIES &amp; TOOLING
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-medium tracking-tight text-ink mt-2">
                Technical &amp; Design Skills
              </h3>
            </div>
            <p className="text-xs font-mono text-ink-muted sm:text-right">
              Presented transparently without arbitrary percentages.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <FadeIn
                key={i}
                delay={i * 0.12}
                className="bg-canvas border border-hairline rounded-lg p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-hairline pb-3 mb-5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
                      {cat.title}
                    </span>
                    <span className="text-[10px] font-mono text-ink-muted">0{i + 1}</span>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-surface border border-hairline hover:border-ink rounded text-xs font-mono text-ink font-medium transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-ink-muted leading-relaxed pt-4 border-t border-hairline">
                  {cat.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
