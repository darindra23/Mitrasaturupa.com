import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WidgetProductColor extends Component {
    render() {
        return (
            <>
                <div className="shop-widget widget_product_color">
                    <h3>Product Color.</h3>
                    <ul className="d-flex">
                        <li className="black"><Link to="#"></Link></li>
                        <li className="orange"><Link to="#"></Link></li>
                        <li className="blue"><Link to="#"></Link></li>
                        <li className="darkgray"><Link to="#"></Link></li>
                    </ul>
                </div>
            </>
        )
    }
}
