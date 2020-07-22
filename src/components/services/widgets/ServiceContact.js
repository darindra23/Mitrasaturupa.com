import React, { Component } from 'react'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { FaEnvelope } from 'react-icons/fa'

export default class ServiceContact extends Component {
    render() {
        return (
            <>
                <div className="service-widgets widget_contact">
                    <h3>Contact Us.</h3>
                    <ul>
                        <li className="d-flex"><span className="icon"><FiMapPin /></span> 121 King Street, USA, New York</li>
                        <li className="d-flex"><span className="icon"><FiPhone /></span> <a href="tel:+1401574423">+1401574423</a></li>
                        <li className="d-flex"><span className="icon"><FaEnvelope /></span> <a href="mailto:example@support.com">example@support.com</a></li>
                    </ul>
                </div>
            </>
        )
    }
}
