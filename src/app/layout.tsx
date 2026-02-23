import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0f0a1a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-yaroslav-stopenchuk.vercel.app"),
  title: "Portfolio - Yaroslav Stopenchuk",
  description: "Frontend / Full-Stack Developer with 3+ years of experience in React, Next.js, and TypeScript. Based in Wroclaw, Poland.",
  keywords: ["Frontend Developer", "Full-Stack Developer", "React", "Next.js", "TypeScript", "Supabase", "Stripe", "Wrocław"],
  authors: [{ name: "Yaroslav Stopenchuk" }],
  openGraph: {
    title: "Yaroslav Stopenchuk — Frontend / Full-Stack Developer",
    description: "Frontend / Full-Stack Developer specializing in React, Next.js, and TypeScript",
    type: "website",
    url: "https://portfolio-yaroslav-stopenchuk.vercel.app",
    siteName: "Yaroslav Stopenchuk Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Yaroslav Stopenchuk — Frontend / Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaroslav Stopenchuk — Frontend / Full-Stack Developer",
    description: "Frontend / Full-Stack Developer specializing in React, Next.js, and TypeScript",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
