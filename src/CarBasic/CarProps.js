import React, { Component } from "react";
import DataCar1 from "../Data/DataCar.json";
import CarPropsPopup from "./CarPropsPopup";
import style from "./style.module.css";
export default class CarProps extends Component {
  DataCar = DataCar1;

  state = {
    sanPhamChiTiet: {
      name: "black",
      price: 1000,
      img: "./CarIMG/products/black-car.jpg",
    },
  };

  renderInfo = (sanPhamChon) => {
    this.setState({
      sanPhamChiTiet: sanPhamChon,
    });
  };

  renderProduct = () => {
    return this.DataCar.map((product, index) => {
      return (
        <div className="col-3">
          <div className="card text-left" key={index}>
            <img className="card-img-top" src={product.img} alt="alo" />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">{product.price}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Danh sach xe</h1>
        <div className="row">{this.renderProduct()}</div>
        <CarProps />
      </div>
    );
  }
}
