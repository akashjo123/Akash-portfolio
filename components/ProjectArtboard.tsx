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
  // Art-directed visuals for each project
  switch (slug) {
    case "koko":
      return <KokoArtboard variant={variant} className={className} />;
    case "wooden-clouds":
      return <WoodenCloudsArtboard variant={variant} className={className} />;
    case "orange-industries":
      return <OrangeIndustriesArtboard variant={variant} className={className} />;
    case "school-management-platform":
      return <SchoolPlatformArtboard variant={variant} className={className} />;
    case "walkie-talkie-solution":
      return <WalkieTalkieArtboard variant={variant} className={className} />;
    default:
      return <DefaultArtboard title={slug} variant={variant} className={className} />;
  }
}

/* ------------------------------------------------------------------
   1. KOKO — Spatial Audio & Lifestyle Flagship
------------------------------------------------------------------- */
function KokoArtboard({ variant, className }: { variant: string; className: string }) {
  const isHero = variant === "hero" || variant === "wide";

  return (
    <div
      className={`relative w-full h-full bg-[#ECE9E0] text-ink overflow-hidden select-none border border-hairline ${className} flex flex-col justify-between p-6 sm:p-8 font-sans transition-transform duration-700 ease-out`}
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-hairline" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-hairline" />
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-hairline" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-hairline" />
      </div>

      {/* Top Spec Header */}
      <div className="relative z-10 flex justify-between items-start text-[11px] tracking-widest uppercase font-mono text-ink-muted">
        <div>
          <span className="text-ink font-semibold">KOKO SPECIMEN 01</span>
          <span className="block text-[10px] text-ink-muted/80">360° SPATIAL ACOUSTIC CORE</span>
        </div>
        <div className="text-right">
          <span className="inline-block w-2 h-2 rounded-full bg-accent mr-1.5 animate-pulse" />
          <span>CALIBRATED / 48kHz 24-BIT</span>
        </div>
      </div>

      {/* Centerpiece: Precision Acoustic Geometry */}
      <div className="relative z-10 my-auto py-8 flex flex-col items-center justify-center">
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center">
          {/* Outer dispersion concentric rings */}
          <div className="absolute inset-0 rounded-full border border-hairline/80 animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-dashed border-ink/20" />
          <div className="absolute inset-8 rounded-full border border-accent/40" />

          {/* Speaker driver baffle representation */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#171717] text-canvas shadow-xl flex flex-col items-center justify-center p-4 border-4 border-[#D9D6CE]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2A2926] border border-accent/60 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-accent" />
            </div>
            <span className="mt-2 text-[9px] font-mono tracking-widest text-[#A8B7A3]">
              SERIES ALPHA
            </span>
          </div>

          {/* Soundstage angle calipers */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-canvas px-2 py-0.5 border border-hairline text-[9px] font-mono uppercase text-ink-muted">
            0° DISPERSION AXIS
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-canvas px-2 py-0.5 border border-hairline text-[9px] font-mono uppercase text-ink-muted">
            120° ACOUSTIC BAFFLE
          </div>
        </div>

        {/* Dynamic Waveform Representation */}
        <div className="w-full max-w-xs mt-6 flex items-center justify-between gap-1 h-8 px-4 bg-canvas/60 rounded border border-hairline backdrop-blur-sm">
          {[40, 65, 30, 85, 95, 70, 45, 80, 60, 35, 90, 75, 50, 65, 40].map(
            (val, idx) => (
              <span
                key={idx}
                className="w-1 bg-[#171717] rounded-full transition-all duration-300"
                style={{ height: `${val}%`, opacity: idx % 2 === 0 ? 0.9 : 0.4 }}
              />
            )
          )}
        </div>
      </div>

      {/* Bottom Material & System Callouts */}
      <div className="relative z-10 flex justify-between items-end text-[11px] font-mono border-t border-hairline pt-4">
        <div>
          <span className="text-ink-muted block text-[10px]">MATERIAL FINISH</span>
          <span className="font-semibold text-ink">ANODIZED ALUMINIUM &amp; WALNUT</span>
        </div>
        <div className="text-right">
          <span className="text-ink-muted block text-[10px]">ACOUSTIC RESPONSE</span>
          <span className="font-semibold text-ink">22Hz — 32,000Hz ±1.5dB</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   2. WOODEN CLOUDS — Architectural Monograph & Orthographic Archive
------------------------------------------------------------------- */
function WoodenCloudsArtboard({ variant, className }: { variant: string; className: string }) {
  return (
    <div
      className={`relative w-full h-full bg-[#F0ECE1] text-ink overflow-hidden select-none border border-hairline ${className} flex flex-col justify-between p-6 sm:p-8 font-sans`}
    >
      {/* Editorial Watermark Grid */}
      <div className="absolute right-6 top-6 text-[48px] sm:text-[72px] font-serif font-light text-ink/5 pointer-events-none select-none">
        02 / ARCHIVE
      </div>

      {/* Top Header */}
      <div className="relative z-10 flex justify-between items-start text-[11px] tracking-widest uppercase font-mono text-ink-muted">
        <div>
          <span className="text-ink font-semibold">WOODEN CLOUDS LAB</span>
          <span className="block text-[10px] text-ink-muted/80">STRUCTURAL TIMBER MONOGRAPH</span>
        </div>
        <div className="text-right">
          <span>SCALE 1:100 @ A2</span>
          <span className="block text-[10px] text-ink-muted/80">LAT 59.3293° N</span>
        </div>
      </div>

      {/* Centerpiece: Orthographic Architectural Section */}
      <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center">
        <svg
          viewBox="0 0 400 220"
          className="w-full max-w-md h-auto stroke-current text-ink"
          fill="none"
          strokeWidth="1.2"
        >
          {/* Ground datum line */}
          <line x1="20" y1="180" x2="380" y2="180" stroke="#171717" strokeWidth="2" />
          <line x1="20" y1="184" x2="380" y2="184" stroke="#D9D6CE" strokeWidth="1" strokeDasharray="4 4" />

          {/* Timber frame structure */}
          {/* Roof line angled */}
          <polygon
            points="50,120 200,60 350,120 340,130 200,75 60,130"
            fill="#EAE8E1"
            stroke="#171717"
            strokeWidth="1.5"
          />

          {/* Vertical Glulam Columns */}
          <rect x="80" y="125" width="12" height="55" fill="#171717" />
          <rect x="150" y="98" width="12" height="82" fill="#171717" />
          <rect x="238" y="98" width="12" height="82" fill="#171717" />
          <rect x="308" y="125" width="12" height="55" fill="#171717" />

          {/* Sun angle trajectory */}
          <line x1="80" y1="40" x2="220" y2="180" stroke="#A8B7A3" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="80" cy="40" r="8" stroke="#A8B7A3" strokeWidth="1.5" fill="#F4F2ED" />
          <text x="96" y="44" fill="#77746D" fontSize="8" fontFamily="monospace" stroke="none">
            SUMMER SOLSTICE 62°
          </text>

          {/* Timber Joinery Callout Box */}
          <rect x="248" y="112" width="50" height="24" fill="#F4F2ED" stroke="#D9D6CE" />
          <text x="254" y="127" fill="#171717" fontSize="7" fontFamily="monospace" stroke="none">
            MORTISE &amp; TENON
          </text>
          <line x1="250" y1="112" x2="242" y2="105" stroke="#77746D" strokeWidth="1" />
        </svg>

        {/* Architectural Caption Pill */}
        <div className="mt-4 px-3 py-1 bg-surface border border-hairline rounded text-[10px] font-mono text-ink-muted flex items-center gap-3">
          <span>PROJECT: NORDIC CANOPY</span>
          <span className="text-hairline">|</span>
          <span>MATERIAL: CROSS-LAMINATED LARCH</span>
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="relative z-10 flex justify-between items-end text-[11px] font-mono border-t border-hairline pt-4">
        <div>
          <span className="text-ink-muted block text-[10px]">EMBODIED CARBON</span>
          <span className="font-semibold text-ink">-42 kg CO₂e / m² (NET NEGATIVE)</span>
        </div>
        <div className="text-right">
          <span className="text-ink-muted block text-[10px]">STUDIO ARCHIVE ID</span>
          <span className="font-semibold text-ink">WC-2024-MONO-07</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   3. ORANGE INDUSTRIES — Industrial Telemetry OS
------------------------------------------------------------------- */
function OrangeIndustriesArtboard({ variant, className }: { variant: string; className: string }) {
  return (
    <div
      className={`relative w-full h-full bg-[#1A1A18] text-[#F4F2ED] overflow-hidden select-none border border-neutral-700 ${className} flex flex-col justify-between p-6 sm:p-8 font-sans`}
    >
      {/* Subtle Dark Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/3 left-0 right-0 h-px bg-neutral-600" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-neutral-600" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-600" />
      </div>

      {/* Top Cockpit Telemetry Bar */}
      <div className="relative z-10 flex justify-between items-start text-[11px] tracking-widest uppercase font-mono text-neutral-400">
        <div>
          <span className="text-[#F4F2ED] font-semibold">ORANGE OS // TELEMETRY HUB</span>
          <span className="block text-[10px] text-neutral-500">FLEET CELL #09B ACTIVE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="text-accent text-[11px] font-bold">ALL SYSTEMS NOMINAL</span>
        </div>
      </div>

      {/* Centerpiece: Real-Time Instrumentation Cockpit */}
      <div className="relative z-10 my-auto py-4 w-full">
        <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
          {/* Card 1: Actuator Torque */}
          <div className="bg-[#242420] border border-neutral-700 p-3 rounded">
            <div className="text-[9px] uppercase font-mono text-neutral-400">ACTUATOR TORQUE</div>
            <div className="text-xl font-mono font-bold text-[#F4F2ED] mt-1">
              184.2 <span className="text-xs text-neutral-400 font-normal">Nm</span>
            </div>
            <div className="mt-2 h-8 flex items-end gap-1">
              {[30, 45, 60, 55, 70, 65, 80, 75, 68].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-accent/80 rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Card 2: Joint Harmonics */}
          <div className="bg-[#242420] border border-neutral-700 p-3 rounded">
            <div className="text-[9px] uppercase font-mono text-neutral-400">VIBRATION DELTA</div>
            <div className="text-xl font-mono font-bold text-accent mt-1">
              0.024 <span className="text-xs text-neutral-400 font-normal">G-RMS</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-[8px] font-mono text-neutral-400 border-t border-neutral-700 pt-1">
              <span>FREQ</span>
              <span>120Hz REF</span>
            </div>
          </div>

          {/* Card 3: Cycle Time */}
          <div className="bg-[#242420] border border-neutral-700 p-3 rounded">
            <div className="text-[9px] uppercase font-mono text-neutral-400">CYCLE LATENCY</div>
            <div className="text-xl font-mono font-bold text-[#F4F2ED] mt-1">
              4.82 <span className="text-xs text-neutral-400 font-normal">SEC</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-[8px] font-mono text-neutral-400 border-t border-neutral-700 pt-1">
              <span>UPTIME</span>
              <span>99.98%</span>
            </div>
          </div>
        </div>

        {/* Interactive Schematic Diagram */}
        <div className="mt-4 max-w-lg mx-auto bg-[#242420] border border-neutral-700 p-3 rounded flex items-center justify-between text-[10px] font-mono text-neutral-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded bg-accent" />
            <span>ROBOTIC ARM 06-AXIS CALIBRATED</span>
          </div>
          <span className="text-neutral-500">SYNC: 12ms STREAM</span>
        </div>
      </div>

      {/* Bottom Footer Status */}
      <div className="relative z-10 flex justify-between items-end text-[11px] font-mono border-t border-neutral-700 pt-4 text-neutral-400">
        <div>
          <span className="text-neutral-500 block text-[10px]">SECURITY ARCHITECTURE</span>
          <span className="text-[#F4F2ED] font-semibold">AIR-GAPPED TLS 1.3 / EDGE NODE</span>
        </div>
        <div className="text-right">
          <span className="text-neutral-500 block text-[10px]">OPERATOR SEAT</span>
          <span className="text-[#F4F2ED] font-semibold">CONSOLE TERMINAL #04</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   4. SCHOOL MANAGEMENT PLATFORM — EdTech Academic Portal
------------------------------------------------------------------- */
function SchoolPlatformArtboard({ variant, className }: { variant: string; className: string }) {
  return (
    <div
      className={`relative w-full h-full bg-[#FAF9F5] text-ink overflow-hidden select-none border border-hairline ${className} flex flex-col justify-between p-6 sm:p-8 font-sans`}
    >
      {/* Top Header */}
      <div className="relative z-10 flex justify-between items-start text-[11px] tracking-widest uppercase font-mono text-ink-muted">
        <div>
          <span className="text-ink font-semibold">HORIZON ACADEMIC PORTAL</span>
          <span className="block text-[10px] text-ink-muted/80">MULTI-CAMPUS DEGREE ORCHESTRATION</span>
        </div>
        <div className="text-right">
          <span>TERM: AUTUMN 2024</span>
          <span className="block text-[10px] text-accent-dark font-medium">ENROLLMENT OPEN</span>
        </div>
      </div>

      {/* Centerpiece: Academic Degree Pathway & Schedule Matrix */}
      <div className="relative z-10 my-auto py-4 w-full max-w-md mx-auto space-y-3">
        {/* Prerequisite Node Graph Mock */}
        <div className="bg-canvas border border-hairline p-3.5 rounded shadow-sm">
          <div className="flex justify-between items-center text-[10px] font-mono text-ink-muted mb-2.5">
            <span className="uppercase font-semibold text-ink">B.S. ARCHITECTURE &amp; COMPUTATION</span>
            <span>112 / 128 CREDITS</span>
          </div>

          {/* Visual Degree Tree */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 p-2 bg-[#EAE8E1] rounded border border-hairline text-center">
              <span className="block text-[9px] font-mono text-ink-muted">CS 101</span>
              <span className="text-[10px] font-bold text-ink">FOUNDATIONS</span>
              <span className="block text-[8px] text-accent-dark font-semibold mt-0.5">COMPLETED</span>
            </div>
            <span className="text-ink-muted text-xs">→</span>
            <div className="flex-1 p-2 bg-[#EAE8E1] rounded border border-hairline text-center">
              <span className="block text-[9px] font-mono text-ink-muted">ARC 240</span>
              <span className="text-[10px] font-bold text-ink">PARAMETRIC</span>
              <span className="block text-[8px] text-accent-dark font-semibold mt-0.5">COMPLETED</span>
            </div>
            <span className="text-ink-muted text-xs">→</span>
            <div className="flex-1 p-2 bg-canvas rounded border-2 border-ink text-center shadow-sm">
              <span className="block text-[9px] font-mono text-ink-muted">DES 480</span>
              <span className="text-[10px] font-bold text-ink">CAPSTONE</span>
              <span className="block text-[8px] text-accent-dark font-semibold mt-0.5">IN PROGRESS</span>
            </div>
          </div>
        </div>

        {/* Faculty Fast-Gradebook Snippet */}
        <div className="bg-canvas border border-hairline p-3 rounded">
          <div className="text-[9px] font-mono text-ink-muted uppercase tracking-wider mb-1.5 flex justify-between">
            <span>HIGH-SPEED EVALUATION QUEUE</span>
            <span>KEYBOARD (TAB + ENTER)</span>
          </div>
          <div className="space-y-1 text-[11px] font-mono">
            <div className="flex items-center justify-between p-1.5 bg-[#EAE8E1]/60 rounded">
              <span>01. ADAMS, ELENA</span>
              <span className="font-bold text-ink">GRADE: 94 / 100</span>
              <span className="text-[9px] text-accent-dark font-semibold">VALIDATED</span>
            </div>
            <div className="flex items-center justify-between p-1.5 bg-canvas rounded border border-hairline">
              <span>02. CHEN, MARCUS</span>
              <span className="font-bold text-ink">GRADE: 89 / 100</span>
              <span className="text-[9px] text-ink-muted font-semibold">SUBMITTED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="relative z-10 flex justify-between items-end text-[11px] font-mono border-t border-hairline pt-4">
        <div>
          <span className="text-ink-muted block text-[10px]">ACCESSIBILITY STANDARD</span>
          <span className="font-semibold text-ink">WCAG 2.1 AA / SECTION 508</span>
        </div>
        <div className="text-right">
          <span className="text-ink-muted block text-[10px]">ACTIVE CAMPUS NODES</span>
          <span className="font-semibold text-ink">18 UNIVERSITIES / 45K STUDENTS</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   5. WALKIE-TALKIE SOLUTION — Mission-Critical PTT App
------------------------------------------------------------------- */
function WalkieTalkieArtboard({ variant, className }: { variant: string; className: string }) {
  return (
    <div
      className={`relative w-full h-full bg-[#1C1D1B] text-[#F4F2ED] overflow-hidden select-none border border-neutral-800 ${className} flex flex-col justify-between p-6 sm:p-8 font-sans`}
    >
      {/* Tactical Glow Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Tactical Status */}
      <div className="relative z-10 flex justify-between items-start text-[11px] tracking-widest uppercase font-mono text-neutral-400">
        <div>
          <span className="text-[#F4F2ED] font-semibold">VOCALSTREAM // FIELD-PTT</span>
          <span className="block text-[10px] text-neutral-500">ENCRYPTED AES-256 GCM</span>
        </div>
        <div className="flex items-center gap-1.5 text-accent text-[11px]">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          <span>CHANNEL 04 : LOGISTICS</span>
        </div>
      </div>

      {/* Centerpiece: Massive Tactile PTT Push Zone & Audio Spectrogram */}
      <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center">
        {/* Audio Spectrogram Band */}
        <div className="w-full max-w-xs mb-4 flex items-center justify-center gap-1.5 h-10 px-4 bg-[#262825] border border-neutral-700 rounded-lg">
          {[20, 45, 80, 95, 60, 40, 75, 100, 85, 55, 30, 70, 90, 40, 20].map((h, i) => (
            <div
              key={i}
              className="w-1.5 bg-accent rounded-full transition-all duration-150"
              style={{
                height: `${h}%`,
                opacity: i > 4 && i < 11 ? 1 : 0.4,
              }}
            />
          ))}
        </div>

        {/* Giant Tactile PTT Button */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#262825] border-4 border-neutral-700 flex flex-col items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer">
          <div className="absolute inset-2 rounded-full border border-dashed border-accent/40" />
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#171717] border-2 border-accent flex flex-col items-center justify-center shadow-inner">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-accent">
              PTT
            </span>
            <span className="text-[8px] font-mono tracking-widest text-neutral-400 uppercase mt-0.5">
              HOLD TO TALK
            </span>
          </div>
        </div>

        {/* 30-Sec Replay Ribbon Mock */}
        <div className="mt-4 px-3 py-1 bg-[#262825] border border-neutral-700 rounded text-[9px] font-mono text-neutral-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>INSTANT REPLAY BUFFER: 00:24 AGO AVAILABLE</span>
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="relative z-10 flex justify-between items-end text-[11px] font-mono border-t border-neutral-800 pt-4 text-neutral-400">
        <div>
          <span className="text-neutral-500 block text-[10px]">LATENCY BENCHMARK</span>
          <span className="text-[#F4F2ED] font-semibold">&lt; 85ms VOICE PACKET DELIVERY</span>
        </div>
        <div className="text-right">
          <span className="text-neutral-500 block text-[10px]">HARDWARE INTEGRATION</span>
          <span className="text-[#F4F2ED] font-semibold">BLE PTT PEDAL &amp; HEADSET SYNC</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Default Fallback Artboard
------------------------------------------------------------------- */
function DefaultArtboard({
  title,
  variant,
  className,
}: {
  title: string;
  variant: string;
  className: string;
}) {
  return (
    <div
      className={`w-full h-full bg-surface text-ink border border-hairline p-8 flex flex-col justify-between ${className}`}
    >
      <div className="text-xs font-mono uppercase tracking-widest text-ink-muted">
        PORTFOLIO CASE STUDY
      </div>
      <div className="my-auto text-center">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
      </div>
      <div className="text-xs font-mono text-ink-muted">AKASH JOSEPH DESIGN STUDIO</div>
    </div>
  );
}
