import React, { useState,useEffect } from 'react'
import API_BASE_URL from "../Common/baseurl";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import ShopHeader from "./StockshopsHeader"



const ShowListList=()=>{
  const history = useHistory();  
  const [stockshopsDetails, setStockshopsDetails] = useState({});
  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    const url = `${API_BASE_URL}/stockshops/${
      JSON.parse(localStorage.getItem("userDetails"))
    }`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        if (response.data!=="") {
          setListItems(response.data);
          console.log("nisde if")
          window.localStorage.setItem('productId',response.data.id)
           console.log(window.localStorage.getItem('productId',response.data.id));
          
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const editUser= (id) => {
    window.localStorage.setItem("productId", id);
    history.push('/stockshops/updateProducts');
}
  const deleteUser=(deleteId) =>{
    console.log(deleteId)
    axios.delete(`${API_BASE_URL}/stockshops/${JSON.parse(localStorage.getItem("userDetails"))
  }/product/${window.localStorage.getItem("productId")}`)
  .then((response=>{
    console.log(response)
    alert("deletion successfull")
    const productList = listItems.filter(item=> item.id !== deleteId);
    setListItems(productList);
  }))
}

  return (
    <div>
      <ShopHeader/>
        <h2 className="text-center"> List</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th className="hidden">Id</th>
                    <th>name</th>
                    <th>description</th>
                    <th>rent</th>
                    {/* <th>Deposite</th> */}
                    <th>productStatus</th>
                </tr>
            </thead>
            <tbody>
                {
                    listItems.map(
                item =>
                            <tr key={item.id}>
                              <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.rent}</td>
                                {/* <td>{item.deposite}</td> */}
                                <td>{item.productStatus}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => deleteUser(item.id)}> Delete</button>
                                    <button className="btn btn-success" onClick={() => editUser(item.id)} style={{marginLeft: '20px'}}> Edit</button>
                                </td>
                            </tr>
                    )
                }
            </tbody>
        </table>

    </div>
);
};
export default ShowListList