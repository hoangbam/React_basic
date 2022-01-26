import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className='border border-danger m-3'>
                <h1 className='text-lg-start'> A Warm Welcome!</h1>
                <p> lorem aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
                <button type="button" className='btn btn-primary'>Call to action!</button>
            </div>
        )
    }
}
