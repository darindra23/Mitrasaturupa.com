import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import Breadcrumb from '../components/common/Breadcrumb';
import Login from '../components/other/LoginForm';
import Footer from '../components/other/Footer';

export default class LoginPage extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="Login." />
                <Login />
                <Footer />
            </>
        )
    }
}
