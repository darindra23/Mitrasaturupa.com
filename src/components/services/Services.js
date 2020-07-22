import React, { Component } from "react";
import { FiTarget } from "react-icons/fi";
import { MdAccountBalance } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

export default class Service extends Component {
  servicestates = {
    items: [
      {
        icon: <FiTarget className="service-items-icon" />,
        title: "Waktu",
        description:
          "Terjaminnya penerbitan sertifikat yang kami berikan terhadap client tepat waktu",
      },
      {
        icon: <MdAccountBalance className="service-items-icon" />,
        title: "Auditor Bersertifikat",
        description:
          "Auditor kami bersertifikat dari Kementerian Ketenega Kerjaan Republik Indonesia & berbagai institusi yang kompeten dibidangnya",
      },
      {
        icon: <AiOutlineDollar className="service-items-icon" />,
        title: "Harga",
        description:
          "Kami berusaha memberikan harga yang terbaik terhadap masing - masing client kami",
      },
    ],
  };
  render() {
    return (
      <section className="services-area">
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
