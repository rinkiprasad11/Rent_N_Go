import React, { useState,useEffect } from 'react'
import API_BASE_URL from "../Common/baseurl";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import RestHeader from "./StockshopsHeader"



const OrderDetails=()=>{
  const history = useHistory();  
  const [orderItems, setorderItems] = useState([]);
  useEffect(() => {
    const url = `${API_BASE_URL}/stockshops/orderDetails/${
      JSON.parse(localStorage.getItem("userDetails"))
    }`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        if (response.data!=="") {
          setorderItems(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);


  const acceptOrder=(id) =>{
    console.log(id);
    window.localStorage.setItem("orderId", id);
    axios({
        method:"put",
        url:`${API_BASE_URL}/stockshops/${JSON.parse(localStorage.getItem("orderId"))
    }/accept`,
       data: orderItems,
       headers: { "Content-Type": "application/json" }
      })
  .then((response=>{
    console.log(response)
    alert("order accepted successfully")
    history.push('/stockshops/orderDetails');
  }))
}


  const declineOrder=(deleteId) =>{
    console.log(deleteId)
    window.localStorage.setItem("orderId", deleteId);
    axios({
        method:"put",
        url:`${API_BASE_URL}/stockshops/${JSON.parse(localStorage.getItem("orderId"))
    }/decline`,
       data: orderItems,
       headers: { "Content-Type": "application/json" }
      })
  .then((response=>{
    console.log(response)
    alert("order decline successfully")
    history.push('/stockshops/orderDetails');
  }))
}

  return (
    <div>
      <RestHeader/>
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
                                <td>{item.OrderDate}</td>
                                <td>{item.status}</td>
                                <td>{item.totalBill}</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button className="btn btn-success" onClick={() => declineOrder(item.id)}> Decline Order</button>
                                    <button className="btn btn-success" onClick={() => acceptOrder(item.id)} style={{marginLeft: '20px'}}> Accept Order</button>
                                </td>
                            </tr>
                    )
                }
            </tbody>
        </table>

    </div>
);
};
export default OrderDetails