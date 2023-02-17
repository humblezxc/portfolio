import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            {/*<Container>*/}
                <Navbar  bg="dark" variant="dark" expand="xl">
                    <Container>
                        <Nav className="me-auto collapse navbar-collapse d-flex justify-content-center">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            {/*</Container>*/}
        </>
    );
}

export default Header;
