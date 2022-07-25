import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  // 포커스를 주기 위한 useRef
  const inutRef = useRef([]); // ref 배열형태로 저장해서 여러 값을 인덱스로 컨트롤 가능

  // input value state 관리
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
    email: "",
  });
  const { id, password, email } = inputs; // 구조분해할당

  //유효한 id, password, email 조건 변수에 담아 사용
  const vaildId = id.length >= 3 && id.length <= 10;
  const vaildPassword = password.length >= 12 && password.length <= 20;
  const regexp = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]/; // email 형식 정규표현식
  const vaildEmail = email.match(regexp);

  // onChange 함수로 state 값 바꿔주기
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // 클릭이벤트 : 유효성에 맞는 이벤트 이루어지도록
  const handleClick = () => {
    if (!vaildId) {
      alert("유효하지 않은 nickname 입니다."); // 알람창
      setInputs({
        // 값 비워주기
        ...inputs,
        id: "", // 바뀐 값 빼고 나머지는 그대로 스프레드 연산자
      });

      inutRef.current[0].focus(); // 자동 포커스
    } else if (!vaildPassword) {
      alert("유효하지 않은 password 입니다.");
      inutRef.current[1].focus();
      setInputs({
        ...inputs,
        password: "",
      });

    } else if (!vaildEmail) {
      alert("유효하지 않은 email 입니다.");
      inutRef.current[2].focus();
      setInputs({
        ...inputs,
        email: "",
      });

    } else {
      return alert("회원가입 완료!");
    }
  };

  return (
    <>
      <Container>
        <H2>회원가입</H2>
        <Input
          type="text"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={handleChange}
          ref={(el) => (inutRef.current[2] = el)}
        />

        <Input
          type="text"
          name="id"
          placeholder="닉네임"
          value={id}
          onChange={handleChange}
          ref={(el) => (inutRef.current[0] = el)}
        />
        <Input
          type="text"
          name="password"
          placeholder="주소 OO시"
          value={password}
          onChange={handleChange}
          ref={(el) => (inutRef.current[1] = el)}
        />

        <Input
          type="text"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={handleChange}
          ref={(el) => (inutRef.current[1] = el)}
        />

        <Input
          type="text"
          name="password"
          placeholder="비밀번호 확인"
          value={password}
          onChange={handleChange}
          ref={(el) => (inutRef.current[1] = el)}
        />

        <Button
          type="button"
          onClick={handleClick}
          disabled={id.length < 1 && password.length < 1 && email.length < 1}
        >
          회원가입
        </Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 400px;
  height: 350px;
  border: solid 1px #dadada;
  display: inline-block;
  margin-top: 100px;
  padding: 30px;
`;

const H2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const P = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 15px;
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
  color: slateblue;
  border: none;
  border-radius: 8px;
  background-color: black;
`;

export default Signup;
