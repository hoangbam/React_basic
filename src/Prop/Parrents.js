import React, { Component } from "react";
import Child from "./Child";
import ChildFunctional from "./ChildFunctional";

export default class Parrents extends Component {
  product = {
    src: "./CarIMG/products/avanger.jpg ",
    name: "hieu san",
    name1: "React js",
    size: [35, 25, 16, 56],
  };

  size = [35, 25, 16, 56];

  showInfo = (name) => {
    alert(name);
  };

  render() {
    return (
      <div>
        <ChildFunctional propSource={this.product} />
        <Child
          product1={this.product}
          size={this.size}
          show={this.showInfo()}
        />
      </div>
    );
  }
}
