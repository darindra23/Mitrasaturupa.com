import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SectionsTitle from '../common/SectionsTitle'
import { FiChevronRight, FiUserCheck, FiTarget } from 'react-icons/fi'
import { TiLightbulb } from 'react-icons/ti'
import img1 from '../../assets/images/about-img.jpg'
import img2 from '../../assets/images/about-img.jpg'
import img3 from '../../assets/images/about-img.jpg'
import ModalVideo from 'react-modal-video'
import Progressbar from '../other/Progressbar'

export default class About extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    aboutstate = {
        supports: [
            {
                icon: <FiUserCheck />,
                title: '24/7 full Online Support'
            },
            {
                icon: <FiTarget />,
                title: '10 Years of Experience'
            },
            {
                icon: <TiLightbulb />,
                title: 'Creative Finance Idea'
            }
        ]
    }
    aboutrightimg = {
        images: [
            {
                img: img1
            },
            {
                img: img2
            },
            {
                img: img3
            }
        ]
    }
    render() {
        return (
            <section className="about-wrapper">
                <div className="container">
                    <div className="about-grid-wrap">
                        <div className="about-left">
                            <SectionsTitle title="Welcome to Awards Winning Digital Marketing Agency." subtitle="Learn About Us" />
                            <p className="about-left-desc">
                                Investiga tiones demonstr averunt lectores legere me lius quod ii qua legunt saepius. Claritas est etiam pro cessus dynamicus, qui sequitur mutaety tion em consu etudium awquod he legunt saepius clary tyitas Investig atifonesw. tionem consu etudium.
                            </p>
                            <Link to="/about">Read More <FiChevronRight className="icon" /></Link>
                            <div className="about-iconbox-grid">
                                {this.aboutstate.supports.map((item, index) => {
                                    return <div className="about-iconbox" key={index}>
                                        <span className="about-iconbox-icon">
                                            {item.icon}
                                        </span>
                                        <h3 className="about-iconbox-title">
                                            {item.title}
                                        </h3>
                                    </div>
                                })}
                            </div>
                            <Progressbar />
                        </div>
                        <div className="about-right">
                            {this.aboutrightimg.images.map((img, index) => {
                                return <img key={index} className={'about_img_' + index} src={img.img} alt={'About Image ' + index} />
                            })}
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='t3tsMEhlvwM' onClose={() => this.setState({ isOpen: false })} />
                            <Link to="#" className="video-btn" onClick={this.openModal}>Play</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


