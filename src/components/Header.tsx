"use client";
import React from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Navbar from "@/components/Navbar";


export default function Header() {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
            <div className="container w-full max-w-6xl px-4 py-2 flex items-center justify-between">
                <div className="text-xl font-semibold cursor-pointer" onClick={() => scrollTo("home")}>Portfolio</div>
                <Navbar />
                <div className="flex gap-4 items-center">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
}
