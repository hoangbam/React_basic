import React, { Component } from "react";

export default class Child extends Component {
  renderSize = () => {
    let { size } = this.props.product1;
    return size.map((product1, index) => {
      return <button key={index}>{product1}</button>;
    });
  };

  render() {
    let { src, name, name1 } = this.props.product1;
    return (
      <div>
        <img src={src} />
        {this.renderSize()};
        {this.props.size.map((product, index) => {
          return <p key={index}>{product}</p>;
        })}
        <button
          onClick={() => {
            this.props.show("Hello Hieu");
          }}
        >
          Click di
        </button>
      </div>
    );
  }
}
