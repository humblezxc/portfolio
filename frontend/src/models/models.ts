export interface IProjects {
    id: number
    title: string
    projectImageSrc: string
    projectImageAlt: string
    slides: [
        {
            description: string
        },
        {
            imageSrc: string
            imageAlt: string
        },
        {
            projectLink: string
            iconSrc: string
            projectSrc: string
        }
    ]
}
