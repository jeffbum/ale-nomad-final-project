import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'


class BeerResult extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            beerDetails: [],
            brewDetails: [],

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
                this.setState({
                    beerDetails: response.beer,
                    brewDetails: response.beer.brew
                })
            )
            // .then(response =>{
            //     console.log(response)
            // })

            // .then(response =>
            //     this.setState({brewDetails: response.brew})
            // )
    }


    render(){
        console.log(this.state.brewDetails)
        return <div className="container">
            <div className="row">
                <div>{this.state.beerDetails.beer_name}</div>
                <div>{this.state.brewDetails.hours_of_operation}</div>
            </div>
        </div>
    }
}
// console.log(this.props.name)
export default BeerResult
