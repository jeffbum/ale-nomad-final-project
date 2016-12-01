import React, { Component } from 'react'
import { Link } from 'react-router'


const Header = (props) => (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* // TODO: do a link for href="index.html" */}
            <a className="navbar-brand">Ale Nomad</a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav">
            {/* // TODO: do a link for href="mission.html" */}
              <li><a>Mission<span className="sr-only text-center"></span></a></li>
              {/* // TODO: do a link for href="beer.html" */}
              <li><a>Find Beers<span className="sr-only"></span></a></li>
              {/* // TODO: do a link for href="breweries.html" */}
              <li><a>Find Breweries<span className="sr-only"></span></a></li>
            </ul>
            <ul className="nav navbar-nav pull-right">
              <button className="btn btn-primary logInButton" type="submit">Log In</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
)

export default Header
