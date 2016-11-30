import React, { Component } from 'react'
import { Link } from 'react-router'

const Carousel = (props) => (
    <div>
        <div className="container-fluid no_padding">
            <div className="row">
                <div className="col-sm-12">
                  <div id="featuredPhotos" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#featuredPhotos" data-slide-to="0" className="active"></li>
                      <li data-target="#featuredPhotos" data-slide-to="1"></li>
                      <li data-target="#featuredPhotos" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                      <div className="item active">
                        {/* // TODO: Put a link for href="beers.html and create that page" */}
                          <img src="/img/beer.jpg"className="img-responsive" width="100%" alt="" />
                        <div className="carousel-content-beer">
                          <p>Beers</p>
                        </div>
                      </div>
                      <div className="item">
                        {/* // TODO: Put a link for href="brewery.html and create that page" */}
                          <img src="/img/brewery.jpeg" width="100%" alt="" />
                        <div className="carousel-content-breweries">
                          <p>Breweries</p>
                        </div>
                      </div>
                      <div className="item">
                        {/* // TODO: Put a link for href="mission.html and create that page" */}
                          <img src="/img/craft.jpg" width="100%" alt="" />
                        <div className="carousel-content-about">
                          <p>Mission</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
)

export default Carousel
