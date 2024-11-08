
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget"
import "./navbar.css"

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Si usas React Router para las rutas

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">aca veo como pongo el logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link as={Link} to="../Servicios">Servicios</Nav.Link>
            <Nav.Link as={Link} to="../Fotos">Fotos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

