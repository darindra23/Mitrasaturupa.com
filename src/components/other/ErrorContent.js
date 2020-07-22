import React, { Component } from 'react'
import errorimg from '../../assets/images/404-img3.gif'
import { Link } from 'react-router-dom'
import { FiChevronsLeft } from 'react-icons/fi'

export default class ErrorContent extends Component {
    render() {
        return (
            <section className="error-content-wrapper text-center">
                <div className="error-content-width">
                    <img src={errorimg} alt="Error" />
                    <h1>Opps! Page not found.</h1>
                    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. You can check out our <a href="https://techydevs.com/support">Help Center</a></p>
                    <div className="connector">
                        <span>or</span>
                    </div>
                    <Link className="theme-button" to="/"><FiChevronsLeft className="icon" /> Back To Home</Link>
                </div>
            </section>
        )
    }
}
