import React, { Component } from 'react'
import { Link } from 'react-router'

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
        <div className="row border">
          <form className="" action="" method="post">
            <div className="col-xs-4 text-center">
              <h3>Location</h3>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                  5 miles
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                  10 miles
                </label>
              </div>
              <div className="radio disabled">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />
                  15 miles
                </label>
              </div>
              <div className="radio disabled">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />
                  20 miles
                </label>
              </div>
              <div className="radio disabled">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />
                  25 miles
                </label>
              </div>
            </div>
            <div className="col-xs-4 text-center">
              <h3>Style</h3>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                  IPA
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                  Stout
                </label>
              </div>
              <div className="radio disabled">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />
                  Amber Ale
                </label>
              </div>
            </div>
            <div className="col-xs-4 text-center">
              <h3>ABV</h3>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                  Less than 4%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                  4 - 6%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                  6 - 8%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                  8 - 10%
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                  Greater than 10%
                </label>
              </div>
            </div>
            <input className="btn btn-primary center-block" type="submit" value="Submit" />
          </form>
        </div>
    </div>
)

export default Filter
