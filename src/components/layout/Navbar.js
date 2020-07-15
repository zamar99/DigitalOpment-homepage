import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/WhiteDigi.png';
import './navbar.css';

export const Navigation = () => {
  return (
    <Navbar
      className='navbar-trans border border-top-0 border-left-0 border-right-0'
      bg='dark'
      variant='dark'
      expand='lg'
      style={{ width: '100%', opacity: '1' }}
    >
      <Navbar.Brand as={Link} to='/'>
        <img
          style={{ marginLeft: '80px' }}
          src={logo}
          width='280px'
          height='60'
          className='d-inline-block align-top'
          alt='React Bootstrap logo'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav
          className='navbar-nav ml-auto border border-top-0 border-bottom-0'
          style={{ marginRight: '90px', color: 'white' }}
        >
          <Nav.Link as={Link} to='/' style={{ paddingRight: '24px', paddingLeft: '24px' }}>
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to='/about'
            className='border border-top-0 border-bottom-0'
            style={{ paddingRight: '24px', paddingLeft: '24px' }}
          >
            About
          </Nav.Link>
          <NavDropdown
            title='Services'
            id='basic-nav-dropdown'
            className='border border-top-0 border-bottom-0'
            style={{ paddingRight: '24px', paddingLeft: '24px' }}
          >
            <NavDropdown.Item href='/'>Services</NavDropdown.Item>
            <NavDropdown.Item href='/'>Services</NavDropdown.Item>
            <NavDropdown.Item href='/'>Services</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            href='/'
            className='border border-top-0 border-bottom-0'
            style={{ paddingRight: '24px', paddingLeft: '24px' }}
          >
            Blog
          </Nav.Link>
          <Nav.Link
            as={Link}
            to='/career'
            className='border border-top-0 border-bottom-0'
            style={{ paddingRight: '24px', paddingLeft: '24px' }}
          >
            Career
          </Nav.Link>
          <Nav.Link
            as={Link}
            to='/contact'
            className='border border-top-0 border-bottom-0'
            style={{ paddingRight: '24px', paddingLeft: '24px' }}
          >
            Contact
          </Nav.Link>
          <Nav.Link href='/' style={{ paddingRight: '24px', paddingLeft: '24px' }}>
            Call: +1 (000) 000-0000
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
