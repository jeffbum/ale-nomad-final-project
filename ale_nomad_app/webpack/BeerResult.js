import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

// TODO: comment code so others can read it.
class BeerResult extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            beerDetails: [],
            brewDetails: [],

        }
    }

    componentDidMount(){
        fetch('/api/show/beer?id=' + this.props.routeParams.beer_id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(response =>
                this.setState({
                    beerDetails: response.beer,
                    brewDetails: response.beer.brew
                })
            )
    }


    render(){
        console.log(this.state.brewDetails)
        return <div className="container">
            <div className="row">
                <div>{this.state.beerDetails.beer_name}</div>
                <div>{this.state.brewDetails.hours_of_operation}</div>
            </div>
        </div>
        }
}


export default BeerResult
