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
  description: "Frontend Developer with 2+ years of experience specializing in React, Next.js, and TypeScript. Based in Wrocław, Poland.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Wrocław"],
  authors: [{ name: "Yaroslav Stopenchuk" }],
  openGraph: {
    title: "Yaroslav Stopenchuk — Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, and TypeScript",
    type: "website",
    url: "https://portfolio-yaroslav-stopenchuk.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaroslav Stopenchuk — Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, and TypeScript",
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
