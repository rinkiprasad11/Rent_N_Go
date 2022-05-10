import { Component, useState } from "react";
import axios from 'axios';
import API_BASE_URL from "./baseurl";


const SignUp=(props)=>{
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
                setStatus(true);
                alert("Register Successfully..!!")
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              alert("All Ready Register..!!")
              console.log(response);
            });
        
    }
return(
    <div className="container-fluid">
<form className="col-sm-9" onSubmit={handleFormSubmit} autocomplete="off">
                <h3>Sign Up</h3>

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

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
           
            </div>


);
}
export default SignUp