import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { URL, secret, user, setUser, setMessage } from './Globals';
import Header from './Header';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        // console.log('looking up user: ' + this.username.value);
        event.preventDefault();

        fetch(URL + this.username.value, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Basic ' + secret
            })
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                // console.log('Success:', response)
                if (response.username === this.username.value) {
                    setUser(response.fullname);
                    setMessage(response.fullname + ": welcome back !");
                    this.setState({error: ''}) ;
                } else {
                    this.setState({error: 'Username/password invalid'}) ;
                }
            });
    }

    render() {
        if (user !== '' && this.state.error === '') {
            return <Redirect to='/content' />
        }
        return (
            <div>
                <Header />
                <div className="container">
                    <h3>Please Log In</h3>
                    <form onSubmit={this.handleSubmit} className="form-horizontal">
                        <div className="form-group">
                            <label className="control-label col-sm-2">Username: </label>
                            <div className="col-sm-10">
                                <input id="username" type="text" name="username" required autoFocus="true"
                                    ref={(username) => this.username = username} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2">Password: </label>
                            <div className="col-sm-10">
                                <input id="password" type="password" name="password" required ref={(password) => this.password = password} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit">
                                    Login
                          </button>
                            </div>
                        </div>
                        <p>
                            <small>(Hint: try username student with password student)</small>
                        </p>
                        <p> {this.state.error} </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signin;