import { Component, useState } from "react";
const Customer=()=>{
    return(
        <div class="jumbotron">
  <h1>Welcome {window.localStorage.getItem('userDetails')}</h1>
  <p>Bootstrap is the most popular HTML, CSS...</p>
</div>
    )
}
export default Customer