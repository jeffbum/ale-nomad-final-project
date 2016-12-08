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
        console.log(this.state.beerDetails)
        return <div>
            <div className="container">
                <div className="row cardWrap">
                    <div className="col-sm-12">
                        <h1>Beer Details</h1>
                        <img height="200" width="200" className="cardImage" src={this.state.beerDetails.beer_label=== null? '/img/beer.jpg' : (this.state.beerDetails.beer_label)} alt="Beer Profile Pic" />
                        <div>Brew: {this.state.beerDetails.beer_name}</div>
                        <div>Description: {this.state.beerDetails.beer_description}</div>
                        <div>ABV: {this.state.beerDetails.beer_abv}</div>
                        <div>IBU: {this.state.beerDetails.beer_ibu}</div>
                        </div>
                </div>
                <div className="row cardWrap">
                    <div className="col-sm-12">
                        <h1>Brewery Details</h1>
                        <img height="200" width="300" className="cardImage" src={this.state.brewDetails.images=== null? '/img/beer.jpg' : (this.state.brewDetails.images)} alt="Brewery Profile Pic" />
                        <div>Brewery: {this.state.brewDetails.name}</div>
                        <div>Hours: {this.state.brewDetails.hours_of_operation}</div>
                        <div>Phone: {this.state.brewDetails.phone}</div>
                        <div>Address: {this.state.brewDetails.street_address}, {this.state.brewDetails.postal_code}</div>
                        <div>Website: <a>{this.state.brewDetails.website}</a></div>
                    </div>
                </div>
            </div>
        </div>
        }
}

export default BeerResult
