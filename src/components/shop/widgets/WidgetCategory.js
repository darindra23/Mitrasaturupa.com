import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronsRight } from 'react-icons/fi'

export default class WidgetCategory extends Component {
    render() {
        return (
            <>
                <div className="shop-widget widget_categories">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link to="/product-details"><FiChevronsRight className="icon" /> Accents</Link> (11)</li>
                        <li><Link to="/product-details"><FiChevronsRight className="icon" /> Accessories</Link> (22)</li>
                        <li><Link to="/product-details"><FiChevronsRight className="icon" /> Bed & Bath</Link> (31)</li>
                        <li><Link to="/product-details"><FiChevronsRight className="icon" /> Chair</Link> (6)</li>
                        <li><Link to="/product-details"><FiChevronsRight className="icon" /> Clocks</Link> (3)</li>
                        <li><Link to="/product-details"><FiChevronsRight className="icon" /> Dining</Link> (10)</li>
                        <li><Link to="/product-details"><FiChevronsRight className="icon" /> Furniture</Link> (5)</li>
                        <li><Link to="/product-details"><FiChevronsRight className="icon" /> Gifts</Link> (31)</li>
                        <li><Link to="/product-details"><FiChevronsRight className="icon" /> Lighting</Link> (33)</li>
                        <li><Link to="/product-details"><FiChevronsRight className="icon" /> Smart TVs</Link> (13)</li>
                        <li><Link to="/product-details"><FiChevronsRight className="icon" /> Table</Link> (3)</li>
                    </ul>
                </div>
            </>
        )
    }
}
