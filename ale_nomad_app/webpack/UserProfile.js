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
        return(
            <div>Hello World</div>
        )
    }
}

export default UserProfile
