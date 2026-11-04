"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FadeIn } from "./MotionWrapper";
import AboutPosterSignature from "./AboutPosterSignature";
import { Check, Copy, Sparkles, SlidersHorizontal, ArrowDownRight } from "lucide-react";

export default function About() {
  // Interactive state controls matching the user's Pinterest design
  const [copied, setCopied] = useState(false);
  const [photoMode, setPhotoMode] = useState<"akash-studio" | "akash-mono" | "original-pin">("akash-studio");
  const [signatureMode, setSignatureMode] = useState<"akash" | "claudia">("akash");
  const [textMode, setTextMode] = useState<"custom" | "original">("custom");

  const handleCopyHandle = () => {
    const textToCopy = textMode === "original" ? "@REALLYGREATSITE" : "@AKASHJOSEPH.DESIGN";
    navigator.clipboard?.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const skillCategories = [
    {
      title: "UI/UX & RESEARCH",
      skills: [
        "UI/UX Design",
        "User Research",
        "Wireframing",
        "Prototyping",
        "Information Architecture",
      ],
      description:
        "Qualitative user interviews, contextual inquiries, iterative low/high-fidelity wireframes, and ergonomic interaction flows.",
    },
    {
      title: "DESIGN SYSTEMS & VISUALS",
      skills: [
        "Design Systems",
        "Responsive Web Design",
        "Figma Tokens",
        "Visual Rhythm",
        "Accessible Contrast",
      ],
      description:
        "Multi-tier token architecture, Swiss typographical grids, accessible WCAG color scales, and cross-device responsive layouts.",
    },
    {
      title: "FRONT-END ENGINEERING",
      skills: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
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
    <section id="about" className="w-full py-20 sm:py-32 bg-[#EAE8E1]/60 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Indicator */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                02 // PROFILE &amp; PHILOSOPHY
              </span>
            </div>

            {/* Poster Customization Pill Bar */}
            <div className="flex items-center flex-wrap gap-2 text-[11px] font-mono">
              <span className="text-ink-muted hidden md:inline flex items-center gap-1 mr-1">
                <SlidersHorizontal className="w-3 h-3" /> PRESET:
              </span>
              <button
                onClick={() => {
                  setPhotoMode("akash-studio");
                  setSignatureMode("akash");
                  setTextMode("custom");
                }}
                className={`px-2.5 py-1 rounded transition-colors ${
                  photoMode === "akash-studio" && textMode === "custom"
                    ? "bg-ink text-canvas font-medium shadow-sm"
                    : "bg-surface text-ink-muted hover:text-ink hover:bg-canvas"
                }`}
              >
                Studio Natural
              </button>
              <button
                onClick={() => {
                  setPhotoMode("akash-mono");
                  setSignatureMode("akash");
                  setTextMode("custom");
                }}
                className={`px-2.5 py-1 rounded transition-colors ${
                  photoMode === "akash-mono" && textMode === "custom"
                    ? "bg-ink text-canvas font-medium shadow-sm"
                    : "bg-surface text-ink-muted hover:text-ink hover:bg-canvas"
                }`}
              >
                Studio B&amp;W
              </button>
              <button
                onClick={() => {
                  setPhotoMode("original-pin");
                  setSignatureMode("claudia");
                  setTextMode("original");
                }}
                className={`px-2.5 py-1 rounded transition-colors ${
                  photoMode === "original-pin" && textMode === "original"
                    ? "bg-ink text-canvas font-medium shadow-sm"
                    : "bg-surface text-ink-muted hover:text-ink hover:bg-canvas"
                }`}
              >
                1:1 Pin Replica
              </button>
            </div>
          </div>
        </FadeIn>

        {/* ------------------------------------------------------------- */}
        {/* EDITORIAL POSTER SECTION (Faithful recreation of Pinterest Pin) */}
        {/* ------------------------------------------------------------- */}
        <FadeIn delay={0.1}>
          <div className="relative max-w-4xl mx-auto bg-white border border-hairline/80 rounded-sm shadow-[0_25px_60px_-15px_rgba(0,0,0,0.09)] overflow-hidden transition-all duration-300">
            
            {/* Top White Strip: 'about' + Handle */}
            <div className="px-6 sm:px-10 md:px-14 pt-8 sm:pt-12 md:pt-14 pb-2 sm:pb-3 flex items-baseline justify-between bg-white select-none">
              <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[132px] font-sans font-black tracking-[-0.05em] text-ink leading-none">
                about
              </h2>

              {/* Social / Meta Handle */}
              <button
                onClick={handleCopyHandle}
                className="group flex items-center gap-1.5 text-xs sm:text-sm font-sans font-semibold tracking-[0.2em] uppercase text-ink hover:text-accent-dark transition-colors pb-2"
                title="Click to copy handle"
              >
                <span>
                  {textMode === "original" ? "@REALLYGREATSITE" : "@AKASHJOSEPH.DESIGN"}
                </span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-green-600 inline" />
                ) : (
                  <Copy className="w-3 h-3 text-ink/40 group-hover:text-ink transition-colors hidden sm:inline" />
                )}
              </button>
            </div>

            {/* Middle Section: Full-width Dark Photo Frame with 'me.' */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[16/10] bg-[#0c0c0c] overflow-hidden group">
              
              {/* Photo Display based on active mode */}
              {photoMode === "original-pin" ? (
                // Original Pinterest pin poster image with exact subject & lighting
                <div className="relative w-full h-full">
                  <Image
                    src="/about-poster-ref.jpg"
                    alt="Editorial model in white blazer against moody cast shadow wall"
                    fill
                    className="object-cover object-[center_35%] filter contrast-110"
                    priority
                  />
                  {/* Subtle darkening vignette */}
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>
              ) : photoMode === "akash-mono" ? (
                // Akash Joseph in monochrome studio lighting
                <div className="relative w-full h-full">
                  <Image
                    src="/akash-about.jpg"
                    alt="Akash Joseph — UI/UX Designer &amp; Front-End Developer"
                    fill
                    className="object-cover object-[center_20%] filter grayscale contrast-125 brightness-95"
                    priority
                  />
                  {/* Left-edge shadow gradient to guarantee crisp white typography contrast */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent pointer-events-none" />
                </div>
              ) : (
                // Akash Joseph in authentic natural studio lighting (new portrait)
                <div className="relative w-full h-full">
                  <Image
                    src="/akash-about.jpg"
                    alt="Akash Joseph — UI/UX Designer &amp; Front-End Developer"
                    fill
                    className="object-cover object-[center_20%] filter contrast-[1.04]"
                    priority
                  />
                  {/* Left-edge shadow gradient for 'me.' readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent pointer-events-none" />
                </div>
              )}

              {/* The iconic 'me.' typography: bold white text positioned at top-left */}
              <div className="absolute top-2 sm:top-4 md:top-6 left-6 sm:px-0 sm:left-10 md:left-14 pointer-events-none select-none z-10">
                <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[132px] font-sans font-black tracking-[-0.05em] text-white leading-none drop-shadow-sm">
                  me.
                </span>
              </div>

              {/* Floating photo mode pill toggle at bottom-right of photo */}
              <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-6 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-white/80 z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="tracking-wider uppercase">
                  {photoMode === "original-pin" ? "REFERENCE PIN" : photoMode === "akash-mono" ? "STUDIO B&W" : "STUDIO NATURAL"}
                </span>
              </div>
            </div>

            {/* Bottom White Section: 'nice to meet you!' + Paragraph + Signature */}
            <div className="px-6 sm:px-10 md:px-14 pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-14 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
                
                {/* Left Column: Heading & Narrative Bio */}
                <div className="md:col-span-7 lg:col-span-8 space-y-4">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight text-ink lowercase">
                    nice to meet you!
                  </h3>

                  {textMode === "original" ? (
                    // Exact Latin copy from the reference poster
                    <p className="font-sans italic text-sm sm:text-base text-ink/90 leading-relaxed font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  ) : (
                    // Authentic tailored bio for Akash Joseph
                    <div className="space-y-3 font-sans italic text-sm sm:text-base md:text-lg text-ink/90 leading-relaxed font-normal">
                      <p>
                        I’m Akash Joseph, a UI/UX Designer and Front-End Developer based in Kochi, India.
                        I approach digital product design as an integrated discipline—where visual clarity,
                        human psychology, and clean software architecture reinforce one another.
                      </p>
                      <p className="text-ink-muted text-xs sm:text-sm not-italic font-sans">
                        Bridging the gap between Figma artboards and production-ready code to build
                        tactile interfaces that feel effortless, coherent, and technically robust.
                      </p>
                    </div>
                  )}

                  {/* Metadata Tags */}
                  <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-ink-muted">
                    <span className="px-2.5 py-1 bg-[#F4F2ED] rounded border border-hairline/60">
                      KOCHI, IN (UTC+5:30)
                    </span>
                    <span className="px-2.5 py-1 bg-[#F4F2ED] rounded border border-hairline/60">
                      FIGMA &bull; TYPESCRIPT &bull; NEXT.JS
                    </span>
                    <span className="px-2.5 py-1 bg-[#F4F2ED] rounded border border-hairline/60 text-accent-dark font-medium">
                      AVAILABLE FOR FREELANCE &amp; ROLES
                    </span>
                  </div>
                </div>

                {/* Right Column: Handwritten Signature */}
                <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-end justify-center pt-4 md:pt-0">
                  <div className="text-center md:text-right">
                    <AboutPosterSignature name={signatureMode} />
                    
                    {/* Switcher toggle between Akash and Claudia signature */}
                    <div className="mt-3 flex items-center justify-center md:justify-end gap-2 text-[10px] font-mono text-ink-muted">
                      <button
                        onClick={() => setSignatureMode("akash")}
                        className={`hover:text-ink transition-colors underline decoration-dotted ${
                          signatureMode === "akash" ? "text-ink font-semibold" : ""
                        }`}
                      >
                        Akash
                      </button>
                      <span>/</span>
                      <button
                        onClick={() => setSignatureMode("claudia")}
                        className={`hover:text-ink transition-colors underline decoration-dotted ${
                          signatureMode === "claudia" ? "text-ink font-semibold" : ""
                        }`}
                      >
                        Claudia
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </FadeIn>

        {/* ------------------------------------------------------------- */}
        {/* COMPREHENSIVE CREDENTIALS, METHODOLOGY & CAPABILITIES          */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-24 sm:mt-32 pt-16 border-t border-hairline">
          
          {/* Section Subtitle */}
          <FadeIn className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                METHODOLOGY &amp; PRINCIPLES
              </span>
              <h3 className="text-2xl sm:text-4xl font-sans font-medium tracking-tight text-ink mt-2">
                My approach to solving digital problems
              </h3>
            </div>
            <p className="text-xs font-mono text-ink-muted sm:text-right max-w-sm">
              End-to-end alignment from qualitative discovery to production-tested front-end code.
            </p>
          </FadeIn>

          {/* 4-Step Methodology */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {approachSteps.map((item, idx) => (
              <FadeIn
                key={item.step}
                delay={idx * 0.1}
                className="p-6 bg-canvas border border-hairline rounded-lg space-y-3 flex flex-col justify-between hover:border-ink/40 transition-colors"
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
                <div className="pt-4 border-t border-hairline flex items-center justify-between text-[10px] font-mono text-ink-muted">
                  <span>DISCIPLINE VERIFIED</span>
                  <ArrowDownRight className="w-3 h-3 text-ink-muted" />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Core Philosophy Banner */}
          <FadeIn className="mb-20 p-8 sm:p-10 bg-white border border-hairline rounded-lg">
            <div className="text-xs font-mono uppercase tracking-widest text-ink-muted border-b border-hairline pb-4 mb-6">
              CORE DESIGN PHILOSOPHIES
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-ink font-mono mb-2">
                  01 // Form follows intent
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Ornamentation without structural purpose causes cognitive fatigue. Every line, margin, and typography scale must earn its place.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-ink font-mono mb-2">
                  02 // Digital tangibility
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Interfaces should feel responsive, continuous, and physical. Thoughtful motion feedback builds immediate trust.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-ink font-mono mb-2">
                  03 // Production rigor
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  A design is only as strong as its coded implementation. Systematic tokens and accessible semantics ensure lasting longevity.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Capabilities & Tooling */}
          <div>
            <FadeIn className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                  CAPABILITIES &amp; TOOLING
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-medium tracking-tight text-ink mt-2">
                  Technical &amp; Design Skills
                </h3>
              </div>
              <p className="text-xs font-mono text-ink-muted sm:text-right">
                Presented transparently without arbitrary percentage bars.
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

                    {/* Skills Pills */}
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

      </div>
    </section>
  );
}
