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
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3 cardWrap">
                        <h1>Beer Details</h1>
                        <img src={this.state.beerDetails.beer_label=== null? '/img/noImage.jpg' : (this.state.beerDetails.beer_label)} alt="Beer Label Picture" />
                        <div>Brew: {this.state.beerDetails.beer_name}</div>
                        <div>Description: {this.state.beerDetails.beer_description}</div>
                        <div>ABV: {this.state.beerDetails.beer_abv}</div>
                        <div>IBU: {this.state.beerDetails.beer_ibu}</div>
                        <div className="col-xs-4 col-xs-offset-4">
                            <Link to='/userprofile'><button className=''>Add to Favorites</button></Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 cardWrap">
                    <h1>Brewery Details</h1>
                        <img src={this.state.brewDetails.images=== null? '/img/noImage.jpg' : (this.state.brewDetails.images)} alt="Brewery Logo" />
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
