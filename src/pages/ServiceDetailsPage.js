import React, { Component } from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import Divider from '../components/other/Divider'
import CtaForm from '../components/other/CtaForm'
import ServiceSidebar from '../components/services/ServiceSidebar'
import ServiceDtlsContent from '../components/services/ServiceDtlsContent'
import Footer from '../components/other/Footer'

export default class ServiceDetailsPage extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="Service Details." />
                <section className="service-details-wrapper">
                    <div className="container">
                        <div className="service-details-grid d-grid">
                            <ServiceSidebar />
                            <ServiceDtlsContent />
                        </div>
                    </div>
                </section>
                <Divider />
                <div className="form-white-bg">
                    <CtaForm />
                </div>
                <Footer />
            </>
        )
    }
}
