import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { user, setUser, setMessage } from './Globals';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
         function logout(e) {
            e.preventDefault();
            setUser('');
            setMessage('You have been logged out');             
        }
        var headerText;
        if (user === '') {
            headerText = <li >
                <Link to="/signin">
                    <span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>
                    <span>&nbsp;Sign in</span>
                </Link>
            </li>;
        } else {
            headerText = <li>
                <a onClick={e => { logout(e); this.context.router.history.push('/home') }}>
                    <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>&nbsp;Logout
                </a>
            </li>;
        }
        return (
            <div className="navbar navbar-inverse navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <strong className="navbar-brand default">React Demo</strong>
                    </div>
                    <div className="navbar-collapse nav-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/content">Content</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="navbar-text"> {user} </li>
                            {headerText}
                        </ul>
                    </div >
                </div >
            </div >
        );
    }
}

Header.contextTypes = {
    router: PropTypes.object.isRequired
}
export default Header;