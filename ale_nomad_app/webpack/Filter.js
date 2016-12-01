import React, { Component } from 'react'
import { Link } from 'react-router'
import alt from './lib/alt'


const Filter = (props) => (
    <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button">Search</button>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <form className="" action="" method="post"> */}
            <div className=" col-xs-offset-2 col-xs-3">
              <h3>Location</h3>
              <div className="radio">
                <label>
                  <input type="radio" name="location" id="optionsRadios1" value="less5"  />
                  5 miles
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="location" id="optionsRadios2" value="less10" />
                  10 miles
                </label>
              </div>
              <div className="radio disabled">
                <label>
                  <input type="radio" name="location" id="optionsRadios3" value="less15"  />
                  15 miles
                </label>
              </div>
              <div className="radio disabled">
                <label>
                  <input type="radio" name="location" id="optionsRadios3" value="less20" />
                  20 miles
                </label>
              </div>
              <div className="radio disabled">
                <label>
                  <input type="radio" name="location" id="optionsRadios3" value="less25" />
                  25 miles
                </label>
              </div>
            </div>
            <div className="col-xs-3">
              <h3>Style</h3>
              <div className="radio">
                <label>
                  <input type="radio" name="style" id="optionsRadios1" value="ipa" />
                  IPA
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="style" id="optionsRadios2" value="stout" />
                  Stout
                </label>
              </div>
              <div className="radio disabled">
                <label>
                  <input type="radio" name="style" id="optionsRadios3" value="amberAle" />
                  Amber Ale
                </label>
              </div>
            </div>
            <div className="col-xs-3">
              <h3>ABV</h3>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios1" value="less4" />
                  Less than 4%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios2" value="less6" />
                  4 - 6%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios2" value="less8" />
                  6 - 8%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios2" value="less10" />
                  8 - 10%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="abv" id="optionsRadios2" value="more10" />
                  Greater than 10%
                </label>
              </div>
            </div>
        </div>
    </div>
)
console.log('test')

export default Filter
