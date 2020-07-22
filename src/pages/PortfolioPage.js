import React, { Component } from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import Portfolio from '../components/portfolio/Portfolio'
import Divider from '../components/other/Divider'
import CtaForm from '../components/other/CtaForm'
import Footer from '../components/other/Footer'

export default class PortfolioPage extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="Portfolio Grid." />
                <Portfolio />
                <Divider />
                <div className="form-white-bg">
                    <CtaForm />
                </div>
                <Footer />
            </>
        )
    }
}
