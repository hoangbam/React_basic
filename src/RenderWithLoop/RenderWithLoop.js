import React, { Component } from "react";

export default class RenderWithLoop extends Component {
  // Vì khi đẩy lên server, Webpack sẽ đóng gói lại hết tất cả các file làm cho đường dẫn k còn đúng nữa

  productList = [
    // Nếu muốn ko cần ghi require thì tạo file hình trên phần public
    {
      id: 1,
      price: 1000,
      name: "black car",
      img: "./CarIMG/products/black-car.jpg",
    },
    {
      id: 2,
      price: 1000,
      name: "red car",
      img: "./CarIMG/products/black-car.jpg",
    },
    {
      id: 3,
      price: 1000,
      name: "silver car",
      img: "./CarIMG/products/black-car.jpg",
    },
    {
      id: 4,
      price: 1000,
      name: "steel car",
      img: "./CarIMG/products/black-car.jpg",
    },
  ];

  renderList = () => {
    //   C1: Viết mảng Object thành mảng Component bằng for
    // let List = [];
    // for (let i in this.productList) {
    //   let product = this.productList[i];
    //   //Chuyển từ mảng Object sang mảng Component.
    //   let trJXS = (
    //     <tr key={i}>
    //       <td>{product.id}</td>
    //       <td>{product.name}</td>
    //       <td>{product.price}</td>
    //       <td>
    //         <img style={{ width: "100px" }} src={product.img} />
    //       </td>
    //     </tr>
    //   );
    //   console.log(trJXS);

    // C2: dung render map
    //các vòng lặp đều cần có key
    let List = this.productList.map((product, index) => {
      return (
        <tr key={index}>
          <td> {product.id}</td>
          <td> {product.name}</td>
          <td> {product.price}</td>
          <td>
            {" "}
            <img src={product.img} style={{ width: "100px" }} />
          </td>
        </tr>
      );
    });
    return List;
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
      </div>
    );
  }
}
