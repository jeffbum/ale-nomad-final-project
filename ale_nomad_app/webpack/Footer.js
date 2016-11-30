import React, { Component } from 'react'
import { Link } from 'react-router'

const Footer = (props) => (
    <div>
        <footer className="footerMargin">
          <nav className="navbar navbar-inverse navbar-fixed-bottom">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12">
                  <ul className="nav navbar-nav">
                  {/* // TODO: do a link for href="creatprs.html and create that page" */}
                    <li className=""><a>Creators</a></li>
                    {/* // TODO: do a link for href="beers.html" */}
                    <li className=""><a>Find Beers</a></li>
                    {/* // TODO: do a link for href="breweries.html" */}
                    <li className=""><a>Find Breweries</a></li>
                    <p className="navbar-text">Est. November 2016</p>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </footer>
    </div>
)


export default Footer
