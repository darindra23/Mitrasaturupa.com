import React, { Component } from "react";
import PortfolioDetailsContent from "../components/portfolio/PortfolioDetailsContent";
import Navbar from "../components/common/Navbar";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/other/Footer";

export default class PortfolioDetailsPage extends Component {
  render() {
    return (
      <>
        <header className="header-area">
          <Navbar />
        </header>
        <Breadcrumb title="Visi Misi" />
        <PortfolioDetailsContent />
        <Footer />
      </>
    );
  }
}
