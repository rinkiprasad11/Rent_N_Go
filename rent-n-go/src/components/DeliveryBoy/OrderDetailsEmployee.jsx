import React, { useState,useEffect } from 'react'
import API_BASE_URL from "../Common/baseurl";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {Card,Button,CardTitle,CardBody,Container,Col,CardSubtitle,CardImg,NavLink,CardFooter} from "reactstrap"
import DeliveryBoyHeader from './DeliverBoyHeader';


const OrderDetailsEmployee=()=>{
  const history = useHistory();  
  const [orderItems, setorderItems] = useState([]);
  useEffect(() => {
    const url = `${API_BASE_URL}/delivery_boy/customer_list`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        if (response.data!=="") {
          setorderItems(response.data);
          console.log("inside")
        }
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div>
      <DeliveryBoyHeader/>
        <h2 className="text-center" style={{marginTop:"30px"}}>order List</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th className="hidden">Id</th>
                    <th>userAddress</th>
                    <th>pincode</th>
                    <th>userId</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {
                    orderItems.map(
                item =>
                            <tr key={item.id}>
                              <td>{item.id}</td>
                                <td>{item.userAddress}</td>
                                <td>{item.pincode}</td>
                                <td>
                                   {/* {console.log(item.userId)} */}
                                   {item.userId.name}
                                </td>
                            </tr>
                    )
                }
            </tbody>
        </table>

    </div>
);
};
export default OrderDetailsEmployee;