import React from 'react'
import { Link, browserHistory } from 'react-router'

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
        var MyDrinks = this.state.myDrinks.map((myDrink, i) => {
        return <Link to={'/beer/' + myDrink.id} data={myDrink} key={i}>
        <div className="row">
            {myDrink.beer_name}
        </div>
    </Link>
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
