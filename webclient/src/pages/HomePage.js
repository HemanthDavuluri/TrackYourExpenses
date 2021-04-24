import React, { useRef } from "react";
import "../styles/HomePage.css";
import logo from "../assets/logo.svg";

function HomePage() {
  const email_id = useRef();
  const password = useRef();
  const login = () => {
    console.log(email_id.current.value, password.current.value);
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
        <button onClick={login}>Login</button>
        <p>Forgot Password?</p>
        <p>
          <a href="/signup">Sign-Up</a>
        </p>
      </div>
    </div>
  );
}

export default HomePage;
