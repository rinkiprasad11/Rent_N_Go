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
} from "reactstrap";

import stock_shops from '../../Images/stockshops.jpg';
import CustHeader from "./CustomerHeader";



const ShowShopList=()=>{
  const history = useHistory();  
  const [stockshopsDetails, setStockshopsDetails] = useState({});
  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    const url = `${API_BASE_URL}/customer/shoplist`;
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
  const showList= (id) => {
    window.localStorage.setItem("shopId", id);
    history.push('/customer/showList');
}

  return (
    <div>

<div>
<CustHeader />
<h2 className="text-center">Stockshops List</h2>
<hr/>

  <Row>
        {
            listItems.map(
        item =>
                    <Col>
                      <Card style={{ width: "20rem" }} className="align-item-md-center mb-3 hoverable">
                      <CardBody>
                      <CardTitle className="font-weight-bold"><h3>{item.name}</h3></CardTitle>
                      
                      <CardImg top width="100%" src={stock_shops} alt="Card image cap" />
                      <hr/>
                      <CardSubtitle><h5>Address: {item.pincode}</h5></CardSubtitle>
                      <hr/>
                            <Button className="btn btn-success" onClick={() => showList(item.id)}>View List</Button>
                        </CardBody>
                    </Card>
                    </Col>
            )
        }
</Row>
<hr/>

</div>

    </div>
);
};
export default ShowShopList