import React from 'react'
import { Link } from 'react-router'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
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
                            <button type="button" className="btn btn-success pull-right">LogIn</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
