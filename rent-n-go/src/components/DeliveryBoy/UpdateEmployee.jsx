import { Component, useState } from "react";
import axios from 'axios';
import API_BASE_URL from "../Common/baseurl";
import { useHistory } from "react-router-dom";
import CustHeader from "../Customer/CustomerHeader"
import { Card } from "reactstrap";
import DeliveryBoyHeader from "./DeliverBoyHeader";

const UpdateEmployee=(props)=>{
  const history = useHistory(); 
  const [ userProfile, setuserProfile] = useState({
            id: window.localStorage.getItem("userDetails"),
            email: '',
            mobile: '',
            name: '',
            password:'',
  })

  const handleChange=(e)=>{
    setuserProfile({
      ...userProfile,[e.target.id]: e.target.value
    })
  }
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(props)
    axios({
      method: "put",
      url:`${API_BASE_URL}/user/${JSON.parse(localStorage.getItem("userDetails"))
    }`,
     data: userProfile,
     headers: { "Content-Type": "application/json" }
    })
    .then(function (response) {
      //handle success
      console.log(response);
      alert('updation successful')
      history.push('/deliveryboy');
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
  }
  return(
    <div>
    <DeliveryBoyHeader />
    <Card className="hoverable">
  <div className="row justify-content-center m-5" style={{paddingBlock:1}}>

<form className="col-md-6" onSubmit={handleFormSubmit} autocomplete="off">
              <h3>Update Profile</h3>

              <div className="form-group">
                  <label><i class="fas fa-envelope-square"></i> Email</label>
                  <input id="email" type="text" className="form-control" placeholder="email"  readonly="true" defaultValue={userProfile.email}
                  onChange={handleChange}/>
              </div>

              <div className="form-group">
                  <label><i class="fas fa-mobile-alt"></i> Mobile</label>
                  <input id="mobile" type="text" className="form-control hoverable" placeholder="mobile" value={userProfile.mob}
                  onChange={handleChange} />
              </div>

              <div className="form-group">
                  <label><i class="fas fa-file-signature"></i> Name</label>
                  <input id="name" type="text" className="form-control hoverable" name="name"  placeholder="name" value={userProfile.name}
                  onChange={handleChange} />
              </div>

              <div className="form-group">
                  <label><i class="fas fa-key"></i> Password</label>
                  <input id="password" type="text" className="form-control hoverable" placeholder="password" value={userProfile.password}
                  onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-success btn-block">Save</button>
          </form>
          </div>
          </Card>
          </div>

);
}
  
export default UpdateEmployee;