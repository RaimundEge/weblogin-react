import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getMessage, setUser, setMessage } from './Globals';
import Header from './Header';

class Content extends Component {

    state = {
        navigate: false
    }

    render() {
        const { navigate } = this.state;

        if (navigate) {
            return <Redirect to='/' />
        }
        function logout(e) {
            e.preventDefault();
            setUser('');
            setMessage('You have been logged out');
        }
        return (
            <div>
            <Header />
            <div className="container">
                <h3>Inside the Demo Web Application:</h3>
                <p> {getMessage()} </p>
                Here you can access our valuable content.
            <p>
                    For example, you can register new users: <Link to="/register">
                        <button><span className="glyphicon glyphicon-edit" aria-hidden="true"></span>&nbsp;Register</button></Link>
                </p>
                Or you can <button onClick={e => {logout(e); this.setState({navigate: true})}}><span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>&nbsp;Logout</button>
            </div>
            </div>
        );
    }
}

export default Content;