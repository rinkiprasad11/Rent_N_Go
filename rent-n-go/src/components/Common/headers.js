import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar, Nav,Form,FormControl,Button} from 'react-bootstrap';

function Header() {
    return(
      <Navbar bg="light" className="navbar navbar-expand-lg navbar-dark sticky-top" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/login">SignIn</Nav.Link>
          <Nav.Link href="/register">Signup</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    )
}
export default Header;