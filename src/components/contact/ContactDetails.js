import React, { Component } from "react";
import SectionsTitle from "../common/SectionsTitle";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import ContactSidebar from "./ContactSidebar";
import Maps from "../contact/Maps";

export default class ContactDetails extends Component {
  render() {
    return (
      <section className="contact-form-wrapper">
        <div className="container">
          <div className="contact-form-grid d-grid">
            <div className="left">
              <SectionsTitle
                title="Do You Have Any Question? Write Us a Message."
                subtitle="Get In Touch With Us"
              />
              <p>
                For any inquiries please don't hesitate to contact us so we
                could discuss for further opportunity and we'll try our best to
                provide you with the best solution.
              </p>
              <div className="sidebar-social-profile">
                <ul className="contact-form-socials d-flex">
                  <li>
                    <a href="https://facebook.com">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="https://plus.google.com">
                      <FaGooglePlusG />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <form>
                <div className="form-grid d-grid">
                  <div className="left">
                    <label htmlFor="name">
                      Your Name <sup>*</sup>
                    </label>
                    <input type="text" id="name" placeholder="Full Name" />
                  </div>
                  <div className="right">
                    <label htmlFor="email">
                      Your Email <sup>*</sup>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="left">
                    <label htmlFor="number">
                      Your Number <sup>*</sup>
                    </label>
                    <input type="text" id="number" placeholder="Your Phone" />
                  </div>
                  <div className="right">
                    <label htmlFor="subject">
                      Subject <sup>*</sup>
                    </label>
                    <input type="text" id="subject" placeholder="Subject" />
                  </div>
                </div>
                <div className="form-textarea">
                  <label htmlFor="message">
                    Your Message <sup>*</sup>
                  </label>
                  <textarea id="message" placeholder="Write Message"></textarea>
                </div>
                <button
                  className="theme-button"
                  type="button"
                  onClick={() =>
                    window.open(
                      `mailto:cs@mitrasaturupa.com?subject=Info%20Sertifikasi%20SMK3%20dan%20AK3U.`
                    )
                  }
                >
                  Send Us Message <FiChevronRight className="icon" />
                </button>
              </form>
            </div>
          </div>

          <div className="contact-form-map-grid d-grid">
            <div className="left">
              <Maps />
            </div>
            <div className="right">
              <ContactSidebar />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
