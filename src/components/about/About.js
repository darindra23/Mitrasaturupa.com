import React from "react";
import { useLocation, Link } from "react-router-dom";
import SectionsTitle from "../common/SectionsTitle";
import { FiChevronRight, FiUserCheck, FiTarget } from "react-icons/fi";
import { TiLightbulb } from "react-icons/ti";
import img1 from "../../assets/images/foto1.jpeg";
import img2 from "../../assets/images/foto2.jpeg";
import img3 from "../../assets/images/foto3.jpeg";

export default function About() {
  const location = useLocation();
  let aboutstate = {
    supports: [
      {
        icon: <FiUserCheck />,
        title: "Team Auditor Ahli Dibidangnya",
      },
      {
        icon: <FiTarget />,
        title: "5 Tahun Pengalaman",
      },
      {
        icon: <TiLightbulb />,
        title: "Memberikan Solusi Terbaik",
      },
    ],
  };
  let aboutrightimg = {
    images: [
      {
        img: img1,
      },
      {
        img: img2,
      },
      {
        img: img3,
      },
    ],
  };

  return (
    <section className="about-wrapper">
      <div className="container">
        <div className="about-grid-wrap">
          <div className="about-left">
            <SectionsTitle
              title="Mitra Satu Rupa Perusahan Sertifikasi Kompeten dan Terpercaya"
              subtitle="Tentang Kami"
            />
            <p className="about-left-desc">
              PT. Mitra Satu Rupa merupakan perusahaan yang sudah berpengalaman
              dibidang sertifikasi SMK3 dan AK3U selama lebih dari 5 tahun yang
              sudah terbukti terpercaya dan tepat waktu dalam pengerjaan proses
              layanan sertifikasi kami.
            </p>
            {location.pathname !== "/about" && (
              <Link to="/about">
                Read More <FiChevronRight className="icon" />
              </Link>
            )}
            <div className="about-iconbox-grid">
              {aboutstate.supports.map((item, index) => {
                return (
                  <div className="about-iconbox" key={index}>
                    <span className="about-iconbox-icon">{item.icon}</span>
                    <h3 className="about-iconbox-title">{item.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="about-right">
            {aboutrightimg.images.map((img, index) => {
              return (
                <img
                  key={index}
                  className={"about_img_" + index}
                  src={img.img}
                  alt={"About Image " + index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
