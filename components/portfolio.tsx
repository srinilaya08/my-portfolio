"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Code2, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Python",
  "Git & GitHub",
  "Socket.IO",
  "Docker",
];

const projects = [
  {
    number: "01",
    title: "CodeLab",
    description:
      "A browser-based collaborative coding platform with rooms, real-time code synchronization, chat, and account attribution.",
    tags: ["React", "Node.js", "Socket.IO", "Monaco"],
    accent: "from-amber-100 via-orange-50 to-rose-100",
    slug: "codelab",
    href: "https://github.com/srinilaya08/CodeLab",
    deploy: "yes",
  },
  {
    number: "02",
    title: "Gym Enquiry Portal",
    description:
      "A reusable gym management and enquiry platform with membership plans, protected admin tools, CRUD workflows, and RLS.",
    tags: ["Next.js", "Supabase", "PostgreSQL"],
    accent: "from-sky-100 via-cyan-50 to-indigo-100",
    slug: "gym-enquiry-portal",
    href: "https://github.com/srinilaya08/gym-website-enquiry-portal",
    deploy: "yes",
  },
  {
    number: "03",
    title: "TextUtils",
    description:
      "A responsive React text utility app for formatting, counts, reading time, copy actions, dark mode, and more.",
    tags: ["React.js", "JavaScript", "Bootstrap"],
    accent: "from-lime-100 via-emerald-50 to-teal-100",
    slug: "textutils",
    href: "https://textutils-tau-seven.vercel.app",
    deploy: "yes",
  },
];

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("marripallisrinilaya8@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#17221e] selection:bg-[#c8f169] selection:text-[#17221e]">
      <header className="sticky top-0 z-20 border-b border-[#17221e]/10 bg-[#f7f7f4]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#top"
            className="flex items-center gap-2 text-sm font-bold tracking-tight"
            aria-label="Srinilaya Marripalli home"
          >
            <span className="grid size-8 place-items-center rounded-full bg-[#17221e] text-xs font-bold text-[#c8f169]">
              SM
            </span>
            <span className="hidden sm:inline">Srinilaya Marripalli</span>
          </a>
          <nav
            className="hidden items-center gap-7 text-sm font-medium text-[#17221e]/65 md:flex"
            aria-label="Primary navigation"
          >
            <a className="transition-colors hover:text-[#17221e]" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-[#17221e]" href="#about">
              About
            </a>
            <a
              className="transition-colors hover:text-[#17221e]"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="transition-colors hover:text-[#17221e]"
              href="#contact"
            >
              Contact
            </a>
          </nav>
          <Button
            asChild
            className="hidden rounded-full bg-[#17221e] px-4 text-xs text-[#f7f7f4] hover:bg-[#294039] sm:inline-flex"
          >
            <a href="/resume.pdf"
            className="flex items-center gap-1.5 whitespace-nowrap">
              Download resume <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
          <button
            className="grid size-9 place-items-center rounded-full border border-[#17221e]/15 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            className="flex flex-col gap-4 border-t border-[#17221e]/10 px-5 py-5 text-sm font-medium md:hidden"
            aria-label="Mobile navigation"
          >
            <a href="#work" onClick={() => setMenuOpen(false)}>
              Work
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-28">
          <div>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#17221e]/15 bg-white/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#17221e]/65">
              <span className="size-1.5 rounded-full bg-[#6f9c2d]" /> Open to
              internships · 2026
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-[5.8rem]">
              I build useful things for{" "}
              <span className="text-[#6f9c2d]">curious people.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#17221e]/65">
              I&apos;m Srinilaya, a Computer Science and Engineering student
              building practical web applications and exploring AI/ML through
              hands-on projects.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="rounded-full bg-[#17221e] px-5 text-[#f7f7f4] hover:bg-[#294039]"
              >
                <a href="#work"
                 className="flex items-center gap-1.5 whitespace-nowrap">
                  See my work <ArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#17221e]/20 bg-transparent px-5"
              >
                <a href="#contact"
                 className="flex items-center gap-1.5 whitespace-nowrap">
                  Let&apos;s connect <Mail data-icon="inline-end" />
                </a>
              </Button>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#17221e]/55">
              <span>Based in Armoor, Telangana, India</span>
              <span className="hidden size-1 rounded-full bg-[#17221e]/30 sm:block" />
              <span>Open to software engineering opportunities</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
            <div className="relative aspect-[0.82] rotate-3 overflow-hidden rounded-[2rem] bg-[#17221e] p-5 shadow-[16px_18px_0_0_#dce8bb]">
              <div className="flex items-center justify-between text-[#c8f169]">
                <span className="font-mono text-xs">SRINILAYA / CSE</span>
                <span className="font-mono text-xs">01 — 04</span>
              </div>
              <div className="absolute inset-x-5 bottom-6">
                <div className="mb-5 h-px bg-[#c8f169]/35" />
                <p className="font-mono text-sm leading-6 text-[#f7f7f4]/75">
                  engineering
                  <br />
                  with intent.
                </p>
                <p className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#c8f169]">
                  CSE + WEB
                </p>
              </div>
              <div className="absolute right-8 top-20 grid size-32 place-items-center rounded-full border border-[#c8f169]/50">
                <div className="size-20 rounded-full border border-[#c8f169]/50" />
                <div className="absolute h-px w-40 rotate-45 bg-[#c8f169]/40" />
              </div>
            </div>
            <p className="mt-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#17221e]/45">
              Currently exploring · full-stack development
            </p>
          </div>
        </section>

        <section id="work" className="border-y border-[#17221e]/10 bg-white/50">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
            <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#6f9c2d]">
                  Selected work
                </p>
                <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Things I&apos;ve shipped.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-[#17221e]/55">
                A few projects where product thinking meets engineering craft.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-3xl border border-[#17221e]/10 bg-[#f7f7f4]"
                >
                  <div
                    className={`relative aspect-[1.25] bg-gradient-to-br ${project.accent} p-5`}
                  >
                    <span className="font-mono text-xs text-[#17221e]/60">
                      {project.number}
                    </span>
                    <a
                      href={`/projects/${project.slug}`}
                      aria-label={`View ${project.title} project details`}
                      className="absolute bottom-5 right-5 grid size-20 place-items-center rounded-full border border-[#17221e]/20 transition-transform duration-500 group-hover:rotate-45"
                    >
                      <ArrowUpRight className="size-7" />
                    </a>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#17221e]/60">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#17221e]/12 px-2.5 py-1 text-xs text-[#17221e]/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28"
        >
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#6f9c2d]">
              A little context
            </p>
            <h2 className="max-w-sm text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              More than a list of skills.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-xl leading-9 text-[#17221e]/75">
              I enjoy turning ideas into reliable, usable software. As a B.Tech
              CSE student at Kshatriya College of Engineering, I learn by
              building across frontend, backend, databases, authentication, and
              real-time systems.
            </p>
            <div className="mt-10 grid gap-8 border-t border-[#17221e]/10 pt-8 sm:grid-cols-2">
              <div>
                <p className="text-4xl font-semibold tracking-[-0.05em]">8.3/ 10</p>
                <p className="mt-2 text-sm text-[#17221e]/55">
                  Academic performance · B.Tech CSE
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold tracking-[-0.05em]">7+</p>
                <p className="mt-2 text-sm text-[#17221e]/55">
                  Projects and technical experiments
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="bg-[#17221e] text-[#f7f7f4]">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#c8f169]">
                  Experience
                </p>
                <h2 className="max-w-sm text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Where I&apos;ve learned by doing.
                </h2>
              </div>
              <div className="divide-y divide-white/15">
                {[
                  [
                    "Full-Stack Developer",
                    "CodeLab",
                    "Project experience",
                    "Built collaborative coding rooms with JWT authentication, Monaco Editor, Socket.IO synchronization, chat, and PostgreSQL.",
                  ],
                  [
                    "Web Developer",
                    "Gym Enquiry Portal",
                    "Project experience",
                    "Created a Next.js and Supabase portal with enquiry management, protected admin routes, CRUD workflows, and Row Level Security.",
                  ],
                  [
                    "Computer Science Student",
                    "Kshatriya College of Engineering",
                    "2023 — Present",
                    "Pursuing a Bachelor of Technology in Computer Science and Engineering with an academic performance of 83%.",
                  ],
                ].map(([role, company, date, detail]) => (
                  <div
                    key={role}
                    className="grid gap-3 py-7 sm:grid-cols-[1fr_1.2fr] sm:gap-8"
                  >
                    <div>
                      <h3 className="text-lg font-medium">{role}</h3>
                      <p className="mt-1 text-[#c8f169]">{company}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-white/45">
                        {date}
                      </p>
                      <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                        {detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#6f9c2d]">
                Toolbox
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.05em]">
                Things I use.
              </h2>
            </div>
            <div className="flex flex-wrap content-start gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#17221e]/15 px-4 py-2 text-sm text-[#17221e]/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-[#17221e]/10 bg-[#dce8bb]"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#6f9c2d]">
              Have a good problem?
            </p>
            <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
              Let&apos;s make something{" "}
              <span className="text-[#6f9c2d]">worth remembering.</span>
            </h2>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                onClick={copyEmail}
                className="rounded-full bg-[#17221e] px-5 text-[#f7f7f4] hover:bg-[#294039]"
              >
                {copied ? (
                  <Check data-icon="inline-start" />
                ) : (
                  <Mail data-icon="inline-start" />
                )}{" "}
                {copied ? "Email copied" : "marripallisrinilaya8@gmail.com"}
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#17221e]/20 bg-transparent"
              >
                <a
                  href="https://www.linkedin.com/in/srinilaya-marripalli-b66b92325/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span aria-hidden="true" className="font-semibold">
                    in
                  </span>{" "}
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#17221e]/20 bg-transparent"
              >
                <a href="https://github.com/srinilaya08/"  className="flex items-center gap-1.5 whitespace-nowrap" target="_blank" rel="noreferrer">
                  <Code2 data-icon="inline-start" /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-xs text-[#17221e]/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>© 2026 Srinilaya Marripalli. Built with curiosity.</span>
        <span>Designed for people, not parsing bots.</span>
      </footer>
    </div>
  );
}

export default Portfolio;

/**
 * Link targets intentionally use believable placeholders so this demo is easy to personalize.
 */
