import React from 'react'
import { Link } from 'react-router'
import alt from './lib/alt'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // return <div>Hi!</div>
        return <div>{this.props.children}</div>
    }
}

export default App
