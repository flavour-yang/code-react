import styled from "styled-components";
import logo from "../../static/logo.png";
export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
  float: left;
  height: 56px;
  padding: 0;
  width: 100px;
  background: url(${logo}) center / cover;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  &.left{
    float: left;
  }
  &.right{
    float: right;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  margin-top: 9px;
  border: none;
  box-sizing: border-box;
  outline: none;
  background-color: #eee;
  border-radius: 19px;
  font-size: 14px;
  &::placeholder{
    color: #999;
  }
`
// export const 