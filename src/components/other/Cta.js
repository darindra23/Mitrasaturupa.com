import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default class Cta extends Component {
  render() {
    return (
      <section className="cta-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>
                Tahun ini <strong>60 Perusahaan</strong> telah berbisnis dengan
                perusahaan kami
              </h1>
            </div>
            <div className="col-4 text-right">
              <Link to="/contact" className="theme-button">
                Mulai Sekarang <FiChevronRight className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
