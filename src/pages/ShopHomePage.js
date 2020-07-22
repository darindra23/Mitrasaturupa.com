import React, { Component } from 'react'
import Navbar from '../components/common/Navbar'
import ShopHeroSlider from '../components/sliders/ShopHeroSlider'
import ShopCategoryCollection from '../components/shop/ShopCategoryCollection'
import SectionsTitle from '../components/common/SectionsTitle'
import BestProducts from '../components/shop/BestProducts'
import BestSeller from '../components/shop/BestSeller'
import Divider from '../components/other/Divider'
import Testimonial from '../components/team/Testimonial'
import Footer from '../components/other/Footer'
import { FiRefreshCcw, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import FeaturedProduct from '../components/shop/FeaturedProduct'
import Clients from '../components/other/Clients'
import SubscribeForm from '../components/other/SubscribeForm'
import Blog from '../components/blog/Blog'


export default class ShopHomePage extends Component {
    render() {
        return (
            <main className="shop-home">
                <header className="header-area">
                    <Navbar />
                </header>
                <ShopHeroSlider />
                <section className="shop-category-collection-wrapper">
                    <div className="text-center">
                        <SectionsTitle title="Check Out Our Newest items." subtitle="Newest Collection For You" />
                    </div>
                    <ShopCategoryCollection />
                </section>
                <section className="shop-best-products-wrapper text-center">
                    <SectionsTitle title="Best Products." subtitle="Great Collection For You" />
                    <BestProducts />
                    <div className="loadmore">
                        <Link className="theme-button" to="/shop">Load More Product <FiRefreshCcw className="icon" /></Link>
                    </div>
                </section>
                <FeaturedProduct />
                <section className="shop-best-products-wrapper best-seller text-center">
                    <SectionsTitle title="Best Selling Products." subtitle="Check Out Our" />
                    <BestSeller />
                    <div className="loadmore">
                        <Link className="theme-button" to="/shop">Load More Product <FiRefreshCcw className="icon" /></Link>
                    </div>
                </section>
                <Divider />
                <section className="testimonial-wrapper ">
                    <div className="text-center">
                        <SectionsTitle title="Say About Us." subtitle="See What Our Customers" />
                    </div>
                    <Testimonial />
                </section>
                <section className="clients-wrapper-bg">
                    <Clients />
                </section>
                <div className="contact-form-subscribe-wrap text-center">
                    <h1>Subscribe Newsletter to <br />Get Latest Discount.</h1>
                    <p>Be the first to hear about our latest products & offers. As a welcome gift, we’ll <br /> email you a 20% OFF discount code.</p>
                    <SubscribeForm />
                </div>
                <Divider />
                <div className="h-blog-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <SectionsTitle title="Our Recent News." subtitle="Latest From The Blog" />
                            </div>
                            <div className="col-4 text-right">
                                <Link to="/blog-grid" className="theme-button">View All Posts <FiChevronRight className="icon" /></Link>
                            </div>
                        </div>
                    </div>
                    <Blog />
                </div>
                <Footer />
            </main>
        )
    }
}
