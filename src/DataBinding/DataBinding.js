import React, { Component } from 'react'
import Footer from "../component/BAITAP_CHIALAYOUT/Footer"
export default class DataBinding extends Component {
    // tạo 1 thuộc tính
    name = "hieu san";

    //Thuộc tính student

    student = {
        name: "Mike Tyson",
        age: 18,
    }

    //Binding phương thức(hàm của lớp đối tượng)
    //Tất cả hàm Render đều phải trả về component(thì mới có giao diện)(jsx)
    renderImg = () => {

        return <img src="https://zingnews.vn/tuyen-viet-nam-vs-thai-lan-cong-phuong-van-toan-da-chinh-post1285171.html" alt="err"></img>
    }

    renderMultiComponent = () => {
        return <Footer />, <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Action 1</a>
                            <a className="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>



    }

    render() {
        // Render là 1 hàm, biến của hàm ko thể dùng cho hàm khác
        const age = 18;
        const renderImg = () => {

            return <img src="https://zingnews.vn/tuyen-viet-nam-vs-thai-lan-cong-phuong-van-toan-da-chinh-post1285171.html" alt="err"></img>
        }
        return (
            // Chỉ được bọc 1 thẻ duy nhất
            //binding = Object thì có this, Binding = biến thì k cần
            <div>
                <h1>Hello {this.name}  {age}</h1>

                <h2> {this.student.name} and age {this.student.age}</h2>
                {renderImg()}
                {this.renderMultiComponent()}




            </div>
        )
    }
}
