import React from 'react'
import { Link, browserHistory } from 'react-router'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email:'',
            images: '',
            myDrinks: [],
            beerReviews: []
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
            }))
            // .then(response => console.log(this.state))
    }
    componentWillMount(){
        fetch('/api/mydrinks?api_token=' + sessionStorage.getItem('api_token'))
        .then(response => response.json())
        .then(response => this.setState({
            myDrinks: response.beers,
            beerReviews: response.beers.reviews
        }))
        .then(response => console.log(this.state.myDrinks))
    }

    render(){
        // var MyDrinks = this.state.myDrinks.map((myDrink, i) =>{
        // return <Link to={'/beer/' + beer.id} data={beer} key={i}>
        return <div>
                    <br />
                    <main className="container ">
                      <div className="row">
                        <div className="col-xs-3 text-center ">
                        {this.state.name}
                        </div>
                        <div className="col-xs-6 column text-center">
                            {/* {MyDrinks} */}
                        </div>
                        <div className="col-xs-3 text-center ">
                            {this.state.email}

                        </div>
                    </div>
                    </main>
            </div>
    }
}

export default UserProfile
