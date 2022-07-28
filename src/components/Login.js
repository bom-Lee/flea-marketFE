import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from 'axios';

import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import cookie from 'react-cookie'
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import { actionCreators } from "../redux/modules/user";

const Login = () => {
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

  const onClickLogin = (e) => {
    const passwordDoubleCheck = (pw, pwcheck) => {
      if (setUsername == username) {
        if (pw == pwcheck) {
          e.stopPropagation();
          navigate("/");
        } else {
          alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
          navigate("/login");
        }
        axios({
          method: "POST",
          url: "http://13.209.167.96/user/login",
          headers: {
            "Accept": "application/json", //클라이언트가 서버한테 요청하는(원하는) 타입
            "Content-Type": "application/json;charset=UTF-8", //현재 서버한테 보내는 데이터 타입
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            "username": username,
            "pw": pw,
          }
        }).then((res) => {
          console.log(res);
          localStorage.setItem("name", JSON.stringify(`${username}`)); //localStorage의 텍스트형이므로 객체 json.stringfy로 변환
          sessionStorage.setItem("token", res.data);

          window.alert("정상적으로 로그인 되었습니다!")
          navigate("/");
          dispatch(actionCreators.logIn({
            username: username,
            pw: pw,
          }));
        }).catch(error => {
          console.log(error);
          window.alert("로그인 실패!");
        }
        )
      }
    };
  };

  // React.useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "http://13.209.167.96/user/login",
  //     headers: {
  //       "Accept": "application/json", //클라이언트가 서버한테 요청하는(원하는) 타입
  //       "Content-Type": "application/json;charset=UTF-8", //현재 서버한테 보내는 데이터 타입
  //       'Access-Control-Allow-Origin': '*',
  //     }
  //       .then(res => console.log(res))
  //       .catch()
  //   }, [])
  // });

  // const loginCookie = () => {
  //   setCookie("username", username, 3);
  //   setCookie("pw", pw, 3);
  //   // ("변수 이름", 변수값, 기간)
  // }



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
        >로그인
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