import React, { Component } from 'react'
import TeamDetailsContent from '../components/team/TeamDetailsContent'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import Footer from '../components/other/Footer'


export default class TeamDetails extends Component {
    render() {
        return (
            < >
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="Team Details." />
                <TeamDetailsContent />
                <Footer />

            </>
        )
    }
}
