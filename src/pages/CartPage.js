import React, { Component } from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import CartDetails from '../components/shop/cart/CartDetails'
import Footer from '../components/other/Footer'

export default class CartPage extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="Cart." />
                <CartDetails />
                <Footer />
            </>
        )
    }
}
