import React, { Component } from 'react'
import category1 from '../../assets/images/shopimg.jpg'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default class ShopCategoryCollection extends Component {
    render() {
        return (
            <div className="container shop-categories-collection-wrapper">
                <div className="shop-category-collection-grid d-grid">
                    <div className="shop-category-collection-item left">
                        <Link to="/shop">
                            <img src={category1} alt="Shop Categories Collection" />
                        </Link>
                        <div className="details">
                            <h2><Link to="/shop">Product Collection</Link></h2>
                            <Link to="/shop" className="simple-button">Shop Now <FiChevronRight className="icon" /></Link>
                        </div>
                    </div>
                    <div className="shop-category-collection-item right">
                        <Link to="/shop">
                            <img src={category1} alt="Shop Categories Collection" />
                        </Link>
                        <div className="details">
                            <h2><Link to="/shop">Basket Collection</Link></h2>
                            <Link to="/shop" className="simple-button">Shop Now <FiChevronRight className="icon" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
