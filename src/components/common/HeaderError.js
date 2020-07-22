import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default class HeaderError extends Component {
    render() {
        return (
            <div className="header-error-wrapper d-flex">
                <div className="left">
                    <Link to="/" className="logo">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="right">
                    <ul className="links d-flex">
                        <li><Link to="/">Back to Home</Link></li>
                        <li><a href="https://techydevs.com/support">Help</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
