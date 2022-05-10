import { Component, useState,useEffect } from "react";
import axios from 'axios';
import API_BASE_URL from "../../constants/baseurl";
import {useHistory} from 'react-router';
import Sidenav from '../Dashboard/sideNav';
import AdminHeader from "../Adminheader";


const ShopList=()=>{
    const history=useHistory();
    const [shopList, setShopList]=useState([]);
    const fetchData = async () => {
     axios.get(`${API_BASE_URL}/admin/shopList`).then((response)=>{
         console.log(response.data);
         setShopList(response.data);
         console.log(shopList);
     }) 
    }
    const deleteShop=(shopId) =>{
        console.log(shopId)
        axios.delete(`${API_BASE_URL}/admin/stockshops/${shopId}`).then((response)=>{
            const newList = shopList.filter(shop=> shop.id!==shopId);
            setShopList(newList);
            console.log(response)
            alert('User deleted successfully.');
            
            
        })
    }
   const addShop=() =>{
        window.localStorage.removeItem("shopId");
        history.push({
            pathname:'/admin/shopRegister',
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
            <h2 className="text-center">Stockshops Details</h2>
            <button className="btn btn-primary" style={{width:'100px'}} onClick={() => addShop()}> Add New</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            shopList.map(
                    shop =>
                                <tr key={shop.id}>
                                    <td>{shop.name}</td>
                                    <td>{shop.email}</td>
                                    <td>{shop.mob}</td>
                                    <td>{shop.pincode}</td>
                                    
                                    <td>
                                        <button className="btn btn-success" onClick={() => deleteShop(shop.id)}> Delete</button>
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
export default ShopList