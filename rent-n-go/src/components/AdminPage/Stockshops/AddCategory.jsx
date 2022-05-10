import { Component, useState } from "react";
import axios from 'axios';
import API_BASE_URL from "../../constants/baseurl";
import Sidenav from '../Dashboard/sideNav';
import { Redirect } from "react-router";
import AdminHeader from "../Adminheader";

const AddCat=(props)=>{
    const[status, setStatus]=useState(false);
    const [newCat , setnewCat]= useState({
        catName:''
    })
    const handleChange=(e)=>{
        //e.preventDefault();
        setnewCat({
            ...newCat,[e.target.id]: e.target.value
        })
    }
    

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        axios({
            method: "post",
            url: `${API_BASE_URL}/admin/category`,
            data: newCat,
            headers: { "Content-Type": "application/json" },
          })
            .then(function (response) {
                setStatus(true);
                alert("Updated Successfully")
              //handle success
              console.log(response);
            })
            .catch(function (response) {
                alert("Duplicate entry not allowed")
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
                <h3>Add New Category</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input id="catName" type="text" className="form-control" placeholder="Name" value={newCat.catname}
                    onChange={handleChange}/>
                </div>

        
                <button type="submit" className="btn btn-primary btn-block">Add</button>
                <p className="forgot-password text-right">
                </p>
            </form>
            </div>
            </div>
            {status?<Redirect to="/admin/categoryList"/>:""}
            </div>

);
}
export default AddCat