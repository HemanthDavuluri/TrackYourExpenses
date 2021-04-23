import React from 'react'
import "../styles/HomePage.css"
import logo from "../assets/logo.svg"

function HomePage() {
    return (
      <div className="home-page">
        <div className="logo">
          <h1>Track</h1>
          <h2>Your</h2>
          <h1>Expenses</h1>
        </div>
        <div className="login">
          <img src={logo} alt="logo"/>
          <input type="text" placeholder="Email ID" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <p>Forgot Password?</p>
        </div>
      </div>
    );
}

export default HomePage
