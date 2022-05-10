import { Component, useState } from "react";
import axios from 'axios';
import API_BASE_URL from "../../constants/baseurl";
import Sidenav from '../Dashboard/sideNav';
import { Redirect } from "react-router";
import AdminHeader from "../Adminheader";

const ShopReg=(props)=>{
    const[status, setStatus]=useState(false);
    const [newShop , setnewShop]= useState({
        name:'',
        email:'',
        mob:'',
        password:'',
        pincode:''
    })
    const handleChange=(e)=>{
        //e.preventDefault();
        setnewShop({
            ...newShop,[e.target.id]: e.target.value
        })
    }
    

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        axios({
            method: "post",
            url: `${API_BASE_URL}/admin/shopRegister`,
            data: newShop,
            headers: { "Content-Type": "application/json" },
          })
            .then(function (response) {
                setStatus(true);
              //handle success
              
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
    
    }
return(
    <div>
        <AdminHeader/>
        <div className="row">
      <div className="col-sm-2" >
      <Sidenav/>
      </div>
    <div className="col-sm-10">
            <form className="col-sm-9" onSubmit={handleFormSubmit} autocomplete="off">
                <h3>Add New Stock_shops</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input id="name" type="text" className="form-control" placeholder="Name" value={newShop.name}
                    onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>contact</label>
                    <input id="mob" type="text" className="form-control" placeholder="Contact" value={newShop.mobile}
                    onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input id="email" type="email" className="form-control" name="email" autocomplete="off" placeholder="Enter email" value={newShop.email}
                    onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Enter Password" value={newShop.password}
                    onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Pincode</label>
                    <input id="pincode" type="text" className="form-control" placeholder="Enter Pincode" value={newShop.pincode}
                    onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                </p>
            </form>
            </div>
            </div>
            {status?<Redirect to="/admin/shopList"/>:""}
            </div>

);
}
export default ShopReg