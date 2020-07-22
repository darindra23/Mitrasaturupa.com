import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import HeaderBar from "../common/HeaderBar";
import $ from "jquery";

export default function Navbar() {
  const [navOpen, setnavOpen] = useState(false);

  /*====  side-widget-menu  =====*/
  $(document).on(
    "click",
    ".side-menu-wrap .side-menu-ul .sidenav__item",
    function () {
      $(".side-menu-wrap .side-menu-ul .sidenav__item").removeClass("active");
      $(this).toggleClass("active");
    }
  );
  $(document).on(
    "click",
    ".side-menu-wrap .side-menu-ul .sidenav__item.active",
    function () {
      $(".side-menu-wrap .side-menu-ul .sidenav__item.active").removeClass(
        "active"
      );
    }
  );

  $(window).on("scroll", function () {
    // Header Menu Fixed
    if ($(window).scrollTop() > 30) {
      $("body").addClass("header-menu-fixed");
      $(".header-menu-wrapper").addClass("d-none");
      $(".scroll-d-block").addClass("d-block").removeClass("d-none");
    } else {
      $("body").removeClass("header-menu-fixed");
      $(".header-menu-wrapper").removeClass("d-none");
      $(".scroll-d-block").removeClass("d-block").addClass("d-none");
    }
  });

  return (
    <>
      <HeaderBar />

      <div className="header-menu-wrapper">
        <div className="header-menu-container container">
          <div className="header-menu-flex">
            <div className="header-menu-left">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="header-menu-right">
              <nav>
                <ul>
                  <li>
                    <Link to="/about">
                      Pages <FiChevronDown className="menu-icon" />
                    </Link>
                    <ul className="dropdown-menu-item">
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/team-grid">
                          Team <FiChevronRight className="icon" />
                        </Link>
                        <ul className="dropdown-menu-item">
                          <li>
                            <Link to="/team-grid">Team Grid</Link>
                          </li>
                          <li>
                            <Link to="/team-details">Team Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/testimonial">Testimonial</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/our-pricing">Our Pricing</Link>
                      </li>
                      <li>
                        <Link to="/error">404</Link>
                      </li>
                      <li>
                        <Link to="/sign-up">
                          User <FiChevronRight className="icon" />
                        </Link>
                        <ul className="dropdown-menu-item">
                          <li>
                            <Link to="/sign-up">Sign Up</Link>
                          </li>
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/forgot-password">Recover Password</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      Layanan Sertifikasi
                      <FiChevronDown className="menu-icon" />
                    </a>
                    <ul className="dropdown-menu-item">
                      <li>
                        <Link to="/SMK3">Sertifikasi SMK3</Link>
                      </li>
                      <li>
                        <Link to="/AK3U">Sertifikasi AK3U</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      Proses Sertifikasi
                      <FiChevronDown className="menu-icon" />
                    </a>
                    <ul className="dropdown-menu-item">
                      <li>
                        <Link to="/Proses-SMK3">SMK3 Kemenaker RI</Link>
                      </li>
                      <li>
                        <Link to="/Proses-AK3U">AK3U</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="header-menu-right-flex">
                <div
                  className="side-menu-open"
                  onClick={() => setnavOpen(!navOpen)}
                >
                  <span className="menu__bar"></span>
                  <span className="menu__bar"></span>
                  <span className="menu__bar"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-menu-wrapper d-none scroll-d-block">
        <div className="header-menu-container container">
          <div className="header-menu-flex">
            <div className="header-menu-left">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="header-menu-right">
              <nav>
                <ul>
                  <li>
                    <a href="/about">
                      Pages <FiChevronDown className="menu-icon" />
                    </a>
                    <ul className="dropdown-menu-item">
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/team-grid">
                          Team <FiChevronRight className="icon" />
                        </a>
                        <ul className="dropdown-menu-item">
                          <li>
                            <a href="/team-grid">Team Grid</a>
                          </li>
                          <li>
                            <a href="/team-details">Team Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/testimonial">Testimonial</a>
                      </li>
                      <li>
                        <a href="/faq">FAQ</a>
                      </li>
                      <li>
                        <a href="/our-pricing">Our Pricing</a>
                      </li>
                      <li>
                        <a href="/error">404</a>
                      </li>
                      <li>
                        <a href="/sign-up">
                          User <FiChevronRight className="icon" />
                        </a>
                        <ul className="dropdown-menu-item">
                          <li>
                            <a href="/sign-up">Sign Up</a>
                          </li>
                          <li>
                            <a href="/login">Login</a>
                          </li>
                          <li>
                            <a href="/forgot-password">Recover Password</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      Layanan Sertifikasi
                      <FiChevronDown className="menu-icon" />
                    </a>
                    <ul className="dropdown-menu-item">
                      <li>
                        <Link to="/SMK3">Sertifikasi SMK3</Link>
                      </li>
                      <li>
                        <Link to="/AK3U">Sertifikasi AK3U</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      Proses Sertifikasi
                      <FiChevronDown className="menu-icon" />
                    </a>
                    <ul className="dropdown-menu-item">
                      <li>
                        <Link to="/Proses-SMK3">SMK3 Kemenaker RI</Link>
                      </li>
                      <li>
                        <Link to="/Proses-AK3U">AK3U</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="header-menu-right-flex">
                <div
                  className="side-menu-open"
                  onClick={() => setnavOpen(!navOpen)}
                >
                  <span className="menu__bar"></span>
                  <span className="menu__bar"></span>
                  <span className="menu__bar"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={navOpen ? "side-nav-container active" : "side-nav-container"}
      >
        <div className="humburger-menu">
          <div
            className="humburger-menu-lines side-menu-close"
            onClick={() => setnavOpen(!navOpen)}
          ></div>
        </div>
        <div className="side-menu-wrap">
          <ul className="side-menu-ul">
            <li className="sidenav__item">
              <Link to="/">home</Link>
            </li>
            <li className="sidenav__item">
              <Link to="/about">pages</Link>
              <span className="menu-plus-icon"></span>
              <ul className="side-sub-menu">
                <li>
                  <Link to="/about">about us</Link>
                </li>
                <li>
                  <Link to="/team-grid">team grid</Link>
                </li>
                <li>
                  <Link to="/team-details">team detail</Link>
                </li>
                <li>
                  <Link to="/testimonial">testimonial</Link>
                </li>
                <li>
                  <Link to="/faq">FAQS</Link>
                </li>
                <li>
                  <Link to="/our-pricing">pricing</Link>
                </li>
                <li>
                  <Link to="/error">404 error page</Link>
                </li>
                <li>
                  <Link to="/sign-up">sign up</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
                <li>
                  <Link to="/forgot-password">recover password</Link>
                </li>
              </ul>
            </li>
            <li className="sidenav__item">
              <Link>Layanan Sertifikasi</Link>
              <span className="menu-plus-icon"></span>
              <ul className="side-sub-menu">
                <li>
                  <Link to="/SMK3">Sertifikasi SMK3</Link>
                </li>
                <li>
                  <Link to="/AK3U">Sertifikasi AK3U</Link>
                </li>
              </ul>
            </li>
            <li className="sidenav__item">
              <Link>Proses Sertifikasi</Link>
              <span className="menu-plus-icon"></span>
              <ul className="side-sub-menu">
                <li>
                  <Link to="/Proses-SMK3">SMK3 Kemenaker RI</Link>
                </li>
                <li>
                  <Link to="/Proses-AK3U">AK3U</Link>
                </li>
              </ul>
            </li>
            <li className="sidenav__item">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
