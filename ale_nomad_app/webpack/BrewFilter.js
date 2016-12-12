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
    .then(response => window.scrollTo(0,300))

  }

render(){
  console.log(this.state.brews)
  var Brews = this.state.brews.map((brew, i) => {
    return <Link to={'/brew/' + brew.id} data={brew} key={i}>
        <div className="col-xs-3 cardWrap">
          <div className="col-xs-12">
            <img src={brew.images=== null? '/img/noImage.jpg' : (brew.images)} alt="Beer Profile Pic" />
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
        <p className="filterSearchHeader">Step 1: Enter Zip Code</p>
        <div className="col-xs-offset-5 col-xs-7 text-center">
          <div className="input-group">
            <input name="searchInput" type="text" className="form-control" placeholder="Enter zip code..." onChange={this.searchHandler}/>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <p className="filterSearchHeader">Step 2: Select Distance</p>
        <div className="col-xs-6 col-xs-offset-3">
          <h3 className="filterSelectors">Location</h3>
            <select name="style" className="form-control" onChange={this.locationHandler}>
              <option value="">Any Location</option>
              <option value="1">1 Mile</option>
              <option value="5">5 Miles</option>
              <option value="10">10 Miles</option>
              <option value="15">15 Miles</option>
              <option value="20">20 Miles</option>
            </select>
        </div>
        <div className="col-xs-10 col-xs-offset-1 testMargin">
          <span className="input-group-btn filterSearchInput">
            <button className="btn filterButton filterButtonSpace" type="button" onClick={this.getBrew}>Search</button>
          </span>
        </div>
      </div>
      <p className="text-center filterSearchHeader">Matching Breweries</p>
      <div className="row">
        {Brews}
      </div>
    </div>
    )
  }
}
export default BrewFilter
