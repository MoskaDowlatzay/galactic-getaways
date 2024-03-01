import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar variant="dark" expand="lg" style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>           
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex justify-content-between w-100 me-auto" style={{ marginLeft: '30px' }}>
                    <div className='d-flex flex-row'>
                    <Nav.Link href="#home" style={{ marginRight: '30px' }}>Home</Nav.Link>
                    <Nav.Link href="#explore" style={{ marginRight: '30px' }}>Explore</Nav.Link>
                    <Nav.Link href="#contact" style={{ marginRight: '30px' }}>Contact</Nav.Link>
                    </div>
                    <Nav.Link href="#favourites" style={{ marginRight: '30px' }}>Favourites</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;

