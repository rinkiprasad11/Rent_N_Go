import { Component, useState } from "react";
import axios from 'axios';
import API_BASE_URL from "../constants/baseurl";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
}from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Header from "../Header/header";
import login from "../../Images/login.jpg";


const SignIn=(props)=>{
    console.log(props);
    const [Logindata , setLoginData]= useState({
        email:'',
        password:'',
    })
    const [LoginSuccess , setLoginSuccess]= useState(false)
    const [UserRoleDetails ,setUserRoleDetails] = useState('')
    const handleChange=(e)=>{
        //e.preventDefault();
        setLoginData({
            ...Logindata,[e.target.id]: e.target.value
        })
    }
    
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        axios({
            method: "post",
            url: `${API_BASE_URL}/user/login`,
            data: Logindata,
            headers: { "Content-Type": "application/json" },
          })
            .then(function (response) {
              //handle success
              console.log(response.data);
              if(response.data!==""){
                window.localStorage.setItem('userDetails',response.data.id)
                setLoginSuccess(true)
                setUserRoleDetails(response.data.role)
                
              }else{
                  alert("Invalid credentials...please Try again");
              }
              
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
        console.log(UserRoleDetails)
       
    }
return(
    <div>
        <Header/>
        <h3><center>Sign In</center></h3>
        <div>
    <Card className="hoverable">
    <div className="row justify-content-center" style={{paddingBlock:100 ,  backgroundImage:`url(${login})`}} >
        
            <form className="col-md-6" onSubmit={handleFormSubmit} autocomplete="off">
                

                <div className="form-group">
                    <label><i class="fas fa-envelope-square"></i> Email address</label>
                    <input id="email" type="email" className="form-control hoverable" name="email" autocomplete="off" placeholder="Enter email" value={Logindata.email}
                    onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label><i class="fas fa-key"></i> Password</label>
                    <input id="password" type="password" className="form-control hoverable" placeholder="Enter password" value={Logindata.password}
                    onChange={handleChange} />
                </div>

                <Button type="submit" className="btn btn-success btn-block">Sign In</Button>
                <p className="forgot-password text-right">
                    New user &nbsp; <a href="/register"><i class="fas fa-user-plus"></i> Sign Up</a>
                </p>
            </form>
            
               {(LoginSuccess && UserRoleDetails == "CUSTOMER")?<Redirect to="/customer"/>:
                (LoginSuccess && UserRoleDetails=="ADMIN")?<Redirect to ="/adminHome"/>:
                (LoginSuccess && UserRoleDetails=="DELIVERYBOY")? <Redirect to="/deliveryboy"/>:
                (LoginSuccess &&( UserRoleDetails==null && UserRoleDetails!=="CUSTOMER" && UserRoleDetails !=="ADMIN"
                && UserRoleDetails!=="DELIVERYBOY"))?<Redirect to="/stockshops"/>:""}
            </div>
            </Card>
            </div>
            </div>
);
}
export default SignIn