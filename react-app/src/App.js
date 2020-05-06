import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import logo from './logo.svg';
import './App.css';
import Clock from'./views/Hello'
class App extends Component {
  render() {
    return (
      <div className="App">
       <Button variant="contained" color="primary">你好世界</Button>
      <Clock />
      </div>
    )
  }
}

export default App;
