import React, { Component } from "react";
import Navbar from "../components/common/Navbar";
import SectionsTitle from "../components/common/SectionsTitle";
import Service from "../components/services/Services";
import About1 from "../components/about/About1";
import Divider from "../components/other/Divider";
import About from "../components/about/About";
import CounterUp from "../components/other/CounterUp";
import Slider from "../components/sliders/slider";
import Cta from "../components/other/Cta";
import Team from "../components/team/Team";
import Clients from "../components/other/Clients";
import Footer from "../components/other/Footer";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <header className="header-area header-style2">
          <Navbar />
        </header>
        <Slider />
        <About1 />
        <Divider />
        <div className="h-service">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <SectionsTitle
                  title="Keunggulan menggunakan jasa pelayanan yang kami berikan"
                  subtitle="Keunggulan"
                />
              </div>
            </div>
          </div>
          <Service />
        </div>
        <Divider />
        <About />
        <Divider />
        <Team />
        <CounterUp />
        <Cta />
        <div style={{ marginTop: 40 }}>
          <Clients />
        </div>
        <Footer />
      </>
    );
  }
}
