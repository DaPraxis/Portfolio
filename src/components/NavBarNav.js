import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-scroll";


function NavBarNav(props){
    return(
        <Navbar fixed='top' style={{
            transform: `translate(0, ${props.slide})`,
            transition: 'transform 90ms linear',
        }}
            className="border-bottom" bg="white" expand="lg" hidden={props.hidden}>
            <Navbar.Brand>HJ</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                <Link className="nav-link scroll" activeClass="active" to="Intro" spy={true} smooth={true} offset={-70} duration= {500}>Home</Link>
                <Link className="nav-link scroll" activeClass="active" to="AboutMe" spy={true} smooth={true} offset={-70} duration= {500}>1. About Me</Link>
                <Link className="nav-link scroll" activeClass="active" to="Experience" spy={true} smooth={true} offset={-70} duration= {500}>2. Experience</Link>
                <Link className="nav-link scroll" activeClass="active" to="Project" spy={true} smooth={true} offset={-70} duration= {500}>3. Project</Link>
                <Link className="nav-link scroll" activeClass="active" to="ContactMe" spy={true} smooth={true} offset={-70} duration= {500}>4. Contact Me</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBarNav;