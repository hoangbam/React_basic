/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Baitapcar extends Component {
  state = {
    imgProduct: require("../asset/CarIMG/products/black-car.jpg"),
  };
  renderProduct = (imgNewProduct) => {
    let newState = {
      imgProduct: imgNewProduct,
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            {/* //mặc định trên giao diện */}
            <img
              style={{ width: "100%" }}
              src={this.state.imgProduct}
              alt="black"
            />
          </div>

          <div className="col-5">
            <div className="card text-white">
              <div className="card-header">Exterior Color</div>
              <div className="card-body">
                <div
                  className="row border-danger my-1 "
                  onClick={() => {
                    this.renderProduct(
                      require("../asset/CarIMG/products/black-car.jpg")
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    style={{ width: "20%" }}
                    src={require("../asset/CarIMG/icons/icon-black.jpg")}
                    alt="black"
                  />
                  <p className="d-inline-block ml-3 ">
                    {" "}
                    Crystal Black <br /> Pearl
                  </p>
                </div>
                <div
                  className="row border-danger my-1"
                  onClick={() => {
                    this.renderProduct(
                      require("../asset/CarIMG/products/red-car.jpg")
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    style={{ width: "20%" }}
                    src={require("../asset/CarIMG/icons/icon-red.jpg")}
                    alt="black"
                  />
                  <p className="d-inline-block ml-3 ">
                    {" "}
                    Crystal Black <br /> Pearl
                  </p>
                </div>
                <div
                  className="row border-danger my-1"
                  onClick={() => {
                    this.renderProduct(
                      require("../asset/CarIMG/products/silver-car.jpg")
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    style={{ width: "20%" }}
                    src={require("../asset/CarIMG/icons/icon-silver.jpg")}
                    alt="black"
                  />
                  <p className="d-inline-block ml-3 ">
                    {" "}
                    Crystal Black <br /> Pearl
                  </p>
                </div>
                <div
                  className="row border-danger my-1"
                  onClick={() => {
                    this.renderProduct(
                      require("../asset/CarIMG/products/steel-car.jpg")
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    style={{ width: "20%" }}
                    src={require("../asset/CarIMG/icons/icon-steel.jpg")}
                    alt="black"
                  />
                  <p className="d-inline-block ml-3 ">
                    {" "}
                    Crystal Black <br /> Pearl
                  </p>
                </div>
              </div>
              <p className="card-footer">Wheels</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
