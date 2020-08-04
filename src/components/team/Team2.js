import React, { Component } from "react";
import SectionsTitle from "../common/SectionsTitle";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import img1 from "../../assets/images/ari.jpeg";
import img2 from "../../assets/images/arif.jpeg";
import img3 from "../../assets/images/fendi.jpeg";
import img4 from "../../assets/images/rocky.jpeg";

export default class Team2 extends Component {
  render() {
    return (
      <section className="team-wrapper">
        <div className="container">
          <div className="text-center">
            <SectionsTitle
              title="Expert Team Members."
              subtitle="Meet Our Dedicated"
            />
          </div>
          <div className="team-grid text-center">
            <div className="team">
              <div className="team-img">
                <img src={img1} alt="Team" />
              </div>
              <div className="team-content">
                <h2 className="name">Ari Bowo</h2>
                <p className="designation">Auditor</p>
                <Link to="/ari-details" className="theme-button">
                  Read His Story <FiChevronRight className="icon" />
                </Link>
              </div>
            </div>
            <div className="team">
              <div className="team-img">
                <img src={img2} alt="Team" />
              </div>
              <div className="team-content">
                <h2 className="name">M. Arief Sastrawan, ST</h2>
                <p className="designation">Auditor</p>
                <Link to="/arief-details" className="theme-button">
                  Read His Story <FiChevronRight className="icon" />
                </Link>
              </div>
            </div>
            <div className="team">
              <div className="team-img">
                <img src={img3} alt="Team" />
              </div>
              <div className="team-content">
                <h2 className="name">M. Fendi Putranta</h2>
                <p className="designation">Auditor</p>
                <Link to="/fendi-details" className="theme-button">
                  Read His Story <FiChevronRight className="icon" />
                </Link>
              </div>
            </div>
            <div className="team">
              <div className="team-img">
                <img src={img4} alt="Team" />
              </div>
              <div className="team-content">
                <h2 className="name">Rocky Ramadani</h2>
                <p className="designation">Auditor</p>
                <Link to="/rocky-details" className="theme-button">
                  Read His Story <FiChevronRight className="icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
