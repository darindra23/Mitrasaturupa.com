import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.min.css';
import { FiChevronRight } from 'react-icons/fi'

export default class owlcarousel extends Component {
    sliders = {
        items: [
            {
                title: 'Minzel Gives You Power to Grow Your Business.',
                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem veritatis et quasi architecto beatae vitae dicta.',
                button1: 'Get Started',
                button2: 'Learn More',
                bg: 'bg-1',
                col: '8'
            },
            {
                title: 'Your Business Success is Our Success.',
                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem veritatis et quasi architecto beatae vitae dicta.',
                button1: 'Let\'s Start Now',
                button2: 'Learn More',
                bg: 'bg-3',
                col: '8 offset-2 text-center'
            },
            {
                title: 'Work With World Class Finance Experts.',
                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem veritatis et quasi architecto beatae vitae dicta.',
                button1: 'Let\'s Start Now',
                button2: 'Learn More',
                bg: 'bg-2',
                col: '8'
            }
        ]
    }
    render() {
        return (
            <section className="hero-slider-wrapper hero-slider-2">
                <OwlCarousel className="owl-theme" loop={true} autoplay={true} margin={10} dots={false} nav items={1} >
                    {this.sliders.items.map((item, index) => {
                        return <div key={index} className={'hero-slider-item ' + item.bg}>
                            <div className="container">
                                <div className="row">
                                    <div className={'col-' + item.col}>
                                        <div className="hero-slider-content">
                                            <h1>{item.title}</h1>
                                            <p>{item.description}</p>
                                            <div className="hero-slider-btns">
                                                <Link to="/#" className="theme-button">{item.button1} <FiChevronRight className="icon" /></Link>
                                                <Link to="/#" className="theme-button">{item.button2} <FiChevronRight className="icon" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                </OwlCarousel>
            </section >
        )
    }
}
