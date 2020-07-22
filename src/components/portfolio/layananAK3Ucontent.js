import React, { Component } from "react";

export default class PortfolioDetailsContent extends Component {
  render() {
    return (
      <section className="portfolio-details-wrapper">
        <div className="container">
          <div className="portfolio-details-image-box">
            <div className="portfolio-details-content">
              <h1>Definisi AK3U</h1>
              <p>
                Ahli Keselamatan dan Kesehatan Kerja Umum atau yang biasa
                disingkat AK3U ialah tenaga teknis berkeahlian khusus dari luar
                Departemen Tenaga Kerja yang ditunjuk oleh Menteri Tenaga Kerja
                untuk mengawasi ditaatinya Undang-Undang Nomor 1 Tahun 1970
                tentang Keselamatan Kerja.
              </p>
              <p>
                Setiap perusahaan wajib memiliki Ahli K3. Hal tersebut tertuang
                dalam <b>Permenaker No. 4/MEN/1987</b>. Pelatihan ini merupakan
                program <b>KEMNAKER RI</b> dirancang untuk menjadikan seorang
                ahli K3 sesuai kebutuhan perusahaan serta sejalan dengan
                perundang undangan yang berlaku. Kegiatan ini merupakan
                pelatihan resmi yang tersertifikasi oleh Kemnaker RI.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
