import React, { Component } from 'react'
import './Styling/Cartbar.css'

export default class Cartbar extends Component {
    render() {
        return (
            <div id='sidebar'>
                <div>
                    this is the sidebar
                </div>
                <button id='checkout-btn'>
                    Checkout
                </button>
            </div>
        )
    }
}