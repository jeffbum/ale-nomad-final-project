import React from 'react'
import { Link, browserHistory } from 'react-router'
import StarRatingComponent from 'react-star-rating-component';


class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email:'',
            images: '',
            password: '',
            myDrinks: [],
        }
        this.onStarClick = this.onStarClick.bind(this)
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
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
            visitedBrews: response.beers.brews
        }))
        .then(response => console.log(this.state.myDrinks))
    }

    render(){

        var MyDrinks = this.state.myDrinks.map((myDrink, i) => {
        return <Link to={'/beer/' + myDrink.id} data={myDrink} key={i}>
        <div className="row">
            {myDrink.beer_name}
            {myDrink.brew.established}
            {myDrink.category.name}
            <h2>Rating from state: {rating}</h2>
              <StarRatingComponent
                  name="rate2"
                  editing={false}
                  renderStarIcon={() => <span>&#x2606;</span>}
                  starCount={5}
                  value={rating}
              />
        </div>
    </Link>
    const { rating } = myDrink.reviews.length
    })
        return (
        <div className="container ">
            <div className="row">
                <div className="col-xs-3 text-center ">
                    {this.state.name}
                </div>
                <div className="col-xs-6 column text-center">
                     {MyDrinks}
                </div>
                <div className="col-xs-3 text-center ">
                    {this.state.email}
                    <img src={this.state.images} />
                </div>
            </div>
            </div>
        )
    }
}

export default UserProfile
