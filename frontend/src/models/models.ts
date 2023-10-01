export interface IProjects {
    id: number
    title: string
    projectImageSrc: string
    projectImageAlt: string
    slides: Array<{
        description?: string;
        imageSrc?: string;
        imageAlt?: string;
        projectLink?: string;
        iconSrc?: string;
        iconALt?: string;
        projectSrc?: string;
    }>;
}
