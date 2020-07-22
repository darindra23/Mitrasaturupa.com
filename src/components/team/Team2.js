import React, { Component } from 'react'
import SectionsTitle from '../common/SectionsTitle'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import img1 from '../../assets/images/team-1.jpg'

export default class Team2 extends Component {
    render() {
        return (
            <section className="team-wrapper">
                <div className="container">
                    <div className="text-center">
                        <SectionsTitle title="Expert Team Members." subtitle="Meet Our Dedicated" />
                    </div>
                    <div className="team-grid text-center">

                        <div className="team">
                            <div className="team-img">
                                <img src={img1} alt="Team" />
                                <ul className="socials" >
                                    <a href="https://facebook.com"><FaFacebookF /></a>
                                    <a href="https://twitter.com"><FaTwitter /></a>
                                    <a href="https://linkedin.com"><FaLinkedinIn /></a>
                                    <a href="https://youtube.com"><FaYoutube /></a>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h2 className="name">Adam Smith</h2>
                                <p className="designation">Director</p>
                                <Link to="/team-details" className="theme-button">Read His Story <FiChevronRight className="icon" /></Link>
                            </div>
                        </div>

                        <div className="team">
                            <div className="team-img">
                                <img src={img1} alt="Team" />
                                <ul className="socials" >
                                    <a href="https://facebook.com"><FaFacebookF /></a>
                                    <a href="https://twitter.com"><FaTwitter /></a>
                                    <a href="https://linkedin.com"><FaLinkedinIn /></a>
                                    <a href="https://youtube.com"><FaYoutube /></a>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h2 className="name">Pam Sharon</h2>
                                <p className="designation">Director</p>
                                <Link to="/team-details" className="theme-button">Read His Story <FiChevronRight className="icon" /></Link>
                            </div>
                        </div>

                        <div className="team">
                            <div className="team-img">
                                <img src={img1} alt="Team" />
                                <ul className="socials" >
                                    <a href="https://facebook.com"><FaFacebookF /></a>
                                    <a href="https://twitter.com"><FaTwitter /></a>
                                    <a href="https://linkedin.com"><FaLinkedinIn /></a>
                                    <a href="https://youtube.com"><FaYoutube /></a>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h2 className="name">Richard Pam</h2>
                                <p className="designation">Director</p>
                                <Link to="/team-details" className="theme-button">Read His Story <FiChevronRight className="icon" /></Link>
                            </div>
                        </div>


                        <div className="team">
                            <div className="team-img">
                                <img src={img1} alt="Team" />
                                <ul className="socials" >
                                    <a href="https://facebook.com"><FaFacebookF /></a>
                                    <a href="https://twitter.com"><FaTwitter /></a>
                                    <a href="https://linkedin.com"><FaLinkedinIn /></a>
                                    <a href="https://youtube.com"><FaYoutube /></a>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h2 className="name">Domien Doe</h2>
                                <p className="designation">Junior Designer</p>
                                <Link to="/team-details" className="theme-button">Read His Story <FiChevronRight className="icon" /></Link>
                            </div>
                        </div>

                        <div className="team">
                            <div className="team-img">
                                <img src={img1} alt="Team" />
                                <ul className="socials" >
                                    <a href="https://facebook.com"><FaFacebookF /></a>
                                    <a href="https://twitter.com"><FaTwitter /></a>
                                    <a href="https://linkedin.com"><FaLinkedinIn /></a>
                                    <a href="https://youtube.com"><FaYoutube /></a>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h2 className="name">Pam Sharon</h2>
                                <p className="designation">Director</p>
                                <Link to="/team-details" className="theme-button">Read His Story <FiChevronRight className="icon" /></Link>
                            </div>
                        </div>

                        <div className="team">
                            <div className="team-img">
                                <img src={img1} alt="Team" />
                                <ul className="socials" >
                                    <a href="https://facebook.com"><FaFacebookF /></a>
                                    <a href="https://twitter.com"><FaTwitter /></a>
                                    <a href="https://linkedin.com"><FaLinkedinIn /></a>
                                    <a href="https://youtube.com"><FaYoutube /></a>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h2 className="name">Richard Pam</h2>
                                <p className="designation">Director</p>
                                <Link to="/team-details" className="theme-button">Read His Story <FiChevronRight className="icon" /></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
