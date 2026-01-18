import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
    {
        id: "smart-shift",
        tech: ["Next.js", "TypeScript", "Tailwind", "RBAC"],
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        url: "https://smart-shift-scheduler.vercel.app",
        year: 2026,
    },
    {
        id: "museum",
        tech: ["React", "Docker", "TypeScript"],
        color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        url: "https://kolekcje.muzeumwarszawy.pl/en",
        year: 2025,
    },
    {
        id: "red",
        tech: ["Gatsby", "GSAP", "TypeScript", "i18n"],
        color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        url: "https://redsoftware.io",
        year: 2025,
    },
    {
        id: "socialman",
        tech: ["Vanilla JS", "HTML", "SCSS", "Bootstrap 5"],
        color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        url: "https://socialman.net",
        year: 2024,
    },
    {
        id: "opera",
        tech: ["Vanilla JS", "HTML", "CSS"],
        color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        year: 2024,
    },
    {
        id: "elektrobohater",
        tech: ["React", "Redux Toolkit", "React Query"],
        color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        url: "https://elektrobohater.pl",
        year: 2023,
    },
];
