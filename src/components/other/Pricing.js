import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SectionsTitle from '../common/SectionsTitle'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

export default class Pricing extends Component {
    render() {
        return (
            <section className="pricing-wrapper">
                <div className="container">
                    <div className="text-center">
                        <SectionsTitle title="Choose Your Plan." subtitle="Affordable Packages" />
                    </div>
                    <Tabs>
                        <TabList className="tabs-nav">
                            <Tab>Monthly</Tab>
                            <Tab>Yearly</Tab>
                        </TabList>
                        <TabPanel className="tabs-content text-center">
                            <div className="pricing-plan-grid">
                                <div className="pricing-plan-box">
                                    <h2 className="title">Basic</h2>
                                    <h1 className="price"> <sup>$</sup>19</h1>
                                    <h3 className="mo">/Month</h3>
                                    <ul className="feature-lists">
                                        <li>Limitless concepts</li>
                                        <li>Community access</li>
                                        <li>Expert Reviews</li>
                                        <li>Creative Layouts</li>
                                        <li>Free Support</li>
                                        <li>Free Fonts</li>
                                    </ul>
                                    <Link to="/#" className="theme-button"><FiShoppingCart className="icon" /> Get Started</Link>
                                </div>
                                <div className="pricing-plan-box active">
                                    <h2 className="title">Popular</h2>
                                    <h1 className="price"> <sup>$</sup>39</h1>
                                    <h3 className="mo">/Month</h3>
                                    <ul className="feature-lists">
                                        <li>Limitless concepts</li>
                                        <li>Community access</li>
                                        <li>Expert Reviews</li>
                                        <li>Creative Layouts</li>
                                        <li>Free Support</li>
                                        <li>Free Fonts</li>
                                    </ul>
                                    <Link to="/#" className="theme-button"><FiShoppingCart className="icon" /> Get Started</Link>
                                </div>
                                <div className="pricing-plan-box">
                                    <h2 className="title">Premium</h2>
                                    <h1 className="price"> <sup>$</sup>78</h1>
                                    <h3 className="mo">/Month</h3>
                                    <ul className="feature-lists">
                                        <li>Limitless concepts</li>
                                        <li>Community access</li>
                                        <li>Expert Reviews</li>
                                        <li>Creative Layouts</li>
                                        <li>Free Support</li>
                                        <li>Free Fonts</li>
                                    </ul>
                                    <Link to="/#" className="theme-button"><FiShoppingCart className="icon" /> Get Started</Link>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="tabs-content text-center">
                            <div className="pricing-plan-grid">
                                <div className="pricing-plan-box">
                                    <h2 className="title">Basic</h2>
                                    <h1 className="price"> <sup>$</sup>200</h1>
                                    <h3 className="mo">/Year(save 20%)</h3>
                                    <ul className="feature-lists">
                                        <li>Limitless concepts</li>
                                        <li>Community access</li>
                                        <li>Expert Reviews</li>
                                        <li>Creative Layouts</li>
                                        <li>Free Support</li>
                                        <li>Free Fonts</li>
                                    </ul>
                                    <Link to="/#" className="theme-button"><FiShoppingCart className="icon" /> Get Started</Link>
                                </div>
                                <div className="pricing-plan-box active">
                                    <h2 className="title">Popular</h2>
                                    <h1 className="price"> <sup>$</sup>460</h1>
                                    <h3 className="mo">/Year(save 20%)</h3>
                                    <ul className="feature-lists">
                                        <li>Limitless concepts</li>
                                        <li>Community access</li>
                                        <li>Expert Reviews</li>
                                        <li>Creative Layouts</li>
                                        <li>Free Support</li>
                                        <li>Free Fonts</li>
                                    </ul>
                                    <Link to="/#" className="theme-button"><FiShoppingCart className="icon" /> Get Started</Link>
                                </div>
                                <div className="pricing-plan-box">
                                    <h2 className="title">Premium</h2>
                                    <h1 className="price"> <sup>$</sup>30</h1>
                                    <h3 className="mo">/Year(save 20%)</h3>
                                    <ul className="feature-lists">
                                        <li>Limitless concepts</li>
                                        <li>Community access</li>
                                        <li>Expert Reviews</li>
                                        <li>Creative Layouts</li>
                                        <li>Free Support</li>
                                        <li>Free Fonts</li>
                                    </ul>
                                    <Link to="/#" className="theme-button"><FiShoppingCart className="icon" /> Get Started</Link>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>

            </section>
        )
    }
}
