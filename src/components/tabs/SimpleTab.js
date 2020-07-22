import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SectionsTitle from '../common/SectionsTitle'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import img1 from '../../assets/images/about-img4.jpg'
import img2 from '../../assets/images/about-img4.jpg'
import img3 from '../../assets/images/about-img4.jpg'

export default class SimpleTab extends Component {
    tabstate = {
        tabs: [
            {
                img: img1,
                desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet",
                button: "Get Started"
            },
            {
                img: img2,
                desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet",
                button: "Get Started",
                img_position: "img_right"
            },
            {
                img: img3,
                desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet",
                button: "Get Started"
            }
        ]
    }

    tabsnav = {
        navs: [
            {
                title: "Expert Team"
            },
            {
                title: "Best Finance Brand"
            },
            {
                title: "Best Leadership Ideas"
            }
        ]
    }
    render() {
        return (
            <section className="tabs-wrapper">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <SectionsTitle title="Why Choose Us." subtitle="Our Best Features" />
                        </div>
                    </div>


                    <div className="tabs-content-wrap">
                        <Tabs>
                            <TabList className="tabs-nav">
                                {this.tabsnav.navs.map((item, index) => {
                                    return <Tab key={index}>{item.title}</Tab>
                                })}
                            </TabList>
                            {this.tabstate.tabs.map((tab, index) => {
                                return <TabPanel className="tabs-content" key={index}>
                                    <div className={'tabs-content-flex ' + tab.img_position}>
                                        <div className="tabs-left">
                                            <img src={tab.img} alt="Tabs" />
                                        </div>
                                        <div className="tabs-right">
                                            <p className="tabs-desc">
                                                {tab.desc}
                                            </p>
                                            <Link to="/#" className="theme-button">{tab.button} <FiChevronRight className="icon" /></Link>
                                        </div>
                                    </div>
                                </TabPanel>
                            })}
                        </Tabs>
                    </div>
                </div>
            </section>
        )
    }
}
