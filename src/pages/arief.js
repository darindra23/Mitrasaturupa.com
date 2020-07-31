import React, { Component } from "react";
import TeamDetailsContent from "../components/team/ariefDetails";
import Navbar from "../components/common/Navbar";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/other/Footer";

export default class TeamDetails extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <header className="header-area">
          <Navbar />
        </header>
        <Breadcrumb title="Team Details." />
        <TeamDetailsContent />
        <Footer />
      </>
    );
  }
}
