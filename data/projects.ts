export interface Project {
  slug: string;
  title: string;
  number: string;
  category: string;
  year: string;
  client: string;
  role: string;
  timeline: string;
  tools: string[];
  shortDescription: string;
  heroHeadline: string;
  heroSummary: string;
  problemStatement: {
    context: string;
    coreChallenge: string;
    keyObstacles: string[];
  };
  goals: string[];
  researchDiscovery: {
    methodology: string;
    keyFindings: { title: string; description: string }[];
  };
  personas: {
    role: string;
    context: string;
    painPoint: string;
    goal: string;
  }[];
  userJourney: {
    phase: string;
    action: string;
    insight: string;
  }[];
  wireframeNotes: string[];
  designSystem: {
    primaryColor: string;
    surfaceColor: string;
    accentColor: string;
    typography: string;
    spacingScale: string;
    componentTokens: string[];
  };
  uiScreens: {
    title: string;
    description: string;
    layoutType: "desktop" | "mobile" | "split" | "dashboard";
    badge: string;
  }[];
  responsiveApproach: string;
  challenges: {
    challenge: string;
    solution: string;
  }[];
  learnings: string[];
  nextSlug: string;
  prevSlug: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "koko",
    title: "Koko",
    number: "01",
    category: "Brand & Direct-to-Consumer Platform",
    year: "2024",
    client: "Koko Audio & Living",
    role: "Lead UI/UX Designer & Front-End Developer",
    timeline: "14 Weeks",
    tools: ["Figma", "Next.js", "React", "Tailwind CSS", "Framer Motion"],
    shortDescription:
      "A tactile digital commerce flagship for high-fidelity spatial audio systems, emphasizing micro-interactions and seamless physical-to-digital translation.",
    heroHeadline:
      "Elevating digital commerce through tactile motion and acoustic clarity.",
    heroSummary:
      "Koko manufactures high-end acoustic devices and spatial sound environments. The project involved reimagining their digital flagship from the ground up: replacing fragmented third-party templates with an art-directed custom web experience that mirrors the precision craftsmanship of their physical acoustic hardware.",
    problemStatement: {
      context:
        "High-fidelity audio is an inherently sensory, physical product category. Prospective buyers struggle to gauge acoustic value through static 2D product catalog grids.",
      coreChallenge:
        "How might we convey soundstage depth, material weight, and acoustic engineering via an editorial digital medium without overwhelming customers with technical jargon?",
      keyObstacles: [
        "Legacy storefront suffered from high bounce rates on high-ticket acoustic setups.",
        "Lack of interactive spatial sound demonstrations on mobile viewports.",
        "Disjointed brand voice between retail showroom and digital checkout.",
      ],
    },
    goals: [
      "Establish an editorial-grade digital experience reflecting bespoke acoustic craftsmanship.",
      "Design an interactive soundstage visualizer allowing users to explore speaker room positioning.",
      "Streamline the multi-configuration checkout process into a focused, three-step linear flow.",
      "Ensure sub-second page loads and fluid 60fps animations across all viewport tiers.",
    ],
    researchDiscovery: {
      methodology:
        "Conducted 12 qualitative interviews with audiophile collectors, showroom managers, and industrial designers. Mapped retail purchasing behaviors against digital hesitation points.",
      keyFindings: [
        {
          title: "Tactile Verification",
          description:
            "Customers prioritize material composition (anodized aluminium, walnut baffles, acoustically transparent wool) over raw decibel charts.",
        },
        {
          title: "Spatial Context",
          description:
            "68% of potential buyers hesitated because they couldn't visualize how the system fit within minimalist architectural living spaces.",
        },
        {
          title: "Spec Sheet Fatigue",
          description:
            "Dense technical specification tables created decision paralysis rather than reassurance.",
        },
      ],
    },
    personas: [
      {
        role: "The Architectural Audiophile",
        context: "Furnishing a modern residence; values acoustic fidelity as much as interior harmony.",
        painPoint: "Frustrated by cluttered spec sheets and plastic-looking 3D renders on mainstream audio sites.",
        goal: "Wants clean contextual visuals showing material finishes, dimension scale, and acoustic sweet-spot diagrams.",
      },
      {
        role: "The Studio Sound Professional",
        context: "Seeking reference monitors with precision calibration tools.",
        painPoint: "Needs instant access to verified frequency response curves without navigating marketing fluff.",
        goal: "Needs an interactive toggle between technical telemetry and architectural lifestyle views.",
      },
    ],
    userJourney: [
      {
        phase: "Exploration",
        action: "Browses architectural lifestyle editorial; hovers over interactive sound components.",
        insight: "Seamless micro-interactions confirm material properties and acoustic dispersion angles.",
      },
      {
        phase: "Configuration",
        action: "Customizes driver finishes, stands, and cable routing via real-time interactive preview.",
        insight: "Live price recalculation and dynamic dimensional callouts eliminate purchase hesitation.",
      },
      {
        phase: "Checkout",
        action: "Enters a focused, single-column payment and scheduling workflow with white-glove delivery options.",
        insight: "Zero visual clutter during payment builds high trust for high-value orders.",
      },
    ],
    wireframeNotes: [
      "Explored split-screen viewport architecture: fixed visual canvas on left, progressive editorial narrative on right.",
      "Eliminated traditional accordion menus in favor of linear, scannable typographic hierarchy.",
      "Prototyped sticky specimen inspection bars to keep primary configuration toggles readily accessible.",
    ],
    designSystem: {
      primaryColor: "#171717 (Deep Carbon)",
      surfaceColor: "#EAE8E1 (Gallery Stone)",
      accentColor: "#A8B7A3 (Acoustic Sage)",
      typography: "Refined Sans + Tabular Monospace for acoustic metrics",
      spacingScale: "8pt Swiss Grid (8px, 16px, 24px, 48px, 96px, 128px)",
      componentTokens: [
        "Acoustic Waveform Canvas",
        "Material Texture Switcher",
        "Interactive Room Layout Configurator",
        "Single-Column Sticky Checkout Drawer",
      ],
    },
    uiScreens: [
      {
        title: "Flagship Homepage & Spatial Hero",
        description:
          "Full-bleed architectural imagery paired with minimal typography and an interactive acoustic dispersion preview.",
        layoutType: "desktop",
        badge: "Editorial Hero",
      },
      {
        title: "Interactive System Configurator",
        description:
          "Modular selection interface allowing custom driver combinations with live acoustic dispersion heatmaps.",
        layoutType: "dashboard",
        badge: "Core Workflow",
      },
      {
        title: "Mobile Audio Profile Companion",
        description:
          "Touch-optimized frequency tuner and device pairing screen built for one-handed operation.",
        layoutType: "mobile",
        badge: "Mobile View",
      },
    ],
    responsiveApproach:
      "Mobile viewports transform the horizontal split-screen configurator into a stacked gesture-driven card deck with sticky bottom action trays.",
    challenges: [
      {
        challenge: "Rendering interactive 60fps acoustic waveform visualizations without degrading mobile CPU performance.",
        solution: "Implemented an optimized HTML5 Canvas loop decoupled from React state renders, utilizing requestAnimationFrame with throttling.",
      },
      {
        challenge: "Maintaining editorial typographic rhythm while supporting dynamic localized currency and multi-line descriptions.",
        solution: "Built a strict CSS Grid subgrid structure with CSS clamp() typography scales that maintain visual balance across any display width.",
      },
    ],
    learnings: [
      "High-end luxury e-commerce requires restraint: every decorative element must earn its place by communicating craftsmanship.",
      "Bridging design and front-end code early prevents interactive compromise during production handoff.",
    ],
    nextSlug: "wooden-clouds",
    prevSlug: "walkie-talkie-solution",
  },
  {
    slug: "wooden-clouds",
    title: "Wooden Clouds",
    number: "02",
    category: "Architecture & Spatial Design Editorial",
    year: "2024",
    client: "Wooden Clouds Architecture Lab",
    role: "Lead UI/UX Designer & Creative Technologist",
    timeline: "10 Weeks",
    tools: ["Figma", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    shortDescription:
      "An archival web monographs system for a contemporary sustainable architecture studio, honoring natural timber construction and raw textures.",
    heroHeadline:
      "A digital monograph celebrating sustainable timber architecture and quiet spaces.",
    heroSummary:
      "Wooden Clouds is a sustainable architecture and bio-climatic construction practice based between Scandinavia and Japan. They needed an archival digital portfolio that operated like a printed architectural monograph: spacious, tactile, uncluttered, and capable of showcasing large-scale structural blueprints alongside ambient photography.",
    problemStatement: {
      context:
        "Architectural practices often suffer from cookie-cutter grid templates that flatten the depth, scale, and material nuance of physical timber structures.",
      coreChallenge:
        "How can a digital archive convey physical scale, structural timber joints, and natural daylight changes throughout seasons without intrusive UI clutter?",
      keyObstacles: [
        "Studio's previous site felt like an agency brochure rather than a serious architectural monograph.",
        "No structured mechanism to explore project drawings (plans, elevations, sections) alongside completed photography.",
        "Sluggish page rendering when loading high-resolution architectural photography.",
      ],
    },
    goals: [
      "Design an expansive editorial layout inspired by Swiss architectural publications and El Croquis.",
      "Build a dual-mode viewer that allows seamless switching between ambient spatial photography and precise CAD orthographic drawings.",
      "Implement smooth scroll-linked image masking to evoke the gradual unveiling of an architectural interior.",
      "Create a systematic project index filterable by material, geography, and structural typology.",
    ],
    researchDiscovery: {
      methodology:
        "Analyzed architectural monographs, reviewed gallery exhibition catalogs, and interviewed 8 international curators and prospective institutional clients.",
      keyFindings: [
        {
          title: "Drawing Legibility",
          description:
            "Design directors and jury members inspect architectural sections and construction details before looking at render photography.",
        },
        {
          title: "Atmospheric Lighting",
          description:
            "The time-of-day and sunlight angle are fundamental to understanding timber materiality and volumetric atmosphere.",
        },
        {
          title: "Silent Navigation",
          description:
            "Navigation bars should recede during reading, allowing the photography and typography to dominate the viewport.",
        },
      ],
    },
    personas: [
      {
        role: "The Design Competition Juror",
        context: "Evaluating architectural submissions under tight time constraints.",
        painPoint: "Frustrated by animated popups, slow loading carousels, and missing technical drawings.",
        goal: "Requires instant access to clean high-resolution orthographic drawings and material specifications.",
      },
      {
        role: "The Private Residential Patron",
        context: "Commissioning a climate-responsive timber pavilion.",
        painPoint: "Wants to understand what living inside timber spaces feels like across changing daylight conditions.",
        goal: "Needs an immersive visual story highlighting wood joinery, light shadow play, and interior serenity.",
      },
    ],
    userJourney: [
      {
        phase: "Catalog Indexing",
        action: "Browses chronological project matrix filtered by timber species (Cedar, Larch, Hinoki).",
        insight: "Typographic filter bar provides immediate clarity without full page reloads.",
      },
      {
        phase: "Project Immersion",
        action: "Scrolls through full-width spatial photography with contextual caption pins.",
        insight: "Subtle sticky captions explain structural engineering nuances without breaking visual flow.",
      },
      {
        phase: "Blueprint Examination",
        action: "Toggles the 'Orthographic Layer' switch to view 1:100 scale sections and construction details.",
        insight: "Side-by-side drawing comparison bridges aesthetic photography with rigorous architectural documentation.",
      },
    ],
    wireframeNotes: [
      "Established a 12-column asymmetric grid with generous 120px gutters on widescreen displays.",
      "Positioned metadata in fixed vertical marginalia inspired by classic Swiss book design.",
      "Prototyped horizontal scroll galleries with spring-damped momentum scrolling.",
    ],
    designSystem: {
      primaryColor: "#171717 (Deep Black)",
      surfaceColor: "#F4F2ED (Japanese Washi Warmth)",
      accentColor: "#A8B7A3 (Pine Needle Sage)",
      typography: "Contemporary Editorial Sans with delicate hairline rules",
      spacingScale: "Monographic scale (12px, 24px, 48px, 96px, 144px)",
      componentTokens: [
        "Monograph Hero Header",
        "Orthographic Blueprint Switcher",
        "Marginalia Metadata Rail",
        "Spatial Photography Lightbox",
      ],
    },
    uiScreens: [
      {
        title: "Monograph Cover & Project Index",
        description:
          "High-contrast editorial typography with a full-bleed panoramic frame of timber pavilion structures.",
        layoutType: "desktop",
        badge: "Archive Showcase",
      },
      {
        title: "Split Orthographic & Photo Inspector",
        description:
          "Interactive dual-canvas comparing structural cross-sections with completed interior photography.",
        layoutType: "split",
        badge: "Technical Detail",
      },
      {
        title: "Mobile Editorial Reading Mode",
        description:
          "Distraction-free vertical narrative optimized for high-DPI smartphone screens.",
        layoutType: "mobile",
        badge: "Mobile Adaptation",
      },
    ],
    responsiveApproach:
      "Vertical marginalia collapses into collapsible inline accordions, prioritizing full-bleed photography and readable 18px body typography.",
    challenges: [
      {
        challenge: "Rendering large vector architectural CAD drawings crisply without slow SVG DOM parsing.",
        solution: "Pre-rendered vector layers into layered vector viewports with progressive level-of-detail loading.",
      },
      {
        challenge: "Preserving delicate editorial layout proportions across ultrawide monitors and compact laptop screens.",
        solution: "Used CSS max-width clamps and dynamic viewport units to ensure consistent typographic measure.",
      },
    ],
    learnings: [
      "In architectural editorial design, whitespace is not empty space—it represents silence and breath.",
      "Interactive technical drawings transform a portfolio from a passive photo album into an authoritative design statement.",
    ],
    nextSlug: "orange-industries",
    prevSlug: "koko",
  },
  {
    slug: "orange-industries",
    title: "Orange Industries",
    number: "03",
    category: "Industrial Telemetry & Operational OS",
    year: "2023",
    client: "Orange Industrial Robotics",
    role: "Senior Product Designer & UI Architect",
    timeline: "18 Weeks",
    tools: ["Figma", "React", "TypeScript", "Tailwind CSS", "Data Visualization"],
    shortDescription:
      "A unified control cockpit and predictive telemetry interface for automated heavy machinery fleets across distributed assembly hubs.",
    heroHeadline:
      "Bringing clarity, precision and safety to complex industrial telemetry systems.",
    heroSummary:
      "Orange Industries designs automated manufacturing lines and robotic fabrication units. Their legacy plant operator software was fractured across four separate Windows desktop applications built a decade ago. The project consolidated these tools into a unified web-based operational cockpit capable of rendering real-time sensor streams, vibration harmonics, and error alerts with sub-100ms latency.",
    problemStatement: {
      context:
        "Modern robotic manufacturing cells generate millions of telemetry points per minute. Machine operators were experiencing severe alert fatigue and delayed incident responses.",
      coreChallenge:
        "How might we design a unified operations interface that handles high-density live telemetry without cognitive overload or operator disorientation?",
      keyObstacles: [
        "Operators had to switch between three separate monitors to trace a single robotic actuator fault.",
        "Color was overused in legacy systems: everything was red, yellow, or bright green, destroying visual priority.",
        "No responsive tablet interface for technicians walking the active plant floor.",
      ],
    },
    goals: [
      "Unify plant telemetry, maintenance scheduling, and robot control into a cohesive single-pane interface.",
      "Design a rigorous dark-tint / neutral visual system where color is reserved strictly for operational state exceptions.",
      "Provide drill-down capability from plant-level bird's-eye status to individual micro-actuator torque graphs in under 2 clicks.",
      "Develop a touch-friendly tablet mode for on-site floor engineers carrying ruggedized hardware.",
    ],
    researchDiscovery: {
      methodology:
        "Shadowed 6 industrial shift operators and 4 maintenance technicians across two robotic assembly plants for 40 hours. Recorded incident response paths and alarm triage patterns.",
      keyFindings: [
        {
          title: "Alarm Blindness",
          description:
            "Over 120 alarms were triggered per hour; 91% were low-priority warnings that numbed operators to genuine critical threshold failures.",
        },
        {
          title: "Spatial Disconnect",
          description:
            "Operators struggle to correlate abstract sensor IDs (e.g., 'SRV-409B') with the physical robot arm in bay 3.",
        },
        {
          title: "High Contrast Needs",
          description:
            "Ambient factory lighting varies drastically between day and night shifts, necessitating extreme readability and crisp typographic contrasts.",
        },
      ],
    },
    personas: [
      {
        role: "The Plant Operations Lead",
        context: "Supervising 14 automated robotic cells during high-throughput shifts.",
        painPoint: "Drowning in non-actionable alarms; unable to quickly pinpoint which line is bottlenecking throughput.",
        goal: "Needs an at-a-glance health matrix and instant bottleneck root-cause diagnostics.",
      },
      {
        role: "The Floor Maintenance Technician",
        context: "Diagnosing mechanical actuator failures while standing beside running production lines.",
        painPoint: "Carrying heavy laptops onto factory floors because tablet software lacked detailed telemetry.",
        goal: "Needs touch-optimized diagnostics with 3D joint exploded views and one-tap calibration tests.",
      },
    ],
    userJourney: [
      {
        phase: "Monitoring",
        action: "Observes fleet overview matrix; status indicators remain calm neutral grey when parameters are within nominal tolerance.",
        insight: "Intentional lack of bright decorative color prevents operator sensory exhaustion.",
      },
      {
        phase: "Anomaly Triage",
        action: "Vibration threshold on Actuator 4 rises above nominal; cell pulses with amber warning beacon.",
        insight: "One-click contextual drawer reveals harmonic spectrum, thermal sensor readings, and recommended torque checks.",
      },
      {
        phase: "Intervention",
        action: "Technician commands graceful safe slowdown from tablet and confirms scheduled mechanical inspection.",
        insight: "Clear confirmation patterns prevent accidental plant-wide emergency stops while ensuring operator safety.",
      },
    ],
    wireframeNotes: [
      "Iterated through 5 dashboard layouts to find the ideal balance between high information density and cognitive scanability.",
      "Developed a custom modular widget grid with customizable telemetry slot positions.",
      "Tested high-contrast monospace typography for all numerical readouts to ensure zero character jitter during live updates.",
    ],
    designSystem: {
      primaryColor: "#171717 (Control Graphite)",
      surfaceColor: "#EAE8E1 (Industrial Paper)",
      accentColor: "#A8B7A3 (Nominal Status Green)",
      typography: "Modern Sans + Monospace Numerals for real-time telemetry",
      spacingScale: "Dense 4pt/8pt technical grid (4px, 8px, 12px, 16px, 24px, 32px)",
      componentTokens: [
        "Live Sensor Sparkline Grid",
        "3D Actuator Telemetry Hud",
        "Severity-Categorized Alarm Strip",
        "Machine State Transition Pill",
      ],
    },
    uiScreens: [
      {
        title: "Fleet Operations Command Center",
        description:
          "Multi-unit telemetry dashboard showing live cycle rates, thermal maps, and robotic line health across 14 cells.",
        layoutType: "dashboard",
        badge: "Operations Cockpit",
      },
      {
        title: "Actuator Harmonic Diagnostic Inspector",
        description:
          "High-frequency sensor telemetry graph with predictive maintenance anomaly indicators and historical overlay.",
        layoutType: "desktop",
        badge: "Diagnostic Tool",
      },
      {
        title: "Ruggedized Tablet Floor View",
        description:
          "High-contrast, large-target mobile interface designed for factory-floor safety and gloved touch interactions.",
        layoutType: "mobile",
        badge: "Tablet / Mobile",
      },
    ],
    responsiveApproach:
      "On compact screens, the multi-column data grid collapses into a priority-sorted card stack with prominent quick-action triage buttons.",
    challenges: [
      {
        challenge: "Streaming 30 live telemetry feeds simultaneously without causing browser UI re-renders or dropped frames.",
        solution: "Decoupled data ingestion using Web Workers and batch-rendered chart points to an offscreen Canvas.",
      },
      {
        challenge: "Establishing an alarm hierarchy that works in noisy factory environments with diverse operator color-vision abilities.",
        solution: "Combined shape primitives, dual-redundant iconography, and strict luminance contrast compliant with WCAG AAA.",
      },
    ],
    learnings: [
      "In enterprise industrial software, aesthetic restraint directly translates to human safety and error reduction.",
      "Real-world user testing on factory floors reveals environmental constraints that desk research can never predict.",
    ],
    nextSlug: "school-management-platform",
    prevSlug: "wooden-clouds",
  },
  {
    slug: "school-management-platform",
    title: "School Management Platform",
    number: "04",
    category: "EdTech System & Multi-Role Academic Portal",
    year: "2023",
    client: "Horizon Educational Consortium",
    role: "Lead Product Designer & UX Researcher",
    timeline: "16 Weeks",
    tools: ["Figma", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    shortDescription:
      "A human-centered educational operating system connecting 45,000+ students, faculty, and administrative directors with intuitive academic workflows.",
    heroHeadline:
      "Transforming complex academic bureaucracy into intuitive, student-first experiences.",
    heroSummary:
      "Horizon Educational Consortium manages 18 regional campuses with over 45,000 enrolled students. Their existing administrative software was an unmanageable amalgam of legacy ERP portals, manual spreadsheets, and physical paper forms. We designed an integrated digital campus system providing role-adaptive workspaces for students, instructors, and department heads.",
    problemStatement: {
      context:
        "Academic operations involve intricate, multi-layered permissions, regulatory grading frameworks, and time-sensitive enrollment windows.",
      coreChallenge:
        "How can an academic management system serve wildly different user groups—from exhausted professors grading papers to nervous first-year students registering for classes—without feeling overwhelming or generic?",
      keyObstacles: [
        "Course registration periods repeatedly overwhelmed students with confusing prerequisite error codes.",
        "Instructors spent an average of 4.5 hours per week manually calculating and re-entering grades across disjointed spreadsheets.",
        "Parents and guardians lacked clear, timely visibility into attendance and academic support interventions.",
      ],
    },
    goals: [
      "Create a unified design system with role-specific views (Student, Faculty, Dean, Registrar).",
      "Redesign the course enrollment flow with interactive visual degree audit pathfinding.",
      "Build a keyboard-friendly speed-grading interface that cut grading overhead for professors by 50%.",
      "Ensure full accessibility compliance (WCAG 2.1 AA) for students with visual and motor disabilities.",
    ],
    researchDiscovery: {
      methodology:
        "Conducted 24 contextual inquiry sessions across 3 campuses: 10 students, 8 faculty members, 4 registrars, and 2 academic advisors.",
      keyFindings: [
        {
          title: "Registration Anxiety",
          description:
            "Students described course enrollment day as high-stress 'rush hour' where confusing prerequisite warnings led to dropped terms.",
        },
        {
          title: "Grading Repetition",
          description:
            "Faculty members required repetitive mouse clicks for simple score submissions, longing for rapid keyboard navigation.",
        },
        {
          title: "Communication Gaps",
          description:
            "Advisors could not see holistic student context (attendance, financial holds, prerequisites) in one unified screen.",
        },
      ],
    },
    personas: [
      {
        role: "The Undergraduate Student",
        context: "Navigating graduation requirements while juggling coursework and part-time employment.",
        painPoint: "Unclear prerequisite chains leading to accidental semester delays and scheduling conflicts.",
        goal: "Needs an interactive visual degree planner that validates graduation pathways in real time.",
      },
      {
        role: "The University Professor",
        context: "Teaching 3 lecture sections with 180 total students while conducting research.",
        painPoint: "Time wasted entering grades one student at a time into sluggish, multi-click dialog boxes.",
        goal: "Needs a streamlined gradebook with spreadsheet-style inline editing and keyboard shortcuts.",
      },
    ],
    userJourney: [
      {
        phase: "Degree Auditing",
        action: "Student opens Academic Roadmap; visual prerequisite tree highlights completed, in-progress, and missing credits.",
        insight: "Visual dependency graph eliminates confusion regarding core requirements.",
      },
      {
        phase: "Course Scheduling",
        action: "Drags potential classes into a weekly calendar matrix; conflict engine flags overlapping lab sessions automatically.",
        insight: "One-click 'Register All' submits schedule seamlessly during open enrollment window.",
      },
      {
        phase: "Evaluation & Feedback",
        action: "Instructor opens grading queue and grades submissions sequentially using 'Enter' and 'Tab' keys.",
        insight: "Instant auto-saving and clear status indicators eliminate fears of lost grading work.",
      },
    ],
    wireframeNotes: [
      "Tested both table-first and card-first gradebook layouts; table-first proved 3.2x faster for bulk data entry.",
      "Designed an intelligent breadcrumb system allowing deans to navigate between college, department, course, and individual student profiles effortlessly.",
      "Prototyped accessible color contrast pairings for schedule conflict warnings that do not rely solely on color.",
    ],
    designSystem: {
      primaryColor: "#171717 (Academic Ink)",
      surfaceColor: "#F4F2ED (Parchment White)",
      accentColor: "#A8B7A3 (Library Sage)",
      typography: "Clean Contemporary Sans with high-contrast tabular numerals",
      spacingScale: "Systematic 8pt spacing system (8px, 16px, 24px, 32px, 48px)",
      componentTokens: [
        "Interactive Degree Pathway Graph",
        "High-Speed Gradebook Grid",
        "Conflict-Aware Weekly Schedule Planner",
        "Role-Adaptive Global Navigation Bar",
      ],
    },
    uiScreens: [
      {
        title: "Student Degree Planner & Schedule Matrix",
        description:
          "Visual interactive roadmap mapping remaining course requirements against live weekly scheduling slots.",
        layoutType: "desktop",
        badge: "Student Portal",
      },
      {
        title: "Faculty High-Speed Evaluation Grid",
        description:
          "Keyboard-driven gradebook interface featuring inline formula calculations, rubric sliders, and bulk submissions.",
        layoutType: "dashboard",
        badge: "Faculty Workspace",
      },
      {
        title: "Mobile Campus Schedule & Attendance Badge",
        description:
          "Student companion app featuring daily class schedule, campus navigation pins, and instant advisor messaging.",
        layoutType: "mobile",
        badge: "Mobile App",
      },
    ],
    responsiveApproach:
      "Complex multi-column gradebooks gracefully transform into focused student-by-student inspection cards with quick-swipe grading gestures on mobile and tablet devices.",
    challenges: [
      {
        challenge: "Accommodating deeply nested multi-role permissions without creating cumbersome navigation silos.",
        solution: "Engineered a context-aware permission switcher that preserves current filter state when elevating role views.",
      },
      {
        challenge: "Rendering large-scale interactive degree path graphs with dozens of branching prerequisite nodes smoothly.",
        solution: "Built a custom SVG layout engine with virtualized node rendering that scales effortlessly from 10 to 500 courses.",
      },
    ],
    learnings: [
      "In enterprise EdTech, designing for the most stressed user (the student during finals or the professor at grade deadline) ensures clarity for everyone.",
      "Keyboard accessibility and power-user ergonomics are not luxury features—they are core productivity drivers.",
    ],
    nextSlug: "walkie-talkie-solution",
    prevSlug: "orange-industries",
  },
  {
    slug: "walkie-talkie-solution",
    title: "Walkie-Talkie Solution",
    number: "05",
    category: "Hardware-Software Push-to-Talk Mobile App",
    year: "2022",
    client: "VocalStream Telecommunications",
    role: "Lead Mobile UI/UX Designer & Prototyper",
    timeline: "12 Weeks",
    tools: ["Figma", "React Native", "TypeScript", "Tailwind CSS", "Audio Engineering"],
    shortDescription:
      "A mission-critical push-to-talk communications suite designed for high-stress emergency response, industrial logistics, and field security teams.",
    heroHeadline:
      "Zero-latency push-to-talk communication for critical field operations.",
    heroSummary:
      "VocalStream designs enterprise communication hardware and software for field personnel, airport ground crews, and emergency responders. Traditional hardware walkie-talkies are bulky and lack digital encryption, while standard VoIP apps are far too complex for urgent, high-stress situations. We designed a next-generation push-to-talk mobile application combining the instant muscle-memory of physical two-way radios with modern digital spatial audio and fleet location tracking.",
    problemStatement: {
      context:
        "Field workers operating in hazardous environments (airports, oil rigs, security patrols) require sub-second voice transmission without looking at screens.",
      coreChallenge:
        "How can a mobile software application replicate the infallible physical feedback and zero-latency reliability of a hardware walkie-talkie while adding modern fleet telemetry?",
      keyObstacles: [
        "Accidental transmissions in pockets or when handling devices with work gloves.",
        "Unclear channel state feedback when multiple channels transmitted voice packets concurrently.",
        "Inability to review missed emergency broadcasts in loud, noisy industrial environments.",
      ],
    },
    goals: [
      "Design a thumb-driven, high-contrast PTT interface operable without direct screen gaze.",
      "Incorporate distinct haptic and acoustic confirmation patterns for transmission start, transmission queued, and channel busy states.",
      "Build an instant 30-second voice buffer playback mechanism allowing workers to replay critical instructions.",
      "Support both dedicated physical hardware PTT buttons (via BLE) and software screen triggers seamlessly.",
    ],
    researchDiscovery: {
      methodology:
        "Conducted usability testing with 14 field professionals including airport ramp controllers, logistics dispatchers, and event security personnel in high-noise simulated conditions.",
      keyFindings: [
        {
          title: "Gloved Usability",
          description:
            "Standard mobile touch targets (44px) resulted in 42% mis-touches when operators wore standard industrial work gloves.",
        },
        {
          title: "Audio Channel Confusion",
          description:
            "When monitoring multiple channels simultaneously, operators could not distinguish which department was calling without looking down.",
        },
        {
          title: "Eyes-Free Operation",
          description:
            "85% of successful transmissions occur while the operator's gaze is directed at their physical environment rather than the smartphone screen.",
        },
      ],
    },
    personas: [
      {
        role: "The Airport Ramp Supervisor",
        context: "Directing aircraft turnaround operations on noisy tarmac in extreme weather conditions.",
        painPoint: "Cannot look down at a phone screen while heavy machinery and jet engines operate nearby.",
        goal: "Needs immediate audio haptics confirming their transmission went through clearly to ground crew.",
      },
      {
        role: "The Security Dispatch Coordinator",
        context: "Managing 30+ roving security officers across a multi-building commercial facility.",
        painPoint: "Difficult to track which channel has priority during an active alarm trigger.",
        goal: "Needs an emergency broadcast override that cuts through all non-critical chatter instantly.",
      },
    ],
    userJourney: [
      {
        phase: "Channel Selection",
        action: "Swipes thumb across lower screen edge or clicks hardware dial to switch between 'Security' and 'Operations'.",
        insight: "Distinct haptic click pattern identifies channels by touch alone without looking at the screen.",
      },
      {
        phase: "Push-to-Talk Transmission",
        action: "Depresses primary PTT zone or physical side button; subtle chime and solid haptic pulse confirm live mic.",
        insight: "Full-screen edge glow changes to vibrant amber, providing clear peripheral visual confirmation.",
      },
      {
        phase: "Audio Replay & Transcription",
        action: "Missed a call due to jet engine noise; swipes back on the timeline ribbon to replay last 15 seconds.",
        insight: "On-device speech-to-text transcript provides instantaneous visual confirmation of coordinates.",
      },
    ],
    wireframeNotes: [
      "Explored full-screen press zones versus centered oversized buttons; full lower-half touch target eliminated mis-touches.",
      "Designed spatial audio panning: Channel A plays in left ear, Channel B in right ear, making multi-channel monitoring effortless.",
      "Created an emergency 'SOS Channel Takeover' gesture requiring intentional two-finger press-and-hold to prevent false alarms.",
    ],
    designSystem: {
      primaryColor: "#171717 (Tactical Carbon)",
      surfaceColor: "#EAE8E1 (Industrial Sand)",
      accentColor: "#A8B7A3 (Radio Sage)",
      typography: "Ultra-Legible Sans + High-Visibility Tactical Monospace",
      spacingScale: "Tactile touch targets (minimum 64px interactive regions)",
      componentTokens: [
        "Full-Viewport PTT Touch Trigger",
        "Tactical Channel Switcher Wheel",
        "Spatial Audio Channel Balancer",
        "Audio Buffer Replay Scrub Bar",
      ],
    },
    uiScreens: [
      {
        title: "Active Channel Push-To-Talk Main Screen",
        description:
          "Massive ergonomic touch target with live audio waveform, peripheral state glow, and instant emergency override.",
        layoutType: "mobile",
        badge: "Primary PTT Interface",
      },
      {
        title: "Fleet Channel Matrix & Spatial Audio Mixer",
        description:
          "Multi-channel dispatcher view allowing spatial separation of voice feeds between left and right audio channels.",
        layoutType: "desktop",
        badge: "Dispatch Console",
      },
      {
        title: "Emergency Broadcast & Audio Transcription Buffer",
        description:
          "Quick-scrub audio buffer displaying live speech-to-text transcripts with high-contrast tactical readability.",
        layoutType: "split",
        badge: "Field Replay",
      },
    ],
    responsiveApproach:
      "Engineered specifically for mobile viewports with single-handed thumb reachability maps. Desktop dispatcher interface provides multi-frequency tactical console controls.",
    challenges: [
      {
        challenge: "Achieving ultra-low latency audio buffering on unstable 4G/LTE mobile networks in industrial facilities.",
        solution: "Implemented WebRTC media pipelines with Opus dynamic bitrate scaling and adaptive jitter buffering.",
      },
      {
        challenge: "Ensuring zero screen-on battery drain during continuous 12-hour factory shifts.",
        solution: "Engineered an ultra-low-power standby mode utilizing OLED black pixels and hardware BLE interrupt triggers.",
      },
    ],
    learnings: [
      "In mission-critical mobile design, haptic and auditory feedback are just as vital as graphical pixels.",
      "Ergonomics must account for gloves, glare, moisture, and extreme stress—designing for extremes improves everyday usability for everyone.",
    ],
    nextSlug: "koko",
    prevSlug: "school-management-platform",
  },
];
