import React, { Component } from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import SectionsTitle from '../components/common/SectionsTitle'
import Service from '../components/services/Services'
import ServiceSlider from '../components/services/ServiceSlider';
import ServiceVideo from '../components/services/ServiceVideo';
import Divider from '../components/other/Divider'
import CtaForm from '../components/other/CtaForm'
import Footer from '../components/other/Footer'

export default class ServicePage extends Component {
    render() {
        return (
            <div className="service-main">
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="Services." />
                <div className="h-service">
                    <div className="container">
                        <div className="row text-center">
                            <SectionsTitle title="We Offer Marketing and Consulting Services for Businesses." subtitle="Our Dedicated Services" />
                        </div>
                    </div>
                    <Service />
                </div>
                <ServiceSlider />
                <ServiceVideo />
                <Divider />
                <div className="form-white-bg">
                    <CtaForm />
                </div>
                <Footer />
            </div>
        )
    }
}
