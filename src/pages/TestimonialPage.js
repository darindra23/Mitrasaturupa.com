import React, { Component } from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import Testimonial from '../components/team/Testimonial'
import SectionsTitle from '../components/common/SectionsTitle'
import Divider from '../components/other/Divider'
import CtaForm from '../components/other/CtaForm'
import Footer from '../components/other/Footer'

export default class TestimonialPage extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="Testimonial" />
                <section className="testimonial-wrapper ">
                    <div className="text-center">
                        <SectionsTitle title="We are very happy for our client’s review." subtitle="Customer's Feedback" />
                    </div>
                    <Testimonial />
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
