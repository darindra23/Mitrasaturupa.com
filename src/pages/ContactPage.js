import React, { Component } from "react";
import Navbar from "../components/common/Navbar";
import Breadcrumb from "../components/common/Breadcrumb";
import ContactDetails from "../components/contact/ContactDetails";
import Footer from "../components/other/Footer";

export default class ContactPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <header className="header-area">
          <Navbar />
        </header>
        <Breadcrumb title="Hubungi Kami." />
        <ContactDetails />
        <Footer />
      </>
    );
  }
}
