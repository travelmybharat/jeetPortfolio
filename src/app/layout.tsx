import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import SmoothScroll from "@/components/layout/SmoothScroll";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://pixelcraftstudio.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pixelcraft Studio | Premium Web Development Agency in Dehradun",
    template: "%s | Pixelcraft Studio",
  },
  description:
    "Pixelcraft Studio is a premium web development agency in Dehradun, India. We build high-performance websites, e-commerce platforms, and custom web applications using Next.js, React & Tailwind CSS.",
  keywords: [
    "web development agency Dehradun",
    "web design India",
    "Next.js development",
    "React developer",
    "e-commerce website",
    "UI/UX design",
    "SEO optimization",
    "custom web application",
    "Pixelcraft Studio",
  ],
  authors: [{ name: "Pixelcraft Studio" }],
  creator: "Pixelcraft Studio",
  openGraph: {
    title: "Pixelcraft Studio | Premium Web Development Agency",
    description:
      "We build high-performance websites and digital experiences that drive business growth. Based in Dehradun, India.",
    url: siteUrl,
    siteName: "Pixelcraft Studio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Pixelcraft Studio - Premium Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelcraft Studio | Premium Web Development Agency",
    description:
      "We build high-performance websites and digital experiences that drive business growth.",
    images: [`${siteUrl}/og-image.png`],
  },
  other: {
    "theme-color": "#7c3aed",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pixelcraft Studio",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              description:
                "Premium web development agency specializing in high-performance websites, e-commerce platforms, and custom web applications.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dehradun",
                addressRegion: "Uttarakhand",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9779766740",
                contactType: "sales",
                email: "travelmybharat2024@gmail.com",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-accent-500 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <div id="main-content">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
