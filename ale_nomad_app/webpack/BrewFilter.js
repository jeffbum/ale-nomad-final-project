import React, { Component } from 'react'
import { Link } from 'react-router'
// import BeerResult from './BeerResult'
import BrewResult from './BrewResult'
// import alt from './lib/alt'
// import BeerStore from './stores/BeerStore'
// import BeerActions from './actions/BeerActions'


class BrewFilter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      brews: [],
      searchInput: '46204',
      location: '100',
      style: '',
    }
    this.searchHandler = this.searchHandler.bind(this)
    this.locationHandler = this.locationHandler.bind(this)
    this.styleHandler = this.styleHandler.bind(this)
    this.getBrew = this.getBrew.bind(this)
  }

  searchHandler(e){
    this.setState({
      searchInput: e.target.value,
    })
  }
  locationHandler(e){
    this.setState({
      location: e.target.value,
    })
  }
  styleHandler(e){
    this.setState({
      style: e.target.value,
    })
  }

  getBrew(){
    fetch('/api/show/location?address=' + this.state.searchInput + '&range=' + this.state.location)
    .then(response => response.json())
    .then(response => this.setState({brews: response.brews}))
    // .then(whatever => console.log(this.state))
    //  console.log(response.brews)
  }

render(){
  console.log(this.state.brews)
  var Brews = this.state.brews.map((brew, i) => {
    return <Link to={'brew/' + brew.id} data={brew} key={i}>
        <div className="col-sm-3 cardWrap">
          <div className="col-xs-12">
            <img height="200" width="250" className="cardImage" src={brew.images=== null? '/img/beer.jpg' : (brew.images)} alt="Beer Profile Pic" />
            <p className="beerName">Brewery: {brew.name}</p>
            <p className="time">Phone: {brew.phone===null? 'No # listed' : (brew.phone)}</p>
            <p className="time">Address: {brew.street_address}, {brew.postal_code}</p>
          </div>
        </div>
     </Link>
  })
  return (
    <div>
      <div className="row text-center">
        <p className="searchHeaders">Step 1: Enter Zip Code</p>
        <div className="col-xs-offset-5 col-xs-7 text-center">
          <div className="input-group">
            <input name="searchInput" type="text" className="form-control" placeholder="Enter zip code..." onChange={this.searchHandler}/>
          </div>
        </div>
      </div>
      <div className="row text-center testMargin">
        <p className="searchHeaders">Step 2: Select Distance</p>
        <div className="col-xs-12">
          <h3>Location</h3>
          <label className="radio-inline">
            <input type="radio" name="location"  value="" onClick={this.locationHandler} defaultChecked/>
            Any Location
          </label>
          <label className="radio-inline">
            <input type="radio" name="location"  value="1" onClick={this.locationHandler}/>
            1 Mile
          </label>
          <label className="radio-inline">
            <input type="radio" name="location"  value="5" onClick={this.locationHandler} />
            5 Miles
          </label>
          <label className="radio-inline">
            <input type="radio" name="location"  value="10" onClick={this.locationHandler}/>
            10 Miles
          </label>
          <label className="radio-inline">
            <input type="radio" name="location"  value="15" onClick={this.locationHandler}/>
            15 Miles
          </label>
          <label className="radio-inline">
            <input type="radio" name="location"  value="20" onClick={this.locationHandler}/>
            20 Miles
          </label>
        </div>
        <div className="col-sm-12 testMargin">
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button" onClick={this.getBrew}>Search</button>
          </span>
        </div>
      </div>
      <p className="text-center testMargin searchHeaders">Matches</p>
      <div className="row">
        {Brews}
      </div>
    </div>
    )
  }
}
export default BrewFilter
