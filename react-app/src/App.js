import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
// import logo from './logo.svg';
import './App.css';
import Login from './views/login'
import { Router, Route,  } from 'react-router'


import Hello from './views/Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <li><Link to="/login">About</Link></li>
        <li><Link to="/hello">Inbox</Link></li> */}
      </div>
    )
  }
}

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/hello" component={Hello} />
    </Route>
  </Router>
), document.body)
export default App;
