import React, { Component } from 'react'
import { Link } from 'react-router'
import BeerResult from './BeerResult'
// import alt from './lib/alt'
// import BeerStore from './stores/BeerStore'
// import BeerActions from './actions/BeerActions'


class BrewFilter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      brews: [],
      searchInput: '',
      location: '',
      // style: '',
    }
    this.styleHandler = this.styleHandler.bind(this)
    this.getBrew = this.getBrew.bind(this)
  }

  styleHandler(e){
    this.setState({
      searchInput: e.target.value,
      location: e.target.value,
      // style: e.target.value
    })
  }

  getBrew(){
    fetch('/api/show/location?address=' + this.state.searchInput + '&range=' + this.state.location)
    .then(response => response.json())
    .then(response => this.setState({brews: response.brews}))
    .then(whatever => console.log(this.state))
    //  console.log(response.brews)
  }

render(){
  // var Brews = this.state.brews.map((brew, i) => {
  //   return <Link to={'/api/show/brew?id=' + brew.id} data={brew} key={i}>
  //     <div className="row">
  //       <div className="col-xs-12">
  //         <img className="userPic" src={beer.beer_label=== null? 'http://unsplash.it/200/200?random' : (beer.beer_label)} alt="Beer Profile Pic" />
  //         <span className="beerName">{beer.beer_name}</span>
  //         <span className="time">{beer.brew.name}</span>
  //       </div>
  //       <div className="row">
  //         <div className="col-xs-8 col-xs-offset-2">
  //           <p className="post-body">
  //             {beer.beer_description}
  //           </p>
  //         </div>
  //       </div>
  //       <hr />
  //     </div>
  //   </Link>
  // })
  return(
    <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="input-group">
              <input name="searchInput" type="text" className="form-control" placeholder="Search for..." onChange={this.styleHandler}/>
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
                  <input type="radio" name="location"  value="" onClick={this.styleHandler} defaultChecked/>
                  Any Location
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="location"  value="1" onClick={this.styleHandler}/>
                  1 Mile
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="location"  value="5" onClick={this.styleHandler} />
                  5 Miles
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="location"  value="10" onClick={this.styleHandler}/>
                  10 Miles
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="location"  value="15" onClick={this.styleHandler}/>
                  15 Miles
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="style"  value="20" onClick={this.styleHandler}/>
                  20 Miles
                </label>
              </div>
                {/* <span className="input-group-btn">
                  <button className="btn btn-primary" type="button" onClick={this.getBeer}>Search</button>
                </span> */}
            </div>
            {/* <div className="col-xs-3">
              <h3>Style</h3>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios1" value="0,20" onChange={this.styleHandler} defaultChecked/>
                  Any Style
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
            </div> */}
            <div className="col-sm-12">
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.getBrew}>Search</button>
              </span>
            </div>
          </div>
        <div>
          {/* {Beers} */}
        </div>
    </div>
    )
  }
}
export default BrewFilter
