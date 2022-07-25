import React from 'react';
import styled from 'styled-components';
// import axios from "axios";
import { Button } from '@material-ui/core';
// import { Stack } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Header =(() => {
    const navigate = useNavigate();

    // const Header = () => {

      const goToHome=()=>{
        navigate('/');
        }
      
      const goToLogin=()=>{
        navigate('/login');
      }
  
        const goToSignup=()=>{
        navigate('/signup');
      }

    return (
        <div className="App">
          <Nav>
            <Logo onClick={goToHome} style={{color: 'white', fontSize: '24px'}}>FleaMarket</Logo>

            <Text>봄봄</Text>

            <Btngruop>
              <Button onClick={goToLogin} style={{color: 'white', margin: "0px 8px 0px 0px"}} variant="outlined" color="inherit">
                Login</Button>
              <Button onClick={goToSignup} style={{color: 'white'}} variant="outlined" color="inherit">
                회원가입</Button>
            </Btngruop>

          </Nav>
        </div>
      );
    }
);

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
        margin-right : 30px;
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
        width: 180px;
        color: slateblue;
        // background-color: green;
`;

export default Header;