import React, { Component } from "react";
import SingleImg from "../../assets/images/kode.png";

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
              <h1>Kode Etik</h1>
              <p>
                Kode Etik Perusahaan menjabarkan prinsip yang menjadi landasan
                berperilaku bagi PT Mitra Satu Rupa sebagai perusahaan dan
                segenap anggota Dewan Komisaris, Direksi serta seluruh Karyawan
                sebagai lnsan Mitra Satu Rupa dalam melakukan tugas, tanggung
                jawab dan kewenangannya masing-masing.
              </p>
              <p>
                Penetapan dan pemberlakuan dokumen sebagaimana tertuang dalam
                Lampiran Surat Keputusan Direksi ini yang selanjutnya disebut
                sebagai ‘Kode Etik Perusahaan/Code of Conduct PT Mitra Satu
                Rupa”, sebagai acuan utama bagi penerapan Kode Etik Perusahaan
                di PT Mitra Satu Rupa.
              </p>
              <h1>Tujuan dikembangkannya Kode Etik Perusahaan</h1>
              <p>
                <ul>
                  <li>
                    1. Mengembangkan perilaku yang baik sesuai dengan standar
                    etika yang tinggi bagi korporasi, komisaris, direksi dan
                    seluruh karyawan
                  </li>
                  <li>
                    2. Mengembangkan hubungan yang baik dengan pihak eksternal
                    berlandaskan prinsip-prinsip GCG dan semangat Kode Etik
                    Perusahaan ini.
                  </li>
                </ul>
                <br />
                Selanjutnya, dengan menerapkan Kode Etik Perusahaan ini Mitra
                Satu Rupa yakin mendapatkan manfaat dalam jangka panjang, yaitu
                berupa:
                <br />
                Mitra Satu Rupa bertekad untuk selalu menjunjung tinggi
                nilai-nilai yang tertulis dalam Kode Etik Perusahaan dan Pakta
                Integritas. Dalam pelaksanaannya, perusahaan juga mengajak peran
                serta seluruh masyarakat dan dunia usaha untuk turut memonitor
                penerapan Kode Etik Perusahaan dan Pakta Integritas.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
