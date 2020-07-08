import React from "react";
import { HeaderWrapper, Nav, Logo, NavItem, NavSearch, Addition, Button } from "./style.js";
import { connect } from 'react-redux'
const Header = (props) => {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo></Logo>
        <NavItem className="left">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        <NavSearch onFocus={props.handleFocus} onBlur={props.handleBlur} className={props.focused ? 'focused' : ''}></NavSearch>
        <NavItem className="right">登陆</NavItem>
        <NavItem className="right">Aa</NavItem>
      </Nav>
      <Addition> <Button className="action icon icon-pen">写文章</Button><Button className="reg">注册</Button></Addition>
    </HeaderWrapper >
  );
}
// class Header extends Component {

// }
const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
