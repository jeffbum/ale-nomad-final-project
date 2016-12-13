//react imports
import React from 'react'
import { Link } from 'react-router'
// import Filter from './Filter'
import Signup from './Signup'


// TODO: layout page
// TODO: api call

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render(){
        return (
            <div>
              <div className="hidden-xs container-fluid homePageImage text-center">
                <h1>Welcome to Ale Nomad!</h1>
              </div>
              <div className="hidden-xs container headerContainer">
                <div className="row">
                  <div className="col-sm-12">
                    <p className="woahRadical">Ale Nomad is where socialites, casual drinkers, and connoisseurs come to discover beer and breweries. Stuck in the mud ordering the same Stout? Let Ale Nomad recommend a new brew. Not educated in beer styles like some of your friends? Choose from hundreds of beers to nail down the next best taste that all your friends will thank you for. Even find a new hot spot to drink at. Wherever life takes you let Ale Nomad guide you to the beer. </p>
                      <hr className="hidden-xs" />
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row featuredCatMargin">
                    <div className="col-xs-12 mobileFeaturedCats">
                        <span><a href="/find_beer" className="visible-xs hidden-sm hidden-md hidden-lg btn mobileButtonSize">Find A Beer!</a></span>
                    </div>
                    <div className="col-xs-12 mobileFeaturedCats">
                        <span><a href="/find_brew" className="visible-xs hidden-sm hidden-md hidden-lg btn mobileButtonSize">Find A Brewery!</a></span>
                    </div>
                    <div className="col-xs-12 mobileFeaturedCats">
                        <span><a href="/userprofile" className="visible-xs btn mobileButtonSize">Profile</a></span>
                    </div>
                  <div className="col-sm-5 text-center featuredCats">
                    <p className="featuredCatTitles hidden-xs">Beer</p>
                    <p className="featuredCatDescription hidden-xs">This will be a paragraph about what beer search can do for our users. Want to search beers by style. Click getting started. Want to search for a beer with a specific ABV or IBU. Click to get started.</p>
                    <span><a href="/find_beer" className="hidden-xs btn">Find A Beer!</a></span>
                  </div>
                  <div className="col-sm-5 col-sm-offset-2 text-center featuredCats">
                    <p className="featuredCatTitles hidden-xs">Brewery</p>
                    <p className="featuredCatDescription hidden-xs">This will be a paragraph about what brewery search can do for our users. Want to search beers by style. Click getting started. Want to search for a beer with a specific ABV or IBU. Click to get started.</p>
                    <span><a href="/find_brew" className="hidden-xs btn">Find A Brewery!</a></span>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Homepage
