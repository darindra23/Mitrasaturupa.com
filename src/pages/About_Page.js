import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import Breadcrumb from '../components/common/Breadcrumb';
import About from '../components/about/About';
import Service3clmns from '../components/services/Service3clmns';
import SimpleTab from '../components/tabs/SimpleTab';
import CounterUp from '../components/other/CounterUp';
import Team from '../components/team/Team';
import Clients from '../components/other/Clients';
import CtaForm from '../components/other/CtaForm';
import Footer from '../components/other/Footer';

export default class About_Page extends Component {
    render() {
        return (
            <main className="about-page">
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="About Us." />
                <About />
                <Service3clmns />
                <SimpleTab />
                <CounterUp />
                <Team />
                <Clients />
                <div className="form-white-bg">
                    <CtaForm />
                </div>
                <Footer />
            </main>
        )
    }
}
