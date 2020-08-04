import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "../../assets/css/owl.carousel.css";
import "../../assets/css/owl.theme.default.min.css";
import { FiChevronRight } from "react-icons/fi";

export default class owlcarousel extends Component {
  sliders = {
    items: [
      {
        title: "Kami Memberikan Pelayanan Terbaik Untuk Anda",
        button1: "Mulai Sekarang",
        button2: "Pelajari Lebih Lanjut",
        bg: "bg-1",
        col: "8",
      },
    ],
  };
  render() {
    return (
      <section className="hero-slider-wrapper">
        <OwlCarousel
          className="owl-theme"
          loop={true}
          autoplay={true}
          margin={10}
          dots={false}
          nav
          items={1}
        >
          {this.sliders.items.map((item, index) => {
            return (
              <div key={index} className={"hero-slider-item " + item.bg}>
                <div className="container">
                  <div className="row">
                    <div className={"col-" + item.col}>
                      <div className="hero-slider-content">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <div className="hero-slider-btns">
                          <Link to="/contact" className="theme-button">
                            {item.button1} <FiChevronRight className="icon" />
                          </Link>
                          <Link to="/about" className="theme-button">
                            {item.button2} <FiChevronRight className="icon" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </section>
    );
  }
}
