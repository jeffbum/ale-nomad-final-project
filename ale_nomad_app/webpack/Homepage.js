
//react imports
import React from 'react'
import { Link } from 'react-router'
import Modal from 'react-modal'
import Header from './Header'
import Filter from './Filter'
import Footer from './Footer'

//alt imports 

import MyStore from './stores/BeerStore'
import MyActions from './actions/BeerActions'

// TODO: add alt.js functionality
// TODO: layout page
// TODO: api call

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
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
