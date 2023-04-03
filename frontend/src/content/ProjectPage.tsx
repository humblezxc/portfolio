import React from "react";
import {useParams} from "react-router-dom";
import {Carousel} from "react-bootstrap";
import "./ProjectPage.css";

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
        name: "Project 1",
        slides: [
            {
                text: "Some text description of Project 1",
            },
            {
                imageSrc: "https://picsum.photos/800/600",
                text: "Image of Project 1",
            },
            {
                text: "Some other text", // add a text property
                iconSrc: "https://picsum.photos/600/600",
                link: "https://example.com",
            },
        ],
    },
    {
        id: "2",
        name: "Project 2",
        slides: [
            {
                text: "What is Lorem Ipsum?\n" +
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.publishing software like Aldus PageMaker",
            },
            {
                imageSrc: "https://picsum.photos/800/600",
                text: "Image of Project 2",
            },
            {
                text: "Some other text", // add a text property
                iconSrc: "https://picsum.photos/600/600",
                link: "https://example.com",
            },
        ],
    },
];

export default function ProjectPage() {
    const {id} = useParams<Params>();
    const project = projectData.find((p) => p.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-page">
            <h1 className="project-name">{project.name}</h1>
            <div className="carousel-container">
                <Carousel>
                    {project.slides.map((slide: SlideData, index: number) => (
                        <Carousel.Item key={index} className="carousel-item">
                            {slide.imageSrc ? (
                                <img src={slide.imageSrc} alt={slide.text}/>
                            ) : (
                                <div className="carousel-item-content">
                                    <h3>{slide.text}</h3>
                                    {slide.iconSrc && (
                                        <a href={slide.link}>
                                            <img src={slide.iconSrc} alt="Link"/>
                                        </a>
                                    )}
                                </div>
                            )}
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
