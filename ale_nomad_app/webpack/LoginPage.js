import React from 'react'
import { Link, browserHistory} from 'react-router'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.login = this.login.bind(this)
        this.loggedInHandler = this.loggedInHandler.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    login() {

        if (!this.state.mock) {
            // console.log(this.state)
            fetch('/api/login', {
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
              if(response.ok) {
                return response.json()
              } else {
                  throw 'Network response was not ok.'              }
            })
            .then(this.loggedInHandler)
            .catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message)
            })
        }
    }

    loggedInHandler(response) {
        if(typeof response.user != 'undefined') {
            sessionStorage.setItem('chirp-api-token', response.user.api_token)
            sessionStorage.setItem('chirp-user', JSON.stringify(response.user))
            this.setState({
                user: response.user})
            browserHistory.push('/userprofile')
        } else {
            response.forEach(function(error) {
                var errorDiv = document.createElement('div')
                errorDiv.classList.add('alert', 'alert-danger')
                errorDiv.innerHTML = error
                document.querySelector('#errors').appendChild(errorDiv)
            })
        }
    }

    handleClick() {
        this.login()
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.login()
        }
    }


    render() {
        return (
            <div>
                <div className="container center-block">
                    <div className="row">
                        <div className="col-xs-6 col-xs-offset-3">
                            <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" id="email" name="email" className="form-control" required value={this.state.email} onChange={(e) => this.setState({email:e.target.value})}/>
                            </div>
                            <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input type="password" id="password" name="password" className="form-control" required value={this.state.password} onChange={(e) => this.setState({password:e.target.value})}/>
                            </div>
                            <button type="button" className="btn btn-success pull-right" onClick={this.handleClick}>LogIn</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
