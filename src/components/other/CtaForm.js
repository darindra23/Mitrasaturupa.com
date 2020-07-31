import React, { Component } from "react";
import SectionsTitle from "../common/SectionsTitle";
import { FiPhoneCall } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

export default class CtaForm extends Component {
  render() {
    return (
      <section className="ctaform-wrapper">
        <div className="container">
          <div className="ctaform-grid">
            <div className="ctaform-left">
              <SectionsTitle
                title="Get Advice From Our Professionals."
                subtitle="Call To Action"
              />
              <div className="ctaform-contact-info-grid text-center">
                <div className="item">
                  <FiPhoneCall className="icon" />
                  <h2 className="item-title">Direct Line Numbers</h2>
                  <p>+62 21 21282236</p>
                </div>
                <div className="item">
                  <MdMailOutline className="icon" />
                  <h2 className="item-title">Our Email</h2>
                  <p>cs@mitrasaturupa.com</p>
                </div>
              </div>
            </div>
            <div className="ctaform-right">
              <form>
                <div className="form-grid">
                  <input type="text" name="name" placeholder="Name" />
                  <input type="EMAIL" name="email" placeholder="Email" />
                </div>
                <input type="text" name="text" placeholder="subject" />
                <textarea id="textarea" placeholder="Message"></textarea>
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
        </div>
      </section>
    );
  }
}
