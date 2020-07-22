import React, { Component } from 'react'
import { ProductConsumer } from '../../productcontext'
import WidgetSearch from './widgets/WidgetSearch'
import WidgetCategory from './widgets/WidgetCategory'
import WidgetProductColor from './widgets/WidgetProductColor'
import WidgetFeaturedProduct from './widgets/WidgetFeaturedProduct'
import WidgetPopularTag from './widgets/WidgetPopularTag'
import WidgetFollower from './widgets/WidgetFollower'


export default class ShopSidebar extends Component {
    render() {
        return (
            <aside className="shop-sidebar text-left">
                <WidgetSearch />
                <WidgetCategory />
                <WidgetProductColor />
                <div className="shop-widget widget_feature_products">
                    <h3>Featured Products.</h3>
                    <ul>
                        <ProductConsumer>
                            {value => {
                                return value.relatedpdsShops.map(product => {
                                    return <WidgetFeaturedProduct key={product.id} product={product} />
                                })
                            }}
                        </ProductConsumer>
                    </ul>
                </div>
                <WidgetPopularTag />
                <WidgetFollower />

            </aside>
        )
    }
}
