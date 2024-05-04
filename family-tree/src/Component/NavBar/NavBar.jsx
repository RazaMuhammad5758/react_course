import React from 'react';
import './NavBar.scss';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoPersonCircleSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "rgb(0, 101, 253)" }} >
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: "white" }}>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Your Trees" style={{ color: "white" , }} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3" >Tree 1</NavDropdown.Item>
                <NavDropdown.Item href="#action4" >Tree 2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Button><IoPersonCircleSharp style={{ fontSize: "30px" }} /></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
