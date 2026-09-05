"use client";
import React from "react";
import { skillCategories } from "@/lib/skills.data";
import { skillIcons, DefaultSkillIcon } from "@/lib/skill-icons";
import { useI18n } from "@/lib/i18n";

export default function Skills() {
    const { t } = useI18n();

    return (
        <section id="skills" className="section-padding">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-fluid-3xl font-bold">
                        <span className="text-gradient">{t("skills.title")}</span>
                    </h2>
                    <p className="mt-4 text-fluid-base text-[var(--foreground-muted)] max-w-2xl mx-auto">
                        {t("skills.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category) => (
                        <div
                            key={category.id}
                            className="glass rounded-2xl p-6 hover:shadow-glow-sm"
                        >
                            <h3 className="text-lg font-semibold text-[var(--primary-light)] mb-4">
                                {t(`skills.${category.id}`)}
                            </h3>
                            <div className="space-y-3">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--glass-hover)] transition-colors duration-200 group"
                                    >
                                        <span className="text-[var(--foreground-muted)] group-hover:text-[var(--primary)] transition-colors duration-200">
                                            {skillIcons[skill.icon] || <DefaultSkillIcon />}
                                        </span>
                                        <span className="text-sm text-[var(--foreground)]">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
