import React, { Component } from "react";
import Body from "./Body";
import Header from "./Header";

export default class Renderflim extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url('./CarIMG/products/avanger.jpg')",
          minHeight: "2000px",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,.8)", minHeight: "2000px" }}>
          <Header />
          <Body />
        </div>
      </div>
    );
  }
}
