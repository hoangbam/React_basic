import React, { Component } from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class ThuKinh extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url('./glassesImage/background.jpg')",
          minHeight: "1000px",
          backgroundSize: "1000px",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,.8)", minHeight: "1000px" }}>
          <Header />

          <Footer />
        </div>
      </div>
    );
  }
}
