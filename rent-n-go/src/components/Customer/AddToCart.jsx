import React, { useState,useEffect } from 'react'
import API_BASE_URL from "../Common/baseurl";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";
import CustHeader from "./CustomerHeader"



const ShowCart=(props)=>{ 
  const[status, setStatus]=useState(false);
  const [cartItems, setcartItems] = useState([]
  );
  const [billAmount, setbillAmount]=useState();

  const fetchdata= async ()=>{
      const url = `${API_BASE_URL}/user/cart/${
        JSON.parse(localStorage.getItem("userDetails"))
      }`;
      console.log(url);
      axios
        .get(url)
        .then((response) => {
            console.log(JSON.parse(JSON.stringify(response.data)));
          if (response.data!=="") {
            let amount=0;
           setcartItems(response.data);
           response.data.forEach(element => {
            amount=amount+(element.rent*element.quantity);
          });
          setbillAmount(amount);
          }
        })
        .catch((error) => console.log(error));
  }
 
   useEffect(() => {
     fetchdata();
   
},[]);
  const placeorder= () => {
    let data={
      'userid':window.localStorage.getItem("userDetails"),
      'shopid':window.localStorage.getItem("shopId"),
      'totalRent':billAmount,
      'productorder':cartItems,
    }
    axios({
      method: "post",
      url: `${API_BASE_URL}/customer/totalBill`,
      data: data,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        console.log(response);
        setStatus(true);
      })
      .catch(function (response) {
        
        console.log(response);
      });
  }


  return (
    
   <div>
     
     <CustHeader />
    <div>
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
    </head>
     
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style ={{float:'right'}} onClick={() => placeorder()}>Place Order</button>
         <h2 className="text-center">Cart</h2>

        <table className="table table-striped">
            <thead>
                <tr>
                <th><h4>Name</h4></th>
                    <th><h4>Quantity</h4></th>
                    <th><h4>Rent</h4></th>
                </tr>
            </thead>
            <tbody>
                {
                    (cartItems!==null)?cartItems.map(
                item =>
                            <tr key={item.id}>
                               <td><h6>{item.name}</h6></td>
                                <td><h6>{item.quantity}</h6></td>
                                <td><h6>{item.rent}</h6></td>
                                <td></td>
                            </tr>
                    ):""
                }
            </tbody>
            {
              (billAmount!==null)? <tfoot>

              <tr>
                <td><h6>Total Bill Amount</h6></td>
                <td><h6>{billAmount}</h6></td>
                <td></td>
              </tr>
            </tfoot>
            :""
            }
  

        </table>
       
<div class="container">
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    
     
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <h2 ><center>Bill Details</center> </h2>
          <table className="table table-striped">
            <thead>
                <tr>
                    <th><h4>Name</h4></th>
                    <th><h4>Quantity</h4></th>
                    <th><h4>Rent</h4></th>
                </tr>
            </thead>
            <tbody>
                {
                    (cartItems!==null)?cartItems.map(
                item =>
                            <tr key={item.id}>
                                <td><h5>{item.name}</h5></td>
                                <td><h5>{item.quantity}</h5></td>
                                <td><h5>{item.rent}</h5></td>
                                <td></td>
                            </tr>
                    ):""
                }
            </tbody>
            {
              (billAmount!==null)? <tfoot>

              <tr>
                <td><h5>Total Bill Amount</h5></td>
                <td></td>
                <td><h5>{billAmount}</h5></td>
                
              </tr>
            </tfoot>
            :""
            }
  

        </table>
        <hr/>
        </div>
        <div class="modal-footer">
          <button className="btn btn-success" type="button"  data-dismiss="modal">Pay Now</button>
        </div>
      </div>
      
    </div>
  </div>
  
  </div>
  </div>   
            </div>
);
};
export default ShowCart