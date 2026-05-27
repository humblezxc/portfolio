export interface Experience {
    id: string;
    tech: string[];
}

export const experiences: Experience[] = [
    {
        id: "exp-1",
        tech: ["React", "TypeScript", "Zustand", "Docker", "Kubernetes"],
    },
    {
        id: "exp-2",
        tech: ["Next.js", "TypeScript", "Supabase", "RBAC", "PWA"],
    },
    {
        id: "exp-3",
        tech: ["React", "Next.js", "Gatsby", "Redux Toolkit", "React Query", "GSAP"],
    },
];
