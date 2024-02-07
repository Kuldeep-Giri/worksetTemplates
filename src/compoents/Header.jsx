import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useToggle from '../configurations/useToggle';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const {Header} = useToggle();
  return (
 <>
  {
    Header === true ?   <section>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/services" style={{textDecoration:"none",fontSize:"18px" ,color:"#000",padding:"3px 10px"}}>Services</NavLink>
            <NavLink to="/testimonials" style={{textDecoration:"none",fontSize:"18px" ,color:"#000",padding:"3px 10px"}}>Testimonials</NavLink>
            <NavLink to="/contact" style={{textDecoration:"none",fontSize:"18px" ,color:"#000",padding:"3px 10px"}}>Contact us</NavLink>
            <NavLink style={{textDecoration:"none",fontSize:"18px" ,color:"#000",padding:"3px 10px"}}>About us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </section> : ""
  }
 </>
  )
}

export default Header