"use client";
import React from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Navbar from "@/components/Navbar";

export default function Header() {
    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <div className="glass w-full max-w-6xl px-6 py-3 rounded-2xl flex items-center justify-between">
                <a
                    href="#home"
                    className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
                >
                    YS
                </a>
                <Navbar />
                <div className="flex gap-2 items-center">
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
}
