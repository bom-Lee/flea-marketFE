import React from 'react';
import styled from 'styled-components';
// import axios from "axios";
import { Button } from '@material-ui/core';

import user from '../redux/modules/user'

// import { Stack } from '@material-ui/core';
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

import cookie from 'react-cookie'
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import { actionCreators as userActions } from "../redux/modules/user";


// const Header = ({ data }) => {
//   const navigate = useNavigate()
//   console.log(data)

const Header = () => {
  const user = useSelector((state) => state.user)
  console.log("나야나",user);

// const Header = (props) => {
    // const { nickname } = props.user;
    // console.log("나야나", props)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
     
  // 쿠키에 저장된 액세스 토큰이 존재할 때만 서버에 검증 요청
   if(getCookie("is_login")){
     dispatch(userActions.loginCheck());
   }
   
 }, []);

    return (
        <div className="App">
          <Nav>
            <Logo onClick={() => {
              navigate("/")
            }} style={{color: 'white', fontSize: '24px', cursor: "pointer"}}>FleaMarket</Logo>

            <Text>닉네임자리</Text>
            {/* {user.nickname} */}

            {/* 로그인 후 상태 */}
            <Btngruop>
            <Button onClick={() => {
                navigate('/itemUp')
                }} style={{color: 'white', margin: "0px 8px 0px 0px"}} variant="outlined" color="inherit">
                작성하기
                </Button>
              <Button onClick={() => {
                window.alert("로그아웃!")
                navigate("/login")
              }} style={{color: 'white'}} variant="outlined" color="inherit">
                로그아웃</Button>

              {/* 로그인 전 상태 */}
              {/* <Button onClick={() => {
                navigate('/login')
                }} style={{color: 'white', margin: "0px 8px 0px 0px"}} variant="outlined" color="inherit">
                Login</Button>
              <Button onClick={() => {
                navigate('/signup')
              }} style={{color: 'white'}} variant="outlined" color="inherit">
                회원가입</Button> */}
            </Btngruop>

          </Nav>
        </div>
      );
    }

const Nav = styled.div`
        background: black;
        width: 100%;
        // padding-top: 40px;
        color: white;
        font-size: 20px;
        font-weight: bold;
        justify-content: center;

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