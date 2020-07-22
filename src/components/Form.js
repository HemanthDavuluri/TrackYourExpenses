import React, { useState } from "react";
import postRequest from "../api/postRequest";
import "../css/Form.css";

const Form = () => {
 
  return (
    <div className="card-container">
      <div className="card-content">
       
        <input type="text" placeholder="Purchased Item"></input>
        
        <input type="number" placeholder="Price"></input>
      </div>
    </div>
  );
};

export default Form;
