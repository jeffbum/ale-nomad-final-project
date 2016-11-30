import React from 'react'
import { Link } from 'react-router'
import Modal from 'react-modal'
import Header from './Header'
import Carousel from './Carousel'
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
                <Header />
                <main className="mainMargin">
                <Carousel />
                </main>
                <Footer />
            </div>
        )
    }
}

export default Homepage
