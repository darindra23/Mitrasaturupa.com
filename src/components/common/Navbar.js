import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
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
                      Tentang Kami <FiChevronDown className="menu-icon" />
                    </Link>
                    <ul className="dropdown-menu-item">
                      <li>
                        <Link to="/about">Mitra Satu Rupa</Link>
                      </li>
                      <li>
                        <Link to="/visi-misi">Visi Misi</Link>
                      </li>
                      <li>
                        <Link to="/tata-nilai">Tata Nilai</Link>
                      </li>
                      <li>
                        <Link to="/kode-etik">Kode Etik</Link>
                      </li>
                      <li>
                        <Link to="/team">Auditor</Link>
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
                      <li>
                        <Link to="/Pesawat-uap-dan-bejana">
                          K3 Pesawat Uap dan Bejana Tekanan
                        </Link>
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
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Kontak</Link>
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
                    <Link to="/about">
                      Tentang Kami <FiChevronDown className="menu-icon" />
                    </Link>
                    <ul className="dropdown-menu-item">
                      <li>
                        <Link to="/about">Mitra Satu Rupa</Link>
                      </li>
                      <li>
                        <Link to="/visi-misi">Visi Misi</Link>
                      </li>
                      <li>
                        <Link to="/tata-nilai">Tata Nilai</Link>
                      </li>
                      <li>
                        <Link to="/kode-etik">Kode Etik</Link>
                      </li>
                      <li>
                        <Link to="/team">Auditor</Link>
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
                      <li>
                        <Link to="/Pesawat-uap-dan-bejana">
                          K3 Pesawat Uap dan Bejana Tekanan
                        </Link>
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
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Kontak</Link>
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
              <Link to="/">Beranda</Link>
            </li>
            <li className="sidenav__item">
              <Link to="/about">Tentang Kami</Link>
              <span className="menu-plus-icon"></span>
              <ul className="side-sub-menu">
                <li>
                  <Link to="/about">Mitra Satu Rupa</Link>
                </li>
                <li>
                  <Link to="/visi-misi">Visi Misi</Link>
                </li>
                <li>
                  <Link to="/tata-nilai">Tata Nilai</Link>
                </li>
                <li>
                  <Link to="/kode-etik">Kode Etik</Link>
                </li>
                <li>
                  <Link to="/team">Auditor Member</Link>
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
                <li>
                  <Link to="/Pesawat-uap-dan-bejana">
                    K3 Pesawat Uap dan Bejana Tekanan
                  </Link>
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
              </ul>
            </li>
            <li className="sidenav__item">
              <Link to="/contact">Kontak</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
