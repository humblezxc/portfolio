export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    description: string;
    tech: string[];
}

export const experiences: Experience[] = [
    {
        id: "exp-1",
        company: "Independent Project",
        role: "Full-Stack Developer",
        period: "May 2025 — Present",
        description: "Developing Smart Shift Scheduler: a workforce management SaaS using Next.js 16, reducing schedule planning time from hours to minutes via automation. Engineered custom scheduling algorithm ensuring 100% compliance with staff availability. Implemented RBAC & Middleware security and custom i18n system.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "RBAC"],
    },
    {
        id: "exp-2",
        company: "RED Software House",
        role: "Frontend Developer",
        period: "Oct 2023 — May 2025",
        description: "Delivered 10+ commercial projects (Next.js, Gatsby), optimizing initial load times by ~12% via GSAP/asset optimization. Architected Elektrobohater SPA using Redux Toolkit & React Query. Modernized Warsaw Museum legacy React code, cutting editorial turnaround by 30%. Mentored Junior Developer, reducing ramp-up time by ~40%.",
        tech: ["React", "Next.js", "Gatsby", "Redux Toolkit", "React Query", "GSAP"],
    },
    {
        id: "exp-3",
        company: "Itransition",
        role: "Frontend Developer (Training Program)",
        period: "Sep 2022 — Nov 2022",
        description: "Completed 3-month training program: React, MUI, and Agile workflows. Delivered 6 coding assignments and a final project; passed technical interview.",
        tech: ["React", "MUI", "Agile"],
    },
];
