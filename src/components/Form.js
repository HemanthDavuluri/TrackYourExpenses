import React, { useState } from "react";
import postRequest from "../api/postRequest";
import "../css/Form.css";

const Form = () => {
  let [productName, setProductName] = useState("");
  let [price, setPrice] = useState(0);

  const submit = async () => {
    //console.log(productName);
    //console.log(price);
    let postData = await postRequest
      .post("/posts", {
        productName: productName,
        productPrice: price,
      })
      .then(function (response) {
        console.log(response);
      });
  };
  return (
    <div className="card-container">
      <div
        
        style={{ display: "grid", justifyContent: "center", padding: "45%" }}
      >
        <label>Enter the product name</label>
        <input
          type="text"
          onChange={(e) => setProductName((productName = e.target.value))}
        ></input>
        <br />
        <label>Enter the product Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice((price = e.target.value))}
        ></input>
        <br />
        <button onClick={submit}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Form;
