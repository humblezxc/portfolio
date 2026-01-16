"use client";

import React, { useState } from "react";

export type Project = {
    id: string;
    title: string;
    short: string;
    long?: string;
    tech: string[];
    image: string;
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

const gradients = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
];

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
    const [open, setOpen] = useState(false);
    const [imageError, setImageError] = useState(false);
    const gradient = gradients[index % gradients.length];

    return (
        <article
            className="glass rounded-2xl overflow-hidden group"
            aria-labelledby={`proj-${project.id}-title`}
        >
            <div className="relative h-48 overflow-hidden">
                {!imageError ? (
                    <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ background: gradient }}
                    >
                        <span className="text-white/80 text-lg font-medium">{project.title}</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                {project.year && (
                    <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--glass-border)]">
                        {project.year}
                    </span>
                )}
            </div>

            <div className="p-5">
                <h3 id={`proj-${project.id}-title`} className="text-lg font-semibold text-[var(--foreground)]">
                    {project.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] mt-2 line-clamp-2">
                    {project.short}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary-light)]"
                        >
                            {t}
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
                            View
                            <ExternalLinkIcon />
                        </a>
                    )}
                    {project.long && (
                        <button
                            onClick={() => setOpen((v) => !v)}
                            aria-expanded={open}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-[var(--glass-border)] text-[var(--foreground-muted)] hover:border-[var(--primary)]/50 hover:text-[var(--foreground)] transition-all duration-300"
                        >
                            Details
                            <ChevronIcon open={open} />
                        </button>
                    )}
                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                        open ? "max-h-96 opacity-100 mt-5" : "max-h-0 opacity-0"
                    }`}
                    aria-hidden={!open}
                >
                    <div className="pt-4 border-t border-[var(--glass-border)]">
                        <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                            {project.long}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}
