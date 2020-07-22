import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FiTarget, FiChevronRight } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";


export default class Service3clmns extends Component {
    servicestates = {
        items: [
            {
                icon: <FiTarget className="service-items-icon" />,
                title: 'Our Mission.',
                description: 'sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec neulla.'
            },
            {
                icon: <IoIosNotificationsOutline className="service-items-icon" />,
                title: 'Our Vision.',
                description: 'sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec neulla.'
            },
            {
                icon: <FaHandshake className="service-items-icon" />,
                title: 'Our Approach.',
                description: 'sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec neulla.'
            }
        ]
    }
    render() {
        return (
            <section className="services-area service-3columns">
                <div className="container">
                    <div className="services-items-grid">
                        {
                            this.servicestates.items.map((item, index) => {
                                return <div className="service-items" key={index}>
                                    <span className="service-items-num">{index}</span>
                                    <span className="service-items-iconbox">{item.icon}</span>
                                    <Link to="/service-details">
                                        <h3 className="service-items-title">{item.title}</h3>
                                    </Link>
                                    <p className="service-items-description">{item.description}</p>
                                    <Link to="/service-details" className="simple-button">Learn More <FiChevronRight className="icon" /></Link>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
