import Link from "next/link";

const demos = {
  codelab: {
    title: "CodeLab",
    video: "https://files.catbox.moe/ln007e.mp4",
  },
  "gym-enquiry-portal": {
    title: "Gym Enquiry Portal",
    video: "https://files.catbox.moe/kfw5zd.mp4",
  },
 
};

export default async function DemoPage({ params }) {
  const { slug } = await params;
  const demo = demos[slug];

  if (!demo) {
    return <h1>Demo not found</h1>;
  }

  return (
    <main>
      <h1>{demo.title} — Demo</h1>

      <video
        src={demo.video}
        controls
        preload="metadata"
      />

      <Link href={`/projects/${slug}`}>
        ← Back to Project
      </Link>
    </main>
  );
}