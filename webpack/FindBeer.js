import React from 'react'
import { Link } from 'react-router'
import Filter from './Filter'



class FindBeer extends React.Component {
    constructor(props) {
        super(props)
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
