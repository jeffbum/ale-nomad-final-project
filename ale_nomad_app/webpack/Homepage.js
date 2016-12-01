
//react imports
import React from 'react'
import { Link } from 'react-router'
import Modal from 'react-modal'
import Filter from './Filter'
<<<<<<< HEAD
import Footer from './Footer'
=======
>>>>>>> 8c80dc2d7056d2fbe32e534ad1432ded31d89341

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
                <main className="mainMargin">
                    <div className="container">
                        <Filter />
                    </div>
                </main>
            </div>
        )
    }
}

export default Homepage
