import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import { notFound } from "next/navigation";

const projectDetails = {
  codelab: {
    number: "01",
    title: "CodeLab",
    eyebrow: "Collaborative developer tooling",
    summary:
      "A browser-based collaborative coding platform that helps developers work together in real time.",
    description:
      "CodeLab brings shared coding rooms, real-time code synchronization, chat, and account attribution into one focused workspace. It was designed to make pair programming and technical collaboration feel simple, fast, and accessible from the browser.",
    tags: [
      "React",
      "Node.js",
      "Socket.IO",
      "Monaco Editor",
      "PostgreSQL",
      "JWT",
    ],
    highlights: [
      "Created real-time collaborative coding rooms",
      "Added JWT authentication and account attribution",
      "Integrated Monaco Editor for an IDE-like experience",
      "Built live chat and synchronized editor state",
    ],
    github: "https://github.com/srinilaya08/CodeLab",
    accent: "from-amber-100 via-orange-50 to-rose-100",
    deploy: "no",
  },
  "gym-enquiry-portal": {
    number: "02",
    title: "Gym Enquiry Portal",
    eyebrow: "Membership management platform",
    summary: "A reusable enquiry and membership management platform for gyms.",
    description:
      "The portal gives gyms a structured way to capture enquiries, manage membership plans, and protect administrative workflows. It combines a responsive public experience with authenticated CRUD tools for day-to-day operations.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "RLS"],
    highlights: [
      "Built enquiry and membership workflows",
      "Added protected admin routes",
      "Implemented CRUD operations for plans and enquiries",
      "Secured records with Row Level Security",
    ],
    github: "https://github.com/srinilaya08/gym-website-enquiry-portal",
    accent: "from-sky-100 via-cyan-50 to-indigo-100",
    deploy: "no",
  },
  textutils: {
    number: "03",
    title: "TextUtils",
    eyebrow: "Productivity web application",
    summary:
      "A responsive text utility app for everyday formatting and analysis tasks.",
    description:
      "TextUtils turns common text operations into a fast, friendly browser experience. Users can format content, inspect word and character counts, estimate reading time, copy results, and switch between light and dark modes.",
    tags: ["React.js", "JavaScript", "Bootstrap"],
    highlights: [
      "Added formatting and text analysis tools",
      "Displayed word count and reading time",
      "Built copy-to-clipboard actions",
      "Created a responsive interface with dark mode",
    ],
    github: "https://textutils-tau-seven.vercel.app",
    accent: "from-lime-100 via-emerald-50 to-teal-100",
    deploy: "yes",
  },
} as const;

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails[slug as keyof typeof projectDetails];

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#17221e]">
      <header className="border-b border-[#17221e]/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60"
          >
            <ArrowLeft data-icon="inline-start" /> Back to portfolio
          </Link>
          <span className="font-mono text-xs text-[#17221e]/45">
            PROJECT / {project.number}
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <section
          className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${project.accent} p-7 sm:p-12`}
        >
          <span className="font-mono text-xs text-[#17221e]/55">
            {project.eyebrow}
          </span>
          <h1 className="mt-12 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-[#17221e]/65">
            {project.summary}
          </p>
          <div className="absolute -bottom-16 -right-10 size-48 rounded-full border border-[#17221e]/15 sm:size-64" />
          <div className="absolute bottom-8 right-12 hidden size-28 rounded-full border border-[#17221e]/15 sm:block" />
        </section>

        <section className="grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6f9c2d]">
              The idea
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
              Built to solve a real workflow.
            </h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-[#17221e]/70">
              {project.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#17221e]/15 px-3 py-1.5 text-sm text-[#17221e]/65"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#17221e]/10 py-16 lg:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6f9c2d]">
            What I worked on
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="rounded-2xl border border-[#17221e]/10 bg-white/60 p-6"
              >
                <span className="font-mono text-xs text-[#6f9c2d]">
                  0{index + 1}
                </span>
                <p className="mt-5 text-lg leading-7">{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3 border-t border-[#17221e]/10 pt-8">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#17221e] px-5 py-3 text-sm font-medium text-[#f7f7f4] transition-colors hover:bg-[#294039]"
          >
            <Code2 data-icon="inline-start" /> View project{" "}
            <ArrowUpRight data-icon="inline-end" />
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full border border-[#17221e]/20 px-5 py-3 text-sm font-medium transition-colors hover:bg-white"
          >
            Discuss a project
          </Link>
          {project.deploy !== "yes" && (
            <Link
              href={`/demo/${slug}`}
              className="inline-flex items-center rounded-full border border-[#17221e]/20 px-5 py-3 text-sm font-medium transition-colors hover:bg-white"
            >
              Click for demo
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}

export function generateMetadata() {
  return {
    title: "Project details | Srinilaya Marripalli",
    description: "Project details from Srinilaya Marripalli.",
  };
}
