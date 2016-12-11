import React from 'react'
import { Link, browserHistory} from 'react-router'

import Timeline from './Timeline'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email:'',
            // image: ''
        }
    }
    componentDidMount() {
        var login = sessionStorage.getItem('ale-nomad-api-token');
        if (!login) {
            // browserHistory.push('/')
            window.location.href('/')
        }
        else {
            fetch('/api/users/' + sessionStorage.getItem('user_id'))
            .then(response => response.json())
            .then( response => this.setState({
                name: response.user.name,
                email: response.user.email,
                image: response.user.image,

            }))
        }
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
                            <Timeline />
                        </div>
                        <div className="col-xs-3 text-center ">
                            {/* {this.state.image} */}

                        </div>
                    </div>
                    </main>
            </div>
    }
}

export default UserProfile
