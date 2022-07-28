import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from 'axios';

import cookie from 'react-cookie'
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import { actionCreators } from "../redux/modules/user";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // // 포커스를 주기 위한 useRef
  const inutRef = useRef([]); // ref 배열형태로 저장해서 여러 값을 인덱스로 컨트롤 가능

  // input value state 관리
  const [inputs, setInputs] = useState({
    username: "",
    nickname: "",
    city: "",
    pw: "",
    pwcheck: "",
  });
  const { username, nickname, city, pw, pwcheck } = inputs; // 구조분해할당

  //유효한 id, password, email 조건 변수에 담아 사용
  const regexp = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]/; // email 형식 정규표현식
  const vaildUsername = username.match(regexp);
  const vaildNickname = nickname.length >= 2 && nickname.length <= 10;
  const vaildCity =
    inputs.city.length >= 2 && inputs.city[inputs.city.length - 1] === "시";
  const vaildPw = pw.length >= 6 && pw.length <= 12;
  const vaildPwcheck = pwcheck.length >= 6 && pwcheck.length <= 12;

  // onChange 함수로 state 값 바꿔주기
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  //
  // const handleClick = async () => {
  //   if (!id || !pw) {
  //     alert("모든 값을 정확하게 입력해주세요");
  //     //
  //   } else if (username !== username) {
  //     alert("이메일체크");
  //     //
  //   } else if (pw !== pw) {
  //     alert("이메일체크");
  //     //
  //   } else {
  //     // api
  //     const { data } = await axios.post("/signup", {
  //       id: inputRef.current[0].value,
  //       pw: inputRef.current[3].value,
  //     });
  //     // console.log(date); ///{status: 200, date:{msg: 'success'}}
  //     if (data.data.msg === "success") {
  //       alert("회원가입완료");
  //       navigate("/login");
  //     } else {
  //       alert("입력이 올바르지 않아요!");
  //     }
  //   }
  // };

  // 클릭이벤트 : 유효성에 맞는 이벤트 이루어지도록
  const handleClick = (e) => {
    const passwordDoubleCheck = (pw, pwcheck) => {
      if (pw !== pwcheck) {
        alert("비밀번호가 다릅니다.");
      }
    };

<<<<<<< HEAD

=======
>>>>>>> 2cc3c8f333a6eacaf5bab6901fe4db884e842566
    if (!username || !nickname || !city || !pw || !pwcheck) {
      e.preventDefault(); // 유효성 검사를 통화했을 경우 link통해 컴포넌트 간 동동
      alert("모든 값을 정확하게 입력해주세요!");
      inutRef.current[0].focus(); // 자동 포커스
      setInputs({
        // 값 비워주기
        ...inputs,
        username: "",
        nickname: "",
        city: "",
        pw: "",
        pwcheck: "", // 바뀐 값 빼고 나머지는 그대로 스프레드 연산자
      });
    } else if (!vaildUsername) {
      e.preventDefault(); // 유효성 검사를 통화했을 경우 link통해 컴포넌트 간 동동
      alert("유효하지 않은 email 입니다.");
      inutRef.current[0].focus(); // 자동 포커스
      setInputs({
        // 값 비워주기
        ...inputs,
        username: "", // 바뀐 값 빼고 나머지는 그대로 스프레드 연산자
      });
    } else if (!vaildNickname) {
      e.preventDefault();
      alert("유효하지 않은 nickname 입니다.");
      setInputs({
        ...inputs,
        nickname: "",
      });
      inutRef.current[1].focus();
    } else if (!vaildCity) {
      e.preventDefault();
      alert("유효하지 않은 주소 입니다.");
      inutRef.current[2].focus();
      setInputs({
        ...inputs,
        city: "",
      });
    } else if (!vaildPw) {
      e.preventDefault();
      alert("유효하지 않은 password 입니다.");
      inutRef.current[3].focus();
      setInputs({
        ...inputs,
        pw: "",
      });
    } else if (!vaildPwcheck) {
      e.preventDefault();
      alert("유효하지 않은 password 입니다.");
      inutRef.current[4].focus();
      setInputs({
        ...inputs,
        pwcheck: "",
      });
    } else {
      //api 요청 만들기
      axios({
        method: "POST",
        url: "http://13.209.167.96/user/join",
        data: {
          "username": username,
          "nickname": nickname,
          "pw": pw,
          "city": city
        }
      }).then((res)=>{
        console.log(res);
        window.alert("축하합니다! 회원가입 되었습니다!")
        navigate("/login");
      }).catch(error=>{
        console.log(error);
        window.alert("회원가입 실패!");
      });
    }
  };

  return (
    <>
      <Container>
        <H2>회원가입</H2>
        <Input
          type="text"
          name="username"
          placeholder="이메일"
          value={username}
          onChange={handleChange}
          ref={(el) => (inutRef.current[0] = el)}
        />

        <Input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={nickname}
          onChange={handleChange}
          ref={(el) => (inutRef.current[1] = el)}
        />
        <Input
          type="text"
          name="city"
          placeholder="주소 OO시"
          value={city}
          onChange={handleChange}
          ref={(el) => (inutRef.current[2] = el)}
        />

        <Input
          type="password"
          name="pw"
          placeholder="비밀번호"
          value={pw}
          onChange={handleChange}
          ref={(el) => (inutRef.current[3] = el)}
        />

        <Input
          type="password"
          name="pwcheck"
          placeholder="비밀번호 확인"
          value={pwcheck}
          onChange={handleChange}
          ref={(el) => (inutRef.current[4] = el)}
        />
        {/* <Link to={`/${username}`}> */}
          <Button
            type="button"
            onClick={handleClick}
            // disabled={
            //   username.length < 1 && pw.length < 1 && username.length < 1
            // }
          >
            회원가입
          </Button>
        {/* </Link> */}
        <P>
          회원이신가요? <Link to="/login">로그인</Link>
        </P>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 400px;
  height: 360px;
  border: solid 1px #dadada;
  border-radius: 2em;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;
  padding: 50px;
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
  padding: 5px 39px 5px 10px;
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

export default Signup;