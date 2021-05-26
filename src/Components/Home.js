import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Styling/Home.css'
// import AppContext from '../AppContext'


export default class Home extends Component {
    // static contextType = AppContext;

    render() {
        return (
            <div>
                <div className='page-body'>                    
                    <h2>Lorem ipsum dolor sit.</h2>
                    <img src="/images/waterbottle.jpg" id="water-bottle-image" />

                    <div id='item-description'>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere volutpat bibendum. Maecenas at faucibus lorem. Vestibulum laoreet neque molestie turpis auctor ultrices condimentum in tellus. Curabitur semper sodales velit a volutpat. Phasellus a metus venenatis, vulputate sem non, cursus velit.</li>
                            <li>Vivamus ac nunc urna. Curabitur ultrices accumsan consectetur. Nulla facilisi. Morbi ullamcorper libero risus, quis imperdiet mi mollis ac. Nam non enim placerat, aliquam enim eu, gravida arcu. Integer imperdiet elit convallis, facilisis justo nec, scelerisque neque.</li>
                            <li>Aliquam sit amet tincidunt ipsum, sit amet sollicitudin lacus. Praesent fringilla lorem in turpis consequat, at dapibus risus euismod. In hac habitasse platea dictumst. Nam ac placerat erat. Morbi ut purus nulla.</li>
                        </ul>
                    </div>

                    <div id="price">
                        $99.99
                    </div>
                    
                </div>
            </div>
        )
    }
}