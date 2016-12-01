import React from 'react'
import { Link } from 'react-router'
import { Carousel } from 'react-bootstrap'
import Modal from 'react-modal'
import Filter from './Filter'

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
