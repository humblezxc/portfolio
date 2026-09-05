export interface Skill {
    name: string;
    icon: string;
}

export interface SkillCategory {
    id: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: "languages",
        skills: [
            { name: "TypeScript", icon: "typescript" },
            { name: "JavaScript", icon: "javascript" },
            { name: "HTML5", icon: "html" },
            { name: "CSS / SCSS", icon: "scss" },
        ],
    },
    {
        id: "frameworks",
        skills: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Node.js", icon: "nodejs" },
        ],
    },
    {
        id: "state",
        skills: [
            { name: "Redux Toolkit", icon: "redux" },
            { name: "React Query", icon: "reactquery" },
            { name: "Zustand", icon: "zustand" },
        ],
    },
    {
        id: "ui",
        skills: [
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Radix UI", icon: "radixui" },
            { name: "shadcn/ui", icon: "shadcnui" },
        ],
    },
    {
        id: "backend",
        skills: [
            { name: "Supabase", icon: "supabase" },
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "Stripe", icon: "stripe" },
            { name: "REST / OpenAPI", icon: "api" },
            { name: "GraphQL", icon: "graphql" },
        ],
    },
    {
        id: "testing",
        skills: [
            { name: "Vitest", icon: "vitest" },
            { name: "Playwright", icon: "playwright" },
            { name: "Testing Library", icon: "testinglibrary" },
        ],
    },
    {
        id: "devops",
        skills: [
            { name: "Git", icon: "git" },
            { name: "Docker", icon: "docker" },
            { name: "Kubernetes", icon: "kubernetes" },
            { name: "CI/CD", icon: "cicd" },
            { name: "Vercel", icon: "vercel" },
        ],
    },
    {
        id: "ai",
        skills: [
            { name: "Claude Code", icon: "claude" },
            { name: "Cursor", icon: "cursor" },
            { name: "Agent-first workflow", icon: "agent" },
        ],
    },
];
