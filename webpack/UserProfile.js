import React from 'react'
import { Link, browserHistory } from 'react-router'
import ReactStars from 'react-stars'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email:'',
            images: '',
            password: '',
            myDrinks: [],
            rating: 1
        }
        this.onStarClick = this.onStarClick.bind(this)
        // this.getReview = this.getReview.bind(this)
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue})
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
        }))
        .then(response => console.log(this.state.myDrinks))
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
                    <ReactStars count={myDrink.reviews[0].rating} edit={false} size={24} color1={'#ffd700'} />
                    {/* <p>IBU: {date}</p> */}
                </div>
            </div>
        </Link>
    })
        return (
        <div className="container">
            <div className="row">
                <div className="col-xs-5 col-sm-3 profileImage">
                    <h1>Hi {this.state.name}!</h1>
                    <img src={this.state.images} />
                </div>
                <div className="col-xs-7 col-sm-9">
                    <h1 className="text-center">Beers you Drank</h1>
                    {MyDrinks == 0 &&
                    <h1 className="text-center">Choose a drink!</h1>}
                    {MyDrinks}
                </div>
            </div>
        </div>
        )
    }
}

export default UserProfile
