import React from 'react'
import { Link, browserHistory} from 'react-router'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            name: '',
            picture: ''
        }
        this.mockResponse = this.mockResponse.bind(this)
        this.signedUpHandler = this.signedUpHandler.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.signup = this.signup.bind(this)
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    mockResponse() {
        var response = {
            user: {
                id: 1,
                name: 'Jeff',
                email: 'jef@me.com',
                picture: '',
                api_token: 'xxxxxxxxxxxxx'
            }
        }
        this.signedUpHandler(response)
    }

    signedUpHandler(response) {
        if (typeof response.user != 'undefined') {
            sessionStorage.setItem('ale-nomad-api-token', response.user.api_token)
            sessionStorage.setItem('ale-nomad-user',
                JSON.stringify(response.user))
            this.setState({
                user: response.user
            })
            // TODO: understand what was going on in the browserhistory push

            // browserHistory.push
        }
        else {
            response.forEach(function(error) {
                var errorDiv = document.createElement('div')
                errorDiv.classList.add('alert', 'alert-danger')
                errorDiv.innerHTML = error
                document.querySelector('#errors').appendChild(errorDiv)
            })
        }
    }

    handleClick() {
        this.signup()
    }

    signup(){
        if (!this.state.mock) {
            var data = new FormData()
            data.append('email', this.state.email)
            data.append('password', this.state.password)
            data.append('name', this.state.name)
            data.append('picture', this.state.picture)
            fetch('', {
                body: data,
                method: 'POST'
            })
            .then(function(response) {
              if(response.ok) {
                return response.json()
              } else {
                throw 'Network response was not ok.'
              }
            })
            .then(this.signedUpHandler)
            .catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message)
            })
        }
        else {
            this.mockResponse()
        }
    }
}

export default Signup
