import React from "react";
import {useParams} from "react-router-dom";
import {Carousel, Container} from "react-bootstrap";
import {projects} from "../data/projects";

export default function ProjectPage() {
    const {id} = useParams();
    const project = projects.find((p) => String(p.id) === id);
    if (!project) {
        return <main>Project not found</main>;
    }
    console.log(project.slides.map(slide => slide))

    return (
        <main>
            <Container className="project-page">
                <h1 className="project-name text-uppercase">{project.title}</h1>
                <div className="carousel-container">
                    <Carousel className="carousel-size ">
                        {project.slides.map((slide, index) => (
                            <Carousel.Item key={index} className="carousel-item">
                                {slide.description && (
                                    <div className="carousel-item-content">
                                        <p>{slide.description}</p>
                                    </div>
                                )}
                                {slide.imageAlt && (
                                    <img
                                        className="carousel-item-content"
                                        src={slide.imageSrc}
                                        alt={slide.imageAlt}
                                    />
                                )}
                                {slide.projectLink && (
                                    <div className="carousel-item-content">
                                        <p>{slide.projectLink}</p>
                                        <a href={slide.projectSrc} target="_blank">
                                            <img
                                                src={slide.iconSrc}
                                                alt={slide.iconALt}
                                            />
                                        </a>
                                    </div>
                                )}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </Container>
        </main>
    );
}
