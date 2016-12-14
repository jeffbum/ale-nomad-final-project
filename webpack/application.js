console.log('Looking for a developer? Visit our "Meet the Developers" pages!')
//react imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

// alt.js imports
// import alt from './lib/alt'
// import BeerStore from './stores/BeerStore'
// import BeerActions from './actions/BeerActions'

//component imports
import App from './App'
import Homepage from './Homepage'
import FindBeer from './FindBeer'
import FindBrewery from './FindBrewery'
// import Filter from './Filter'
import BeerResult from './BeerResult'
import BrewFilter from './BrewFilter'
import BrewResult from './BrewResult'
import Signup from './Signup'
import Login from './Login'
import UserProfile from './UserProfile'




// predefining path so we dont have to put in the slash everytime (also in case you want to run locally through GitHub)
// document.addEventListener('DOMContentLoaded', function() {
ReactDOM.render(
    // TODO: determing paths and component names (also, if we need more routes)
    <Router history={browserHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Homepage} />
            <Route path='signup' component={Signup} />
                <Route path='login' component={Login} />
                <Route path='userprofile' component={UserProfile} />
            <Route path='find_beer' component={FindBeer} />
                <Route path='beer/:beer_id' component={BeerResult} />
            <Route path='find_brew' component={FindBrewery} />
                <Route path='brew/:brew_id' component={BrewResult} />
        </Route>
    </Router>
    , document.getElementById('aleNomad')
)

// Old-school login and logout code
window.logout = function() {
    sessionStorage.clear()
    window.location.href = '/'
}

if (sessionStorage.getItem('api_token')) {
    document.querySelectorAll('.loginLogout').forEach(function(loginLogout) {
        loginLogout.innerHTML = '<a href="javascript:logout()" class="btn">Logout</a>'
    })
}
else {
    document.querySelectorAll('.loginLogout').forEach(function(loginLogout) {
        loginLogout.innerHTML = '<a href="/login" class="btn">Login</a>'
    })
}

// })
