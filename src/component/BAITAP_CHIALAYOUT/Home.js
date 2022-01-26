import React, { Component } from 'react'
import Body from './Body.js'
import Footer from './Footer.js'




import Header from './Header'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}
