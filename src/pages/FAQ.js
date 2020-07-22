import React, { Component } from 'react'
import Accordion from '../components/other/Accordions'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import Divider from '../components/other/Divider'
import CtaForm from '../components/other/CtaForm'
import TeamSidebar from '../components/team/TeamSidebar'
import Footer from '../components/other/Footer'

export default class FAQ extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="FAQ" />
                <div className="container">
                    <div className="faq-grid d-grid">
                        <div className="left">
                            <Accordion />
                        </div>
                        <div className="right">
                            <TeamSidebar />
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="form-white-bg">
                    <CtaForm />
                </div>
                <Footer />
            </>
        )
    }
}
