import React, { Component } from "react";
import Navbar from "../components/common/Navbar";
import Breadcrumb from "../components/common/Breadcrumb";

import Team2 from "../components/team/Team2";
import Divider from "../components/other/Divider";
import CtaForm from "../components/other/CtaForm";
import Footer from "../components/other/Footer";

export default class TeamGrid extends Component {
  render() {
    return (
      <div className="teamgrid-page">
        <header className="header-area">
          <Navbar />
        </header>
        <Breadcrumb title="Team Member" />
        <Team2 />
        <Divider />
        <div className="form-white-bg">
          <CtaForm />
        </div>
        <Footer />
      </div>
    );
  }
}
