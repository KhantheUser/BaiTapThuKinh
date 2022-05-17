import React, { Component } from "react";
import Activity from "./activity";
import Carousel from "./carousel";
import Header from "./header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Activity />
      </div>
    );
  }
}

export default Home;
