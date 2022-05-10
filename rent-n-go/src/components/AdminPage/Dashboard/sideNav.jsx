import { Component, useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,Link
  }from "react-router-dom";
import SignUp from "../../Registration/RegForm";
import UserList from "../Employee/UserList";

  const SideMenu=()=>{
    
    return(
      <div id="mySidenav" class="sidenav">
  
            <Link to="/admin">Home</Link>
            <Link to="/admin/categoryList" >Product Categories</Link>
            <Link to={`/admin/userList`}>UserList</Link>
            <Link to="/admin/shopList">Stockshops</Link>
            <Link to="/addProduct">Add Product</Link>

            
    </div>
    
    
    )
      }
      export default SideMenu