import React from 'react'
import { Link } from 'react-router'
import Modal from 'react-modal'
import Filter from './Filter'


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
                <Filter />
            </div>
        )
    }
}

export default FindBeer
