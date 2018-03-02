import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMessage, user } from './Globals';
import Header from './Header';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { user: '' };
    }

    render() {
        var bodyText;
        if (user === '') {
            bodyText = <p>
                To access our valuable content you need to &nbsp;
                <Link to="/signin">
                    <button>
                        <span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>&nbsp;Sign in</button>
                </Link>
            </p>;
        } else {
            bodyText = <p>
                You can proceed to our valuable content &nbsp;
                <Link to="/content">
                    <button>content</button>
                </Link>
            </p>;
        }
        return (
            <div>
            <Header />
            <div className="container">
                <h3 className="display-3">Welcome to the Demo Web Application:</h3>
                <p> { getMessage() } </p>
                <div>

                    { bodyText }

                </div>
            </div >
            </div>
        );
    }
}

export default Home;