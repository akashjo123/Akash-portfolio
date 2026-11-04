"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import ProjectArtboard from "./ProjectArtboard";
import { FadeIn } from "./MotionWrapper";

export default function SelectedWork() {
  const [p1, p2, p3, p4, p5] = PROJECTS;

  return (
    <section id="work" className="w-full py-24 sm:py-32 bg-[#F4F2ED]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 sm:pb-16 border-b border-hairline gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                  01 // INDEXED CASE STUDIES
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-sans font-medium tracking-tight text-ink">
                Selected Work
              </h2>
            </div>
            <p className="text-sm font-mono text-ink-muted sm:text-right max-w-xs">
              A curated selection of digital products, design systems, and web experiences.
            </p>
          </div>
        </FadeIn>

        {/* Asymmetric Editorial Grid */}
        <div className="mt-16 sm:mt-20 space-y-24 sm:space-y-36">
          {/* Project 1: KOKO — Full Bleed Feature Project */}
          <FadeIn duration={0.7}>
            <article className="group">
              <Link
                href={`/work/${p1.slug}`}
                className="block focus:outline-none"
                aria-label={`View case study for ${p1.title}`}
              >
                <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] min-h-[380px] sm:min-h-[500px] rounded-lg overflow-hidden border border-hairline bg-surface transition-all duration-500 group-hover:border-ink/60 group-hover:shadow-lg">
                  <ProjectArtboard slug={p1.slug} variant="hero" />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/[0.02] transition-colors pointer-events-none" />
                </div>

                {/* Editorial Metadata Bar */}
                <div className="mt-6 pt-4 border-t border-hairline grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-2 flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-ink">
                      {p1.number}
                    </span>
                    <span className="text-xs font-mono text-ink-muted uppercase">
                      / {p1.year}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="text-2xl sm:text-3xl font-sans font-medium tracking-tight text-ink group-hover:text-ink-muted transition-colors flex items-center gap-2">
                      <span>{p1.title}</span>
                      <ArrowUpRight
                        size={20}
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      />
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mt-1">
                      {p1.category}
                    </p>
                  </div>

                  <div className="md:col-span-4">
                    <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
                      {p1.shortDescription}
                    </p>
                  </div>

                  <div className="md:col-span-2 md:text-right">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink font-semibold group-hover:underline">
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          </FadeIn>

          {/* Staggered Row 1: Project 2 (Wooden Clouds) & Project 3 (Orange Industries) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Project 2: Wooden Clouds (7 Cols) */}
            <article className="lg:col-span-7 group">
              <FadeIn delay={0.1}>
                <Link
                  href={`/work/${p2.slug}`}
                  className="block focus:outline-none"
                  aria-label={`View case study for ${p2.title}`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-hairline bg-surface transition-all duration-500 group-hover:border-ink/60 group-hover:shadow-lg">
                    <ProjectArtboard slug={p2.slug} variant="card" />
                  </div>

                  <div className="mt-6 pt-4 border-t border-hairline flex flex-col space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-ink">{p2.number} // {p2.year}</span>
                      <span className="text-ink-muted uppercase">{p2.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-sans font-medium tracking-tight text-ink group-hover:text-ink-muted transition-colors flex items-center gap-2">
                        <span>{p2.title}</span>
                        <ArrowUpRight
                          size={18}
                          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-wider text-ink font-semibold group-hover:underline">
                        EXPLORE →
                      </span>
                    </div>
                    <p className="text-sm text-ink-muted leading-relaxed pt-1">
                      {p2.shortDescription}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            </article>

            {/* Project 3: Orange Industries (5 Cols - Offset down on desktop) */}
            <article className="lg:col-span-5 lg:mt-16 group">
              <FadeIn delay={0.2}>
                <Link
                  href={`/work/${p3.slug}`}
                  className="block focus:outline-none"
                  aria-label={`View case study for ${p3.title}`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-hairline bg-surface transition-all duration-500 group-hover:border-ink/60 group-hover:shadow-lg">
                    <ProjectArtboard slug={p3.slug} variant="card" />
                  </div>

                  <div className="mt-6 pt-4 border-t border-hairline flex flex-col space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-ink">{p3.number} // {p3.year}</span>
                      <span className="text-ink-muted uppercase">{p3.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-sans font-medium tracking-tight text-ink group-hover:text-ink-muted transition-colors flex items-center gap-2">
                        <span>{p3.title}</span>
                        <ArrowUpRight
                          size={18}
                          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-wider text-ink font-semibold group-hover:underline">
                        EXPLORE →
                      </span>
                    </div>
                    <p className="text-sm text-ink-muted leading-relaxed pt-1">
                      {p3.shortDescription}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            </article>
          </div>

          {/* Staggered Row 2: Project 4 (School Management Platform) & Project 5 (Walkie-Talkie Solution) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Project 4: School Platform (5 Cols) */}
            <article className="lg:col-span-5 group">
              <FadeIn delay={0.1}>
                <Link
                  href={`/work/${p4.slug}`}
                  className="block focus:outline-none"
                  aria-label={`View case study for ${p4.title}`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-hairline bg-surface transition-all duration-500 group-hover:border-ink/60 group-hover:shadow-lg">
                    <ProjectArtboard slug={p4.slug} variant="card" />
                  </div>

                  <div className="mt-6 pt-4 border-t border-hairline flex flex-col space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-ink">{p4.number} // {p4.year}</span>
                      <span className="text-ink-muted uppercase">{p4.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-sans font-medium tracking-tight text-ink group-hover:text-ink-muted transition-colors flex items-center gap-2">
                        <span>{p4.title}</span>
                        <ArrowUpRight
                          size={18}
                          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-wider text-ink font-semibold group-hover:underline">
                        EXPLORE →
                      </span>
                    </div>
                    <p className="text-sm text-ink-muted leading-relaxed pt-1">
                      {p4.shortDescription}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            </article>

            {/* Project 5: Walkie-Talkie Solution (7 Cols - Offset down on desktop) */}
            <article className="lg:col-span-7 lg:mt-16 group">
              <FadeIn delay={0.2}>
                <Link
                  href={`/work/${p5.slug}`}
                  className="block focus:outline-none"
                  aria-label={`View case study for ${p5.title}`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-hairline bg-surface transition-all duration-500 group-hover:border-ink/60 group-hover:shadow-lg">
                    <ProjectArtboard slug={p5.slug} variant="card" />
                  </div>

                  <div className="mt-6 pt-4 border-t border-hairline flex flex-col space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-ink">{p5.number} // {p5.year}</span>
                      <span className="text-ink-muted uppercase">{p5.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-sans font-medium tracking-tight text-ink group-hover:text-ink-muted transition-colors flex items-center gap-2">
                        <span>{p5.title}</span>
                        <ArrowUpRight
                          size={18}
                          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-wider text-ink font-semibold group-hover:underline">
                        EXPLORE →
                      </span>
                    </div>
                    <p className="text-sm text-ink-muted leading-relaxed pt-1">
                      {p5.shortDescription}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
