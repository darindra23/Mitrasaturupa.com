import React, { Component } from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import CheckOut from '../components/shop/checkout/CheckOut'
import Footer from '../components/other/Footer'

export default class CheckoutPage extends Component {
    render() {
        return (
            <main className="checkout-page">
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="Checkout" />
                <section className="checkout-area">
                    <CheckOut />
                </section>
                <Footer />
            </main>
        )
    }
}
