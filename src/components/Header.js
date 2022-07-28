import React from 'react';
import styled from 'styled-components';
// import axios from "axios";
import { Button } from '@material-ui/core';
// import user from '../redux/modules/user'

// import { Stack } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

// import cookie from 'react-cookie'
import { getCookie } from "../shared/Cookie";
// import { actionCreators } from "../redux/modules/user";


const Header = ((props) => {
  const user = useSelector((state) => state.user)
  console.log("나야나",user)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [is_login, setIsLogin] = React.useState(false);
  
    React.useEffect(() => {

    // 쿠키를 가져오기
    let cookie = getCookie("is_login");
    // 확인
    console.log(cookie);
    // 쿠키가 있으면?
    if(cookie){
        setIsLogin(true);
    }else{
        setIsLogin(false);
    }
  });

  if(is_login){
    return (
      <div className="App">
      <Nav>
        <Logo onClick={() => {
          navigate("/")
        }} style={{ color: 'white', fontSize: '24px', cursor: "pointer" }}>FleaMarket</Logo>

        <Text>{`${user.username}`}</Text>

        {/* 로그인 후 상태 */}
        <Btngruop>
          <Button onClick={() => {
            navigate('/itemUp')
          }} style={{ color: 'white', margin: "0px 8px 0px 0px" }} variant="outlined" color="inherit">
            작성하기
          </Button>
          <Button onClick={() => {
            window.alert("로그아웃!")
            navigate("/login")
          }} style={{ color: 'white' }} variant="outlined" color="inherit">
            로그아웃</Button>
        </Btngruop>
        </Nav>
        </div>
    );
  }
  return (
    <div className="App">
      <Nav>
      <Logo onClick={() => {
          navigate("/")
        }} style={{ color: 'white', fontSize: '24px', cursor: "pointer" }}>FleaMarket</Logo>

          {/* 로그인 전 상태 */}
          <Btngruop>
          <Button onClick={() => {
                  navigate('/login')
                  }} style={{color: 'white', margin: "0px 8px 0px 0px"}} variant="outlined" color="inherit">
                  Login</Button>
                <Button onClick={() => {
                  navigate('/signup')
                }} style={{color: 'white'}} variant="outlined" color="inherit">
                  회원가입</Button>
        </Btngruop>
      </Nav>
    </div>
  );
});

const Nav = styled.div`
        background: black;
        width: 100%;
        display: Flex;
        color: white;
        font-size: 20px;
        font-weight: bold;
        justify-content: left;
        // padding-top: 40px;

`;

const Logo = styled.div`
        margin-left : 10px;
        width: 130px;
        padding: 20px;
        // background-color: red;
`

const Text = styled.div`
        display: inline-block;
        position: absolute;
        top: 25px;
        margin-right : 40px;
        text-align: right;
        right: 200px;
        width: 300px;
        color: white;
        // background-color: orange;
        font-size: 18px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        &::after{
          content: "님, 환영합니다! :)";
          font-size: 16px;
          margin-left: 5px;
        }
`;

const Btngruop = styled.div`
        display: inline-block;
        position: absolute;
        margin-right : 10px;
        top: 20px;
        right: 16px;
        width: 200px;
        color: slateblue;
        // background-color: green;
`;

export default Header;