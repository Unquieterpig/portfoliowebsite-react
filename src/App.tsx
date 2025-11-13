import { useEffect, useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "FutureWeb Studio",
    period: "2023 — Present",
    description:
      "Leading the development of design systems and interactive customer journeys for enterprise clients across fintech and health tech.",
    highlights: [
      "Scaled component library adoption to 7 product teams.",
      "Shipped 30% faster by automating accessibility QA.",
      "Mentored engineers in modern React patterns.",
    ],
  },
  {
    role: "Product Engineer",
    company: "Pixel Dynamics",
    period: "2020 — 2023",
    description:
      "Designed and built performant marketing sites and dashboard experiences with close partnership alongside design and growth teams.",
    highlights: [
      "Increased conversion by 18% with data-driven experiments.",
      "Implemented design system with shadcn/ui foundations.",
      "Improved Lighthouse performance scores to 95+.",
    ],
  },
];

const projects = [
  {
    name: "Aura Analytics",
    category: "AI Insights",
    summary:
      "A data storytelling platform that translates analytics into actionable narratives for product teams.",
    link: "https://github.com/Unquieterpig",
    tags: ["React", "Vite", "Tailwind", "OpenAI"],
  },
  {
    name: "Flow State UI",
    category: "Design System",
    summary:
      "Composable component library built on top of shadcn/ui primitives, shipped with documentation and theming support.",
    link: "https://github.com/Unquieterpig",
    tags: ["TypeScript", "Storybook", "Radix"],
  },
  {
    name: "Voyager Portfolio",
    category: "Web Experience",
    summary:
      "An immersive personal brand site featuring motion design, interactive case studies, and contact automation.",
    link: "https://github.com/Unquieterpig",
    tags: ["Framer Motion", "Remix", "Netlify"],
  },
];

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Design Systems",
  "Accessibility",
  "Motion Design",
  "UX Writing",
];

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    const stored = window.localStorage.getItem("portfolio-theme") as Theme | null;
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="border-border"
    >
      <span className="sr-only">
        Switch to {theme === "light" ? "dark" : "light"} mode
      </span>
      <svg
        className="h-5 w-5 text-foreground"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {theme === "light" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </>
        ) : (
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        )}
      </svg>
    </Button>
  );
}

function App() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="flex min-h-screen flex-col">
      <SkipToContent />
      <SiteHeader />
      <main id="content" className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <SiteFooter currentYear={currentYear} />
    </div>
  );
}

function SkipToContent() {
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
    >
      Skip to content
    </a>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold shadow-sm">
            JP
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Joshua Partridge
            </span>
            <p className="text-xs text-muted-foreground">
              Software Engineer
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              className="text-muted-foreground transition-colors hover:text-foreground"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="default" className="hidden md:inline-flex">
            <a href="#contact">Schedule a call</a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="container grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24"
    >
      <div className="space-y-6">
        <Badge variant="primary" className="rounded-lg px-4 py-2">
          Available for new collaborations in 2025
        </Badge>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Crafting immersive web experiences that convert and delight.
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            I blend product strategy, design systems, and engineering craft to
            bring digital stories to life for ambitious teams. Let&apos;s build
            something people remember.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <a href="#projects">View recent work</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:hello@unquieterpig.com">Download résumé</a>
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />
        <div className="relative rounded-3xl border bg-card/60 p-8 shadow-xl backdrop-blur">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-muted-foreground">
              Capabilities snapshot
            </h2>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li className="rounded-xl border border-border/80 bg-background/60 px-4 py-3 shadow-sm">
                End-to-end product design
              </li>
              <li className="rounded-xl border border-border/80 bg-background/60 px-4 py-3 shadow-sm">
                Accessible component systems
              </li>
              <li className="rounded-xl border border-border/80 bg-background/60 px-4 py-3 shadow-sm">
                Marketing & growth tooling
              </li>
              <li className="rounded-xl border border-border/80 bg-background/60 px-4 py-3 shadow-sm">
                Performance optimization
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="container space-y-6 rounded-3xl border border-border/70 bg-card/50 px-6 py-16 shadow-sm backdrop-blur md:px-12"
    >
      <Badge variant="outline" className="px-3 py-1">
        About
      </Badge>
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Building with empathy and precision.
          </h2>
          <p className="text-base text-muted-foreground">
            I specialise in end-to-end product delivery, from shaping early
            discovery to crafting high-polish interfaces that feel effortless.
            My toolkit balances strategy, design, and engineering to create
            experiences that move metrics without sacrificing character.
          </p>
          <p className="text-base text-muted-foreground">
            With over 6 years in the industry, I&apos;ve helped startups launch
            faster, scale-ups mature their platforms, and global brands stand
            out online. I love partnering with teams who care deeply about
            craft.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl border border-border/60 bg-background/60 p-6 shadow-inner">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What partners say
          </h3>
          <blockquote className="space-y-3 text-sm text-muted-foreground">
            <p>
              “Joshua takes a seed of an idea and grows it into rich,
              thoughtful experiences. They sweat the details and always know how
              to connect design intent with technical reality.”
            </p>
            <footer className="text-xs font-medium text-foreground">
              — Director of Product Design, Pixel Dynamics
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="container space-y-6 py-16 md:py-24">
      <Badge variant="outline" className="px-3 py-1">
        Experience
      </Badge>
      <div className="grid gap-6 md:grid-cols-2">
        {experience.map((item) => (
          <Card key={item.role} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{item.role}</CardTitle>
                <Badge variant="default">{item.period}</Badge>
              </div>
              <CardDescription>{item.company}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="container space-y-6 py-16 md:py-24">
      <Badge variant="outline" className="px-3 py-1">
        Projects
      </Badge>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="group relative overflow-hidden border-border/50 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <CardHeader className="relative">
              <Badge
                variant="primary"
                className="w-fit px-3 py-1 text-xs font-medium uppercase"
              >
                {project.category}
              </Badge>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.summary}</CardDescription>
            </CardHeader>
            <CardContent className="relative flex flex-1 flex-col justify-between space-y-4">
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="px-2 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button asChild variant="ghost" className="self-start">
                <a href={project.link} target="_blank" rel="noreferrer">
                  Explore case study →
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="container space-y-6 rounded-3xl border border-dashed border-border/70 bg-background/60 px-6 py-16 md:px-12"
    >
      <Badge variant="outline" className="px-3 py-1">
        Skills
      </Badge>
      <div className="grid gap-6 md:grid-cols-[1fr,2fr] md:items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A stack tailored for storytelling and scale.
          </h2>
          <p className="text-base text-muted-foreground">
            I design systems that scale across products while staying flexible
            enough to support experimentation. Accessibility, performance, and
            maintainability are non-negotiable.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="default"
              className="rounded-full px-3 py-2 text-xs uppercase tracking-wider"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="container space-y-6 py-16 md:py-24">
      <Badge variant="outline" className="px-3 py-1">
        Contact
      </Badge>
      <div className="space-y-6 md:max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Have an idea worth exploring?
        </h2>
        <p className="text-base text-muted-foreground">
          Share a little context and I&apos;ll get back within two business days. Prefer email? Reach
          out directly at{" "}
          <a
            href="mailto:hello@unquieterpig.com"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            hello@unquieterpig.com
          </a>
          . Want to chat live? Book a short call and we&apos;ll explore fit together.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </Button>
        <Button asChild variant="outline">
          <a href="https://github.com/Unquieterpig" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Button>
        <Button asChild>
          <a
            href="https://cal.com"
            target="_blank"
            rel="noreferrer"
          >
            Schedule a call
          </a>
        </Button>
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ currentYear }: { currentYear: number }) {
  return (
    <footer className="border-t border-border/60 bg-background/70 py-10">
      <div className="container flex flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {currentYear} Joshua Partridge. Crafted with love.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Unquieterpig/portfoliowebsite-react"
            className="hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            View source
          </a>
          <a href="#contact" className="hover:text-foreground">
            Let&apos;s collaborate
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;

