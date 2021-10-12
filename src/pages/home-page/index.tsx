import React from "react";
import logo from "../../logo.svg";
import "./index.css";

function HomePage() {
  return (
    <div className="App">
        <h1 style = {{color:"white"}}>Welcome to learning TypeScript</h1>
        <img src={logo} className="App-logo" alt="logo" />
      
    </div>
  );
}

export default HomePage;
