import React, { Component } from 'react'

export default class Statedemo extends Component {
    //  state là thuộc tính có sẵn của Component trong react giúp đinh nghĩa những nội dung mà có khả năng thay đổi bởi ng dùng
    state = {
        status: false
    }
    //setState là phương thức có sẵn của react
    // class component giúp thay đổi giá trị của state và render lại giao diện 



    userLogin = {
        name: "Song le",
        age: 20,
    }

    Login = () => {

        //   this.state.status =  true; ko xét gia trị trực tiếp trên state mà phải thông qua phương thức setstate
        let newState = {
            status: true
        }
        //Goi phương thức setstate truyền vào state mới
        //setState là phương thức bất đồng bộ
        this.setState(newState);
        console.log(this.state);


    }

    renderUserLogin = () => {
        if (this.state.status) {
            return <div className='text-center'>{this.userLogin.name}</div>
        } return <button onClick={() => {
            this.Login();
        }}>Login</button>
    }

    render() {
        return (
            <div>
                {this.renderUserLogin()}

            </div>
        )
    }
}
