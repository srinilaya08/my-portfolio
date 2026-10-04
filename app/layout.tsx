import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Srinilaya Marripalli | CSE Student & Web Developer",
    template: "%s | Srinilaya Marripalli",
  },

  description:
    "Portfolio of Srinilaya Marripalli, a Computer Science and Engineering student building practical web applications with React.js and exploring AI/ML through hands-on projects.",

  keywords: [
    "Srinilaya Marripalli",
    "Srinilaya",
    "React.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Computer Science Student",
    "CSE Student",
    "React Portfolio",
    "JavaScript Developer",
    "Next.js Developer",
    "Web Development Portfolio",
  ],

  authors: [
    {
      name: "Srinilaya Marripalli",
    },
  ],

  creator: "Srinilaya Marripalli",

  openGraph: {
    title: "Srinilaya Marripalli | CSE Student & Web Developer",
    description:
      "Computer Science and Engineering student building practical web applications and exploring AI/ML through hands-on projects.",
    type: "website",
    locale: "en_IN",
    siteName: "Srinilaya Marripalli",
  },

  twitter: {
    card: "summary_large_image",
    title: "Srinilaya Marripalli | CSE Student & Web Developer",
    description:
      "CSE student building practical web applications and exploring AI/ML through hands-on projects.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f5f6f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}