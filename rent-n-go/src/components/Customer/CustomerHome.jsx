import CustHeader from "./CustomerHeader"

import React, { useEffect } from "react";
import { Jumbotron, Container, Button, Row, Col } from "reactstrap";
//import Carousel from "react-bootstrap/Carousel";

import shop1 from "../../Images/shop1.jpg"
import shop2 from "../../Images/shop2.jpg"
import shop3 from "../../Images/shop3.jpg"
import shop4 from "../../Images/shop4.jpg"
import { useHistory } from "react-router-dom";
import { Carousel } from "react-bootstrap";



const CustomerHome=()=>{


        const history = useHistory();
        useEffect(() => {
          document.title = "Home";
        }, []);

    return(

    <div>
        <CustHeader />
    
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shop1}
      alt="First slide"
    />
    <Carousel.Caption>
    <Button color="success" onClick={() => {history.push("/customer/showShopList");}}>Order Now</Button>
      <h3>Its A Feeling</h3>
      <p >Design is not just what it looks like and feels like.Design its how it works.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shop2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <Button color="success" onClick={() => {history.push("/customer/showShopList");}}>Order Now</Button>
      <h3>Love It Here</h3>
      <p>We design our furniture with utmost care and love. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shop3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <Button color="success" onClick={() => {history.push("/customer/showShopList");}}>Order Now</Button>
      <h3>Home Sweet Home </h3>
      <p >A variety of furniture is perfectly made to make you feel happy</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shop4}
      alt="Fourth slide"
    />

    <Carousel.Caption>
    <Button color="success" onClick={() => {history.push("/customer/showShopList");}}>Order Now</Button>
      <h3>Your Thougth our design</h3>
      <p>The joy of renting furniture is not compromised here.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        

        </div>
        
    )
}
export default CustomerHome