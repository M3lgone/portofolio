import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Mel Lab — Ismael González · Full-Stack Developer",
    description:
      "Full-Stack Developer focused on PHP, Laravel, MySQL and React. Real projects with REST APIs and databases.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1b26",
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
        
        <ScrollToTop />
        <CustomCursor />
        <ScrollProgress />
        <BackgroundGlow />
        <InteractiveGrid />

        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
