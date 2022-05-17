import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="#" className="logo">
          <img src="./img/logoicon.png" alt />
        </a>
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#">Service</a>
          <a href="#">Destinations</a>
          <a href="#">Events</a>
          <a href="#">Gallery</a>
          <a href="#">Contact us</a>
        </div>
      </div>
    );
  }
}

export default Header;
