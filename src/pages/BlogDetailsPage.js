import React, { Component } from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import BlogDetailsContent from '../components/blog/BlogDetailsContent'
import Footer from '../components/other/Footer'

export default class BlogDetailsPage extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="Blog Details." />
                <BlogDetailsContent />
                <Footer />
            </>
        )
    }
}
