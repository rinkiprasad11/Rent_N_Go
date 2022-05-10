import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,Link
  } from "react-router-dom";
import SignIn from '../Login/Login';

const LogOut=()=>{
    window.localStorage.setItem('userDetails',null)

    return(
        <Link path="/login"  component={SignIn}/>
    )
}
export default LogOut;