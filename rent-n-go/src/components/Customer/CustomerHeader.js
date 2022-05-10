import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar, Nav,Form,FormControl,Button} from 'react-bootstrap';

function CustHeader() {
    return(
      <div>
      <Navbar bg="dark" className="navbar navbar-expand-lg navbar-dark sticky-top" expand="lg">
      <Navbar.Brand href="/customer" className="text-white" >Customer Junction</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/customer" className="text-white"><i class="fas fa-home"></i>Customer Home</Nav.Link>
          <Nav.Link href="/customer/updateUser" className="text-white"><i class="far fa-user"></i>Update Profile</Nav.Link>
          <Nav.Link href="/customer/orderDetailsUser" className="text-white">Order Details</Nav.Link>
          <Nav.Link href="/customer/showShopList" className="text-white">Stockshops List</Nav.Link>
          <Nav.Link href="/LogOut" className="text-white"><i class="fas fa-sign-out-alt"></i>LogOut</Nav.Link>
        </Nav>
        
        <Form inline >
        <div className="input-group"><br/>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="btn btn-success" size="sm">Search</Button>
      </div>
      </Form>

      </Navbar.Collapse>
    </Navbar>
    </div>
    )
}
export default CustHeader;