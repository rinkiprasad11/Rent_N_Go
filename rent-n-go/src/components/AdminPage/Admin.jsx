import { Component, useState } from "react";
import axios from 'axios';
import API_BASE_URL from "../constants/baseurl";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,Link
  }from "react-router-dom";
import Sidenav from './Dashboard/sideNav';
import RegForm from "../Registration/RegForm";
import DeliveryReg from "./Employee/DeliveryReg"
import UserList from "./Employee/UserList";
import SideMenu from "./Dashboard/sideNav";
import ShopList from "./Stockshops/StockshopsList";
import ShopReg from "./Stockshops/StockshopsReg";
import CategoryList from "./Stockshops/Category"
import Dashboard from "./Dashboard/Dashboard";
import AdminHeader from "./Adminheader";

  const AdminHome=()=>{
     
return(
  <div>
      <AdminHeader/>

    <div className="row">
      <div className="col-sm-2" >
      <Sidenav/>
      </div>
    <div className="col-sm-10">
    <Switch>
              <Route path="/admin/dashboard" component={Dashboard}>Home</Route>
              <Route path={`/admin/register`} component={DeliveryReg}><DeliveryReg/></Route>
              <Route path={`/admin/userList`} component={UserList}><UserList/></Route>
              <Route path={`/admin/shopList`}><ShopList/></Route>
              <Route path="/admin/shopRegister"><ShopReg/></Route>
              <Route path="/admin/categoryList"><CategoryList/></Route>
    
    </Switch>
    </div>
    
    </div>
    </div>

)
  }
  export default AdminHome

