import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import { user } from './Globals';
import Home from './Home';
import Content from './Content';
import Signin from './Signin';
import Register from './Register';
import Footer from './Footer';

function EnsureSignedIn(props) {
  if (user !== '') {
    return (<Content />)
  }
  else {
    return (<Home />)
  }
}

class App extends Component {
  render() {
    return (
      <Router basename='/DemoReact'>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/content" component={EnsureSignedIn} />
          <Route path="/signin" component={Signin} />
          <Route path="/register" component={Register} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
