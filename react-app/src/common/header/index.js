<<<<<<< HEAD
import React, { Component } from "react";
import { HeaderWrapper, Nav, Logo, NavItem, NavSearch } from "./style.js";
class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Nav>
          <Logo></Logo>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavSearch></NavSearch>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">Aa</NavItem>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header;
=======
import React, { Component } from 'react';
import { HeaderWrapper } from './style.js'
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>header</HeaderWrapper>
        );
    }
}


export default Header;
>>>>>>> e642245b4de6b5a7e575677fe6971ef10dbeab14
