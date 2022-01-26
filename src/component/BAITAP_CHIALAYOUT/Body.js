import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
    render() {
        return (
            <div className='px-5 border border-success'>
                <Banner />
                <Item />
            </div>
        )
    }
}
