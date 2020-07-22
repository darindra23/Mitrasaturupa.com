import React, { Component } from 'react'
import { ProductConsumer } from '../../productcontext'
import BestSellerContent from './BestSellerContent';

export default class BestSeller extends Component {
    render() {
        return (
            <section className="best-seller-wrapper">
                <div className="container">
                    <div className="products best-products-grid d-grid">
                        <ProductConsumer>
                            {value => {
                                return value.bestsellerShops.map(product => {
                                    return <BestSellerContent key={product.id} product={product} />
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </section>
        )
    }
}
