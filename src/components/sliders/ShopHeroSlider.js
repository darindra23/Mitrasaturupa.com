import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.min.css';
import { FiChevronRight } from 'react-icons/fi'

export default class ShopHeroSlider extends Component {
    sliders = {
        items: [
            {
                title: 'Hand Picked Items Sold Exclusively Online.',
                description: "Deserunt dolore voluptatem assumenda quae possimus sunt dignissimos tempora officia. Lorem ipsum dolor sit amet",
                button1: 'Shop Now',
                button2: 'All Products',
                bg: 'bg-7',
                col: '8'
            },
            {
                title: 'Find That Perfect Gift and Surprise Someone.',
                description: "Deserunt dolore voluptatem assumenda quae possimus sunt dignissimos tempora officia. Lorem ipsum dolor sit amet",
                button1: 'Shop Now',
                button2: 'All Products',
                bg: 'bg-8',
                col: '8 offset-2 text-center'
            },
            {
                title: 'Beautifully Design Pieces by  Talented Designers..',
                description: "Deserunt dolore voluptatem assumenda quae possimus sunt dignissimos tempora officia. Lorem ipsum dolor sit amet",
                button1: 'Shop Now',
                button2: 'All Products',
                bg: 'bg-9',
                col: '8'
            }
        ]
    }
    render() {
        return (
            <section className="shop-hero-slider hero-slider-wrapper">
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
                                                <Link to="/shop" className="theme-button">{item.button1} <FiChevronRight className="icon" /></Link>
                                                <Link to="/shop" className="theme-button">{item.button2} <FiChevronRight className="icon" /></Link>
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
