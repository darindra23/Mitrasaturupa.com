import React, { Component } from "react";
import img1 from "../../assets/images/office.jpg";
import { FiMapPin, FiPhone, FiChevronRight } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";

export default class ContactSidebar extends Component {
  render() {
    return (
      <aside className="contact-sidebar">
        <h1>Our Office</h1>
        <img src={img1} alt="Contact Sidebar" />
        <p>
          For any inquiries please don't hesitate to contact us so we could
          discuss for further opportunity and we'll try our best to provide you
          with the best solution.
        </p>
        <div className="contact-sidebar-infos">
          <div className="item d-flex">
            <div className="icon">
              <span>
                <FiMapPin />
              </span>
            </div>
            <div className="details">
              <h3>Address.</h3>
              <span>
                Jl.Tebet Barat Dalam VIII A No. 12, Tebet, Jakarta Selatan.
                <br />
                DKI Jakarta 12810. Indonesia
              </span>
            </div>
          </div>

          <div className="item d-flex">
            <div className="icon">
              <span>
                <FiPhone />
              </span>
            </div>
            <div className="details">
              <h3>Phone.</h3>
              <span>
                Office &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp; +62 21
                21282236
              </span>
              <span>Hot-Line &nbsp;:&nbsp; +62 813 17151432</span>
            </div>
          </div>

          <div className="item d-flex">
            <div className="icon">
              <span>
                <FaEnvelope />
              </span>
            </div>
            <div className="details">
              <h3>Email.</h3>
              <span>cs@mitrasaturupa.com</span>
            </div>
          </div>
        </div>

        <button
          className="theme-button"
          onClick={() =>
            window.open(
              `mailto:cs@mitrasaturupa.com?subject=Info%20Sertifikasi%20SMK3%20dan%20AK3U.`
            )
          }
        >
          Contact With Us <FiChevronRight className="icon" />
        </button>
      </aside>
    );
  }
}
