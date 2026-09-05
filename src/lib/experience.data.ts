export interface Experience {
    id: string;
    tech: string[];
}

export const experiences: Experience[] = [
    {
        id: "exp-1",
        tech: ["React 19", "TypeScript", "Zustand", "Vitest", "Playwright", "Kubernetes"],
    },
    {
        id: "exp-2",
        tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "IndexedDB", "PWA"],
    },
    {
        id: "exp-3",
        tech: ["Next.js", "Gatsby", "GraphQL", "Redux Toolkit", "React Query", "GSAP"],
    },
];
