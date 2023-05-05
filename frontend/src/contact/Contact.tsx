import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {Button, Col, Row, Container} from "react-bootstrap";
import SendEmail from "./SendEmail";
import GlitchText from "../common/view/GlitchText";

interface Message {
    fullName: string;
    email: string;
    content: string;
}

export default function Contact() {
    const [message, setMessage] = useState<Message>({
        fullName: "",
        email: "",
        content: "",
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await axios.post<Message>("/api/messages", message);
        } catch (err) {
            console.log(err);
            console.log((err as { response: { data: { msg: string } } }).response.data.msg);
        }
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setMessage((prevMessage) => ({
            ...prevMessage,
            [name]: value,
        }));
    };

    return (
        <main>
            <Container className="contact">
                <Row className="m-2 mb-4">
                    <Col md={6} className="d-grid justify-content-center">
                        <GlitchText text="Hire me up"/>
                        <GlitchText text="Don't be shy!"/>
                    </Col>
                    <Col md={6}>
                        <Form className="d-grid justify-content-center" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    className="input"
                                    type="string"
                                    placeholder="name"
                                    name="fullName"
                                    value={message.fullName}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Control
                                    className="input"
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    value={message.email}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                    as="textarea"
                                    className="input"
                                    rows={3}
                                    placeholder="text"
                                    name="content"
                                    value={message.content}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="outline-success" type="submit">
                                    Send
                                </Button>
                                <SendEmail buttonText=" Send Email" email="stopenchuk.yaroslav@gmail.com"/>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}
