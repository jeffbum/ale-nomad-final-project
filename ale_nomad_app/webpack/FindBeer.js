import React from 'react'
import { Link } from 'react-router'
import Filter from './Filter'
import alt from './lib/alt'

// TODO: comment code so others can read it.


class FindBeer extends React.Component {
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
                <div className="container">
                    <Filter />
                </div>
            </div>

        )
    }
}

export default FindBeer
