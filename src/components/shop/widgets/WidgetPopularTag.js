import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WidgetPopularTag extends Component {
    render() {
        return (
            <>
                <div className="shop-widget widget_tags">
                    <h3>Popular Tags</h3>
                    <ul>
                        <li><Link to="/product-details">Armchairs</Link></li>
                        <li><Link to="/product-details">Sofas</Link></li>
                        <li><Link to="/product-details">Wood</Link></li>
                        <li><Link to="/product-details">Office</Link></li>
                        <li><Link to="/product-details">Desks</Link></li>
                        <li><Link to="/product-details">Stools</Link></li>
                        <li><Link to="/product-details">Footstools</Link></li>
                        <li><Link to="/product-details">Outdoor</Link></li>
                        <li><Link to="/product-details">Bedroom</Link></li>
                    </ul>
                </div>
            </>
        )
    }
}
