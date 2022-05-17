import React, { Component } from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="main">
          <div className="home-content">
            <Content />
          </div>
          <div className="home-sidebar">
            <Sidebar />
          </div>
          <p>xyz</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
