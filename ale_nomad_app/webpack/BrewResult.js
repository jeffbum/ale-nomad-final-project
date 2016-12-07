import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

class BrewResult extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            breweryDetails: [],
            beersDetails: []
        }
    }
    componentDidMount(){
        // console.log(this.props.routeParams)
        fetch('/api/show/brew?id=' + this.props.routeParams.brew_id {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(response =>
                this.setState({
                    breweryDetails: response.brew,
                    beersDetails: response.brew.beers
                })
            )
    }
    render() {
        console.log(this.state.breweryDetails)
        console.log(this.state.beersDetails)
        return <div>
            <div className="container">
                <div className="row">
                    <div>{this.state.breweryDetails.name}</div>
                </div>
            </div>
        </div>
    }
}

export default BrewResult
