import React, { useState,useEffect } from 'react'
import API_BASE_URL from "../Common/baseurl";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import CustHeader from "./CustomerHeader"



const OrderDetailsUser=()=>{
  const history = useHistory();  
  const [orderItems, setorderItems] = useState([]);
  useEffect(() => {
    const url = `${API_BASE_URL}/customer/orderDetails/${
      JSON.parse(localStorage.getItem("userDetails"))
    }`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        response.data.map(item=>{
          console.log(item.orderDate)
        })
        if (response.data!=="") {
          setorderItems(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div>
      <CustHeader />
        <h2 className="text-center">order List</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th className="hidden">Id</th>
                    <th>orderDate</th>
                    <th>status</th>
                    <th>totalBill</th>
                </tr>
            </thead>
            <tbody>
                {
                    orderItems.map(
                item =>
                            <tr key={item.id}>
                              <td>{item.id}</td>
                                <td>{item.orderDate}</td>
                                <td>{item.status}</td>
                                <td>{item.totalBill}</td>
                            </tr>
                    )
                }
            </tbody>
        </table>

    </div>
);
};
export default OrderDetailsUser