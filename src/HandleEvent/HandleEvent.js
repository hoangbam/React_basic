import { click } from '@testing-library/user-event/dist/click'
import React, { Component } from 'react'

export default class HandleEvent extends Component {

    Click = (name) => {
        alert("Hieu Master React" + name)

    }
    //Cach 2
    ClickHandle = (param, button) => {
        console.log(button.target);
        alert(param);
    }



    render() {


        return (
            <div>
                {/* cach 2 this la cua button, "hieu san  la cua param"*/}
                <button onClick={this.ClickHandle.bind(this, "Hieu San")}>bla bla</button>
                {/* Ko đc () vì nếu v là hàm, mà hàm thì vừa vào trang là chạy luôn chưa kịp click */}
                <button onClick={() => {
                    this.Click("Hieu");
                }}>Click di</button>


            </div>
        )
    }
}
