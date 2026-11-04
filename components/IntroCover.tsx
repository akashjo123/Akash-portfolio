"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, SlidersHorizontal, Mouse } from "lucide-react";

export default function IntroCover() {
  const [preset, setPreset] = useState<"akash" | "original">("akash");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track page scroll to drive the reveal animation
  const { scrollY } = useScroll();
  const coverOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const coverScale = useTransform(scrollY, [0, 450], [1, 0.94]);
  const coverY = useTransform(scrollY, [0, 450], [0, -70]);

  // Subtle 3D tilt on mouse move for interactive depth
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 8, y: y * -8 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const scrollToBanner = () => {
    const el = document.getElementById("hero-banner");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#EBEBEB] text-ink flex flex-col justify-between overflow-hidden select-none border-b border-hairline/60">
      
      {/* Top Utility Bar */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full max-w-7xl mx-auto px-6 sm:px-10 pt-6 sm:pt-8 flex items-center justify-between z-20"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-ink animate-pulse" />
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-ink">
            AKASH JOSEPH<span className="text-[10px] align-super ml-0.5">®</span>
          </span>
          <span className="text-[11px] font-mono tracking-widest uppercase text-ink-muted hidden sm:inline">
            // INDEX COVER
          </span>
        </div>

        {/* Preset Switcher Pill */}
        <div className="flex items-center gap-1.5 text-[11px] font-mono">
          <span className="text-ink-muted hidden md:inline flex items-center gap-1 mr-1">
            <SlidersHorizontal className="w-3 h-3" /> PRESET:
          </span>
          <button
            onClick={() => setPreset("akash")}
            className={`px-3 py-1 rounded transition-colors ${
              preset === "akash"
                ? "bg-ink text-[#EBEBEB] font-medium shadow-sm"
                : "bg-surface/80 text-ink-muted hover:text-ink hover:bg-canvas"
            }`}
          >
            Akash Edition
          </button>
          <button
            onClick={() => setPreset("original")}
            className={`px-3 py-1 rounded transition-colors ${
              preset === "original"
                ? "bg-ink text-[#EBEBEB] font-medium shadow-sm"
                : "bg-surface/80 text-ink-muted hover:text-ink hover:bg-canvas"
            }`}
          >
            Original Pin
          </button>
        </div>
      </motion.div>

      {/* Center Artwork Canvas with Scroll-Driven Transition & Mouse Tilt */}
      <motion.div
        style={{
          opacity: coverOpacity,
          scale: coverScale,
          y: coverY,
        }}
        className="flex-1 flex items-center justify-center px-4 sm:px-8 py-8 my-auto z-10"
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX: mousePos.y,
            rotateY: mousePos.x,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          style={{ perspective: 1000 }}
          className="relative w-full max-w-2xl sm:max-w-3xl aspect-[735/575] flex items-center justify-center cursor-default"
        >
          {/* Base Artwork Image from Pinterest Reference */}
          <div className="relative w-full h-full filter contrast-[1.03]">
            <Image
              src="/portfolio-cover-ref.png"
              alt="Architectural ribbon typography portfolio cover"
              fill
              className="object-contain"
              priority
            />

            {/* Akash Edition Overlays (Tailoring the artwork seamlessly to Akash Joseph) */}
            {preset === "akash" && (
              <>
                {/* Discipline Bar (Overlays 'ARCHITECTURE') */}
                <div
                  className="absolute pointer-events-none select-none text-center"
                  style={{
                    top: "37.5%",
                    left: "37%",
                    right: "33%",
                  }}
                >
                  <span className="inline-block bg-[#EBEBEB] px-3 py-0.5 font-mono text-[9px] sm:text-[11px] md:text-xs font-bold tracking-[0.32em] uppercase text-ink whitespace-nowrap">
                    UI/UX &bull; FRONT-END
                  </span>
                </div>

                {/* Date Label (Overlays '2013 - 2018') */}
                <div
                  className="absolute pointer-events-none select-none"
                  style={{
                    top: "60.4%",
                    left: "40.5%",
                  }}
                >
                  <span className="inline-block bg-[#EBEBEB] px-1 font-mono text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-ink whitespace-nowrap">
                    2024 — 2025
                  </span>
                </div>

                {/* Name Badge Box (Overlays 'SIDDHARTH SANGWAN') */}
                <div
                  className="absolute pointer-events-none select-none"
                  style={{
                    top: "59.2%",
                    left: "49.5%",
                  }}
                >
                  <div className="bg-[#111111] text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-[1.5px] border border-black shadow-[0_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center">
                    <span className="font-sans font-black tracking-wider text-[10px] sm:text-xs md:text-sm uppercase whitespace-nowrap">
                      AKASH JOSEPH
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Prompt Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-7xl mx-auto px-6 sm:px-10 pb-8 sm:pb-10 flex flex-col sm:flex-row items-center justify-between gap-4 z-20"
      >
        <div className="text-[11px] font-mono text-ink-muted uppercase tracking-widest hidden sm:block">
          KOCHI, INDIA &bull; 9.9312° N, 76.2673° E
        </div>

        {/* Animated Scroll Button */}
        <button
          onClick={scrollToBanner}
          className="group flex items-center gap-3 px-4 py-2 rounded-full border border-ink/20 hover:border-ink bg-white/60 hover:bg-white backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow"
        >
          <Mouse className="w-3.5 h-3.5 text-ink animate-bounce" />
          <span className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-ink group-hover:text-accent-dark transition-colors">
            SCROLL TO REVEAL BANNER
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-ink group-hover:translate-y-0.5 transition-transform" />
        </button>

        <div className="text-[11px] font-mono text-ink-muted uppercase tracking-widest">
          AVAILABLE FOR SELECT CONTRACTS
        </div>
      </motion.div>

    </section>
  );
}

