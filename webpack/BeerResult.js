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
        this.postBeer = this.postBeer.bind(this)
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

    postBeer(){
        fetch('/api/drinks?api_token=' + sessionStorage.getItem('api_token') + '&beer_id=' + this.state.beerDetails.id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
        })
    }

    render(){
        console.log(this.state.brewDetails)
        console.log(this.state.beerDetails)
        return <div>
            <div className="container testBorder">
                <div className="row testBorder">
                    <div className="col-xs-10 cardWrap text-center">
                        <h1>Beer Details</h1>
                        <img src={this.state.beerDetails.beer_label=== null? '/img/noImage.jpg' : (this.state.beerDetails.beer_label)} alt="Beer Label Picture" />
                        <p>Brew: {this.state.beerDetails.beer_name}</p>
                        <p>Description: {this.state.beerDetails.beer_description}</p>
                        <p>ABV: {this.state.beerDetails.beer_abv}</p>
                        <p>IBU: {this.state.beerDetails.beer_ibu}</p>
                        <div className="col-xs-4 col-xs-offset-4">
                            <button className='' onClick={this.postBeer}>Add to Favorites</button>
                        </div>
                    </div>
                </div>
                <div className="row testBorder">
                    <div className="col-xs-9 cardWrap text-center">
                    <h1>Brewery Details</h1>
                        <img src={this.state.brewDetails.images=== null? '/img/noImage.jpg' : (this.state.brewDetails.images)} alt="Brewery Logo" />
                        <p>Brewery: {this.state.brewDetails.name}</p>
                        <p>Hours: {this.state.brewDetails.hours_of_operation}</p>
                        <p>Phone: {this.state.brewDetails.phone}</p>
                        <p>Address: {this.state.brewDetails.street_address}, {this.state.brewDetails.postal_code}</p>
                        <p>Website: <a>{this.state.brewDetails.website}</a></p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default BeerResult
