import React, { Component } from "react";
import {
  AiOutlineNotification,
  AiOutlineUsergroupAdd,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import SectionsTitle from "../common/SectionsTitle";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

export default class CounterUp extends Component {
  counterstates = {
    items: [
      {
        icon: <AiOutlineNotification className="icon" />,
        number: (
          <CountUp
            start={0}
            end={500}
            duration={8}
            separator=" "
            decimal=","
            prefix=" "
            suffix=" "
          />
        ),
        numsuffix: "+",
        title: "Project Selesai",
      },
      {
        icon: <AiOutlineUsergroupAdd className="icon" />,
        number: (
          <CountUp
            start={0}
            end={10}
            duration={8}
            separator=" "
            decimal=","
            prefix=" "
            suffix=" "
          />
        ),
        numsuffix: "+",
        title: "Auditor Berpengalaman",
      },
      {
        icon: <FaHandshake className="icon" />,
        number: (
          <CountUp
            start={0}
            end={250}
            duration={8}
            separator=" "
            decimal=","
            prefix=" "
            suffix=" "
          />
        ),
        numsuffix: "+",
        title: "Perusahaan Klien",
      },
      {
        icon: <AiOutlineCheckCircle className="icon" />,
        number: (
          <CountUp
            start={0}
            end={5}
            duration={8}
            separator=" "
            decimal=","
            prefix=" "
            suffix=" "
          />
        ),
        numsuffix: "+",
        title: "Tahun Pengalaman",
      },
    ],
  };
  render() {
    return (
      <>
        <section className="counterup-wrapper text-center">
          <div className="container">
            <SectionsTitle
              title="Angka Berbicara."
              subtitle="Lihat Data Kami"
            />
            <div className="counterup-grid-wrap">
              {this.counterstates.items.map((item, index) => {
                return (
                  <div className="counterup-items" key={index}>
                    <div className="counterup-iconbox">{item.icon}</div>
                    <h1 className="counterup-number">
                      {item.number}
                      {item.numsuffix}
                    </h1>
                    <p className="counterup-title">{item.title}</p>
                  </div>
                );
              })}
            </div>
            <div className="counterup-bottom-wrap">
              <p>Jangan ragu untuk menghubungi kami apabila butuh bantuan dan ingin berkerja sama</p>
              <Link to="/contact" className="theme-button">
                Mulai Sekarang <FiChevronRight className="icon" />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}
