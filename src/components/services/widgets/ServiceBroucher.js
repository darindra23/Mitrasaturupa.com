import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiDownload } from 'react-icons/fi'

export default class ServiceBroucher extends Component {
    render() {
        return (
            <>
                <div className="service-widgets widget_brochures">
                    <h3>Brochures</h3>
                    <p>View our 2020 financial prospectus brochure for an easy to read guide on all of the services offer.</p>
                    <Link className="theme-button" to="#" download>Company Presentation <FiDownload className="icon" /></Link>
                </div>
            </>
        )
    }
}
