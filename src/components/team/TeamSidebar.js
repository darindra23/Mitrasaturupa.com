import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'
import { FaRegFilePdf, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa'
import img1 from '../../assets/images/img20.jpg'

export default class TeamSidebar extends Component {
    render() {
        return (
            <aside className="sidebar team-sidebar">
                <div className="sidebar-widget sidebar-contact-form">
                    <h4>Need Any Help?</h4>
                    <p>Contact us at the Consulting office nearest to you or submit a business inquiry online</p>
                    <Link to="/contact" className="theme-button">Contact Us <FiPhone className="icon" /></Link>
                </div>
                <div className="sidebar-widget button">
                    <Link className="theme-button" to="/" download><FaRegFilePdf className="icon" /> Company Presentation</Link>
                </div>
                <div className="sidebar-widget recent-posts">
                    <h2>Recent News.</h2>
                    <ul>
                        <li className="d-flex">
                            <Link to="/blog-details">
                                <img src={img1} alt="Team Details" />
                            </Link>
                            <div className="body">
                                <Link to="/blog-details">Within the construction industry as their overdraft</Link>
                                <span className="date">
                                    13 Mar, 2020 by <a href="https://techydevs.com">TechyDevs</a>
                                </span>
                            </div>
                        </li>
                        <li className="d-flex">
                            <Link to="/blog-details">
                                <img src={img1} alt="Team Details" />
                            </Link>
                            <div className="body">
                                <Link to="/blog-details">Strategy and commercial approach with issues</Link>
                                <span className="date">
                                    14 Mar, 2020 by <a href="https://techydevs.com">TechyDevs</a>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-widget sidebar-social-profile">
                    <h2>Social Profiles.</h2>
                    <ul className="d-flex">
                        <li><a href="https://faceobok.com"><FaFacebookF /></a></li>
                        <li><a href="https://twitter.com"><FaTwitter /></a></li>
                        <li><a href="https://instagram.com"><FaInstagram /></a></li>
                        <li><a href="https://linkedin.com"><FaLinkedinIn /></a></li>
                        <li><a href="https://plus.google.com"><FaGooglePlusG /></a></li>
                    </ul>
                </div>
            </aside>
        )
    }
}
