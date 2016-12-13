import React, { Component } from 'react'
import { Link } from 'react-router'
import BeerResult from './BeerResult'


// TODO: comment code so others can read it.

class Filter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      beers: [],
      style: '',
      abv: '0,20',
      ibu: '0,2500'
    }
    this.styleHandler = this.styleHandler.bind(this)
    this.abvHandler = this.abvHandler.bind(this)
    this.ibuHandler = this.ibuHandler.bind(this)
    this.getBeer = this.getBeer.bind(this)
    this.searchResult = this.searchResult.bind(this)
  }

  // TODO: explain why I split into three handlers from one.
  styleHandler(e){
    this.setState({
      style: e.target.value
    })
    console.log(this.state.style)
  }
  ibuHandler(e){
    this.setState({
      ibu: e.target.value
    })
  }
  abvHandler(e){
    this.setState({
      abv: e.target.value
    })
  }
// TODO: explain the split Value and splitComma variables and why they were necessary
  getBeer(){
    var splitValue = this.state.abv.split(',')
    var splitComma = this.state.ibu.split(',')

    fetch('/api/filter?filter[beer_name_cont]=' + this.state.style + '&filter[beer_abv_gteq]=' + splitValue[0] + '&filter[beer_abv_lt]=' + splitValue[1] + '&filter[beer_ibu_gteq]=' + splitComma[0] + '&filter[beer_ibu_lt]=' + splitComma[1])

    .then(response => response.json())
    .then(response => this.setState({beers: response.beers}))
    .then(response => {console.log(this.state.beers)})
    .then(response => window.scrollTo(0,600))
  }
  searchResult() {
      fetch('/api/filter?filter[beer_name_cont]=' + this.state.style)
      .then(response => response.json())
      .then(response => this.setState({beers: response.beers}))
  }

render(){
  console.log(this.state.beers)
  var Beers = this.state.beers.map((beer, i) =>{
    return <Link to={'/beer/' + beer.id} data={beer} key={i}>
      <div className="col-sm-4">
        <div className="cardWrapFilter">
            <img src={beer.beer_label=== null? '/img/noImage.jpg' : (beer.beer_label)} alt="Beer Profile Pic" />
            <p>Brew: {beer.beer_name}</p>
            <p>Brewery: {beer.brew.name}</p>
            <p>ABV: {beer.beer_abv}</p>
            <p>IBU: {beer.beer_ibu}</p>
        </div>
      </div>
    </Link>
  })
  return (
    <div>
      <div className="row text-center">
        <p className="filterSearchHeader">Search by Beer Name or Styles</p>
        <div className="col-xs-offset-2 col-xs-8 testMargin">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..."  onChange={this.styleHandler} />
            <div className="input-group-btn filterSearchInput">
              <button className="btn" type="button" onClick={this.searchResult}>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <p className="filterSearchHeader">Filter by Style, ABV, or IBU</p>
        <div className="col-xs-4">
          <h3 className="filterSelectors">Style</h3>
            <select name="style" className="form-control" onChange={this.styleHandler}>
                <option value="">Any Style</option>
                <option value="IPA">IPA</option>
                <option value="Stout">Stout</option>
                <option value="Amber">Amber</option>
                <option value="Lager">Lager</option>
                <option value="Pilsner">Pilsner</option>
                <option value="Sour">Sour</option>
            </select>
        </div>
        <div className="col-xs-4">
          <h3 className="filterSelectors">ABV</h3>
          <select name="abv" className="form-control" onChange={this.abvHandler}>
              <option value="0,20">Any ABV</option>
              <option value="0,4">Less than 4%</option>
              <option value="4,6">4 - 6%</option>
              <option value="6,8">6 - 8%</option>
              <option value="8,10">8 - 10%</option>
              <option value="10,20">Greater than 10%</option>
          </select>
        </div>
        <div className="col-xs-4">
          <h3 className="filterSelectors">IBU</h3>
          <select name="abv" className="form-control" onChange={this.ibuHandler}>
              <option value="0,2500">Any IBU</option>
              <option value="0,40">Less than 40</option>
              <option value="40,60">40 - 60</option>
              <option value="60,80">60 - 80</option>
              <option value="80,100">80 - 100</option>
              <option value="100,2500">Greater than 100</option>
          </select>
        </div>
      </div>
      <div className="row text-center testButton">
        <div className='col-xs-8 col-xs-offset-2'>
          <span className="input-group-btn filterSearchInput">
            <button className="btn filterButton filterButtonSpace" type="button" onClick={this.getBeer}>Filter</button>
          </span>
        </div>
      </div>
      <p className="text-center filterSearchHeader">Matching Beers</p>
      <div className="row">
        <div className="col-sm-offset-1 col-sm-10">
          <div className="row testBorder">
            {Beers}
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Filter
