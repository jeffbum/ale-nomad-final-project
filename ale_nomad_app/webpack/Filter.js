import React, { Component } from 'react'
import { Link } from 'react-router'
import BeerResult from './BeerResult'
// import alt from './lib/alt'
// import BeerStore from './stores/BeerStore'
// import BeerActions from './actions/BeerActions'


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
    // this.beerFilter = this.beerFilter.bind(this)
    this.getBeer = this.getBeer.bind(this)
    this.getABV = this.getAbv.bind(this)
    this.getIbu = this.getIbu.bind(this)

  }
  componentDidMount(){
    // this.getBeer()
  }

  componentWillUnmount() {

  }


  styleHandler(e){
    this.setState({
      style: e.target.value,
      ibu: e.target.value,
      abv: e.target.value
    })
    // this.beerFilter()
  }

//old method, trying to combine into one function.
  getBeer(){
    fetch('/api/filter?filter[beer_name_cont]=' + this.state.style)
    .then(response => response.json())

    .then(response => this.setState({beers: response.beers}))
     console.log(response.beers)
  }


  getAbv(){
    if ( this.state.abv === null) {
      fetch('/api/filter?filter[beer_abv_gteq]=' + '0' + '&filter[beer_abv_lt]=' + '20' )
      .then(response => response.json())
      .then(response => {
      console.log(response)
      })
    }
    else{
      var splitValue = this.state.abv.split(',')
      fetch('/api/filter?filter[beer_abv_gteq]=' + splitValue[0] + '&filter[beer_abv_lt]=' + splitValue[1] )
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      // console.log(twoValues[1])
    }
}


  getIbu(){
    if ( this.state.ibu === null) {
      fetch('/api/filter?filter[beer_ibu_gteq]=' + '0' + '&filter[beer_ibu_lt]=' + '2500' )
      .then(response => response.json())
      .then(response => this.setState({beers: response.beers}))
       console.log(response.beers)
    }
    else{
    var splitComma = this.state.ibu.split(',')
    fetch('/api/filter?filter[beer_ibu_gteq]=' + splitComma[0] + '&filter[beer_ibu_lt]=' + splitComma[1] )
    .then(response => response.json())
    .then(response => this.setState({beers: response.beers}))
     console.log(response.beers)
    }
}

render(){
  var Beers = this.state.beers.map((beer, i) =>{
    return <Link to={'beer/' + beer.id} data={beer} key={i}>
      <div className="row testBorder">
        <div className="col-sm-4">
            <img className="cardImage" src={beer.beer_label=== null? '/img/beer.jpg' : (beer.beer_label)} alt="Beer Profile Pic" />
            <span className="beerName"><b>{beer.beer_name}</b></span>
            <span className="time"><b>{beer.brew.name}</b></span>
              <p className="post-body">
                {beer.beer_description}
              </p>
        </div>
      </div>
    </Link>
  })
  return (
    <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.getBeer}>Search</button>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-xs-3">
              <h3>Style</h3>
              <div className="radio">
                <label>
                  <input type="radio" name="style"  value="" onClick={this.styleHandler} defaultChecked/>
                  Any Style
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="style"  value="IPA" onClick={this.styleHandler}/>
                  IPA
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="style"  value="Stout" onClick={this.styleHandler} />
                  Stout
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="style"  value="Amber" onClick={this.styleHandler}/>
                  Amber Ale
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="style"  value="Lager" onClick={this.styleHandler}/>
                  Lager
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="style"  value="Pilsner" onClick={this.styleHandler}/>
                  Pilsner
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="style"  value="Sour" onClick={this.styleHandler}/>
                  Sour
                </label>
              </div>
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.getBeer}>Search</button>
              </span>
            </div>
            <div className="col-xs-3">
              <h3>ABV</h3>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios1" value="0,20" onChange={this.styleHandler} defaultChecked/>
                  Any ABV
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios1" value="0,4" onChange={this.styleHandler}/>
                  Less than 4%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios2" value="4,6" onChange={this.styleHandler}/>
                  4 - 6%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios2" value="6,8" onChange={this.styleHandler}/>
                  6 - 8%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios2" value="8,10" onChange={this.styleHandler}/>
                  8 - 10%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios2" value="10,20" onChange={this.styleHandler}/>
                  Greater than 10%
                </label>
              </div>
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.getAbv}>Search</button>
              </span>
            </div>
            <div className="col-xs-3">
              <h3>IBU</h3>
              <div className="radio">
                <label>
                  <input type="radio" name="ibu" value="0,2500" onChange={this.styleHandler} defaultChecked/>
                  Any IBU
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="ibu" value="0,40" onChange={this.styleHandler}/>
                  Less than 40
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="ibu" value="40,60" onChange={this.styleHandler}/>
                  40-60
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="ibu" value="60,80" onChange={this.styleHandler}/>
                  60-80
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="ibu" value="80,100" onChange={this.styleHandler}/>
                  80-100
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="ibu" value="100,2500" onChange={this.styleHandler}/>
                  Greater than 100
                </label>
              </div>
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.getIbu}>Search</button>
              </span>
            </div>
        </div>
        <div>{Beers}</div>

    </div>
    )
  }
}
export default Filter
