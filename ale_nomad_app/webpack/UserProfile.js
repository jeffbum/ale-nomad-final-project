import React from 'react'
import { Link, browserHistory} from 'react-router'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        var login = sessionStorage.getItem('ale-nomad-api-token');
        if (!login) {
            browserHistory.push('/')
        }
    }

    render(){
        return <div>
                    
                    <br />
                    <main className="container ">
                      <div className="row">
                        <div className="col-xs-3 text-center ">
                        Hi
                        </div>
                        <div className="col-xs-6 column text-center">
                        Hello
                        </div>
                        <div className="col-xs-3 text-center ">
                        Adios
                        </div>
                    </div>
                    </main>
            </div>
    }
}

export default UserProfile
