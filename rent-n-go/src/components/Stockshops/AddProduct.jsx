import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import API_BASE_URL from "../Common/baseurl";
import ShopHeader from "./StockshopsHeader";
import { Redirect } from "react-router";
import AdminHeader from "../AdminPage/Adminheader";
import Sidenav from '../AdminPage/Dashboard/sideNav';

const AddProduct = () => {
  const[status, setStatus]=useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    document.title = "Add-Product";
  }, []);

  //form handle add product function
  const handleForm = (e) => {
    console.log(e);
    // setProduct(e);

    console.log("abababab", product);
    postDatatoServer(product);
    e.preventDefault();
  };

  //creating function to post data on server
  //check map url
  const postDatatoServer = (data) => {
    const headers = {
      "Content-Type": "application/json",
    };
    
    const shop_id = localStorage.getItem("userDetails");
    console.log(shop_id);
    axios
      .post(`${API_BASE_URL}/stockshops/${shop_id}`, data, {
        headers: headers,
      })
      .then(
        (response) => {
          console.log(response);
          alert("Product add Successfully");
          setStatus(true);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <AdminHeader/>
      {/* <Sidenav/> */}
      <div className="text-center" style={{marginTop:"30px"}}>
      <h1>Add Product In List</h1>
      </div>
      {/* <div className="col-sm-6"> */}
    
        <Card style={{marginTop:"25px"}}>
    <div className="row m-6 justify-content-center absolute-center" style={{paddingBlock:1}}>

        <Form className="col-sm-4" onSubmit={handleForm}>
          <FormGroup>
            <Label for="name"><i class="fas fa-hamburger"></i> Product Name</Label>
            <Input
              type="text"
              placeholder="eg. sofa ..."
              name="name"
              id="name"
              onChange={(e) => {
                setProduct({ ...product, name: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="rent"><i class="fas fa-rupee-sign"></i> Rent of product</Label>
            <Input
              type="number"
              name="rent"
              id="rent"
              onChange={(e) => {
                setProduct({ ...product, rent: e.target.value });
              }}
            />
          </FormGroup>

          {/* <FormGroup>
            <Label for="deposite"><i class="fas fa-rupee-sign"></i> Deposite of product</Label>
            <Input
              type="number"
              name="deposite"
              id="deposite"
              onChange={(e) => {
                setProduct({ ...product, deposite: e.target.value });
              }}
            />
          </FormGroup> */}

          <FormGroup>
            <Label for="description"><i class="fas fa-clipboard"></i> Description</Label>
            <Input
              type="text-area"
              name="description"
              id="description"
              onChange={(e) => {
                setProduct({ ...product, description: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleFile" sm={10}><i class="fas fa-images"></i> Product Image</Label>
            <Input
              type="file"
              name="file"
              id="exampleFile"
              onChange={(e) => {
                setProduct({ ...product, name: e.target.value });
                // localStorage.setItem('product', product);
              }}
            />
          </FormGroup>

          <Container>
            <Button type="submit" color="success">
              Add Product
            </Button>
          </Container>
        </Form>
    </div>
    
    </Card>
    {/* </div> */}
    {status?<Redirect to="/showListList"/>:""}
    </div>
  );
};

export default AddProduct;
