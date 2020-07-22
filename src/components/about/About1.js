import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import about_video_img from "../../assets/images/SMK3.jpg";
import history_img from "../../assets/images/AK3U.jpg";

export default class About1 extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal2 = this.openModal2.bind(this);
  }

  openModal2() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <section className="about-st1-wrapper">
        <div className="container">
          <div className="about-st1-grid">
            <div className="about-left">
              <h1 className="about-left-title">
                Layanan Sertifikasi SMK3 Kemnaker
              </h1>
              <p className="about-left-desc">
                Sistem Manajemen Keselamatan & Kesehatan Kerja yang selanjutnya
                disingkat SMK3 adalah bagian dari Sistem Manajemen Perusahaan
                secara keseluruhan dalam rangka pengendalian resiko yang
                berkaitan dengan kegiatan kerja guna terciptanya tempat kerja
                yang aman, efisien dan produktif.
              </p>
              <Link to="/SMK3" className="theme-button">
                Pelajari Lebih Lanjut <FiChevronRight className="icon" />
              </Link>
            </div>
            <div className="about-right">
              <img
                className="about-right-img"
                src={about_video_img}
                alt="About Video"
              />
            </div>
          </div>
          <div className="history-area">
            <div className="row">
              <div className="col-8">
                <img className="history_img" src={history_img} alt="History" />
              </div>
              <div className="history-details-box">
                <h1 className="history-details-title">
                  Layanan Sertifikasi AK3U
                </h1>
                <p className="history-details-desc">
                  Ahli Keselamatan dan Kesehatan Kerja Umum atau yang biasa
                  disingkat AK3U ialah tenaga teknis berkeahlian khusus dari
                  luar Departemen Tenaga Kerja yang ditunjuk oleh Menteri Tenaga
                  Kerja untuk mengawasi ditaatinya Undang-Undang Nomor 1 Tahun
                  1970 tentang Keselamatan Kerja.
                </p>
                <Link to="/AK3U" className="theme-button">
                  Pelajari Lebih Lanjut <FiChevronRight className="icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
