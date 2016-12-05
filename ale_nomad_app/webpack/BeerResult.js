import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'


class BeerResult extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            beerDetails: [],
            brewDetails: []
        }
    }

    componentDidMount(){
        // fetch('/api/show/beer?id=' + this.props.routeParams.beer_id)
        // console.log(this.props.routeParams.beer_id)
        // .then(response => response.json())
        // .then(response => this.setState({beerDetails: response}))
        fetch('/api/show/beer?id=' + this.props.routeParams.beer_id, {
                method: 'GET',
                headers: {
                    // api_token: sessionStorage.getItem('chirp-api-token'),
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(response =>
                this.setState({beerDetails: response.beer})
            )
            // .then(response =>
            //     this.setState({brewDetails: response.brew})
            // )
            .then(whatever => console.log(this.state))
    }


    render(){
        return <div className="container">
            <div className="row">
                <div>{this.state.beerDetails.beer_name}</div>
                {/* <div>{this.state.beerDetails}</div> */}
            </div>
        </div>
    }
}
// console.log(this.props.name)
export default BeerResult
