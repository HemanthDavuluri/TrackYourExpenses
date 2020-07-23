import React, { useState } from "react";
import postRequest from "../api/postRequest";
import "../css/Form.css";

const Form = () => {
 
  return (
    <div>
      <div className="form">
        <input
          type="text"
          name="PurchasedItem"
          autoComplete="off"
          required
        ></input>
        <label className="form-label" htmlFor="PurchasedItem">
          <span className="form-span">Purchased Item</span>
        </label>
      </div>
      <br/>
      <div className="form">
        <input
          type="text"
          name="ItemPrice"
          autoComplete="off"
          required
        ></input>
        <label className="form-label" htmlFor="ItemPrice">
          <span className="form-span">Price</span>
        </label>
      </div>
    </div>
  );
};

export default Form;
