import Link from "next/link";

const demos = {
  codelab: {
    title: "CodeLab",
    videoId: "2FDSyVD23rQ",
  },
  "gym-enquiry-portal": {
    title: "Gym Enquiry Portal",
    videoId: "jhwqVtvxF2Q",
  },
};

export default async function DemoPage({ params }) {
  const { slug } = await params;
  const demo = demos[slug];

  if (!demo) {
    return (
      <main className="flex min-h-screen items-center justify-center px-5">
        <h1 className="text-xl font-semibold">Demo not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        {/* Heading */}
        <div className="mb-6 sm:mb-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Project Demo
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {demo.title}
          </h1>
        </div>

        {/* Video */}
        <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border bg-black shadow-sm">
          <div className="relative aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${demo.videoId}`}
              title={`${demo.title} Demo`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Back button */}
        <div className="mt-6">
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            ← Back to Project
          </Link>
        </div>
      </div>
    </main>
  );
}