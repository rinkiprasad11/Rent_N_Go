import { Component, useState } from "react";
import axios from 'axios';
import API_BASE_URL from "./baseurl";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  }from "react-router-dom";

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
    <div className="container-fluid">
<form className="col-sm-9" onSubmit={handleFormSubmit} autocomplete="off">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input id="email" type="email" className="form-control" name="email" autocomplete="off" placeholder="Enter email" value={Logindata.email}
                    onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Enter password" value={Logindata.password}
                    onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                <p className="forgot-password text-right">
                    New user <a href="#">sign up?</a>
                </p>
            </form>
            
               {(LoginSuccess && UserRoleDetails == "CUSTOMER")?<Redirect to="/customer"/>:
                (LoginSuccess && UserRoleDetails=="ADMIN")?<Redirect to ="/adminHome"/>:
                (LoginSuccess && UserRoleDetails=="DELIVERYBOY")? <Redirect to="/deliveryboy"/>:
                (LoginSuccess &&( UserRoleDetails==null && UserRoleDetails!=="CUSTOMER" && UserRoleDetails !=="ADMIN"
                && UserRoleDetails!=="DELIVERYBOY"))?<Redirect to="/stockshops"/>:""}
             <Footer/>
            </div>
    

);
}
export default SignIn