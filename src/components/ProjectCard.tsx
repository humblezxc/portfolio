"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export type Project = {
    id: string;
    tech: string[];
    color: string;
    url?: string;
    year?: number;
};

const ExternalLinkIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
        <polyline points="6 9 12 15 18 9"/>
    </svg>
);

export default function ProjectCard({ project }: { project: Project }) {
    const [open, setOpen] = useState(false);
    const { t } = useI18n();

    const title = t(`projects.${project.id}.title`);
    const short = t(`projects.${project.id}.short`);
    const long = t(`projects.${project.id}.long`);

    return (
        <article
            className="glass rounded-2xl overflow-hidden group"
            aria-labelledby={`proj-${project.id}-title`}
        >
            <div className="relative h-48 overflow-hidden">
                <div
                    className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                    style={{ background: project.color }}
                >
                    <span className="text-white/80 text-lg font-medium">{title}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                {project.year && (
                    <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--glass-border)]">
                        {project.year}
                    </span>
                )}
            </div>

            <div className="p-5">
                <h3 id={`proj-${project.id}-title`} className="text-lg font-semibold text-[var(--foreground)]">
                    {title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] mt-2 line-clamp-2">
                    {short}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary-light)]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[var(--primary)] text-white hover:shadow-glow-sm transition-all duration-300"
                        >
                            {t("projects.view")}
                            <ExternalLinkIcon />
                        </a>
                    )}
                    <button
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-[var(--glass-border)] text-[var(--foreground-muted)] hover:border-[var(--primary)]/50 hover:text-[var(--foreground)] transition-all duration-300"
                    >
                        {t("projects.details")}
                        <ChevronIcon open={open} />
                    </button>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                        open ? "max-h-96 opacity-100 mt-5" : "max-h-0 opacity-0"
                    }`}
                    aria-hidden={!open}
                >
                    <div className="pt-4 border-t border-[var(--glass-border)]">
                        <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                            {long}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}
