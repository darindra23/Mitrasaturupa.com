import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.min.css';
import img1 from '../../assets/images/img3.jpg'
import img2 from '../../assets/images/img4.jpg'
import slider1 from '../../assets/images/img12.jpg'
import { FiCheckCircle } from 'react-icons/fi'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { LineChart } from 'react-chartkick'
import 'chart.js'

export default class ServiceDtlsContent extends Component {
    render() {
        return (
            <div className="service-content-wrap">
                <OwlCarousel className="owl-theme service-content-details-slider" loop={true} autoplay={true} margin={10} dots={true} nav={false} items={1} >
                    <div className="item">
                        <img src={slider1} alt="Service Details Slider" />
                    </div>
                    <div className="item">
                        <img src={slider1} alt="Service Details Slider" />
                    </div>
                    <div className="item">
                        <img src={slider1} alt="Service Details Slider" />
                    </div>
                </OwlCarousel>
                <div className="service-content">
                    <h1>International Business Opportunities.</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera tion in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden.
                    </p>
                    <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                    <div className="service-content-mdl-grid d-grid">
                        <ul>
                            <li><FiCheckCircle className="icon" /> Seed do eiusmod tempor incididunt ut</li>
                            <li><FiCheckCircle className="icon" /> Exercitation ullamco laboris nis.</li>
                            <li><FiCheckCircle className="icon" /> Quis nostrud exerc citation.</li>
                            <li><FiCheckCircle className="icon" /> Andomised words which don't look</li>
                            <li><FiCheckCircle className="icon" /> Commodo consequat duis autex.</li>
                            <li><FiCheckCircle className="icon" /> Andomised words which don't look</li>
                            <li><FiCheckCircle className="icon" /> All the Lorem ipsum generators</li>
                        </ul>
                        <div className="service-content-mdl-img">
                            <img src={img1} alt="Service Details" />
                        </div>
                    </div>
                    <Tabs className="service-details-tab">
                        <TabList className="tabs-nav d-flex">
                            <Tab>Audit</Tab>
                            <Tab>Strategy</Tab>
                            <Tab>Sustainability</Tab>
                        </TabList>
                        <TabPanel className="tabs-content">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet</p>
                        </TabPanel>
                        <TabPanel className="tabs-content">
                            <p>All the Lorem Ipsum generators on the Internet. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </TabPanel>
                        <TabPanel className="tabs-content">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet</p>
                        </TabPanel>
                    </Tabs>
                    <div className="service-content-planning-grid d-grid">
                        <div className="planning-img">
                            <img src={img2} alt="Planning" />
                        </div>
                        <div className="planning-lists">
                            <h3>Planning Strategy</h3>
                            <p>Adipisicing elit, sed do eiusmod tempor incididunt ul labore et dolore magna aliqua</p>
                            <ul>
                                <li><FiCheckCircle className="icon" /> research beyond the business plan</li>
                                <li><FiCheckCircle className="icon" /> marketing options and rates.</li>
                                <li><FiCheckCircle className="icon" /> the ability to turnaround consulting.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='service-content-project-grid d-grid'>
                        <div className="left">
                            <h3>Project Results.</h3>
                            <p>There are many variations of passages of Lorem ipsum available, but the majority have suffered altera tion in some form, by injected,</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. eu fugiat nulla pariatur.</p>
                            <p>Enim minim veniam quis nostrud. exercitation ullamco laboris nisi aliquip</p>
                        </div>
                        <div className="right">
                            <LineChart colors={["#f66b5d", "#ddd"]} data={{ "Jan": 10, "Feb": 25, "Mar": 13, "Apr": 22, "May": 32, "Jun": 25 }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
