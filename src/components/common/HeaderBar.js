import React, { Component } from "react";
import { FiPhone, FiMapPin, FiChevronRight } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class HeaderBar extends Component {
  render() {
    return (
      <div className="header-bar-wrapper">
        <div className="container">
          <div className="header-bar-grid">
            <div className="header-bar-left">
              <ul className="d-flex">
                <li className="d-flex">
                  <FiPhone className="icon" />{" "}
                  <a href="tel:+622121282236">021 21282236</a>
                </li>
                <li className="d-flex">
                  <FaEnvelope className="icon" />{" "}
                  <a href="mailto:cs@mitrasaturupa.com">cs@mitrasaturupa.com</a>
                </li>
                <li className="d-flex">
                  <FiMapPin className="icon" /> Tebet Barat Dalam VIII A No. 12
                </li>
              </ul>
            </div>
            <div className="header-bar-right text-right">
              <div className="header-bar-right-flex d-flex">
                <div className="header-bar-cta-btn">
                  <Link to="/contact" className="theme-button">
                    Hubungi Kami <FiChevronRight className="icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
