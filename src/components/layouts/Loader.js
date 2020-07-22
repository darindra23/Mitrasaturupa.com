import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div className="loader-wrapper">
                <div className="loader-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}
