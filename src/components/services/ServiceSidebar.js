import React, { Component } from 'react'
import ServiceCategory from './widgets/ServiceCategory'
import ServiceContact from './widgets/ServiceContact'
import ServiceBroucher from './widgets/ServiceBroucher'
import ServiceSocial from './widgets/ServiceSocial'

export default class ServiceSidebar extends Component {
    render() {
        return (
            <aside className="service-sidebar">
                <ServiceCategory />
                <ServiceContact />
                <ServiceBroucher />
                <ServiceSocial />
            </aside>
        )
    }
}
