import {IProjects} from "../models/models";
import aimGameImage from "../assets/content/aim-game.jpg";
import icon from "../assets/content/planet-icon.jpg"

export const projects: IProjects[] = [
    {
        id: 1,
        title: 'Aim game',
        projectImageSrc: 'https://picsum.photos/id/1082/400/230',
        projectImageAlt: 'Project cover',
        slides: [
            {
                description: "In a menu, you have a button called 'start,' and when you click on it, you need to select\n" +
                    "a game time. And then, on the desk will be randomly created canvases of different\n" +
                    "sizes. So, all you need to do is click on canvas as fast as possible.",
            },
            {
                imageSrc: aimGameImage,
                imageAlt: "Aim game screenshot",
            },
            {
                projectLink: "Try it yourself!",
                iconSrc: icon,
                iconALt: 'Icon',
                projectSrc: "https://humblezxc.github.io/aim-game/",
            },
        ],
    },
    {
        id: 2,
        title: 'Collections website',
        projectImageSrc: 'https://picsum.photos/id/252/400/230',
        projectImageAlt: 'Project cover',
        slides: [
            {
                description: "In a Collections project, you can authenticate and create a new collection with a Name\n" +
                    "and Description. Also, you can choose more labels. After making the Collection, you could add items that depend on the fields. If you are authorized, you can leave\n" +
                    "comments below the Item. The five most extensive collections and the latest added\n" +
                    "items will be on the home page.",
            },
            {
                imageSrc: "",
                imageAlt: "Image of Project 1",
            },
            {
                projectLink: "Try it yourself!",
                iconSrc: icon,
                iconALt: 'Icon',
                projectSrc: "https://github.com/humblezxc/course-project",
            },
        ],
    },
    {
        id: 3,
        title: 'Data generation',
        projectImageSrc: 'https://picsum.photos/id/486/400/230',
        projectImageAlt: 'Project cover',
        slides: [
            {
                description: "In data generation, the program automatically generates fake English data. Also, you\n" +
                    "can choose German, French, or Polish data by clicking the buttons. The project has an\n" +
                    "infinity scroll and seed chosen option.",
            },
            {
                imageSrc: "",
                imageAlt: "Image of Project 3",
            },
            {
                projectLink: "Try it yourself!",
                iconSrc: icon,
                iconALt: 'Icon',
                projectSrc: "https://github.com/humblezxc/data-generation",
            },
        ],
    },
    {
        id: 4,
        title: 'Hovered desk',
        projectImageSrc: 'https://picsum.photos/id/893/400/230',
        projectImageAlt: 'Project cover',
        slides: [
            {
                description: "In this project, we have a board of squares, and when we hover over one of them, the\n" +
                    "court starts to glow. If the cursor moves to another square, the previous one returns to\n" +
                    "its original form.",
            },
            {
                imageSrc: "",
                imageAlt: "Image of Project 3",
            },
            {
                projectLink: "Try it yourself!",
                iconSrc: icon,
                iconALt: 'Icon',
                projectSrc: "https://humblezxc.github.io/howerd-desk/",
            },
        ]
    },
];
