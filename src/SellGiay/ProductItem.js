import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div className="card text-left">
        <img className="card-img-top" src={this.props.item.image} alt="hieu" />
        <div className="card-body">
          <h4 className="card-title">{this.props.item.name}</h4>
          <p className="card-text">{this.props.item.price}</p>
          <button className="w3-button w3-black">
            Add to cart <i className="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    );
  }
}
