import React, { Component } from "react";
import SingleImg from "../../assets/images/vission.jpg";

export default class PortfolioDetailsContent extends Component {
  render() {
    return (
      <section className="portfolio-details-wrapper">
        <div className="container">
          <div className="portfolio-details-image-box">
            <div className="portfolio-details-image">
              <img src={SingleImg} alt="Portfolio Details" />
            </div>
            <div className="portfolio-details-info-grid d-grid"></div>
            <div className="portfolio-details-content">
              <h1>Visi</h1>
              <p>
                Mitra Satu Rupa Menjadi Lembaga Audit Nasional yang kompeten dan
                terpercaya
              </p>
              <h1>Misi</h1>
              <p>
                Mitra Satu Rupa berkomitmen untuk memberikan Layanan Sertifikasi
                yang murah sehingga dapat menjaungkau semua kalangan baik
                Industri kecil sampai dengan Industri Besar. Memberikan layanan
                sertifikasi yang baik dan sesuai dengan peraturan yang berlaku.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
