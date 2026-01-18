"use client";
import React from "react";
import ProjectCard, { Project } from "./ProjectCard";
import { projects } from "@/lib/projects.data";
import { useI18n } from "@/lib/i18n";

export default function Projects() {
    const { t } = useI18n();

    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            <svg
                className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 opacity-30"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <defs>
                    <filter id="gooProjects">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
                        <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
                <g filter="url(#gooProjects)" className="mix-blend-screen">
                    <circle fill="#8b5cf6" cx="60" cy="60" r="40" />
                    <circle fill="#6d28d9" cx="120" cy="130" r="50" />
                </g>
            </svg>

            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-fluid-3xl font-bold">
                        <span className="text-gradient">{t("projects.title")}</span>
                    </h2>
                    <p className="mt-4 text-fluid-base text-[var(--foreground-muted)] max-w-2xl mx-auto">
                        {t("projects.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p: Project) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
