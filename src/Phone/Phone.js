import React, { Component } from "react";
import DataJson from "../Data/DataPhone.json";
import PhoneInfo from "./PhoneInfo";
export default class Phone extends Component {
  mangSanPham = DataJson;

  state = {
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  };

  renderInfo = (
    tenSP1,
    manHinh1,
    heDieuHanh1,
    cameraTruoc1,
    cameraSau1,
    ram1,
    rom1,
    giaBan1,
    hinhAnh1
  ) => {
    let newState = {
      tenSP: tenSP1,
      manHinh: manHinh1,
      heDieuHanh: heDieuHanh1,
      cameraTruoc: cameraTruoc1,
      cameraSau: cameraSau1,
      ram: ram1,
      rom: rom1,
      giaBan: giaBan1,
      hinhAnh: hinhAnh1,
    };
    this.setState(newState);
  };

  renderProduct = () => {
    return this.mangSanPham.map((product, index) => {
      return (
        <div className="col-4 " key={index}>
          <div className="card text-center">
            <img
              className="card-img-top "
              src={product.hinhAnh}
              style={{ width: "50%" }}
            />
            <div className="card-body">
              <h4 className="card-title">
                <p>{product.tenSP}</p>
              </h4>
              <p className="card-text">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    this.renderInfo(
                      product.tenSP,
                      product.manHinh,
                      product.heDieuHanh,
                      product.cameraTruoc,
                      product.cameraSau,
                      product.ram,
                      product.rom,
                      product.hinhAnh
                    );
                  }}
                >
                  Xem chi tiet
                </button>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    let { hinhAnh, tenSP, manHinh, heDieuHanh, ram, rom } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">{this.renderProduct()}</div>
        <PhoneInfo
          hinhAnh={hinhAnh}
          name={tenSP}
          manhinh={manHinh}
          HDH={heDieuHanh}
          ram={ram}
          rom={rom}
        />
      </div>
    );
  }
}
