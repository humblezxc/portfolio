"use client";
import React from "react";
import { useI18n } from "@/lib/i18n";

const navLinks = [
    { key: "nav.home", href: "#home" },
    { key: "nav.skills", href: "#skills" },
    { key: "nav.projects", href: "#projects" },
    { key: "nav.experience", href: "#experience" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
    const { t } = useI18n();

    return (
        <nav className="hidden md:flex">
            <ul className="flex gap-1 items-center">
                {navLinks.map((link) => (
                    <li key={link.key}>
                        <a
                            href={link.href}
                            className="text-sm px-3 py-2 rounded-lg text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--glass-hover)] transition-all duration-200"
                        >
                            {t(link.key)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
