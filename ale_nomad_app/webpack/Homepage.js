
//react imports
import React from 'react'
import { Link } from 'react-router'
// import Filter from './Filter'
import Signup from './Signup'


//alt imports
import alt from './lib/alt'
import BeerStore from './stores/BeerStore'
import BeerActions from './actions/BeerActions'

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

                    </div>
                </main>
            </div>
        )
    }
}

export default Homepage
