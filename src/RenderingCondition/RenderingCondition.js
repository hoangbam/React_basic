import React, { Component } from 'react'

export default class RenderingCondition extends Component {
    login = false;
    name = "Hieu san";

    renderCondition = () => {
        if (this.login) {
            return <p>{this.name}</p>
        } else { return <button>hello</button> }
    }


    // hàm render này chạy đầu tien
    render() {
        return (
            <div>
                {this.renderCondition()}

            </div>
        )
    }
}
