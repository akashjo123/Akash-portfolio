"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/projects";
import ProjectArtboard from "./ProjectArtboard";
import { FadeIn } from "./MotionWrapper";

const FILTER_CATEGORIES = [
  "All",
  "Web design",
  "Branding",
  "Development",
  "Support",
] as const;

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.tags?.some(
      (tag) => tag.toLowerCase() === activeCategory.toLowerCase()
    );
  });

  return (
    <section id="work" className="w-full py-20 sm:py-28 bg-[#F4F2ED]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 gap-6">
            <div>
              <h2 className="text-5xl sm:text-7xl font-sans font-bold tracking-tight text-ink">
                Projects
              </h2>
            </div>
            <p className="text-sm text-ink-muted max-w-sm md:text-left leading-relaxed">
              Every project we deliver is a reflection of our commitment to quality, designed to inspire and drive success.
            </p>
          </div>
        </FadeIn>

        {/* Filter Navigation Bar (from reference design) */}
        <FadeIn delay={0.1}>
          <div className="border-b border-hairline pb-4 mb-12 sm:mb-16 overflow-x-auto scrollbar-none">
            <nav className="flex items-center gap-6 sm:gap-8 text-sm sm:text-base whitespace-nowrap min-w-max">
              {FILTER_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`transition-colors duration-200 focus:outline-none ${
                      isActive
                        ? "text-ink font-bold"
                        : "text-[#77746D] hover:text-ink font-medium"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </nav>
          </div>
        </FadeIn>

        {/* 2-Column Projects Grid (matching reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16">
          {filteredProjects.map((project, idx) => (
            <FadeIn key={project.slug} delay={idx * 0.08}>
              <article className="group flex flex-col">
                <Link
                  href={`/work/${project.slug}`}
                  className="block focus:outline-none"
                  aria-label={`View case study for ${project.title}`}
                >
                  {/* Large Project Preview Image / Studio Mockup */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-lg overflow-hidden border border-hairline/80 bg-surface transition-all duration-300 group-hover:border-ink/60 group-hover:shadow-md">
                    <ProjectArtboard slug={project.slug} variant="card" />
                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/[0.015] transition-colors pointer-events-none" />
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink mt-5 group-hover:text-ink/80 transition-colors">
                    {project.displayTitle || project.title}
                  </h3>

                  {/* Project Short Description */}
                  <p className="text-sm text-ink-muted mt-1.5 leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Capsule Pill Tags (e.g. BRANDING, WEB DESIGN) */}
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-0.5 rounded-full border border-hairline bg-transparent text-[9px] uppercase font-mono tracking-wider text-ink-muted group-hover:border-ink/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
