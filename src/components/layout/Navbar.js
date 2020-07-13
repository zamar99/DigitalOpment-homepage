import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Navbar bg='transparent' expand='lg' style={{ width: '100%' }}>
      <Navbar.Brand href='/'>DigitalOpment</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='navbar-nav ml-auto'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/about'>
            About
          </Nav.Link>
          <NavDropdown title='Services' id='basic-nav-dropdown'>
            <NavDropdown.Item href='/'>Services</NavDropdown.Item>
            <NavDropdown.Item href='/'>Services</NavDropdown.Item>
            <NavDropdown.Item href='/'>Services</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='/'>Blog</Nav.Link>
          <Nav.Link as={Link} to='/career'>
            Career
          </Nav.Link>
          <Nav.Link as={Link} to='/contact'>
            Contact
          </Nav.Link>
          <Nav.Link href='/'>Call: +1 (000) 000-0000</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
