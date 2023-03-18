import React from "react";
import {Container, Row, Col, Image} from 'react-bootstrap';

export default function AboutMe() {

    return (
        <main>
            <Container className="about">
                <Row className="align-items-center">
                    <Col md={6}>
                        <Image src="/my-photo.jpg" alt="Its me" fluid/>
                    </Col>
                    <Col md={6}>
                        <h2>About Me</h2>
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
                    </Col>
                </Row>
            </Container>
        </main>
    );
}
