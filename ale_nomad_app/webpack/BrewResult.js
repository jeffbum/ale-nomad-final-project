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
        fetch('/api/show/brew?id=' + this.props.routeParams.brew_id, {
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
                <div className="row cardWrap">
                    <div className="col-sm-12">
                        <h1>Brewery Details</h1>
                        <img height="200" width="300" className="cardImage" src={this.state.breweryDetails.images=== null? '/img/beer.jpg' : (this.state.breweryDetails.images)} alt="Brewery Profile Pic"/>
                        <div>Brewery: {this.state.breweryDetails.name}</div>
                        <div>Hours:{this.state.breweryDetails.hours_of_operation}</div>
                        <div>Phone: {this.state.breweryDetails.phone}</div>
                        <div>Address: {this.state.breweryDetails.street_address}, {this.state.breweryDetails.postal_code}</div>
                        <div>Website: <a>{this.state.breweryDetails.website}</a></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                    <h1>Brewery Beer Selection</h1>
                        <div className="col-sm-3 cardWrap">
                            <div className="col-sm-12">
                            <img height="200" width="200" className="cardImage" src={this.state.beersDetails.beer_label=== null? '/img/beer.jpg' : (this.state.beersDetails.beer_label)} alt="Beer Profile Pic" />
                            <p>Brew: <b>{this.state.beersDetails.beer_name}</b></p>
                            <p>ABV: <b>{this.state.beersDetails.beer_abv}</b></p>
                            <p>IBU: <b>{this.state.beersDetails.beer_ibu}</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default BrewResult
