import React from "react";
import {useParams} from "react-router-dom";
import {Carousel} from "react-bootstrap";
import "./ProjectPage.css";
import icon from "./planet-icon.jpg"
import aimGameImage from './aim-game.jpg';

interface Params {
    [key: string]: string;

    id: string;
}

interface SlideData {
    imageSrc?: string;
    text?: string; // make text optional
    iconSrc?: string;
    link?: string;
}

interface ProjectData {
    id: string;
    name: string;
    slides: SlideData[];
}

const projectData: ProjectData[] = [
    {
        id: "1",
        name: "AIM GAME",
        slides: [
            {
                text: "In a menu, you have a button called 'start,' and when you click on it, you need to select\n" +
                    "a game time. And then, on the desk will be randomly created canvases of different\n" +
                    "sizes. So, all you need to do is click on canvas as fast as possible.",
            },
            {
                imageSrc: aimGameImage,
                text: "Aim game screenshot",
            },
            {
                text: "Try it yourself!",
                link: "https://humblezxc.github.io/aim-game/",
            },
        ],
    },
    {
        id: "2",
        name: "COLLECTIONS WEBSITE",
        slides: [
            {
                text: "In a Collections project, you can authenticate and create a new collection with a Name\n" +
                    "and Description. Also, you can choose more labels. After making the Collection, you could add items that depend on the fields. If you are authorized, you can leave\n" +
                    "comments below the Item. The five most extensive collections and the latest added\n" +
                    "items will be on the home page.",
            },
            {
                imageSrc: "https://picsum.photos/800/600",
                text: "Image of Project 1",
            },
            {
                text: "Try it yourself!",
                link: "https://github.com/humblezxc/course-project",
            },
        ],
    },
    {
        id: "3",
        name: "DATA GENERATION",
        slides: [
            {
                text: "In data generation, the program automatically generates fake English data. Also, you\n" +
                    "can choose German, French, or Polish data by clicking the buttons. The project has an\n" +
                    "infinity scroll and seed chosen option.",
            },
            {
                imageSrc: "./planet-icon.jpg",
                text: "Image of Project 3",
            },
            {
                text: "Try it yourself!",
                iconSrc: "./planet-icon.jpg",
                link: "https://github.com/humblezxc/data-generation",
            },
        ],
    },
    {
        id: "4",
        name: "HOVERED DESK",
        slides: [
            {
                text: "In this project, we have a board of squares, and when we hover over one of them, the\n" +
                    "court starts to glow. If the cursor moves to another square, the previous one returns to\n" +
                    "its original form.",
            },
            {
                imageSrc: "https://picsum.photos/800/600",
                text: "Image of Project 3",
            },
            {
                text: "Try it yourself!",
                iconSrc: "./planet-icon.jpg",
                link: "https://humblezxc.github.io/howerd-desk/",
            },
        ],
    },
];

export default function ProjectPage() {
    const {id} = useParams<Params>();
    const project = projectData.find((p) => p.id === id);

    if (!project) {
        return <main>Project not found</main>;
    }

    return (
        <main className="project-page">
            <h1 className="project-name">{project.name}</h1>
            <div className="carousel-container">
                <Carousel className="carousel-size">
                    {project.slides.map((slide: SlideData, index: number) => (
                        <Carousel.Item key={index} className="carousel-item">
                            {slide.imageSrc ? (
                                <img src={slide.imageSrc} alt={slide.text}/>
                            ) : (
                                <div className="carousel-item-content">
                                    <p>{slide.text}</p>
                                    {slide.iconSrc && (
                                        <a href={slide.link}>
                                            <img src={icon} alt="Link"/>
                                        </a>
                                    )}
                                </div>
                            )}
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </main>
    );
}
