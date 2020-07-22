import React, { Component } from "react";
import PortfolioDetailsContent from "../components/portfolio/prosesSMK3content";
import Navbar from "../components/common/Navbar";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/other/Footer";

export default class PortfolioDetailsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <header className="header-area">
          <Navbar />
        </header>
        <Breadcrumb title="Skema Proses SMK3 Kemenaker RI" />
        <PortfolioDetailsContent />
        <Footer />
      </>
    );
  }
}
