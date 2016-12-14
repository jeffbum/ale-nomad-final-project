import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import StarRatingComponent from 'react-star-rating-component'


// TODO: comment code so others can read it.
class BeerResult extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            beerDetails: [],
            brewDetails: [],
            addToFavoritesBtn: 'Add To Favorites',
            rating: 1,
            loggedIn: sessionStorage.getItem('api_token'),
            showStars: false

        }
        this.addToFavorites = this.addToFavorites.bind(this)
        this.postBeer = this.postBeer.bind(this)
        this.postReview = this.postReview.bind(this)
        this.onStarClick = this.onStarClick.bind(this)
        this.loggedInHandler = this.loggedInHandler.bind(this)
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
                    brewDetails: response.beer.brew,
                }))
            .then(this.loggedInHandler)
    }

    loggedInHandler(){
        if (this.state.loggedIn != undefined){
            this.setState({ showStars: true})
        } else {
            this.setState({ showStars: false})
        }
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    postBeer(){
        fetch('/api/drinks?api_token=' + sessionStorage.getItem('api_token') + '&beer_id=' + this.state.beerDetails.id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        this.addToFavorites()
        this.postReview()
    }

    addToFavorites() {
        this.setState({
            addToFavoritesBtn: 'Favorited'
        })
    }

    postReview(){
        fetch('/api/rate?rating=' + this.state.rating + '&beer_id=' + this.state.beerDetails.id + '&api_token=' + sessionStorage.getItem('api_token'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
        })
    }

    render(){
        console.log(this.state.brewDetails)
        console.log(this.state.beerDetails)
        console.log(this.state.rating)
        const { rating } = this.state.rating
        return <div>
            <div className="container">
                <div className="row">
                    <div className="cardWrapFilterLg text-center">
                        <h1>Beer Details</h1>
                        <img width="400" src={this.state.beerDetails.beer_label=== null? '/img/noImage.jpg' : (this.state.beerDetails.beer_label)} alt="Beer Label Picture" />
                        <p>Brew: {this.state.beerDetails.beer_name}</p>
                        <p>Description: {this.state.beerDetails.beer_description=== null? 'This Brewery still needs to come up with a catchy description.' : (this.state.beerDetails.beer_description)}</p>
                        <p>ABV: {this.state.beerDetails.beer_abv}</p>
                        <p>IBU: {this.state.beerDetails.beer_ibu}</p><br />
                        {this.state.loggedIn ? <div>
                            <h2>Rate this Beer: <StarRatingComponent name="rate1" starCount={5} value={rating} onStarClick={this.onStarClick} /></h2>
                             <div className="col-xs-4 col-xs-offset-4 favBeer">
                                 <button onClick={this.postBeer}>{this.state.addToFavoritesBtn}</button>
                             </div></div> : <div><Link to='/login'>Login to rate this beer!</Link></div>}

                    </div>
                </div>
                <div className="row">
                    <div className="cardWrapBrewFilter text-center">
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
