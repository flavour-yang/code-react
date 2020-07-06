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
    )
  }
}
export default App