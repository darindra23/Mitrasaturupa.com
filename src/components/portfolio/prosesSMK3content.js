import React, { Component } from "react";
import SingleImg from "../../assets/images/Proses.png";

export default class PortfolioDetailsContent extends Component {
  render() {
    return (
      <section className="portfolio-details-wrapper">
        <div className="container">
          <div className="portfolio-details-image-box">
            <h1 style={{ color: "#233d63" }}>Skema Proses SMK3 Kemenaker RI</h1>
            <div className="portfolio-details-image">
              <img src={SingleImg} alt="Portfolio Details" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
