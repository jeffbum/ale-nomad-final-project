import React from 'react'
import { Link } from 'react-router'
import BrewFilter from './BrewFilter'



class FindBrewery extends React.Component {
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
                    <BrewFilter />
                </div>
            </div>
        )
    }
}

export default FindBrewery
