import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class Sellgiay extends Component {
  RenderProduct = () => {
    return this.props.ArrProduct.map((product, index) => {
      return (
        <div
          className="col-3 w3-container w3-center w3-animate-zoom"
          key={index}
        >
          <ProductItem item={product} />
        </div>
      );
    });
  };

  render() {
    console.log(this.props.ArrProduct);

    // return là phải return component
    return (
      <div>
        <div className="container-fluid">
          <div className="row">{this.RenderProduct()}</div>
        </div>
      </div>
    );
  }
}
