import React from "react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-[var(--glass-border)]">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-lg font-semibold text-[var(--foreground)]">
                            Yaroslav Stopenchuk
                        </p>
                        <p className="text-sm text-[var(--foreground-muted)] mt-1">
                            Frontend Developer
                        </p>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="mt-10 pt-6 border-t border-[var(--glass-border)] text-center">
                    <p className="text-sm text-[var(--foreground-muted)]">
                        © {currentYear} Yaroslav Stopenchuk. Built with Next.js & Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
}
