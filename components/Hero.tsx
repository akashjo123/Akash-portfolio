"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Mouse } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [activePhoto, setActivePhoto] = useState<0 | 1>(0);

  const portraits = [
    {
      src: "/akash-portrait.jpg",
      alt: "Akash Joseph — UI/UX Designer & Front-End Developer",
    },
    {
      src: "/hero-portrait-2.jpg",
      alt: "Akash Joseph — Editorial Studio Portrait",
    },
  ];

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero-banner" className="relative w-full py-6 sm:py-12 px-4 sm:px-8 bg-[#EBE8E1]/50 scroll-mt-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto"
      >
        {/* Editorial Frame (matching reference design) */}
        <div className="relative bg-[#F4F2ED] border border-hairline rounded-lg overflow-hidden shadow-sm">
          {/* Top Sub-Header Bar */}
          <div className="px-6 sm:px-10 py-5 sm:py-6 flex items-center justify-between border-b border-hairline/60">
            {/* Left: Minimal Hamburger Indicator */}
            <div className="flex items-center gap-3">
              <div className="space-y-1 w-5 cursor-pointer group">
                <span className="block h-[1.5px] w-5 bg-ink transition-all group-hover:w-4" />
                <span className="block h-[1.5px] w-3.5 bg-ink transition-all group-hover:w-5" />
                <span className="block h-[1.5px] w-5 bg-ink" />
              </div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-ink-muted hidden sm:inline ml-2">
                INDEX 2024
              </span>
            </div>

            {/* Right: Clean Editorial Category Links + Discipline Vertical Badge */}
            <div className="flex items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-6 sm:gap-8 text-xs font-mono uppercase tracking-widest text-ink-muted">
                <a
                  href="#about"
                  className="hover:text-ink transition-colors"
                >
                  /ABOUT
                </a>
                <a
                  href="#work"
                  className="hover:text-ink transition-colors"
                >
                  /WORK
                </a>
                <a
                  href="#contact"
                  className="hover:text-ink transition-colors"
                >
                  /CONTACT
                </a>
              </div>

              {/* Discipline Vertical Badge (Cleanly integrated in header with black line, no image overlap) */}
              <div className="hidden sm:flex items-center gap-2.5 pl-6 border-l-2 border-ink">
                <div className="text-[9px] font-mono uppercase tracking-wider text-ink leading-tight font-semibold">
                  <span>UI/UX</span>
                  <br />
                  <span>DESIGN &amp;</span>
                  <br />
                  <span>FRONT-END</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Hero Banner Grid */}
          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Headlines & Editorial Copy */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8 sm:space-y-10">
              {/* Status Indicator */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D84A38] animate-pulse inline-block" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-ink-muted">
                  AVAILABLE FOR FREELANCE &amp; SELECT CONTRACTS
                </span>
              </div>

              {/* Giant Editorial Headline Name (Matching reference serif typography) */}
              <div className="space-y-2">
                <h1 className="font-serif text-6xl sm:text-8xl lg:text-[104px] tracking-tight leading-[0.88] text-ink uppercase">
                  Akash
                  <br />
                  Joseph
                </h1>
                <span className="block text-[10px] sm:text-xs font-mono tracking-[0.24em] uppercase text-ink-muted pt-3">
                  UI/UX DESIGNER &amp; FRONT-END DEVELOPER
                </span>
              </div>

              {/* Bottom Interactive Group: Play Reel Circle + Paragraph */}
              <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                {/* Outlined Play Circle Trigger */}
                <button
                  onClick={scrollToAbout}
                  aria-label="Explore About &amp; Philosophy"
                  className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-ink flex items-center justify-center shrink-0 hover:bg-ink transition-all duration-300 active:scale-95 shadow-sm"
                >
                  <Play
                    size={22}
                    className="text-ink fill-ink group-hover:text-canvas group-hover:fill-canvas ml-1 transition-colors"
                  />
                  {/* Subtle ring pulse on hover */}
                  <span className="absolute inset-0 rounded-full border border-ink/40 scale-100 group-hover:scale-110 transition-transform duration-300 pointer-events-none" />
                </button>

                {/* Editorial Paragraph (from reference design) */}
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans max-w-sm">
                  My work explores digital experiences that feel intuitive, where every screen hides a story. Through code, interaction, and structure, I craft interfaces that define the tone of products.
                </p>
              </div>
            </div>

            {/* Right Column: High-Fashion Amber/Terracotta Editorial Portrait */}
            <div className="lg:col-span-5 relative w-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
              <div className="relative w-full h-full rounded-md overflow-hidden bg-[#241E1A] shadow-md border border-hairline/80">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhoto}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]"
                  >
                    <Image
                      src={portraits[activePhoto].src}
                      alt={portraits[activePhoto].alt}
                      fill
                      priority
                      className="object-cover object-[center_18%] filter contrast-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    {/* Subtle bottom shadow vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Signature Square White Badge with Arrow in Bottom Left of Photo */}
                <button
                  onClick={scrollToWork}
                  aria-label="View Selected Work"
                  className="absolute bottom-0 left-0 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white text-ink flex items-center justify-center hover:bg-ink hover:text-white transition-colors duration-200 shadow-lg border-t border-r border-hairline"
                >
                  <ArrowUpRight size={22} className="stroke-[2.2]" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Scroll Down & Pagination Dots */}
          <div className="px-6 sm:px-10 py-5 border-t border-hairline/60 flex items-center justify-between text-xs font-mono text-ink-muted">
            <span className="hidden sm:inline text-[11px] tracking-wider">
              BASED IN INDIA / WORKING GLOBALLY
            </span>

            {/* Center: Scroll Down Indicator */}
            <button
              onClick={scrollToAbout}
              className="flex items-center gap-2 hover:text-ink transition-colors mx-auto sm:mx-0 group"
            >
              <Mouse size={14} className="group-hover:translate-y-0.5 transition-transform" />
              <span className="uppercase tracking-widest text-[10px]">
                Scroll Down
              </span>
            </button>

            {/* Right: Interactive Carousel Dots */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActivePhoto(0)}
                aria-label="Show portrait 1"
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activePhoto === 0
                    ? "bg-ink scale-110"
                    : "border border-ink/40 bg-transparent hover:border-ink"
                }`}
              />
              <button
                onClick={() => setActivePhoto(1)}
                aria-label="Show portrait 2"
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activePhoto === 1
                    ? "bg-ink scale-110"
                    : "border border-ink/40 bg-transparent hover:border-ink"
                }`}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
