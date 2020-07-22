import React, { Component } from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import BlogFullWidth from '../components/blog/BlogFullWidth'

export default class BlogFullPage extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="Blog Full Width." />
                <div className="blog-full-width-wrap">
                    <BlogFullWidth />
                </div>
            </>
        )
    }
}
