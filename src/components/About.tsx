"use client";
import React from "react";
import { useI18n } from "@/lib/i18n";

const CodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
    </svg>
);

const HeartIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
);

const GlobeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
);

export default function About() {
    const { t } = useI18n();

    return (
        <section id="about" className="section-padding">
            <div className="container max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-fluid-3xl font-bold">
                        <span className="text-gradient">{t("about.title")}</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] opacity-20 absolute inset-0 blur-3xl"/>
                        <div className="glass rounded-2xl p-1 relative">
                            <img
                                src="/profile.jpg"
                                alt="Yaroslav Stopenchuk"
                                className="aspect-square rounded-xl object-cover object-[center_12%] w-full"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="text-fluid-base text-[var(--foreground-muted)] leading-relaxed mb-6">
                            {t("about.bio1")}
                        </p>
                        <p className="text-fluid-base text-[var(--foreground-muted)] leading-relaxed mb-8">
                            {t("about.bio2")}
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass rounded-xl p-4 text-center">
                                <div className="w-12 h-12 mx-auto rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] mb-3">
                                    <CodeIcon />
                                </div>
                                <p className="text-sm text-[var(--foreground-muted)]">{t("about.cleanCode")}</p>
                            </div>
                            <div className="glass rounded-xl p-4 text-center">
                                <div className="w-12 h-12 mx-auto rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] mb-3">
                                    <HeartIcon />
                                </div>
                                <p className="text-sm text-[var(--foreground-muted)]">{t("about.greatUX")}</p>
                            </div>
                            <div className="glass rounded-xl p-4 text-center">
                                <div className="w-12 h-12 mx-auto rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] mb-3">
                                    <GlobeIcon />
                                </div>
                                <p className="text-sm text-[var(--foreground-muted)]">{t("about.accessible")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
