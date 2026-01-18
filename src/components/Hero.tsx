"use client";
import React from "react";
import { useI18n } from "@/lib/i18n";

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
);

const EmailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
    </svg>
);

const DownloadIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
);

export default function Hero() {
    const { t } = useI18n();

    return (
        <section id="home" className="hero-section relative min-h-svh flex items-center justify-center overflow-hidden">
            <svg
                className="hero-svg absolute inset-0 w-full h-full"
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0
                                    0 1 0 0 0
                                    0 0 1 0 0
                                    0 0 0 18 -7"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>

                <g className="blobs" filter="url(#goo)">
                    <circle className="blob blob-1" cx="200" cy="200" r="80" fill="#8b5cf6" />
                    <circle className="blob blob-2" cx="350" cy="350" r="100" fill="#6d28d9" />
                    <circle className="blob blob-3" cx="550" cy="180" r="70" fill="#a78bfa" />
                    <circle className="blob blob-4" cx="650" cy="400" r="60" fill="#c4b5fd" />
                </g>
            </svg>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-fluid-5xl font-bold tracking-tight">
                    <span className="text-gradient">{t("hero.name").split(" ")[0]}</span>
                    <span className="text-[var(--foreground)]"> {t("hero.name").split(" ").slice(1).join(" ")}</span>
                </h1>

                <p className="mt-4 text-fluid-xl text-[var(--foreground-muted)] font-light">
                    {t("hero.title")}
                </p>

                <p className="mt-6 text-fluid-base text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed">
                    {t("hero.description")}
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                        href="#projects"
                        className="btn-glow inline-flex items-center gap-2 text-white"
                    >
                        {t("hero.viewProjects")}
                    </a>
                    <a
                        href="/CV_Yaroslav_Stopenchuk.pdf"
                        download
                        className="btn-outline inline-flex items-center gap-2 text-[var(--foreground)]"
                    >
                        <DownloadIcon />
                        {t("hero.downloadCV")}
                    </a>
                </div>

                <div className="mt-12 flex justify-center gap-4">
                    <a
                        href="https://github.com/humblezxc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-glass border border-[var(--glass-border)] text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <GithubIcon />
                    </a>
                    <a
                        href="https://linkedin.com/in/yaroslav-stopenchuk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-glass border border-[var(--glass-border)] text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        href="https://t.me/s_yarchi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-glass border border-[var(--glass-border)] text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300"
                        aria-label="Telegram"
                    >
                        <TelegramIcon />
                    </a>
                    <a
                        href="mailto:stopenchuk.yaroslav@gmail.com"
                        className="p-3 rounded-xl bg-glass border border-[var(--glass-border)] text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300"
                        aria-label="Email"
                    >
                        <EmailIcon />
                    </a>
                </div>
            </div>

            <style jsx>{`
                .hero-svg {
                    opacity: 0.6;
                    contain: layout style paint;
                }
                .blobs {
                    mix-blend-mode: screen;
                }
                .blob-1 { animation: float1 18s ease-in-out infinite; }
                .blob-2 { animation: float2 22s ease-in-out infinite; }
                .blob-3 { animation: float3 16s ease-in-out infinite; }
                .blob-4 { animation: float4 20s ease-in-out infinite; }

                @keyframes float1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(30px, -30px) scale(1.05); }
                }
                @keyframes float2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-25px, 25px) scale(0.95); }
                }
                @keyframes float3 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(20px, 30px) scale(1.08); }
                }
                @keyframes float4 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-30px, -20px) scale(1.03); }
                }

                @media (max-width: 1024px) {
                    .hero-svg {
                        display: none;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .blob-1, .blob-2, .blob-3, .blob-4 { animation: none; }
                }
            `}</style>
        </section>
    );
}
