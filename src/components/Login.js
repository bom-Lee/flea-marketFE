import React, { useRef, useState } from "react";
import styled from "styled-components";

import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/user";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");

  const [button, setButton] = useState(true);
  function changeButton() {
    username.includes("@") && pw.length >= 6
      ? setButton(false)
      : setButton(true);
  }

  const goToMain = () => {
    navigate("/");
  };

  const realUsername = "kiki@naver.com";
  const realPw = "12345678";

  const dispatch = useDispatch();
  const [user_info, setUserInfo] = useState({});

  // const login = () => {
  //   dispatch(LoginSV(user_info));
  // };

  return (
    <>
      <Container>
        <H2>로그인</H2>
        <Input
          id="username"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onKeyUp={changeButton}
          value={username}
          // onChange={handleChange}
          label="이메일"
          placeholder="이메일을 입력해주세요"
          required
        />
        <Input
          id="pw"
          type="password"
          onChange={(e) => {
            setPw(e.target.value);
          }}
          onKeyUp={changeButton}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          value={pw}
          // onChange={handleChange}
          required
        />
        <Button
          type="button"
          className="loginButton"
          disabled={button}
          onClick={(e) => {
            if (realUsername == username) {
              if (realPw == pw) {
                e.stopPropagation();
                goToMain();
              }
            } else {
              alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
            }
          }}
        >
          로그인
        </Button>
        <P>
          회원이 아니신가요? <Link to="/signup">회원가입</Link>
        </P>
      </Container>
    </>
  );
};

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

const Button = styled.div`
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