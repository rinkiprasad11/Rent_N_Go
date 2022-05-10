import { Component, useState } from "react";
import axios from 'axios';
import API_BASE_URL from "../Common/baseurl";

import { useHistory } from "react-router-dom";
import ShopHeader from "./StockshopsHeader"

const UpdateProducts=(props)=>{
  const history = useHistory(); 
  const [ listItem, setlistItem] = useState({
            id: '',
            name: '',
            rent: '',
            // deposite: '',
            description: '',
            Status:'',
  })

  const handleChange=(e)=>{
    setlistItem({
      ...listItem,[e.target.id]: e.target.value
    })
  }
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(props)
    axios({
      method: "put",
      url:`${API_BASE_URL}/stockshops/${JSON.parse(localStorage.getItem("userDetails"))
    }/products/${window.localStorage.getItem("productId")}`,
     data: listItem,
     headers: { "Content-Type": "application/json" }
    })
    .then(function (response) {
      //handle success
      console.log(response);
      alert('updation successful')
      history.push('/showListList');
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
  }
  return(
    <div>
      <ShopHeader/>
    

    <div className="container-fluid">
<form className="col-sm-9" onSubmit={handleFormSubmit} autocomplete="off">
                <h3>Update product</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input id="name" type="text" className="form-control" placeholder="Name" value={listItem.name}
                    onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input id="description" type="text" className="form-control" placeholder="description" value={listItem.description}
                    onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Rent</label>
                    <input id="rent" type="text" className="form-control" name="rent" autocomplete="off" placeholder="rent" value={listItem.rent}
                    onChange={handleChange} />
                </div>

                {/* <div className="form-group">
                    <label>Deposite</label>
                    <input id="deposite" type="text" className="form-control" name="deposite" autocomplete="off" placeholder="deposite" value={listItem.deposite}
                    onChange={handleChange} />
                </div> */}

                <div className="form-group">
                    <label>Status</label>
                    <input id="Status" type="text" className="form-control" placeholder="status" value={listItem.Status}
                    onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Save</button>
            </form>
            </div>
            </div>


);
}
  
export default UpdateProducts;