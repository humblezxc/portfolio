import React from "react";
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header(): JSX.Element {
    return (
        <>
            <Navbar bg="black" variant="dark" expand="xl">
                <Container>
                    <Nav className="me-auto collapse navbar-collapse d-flex justify-content-center">
                        <Nav.Link as={Link} to="/" aria-label="Home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" aria-label="Features">About me</Nav.Link>
                        <Nav.Link as={Link} to="/contact" aria-label="Contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
