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
    // this.getAbv = this.getAbv.bind(this)
    // this.getIbu = this.getIbu.bind(this)

  }

  // TODO: explain why I split into three handlers from one.
  styleHandler(e){
    this.setState({
      style: e.target.value
    })
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
  }


render(){
  console.log(this.state.beers)
  var Beers = this.state.beers.map((beer, i) =>{
    return <Link to={'beer/' + beer.id} data={beer} key={i}>
      <div className="col-sm-3 cardWrap">
        <div className="col-sm-12">
            <img height="200" width="200" className="cardImage" src={beer.beer_label=== null? '/img/beer.jpg' : (beer.beer_label)} alt="Beer Profile Pic" />
            <p className="beerName"><b>{beer.beer_name}</b></p>
            <p className="time"><b>{beer.brew.name}</b></p>
              <div className="post-body runithOver">
                {beer.beer_description}
              </div>
        </div>
      </div>
    </Link>
  })
  return (
    <div>
      <div className="row text-center testMargin">
        <p className="searchHeaders">Search by Beer Name or Styles</p>
        <div className="col-xs-offset-2 col-xs-8 testMargin">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." />
            <div className="input-group-btn">
              <button className="btn signInButton" type="button" onClick={this.getBeer}>Search</button>
            </div>
          </div>
        </div>
      </div>
      {/* // TODO: Find a way to keep the row centered but not the radio buttons */}
      <div className="row testMargin text-center">
        <p className="searchHeaders">Filter by Style, ABV, or IBU</p>
        <div className="col-xs-12">
          <h3>Style</h3>
          <label className="radio-inline">
            <input type="radio" name="style"  value="" onClick={this.styleHandler} defaultChecked/>
              Any Style
          </label>
          <label className="radio-inline">
            <input type="radio" name="style"  value="IPA" onClick={this.styleHandler}/>
              IPA
          </label>
          <label className="radio-inline">
            <input type="radio" name="style"  value="Stout" onClick={this.styleHandler} />
              Stout
          </label>
          <label className="radio-inline">
              <input type="radio" name="style"  value="Amber" onClick={this.styleHandler}/>
              Amber Ale
          </label>
          <label className="radio-inline">
            <input type="radio" name="style"  value="Lager" onClick={this.styleHandler}/>
              Lager
          </label>
          <label className="radio-inline">
            <input type="radio" name="style"  value="Pilsner" onClick={this.styleHandler}/>
              Pilsner
          </label>
          <label className="radio-inline">
            <input type="radio" name="style"  value="Sour" onClick={this.styleHandler}/>
              Sour
          </label>
        </div>
      </div>
      <div className="row testMargin text-center">
        <div className="col-xs-12">
          <h3>ABV</h3>
            <label className="radio-inline">
              <input type="radio" name="abv" id="optionsRadios1" value="0,20" onChange={this.abvHandler} defaultChecked/>
              Any ABV
            </label>
            <label className="radio-inline">
              <input type="radio" name="abv" id="optionsRadios1" value="0,4" onChange={this.abvHandler}/>
              Less than 4%
            </label>
            <label className="radio-inline">
              <input type="radio" name="abv" id="optionsRadios2" value="4,6" onChange={this.abvHandler}/>
              4 - 6%
            </label>
            <label className="radio-inline">
              <input type="radio" name="abv" id="optionsRadios2" value="6,8" onChange={this.abvHandler}/>
              6 - 8%
            </label>
            <label className="radio-inline">
              <input type="radio" name="abv" id="optionsRadios2" value="8,10" onChange={this.abvHandler}/>
              8 - 10%
            </label>
            <label className="radio-inline">
              <input type="radio" name="abv" id="optionsRadios2" value="10,20" onChange={this.abvHandler}/>
              Greater than 10%
            </label>
        </div>
      </div>
      <div className="row testMargin text-center">
        <div className="col-xs-12">
          <h3>IBU</h3>
            <label className="radio-inline">
              <input type="radio" name="ibu" value="0,2500" onChange={this.ibuHandler} defaultChecked/>
              Any IBU
            </label>
            <label className="radio-inline">
              <input type="radio" name="ibu" value="0,40" onChange={this.ibuHandler}/>
              Less than 40
            </label>
            <label className="radio-inline">
              <input type="radio" name="ibu" value="40,60" onChange={this.ibuHandler}/>
              40-60
            </label>
          <label className="radio-inline">
            <input type="radio" name="ibu" value="60,80" onChange={this.ibuHandler}/>
            60-80
          </label>
          <label className="radio-inline">
            <input type="radio" name="ibu" value="80,100" onChange={this.ibuHandler}/>
            80-100
          </label>
          <label className="radio-inline">
            <input type="radio" name="ibu" value="100,2500" onChange={this.ibuHandler}/>
            Greater than 100
          </label>
        </div>
      </div>
      <div className="row text-center testMargin">
        <div className='col-xs-offset-2 col-xs-8'>
          <span className="input-group-btn">
            <button className="btn btn-primary filterButton" type="button" onClick={this.getBeer}>Filter</button>
          </span>
        </div>
      </div>
      <p className="text-center testMargin searchHeaders">Results</p>
      <div className="row">
        {Beers}
      </div>
    </div>
    )
  }
}
export default Filter
