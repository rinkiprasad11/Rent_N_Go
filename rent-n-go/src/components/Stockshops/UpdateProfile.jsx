import { Component, useState } from "react";
import axios from 'axios';
import API_BASE_URL from "../Common/baseurl";
import { useHistory } from "react-router-dom";
import { Card } from "reactstrap";
import ShopHeader from "./StockshopsHeader"

const UpdateProfile=(props)=>{
  const history = useHistory(); 
  const [ shopProfile, setshopProfile] = useState({
            id: '',
            email: '',
            mob: '',
            name: '',
            password:'',
            pincode:'',
  })

  const handleChange=(e)=>{
    setshopProfile({
      ...shopProfile,[e.target.id]: e.target.value
    })
  }
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(props)
    axios({
      method: "put",
      url:`${API_BASE_URL}/stockshops/${JSON.parse(localStorage.getItem("userDetails"))
    }`,
     data: shopProfile,
     headers: { "Content-Type": "application/json" }
    })
    .then(function (response) {
      //handle success
      console.log(response);
      alert('updation successful')
      history.push('/stockshops');
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
  }
  return(
    <div>
 <ShopHeader/>
   
    <Card>
    <div className="row justify-content-center m-5" style={{paddingBlock:1}}>
            <form className="col-sm-6" onSubmit={handleFormSubmit} autocomplete="off">
                <h3>Update Profile</h3>

                <div className="form-group">
                    <label><i class="fas fa-envelope-open-text"></i> Email</label>
                    <input id="email" type="text" className="form-control" placeholder="Email"  readonly="true" defaultValue={shopProfile.email}
                    onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label><i class="fas fa-mobile-alt"></i> Mobile</label>
                    <input id="mob" type="text" className="form-control" placeholder="Mobile" value={shopProfile.mob}
                    onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label><i class="fas fa-file-signature"></i> Name</label>
                    <input id="name" type="text" className="form-control" name="name"  placeholder="Name" value={shopProfile.name}
                    onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label><i class="fas fa-key"></i> Password</label>
                    <input id="password" type="text" className="form-control" placeholder="*******" value={shopProfile.password}
                    onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label><i class="fas fa-address-card"></i> Pincode</label>
                    <input id="pincode" type="text" className="form-control" placeholder="Pincode" value={shopProfile.pincode}
                    onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-success btn-block">Save</button>
            </form>
            </div>
            </Card>
 </div>

);
}
  
export default UpdateProfile;