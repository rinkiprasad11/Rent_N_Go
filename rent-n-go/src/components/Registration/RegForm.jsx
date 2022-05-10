import { Component, useState } from "react";
import axios from 'axios';
import API_BASE_URL from "../constants/baseurl";
import { Card, Button } from "react-bootstrap";
import Header from "../Header/header";
import login from "../../Images/login.jpg";


const SignUp=(props)=>{
    
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
        if(props.location.pathname=="/admin/register")
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
              //handle success
              alert('Updated successfully')
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              alert('Wrong information')
              console.log(response);
            });
        }
return(
<div>
<Header/>
        <h3><center>Sign Up</center></h3>

     <Card className="hoverable">
    <div className="row justify-content-center" style={{paddingBlock:50 , backgroundImage:`url(${login})`}}>
        
            <form className="col-sm-6" onSubmit={handleFormSubmit} autocomplete="off">
               
                <div className="form-group">
                    <label><i class="fas fa-file-signature"></i> Name</label>
                    <input id="name" type="text" className="form-control hoverable" placeholder="Name" value={newUser.name}
                    onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label><i class="fas fa-mobile-alt"></i> Contact</label>
                    <input id="mobile" type="text" className="form-control" placeholder="Contact" value={newUser.mobile}
                    onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label><i class="fas fa-envelope-square"></i> Email address</label>
                    <input id="email" type="email" className="form-control" name="email" autocomplete="off" placeholder="Enter email" value={newUser.email}
                    onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label><i class="fas fa-key"></i> Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Enter password" value={newUser.password}
                    onChange={handleChange} />
                </div>
                <Button type="submit" className="btn btn-success btn-block">Sign Up</Button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
            </div>
            </Card>
            </div>

);
}
export default SignUp