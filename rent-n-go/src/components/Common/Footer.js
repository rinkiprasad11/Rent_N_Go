import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Footer = () => {
  return (
    // <div style={"margin:50;"}>
    //   <div style={"position:relative"}>
    <MDBFooter color="black" className="font-small pt-4" style={{marginTop:"120px"}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">

          <h3 className="title"><i class="fas fa-address-card fa-2x"></i> About Us</h3>
            <p>
            <h6><i class="far fa-user"> </i> Rinkiraj Prasad <br/><i class="far fa-user"> </i> Aishwarya Pawar <br/>
            <i class="far fa-user"> </i> Prerana Bachhav <br/><i class="far fa-user"> </i> Sainand Shitole </h6>
            </p>

          </MDBCol>
          <MDBCol md="6">

            <h3 className="title" color="white"><i class="fas fa-phone-square-alt fa-2x"></i> Contact Us</h3>
            <h6>+91-8446658593</h6>
            <h6>+91-7057376968</h6>
            <h6>+91-9403447049</h6>
            <h6>+91-8805447517</h6>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright : Rent N Go</MDBContainer>
      </div>
    </MDBFooter>
    // </div>
    // </div>
  );
}

export default Footer;



