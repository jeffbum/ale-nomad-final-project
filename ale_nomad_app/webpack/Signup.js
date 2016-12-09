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
        // this.mockResponse = this.mockResponse.bind(this)
        this.signedUpHandler = this.signedUpHandler.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.signup = this.signup.bind(this)
    }

    componentDidMount() {

    }

    componentWillUnmount() {

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
            // browserHistory.push(sharedState().path + 'chirp')
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

    signup() {
        fetch('/api/signup?email=' + this.state.email + '&password=' + this.state.password + '&images_id=' + this.state.images + '&name=' + this.state.name, {
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
        .then(this.signedUpHandler)
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message)
        })
    }


    render() {
        return (
            <div className="well">
                    <h2>Sign Up</h2>
                    <br/>
                    <div id="errors"></div>
                    <br/>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" className="form-control" required value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="avatar">Avatar</label>
                        <input type="file" id="picture" name="picture" className="form-control" required onChange={(e) => this.setState({picture:e.target.files[0]})}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="form-control" required value={this.state.email} onChange={(e) => this.setState({email:e.target.value})}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" className="form-control" required value={this.state.password} onChange={(e) => this.setState({password:e.target.value})}/>
                      </div>
                      <div className="form-group">
                        <Link to={'/login'}><button id="signup" type="button" className="btn btn-success btn-block" onClick={this.handleClick}>Sign Up</button></Link>
                      </div>
                      {/* <div className="form-group">
                          <Link to={'/profile'} className="btn btn-danger btn-block">Cancel </Link>
                      </div> */}
                </div>
        )
    }
}

export default Signup
