import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button } from "react-bootstrap";

interface Message {
    name: string;
    email: string;
    text: string;
}

export default function Contact() {
    const [message, setMessage] = useState<Message>({
        name: "",
        email: "",
        text: "",
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await axios.post<Message>("http://localhost:5000/api/message", message);
        } catch (err) {
            console.log((err as { response: { data: { msg: string } } }).response.data.msg);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setMessage((prevMessage) => ({
            ...prevMessage,
            [name]: value,
        }));
    };

    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
            <Form className="flex-wrap justify-content-center" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    Name:
                    <Form.Control
                        type="string"
                        placeholder="name"
                        name="name"
                        value={message.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    Email:
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        value={message.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    Text:
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="text"
                        name="text"
                        value={message.text}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button className="btn-primary" type="submit">
                    Send
                </Button>
            </Form>
        </div>
    );
}
