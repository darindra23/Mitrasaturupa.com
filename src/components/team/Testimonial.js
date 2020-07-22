import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { TiStarFullOutline, TiStarHalfOutline } from 'react-icons/ti'
import { IoIosQuote } from 'react-icons/io'
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.min.css';
import img1 from '../../assets/images/testi-img1.jpg'

import img4 from '../../assets/images/testi-img1.jpg'
import img5 from '../../assets/images/testi-img2.jpg'
import img6 from '../../assets/images/testi-img3.jpg'
import img7 from '../../assets/images/testi-img4.jpg'


export default class Testimonial extends Component {
    sliders = {
        items: [
            {
                name: "Tanbir_Ahmed",
                city: "United States",
                img: img1,
                desc: "Enjoy the diversity of ThePin. Check this numerous demos, made for different purposes. Easy to import & highly customizable. All of the presented elements, layouts & styles can be theme.",
            },
            {
                name: "Mark_Doe",
                city: "United States",
                img: img1,
                desc: "Enjoy the diversity of ThePin. Check this numerous demos, made for different purposes. Easy to import & highly customizable. All of the presented elements, layouts & styles can be theme."
            },
            {
                name: "Rizon_Pet",
                city: "United States",
                img: img1,
                desc: "Enjoy the diversity of ThePin. Check this numerous demos, made for different purposes. Easy to import & highly customizable. All of the presented elements, layouts & styles can be theme.",
            }
        ]
    }
    imagestates = {
        items: [
            {
                img: img4
            },
            {
                img: img5
            },
            {
                img: img6
            },
            {
                img: img7
            },
            {
                img: img4
            },
            {
                img: img5
            },
            {
                img: img6
            },
            {
                img: img7
            }
        ]
    }
    state = {
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    }
    render() {
        return (
            <>
                {this.imagestates.items.map((item, index) => {
                    return <img key={index} className="shape_img" src={item.img} alt="Testimonial" />
                })}
                <div className="container">
                    <OwlCarousel
                        className="owl-theme"
                        loop={true}
                        autoplay={true}
                        margin={10}
                        dots={true}
                        nav={false}
                        responsiveClass={true}
                        responsive={this.state.responsive}
                    >
                        {this.sliders.items.map((item, index) => {

                            return <div className="testimonial-items" key={index}>
                                <p className="desc">Enjoy the diversity of ThePin. Check this numerous demos, made for different purposes. Easy to import & highly customizable. All of the presented elements, layouts & styles can be theme. <IoIosQuote className="quote_icon" /></p>
                                <div className="testimonial-bottom-flex">
                                    <img src={item.img} alt="Testimonial" />
                                    <div className="designation">
                                        <h3 className="name">{item.name}</h3>
                                        <p className="city">{item.city}</p>
                                        <ul className="stars">
                                            <TiStarFullOutline />
                                            <TiStarFullOutline />
                                            <TiStarFullOutline />
                                            <TiStarFullOutline />
                                            <TiStarHalfOutline />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        })}

                    </OwlCarousel>
                </div>
            </>
        )
    }
}
