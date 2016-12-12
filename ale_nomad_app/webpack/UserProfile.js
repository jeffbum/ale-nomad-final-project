import React from 'react'
import { Link, browserHistory } from 'react-router'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email:'',
            images: ''
        }
    }
    componentDidMount() {

            fetch('/api/users/' + sessionStorage.getItem('user_id'))
            .then(response => response.json())
            .then(response => this.setState({
                name: response.user.name,
                email: response.user.email,
                images: response.user.images,
            }))
            .then(response => console.log(this.state))
    }

    render(){
        return <div>
                    <br />
                    <main className="container ">
                      <div className="row">
                        <div className="col-xs-3 text-center ">
                        {this.state.name}
                        </div>
                        <div className="col-xs-6 column text-center">
                            {this.state.email}
                        </div>
                        <div className="col-xs-3 text-center ">
                            <img src={this.state.images} />

                        </div>
                    </div>
                    </main>
            </div>
    }
}

export default UserProfile
