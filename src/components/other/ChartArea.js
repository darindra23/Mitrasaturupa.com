import React, { Component } from 'react'
import SectionsTitle from '../common/SectionsTitle'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import { LineChart } from 'react-chartkick'
import 'chart.js'


export default class ChartArea extends Component {
    render() {
        return (
            <section className="chart-wrapper">
                <div className="container">
                    <div className="chart-grid">
                        <div className="chart-left">
                            <SectionsTitle title="Better Results." subtitle="Our Growth" />
                            <h2 className="content-title">Increase Sales</h2>
                            <p className="content-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore sit amet, consectetur adipisicing elit. Sit, vitae.</p>
                            <h2 className="content-title">Real-Time Analytics</h2>
                            <p className="content-desc">Nullam sollicitudin nisl at nunc tempor pulvindolor sit amet, adipiscinar. Quisque gravida, tellus egett vehicula fel.</p>
                            <Link to="/#" className="theme-button">Learn More <FiChevronRight className="icon" /></Link>
                        </div>
                        <div className="chart-right">
                            <LineChart colors={["#f66b5d", "#ddd"]} data={{ "Jan": 10, "Feb": 25, "Mar": 13, "Apr": 22, "May": 32, "Jun": 25 }} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
