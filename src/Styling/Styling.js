import React, { Component } from 'react'
import './Styling.css';
import style from './Styling.module.css';

export default class Styling extends Component {


    render() {
        // Lưu ý: Viết dưới dạng JS thuần document.getElementbyId.style.bgColor = "red".
        let styleText = {
            color: 'pink',
            padding: '15px',
            bgColor: 'blue',
        }

        return (
            <div>

                <span className={style.txt1}>Hello Hieu</span>
                <p style={styleText}>alo Hieu Sannnn</p>
            </div>)

    }
}