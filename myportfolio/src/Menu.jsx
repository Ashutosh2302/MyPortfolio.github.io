import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" ;
import "./index.css";
import {Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap';
const Menu = () =>{
return(
    <>
    
    <Navbar className="navbar fixed-top" ccollapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="/">Portfo<span style = {{color: "red"}}>lio</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="content ml-auto">
      <Nav.Link class = "nav-link" href="/about">About Me</Nav.Link>
      <Nav.Link class = "nav-link" href="/skills">Skills</Nav.Link>
      <Nav.Link class = "nav-link" href="/education">Education</Nav.Link>
      <Nav.Link class = "nav-link" href="/projects">Projects</Nav.Link>
      <Nav.Link class = "nav-link" href="/experience">Experience</Nav.Link>
      <Nav.Link class = "nav-link" href="/interestsandachivements">Interests & achivements</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
    
);
};
export default Menu;