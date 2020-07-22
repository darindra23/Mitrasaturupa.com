import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import Breadcrumb from '../components/common/Breadcrumb';
import SignUpForm from '../components/other/SignUpForm';
import Footer from '../components/other/Footer';

export default class SignUpPage extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="Sign Up." />
                <SignUpForm />
                <Footer />
            </>
        )
    }
}
