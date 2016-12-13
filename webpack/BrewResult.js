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
        var beerSelections = this.state.beersDetails.map((beerDetail, i) =>{
        return <Link to={'beer/' + beerDetail.id} data={beerDetail} key={i}>
          <div className="col-sm-3">
            <div className="cardWrapFilter">
                <img src={beerDetail.beer_label=== null? '/img/noImage.jpg' : (beerDetail.beer_label)} alt="Beer Profile Pic" />
                <p className="beerName">Brew: <b>{beerDetail.beer_name}</b></p>
                <p className="time">ABV: <b>{beerDetail.beer_abv===null? 'None Listed' : (beerDetail.beer_abv)}</b></p>
                <p className="time">IBU: <b>{beerDetail.beer_ibu===null? 'None Listed' : (beerDetail.beer_ibu)}</b></p>
            </div>
          </div>
        </Link>
      })
        return <div>
            <div className="container">
                <div className="row">
                    <div className="cardWrapBrewFilter">
                        <h1>Brewery Details</h1>
                        <img width="300" src={this.state.breweryDetails.images=== null? '/img/noImage.jpg' : (this.state.breweryDetails.images)} alt="Brewery Profile Pic"/>
                        <div>Brewery: {this.state.breweryDetails.name}</div>
                        <div>Hours:{this.state.breweryDetails.hours_of_operation}</div>
                        <div>Phone: {this.state.breweryDetails.phone}</div>
                        <div>Address: {this.state.breweryDetails.street_address}, {this.state.breweryDetails.postal_code}</div>
                        <div>Website: <a>{this.state.breweryDetails.website}</a></div>
                    </div>
                </div>
                <div className="row">
                    {beerSelections}
                </div>
            </div>
        </div>
    }
}

export default BrewResult
