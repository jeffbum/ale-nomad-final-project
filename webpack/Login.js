import React from 'react'
import { Link, browserHistory } from 'react-router'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.login = this.login.bind(this)
    }
    login(){
        fetch('/api/login?email=' + this.state.email + '&password=' + this.state.password, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
          if(response.ok) {
            return response.json()
          } else {
            throw 'Network response was not ok.'
          }
        })
        .catch((error) => {
          console.log('There has been a problem with your login fetch operation: ' + error.message)
        })
        browserHistory.push('/userprofile')

    }


    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <br/>
                <br/>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="form-control" required value={this.state.email} onChange={(e) => this.setState({email:e.target.value})}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" className="form-control" required value={this.state.password} onChange={(e) => this.setState({password:e.target.value})}/>
                </div>
                <div className="form-group">
                  <Link to='/signup'><button id="signup" type="button" className="btn btn-success btn-block">Sign Up</button></Link>
                  <button id="login" type="button" className="btn btn-success btn-block" onClick={this.login}>Log In</button>
                </div>
        </div>
        )
    }
}
export default Login
