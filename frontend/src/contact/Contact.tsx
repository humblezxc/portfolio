import React from "react";
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";

export default function Contact(){
    return(
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
            <Form className="flex-wrap justify-content-center'">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="string" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Control type="email" placeholder="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="text"/>
                </Form.Group>
            </Form>
            <Button className="btn-primary">Send</Button>
        </div>
    );
}
