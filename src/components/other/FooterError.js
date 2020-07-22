import React, { Component } from 'react'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default class FooterError extends Component {
    render() {
        return (
            <footer className="error-footer-wrapper d-flex">
                <div className="left">
                    <p>&copy; Copyright Minzel 2020. Made with <FiHeart className="icon" /> by <a href="https://techydevs.com">TechyDevs.</a></p>
                </div>
                <div className="right">
                    <ul className="pages d-flex">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Service</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </footer>
        )
    }
}
