import React, { Component } from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/images/footer.png";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import ScrollTopBtn from "../layouts/ScrollTopBtn";

export default class Footer extends Component {
  render() {
    return (
      <>
        <ScrollTopBtn />
        <footer className="footer-wrapper">
          <div className="container">
            <div className="footer-widgets-grid">
              <div className="footer-widget footer-left">
                <Link to="/">
                  <img src={FooterLogo} alt="Footer Logo" />
                </Link>
                <ul className="footer-address">
                  <li>
                    <a href="tel:+622121282236">
                      <span className="icon">
                        <FiPhone />
                      </span>
                      +6221 21282236
                    </a>
                  </li>
                  <li>
                    <a href="mailto:cs@mitrasaturupa.com">
                      <span className="icon">
                        <FaEnvelope />
                      </span>
                      cs@mitrasaturupa.com
                    </a>
                  </li>
                  <li>
                    <a href="https://maps.google.com">
                      <span className="icon">
                        <FiMapPin />
                      </span>
                      Tebet Barat Dalam VIII A No. 12, Tebet <br />
                      Jakarta - Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="https://maps.google.com">
                      <span className="icon">
                        <FiMapPin />
                      </span>
                      Gunung Sahilan No. 50, Riau <br />
                      Pekanbaru - Indonesia
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget footer-help-links">
                <h2>Butuh Bantuan?</h2>
                <ul className="help-links">
                  <li>
                    <Link to="/">Tentang Kami</Link>
                  </li>
                  <li>
                    <Link to="/SMK3">Sertifikasi SMK3</Link>
                  </li>
                  <li>
                    <Link to="/Proses-SMK3">Proses Sertifikasi SMK3</Link>
                  </li>
                  <li>
                    <Link to="/AK3U">Sertifikasi AK3U</Link>
                  </li>
                  <li>
                    <Link to="/AK3U">Proses Sertifikasi AK3U</Link>
                  </li>
                  <li>
                    <Link to="/contact">Hubungi Kami</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-widget footer-working-hours">
                <h2>Jam Operasional.</h2>
                <ul className="working-hours">
                  <li>
                    <strong>Senin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</strong>{" "}
                    &nbsp;8:00-16:00
                  </li>
                  <li>
                    <strong>Selasa&nbsp;&nbsp;&nbsp; :</strong> &nbsp;8:00-16:00
                  </li>
                  <li>
                    <strong>Rabu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</strong>{" "}
                    &nbsp;8:00-16:00
                  </li>
                  <li>
                    <strong>Kamis&nbsp;&nbsp;&nbsp;&nbsp; :</strong>{" "}
                    &nbsp;8:00-16:00
                  </li>
                  <li>
                    <strong>Jumat&nbsp;&nbsp;&nbsp; :</strong> &nbsp;8:00-16:00
                  </li>
                  <li className="off-day">
                    Sabtu-Minggu: <strong>Off</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="copyright-wrap text-center"></div>
          </div>
        </footer>
      </>
    );
  }
}
