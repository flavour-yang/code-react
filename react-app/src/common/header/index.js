import React, { Component } from "react";
import { HeaderWrapper, Nav, Logo, NavItem, NavSearch, Addition, Button } from "./style.js";
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
        <Addition> <Button className="action icon icon-pen">写文章</Button><Button className="reg">注册</Button></Addition>

      </HeaderWrapper>
    );
  }
}

export default Header;
