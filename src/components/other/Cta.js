import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from "react-icons/fi";

export default class Cta extends Component {
    render() {
        return (
            <section className="cta-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1>This Year <strong>55 Companies</strong> Started & They Are in Business With Us.</h1>
                        </div>
                        <div className="col-4 text-right">
                            <Link to="/#" className="theme-button">Start Project <FiChevronRight className="icon" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
