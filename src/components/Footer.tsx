"use client";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
    const { t } = useI18n();
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { key: "nav.home", href: "#home" },
        { key: "nav.skills", href: "#skills" },
        { key: "nav.projects", href: "#projects" },
        { key: "nav.experience", href: "#experience" },
        { key: "nav.about", href: "#about" },
        { key: "nav.contact", href: "#contact" },
    ];

    return (
        <footer className="py-12 border-t border-[var(--glass-border)]">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-lg font-semibold text-[var(--foreground)]">
                            {t("footer.title")}
                        </p>
                        <p className="text-sm text-[var(--foreground-muted)] mt-1">
                            {t("footer.subtitle")}
                        </p>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.key}
                                href={link.href}
                                className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors duration-200"
                            >
                                {t(link.key)}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="mt-10 pt-6 border-t border-[var(--glass-border)] text-center">
                    <p className="text-sm text-[var(--foreground-muted)]">
                        © {currentYear} {t("footer.title")}. {t("footer.copyright")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
