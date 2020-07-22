import React, { Component } from 'react'
import { FaFacebookF, FaTwitter, FaGoogle, FaYoutube, FaLinkedinIn } from 'react-icons/fa'

export default class ServiceSocial extends Component {
    render() {
        return (
            <>
                <div className="service-widgets sidebar-social-profile">
                    <h3>Follow & Connect On.</h3>
                    <ul className="d-flex">
                        <li><a href="https://facebook.com"><FaFacebookF /></a></li>
                        <li><a href="https://twitter.com"><FaTwitter /></a></li>
                        <li><a href="https://plus.google.com"><FaGoogle /></a></li>
                        <li><a href="https://youtube.com"><FaYoutube /></a></li>
                        <li><a href="https://linkedin.com"><FaLinkedinIn /></a></li>
                    </ul>
                </div>
            </>
        )
    }
}
