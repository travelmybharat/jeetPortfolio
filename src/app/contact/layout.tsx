import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Project",
  description:
    "Get in touch with Pixelcraft Studio. Tell us about your project and get a free consultation. Based in Dehradun, India.",
  openGraph: {
    title: "Contact Us | Pixelcraft Studio",
    description:
      "Get in touch with Pixelcraft Studio. Tell us about your project and get a free consultation.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
