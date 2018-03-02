import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { URL, secret, setMessage } from './Globals';
import Header from './Header';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('looking up user: ' + this.username.value);

        fetch(URL + this.username.value, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Basic ' + secret
            })
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success: ', response)
                if (response.username === this.username.value) {
                    this.setState({ error: 'Username not available' });
                } else {
                    var data = { 
                        fullname: this.fullname.value, 
                        username: this.username.value,
                        password: this.password.value
                    };
                    fetch(URL, {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: new Headers({
                            'Authorization': 'Basic ' + secret,
                            'Content-Type': 'application/json'
                        })
                    }).then(res => res.json())
                        .catch(error => {
                            console.error('Error:', error);
                            this.setState({ error: error });
                        })
                        .then(response =>  {
                            console.log('Success:', response);
                            setMessage('New user registered: ' + this.fullname.value);
                            this.setState({ error: 'done' });
                        });                   
                }
            });
    }

    render() {
        if (this.state.error === 'done') {
            return <Redirect to='/content' />
        }
        return (
            <div>
                <Header />
                <div className="container">
                    <h3>Register new User</h3>
                    <form onSubmit={this.handleSubmit} className="form-horizontal">
                        <div className="form-group">
                            <label className="control-label col-sm-2">Full Name: </label>
                            <div className="col-sm-10">
                                <input id="fullname" type="text" name="fullname" required ref={(fullname) => this.fullname = fullname} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2">Username: </label>
                            <div className="col-sm-10">
                                <input id="username" type="text" name="username" required
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
                                    Register
                          </button>
                            </div>
                        </div>
                        <p> {this.state.error} </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;