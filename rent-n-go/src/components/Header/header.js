import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar, Nav,Form,FormControl,Button} from 'react-bootstrap';
import Logo2 from "../../Images/Logo2.jpg";

function Header() {
    return(
      <Navbar bg="dark" className="navbar navbar-expand-lg navbar-dark sticky-top" expand="lg">
        <Navbar.Brand href="/home" className="text-white"> <img src={Logo2} width="120" height="90"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="mr-auto">
          <Nav.Link href="/home" className="text-white"><h4><i class="fas fa-home"></i> Home</h4></Nav.Link>
          <Nav.Link href="/login" className="text-white"><h4><i class="fas fa-sign-in-alt"></i> SignIn</h4></Nav.Link>
          <Nav.Link href="/register" className="text-white"><h4><i class="fas fa-user-plus"></i> Signup</h4></Nav.Link>
      </Nav>
      
      <Form inline >
        <div className="input-group"><br/>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="btn btn-success" size="sm">Search</Button>
      </div>
      </Form>

      
      
        </Navbar.Collapse>
    </Navbar>
    )
}
export default Header;