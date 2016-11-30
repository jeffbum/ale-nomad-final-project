console.log('Looking for a developer? Visit our "About Us" page!')

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
// space if we want to add redux/alt.js


import App from './App'
import Homepage from './Homepage'
import FindBeer from './FindBeer'
import FindBrewery from './FindBrewery'
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'


// TODO: create const path to figure in api token.
// TODO: session storage


// predefining path so we dont have to put in the slash everytime (also in case you want to run locally through GitHub)
// document.addEventListener('DOMContentLoaded', function() {

ReactDOM.render(

    // TODO: determing paths and component names (also, if we need more routes)

    <Router history={browserHistory}>
        <Route path={'/'} component={App} >
            <IndexRoute component={Homepage} />
            <Route path='/find_beer' component={FindBeer} />
            <Route path='/find_brew' component={FindBrewery} />
        </Route>
    </Router>
    , document.getElementById('aleNomad')
)
// })
