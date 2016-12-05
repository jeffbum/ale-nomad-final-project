console.log('Looking for a developer? Visit our "About Us" page!')
//react imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

// alt.js imports
import alt from './lib/alt'
import BeerStore from './stores/BeerStore'
import BeerActions from './actions/BeerActions'

//component imports
import App from './App'
import Homepage from './Homepage'
import FindBeer from './FindBeer'
import FindBrewery from './FindBrewery'
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import BeerResult from './BeerResult'


// TODO: create const path to figure in api token.
// TODO: session storage

const path = window.location.href.includes('github') ? '/ale_nomad_app/' : '/'


// predefining path so we dont have to put in the slash everytime (also in case you want to run locally through GitHub)
// document.addEventListener('DOMContentLoaded', function() {

ReactDOM.render(

    // TODO: determing paths and component names (also, if we need more routes)

    <Router history={browserHistory}>
        <Route path={path} component={App} >
            <IndexRoute component={Homepage} />
            <Route path='find_beer' component={FindBeer} />
            <Route path='api/show/beer' component={BeerResult} />
            <Route path='find_brew' component={FindBrewery} />
        </Route>
    </Router>
    , document.getElementById('aleNomad')
)
// })
