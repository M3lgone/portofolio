import type { Metadata } from "next";
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
  title: "Isma · Full-Stack Developer",
  description: "Full-Stack Developer — PHP, Laravel, MySQL, REST APIs and React. Practical projects and specialized training.",
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
