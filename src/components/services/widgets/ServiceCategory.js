import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default class ServiceCategory extends Component {
    render() {
        return (
            <>
                <div className="service-widgets widget_categories">
                    <h3>Categories.</h3>
                    <ul>
                        <li><Link to="/service-details">Finance Management <FiChevronRight className="icon" /></Link></li>
                        <li><Link to="/service-details">Banking Investigation <FiChevronRight className="icon" /></Link></li>
                        <li><Link to="/service-details">Business Insurance <FiChevronRight className="icon" /></Link></li>
                        <li><Link to="/service-details">Car Insurance <FiChevronRight className="icon" /></Link></li>
                        <li><Link to="/service-details">Market Research <FiChevronRight className="icon" /></Link></li>
                        <li><Link to="/service-details">Home Insurance <FiChevronRight className="icon" /></Link></li>
                        <li><Link to="/service-details">Life Insurance <FiChevronRight className="icon" /></Link></li>
                        <li><Link to="/service-details">Health Insurance <FiChevronRight className="icon" /></Link></li>
                    </ul>
                </div>
            </>
        )
    }
}
