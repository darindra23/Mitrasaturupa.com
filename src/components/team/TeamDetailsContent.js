import React, { Component } from 'react'
import img from '../../assets/images/team-8.jpg'
import { FiPhone, FiLink } from 'react-icons/fi'
import { FaEnvelope, FaQuoteLeft } from 'react-icons/fa'
import TeamSidebar from './TeamSidebar'

export default class TeamDetailsContent extends Component {
    expertise = {
        items: [
            {
                list: "Business transformation"
            },
            {
                list: "Restructuring and turnaround"
            },
            {
                list: "Integration"
            },
            {
                list: "Growth strategy"
            }
        ]
    }
    educations = {
        items: [
            {
                list: "MBA, Rotterdam School of Management, Erasmus University"
            },
            {
                list: "BS, Engineering, Technical University of Denmark"
            }
        ]
    }
    render() {
        return (
            <section className="team-details-wrapper">
                <div className="container">
                    <div className="team-details-grid-top d-grid">
                        <div className="team-details-img">
                            <img src={img} alt="Team Details" />
                        </div>
                        <div className="team-details-content">
                            <h1 className="name">Colling Roberts.</h1>
                            <span className="skills">Founder & CEO</span>
                            <p className="desc">Regional Leader Switzerland, Italy, Austria</p>
                            <ul className="team-details-contact">
                                <li><a href="tel:+123-134-6849"><span className="icon"><FiPhone /></span> +123-134-6849</a></li>
                                <li><a href="mailto:example@gmail.com"><span className="icon"><FaEnvelope /></span> example@gmail.com</a></li>
                                <li><a href="www.collinroberts.com"><span className="icon"><FiLink /></span> www.collinroberts.com</a></li>
                            </ul>
                            <div className="team-expertise-education-grid d-grid">
                                <div className="left">
                                    <h2>Areas Of Expertise</h2>
                                    <ul className="team-details-expertise lists">
                                        {this.expertise.items.map((item, index) => {
                                            return <li key={index}>{item.list}</li>
                                        })}
                                    </ul>
                                </div>
                                <div className="right">
                                    <h2>Education</h2>
                                    <ul className="team-details-education lists">
                                        {this.educations.items.map((item, index) => {
                                            return <li key={index}>{item.list}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-details-grid-bottom d-grid">
                        <div className="left">
                            <h3>A Little Description About Me.</h3>
                            <p>With over 20 years of experience in entrepreneurship, management, business planning, financial analysis, software engineering, operations, and decision analysis, Brandon has the breadth and depth of experience needed to quickly understand entrepreneurs businesses and craft the most suitable solutions.</p>
                            <blockquote>
                                <p>There are no secrets to success. It is the result of preparation, hard work, and learning from failure. lorem ipsum dolor sit amet.</p>
                                <h3>Amand Seyfrid, <span>Sales & Marketing, Alien Ltc.</span></h3>
                                <span className="quote-icon">
                                    <FaQuoteLeft />
                                </span>
                            </blockquote>
                            <p>
                                Investing atones demons trave runt lectores legere liusry quod ilegunt saepies claritas Inves tig ationes. Our management team is led by the Managing Partner Peter Mockler who successfully accomplished the European management buyout. My focus areas reorganization of marketing and customer services and restructuring. Throughout my pro fessional career, I led various global consulting projects, launched new marketing concepts and managed implementations. Throughout my pro fessional career, I led various global consulting projects, launched new marketing concepts.
                            </p>
                        </div>
                        <div className="right">
                            <TeamSidebar />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
