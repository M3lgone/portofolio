import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundGlow from "@/components/BackgroundGlow";
import InteractiveGrid from "@/components/InteractiveGrid";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mellab.vercel.app"),
  title: "Mel Lab — Ismael González · Full-Stack Developer",
  description:
    "Mel Lab by Ismael González — Full-Stack Developer focused on PHP, Laravel, MySQL and React. Real projects with REST APIs and databases, based in Girona.",
  alternates: {
    canonical: "https://mellab.vercel.app",
  },
  openGraph: {
    title: "Mel Lab — Ismael González · Full-Stack Developer",
    description:
      "Full-Stack Developer focused on PHP, Laravel, MySQL and React. Real projects with REST APIs and databases.",
    url: "https://mellab.vercel.app",
    siteName: "Mel Lab",
    type: "website",
    images: [
      {
        url: "/melab-og.png",
        width: 704,
        height: 356,
        alt: "Mel Lab — Ismael González · Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mel Lab — Ismael González · Full-Stack Developer",
    description:
      "Full-Stack Developer focused on PHP, Laravel, MySQL and React. Real projects with REST APIs and databases.",
    images: ["/melab-og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1b26",
};

// JSON-LD Person — solo datos ya públicos en el portfolio.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ismael González",
  url: "https://mellab.vercel.app",
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://github.com/M3lgone",
    "https://www.linkedin.com/in/ismael-gonzalez-nestal/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}>
        
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#7aa2f7] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#1a1b26]"
        >
          Skip to content
        </a>
        <CustomCursor />
        <ScrollProgress />
        <BackgroundGlow />
        <InteractiveGrid />

        <div className="max-w-6xl mx-auto">
          {children}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
