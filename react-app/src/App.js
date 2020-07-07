<<<<<<< HEAD
import React, { Component, Fragment } from "react";
import { GlobalStyle } from './reset.js'
import Header from './common/header'
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <div>
          <Header></Header>
        </div>
      </Fragment>
=======
import React,{Component} from "react";
import Header from './common/header'
class App extends Component{
  render(){
    return(
      <div>
        <Header></Header>
      </div>
>>>>>>> e642245b4de6b5a7e575677fe6971ef10dbeab14
    )
  }
}
export default App