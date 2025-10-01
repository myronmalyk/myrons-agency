// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://myrons.agency";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Myron’s Agency — AI Automation for SMBs",
    template: "%s | Myron’s Agency",
  },
  description:
    "AI chatbots and automation that capture leads, book appointments, and streamline operations for SMBs in Vancouver and across North America.",
  alternates: { canonical: "/" },

  // PWA / Icons / Manifest
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      "/favicon.ico", // fallback clásico
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0B0F14" },
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },

  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Myron’s Agency",
    title: "AI Automation for SMBs",
    description:
      "Build English-first funnels with AI chat, appointment scheduling, and automated workflows.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@", // (opcional) tu handle si lo tienes
    title: "Myron’s Agency — AI Automation for SMBs",
    description:
      "AI chatbots and automation that capture leads, book appointments, and streamline operations for SMBs.",
    images: ["/og/home.jpg"],
  },
  applicationName: "Myron’s Agency",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// 👇 Mueve themeColor aquí (como pide Next.js)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B0F14" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F14" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script id="vtag-ai-js" async src="https://r2.leadsy.ai/tag.js" data-pid="1aXVDxQ384rh5KerK" data-version="062024"></script>
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <AnimatedBackground />
          <Navigation />
          <main className="relative">{children}</main>
          <Footer />
        </Providers>

        {/* JSON-LD: LocalBusiness */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Myron’s Agency",
              url: "https://myrons.agency",
              description: "AI automation and chatbots for SMBs in Vancouver, BC.",
              image: "https://myrons.agency/logo.png",
              logo: "https://myrons.agency/logo.png",
              telephone: "+1-778-809-4442",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vancouver",
                addressRegion: "BC",
                addressCountry: "CA",
              },
              areaServed: [
                "Vancouver",
                "British Columbia",
                "Canada",
                "United States",
              ],
              sameAs: [
                "https://www.linkedin.com/in/myron-malykhin-791038279",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
