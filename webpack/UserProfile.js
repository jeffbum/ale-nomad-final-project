import React from 'react'
import { Link, browserHistory } from 'react-router'
// import Moment from 'moment'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email:'',
            images: '',
            password: '',
            myDrinks: [],
            visitedBrews: []
        }
    }
    componentDidMount() {
            fetch('/api/users/' + sessionStorage.getItem('user_id'),  {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(response => this.setState({
                name: response.user.name,
                email: response.user.email,
                images: response.user.images,
                password: response.user.password
            }))
            // .then(response => console.log(this.state))
    }
    componentWillMount(){
        fetch('/api/mydrinks?api_token=' + sessionStorage.getItem('api_token'))
        .then(response => response.json())
        .then(response => this.setState({
            myDrinks: response.beers,
            visitedBrews: response.beers.brew
        }))
        .then(response => console.log(this.state.myDrinks))
        .then(response => console.log(this.state.images))
    }

    render(){
        // var date = moment();
        var MyDrinks = this.state.myDrinks.map((myDrink, i) => {
        return <Link to={'/beer/' + myDrink.id} data={myDrink} key={i}>
            <div className="col-sm-4">
                <div className="cardWrapFilter">
                    <img src={myDrink.beer_label=== null? '/img/noImage.jpg' : (myDrink.beer_label)} alt="Beer Profile Pic" />
                    <p>Beer: {myDrink.beer_name}</p>
                    <p>ABV: {myDrink.beer_abv}</p>
                    <p>IBU: {myDrink.beer_ibu}</p>
                    {/* <p>IBU: {date}</p> */}
                </div>
            </div>
        </Link>
    })
        return (
        <div className="container">
            <div className="row">
                <div className="col-xs-3 profileImage">
                    <h1>Hi {this.state.name}!</h1>
                    <img src={this.state.images} />
                </div>
                <div className="col-xs-9">
                    <h1 className="text-center">Your Favorites</h1>
                    {MyDrinks}
                </div>
            </div>
        </div>
        )
    }
}

export default UserProfile
