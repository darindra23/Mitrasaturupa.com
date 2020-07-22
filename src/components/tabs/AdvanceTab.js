import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SectionsTitle from '../common/SectionsTitle';
import { FiLock, FiBarChart, FiUserCheck } from 'react-icons/fi'
import { GiCutDiamond } from 'react-icons/gi'
import { IoIosHammer } from 'react-icons/io'
import { AiOutlineRocket } from 'react-icons/ai'

export default class AdvanceTab extends Component {
    render() {
        return (
            <section className="advancetab-wrapper">
                <div className="container">
                    <div className="text-center">
                        <SectionsTitle title="Why People Choose Us." subtitle="Our Best Features." />
                    </div>
                    <Tabs className="advancetab-grid d-grid">
                        <TabList className="advancetab-nav">
                            <div>
                                <Tab>
                                    <h3>Wide Range Of Business Services</h3>
                                    <p>The Argument In Favorite Of Using Filter To Text Goes Some Thing Like This Top</p>
                                </Tab>
                                <Tab>
                                    <h3>Our Best Features For You</h3>
                                    <p>The Argument In Favorite Of Using Filter To Text Goes Some Thing Like This Top</p>
                                </Tab>
                                <Tab>
                                    <h3>Skills To Fulfill Your Jobs</h3>
                                    <p>The Argument In Favorite Of Using Filter To Text Goes Some Thing Like This Top</p>
                                </Tab>
                                <Tab>
                                    <h3>Our Expert Team</h3>
                                    <p>The Argument In Favorite Of Using Filter To Text Goes Some Thing Like This Top</p>
                                </Tab>
                            </div>
                        </TabList>
                        <div className="advancetab-content">
                            <TabPanel>
                                <div className="content-top-box">
                                    <h2>We Can Give the Best Facilities <br />for Business</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore eius harum incidunt iste iusto odit quibusdam quis reiciendis vero.</p>
                                </div>
                                <div className="content-box-grid d-grid">
                                    <div className="item">
                                        <span className="icon">
                                            <FiLock />
                                        </span>
                                        <h2>Top Security</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                    <div className="item">
                                        <span className="icon">
                                            <FiBarChart />
                                        </span>
                                        <h2>Revenue Growth</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                    <div className="item">
                                        <span className="icon">
                                            <FiUserCheck />
                                        </span>
                                        <h2>Risk Manage</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                    <div className="item">
                                        <span className="icon">
                                            <GiCutDiamond />
                                        </span>
                                        <h2>Fast Support</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="content-top-box">
                                    <h2>We Can Give the Best Facilities <br />for Business</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore eius harum incidunt iste iusto odit quibusdam quis reiciendis vero.</p>
                                </div>
                                <div className="content-box-grid d-grid">
                                    <div className="item">
                                        <span className="icon">
                                            <FiBarChart />
                                        </span>
                                        <h2>Marketing Strategy</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                    <div className="item">
                                        <span className="icon">
                                            <IoIosHammer />
                                        </span>
                                        <h2>Best Solutions</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                    <div className="item">
                                        <span className="icon">
                                            <AiOutlineRocket />
                                        </span>
                                        <h2>Speed Optimization</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                    <div className="item">
                                        <span className="icon">
                                            <GiCutDiamond />
                                        </span>
                                        <h2>Quick Support</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="content-top-box">
                                    <h2>We Can Give the Best Facilities <br />for Business</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore eius harum incidunt iste iusto odit quibusdam quis reiciendis vero.</p>
                                </div>
                                <div className="content-box-grid d-grid">
                                    <div className="item">
                                        <span className="icon">
                                            <FiLock />
                                        </span>
                                        <h2>Top Security</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                    <div className="item">
                                        <span className="icon">
                                            <FiBarChart />
                                        </span>
                                        <h2>Revenue Growth</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                    <div className="item">
                                        <span className="icon">
                                            <FiUserCheck />
                                        </span>
                                        <h2>Risk Manage</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                    <div className="item">
                                        <span className="icon">
                                            <GiCutDiamond />
                                        </span>
                                        <h2>Fast Support</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="content-top-box">
                                    <h2>We Can Give the Best Facilities <br />for Business</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore eius harum incidunt iste iusto odit quibusdam quis reiciendis vero.</p>
                                </div>
                                <div className="content-box-grid d-grid">
                                    <div className="item">
                                        <span className="icon">
                                            <FiBarChart />
                                        </span>
                                        <h2>Marketing Strategy</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                    <div className="item">
                                        <span className="icon">
                                            <IoIosHammer />
                                        </span>
                                        <h2>Best Solutions</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                    <div className="item">
                                        <span className="icon">
                                            <AiOutlineRocket />
                                        </span>
                                        <h2>Speed Optimization</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                    <div className="item">
                                        <span className="icon">
                                            <GiCutDiamond />
                                        </span>
                                        <h2>Quick Support</h2>
                                        <p>The argument in favor of using filler text goes some thing like this</p>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </section>
        )
    }
}
