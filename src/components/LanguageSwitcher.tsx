"use client";
import React from "react";
import { useI18n, Locale } from "@/lib/i18n";

const languages: { code: Locale; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "pl", label: "PL" },
    { code: "uk", label: "UK" },
];

export default function LanguageSwitcher() {
    const { locale, setLocale } = useI18n();

    return (
        <div className="flex gap-1">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLocale(lang.code)}
                    className={`px-2 py-1 text-xs rounded-md transition-all duration-200 ${
                        locale === lang.code
                            ? "bg-[var(--primary)] text-white"
                            : "bg-[var(--glass-bg)] text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                    }`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}
