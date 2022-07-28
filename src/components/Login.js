import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from 'axios';

import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import cookie from 'react-cookie'
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import { actionCreators } from "../redux/modules/user";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [userInfo, setUserInfo] = useState({});
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");

  const [button, setButton] = useState(true);
  function changeButton() {
    username.includes("@") && pw.length >= 6
      ? setButton(false)
      : setButton(true);
  }

  const handleInputId = (e) => {
    setUsername(e.target.value)
  }

  const handleInputPw = (e) => {
    setPw(e.target.value)
  }

  const onClickLogin = () => {
    if (username === "" || pw === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      navigate("/login");
      } else {
          axios({
            method: "POST",
            url: "http://13.209.167.96/user/login",
            data: {
              "username": username,
              "pw": pw,
            }          
          }).then((res) => {
            console.log(res);
            dispatch(actionCreators.logIn({
              username: res.data.username,
              nickname: res.data.pw,
            })
            );
            const accessToken = res.data.token;
          // 쿠키에 토큰 저장
          setCookie("is_login", `${accessToken}`);
          getCookie("is_login");
          console.log(getCookie("is_login"));
          document.location.href = "/";
        }).catch((error) => {
          console.log(error);
          window.alert("로그인 실패!");
        });
    };
  };

  return (
    <>
      <Container>
        <H2>로그인</H2>
        <Input
          id="username"
          type="text"
          // onChange={(e) => {
          //   setUsername(e.target.value);
          // }}
          onKeyUp={changeButton}
          value={username}
          onChange={handleInputId}
          label="이메일"
          placeholder="이메일을 입력해주세요"
          required
        />
        <Input
          id="pw"
          type="password"
          // onChange={(e) => {
          //   setPw(e.target.value);
          // }}
          onKeyUp={changeButton}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          value={pw}
          onChange={handleInputPw}
          required
        />
        <Button
          type="button"
          onClick={onClickLogin}
        >로그인</Button>

        <P>
          회원이 아니신가요? <Link to="/signup">회원가입</Link>
        </P>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 400px;
  height: 220px;
  border: solid 1px #dadada;
  border-radius: 2em;
  margin-top: 100px;
  padding: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const H2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const P = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  border-radius: 8px;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: white;
  border: none;
  border-radius: 8px;
  background-color: black;
`;

export default Login;