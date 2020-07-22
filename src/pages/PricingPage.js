import React, { Component } from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import Pricing from '../components/other/Pricing'
import CtaForm from '../components/other/CtaForm'
import Footer from '../components/other/Footer'

export default class PricingPage extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="Our Pricing." />
                <div className="plain-pricing-table">
                    <Pricing />
                </div>
                <div className="form-white-bg">
                    <CtaForm />
                </div>
                <Footer />
            </>
        )
    }
}
