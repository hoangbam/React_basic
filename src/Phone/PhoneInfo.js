import React, { Component } from "react";

export default class PhoneInfo extends Component {
  render() {
    let { hinhAnh, manhinh, HDH, ram, rom } = this.props;
    return (
      <div className="row">
        <div className="col-4">
          <h1>{this.props.name}</h1>
          <img src={hinhAnh} style={{ width: "50%" }} />
        </div>
        <div className="col-8">
          <h1>Thong Tin San Pham</h1>
          <hr />
          <div className="row">
            <div className="col-4">Man Hinh</div>
            <div className="col-8">
              <p>{manhinh}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">He Dieu Hanh</div>
            <div className="col-8">
              <p>{HDH}</p>
            </div>
          </div>
          <hr />{" "}
          <div className="row">
            <div className="col-4">Ram</div>
            <div className="col-8">
              <p>{ram}</p>
            </div>
          </div>
          <hr />{" "}
          <div className="row">
            <div className="col-4">Rom</div>
            <div className="col-8">
              <p>{rom}</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
