import { Component, useEffect, useState } from "react";
import axios from 'axios';
import API_BASE_URL from "../../constants/baseurl";
import Sidenav from '../Dashboard/sideNav';
import { Redirect } from "react-router";
//import login from "../../Images/login.jpg";
import AdminHeader from "../Adminheader";
import Footer from "../../Common/Footer";

const Dashboard=()=>{
const [usercount, setusercount]=useState();
const [ordercount, setordercount]=useState();
const [shopcount, setshopcount]=useState();
const [totalsales,settotalsales]=useState();
  const FetchData=()=>{
    axios.get(`${API_BASE_URL}/admin/userCount`).then((response)=>{
      console.log(response.data);
      setusercount(response.data)
    })
  }
const FetchOrder=()=>{
  axios.get(`${API_BASE_URL}/admin/orderCount`).then((response)=>{
    console.log(response.data);
    setordercount(response.data)
  })
}
  const FetchShop=()=>{
    axios.get(`${API_BASE_URL}/admin/shopCount`).then((response)=>{
      console.log(response.data);
      setshopcount(response.data)
    })

  }
  const FetchSales=()=>{
    axios.get(`${API_BASE_URL}/admin/totalsales`).then((response)=>{
      console.log(response.data);
      settotalsales(response.data)
    })
  }
return(
 
  <>
    <AdminHeader/>
    <head>
    
<link rel="stylesheet" type="text/css" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/bootstrap-extended.min.css"/>
<link rel="stylesheet" type="text/css" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/fonts/simple-line-icons/style.min.css"/>
{/* <link rel="stylesheet" type="text/css" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/colors.min.css"/> */}
    </head>
<div className="row" >
    <div className="col-sm-2">
    <Sidenav/>
    </div>
    <div className="col-sm-10">
        <h3 style={{textAlign:'center'}}>Statistics</h3>
            <div class="row">
        <div class="col-xl-3 col-sm-6 col-12"> 
          <div class="card">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <i class="icon-pencil primary font-large-2 float-left"></i>
                  </div>
                  <div class="media-body text-right"  onChange={FetchOrder()}>
                    <h3>{ordercount}</h3>
                    <span>Total orders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="card">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <i class="icon-speech warning font-large-2 float-left"></i>
                  </div>
                  <div class="media-body text-right" onChange={FetchShop()}>
                    <h3>{shopcount}</h3>
                    <span>New Vendors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="card">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <i class="icon-graph success font-large-2 float-left"></i>
                  </div>
                  <div class="media-body text-right" onChange={FetchData()}>
                    <h3>{usercount}</h3>
                    <span>Total Users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
<div class="row"style={{Align:'center'}}>
    <div class="col-xl-6 col-md-12">
      <div class="card">
        <div class="card-content">
          <div class="card-body cleartfix">
            <div class="media align-items-stretch">
              <div class="align-self-center">
                <h1 class="mr-2">Rs.{totalsales}</h1>
              </div>
              
              <div class="media-body" onChange={FetchSales()}>
                <h4>Total Sales</h4>
                <span>Monthly Sales Amount</span>
              </div>
              <div class="align-self-center">
                <i class="icon-heart danger font-large-2"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
{/* <Footer/>      */}
</>
)
}

export default Dashboard
