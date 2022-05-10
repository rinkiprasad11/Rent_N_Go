import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar, Nav,Form,FormControl,Button} from 'react-bootstrap';

function ShopHeader() {
    return(
      <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/stockshopshome" className="text-white">Product Junction</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/stockshops" className="text-white"><i class="fas fa-home"></i> Stockshops </Nav.Link>
          <Nav.Link href="/addProduct" className="text-white"><i class="fas fa-plus-circle"></i> Add Product</Nav.Link>
          <Nav.Link href="/showListList" className="text-white"><i class="fas fa-book"></i> Show List</Nav.Link>
          <Nav.Link href="/stockshops/updateProfile" className="text-white"><i class="fas fa-user-edit"></i> Update Profile</Nav.Link>
          <Nav.Link href="/stockshops/orderDetails" className="text-white"><i class="fas fa-notes-medical"></i> Order Details</Nav.Link>
          <Nav.Link href="/LogOut" className="text-white"><i class="fas fa-sign-out-alt"></i> LogOut</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}
export default ShopHeader;