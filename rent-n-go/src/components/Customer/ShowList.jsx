import React, { useState,useEffect } from 'react'
import API_BASE_URL from "../Common/baseurl";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {
  Card,
  Button,
  CardTitle,
  CardBody,
  Container,
  Col,
  CardSubtitle,
  CardImg,
  NavLink,
  Row,
  CardText,
} from "reactstrap";

import table from '../../Images/table.jpg';
import CustHeader from "./CustomerHeader";



const ShowList=()=>{
  const history = useHistory();  
  const [listItems, setListItems] = useState([]);
  const [cartItems, setcartItems] = useState([]
    );
  useEffect(() => {
    const url = `${API_BASE_URL}/stockshops/${
      JSON.parse(localStorage.getItem("shopId"))
    }`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        if (response.data!=="") {
          setListItems(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  
  const deleteFromCart=(id)=>{
    const url = `${API_BASE_URL}/user/shoppingCart/removeProduct/${
      JSON.parse(localStorage.getItem("listlistId"))
    }`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
          console.log(JSON.parse(JSON.stringify(response.data)));
        if (response.data!=="") {
          setcartItems(response.data);
          console.log(cartItems);
        }
      }).catch((error) => console.log(error));
  }
  const addToCart= (id) => {
    window.localStorage.setItem("listlistId", id);
    const url = `${API_BASE_URL}/user/Cart/addProduct/${
      JSON.parse(localStorage.getItem("listlistId"))
    }`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
          console.log(JSON.parse(JSON.stringify(response.data)));
        if (response.data!=="") {
          setcartItems(response.data);
          console.log(cartItems);
        }
      }).catch((error) => console.log(error));
  }
const showCart=()=>{
  history.push('/customer/showCart')
}
  
  return (
    <div>
<CustHeader />
<h2 className="text-center">List</h2>
        <hr/>
        <button className="btn btn-success" onClick={() => showCart()}><i class="fas fa-shopping-cart"></i> Show Cart</button>
<Row>
      {
          listItems.map(
      item =>
                  <Col>
                   
                    <Card style={{ width: "20rem" }} className="align-item-md-center mb-3 hoverable">
                    <CardBody>
                    <CardTitle className="font-weight-bold"><h3>{item.name}</h3></CardTitle>
                  
                    <CardImg top width="100%" src={table} alt="Card image cap" />
                    <hr/>
                    <CardText>{item.description}</CardText>
                    <hr/>
                    <CardSubtitle><h5>Rs.<i class="fas fa-rupee-sign"></i>{item.rent}</h5></CardSubtitle>
                    <hr/>
                    <Button className="btn btn-success" onClick={() => addToCart(item.id)}> + Add</Button>
                    <button className="btn btn-danger" onClick={() => deleteFromCart(item.id)}style={{marginLeft: '20px'}}>-Remove</button>
                      </CardBody>
                  </Card>
                  </Col>
          )
      }
</Row>
<hr/>
       

    </div>
);
};
export default ShowList