import React from "react";
import {Container, Image} from 'react-bootstrap';
import MyImage from "../portfolioPhoto.jpg"

export default function AboutMe() {

    return (
        <main style={{marginTop: 0}}>
            <Container className="about">
                <h1>About Me</h1>
                <p>
                    Hi! My name is <strong>Yaroslav Stopenchuk</strong> i am frontend developer.
                </p>
                <p>
                    “Reality is created by the mind” and i love to create it with computer and keyboard. I want
                    to create most user friendly websites which bring value and purpose.
                </p>
                <p>
                    My toolset contain HTML, CSS, JavaScript, React, Redux, React Router, Node.js, REST API, GIT
                    & MySQL.
                </p>
                <p>
                    Besides that i love to meet new people, read books, hitchhiking and learning new foreign
                    languages
                </p>
            </Container>
            <Image className="h" src={MyImage} alt="Its me" style={{maxHeight: 800, maxWidth: 700}} fluid/>
        </main>
    );
}
