import React, { Component } from "react";
import "./activity.css";
import Item from "./item";

class Activity extends Component {
  render() {
    return (
      <div className="activity">
        <div className="title">
          <img src="./img/Group 313.png" alt />
          <h1>Explore Destinations &amp; Activities</h1>
        </div>
        <div className="main">
          <div className="row">

            <div className="col">
              <Item />
            </div>

            <div className="col">
              <Item />
            </div>

            <div className="col">
              <Item />
            </div>

            <div className="col">
              <Item />
            </div>

            <div className="clear" />
          </div>
          <button>View All</button>
        </div>
      </div>
    );
  }
}

export default Activity;
