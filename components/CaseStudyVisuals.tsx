"use client";

import React, { useState } from "react";
import { Project } from "@/data/projects";

interface CaseStudyVisualsProps {
  project: Project;
  screenIndex?: number;
}

export function CaseStudyScreen({ project, screenIndex = 0 }: CaseStudyVisualsProps) {
  const screen = project.uiScreens[screenIndex] || project.uiScreens[0];

  return (
    <div className="w-full bg-surface border border-hairline rounded-lg overflow-hidden my-8 shadow-sm">
      {/* Editorial Browser / Window Frame */}
      <div className="bg-[#E2DFD7] border-b border-hairline px-4 py-3 flex items-center justify-between text-xs font-mono text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4D0C5] border border-ink/20 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4D0C5] border border-ink/20 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4D0C5] border border-ink/20 inline-block" />
          <span className="ml-3 text-[11px] font-sans tracking-normal text-ink font-medium">
            {screen.title}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-canvas border border-hairline text-[10px] uppercase font-semibold text-ink">
            {screen.badge}
          </span>
          <span className="text-[10px] text-ink-muted hidden sm:inline">
            1440 × 900 // HI-RES RETINA
          </span>
        </div>
      </div>

      {/* Screen Presentation Canvas */}
      <div className="p-6 sm:p-10 bg-canvas flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
        {screen.layoutType === "mobile" ? (
          /* Mobile Device Frame */
          <div className="w-full max-w-[320px] bg-[#171717] p-3 rounded-[36px] shadow-2xl border-4 border-[#2E2E2A]">
            <div className="w-full bg-canvas rounded-[26px] overflow-hidden border border-hairline min-h-[500px] flex flex-col justify-between p-5 text-ink">
              <div className="flex justify-between items-center text-[10px] font-mono text-ink-muted border-b border-hairline pb-2">
                <span>9:41</span>
                <span className="uppercase">{project.title} APP</span>
                <span>5G · 100%</span>
              </div>
              <div className="my-auto py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-hairline flex items-center justify-center font-bold text-sm">
                  {project.number}
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                    ACTIVE WORKSPACE
                  </div>
                  <h4 className="text-xl font-bold tracking-tight text-ink mt-1">
                    {screen.title}
                  </h4>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {screen.description}
                </p>
                <div className="p-3 bg-surface rounded border border-hairline text-[11px] font-mono">
                  <div className="flex justify-between text-ink-muted">
                    <span>STATE</span>
                    <span className="text-ink font-semibold">SYNCHRONIZED</span>
                  </div>
                </div>
              </div>
              <div className="w-24 h-1 bg-ink/20 mx-auto rounded-full mt-4" />
            </div>
          </div>
        ) : (
          /* Desktop / Dashboard Frame */
          <div className="w-full max-w-4xl bg-canvas border border-hairline rounded p-6 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-hairline pb-4 gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">
                  UI ARCHITECTURE SPECIMEN
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
                  {screen.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-ink-muted bg-surface px-2.5 py-1 rounded border border-hairline self-start sm:self-auto">
                RELEASE v2.4 // STABLE
              </span>
            </div>

            <p className="text-sm text-ink-muted leading-relaxed max-w-2xl">
              {screen.description}
            </p>

            {/* Graphic Layout Grid Mock */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-surface rounded border border-hairline space-y-2">
                <div className="w-6 h-6 rounded bg-ink text-canvas flex items-center justify-center text-xs font-mono font-bold">
                  A
                </div>
                <div className="text-xs font-semibold text-ink">Primary Viewport Core</div>
                <div className="text-[11px] text-ink-muted font-mono leading-normal">
                  8-point baseline grid with sub-pixel typographic alignment and fluid clamp scales.
                </div>
              </div>

              <div className="p-4 bg-surface rounded border border-hairline space-y-2">
                <div className="w-6 h-6 rounded bg-ink text-canvas flex items-center justify-center text-xs font-mono font-bold">
                  B
                </div>
                <div className="text-xs font-semibold text-ink">State Machine Engine</div>
                <div className="text-[11px] text-ink-muted font-mono leading-normal">
                  Deterministic reactive state transitions with zero perceptual lag or hydration pops.
                </div>
              </div>

              <div className="p-4 bg-surface rounded border border-hairline space-y-2">
                <div className="w-6 h-6 rounded bg-accent-dark text-canvas flex items-center justify-center text-xs font-mono font-bold">
                  C
                </div>
                <div className="text-xs font-semibold text-ink">Accessible Contrast</div>
                <div className="text-[11px] text-ink-muted font-mono leading-normal">
                  Rigorous WCAG AA/AAA verified color relationships for universal readability.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Screen Caption Footer */}
      <div className="bg-[#EAE8E1] px-6 py-3 border-t border-hairline flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-ink-muted gap-2">
        <span className="font-mono text-[11px]">
          FIGURE {project.number}.{screenIndex + 1} // {screen.title.toUpperCase()}
        </span>
        <span className="italic text-[11px] text-ink-muted/90">
          Designed &amp; Front-End Implemented by Akash Joseph
        </span>
      </div>
    </div>
  );
}

export function DesignSystemMatrix({ project }: { project: Project }) {
  return (
    <div className="w-full bg-surface border border-hairline rounded-lg p-6 sm:p-8 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-hairline gap-2">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-ink-muted">
            DESIGN TOKENS &amp; FOUNDATIONS
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-ink mt-1">
            Systematic Cohesion
          </h3>
        </div>
        <span className="text-xs font-mono text-ink-muted">
          TOKEN SCALE: {project.designSystem.spacingScale}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Color Primitives */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-ink font-semibold">
            Color Palette Primitives
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 bg-canvas rounded border border-hairline">
              <span className="w-7 h-7 rounded bg-[#171717] border border-hairline shrink-0" />
              <div className="text-xs font-mono">
                <span className="font-semibold block text-ink">Primary Carbon</span>
                <span className="text-ink-muted text-[10px]">{project.designSystem.primaryColor}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 bg-canvas rounded border border-hairline">
              <span className="w-7 h-7 rounded bg-[#EAE8E1] border border-hairline shrink-0" />
              <div className="text-xs font-mono">
                <span className="font-semibold block text-ink">Surface Neutral</span>
                <span className="text-ink-muted text-[10px]">{project.designSystem.surfaceColor}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 bg-canvas rounded border border-hairline">
              <span className="w-7 h-7 rounded bg-[#A8B7A3] border border-hairline shrink-0" />
              <div className="text-xs font-mono">
                <span className="font-semibold block text-ink">Semantic Accent</span>
                <span className="text-ink-muted text-[10px]">{project.designSystem.accentColor}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Typography & Measure */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-ink font-semibold">
            Typographic Scale
          </h4>
          <div className="p-3 bg-canvas rounded border border-hairline space-y-2">
            <div className="text-xs font-medium text-ink">
              {project.designSystem.typography}
            </div>
            <div className="text-[11px] font-mono text-ink-muted space-y-1 pt-1 border-t border-hairline">
              <div className="flex justify-between">
                <span>Display:</span>
                <span className="font-semibold text-ink">48px / 64px (Tight)</span>
              </div>
              <div className="flex justify-between">
                <span>Headline:</span>
                <span className="font-semibold text-ink">24px / 32px</span>
              </div>
              <div className="flex justify-between">
                <span>Body:</span>
                <span className="font-semibold text-ink">16px / 26px (65ch)</span>
              </div>
              <div className="flex justify-between">
                <span>Metadata:</span>
                <span className="font-semibold text-ink">11px / Tracking wide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Atomic Component Tokens */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-ink font-semibold">
            Component Architecture
          </h4>
          <div className="p-3 bg-canvas rounded border border-hairline space-y-1.5">
            {project.designSystem.componentTokens.map((token, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs font-mono py-1 px-1.5 rounded hover:bg-surface transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-ink font-medium">{token}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

