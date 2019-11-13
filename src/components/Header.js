import React from "react";
import "./Header.css";
import Me from "../assets/me.jpg";

const Header = () => {
  return (
    <div className="header">
      <img className="me" src={Me}></img>
      <div className="img">
        <div className="headerTxt">
          <h1>Samuel Torres</h1>
          <p>Text About Me</p>
        </div>
      </div>
      <div className="info">
        <p>Adress:</p>
        <p>Phone Number:</p>
        <p>Email:</p>
      </div>
    </div>
  );
};

export default Header;
