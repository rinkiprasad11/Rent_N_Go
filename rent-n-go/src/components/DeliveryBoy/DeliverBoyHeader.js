import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar, Nav,Form,FormControl,Button,icon} from 'react-bootstrap';

function DeliveryBoyHeader() {
    return(
      <Navbar bg="dark"  className="navbar navbar-expand-lg navbar-dark sticky-top" expand="lg">
      <Navbar.Brand href="/deliveryboy" className="text-white"><i class="fas fa-gift"></i> Delivery Junction</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/deliveryboy" className="text-white"><i class="fas fa-home"></i> Employee Home</Nav.Link>
          <Nav.Link href="/deliveryboy/updateEmployee" className="text-white"><i class="far fa-user"></i> Update Profile</Nav.Link>
          <Nav.Link href="/deliveryboy/orderDetailsEmployee" className="text-white"><i class="fas fa-notes-medical"></i> Order Details</Nav.Link>
          <Nav.Link href="/LogOut" className="text-white"><i class="fas fa-sign-out-alt"></i> LogOut</Nav.Link>
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
export default DeliveryBoyHeader;