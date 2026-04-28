export const siteConfig = {
  name: "Pratik Sahu",
  role: "Frontend Engineer",
  tagline: "I build frontend systems where speed is a feature, not an afterthought.",
  description:
    "Frontend Engineer crafting performant, scalable interfaces. Specializing in Next.js, TypeScript, and measurable UX improvements.",
  email: "sahupratik30@gmail.com",
  phone: "+91 7608998089",
  github: "https://github.com/sahupratik30",
  linkedin: "https://www.linkedin.com/in/pratiksahu01/",
  twitter: "https://twitter.com/pratiksahu",
  location: "New Town, Kolkata",
  url: "https://pratiksahu.netlify.app",
};

export const techStack = [
  "Next.js",
  "TypeScript",
  "React",
  "TailwindCSS",
  "Framer Motion",
  "Redux",
  "Node.js",
  "PostgreSQL",
  "Figma",
];

export const heroMetrics = [
  { value: "yoe", label: "Years building products" },
  { value: "1.2M+", label: "Users impacted" },
  { value: "100%", label: "Conversion lift achieved" },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  type: "Full-time" | "Contract";
  context: string;
  scale: string;
  contributions: { title: string; detail: string }[];
  impact: { metric: string; description: string }[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    id: "theqa",
    company: "Quantech Associates Pvt. Ltd.",
    role: "Frontend Engineer",
    period: "Apr 2025 — Present",
    type: "Full-time",
    context:
      "Quantech Associates is a service-based company. As a frontend engineer here, I am currently working on a client project — a large-scale home services platform operating a subscription model for HVAC, water heating, and plumbing equipment rentals. With 1.2M+ active customers, the platform's customer portal handles service bookings, technician scheduling, and rental agreement transfers at high volume.",
    scale: "1.2M+ customers",
    contributions: [
      {
        title: "Redesigned the critical Moves flow end-to-end",
        detail:
          "Led the redesign of the customer Moves flow — a high-stakes form used by renters and homeowners to transfer or close rental agreements. Rebuilt it as a multi-step React form with per-step progressive validation and Redux Persist–backed state management, so users never lose progress mid-flow.",
      },
      {
        title: "Revamped the service booking experience",
        detail:
          "Overhauled the booking flow used by 1.2M+ active customers to schedule technicians for HVAC, plumbing, and water heating services. Focused on reducing friction at each step — cleaner inputs, inline validation, and a persistent progress indicator that cut drop-off significantly.",
      },
      {
        title: "Built a reusable component-driven UI library",
        detail:
          "Engineered a shared UI library using shadcn/ui, TailwindCSS, and Storybook to standardise components across the platform. The library enforced design consistency, enabled cross-browser compatibility, and gave the team a documented component catalogue that cut UI development time by 30%.",
      },
      {
        title: "Frontend performance optimisation across the portal",
        detail:
          "Audited and improved page load performance through lazy loading, route-level code splitting, and API integration refinements. The improvements had a measurable impact on booking conversion rates, particularly on mobile and lower-bandwidth connections.",
      },
    ],
    impact: [
      { metric: "100%", description: "increase in successful move submissions" },
      { metric: "+13%", description: "increase in successful bookings" },
      { metric: "30%", description: "reduction in UI development time" },
    ],
    tech: [
      "React",
      "Redux Toolkit",
      "Redux Persist",
      "shadcn/ui",
      "TailwindCSS",
      "Storybook",
      "TypeScript",
    ],
  },
  {
    id: "logicsquare",
    company: "Logic Square Technologies",
    role: "Frontend Engineer",
    period: "Feb 2023 — Apr 2025",
    type: "Full-time",
    context:
      "Logic Square Technologies is a service-based company. During my time here, I was part of the team working on a client project — Grouped, a social music discovery platform for indie artists and listeners. With 20K+ active users, the challenge was architecting features that could scale reliably while keeping the feed performant and the codebase maintainable.",
    scale: "20K+ users",
    contributions: [
      {
        title: "Led frontend development on Grouped",
        detail:
          "Led frontend development on Grouped — a client-facing social music platform for indie artists. Built core features using Next.js, TypeScript, and Redux Toolkit, establishing patterns for scalable state management and component reuse across the app.",
      },
      {
        title: "Infinite scrolling and dynamic pagination",
        detail:
          "Implemented intersection-observer-powered infinite scrolling with dynamic pagination across the music feed. The experience felt native and instant, increasing average session length by 25% and meaningfully improving user retention.",
      },
      {
        title: "Custom reusable video player in React",
        detail:
          "Built a fully custom video player component from scratch, replacing a bloated third-party library. The reusable component reduced technical debt, eliminated an unnecessary dependency, and cut integration time by 40% across multiple projects that adopted it.",
      },
      {
        title: "Reusable form validation hook",
        detail:
          "Developed a standardised form validation hook that was reused across 5+ projects within the company. It centralised validation logic, enforced consistent error handling patterns, and reduced repetitive boilerplate by 20% — making new form implementations significantly faster.",
      },
    ],
    impact: [
      { metric: "+25%", description: "increase in average session duration" },
      { metric: "40%", description: "faster integration across projects" },
      { metric: "20%", description: "reduction in form boilerplate" },
    ],
    tech: ["Next.js", "TypeScript", "React", "Redux Toolkit", "TailwindCSS"],
  },
  {
    id: "makos",
    company: "Makos Infotech Pvt. Ltd.",
    role: "UI Developer Intern",
    period: "Apr 2022 — Oct 2022",
    type: "Contract",
    context:
      "Makos Infotech is a Chennai-based IT solutions company offering web development, staff augmentation, HR services, and digital consulting. As a UI developer intern, I worked on Jobaskit — their in-house recruitment product built to streamline the hiring process using collaborative intelligence.",
    scale: "In-house Product",
    contributions: [
      {
        title: "Built Jobaskit — a recruitment platform from scratch",
        detail:
          "Developed Jobaskit, a collaborative intelligence-based recruitment platform, entirely from the ground up using HTML, CSS, JavaScript, and Bootstrap. Took it from zero to a fully functional product, owning the entire frontend implementation end-to-end.",
      },
      {
        title: "Admin dashboard for user data management",
        detail:
          "Built a clean, intuitive admin dashboard using JavaScript and Bootstrap that gave the operations team full visibility and control over user data. Focused on making complex data management tasks feel simple and fast through clear information hierarchy and responsive layout.",
      },
      {
        title: "Performance optimisation via lazy loading",
        detail:
          "Identified performance bottlenecks in the initial page load and implemented lazy loading across assets and components. The result was a 200ms improvement in load time — a meaningful gain that made the platform feel noticeably snappier on first visit.",
      },
    ],
    impact: [
      { metric: "200ms", description: "reduction in average load time" },
      { metric: "92", description: "Lighthouse performance score (up from 61)" },
      {
        metric: "3×",
        description: "faster initial render on low-bandwidth connections",
      },
    ],
    tech: ["React", "JavaScript", "Chart.js", "CSS Modules", "REST APIs"],
  },
  {
    id: "ziroh",
    company: "Ziroh Labs",
    role: "Project Intern",
    period: "Feb 2022 — Apr 2022",
    type: "Contract",
    context:
      "Ziroh Labs (now Kompact AI) is a deep-tech startup building privacy-preserving compute infrastructure — enabling AI and data processing without exposing raw data. As a project intern during college, I worked on a developer-facing search interface where input responsiveness and low latency were hard requirements, not nice-to-haves.",
    scale: "Deep Tech",
    contributions: [
      {
        title: "Autocomplete engine with fuzzy matching",
        detail:
          "Built a search-as-you-type autocomplete component with fuzzy matching and keyboard navigation. Implemented using a trie data structure on the client for instant suggestions on cached results.",
      },
      {
        title: "Spell-check with debounced correction API",
        detail:
          "Integrated a spell-check layer with 300ms input debouncing. This batched requests and eliminated redundant API calls, significantly reducing server load and latency.",
      },
      {
        title: "Input performance profiling",
        detail:
          "Profiled keypress-to-render latency using the Chrome Performance tab. Identified and eliminated unnecessary re-renders in the suggestion list, cutting response time by 30%.",
      },
    ],
    impact: [
      { metric: "30%", description: "faster search response time" },
      { metric: "~80%", description: "reduction in redundant API requests" },
      { metric: "300ms", description: "debounce window — optimal UX threshold" },
    ],
    tech: [
      "React",
      "JavaScript",
      "Debouncing",
      "Trie Data Structure",
      "REST APIs",
      "Chrome DevTools",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  impactLabel: string;
  github?: string;
  live?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "devflow",
    name: "DevFlow",
    tagline: "GitHub-integrated PR review dashboard",
    problem:
      "Developers spent 40+ minutes daily context-switching between GitHub, Slack, and Jira to stay on top of review queues.",
    solution:
      "Built a unified PR review dashboard that aggregates review requests, CI status, and team notifications. Real-time updates via WebSocket, keyboard-first navigation.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSockets"],
    impact: "40min",
    impactLabel: "saved per developer per day",
    github: "https://github.com/pratiksahu/devflow",
    gradient: "from-amber-900/20 to-transparent",
  },
  {
    id: "perf-lens",
    name: "PerfLens",
    tagline: "Visual Core Web Vitals analyzer",
    problem:
      "Teams had Lighthouse scores but no actionable insight on which components were degrading LCP, FID, or CLS in production.",
    solution:
      "Created a CLI + dashboard that instruments React components with PerformanceObserver, traces slow renders to source files, and generates component-level CWV reports.",
    tech: ["React", "TypeScript", "PerformanceObserver API", "D3.js", "Node.js"],
    impact: "3×",
    impactLabel: "faster performance debugging",
    github: "https://github.com/pratiksahu/perflens",
    gradient: "from-emerald-900/20 to-transparent",
  },
  {
    id: "formcraft",
    name: "FormCraft",
    tagline: "Type-safe form builder with live preview",
    problem:
      "Building forms in complex apps meant writing boilerplate for validation, error states, and accessibility attributes repeatedly across projects.",
    solution:
      "Open-source form builder with a drag-and-drop schema editor, Zod-powered validation, and generated TypeScript types. Exports clean React code or JSON schema.",
    tech: ["React", "TypeScript", "Zod", "TailwindCSS", "@dnd-kit", "Framer Motion"],
    impact: "60%",
    impactLabel: "less form boilerplate",
    github: "https://github.com/pratiksahu/formcraft",
    live: "https://formcraft.dev",
    gradient: "from-blue-900/20 to-transparent",
  },
  {
    id: "tokenbase",
    name: "TokenBase",
    tagline: "Design token management system",
    problem:
      "Design and engineering teams operated from diverging sources of truth for colors, spacing, and typography — causing costly inconsistencies at release.",
    solution:
      "Built a token management tool that syncs Figma variables to a token registry, generates platform-specific outputs (CSS, Tailwind, iOS, Android), and flags breaking changes in PRs.",
    tech: ["Next.js", "Figma Plugin API", "TypeScript", "Node.js", "GitHub API"],
    impact: "0",
    impactLabel: "design-dev sync issues post-launch",
    github: "https://github.com/pratiksahu/tokenbase",
    gradient: "from-purple-900/20 to-transparent",
  },
];

export const skills = {
  languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Sass"],
  frameworks: ["React.js", "Next.js", "Redux Toolkit", "TailwindCSS", "Bootstrap", "shadcn/ui"],
  testing: ["Jest", "React Testing Library", "Cypress"],
  tools: ["Git", "GitHub", "Figma", "Storybook", "Postman", "VS Code", "NPM", "CI/CD"],
  core: [
    "Responsive Web Design",
    "REST API Integration",
    "Component-Driven Development",
    "Performance Optimization",
    "Accessibility (a11y)",
    "Cross-Browser Compatibility",
    "Agile/Scrum",
  ],
};
