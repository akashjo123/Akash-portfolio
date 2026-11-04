import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import ProjectArtboard from "@/components/ProjectArtboard";
import { CaseStudyScreen, DesignSystemMatrix } from "@/components/CaseStudyVisuals";
import { FadeIn } from "@/components/MotionWrapper";

// Statically generate routes for all 5 projects
export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Akash Joseph`,
    description: project.shortDescription,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const nextProject = PROJECTS.find((p) => p.slug === project.nextSlug) || PROJECTS[0];
  const prevProject = PROJECTS.find((p) => p.slug === project.prevSlug) || PROJECTS[PROJECTS.length - 1];

  return (
    <article className="min-h-screen bg-[#F4F2ED] text-ink pb-24">
      {/* Editorial Breadcrumb / Sub-bar */}
      <div className="border-b border-hairline py-4 bg-surface/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between text-xs font-mono">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <div className="flex items-center gap-2 text-ink-muted">
            <span className="hidden sm:inline">CASE STUDY</span>
            <span className="hidden sm:inline">/</span>
            <span className="font-bold text-ink uppercase">{project.title}</span>
            <span>({project.number})</span>
          </div>
        </div>
      </div>

      {/* 1. PROJECT INTRODUCTION & HERO */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 sm:pt-24 pb-16 border-b border-hairline">
        <FadeIn>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              PROJECT {project.number} // {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium tracking-tight text-ink leading-[1.04] mb-8">
            {project.heroHeadline}
          </h1>

          <p className="text-lg sm:text-2xl text-ink-muted font-normal max-w-4xl leading-relaxed mb-12">
            {project.heroSummary}
          </p>

          {/* Project Meta Table Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-hairline text-xs font-mono">
            <div>
              <span className="text-ink-muted block text-[10px] uppercase tracking-wider mb-1">
                CLIENT / ORG
              </span>
              <span className="font-semibold text-ink text-sm">{project.client}</span>
            </div>

            <div>
              <span className="text-ink-muted block text-[10px] uppercase tracking-wider mb-1">
                MY ROLE
              </span>
              <span className="font-semibold text-ink text-sm">{project.role}</span>
            </div>

            <div>
              <span className="text-ink-muted block text-[10px] uppercase tracking-wider mb-1">
                TIMELINE / YEAR
              </span>
              <span className="font-semibold text-ink text-sm">
                {project.timeline} ({project.year})
              </span>
            </div>

            <div>
              <span className="text-ink-muted block text-[10px] uppercase tracking-wider mb-1">
                TOOLING &amp; STACK
              </span>
              <span className="font-semibold text-ink text-sm">
                {project.tools.slice(0, 3).join(", ")}
              </span>
            </div>
          </div>
        </FadeIn>
      </header>

      {/* Main Feature Artboard / Full Bleed Preview */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <FadeIn duration={0.7}>
          <div className="w-full aspect-[16/10] sm:aspect-[21/10] min-h-[380px] sm:min-h-[520px] rounded-lg overflow-hidden border border-hairline shadow-md">
            <ProjectArtboard slug={project.slug} variant="hero" />
          </div>
        </FadeIn>
      </section>

      {/* Structured Content Container */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-24 sm:space-y-32">
        {/* 2. PROJECT OVERVIEW */}
        <FadeIn className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              01 // OVERVIEW &amp; CONTEXT
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium tracking-tight text-ink">
            Bridging conceptual design with production fidelity
          </h2>
          <div className="prose text-base sm:text-lg text-ink font-normal leading-relaxed space-y-4">
            <p>{project.heroSummary}</p>
            <p className="text-ink-muted">
              Every design decision in this project was tested against real user constraints, balancing aesthetic minimalism with the practical realities of front-end execution.
            </p>
          </div>
        </FadeIn>

        {/* 3. PROBLEM STATEMENT */}
        <FadeIn className="p-8 sm:p-10 bg-surface border border-hairline rounded-lg space-y-6">
          <div className="flex items-center justify-between border-b border-hairline pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              02 // PROBLEM STATEMENT
            </span>
            <span className="text-xs font-mono text-ink-muted">CRITICAL FRICTION</span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink mb-3">
              The Core Challenge
            </h3>
            <p className="text-base sm:text-lg text-ink leading-relaxed">
              {project.problemStatement.coreChallenge}
            </p>
          </div>

          <div className="pt-4 border-t border-hairline space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-muted block">
              Observed Roadblocks
            </span>
            <ul className="space-y-2 text-sm text-ink-muted">
              {project.problemStatement.keyObstacles.map((obstacle, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink shrink-0 mt-2" />
                  <span>{obstacle}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* 4. GOALS & OBJECTIVES */}
        <FadeIn className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted block">
            03 // STRATEGIC GOALS
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium tracking-tight text-ink">
            Objectives &amp; Guardrails
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {project.goals.map((goal, idx) => (
              <div
                key={idx}
                className="p-6 bg-canvas border border-hairline rounded-lg flex flex-col justify-between space-y-4"
              >
                <div className="text-lg font-mono font-bold text-accent-dark">
                  0{idx + 1}
                </div>
                <p className="text-sm text-ink font-medium leading-relaxed">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 5. RESEARCH & DISCOVERY */}
        <FadeIn className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted block">
            04 // RESEARCH &amp; DISCOVERY
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium tracking-tight text-ink">
            Investigating User Friction
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            {project.researchDiscovery.methodology}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {project.researchDiscovery.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="p-5 bg-surface border border-hairline rounded-lg space-y-2"
              >
                <div className="text-xs font-mono uppercase font-bold text-ink">
                  {finding.title}
                </div>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {finding.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 6. USER PERSONAS / STAKEHOLDERS */}
        <FadeIn className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted block">
            05 // STAKEHOLDER INSIGHTS
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium tracking-tight text-ink">
            User Archetypes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {project.personas.map((persona, idx) => (
              <div
                key={idx}
                className="p-6 bg-canvas border border-hairline rounded-lg space-y-4 shadow-sm"
              >
                <div className="flex items-center justify-between border-b border-hairline pb-3">
                  <h4 className="text-base font-bold text-ink">
                    {persona.role}
                  </h4>
                  <span className="text-[10px] font-mono text-ink-muted">ARCHETYPE 0{idx + 1}</span>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed">
                  <span className="font-semibold text-ink font-mono uppercase text-[10px] block mb-1">
                    Context:
                  </span>
                  {persona.context}
                </p>
                <div className="p-3 bg-surface rounded text-xs space-y-1">
                  <span className="font-semibold text-ink font-mono uppercase text-[10px] block">
                    Core Pain Point:
                  </span>
                  <p className="text-ink-muted text-xs leading-relaxed">{persona.painPoint}</p>
                </div>
                <div className="text-xs text-ink">
                  <span className="font-semibold text-ink font-mono uppercase text-[10px] block mb-1">
                    Key Requirement:
                  </span>
                  <p className="text-xs leading-relaxed">{persona.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 7. USER JOURNEY & WORKFLOWS */}
        <FadeIn className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted block">
            06 // USER JOURNEY
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium tracking-tight text-ink">
            Mapping Critical Flows
          </h2>

          <div className="space-y-3 pt-2">
            {project.userJourney.map((step, idx) => (
              <div
                key={idx}
                className="p-5 bg-surface border border-hairline rounded-lg grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
              >
                <div className="sm:col-span-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-ink text-canvas text-xs font-mono flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-bold text-ink">{step.phase}</span>
                </div>
                <div className="sm:col-span-5 text-xs text-ink leading-relaxed">
                  {step.action}
                </div>
                <div className="sm:col-span-4 text-xs font-mono text-ink-muted border-t sm:border-t-0 sm:border-l border-hairline pt-2 sm:pt-0 sm:pl-4">
                  {step.insight}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 8. WIREFRAMES & STRUCTURAL NOTES */}
        <FadeIn className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted block">
            07 // INFORMATION ARCHITECTURE &amp; WIREFRAMES
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium tracking-tight text-ink">
            Layout Iteration &amp; Scaffolding
          </h2>

          <div className="p-6 bg-canvas border border-hairline rounded-lg space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-ink font-semibold">
              Structural Hypotheses Validated
            </h4>
            <ul className="space-y-3 text-sm text-ink-muted">
              {project.wireframeNotes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-xs font-mono font-bold text-ink shrink-0 mt-0.5">
                    [0{idx + 1}]
                  </span>
                  <span className="leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>

      {/* 9. DESIGN SYSTEM (Full Container Width) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <FadeIn>
          <DesignSystemMatrix project={project} />
        </FadeIn>
      </div>

      {/* 10. FINAL UI SCREENS (Large Showcase) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <FadeIn className="max-w-4xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted block mb-2">
            09 // FINAL INTERFACE SCREENS
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium tracking-tight text-ink">
            Art-Directed Production Mockups
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed mt-2">
            Detailed viewports showcasing the design system applied to key operational scenarios.
          </p>
        </FadeIn>

        {/* Iterate UI screens */}
        {project.uiScreens.map((screen, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <CaseStudyScreen project={project} screenIndex={idx} />
          </FadeIn>
        ))}
      </section>

      {/* 11. RESPONSIVE DESIGN STRATEGY */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-24 sm:space-y-32">
        <FadeIn className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted block">
            10 // RESPONSIVE ADAPTATION
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium tracking-tight text-ink">
            Multi-Viewport Architecture
          </h2>
          <div className="p-6 bg-surface border border-hairline rounded-lg">
            <p className="text-base text-ink leading-relaxed">
              {project.responsiveApproach}
            </p>
          </div>
        </FadeIn>

        {/* 12. CHALLENGES & SOLUTIONS */}
        <FadeIn className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted block">
            11 // CHALLENGES &amp; RESOLUTION
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium tracking-tight text-ink">
            Engineering &amp; UX Friction
          </h2>

          <div className="space-y-4 pt-2">
            {project.challenges.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-canvas border border-hairline rounded-lg space-y-3 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-accent-dark">CHALLENGE 0{idx + 1}</span>
                </div>
                <h4 className="text-base font-bold text-ink">
                  {item.challenge}
                </h4>
                <div className="pt-2 border-t border-hairline text-sm text-ink-muted leading-relaxed">
                  <span className="font-semibold text-ink font-mono text-xs block mb-1">
                    Solution Implemented:
                  </span>
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 13. LEARNINGS & CONCLUSION */}
        <FadeIn className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted block">
            12 // REFLECTIONS &amp; RETROSPECTIVE
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium tracking-tight text-ink">
            Key Learnings
          </h2>

          <div className="p-6 bg-surface border border-hairline rounded-lg space-y-4">
            <ul className="space-y-3 text-sm text-ink leading-relaxed">
              {project.learnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-dark shrink-0 mt-2" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>

      {/* 14. NEXT / PREVIOUS PROJECT NAVIGATION FOOTER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-24 pt-16 border-t border-hairline">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous Project Link */}
            <Link
              href={`/work/${prevProject.slug}`}
              className="group p-8 bg-surface border border-hairline rounded-lg hover:border-ink transition-all flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-ink-muted mb-4">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                <span>PREVIOUS CASE STUDY</span>
              </div>
              <div>
                <span className="text-xs font-mono text-ink-muted block mb-1">{prevProject.category}</span>
                <h4 className="text-2xl sm:text-3xl font-sans font-medium tracking-tight text-ink group-hover:text-ink-muted transition-colors">
                  {prevProject.title}
                </h4>
              </div>
            </Link>

            {/* Next Project Link */}
            <Link
              href={`/work/${nextProject.slug}`}
              className="group p-8 bg-surface border border-hairline rounded-lg hover:border-ink transition-all flex flex-col justify-between md:text-right"
            >
              <div className="flex items-center justify-end gap-2 text-xs font-mono text-ink-muted mb-4">
                <span>NEXT CASE STUDY</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div>
                <span className="text-xs font-mono text-ink-muted block mb-1">{nextProject.category}</span>
                <h4 className="text-2xl sm:text-3xl font-sans font-medium tracking-tight text-ink group-hover:text-ink-muted transition-colors">
                  {nextProject.title}
                </h4>
              </div>
            </Link>
          </div>
        </FadeIn>
      </section>
    </article>
  );
}
