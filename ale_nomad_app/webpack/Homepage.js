import React from 'react'
import { Link } from 'react-router'
import { Carousel } from 'react-bootstrap'
import Modal from 'react-modal'
import Header from './Header'
import Filter from './Filter'
import carouselInstance from './carouselInstance'
import Footer from './Footer'

// TODO: add alt.js functionality
// TODO: layout page
// TODO: api call

class Homepage extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render(){
        return (
            <div>
                <header>
                    <Header />
                </header>
                <main className="mainMargin">
                    <div className="container">
                        <Filter />
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Homepage
