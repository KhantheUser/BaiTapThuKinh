import React, { Component } from "react";
import "./item.css";

class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="thumbnail">
          <img src="./img/product1.png" alt />
          <i className="fa-solid fa-heart" />
        </div>
        <h1>Trickle Creek Ranch</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, minus
          ipsam totam odit consectetur earum rem non cum atque voluptatibus.
        </p>
        <a href="#">Read more</a>
      </div>
    );
  }
}

export default Item;
