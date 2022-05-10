import { Component, useState } from "react";
import axios from 'axios';
import API_BASE_URL from "../../constants/baseurl";
import Sidenav from '../Dashboard/sideNav';
import { Redirect } from "react-router";
import AdminHeader from "../Adminheader";

const DeliveryReg=(props)=>{
    const[status, setStatus]=useState(false);
    const [newUser , setnewUser]= useState({
        name:'',
        email:'',
        mobile:'',
        password:'',
        role:''
    })
    const handleChange=(e)=>{
        //e.preventDefault();
        setnewUser({
            ...newUser,[e.target.id]: e.target.value
        })
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(props)
        if(props.location.pathname==="/admin/register")
    {
        newUser.role = "DELIVERYBOY"
    }
    else{
        newUser.role = "CUSTOMER"
    }
        axios({
            method: "post",
            url: `${API_BASE_URL}/user/register`,
            data: newUser,
            headers: { "Content-Type": "application/json" },
          })
            .then(function (response) {
                setStatus(true);
              console.log(response);
            })
            .catch(function (response) {
              alert("User already registered")
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
           
<form style={{align:"center"},{width:"70%"}} onSubmit={handleFormSubmit} autoComplete="off">
                <h3>Add New Delivery Person</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input id="name" type="text" className="form-control" placeholder="Name" value={newUser.name}
                    onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>contact</label>
                    <input id="mobile" type="text" className="form-control" placeholder="Contact" value={newUser.mobile}
                    onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input id="email" type="email" className="form-control" name="email" autocomplete="off" placeholder="Enter email" value={newUser.email}
                    onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Enter password" value={newUser.password}
                    onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Add</button>
                <p className="forgot-password text-right">
                </p>
            </form>
            </div>
            </div>
            {status?<Redirect to="/admin/userList"/>:""}
            </div>


);
}

export default DeliveryReg