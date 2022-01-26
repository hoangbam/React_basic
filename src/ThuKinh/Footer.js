import React, { Component } from "react";
import style from "./Style.module.css";
export default class Footer extends Component {
  //  Mảng Object

  productList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  // Chuyển sang mảng Component

  state = {
    img: "./glassesImage/v1.png",
    name: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };

  renderProduct1 = (img1, name1, desc1) => {
    let newState = {
      img: img1,
      name: name1,
      desc: desc1,
    };
    this.setState(newState);
  };

  renderProduct = () => {
    let List = this.productList.map((product, index) => {
      //Muốn lấy ra thuộc tính nào?, và hiển thị thuộc tính đó lên Component gì?(div, p , h1, tr,td?)
      return (
        <div className="col-2">
          <img
            key={index}
            src={product.url}
            className={style.backgroundFooter}
            onClick={() => {
              this.renderProduct1(product.url, product.name, product.desc);
            }}
          />
        </div>
      );
    });
    return List;
  };

  render() {
    return (
      <div className="container">
        {/* Body */}
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-6">
            <img
              id={style.backgroundBody}
              className="position-relative"
              src="./glassesImage/model.jpg"
              alt="Model"
            />
            <div
              className="position-absolute "
              style={{ top: "85px", left: "144px", width: "50%" }}
            >
              <img src={this.state.img} className={style.backgroundBody1} />
              <div
                className="position-absolute"
                style={{
                  top: "130px",
                  color: "green",
                  backgroundColor: "rgba(49,54,56,.8)",
                }}
              >
                <p style={{ padding: " 0 20px" }}> {this.state.name} </p>
                <p style={{ padding: " 0 20px" }}> {this.state.desc} </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <img
              id={style.backgroundBody}
              src="./glassesImage/model.jpg"
              alt="Model"
            />
          </div>
        </div>
        {/* Footer */}
        <div className="row mt-5" style={{ backgroundColor: "white" }}>
          {this.renderProduct()}
        </div>
        ;
      </div>
    );
  }
}
