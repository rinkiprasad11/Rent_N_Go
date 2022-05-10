import { Component, useState,useEffect } from "react";
import axios from 'axios';
import API_BASE_URL from "../../constants/baseurl";
import {useHistory} from 'react-router';
import Sidenav from '../Dashboard/sideNav';
import AdminHeader from "../Adminheader"


const UserList=()=>{
    const history=useHistory();
    const [userList, setUserList]=useState([]);
    const [DeliveryBoyList, setDeliveryBoyList]=useState([]);
   
    const fetchData = async () => {
     axios.get(`${API_BASE_URL}/admin/userList`).then((response)=>{
         console.log(response.data);
         setUserList(response.data);
         
         
         console.log(userList);
     }) 
    }

   const addUser=() =>{
    
        window.localStorage.removeItem("userId");
        history.push({
            pathname:'/admin/register',
            state:{
                role:'DELIVERYBOY'
            }
        });
    }
    const deleteUser=(userId) =>{
        console.log(userId)
        axios.delete(`${API_BASE_URL}/admin/deleteuser/${userId}`).then((response)=>{
            console.log(response)
            alert('User deleted successfully.');
            const newList = userList.filter(user=> user.id!==userId);
            setUserList(newList);
        })
    }
    useEffect(()=>{
        fetchData();
    },[]);

  
   
    return (
    <div>
       <AdminHeader/>
        <div className="row" style={{height:'100%'}}>
      <div className="col-sm-2" >
      <Sidenav/>
      </div>
      
    <div className="col-sm-10">
            <h2 className="text-center">User Details</h2>
            <button className="btn btn-danger" style={{width:'150px'}} onClick={() => addUser()}> Add Employee</button>
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            userList.map(
                    user =>
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.role}</td>
                                    
                                    <td>
                                        <button className="btn btn-success" onClick={() => deleteUser(user.id)}> Delete</button>
                                        {/*<button className="btn btn-success" onClick={() => this.editUser(user.id)} style={{marginLeft: '20px'}}> Edit</button>*/}
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
export default UserList