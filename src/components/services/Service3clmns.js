import React, { Component } from "react";
import { FiTarget } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

export default class Service3clmns extends Component {
  servicestates = {
    items: [
      {
        icon: <FiTarget className="service-items-icon" />,
        title: "Misi Kami.",
        description:
          "Mitra Satu Rupa berkomitmen untuk memberikan Layanan Sertifikasi yang murah sehingga dapat menjaungkau semua kalangan baik Industri kecil sampai dengan Industri Besar.",
      },
      {
        icon: <IoIosNotificationsOutline className="service-items-icon" />,
        title: "Visi Kami.",
        description:
          "Mitra Satu Rupa Menjadi Lembaga Audit Nasional yang kompeten dan terpercaya.",
      },
      {
        icon: <FaHandshake className="service-items-icon" />,
        title: "Komitmen Kami.",
        description:
          "Memberikan layanan sertifikasi yang baik dan sesuai dengan peraturan yang berlaku.",
      },
    ],
  };
  render() {
    return (
      <section className="services-area service-3columns">
        <div className="container">
          <div className="services-items-grid">
            {this.servicestates.items.map((item, index) => {
              return (
                <div className="service-items" key={index}>
                  <span className="service-items-iconbox">{item.icon}</span>

                  <h3 className="service-items-title">{item.title}</h3>

                  <p className="service-items-description">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
