export interface Skill {
    name: string;
    icon: string;
}

export interface SkillCategory {
    id: string;
    title: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: "frontend",
        title: "Frontend",
        skills: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "TypeScript", icon: "typescript" },
            { name: "Gatsby", icon: "gatsby" },
        ],
    },
    {
        id: "styling",
        title: "Styling",
        skills: [
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "SCSS", icon: "scss" },
            { name: "HTML5", icon: "html" },
            { name: "Bootstrap", icon: "bootstrap" },
        ],
    },
    {
        id: "state",
        title: "State & Data",
        skills: [
            { name: "Redux Toolkit", icon: "redux" },
            { name: "React Query", icon: "reactquery" },
            { name: "REST API", icon: "api" },
            { name: "GraphQL", icon: "graphql" },
        ],
    },
    {
        id: "tools",
        title: "Tools & DevOps",
        skills: [
            { name: "Git", icon: "git" },
            { name: "Docker", icon: "docker" },
            { name: "Node.js", icon: "nodejs" },
            { name: "Jest", icon: "jest" },
        ],
    },
];
