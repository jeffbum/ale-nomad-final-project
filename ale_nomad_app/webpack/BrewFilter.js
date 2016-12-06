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
        <div className="row">
          <div className="col-xs-12">
            {/* <img className="userPic" src={brew.name=== null? 'http://unsplash.it/200/200?random' : (beer.beer_label)} alt="Beer Profile Pic" /> */}
            <span className="beerName">{brew.name}</span>
            <span className="time">{brew.hours_of_operation}</span>
          </div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <p className="post-body">
              {brew.website}
            </p>
          </div>
        </div>
        <hr />
      </div>
     </Link>
  })
  return(
    <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="input-group">
              <input name="searchInput" type="text" className="form-control" placeholder="Enter zip code..." onChange={this.searchHandler}/>
              {/* <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.getBeer}>Search</button>
              </span> */}
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-xs-3">
              <h3>Location</h3>
              <div className="radio">
                <label>
                  <input type="radio" name="location"  value="" onClick={this.locationHandler} defaultChecked/>
                  Any Location
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="location"  value="1" onClick={this.locationHandler}/>
                  1 Mile
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="location"  value="5" onClick={this.locationHandler} />
                  5 Miles
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="location"  value="10" onClick={this.locationHandler}/>
                  10 Miles
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="location"  value="15" onClick={this.locationHandler}/>
                  15 Miles
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="location"  value="20" onClick={this.locationHandler}/>
                  20 Miles
                </label>
              </div>
            </div>
            <div className="col-sm-12">
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.getBrew}>Search</button>
              </span>
            </div>
          </div>
        <div>
          {Brews}
        </div>
    </div>
    )
  }
}
export default BrewFilter
