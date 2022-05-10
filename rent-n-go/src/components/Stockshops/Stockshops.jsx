import { Component, useState } from "react";
import ShopHeader from "./StockshopsHeader"
const Shop=()=>{
    return(
        <div class="jumbotron">
  <h1>Welcome {window.localStorage.getItem('userDetails')}</h1>
  <p>Customers page</p>
</div>
    )
}
export default Shop;