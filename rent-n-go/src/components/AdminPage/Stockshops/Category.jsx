import { Component, useState,useEffect } from "react";
import axios from 'axios';
import API_BASE_URL from "../../constants/baseurl";
import {Redirect, useHistory} from 'react-router';
import Sidenav from '../Dashboard/sideNav';
import AdminHeader from "../Adminheader";


const CategoryList=()=>{
    const history=useHistory();
    const [catList, setcatList]=useState([]);
    
    const fetchData = async () => {
     axios.get(`${API_BASE_URL}/admin/categoryList`).then((response)=>{
         console.log(response.data);
         setcatList(response.data);
         console.log(catList);
     }) 
    }
    const deleteShop=(catId) =>{
        console.log(catId)
        axios.delete(`${API_BASE_URL}/admin/stockshops/${catId}`).then((response)=>{
            const newList = catList.filter(cat=> cat.id!==catId);
            setcatList(catList);
            console.log(response)
            alert('User deleted successfully.');
            
            
        })
    }
   const addcat=() =>{
        window.localStorage.removeItem("catId");
        history.push({
            pathname:'/admin/category',
        });
    }
    useEffect(()=>{
        fetchData();
    },[]);

  
   
    return (
    <div>
        <AdminHeader/>
        <div className="row">
      <div className="col-sm-2" >
      <Sidenav/>
      </div>
    <div className="col-sm-10">
            <h2 className="text-center">Product Categories</h2>
            <button className="btn btn-danger" style={{width:'100px'}} onClick={() => addcat()}> Add New</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            catList.map(
                    cat =>
                                <tr key={cat.id}>
                                    <td>{cat.catName}</td>
                                    
                                    <td>
                                        <button className="btn btn-success" onClick={() => deleteShop(cat.id)}> Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
            </div>
           
            </div>
    
)
        
}
export default CategoryList