import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Insights & Trends",
  description:
    "Read the latest insights on web development, UI/UX design, SEO, and digital marketing from the Pixelcraft Studio team.",
  openGraph: {
    title: "Blog — Insights & Trends | Pixelcraft Studio",
    description:
      "Read the latest insights on web development, UI/UX design, SEO, and digital marketing.",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
