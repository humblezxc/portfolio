"use client";
import React from "react";
import { experiences } from "@/lib/experience.data";
import { useI18n } from "@/lib/i18n";

const BriefcaseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
);

export default function Experience() {
    const { t } = useI18n();

    return (
        <section id="experience" className="section-padding relative overflow-hidden">
            <svg
                className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 opacity-20"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <defs>
                    <filter id="gooExp">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
                        <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
                <g filter="url(#gooExp)" className="mix-blend-screen">
                    <circle fill="#a78bfa" cx="80" cy="80" r="50" />
                    <circle fill="#8b5cf6" cx="140" cy="150" r="40" />
                </g>
            </svg>

            <div className="container max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-fluid-3xl font-bold">
                        <span className="text-gradient">{t("experience.title")}</span>
                    </h2>
                    <p className="mt-4 text-fluid-base text-[var(--foreground-muted)] max-w-2xl mx-auto">
                        {t("experience.description")}
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--glass-border)] md:-translate-x-1/2"/>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`relative flex flex-col md:flex-row gap-8 ${
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            >
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-1/2 md:-translate-x-1/2 rounded-full bg-[var(--primary)] flex items-center justify-center z-10 shadow-glow-sm">
                                    <BriefcaseIcon />
                                </div>

                                <div className="md:w-1/2"/>

                                <div className={`md:w-1/2 pl-14 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                                    <div className="glass rounded-2xl p-6 hover:shadow-glow-sm transition-shadow duration-300">
                                        <span className="text-sm text-[var(--primary-light)] font-medium">
                                            {exp.period}
                                        </span>
                                        <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)]">
                                            {exp.role}
                                        </h3>
                                        <p className="text-[var(--foreground-muted)] mt-1">
                                            {exp.company}
                                        </p>
                                        <p className="mt-4 text-sm text-[var(--foreground-muted)] leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {exp.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-xs px-2.5 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary-light)]"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
