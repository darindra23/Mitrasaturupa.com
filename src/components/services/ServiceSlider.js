import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.min.css';
import { FiChevronRight, FiBriefcase, FiBarChart2 } from 'react-icons/fi'
import { FaDonate } from 'react-icons/fa'
import { AiOutlineDollar } from 'react-icons/ai'
import SectionsTitle from '../common/SectionsTitle'

export default class ServiceSlider extends Component {
    serviceslidres = {
        items: [
            {
                icon: <AiOutlineDollar />,
                title: "Consumer Products",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing"
            },
            {
                icon: <FiBriefcase />,
                title: "Adult Marketing",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing"
            },
            {
                icon: <FaDonate />,
                title: "Banking Advising",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing"
            },
            {
                icon: <FiBarChart2 />,
                title: "Business Growth",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing"
            }
        ]
    }
    state = {
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    }
    render() {
        return (
            <section className="service-slider-wrapper">
                <div className="container">
                    <div className="service-slider-grid d-grid">
                        <div className="service-slider-left">
                            <OwlCarousel
                                className="owl-theme"
                                loop={true}
                                autoplay={false}
                                margin={30}
                                dots={true}
                                nav={false}
                                items={2}
                                responsive={this.state.responsive}
                            >
                                {this.serviceslidres.items.map((item, index) => {
                                    return <div className="service-slider-item" key={index}>
                                        <span className="service-slider-icon">{item.icon}</span>
                                        <Link to="/service-details"><h3 className="service-slider-title">{item.title}</h3></Link>
                                        <p className="service-slider-desc">{item.desc}</p>
                                        <Link to="/service-details" className="simple-button">See Details <FiChevronRight className="icon" /></Link>
                                    </div>
                                })}
                            </OwlCarousel>
                        </div>
                        <div className="service-slider-right">
                            <SectionsTitle title="We Provide Wide Range of Business Services." subtitle="You Deserve Best Services" />
                            <p className="desc">
                                Investiga tiones demonstr averunt lectores legere me lius quod ii qua legunt saepius. Claritas est etiam pro cessus dynamicus, qui sequitur mutaety tion em consu etudium awquod he legunt saepius clary tyitas Investig atifonesw. tionem consu etudium.
                            </p>
                            <Link to="/service-details" className="simple-button">Read More <FiChevronRight className="icon" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
