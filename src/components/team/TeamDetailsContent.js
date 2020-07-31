import React, { Component } from "react";
import img from "../../assets/images/sertifikatFendi.png";
import { FiPhone, FiLink } from "react-icons/fi";
import { FaEnvelope, FaQuoteLeft } from "react-icons/fa";
import TeamSidebar from "./TeamSidebar";

export default class TeamDetailsContent extends Component {
  expertise = {
    items: [
      {
        list:
          "Membantu mengawasi pelaksanaan peraturan perundangan keselamatan dan kesehatan kerja sesuai dengan bidang yang ditentukan.",
      },
      {
        list:
          "Memeriksakan kesehatan badan, kondisi mental dan kemampuan fisik dari tenaga kerja yang akan diterimanya maupun akan dipindahkan sesuai dengan sifat – sifat pekerjaan yang diberikan padanya.",
      },
      {
        list:
          "Memeriksa semua tenaga kerja yang berada di bawah pimpinannya, secara berkala pada Dokter yang ditunjuk.",
      },
      {
        list: "Membuat petunjuk keselamatan kerja di setiap divisi perusahaan.",
      },
      {
        list:
          "Merancang sistem keamanan dan keselamatan kerja untuk pertolongan pada setiap kecelakaan kerja.",
      },
    ],
  };
  educations = {
    items: [
      {
        list:
          "Ahli Keselamatan dan Kesehatan Kerja, Disertifikasi oleh PT. Indohes Magna Persada",
      },
    ],
  };
  render() {
    return (
      <section className="team-details-wrapper">
        <div className="container">
          <div className="team-details-grid-top d-grid">
            <div className="team-details-img">
              <img src={img} alt="Team Details" />
            </div>
            <div className="team-details-content">
              <h1 className="name">M. Fendi Putranta</h1>
              <span className="skills">
                Auditor Ahli Kesehatan dan Keselamatan Kerja
              </span>

              <div className="team-expertise-education-grid d-grid">
                <div className="left">
                  <h2>Peran dan Tanggung Jawab</h2>
                  <ul className="team-details-expertise lists">
                    {this.expertise.items.map((item, index) => {
                      return <li key={index}>{item.list}</li>;
                    })}
                  </ul>
                </div>
                <div className="right">
                  <h2>Sertifikasi</h2>
                  <ul className="team-details-education lists">
                    {this.educations.items.map((item, index) => {
                      return <li key={index}>{item.list}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
