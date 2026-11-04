"use client";

import React from "react";

interface ProjectArtboardProps {
  slug: string;
  variant?: "hero" | "card" | "detail" | "wide";
  className?: string;
}

export default function ProjectArtboard({
  slug,
  variant = "card",
  className = "",
}: ProjectArtboardProps) {
  switch (slug) {
    case "koko":
      return <KokoStudioMockup className={className} />;
    case "wooden-clouds":
      return <WoodenCloudsStudioMockup className={className} />;
    case "orange-industries":
      return <OrangeIndustriesStudioMockup className={className} />;
    case "school-management-platform":
      return <SchoolPlatformStudioMockup className={className} />;
    case "walkie-talkie-solution":
      return <WalkieTalkieStudioMockup className={className} />;
    default:
      return <DefaultStudioMockup title={slug} className={className} />;
  }
}

/* ------------------------------------------------------------------
   Card 1: KOKO — Angled MacBook Pro Studio Mockup
   Inspired by Reference Image (Card 1: Floating laptop in studio)
------------------------------------------------------------------- */
function KokoStudioMockup({ className }: { className: string }) {
  return (
    <div
      className={`relative w-full h-full bg-[#E5E3DC] overflow-hidden select-none flex items-center justify-center p-6 sm:p-10 ${className}`}
    >
      {/* Studio Radial Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.7)_0%,rgba(215,212,204,0.4)_60%,rgba(195,191,182,0.8)_100%)]" />

      {/* Subtle Studio Floor Shadow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-ink/15 rounded-full blur-xl pointer-events-none" />

      {/* Minimal Top-Right Red Corner Arrow (from reference design) */}
      <div className="absolute top-4 right-4 z-20 text-[#D84A38] text-sm font-sans font-light select-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </div>

      {/* Floating Angled Laptop Composition */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md transform -rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
        {/* Laptop Screen Assembly */}
        <div className="relative mx-auto w-[280px] sm:w-[340px] aspect-[16/10] bg-[#111111] rounded-t-xl p-2.5 shadow-2xl border border-neutral-700">
          {/* Top Notch / Camera */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-black rounded-full flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-neutral-600" />
          </div>

          {/* Screen Content: Editorial Koko Audio Interface */}
          <div className="w-full h-full bg-[#FAF9F5] rounded-t-md p-3.5 flex flex-col justify-between overflow-hidden text-ink">
            <div className="flex justify-between items-center border-b border-hairline/60 pb-1.5 text-[9px] font-mono text-ink-muted">
              <span className="font-bold text-ink">KOKO® ACOUSTICS</span>
              <span>SERIES ALPHA // 48kHz</span>
            </div>

            <div className="my-auto py-2 flex items-center justify-between">
              <div>
                <span className="text-[7px] font-mono uppercase tracking-widest text-ink-muted block">
                  SPATIAL 360° ENGINE
                </span>
                <span className="text-sm font-sans font-bold tracking-tight text-ink">
                  Acoustic Core
                </span>
                <span className="text-[8px] font-mono text-ink-muted block mt-0.5">
                  Walnut &amp; Anodized Baffle
                </span>
              </div>
              <div className="w-14 h-14 rounded-full border-2 border-hairline flex items-center justify-center bg-surface">
                <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[7px] font-mono text-ink-muted pt-1 border-t border-hairline/60">
              <span>LATENCY: 0.8ms</span>
              <span className="text-accent-dark font-semibold">CALIBRATED</span>
            </div>
          </div>
        </div>

        {/* Laptop Keyboard Base & Hinge */}
        <div className="relative mx-auto w-[310px] sm:w-[380px] h-3.5 bg-gradient-to-b from-[#CAC7BE] to-[#9E9B92] rounded-b-xl shadow-xl flex items-center justify-center">
          <div className="w-16 h-1 bg-[#7C7A72] rounded-t-sm" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Card 2: WOODEN CLOUDS — Architectural Monograph / Spatial Tablet
   Inspired by Reference Image (Card 4: Organic materials / botanical flatlay)
------------------------------------------------------------------- */
function WoodenCloudsStudioMockup({ className }: { className: string }) {
  return (
    <div
      className={`relative w-full h-full bg-[#DDD9CF] overflow-hidden select-none flex items-center justify-center p-6 sm:p-10 ${className}`}
    >
      {/* Warm Ambient Sunlight Shadow Casting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,255,255,0.6)_0%,rgba(220,216,206,0.3)_50%,rgba(185,181,170,0.8)_100%)]" />

      {/* Architectural Shadow angle */}
      <div className="absolute -top-12 -left-12 w-96 h-96 bg-gradient-to-br from-black/10 via-black/5 to-transparent rotate-12 pointer-events-none" />

      {/* Top-Right Red Corner Arrow */}
      <div className="absolute top-4 right-4 z-20 text-[#D84A38] text-sm font-sans font-light select-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </div>

      {/* Monograph Hardcover Book / Tablet Presentation */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-[#FAF8F5] p-6 rounded shadow-2xl border border-hairline transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
        <div className="flex justify-between items-start text-[9px] font-mono tracking-widest text-ink-muted border-b border-hairline pb-2 mb-4">
          <span className="font-bold text-ink">WOODEN CLOUDS LAB</span>
          <span>NORDIC TIMBER 02</span>
        </div>

        {/* Orthographic Architectural Vector Sketch */}
        <div className="py-2">
          <svg viewBox="0 0 240 100" className="w-full h-auto text-ink stroke-current" fill="none" strokeWidth="1">
            <line x1="10" y1="80" x2="230" y2="80" strokeWidth="1.5" />
            <polygon points="30,55 120,25 210,55" fill="#EAE8E1" />
            <rect x="50" y="55" width="8" height="25" fill="#171717" />
            <rect x="95" y="42" width="8" height="38" fill="#171717" />
            <rect x="145" y="42" width="8" height="38" fill="#171717" />
            <rect x="190" y="55" width="8" height="25" fill="#171717" />
            <circle cx="60" cy="22" r="5" stroke="#A8B7A3" strokeWidth="1" />
            <line x1="60" y1="22" x2="140" y2="80" stroke="#A8B7A3" strokeDasharray="2 2" />
          </svg>
        </div>

        <div className="mt-3 pt-2 border-t border-hairline flex justify-between items-end text-[9px] font-mono text-ink-muted">
          <div>
            <span className="block text-[8px] uppercase">MATERIAL ARCHIVE</span>
            <span className="font-bold text-ink">LARCH &amp; HINOKI TIMBER</span>
          </div>
          <span className="text-accent-dark font-semibold">SCALE 1:100</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Card 3: ORANGE INDUSTRIES — Industrial Telemetry Cockpit
   Inspired by Reference Image (Card 3: Smart tactile device screen)
------------------------------------------------------------------- */
function OrangeIndustriesStudioMockup({ className }: { className: string }) {
  return (
    <div
      className={`relative w-full h-full bg-[#181816] overflow-hidden select-none flex items-center justify-center p-6 sm:p-10 ${className}`}
    >
      {/* Dark Studio Radial Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(45,45,40,0.8)_0%,rgba(20,20,18,0.95)_100%)]" />

      {/* Top-Right Red Corner Arrow */}
      <div className="absolute top-4 right-4 z-20 text-[#D84A38] text-sm font-sans font-light select-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </div>

      {/* Telemetry Console Frame */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-[#242421] border border-neutral-700 rounded-xl p-5 shadow-2xl text-[#F4F2ED]">
        <div className="flex justify-between items-center border-b border-neutral-700 pb-2 mb-3 text-[9px] font-mono text-neutral-400">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            <span className="font-bold text-white">ORANGE TELEMETRY OS</span>
          </div>
          <span className="text-accent">ROBOTIC BAY 09B</span>
        </div>

        {/* Telemetry Sparklines */}
        <div className="grid grid-cols-2 gap-2.5 my-2">
          <div className="p-2.5 bg-[#1B1B19] rounded border border-neutral-800">
            <span className="text-[8px] font-mono text-neutral-500 block">TORQUE VECTOR</span>
            <span className="text-base font-mono font-bold text-white">184.2 Nm</span>
            <div className="mt-1.5 h-4 flex items-end gap-1">
              {[40, 65, 80, 50, 75, 90, 60].map((h, i) => (
                <div key={i} className="flex-1 bg-accent/80 rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          <div className="p-2.5 bg-[#1B1B19] rounded border border-neutral-800">
            <span className="text-[8px] font-mono text-neutral-500 block">CYCLE LATENCY</span>
            <span className="text-base font-mono font-bold text-accent">4.82s</span>
            <div className="mt-1.5 text-[8px] font-mono text-neutral-400">
              UPTIME 99.98%
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-neutral-800 flex justify-between items-center text-[8px] font-mono text-neutral-400">
          <span>AIR-GAPPED TLS 1.3</span>
          <span className="text-white font-semibold">ALL SYSTEMS NOMINAL</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Card 4: SCHOOL MANAGEMENT PLATFORM — Academic Roadmap Matrix
   Inspired by Reference Image (Card 5: Dual phones / clean UI cards)
------------------------------------------------------------------- */
function SchoolPlatformStudioMockup({ className }: { className: string }) {
  return (
    <div
      className={`relative w-full h-full bg-[#EAE7DF] overflow-hidden select-none flex items-center justify-center p-6 sm:p-10 ${className}`}
    >
      {/* Studio Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.7)_0%,rgba(225,221,212,0.4)_60%,rgba(195,191,180,0.8)_100%)]" />

      {/* Top-Right Red Corner Arrow */}
      <div className="absolute top-4 right-4 z-20 text-[#D84A38] text-sm font-sans font-light select-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </div>

      {/* Academic Dashboard Card Mock */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-canvas border border-hairline rounded-lg p-5 shadow-2xl space-y-3">
        <div className="flex justify-between items-center text-[9px] font-mono text-ink-muted border-b border-hairline pb-2">
          <span className="font-bold text-ink">HORIZON ACADEMY PORTAL</span>
          <span className="text-accent-dark font-medium">AUTUMN 2024</span>
        </div>

        <div className="space-y-1.5">
          <div className="text-[10px] font-sans font-semibold text-ink">
            Interactive Degree Pathway
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-center text-[8px] font-mono">
            <div className="p-1.5 bg-surface rounded border border-hairline">
              <span className="font-bold block text-ink">CS 101</span>
              <span className="text-accent-dark">DONE</span>
            </div>
            <div className="p-1.5 bg-surface rounded border border-hairline">
              <span className="font-bold block text-ink">ARC 240</span>
              <span className="text-accent-dark">DONE</span>
            </div>
            <div className="p-1.5 bg-canvas rounded border-2 border-ink">
              <span className="font-bold block text-ink">DES 480</span>
              <span className="text-accent-dark">ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-hairline flex justify-between text-[8px] font-mono text-ink-muted">
          <span>18 CAMPUSES / 45K STUDENTS</span>
          <span className="font-semibold text-ink">WCAG 2.1 AA</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Card 5: WALKIE-TALKIE SOLUTION — Smartphone with Cable / Tactical UI
   Inspired by Reference Image (Card 2: Smartphone with gradient & blue cable)
------------------------------------------------------------------- */
function WalkieTalkieStudioMockup({ className }: { className: string }) {
  return (
    <div
      className={`relative w-full h-full bg-[#E3E0D8] overflow-hidden select-none flex items-center justify-center p-6 sm:p-10 ${className}`}
    >
      {/* Studio Directional Light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.75)_0%,rgba(215,211,202,0.4)_60%,rgba(190,186,176,0.85)_100%)]" />

      {/* Top-Right Red Corner Arrow */}
      <div className="absolute top-4 right-4 z-20 text-[#D84A38] text-sm font-sans font-light select-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </div>

      {/* Modern Smartphone Mockup */}
      <div className="relative z-10 w-44 sm:w-52 aspect-[9/18] bg-[#171717] rounded-[34px] p-2.5 shadow-2xl border-2 border-neutral-700">
        {/* Dynamic Island Notch */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-black rounded-full z-20 flex items-center justify-end pr-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
        </div>

        {/* Screen with Radiant Audio Spectrogram & PTT Interface */}
        <div className="w-full h-full bg-[#1A1A18] rounded-[24px] overflow-hidden flex flex-col justify-between p-3.5 text-white">
          <div className="flex justify-between items-center text-[7px] font-mono text-neutral-400 pt-3">
            <span>9:41</span>
            <span className="text-accent font-semibold">CHANNEL 04</span>
          </div>

          {/* Central PTT Trigger Glow */}
          <div className="my-auto flex flex-col items-center">
            {/* Audio Waveform */}
            <div className="w-full flex items-center justify-center gap-1 h-5 mb-3">
              {[20, 50, 90, 70, 40, 80, 100, 60, 30].map((h, i) => (
                <div key={i} className="w-1 bg-accent rounded-full" style={{ height: `${h}%` }} />
              ))}
            </div>

            <div className="w-16 h-16 rounded-full bg-[#272723] border border-accent flex flex-col items-center justify-center shadow-lg">
              <span className="text-xs font-black tracking-wider text-white">PTT</span>
              <span className="text-[6px] font-mono text-neutral-400">HOLD</span>
            </div>
          </div>

          <div className="text-[7px] font-mono text-neutral-400 text-center border-t border-neutral-800 pt-1">
            <span>SUB-85ms OPUS STREAM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Default Fallback
------------------------------------------------------------------- */
function DefaultStudioMockup({ title, className }: { title: string; className: string }) {
  return (
    <div className={`w-full h-full bg-surface border border-hairline p-8 flex items-center justify-center ${className}`}>
      <span className="text-sm font-mono text-ink-muted">{title}</span>
    </div>
  );
}
