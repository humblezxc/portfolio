import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Portfolio - Yaroslav Stopenchuk",
  description: "Created by Yaroslav Stopenchuk (humblezxc)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
