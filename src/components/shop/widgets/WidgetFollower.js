import React, { Component } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa'

export default class WidgetFollower extends Component {
    render() {
        return (
            <>
                <div className="shop-widget sidebar-social-profile">
                    <h3>Follow & Connect On.</h3>
                    <ul className="d-flex">
                        <li><a href="https://facebook.com"><FaFacebookF /></a></li>
                        <li><a href="https://twitter.com"><FaTwitter /></a></li>
                        <li><a href="https://instagram.com"><FaInstagram /></a></li>
                        <li><a href="https://linkedin.com"><FaLinkedinIn /></a></li>
                        <li><a href="https://plus.google.com"><FaGooglePlusG /></a></li>
                    </ul>
                </div>
            </>
        )
    }
}
