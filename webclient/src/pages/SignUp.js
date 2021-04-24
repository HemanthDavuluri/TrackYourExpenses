import React, { useState ,useRef } from "react";
import "../styles/HomePage.css";
import logo from "../assets/logo.svg";

function SignUp() {
  const email_id = useRef();
  const password = useRef();
  const confirm_password = useRef();
  const [error,setError] = useState("")
  const Sign_Up = () => {
    if (password.current.value === confirm_password.current.value) {
      console.log({
        email: email_id.current.value,
        password: password.current.value,
        confirm_password: confirm_password.current.value,
      });
      console.log("match");
    } else {
      console.log({
        email: email_id.current.value,
        password: password.current.value,
        confirm_password: confirm_password.current.value,
      });
      setError("Password Not Match");
      password.current.value=null
      confirm_password.current.value = null
      console.log("not-match");
    }
  };
  return (
    <div className="home-page">
      <div className="logo">
        <h1>Track</h1>
        <h2>Your</h2>
        <h1>Expenses</h1>
      </div>
      <div className="login">
        <img src={logo} alt="logo" />
        <input type="text" placeholder="Email ID" ref={email_id} />
        <input type="password" placeholder="Password" ref={password} />
        <input
          type="password"
          placeholder="Re-Type Password"
          ref={confirm_password}
        />
        <p>{error}</p>
        <button onClick={Sign_Up}>Sign-Up</button>
      </div>
    </div>
  );
}

export default SignUp;
