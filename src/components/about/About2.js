import React, { Component } from 'react'
import SectionsTitle from '../common/SectionsTitle'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img3.jpg'

export default class About2 extends Component {
    liststates = {
        lists: [
            {
                title: "Lorem ipsum dolor sit amet."
            },
            {
                title: "Lorem ipsum dolor sit amet."
            },
            {
                title: "Lorem ipsum dolor sit amet."
            }
        ]
    }
    render() {
        return (
            <section className="about-history-wrapper">
                <div className="container">
                    <div className="about-history-grid d-grid">
                        <div className="about-history-left">
                            <SectionsTitle title="We Allow You to Manage & Grow Your Business." />
                            <p className="desc">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda distinctio eligendi eum molestiae odit ullam?
                            </p>
                            <ul className="lists">
                                {this.liststates.lists.map((list, index) => {
                                    return <li key={index}>{list.title}</li>
                                })}
                            </ul>
                            <Link to="/" className="theme-button">Get Started <FiChevronRight className="icon" /></Link>
                        </div>
                        <div className="about-history-right">
                            <div className="about-history-right-img-grid d-grid">
                                <img src={img1} alt="About" />
                                <img src={img2} alt="About" />
                            </div>
                            <div className="about-history-trusted-box">
                                <h1>We Are Trusted by More Than <strong>19,700 Clients</strong></h1>
                                <p className="info">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                </p>
                                <Link to="/" className="simple-button">Join Now <FiChevronRight className="icon" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
