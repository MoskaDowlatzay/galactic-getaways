import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>           
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{ marginLeft: '30px' }}>
                    <Nav.Link href="#home" style={{ marginRight: '30px' }}>Home</Nav.Link>
                    <Nav.Link href="#explore" style={{ marginRight: '30px' }}>Explore</Nav.Link>
                    <Nav.Link href="#contact" style={{ marginRight: '30px' }}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;

