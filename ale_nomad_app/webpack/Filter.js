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
      <div className="row">
        <div className="col-xs-12">
          <img className="userPic" src={beer.beer_label=== null? 'http://unsplash.it/200/200?random' : (beer.beer_label)} alt="Beer Profile Pic" />
          <span className="beerName">{beer.beer_name}</span>
          <span className="brewName">{beer.brew.name}</span>
        </div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <p className="post-body">
              {beer.beer_description}
            </p>
          </div>
        </div>
        <hr />
      </div>
    </Link>
  })
  // FIXME: change buttons to where there is just a search button & ONE large button for the filters.
  // TODO: restyle the search results layout
  return(
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
              {/* <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.getBeer}>Search</button>
              </span> */}
            </div>
            <div className="col-xs-3">
              <h3>ABV</h3>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios1" value="0,20" onChange={this.abvHandler} defaultChecked/>
                  Any ABV
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios1" value="0,4" onChange={this.abvHandler}/>
                  Less than 4%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios2" value="4,6" onChange={this.abvHandler}/>
                  4 - 6%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios2" value="6,8" onChange={this.abvHandler}/>
                  6 - 8%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios2" value="8,10" onChange={this.abvHandler}/>
                  8 - 10%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios2" value="10,20" onChange={this.abvHandler}/>
                  Greater than 10%
                </label>
              </div>
              {/* <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.getAbv}>Search</button>
              </span> */}
            </div>
            <div className="col-xs-3">
              <h3>IBU</h3>
              <div className="radio">
                <label>
                  <input type="radio" name="ibu" value="0,2500" onChange={this.ibuHandler} defaultChecked/>
                  Any IBU
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="ibu" value="0,40" onChange={this.ibuHandler}/>
                  Less than 40
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="ibu" value="40,60" onChange={this.ibuHandler}/>
                  40-60
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="ibu" value="60,80" onChange={this.ibuHandler}/>
                  60-80
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="ibu" value="80,100" onChange={this.ibuHandler}/>
                  80-100
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="ibu" value="100,2500" onChange={this.ibuHandler}/>
                  Greater than 100
                </label>
              </div>
              {/* <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.getIbu}>Search</button>
              </span> */}
            </div>
        </div>
        <div>{Beers}</div>

    </div>
)

}
}
export default Filter
